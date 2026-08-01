# SciPrep Privacy Policy

**Application:** SciPrep (Google Play application ID `com.sciprep.app`)
**Publisher:** `[PUBLISHER LEGAL NAME]`
**Contact for privacy enquiries:** `[CONTACT EMAIL ADDRESS]`
**Postal address (if required by your jurisdiction):** `[POSTAL ADDRESS]`
**Effective date:** `[EFFECTIVE DATE, e.g. 2026-08-01]`
**Last updated:** `[LAST UPDATED DATE]`

> **Owner action required before publishing.** Replace every `[BRACKETED
> PLACEHOLDER]` above and below. Google Play requires this policy to be
> reachable at a public, non-expiring URL that does not require a login, and
> requires the same URL to be entered in the Play Console listing and in the
> Data safety form. See `docs/store/PLAY_DECLARATIONS.md` for the matching
> Play Console answer sheet and the evidence behind every statement here.

---

## 1. Summary

SciPrep is an offline course app. It does not have a server, an account
system, or an internet connection.

Everything you do in SciPrep — the lessons you open, the answers you give, your
review schedule, and the notes you write — is saved **only on your own device**.
None of it is transmitted anywhere. We, the publisher, never receive it and have
no way to see it.

In the language of Google Play's Data safety form: **SciPrep collects no data
and shares no data.**

## 2. Who this policy is from

This policy is issued by `[PUBLISHER LEGAL NAME]` ("we", "us"), the publisher of
the SciPrep Android application. Questions about this policy or about your data
can be sent to `[CONTACT EMAIL ADDRESS]`.

SciPrep is an independent product. It is not affiliated with, endorsed by, or
authorised by ACER or by any medical school or admissions body.

## 3. What SciPrep stores on your device

SciPrep saves your course progress in your device's local browser storage
(`localStorage`), under a single key named `sciprep.learner-progress.v1`. This
storage belongs to the app's private, sandboxed storage area on your device.

The stored record contains exactly four kinds of information:

| What is stored | Description |
| --- | --- |
| **Lesson position and completion** | For each lesson you have opened: which block you reached, the timestamp of your last visit, and the timestamp of completion if you finished it. |
| **Check answers** | For each in-lesson check question you answered: whether your answer was correct, how many attempts you made, and when you answered. |
| **Review schedule** | For each completed lesson: when the next spaced review is due, the current review interval, and when you last reviewed it. |
| **Your private notebook notes** | The free-text notes you type into the notebook field on each lesson, stored word-for-word as you wrote them. |

Nothing else is stored. In particular, SciPrep does **not** store, request, or
generate:

- your name, email address, phone number, or any other contact detail;
- a username, password, account identifier, or any login credential;
- your location, at any level of precision;
- a device identifier, advertising ID, IP address, or any other identifier that
  could be used to recognise you or your device;
- your contacts, calendar, photos, camera, microphone, files, SMS, or call logs;
- payment or financial information;
- health information, or any diagnosis, assessment, or medical record;
- crash logs, performance traces, diagnostics, or usage analytics.

### 3.1 Your notebook notes deserve a specific note

Every lesson in SciPrep includes a private notebook field, and the app invites
you to explain concepts in your own words. Because this is a free-text field,
**you control entirely what goes into it** — and free text can hold anything you
choose to type, including personal, sensitive, or identifying information.

We want to be precise about what happens to that text:

- It is saved to your device only, in the same local record described above.
- It is never uploaded, synchronised, backed up to a cloud service by us,
  transmitted, analysed, indexed, or read by us or by anyone else.
- We have no technical means of retrieving it. There is no server holding a
  copy, and the app has no network capability with which to send one.
- It stays on the device until you delete it (see section 6) or uninstall the
  app.

Because notes are stored in plain text within the app's private storage, anyone
with unlocked physical access to your device — or with administrative access to
it — could in principle read them. We therefore recommend that you keep your
device protected with a screen lock, and that **you do not type anything into
the notebook that you would not want a person holding your unlocked device to
see.** The notebook is designed for scientific explanations in your own words,
not for personal or sensitive records.

## 4. What SciPrep does not do

SciPrep does not:

- **Connect to the internet.** The app ships without the Android `INTERNET`
  permission. This is not merely a policy choice — without that permission the
  Android operating system prevents the app from opening a network connection at
  all. The entire course, including all text, diagrams, and fonts, is bundled
  inside the app package and read from local storage.
- **Contain any advertising.** There is no ad network, no ad SDK, no
  advertising identifier use, and no sponsored or promotional content.
- **Contain any analytics, telemetry, or crash-reporting software.** There is no
  Google Analytics, Firebase, Crashlytics, Sentry, or comparable SDK.
- **Contain any third-party software development kit that collects data.** The
  app's only bundled libraries are the Capacitor Android runtime and a small set
  of standard AndroidX user-interface libraries, none of which collect or
  transmit user data.
- **Offer accounts or sign-in.** There is no registration, login, password,
  profile, or authentication of any kind.
- **Offer purchases, subscriptions, or payments.** There is no in-app billing.
- **Include social, chat, sharing, or user-to-user features.** You cannot send
  anything to another user, and no other user can send anything to you.
- **Track you across apps or websites.**

## 5. Cookies and similar technologies

SciPrep does not use cookies, tracking pixels, beacons, session identifiers, or
any cross-site or cross-app tracking technology. The local storage described in
section 3 is used purely to remember your place in the course on your own
device, and is not readable by any other app or website.

## 6. Your control over your data

Because your data never leaves your device, you have direct and complete control
over it. You do not need to contact us to exercise any of the following.

**Restart a single lesson.** Inside a lesson you can choose to start it again.
This clears your saved position, your check answers, and the review schedule for
that one lesson. **It deliberately leaves your notebook notes for that lesson
untouched**, because those are your own writing and restarting a lesson should
not destroy them. The app tells you this before it proceeds.

**Erase everything.** The **Progress** screen contains a **Reset local
progress** control. After a confirmation prompt, this permanently removes the
entire saved record from your device — every lesson position, every check
answer, every review schedule, **and every notebook note**. This is immediate
and cannot be undone, so export or copy any notes you want to keep before using
it.

**Uninstall.** Removing the app from your device deletes its private storage,
including the entire saved record.

**Android backup.** The app is configured with Android backup disabled
(`android:allowBackup="false"`), so your progress and notes are **not** copied
into Google's Android Backup service or transferred to a new device. Your data
does not leave the device this way either. The practical consequence is that
there is no automatic backup of your notes — see the warning above.

## 7. Your rights under data protection law

Data protection laws such as the UK GDPR, the EU GDPR, and the California
Consumer Privacy Act give you rights of access, correction, deletion,
portability, restriction, and objection in relation to personal data held by a
company about you.

Because SciPrep transmits nothing and we operate no server, **we hold no
personal data about you whatsoever.** There is no record for us to search,
export, correct, or delete, and no profile of you exists on our side. The
practical route to access and deletion is the on-device controls described in
section 6, which give you a more immediate result than a request to us could.

If you nevertheless wish to make a formal request or raise a concern, contact
`[CONTACT EMAIL ADDRESS]`. We will respond, though our response will ordinarily
confirm that no data about you is held.

If you are in the UK or the EEA and are dissatisfied, you have the right to
complain to your national supervisory authority. In the UK this is the
Information Commissioner's Office (`ico.org.uk`).

`[OWNER: if you are established in the UK/EEA, confirm whether you need to name
a data controller entity, a representative, or a Data Protection Officer here.
On the facts above no personal data is processed by you, so a DPO is very
unlikely to be required — but the controller identity should still be stated
clearly, which the "Publisher" field at the top of this policy does.]`

## 8. Children and the age of our users

SciPrep teaches university-level chemistry, physics, and biology to adults
preparing for graduate-entry medical school admissions testing. Graduate-entry
admission normally requires a completed or near-complete bachelor's degree, so
our audience is overwhelmingly adults.

The app is **not directed to children**, is not designed to appeal to children,
and contains no child-oriented content, characters, or design.

We do not knowingly collect personal information from children — or, in fact,
from anyone, as section 3 explains. Because the app collects and transmits no
data at all, it presents no risk of children's personal information being
gathered, profiled, or disclosed, and there is no advertising that could be
targeted at a child.

`[OWNER: confirm the target-age band you select in the Play Console
target-audience declaration matches this section. See
docs/store/PLAY_DECLARATIONS.md, "Target audience and content".]`

## 9. Educational content: what SciPrep is and is not

SciPrep is a study aid. It is **not** a medical device, a diagnostic tool, a
clinical decision aid, or a source of medical advice. Its biology and physiology
lessons teach human science as academic subject matter and must never be used
to diagnose, treat, or make decisions about any real health condition, whether
your own or another person's. If you have a health concern, consult a qualified
healthcare professional.

SciPrep also makes no promise about examination results. Completing the course
does not guarantee, predict, or entitle you to any particular score, any
admission outcome, or any place on any programme. The app deliberately reports
your progress with broad descriptive labels rather than a predicted exam score.

## 10. Security

Your data is protected by the standard security model of your Android device:
SciPrep's storage is private to the app and is not readable by other
applications. Because nothing is transmitted, there is no transmission to
intercept and no server database that could be breached.

The residual risk is physical: a person with access to your unlocked device
could open the app and read your notebook. Please use a device screen lock.

## 11. Changes to this policy

If we change how SciPrep handles data — for example, if a future version adds an
optional feature that does transmit something — we will update this policy,
change the "Last updated" date above, and update the Play Data safety
declaration before that version is released. Material changes will be described
here.

## 12. Contact

Privacy enquiries: `[CONTACT EMAIL ADDRESS]`
Publisher: `[PUBLISHER LEGAL NAME]`
`[POSTAL ADDRESS, if required]`
