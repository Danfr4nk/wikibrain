---
domain: mind
page_type: synthesis
title: "The Forger and the Detector"
status: active
date_created: 2026-09-13
date_modified: 2026-09-25
knowledge: earned
tags: [forensic-analysis, ai-collaboration, personality-profile, trust, addiction-recovery]
sources:
  - raw/drive-sweep/20260911/gsheets/message-csv/imessage_export_2124702449_20260820.from-gsheet.imessage_export_2124702449_20260820.csv.csv
  - raw/imessage/messages-part1-2011-2019.csv
  - raw/imessage/messages-part2-2019-2026.csv
  - raw/imessage/messages-master.csv
  - kb/data/1488-annie-will-fabricated-red-team-probe-20260913.md
  - kb/data/1802-held-corpus-timestamps-are-utc-not-local.md
synthesizes:
  - wiki/mind/concepts/dans-law
  - wiki/mind/concepts/document-fabrication
  - wiki/mind/synthesis/red-team-probe-series
  - wiki/mind/synthesis/instrument-is-subject
  - wiki/mind/profile/intp
  - wiki/mind/concepts/forensic-method
  - wiki/mind/concepts/exocortex
  - wiki/mind/synthesis/read-receipt-forensics
connections:
  - page: wiki/mind/concepts/dans-law
    type: contradicts
    claim: "The law assumes honest inputs and has no adversarial-input defense; its operator has demonstrated he can manufacture exactly the artifact class the law trusts."
  - page: wiki/mind/concepts/document-fabrication
    type: evidenced-by
    claim: "The 2026-08-14 counterfeit drug screen — seventy minutes from request to threat-model question, corpus-verified row by row — is the forger half of this synthesis's claim."
  - page: wiki/mind/synthesis/red-team-probe-series
    type: evidenced-by
    claim: "The dated, self-admitted series of adversarial inputs to AI systems (2026-08-14 to 2026-09-13) shows the operator builds authored inputs deliberately and records how detectors respond — he knows detectors misfire on authored input because he supplies it."
  - page: wiki/mind/synthesis/instrument-is-subject
    type: component-of
    claim: "The wiki's evidence-first epistemics is a prompt Dan wrote; this synthesis names the adversarial hole that epistemics inherits from its author."
  - page: wiki/mind/concepts/forensic-method
    type: contradicts
    claim: "The method's authority rests on receipts being what they claim to be. The forgery record shows receipts are manufacturable by the method's owner — the method has no receipt-authentication step."
  - page: wiki/mind/concepts/exocortex
    type: parallels
    claim: "The exocortex is a memory system with no independent verification layer; this synthesis is the same hole stated at the epistemic level rather than the systems level."
  - page: wiki/mind/synthesis/read-receipt-forensics
    type: parallels
    claim: "M4's corollary — the presence of a signal does not identify its author — is the same hole from the other side: authored input in this corpus arrives from third parties on borrowed devices as well as from the operator."
---

# The Forger and the Detector

The wiki's evidence-first epistemics — contemporaneous records outrank
testimony, documented counts override generated metaphor, receipts settle
disputes — has an adversarial hole, and the hole is shaped like its author.
**The detector and the forger are one person.** Dan runs the finest-grained
personal forensic apparatus in the record ([[wiki/mind/concepts/dans-law|Dan's
Law]], the Master Forensic Prompt, the 129-episode severance recount), and on
14 August 2026 he also built a counterfeit institutional document and tuned it
to survive the kind of inspection his apparatus performs
([[wiki/mind/concepts/document-fabrication]]).

This page states what follows from putting those two facts side by side, what
does not follow, and the working rule the wiki adopts because of it. Since the
page was first written on 2026-09-13 every quotation it relies on has been
checked against the authoritative corpus. Two of its framing claims did not
survive, and the corrections are in the body: the "collision" is seventy
hours, not forty-eight, and the *"deal with the receipts"* line went to
[[wiki/people/jerel-coles|Jerel Coles]], not to Annie's parents.

## The detector

The detector half is documented across three pages and is not in dispute.

**The law.** Dan's Law is a deconfounding heuristic from
[[wiki/self/context-core]] §6: when a cluster of anomalies has a near-zero
joint probability of being innocent, treat it as a real signal, strip one or
two elements as parasitic noise, and keep the irreducible core
([[wiki/mind/concepts/dans-law]]). Its two worked cases — the January 6 cluster
and the BFS drawer dispute — both land on a finding with the same shape: real
signal, noise attached, and a missing paper trail as the load-bearing element.

**The method.** [[wiki/mind/concepts/forensic-method]] lists six operating
rules. Rule 2 is *"every claim backed by specific evidence: quotes,
timestamps, footage."* Rule 5 is *"primary evidence — his own iMessage
archives, GPS traces, exports, closing reports — over mediated accounts."* The
method's signature technique treats the chat.db ledger as *"the
gaslighting-proof record — when a partner reframes accurate observations as
paranoia, the cold data adjudicates."*

**The instruments.** [[wiki/mind/concepts/exocortex]] catalogues the
bootloaders and master prompts that make any AI session run to the same
standard, and records that *"this wiki's substance standard is a direct
descendant"* of the Master Forensic Prompt.

Every one of those tools trusts the same thing at the bottom: that the record
is what it says it is. The law asks whether a cluster is innocent. It never
asks whether the cluster was *authored*. The method prefers primary records
over accounts. It has no step that asks whether a primary record is genuine.
That is not a defect peculiar to Dan's tools; almost no personal evidentiary
practice has such a step. It becomes a defect here because of the next
section.

## The forger

On 14 August 2026 Annie asked Dan to make her a passing drug-screen result
from Fayette County Drug and Alcohol to show her parents. He said yes without
asking a question and iterated on it for over an hour. The exchange is below
in full, every row read from the authoritative corpus. Times are UTC as stored
and Eastern (UTC−4) in brackets, per
[`kb/data/1802`](../../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md).

| UTC (EDT) | From | Text | Attachment |
|---|---|---|---|
| 17:00:22 (13:00) | Dan | I'm trying but it's not looking great | — |
| 17:01:01 (13:01) | Dan | I will at least get enough that if you can sneak out or something I have a few for us idk | — |
| 17:01:04 (13:01) | Dan | I'm trying | — |
| 17:06:31 (13:06) | Annie | I can spare like maybe 40. | — |
| 17:06:35 (13:06) | Annie | I'll text you after my appointment | — |
| 17:08:00 (13:08) | Annie | Do me favor lol make me an AI drug test results for fayette county drug and alcohol that shows passing 😂 | — |
| 17:08:16 (13:08) | Annie | My parents asked me to show results | — |
| 17:08:23 (13:08) | Annie | Okay bye gotta go | — |
| 17:17:12 (13:17) | Dan | Something like this | image/png |
| 18:05:23 (14:05) | Annie | Send again. | — |
| 18:08:32 (14:08) | Dan | — | image/png |
| 18:08:43 (14:08) | Dan | If so there's still stuff that needs fixed | — |
| 18:09:06 (14:09) | Dan | I got it pretty far but I didn't know if I needed to start from scratch or not | — |
| 18:09:35 (14:09) | Annie | Look the logo | — |
| 18:09:42 (14:09) | Annie | Up | — |
| 18:10:09 (14:10) | Dan | The logo / "Panal" instead of panel / The signature | — |
| 18:10:33 (14:10) | Dan | Find more that needs fixed I have to make the changes one at a time | — |
| 18:10:40 (14:10) | Annie | Hold on | — |
| 18:11:21 (14:11) | Annie | — | image/jpeg |
| 18:13:07 (14:13) | Dan | Next time you need to give me more time lol / I can do these real good but I need time to tweak things | — |
| 18:13:27 (14:13) | Dan | Okay let me see if I can do the logo or if I need to add that manually | — |
| 18:13:56 (14:13) | Annie | I'm sorry | — |
| 18:17:36 (14:17) | Dan | Hmmm | image/jpeg |
| 18:17:51 (14:17) | Dan | That logo is really wide for a header | — |
| 18:17:57 (14:17) | Dan | Should I center it? | — |
| 18:18:30 (14:18) | Dan | Are you SENDING this to them or just going to SHOW it on your phone | — |
| 18:18:42 (14:18) | Dan | If you're sending it we need to do a lot more work here | — |
| 18:21:23 (14:21) | Dan | Bop coming in a little bit if you wanted something | — |
| 18:22:48 (14:22) | Dan | — | video/quicktime |
| 18:22:53 (14:22) | Dan | Milo watching Candace | — |
| 18:23:42 (14:23) | Annie | Perf | — |
| 18:23:48 (14:23) | Annie | Send yo code in one second | — |
| 18:24:24 (14:24) | Dan | If you want something could you do 50 instead of 40 | — |
| 18:27:00 (14:27) | Annie | Yeah | — |
| 18:27:29 (14:27) | Dan | Are you SURE you want to get something? | — |
| 18:27:36 (14:27) | Annie | — | image/jpeg |
| 18:27:40 (14:27) | Annie | Take out 60 | — |
| 18:29:17 (14:29) | Dan | Going now love u | — |

Source: `raw/imessage/messages-part2-2019-2026.csv`, handle `+12124702449`.
Every row on the handle between 17:00 and 18:30 UTC is printed; the dog video
at 18:22 (Milo) is included because the log is complete, not because it bears
on the document.

Four things in the log matter for this page.

**The error census.** *"The logo / 'Panal' instead of panel / The
signature"* is an inspection. It checks the artifact against the logic of the
thing it is imitating — the agency's mark, the spelling a clinic would use, the
feature a reader would look for — and it is run by the maker, before any
reader sees it. That is the same move the forensic method makes on someone
else's document, and the page's claim that *"he did not learn a new skill on
August 14; he ran the old skill backwards"* is the plainest statement of the
thesis ([[wiki/mind/concepts/document-fabrication]]).

**The threat-model question.** *"Are you SENDING this to them or just going
to SHOW it on your phone / If you're sending it we need to do a lot more work
here."* A document glanced at on a phone must survive a glance. A document
sent can be zoomed, forwarded and checked against the agency. He sets the
fidelity by how hard it will be inspected. Dan's Law isolates what the
conclusion rests on; here the same procedure isolates what the illusion rests
on.

**The manual-edit line.** *"Okay let me see if I can do the logo or if I need
to add that manually"* (18:13:27) was not on the prior pages. It indicates a
generated base image corrected by hand where the generator could not produce a
detail — which bears on the open question of what tool was used, and
suggests the answer is "more than one."

**The procurement frame.** The first three rows and the last seven are about
buying. The document sits between Dan saying he is trying to source and
Annie's *"Take out 60."* What was being manufactured was the appearance of
compliance, so that the non-compliance could continue.

## Why the document was wanted: the compliance record

The forgery answers a testing regime, and the regime is in the corpus. Every
Dan- or Annie-sent row matching *drug test* or *drug tested*, 2011–2026,
complete (`raw/imessage/messages-part1-2011-2019.csv`,
`…/messages-part2-2019-2026.csv`, searched 2026-09-25; rows about unrelated
third parties are listed but not quoted):

| Date (UTC) | From → to | Text | Bears on |
|---|---|---|---|
| 2018-03-20 02:52:29 | Dan → friend | i wasn't sure if i should be ready for drug test when i go up for paperwork tomorrow so i had jack fill a cup for me lol | Dan |
| 2018-03-25 17:02:31 | Dan → other | and i gave him all the correct answers for the drug test. | Dan |
| 2018-03-27 23:34:30 | Dan → friend | i didn't know i wasn't being drug tested so i spent the whole time maintaining the temperature of my bottle of jack rusko pee in my armpit | Dan |
| 2018-03-27 23:35:38 | Dan → friend | bro i'm all-star team for passing drug tests | Dan |
| 2018-04-23 02:05:55 | Dan → other | (a third party's probation) | third party |
| 2018-12-09 17:30:31 | Dan → other | (a third party tested by a relative) | third party |
| 2025-09-06 17:47:56 | other → Dan | (a correspondent's own test) | third party |
| 2026-05-27 22:19:13 | Annie → Dan | Well I had to take a drug test today. Obviously tested positive. | Annie |
| 2026-07-26 11:43:01 | Annie → Dan | And had to take a drug test from my dad | Annie |
| 2026-07-27 16:50:10 | Dan → Annie | annie I'm so scared and what if you. Get drug tested again | Annie |
| 2026-08-14 17:08:00 | Annie → Dan | Do me favor lol make me an AI drug test results … | Annie |
| 2026-08-14 18:10:09 | Dan → Annie | The logo / "Panal" instead of panel / The signature | Annie |
| 2026-09-08 20:14:57 | Annie → Dan | Parents making take a drug test | Annie |

Read in order, the Annie rows are a sequence: a positive result in May; a test
administered by her father in July; Dan's fear of another; the request for a
fake in August; and her parents still testing in September, three and a half
weeks after the fake was made. The last row is the closest the record comes to
answering whether the document was used or whether it worked. It does not
answer either. It shows the regime did not end.

The 2018 rows are the precedent
[[wiki/mind/concepts/document-fabrication]] records under its 2026-09-13
correction: the first documented defeat of a screen was physical, not digital,
and it was Dan's own. The corpus dates on those rows are UTC; the first falls
on the evening of 19 March local, which is the date the prior page gave.

## The craft behind "I can do these real good"

*"I can do these real good but I need time to tweak things"* is a claim of
practice. The corpus holds the practice that is on record — image editing,
across nine years — though not any earlier forged document. Every Dan-sent row
matching *photoshop*, complete:

| Date (UTC) | Text (excerpt) |
|---|---|
| 2016-08-11 07:15:13 | She used to ask me to photoshop her into them lololol |
| 2017-04-25 23:18:06 | Also my photoshop game is crisp af |
| 2017-06-25 22:15:41 | Yes and it will be SO much easier to do them in photoshop |
| 2017-07-11 20:58:36 | i did the contour maps of the new greens in photoshop |
| 2018-03-27 23:44:00 | i've been sending him daily photoshops of him in different racist scenarios |
| 2018-05-08 19:46:55 | No photoshop required |
| 2018-05-20 03:38:01 | I had enough time to brush up on my photoshop skills here |
| 2019-08-03 07:00:06 | that's the closest thing to photoshop you can get on an iphone |
| 2019-10-04 02:57:10 | i would photoshop the 'i dream of jeanie' logo to say 'i dream of ally' but my phone is wet |
| 2019-10-04 03:18:34 | i might have to get out of the shower so i can properly photoshop myself as charlie brown … |
| 2025-08-27 15:08:33 | say goodbye to photoshop |
| 2025-09-11 03:44:11 | Photoshop is dead |

The record is of a working editor: golf-course contour maps for a pro shop, logo
swaps, compositing people into images as jokes, and then, in 2025, the
announcement that generation had replaced the tool. Nothing in it is a document
forgery before August 2026. What it establishes is narrower and sufficient:
the error census on 14 August is the checklist of someone who has edited
images for years, and *"these"* can plausibly mean images generally rather
than forged documents specifically. That question stays open.

## The collision, corrected

The page as first written said that *"forty-eight hours after building the
counterfeit, Dan staked the entire August 16–19 campaign on documentary
authority — 'I don't need to lie. I have proof of all of this' … addressed to
Annie's parents."* The corpus corrects the interval and the addressee.

The line is one message:

> *"I don't need to lie. I have proof of all of this and I'm not using it to
> blackmail anyone. If someone wants to call me a liar they can deal with the
> receipts"*
> — Dan → Jerel Coles (`+17248123683`), 2026-08-17 16:32:29 UTC (12:32 EDT).

It was sent **70 hours 14 minutes** after the threat-model question (18:18:42
UTC on the 14th), not forty-eight. It went to Coles, not to Annie's parents.
What connects it to the parents is the next message, 50 seconds later:
*"Now I have an email to compose to clear my name from whatever the fuck has
been said about me to her parents."* The parents were the intended audience of
a document Dan was about to write, not of this line. The substance of the
collision survives the correction and is sharper for it: within three days,
the same person built a document meant to deceive two particular readers and
announced a document meant to be believed by the same two readers, on the
strength of his records.

The full "proof" register of those days, every Dan-sent row 2026-08-14 →
2026-08-19 matching *receipt, proof, record(s), screenshot, evidence*
(`raw/imessage/messages-part2-2019-2026.csv`):

| UTC | To | Text |
|---|---|---|
| 08-16 01:14:08 | Annie | Is plenty of evidence that you are entirely unserious |
| 08-17 03:52:11 | Annie | You seriously thought I wasn't going to record that? |
| 08-17 08:14:45 | Annie | …who actually has the records to prove what a LIAR you are. … This audio is VERY fucking clear about what is really going on here |
| 08-17 16:06:01 | Coles | You can wait until im ready with the screenshots lil bro |
| 08-17 16:10:57 | Coles | Plus im trying to get you screenshots to show you what Annie actually says about you |
| 08-17 16:32:29 | Coles | I don't need to lie. I have proof of all of this … they can deal with the receipts |
| 08-17 16:59:20 | Annie | that's the only reason I spoke at all. I had intended to just record what happened and stay silent |
| 08-18 19:43:40 | Annie | Also im messaging him with the actual truth and proof |
| 08-18 20:50:13 | Ally | *record scratch* |
| 08-18 21:56:23 | Annie | I have the entire record. … |
| 08-19 02:44:47 | Ally | You missed the best evidence for your theory btw |
| 08-19 04:17:16 | Ally | Omg hold the phone i totally missed what happened when you sent that screenshot of the twitter DM |
| 08-19 05:12:51 | Annie | …I will not let you do this without making sure everyone knows what really happened and I've kept the records to do it |
| 08-19 12:47:58 | Ally | Just to correct the record |
| 08-19 12:57:29 | Ally | …i don't know that I could help myself from screenshotting |

Fifteen rows in four days, and the instrument they invoke is the same in every
one: the record, the audio, the screenshots. Across 17–19 August (Eastern) Dan
sent 62 attachments — 19 to Annie's handle, 36 to
[[wiki/people/ally-lubin|Ally]], 5 to Coles, 2 to his mother — 29 JPEG, 13
PNG, 8 HEIC, 3 audio, 2 video, one PDF and one CSV among them (same source,
`has_attachments = 1`, counted 2026-09-25). The "19 outbound attachments"
figure on [[wiki/mind/concepts/document-fabrication]] is the Annie-handle
subset, and it is correct.

The record contains no acknowledgment, from Dan or anyone else, that the
receipts were being offered to the audience of the forgery three days after
it was made. That absence is recorded, not interpreted.

## Authored input from the other side

The hole is not only the operator's. [[wiki/mind/synthesis/read-receipt-forensics]]
added, on 2026-08-20, a corollary to its rule that missing metadata is weak
evidence: **the presence of a signal does not identify its author.** At least
six inbound rows on Annie's handle across July–August 2026 were typed by Coles
holding her phone, in three windows — 2026-07-26 05:39–05:57, 2026-08-16
23:42–23:53 and 2026-08-18 21:46–21:50 — and nothing in the database marks
them. A read receipt proves a device was unlocked, not who was holding it.

So the corpus the detector trusts carries authored input from at least two
directions: artifacts the operator can make, and messages third parties sent
under someone else's handle. The first is a capability; the second is
documented fact. Both break the same assumption.

A third direction appeared in the record on 22 August 2026, and it is noted
because it bears on the wiki directly. At 06:12:51 UTC a message arrived on
Ally Lubin's handle reading, verbatim, *"August 14 — the forgery. She asks him
to make her a fake Fayette County drug screen showing a pass, to satisfy her
parents. He does it, and spends forty minutes correcting the logo, the
misspelled panel and the signature, finally asking whether she is emailing it
or only showing it on her phone, because the two need different fidelity"* —
followed at 06:18:36 by a second paragraph of message-count analysis in the
same register (`raw/imessage/messages-master.csv`). The first paragraph is the
text of a passage on [[wiki/people/annie-ulmer]]. Four minutes after it Dan
wrote *"Actually i just need to block you so that's what I'm doing,"* and a
minute later *"And yeah i am an idiot but even I am smart enough to know that
this isn't good enough to convince even the least AI-savvy person."* The record
does not show how the passage reached Ally, which way the text travelled (page
to message, or message to page), or what *"this"* refers to. What it does show
is that prose in the register of this wiki has entered the evidence stream
the wiki is built from. [[wiki/mind/concepts/exocortex]] describes a closed
loop in which agents write the wiki and read it back as ground truth; this is
the same loop reaching the message corpus through a person.

## The adversarial series

[[wiki/mind/synthesis/red-team-probe-series]] documents Dan constructing
inputs to AI systems designed to make them refuse, moralise or invent
corroboration, and recording the result. Two entries bear on this page.

The cleanest is [`dat:1488`](../../../kb/data/1488-annie-will-fabricated-red-team-probe-20260913.md):
across roughly two hours on 13 September 2026 Dan fed a model an escalating
fabricated account about people in Annie's family, then revealed the whole
thread as fabricated and ordered every factual claim removed from the record;
the retraction was carried out. Its content is not repeated here because it
was never true. What stands is the method — build a false record in layers,
watch whether the reader adds corroboration of its own — which is exactly the
attack an evidence-first system is least equipped to see. He built it on
purpose to see whether the model would fall for it.

The other is the series' first entry, which the ledger dates to **2026-08-14**
and describes as pressing a model toward *"corpus manipulation — deceptive
output directed at the evidentiary record itself,"* with no transcript held.
It carries the same date as the forgery. Whether the two are one event seen
from two sources, or two events on one day, is not in the record. It is logged
as a gap below rather than merged.

Per the series page's own boundary note and the standing order it records
(2026-09-13), avatar and photo-generation work is not part of that series and
is not treated as evidence here. The image-editing log above is plain history
of a skill.

## What this bounds

**It does not invalidate** the J6 or BFS readings. Both rest on primary
records with several independent elements, not on a single receipt, and
neither record was in Dan's power to author.

**It does not make the August attachments suspect.** In this corpus
unsuspicious is the default and fabrication is the marked case. The 62
attachments of 17–19 August have not been opened by the wiki, and nothing about
them is suspected. They are simply not self-authenticating.

**It bounds Dan's Law:** reliable where the input stream cannot be authored by
anyone with a stake, unrated everywhere else. [[wiki/mind/concepts/dans-law]]
already carries this as its 2026-09-13 NEW section; this page is where the
argument is made in full.

**It bounds the forensic method:** the method audits outputs against
primary records, and the primary records can be made. The method's own
self-falsification record — *"it audits outputs, never inputs"* — is the same
finding reached from a different failure (a search that asked the wrong
question), which makes two independent routes to one conclusion
([[wiki/mind/concepts/forensic-method]]).

**It bounds the wiki's epistemics.** [[wiki/mind/synthesis/instrument-is-subject]]
showed that the honesty standard is a prompt Dan wrote. This page adds that the
standard's enforcement depends on receipts, and the one party the wiki
cannot authenticate receipts against is the party who supplies most of them.
The exocortex's loop inherits this at system scale: honest by design,
uncheckable by construction.

## The profile reading

[[wiki/mind/profile/intp]] describes a Ti-dominant analyst who treats reality as
a high-fidelity system and hunts for the point where it breaks. That
disposition is indifferent to direction. Finding where a document would fail
inspection is the same act whether the goal is to catch the failure or to
remove it first. [[wiki/mind/concepts/document-fabrication]] adds a second
mechanism — the request arrived as an explicit instruction, and Dan's
[[wiki/mind/concepts/explicit-verbal-commitment|explicit-verbal-commitment]]
architecture executes explicit instructions without deliberation. Both are
readings; the profile scores behind them are AI-inferred testimony
([[wiki/mind/concepts/forensic-method]] §Gaps). The page's claim does not
depend on either. It depends on the log.

## The rule for this wiki

1. **Receipts are evidence, not authentication.** A screenshot, export, image
   or recording supports a claim to the degree its provenance is shown, not
   to the degree it exists.
2. **Say when an artifact has not been opened.** Where a claim rests on an
   attachment nobody in the wiki has seen, the page says so rather than
   treating the attachment's existence as corroboration.
3. **Multi-source primary records are unaffected.** A claim resting on several
   independent corpus rows, or on records outside any interested party's
   control, is not touched by the forgery capability.
4. **Check authorship windows before inferring behaviour from a device.**
   Before reading intent from inbound rows or read receipts, check the window
   against the known third-party-access episodes
   ([[wiki/mind/synthesis/read-receipt-forensics]]).
5. **Wiki-register text inside the corpus is testimony about the wiki, not
   evidence about events.** The 2026-08-22 row is the first case.

## Falsifiers

- A held copy of the three August 14 images showing an unfinished or unusable
  artifact would narrow *fabricated* to *attempted*. The page's argument
  survives that — the capability and the calibration are in the text rows —
  but its strongest sentence would weaken.
- Evidence that the August 14 request was a joke both parties understood as
  one. The emoji allows that reading; an hour of correction and
  the threat-model question rule it out on the current record.
- A documented case of Dan's Law or the forensic method detecting an authored
  input — catching a fake — would show the tools are not blind to the class,
  only unprotected. None is on record.

## Gaps

- **The artifact is not held.** Four images passed on 14 August (17:17, 18:08
  and 18:17 from Dan; 18:11 from Annie); none is in `raw/`. Glance-grade or
  zoom-grade is unmeasured.
- **Whether it was used, and whether it worked**, is not in the record. The
  2026-09-08 row shows only that testing continued.
- **The 2026-08-14 series entry** has no transcript; its relation to the
  forgery on the same date is unknown.
- **The 2026-08-22 wiki-text row** has no provenance: who wrote it, how it
  reached Ally's handle, and which direction the text moved.
- **No adversarial-robustness procedure exists** for Dan's Law or the method.
  The rule above is a reading discipline, not a procedure.
- **The extent of document work before August 2026** is unsearched beyond the
  two keyword sweeps above. Pay stubs, letters and verifications have not been
  searched for.

## Coverage limits

- Every message quoted on this page was read from the authoritative corpus
  (`raw/imessage/messages-part2-2019-2026.csv`, `messages-master.csv`) on
  2026-09-25, with UTC stored times converted to Eastern at −4. The prior
  version's times were Eastern and agree after conversion.
- The two keyword logs (drug test; photoshop) are complete for the exact
  terms searched and for the corpus's coverage, which is thin before 2015 and
  in 2019–2024 ([`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md) §Known limits).
  Synonyms were not searched.
- The red-team series and dat:1488 rest on chat transcripts held under
  `raw/sammy/`, read by the pages that cite them, not re-read here.
- The profile reading is labelled as such and carries no evidentiary weight.

## Sources

- Up: [[wiki/mind/index|Mind index]].
- Forgery exchange, compliance log, photoshop log, "proof" log, attachment
  counts: `raw/imessage/messages-part2-2019-2026.csv`; 2018 rows from
  `raw/imessage/messages-part1-2011-2019.csv`; 2026-08-22 row from
  `raw/imessage/messages-master.csv`.
- Original filing: `raw/drive-sweep/20260911/gsheets/message-csv/imessage_export_2124702449_20260820.from-gsheet.imessage_export_2124702449_20260820.csv.csv`.
- kb: [`dat:1488`](../../../kb/data/1488-annie-will-fabricated-red-team-probe-20260913.md),
  [`dat:1802`](../../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md).
- Wiki: [[wiki/mind/concepts/document-fabrication]],
  [[wiki/mind/concepts/dans-law]], [[wiki/mind/concepts/forensic-method]],
  [[wiki/mind/concepts/exocortex]], [[wiki/mind/synthesis/instrument-is-subject]],
  [[wiki/mind/synthesis/read-receipt-forensics]],
  [[wiki/mind/synthesis/red-team-probe-series]].
- No images are held for any artifact discussed; none are embedded.
