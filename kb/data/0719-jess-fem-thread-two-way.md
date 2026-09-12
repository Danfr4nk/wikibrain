+++
id            = "dat:0719-jess-fem-thread-two-way"
layer         = 1
type          = "datum"
title         = "The Jess thread is 74 rows, not 36 — the same MASTER-dump inbound-only artifact as Jajuan; 'This is Jess from Fem' and the Mike context verify"
claim         = "The jess page (corpus line 21120) gives '36 messages' for the 2017 Fem thread and quotes the opener 'This is Jess from Fem.' The held export for the same handle contains 74 rows: 36 inbound + 38 outbound, spanning 2017-04-20 18:54:53 UTC through 2017-07-02 16:26:45 UTC — the page's 'Apr 20 – Jul 2, 2017' range is exact in local time (EDT). The opener verifies verbatim as message 93515 (2017-04-20 18:55:13 UTC = 14:55 EDT). The page's 36 is the inbound count: the same MASTER-dump 'everything Received' convention that produced dat:0717's error. The Mike/couple context the page summarizes also verifies in the held rows — 'Mike is big is that going to be a problem?', 'Is there a pic I can show mike?', 'we bring a girl or two in' — and the thread contains no meeting resolution: the page's 'no evidence of a meetup in the corpus' holds."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: chat-id filter on the Jess handle — 74 rows, inbound 36 / outbound 38; UTC span 2017-04-20 18:54:53 to 2017-07-02 16:26:45 (EDT conversion leaves the page's local range unchanged). Message_id 93515 'This is Jess from Fem' 2017-04-20 18:55:13 UTC. Mike rows: 'Mike is big is that going to be a problem?' / 'Is there a pic I can show mike?' / 'we bring a girl or two in' — all inbound. No row in the thread confirms a meeting; the last rows are logistics that trail off, consistent with the page's 'no resolution' reading."
importance    = 3
tags          = ["jess", "message-corpus", "count-correction", "old-wiki", "measurement", "timezone"]
created       = "2026-09-09"

[when]
start = "2017-04-20"
end   = "2017-07-02"
+++

## The pattern, confirmed twice

With dat:0717, this is the second independent confirmation that counts
taken from MASTER-dump-derived pages are inbound-only. The correction is
mechanical: re-count from the held export, keep the page's dates (which
were right in local time both times), and re-read any 'one-way'
characterization against the outbound half. The Jess thread's outbound
half is Dan negotiating the same arrangement back — two-way logistics,
same transactional frame.
