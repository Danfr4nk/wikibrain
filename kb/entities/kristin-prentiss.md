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

## 2026-09-13 — The video-call transcription layer

During the Sep-12/13 re-initiation, Dan pasted a full chat-log transcription of
the video call (2026-09-13T04:21–04:22Z, `src:sammy-chat-transcript-20260913-0740`),
in two blocks alongside the screen recordings. This subsection records the
evidence; the human narrative lives in
`wiki/people/kristin-prentiss-2026-09-12-update.md` (the redux article, merged
via PR #45, expanded to 573 lines and rewritten as 13 linear chapters per Dan's
"human article" directive — forensics demoted to footnotes).

New evidence from her side, all attributed testimony:

- Her neurodivergence self-disclosure: "You know I'm autistic too right? Or
  have BPD, ADHD, OCD, whatever the fuck the gay terminology you want to slap
  my ass with - I look at everything as a graph, scale, percentages, etc."
- Her kink-origin read on his asphyxiation/cuckoldry talk: "I think you just
  think you enjoy these things bc of the decade long situation with Ann. But -
  I could be wrong. Only you know you best and what you were into prior" /
  "Idk if you're just traumatized and the worst example of internet possible."
- The "do you need love?" exchange: she asks "do you need love? I don't get
  it lol" and says "the only thing that holds me to you is your need for
  metaphysical as opposed to just physical." He answers: "Do I want to? There
  are few things I want LESS"; "I either want an intense and all consuming
  obsession with someone (and I have the track record to prove I did exactly
  that for a decade lol)"; "I want to be obsessed. I don't think it's possible
  for anyone to be obsessed with me. Too annoying."
- Her direct hit on the apparatus: "You do have sauce ... you're naturally
  cute. Aside from blowing coke all day... You're not a fucking robot like
  you think. Quit doubting yourself so much. You're smart, stop acting like
  you need wiki and chatGPT and 20 programs to tell you who you are. Just be
  bro."
- Her visit boundary: "If you're saying I can't stop by without being your
  gf so be it. I have so much healing to do."
  [dat:1483](../data/1483-kristin-video-call-transcription-her-reads-on-dan-his-stated.md)

Method note from the same window: Dan's pasted transcription flipped the
speaker of the "now that I think about it" line; the screen recording (blue
bubble) proved the line was his, and the assistant's initial read was
corrected on the spot. Pasted transcriptions are his re-typing, not system
exports — speaker attribution in them is fallible.
[dat:1484](../data/1484-order-switch-incident-transcription-flipped-the-speaker-scre.md)

## 2026-09-21 — In-person correction: the night-vision basement night of 2025-09-18/19

The load-bearing "never met in person a single time" claim is dead. His own
security footage — five contemporaneous night-vision clips, on-screen camera
timestamps 2025-09-19 01:58:44 AM to 02:12:20 AM — shows two clothed figures
on the couch in his basement (laptop on stand, wall posters), one draped over
the other. Dan identifies the second figure as Kristin; that ID is his
testimony (per his photo-ID rule), not a facial ID off IR footage. This was
week 3 of the relationship — the first confirmed in-person meeting, and the
only one confirmed.

Contemporaneous text corroboration from the 3307038747 iMessage thread,
2025-09-19 13:12:31 (Dan): "I love you so much. I really felt it last night.
I'm so fucking glad I found you" — texting about the in-person night.
[`dat:1841`](../data/1841-kristin-first-confirmed-in-person-meeting.md)
[`src:kristin-basement-security-cam-20250919`](../sources/kristin-basement-security-cam-20250919.md)

Sequencing correction: her Sept-20 02:34 "I'm going to do the thing I do -
like .. pull away" landed roughly 24 hours AFTER she was physically in his
basement. The withdrawal followed proximity, not text-play — the whole
disorder-test reading of Sept 19–20 runs on the corrected timeline now.

Note the same window carried both versions: Dan's 00:48Z "goon club
application file" read of her still repeated the stale "never met you in
person" line, hours before the footage evidence was assembled. The footage
wins; the application-file line is superseded.

Not claimed: that this was the ONLY meeting. Her Sept-20 grievance "you
wouldn't drive to see me" now sits next to footage of her in his house —
both held, unresolved. The footage does not show sexual activity and no such
claim is made.

Identity anchors, same window: +13307038747 is Kristin (Dan's own words,
2026-09-21 02:05 EDT, after the "manure"/"Menore" speech-dictation detour;
[`dat:1843`](../data/1843-handle-ids-20260921.md)); born 21 July 1990
(Barberton, Ohio — his application-file read, 2026-09-21 00:48Z).
[`src:20260921-0230-sammy-chat-transcript`](../sources/20260921-0230-sammy-chat-transcript.md)

## Cross-links

- `ent:tom-maison` — her handle's mislabeling under Tom overstated his corpus
  weight ~2.9x before the correction; she entered Dan's life through his
  circle.
- She is the record's "dormancy, not exit" anti-case: the one relationship
  that ended with a block that held, against which the Annie and Alexis
  non-exits are measured.
