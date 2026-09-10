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
bin/           the 40 original tools, byte-exact
app.py         116,273 bytes, byte-exact
_config.yml    byte-exact
```

`bin/` is the machine that built this wiki — `build-site`, `intake`,
`wiki-crosslink`, `wiki-testimony`, `wiki-lint`, `wiki-timeline`, `wiki-traits`,
`mine-messages`, `psychometrics`, `export-corpus`, `verify-master` and 29
others. It survived on Drive for the same reason the export did: none of it is
`.md`, so none of it was converted. It is restored here unmodified and unwired —
these tools have not been run against this tree.

## What did not come back

Say this plainly, because a reconstruction that oversells itself is worse than
no reconstruction.

**Git history is gone.** The prior repository's commits do not exist anywhere
reachable. This repository starts fresh. What the pages say about their own past
is testimony, not a log.

**`raw/` is not here.** The pages cite roughly 237 distinct `raw/…` paths —
captures, intake units, dox scans, message dumps — and none of those files are
in this tree. Those citations resolve to nothing. The claims that rest on them
are not thereby false; they are **unverified**, which is a different and
recoverable state. Do not read a dangling citation as a missing fact.

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

## Related repositories

- **`Danfr4nk/wikitest`** — holds the export this was cut from, the recovery
  record (`RECOVERY.md`), and a from-scratch six-layer rebuild (`kb/`, `schema/`,
  `bin/wb-*`) with ~57 evidence nodes extracted from these pages so far.
- **`Danfr4nk/wiki-brain`** — the same six-layer architecture, earlier and
  smaller. Unrelated git history to both.

The `wb-*` toolchain in those repositories and the `bin/` toolchain here are
**different systems, not duplicates.** These are the tools that built the wiki
as it was; those are the tools for the architecture that replaced it. Which one
survives is a real decision and it is not made here.

## A standing note on what is published

This repository is public and these pages are about real, named, living people
who did not choose to be in it. That was the prior state too — the wiki was
published to GitHub Pages — so this reconstruction does not change the exposure.
It does not follow that the exposure was ever examined. It is worth deciding on
purpose rather than inheriting by default.
