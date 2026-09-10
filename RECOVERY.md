# RECOVERY.md

What can be recovered, from where, and how faithfully. Every claim below was
**tested rather than assumed** — re-run any of it and you should get the same
answer. Delete this file when the rebuild is complete.

This is the empirical companion to the design documents:
[`ARCHITECTURE.md`](ARCHITECTURE.md) says what the system *is*,
[`ROADMAP.md`](ROADMAP.md) says where it is *going*, and
[`MIGRATION.md`](MIGRATION.md) tracks what is still to come across. This file
says only what is *reachable*, and how intact.

## RESOLVED 2026-09-09 — the wiki body was recovered whole

**Everything below about the wiki content being unreachable is superseded.** It
is kept because how a confident negative result turned out to be wrong is worth
more than quietly editing it away.

The prior wiki's own full-corpus export — **497 pages, 7,536,214 bytes, ~1.86M
tokens**, generated 2026-09-04, four days before the wipe — was sitting in a
Drive folder as four `text/plain` parts. `text/plain` is never converted to a
Google Doc, so none of the damage documented below applies to it: all 497 pages
came back with frontmatter intact, and no page was split across a part boundary.
Four connector calls, not a thousand.

Three findings below are each individually correct and together produced a false
floor: the Drive copy converts `.md` to Docs (`dat:0006`), that conversion
destroys frontmatter line breaks (`dat:0010`), and the connector moves one file
per call against a 1,000-file tree. All true. None of them covers a folder
nobody had listed. The reasoning failure — reading three narrow negatives as one
general one — is recorded in
[`dat:0012`](kb/data/0012-old-wiki-recovered-byte-exact.md), along with the
detail that what actually broke the deadlock was the operator supplying a folder
id, not a better search.

The export is preserved at `raw/old-wiki-export-2026-09-04/whole.txt` and
ingested as `src:old-wiki-export-2026-09-04`, marked **`testimony`** — its
assertions are evidence, the things it asserts are not yet.

## The constraint that shapes everything

This session runs in an **ephemeral cloud container**, not on the Mac. The
four sources named at kickoff are all local paths, and none of them are
reachable from here:

| Path | Status |
| :--- | :----- |
| `/Users/daniel/Desktop/messages.csv` | Not reachable — no `/Users` on this host |
| `/Users/daniel/Desktop/wiki-brain-backup-20260907` | Not reachable |
| `/Volumes/MUSIC/alias/XXX/wiki-brain-main-1` | Not reachable — no `/Volumes` |
| `/Volumes/MUSIC/wiki-brain2` | Not reachable |
| `/Volumes/MUSIC/TAKEOUT` | Not reachable |

Those clones are the best copies that exist — real files on a real
filesystem, with git history. Nothing below is a substitute for them. What
follows is what can be reached *without* them.

## Verified: the corpus is 100% recoverable

The single most important result. The corpus was re-downloaded in this
session from the backing sheet and **matches `manifest.json` byte for byte**:

```
sheet    1WxR14bXRcBS6uyrSk4ZVsoyuu9EUE_l6LC3ruaK7ouA
bytes    48,004,305          (manifest: 48,004,305)   ✅
sha256   2c53c540…9d98cbb    (manifest: 2c53c540…9d98cbb)  ✅
rows     192,140 messages, 2011-03-19 → 2026-09-07
```

No credentials were used or needed — the sheet is shared "anyone with the
link", which is the documented, deliberate decision recorded in
[`corpus/README.md`](corpus/README.md). That decision is why this recovery
worked. It is noted here as a recovery fact, not reopened as a question.

**Consequence: no time fidelity is at risk on the message record.** The
corpus can be re-pulled at any moment, on any machine, and verified against
the manifest. It is the one piece of this system that cannot be lost.

## Verified: the entire engine survived byte-exact on Drive

[`MIGRATION.md`](MIGRATION.md) warned that the Drive staging copy is lossy
because "every `.md` file was converted to a Google Doc on upload." That is
true — **and it is only true of `.md` files.** Everything else was stored as raw bytes and
comes back exactly as it went in.

Confirmed intact in Drive folder `wiki-brain-main-1`
(`10TlQoROslpR99NroxuSQa9mMH_X2nul9`):

| Item | Size | Drive mime | Fidelity |
| :--- | :--- | :--------- | :------- |
| `app.py` | 116,273 B | `text/x-python` | byte-exact |
| `bin/` — 40 scripts | ~1 MB total | `octet-stream` / `text/x-python` | byte-exact |
| `_config.yml` | 747 B | `octet-stream` | byte-exact ✅ restored |
| `.gitignore` | 931 B | `octet-stream` | byte-exact ✅ restored |
| `Wiki.command`, `Capture.command` | small | `x-shellscript` | byte-exact |
| `TWITTER_PULL.prompt`, `PLAIN_AGENT.prompt` | 14.8 KB / 1.3 KB | `octet-stream` | byte-exact |

The `bin/` toolchain is complete — including `build-site` (49 KB), `intake`
(111 KB), `wiki-crosslink` (100 KB), `wiki-testimony` (67 KB), `wiki-lint`,
`wiki-timeline`, `wiki-traits`, `mine-messages`, `psychometrics`,
`export-corpus`, `verify-master`, `aesgcm.py` and 28 others.

**The machine that builds the wiki is not lost.** Only its contents are at
risk. All 41 files are now in [`legacy/`](legacy/README.md).

## Verified: how badly the `.md` pages were damaged

Tested by round-tripping `wiki/people/vaughn.md` (11.6 KB) out of Drive as
`text/markdown`. The result is better than feared in the body and worse than
feared in the head:

**Survived intact**
- All body prose, including em-dashes, smart quotes and emoji
- Headings, bold, italics, blockquotes
- **Markdown tables** — fully preserved, pipes and alignment rows included
- Line breaks between list items

**Damaged, mechanically repairable**
- Backslash escapes injected throughout: `\_`, `\[`, `\]`, `\.`, `\~`
- Wikilinks became `\[\[wiki/people/jack-rusko|Jack Rusko\]\]` — correct
  target and label, just escaped. Unescaping restores them.

**Damaged, genuinely lossy**
- **YAML frontmatter line breaks are gone.** Plain key/value pairs were
  flattened into one run-on paragraph:
  `domain: people page\_type: entity status: closed knowledge: mixed
  date\_created: 2026-06-23 …`
  List-valued keys (`sources:`, `connections:`) kept their line breaks, so
  the nested structure partly survives. Re-splitting the flattened keys is
  possible because the key vocabulary is finite and known, but it is
  inference, not restoration, and it will mis-split any value that contains
  a colon.

So: **bodies are recoverable to near-original quality; frontmatter is
reconstructed rather than recovered.** For a system whose constitutional
rule is "never let inference masquerade as evidence," rebuilding a thousand
frontmatter blocks by inference is exactly the wrong foundation to pour.

## Scale of the wiki body

| Area | Observed |
| :--- | :------- |
| `wiki/` subject dirs | 12 — `work timeline self places people mind meta interests legal health assets .obsidian` |
| `wiki/people/` | 100+ pages (paginated; full count not yet enumerated) |
| Whole tree | 1,000+ files per [`MIGRATION.md`](MIGRATION.md) |
| Wikilinks | ~3,150 per the `_config.yml` comment |

## The second constraint: bulk transfer is throttled

Drive files can only be pulled through the authenticated connector, one file
per call, with the bytes passing through the agent's context. Unauthenticated
direct download is blocked by this environment's sandbox. At 1,000+ files
that is not a viable bulk path — it is fine for tens of files, not thousands.

This is what makes the Mac push worth more than any amount of cleverness
here.

## Recommended order

1. **Push the real clone from the Mac.** Byte-exact, keeps git history, and
   makes every "lossy" row above irrelevant. The procedure is already
   written in [`MIGRATION.md`](MIGRATION.md) (`--allow-unrelated-histories`,
   union the `.gitignore`, merge the `README.md` — **do not force-push**).
   If the folder was never a git repo, zip it and share the link instead.
2. ~~**Pull `bin/` and `app.py` from Drive.**~~ **Done** — all 41 files are
   in [`legacy/`](legacy/README.md), byte-exact. The engine is restored
   independently of the content, so this no longer depends on the Mac push.
3. **Re-pull the corpus** and `bin/corpus-verify` against the manifest.
4. **Only then** consider Drive `.md` reconstruction, and only for pages the
   Mac copy turns out not to have.

## Status

| Piece | State |
| :---- | :---- |
| Corpus | **Verified recoverable** — byte-exact, re-pullable on demand |
| `_config.yml` | **Restored** — byte-exact from Drive |
| `.gitignore` | **Restored** — byte-exact, unioned with the corpus rules |
| Six-layer architecture, `kb/`, `bin/wb-*` | **On `main`** — rebuilt in PR #1 |
| Original `bin/` (40 tools) + `app.py` | **Pulled** — byte-exact in [`legacy/`](legacy/README.md) |
| Wiki body — 497 pages | **RECOVERED 2026-09-09**, byte-exact — see below |
| `/Volumes/MUSIC/TAKEOUT` | Not reachable; ingestion design in [`ROADMAP.md`](ROADMAP.md) §4 |

## Note on two toolchains

`main` carries `bin/wb-*` — the new six-layer tooling, written fresh. Drive
carries the *original* `bin/` (40 tools: `build-site`, `intake`,
`wiki-crosslink`, …) that built the wiki as it was. These are different
systems, not duplicates. The original tools are what a faithful "as it was"
restoration would run; the `wb-*` tools are what the rebuilt architecture
runs. Deciding which survives is a real decision and it is not made here.

Both are now in the tree — `bin/wb-*` at the root, the originals under
[`legacy/`](legacy/README.md), unwired. That is deliberate: keeping the old
engine readable costs nothing, and losing it a second time would cost
everything.
