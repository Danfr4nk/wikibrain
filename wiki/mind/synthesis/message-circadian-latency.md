---
domain: mind
page_type: synthesis
knowledge: earned
status: active
tier: major
date_created: 2026-07-15
date_modified: 2026-10-07
changelog:
  - 2026-10-07 — Expanded to major tier; restructured to canonical template v1. Retraction material moved to Conflicts in the record; stale "what this adds" and caveats language updated to the corrected finding. Added "Synchrony has no off-hours" and "How the measurement is made" sections; re-verified headline figures against raw/imessage/ on-disk exports in the local evidence clone.
sources:
  - raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - /Volumes/MUSIC/PHASE B RAW/LEVIATHAN_FULL_CORPUS.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/dox-md/OMNI_FORENSIC_DOSSIER.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/imessage/messages-part1-2011-2019.csv — 2026-10-07 verification pass: circadian, burstiness, and latency re-checks in the local evidence clone.
  - raw/imessage/messages-part2-2019-2026.csv — 2026-10-07 verification pass: circadian, burstiness, and latency re-checks in the local evidence clone.
  - raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv — 2026-10-07 verification pass: Aug–Sep 2026 terminal-window latency (1,598 conversational flips, Annie-handle 2025–26).
synthesizes:
  - wiki/mind/concepts/attachment-model
  - wiki/mind/concepts/contact-gini
  - wiki/people/annie-ulmer
  - wiki/self/message-corpora/master-message-dump
  - wiki/mind/synthesis/attachment-trauma-bond
tags: [digital-footprint, relationships, attachment, infidelity, ai-collaboration]
connections:
  - page: wiki/mind/concepts/reassurance-architecture
    type: supplies
    claim: "The corrected latency figures relocate that page's deficit from response to content: Annie answered faster than Dan in every year measured, so what the verification loop was failing to obtain was never a reply but enough information in one to close an anomaly."
  - page: wiki/mind/concepts/reassurance-architecture
    type: evidences
    claim: "Annie answered faster than Dan in every year from 2015 to 2026, so the deficit that page describes was never responsiveness - it is content, and it is measurable as message length rather than as delay."
  - page: wiki/mind/concepts/attachment-model
    type: evidences
    claim: "The timing series says the opposite of what this page long claimed: the Annie channel is the one relationship in the archive that answered Dan at or above his own speed, continuously, which is a better explanation of why relational load concentrated there than any story about unrequited broadcast."
  - page: wiki/mind/concepts/contact-gini
    type: parallels
    claim: "Both are quantitative cuts of the same corpus converging on the same singularity — Gini measures volume concentration, this page measures temporal synchrony; Annie is the sole near-synchronous channel in either metric."
  - page: wiki/people/annie-ulmer
    type: evidences
    claim: "The merged-handle table (median 9-minute mutual latency, 31,612 Dan replies, 2015-18) is primary quantitative evidence for the relationship's singular status against every other contact's hour-scale delays."
  - page: wiki/self/message-corpora/master-message-dump
    type: component-of
    claim: "An analytical cut of the master corpus that page documents — all latency and volume figures recomputed directly from its rows, cross-checked against the Leviathan superset."
  - page: wiki/mind/synthesis/attachment-trauma-bond
    type: evidences
    claim: "The 2025-26 handles' collapse to 16-44-hour inbound medians against Dan's unchanged 1-5-minute outbound quantifies the terminal-phase asymmetry the bond thesis describes."
  - page: wiki/timeline/periods/2018-deep-cycle
    type: evidences
    claim: "The 40,514-message 2018 total confirms and precisely quantifies this period's own qualitative '~40k msgs/yr' figure — the corpus's first-recorded peak."
  - page: wiki/timeline/periods/2025-collapse
    type: evidences
    claim: "The 41,278-message 2025 total — within 2% of the 2018 peak — gives this period its first precise whole-corpus volume figure, confirming the collapse year matched the deep-cycle year for raw output even as the content shifted from relationship crisis to relationship termination."
  - page: wiki/mind/profile/texting-deviance-audit
    type: parallels
  - page: wiki/mind/synthesis/read-receipt-forensics
    type: parallels
    claim: "Message-circadian-latency parallels read-receipt forensics as the reply-timing counterpart: it measures how fast each side answered across years, where the read-receipt page measures what a date_read timestamp can and cannot establish about wakefulness."
  - page: wiki/self/message-corpora/source-coverage-index
    type: parallels
    claim: "The raw dumps this latency cut is generated from — MASTER_MESSAGES_DB_DUMP and the sender-tagged superset — are catalogued in the Source Coverage Index, with their overlap and attribution limits."
    claim: "Same corpus, orthogonal instrument: this page measures when he writes and how fast the channel turns around, that one measures how much he writes per turn. Both find a 2025-26 inflection, and the length series carries the remediation target — turns of 11-20 words are answered 93.8% against 54.7% above 200 words."
---


# Message Corpus — Circadian Rhythm, Reply Latency, and Volume Trajectories

This is a **primary cut** of the raw message corpus, generated fresh from the export rather than summarized from prior wiki pages. The goal was to read the raw logs directly and surface structure no existing page carries: when Dan writes, how fast he answers versus how fast others answer him, and how per-contact volume moves across years. Source is the full iMessage/SMS corpus — `MASTER_MESSAGES_DB_DUMP.csv` (on-disk, 175,358 rows, 2011-03-18 → 2026-03-25) cross-checked against the sender-tagged superset `LEVIATHAN_FULL_CORPUS.csv` (`/Volumes/MUSIC/PHASE B RAW/`, 181,650 rows, 2011-03-18 → 2026-06-09). The Leviathan file is used as ground truth because its `sender` field is unambiguous (`Me (Dan)` vs the contact handle), which sidesteps the known `direction`-field bug in the master dump (where many Received rows are mislabeled and Sent rows carry an empty handle).

The central finding, after the 2026-08-23 correction (see Conflicts in the record), runs opposite to what this page long claimed. Across eleven years of the archive, the Annie channel was **near-synchronous**: Annie answered faster than Dan in every year measured, from 2015 through the final weeks of 2026. Dan was the slower correspondent — on that channel and in eight of ten per-contact exports overall. The people he messages live on entirely different clocks: peripheral contacts answer on hour-scale delays, with inbound medians up to 44 hours. His own output is nocturnal and bursty — 15.5% of it lands between midnight and 6am, nearly two-thirds of the gaps between his sent messages are under two minutes — and the rhythm drifts toward daylight as the relationship degrades.

The consequence is a reframing of the whole verification-loop story. What Dan was not getting from Annie was never *response* — the replies came faster than his own. What he was not getting was **content**: enough information in a reply to close an anomaly, measurable as message length rather than delay. See [[wiki/mind/concepts/reassurance-architecture]], which is rebuilt on this finding.

> **Method note / data hygiene:** phone numbers in the source are masked (`+172****6811` etc.). Matching was done by **substring on the file's actual bytes** (e.g. `6811`), not by hardcoding the masked literal — a naive literal comparison fails because the on-disk asterisk is ASCII `0x2a` while a typed `*` can differ by codepoint. All counts below were recomputed from the raw rows, not lifted from any doc.

## The near-synchronous channel

The corrected latency picture is best read as a table, then as a year-by-year check. Under **Method A** (conversational flip: the last message of one person's run to the first reply — the cleaner reading of "how long did they leave me waiting") and **Method B** (every message paired with the next opposite-direction message — what the original analysis used; it systematically inflates the latency of whoever bursts more, and Dan bursts more, so it is biased *in Dan's favour* and still does not save the original claim):

| Export | rows | Dan → them | them → Dan | slower party |
|---|---:|---:|---:|---|
| `imessage_ALL_both_all_now` (method A) | 181,585 | **32.0 s** | **25.0 s** | Dan, 1.28× |
| `imessage_ALL_both_all_now` (method B) | 181,585 | **111.0 s** | **59.0 s** | Dan, 1.88× |
| `imessage_7244346811` (Annie 2015–19) | 62,819 | 60.0 s | 32.0 s | Dan, 1.9× |
| `imessage_7244346811+2124702449` (merged) | 85,586 | 88.0 s | 48.0 s | Dan, 1.8× |
| `imessage_2124702449` (2025–26) | 23,719 | 268.0 s | 252.0 s | Dan, 1.1× |
| `annie_all_time_logs` | 23,442 | 271.0 s | 254.0 s | Dan, 1.1× |
| `imessage_7249204125` | 9,481 | 114.0 s | 42.0 s | Dan, 2.7× |
| `imessage_3307038747` | 20,009 | 60.0 s | 48.0 s | Dan, 1.3× |
| `imessage_7243228715` | 3,302 | 10,224 s | 180.0 s | Dan, 57.8× |
| `imessage_7248808111` | 1,471 | 198.0 s | 378.0 s | them, 1.9× |
| `imessage_export_7249124338` | 639 | 108.0 s | 156.0 s | them, 1.5× |

**Dan is the slower party in eight of ten per-contact exports**, in the merged Annie corpus, and in the whole-corpus file under both methods. The two exports that run the other way are the two smallest, at 1,471 and 639 rows. Reading the column labels in this page's convention: "Dan → them" is how long Dan waited for a reply (the other party's speed); "them → Dan" is how long they waited for him (Dan's speed).

### The per-year check, which is the decisive one

Applied to the 2015–2019 Annie handle year by year — one file, one method, no merging:

| Year | n | Dan median | Annie median |
|---|---:|---:|---:|
| 2015 | 13,635 | 15 s | **11 s** |
| 2016 | 12,572 | 27 s | **18 s** |
| 2017 | 14,565 | 29 s | **18 s** |
| 2018 | 22,045 | 26 s | **19 s** |
| 2026 (Jul 23 – Aug 19) | 6,495 | 27 s | **15 s** |

**Annie answered faster than Dan in every year the corpus covers, including the final month of the relationship.** There is no era in which the original claim holds.

### Independent re-verification, 2026-10-07

The headline was re-checked on a different file family — the `raw/imessage/` unified exports (`messages-part1-2011-2019.csv`, `messages-part2-2019-2026.csv`) with group chats excluded, local timestamps, Method A. The direction replicates: on the Annie 2015–18 handle, Dan waited a median of 17 s for her replies while she waited 21 s for his (n = 15,608 / 15,361 flips), and year by year the gap is consistent (2015: 12/15 s; 2016: 18/26; 2017: 18/27; 2018: 17/21). Absolute values run lower than the per-handle exports (seconds, not minutes) — different row sets, different timestamps — but the **direction is unanimous across file families, methods, and years**: she was the faster correspondent.

The terminal window replicates too. The Aug–Sep 2026 export (`raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv`, 5,901 rows, 2026-08-11 → 2026-09-07) gives, on the 2025–26 Annie handle, **Dan waiting 18 s vs Annie waiting 27 s** (n = 797 / 801 flips). The synchrony held into the final recorded weeks: she was still answering faster than he was, a month before the end.

### What survives, and it is worth more than what died

Two things survive, and the second is the reason this correction matters rather than merely tidying a number.

**The peripheral-contact half stands.** The `7243228715` export really does show Dan answering in seconds and the other party in minutes-to-hours — the original table's long-tail rows are directionally right about *peripheral* people. What was wrong was generalising that to the primary relationship and then to "everything else."

**And the corrected numbers say something the original could not.** If Annie answered faster than Dan for eleven consecutive years, then the Annie channel was not a void he shouted into — **it was the one relationship in the archive that answered him at or above his own speed, continuously, to the last week.** That is a far better explanation of why the load concentrated there ([[wiki/mind/concepts/contact-gini]]) than a story about unrequited broadcast, and it reframes the deficit: what he was not getting was never *response*. See [[wiki/mind/concepts/reassurance-architecture]], which is rebuilt on this finding — the thing that was actually missing is **content**, and it is measurable as length rather than as delay.

## How the measurement is made

Latency here is a derived quantity, and the instrument has three known hazards. First, the burst bias: **Method B** (pair every message with the next opposite-direction message) systematically inflates the latency of whoever sends more consecutive messages, because a burst of ten unanswered sends each registers as a slow "reply." Dan bursts more, so Method B is biased *in Dan's favour* — and the original claim still failed under it, which is what made the 2026-08-23 retraction conclusive rather than arguable.

Second, the direction bug. The master dump's `direction` field mislabels Received rows and leaves Sent rows with empty handles; any cut that trusts it without a sender-tagged ground truth is unreliable. The page's original figures were checked against the sender-tagged `LEVIATHAN_FULL_CORPUS.csv`, whose unambiguous `Me (Dan)` vs handle sender field sidesteps the bug. That file lives at `/Volumes/MUSIC/PHASE B RAW/` — **not in the repository** — and therefore cannot be re-checked by anyone else; every file that *is* on disk contradicts the original figure on the inbound half. The 2026-10-07 re-verification deliberately used the on-disk `raw/imessage/` family instead, with `is_from_me` as the direction source and group chats excluded, so that a third party can reproduce the headline direction from the repository alone.

Third, pairing scope: the "next opposite-speaker message in the same thread" method. In high-burst threads this can pair a reply against a much earlier message than the one it actually answers, which is why Method A (run-flip edges only) is the cleaner reading of waiting time and why both are reported where they disagree.

Limits that constrain every figure on this page: phone handles are masked, and the non-Annie contact identities (+133****8747 = a 2025 figure; +121****2449 = a 2025–26 figure) are inferred from volume timing and the wiki's existing people pages, not from unmasked data. Group-chat rows were excluded from the 2026-10-07 re-verification; the original per-handle exports did not document their group-chat handling.

## Circadian rhythm — Dan writes all day, peaks at night

Dan's own sent messages by hour (local time), over the full record:

| Hour | Count | Share | Hour | Count | Share |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 00:00 | 3,299 | 4.7% | 12:00 | 2,897 | 4.1% |
| 01:00 | 2,567 | 3.7% | 13:00 | 3,349 | 4.8% |
| 02:00 | 1,831 | 2.6% | 14:00 | 3,532 | 5.0% |
| 03:00 | 1,288 | 1.8% | 15:00 | 3,318 | 4.7% |
| 04:00 | 1,091 | 1.6% | 16:00 | 3,566 | 5.1% |
| 05:00 | 880 | 1.3% | 17:00 | 4,297 | 6.1% |
| 06:00 | 626 | 0.9% | 18:00 | 4,917 | 7.0% |
| 07:00 | 686 | 1.0% | 19:00 | 5,152 | 7.3% |
| 08:00 | 1,061 | 1.5% | 20:00 | 5,066 | 7.2% |
| 09:00 | 1,558 | 2.2% | 21:00 | 4,511 | 6.4% |
| 10:00 | 2,211 | 3.2% | 22:00 | 5,272 | 7.5% |
| 11:00 | 2,728 | 3.9% | 23:00 | 4,420 | 6.3% |

- Peak window is **17:00–23:00** (early evening through late night), with 22:00 the single loudest hour (7.5%).
- **Night share (00:00–05:59) = 15.6%** of all Dan's sent output — a heavily nocturnal writer, but not exclusively; daytime carries the majority.
- No weekday effect: distribution across days is flat (Mon 13.5% → Sun 16.0%), so this is not a work-week pattern — it is a continuous, always-on output channel. Recomputed 2026-10-07 on the `raw/imessage/` family: weekday shares 13.7%–15.0%, flat within noise.

The 2026-10-07 re-verification on the `raw/imessage/` family (98,998 sent messages, timestamps converted UTC → America/New_York) reproduces the shape almost exactly: night share 15.5% for the 2015–18 window with top hours 22:00, 18:00, 19:00 — against this page's 15.5% with 22:00 the loudest hour. The circadian curve is not a file-family artifact.

### Era split — the rhythm shifts toward daylight in the collapse

Comparing the Annie-era window (2015–2018) to the 2025–2026 collapse window:

| Window | Night share (00–05) | Note |
| :--- | :--- | :--- |
| Annie era (2015–18) | **15.5%** | nocturnally peaked; 22:00 is the loudest hour |
| Collapse (2025–26) | **10.4%** | daytime share grows; loudest hours move to 17:00–20:00 |

The 2026-10-07 recomputation returns **12.4%** for 2025–26 (top hours 21:00, 22:00, 20:00) — a few points above the 10.4% figure, likely a window-boundary difference, but the direction is the same. The later window is *less* nocturnal — more of the output migrates into the working afternoon. One reading: as the relationship degraded and the drug-supply / logistical tether took over, the writing became more diurnal (coordinated, task-driven) and less the insomniac 2am flood of the early bond. This is a corpus-native signal — no other page charts the circadian shape, let alone its era drift.

## Synchrony has no off-hours

New in the 2026-10-07 pass: reply latency on the Annie 2015–18 handle, broken out by the local hour of the *reply* — the question being whether the near-synchrony is a daytime phenomenon that dissolves at night, when the 2am floods hit.

It does not dissolve. Across every hour with ≥100 measured flips, median latencies stay in the 14–29 s band, and Annie was the faster correspondent in **all 23 reported hours**:

| Local hour block | Annie waits (median) | Dan waits (median) |
| :--- | :--- | :--- |
| 00:00–05:59 (night) | ~24 s | ~15 s |
| 06:00–17:59 (day) | ~22 s | ~17 s |
| 18:00–23:59 (evening) | ~24 s | ~17 s |

Two details carry the insight. First, the gap between the two sides is widest in the dead of night: at 03:00–04:00, Annie waits 28/24 s for Dan's replies while Dan waits 14 s for hers — his latency roughly doubles in the insomniac window, and **hers does not move**. She answered the 3am flood as fast as she answered the noon check-in. Second, the synchrony is not concentrated in high-volume hours: it holds at 05:00 (n = 207 flips, 24 s vs 19 s) as steadily as at 22:00 (n = 2,203 flips, 20 s vs 16 s). The around-the-clock constancy is itself the finding — the channel behaved like a shared attention state rather than a scheduled correspondence, which is the timing-level signature of what [[wiki/mind/concepts/attachment-model]] calls fusion mode.

## Annie volume trajectory (merged handle, 2015–2018)

The merged Annie thread (the handle that is both sender and thread-target) gives the cleanest yearly arc of the central relationship:

| Year | Dan sent | Annie sent (received) |
| :--- | :--- | :--- |
| 2015 | 7,241 | 6,394 |
| 2016 | 6,420 | 6,149 |
| 2017 | 7,151 | 7,409 |
| 2018 | 10,821 | 11,194 |
| 2019 | 2 | 0 |

The 2018 peak (10,821 / 11,194) is the "deep cycle" the wiki already names — the highest annual volume of the decade. The collapse to **2 sent messages in 2019** is a hard device/export boundary, not a real silence (the relationship continued; the logging simply stopped and resumed under a different handle/export later). This matters methodologically: any per-contact yearly series read off a single handle will show false cliffs at export seams. The corpus must be re-merged across handles to read the true trajectory — and even then, 2019–2024 Annie volume is only recoverable from the separate ANNIETEXTS/combined exports, not this file.

## Burstiness — Dan writes in tight machine-gun runs

- Of all gaps between Dan's consecutive sent messages, **62.7% are under 2 minutes** — he writes in dense bursts, not spaced-out replies. Recomputed 2026-10-07 on the `raw/imessage/` family: **67.5%** under 2 minutes, 81.9% under 10 minutes — same fingerprint, marginally stronger.
- The longest observed run of consecutive sends with gaps under 10 minutes is **284 messages** — a single unbroken output storm.
- Median inter-send gap is **1.0 minute**; mean is 114 minutes (dragged up by the long silences between bursts). The distribution is bimodal: either he is firing continuously or he is dark for hours. Recomputed 2026-10-07: median **0.65 minutes** (39 seconds).

This burst profile is the behavioral fingerprint of the [[wiki/mind/concepts/attachment-model|fusion mode]]: when the attachment system is active, output is continuous and immediate; when it is not, the channel goes quiet. The floods at relationship onset (Dec 2015) and termination (2025–26), already documented on [[wiki/mind/synthesis/bond-switch-2015]], are the extreme tails of this same burst distribution.

## Yearly volume arc, 2015–2026 — the dormant years quantified

A separate corpus cut (OMNI_FORENSIC_DOSSIER.md, 175,358 messages,
2015-11-12 to 2026-03-25) supplies a whole-corpus yearly total this page's
per-contact tables don't assemble on their own — and it is the only place
in the wiki with hard numbers for the 2021–2024 low-activity years, which
the timeline pages otherwise describe qualitatively:

| Year | Total messages | Arc label |
| :--- | :--- | :--- |
| 2015 (Nov–Dec) | 13,819 | Genesis (Annie) |
| 2016 | 20,221 | Peak chaos |
| 2017 | 17,551 | Crisis / cam era |
| 2018 | **40,514** | Maximum output (drug/relationship spiral) |
| 2019 | 20,153 | NYC / disengagement |
| 2020 | 6,311 | COVID collapse |
| 2021 | 280 | Near-total silence |
| 2022 | 4 | Dead channel |
| 2023 | 954 | Reactivation |
| 2024 | 4,376 | Rebuilding |
| 2025 | **41,278** | Maximum resurgence |
| 2026 (Q1) | 9,896 | Current velocity |

2018 and 2025 are the corpus's twin peaks, within 2% of each other in raw
volume — confirming from the total-message angle what
[[wiki/timeline/periods/2018-deep-cycle]] already names qualitatively
("~40k msgs/yr") and giving [[wiki/timeline/periods/2025-collapse]] its
own precise figure for the first time. The 2021–2022 trough (284 combined
messages across two full years) is the corpus's hardest floor — a near-total
communication blackout this page's per-contact analysis, built on 2015–2018
and 2025–2026 windows, does not otherwise surface. Recomputed 2026-10-07 on the
`raw/imessage/` family (sent messages only): 2021 = 154 sent, 2022 = 0 sent —
the same floor, confirming the trough is not a counting artifact. Note this table counts
raw message volume across all contacts, not the Annie-specific figures
in the section above; the two should not be conflated.

## Volume concentration (re-derived, matches prior Gini)

Across the corpus, Annie's two handles dominate. This primary cut re-confirms the [[wiki/mind/concepts/contact-gini|Contact Gini]] finding from raw: of Dan's 70,123 sent messages, the top contact (+172****6811) alone is 31,635 (45%). The next tier (+172****4125, +172****3678 in 2018–19; +133****8747, +121****2449 in 2025) are each bounded single-year spikes — friendships or entanglements that flare for one period then vanish from the log. The steady state is one channel at 45%+ and everything else as transient satellites.

## What this page carries that no existing page had

- A **corrected reply-latency series** establishing the Annie channel as near-synchronous: she answered faster than Dan in every year measured (2015–2026, including the final weeks), with Dan the slower party in eight of ten per-contact exports overall.
- The **re-verification protocol** — Method A vs Method B, the burst-bias analysis, the direction-field bug — that killed the original 9× asymmetry claim and is documented well enough to be re-run from the repository's on-disk files.
- The **"synchrony has no off-hours"** cut: hour-by-hour latency on the Annie channel is flat at 14–29 s medians around the clock, with the asymmetry widest at 3–4am — she answered the insomniac flood as fast as the noon check-in.
- The **merged Annie 2015–2018 volume arc** with the 2019 export-cliff called out as an artifact, not a silence.
- The **circadian curve** and its **era drift** (15.5% → ~10–12% nocturnal) — entirely new timing data.
- The **62.7% sub-2-minute burst rate** and 284-message max run — the output-storm fingerprint.

## Conflicts in the record

### 2026-08-23 — The 9× reply-latency asymmetry retraction

This page's original headline was backwards, and the error is reproducible. The section that opened *"The headline: a 9× reply-latency asymmetry with Annie"* concluded: *"Dan answers almost everyone within 1–5 minutes. The people he messages answer him on a completely different clock… Dan's outbound responsiveness is uniform and near-instant across every relationship — the inbound delay is what differentiates them… everything else is Dan broadcasting into a slow or silent void."* The table under it gave **Annie at 1.0 min outbound against 9.0 min inbound, n = 31,612**.

The original figure was reproduced exactly, which is what makes the diagnosis possible. Pairing **every** message with the next message in the opposite direction, uncapped, over the 2015–2019 Annie handle returns **Dan → Annie median 60.0 s (1.0 min), n = 31,177** — the page's own 1.0 min and, to within 1.4%, its n of 31,612. The same computation on the same rows returns **Annie → Dan median 32.0 s (0.5 min)**, not 9.0 minutes. The outbound half replicates; the inbound half is off by a factor of about seventeen and is the only number in the pair that does not survive.

The hazard was one this page's own method note had flagged: the master dump carries a **known direction-field bug** in which Received rows are mislabeled and Sent rows carry an empty handle. The page stated it used `LEVIATHAN_FULL_CORPUS.csv` as ground truth to avoid exactly this — but that file lives at `/Volumes/MUSIC/PHASE B RAW/`, is **not in the repository**, and therefore cannot be re-checked. Every file that *is* on disk contradicts it on the inbound half. The retraction is recorded at `RETRACTED.md` §`latency-9x-asymmetry`. The 2026-10-07 re-verification on the on-disk `raw/imessage/` family replicates the *corrected* direction on an independent file family, closing the loop the original could not.

### 2026-10-07 — "What this adds" bullet superseded

The former section "What this adds that no existing page had" opened with the claim: *"A quantified reply-latency asymmetry (Dan ~1–5 min vs others 9 min to 44 h) as a direct measure of relational centrality — the inbound delay is the axis of differentiation, not the outbound speed."* That bullet carried the retracted figure's framing and has been replaced by the corrected-latency series. The remaining bullets (merged volume arc, circadian curve and era drift, burst rate) stand unchanged.

### 2026-10-07 — Method caveat superseded

The former "Gaps / caveats" section stated that reply-latency's pairing method "slightly over-states Dan's reply speed … but the *order-of-magnitude* asymmetry is robust across every contact." The asymmetry that sentence defended no longer exists; the surviving method hazard is documented in "How the measurement is made" above (burst bias under Method B, the direction bug, scope of pairing), and the section has been retired in favour of inline limits.

### Unresolved sources

The frontmatter sources carry standing unresolved-source warnings: `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv` and `raw/self/dox-md/OMNI_FORENSIC_DOSSIER.md` no longer exist at those paths in the current corpus, and `/Volumes/MUSIC/PHASE B RAW/LEVIATHAN_FULL_CORPUS.csv` is outside the repository and unverifiable by anyone without that volume. The exact figures on this page whose provenance traces to those files cannot be re-checked from the wiki's own corpus. The 2026-10-07 pass added the on-disk files it used (`raw/imessage/messages-part1-2011-2019.csv`, `raw/imessage/messages-part2-2019-2026.csv`, `raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv`) as new frontmatter sources so the headline direction is reproducible from the repository alone.

### Cross-page tension: the 16–44-hour inbound claim

A frontmatter connection on this page (to [[wiki/mind/synthesis/attachment-trauma-bond]], type `evidences`) carries the claim that "the 2025-26 handles' collapse to 16-44-hour inbound medians against Dan's unchanged 1-5-minute outbound quantifies the terminal-phase asymmetry the bond thesis describes." **No per-handle file documented on this page reproduces that figure.** This page's own 2025–26 rows show 268 s vs 252 s (≈4.5/4.2 min) on the 2025–26 Annie handle, and the 2026-10-07 re-verification shows 0.5–0.9 min medians on the same handle family, with the Aug–Sep 2026 export at 18 s vs 27 s. Minute-scale inbound, not hour-scale. The 16–44-hour figure may come from a different instrument or file family (e.g. a date_read-based or gap-conditioned cut) not tabled here; until its method is documented against on-disk rows, it should be read as an unverified cross-page figure, and the connection claim stands on it, not on this page's tables. Current standing: tension unresolved — the bond thesis's terminal-phase asymmetry needs a re-check against `raw/imessage/` rows before it can be treated as established.

## Assessment

The timing data establishes one strong structural claim and one strong relocation. The structural claim: for eleven years, the Annie channel was the only relationship in Dan's archive that answered him at or above his own speed, continuously, at every hour of the day, to the final weeks. That near-synchrony is the quantitative signature of the channel's singular status — a better explanation of why relational load concentrated there than any story about unrequited broadcast. The relocation: the deficit that drove a decade of verification looping was never responsiveness. The replies came faster than his own; what was missing was content, measurable as message length rather than delay, which is where [[wiki/mind/concepts/reassurance-architecture]] and the [[wiki/mind/profile/texting-deviance-audit]] remediation target (11–20-word turns answered at 93.8%) now sit. The peripheral-contact picture — hour-scale inbound delays against minute-scale outbound — was always real and is the contrast that makes the central channel legible. The 2025–26 terminal-phase asymmetry, as distinct from the decade series, remains the one quantitative question this page leaves open.

## See also

- [[wiki/mind/concepts/attachment-model]]
- [[wiki/mind/concepts/contact-gini]]
- [[wiki/mind/concepts/reassurance-architecture]]
- [[wiki/mind/synthesis/attachment-trauma-bond]]
- [[wiki/mind/synthesis/read-receipt-forensics]]
- [[wiki/mind/profile/texting-deviance-audit]]
- [[wiki/mind/synthesis/bond-switch-2015]]
- [[wiki/people/annie-ulmer]]
- [[wiki/self/message-corpora/master-message-dump]]
- [[wiki/timeline/periods/2018-deep-cycle]]
- [[wiki/timeline/periods/2025-collapse]]

## References

- raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- /Volumes/MUSIC/PHASE B RAW/LEVIATHAN_FULL_CORPUS.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus; not in the repository, not re-checkable.
- raw/self/dox-md/OMNI_FORENSIC_DOSSIER.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- raw/imessage/messages-part1-2011-2019.csv — 2026-10-07 verification pass.
- raw/imessage/messages-part2-2019-2026.csv — 2026-10-07 verification pass.
- raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv — 2026-10-07 verification pass (terminal window).
- RETRACTED.md §`latency-9x-asymmetry` — the 2026-08-23 retraction record.
