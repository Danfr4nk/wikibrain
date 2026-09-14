# `legacy/` — the original engine, recovered byte-exact

These 41 files are the **original wiki-brain toolchain** — the machine that
built the wiki as it actually was, before the working tree was wiped. They were
pulled from the Drive staging copy of `wiki-brain-main-1` and verified
byte-exact against the Drive listing sizes.

They are **preserved as reference, not wired into anything.** Nothing in this
repository calls them, no workflow runs them, and `bin/wb-validate` does not
look here.

## Why this directory exists at all

[`RECOVERY.md`](../RECOVERY.md) establishes the finding that made this pull
possible: the Drive copy's Google Docs conversion damaged **only `.md` files**.
Everything else — Python, shell, YAML, prompts — was stored as raw bytes and
comes back exactly as it went in. So the content is lossy and the engine is not.

That asymmetry is the whole reason to keep these. The pages can be rebuilt from
evidence; a hundred thousand lines of tooling written over months cannot be
rebuilt from a description of what it did.

## What is here

`app.py` (116,273 B) is the local single-file app — a Wikipedia clone in the
classic Vector skin, stdlib only, serving `http://127.0.0.1:8477`. Left panel
with logo and portals, Page/Discussion and Read/Edit/View-history tabs,
infoboxes built from page frontmatter, a numbered table of contents, red links
for missing pages, a categories bar, and git-backed history. Pages are created
and edited in the browser; images upload and insert inline.

`bin/` is 40 tools, ~1 MB, all standard library. The load-bearing ones:

| Tool | Size | What it does |
| :--- | ---: | :--- |
| `build-site` | 49 KB | Renders `wiki/` into the static site — the deploy path. Resolves `[[wikilinks]]`, which is precisely what Jekyll cannot do |
| `intake` | 111 KB | The intake ledger — units in, discrete events out |
| `wiki-crosslink` | 100 KB | Finds the edges a source-backed page owes but has not written |
| `wiki-testimony` | 67 KB | Testimony extraction from the corpus |
| `wiki-skills` | 63 KB | Skill inventory and evidence |
| `wiki-plain` | 53 KB | Plain-language rendering for agent consumption |
| `wiki-traits` | 47 KB | Trait extraction |
| `wiki-claims` | 46 KB | Claim extraction and audit |
| `wiki-connect` | — | Connective-tissue engine for the graph |
| `wiki-lint` | — | Frontmatter, status vocabulary, broken wikilinks, orphans |

The rest: `aesgcm.py`, `annie-corpus`, `backfill-people-infobox.py`,
`build-tweet-year`, `capture`, `contact-rename.py`, `export-corpus`,
`ingest-apply`, `ingest-pack`, `llm-publish`, `mine-messages`, `mine-tweets`,
`psychometrics`, `source-index`, `text-metrics`, `verify-master`, `wiki-check`,
`wiki-climb`, `wiki-digest`, `wiki-freshness`, `wiki-gaps`, `wiki-history`,
`wiki-lessons`, `wiki-lexicon`, `wiki-search` (bash), `wiki-secrets`,
`wiki-status` (bash), `wiki-timeline`, `wiki-tui`, `wiki-work`.

## The relationship to `bin/`

`bin/wb-*` at the repository root and `legacy/bin/*` are **two different
systems, not two copies of one.**

- `legacy/bin/` operates on `wiki/` — YAML frontmatter, `[[wikilinks]]`, typed
  `connections:` blocks, one flat namespace of pages.
- `bin/wb-*` operates on `kb/` — TOML frontmatter, `cites` arrays, six layers,
  and the invariant that a node may cite only nodes at a strictly lower layer.

Neither can read the other's files. Which one survives is an open decision, and
it is not made here.

What *is* settled: the rebuild goes forward on the six-layer architecture, so
`legacy/` is not the destination. It is the reference you consult when the new
tooling needs to do something the old tooling already knew how to do — and, for
`build-site` and `app.py` specifically, working code for the Wikipedia-clone
rendering that the new stack still owes.

## Caveats

- **Not audited.** These ran against a private local tree on one machine. They
  have not been reviewed against this repository's public-by-default posture.
  Read before running.
- **Paths will not resolve.** They expect the original layout (`wiki/`, `raw/`,
  `corpus/`, `intake/`), most of which does not exist here yet.
- **`aesgcm.py` and `wiki-secrets` touch key material.** Nothing sensitive was
  recovered with them, but do not point them at anything until they have been
  read.
- **`app.py` binds `127.0.0.1` only.** Keep it that way.

## Provenance

Drive folder `wiki-brain-main-1` (`10TlQoROslpR99NroxuSQa9mMH_X2nul9`), pulled
2026-09-09 through the authenticated Drive connector, one file per call.
Byte-exactness confirmed against the Drive listing for every file over 40 KB:
`app.py` 116,273 · `build-site` 49,314 · `intake` 110,972 · `wiki-crosslink`
99,750 · `wiki-testimony` 66,595 · `wiki-skills` 63,149 · `wiki-plain` 53,249 ·
`wiki-traits` 47,107 · `wiki-claims` 46,458. All Python files parse; both shell
scripts are bash.
