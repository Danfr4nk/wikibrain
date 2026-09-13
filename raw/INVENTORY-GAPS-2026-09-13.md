# Raw source inventory and gap audit — 2026-09-13

Scope: reconcile the stated source list carried over from the old deployment
against what is actually on disk in `Danfr4nk/wikibrain` and `Danfr4nk/RAWLOGS`.
Everything below was measured, not read off a prior manifest. Where a manifest
and the bytes disagree, the bytes win and the disagreement is recorded.

Method: file counts and sizes from the working trees; date ranges parsed from
the artifacts themselves; skip lists harvested from all 60 `MANIFEST.json` /
`manifest.json` files under `raw/`; mirror commits verified with
`git show --name-only` rather than by commit subject.

---

## 1. The inventory as stated, verified

| # | Stated source | On disk | Verdict |
| :-- | :--- | :--- | :--- |
| 1 | iMessage — 192,140 msgs, Mar 2011 → Sep 2026 | `raw/imessage/` | **Confirmed.** 192,140 rows, 2011-03-19 → 2026-09-07, sha256 `2c53c540…`. Byte-original only in RAWLOGS; wikibrain carries a verified-lossless 2-part split |
| 2 | Facebook — full account export, pulled 2026-09-08 | `raw/facebook/` — 4,404 files, 234 MB | **Confirmed**, two export sets (`export-20260908-a` 2,927 files, `-b` 1,475 files), plus `ross-thompson/` held separately. `-a` contains a second account tree (`facebook-ihatedanfrank`) |
| 3 | Instagram — full export, pulled 2025-08-24 | `raw/instagram/export-20250824/` — 1,215 files, 626 MB | **Confirmed**, 9 top-level sections. Oldest export generation in the set |
| 4 | Twitter — tweets + reposts, Aug 2013 → Apr 2026 | `raw/twitter/` — 3 files, 1.3 MB | **Present, description wrong.** Actual span **2008-09-24 → 2026-09-01**, 2,741 tweets. Reposts = **5 records**, not a corpus |
| 5 | Gmail — Creative License / Kevin McKiernan thread, Aug 2026 | `raw/gmail/` — 1 file, 20 KB | **Confirmed** |
| 6 | Google Chat — 5 named chats | `raw/googlechat/` — 9 files, 852 KB | **Confirmed + more.** 9 files = 7 distinct; `attachment-system-collapse.md` (104 KB) is present but unlisted |
| 7 | ChatGPT — two exports, 2025-08-05 | `raw/chatgpt/` — 754 files, 488 MB | **Confirmed.** `dfrank88-2025-08-05` (288 MB) and `iHateDanFRANK-2025-08-05` (201 MB) |
| 8 | Drive sweep — 2026-09-11 | `raw/drive-sweep/20260911/` — 220 files, 319 MB | **Confirmed**, all 15 named subfolders present (see §4 for which are thin) |
| 9 | Location — Google Timeline, from Apr 2014 | `raw/location/` — 4 files, 31 MB | **Present, truncated.** 121,733 records, 2014-04-02 → **2024-05-14**. See gap G4 |
| 10 | Takeout — May 2024 → Jul 2026 | `raw/takeout/` — 588 files, 856 MB | **Present with holes.** 10 archives spanning 2024-05-14 → 2026-07-22. Four files were never ingested — see gap G2 |
| 11 | Wiki — 497-page export, 2026-09-04 snapshot | `raw/old-wiki-export-2026-09-04/` + `raw/wiki/old-wiki/` | **Confirmed.** `whole.txt` 7.5 MB; expanded to 497 individual `.md` with body-sha256 in `index.jsonl` and byte-for-byte reconstruction proof |

## 2. Present but absent from the stated inventory

Eight source families are in the archive and not on the list. If the list is
what downstream reasoning enumerates, these are invisible to it.

| Source | Size | What it is |
| :--- | :--- | :--- |
| `raw/sammy/` | 260 files, 61 MB | 25 Sammy chat-scrape batches, 2026-09-11 → 2026-09-13, plus a location-history batch |
| `raw/messenger-drive-2026-09-12/` | 6.0 MB | 27,573 FB/IG/TikTok DM records, 331 threads, 2007–2026 — a distinct channel from the Facebook export |
| `raw/takeout/.../YouTube` | (in 856 MB) | Watch history, search history, 39 playlists, comments, subscriptions, channel metadata, 2 uploaded videos |
| `raw/e0914806-…-morgantown-st/` | 13 MB | 2026-08-16 Annie/Coles/Dan call audio, 15:27, byte-exact — plus an independent STT transcript and a 6-page validation report as separate sources |
| 10 × `raw/photo-ingest-2026091*/` | ~100 KB | Annie ×5, Rick, Zac, Virginia grow, 2037 batch |
| 4 × photo/document sets | 3.6 MB | 307 E 76th lease signing (2019-02-25), Fran Coldren photos + Diane letters (2015/2017), Frank's Auto Supermarket (11 files), Legion of Skanks tapings (2019-12-23, 2020-08-25) |
| `raw/myactivity-2026-09-12/` | 10 MB | 5 gzipped My Activity dumps, separate from the Takeout tree |
| `raw/self/`, `raw/facebook-threads/`, `raw/the-wall-2025-09-03/`, `raw/correction-20260912-virginia-gps/` | ~1.7 MB | Aug–Sep 2026 iMessage slice, FB thread index, misc |

---

## 3. Gaps

### G1 — The two repos disagree on where an ingest batch lives

**Severity: high, but it is a convention conflict, not a bug.**

> **Corrected 2026-09-13, after publication.** The first version of this section
> said the 2026-09-13 mirror commits "wrote to the wrong path." That was half
> right and the half it got wrong changes the fix, so it is restated here rather
> than patched.

Twenty-four directories sit under `RAWLOGS/raw/sammy/` that live at
`wikibrain/raw/<slug>/`. Classifying each by the commit that created it splits
them cleanly:

| Origin | Count | Examples |
| :--- | ---: | :--- |
| `Mirror raw/<slug> from wikibrain (gap backfill 2026-09-13)` | **13** | `self`, `old-wiki-export-2026-09-04`, `e0914806-…-morgantown-st`, `myactivity-2026-09-12`, `facebook-threads` |
| Native RAWLOGS batch commits, **predating the mirror** | **11** | `messenger-drive-2026-09-12` (0fe8cdd), `aug-sep-2026-imessage-export` (24ab87d), `correction-20260912-virginia-gps` (8e805c6), the 9 `photo-ingest-2026091*` dirs |

So `raw/sammy/<slug>/` is RAWLOGS' **own prevailing convention** for ingest
batches, established before the mirror ran. The mirror followed the local
convention rather than reproducing wikibrain's layout. That is a defensible
thing for a mirror to have done; it is just not what
`wikibrain/raw/SOURCES.md` claims the mirror policy is ("preserving RAWLOGS'
subdirectory layout exactly", written of the reverse direction).

`photo-ingest-20260912-annie-01` is the tell: it sits under `raw/sammy/` in
**both** repos. One dir got the sammy path on both sides and its nine siblings
did not.

The operational consequences stand regardless of which convention is right:

1. `RAWLOGS/raw/` top level enumerates **13** entries against wikibrain's **36**.
   A tool that walks `raw/*/` on RAWLOGS sees a third of the archive.
2. `raw/sammy/` otherwise keys on `YYYYMMDD-HHMM`. It now also holds a 7.5 MB
   wiki export, a 13 MB audio file and a photo corpus, so a batch-walker
   globbing `raw/sammy/*/` trips on them.
3. `raw/sammy` reads 104 MB in RAWLOGS against 61 MB in wikibrain. The delta is
   source material, not chat.
4. `aug-sep-2026-imessage-export` now exists **twice** in RAWLOGS —
   `raw/sammy/aug-sep-2026-imessage-export/` (native, 24ab87d) and
   `raw/sammy/self/message-csv/aug-sep-2026-imessage-export/` (mirrored,
   5d0673f). Byte-identical, md5 `bb0f897c7fb3e8f338e913faa9dec3ac`.

**This is a decision, not a repair, and it is deliberately not actioned here.**
Either RAWLOGS adopts `raw/<slug>/` (23 moves, and RAWLOGS' own ingest tooling
has to change with it) or wikibrain's mirror policy is rewritten to say the two
layouts differ on purpose. Moving trees on the strength of an audit's reading of
a convention is how an archive gets scrambled.

### G2 — Four files were never ingested; ~920 MB of source is outside the archive

> **Partially closed 2026-09-13.** The three "omitted from pushed trees" files
> below were recovered and are now in `wikibrain/raw/`. See *Recovered* at the
> end of this section. The two `MyActivity.html` files are **not** recoverable
> from this session and the reason turns out to be the same one blocking G9.

Harvested from the ingest manifests' own `skips` arrays:

| File | Size | Reason recorded |
| :--- | ---: | :--- |
| `Takeout/My Activity/Search/MyActivity.html` | 103.8 MB | ≥100 MB, exceeds GitHub blob cap, not split per instruction |
| `Takeout/My Activity/Chrome/MyActivity.html` | 45.8 MB | API blob upload 422, requires git-based push |
| `SLOPPP BEDROOM SESSION TEST FEED.mp4` | 503.5 MB | ≥100 MB |
| `SLOPPP (HOPEFULLY) LIVE SET.mp4` | 269.9 MB | ≥100 MB |

Plus three more omitted from pushed trees per `raw/SOURCES.md` (38 MB+ blobs
time out on GitHub's side; the practical ceiling sits between 36 and 38 MB):
a 40.6 MB Gemini screen recording and two 38.4 MB `bassdown final bounce`
files with identical bytes.

The two `MyActivity.html` files are the material loss. Full Google Search and
Chrome history is the densest behavioural-timeline channel available, and both
are currently outside every repository.

**Recovered (2026-09-13).** The three sub-38 MB files were never a data problem
— they hit the GitHub **Git Data API's** blob ceiling, which is not the same
ceiling native `git push` has. Pushed natively from this session, byte-exact
from RAWLOGS, hashes re-verified after the copy:

| File | Bytes | sha256 |
| :--- | ---: | :--- |
| `Screen Recording 2025-11-26 at 9.-6250b4544e5b66cd.mov` | 40,619,374 | `9af399d9a4dadbb1…` |
| `bassdown final bounce-f9869e242729f118` | 38,432,744 | `37c6a7e27830a872…` |
| `bassdown final bounce-697663cfa661ba2f` | 38,432,744 | `37c6a7e27830a872…` |

117 MB pushed in 9 seconds. The two bassdown files are byte-identical to each
other; both kept under their distinct names per the keep-every-form policy.

**Still out, and the blocker is not what the manifests say.** The two
`MyActivity.html` files exist only inside
`takeout-20260103T040931Z-3-002.zip` in Drive (`1iXw3onpgXUtN9huey54qPV7ctnc0ffuF`),
which is 17.8 MB — comfortably under every transport limit involved. It was
never the size. Fetching it anonymously returns a **sign-in page**:

```
$ curl -sSL "https://drive.google.com/uc?export=download&id=1iXw3onp…"
http=200 size=914147 type=text/html
<!doctype html>…<base href="https://accounts.google.com/v3/signin/">
```

So the zip is private, exactly like the Facebook zip and `dox-scan/`. **G2 and
G9 are the same blocker**: a Drive sharing change on the containing folder
opens both, and after that the 17.8 MB zip is a routine pull. Only
`Search/MyActivity.html` (103.8 MB) then remains hard — past GitHub's 100 MB
per-file cap for native push too, so it needs a split or content-addressed
storage, which is the decision `raw/README.md` already flags.

The Drive connector is not a route for any of this: it returns file bodies as
base64 into the conversation, so a 17.8 MB binary is unusable regardless of
permissions.

### G3 — The iMessage corpus has three divergent forms and no stated authority

- `RAWLOGS/raw/imessage/messages.csv` — 47.8 MB byte-original, private.
- `wikibrain/raw/imessage/messages-part{1,2}-*.csv` — 2-part split, public,
  **carrying an `xai-REDACTED-ROTATE-ME` substitution**. Recombination is
  verified to reproduce all 192,140 records, but the bytes are not the
  original bytes.
- `corpus/messages.csv` — gitignored, re-pulled by `bin/wb-corroborate --pull`
  and sha256-checked against `corpus/manifest.json`, which pins the
  **unredacted** hash `2c53c540…`.

So the public copy will never match the manifest hash, by construction. That is
defensible, but it is not written down anywhere as intended behaviour, and the
next verification run will read it as corruption.

Open action carried over and still open: **two xAI API keys (40 occurrences
across 8 files) need rotating.** Redaction was applied to the public copy only;
the live keys remain in RAWLOGS.

### G4 — Location history is dead since 2024-05-14

`Records.json` ends 2024-05-14. That is **2 years 4 months** of no independent
positional corroboration, against a message corpus that runs to 2026-09-07.

This matters more than its size suggests. `raw/SOURCES.md` nominates location as
the independent-corroboration channel precisely because it is mechanically
produced rather than composed. The entire 2024-2026 period — which includes the
Morgantown call, the Aug-2026 block retraction and the Creative License dispute
— has no such channel. A fresh Timeline export closes it in one pull.

### G5 — Export generations are unevenly stale, and the inventory doesn't say so

| Channel | Newest export | Age at 2026-09-13 |
| :--- | :--- | ---: |
| Instagram | 2025-08-24 | **13 months** |
| ChatGPT | 2025-08-05 | **13 months** |
| Location | 2024-05-14 (data) | **28 months** |
| Takeout | 2026-07-22 | 2 months |
| Facebook | 2026-09-08 | 5 days |

Instagram and ChatGPT are a year behind everything else. Any cross-channel
claim spanning late 2025 to now is drawing on Facebook/iMessage/Takeout while
believing it drew on all channels.

Related: `raw/SOURCES.md` still references `src:facebook-export-2026-06-23` as
the ingested Facebook source. The archive holds `export-20260908-a/b`. The
doc points at a superseded generation.

### G6 — The stated Twitter range is wrong in both directions

Stated: Aug 2013 → Apr 2026. Actual: **2008-09-24 → 2026-09-01**.

Nearly five years of early material (2008–2013) is present and unaccounted for
by the inventory, and five months at the recent end likewise. If any analysis
scoped itself to the stated range, it excluded real data it had.

Also: "tweets + reposts" implies two comparable bodies. Reposts is 5 records.

### G7 — Unresolved duplicates and one known-lossy conversion

Policy is explicitly to keep every form and record the difference rather than
resolve it, so these are catalogued, not errors — but they are traps for
anything that counts:

- `googlechat/j6-chat.md` ≡ `the-j6-chat-copy.md` (`ce880d25…`), while
  `the-j6-chat.md` is a **different, longer** file (36,824 B vs 23,864 B).
- `googlechat/danfrank-isms-pinned.md` ≡ `danfrank-isms-pinned-chat.md`
  (`e08f30ed…`).
- Ross Thompson thread: HTML original 19,441 B vs Google-Docs conversion
  3,404 B. The conversion drops a photo attachment, a SoundCloud `href`, an
  inline IP, the export footer, and **all block structure** — and in a Facebook
  export nothing in the message text carries the speaker. Parse the block,
  never the line. The HTML is the source of record.
- Ingest skipped 38 files whose bytes already existed under a different name
  (content-hash match). Deduplicated at ingest, so filename-based enumeration
  of the source will overcount relative to the archive.

### G8 — Drive-sweep subfolders that are names, not corpora

Present and correctly manifested, but thin enough that citing them as channels
overstates coverage:

| Subfolder | Contents |
| :--- | :--- |
| `spotify/` | 1 file — `Your_Top_Songs_2025.csv`, 32 KB |
| `goodreads/` | 1 file — library export, 56 KB |
| `telegram/` | 2 CSVs, 12 KB total |
| `twitter/` | `tweets_sample_2019-2026.txt` — a **sample**, superseded by `raw/twitter/` |
| `takeout-index/` | An index HTML, not the archives it indexes |
| `chatgpt-export/` | 1 file, 2022–2025 — overlaps `raw/chatgpt/` at unknown margin |
| `misc-zip/` | `Archive 2.zip`, 14 MB, **unexpanded and uncharacterised** |

`misc-zip/Archive 2.zip` is the only fully unknown object in the archive.

### G9 — Documented-but-unreachable material

`raw/SOURCES.md` records Drive folders still not pulled. Still true:

- `dox-scan/` / `dox-md/` — **blocked, needs one sharing change.**
  `all_imessages_complete_dump.txt` is 28.9 MB: past the connector's 10 MB
  limit, and anonymous HTTPS returns a sign-in page. This is the stated
  decisive test for `pat:reasoning-sound-provenance-unreliable` — whether four
  unverifiable quotes live in this dump. One permission change settles it and
  it has not been made.
- `gemini-activity/`, `youtube-watch-history/`, `concerts/`, `captures/`,
  `gmail-captures/` — recorded as unassessed. Still unassessed.
- The 82 MB Facebook zip remains private and past the connector's export limit.

---

## 4. Ranked

Reordered 2026-09-13 after the recovery pass. Everything above the rule is
blocked on an action only Dan can take; everything below it is work.

| # | Gap | Cost to close | Why it ranks here |
| :-- | :--- | :--- | :--- |
| 1 | **G2 + G9** One Drive folder is private | **One sharing change** | Two gaps, one action. Opens the 17.8 MB takeout zip (Search + Chrome history) *and* `dox-scan/`, which is the stated decisive falsifier test for `pat:reasoning-sound-provenance-unreliable` |
| 2 | **G4** Location dead since 2024-05 | One Timeline export | Removes independent corroboration from the entire period the recent work is about |
| 3 | **G3** xAI keys unrotated | Rotate | Live credentials, flagged 2026-09-12, still live |
| 4 | **G1** RAWLOGS/wikibrain layout conflict | **A decision, then 23 moves + tooling** | Every enumeration of the backup repo is a third of the archive. Not actionable until the convention is settled — see G1 |
| — | — | — | — |
| 5 | **G6/G5** Wrong stated ranges, stale exports | Correct `SOURCES.md`; re-export IG/ChatGPT | Causes confidently-scoped analysis over data that isn't there — or skips data that is. *Metadata half done 2026-09-13* |
| 6 | **G8** `Archive 2.zip` uncharacterised | `unzip -l` | Only unknown object in the archive |
| ✓ | **G2** (partial) 3 large files | *Done 2026-09-13* | 117 MB restored by native push; API ceiling ≠ git ceiling |

## 5. What this audit did not verify

- sha256 was **not** recomputed across the archive. Presence, size and record
  counts were measured; integrity is asserted from the manifests except where
  named above.
- Overlap between `drive-sweep/chatgpt*` and `raw/chatgpt/` is unquantified.
- Instagram's 1,215 files were counted, not characterised by section.
- Whether the four `MyActivity.html` / `.mp4` skips still exist at their Drive
  source was not checked — only that they are absent from the repositories.
