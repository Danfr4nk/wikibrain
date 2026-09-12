+++
id            = "dat:0574-elliott-smith-tattoo-tweet-2018-01-24-seven-tracks-gemini-one"
layer         = 1
type          = "datum"
title         = "Elliott Smith: the tattoo-intent tweet (2018-01-24) is verbatim in the old-wiki Twitter archive; 7-track count is the old wiki's assertion; Gemini #1 is unattested in held sources"
claim         = "Three residual claims from the artist page resolve differently. **(1) Tattoo intent — verified.** The 24 January 2018 tweet *\"Gonna crowdfund an Elliott Smith tattoo for myself. I deserve it\"* is in the old-wiki Twitter archive at **2018-01-24 02:23:57 UTC**, tweet id `955989519047766016` (0 likes, 0 replies, 0 reposts), verbatim including no terminal period. **(2) 7 tracks — the old wiki's assertion, count table confirmed.** The artist table in the export lists Elliott Smith at 7, matching the page's '7 tracks in the masterlist'; FAVS MASTERLIST.csv itself is not held, so this is the prior wiki's pipeline count, already noted in dat:0438's FB-continuity counts as a different measure. **(3) Gemini #1 individual artist — unattested in held sources.** `raw/self/gemini-activity/Gemini Activity.html` is not held anywhere in this repository; the claim appears only in the old-wiki export's own summary lines. Unverified with reason."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Tweet verified in raw/old-wiki-export-2026-09-04/whole.txt lines 88552-88556 (the twitter 2018 archive block: '**2018-01-24 02:23:57 UTC** · [955989519047766016](https://x.com/danfrank/status/955989519047766016) *likes 0 · replies 0 · reposts 0*' then the quoted text) and corroborated by the tattoos-page passage at lines 73819-73824 ('On 24 January 2018: *\"Gonna crowdfund an Elliott Smith tattoo for myself. I deserve it.\"* No later source records it being done'). The page's frontmatter connection (corpus__3.txt lines 10643-10646, evidenced-by wiki/self/twitter/2018) matches this record. 7-track count: whole.txt line 6500 ('| Elliott Smith | 7 |') in the old wiki's top-count artists table; FAVS MASTERLIST.csv absent from raw/ and corpus/ (find returned nothing). Gemini: a repo-wide find for '*gemini*' in raw/ and corpus/ returned nothing; the '#1 individual artist' claim appears only at whole.txt lines 4423, 7369, 30978 (the export's own summaries)."
importance    = 2
tags          = ["elliott-smith", "twitter", "old-wiki", "unverified", "counts"]
created       = "2026-09-09"

[when]
start = "2018-01-24"
end   = "2018-01-24"
+++

## What the check confirms

The tattoo tweet is the cleanest datum on the page: contemporaneous,
platform-timestamped, verbatim, with a stable tweet id. It is the only
evidence the page offers that the Elliott Smith attachment was ever meant
to be permanent, and the tattoos page's rider — 'No later source records it
being done' — stands: nothing in the corpus contradicts or confirms the
tattoo happened.

## What it does not confirm

The '#1 individual artist in a bass-music listening profile' ranking is
doing real interpretive work on the page (the 'glitch that reveals the
system's architecture'), but the Gemini Activity export it rests on is not
held here — neither the file nor a quoted row from it. Per the no-manufacture
rule it is filed as unverified with the reason stated, not as confirmed.
If the export turns up, the ranking becomes checkable; until then the page's
two-mode emotional architecture leans on the message corpus and the
masterlist table, which are held/attested.

## Arithmetic note

The page says the tattoo tweet came 'nine months before the October 2018
Misfits sequence' — 2018-01-24 to October 2018 is ~8.5 months; 'nine
months' is a rounding, not a displacement.
