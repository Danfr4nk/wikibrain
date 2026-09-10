+++
id            = "dat:0025-old-wiki-prescriber-exists-routing-only"
layer         = 1
type          = "datum"
title         = "A message census located the prescriber the refusal had left open"
claim         = "The prior wiki asserted that a 2026-08-19 census of medical vocabulary across the message dump surfaced messages establishing that the Suboxone regimen is prescribed — quoting 2025-03-06 \"I had my doctor move my prescription here\", 2025-06-08 \"my doctor said the pharmacy won't fill an out of state prescription\", 2025-06-12 \"my doctor tried to send a prescription to walmart and they won't fill it either\", and 2019-05-31 \"try to go get subs from my old doctor\" — and further asserted that every recorded exchange about that doctor concerns moving a script between pharmacies, with none concerning a dose, a taper, a review or a body."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "From the 'missing mode, measured' section of wiki/health/the-configured-body.md. VERIFICATION ATTEMPTED 2026-09-09 against the authoritative corpus and only partly successful — see dat:0028. One of four quotes is present verbatim; two fall on days the corpus does not cover; one is absent from a thinly-covered day. The census this datum reports ran over a superseded message dump, not the authoritative export."
importance    = 5
tags          = ["health", "old-wiki", "epistemics"]
created       = "2026-09-09"
updated       = "2026-09-09"

[when]
start = "2019"
end   = "2025"
+++

The same system that endorsed an inference from a refusal later went and looked.

[`dat:0021`](0021-old-wiki-endorsed-inference-from-refusal.md) records the prior
wiki certifying a model's reading that a "no comment" meant the supply was
unmanaged. This datum records a different page, weeks later, running a term
census over the message dump and finding four dated messages that bear on the
same question directly.

The census settles one half and sharpens the other:

- **Prescribed.** A doctor exists, moves the script between pharmacies, and is
  referred to across at least six years. The reading that the supply is
  unprescribed or self-sourced does not survive this.
- **Not clinically managed.** Every recorded exchange is logistics. No dose, no
  taper, no review. The prior wiki's own phrasing: "the one standing medical
  relationship in this life is a logistics relationship."

Those are different claims and the distinction is the whole value. A single word
— *unmanaged* — was carrying both, and evidence separates them: false in the
supply sense, defensible in the oversight sense.

> **CHECKED 2026-09-09 — and the check did not go as expected.** The claim above
> that these messages "are in the corpus and can be checked" was written before
> anyone checked. Of the four, one is present verbatim; two fall on days the
> authoritative corpus holds no messages at all; one is absent from a day it
> covers thinly. The prior wiki's census ran over a **superseded** message dump —
> its own gap note says that dump is missing 2022 and 2026, both of which the
> authoritative export has — so this datum inherits shelved-extract status rather
> than corpus status. Confidence lowered to moderate. Full result in
> [`dat:0028`](0028-prescriber-quotes-partly-unverifiable.md).
>
> The claim is **not refuted**. Two of the three misses are corpus holes, and
> absence in a hole is `never_observed`, not `known_not_to_occur`.
