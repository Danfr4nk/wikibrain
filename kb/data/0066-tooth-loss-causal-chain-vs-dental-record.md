+++
id            = "dat:0066-tooth-loss-causal-chain-vs-dental-record"
layer         = 1
type          = "datum"
title         = "Dan's 2025 tooth-loss causal chain (\"terrified of dentist (aka haven't gone)\") is partly contradicted by his own 2017 dental record"
claim         = "In the mid-2025 anxiety session, Dan discloses losing two teeth — one the visible \"vampire\" tooth — and supplies his own causal chain without hedging: \"bulimic as a high schooler candy as a staple of my diet terrified of dentist (aka haven't gone) suboxone cigarettes.\" The 2026-08-19 medical-vocabulary census recorded on wiki/health/the-configured-body contradicts the dentist-avoidance link: 2017-10-09 \"went back to the dentist today and i've got a lot of work to get done,\" a 2017-11-30 post-surgical one-week follow-up with a membrane and restitching, plus further appointments in 2020 and 2024 — dental care that is episodic and reactive rather than absent. The bulimia, candy-staple, suboxone and cigarette links in his chain are not adjudicated here; the dentist link is the one the record falsifies, and the wiki's governing rule for the case is stated: residue beats testimony."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "The tooth-loss disclosure and causal chain are quoted from wiki/health/hyperreflexivity.md (corpus__3.txt line ~7300); the contradicting dental record is quoted from the CORRECTED [2026-08-19] block on wiki/health/the-configured-body.md (corpus__3.txt line ~8050, carried from whole.txt). The census quotes were not re-read against the message corpus in this pass. dat:0026 covers the census itself; this node covers the new fact the hyperreflexivity page adds (the two-teeth loss and Dan's own causal attribution) and its partial falsification."
importance    = 4
tags          = ["health", "old-wiki", "contradiction", "dental", "testimony"]
created       = "2026-09-09"

[when]
start = "2017-10-09"
end   = "2025"
+++

## The split inside one sentence

Dan's chain has four links: bulimia (high school), candy as dietary staple,
dentist avoidance, and the suboxone/cigarettes combination. Only the dentist
link is tested by the census, and it fails: he had dental surgery with a
graft and a kept one-week follow-up in autumn 2017, plus appointments in
2020 and 2024.

What survives the contradiction is the *shape* of the story he tells about
himself — a decades-long arc from adolescent eating disorder to visible
adult bodily damage — and the wiki preserves both the testimony and the
residue rather than resolving them silently. The two lost teeth themselves
are first documented by this disclosure; no other record of them was found
in this pass.

## Relation to existing nodes

Extends [`dat:0026`](0026-old-wiki-census-corrected-self-report.md), which
files the census; the new datum here is the 2025 disclosure that supplies
the self-report the census corrects. Confidence is moderate rather than
high because the session quotes are unverified against the underlying
exports (see [`dat:0065`](0065-hyperreflexivity-session-mid-2025-unverified.md)).
