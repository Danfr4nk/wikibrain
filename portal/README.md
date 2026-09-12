# portal/ — the wiki-brain harness

The visual language of the old `caakehorn/home` harness, rebuilt without the
assets that got the old account banned: marquee tickers, nine-tab bar, chaos
meter, vibe panel, THE NET input. Neon on black, monospace, scanlines,
generative canvas abstraction only. No external assets, no fonts, no images.

## What's real

All nine tabs are functional static tabs. Each tab lives in `tabs/<name>.js`
and registers as `PortalTab_<name> = { html, css, init(root, G, FEEDS) }`.
`portal/index.html` mounts them and lazy-inits each on first visit.

- **WIKI-BRAIN** — layer-filtered node browser (L0–L5) over graph.json; THE NET
  live-filters it. The hook is real, the LLM side is not.
- **SAGE** — retrieval console: keyword query scored over titles/tags/ids/bodies,
  answers composed from matched nodes with node-ID citations and their "rests on"
  trails. Banner says it plainly: RETRIEVAL ONLY, no LLM backend.
- **WORDS** — lexicon of the *written wiki* (token frequencies over kb/ node
  text — the message corpus is gitignored and unavailable at build time, and the
  tab says so). Tag cloud + top tags, from `feeds/words.json` (built by
  `bin/wb-feeds`).
- **LATTICE** — canvas typed-edge explorer: focus-node + 2-hop neighborhood over
  the citation backbone plus the sparse typed `derived_edges` (family, rel,
  strength, basis, asserted_by on selection).
- **LEVIATHAN** — full-text trawler over node titles/tags/bodies, ranked
  title > tags > body, with match highlighting and query timing.
- **GALLERY** — catalog over `media/registry.json` (copied to `feeds/gallery.json`
  at build). Descriptions + outbound share links only; **no originals stored, no
  media bytes fetched or embedded** — policy footer on the tab.
- **TRANSCRIPT** — build log from `raw/*/EXTRACT.md` (`feeds/transcript.json`),
  newest first. Batch dates come from `YYYYMMDD-HHMM` dir names; slug-style dirs
  honestly show "date unknown".
- **ARCADE** — three generative canvas chaos engines (particle storm, flow field,
  cellular automaton). Zero external assets.
- **TRANSMISSIONS** — findings feed from the 40 most recent kb datums
  (`feeds/transmissions.json`), newest first, each citing its node ID.

## The build contract

The portal reads **only built artifacts**, same-origin relative fetches:
`../graph.json`, `../feeds/words.json`, `../feeds/transcript.json`,
`../feeds/transmissions.json`, `../feeds/gallery.json`.

`bin/wb-build` wires it in: runs `bin/wb-feeds --out site/`, copies
`media/registry.json` → `site/feeds/gallery.json`, and copies `portal/` →
`site/portal/`. `GRAPH_URL` is the relative `../graph.json` — there is no
cross-origin dependency anymore.

## What's deliberately excluded

The old harness's anime imagery. That's the likeliest reason GitHub deleted the
entire `caakehorn` account, and re-shipping it on a new account risks the same
outcome. The void canvas and ARCADE are generative abstraction — same energy,
nothing flaggable.
