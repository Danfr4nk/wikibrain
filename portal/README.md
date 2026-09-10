# portal/ — harness prototype (probe)

A single-file static prototype of the wiki-brain portal, rebuilt in the visual
language of the old `caakehorn/home` harness: marquee tickers, nine-tab bar,
chaos meter, vibe panel, THE NET input.

## What this is

A **design probe**, not a deliverable. Dan hasn't decided the portal's direction
yet, so this exists to be reacted to: keep the aesthetic, change it, or kill it.

## What's real

- The **WIKI-BRAIN tab** is functional. It fetches `graph.json` from the live
  Pages deployment (CORS is open) and renders a layer-filtered node browser
  (L0–L5) with node detail: cites, tags, confidence, body excerpt, link out.
- **THE NET** input live-filters the node browser. "Words caught before they
  are understood" — the hook is real, the LLM side is not.
- Tickers, chaos meter, vibe panel, void canvas: chrome. All inline, zero
  external assets.

## What's stubbed

The other eight tabs (SAGE, WORDS, LATTICE, LEVIATHAN, GALLERY, TRANSCRIPT,
ARCADE, TRANSMISSIONS) are labeled panels describing intent. Each maps to
existing roadmap or tooling work; none is built here.

## What's deliberately excluded

The old harness's anime imagery. That's the likeliest reason GitHub deleted the
entire `caakehorn` account, and re-shipping it on a new account risks the same
outcome. The void canvas is generative abstraction — same energy, nothing
flaggable.

## Not part of the build

`bin/wb-build` does not know about this directory, and it shouldn't until the
direction is approved. If approved, the wiring decision is one line: copy
`portal/` → `site/portal/` in the build, and switch `GRAPH_URL` to a relative
path. Until then this file can be opened directly from disk (graph fetch still
works — it's cross-origin against the live deployment).
