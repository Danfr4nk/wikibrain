+++
id         = "dat:1749-hook2piano-root-cause-correction-20260916"
layer      = 1
type       = "datum"
title     = "hook2piano: misdiagnosed CORS proxy fix superseded by Jekyll underscore root cause; relay-free bookmarklet path"
claim      = "The first 2026-09-16 hook2piano fix (routing TheoryTab page fetches through the api.cors.lol relay) was the SECONDARY bug, not the primary: Dan reported the tool still loaded nothing after the patch. The real blocker was GitHub Pages running Jekyll by default, which silently excludes every file whose name starts with an underscore — docs/py/hook2piano/__init__.py was 404 on Pages (200 on raw.githubusercontent), so the engine never loaded. Fix: one empty .nojekyll at the Danfr4nk/tools root; behavior-preserving since nothing in the repo used Jekyll. Collateral fix: the attraction tool's faces/_manifest-*.json files were 404ing on Pages from the same Jekyll bug — now 200. Because every public CORS relay proved unreliable (api.cors.lol rate-limiting hard within minutes, allorigins down, corsproxy.io 401/key-gated, codetabs 522, corsfix 400, Cloudflare demo worker 429, jsonp.afeld.me dead, Wayback API 429 with no ACAO on replays, and Hooktheory search endpoints all 401/auth-only with only the by-hash project API CORS-open), the app now accepts a ?tabs= deep link (encoded name:id pairs, parsed from the raw query string — a URLSearchParams first version broke on commas inside section names) plus a bookmarklet (draggable from the tool's hint) that extracts tab ids and names from the live TheoryTab DOM — same-origin, no CORS, no relay."
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 3
created    = "2026-09-18"
+++

<!-- prose for humans; the frontmatter is for machines -->

This corrects the in-day narrative: the 16:19 EDT \"hook2piano root-caused and fixed\" log entry
covered the CORS proxy patch, but Dan's live state showed the tool still loading nothing — the
engine itself never arrived. The 16:27 correction identified the underscore/Jekyll drop as the
primary cause. Both the proxy patch and the relay-free deep-link/bookmarklet path are real work;
the proxy was the secondary fix, Jekyll the primary. The bookmarklet is the durable artifact:
it moves tab-ID extraction off the unreliable public-relay layer entirely and onto the user's
own browser, same-origin.
