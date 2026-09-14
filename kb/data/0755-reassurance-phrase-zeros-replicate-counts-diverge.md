+++
id            = "dat:0755-reassurance-phrase-zeros-replicate-counts-diverge"
layer         = 1
type          = "datum"
title         = "Reassurance Architecture: the zero-phrase headline replicates; the non-zero counts do not — normalizer/export caveat"
claim         = "The Reassurance Architecture page's headline phrase finding — that Dan's sent corpus contains ZERO instances of 'do you love me,' 'are we ok,' 'am i crazy,' and 'i cant do this' across eleven years — replicates exactly in the held corpus (203,624 rows; 99,332 sent rows with text). The non-zero counts in the page's two tables do not replicate under a documented normalizer (lowercase, punctuation-to-space, whitespace-normalized substring match on sent messages): page vs held — 'i need you to tell me' 1/2, 'are you mad' 1/5, 'did i do something' 2/11, 'what did i do' 3/11, 'reassure' 6/3, 'promise me' 9/7, 'call me' 170/129, 'you up' 119/93, 'pick up' 89/76, 'goodbye' 57/207, 'where are you' 41/37, 'answer me' 18/26, 'i need to know' 19/38; 'you there' matches exactly (19/19); 'are you ok' 24 in the page vs 0 in held (held has 'are you okay' ×20 — a normalizer-choice artifact); 'hello?' 22 vs 'hello' 49 (substring scope difference). The page's counts derive from a different export (all_imessages_complete_dump.txt: 106,629 of his own sent messages) with an unspecified normalizer; the held export is smaller (99,360 sent per dat:0001). The zero findings and the 'you there' match are the robust part; treat the other absolute counts as export-specific."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv: is_from_me=1 and text non-empty (99,332 rows). Normalizer documented in claim. Page body read at corpus__3.txt line 22939. Note: the page's '106,629 of his own sent messages' figure is not the held export's figure and was not re-derived."
importance    = 4
tags          = ["attachment", "measurement", "correction", "corroborated-primary"]
created       = "2026-09-09"
+++

## Why this matters

The page's argument does not depend on the exact non-zero counts — it
depends on (a) the zeros, which hold, and (b) the zeros-versus-large-numbers
contrast ('call me' ×170 against 'do you love me' ×0), which holds in the
held corpus too (129 against 0). But anyone re-running the page's tables
must expect different absolute numbers: they are normalizer- and
export-dependent, and the page states neither its normalizer nor which
pull produced 106,629. The dossier-arithmetic figures the page itself flags
as unre-derived — the 106 ultimatums, the 127 false exits, the 299 love
affirmations / 231 apologies / 278 commitments, the 94 bursts of 10+ and the
284-message longest run — remain **unresolved**: not checked here, and per
the page's own Gaps they 'never re-derived from
all_imessages_complete_dump.txt.'
