---
domain: work
page_type: concept
title: "kinship — face-similarity tool (CLI + web app)"
status: active
date_created: 2026-09-15
date_modified: 2026-09-15
sources:
  - "dat:1580-tools-repo-consolidation-20260915 (moved into Danfr4nk/tools, reported 17:48:44Z)"
  - "dat:1581-kinship-web-build-deployed-20260915 (web app build, 3.5e-06 match, bug fixes, deployment)"
  - "dat:1582-tool-web-version-standing-rule-20260915 (\"I always want them.\", 17:49:49Z)"
  - "src:sammy-chat-transcript-20260915-1834"
related:
  - wiki/work/tech/projects/index
tags: [ai-collaboration, face-comparison, web-app]
connections:
  - page: wiki/work/tech/projects/index
    type: component-of
    claim: "Kinship is one of the 2026 AI-directed coding projects; its web build is also the session that produced Dan's standing web-version rule."
---

# kinship

A face-similarity tool Dan commissioned on 2026-09-15: compare the
largest face in each of two photos and get a verdict. Built the same
day as both a local CLI and a deployed web app.

## The CLI

`~/workspace/kinship/kinship.py` — compares faces via InsightFace
`buffalo_l` ArcFace embeddings; cosine similarity maps to a verdict
plus a heuristic confidence (logistic, center 0.30, slope 11 — not
trained on sibling data, a resemblance meter, not a kinship test).

Morning smoke tests: Dan-vs-Dan 0.61 (same-person flag fired),
Dan-vs-Annie 0.03, Annie-vs-Alexis −0.03.

## The web app

Per Dan's standing delivery rule (below), the tool was rebuilt as an
in-browser app with ONNX Runtime — the numeric pipeline proven
against the Python CLI rather than reimplemented. Browser-computed
scores matched the CLI within 3.5e-06 on 13 faces (reported
18:02:29Z).

### Debugging chronology

- **Desktop upload-click broken:** a live browser test found clicking
  the photo boxes did nothing; a fix reportedly landed and the
  re-test ran.
- **Mobile/Safari hang:** duplicate face analysis plus oversized
  images hung the page; fixes reused the prior analysis and capped
  image size (reported 18:21:51Z).

Deployed at https://danfr4nk.github.io/tools/kinship/. The assistant
reported "It's live and verified" at 18:34:33Z and supplied the URL
at 18:34:43Z. No Dan confirmation of the deployment appears in the
archived window — the record notes the deployment as reported, not
as confirmed.

## The standing rule: "I always want them."

When offered the in-browser kinship page at
danfr4nk.github.io/tools/kinship/ (17:49:43Z), Dan said "Build the
web version" (17:49:46Z) and then, unprompted:

> "I always want them."

Standing rule established 2026-09-15: whenever he commissions a tool,
expect a deployed web version too — not just a local CLI or source
dump. This is now the default delivery shape for tool work, recorded
in MEMORY.md as his tool deliverable preference. Scope is tool
deliverables; it does not extend the wiki-writeback pre-authorization
to purchases, deletions, or other irreversible actions.

## Consolidation

Kinship moved into `Danfr4nk/tools` under `kinship/` on 2026-09-15
(reported 17:48:44Z: "It never had a repo — it was local-only. Fixed:
it's in tools/kinship/ now, pushed and verified"). Part of the
same-day full consolidation of Dan's tool repos — see the
consolidation note in [[wiki/work/tech/projects/index]].
