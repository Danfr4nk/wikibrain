+++
id            = "dat:1030-facebook-messages-archive-extent"
layer         = 1
type          = "datum"
title         = "Facebook Messages archive: 403+ threads (2007–2022), Sep 2022 snapshot; thread bodies unavailable in this repo"
claim         = "The Facebook Messages (ihatedanfrank) page reports the archive's extent: 403+ threads containing message_1.html (271 inbox, 128 filtered, 3 requests, plus legacy / your_messages / blocked categories), spanning 2011 through 2021–22, exported ~Sep 2022. The manifest in this repo carries 396 threads with 15,923 messages — close to but not identical with the page's 403+, a small mismatch consistent with the page's looser '403+ threads containing message_1.html' counting versus the manifest's deduplicated thread index. Key-page samples are relayed page-attributed: the Annie/Eggie thread as the primary attachment node (baby-talk, logistics, 2017–2021 NYC window, nickname set Aug 20 2018); RJ Ritchey (golf/country-club 2021–22, Laurel Valley caddy ask, anti-mainstream-politics lines); Marc Charles (golf 2018); Sean Teets (cross-ref dat:1029); Charles Davenport 2010 (NYC move era); the noise floor (2011 iPhone-5 phishing, Rick Hamborsky's suspicious attachments 2018–21). The page's analytical layer — contact-gini (high node count, low sustained depth), Annie as the richest preserved attachment record, FB as breadth vs iMessage depth — is the prior wiki's synthesis, preserved as testimony. Thread bodies are gitignored and unavailable in this repo; only the manifest metadata is held."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 77565 (99 lines); matches raw/old-wiki-export-2026-09-04/whole.txt verbatim. Manifest check 2026-09-09: raw/facebook-threads/MANIFEST.json {threads: 396, total_messages: 15923, note: 'Thread-level metadata only. Contents gitignored — same reasoning as corpus/messages.csv'}. The 403 vs 396 gap is a counting-method difference (message_1.html files vs deduplicated threads), recorded as method noise, not a contradiction. Existing FB provenance nodes dat:0034, dat:0035, dat:0045, dat:0054, dat:0055 cover the export's verification history; this node carries the page's extent claim and sample inventory, not re-derived."
importance    = 3
tags          = ["facebook", "old-wiki", "attribution", "archive-extent"]
created       = "2026-09-09"

[when]
start = "2011-01-01"
end   = "2022-09-30"
+++

## What survives

- The extent figure (403+ threads / 396 manifest threads) — the small
  mismatch is method noise, explicitly so.
- The sample inventory as the page's attributed reading (Annie thread
  primacy, RJ Ritchey golf/politics, the 2011–2021 phishing noise floor).
- The breadth-vs-depth thesis (FB breadth at ~650 friends vs iMessage
  depth) as the prior wiki's framing, cross-referenced to the
  contact-gini concept page rather than re-argued.

## What does not survive checking

Any quoted message text from FB threads — thread bodies are not held,
so every quotation on the page (Annie's baby-talk, RJ's politics, the
phishing lures) is page-attributed. The 2007–2010-era claims ('earlier
likely truncated or low volume') are the page's own characterization of
its export, not an independently measured fact.
