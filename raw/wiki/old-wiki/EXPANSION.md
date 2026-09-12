# Old-wiki expansion — `src:old-wiki-export-2026-09-04`

`whole.txt` packs all 497 pages of the 2026-09-04 wiki-brain export into one
7.5 MB file. This directory now also carries the same pages as individual
documents, plus a machine-readable index. The pack stays the source of record;
everything here is derived from it and provably reversible.

## What was added

| Path | What it is |
| :--- | :--- |
| `pages/` | The 497 pages as individual `.md` files, at `pages/<pages.json path>` — e.g. `pages/wiki/health/chemical-architecture.md`. Each file's bytes are **identical** to the slice `whole.txt[byte_offset : byte_offset+byte_length]`. No decoding, no reflow, no normalization. |
| `index.jsonl` | One JSON object per page: canonical path, expanded file path, frontmatter fields (title, domain, page_type, aliases, status, importance, dates, sources), byte provenance (`byte_offset`, `byte_length`, `body_sha256`), counts (words, lines), and mechanical scans (headings, `[[wikilinks]]`, ISO dates observed in the prose). Parsed and counted, never interpreted. |
| `expansion-manifest.json` | Provenance + the byte-for-byte reconstruction proof. |

`whole.txt`, `pages.json`, `manifest.json`, `EXTRACT.md` are untouched.

## Layout decisions (the optimization)

1. **Kept `.md`, converted nothing.** Format conversion is where data dies —
   this repo's own README documents a Facebook HTML→txt conversion dropping a
   photo, link hrefs, and an IP address. Markdown is already the best format
   for model ingestion, so there was nothing to gain and bytes to lose.
2. **One file per page, path mirrors `pages.json`.** A model can fetch exactly
   the page it needs instead of slicing a 7.5 MB blob; files are individually
   cacheable and readable in parallel. The inner `wiki/<domain>/...` shape
   matches `raw/wiki/new-wiki/<repo>/wiki/...` so old and new trees line up.
3. **Bodies are pristine; metadata lives in `index.jsonl`.** No frontmatter was
   added to the page files — their bytes hash exactly to the pack slices.
   Everything a model needs for discovery (which pages, about whom/when,
   linking where) is one `index.jsonl` scan away: filter by `domain` /
   `page_type` / `status`, sort by `date_modified`, follow `wikilinks` for the
   link graph, or grep `dates_observed`.
4. **Frontmatter honesty.** 472 pages parse as strict YAML; 25 carry the prior
   wiki's own malformed frontmatter and are parsed with a tolerant line reader
   instead (`frontmatter_parse: "loose"` — recorded per row, never silently
   fixed). 288 pages have no title anywhere in the export; the index falls back
   frontmatter → first H1 → filename slug, with `title_derived_from` saying
   which.
5. **Dates are recorded raw.** The export mixes UTC and local timestamps and
   padded/unpadded forms. `dates_observed` keeps the strings as written; no
   normalization is applied (normalizing would be interpretation).

## Byte-for-byte proof

Pack structure, verified mechanically: 556-byte header (ends with page 1's
separator) + 497 × (page body + separator), zero trailing bytes. Separators are
byte-identical across all 497 boundaries: 72 `=` signs, `\nPAGE: <path>\n`,
72 `=` signs, `\n`.

Rebuilding the pack from the expanded files — header + each body read back
from `pages/` + regenerated separators — reproduces `whole.txt` exactly:

```
rebuilt sha256: 4037dedc019e2595fab9dca558a70ee466a39b5ed2a0d3ed58af3c25fb69d5a6
whole.txt sha256: 4037dedc019e2595fab9dca558a70ee466a39b5ed2a0d3ed58af3c25fb69d5a6
```

Per-page: `sha256sum pages/<path>` must equal that row's `body_sha256` in
`index.jsonl`. If any future re-analysis doubts the expansion, those two
checks settle it.

## Regenerating

The expansion is fully regenerable from `whole.txt` + `pages.json`:

```python
import json
raw = open("raw/wiki/old-wiki/whole.txt", "rb").read()
idx = json.load(open("raw/wiki/old-wiki/pages.json"))
for p in idx["pages"]:
    body = raw[p["byte_offset"]:p["byte_offset"] + p["byte_length"]]
    open("raw/wiki/old-wiki/pages/" + p["path"], "wb").write(body)
```

then re-derive `index.jsonl` per `expansion-manifest.json :: index.fields`.
