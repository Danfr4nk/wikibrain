+++
id         = "pat:mechanical-fingerprint-avatar-hunt-20260917"
layer      = 4
type       = "pattern"
title      = "Mechanical fingerprint: stylometric flags cluster on the avatar-hunt workflow signature"
claim      = "When Dan is in an avatar-hunt session — short repetitive pick-messages ('Abatar me', 'Option 2') with attachments riding along — the stylometric burn-in engines flag the windows, but the flags track the workflow's mechanical shape (repetition bursts + attachment bursts driving jaccard_next/ttr_win divergence), not a behavior or state change. The instrument itself labels this 'a mechanical fingerprint, not a behavior read' and suppresses repeat alerts on the same axis within 6 hours. Burn-in day one: 47 check-ins, engines agreed on 42, 6 windows flagged — all the same shape, all during the avatar hunt. Steelman: this is one day of data and the 'pattern' is largely the instrument's own alert-suppression note — the durable claim is narrower: during avatar-hunt sessions, stylometric flags should be read as workflow exhaust unless a second, non-workflow axis also moves."
cites      = ["dat:1703-stylo-burnin-mechanical-fingerprint-20260917", "src:sammy-chat-transcript-20260917-1540"]
confidence = "moderate"
evidence_count = 2
importance = 3
created    = "2026-09-17"
falsifiers = [
  "A flagged window with the same repetitive-pick + attachment shape occurring outside any avatar/pick session.",
  "A flag the instrument does NOT attribute to workflow mechanics (an alert with a stated behavioral read).",
  "Sustained flagging on the same axis after the avatar session ends and messaging returns to normal cadence.",
]
counterexamples = [
  "dat:1703-stylo-burnin-mechanical-fingerprint-20260917",
]
+++

## Falsifiers

- A flagged window with the same repetitive-pick + attachment shape occurring outside any avatar/pick session.
- A flag the instrument does NOT attribute to workflow mechanics (i.e. an alert with a stated behavioral read).
- Sustained flagging on the same axis after the avatar session ends and messaging returns to normal cadence.

## Counterexample (searched, disqualified)

- dat:1703's second-engine overnight far-edge ranking looked like a non-workflow
  flag, but the engine wrote down no explanation why — a pipeline hole, not a
  reading. Untestable as a counterexample; the search was made and the candidate
  disqualified for lack of an attributable claim.

## Limits

- One day of burn-in data (2026-09-16/17); the instrument's null percentile (0.9961) and suppression logic are first-observed here.
- The second engine's overnight far-edge ranking with no written explanation is a pipeline hole, not evidence — excluded from this pattern.
