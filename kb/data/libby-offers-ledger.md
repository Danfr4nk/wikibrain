+++
id         = "dat:libby-offers-ledger"
layer      = 1
type       = "datum"
title      = "Dan's Libby-window offers and favors: 137 documented, roughly one every 1.6 days"
claim      = "During the Libby window (2024-02-01 to 2024-08-31), Dan sent 137 messages offering to get, bring, buy, or do something for Annie, reporting an executed favor, or checking on her wellbeing with a concrete action attached — 72 explicit offers, 56 executed favors, 9 wellbeing check-ins — roughly one every 1.6 days across the 213-day window, concentrated in June (43) and July (48). Documented examples: 'Do you want anything from the grocery store' (3x, May–Jun), 'Is there anything in particular you would like me to bring you' (Jul 1), 'Can I bring you something to eat' (Jun 30), 'How about I come bring you an umbrella (and a tin)' (May 30), 'Want me to cover your shift?' (May 26), flowers (Feb 16), Gatorade (Jun 7), and the July 15–17 banana arc (fruit-stand complaint → 'Maybe get 4 bananas for later' → 'I'm making my shells now and then I'll come bring you bananas'). The count is conservative: 64 reciprocal pickup-logistics messages were excluded, and keyword sweeps miss phrasings, so 137 is a floor. Limits: offers are not completed favors, unanswered offers count equally, and the text channel cannot see in-person care — the metric measures expressed instrumental engagement, not emotional attunement."
cites      = ["src:imessage-corpus-2026"]
confidence = "high"
extraction = "three keyword sweeps over all 5,132 Dan-sent messages in-window, 360 candidates manually reviewed and categorized; every count traces to listed quotes. ~/workspace/libby-engagement/offers-favors.md"
importance = 5
created    = "2026-09-14"
tags       = ["libby-era", "engagement", "metrics", "offers", "2024"]

[when]
start = "2024-02-01"
end   = "2024-08-31"
+++

## How measured

Sender-filtered sweep over the drive-sweep Google Sheet export (the canonical
iMessage exports omit the 2024 Annie thread). Categories: (a) explicit offer
to get/bring/buy/do something for her, (b) reported executed favor,
(c) wellbeing check-in tied to action or concrete suggestion. Excluded:
logistics about his own needs, third-party messages not for her benefit,
"let me know" with no offer object, jokes with no real offer, and 64
reciprocal weed-pickup logistics messages (listed separately in the
extraction file). Dan-sent messages are entirely absent from the export
September 2024 – February 2025 (a one-sided export gap, not a quiet period),
so no post-era comparison rate is available from this source.
