# Google Play Console declarations — answer sheet

**App:** SciPrep · **Application ID:** `com.sciprep.app` · **versionName** `1.0.0`, **versionCode** `1`
(`android/app/version.properties:9-10`)

**Prepared:** `[DATE PREPARED]` · **Prepared against commit:** `[GIT SHA]`

This is a fill-in answer sheet for four Play Console flows: **Data safety**,
**Content rating (IARC)**, **Ads**, and **Target audience and content**. Every
answer below is derived from the code as it actually stands, and each carries a
`file:line` citation so a reviewer — or you, in six months — can re-verify it.

> **How to use this.** Work top to bottom in the Console. Where an answer is
> settled by the code, it is marked **ANSWER**. Where the code cannot settle it
> and you must decide, it is marked **OWNER DECISION** and appears again in the
> checklist at the end. Do not submit until every OWNER DECISION is resolved.

> **Re-verify before every release.** These answers are only true for a build
> with no network permission and no plugins. If a future release adds an SDK, a
> Capacitor plugin, analytics, or the `INTERNET` permission, several answers
> below flip and the Data safety form must be resubmitted.

---

## Part 0 — The evidence base

Seven findings underpin nearly every answer in this document.

### 0.1 The app has no `INTERNET` permission — in the release build

The hand-written manifest declares **no `<uses-permission>` elements at all**:
`android/app/src/main/AndroidManifest.xml:1-38` (the file opens `<manifest>` at
line 2 and goes straight into `<application>` at line 4).

Permissions can also be injected by library manifests during the merge, so the
merged output is the authoritative artefact. Both the debug and the **release**
merged manifests contain exactly one `<uses-permission>`, and it is not
`INTERNET`:

- `android/app/build/intermediates/merged_manifest/release/processReleaseMainManifest/AndroidManifest.xml:15`
  — `<uses-permission android:name="com.sciprep.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION" />`
- Same single line in the debug merge
  (`android/app/build/intermediates/merged_manifest/debug/processDebugMainManifest/AndroidManifest.xml:15`)
  and in the packaged and bundle manifests
  (`.../packaged_manifests/release/processReleaseManifestForPackage/AndroidManifest.xml:15`,
  `.../bundle_manifest/release/processApplicationManifestReleaseForBundle/AndroidManifest.xml:15`).

That permission is a `signature`-level, self-declared permission
(`.../merged_manifest/release/.../AndroidManifest.xml:11-13`) that AndroidX
auto-generates so its own components can register non-exported broadcast
receivers. It grants no access to anything outside the app and no access to the
network.

A grep for `INTERNET` across **all five** merged manifest variants (debug and
release, plus the `merged_manifests`, `packaged_manifests` and `bundle_manifest`
outputs) returns **zero matches**.

**Why this matters more than any code review.** Android enforces
`android.permission.INTERNET` at the operating-system level: without it the
process is not placed in the `AID_INET` group and cannot open a socket at all.
The app is therefore not merely *choosing* not to transmit data — it is
*incapable* of transmitting data, whatever the web code inside it might contain.
That converts "we searched and found no network code" into "network access is
impossible by construction", which is the strongest form of evidence available
for a "no data collected" declaration. It is verifiable by anyone who unzips the
shipped AAB or APK.

One related item, flagged for honesty because a reviewer may notice it:
`android/app/src/main/res/xml/config.xml:3` contains the stock Cordova whitelist
line `<access origin="*" />`. That is a permissive *upper bound* on what the
WebView would be allowed to load — it grants nothing on its own, and with no
`INTERNET` permission and no Cordova plugins installed it has no effect. It is
scaffolding, not a capability.

### 0.2 Capacitor's own runtime adds no permissions

`node_modules/@capacitor/android/capacitor/src/main/AndroidManifest.xml` is an
empty `<manifest>` element with no children — the Capacitor Android runtime
contributes nothing to the merge.

### 0.3 Zero Capacitor plugins are installed

- `android/capacitor.settings.gradle:2-3` includes exactly one project,
  `:capacitor-android` (the core runtime). No plugin modules.
- `android/app/capacitor.build.gradle` has an **empty** `dependencies { }` block.
- `android/capacitor-cordova-android-plugins/build.gradle` has nothing between
  its `// SUB-PROJECT DEPENDENCIES START` and `END` markers.
- The generated plugin registry shipped inside the APK,
  `android/app/src/main/assets/capacitor.plugins.json`, is the literal string `[]`.
- Root `package.json:14-20` declares only `@capacitor/android`, `@capacitor/core`
  and the `@capacitor/cli` dev dependency. No `@capacitor/camera`,
  `@capacitor/geolocation`, `@capacitor/push-notifications`,
  `@capacitor/preferences`, or any other plugin.

So there is no plugin bridging to the camera, microphone, location, contacts,
filesystem, clipboard, push notifications, or device identifiers. `MainActivity`
is a bare `BridgeActivity` with an empty body
(`android/app/src/main/java/com/sciprep/app/MainActivity.java`).

### 0.4 The bundled Android dependency set contains no data-collecting SDK

`android/app/build.gradle` declares, in full: `androidx.appcompat`,
`androidx.coordinatorlayout`, `androidx.core:core-splashscreen`, the
`:capacitor-android` project, the (empty) `:capacitor-cordova-android-plugins`
project, and `junit` / `androidx.test` / `espresso` as **test-only**
configurations that are not packaged into a release artefact.

There is **no** Google Play Services, Firebase, Crashlytics, AdMob, Google
Mobile Ads, Facebook/Meta SDK, AppsFlyer, Adjust, OneSignal, Segment, Amplitude,
Mixpanel, PostHog, Sentry, or Bugsnag anywhere in the dependency graph.

**One item to watch, though it is currently inert.** `android/build.gradle:11`
puts `com.google.gms:google-services:4.4.4` on the **buildscript classpath**, and
`android/app/build.gradle` ends with a `try` block that applies the
`com.google.gms.google-services` plugin *only if* `android/app/google-services.json`
exists. That file **does not exist** (verified: no such file), so the plugin is
never applied and no Firebase code is linked in. This is stock Capacitor
scaffolding. It is harmless today, but it is exactly the kind of latent switch
that would silently turn this app into a data-collecting one if someone later
drops a `google-services.json` into the project. Treat it as a tripwire.

> **OWNER DECISION (low risk, recommended):** consider deleting the
> `google-services` classpath entry and the conditional `apply plugin` block so
> that adding Firebase becomes a deliberate act rather than a side effect of
> copying in a config file. Not required for this submission.

### 0.5 The only data storage is one `localStorage` key, and it never leaves the device

`apps/web/components/learner-provider.tsx:20` defines the single storage key:

```
const storageKey = "sciprep.learner-progress.v1";
```

It is written at `learner-provider.tsx:38`
(`window.localStorage.setItem(storageKey, JSON.stringify(progress))`), read at
`learner-provider.tsx:47`, and cleared at `learner-provider.tsx:55`. A repo-wide
grep of `apps/web/{app,components,lib,test}` for `localStorage`,
`sessionStorage`, `indexedDB`, `document.cookie` and Capacitor `Preferences`
returns hits at those three lines and nowhere else.

The stored shape is defined at `apps/web/lib/progress.ts:19-25`:

| Field | Source | Contents |
| --- | --- | --- |
| `lessonVisits` | `progress.ts:7-11`, written `learner-provider.tsx:72-113` | `blockIndex`, `lastVisitedAt`, optional `completedAt` |
| `checkResults` | `progress.ts:1-5`, written `learner-provider.tsx:115-136` | `correct`, `attempts`, `answeredAt` |
| `notes` | `progress.ts:23`, written `learner-provider.tsx:138-149` | **free text the learner typed** |
| `reviews` | `progress.ts:13-17`, written `learner-provider.tsx:151-171` | `dueAt`, `intervalDays`, `lastReviewedAt` |

`emptyProgress` (`progress.ts:27-33`) confirms there are no other fields. There
is no user ID, device ID, name, email, or timestamp of install. The only
timestamps are per-lesson activity times, and they exist solely to drive the
spaced-review schedule (`progress.ts:75-79`, `learner-provider.tsx:156`).

### 0.6 No accounts, no server, no payments

No sign-in, registration, password, OAuth, token, session, billing, IAP, or
payment code exists anywhere in the repo. The app's own project documentation
puts payments explicitly out of scope for this release
(`docs/implementation-plan.md:84` — "public payments or subscriptions" under
"Explicitly deferred"). Capacitor serves the bundled site from the on-device
WebView origin `https://localhost`
(`apps/web/components/native-entry-router.tsx:11-13`), which is a local asset
server, not a network host. All 623 files of the course are bundled into
`android/app/src/main/assets/public/`.

### 0.7 The shipped web bundle contains no fetchable external URL — including for fonts

The Android permission (§0.1) already makes network access impossible. But the
web payload was audited independently, because a "no data collected" claim
should survive even if someone later adds the `INTERNET` permission for an
unrelated reason.

**No network APIs in app source.** A sweep of all 44 source files in
`apps/web/{app,components,lib,test}`, `apps/web/next.config.ts`, `packages/` and
`capacitor.config.ts` for `fetch(`, `XMLHttpRequest`, `axios`,
`navigator.sendBeacon`, `WebSocket`, `EventSource`, remote `import()`, and
`new Image().src` returns **zero matches**. The `fetch(` occurrences in the built
bundle are all framework-internal: Next.js App Router prefetch code that is
explicitly same-origin (`fetch(h,{credentials:"same-origin",…})` and
`new URL(r+n,location.origin)`), satisfied from the 530 `.txt` route payloads
shipped inside the APK; a Turbopack `.wasm` loader that is dead code because no
`.wasm` file exists in the export; and two occurrences inside error-message
string literals.

**Fonts are inlined at build time — verified, not assumed.** This was the item
most likely to hide a runtime request, because `next/font/google` *is* used:
`apps/web/app/layout.tsx:2` imports `DM_Sans` and `Newsreader` from
`next/font/google`, instantiated at `layout.tsx:8-11` and `:13-16`. Next.js
downloads those files at build time and self-hosts them. The build output
confirms it did so here:

- Five `.woff2` files sit in `apps/web/out/_next/static/media/`.
- The built stylesheet `apps/web/out/_next/static/chunks/14p7ua2lc93m7.css`
  contains seven `@font-face` rules, every `src` a **relative local path** —
  e.g. `src:url(../media/c3cb240f9c892514-s.3z_x6eowsw16y.woff2)format("woff2")`
  — plus two zero-network fallbacks (`src:local(Arial)`,
  `src:local(Times New Roman)`).
- `apps/web/out/index.html` preloads them from `/_next/static/media/…` with **no
  `<link rel="preconnect">` to any Google host**.
- Grepping the **entire** `out/` directory (62 `.html`, 21 `.js`, 1 `.css`, 530
  `.txt`, the webmanifest and the icon) for `fonts.googleapis.com`,
  `fonts.gstatic.com` and `googleapis` returns **zero matches**.

**No external endpoint survives anywhere in the bundle.** Every `http(s)://`
literal remaining in the shipped payload was enumerated and classified: 32
`nextjs.org` documentation links inside error strings, 19 `w3.org` XML namespace
URIs (SVG, MathML, xlink), 2 `react.dev` error-decoder links, 2 `github.com`
core-js licence comments, and 8 synthetic parser test literals (`https://a`,
`https://x`, `http://n`) used by core-js feature detection. **None is a fetchable
endpoint.** No `<script src="http…">`, no `<link href="http…">`, no `<iframe>`,
no CDN reference, and no service worker exist in any built HTML.

**No remote-content configuration.** `apps/web/next.config.ts:1-12` is the whole
file: `images.unoptimized: true` (so the image optimizer is off and there are no
`remotePatterns` or `domains`), `output: "export"`, `trailingSlash`,
`typedRoutes`. There are no `rewrites`, `redirects`, or `headers` keys at all.
`apps/web/app/manifest.ts:5-24` is entirely local — `start_url: "/today/"` and a
single `/icon.svg`.

**No environment-driven backend.** Zero matches for `process.env` or
`NEXT_PUBLIC_` in application source, and no `.env` file exists in the repo.

---

## Part 1 — Data safety form

Play Console → **Policy → App content → Data safety**.

### 1.1 Gate question: does your app collect or share any of the required user data types?

**ANSWER: No.**

Play defines *collected* as "data transmitted off the user's device", and
*shared* as "transferred to a third party". Neither can occur:

- Nothing is transmitted, because the app has no `INTERNET` permission in the
  release merged manifest (§0.1) — transmission is blocked by the OS, not merely
  absent from the code.
- No third-party SDK collects on the app's behalf, because the only bundled
  libraries are the Capacitor runtime and three AndroidX UI libraries, and there
  are zero Capacitor plugins (§0.2–§0.4).
- Independently of the permission, the shipped web bundle contains no network
  call and no fetchable external URL — the Google fonts are self-hosted at build
  time and `fonts.googleapis.com` / `fonts.gstatic.com` appear zero times in the
  export (§0.7).
- The learner's progress and notes stay in one `localStorage` key in the app's
  private sandbox (§0.5).

> **This is the question a sibling project got wrong.** The failure mode is
> declaring "no data collected" while an ads or analytics SDK quietly collects
> on the app's behalf — Play holds the developer responsible for SDK behaviour.
> The check has been run explicitly here: the full Android dependency list is
> enumerated at §0.4, the Capacitor plugin registry is `[]` (§0.3), and the
> merged **release** manifest is permission-free (§0.1). The conclusion is
> supported, not assumed.

Answering "No" ends the Data safety questionnaire — the per-type matrix does not
appear. The remaining subsections record why, so you can answer follow-ups and
re-verify at the next release.

### 1.2 Data types — for the record

| Play data category | Collected? | Evidence |
| --- | --- | --- |
| Location (approximate / precise) | No | No location permission (§0.1); no geolocation plugin (§0.3) |
| Personal info (name, email, user IDs, address, phone, race/ethnicity, political or religious beliefs, sexual orientation) | No | No account system (§0.6); stored shape has no such field (`apps/web/lib/progress.ts:19-25`) |
| Financial info | No | No billing or payment code anywhere (§0.6) |
| Health and fitness | No | The app records no health data about the learner. Physiology is taught as academic content — see §2.6 |
| Messages | No | No messaging feature; no user-to-user path |
| Photos and videos | No | No camera plugin, no media permission |
| Audio (voice, sound recordings, music) | No | No microphone permission or plugin |
| Files and docs | No | No storage permission; no file picker |
| Calendar | No | No calendar permission or plugin |
| Contacts | No | No contacts permission or plugin |
| App activity (interactions, search history, installed apps, other user-generated content) | **Stored on device only, never collected** | Lesson position, check answers, review schedule and **free-text notes** are written to `localStorage` (`learner-provider.tsx:38`) and never transmitted (§0.1). Play counts on-device-only processing as *not collected*. |
| Web browsing history | No | Single-purpose offline app; no browser |
| App info and performance (crash logs, diagnostics, performance) | No | No crash reporter or performance SDK (§0.4) |
| Device or other IDs | No | No advertising ID, no `getAdvertisingIdInfo`, no Play Services (§0.4) |

### 1.3 The free-text notebook, specifically

This is the most sensitive category in the app and deserves an explicit record.

Every lesson exposes a free-text notebook (`apps/web/components/lesson-player.tsx:163-181`,
a `<textarea>` saved on blur at line 176), and a Notebook screen lists all of
them (`apps/web/app/(learner)/notebook/page.tsx:42-58`). The text is stored
verbatim under `notes[lessonId]` (`learner-provider.tsx:138-149`).

Play would classify free-form learner text as **"Other user-generated content"**
under *App activity* — **if it were collected**. It is not: it is written to
`localStorage` and there is no code path, and no OS permission, that could send
it anywhere.

Two consequences worth carrying into the privacy policy (both are handled in
`docs/PRIVACY_POLICY.md` §3.1):

1. Because the field is free text, the learner — not the developer — controls
   whether anything sensitive ends up in it. The honest treatment is to say so
   and advise against putting personal information there, rather than to claim
   the app can prevent it.
2. Because nothing is transmitted and Android backup is disabled (§1.5), notes
   have **no backup at all**. A global reset or an uninstall destroys them
   irrecoverably. The policy warns about this.

### 1.4 Deletion, and the two different reset behaviours

Play asks whether users can request data deletion. Because nothing is collected,
there is no server-side deletion request to support — but the app does provide
real on-device erasure, which is worth describing in the listing.

**Global reset — erases everything, including notes.**
`apps/web/app/(learner)/progress/page.tsx:80-99` renders a "Reset local
progress" button behind a `window.confirm("Remove all locally saved SciPrep
progress?")` prompt (line 92) that calls `resetProgress()` (line 93). That handler
(`learner-provider.tsx:198-201`) persists `emptyProgress` and sets it as state;
since `emptyProgress.notes` is `{}` (`apps/web/lib/progress.ts:27-33`), **the
notebook is wiped too**. The on-screen copy states this accurately: "Resetting
removes lessons, checks, reviews, and notes from this device"
(`progress/page.tsx:84-86`).

**Per-lesson reset — deliberately preserves notes.**
`resetLesson()` (`learner-provider.tsx:173-196`) removes the lesson's entry from
`lessonVisits`, `checkResults` and `reviews`, and rebuilds the object *without*
touching `notes`. The reason is stated in a comment at `learner-provider.tsx:189-191`:

```
// Notes are the learner's own writing, so a lesson reset leaves them
// alone. Only the position, the check answers, and the review schedule
// are cleared.
```

The confirmation dialog tells the learner this before it happens
(`apps/web/components/lesson-player.tsx:230`): "This clears your answers and
position for this lesson. Your notes are kept."

**Assessment: the behaviour is correct and correctly disclosed in-app.** The
narrow-reset-preserves / global-reset-destroys split is the right default, and
both prompts describe what will actually happen. No change needed.

### 1.5 Data in transit, backup, and the security section

- **Encryption in transit:** not applicable — there is no transit. If the
  Console requires an answer, the honest one is that no data is transmitted, so
  the question does not apply. Do **not** claim data is "encrypted in transit",
  which would imply transmission occurs.
- **Android backup is off:** `android:allowBackup="false"`
  (`android/app/src/main/AndroidManifest.xml:5`, carried into the release merge
  at `.../merged_manifest/release/processReleaseMainManifest/AndroidManifest.xml:18`).
  Progress and notes are therefore not copied into Google's Android Backup
  service or restored onto a new device.
- **No cleartext / network security config:** no `networkSecurityConfig` or
  `usesCleartextTraffic` attribute exists anywhere in the Android sources, and
  `capacitor.config.ts:9` sets `allowMixedContent: false`.
- **FileProvider:** the manifest declares an AndroidX `FileProvider`
  (`AndroidManifest.xml:27-35`) with `android:exported="false"`, pointing at
  `res/xml/file_paths.xml`. This is stock Capacitor scaffolding; with no plugins
  installed nothing ever uses it. It is not exported, so it exposes nothing.

### 1.6 Privacy policy URL

Play requires a publicly reachable privacy policy URL entered in **both** the
store listing and the Data safety form.

> **OWNER DECISION:** host `docs/PRIVACY_POLICY.md` at a stable public URL (a
> GitHub Pages site or any static host is sufficient), fill in every
> `[PLACEHOLDER]` in it first, and paste the same URL into both Console fields.
> The URL must not require a login and must not expire.

---

## Part 2 — Content rating questionnaire (IARC)

Play Console → **Policy → App content → Content ratings**.

### 2.1 Category

**ANSWER: Reference, News, or Educational** (choose *Education* if offered as a
distinct option). The app is a structured chemistry/physics/biology course:
`apps/web/app/manifest.ts:7-10`, `README.md:3-4`.

Do **not** select *Game*. There is no scoring economy, no reward loop, no
leaderboard, and no chance mechanic; progress is reported with descriptive
labels only (`apps/web/lib/progress.ts:52-73`).

### 2.2 Violence, blood, and injury

**ANSWER: No** to violence, realistic violence, blood, gore, and depictions of
injury or death.

The content was swept for this. There are no matches at all for `war`, `bomb`,
`weapon`, `gun`, `wound`, or `trauma` in any lesson file. The three items a
scrupulous reader might raise, and why each is a "No":

- **Crash physics.** `apps/web/lib/lessons/physics-mechanics.ts:627` poses an
  impulse problem: a 70 kg occupant brought to rest in 0.050 s against a
  dashboard versus 0.30 s with an airbag. The explanation at
  `physics-mechanics.ts:655` notes 21 kN is "consistent with severe injury" while
  3.5 kN is survivable. This is a safety-engineering argument for airbags, in
  prose, with no depiction of an incident.
- **A historical toxicology note.** `apps/web/lib/lessons/biology-cell.ts:1194`
  — "Dinitrophenol, sold as a slimming agent in the 1930s, killed people by
  hyperthermia." One sentence of history illustrating uncoupled respiration.
- **"Blood" is always a fluid with a pH or a flow rate**, e.g. the bicarbonate
  buffer equation at `apps/web/lib/lessons/chemistry-aqueous.ts:522` and the
  Doppler blood-flow measurement at
  `apps/web/lib/lessons/physics-waves-fields.ts:558`. No blood is depicted.

None of these constitutes violence or gore in the questionnaire's sense.

### 2.3 Sexual content and nudity

**ANSWER: No** to sexual content, nudity, sexual innuendo, and depictions of
sexual activity.

**Flagged for your awareness, because the questionnaire will ask and you should
answer knowing what is actually in there.** The biology lessons use clinical
reproductive and genetic terminology. A sweep found **no matches whatsoever**
for `sperm`, `ovum`, `oocyte`, `ovary`, `testis`, `gonad`, `oestrogen`,
`testosterone`, `menstru`, `puberty`, `pregnan`, `contracept`, `penis`, or
`vagina`. What does appear:

- **Meiosis and gametes**, as Mendelian mechanics —
  `apps/web/lib/lessons/biology-genetics.ts:667` ("Meiosis, linkage, and
  recombination"), `:688` ("Fertilisation joins two cells and adds their
  chromosomes together… A sexual life cycle therefore requires exactly one
  halving"), `:393` ("A Punnett square is a table of gamete meetings, not a
  picture of a cell").
- **Chromosomal sex and sex-linked inheritance** —
  `apps/web/lib/lessons/biology-genetics.ts:548` ("In mammals a female carries
  two X chromosomes… This is the whole of sex linkage"), `:626` (the ZW system
  in birds).
- **One childbirth passage**, the most reproductive text in the corpus, and it
  is a feedback-loop classification exercise —
  `apps/web/lib/lessons/biology-physiology.ts:830`: "During labour, stretch of
  the cervix stimulates oxytocin release, oxytocin strengthens uterine
  contractions… How should this loop be classified, and what stops it?"
- **The placenta**, in immunology — `apps/web/lib/lessons/biology-physiology.ts:446`
  ("IgG… crosses the placenta"), `:582` ("maternal IgG across the placenta and
  IgA in breast milk").

This is standard curriculum biology in clinical register, with no imagery and
nothing titillating. IARC treats educational anatomy and reproduction of this
kind as non-sexual content. Answer **No**, and if the questionnaire offers a
free-text or "educational context" note, say: *"University-level biology
curriculum; reproduction and genetics are covered as academic subject matter in
clinical terminology, with no imagery."*

### 2.4 Drugs, alcohol, and tobacco

**ANSWER: No** to references that glamorise, encourage, or instruct in the use
of drugs, alcohol, or tobacco.

**Flagged, again so you answer knowingly.** There are no matches for `nicotine`,
`tobacco`, `opioid`, `morphine`, `cannabis`, `narcotic`, or `overdose`. What
exists is pharmacology and organic chemistry:

- **Unnamed drugs in kinetics problems** —
  `apps/web/lib/lessons/toolkit-advanced.ts:176` ("A drug is eliminated with
  first-order kinetics and a rate constant k = 0.1386 h⁻¹"),
  `apps/web/lib/lessons/reasoning-studios.ts:613` (plasma concentration decay
  after an IV dose), `apps/web/lib/lessons/biology-physiology.ts:287` (EC₅₀ and
  maximal response).
- **Receptor pharmacology as theory** —
  `apps/web/lib/lessons/biology-physiology.ts:215` ("An agonist binds and
  activates; an antagonist binds without activating"), and one mechanistic
  sentence on tolerance at `:214` ("tolerance develops to a continuously
  administered drug and… abrupt withdrawal can produce a rebound").
- **Ethanol strictly as a molecule** — a spirit-burner enthalpy experiment
  (`apps/web/lib/lessons/chemistry-reactions.ts:362`), a boiling-point ordering
  (`apps/web/lib/lessons/chemistry-structure.ts:951`), yeast fermentation
  (`apps/web/lib/lessons/biology-cell.ts:1034`), and a 20% solvent control
  (`apps/web/lib/lessons/reasoning-studios.ts:652`). Ethanol never appears as a
  beverage.
- **Caffeine**, once, as a phosphodiesterase inhibitor —
  `apps/web/lib/lessons/biology-physiology.ts:91`.

No substance is glamorised, no dosing regimen for a named consumer medicine is
given, and no recreational context appears. Answer **No**.

### 2.5 Everything else in the questionnaire

| Question | ANSWER | Evidence |
| --- | --- | --- |
| Profanity or crude humour | **No** | Zero matches for any profanity across all 14 lesson files; register is formal academic prose throughout |
| Horror, fear, or disturbing content | **No** | Zero matches for horror/fear vocabulary. Nearest item is a clinical scenario, `chemistry-reactions.ts:1387` ("A frightened patient hyperventilates…"), used to set up a Le Chatelier question |
| Gambling or simulated gambling | **No** | Zero matches for `gambl`, `casino`, `lottery`, `wager`, `dice`, `poker`. `probability` appears ~18 times as Mendelian and statistical mathematics, e.g. `biology-genetics.ts:467`, `:599`. No wagering, no virtual currency, no chance-based reward |
| Discrimination, hate speech, or extremism | **No** | Zero matches for hate/discrimination vocabulary. Sexes appear only as biological categories in genetics crosses (`biology-genetics.ts:1293`); no real ethnic group is named |
| User-generated content shared with others | **No** | The notebook is free text but is device-local (`learner-provider.tsx:138-149`) with no sharing path. See §2.7 |
| Users can interact, chat, or exchange content | **No** | No chat, forum, comment, leaderboard, invite, or `navigator.share`. Zero matches app-wide |
| Shares user location with other users | **No** | No location permission or plugin (§0.1, §0.3) |
| Allows purchase of digital goods | **No** | No billing code; explicitly deferred (`docs/implementation-plan.md:84`) |
| Contains ads | **No** | See Part 3 |
| Digital purchases / loot boxes / randomised rewards | **No** | No purchase or randomised-reward mechanic exists |

### 2.6 Health and medical content — the one to read carefully

IARC and Play both probe whether an app presents medical or health information.
SciPrep teaches human physiology and pharmacology as **academic subject matter**,
including hypothetical patients — e.g.
`apps/web/lib/lessons/biology-physiology.ts:901` ("Patient A has a failing
thyroid gland with an intact pituitary"), renal clearance arithmetic at `:1001`,
and a randomised-trial interpretation exercise at
`apps/web/lib/lessons/toolkit-advanced.ts:731`.

These are third-person teaching scenarios, not advice addressed to the reader,
and no dosage regimen for a named real medicine appears anywhere. Notably, the
trial exercise explicitly teaches claim-restraint
(`apps/web/lib/lessons/toolkit-advanced.ts:764`): "supported: this treatment
reduces this event in this population over one year. Not supported: other
populations, other outcomes, or longer periods."

Declare the app as **educational/reference content, not a medical or health
tool**. It does not diagnose, does not offer treatment advice, and stores no
health data about the user.

> **OWNER DECISION — recommended change, see §5.3.** There is currently **no
> "this is educational content, not medical advice" disclaimer anywhere in the
> app**. The privacy policy now carries one (`docs/PRIVACY_POLICY.md` §9), but a
> one-line in-app disclaimer would be cheap insurance given the volume of
> clinical scenario text. Decide whether to add it before submission.

### 2.7 A note on how to answer the UGC question

Some reviewers instinctively answer "yes" to user-generated content because the
app has a text field. **That would be wrong here, and would earn a higher rating
than the app deserves.** The IARC question is about content users create *and
share with other users*. SciPrep's notebook is written to a local key
(`learner-provider.tsx:138-149`), displayed only to its author
(`apps/web/app/(learner)/notebook/page.tsx:42-58`), and has no transmission path
— there is no `INTERNET` permission (§0.1). Answer **No**, and if asked to
elaborate: *"Private on-device notes, visible only to the author, with no
sharing or networking capability."*

---

## Part 3 — Ads declaration

Play Console → **Policy → App content → Ads**.

### 3.1 Does your app contain ads?

**ANSWER: No.**

Evidence:

- No ad SDK in the Android dependency graph — the complete list is at §0.4, and
  it contains no Google Mobile Ads / AdMob, no Meta Audience Network, no Unity
  Ads, no AppLovin, no ironSource.
- No Play Services at all, so no advertising ID is available to the app
  (§0.4). The manifest declares no `com.google.android.gms.permission.AD_ID`
  permission — the release merged manifest has exactly one `<uses-permission>`
  and it is the AndroidX signature permission (§0.1).
- No `INTERNET` permission, so no ad could be fetched even if an SDK were
  present (§0.1).
- No sponsored, promotional, or affiliate content in the app copy or lesson
  content. The only organisation named anywhere is ACER, and it appears in a
  **non-affiliation disclaimer**: `apps/web/app/page.tsx:149-151` — "Independent
  preparation. Not affiliated with, endorsed by, or authorised by ACER."

Because there are no ads, the **Ads (advertising ID) declaration** and the
**Families ads policy** requirements do not apply.

---

## Part 4 — Target audience and content

Play Console → **Policy → App content → Target audience and content**.

### 4.1 Target age groups

**ANSWER: select 18 and over only.** Do not tick any band below 18.

`[OWNER: if you prefer, "16-17 and 18+" is also defensible — see the reasoning
below and pick one. The recommendation is 18+ only.]`

**Why the audience is not plausibly under 13 — and not plausibly under 16.**

1. **The subject matter presupposes a degree in progress.** SciPrep prepares
   adults for a graduate-entry medical admissions test. Graduate-entry
   admission requires a completed or near-complete bachelor's degree, which puts
   the realistic audience at 20+.
2. **The app describes itself as for adults.** `README.md:3-4` — "an
   independent, app-based foundation course in chemistry and physics **for
   adults** with little or no recent science background."
   `apps/web/app/page.tsx:96` — "University-level structure without assumed
   science." `README.md:69-72` describes "first-year university treatment of
   atomic structure, bonding, molecular shape, thermodynamics, kinetics,
   equilibrium, acid–base and redox chemistry…".
3. **The prose is functionally inaccessible to children.** Two representative
   passages:
   - `apps/web/lib/lessons/analytical-techniques.ts:169` — "Sodium dodecyl
     sulfate unfolds the chain and binds along it at a roughly constant ratio
     near 1.4 g of detergent per gram of protein… the pH at which a protein's
     ionisable groups sum to zero is its isoelectric point, pI, and at pH = pI
     the driving force qE is zero."
   - `apps/web/lib/lessons/biology-genetics.ts:139` — "DNA polymerase can add a
     nucleotide only to a free 3′ hydroxyl, so a new strand grows exclusively 5′
     to 3′ and reads its template 3′ to 5′. At a replication fork the two
     templates are antiparallel…"
   Long subordinate clauses, unglossed technical vocabulary, Greek symbols, and
   superscript/subscript scientific notation throughout.
4. **Nothing is designed to appeal to children.** No cartoons, mascots,
   characters, bright child-oriented styling, games, points, badges, streaks, or
   rewards. Progress is five plain descriptive labels — "Not started",
   "Introduced", "Practising", "Independent", "Review due"
   (`apps/web/lib/progress.ts:52-73`).

**Consequence of answering 18+.** The app falls outside the **Families
policy** and outside the **Designed for Families** programme, so the additional
Families requirements (certified ads SDK, no ad ID collection from children, a
Families-specific privacy policy) do not attach. It is nonetheless worth noting
that SciPrep would pass those requirements anyway, since it serves no ads and
collects nothing (Parts 1 and 3).

### 4.2 "Could your app unintentionally appeal to children?"

**ANSWER: No.** Grounds as in §4.1(4): no child-appealing design elements,
characters, gamification, or reward mechanics.

### 4.3 Store listing and age-appropriate presentation

**ANSWER:** The listing must not use child-oriented imagery or language. Keep the
graphics academic in tone.

> **OWNER DECISION:** review the assets produced by `scripts/store-graphics.mjs`
> against this before uploading.

### 4.4 News app / COVID / government / financial features

**ANSWER: No** to all. SciPrep is not a news app, not a COVID-19 contact-tracing
or status app, not a government app, and offers no financial services or
features.

### 4.5 Data safety cross-check for children

If the Console asks whether the app is compliant with the Families policy or
COPPA-style requirements in the event a minor uses it: the app collects nothing
from anyone (Part 1), shows no ads (Part 3), and has no account system (§0.6).
There is therefore no children's personal information to collect, profile, or
disclose in any circumstance.

---

## Part 5 — Health, outcome, and other claims to check before submitting

The store listing is judged against Play's **Misrepresentation** and **Health
misinformation** policies as well as the app content itself.

### 5.1 What the code and copy actually say — this is a clean bill

The learner-facing copy and README were swept for outcome guarantees and medical
claims. **Zero matches** for `boost your`, `your score`, `pass the exam`,
`medical advice`, `clinical advice`, `proven to`, `will improve your`, `will
increase your`. Better still, the app actively disclaims in three places:

- `apps/web/app/(learner)/progress/page.tsx:28-30` — "The pilot separates lesson
  exposure, independent checks, and delayed review. **It does not invent an
  official exam score.**"
- `apps/web/components/lesson-player.tsx:95-97` — "Commit to the model that best
  explains the relationship. **This is practice, not a score.**"
- `apps/web/app/page.tsx:149-151` — "Independent preparation. **Not affiliated
  with, endorsed by, or authorised by ACER.**"

`README.md:77` commits to "broad, explainable progress labels rather than a
predictive exam score", and `docs/implementation-plan.md:85` lists "claims that
course progress predicts an official scaled score" under **Explicitly
deferred**. The implementation matches: `evidenceLabel()`
(`apps/web/lib/progress.ts:52-73`) returns descriptive strings, never a
predicted score.

The word `guarantee` appears nine times in lesson content and **every occurrence
is subject-matter epistemics, never a promise to the learner** — for example
`apps/web/lib/lessons/physics-mechanics.ts:710` ("Momentum conservation does not
guarantee kinetic energy conservation") and
`apps/web/lib/lessons/foundations.ts:917` ("A smooth trend within the measured
region does not guarantee that the same model remains valid outside it").
Similarly all five `diagnos*` hits are methodological ("Diagnose a null result",
`apps/web/lib/lessons/toolkit-advanced.ts:696`), never about the user's health.

**Nothing in the current app or README overreaches.** This is unusually good.

### 5.2 The risk is the store listing, which does not exist yet

> **OWNER DECISION:** the short and full descriptions you write in the Console
> are new copy that has not been reviewed here. Hold them to the same standard.
> Avoid: "guaranteed to raise your GAMSAT score", "pass the GAMSAT", "proven to
> improve results", "the only app you need to get into medical school",
> "prepares you to diagnose", or any comparative claim about a named competitor.
> Safe framings that match what the app does: "structured foundation course",
> "university-level chemistry, physics and biology", "spaced review",
> "independent, offline, no account required". Carry the ACER non-affiliation
> line from `apps/web/app/page.tsx:149-151` into the listing.

### 5.3 Recommended (not required) in-app disclaimer

> **OWNER DECISION:** the app contains substantial clinical scenario text
> (§2.6) but carries **no in-app statement that it is not medical advice**. Adding
> one line — for example in the footer or on the Today screen: *"Educational
> content only. Not medical advice, and not a diagnostic tool."* — would close
> the only real gap found. This is a source change and was deliberately not made
> as part of producing these documents.

---

## Part 6 — Owner checklist before submitting

**Must do:**

1. Fill in every `[PLACEHOLDER]` in `docs/PRIVACY_POLICY.md`: publisher legal
   name, contact email, effective date, last-updated date, and postal address if
   your jurisdiction requires one.
2. Host that policy at a public, login-free, non-expiring URL and paste it into
   **both** the store listing and the Data safety form (§1.6).
3. Decide the target-age band and keep it consistent between the Console and
   `docs/PRIVACY_POLICY.md` §8. Recommendation: **18+ only** (§4.1).
4. Write the store listing copy against the constraints in §5.2.
5. Confirm the app category is **Education**, not Game (§2.1).

**Should consider:**

6. Add an in-app "educational content only, not medical advice" line (§5.3).
7. Remove the latent `google-services` plugin hook so Firebase cannot be enabled
   by dropping in a config file (§0.4).
8. Review the generated store graphics for age-appropriate, non-child-oriented
   presentation (§4.3).

**Must re-verify at every future release** — each of these would change the
answers above:

9. Any new `<uses-permission>`, especially `android.permission.INTERNET`, in the
   merged **release** manifest (§0.1).
10. Any new entry in `android/capacitor.settings.gradle`, in
    `android/app/build.gradle` dependencies, or a non-`[]`
    `capacitor.plugins.json` (§0.3, §0.4).
11. The appearance of `android/app/google-services.json` (§0.4).
12. Any analytics feature. Note that `docs/implementation-plan.md:288` already
    contemplates "pilot analytics limited to learning and usability decisions"
    as future work — **shipping that would invalidate the "no data collected"
    declaration in Part 1** and require resubmitting the Data safety form
    *before* the release goes live.
13. Any account, sync, cloud-backup, or payment feature (§0.6).
14. Any change to `apps/web/next.config.ts` that enables remote images,
    rewrites, redirects, or headers; any new external URL surviving in the
    `apps/web/out/` bundle; or a new font/asset source (§0.7). The cheapest
    regression check is to grep the built export for `https://` and confirm the
    only hits remain documentation links, XML namespaces and licence comments.

---

## Part 7 — Where these answers are least certain

Everything in Parts 1 and 3 rests on machine-checkable facts and is not in
serious doubt. The residual uncertainty is concentrated in three judgement
calls, all in the rating and audience sections. They are recorded here so you
can form your own view rather than inherit one.

**1. The target-age band (§4.1).** The recommendation is 18+ only, and the
evidence for an adult audience is strong. But Play's target-audience question
asks who the app is *for*, not who could conceivably use it, and a motivated
16-year-old could use this app. Selecting "16-17 and 18+" is also defensible and
carries no additional compliance burden, since the app collects nothing and
serves no ads either way. The two selections have essentially identical
consequences here; pick the one you would be comfortable defending, and keep
`docs/PRIVACY_POLICY.md` §8 consistent with it.

**2. Reproduction and pharmacology in the IARC questionnaire (§2.3, §2.4).** The
answers given are "No" to sexual content and "No" to drug references, and both
are correct under the questionnaire's definitions — clinical curriculum biology
is not sexual content, and pharmacokinetics is not a drug reference. But these
are the two answers a cautious reviewer might second-guess, which is precisely
why the underlying material is enumerated in full at §2.3 and §2.4. Read those
lists before you answer, so that if IARC later re-rates the app you can show you
declared knowingly rather than carelessly. If any questionnaire offers a
free-text "educational context" field, use it.

**3. Whether the free-text notebook counts as user-generated content (§2.7).**
Answering "yes" is the instinctive error and would inflate the rating. The
correct answer is "No", because the IARC question concerns content shared
*between users*, and the notebook has no reader other than its author and no
transmission path. This is settled by the evidence, but it is the question most
likely to be answered wrongly on autopilot.

**Not uncertain, for the avoidance of doubt:** the "no data collected / no data
shared" declaration (Part 1) and the "no ads" declaration (Part 3). Those follow
from the release merged manifest and the complete dependency list, both of which
are mechanical facts about the artefact you will upload.
