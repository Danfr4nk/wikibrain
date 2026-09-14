# EXTRACT.md — batch 20260913-0740

## What this batch is
Chat-transcript scrape (4h cron `wiki-brain-scrape`), window
2026-09-13T03:42:37.531Z → 2026-09-13T07:43:04.009Z. 280 user/assistant rows
(91 user / 189 assistant, byte-exact, md5+length-verified per row; all chat
IDs resolved — 273 were null at assembly and rebuilt from the full-body
query records) + 336 system pins (ID/timestamp/hash only; event 10823's
message ID was duplicated from 10822 at assembly and corrected against the
DB: 10822=`tool-guidance-call_01a099b4ca5a7e7292ac37ced3dee4b9`,
10823=`tool-guidance-call_01a099b4cc3578609f60a2f53781634b`). External
sources: instagram/threads/facebook/messenger zero new; spotify now-playing
unchanged (PAUSED, 'don't need u (i do)' by blunn, same progress_ms as last
batch); device: no read path. All six external checks healthy.

Cutoff note: frozen at 07:43:04.009Z; later rows land next run. Watermark
advances to 2026-09-13T07:43:04.009+00:00.

## What the analysis owes
- [x] New claims → kb/data + kb/sources (this batch):
  - `dat:1482-state-calibration-battery-gains-pre-post-cannabis-delta-prot` —
    pre/post cannabis instrument commissioned and built into the web app;
    first run logged post-hitter (~348ms avg, span 6, 105 taps), sober
    baseline still pending; early-stop race bug fixed
  - `dat:1483-kristin-video-call-transcription-her-reads-on-dan-his-stated` —
    the two pasted transcription blocks: her neurodivergence disclosure,
    her kink-origin read ("decade long situation with Ann"), the "do you
    need love?" exchange ("few things I want LESS"), the "you have sauce" /
    "stop acting like you need wiki and chatGPT" passage, her Annie
    supplier read, her Suz-dependency read, the Messenger recents list
  - `dat:1484-order-switch-incident-transcription-flipped-the-speaker-scre` —
    transcription flipped the speaker of "now that I think about it";
    screen recording (blue bubble) proved the line was Dan's; method note
    on pasted-transcription fidelity
  - `dat:1485-dan-reports-the-fred-flintstone-feet-fixed-after-the-bootie` —
    "I finally fixed my fuxked up Fred flinstone feet" (resolves dat:1477)
  - `dat:1486-state-tracker-03-00-report-dan-s-own-substance-labels-for-th` —
    his labels: hitter ~23:50–01:00, ~1g coke on the day from 14:21;
    battery 01:00–01:07 post-ingestion 277–457ms; 5 flags all paste artifacts
  - `dat:1487-avatar-pivot-okay-it-s-annie-time-nuke-orb-end-frame-aesthet` —
    "Okay it's Annie time"; nuke-orb end-frame aesthetic as the avatar
    reference; ~32nd change live
  - `src:sammy-chat-transcript-20260913-0740`
- [x] ANNIE RULE: dated 2026-09-13 subsection appended to
      kb/entities/annie-ulmer.md (Messenger recents: "Goodnight love you and
      Mimi" continuity + the "Annie, Shu & ..." group quote "And if the
      junkie says I'm lying I have a pic"; Kristin's supplier read as
      attributed testimony; the "Annie time" avatar pivot)
- [x] kb/entities/kristin-prentiss.md: dated 2026-09-13 subsection ("The
      video-call transcription layer") with the evidence ledger; narrative
      prose already live in wiki/people/kristin-prentiss-2026-09-12-update.md
      (merged via PR #45, expanded 573 lines, rewritten as 13 linear
      chapters per his human-article directive)
- [x] Numbering collision handled: origin/main concurrently landed
      dat:1480 (NotebookLM tactical-autopsy inventory) and dat:1481 (Ally
      2018-12-17 joke-as-threat) via the 20260913-0235 writeback; this
      batch's nodes start at dat:1482. The NotebookLM inventory in this
      window duplicates dat:1480 — no new node.
- [ ] PROSE OWED (not yet landed): the pre/post cannabis delta protocol is
      one instance; if a second within-subject pharmacological protocol
      appears, promote to pat: (self-instrumentation as his default response
      to altered states).
- [ ] PROSE OWED: the avatar-churn sequence (sauna pair → brunette braid →
      Star-of-David face paint → chaos merger → 10x chaos → nuke orbs) has no
      wiki home. Candidate: the generative-image/avatar-churn synthesis
      article already owed from the Whisk datum (batch 0340).
