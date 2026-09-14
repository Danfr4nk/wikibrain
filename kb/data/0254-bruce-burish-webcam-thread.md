+++
id            = "dat:0254-bruce-burish-webcam-thread"
layer         = 1
type          = "datum"
title         = "Bruce Burish: caddying-era friend's five-day October 2018 thread — 348 messages, the camming business described to an outsider at launch"
claim         = "The page `wiki/people/bruce-burish.md` records **Bruce Burish** as a Fayette County caddying-era friend (opens referencing missing Nemacolin) who resurfaces for one dense, explicit five-day thread — **348 messages, 2018-10-23 to 2018-10-27** — and then disappears from the corpus entirely. The occasion is Dan telling Bruce that he and Annie are starting a webcam show together. Bruce responds with immediate, sustained interest: how the couple arrived at the idea, whether Annie had done cam work before — Dan's own line, quoted back approvingly: *\"Annie did it before we started dating and it actually works out really well to do it as a couple\"* — pushes for a schedule so he can watch, joking self-comparison (*\"I'm Ocho\"*), and repeated propositions to be included in a session in person when next in town in mid-November. Interspersed ordinary traffic: asking whether Dan is working, commentary on a book he had just finished, a passing mention of \"K-holes.\" The thread ends October 27 with no indication the November visit happened. The page's own stated value is evidentiary: this is the camming business described to an outsider at the moment of launch, in Dan's own words, to someone with no stake in it."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 52750 (117 lines); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt line 46417 (modulo the corpus snapshot's [phone redacted] for the handle, which the old-wiki export carries unredacted — number not reproduced here, same flag as dat:0251). Confidence is high because the page's correction record is itself the evidence trail: see datum."
importance    = 3
tags          = ["people", "2018", "camming", "evidence", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2018-10-23"
end   = "2018-10-27"
+++

## The self-correction the page documents

A correction dated **2026-08-20** is printed on the page itself and is one of
the corpus's cleanest worked examples of the received-direction bias: both
versions of the page had reported the thread as **181 messages** — which is
exactly the *received* count. `MASTER_MESSAGES_DB_DUMP.csv` marks everything
\"Received,\" so a page built from it reports one-sided threads; the complete
dump (`all_imessages_complete_dump.txt`) returns **348 records on this
handle — 167 of them Dan's**. The page states this is the same failure
documented on `wiki/people/zach-clingan` and corrected again on
Annie Ulmer's alternate-number thread the same day. The correction matters
substantively, not just arithmetically: a thread readable as Bruce talking at
Dan is in fact close to balanced, and Dan's 167 messages are where the
camming detail comes from.

## Merge record

**MERGED [2026-08-20]:** two pages existed — `wiki/people/bruceburish` (the
fuller account) and `wiki/people/bruce-burish` (a thinner stub carrying the
typed edge, orphaned). Same person, same handle, same five days. Merged here
under the hyphenated slug per STYLE_GUIDE rule 2.

## Typed connections the page carries

- Contact-gini instance: a dense short-burst tie (348 messages across five
  days, then nothing) as the long tail's characteristic shape.
- Evidences the camming-business launch on `wiki/people/annie-ulmer`.
- Evidences orchestration-and-voyeurism: Dan volunteers the webcam project
  unprompted and sustains two days of graphic questioning without deflecting.
- Follows `wiki/work/nemacolin-caddying`: the friendship originates in the
  caddying era and is dormant until 2018.

## Open gaps (stated on the page, not filled)

- Did the November visit or any collaboration happen? No contact after
  October 27 in any channel; the page says one paragraph from the operator
  would settle it.
- The Facebook Messenger thread (`bruceburish_t6vdszljtq/`) exists in the
  archive and has never been cross-read — the only other channel for this
  friendship, and it would date the origin. This repo does not hold that
  directory, so the gap persists.
- How the friendship actually started: \"caddying-era\" is inferred from
  Bruce's nostalgia, not stated; `wiki/work/nemacolin-caddying` does not name
  him.

## Privacy note

Bruce Burish is a private third party. The corpus redacts his handle; the
old-wiki export does not. This node follows the corpus and reproduces no
phone number.
