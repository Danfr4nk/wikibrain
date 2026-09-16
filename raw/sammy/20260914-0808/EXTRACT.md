# EXTRACT.md — batch 20260914-0808

Raw archive of the 03:40 EDT wiki-brain-scrape slot (retry, attempt 2). Chat window
2026-09-14T03:46:14Z → 07:01:10Z: 118 user/assistant rows, byte-exact, 0 truncated.
System-role rows (274) excluded per the 0340 precedent (tool metadata; muse.db
statement-timeout risk) — counted in manifest, not archived.

## What analysis owes

- Read the 118 rows in chats.json against the whole corpus and write synthesis:
  1. Mercer St phantom verdict (assistant 04:39:54Z): 16 hand-labeled SoHo "WORK" visits
     dedupe from 32 labels, all actually Au Za'atar dinner shifts at 1063 1st Ave
     relabeled during the Oct 2023 timeline-curation spree; Timeline deleted Oct 20,
     2023 but Records.json survived. Hypothesis on record: data-integrity experiment.
     → kb treatment of Dan's own hand-edits as compromised source + behavioral read.
  2. GeoGuessr "I feel like I'm on acid" moment (04:44Z, 04:45Z — second send after
     "Wrong thread sorry"): cross-chat message bleed + re-send; stylometry state
     tracker already labeled it metaphor, not substance (03:00 report 07:01Z).
  3. Rasputin → Alexander I → Metternich → Versailles/Vienna correction dance
     (03:47–04:07Z): three conflation→catch→correct cycles in 20 min; background is
     the Historia Civilis series. Check against existing kb nodes on his history
     learning / error-correction cadence before writing anything new.
  4. 6h heartbeat report embedded in-band (06:50:57Z): dat:1534–1542, six articles
     edited, Chapo "same exchange" falsified (SoundCloud share 2020-03-09 to a third
     person), Au Za'atar headcount 445→712 (old methodology preserved as dated
     contradiction), NYC move pinned Mar 2–6 2019. Pipeline notes: repo size choking
     push path (incremental tree builds); SQLite timeouts persisting (129 chat +
     61 system rows unarchived gap, carried forward).
  5. PR #63 merged (69 micro-breakdown), #11 date conflict resolved, #25 rebased to
     main (still draft, awaiting Dan's ready-for-review call) — from 04:19Z / 04:27Z.
  6. Annie 2020 recording play-by-play continued in-band (67-min file mapping,
     facesit second-by-second 7:33–8:53); "Did you finish the play by play?" thread.
     ANNIE RULE: any finding about Anne Ulmer appends as a dated subsection to
     kb/entities/annie-ulmer.md.
- Externals: zero new items everywhere (instagram/threads/facebook/messenger/spotify
  checked ~08:05–08:10Z by attempt 1; device: no read path). Spot-check before
  advancing watermarks, or record this batch as the check.

## Completion record
(append below when analysis commits; never rewrite the above)

## Completion record (2026-09-14T08:3xZ, batch 20260914-0808)

Analysis committed on sammy/wiki-sync. The 6h writeback heartbeat had already
captured the main threads as dat:1534–1542 on main (Mercer phantom, location
teardown, PR triage, monoculture thesis, Historia Civilis thread, avatar socks,
second-by-second facesit, telemetry hardening, Chapo falsification) — this
batch's synthesis added what it missed:

- `dat:1543-stylometry-0300-report-20260914` — 03:00 ET report instance (21:00–
  03:00 ET, 12 windows): Historia Civilis paste artifacts flagged as not-state;
  first metaphor-vs-substance disambiguation ("acid" x2 = a feeling, not a
  substance). Extends the dat:1500→dat:1513 calibration series.
- `dat:1544-cross-thread-bleed-20260914` — GeoGuessr "acid" line sent to wrong
  thread, self-caught in 17s ("Wrong thread sorry"), re-sent expanded. Single
  observed misfire: datum, not pattern.
- `dat:1545-forensic-tax-trade-20260914` — "Oh fuck I shouldn't have asked I just
  ruined such a fun story" → re-commissioned the forensics in the same minute.
  The self-aware cost of the analysis appetite.
- `dat:1546-phonetic-production-specimens-20260914` — "nopples," "Alexandrian,"
  "rifht" x2, "geoguesser"; "audible" held out as possible dictation. Extends
  dat:1516 + int:typed-phonetic-production-20260913.
- `int:mercer-relabel-motive-20260914` — low-confidence llm-perspective reading:
  semantic layer disposable/assertional, sensor layer ground truth; motive an
  open question (experiment hypothesis unconfirmed; privacy/aesthetics/practical
  alternatives listed with falsifiers).
- `kb/entities/dan.md` — dated evidence block (error-ownership: "No you didn't.
  I said it." — refusing the offered-out; attribution precision).

Failed the adversarial test (not written): conflation→catch→correct as a
stable cadence (single session, single domain — stays a datum at dat:1538);
Mercer = data-integrity experiment (unconfirmed hypothesis, kept as low-conf
interpretation); cross-thread bleed as recurring workflow pattern (n=1);
"on acid" as substance signal (tracker logged it as metaphor); PR #25 stale-CI
(already in AGENTS.md + dat:1536); pipeline meta-facts (operational, already in
the heartbeat report).

Externals: zero new items everywhere (instagram/threads/facebook/messenger/
spotify checked ~08:05–08:10Z; device: no read path). Zero-count checks
recorded as per-source JSON in this batch.

## Withdrawal note (2026-09-14T08:50Z)
`dat:1543-stylometry-0300-report-20260914` WITHDRAWN before push: the 0740
rescue run (08:08-08:35Z) had already captured this exact report instance
on main as `dat:1543` (`kb/data/1543-stylo-6h-report-2026-09-14-0300.md`,
PR #65, commit 83ff84e). Same 03:00 ET report, same disambiguations —
keeping both would be a duplicate node and a numbering collision. The raw
archive (chats.json) still holds the byte-exact report rows; the evidence
lives under the rescue's node. Remaining new nodes in this batch:
dat:1544, dat:1545, dat:1546, int:mercer-relabel-motive-20260914.
