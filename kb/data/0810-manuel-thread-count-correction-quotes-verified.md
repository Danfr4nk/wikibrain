+++
id            = "dat:0810-manuel-thread-count-correction-quotes-verified"
layer         = 1
type          = "datum"
title         = "Manuel: held corpus has the full two-sided thread (99 rows), not the page's 45 — the fragment export flipped and dropped Dan's side"
claim         = "The page reports 45 messages (11 sent, 34 received) from `MASTER_MESSAGES_DB_DUMP.csv` and notes direction was 'reliably recorded here.' Against the held corpus the thread is **99 rows — 65 sent, 34 received**, spanning **2023-08-13 18:21:22 → 2026-02-25 19:13:17 UTC** on the numeric handle the old wiki redacts. The **received count matches exactly (34)**, which pins the discrepancy to the fragment export: it dropped Dan's 54 outbound rows and kept his 11 mislabeled ones. Same failure family as dat:0352 (Christian Hanson, 66→136) — the MASTER_MESSAGES_DB_DUMP direction metadata is not to be trusted for any thread. The page's date range and relationship beats all re-verify: the thread opens Aug 2023 and the final exchange is Feb 2026. Quoted texture lines are verbatim in the held corpus: 2023-10-30 *\"William shankespeare es aburrido el no usa perico y el chapo\"*; 2025-12-27 *\"Y tenemos tres gramas de perico\"* and *\"Me encanta valeria\"*; 2025-12-23 *\"okay I'm calling ICE\"* / *\"Vale, voy a llamar a ICE\"*; 2026-02-23 Dan *\"Yo soy el mencho\"*. The 'Me encanta valeria' and 'tres gramas' rows sit in the same December 2025 exchange the page describes."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python count of corpus/messages.csv on the Manuel thread handle, 2026-09-09: 99 rows, 65 is_from_me=1, 34 is_from_me=0; min/max date_sent as above. Each quoted line read verbatim from the row text. Page body at corpus__3.txt lines 63226-63274 (corpus dimensions table: '45 (11 sent, 34 received)', handle redacted as [phone redacted], date range 2023-08-13 to 2026-02-25). PRIVACY: the numeric handle is not reproduced here, per the redaction convention the page itself follows."
importance    = 3
tags          = ["manuel", "au-zaatar", "imessage", "counts", "correction", "direction-metadata"]
created       = "2026-09-09"

[when]
start = "2023-08-13"
end   = "2026-02-25"
+++

## What the check confirms

The relationship's substance survives intact — Au Za'atar coworker turned
genuine friend, Spanish-language banter, the Valeria and Annie check-ins,
the friendship outlasting the job. The count correction matters only
methodologically: two pages in this wave now show MASTER_MESSAGES_DB_DUMP
silently discarding Dan's outbound side while presenting a direction column.

## What it does not confirm

The page's attribution of the thread's origin ('October 2023 message
referencing Tarik telling him to stay') was not individually re-checked;
Manuel's last name remains unfiled. The 'different Manuel' in jack-rusko's
2017 thread is the page's own disambiguation and is not contradicted here.
