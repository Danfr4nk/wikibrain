# Gap candidates surfaced by `severance-declarations.md`

Companion to `wiki/mind/synthesis/severance-declarations.md` (2026-09-13 batch).
Each candidate below is a page the synthesis entry identifies as missing but does
not itself write. Listed strongest-first. None are started; none are indexed.

## 1. Full-corpus severance-language atlas (all 503 handles)

**What:** a declaration-language search across the entire 95,067-row corpus and all
503 handles — not just the Annie dyad. Per-handle counts, per-handle resumption
profiles, witness structure per episode, 2015–2026.

**Why:** `severance-declarations.md` proves the grammar predates Annie (Tom, 2014:
*"Alright well bye then"* → next-day resumption) and analyzes only 44 terminal-phase
instances at language level. The open question is whether the monthly cadence (~12.3
declarations/year on the Annie channel) and the ~100% resumption profile are
dyad-specific or system-wide. Alexis (2009–2015) and Danielle (2005–2009) are entirely
unsearched. If the grammar is system-wide, the monthly cadence should appear there too.

**Evidence on hand:** `kb/data/1292-block-unblock-loop-severance-recount-129-128.md`
(129/128/36s recount); the 44-instance catalog in the synthesis entry's appendix;
`raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv`.

**Cheapest first step:** run the expanded declaration regex (the entry's Method
appendix documents the adjudication protocol) against all filed exports, grouped by
handle, with gap-to-next-message per hit.

## 2. Witness-channel declarations and third-party ratification

**What:** a page on declarations performed *for* third parties rather than the
counterparty — the Ally-thread block-claims (2026-08-28, 09-04, 09-07: *"I blocked
Annie tonight"* while the Annie channel carried daily two-way texting), the August 19
group-chat clearing, and the August 26 wiki episode (five pages built on unexecuted
declarations).

**Why:** the synthesis entry's witness analysis finds the declaration migrates to
witnesses under terminal pressure (September: the bond gets *"Good night pretty
girl,"* the witness gets the obituary) and that the wiki itself has served as the
performance's audience. Whether any witness ever *checked* (asked for proof of a
block), whether the September migration has precedents, and whether earlier
write-backs were built on unexecuted declarations is unexamined — including a
self-audit the retraction protocol invites but hasn't performed.

**Evidence on hand:** the filed Aug-Sep export (Ally-thread rows); `dat:0090`
(August-26 correction); the synthesis entry's "The declaration needs a witness" and
"The September migration" sections.

**Cheapest first step:** enumerate all Ally-thread (and Suz/Tom/group-thread)
severance claims in the filed exports; check each against same-day Annie-channel
activity; note any witness check or challenge.

## 3. "Good night pretty girl" ritual history

**What:** a history of the tenderness ritual — when it started, its frequency across
the decade, and above all whether it ever *stopped*.

**Why:** the synthesis entry identifies the ritual as the declaration's
counter-grammar: nightly bond-affirming utterances (attested 2026-09-07 01:44:26, in
the same 72 hours as *"Omfg goodbye"*) that re-issue the founding rule while the 129
declarations evaporate. In a system with zero verbal severance signals from her, the
*cessation* of his tenderness ritual would be the closest thing the record could
produce to a behavioral severance signal from either side. The filed export shows no
cessation through September 7; the full history is unmeasured.

**Evidence on hand:** the filed Aug-Sep export (2026-09-07 01:44:26 instance);
the 765-messages-in-72-hours forensic count (uncorroborated against the filed CSV —
see the synthesis entry's Gaps).

**Cheapest first step:** regex `"good night pretty girl"` (and variants) across all
filed exports; plot instances per month 2015–2026; flag any gap longer than 14 days.

## 4. Inbound-response volume after severance declarations

**What:** for each of the 129 episodes, the volume of *inbound* (her) messages in
the 60 minutes after the declaration, regressed against gap-to-resumption.

**Why:** the synthesis entry's trade rule makes its sharpest testable prediction
here — declarations followed by the least counterparty response should hold longest
(the intention dies in the trade; no trade, no death). The June 1 case (four
approaches unanswered, 52-day hold) and the July 28 case (~200 messages, threat
dies in negotiation) both conform, but the full 129-episode regression is uncomputed.
This is the single highest-value uncomputed quantity on the synthesis page.

**Evidence on hand:** `kb/data/1292-block-unblock-loop-severance-recount-129-128.md`
(episode timestamps); the full corpus exports.

**Cheapest first step:** for each episode timestamp, sum inbound rows in the
following 60 minutes; regress log(gap) on inbound volume; the thesis predicts a
negative coefficient.
