+++
id            = "dat:1386-read-receipt-forensics-defects"
layer         = 1
type          = "datum"
title         = "Four chat.db metadata defects that silently produce confident wrong answers (2026-08-09 session)"
claim         = "The read-receipt-forensics page, derived from a single 2026-08-09 extraction session against the operator's local macOS chat.db, documents four instrument defects. M1: date_read is directional and asymmetric — on sent rows it is when the other party opened the message (needs their read receipts on); on received rows it is when Dan opened it, recorded locally always; reading the column undifferentiated produced the conclusion the counterparty was continuously active all day (she was not visible before 23:10:40; half the column logs the operator's own behaviour). M2: reply_to_guid auto-populates with the previous message (179/181), not a true inline reply — the real marker is thread_originator_guid (2/230) — voiding any 'she replied inline therefore she had the thread open' argument. M3: SQLite strftime('%s',...) returns TEXT compared silently false against computed INTEGER expressions — a zero-byte export that read as a finding. M4: absence of metadata is weak evidence — 41/129 sent rows carry no delivered_at at all (device-sync artifact). The August 2026 window adds the authorship caveat: read receipts prove a device was unlocked, and at least six inbound rows on Annie's 212 handle across July-August 2026 were typed by Jerel Coles holding her phone — 'there is no column for this.'"
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 37956. The page states its own sourcing limitation: the 230-row annie_metadata_24h.csv was never filed to raw/, and sources: is empty rather than pointing at a non-existent file. The defects are properties of the chat.db schema and SQLite semantics (M3 is reproducible in principle); the session counts and the Coles phone-access episodes are the operator/page testimony, not independently re-checked here. The canonical safe predicate is preserved in prose: m.date >= (CAST(strftime('%s','now','-24 hours') AS INTEGER)-978307200)*1000000000."
importance    = 4
tags          = ["forensics", "methodology", "chat.db", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2026-08-09"
end   = "2026-08-28"
+++

Load-bearing on its own terms: every wakefulness claim on the August 2026
unmasking timeline depends on the M1 directional asymmetry. The page's
2026-08-20 re-check also corrects a scope artifact: the Aug 8-9 unmasking was
framed as ending with an unanswered message at 03:41:32, but the fuller export
shows the exchange resumed at 08:19 the same morning — the absence of traffic
at an extraction window's edge reading as the absence of traffic, exactly M4's
failure mode applied to framing rather than a row. The owed audit of prior
corpus analyses that treated reply_to_guid as intentional threading (M2) is
still listed in BACKLOG.md per the page.
