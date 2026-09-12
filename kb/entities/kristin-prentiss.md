+++
id          = "ent:kristin-prentiss"
layer       = 2
type        = "entity"
entity_kind = "person"
title       = "Kristin Prentiss"
cites       = ["dat:0304-kristin-date-range-revision-november-end",
               "dat:0801-kristin-thread-held-corpus-count-20014",
               "dat:0802-kristin-prentiss-surname-self-attested-kayden-absent",
               "dat:0803-kristin-terminal-sixteen-minutes-corroborated"]
confidence  = "high"
importance  = 5
created     = "2026-09-09"
tags        = ["romantic-line", "annie-decade", "imessage", "severance"]
+++

## Summary

Kristin Prentiss is "the only other relationship of the Annie decade":
August–November 2025, roughly ten weeks, 20,014 held messages, ended over
$40, block imposed December 9, 2025 and held since. The ingest makes her the
most exhaustively counted thread in the record — the corpus census replicates
to the row, the terminal sixteen minutes verify message-for-message, and her
own messages self-attest the surname while the dossier's "Kayden" claim
returns zero hits. Her thread also explains a load-bearing correction
elsewhere: her handle was once mislabeled under Tom Maison's, overstating his
corpus weight ~2.9x (see `ent:tom-maison`).

## Identity

- **Kristin Prentiss** — the surname is self-attested in her own sends:
  *"I just don't know how you expect me, Kristin Prentiss - to believe that
  you, Dan Frank are sufficiently healed…"* (2025-09-11 08:28:08 UTC) and
  *"The thing about Kristin Prentiss is I am extremely good at hiding my
  emotions"* (2025-09-13 15:49:58 UTC); 23 "Prentiss" mentions thread-wide.
  The "Shaelene" alternative rests only on a Facebook display-name filename.
  [dat:0802](../data/0802-kristin-prentiss-surname-self-attested-kayden-absent.md)
- **The dossier's "mother of Kayden" claim is uncorroborated in the primary
  record:** a case-insensitive scan of the full thread returns **0 hits for
  "kayden"** across 20,014 rows; 3 hits for "ryder" — consistent with the
  page's corrected reading that Ryder is her half-sister's stepson, *"the only
  kid I've ever been around ever."* The "mother" framing stays an open
  contradiction.
  [dat:0802](../data/0802-kristin-prentiss-surname-self-attested-kayden-absent.md)
- Akron/Barberton OH; entered Dan's life through Tom's social circle
  (page-attributed, old-wiki testimony).

## Timeline

- **2025-09-01 10:07:17 UTC:** first held row — the thread's opening.
- **2025-09-11 / 2025-09-13:** the two self-attestation messages.
- **2025-11:** 53 messages — the withdrawal month.
- **2025-11-02 / 2025-11-04:** the $40 messages (14:33 ET / 21:56–21:57 ET —
  held as 19:33 / 02:56–02:57 UTC); the dispute that ended it.
- **2025-12-09:** the terminal sixteen minutes — the Dec 9 burst (171 rows)
  ends with her *"All this is screenshotted. Blocking you now. Don't contact
  me again or an officer will be reaching out. Thank you"* (23:55:49 UTC) and
  Dan's *"mr. officer i live at 337 saratoga drive"* (23:56:19 UTC).
- **2025-12-10 20:29 ET:** the thread's final held row (2025-12-11 01:29:12
  UTC) — consistent with the page's "final message on 10 December" once
  UTC→EST conversion is applied.
- **End-date revision history:** the old wiki dated the relationship
  2025-09-01 → 2025-12-10 as a *"best-effort timestamp of first and last
  sighting"*; a 2026-08-16 analysis of 22,018 messages moved the end to
  **November 2025** — the re-analysis itself is not re-verifiable here, filed
  as a revision-chain record only.
  [dat:0304](../data/0304-kristin-date-range-revision-november-end.md),
  [dat:0801](../data/0801-kristin-thread-held-corpus-count-20014.md)

## Evidence for the core claims

- **The count replicates.** Direct Python count of the held corpus on her
  handle: **20,014 rows — 10,102 sent / 9,912 received**, 2025-09-01 →
  2025-12-11 UTC. The page's 20,009 undercounts the received side by exactly
  5 rows; the 5-row gap is immaterial to every argument the page makes.
  [dat:0801](../data/0801-kristin-thread-held-corpus-count-20014.md)
- **The terminal sixteen minutes verify message-for-message.** The page's
  times are Eastern (EST = UTC−5 in December); every beat corroborates:
  23:40:42 UTC Kristin *"Get off my shit I'll block you bitch"* (page 18:40);
  23:42:23/23:42:34 UTC Dan *"guess who has your IP address"* / *"guess who
  has your WPA2 password"*; 23:45:24 UTC Kristin sends `https://complaint.ic3.gov`;
  23:51:04 UTC the IPR Center referral form; 23:52:21 UTC Dan *"'I'm CALLING
  THE POLICE ON YOU!'"*; 23:53:58 UTC Dan *"lawyer first question : so did
  you block him and he used other numbers?"*; 23:54:18 UTC Kristin *"I didn't
  give you my IP address. And trust me I already know the entire process"*;
  23:55:49 UTC the block threat; 23:56:19 UTC Dan's address taunt. **No
  charges documented on either side** — consistent with the page's "real and
  uncharged" threat-surface note.
  [dat:0803](../data/0803-kristin-terminal-sixteen-minutes-corroborated.md)
- **The front-loaded-then-dormant shape is measured:** November 2025 = 53
  messages exactly; the Dec 9 burst = 171 rows.
  [dat:0801](../data/0801-kristin-thread-held-corpus-count-20014.md)
- **The block held.** Since Dec 9, 2025 — the one clean severance in the
  record, unlike the Annie-era pattern.

## Evidence against / limits

- **The November end date is a reported conclusion, not a re-verified one.**
  The 22,018-message 2026-08-16 pass is not held here; only its conclusion is
  on the wiki. Recomputing the last-contact date from the held corpus is
  flagged as a separate task, not done.
  [dat:0304](../data/0304-kristin-date-range-revision-november-end.md)
- **The $40 dispute detail is thin in the held record.** The Nov 2/4 messages
  are timed in the terminal table; the causal story (the relationship "ended
  over $40") is the page's, carried as testimony.
- **The 5-row discrepancy between the page's dedicated export
  (imessage_3307038747_both_all_now.csv, 20,009) and the held corpus (20,014)
  is unexplained** — near-duplicate or boundary handling, not individually
  identified. Immaterial, but unassigned.
  [dat:0801](../data/0801-kristin-thread-held-corpus-count-20014.md)

## Contradictions found by the ingest

- **The "Shaelene" and "Kayden" alternatives are page-resolved, not
  corpus-resolved.** The page corrects them from the primary record (her own
  sends; the zero-hit scan), but the dossier's "mother" framing is left as an
  open contradiction rather than a falsification — the page's caution is the
  correct call given the zero-hit is negative evidence, not positive.
  [dat:0802](../data/0802-kristin-prentiss-surname-self-attested-kayden-absent.md)
- **Date-revision chain (Sep→Dec 2025 → November):** the old page's "best-
  effort" range was explicitly flagged as provisional; the November revision
  supersedes it but awaits the flagged re-derivation from the held corpus.
  [dat:0304](../data/0304-kristin-date-range-revision-november-end.md)

## Open questions

- Recompute the relationship's last-contact date directly from the held corpus
  to test the 2026-08-16 "ended in November" conclusion (flagged, not done).
- Does the final Dec 10 row represent a post-block message from her, or Dan's
  outbound tail? The block message itself went out Dec 9; the Dec 10 row's
  sender/direction is worth one direct look.
- What did the $40 dispute actually consist of — the causal story behind the
  number?

## Cross-links

- `ent:tom-maison` — her handle's mislabeling under Tom overstated his corpus
  weight ~2.9x before the correction; she entered Dan's life through his
  circle.
- She is the record's "dormancy, not exit" anti-case: the one relationship
  that ended with a block that held, against which the Annie and Alexis
  non-exits are measured.
