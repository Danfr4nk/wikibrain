# Filter log — SUZANNE_FULL_CORPUS_0_eaax.csv

Standing rule applied: Suz-corpus business-message filter (Dan's suggestion,
particulars by Sammy, his veto standing). Clearly-business realtor/client
messages are excluded from the pipeline; personal threads are never
line-filtered; content wins on edge cases. Source file never modified —
this log makes the exclusion auditable.

Source rows: 374,043 (2013-11-18 → 2026-07-08, 2,706 threads)
Kept rows: 301462
Excluded rows: 72581
Dealer-name redactions applied to kept rows: 65

## Exclusion categories

### A. Clearly-business realtor/client threads (biz-keyword density >= 10%, n >= 50, samples verified)
Criterion: >=10% of non-empty texts hit real-estate transactional vocabulary
(showing/closing/listing/buyer/seller/MLS/settlement/commission/offer/contract/
lockbox/appraisal/inspection/deed/mortgage/lender/escrow/open house/earnest/etc.),
with 3 random samples per thread manually confirmed as client logistics.

30 threads, 37592 rows:
- +17248099973: 9278 rows
- +17247474248: 3367 rows
- +14125963765: 2856 rows
- +14126702532: 2834 rows
- +14122152153: 2657 rows
- +17243661677: 2412 rows
- +14122606402: 2207 rows
- +17249894596: 2084 rows
- +17248802893: 1165 rows
- +17242080207: 1042 rows
- +17243667428: 921 rows
- +17244344081: 839 rows
- +17243178744: 664 rows
- +14123108183: 593 rows
- +17243227270: 584 rows
- +17242449357: 489 rows
- +14434807926: 476 rows
- +17243221983: 414 rows
- +17243662265: 408 rows
- +17249528065: 326 rows
- +17242070640: 311 rows
- +17248098072: 299 rows
- +18144048542: 277 rows
- +14129152905: 260 rows
- +17247972367: 259 rows
- +14128891812: 209 rows
- +17247872818: 113 rows
- +17243502413: 102 rows
- +16465411054: 86 rows
- +17248804926: 60 rows

### B. Standing-confirmed high-volume transactional numbers
Per the standing record (content-confirmed as client logistics; corroborated by
2026-era samples in this export: listing/closing pressure, buyer check logistics).

- +17248759432: 22796 rows
- +17244667180: 8379 rows

### C. Orphaned/System thread (real-estate business content)
- Orphaned/System: 3814 rows
  (samples: offer/cash/POF/listing-agent/confidentiality threads — business)

### D. Blank-contact sent-only rows
0 rows in this export (the ~35k noted in the standing record were from an older export).

## Kept (notable)
- dfrank88@gmail.com (3,597 rows): Dan–Suz personal thread — never line-filtered; 64 dealer-name redactions applied.
- danfr4nk@icloud.com (1,766 rows): Dan's iCloud media thread — kept (personal, Dan thread).
- +17243664916 (31,032 rows), +17242083475 (24,209 rows): top personal threads (media-heavy, 86–96% empty text = MMS). Kept.
- Threads in the 5–10% biz-keyword band (9 threads, 10,032 rows): mixed personal/business — kept per content-wins rule (not clearly business).

