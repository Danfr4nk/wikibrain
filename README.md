# wikibrain

A personal wiki about Dan Frank — 497 pages of people, timeline, places, work,
health, legal, interests, and the long argument the thing has been having with
itself about what it actually knows.

This repository is a **reconstruction** of the wiki as it stood on
**2026-09-04**, four days before the tree was wiped. It is not a fresh start and
it is not a rewrite. Every page here is a byte-exact slice of the prior wiki's
own export.

---

## What this is, precisely

On 2026-09-04 the wiki exported itself in full: 497 pages, 7,536,214 bytes,
~1.86M tokens, written out as four `text/plain` parts into a Drive folder. Four
days later the tree was lost.

That export is why the loss was survivable, and the reason is narrow enough to
be worth stating: **Drive converts `.md` uploads into Google Docs, and that
conversion destroys YAML frontmatter line breaks.** Every Markdown copy on Drive
came back damaged. `text/plain` is never converted. The export sat in the same
Drive tree as the damaged copies and came back whole.

The pages in `wiki/` were cut from that export by byte offset, not parsed out of
it. The source hash was verified before the split and every page was read back
after writing.

| | |
| :--- | :--- |
| Source | `raw/old-wiki-export-2026-09-04/whole.txt` in `Danfr4nk/wikitest` |
| sha256 | `4037dedc019e2595fab9dca558a70ee466a39b5ed2a0d3ed58af3c25fb69d5a6` |
| Export size | 7,536,214 bytes |
| Pages recovered | 497 / 497 |
| Page bytes written | 7,442,352 |
| Frontmatter intact | 497 / 497 |
| Wikilinks | 9,944, unescaped |
| Google-Docs damage | none — 0 escaped wikilinks, 0 flattened frontmatter blocks |

## The tree

```
wiki/          497 pages, byte-exact from the 2026-09-04 export
  people/      175      interests/    96      mind/     78
  self/         59      timeline/     42      work/     15
  meta/         12      places/       10      health/    6
  legal/         4

raw/           the export itself — whole.txt (7,536,214 B), pages.json,
               EXTRACT.md, SOURCES.md, facebook-threads/MANIFEST.json
kb/            88 evidence nodes, L0→L5, extracted from these pages
schema/        node.schema.json
corpus/        manifest + derived aggregates (messages.csv gitignored)
shelf/         superseded extracts — README and MANIFEST only
tests/         test-invariant, test-census, test-corpus
portal/        single-file portal prototype
app.py         the local wiki app, 116,273 B, byte-exact
bin/           54 tools — 40 originals + 14 wb-*/corpus-*
tools/         reconstruct-from-export.py
_config.yml    byte-exact
```

**Two toolchains live in `bin/`, and they are different systems.** The 40
originals — `build-site`, `intake`, `wiki-crosslink`, `wiki-testimony`,
`wiki-lint`, `wiki-timeline`, `wiki-traits`, `mine-messages`, `psychometrics`,
`export-corpus`, `verify-master` and 29 more — are what built the wiki as it
was. They survived on Drive for the same reason the export did: none of them is
`.md`, so none was converted. They are restored unmodified and **unwired**, and
have not been run against this tree.

The 14 `wb-*` and `corpus-*` tools are the newer six-layer toolchain that
operates on `kb/`. Nothing collides — the two naming schemes are disjoint, which
is why they can share a directory without either being renamed. Which toolchain
survives long-term is a real decision and it is not made here.

## The app is not lost

`app.py` is a complete local wiki GUI — Python stdlib only, localhost only, on
`http://127.0.0.1:8477`:

```sh
python3 app.py
```

It imitates Wikipedia's Vector skin: left portal panel, Page/Discussion and
Read/Edit/View-history tabs, infoboxes built from page frontmatter, a numbered
table of contents, red links for missing pages, a categories bar, and git-backed
View history and Recent changes. Pages are created and edited in the interface;
images upload to `assets/uploads/`. `Special:Capture`, `Special:Ingest`,
`Special:Export`, `Special:Intake`, `Special:Contents` and
`Special:RecentChanges` are all there. All data stays in the plain Markdown
files of this repository.

The `caakehorn/home` harness — the marquee tickers, the nine-tab bar, the chaos
meter — is gone with the account GitHub deleted, and it is not recoverable from
here. `portal/index.html` is a single-file prototype rebuilt in that visual
language: the WIKI-BRAIN tab is functional and renders a layer-filtered node
browser over `graph.json`; the other eight tabs are labeled intent. It is a
probe to react to, not a deliverable, and `bin/wb-build` deliberately does not
know about it. It excludes the old harness's anime imagery on purpose — that is
the likeliest reason the account was deleted, and re-shipping it would invite
the same outcome.

## Running it

```sh
python3 bin/wb-validate     # layer invariant, testimony attribution, edges
python3 tests/test-invariant # 43 checks
python3 tests/test-census    # 16 checks
python3 bin/wb-census        # the correction-marker tally, per area
```

All of it passes on this tree: 88 nodes, 15 edges fully audited, clean.

To rebuild `wiki/` from the export and confirm nothing drifted:

```sh
tools/reconstruct-from-export.py raw/old-wiki-export-2026-09-04 .
git status --porcelain wiki/     # must be empty
```

## What did not come back

Say this plainly, because a reconstruction that oversells itself is worse than
no reconstruction.

**Git history is gone.** The prior repository's commits do not exist anywhere
reachable. This repository starts fresh. What the pages say about their own past
is testimony, not a log.

**The cited `raw/` material is not here.** `raw/` in this repository holds the
export and the source ledgers — it is not the `raw/` the pages were written
against. Those pages cite roughly 237 distinct `raw/…` paths (captures, intake
units, dox scans, message dumps) and none of *those* files exist in this tree.
Those citations resolve to nothing. The claims resting on them are not thereby
false; they are **unverified**, which is a different and recoverable state. Do
not read a dangling citation as a missing fact.

**`intake/events.jsonl` and `testimony/events.jsonl` are not here.** The second
matters more than its size suggests: `wiki/meta/testimony-veracity.md` is
*generated* from it, and shows the adjudicated outcomes without the
adjudicator's reservations. The ledger itself would let those sixteen claims be
re-scored. It was not in the export.

**The message corpus is not here, and must not be.** 192,140 messages,
48,004,305 bytes, containing the phone numbers, addresses and private words of
~498 people who did not choose to be published. It is verified re-pullable from
its backing sheet and byte-exact against its manifest, so it loses nothing by
staying out. `.gitignore` guards it. Git history cannot be un-published.

## How to read these pages

The prior system was **rigorous in patches and loose in others, and the pattern
is not the one you would guess.** Its discipline tracked *recency of work*, not
subject matter: a 2026-09-09 census over the export found that half the corpus
was never opened in the final work window and carries 9% of its self-corrections.
`interests/` runs 0.11 correction marks per page; its touched quarter runs 0.46.

The operative rule that came out of checking six of its claims against
independent sources:

> **Take the argument, verify the quote.**

Every check found the reasoning sound. Four of six found a quotation that does
not sit where the page put it — one attributed to the wrong speaker outright,
three absent from the authoritative corpus. So an inference from evidence the
page believed it had is usually worth keeping. A quoted string is worth nothing
until it has been looked up.

Two traps that make a careless lookup fail *silently*:

- **The wiki writes times in UTC; the message corpus is local.** Every timestamp
  quoted from a page is four hours ahead of the same message in the corpus, five
  in winter. Searching by a page's stated time lands on the wrong message, or on
  none, and looks correct either way.
- **44% of corpus timestamps write the hour unpadded.** A text comparison
  selects nothing; a text sort scrambles the day.

A low correction count in an unworked area means **nobody got there**, not that
nothing was wrong. `never_observed` is not `known_not_to_occur`.

## Its own error markers are the good part

Watch for `REVISED [`, `CORRECTED [`, `CONTRADICTION [` and `GAP CLOSED [`.
These are the wiki catching itself, dated, in place, without deleting what it
had been wrong about. They are the highest-value content in the export — a
record of how a claim moved is worth more than the claim.

`wiki/meta/open-questions.md` is the wiki's own backlog: 182 kB, 49 live
contradictions, 605 open gaps, 65 standing predictions, scraped from the pages
themselves. It is the best map of what to read next **and it is not a
trustworthy status list** — at least one prediction it files as standing had
been retracted on its own page the day before the digest ran, and is quoted
with the figure the retraction retired. Read it as *what the pages say they do
not know*, then check each item against its own page.

## Governing documents

- [`ARCHITECTURE.md`](ARCHITECTURE.md) — what the six-layer system *is*
- [`ROADMAP.md`](ROADMAP.md) — where it is going
- [`RECOVERY.md`](RECOVERY.md) — what was reachable after the wipe and how
  intact, every claim tested rather than assumed. Includes the record of a
  confident negative result that turned out to be wrong, kept deliberately.
- [`CORPUS_POLICY.md`](CORPUS_POLICY.md) — the confirmed / corrected /
  withdrawn rule, and why the shelf exists
- [`raw/old-wiki-export-2026-09-04/EXTRACT.md`](raw/old-wiki-export-2026-09-04/EXTRACT.md)
  — the extraction brief: 20 of 497 pages worked so far, what the first passes
  established, and the traps they cost

`MIGRATION.md` was deliberately **not** carried over. It is a transient
wikitest-era checklist that names the wrong repository and instructs a push that
has already happened; copying it here would be actively misleading. It remains
in `Danfr4nk/wikitest` if the history is wanted.

## Related repositories

- **`Danfr4nk/wikitest`** — where the export was recovered and the six-layer
  rebuild was done. Everything from it worth keeping is now also here.
- **`Danfr4nk/wiki-brain`** — the same architecture, earlier and smaller.

All three have **unrelated git histories**. `wikitest` is not a fork of
`wiki-brain`; they have separate root commits and never shared an ancestor.

## A standing note on what is published

This repository is public and these pages are about real, named, living people
who did not choose to be in it. That was the prior state too — the wiki was
published to GitHub Pages — so this reconstruction does not change the exposure.
It does not follow that the exposure was ever examined. It is worth deciding on
purpose rather than inheriting by default.
