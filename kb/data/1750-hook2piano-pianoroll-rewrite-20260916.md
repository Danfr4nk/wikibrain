+++
id         = "dat:1750-hook2piano-pianoroll-rewrite-20260916"
layer      = 1
type       = "datum"
title     = "hook2piano: \"I can't read music\" — VexFlow staff notation ripped out for pure-SVG piano rolls"
claim      = "Dan's verdict on the shipped VexFlow staff-notation render was \"I can't read music,\" with the verbatim order: \"I want two piano rolls — one displaying the chord (LH) and one with the melody. The note names should appear above and below each piano roll.\" This supersedes the entire VexFlow staff-notation approach — including the notation test that had passed earlier that day; the staff notation is obsolete and must not be resurrected. The renderer was rewritten to pure-SVG piano rolls with zero dependencies: per section, a MELODY roll (right hand, blue #2b6cb0) on top and a CHORDS roll (left hand, green #2f855a) below, note names above AND below each roll (melody pitch names with octave; chord symbols bold on the chord roll; chord-tone bars carry tiny white pitch names when wide enough), shared per-section pitch range so both rolls align vertically, piano keyboard strips, beat gridlines, barlines, bar numbers, systems of 5 measures or fewer. VexFlow was fully excised (both vendored copies, ~2MB, deleted; script tag removed; docs/build.sh rewritten to re-extract the new render IIFE). The engine source of truth stayed hook2piano/hook2piano/render_html.py (_PAGE). Node smoke tests passed (9-measure song: 4 SVGs, arithmetically-correct bar positions, exact label counts); a live browser end-to-end test on the Creep verse deep link (?tabs=Verse:nJmBYYkXpoA) passed all 8 checks — auto-load, TheoryTab fetch, Pyodide engine, 2 MELODY + 2 CHORDS rolls, dual label rows, chord labels G/B/Bsus4/C/Csus4/Cm, keyboard strips, bar numbers 1–9, header \"Creep — Verse / Key of G major | 95 BPM | 4/4 / Progression: G – B – Bsus4 – C – Csus4 – Cm.\""
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 4
created    = "2026-09-18"
+++

<!-- prose for humans; the frontmatter is for machines -->

The piano-roll rewrite is the day's clearest example of the lyric-qualifier principle made
structural: Dan does not read staff notation any more than he parses sung lyrics as language —
both are display formats that assume a listener/reader model he does not inhabit. The rewrite
replaces a borrowed convention (western staff notation) with the representation he actually
uses (pitch-as-geometry on a piano roll, note names as text), and deletes the ~1MB-2MB of
notation-library weight that came with it. The 2026-09-11 \"theory.py/fetch.py/parse.py/
render_html.py + VexFlow\" engine is the back end that survived; only the render stage was
replaced. The same verdict drove the MELODY sibling's canvas piano roll the same day.
