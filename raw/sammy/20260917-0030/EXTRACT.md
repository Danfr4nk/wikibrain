# EXTRACT.md — batch 20260917-0030

Window: 2026-09-16T23:38:12.55Z → 2026-09-17T00:23:23.999Z (19:38–20:23 EDT).
3 on-record rows (0 user / 3 assistant), all surface main_chat.
CUMTHREAD3 carve-out held: 0 rows from 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853.

This is a tail batch from the 6h heartbeat (scheduled 20:30 EDT), covering the
sliver between the 4h scrape's batch 20260916-2340 tail (19:38:12Z) and the
heartbeat run. No user messages in the window — Dan was away from the chat.

## Analysis status

- [x] Transcript archived (chats.json, full bodies, md5-verified byte-exact
      against the DB for all 3 rows; sha256 in manifest.json)
- [x] Source node src:1669 (main-chat transcript, reliability primary)
- [x] Datum node dat:1670 (Annie cosmetology license + Dan's first self-cut,
      graded B+ — scrape-missed finding from the 2340 window; evidence-grade)
- [x] Annie entity page: dated 2026-09-16 subsection (dat:1670)
- [x] Media: 4 scrape-missed items from the 1940 window registered in
      media/registry.json (linked_nodes empty; intimate pair PUBLISH-WITHHELD
      per batch 1940's EXTRACT decision — registry records only, no embeds)
- [x] External checks: carried from the scrape's 23:58Z zero-new sweep;
      next 4h scrape (23:40 EDT) owns externals

## Findings (2)

1. **Browser-task tombstones (2).** "Update piano roll layout" (19:38 EDT)
   closes the MELODY piano-roll layout browser task; "Fix face crops and age
   instrument" (20:23 EDT) closes the workbench face-crop + age-instrument
   task. The age-instrument item follows dat:1666's false-alarm verdict
   (reported stuck, test rig cleared it); Dan's fix request is the live
   continuation. No new evidence-grade claims beyond activity records.

2. **Scrape-repair report (20:06 EDT).** The main agent hand-repaired the
   19:40 scrape worker's died-mid-run batch (analysis complete, never pushed)
   and landed it: wikibrain PR #100 merged, RAWLOGS mirrored, watermark
   advanced. Its enumerated findings duplicate dat:1661–1668. One new
   causal detail for the record: the 971 ig3 Instagram files never reached
   RAWLOGS because that push died with GitHub 500s (already recorded as the
   open gap in dat:1667; cause now explicit).
