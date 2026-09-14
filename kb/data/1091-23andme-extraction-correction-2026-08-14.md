+++
id            = "dat:1091-23andme-extraction-correction-2026-08-14"
layer         = 1
type          = "datum"
title         = "23andMe page's 2026-08-14 extraction correction: the PDFs have a text layer (pymupdf), and the open gaps"
claim         = "The 23andme-genomics page carries a 2026-08-14 correction: its prior version claimed the three source PDFs (Ancestry Composition, Chromosome Painting, Health Report — exported from 23andMe on 2025-03-31, service-updated 2024-10-25) were 'image-based without an extractable text layer' and that percentage values were not digitally recorded; this was wrong — all three contain a full text layer and were extracted via pymupdf for the revision, and every percentage, haplogroup and health result on the page comes from that extraction. Open gaps recorded on the page: the chromosome painting's per-segment ancestry assignments are visual only (no CSV from the Scientific Details page was in the export); two health predisposition results (Age-Related Macular Degeneration, Hereditary Thrombophilia) appear in the summary without specific outcomes; the Prostate Cancer (BRCA1/BRCA2) report is locked behind an incomplete questionnaire; and 'chromosome copy.pdf' is a byte-identical duplicate of 'chromosome.pdf' (both 204,233 bytes) needing deduplication."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt lines 78363-78632 (270 lines); the CORRECTED [2026-08-14] block and Gaps section are the page's own. The genomic figures themselves (21.4% Ashkenazi, 99.7% European, haplogroups R0/R-Z93, 0.2% SSA trace, 95th-percentile Neanderthal, ARSACS carrier) are already filed under dat:0897 and are not re-filed here. The ancestry PDFs are not held in this repository's raw/ tree, so the extraction claim cannot be re-checked here."
importance    = 3
tags          = ["genomics", "23andme", "extraction", "old-wiki", "testimony", "correction"]
created       = "2026-09-09"

[when]
date = "2026-08-14"
+++

Filed separately from dat:0897 on purpose: that datum holds the figures;
this one holds the provenance story and the open gaps, which is what a
future re-extraction would act on.
