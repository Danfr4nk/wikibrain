+++
id          = "dat:0037-publication-gate-fails-safe"
layer       = 1
type        = "datum"
title       = "The publication gate failed safe under adversarial test, unlike the other tools audited"
claim        = "An adversarial build was constructed in which a public datum referenced a sensitive source through `attributed_to`. bin/wb-build emitted the withheld node's id into graph.json — the field was not covered by its exclusion logic, which filtered only `cites`. bin/wb-check-publish detected it and exited 1 with \"REFUSING TO PUBLISH — sensitive node src:secret-informant appears in graph.json\". The node's title and body did not leak; only the id did."
cites       = ["src:wikitest-rebuild-session-2026-09-09"]
confidence  = "high"
measurement = true
extraction  = "Constructed 2026-09-09 as the fourth step of the audit dat:0036 recommended. Fixed the same session: subject, supersedes and attributed_to are now filtered from graph.json with a `<field>_withheld` marker in their place, and two regression tests assert both halves — that the build does not leak, and that the gate refuses if it ever does."
importance  = 5
tags        = ["tooling", "privacy", "epistemics"]
created     = "2026-09-09"

[when]
date = "2026-09-09"
+++

The audit's fourth stop, and the first tool that failed in the right direction.

[`dat:0036`](0036-corroboration-tool-manufactured-support.md) established that
three tools shared a defect shape: **defaults failing toward finding something.**
The publication gate is where that shape would be worst, because "finding
something" there means *publishing* — and a publication mistake is the one error
in this system that cannot be corrected afterwards.

It does not have the defect.

`wb-build` did leak: `attributed_to` is a node reference and its exclusion logic
covered only `cites`, so a withheld source's id reached `graph.json` intact. Ids
here are readable slugs, so an id is itself informative.

`wb-check-publish` caught it and refused. That check reads the **built output**
rather than the source, so it does not share the builder's assumptions — which
is precisely why it caught a field the builder's author had not thought about.
The defence-in-depth was not decorative.

## Why this one came out different

The three defective tools all answer *"is there something here?"* — a question
whose failure modes are asymmetric only if someone decides which way to lean,
and where the convenient lean is toward yes.

The gate answers *"is it safe to publish?"* and was written to refuse on doubt.
That is a deliberate choice visible in its own source comment: the costs are not
symmetric, so it asserts against the artifact rather than trusting the process
that produced it.

The lesson is not that this tool is better written. It is that **the failure
direction was chosen explicitly here and left to fall out of the implementation
everywhere else.** Where it fell out, it fell the convenient way three times in
a row.

## What was fixed anyway

A build that cannot pass its own gate is broken, so `subject`, `supersedes` and
`attributed_to` are now filtered like `cites`, leaving a `<field>_withheld`
marker so a consumer sees that a reference was removed rather than that none
existed. Two regression tests assert both halves.
