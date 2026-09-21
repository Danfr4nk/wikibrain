+++
id         = "dat:1859-eggie-bagels-published-20260921"
layer      = 1
type       = "datum"
title      = "Eggie Bagels Colors web element published to the public wiki surface"
claim      = "On 2026-09-21 Dan had the final Eggie Bagels Colors build archived in the wikibrain repo (wiki/share/eggie-bagels-colors.html) and wired into the site builder so it deploys ungated to the public reading surface, as a link he can show Annie."
cites      = ["src:1858-eggie-bagels-colors-20260921"]
confidence = "high"
reliability = "primary"
created    = "2026-09-21"

[when]
date   = "2026-09-21"
+++

Follows the 2026-09-21 seasonal color analysis (pixel-sampled CIELAB across 16 photos: Annie is Deep Autumn, warm undertone b* 18-31, never cool) and the Drape_Simulator_Design_Tool / standalone builds from earlier the same day. bin/wb-wiki now copies wiki/share/*.html verbatim to site/wiki/share/; bin/wb-gate already excludes site/wiki/share/ from the password gate by design, so the page is public with no password step. Live at https://danfr4nk.github.io/wikibrain/wiki/share/eggie-bagels-colors.html after the next main push.
