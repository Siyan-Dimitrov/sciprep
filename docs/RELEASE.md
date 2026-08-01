# Android release

How a SciPrep build gets from this repository to Google Play.

The Android project is a Capacitor wrapper around the static export of
`apps/web`. There is no server, no login and no analytics, so a release is
purely: build the web app, sync it into `android/`, sign, upload.

## 1. One-time: create the upload keystore

Play requires an App Bundle signed with an **upload key**. If the upload key is
lost, the only recovery is asking Google to reset it; if it leaks, anyone can
push an update to `com.sciprep.app`. Treat it like a password, not like a file.

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"

# Generate outside the working tree. 10000 days ~= 27 years; Play requires the
# key to stay valid past 22 October 2033.
& "$env:JAVA_HOME\bin\keytool.exe" -genkeypair -v `
    -keystore "$env:USERPROFILE\keys\sciprep-upload.jks" `
    -alias sciprep-upload `
    -keyalg RSA -keysize 2048 -validity 10000
```

`keytool` prompts for the keystore password, the key password and a
distinguished name (`CN`, `OU`, `O`, `L`, `ST`, `C`). Any sensible values work;
they are not shown to users.

Then point the build at it:

```powershell
Copy-Item android\app\keystore.properties.example android\app\keystore.properties
```

and edit `android/app/keystore.properties`:

```properties
storeFile=C:/Users/<you>/keys/sciprep-upload.jks
storePassword=...
keyAlias=sciprep-upload
keyPassword=...
```

Use forward slashes — the file is read by `java.util.Properties`, which treats
a backslash as an escape character.

`keystore.properties`, `*.jks` and `*.keystore` are gitignored. Back the
keystore and its passwords up somewhere durable and private (a password
manager); losing them is unrecoverable in a way losing this repository is not.

**If `keystore.properties` is absent the release build still succeeds, but the
bundle is unsigned.** That is deliberate. It is never signed with the debug
key, because a debug-signed artifact looks fine locally and is rejected only at
upload time — an unsigned one fails loudly and immediately.

You can confirm which state you are in:

```powershell
& "$env:JAVA_HOME\bin\jarsigner.exe" -verify `
    android\app\build\outputs\bundle\release\sciprep-release.aab
# "jar is unsigned."  -> no keystore was picked up
# "jar verified."     -> signed with the upload key
```

## 2. Per-release procedure

1. **Bump the version.** Edit `android/app/version.properties` — it is the only
   place the version lives.

   ```properties
   versionCode=2
   versionName=1.0.1
   ```

   `versionCode` must increase by at least 1 for every artifact uploaded to
   Play and can never be reused or lowered. `versionName` is the string shown
   in the listing.

2. **Validate the source.** `npm run check` (lint, typecheck, tests, content
   schema validation, web build).

3. **Build the bundle.**

   ```powershell
   $env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
   $env:ANDROID_HOME = "C:\Users\<you>\AppData\Local\Android\Sdk"
   npm run android:bundle
   ```

   This runs `npm run mobile:sync` (web build + `cap sync android`) and then
   `gradlew.bat bundleRelease`. Output:

   - bundle — `android/app/build/outputs/bundle/release/sciprep-release.aab`
   - mapping — `android/app/build/outputs/mapping/release/mapping.txt`

4. **Verify the signature** with the `jarsigner -verify` command above. It must
   say `jar verified`. A self-signed upload key also produces "certificate
   chain is invalid" and "certificate is self-signed" warnings — those are
   expected and not a problem.

5. **Test the minified build on a device** — see section 3. Do not skip this;
   the debug build exercises none of the R8 code path.

6. **Upload** `sciprep-release.aab` to Play Console, and upload `mapping.txt`
   alongside it (App bundle explorer → the release → Downloads → ReTrace
   mapping file) so crash reports deobfuscate.

7. **Tag the commit** so the uploaded `versionCode` is traceable back to a
   source revision.

## 3. What to re-test on a minified build

The release build sets `minifyEnabled true`, so R8 shrinks and obfuscates the
Java side. Capacitor is the risk: `PluginManager` resolves plugin classes with
`Class.forName` on strings from `assets/capacitor.plugins.json`, and
`PluginHandle` then calls `getDeclaredConstructor().newInstance()` and scans
`getMethods()` for the `@PluginMethod` annotation. R8 sees none of those
references. `android/app/proguard-rules.pro` keeps the bridge, everything
extending `com.getcapacitor.Plugin`, the Capacitor annotations, and every
`@JavascriptInterface` method. A gap in those rules produces a build that
compiles and installs cleanly and then fails only at runtime, only in release.

So after `bundleRelease`, install the release artifact — not the debug APK —
and check:

- **The app launches past the splash screen and renders the web view.** A blank
  or white screen after the splash is the signature failure mode of a stripped
  bridge. Check logcat for `PluginLoadException`, `InvalidPluginException`,
  `ClassNotFoundException` or `Could not find class by class path`.
- **Navigation works** — home → course → a lesson → back. This exercises the
  local asset server (`WebViewLocalServer`), which is on the reflective path.
- **Progress survives a restart.** Kill the app and reopen it; whatever
  progress state the web app persists must still be there.
- **Nothing regressed visually.** Resource shrinking is off, so this is
  unlikely, but the safe-area/status-bar handling in Capacitor's `SystemBars`
  plugin is reflective and worth a glance on a device with a notch.
- **Airplane mode.** The app is offline by design; confirm it behaves the same
  with no network.

To install the bundle on a device, convert it with
[bundletool](https://developer.android.com/tools/bundletool):

```powershell
java -jar bundletool.jar build-apks `
    --bundle=android\app\build\outputs\bundle\release\sciprep-release.aab `
    --output=sciprep.apks --mode=universal `
    --ks=$env:USERPROFILE\keys\sciprep-upload.jks --ks-key-alias=sciprep-upload
java -jar bundletool.jar install-apks --apks=sciprep.apks
```

Alternatively run `cd android; .\gradlew.bat assembleRelease` for an installable
APK built through the identical R8 configuration.

If something does break, reproduce it before changing the keep rules:
`android/app/build/outputs/mapping/release/` also contains `seeds.txt` (what was
kept) and `usage.txt` (what was removed) — the missing class will be in
`usage.txt`.

## 4. Owner-only checklist

Everything below needs the Play developer account and cannot be done from this
repository.

- [ ] **Play Developer account.** One-time 25 USD registration. Personal
      accounts require identity verification (government ID, address); allow
      several days.
- [ ] **Closed testing before production.** Personal developer accounts created
      after 13 November 2023 must run a closed test with **at least 12 testers
      opted in continuously for 14 days** before they can even apply for
      production access; the application review then takes up to about a week.
      "Opted in" means the tester accepted the invite and installed the app —
      invited-but-not-installed does not count. Organisation accounts, and
      personal accounts older than that date, are exempt. Recruit the 12 testers
      *before* starting the 14-day clock; losing testers partway resets it.
- [ ] **App signing.** Opt in to Play App Signing at first upload (the default).
      Google then holds the app signing key and the `.jks` above is only the
      upload key — which means a lost upload key is recoverable.
- [ ] **Store listing assets.**
  - App name, short description (80 chars), full description (4000 chars)
  - App icon, 512×512 PNG
  - Feature graphic, 1024×500
  - At least 2 phone screenshots (Play wants 4–8); 7-inch and 10-inch tablet
    screenshots if the app is listed as tablet-supported
  - Category, contact email, external listing URL if any
- [ ] **Privacy policy.** Required for every app, at a public URL, even one that
      collects nothing. It must state plainly that SciPrep stores progress only
      on the device and transmits nothing.
- [ ] **Data safety form.** Declare no data collection and no data sharing. It
      must match the privacy policy and the app's actual behaviour.
- [ ] **Content rating questionnaire** (IARC) — educational content, no ads, no
      user-generated content, no purchases.
- [ ] **Ads declaration** — none.
- [ ] **Target audience and content** — declare whether under-13s are a target
      audience; if not, say so, since that avoids the Families policy programme.
- [ ] **Government apps / financial features declarations** — not applicable,
      but the forms still have to be answered.
- [ ] **Third-party content.** SciPrep must ship only original material. Do not
      upload a build containing any purchased or licensed exam content.

## Reference: what the build does

| Concern | Where |
| --- | --- |
| Version (single source of truth) | `android/app/version.properties` |
| Signing credentials (gitignored) | `android/app/keystore.properties` |
| Template for the above | `android/app/keystore.properties.example` |
| Signing config, `minifyEnabled` | `android/app/build.gradle` |
| R8 keep rules | `android/app/proguard-rules.pro` |
| SDK levels | `android/variables.gradle` |
| Build entry point | `npm run android:bundle` |

`android/variables.gradle` currently sets `minSdkVersion 24`,
`compileSdkVersion 36` and `targetSdkVersion 36`. From 31 August 2026 Play
requires new apps and updates to target Android 16 (API 36), so the project
already meets the requirement and needs no change.
