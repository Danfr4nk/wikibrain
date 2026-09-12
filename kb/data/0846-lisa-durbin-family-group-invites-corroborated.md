+++
id            = "dat:0846-lisa-durbin-family-group-invites-corroborated"
layer         = 1
type          = "datum"
title         = "Lisa Durbin's 2017 family invites verify in held group chats; the 36-message count is unheld-sourced"
claim         = "Three of the page's anchors verify in the held iMessage corpus. The **Easter dinner invitation** text matches verbatim at **2017-04-14 13:04:49 UTC** in a family group chat. The **Father's Day / Syd's 20th-birthday cookout invitation** matches verbatim at **2017-06-13 23:17:31 UTC** in a group chat whose senders include Vanessa (Lisa's handle, Lisa's other number, and Vanessa's are among the five participants). **'Happy Birthday, Dan!'** matches verbatim at **2017-11-01 23:34:13 UTC** — the sole direct row from Lisa's handle in this export. What does not verify here: the page's '36 messages' count and April–November 2017 range, which come from the unheld MASTER_MESSAGES_DB_DUMP.csv (this export holds only the group rows plus the one direct birthday row for this handle). The exact family relationship (the page's 'aunt? cousin? family friend?') remains unresolved: the corpus holds the invites but no kinship label. The 'Syd' question is open in the opposite direction — Syd's birthday is also wished in other household contexts (see dat:0847) — with no held evidence to resolve whether the cookout's 'Syd's 20th' is the same Syd."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 62736, 45 lines). Python scan of corpus/messages.csv: Lisa Durbin's direct handle (+17242088411) has exactly 1 row in this export (2017-11-01 23:34:13, 'Happy Birthday, Dan!'); the Easter group (chat847990933613820834) holds 12 rows with Lisa sending 4 of them; the 2017-06-13 cookout invite text matched verbatim in its group thread. Quoted invitation strings matched character-for-character."
importance    = 3
tags          = ["lisa-durbin", "imessage", "group-chat", "corroboration", "unresolved-relationship"]
created       = "2026-09-09"

[when]
start = "2017-04-14"
end   = "2017-11-01"
+++

## Why moderate, not high

The invites are verbatim and timestamped — that leg is high. The node
carries moderate because its two load-bearing interpretive claims (36
messages, and the page's count-based timeline) rest on a source that is not
in this repository, and because the corpus cannot label Lisa's kinship.
Filed as: event texts verified, framing and counts pending a re-pull of
the unheld dump.
