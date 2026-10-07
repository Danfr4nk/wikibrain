---
domain: meta
page_type: index
status: active
tier: major
template_v1: true
date_created: 2026-09-02
date_modified: 2026-10-07
sources: []
changelog:
  - date: 2026-10-07
    note: "Expanded to major tier and restructured to canonical article template v1: story-first lede, narrative body sections, four-rules section retained, Conflicts in the record placed low, Assessment added. No instrument figure was altered — every number is carried over from the ledger pages, tool docstrings, and journey page cited. The index's stale testimony standing-state figures were corrected to the ledger page's; the old figures are preserved in Conflicts in the record."
---

# instruments — index

**The measurement layer.** Every other page in this wiki *argues*: it reads
sources, reasons from them, and states a conclusion somebody could disagree
with. The pages listed here do not. They are the outputs of tools built to
**measure** something about Dan from first-party dated data, and they publish
what the measurement says and nothing else.

The distinction is not decorative, and it is why this section exists rather
than the instruments being scattered as ordinary entries. A synthesis is only
as good as the reasoning behind it, and reasoning about oneself is exactly
where a person is least reliable. An instrument is the part of the corpus
that does not depend on anyone reasoning correctly — including the wiki.

Two shapes of instrument live here. The **ledgers** are event-sourced: an
append-only JSONL log is the source of truth, a projection is regenerated
from it and safe to delete, and the wiki page is the public face. The
**measures** have no ledger of their own — they compute over a corpus on
demand, and their findings land on ordinary pages that cite them. Both
obey the same four rules, stated below, and both exist for the same reason:
the wiki reasons from what was written down, and what was written down is
only trustworthy when the tool reading it cannot quietly lie.

[[wiki/meta/journeys/the-instrumented-channel]] tells the older half of this
story: five instruments built to measure one high-volume relationship, each
of which turned out to measure something wider than the channel it was built
for. That is the pattern. This page is the standing catalogue of the ones
that survived into tools.

## The four rules every instrument obeys

**1. Evidence, not claim.** An instrument page states no finding. It presents
every record and the arithmetic over them, and stops. A finding *drawn* from
an instrument reaches an ordinary page through the normal operations — never
the generated one, which is overwritten on the next write. This is what
keeps the measurement usable as evidence in an argument it is not itself
making.

**2. Generated, never hand-edited.** Each page is regenerated from an
append-only log or from the corpus, and a hand-edit fails the gate in
`bin/wiki-check`. A number somebody could quietly adjust is not a
measurement.

**3. It states its own limits, in a section that cannot be dropped.**
Coverage, sample bias, what the instrument structurally cannot see.
`bin/intake` never prints a quantity statistic without the share of events
it was computed from; `bin/wiki-testimony` never prints a rate without its
`n` and refuses a class below `MIN_N` as a prior outright. An instrument
that cannot state its own denominator will be believed as though it had
one.

**4. The complete log lives on the entry.** An instrument page that tracks
an ongoing or temporal metric displays the metric's complete log — every
run, every week, every export — translated for a human reader. A summary
may sit above the log; it never replaces it. Dan's words: more is better
than less, every time. A measurement you cannot see in full is not a
measurement, it is a press release.

## The ledgers

Event-sourced: an append-only JSONL log is the source of truth, a
projection is regenerated from it and safe to delete, and the wiki page is
the public face. Nothing is ever edited in place — a correction supersedes
and the log keeps both.

### `bin/intake` — the consumption ledger

The intake ledger sets a dated first-party dataset against *"I barely used
anything that weekend."* It measures a finite quantity entering the record
and every known disposition of it after that — the anti-unreliable-narrator
layer for consumption. Prose recollection of consumption is the least
reliable testimony a person gives about themselves, so a dated record is
worth having beside the pages that describe the same behaviour from
memory. It does not call him a liar; it makes the question answerable
instead of rhetorical.

The standing state of the log, per the generated page: **4 units opened (4
closed), 9 intake events, all 9 carrying a quantity, 3 corrections on the
log.** The entire intake history is one night — Sunday, August 30 into
Monday morning, August 31, 2026 — from a cocaine unit received at 17:04 to
a cannabis unit closed at 02:36. Unit 1: cocaine, opened with 0.75 g, six
events, fully accounted, closed 02:35. Units 2–4: cannabis, 0.05 g each,
single events. Median dose: 0.1 g for cocaine, 0.05 g for cannabis.

The corrections are the ledger's honesty mechanism working in public. Three
live on the page: a misspelt 'cannibis' that split one substance into two
headings (corrected to 'Cannabis' with a catalog id), and a unit-selector
slip that logged a cannabis unit as 0.05 mg — one-thousandth of a bowl —
against the unit and its intake event both, corrected to grams. Nothing is
edited in place; a mistyped value becomes a new record naming the original,
the correction and the reason, so the ledger shows the corrected figure
while the log remembers both. That a correction was needed is itself
evidence about how the logging happens.

Two discipline points are worth carrying. First, **coverage is a stated
number, not an assumption**: every event on the log carries a quantity, so
the 100% coverage figure is a measurement; events logged without a number
would still be real events, counting toward timing and clustering but
excluded from every quantity figure. Second, **one figure is withheld on
purpose**: `bin/intake report` prints a per-unit `Rate of consumption ...
g / day` that extrapolates a unit's quantity across a full day from
however long that unit actually lasted — for a unit consumed in an evening
it reports roughly double what was consumed that day. It is a restatement
of the unit's lifespan, not a daily rate, and it is kept off the page
rather than printed with a caveat beside it. The `measured` flag, likewise,
is a claim made at entry, not a guarantee — where a quantity exactly
matches a one-tap preset in `intake/substances.json` it was plausibly a
tap rather than a weighing.

The findings drawn from the ledger live on
[[wiki/health/cocaine]] and [[wiki/health/chemical-architecture]], cited
back to the unit ids — the ledger is the first-party dated record the
cocaine page's measured-night section is drawn from, and it supplies the
first dated measurement behind that page's two Daily rows (cocaine and
cannabis), which were otherwise description taken from Dan's own account
of his system.

Page: [[wiki/health/intake-ledger]] · Source: `intake/events.jsonl`

### `bin/wiki-testimony` — the testimony ledger

The testimony ledger sets an adjudication record against *"it was
definitely 2014."* It records every first-person claim the corpus has
captured, what settled it, and two numbers over the settled ones. The
tool's own design note, in its docstring, states the missing half it
fills: the wiki had been closing claims for months — each check landing as
a blockquote on one page and then being over — and page 41 had no idea
that the same person's date claims came back early on page 12, so the next
answer was weighed exactly as credulously as the first. This is the place
the result of the check is recorded, so that scattered adjudications
become one instrument pointed at the next unproven thing he says.

A single trust score would collapse two facts that behave differently, so
the ledger carries two. **Veracity** is how often he turns out to be
right — how much to believe him. **Calibration** is whether his own
stated confidence tracks that — the only thing that makes an *unproven*
claim assessable, because an unproven claim offers nothing to check
except the class it belongs to and the confidence it arrived with. Points
are `weight × (2v − 1)`: a confirmed claim earns its full weight, a
refuted one loses it, a partial is a wash, and weight is specificity
(1–3) times 1.5 where other pages reason from the claim.

The standing state, per the generated page (2026-09-18): **veracity 100 /
100 on n = 1; calibration Brier 0.040; stated-versus-actual +0.20.** Five
claims recorded, one settled, four unadjudicated and excluded from every
statistic. Read every figure with its n — this ledger holds one settled
claim, not thousands. The one settled claim is a quantity claim about an
original May 2025 asking price, marked confident, outcome confirmed —
what settled it, per the ledger's record, was a bankruptcy dossier
authored by Suzanne Frank (hearsay: her authorship, her account, not
Dan's voice). The four unsettled claims (t003–t006) concern the July
2017 sequence and its retelling. A class under n = 5 is refused as a
prior outright (`MIN_N = 5`), and rates are shrunk toward the global with
a pseudocount of 3.

The ledger enforces the standing directive mechanically, as a refusal
rather than a warning: `CLAUDE.md` carries a moratorium on new writing
about one living person, and the tool refuses such a record rather than
leaving it to a session to remember. At least one cleanly adjudicated
confirmation is excluded by that rule. The exclusion is correct and it is
still a bias — a score drawn from a filtered record that does not
announce the filter is worse than no score, so the ledger announces it.
Adjudication is not a random sample either: a claim gets checked when
somebody had a reason to check it, and the reasons correlate with it
being surprising, load-bearing, or already doubted, so the settled set
over-represents both spectacular confirmations and spectacular failures.
And the ledger states plainly what it does not measure: nothing here
measures honesty — every outcome is consistent with a person reporting in
good faith and misremembering.

Page: [[wiki/meta/testimony-veracity]] · Source: `testimony/events.jsonl`

## The measures

No ledger of their own — they compute over a corpus on demand, and their
findings land on ordinary pages that cite them.

### `bin/mine-messages` — the message-mining instrument

The instrument for the message-density campaign: finding new nodes,
corroborating standing wiki claims, and supplying primary evidence for
`mind/` and `self/` pages. Corpus, per the catalogue: 217,573 messages —
106,629 sent, 110,944 received — across 503 handles, 4.55M characters of
Dan's own text.

The tool exists rather than ad-hoc greps because three properties of the
dump make naive `grep` quietly wrong, and every one of them already
produced a false measurement during development. **Messages span multiple
lines**: a record starts with a `TS|Sent|handle|…` header and anything
after it until the next header is a continuation, so line-based grep
splits one message into several and cannot show a whole message.
**Curly apostrophes outnumber straight ones 28,904 to 19,978 in Dan's
sent text**, so a pattern written `i'm` misses the majority of its own
matches — all text is normalised before matching. **Direction is reliable
here; the counterparty is reliable *only* here**: the dump splits
106,629 Sent / 110,944 Received, but the companion CSV marks direction
fine while leaving 69,869 of its Sent rows with no `contact_handle` at
all — sound for a corpus-wide claim, unsound for a per-relationship one.
Subcommands: `stats`, `grep`, `battery` (the curated self-description
pattern battery), `timeline`, `entities`.

### `bin/text-metrics` — the turn-level instrument

`bin/mine-messages` counts messages. That is the wrong unit for style:
98% of Dan's messages are a single line and his median is 6 words, so a
message-level read makes him look unremarkable. The unit that corresponds
to "one thing said" is the **turn** — a maximal run of consecutive
messages from one side in one thread, split when the same side pauses
more than 30 minutes. The instrument behind
[[wiki/mind/profile/texting-deviance-audit]], committed alongside it so
every figure on that page is reproducible rather than trusted — that is
the failure mode the page exists to correct.

The headline series: measured against the people he is actually talking
to in the same year, his words-per-turn ratio was 1.23× in 2015–2019,
1.13× in 2020–2024, 1.70× in 2025 and **3.05× in 2026**. The behaviour is
recent and accelerating, not lifelong — and it is not a change of
audience: held to the same counterparty, the drift is intact (the
delivery-thread control holds 3.2–4.3 words per turn across eleven
years; the capacity for brevity is intact and demonstrable; what varies
is the channel). The seven-mode turn taxonomy isolates where the words
go: **STACKED-ESSAY** — three-plus messages, median thirteen-plus words
each — is 11.2% of his 2026 turns and 44.3% of everything he says, 11×
more frequent in his output than in his interlocutors', quadrupled since
2015–19. And it measurably costs him: turns above 200 words are answered
54.7% of the time against 93.8% for turns of 11–20 words; the curve peaks
at 11–20 words and falls monotonically after 20.

Excluded from every count: tapbacks, attachment-only rows, and any
exactly repeated block of ten or more copies — one 427-copy glyph-spam
message would otherwise inflate his 2025–26 output by 1.33%. The source
is `imessage_export_deep_20260813.csv`, the only sender-tagged export
reaching past 2025, timestamps converted from UTC to Eastern.
Subcommands: `eras`, `modes`, `contacts`, `response`, `hours`,
`silence`, `target`.

### `bin/mine-tweets` — the public-record instrument

The instrument behind the mined claims on `wiki/self/twitter` and every
page that cites a tweet. Corpus, per the catalogue: 2,741 originals, 24
Sep 2008 → 1 Sep 2026, from three sources of different fidelity (1,412
spreadsheet · 1,098 live scrape · 231 backend).

Five properties of the archive make naive grep silently wrong. **Two
sources with different fidelity**: engagement (likes/replies/reposts) is
null on a share of rows, concentrated in the live scrape — so every
engagement figure this tool prints carries the share of rows it was
computed from. **An @handle is three different acts**: opening a tweet
with a handle is Dan addressing them, mid-sentence is mentioning them to
somebody else, `RT @user:` is quoting them — @diplo is 10 mentions but
only 4 addresses, @ericjester 22 and 20; counting all three together
turns "who does he talk to" into "whose name appears." **Truncated
rows** (the catalogue figure: 125) are excluded from length figures. **A
refrain repeats**: "2024 year of the dragon" appears 19 times across
eight months of 2024 — 7.4% of that year's originals — real, not an
export artifact, never dropped silently. **Six rows have empty text**
where the spreadsheet dropped the content; a 2026-09-02 backend fetch
showed none is actually empty live. Two further limits no flag fixes:
pure reposts are excluded by the archive's own inclusion rule, so every
volume figure is originals-only ("quiet in 2020" means quiet in things
he wrote), and the shortener domains are dead or opaque, so a link is
evidence he shared something, never a retrievable record of what.
Timestamps are UTC; `hours` converts to Eastern.

### `bin/psychometrics` — the self-report check

The asymmetry is the whole problem: `wiki/mind/profile/` carries fifteen
Big30 facet scores, three PD scores and a deviance audit, and every one
of them is **self-report** — an instrument Dan filled in, restated
across several pages. Meanwhile the wiki holds 217,573 messages of
measured behaviour. So each facet becomes a **directional prediction**
with a lexical proxy, run over Dan's 106,629 sent messages against the
110,944 received from 503 other handles as a **within-medium control**.
The control is the point: "Dan says `sorry` 1.2 times per thousand
messages" is uninterpretable on its own — SMS is a low-introspection
medium for everybody in it — but "Dan says `sorry` at 0.4× the rate of
the people texting him" is a measurement. Everything is reported as a
ratio against that baseline.

Two governing rules. **Failure to corroborate is not falsification**: a
trait can be real and leave no lexical trace, because people do not
narrate their own architecture in text messages. Only a high ratio is
positive evidence, and only a prediction that inverts — a low-scored
facet showing markedly elevated language — is evidence against the
score. And **read the matches before believing the counts**: the axiom
test's first run scored "age self-reference" at 3.82× baseline and very
nearly became a finding about the countdown being experienced as
position rather than urgency, until the matches showed the pattern was
catching *"I'm 99% sure"* — percentages, not ages. The verdict column is
deliberately conservative.

### `bin/wiki-history` — the operations record

The git log read as a record of *operations* rather than saves: every
operation commits `<op>: <short description>`, so the log is a labelled
record of every ingest, climb, close, answer, translate and portal edit
that has ever touched a page. Catalogue figures: 3,832 revisions across
495 pages, 11 Jul → 2 Sep 2026.

The check is `date_modified`, which is load-bearing: `bin/wiki-climb
check` decides whether a synthesis has gone stale by comparing its
`date_modified` against its premises'. The obvious check — "does
`date_modified` match the last commit" — is the wrong one, and measuring
it is how you find that out: 214 of 472 pages are behind their last
commit, and the commits doing it are link cleanups that touched forty
pages and changed what none of them *say*. Those pages are correct not
to have bumped. A gate on that number would fail on every honest run,
and a gate that fails on every honest run gets ignored, then removed.
So `check` gates on the one direction that cannot be innocent: **a page
whose `date_modified` is LATER than its most recent commit.** Nothing in
the working tree can make that true honestly — the file has not changed
since the commit, so a date after it is a claim git does not support.
It is what "clearing a stale warning by bumping a date" looks like from
the outside, and it is at 0 today. `drift` reports the other direction
as a reading job rather than a defect, naming the commit so a session
can see in one line whether the page moved or only its neighbours did.
A shallow clone cannot answer any of this — its log does not reach the
first version of any page — so every command says so and `check` passes
rather than failing on a truth it cannot see.

## The corpus's jurisdiction: the 2026-08-02 axiom test

The cleanest demonstration of what this layer can and cannot see. Four
load-bearing unconscious axioms — *not exceptional = worthless; not
vigilant = annihilated; love that doesn't cost everything isn't real;
time = countdown* — were tested lexically against all 106,629 outbound
messages with the 110,944 inbound as a within-medium control, per
thousand messages:

| Prediction if *time = countdown* holds | Dan | Others |
|---|---|---:|
| "running out of time / no time left" | 0.01 | 0.03 |
| "deadline / last chance / now or never" | 0.09 | 0.23 |
| "before I die / turn / lose / run out" | 0.00 | 0.04 |
| "too late" | 0.47 | 0.25 |

On every explicit urgency construction but one he writes *less* than the
people texting him. "Rest of my life" looked promising at 3.5× until
the twenty hits were read: all of them are 2015–16 declarations to Annie
— *"I want to spend the rest of my life with you"* — love-bombing, not
mortality. Direct age self-reference survives contamination at n=8
across eleven years, half of it escort-ad boilerplate. And the control
establishes the medium's ceiling: "the thing about me" occurs zero
times in 217,573 messages from either direction.

That did not falsify the axiom. What it established is narrower and more
useful — **SMS is a near-zero-introspection medium for everybody in
it**, so the corpus has a jurisdiction, and the psychological layer is
outside it. For behaviour, all behavioural data defers to the message
corpus; for the psychological layer, the corpus is silent, and every
axiom on that line rests on the AI-session dossiers alone — a thinner
evidentiary base than the wiki's confidence in them has so far implied.
One axiom did draw independent support, from behaviour rather than
vocabulary: a Ti-dominance signature measured at 22× the corpus
baseline ([[wiki/mind/concepts/calibrated-confidence]]).

## What the instrument layer cannot see, as a layer

**It measures what was written down, in the media that survived.** Every
instrument here reads text he typed or a quantity he logged. The axiom
test above is the cleanest demonstration: the corpus has a jurisdiction,
and the psychological layer is outside it. See
[[wiki/self/context-core]].

**Adjudication is not a random sample.** A claim gets checked when
somebody had a reason to check it, and the reasons correlate with it
being surprising, load-bearing, or already doubted. The testimony
ledger's settled set over-represents both spectacular confirmations and
spectacular failures, and says so on its own page.

**A standing directive filters what may be recorded.** `CLAUDE.md`
carries a moratorium on new writing about one living person.
`bin/wiki-testimony` and `bin/wiki-plain` enforce it mechanically, as a
refusal rather than a warning. At least one cleanly adjudicated
confirmation is excluded by it. The exclusion is correct and it is still
a bias — a score drawn from a filtered record that does not announce
the filter is worse than no score.

**Two of these publish to a public repository**, knowingly, by an
operator decision on 2026-08-30: `intake/` and `testimony/` are tracked
and readable by anyone, permanently, and git history cannot be
un-published. The reversal order is fixed and stated in `CLAUDE.md` —
**make the repository private first, verify it, and only then decide
whether anything else is wanted.** In that order, always.

## The instrumented channel

[[wiki/meta/journeys/the-instrumented-channel]] tells this story in full:
five instruments built to measure one high-volume relationship — the one
with Annie, 97,864 of 192,140 messages in the authoritative corpus,
50.9% of everything Dan's Messages database holds across fifteen years —
each of which turned out to measure something wider than the channel it
was built for. The sequence, in build order:

1. **Node locking** — an AI-memory protocol that froze the relationship's
   facts into "relational source code" before any of this was wiki
   content. Outgrew its target: the purged Eli node became the wiki's
   no-delete concept ([[wiki/mind/concepts/no-delete-operation]]).
2. **Read-receipt forensics** — one extraction session against the raw
   chat.db documenting four defects, three of which silently produce a
   confident wrong answer: directional `date_read`, auto-filled
   `reply_to_guid`, an SQLite type-affinity trap, weak missing metadata.
   Outgrew its target twice: the defects are properties of Apple's
   database, and the same failure class keeps being found in the
   repository's own tooling. On 2026-08-20 it gained the corollary that
   matters most — **the presence of a signal does not identify its
   author**: at least six inbound rows in July–August 2026 were typed by
   Jerel Coles holding her phone, in three windows, and nothing in the
   schema marks them.
3. **Circadian latency** — headline was a nine-to-one latency asymmetry
   (Dan answering in a minute, Annie in nine, n = 31,612); retracted
   2026-08-23 when the inbound half was found off by a factor of about
   seventeen. Re-derived per year: **Dan is the slower correspondent in
   all six measured years**, and the gap widens at the end (2.2× in
   2025, 2.0× in 2026). The deficit is length, and it grows: in 2026
   Dan's median message is 48 characters, hers still 18.
4. **Single channel** — concentration measure: two-sided contact Gini
   0.9632 over 186,867 messages and 538 handles, recovered from the
   `chat_identifier` column after the two-sided figure was withdrawn on
   2026-09-13 as unverifiable and then re-derived inside the range that
   had been withdrawn (0.9591–0.9636). The evaluative leg was falsified:
   concentration is relational, not cultural — taste Ginis run 0.188 for
   music, 0.166 for books, 0.000 for art. 2025 is the highest-volume
   year in the corpus (41,262 messages) and the most concentrated
   (two-sided 0.9572): the year the channel was failing is the year the
   most traffic was pushed through it. The instrument built to measure
   one channel ends up describing how Dan's whole correspondence
   responds to stress: it narrows.
5. **Block/unblock loop** — the severance model: dossier-era 127 exit
   declarations / 110 re-engagements (87% relapse) re-derived by primary
   recount to **129 episodes, 128 resumptions, median 36 seconds**.
   Against that base rate the model predicted the 1 June 2026 severance
   would hold; it held 52 days — twenty-seven times the longest gap in
   the preceding decade — and failed on 23 July through the co-held
   object, the dog. The page kept the failure and rewrote its rule:
   execution and deletion are different operations, and only the first
   is available. The Kristin control row was superseded on 2026-09-13
   when she attempted contact via Messenger and Dan re-entered the
   channel on 12 September.

Five instruments, five revisions, no deletions. Two of the revisions ran
in opposite directions on the same kind of error: the latency headline
was a confident number that did not replicate, and the two-sided Gini
was a correct number withdrawn because the check looked in the wrong
column. Both errors were silent. Both were found by going back to the
rows. That is the rule the read-receipt page states for chat.db —
instruments lie quietly, in both directions — applied to the wiki's own
instruments. The generalisation half holds with one exception: the
single-channel page's evaluative domain, where the concentration did
not generalise — the first counter-instance the journey's own falsifier
asked for, and it was on a stop, not on a new instrument.

## Adjacent, and deliberately not listed above

These measure **the system** rather than the person. Same discipline,
different subject, so they live with the rest of `meta` rather than here:
[[wiki/meta/skills]] (what each model has — 56 capabilities on the
record, 12 declared by more than one model, 2 models, 70 events, last
push 2026-08-30), [[wiki/meta/readers-digest]] (the plain-language
campaign), [[wiki/meta/digest]], [[wiki/meta/recent-activity]] and
[[wiki/meta/open-questions]].

The taste instruments sit adjacent in the other direction: they measure
the person, not the system, but they are hand-built scoring apps rather
than generated ledger pages, so they live as a report, not a catalogue
entry — [[wiki/work/tech/projects/musictrainer-autopsy]] (MusicTrainer +
AUTOPSY: the 90%-prediction instruments, complete week logs on the
entry per rule 4 above).

### MusicTrainer + AUTOPSY: the taste instruments

On 2026-09-14 Dan commissioned two linked instruments for the weekly
taste experiment, per his stated goal: **predict his Discover Weekly
keeps at 90% accuracy**. The shipped app operationalizes that headline
as a three-part target: **≥90% per-track accuracy over ≥240 cumulative
decisions, plus ≥85% recall on keeps** — the recall floor matters
because accuracy alone is gameable on a low base keep rate. Keep is
defined, not assumed: keep = liked **and** into the current playlist,
and Dan named the ADDED? yes/no toggle the load-bearing UI element over
the score itself. Eight baseline keep-predictions were locked and
timestamped at 17:54 EDT; week 1 shipped with all 30 DW tracks preloaded.

AUTOPSY is the companion game for *why* a track lands: per-track
triage + 1–10 score, a check-all-that-apply grid across **16 drivers**
(the drop, sound design, bass weight, drums/groove, arrangement,
tension & release, mix/polish, energy/tempo, melody/hook, **vocal as
texture — voice, not words**, chords/harmony, atmosphere, novelty,
nostalgia, set utility, replay urge), and a KILL ONE pick — the
load-bearing element, the thing the track cannot survive losing. The
Drivers view ranks attributes by lift over the base keep rate plus
load-bearing frequency. The method notes are substance: CATA beats
Likert for rapid profiling (untrained raters ≈ trained panels, RV >
0.89); anchored on the MUSIC model's three validated dimensions
(Greenberg et al. 2016) with producer-specific bolt-ons; the
machine/human split refuses to ask a human to eyeball what an API
measures better and refuses to let the API answer what only a
producer's ear can; KILL ONE is an ablation/MaxDiff hybrid — asking
what kills a track is more diagnostic than asking what saves it. The
grid enforces a minimum of 2 checks per driver and labels early
leaders "suspects, not verdicts."

The week-1 readout (scored 2026-09-20) is the instrument doing its
job: **19/30 correct (acc 0.633), precision 0, recall 0.** All 8 locked
KEEP predictions were wrong; the 3 actual keeps were all missed — the
model carried no audio features on them (blind-fallback group). The
miss pattern is the finding, not the score: the model's audio-feature
tracks clustered on the 124–140 BPM, 0.6–0.9-energy cluster and he
dropped every one, while the 3 tracks he actually kept were exactly
the ones the model carried no audio features on. Whatever carries a
keep for him is not in the feature set the model reads.

The most important thing that happened was not a bugfix. The same
evening Dan inverted the system: instead of measuring his taste, it
could **generate playlists specifically to discriminate among
hypotheses** — probe playlists constructed to isolate one driver. His
diagnostic: *"the like button is the weakest point in the ladder"* —
the keep|like boundary is where the model must concentrate. The
question became the instrument within one evening. On 2026-09-15 the
tool repos were consolidated into Danfr4nk/tools
(`musictrainer/`, `track-autopsy/`) with 571/571 files verified on
the remote.

Where do these sit relative to the instrument layer? The four rules
draw a bright line: this is a *report about* the instruments, not an
instrument page — it is hand-written, and it argues. What it borrows
from the instrument discipline is rule 4: the complete log lives on
the entry. A measurement you cannot see in full is not a measurement,
it is a press release.

## Adding one

An instrument is worth building when a page is making a claim that a
first-party dated record could settle and nobody can check it. Then:

1. **Name what it measures and what it structurally cannot.** The second half
   is not modesty — it is the section that goes on the page, and a tool that
   cannot say what it is blind to should not publish a number.
2. **Event-sourced if the record accumulates** (append-only JSONL, a
   regenerable projection, corrections that supersede rather than edit);
   **compute-on-demand if it reads a corpus.** The intake and testimony ledgers
   are the reference implementations for the first shape.
3. **Generate the page.** `page_type: dataset` with a `chart:` block, and a
   `check` subcommand that fails when the page has drifted from the log.
4. **Gate it in `bin/wiki-check`** — in `GENERATE` if it writes into `wiki/`,
   *and* in `GATE`. Those two sets must match: a gate on a file no step
   regenerates is a trap, not a check.
5. **Add the row here**, and to the tools table in `CLAUDE.md`.

## Conflicts in the record

**The index's own testimony standing-state figures were stale.** This
page previously carried, in its ledgers table, "12 claims, 6 settled,
veracity 57/100" for `bin/wiki-testimony`. The ledger page itself
(`wiki/meta/testimony-veracity`, generated 2026-09-18 from
`testimony/events.jsonl`) carries 5 recorded claims (t002–t006), 1
settled, 4 unadjudicated and excluded from every statistic, veracity
100 / 100 at n = 1, calibration Brier 0.040. Current standing: the
table is corrected to the ledger's figures; the old figures are
preserved here for the record. Nothing else about the ledger changed —
the correction is to this catalogue's summary of it.

**Tweet-corpus counts differ between the catalogue and the tool
docstring.** This page carries the catalogue figures: 2,741 originals,
24 Sep 2008 → 1 Sep 2026, three sources (1,412 spreadsheet · 1,098 live
scrape · 231 backend), 125 truncated rows excluded from length figures.
The `bin/mine-tweets` docstring describes `raw/self/twitter/archive.jsonl`
as 2,525 originals with 1,427 spreadsheet / 1,098 live-scrape rows and
129 truncated rows (114 ellipsis-glyph, 15 ASCII). Current standing:
both documents stand; the difference is unreconciled, and may be a
snapshot difference (the docstring references a 2026-09-02 backend
fetch) rather than an error in either.

**The intake ledger was restructured today.** `wiki/health/intake-ledger`
was expanded and restructured to template v1 by an engine pass on
2026-10-07, its expansion adding interpretive prose around the log
("The night of 2026-08-30/31", "The log's machinery"). The figures
carried on this page — 4 units, 9 events, 3 corrections — are the
generated log figures, unchanged by that restructure.

**CLAUDE.md citations are unresolvable from repo sources.** The live
page attributes two claims to `CLAUDE.md`: the moratorium on new writing
about one living person (enforced mechanically by `bin/wiki-testimony`
and `bin/wiki-plain` as a refusal), and the fixed reversal order for
the two public repos — "make the repository private first, verify it,
and only then decide whether anything else is wanted." `CLAUDE.md` is
not present in the held repository, so neither claim can be verified
from repo sources. Current standing: both claims are carried verbatim
from the live page (no deletions), flagged here as unresolvable.

## Assessment

The record supports a judgment about this layer, and it is a favourable
one with stated reservations.

What works is structural, not rhetorical. The instruments are built to
be checked: generated rather than hand-edited, denominator-carrying,
correction-preserving. The five-channel sequence is the evidence that
the design holds under use — headlines were corrected, withdrawn and
re-derived in both directions, and every correction is still visible
on its page. A latency headline that did not replicate was retracted;
a Gini figure withdrawn for lack of evidence was recovered from the
right column at 0.9632. Instruments that lied quietly were caught by
going back to the rows, which is exactly what the layer claims to do.

The reservations are the layer's own, and they are load-bearing. The
adjudication sample is filtered by the standing directive and selected
by somebody's reason to check — the testimony ledger's n = 1 settled
claim is a proof of concept, not a score. The ledgers are young and
thin: one night of intake, five recorded claims. The axiom test sets
the layer's hard boundary: the corpus arbitrates behaviour, and the
psychological layer is outside its jurisdiction. None of this retires
the instruments. It is the reason they carry their own limits in a
section that cannot be dropped — the wager of the whole layer is that
a number you can see in full, with its denominator, beats a verdict,
and the page's own corrections are the evidence it holds the bet.

## See also

- [[wiki/meta/journeys/the-instrumented-channel|The Instrumented Channel]]
- [[wiki/health/intake-ledger|The Intake Ledger]]
- [[wiki/meta/testimony-veracity|Operator Testimony Veracity]]
- [[wiki/mind/profile/texting-deviance-audit|Texting Deviance Audit]]
- [[wiki/work/tech/projects/musictrainer-autopsy|MusicTrainer + AUTOPSY: the taste instruments]]
- [[wiki/self/context-core|Context core (jurisdiction)]]
- [[wiki/meta/skills|The Skills Database]]
- [[wiki/mind/concepts/wiki-brain|The wiki]]
- [[wiki/meta/index|meta]]

## References

- `testimony/events.jsonl` — the adjudication log behind
  [[wiki/meta/testimony-veracity]]
- `intake/events.jsonl` — the append-only log behind
  [[wiki/health/intake-ledger]]
- `raw/imessage/messages-part1-2011-2019.csv`,
  `raw/imessage/messages-part2-2019-2026.csv` — the authoritative
  message corpus behind the channel journey's re-derivations
- `raw/self/message-csv/imessage_export_deep_20260813.csv` — the
  sender-tagged export behind `bin/text-metrics` (the texting audit's
  sources also carry unresolved-source warnings: the audit cites
  `raw/self/dox-scan/all_imessages_complete_dump.txt`, a reference
  the audit page itself flags as unresolved against the current corpus)
- `raw/self/twitter/archive.jsonl` — the tweet archive behind
  `bin/mine-tweets`
- `bin/intake`, `bin/wiki-testimony`, `bin/mine-messages`,
  `bin/text-metrics`, `bin/mine-tweets`, `bin/psychometrics`,
  `bin/wiki-history`, `bin/wiki-plain` — the instruments' own source
  docstrings, all quoted in this catalogue
- `wiki/meta/journeys/the-instrumented-channel.md` — the five-stop
  journey with its corrected figures
- `wiki/mind/profile/texting-deviance-audit.md` — the turn-level
  findings
- `wiki/work/tech/projects/musictrainer-autopsy.md` — the taste
  instruments report and week-1 scorecard
- `wiki/self/context-core.md` — the 2026-08-02 axiom corroboration
  attempt and jurisdiction boundary
- ⚠ Unresolved from repo sources: `CLAUDE.md` (the moratorium and the
  reversal-order citation) — not present in the held repository; the
  claims are carried verbatim from the live page and flagged in
  Conflicts in the record.

---

[[wiki/meta/index|meta]] · [[wiki/meta/journeys/the-instrumented-channel|The Instrumented Channel]] · [[wiki/mind/concepts/wiki-brain|The wiki]]
