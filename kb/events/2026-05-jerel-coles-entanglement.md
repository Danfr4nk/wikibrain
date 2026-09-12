+++
id         = "evt:2026-05-jerel-coles-entanglement"
layer      = 2
type       = "event"
title      = "The Jerel Coles entanglement becomes the terminal third party"
cites      = ["dat:1343-june1-closure-signoff-is-dans", "dat:1344-tuquick-june15-defection-partially-verified", "dat:0125-end-fight-stale-attribution", "dat:0449-group-chat-closure-revised-arithmetic"]
confidence = "moderate"
importance = 5
tags       = ["jerel-coles", "annie-ulmer", "june-2026"]
created    = "2026-09-09"

[when]
start  = "2026-05-31"
end    = "2026-06-01"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:jerel-coles"
strength    = "strong"
asserted_by = "self"

## What happened

In a **May 31, 2026 group chat**, Annie left Dan for Jerel Wayne Coles
("Tuquick") — the announcement is page-attributed testimony carried in the
corpus extract and the people record (no held export of the May 31 chat
exists). That announcement made Coles the **terminal-phase third party**:
the group-chat-closure page's 2026-07-13 operator correction is explicit
that the man Annie left Dan for — the counterpart of the June 1 group
chat — is Tuquick, not Eli, whose affair ran sometime in 2024 until the
February 2025 NYC departure and ended there
[`dat:0449`](../data/0449-group-chat-closure-revised-arithmetic.md).
Coles was never met in person. The corpus carried him as **two people**
("Tuquick" and "the unnamed man") until the 2026-08-09 correction merged
them.

On **June 1**, Coles is a present third party in the closure's group
chat: the held-corpus closure run (rows 223817–223939) is a three-party
chat including Dan, the Annie handle, and Coles's handle
[`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md). His held
lines in that window are *"Nah you can have her"* (04:15:33 UTC) and
*"Nah not worth it, there's normal girls in the world"* (04:18:16 UTC)
— the page's quoted group-chat lines ("Get her you said you had her,"
"She's not at my house bro") occur **nowhere** in the 192,140-row corpus
[`dat:1344`](../data/1344-tuquick-june15-defection-partially-verified.md).

## Dated sequence

- **2026-05-31:** the group-chat announcement that Annie left Dan for
  Coles — page-attributed, unheld. This is the dating this event rests
  on; it is the weakest link in the chain, carried honestly.
- **2026-06-01 04:00–04:27 UTC:** the closure group chat; Coles present as
  the third party; Dan's unbroken outbound sign-off run closes it
  [`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md),
  [`dat:0125`](../data/0125-end-fight-stale-attribution.md).
- **2026-06-15 17:14:58 / 17:15:12 UTC:** the defection pivot, corpus-
  attested — *"You can have her back ? She's no good (trauma bond to the
  cuck)"* and *"She's a compulsive liar with a drug addiction"*
  [`dat:1344`](../data/1344-tuquick-june15-defection-partially-verified.md).

## Evidence for

- The June 1 three-party chat and the June 15 defection pivot both verify
  in the held corpus — the events hold; it is the **strings** that slip
  [`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md),
  [`dat:1344`](../data/1344-tuquick-june15-defection-partially-verified.md).
- Coles's later escalation (the Aug 17 address send, the conditional
  mother-threat) verifies nearly verbatim in the held slice — the handle's
  identity is behaviorally consistent across June and August
  [`dat:1345`](../data/1345-tuquick-aug17-19-reopening-current-corpus.md).

## Evidence against / limits

- The **May 31 announcement itself has no held export.** It is the
  load-bearing premise of this event and rests on the wiki's page
  testimony alone. A group-chat export would convert it.
- The page labels its Coles quotes "claimed verbatim"; the held slice
  confirms the *events* (reversal, offer to return Annie, 'compulsive
  liar' framing) but **not the strings** — its June 15 forms differ, and
  two of four quoted lines occur nowhere corpus-wide
  [`dat:1344`](../data/1344-tuquick-june15-defection-partially-verified.md).
- The page's quotes read as drawn from the larger **unheld merged exports**
  (imessage_2124702449_both_all_now.csv and siblings); the merged CSVs
  that carry the page's exact lines are not held here.

## Contradictions the ingest found

- The stale pre-August-9 framing (Coles as two people) vs. the merged
  identity — resolved by the page itself, but check that event pages
  citing "the unnamed man" have been updated.

## Open questions

- The May 31 group chat content itself — what was actually said, by whom.
- The August 17–19 reopening (40 held handle rows vs. the page's 97) and
  the August 20 call/voicemail claims, which rest on the unheld merged
  export alone
  [`dat:1345`](../data/1345-tuquick-aug17-19-reopening-current-corpus.md).
- Dan identified Coles via FOREWARN lookup on **2026-08-08** (dat:0208);
  the lookup's factual basis is third-party background-check data, not a
  docket
  [`dat:0412`](../data/0412-jerel-coles-page-patch-state.md).

## Cross-links

- `ent:jerel-coles` — the person node (supersedes `tuquick-17248123683`,
  `the-unnamed-man`).
- `evt:2026-06-01-annie-closure` — the June 1 closure where he appears as
  third party; `evt:2026-08-16-annie-terminal-end` — the August escalation.
