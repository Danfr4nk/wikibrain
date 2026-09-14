+++
id            = "dat:0847-lisa-frank-held-corpus-thin-earliest-mention-dec-2"
layer         = 1
type          = "datum"
title         = "Lisa Frank: held corpus holds five 'Lisa' hits, earliest 2015-12-02 — 25 days before the page's Dec 27 date; substantive claims are unheld-sourced"
claim         = "The page's substantive portrait of Lisa Frank (teacher, Syd's household, possible September 2023 wedding) rests on unheld sources — a dox-scan dump and an imessage_7243667777.csv not in this repository. The held iMessage corpus contains exactly **five** rows mentioning 'Lisa', none of them naming an occupation: no 'teaching' hit, no September 2023 wedding message, and no direct Rick thread (no sender field containing 'Rick' was found). The earliest held mention is **2015-12-02 20:38:58 UTC**, Dan to Annie: 'We could go eat with Rick and Lisa.' — **25 days before** the page's 'present since 2015-12-27' reading, which was measured against a different export. The other held hits (2024-06-18 Syd's birthday wish; 2020-03-29 'lisa and syd' to Suz; the 2026 'Katie fletcher / Franki Faris incidents' list naming her) show a persistent low-frequency presence but cannot sustain the page's occupation, marital-status, or wedding claims. The decade-long continuity the page asserts may be true — it is simply asserted from sources no worker here can audit."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 62781, 65 lines). Python scan of corpus/messages.csv (192,140 rows): 5 text hits for 'Lisa' (case-insensitive), all through 2020 and all third-person mentions; earliest 2015-12-02 20:38:58 UTC. Searches for 'teaching'/'teacher' near Lisa: 0. Searches for sender fields containing 'Rick': 0. The page's Dec-27-2015 anchor was measured from MASTER_MESSAGES_DB_DUMP.csv, unheld here."
importance    = 3
tags          = ["lisa-frank", "imessage", "corpus-gap", "correction", "unverified"]
created       = "2026-09-09"

[when]
start = "2015-12-02"
end   = "2024-06-18"
+++

## The important distinction

This node is not a refutation. It is a source audit: the held corpus is
consistent with everything the page says (no contradictions were found),
but it covers almost none of it. The page is therefore flagged as
**testimony-dependent on unheld sources** — a real person documented
almost entirely through exports this repository does not hold, which is
precisely the failure mode the new wiki's source rules exist to prevent.
