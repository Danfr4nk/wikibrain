+++
id            = "dat:1348-morgantown-call-ethical-analysis-filed"
layer         = 1
type          = "datum"
title         = "The Morgantown call's ethical analysis — third-party consent, two harms, 30-point severity gap — is filed as AI-authored testimony"
claim         = "wiki/mind/synthesis/morgantown-call-three-participant-ethical-analysis (2026-08-19, amended 2026-08-20) is a 709-line three-participant ethical analysis of the August 16, 2026 three-way call (Dan, Annie, Tuquick), built from three audio/AI layers: Dan's iPhone recording, his own AI transcription/summary (which the page states he initially framed toward a 'good guy' read), and an independent third-party STT transcription dated 2026-09-09. Its durable structure: a third-party consent violation (Annie recorded without consent during Tuquick's coercion; the 'send this whole thing to Ellen' tactic at ~13:37 makes her a means, not a subject); the two-harms separation (Tuquick's coercion — the financial, physical, and property threats — vs. Dan's instrumental harm, which persists after she is safe); Dan's own motive statements ('didn't need the money,' 'I haven't said a word this entire time') as evidence against his stated framing; and a quantified severity gap between his self-assessment (his '7/10' self-rating sits near the 'self-correction' band while the objective score is far lower — the page documents a ~30-point gap). The page's [2026-08-20] amendment records its own correction: the initial 'coercion extraction' framing was revised to account for the phone-possession evidence (Dan had Annie's phone), and it explicitly marks as unverifiable the claim that Dan told Annie to fake a 911 call and that he recorded ~10 minutes without consent. Its stated Gaps — Annie's own voice saying 'You are' at ~02:35 is the only fragment supporting a violence reading and is absent from the independent transcript (confirmed transcript-side in dat:1347), the missing opening ~2.5 minutes of the independent STT, and no per-speaker validation of the diarization — are preserved. Filed as page-attributed testimony."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 36492 (709 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. The page is explicitly AI-authored synthesis (a Gemini 3 analysis per the page's own attribution trail) — no human authorship claimed. The underlying call audio is not held; the independent STT transcript IS held and two of its three load-bearing quotes are confirmed in dat:1347. The severity scores, the 30-point gap, and the harm taxonomy are the analysis's own constructs with no independent validator."
importance    = 4
tags          = ["morgantown-call", "ethics", "mind", "synthesis", "old-wiki", "august-2026"]
created       = "2026-09-09"

[when]
date = "2026-08-16"
+++

## What is kept separate

- [`dat:1347`](1347-morgantown-call-transcript-verification.md) — the two
  quotes the independent transcript anchors, and the third quote's
  absence.

This node files the analysis layer: the consent argument, the two-harms
distinction, the motive-statement evidence, the severity gap, and the
2026-08-20 amendment history. None of it is measured anywhere in the repo;
all of it is the page's reasoning preserved verbatim.
