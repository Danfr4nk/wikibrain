# Harness data contract

Derived presentation indexes built by `bin/wb-harness` from `wiki/` + `kb/`.
**The builder never modifies corpus data; these indexes are not knowledge,
they are a read-time view of what the corpus already says.**

## Generated artifacts (`data/*.json`)

Each carries `generated_from_commit`, `generated_at`, `source_paths`.
The existing-corpus site generator runs `bin/wb-harness` at build time, so
deployed indexes always describe the deployed corpus revision.

| File | Contents |
|---|---|
| `page-graph.json` | `nodes` (per-page: title, domain, page_type, tags, aliases, date_start/end, hub flags, degrees, evidence_count, has_chronology, dead_link_count, outbound/inbound edge index lists), `edges` (source/target/relation/relation_original/class/direction/provenance/strength/frequency), `stats` |
| `evidence-index.json` | per-page list of cite occurrences: cite id, resolved flag, resolved_id, node_type, node_title, claim, confidence, created, tags, source_location (`page#L<line>`), resolution (exact/shorthand/dead/ambiguous-shorthand) |
| `sources-index.json` | per-page frontmatter `sources:` entries with D1 class (P exact path / N node-ref / A remapped / B ambiguous / C lost / D dead local / E url-prose), resolved flag, resolved target; `coverage` carries corpus-wide unique/entry resolution counts and per-class unique counts. The live coverage figure — see `harness/docs/sources-baseline.md`. |
| `search-adapter.json` | per-page: id, title, aliases, domain, page_type, tags, rel_count, evidence flag, chrono flag, 200-char sample |
| `timeline.json` | parsed master-timeline events: id, date, granularity (day/month/season/year), tier (1/2/3), text, quoted flag, page, section |

## Edge classes

- **ASSOCIATIVE** — body wikilink, page→page. Rendered as "This page links to Y."
- **SEMANTIC** — typed `connections:` / `related:` / `synthesizes:` frontmatter. Relation families normalize spelling (`evidenced-by`/`evidences` → `evidenced`); `relation_original` always keeps the corpus spelling.
- **EVIDENCE** — page→kb-node cite. Page cites list the kb node; never page→page.
- **PROVENANCE** — timeline link-backs. Never presented as topical.

## Rules these indexes obey

1. Read-only: no index ever repairs, backfills, or rewrites corpus data.
2. Identity: node ids are the corpus's own (`wiki/...` paths, `dat:`/`src:`/... ids). Object identity is shared with the existing wiki; moving between them preserves it.
3. Hub down-weight: index/share/hub pages carry `hub:true` with a reason; edge strength is multiplied 0.3 toward hubs (audit: concentration problem).
4. Silent omission is forbidden: Time defaults to tiers 1+2 with an explicit toggle; Evidence names its coverage (~28%) up front and never hides the gap.
5. Wording is exact: "No resolvable evidence is currently attached to this object." / "Evidence pointers exist in the corpus, but their referenced source paths are no longer resolvable." Coverage indicator states only ✓ / ○ / ⚠.
