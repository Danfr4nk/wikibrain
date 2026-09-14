+++
id            = "dat:1032-context-core-staleness-audit-2026-08-16"
layer         = 1
type          = "datum"
title         = "Context Core's 2026-08-16 staleness audit: seven claims corrected in place, each recorded not silently overwritten"
claim         = "The Context Core page (the wiki's canonical behavioral spine) carries a dated 2026-08-16 staleness audit — the spine had drifted fourteen days behind its own corpus (90 of 456 pages modified since its 2026-08-02 revision) — correcting seven claims in place and recording each correction: (1) Annie 'closed — not live' REVERSED to live on three dated Aug 2026 events; (2) Tom '~16,563 msgs (rank 4)' REASSIGNED — handle [phone redacted] is Kristin's, Tom is ~5,763 rank #5 (the ~2.9x overstatement, the load-bearing error); (3) '337 Saratoga St / no confirmed successor' CORRECTED to 463 Morgantown St; (4) '181,585-row message corpus' flagged WRONG OBJECT (one file's row count, not the corpus); (5) '97,199 sent iMessages' SUPERSEDED by 106,629 (the dump yielding 97,199 marks nearly everything Received); (6) Annie '126k+ msgs' corrected to 97,768 unique (ROWS ≠ UNIQUE); (7) Fran 'age ~97–98' CLOSED at 97 (dated 2017-12-29 message outranks the raw spine). The audit names two recurring failure classes: numbers right about one file but wrong about the corpus, and hardcoded ages that silently expire. The audit's own open set (Annie status past 2026-08-09, Morgantown move-in date, Little Caesars transfer, Arnu lien) is marked open, not guessed. The page is a pinned canonical synthesis: its dated events/counts are curated AI-assisted compilation (not primary records), and its governance ('documented counts, timelines, and primary records here override generated metaphor') is carried as its own rule. All figures are relayed through the prior wiki; the counts cross-reference independently-held nodes dat:0001 (192,140 held rows) and dat:0077 (corpus-size figures + the axiom-test jurisdiction finding)."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 77116 (317 lines); the staleness-audit blockquote, the seven-claim table, the two-failure-classes paragraph, and the open-items list match raw/old-wiki-export-2026-09-04/whole.txt verbatim. The Tom/Kristin reassignment is independently documented in dat:0077 and the held-corpus 106,629-denominator audit; the Rick-tail update in dat:1024 and the Annie thread's held coverage (31,432 rows to 2026-09-07) sit downstream of this audit's date. The audit's claim that 90/456 pages moved is the page's own count, not re-derived. The page's cited raw source CONTEXT_CORE_EXPANDED.md is not held in this repo."
importance    = 4
tags          = ["meta", "old-wiki", "attribution", "staleness-audit", "provenance"]
created       = "2026-09-09"

[when]
start = "2026-08-02"
end   = "2026-08-16"
+++

## Why this datum exists

This is a provenance event, not a fact claim: the canonical spine
documenting its own drift and correcting itself in place, per the
repo's 'never clear a stale warning by bumping a date' rule. It is the
mechanism by which the Tom/Kristin handle mislabel (the 2.9x corpus-
weight error), the 181,585 wrong-object count, and the hardcoded-age
anti-pattern were retired — all three being error classes other workers
have since found recurring elsewhere (see coordinator notes: full-sail
August-2009 staleness, end-fight.md stale exit-line).

## Limits

- Every corrected figure is the page's; the underlying corpus figures
  are independently carried by dat:0001 and dat:0077 — use those, not
  this, as the number sources.
- The audit is dated 2026-08-16; it predates the Rick-silence break
  (dat:1024) and any corpus evidence after 2026-08-09 on the Annie
  status. It has itself since gone stale in the same way it describes.
- The page's typological and axiom layers (INTP 5w4 sx/sp, four
  unconscious axioms) rest on the AI-dossier base the page labels
  [DOC/MEM]; the axiom jurisdiction caveat is dat:0077's, not this
  node's.
