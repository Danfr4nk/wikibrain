+++
id         = "dat:1581-kinship-web-build-deployed-20260915"
layer      = 1
type       = "datum"
title      = "Kinship face-comparison web app built and deployed 2026-09-15"
claim      = "The kinship tool was rebuilt as a browser web app with ONNX Runtime and deployed at https://danfr4nk.github.io/tools/kinship/ on 2026-09-15; browser-computed scores matched the Python CLI within 3.5e-06; desktop upload-click and mobile/Safari hang bugs were found and fixed; the assistant reported it live and verified at 18:34:33Z with the URL at 18:34:43Z (no Dan confirmation in this window)"
cites      = ["src:sammy-chat-transcript-20260915-1834"]
confidence = "moderate"
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

The kinship face-comparison tool (Dan commissioned 2026-09-15; local CLI at ~/workspace/kinship/kinship.py using InsightFace buffalo_l ArcFace embeddings, cosine similarity mapped to a verdict + heuristic confidence via logistic centered 0.30, slope 11) was rebuilt as a browser web app per Dan's standing tool-delivery rule:

- Web app built with ONNX Runtime in-browser; the numeric pipeline was proven against the Python CLI.
- Browser-computed scores matched the Python CLI within 3.5e-06 on 13 faces (reported 18:02:29Z; restated 18:05:26Z as "matches the CLI to 3.5e-06").
- A live browser test found desktop upload-clicking broken (clicking the photo boxes did nothing); a fix reportedly landed and the re-test ran.
- Mobile/Safari hung from duplicate face analysis and oversized images; fixes reused the prior analysis and capped image size (reported 18:21:51Z).
- The assistant reported "It's live and verified" at 18:34:33Z and supplied https://danfr4nk.github.io/tools/kinship/ at 18:34:43Z. No Dan confirmation of the deployment appears in this window — the "confirmed" framing in the earlier draft of this datum was wrong and is corrected here.
- Kinship CLI smoke tests from the morning session: Dan-vs-Dan 0.61 (same-person flag fired), Dan-vs-Annie 0.03, Annie-vs-Alexis -0.03.

Caveat: the smoke-test numbers and the 3.5e-06 match figure are in-chat reports from the session, not independently re-run.
