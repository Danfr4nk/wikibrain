+++
id            = "dat:0158-annie-assault-45-year-claim-dans-account"
layer         = 1
type          = "datum"
title         = "Dan's account that Annie is a rape survivor whose assailant got 45 years — verified as Dan's words, uncorroborated as fact"
claim         = "In the Bekah Fullem thread, while responding to her rape disclosure, Dan wrote on **2020-03-29 23:44** (outbound, row 31975): *\"i won't get into too much detail but Annie has been through that and it took her years to report it. even the trial was super painful and full of ptsd moments, but the shitbag who did it is now in jail for 45 years (he was a serial rapist)\"*. He repeated the claim six years later, on **2026-07-28 23:58** (outbound, row 225708, in a heated thread with a third party): *\"annie I watched you go through putting someone in jail for 45 years\"*. **Evidential status:** the claim exists in the held corpus exactly twice, both times as Dan's own words. No Annie-side, legal, or third-party source in this repository corroborates the underlying fact. The 2026 repetition shows the account is stable in Dan's telling, which is evidence about Dan, not about Annie's history."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:imessage-corpus-2026"
confidence    = "moderate"
extraction    = "The 2020 message was read directly from corpus/messages.csv (row 31975, date_sent 2020-03-29 23:44:21, is_from_me=1) — quoted verbatim, and it matches the bekah-fullem page's quotation (corpus__3.txt line 52060ff; old-wiki export whole.txt line 45729ff). The 2026 repetition was found by searching the held corpus for '45 years' (row 225708, date_sent 2026-07-28 23:58:23, is_from_me=1, chat_identifier a 212-number thread, not Annie's main thread) — this is a new finding beyond the page, which states the claim 'is not documented anywhere else in the corpus'. A full-corpus text search for corroborating terms (Annie + trial/rapist/assault) surfaced no Annie-side or third-party account. Confidence is moderate, not high: what is high-confidence is that Dan *said* it; what is unverified is the fact itself."
importance    = 5
tags          = ["people", "annie-ulmer", "imessage-corpus", "unverified-claim", "sensitive"]
created       = "2026-09-09"

[when]
start = "2020-03-29"
end   = "2026-07-28"
+++

## Why this is filed as a separate node with a sensitivity tag

The page itself is careful: \"sourced here only to Dan's own secondhand
account... treat as a real but unverified claim about Annie's history
pending independent corroboration.\" This node preserves that care. The
datum is *that Dan made this claim, twice, six years apart* — not that the
claim is true. Filing it under high confidence would launder a secondhand
account into a fact about a third party; filing it as Dan's words keeps the
chain of attribution intact.

## What would change the status

An Annie-side account, a docket, or any third-party record of the trial
would move this from attributed testimony to corroborated fact. The
2026-07-28 repetition is worth one more note: it occurs mid-argument with a
third party, where the claim is being deployed rhetorically — which is
precisely the context in which a stable long-held telling and a
convenient invention look most alike. The node does not adjudicate between
them; the record as held cannot.
