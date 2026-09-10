+++
id         = "dat:0031-dui-belongs-to-the-other-speaker"
layer      = 1
type       = "datum"
title      = "The DUI the prior wiki could not place belongs to the other person in the thread"
claim      = "The Facebook Messenger thread the prior wiki cited for an otherwise-undocumented DUI shows the line \"hell yeah I already got a DUI I'm not getting any more of those :D thanks bro\" (2017-10-19 17:58:15) attributed to Christo Coan, not to Dan Frank. In context Dan writes \"everyone welcome to crash here so we can all get properly fugged up\" at 17:57:51, and the DUI line is Christo accepting that offer twenty-four seconds later, giving his own prior DUI as the reason he will not drive."
cites      = ["src:facebook-export-2026-06-23", "src:wikitest-rebuild-session-2026-09-09"]
confidence = "high"
extraction = "Pulled 2026-09-09 from the Facebook export's inbox/christocoan_2cxo0swo3g/message_1, exported as text/plain over anonymous HTTPS after the operator made the tree public. Parsed all 76 message blocks in the thread on the export's own NAME / rule / text / timestamp structure: 42 Dan Frank, 34 Christo Coan. The attribution is structural, not inferred from content."
importance = 5
tags       = ["legal", "facebook", "corroboration", "error"]
created    = "2026-09-09"

[when]
date = "2017-10-19"
+++

An open contradiction closed by reading the source, and the answer is that the
claim was never about the subject at all.

## What the prior wiki carried

On `wiki/legal/2015-possession-arrest.md`, under **CONTRADICTION (carried
forward)**: an October 2017 message "indicates a separate, otherwise
undocumented DUI." It sat unresolved against the operator's statement that the
possession arrest was "my first and only real arrest," and the page reasoned
carefully about how both might be true — a DUI issued by citation without a
booking arrest would reconcile them.

That reconciliation was unnecessary. There is no DUI in this record to
reconcile.

## What the thread shows

Twenty-four seconds, chronologically:

| Time | Speaker | |
| :--- | :--- | :--- |
| 17:57:51 | **Dan** | *"And like I said, everyone welcome to crash here so we can all get properly fugged up"* |
| 17:58:15 | **Christo** | *"hell yeah I already got a DUI I'm not getting any more of those :D thanks bro"* |

Christo is accepting an offer of somewhere to sleep, and giving his own prior
DUI as the reason he is not driving home. The *"thanks bro"* is the tell: it is
a reply to an offer, not a disclosure.

## Why it went wrong, and why it was hard to catch

A messenger export is one undifferentiated stream of lines. Pull a quote out of
it without carrying the speaker and the sentence keeps its grammar while losing
the only thing that fixed its subject — *"I already got a DUI"* reads identically
whoever typed it.

The prior wiki did not misread the sentence. It lost the attribution somewhere
between the export and the page, and then reasoned impeccably from the wrong
premise, generating a plausible reconciliation for a puzzle that did not exist.
Its citation was honest and precise, which is the only reason this was checkable
at all.

The general form is worth keeping: **a quotation is not evidence until it
carries who said it.** In this corpus, where the primary sources are
conversations, that is not a detail — it is the difference between a fact about
the subject and a fact about somebody else.
