+++
id         = "dat:0010-drive-md-frontmatter-flattened"
layer      = 1
type       = "datum"
title      = "Exported wiki pages keep their bodies but lose frontmatter line breaks"
claim      = "Round-tripping wiki/people/vaughn.md out of the Drive staging copy as text/markdown preserved the body prose, headings, emphasis, blockquotes, markdown tables and wikilink targets, but flattened the YAML frontmatter's plain key/value pairs onto a single line."
cites      = ["src:wikitest-recovery-session-2026-09-09"]
confidence = "high"
extraction = "Measured on one exported page. The frontmatter returned as 'domain: people page\\_type: entity status: closed knowledge: mixed date\\_created: 2026-06-23 ...' with no line breaks between keys, while list-valued keys such as sources: and connections: retained theirs. One page, so the sample is narrow — the mechanism is a property of the Docs conversion rather than of this page, but the claim is scoped to what was tested."
importance = 4
tags       = ["migration", "recovery"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

`dat:0009-engine-byte-exact-on-drive` establishes where the Drive copy's
damage stops. This node records what the damage actually *is* on the side of
the boundary that was hit, because "the markdown is corrupted" is too coarse
to plan a restoration against.

The damage is asymmetric, and the asymmetry is the useful part.

**Bodies survive well.** Prose, em-dashes, smart quotes, headings, bold and
italic, blockquotes and — unexpectedly — full markdown tables all come back
intact. The injected `\_`, `\[`, `\]` escapes are deterministic and strip
cleanly, and wikilinks retain both target and label, so
`\[\[wiki/people/jack-rusko|Jack Rusko\]\]` unescapes to the original.

**Heads do not.** Where a page's frontmatter used one key per line, those
line breaks are gone and are not recoverable from the export. They can be
*re-derived*, because the key vocabulary is finite and known — but that is
inference about structure, and it will mis-split any value containing a
colon, silently and plausibly.

That distinction is why this is filed as its own datum rather than left as a
remark. A bulk restore along this route would produce pages whose bodies were
recovered and whose heads were guessed, carrying no marker telling the two
apart — `pat:partial-data-confident-error` in its exact form, aimed at the
frontmatter that the layer invariant is enforced against.

The copy on the Mac has the real line breaks. That is the whole argument for
preferring it.
