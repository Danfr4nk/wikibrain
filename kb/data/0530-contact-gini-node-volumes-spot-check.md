+++
id         = "dat:0530-contact-gini-node-volumes-spot-check"
layer      = 1
type       = "datum"
title      = "Contact Gini per-node volume table: four exact matches, two near matches, and two internal inconsistencies"
claim      = "Spot-checking the page's \"Message Volume Concentration by Node\" table against sender counts in the held corpus: **exact matches** — Annie's PA handle (31,177), the Frequent PA Contact (4,812), Johnny (3,462), Menore (1,753); **near matches** — Jerad Friedline 894 vs the page's 879 (body table) / 857 (frontmatter connection, \"832 received, 25 sent\"); Annie's NYC handle 13,521 vs the page's 17,145. **Not found in the held corpus at all** — Kristin's 20,009 (body) / 22,018 (frontmatter connection; the two figures on the same page disagree) and Suzanne Frank's 33,698. The page's 22,018-vs-20,009 Kristin discrepancy is internal to the page: the frontmatter connection claims 22,018 messages in ten weeks while the body table claims 20,009 with a recount note. Handle-to-person mapping for the held corpus is not available here, so absent exact-count matches the Kristin and Suz figures cannot be checked — the second sender in the held corpus holds 13,521 messages."
cites      = ["src:imessage-corpus-2026"]
confidence = "moderate"
extraction = "Computed 2026-09-09: sender counts over all 92,780 inbound rows of corpus/messages.csv. Top inbound counts: 31177, 13521, 9907, 4812, 3645, 3462, 2462, 2311, 1753, 1095, 1077, 894, 887, 881, 841, 802. No handle strings are reproduced here; matching was done by count only, which is weak evidence for person identity beyond the near-certain top row. The Kristin 22,018-vs-20,009 and Jerad 857-vs-879-vs-894 discrepancies were read directly off the page (corpus__3.txt line 21083: frontmatter connections vs body table)."
importance = 3
tags       = ["corpus", "verification", "contact-gini", "measurement", "attribution"]
created    = "2026-09-09"
+++

## What the check confirms

Four of the page's eight node volumes reproduce exactly in an independent
export, including the load-bearing Annie-PA figure (31,177) and the "need 8"
Menore logistics node (1,753). That is the kind of agreement that only happens
when both exports are counting the same underlying archive with the same
attribution rules for those handles.

## What it leaves open, and the discrepancies

- **Jerad Friedline.** The page says 857 in one place and 879 in another (frontmatter
  connection: "+191****3615 … 857 messages (832 received, 25 sent)"; body table:
  879). The held corpus's candidate count is 894. Three figures, all within 5% —
  likely the same handle counted under different export windows, but the page's
  two figures are never reconciled with each other. Jerad's own people page
  should carry the resolution; this node only records the spread.
- **Annie NYC handle.** 13,521 held vs 17,145 page — a ~21% gap, the largest of
  any node, suggesting the NYC handle's attribution differs between exports (the
  page's recount notes imply this handle has a complicated history).
- **Kristin.** Neither 20,009 nor 22,018 appears as any sender's count in the held
  corpus (closest candidates: 13,521, 9,907). The internal disagreement —
  22,018 in the frontmatter connection vs 20,009 in the body with an explicit
  recount note dated 2026-08-16 — is the page's own unresolved tension; the
  body's 20,009 carries the recount provenance and should be the preferred
  figure. The held corpus cannot adjudicate because the Kristin handle mapping
  is not available here.
- **Suzanne Frank.** 33,698 appears as no sender's count in the held corpus;
  the second-largest sender holds 13,521. The page's 33,698 comes from joining
  `all_imessages_complete_dump.txt` to a 2026-08-13 deep export — neither held
  here — so the "second in the entire corpus by person, ahead of Kristin"
  claim is relayed testimony from the prior wiki's own extraction, not
  re-verified in this pass.
