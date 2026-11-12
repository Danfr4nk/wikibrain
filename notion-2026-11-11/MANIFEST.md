# Notion — REUP gap-fill pull

- **Source:** Notion, via `/opt/hatch/bin/notion-cli` (connector doc `/opt/hatch/connectors/notion/CONNECTOR.md`); status check at pull start: `connected`.
- **Pull date:** 2026-11-11 (America/New_York)
- **Workspace:** "Dan Frank's Notion" (workspace/account records in `account.json`, `users.json`, `teams.json`).
- **Mode:** read-only. Nothing created, edited, moved, or deleted.
- **Baseline:** nothing for Notion was held in wikibrain `raw/` at HEAD f347cc88 — everything here is new.

## How enumeration worked

Empty-query browse search is unavailable on this plan (Business-plan gate), so the workspace was enumerated four ways and every surfaced ID was fetch-attempted:

1. Sidebar lists: private 25, recent 47, shared 0, favorite 0 (`lists/`).
2. 25 broad content searches (`searches/search-*.json`).
3. Breadth-first link expansion from fetched pages (child pages, linked pages, database references).
4. Database-row references (below), plus 30 descendant-restricted searches for the quota-blocked databases (`searches/child-*.json`).

## Coverage

| Item | Result |
|---|---|
| Unique IDs fetch-attempted | 346 |
| Pages/databases returned with content | **293** — each saved as raw JSON in `pages/<id>.json` plus extracted Notion-flavored Markdown in `pages/<id>.md` |
| Attempts returning `object_not_found` | 51 — IDs referenced inside pages/schemas that are not fetchable pages (user IDs, property/option IDs, synced or deleted objects); the error responses are saved in place of content |
| Remaining stubs | 2 — both are data-source IDs that entered the page queue; their schemas are held under `data-sources/` instead |

## Databases

16 candidate data sources were referenced from fetched databases; 2 proved phantom (`05d00285-025e-49a5-b344-27d6170c0a70` and `ac526bcd-a19f-48d8-a84b-dd8b9af25f57` — Notion returns "data source not found" for both on fetch and on query). Of the 14 real data sources, **schemas are held for all 14** (`data-sources/<id>-schema.json`), and row exports were obtained for 10:

- Rows mode: 9 data sources, **166 rows** (`data-sources/<id>-rows-p*.json`).
- View mode: 1 data source (89 rows) whose saved view was queried after the rows quota closed (`data-sources/<id>-view-*.json`).
- **Blocked: 4 data sources** — `32e198c3-27ba-8067-9280-000b2c40c968`, `32f198c3-27ba-800d-9f1d-000bfe2e3397`, `614d0570-2873-4aa2-b5b3-e33b3d370b48` (LLM Chat Archive), `add63b21-33dc-435f-b4c5-c501bd7593c5`. The workspace's shared Query Data Source allowance (rows/SQL modes) was exhausted mid-pull; Notion's error says it "resets within 60 minutes," but probes at intervals through 23:31 EST were still refused. Saved views were tried for the three that have them and returned 0 rows (view configs saved as `data-sources/view-config-*.json`; one view 404s). **Re-run after reset:** `~/workspace/goals/wiki-brain-gap-fill-scrape/hidden_files/notion-rows-blocked-only.py` exports exactly these 4 into this same layout.
- Total database rows exported: **255**.

## Incidents (all recovered except the quota block above)

- A crude substring rate-limit detector in the first pass false-tripped on words inside page content and halted fetching after 1 page; a structured-error detector replaced it.
- Burst-rate fetching produced transport errors (`send MCP request`) on 312 early fetch attempts; a paced re-fetch with retries recovered 246, a final paced pass recovered 13 more, and every remaining attempt now carries a definitive Notion response.
- No true 429 was received from Notion; the binding limit was the plan's query allowance described above.

## Files

753 files, ~9.3 MB: `pages/` (346 JSON + 293 Markdown), `data-sources/` (46 files: schemas, row exports, view exports, view configs), `searches/` (55), `lists/` (4), `account.json`, `users.json`, `teams.json`, and pull bookkeeping (`pull-stats.json`, `rows-pass-stats.json`, `view-pass-stats.json`, `child-search-stats.json`, `refetch-stats.json`).

## Coordinator addendum — blocked-rows resolution (2026-11-12 ~00:00 EST)

The 4 data sources whose rows-mode queries were refused during the pull
(32e198c3…, 32f198c3…, 614d0570…, add63b21…) were re-queried after the workspace's
shared Query Data Source allowance reset, using the worker's prepared re-run
script. All 4 queries now succeed (`ok: true`) and return ZERO rows
(`results: [], has_more: false`) — responses saved as
`data-sources/<id>-rows-final-p0.json`. Terminal state: these sources expose no
rows through the query API; any content they hold lives in pages, which were
already pulled in the pages pass. Notion leg is COMPLETE.
