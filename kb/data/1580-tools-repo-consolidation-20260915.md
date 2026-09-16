+++
id         = "dat:1580-tools-repo-consolidation-20260915"
layer      = 1
type       = "datum"
title      = "Danfr4nk/tools consolidation completed 2026-09-15"
claim      = "Dan's tool repos were fully consolidated into Danfr4nk/tools on 2026-09-15: attraction (530 files), hook2piano, musictrainer, track-autopsy, modbod (571/571 files, four new Pages URLs 200), kinship; old repos left as redirect stubs pending his deletion go-ahead"
cites      = ["src:sammy-chat-transcript-20260915-1834"]
confidence = "moderate"
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

On 2026-09-15 Dan ordered the full consolidation of his tools into the Danfr4nk/tools repo ("ALL the tools"). Migration reported complete and verified live in-chat at 17:47:57Z:

- Attraction suite moved from Danfr4nk/attraction-guide into tools/attraction/ (530 files, byte-identical except README URL + 4 push scripts retargeted).
- hook2piano/, musictrainer/ (from Danfr4nk/MusicTrainer), track-autopsy/, modbod/ moved in (571/571 files verified on the remote; all four new GitHub Pages URLs returned 200).
- kinship/ (InsightFace buffalo_l face-similarity tool) moved in earlier the same day (reported 17:48:44Z: "It never had a repo — it was local-only. Fixed: it's in tools/kinship/ now, pushed and verified").
- Old repos left as redirect stubs (index.html + 404.html catch-all) so old URLs/bookmarks keep working; deletion still pending Dan's go-ahead.
- Repo layout verified 2026-09-15 via GitHub API: attraction, hook2piano, index.html, kinship, modbod, musictrainer, track-autopsy, README.md, MIGRATION-NOTES.md.
- Live at https://danfr4nk.github.io/tools/.
