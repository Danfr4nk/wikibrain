# MIGRATION.md

Rebuilding wiki-brain into `github.com/Danfr4nk/wikitest`. Delete this file when
the last row of the status table is done.

## Where things stand

| Piece | State |
| :---- | :---- |
| Six-layer architecture, schema, validator, builder, query tools | **Done** — ported from `Danfr4nk/wiki-brain` |
| Pages build-and-deploy pipeline | **Done** — `.github/workflows/pages.yml` |
| Knowledge-base seed (20 nodes, L0→L5) | **Done** — `kb/` |
| Corpus policy, manifest and derived aggregates | **Done** — `corpus/`, [`CORPUS_POLICY.md`](CORPUS_POLICY.md) |
| `_config.yml` | **Restored** — byte-exact from Drive |
| Authoritative `corpus/messages.csv` | **Verified recoverable** — re-pullable from the sheet, byte-exact against the manifest. Gitignored, never committed |
| Original engine — `app.py`, the 40 original `bin/` tools | **Reachable byte-exact on Drive**, not yet pulled |
| Wiki body — `wiki/`, `raw/`, governing docs | **Blocked** — on the Mac and the external drive |
| Google Takeout | **Not started** — needs an ingestion decision first |

Full tested detail in [`RECOVERY.md`](RECOVERY.md).

## Why the rebuild session could not finish this itself

The rebuild ran in a **cloud container**, not on the Mac. The paths holding the
source material —

```
/Users/daniel/Desktop/messages.csv
/Users/daniel/Desktop/wiki-brain-backup-20260907
/Volumes/MUSIC/alias/XXX/wiki-brain-main-1
/Volumes/MUSIC/wiki-brain2
/Volumes/MUSIC/TAKEOUT
```

— do not exist in that container and cannot be reached from it. A cloud session
can read what is on GitHub and nothing else. So everything recoverable *from
GitHub* was rebuilt; everything that exists only on local disk still has to be
pushed up by hand, from the Mac.

This is a transport problem, not a data-loss problem. Nothing below is lost.

## Triage before pushing anything

There are four candidate copies and they are not equal. Two of them are
probably worse than they look. Run this on the Mac first — it answers "which
copy is authoritative" without guessing:

```sh
for d in \
  ~/Desktop/wiki-brain-backup-20260907 \
  /Volumes/MUSIC/alias/XXX/wiki-brain-main-1 \
  /Volumes/MUSIC/wiki-brain2
do
  echo "=============== $d"
  [ -d "$d" ] || { echo "  MISSING"; continue; }
  echo "  files:     $(find "$d" -type f -not -path '*/.git/*' | wc -l)"
  echo "  markdown:  $(find "$d" -name '*.md' -not -path '*/.git/*' | wc -l)"
  echo "  size:      $(du -sh "$d" | cut -f1)"
  if [ -d "$d/.git" ]; then
    echo "  git:       yes"
    git -C "$d" log --oneline | head -3 | sed 's/^/    /'
    echo "  last commit: $(git -C "$d" log -1 --format=%cI 2>/dev/null)"
    echo "  dirty:     $(git -C "$d" status --porcelain | wc -l) uncommitted"
  else
    echo "  git:       NO — zip route, not push route"
  fi
  echo "  top level:"; ls "$d" | head -12 | sed 's/^/    /'
done
```

Read the output against this:

| Copy | What it probably is | Weight |
| :---- | :---- | :---- |
| `wiki-brain-backup-20260907` | Snapshot taken the day before the wipe. Newest content, and the date lines up with the corpus cutover. | **Most likely authoritative** |
| `wiki-brain2` | Unknown — a working copy or a second clone. Compare its last commit against the backup. | Tie-break |
| `wiki-brain-main-1` | Matches the name of the **Google Drive staging copy**. If it came down from Drive, its `.md` files are damaged — but its `bin/`, `app.py` and config files are byte-exact. See below. | **Suspect for `.md` only** |

The decision rule: **whichever copy has real git history and the newest commit
wins.** A copy with git history beats a copy without it even if the copy without
it looks newer, because history is the thing that cannot be reconstructed later.

### Checking whether `wiki-brain-main-1` is Drive-damaged

Two tests. The first looks for the injected escapes, the second for the damage
that actually matters — flattened frontmatter:

```sh
# 1. injected backslash escapes, and escaped wikilinks
grep -rln '\\_\|\\\[\\\[' /Volumes/MUSIC/alias/XXX/wiki-brain-main-1 --include='*.md' | head

# 2. frontmatter on one run-on line instead of one key per line
head -3 /Volumes/MUSIC/alias/XXX/wiki-brain-main-1/wiki/people/*.md | head -20
```

Hits on the first, or a frontmatter block that runs several keys onto a single
line on the second, mean it round-tripped through Google Docs. In that case do
not use it as the source **for `.md`** — but its `bin/`, `app.py` and config
files are still byte-exact and worth taking.

## Why the Drive copy is not the source *for `.md`* — and is fine for everything else

This was originally stated too broadly, and [`RECOVERY.md`](RECOVERY.md)
narrowed it by testing rather than assuming. The correction matters, because
the broad version tells you to throw away a working recovery route.

**The damage is real, and it is confined to `.md` files.** Those were converted
to Google Docs on upload, and the round-trip back returns:

- backslash escapes injected throughout — `\_`, `\[`, `\]`, `\.`, `\~`
- wikilinks escaped into `\[\[wiki/people/jack-rusko|Jack Rusko\]\]` — target
  and label intact, so unescaping restores them
- **YAML frontmatter line breaks gone**, flattening key/value pairs into one
  run-on paragraph

Bodies survive well: prose, headings, emphasis, blockquotes, **tables** and
wikilink targets all come back. Frontmatter does not. Re-splitting a flattened
block is *inference* over a finite key vocabulary, not restoration, and it
mis-splits any value containing a colon. For a system whose constitutional rule
is that inference must never masquerade as evidence, reconstructing a thousand
frontmatter blocks is the wrong foundation to pour.

**Everything that is not `.md` was stored as raw bytes and is byte-exact:**

| Item | Size | Fidelity |
| :--- | :--- | :------- |
| `app.py` | 116,273 B | byte-exact |
| `bin/` — 40 original tools | ~1 MB | byte-exact |
| `_config.yml`, `.gitignore` | small | byte-exact — already restored here |
| `Wiki.command`, `Capture.command`, `*.prompt` | small | byte-exact |

So **the machine that builds the wiki is not lost**, and it can be recovered
from Drive independently of the Mac. Only the wiki's *contents* are at risk.

The `.md` damage is recorded as evidence in
[`kb/data/0006-drive-copy-lossy.md`](kb/data/0006-drive-copy-lossy.md).

## Route A — the wiki body, from a copy that has git history

> **Do not force-push `main`.** `main` carries the architecture, the tooling,
> the schema and the corpus policy. A force-push deletes all of it, and
> `--force-with-lease` does **not** save you: once you have fetched, the lease
> is satisfied and the overwrite goes through.

Your local history and `main` have no commit in common, so they get joined once,
explicitly, with `--allow-unrelated-histories`. Both sides survive.

```sh
cd ~/Desktop/wiki-brain-backup-20260907     # or whichever copy triage picked

git status                      # confirm the tree is clean and complete
git log --oneline | head -5     # confirm the history you expect is here

git remote add origin https://github.com/Danfr4nk/wikitest
# already have an origin? point it here instead:
#   git remote set-url origin https://github.com/Danfr4nk/wikitest

git fetch origin
git merge origin/main --allow-unrelated-histories
```

Expect conflicts on `.gitignore` and `README.md`. Both are expected:

- **`.gitignore`** — take the **union**. Your rules (`exports/`, `site/`,
  `corpus_*.md`, the intake-ledger note) *plus* the corpus rules
  (`corpus/messages.csv`, `corpus/private/`, `shelf/**`). Drop nothing from
  either side; the corpus rules are what keep 498 people's messages out of a
  public git history.
- **`README.md`** — **merge, do not simply take one side.** This side documents
  the six-layer architecture, the tooling and the privacy split, none of which
  exists in your copy. Keep whatever your version says about the app and the
  capture/ingest loop, and keep the architecture, tooling and privacy sections
  from this side.

```sh
git add .gitignore README.md
git commit                      # completes the merge
git push -u origin main         # ordinary push, no force
```

Then confirm nothing was lost:

```sh
ls corpus/ bin/                 # tooling still present
python3 bin/wb-validate         # layer invariant still holds
git log --oneline | head        # both histories present
```

**No git history on the chosen copy?** If `git log` errors, the folder was never
a repository. Take the zip route instead: zip it, upload it, and it gets
committed here as a first import on top of `main`, with no merge needed.

## If the Mac push stalls — the engine from Drive

Route A is worth more than anything else here, but it is not the only way to get
the *engine* back. `app.py` and all 40 original `bin/` tools sit on the Drive
staging copy as raw bytes, unaffected by the Google Docs conversion that damaged
the `.md` files. That is roughly 41 files — viable one at a time through the
Drive connector, unlike the 1,000+ file wiki body, which is not.

Doing this restores the machine independently of the content, so the wiki body
can arrive later and have something to run on:

```
build-site   intake        wiki-crosslink   wiki-testimony   wiki-lint
wiki-timeline wiki-traits  mine-messages    psychometrics    export-corpus
verify-master aesgcm.py    …and 28 others
```

Note these are the *original* tools and are distinct from the `bin/wb-*` and
`bin/corpus-*` tools already in this repository. Both sets are wanted; they do
different jobs. Reconcile them once both are present rather than assuming either
supersedes the other.

## Route B — the corpus CSV stays local

**This one is not blocked at all**, and it is the best news in the rebuild.
The corpus was re-pulled from the backing sheet and verified byte-exact against
the manifest — so it does not depend on the Mac, the external drive, or any
single machine. It can be re-pulled and re-verified on demand, forever.

`/Users/daniel/Desktop/messages.csv` is one copy of the authoritative
192,140-message export; the sheet is another. Either works.

**It is gitignored and must stay that way.** It holds the phone numbers,
addresses and private words of 498 people who did not choose to be published,
and git history cannot be un-published.

Put it in place and verify it against the manifest rather than committing it:

```sh
cp ~/Desktop/messages.csv corpus/messages.csv     # or re-pull from the sheet
python3 bin/corpus-verify       # must match manifest.json: 48,004,305 bytes,
                                # sha256 2c53c540…9d98cbb, 192,140 rows
```

If `corpus-verify` disagrees, the file on the Desktop is a *different* export
than the one the derived aggregates were built from. Do not overwrite the
manifest to make the error go away — re-derive instead:

```sh
python3 bin/corpus-verify --write   # re-record, only after a deliberate re-export
python3 bin/corpus-stats            # rebuild corpus/derived/
```

## Route C — Google Takeout

`/Volumes/MUSIC/TAKEOUT` is a **new L0 source** and is not yet ingested. It is
almost certainly large, mostly irrelevant, and mixed-sensitivity, so it does not
get bulk-imported. See [`ROADMAP.md`](ROADMAP.md) § "Takeout ingestion" for the
selection rule and the proposed order of work.

First step is inventory, not import:

```sh
du -sh /Volumes/MUSIC/TAKEOUT/*        # what is actually in there, by size
find /Volumes/MUSIC/TAKEOUT -maxdepth 2 -type d | head -40
```

Post that output and the ingestion plan gets written against real contents
rather than assumptions about what Takeout contains.

## Then: reconcile the wiki with the corpus

Once the wiki body is in, the corpus work has a job to do. Any claim resting on
message evidence from before 2026-09-08 traces to a shelved fragment and is
**unverified** — not wrong, just not yet read against the complete record.

```sh
grep -rln "imessage" wiki/ raw/            # what cites the old extracts
bin/corpus-query --who "Name" --context 3  # check it against the corpus
```

Procedure and the confirmed / corrected / withdrawn rule are in
[`CORPUS_POLICY.md`](CORPUS_POLICY.md). Fill in the `Pages built on it` column
of [`shelf/MANIFEST.md`](shelf/MANIFEST.md) as you go — that column is what
turns a pile of dead files into a finite re-verification queue.

Two `raw/` artifacts are already listed there awaiting the move onto the shelf:
`imessage_export_+1724XXXXXXX_20260715013702` and
`imessage_724XXXXXXX_both_all_now`.
