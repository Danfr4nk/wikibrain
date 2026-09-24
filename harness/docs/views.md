# Harness views — registration convention

Every view is a standalone JS module under `harness/js/`. The router
(`js/router.js`) knows nothing about views except through the registry:

```js
window.HarnessViews.register(name, renderFn);
```

`renderFn(mainEl, params, objectId)` — `mainEl` is the cleared `<main>`
element to fill; `params` are the parsed `?key=value` hash params; `objectId`
is set for `#/object/<id>` routes.

Deep-link contract (every meaningful state addressable):

| Route | Meaning |
|---|---|
| `#/` | home |
| `#/object/<wiki-path-id>` | Read view for one object |
| `#/explore?id=<id>` | Explore from an object |
| `#/journey?a=<id>&b=<id>` | Journey between two objects |
| `#/time?tiers=1,2&q=…` | Time view with tier filter + text filter |
| `#/evidence?id=<id>` | Evidence view for one object |
| `#/search?q=…` | Search |

Views shipped:

- **read.js** — `home` + `object`: identity header, outbound/inbound
  relationship lists grouped by edge class, evidence summary, timeline slice,
  canonical-wiki links.
- **search.js** — `search`: title/alias/tag/text over `search-adapter.json`.
- **explore.js** — `explore`: the neighborhood with honest mechanism labels
  ("This page links to Y." / "Declared: <relation> —"), hub flags,
  dead-link honesty.
- **journey.js** — `journey`: hub-penalized BFS (≤3 hops) with labeled hops
  ("You reached X — a hub page (…)" / "This page links to Y").
- **time.js** — `time`: regenerated chronology, tier checkboxes (T1/T2/ALL,
  T1+T2 default), decade grouping, quoted flags, link-backs.
- **evidence.js** — `evidence`: coverage-aware; exact mandated wording for
  empty and dead states; ✓/○/⚠ coverage indicator only.
- **context-panel.js** — the universal context panel (identity, coverage,
  top edges, chronology, canonical links), updated on every route.

Adding a view: write the module, add its `<script>` tag to `index.html`
after the existing view scripts, and call `HarnessViews.register`.
