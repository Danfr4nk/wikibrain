# telemetry v2 bank reference — 2026-09-10

v1/v2 parity: max abs diff on shared ratio keys = 0.0 (v1 formulas untouched).
Quality verdicts on the clean bank: 18/18 pass. Iris scale: ipd_mm 60.2–64.1 (adult-plausible).
3D pose (solvePnP, 6-pt model): |yaw| <= 1.3 deg, |pitch| <= 5.3 deg across bank — frontal as expected.

## quality vector (per face)
| face | verdict | sharp | expos | clip% | iid px | illum bal | yaw | pitch | reproj px |
|---|---|---|---|---|---|---|---|---|---|
| p1-wide-1 | pass | 726 | 121 | 3.6 | 329 | 0.06 | -1.2 | 3.9 | 18.2 |
| p1-wide-2 | pass | 800 | 120 | 3.6 | 305 | 0.01 | -0.9 | 0.9 | 19.1 |
| p1-long-1 | pass | 693 | 120 | 4.0 | 288 | 0.08 | -1.0 | 1.4 | 20.2 |
| p1-long-2 | pass | 782 | 119 | 5.2 | 330 | 0.06 | -0.5 | -0.1 | 20.5 |
| p1-heart-1 | pass | 669 | 122 | 5.0 | 315 | 0.06 | -0.3 | 5.2 | 16.2 |
| p1-heart-2 | pass | 769 | 133 | 1.7 | 287 | 0.09 | -0.6 | 2.4 | 14.3 |
| p1-round-1 | pass | 682 | 134 | 2.6 | 312 | 0.05 | -0.5 | 2.2 | 15.8 |
| p1-round-2 | pass | 601 | 134 | 1.9 | 343 | 0.02 | -1.2 | 1.3 | 17.7 |
| p2-jaw-sharp | pass | 801 | 123 | 4.9 | 383 | 0.05 | -0.9 | 1.6 | 22.3 |
| p2-jaw-soft | pass | 759 | 122 | 4.0 | 327 | 0.07 | -0.9 | 1.0 | 16.7 |
| p2-lips-full | pass | 745 | 126 | 2.5 | 325 | 0.02 | -0.7 | 3.8 | 14.1 |
| p2-lips-thin | pass | 855 | 121 | 4.0 | 305 | 0.04 | -0.5 | 2.2 | 18.4 |
| p2-eyes-wide | pass | 974 | 126 | 4.2 | 348 | 0.05 | -0.7 | 1.3 | 18.1 |
| p2-eyes-close | pass | 747 | 124 | 4.1 | 360 | 0.08 | -0.7 | 2.5 | 17.1 |
| p2-brow-thick | pass | 786 | 124 | 2.7 | 346 | 0.02 | -0.7 | -0.2 | 17.8 |
| p2-brow-thin | pass | 682 | 127 | 3.0 | 313 | 0.13 | -1.2 | 0.7 | 17.3 |
| p2-nose-narrow | pass | 676 | 120 | 2.9 | 329 | 0.01 | -0.8 | -0.2 | 16.9 |
| p2-nose-wide | pass | 660 | 121 | 3.5 | 374 | 0.04 | -0.3 | 1.0 | 22.7 |

## v2 physical metrics (iris-anchored, mm)
| face | ipd mm | face w mm | eye area mm2 | lip area mm2 | mouth drop | brow apex |
|---|---|---|---|---|---|---|
| p1-wide-1 | 62.8 | 136.5 | 172.0 | 624.7 | 0.024 | 143.7 |
| p1-wide-2 | 63.3 | 138.3 | 161.1 | 734.8 | 0.036 | 142.3 |
| p1-long-1 | 60.2 | 125.8 | 175.1 | 519.6 | -0.010 | 142.4 |
| p1-long-2 | 62.5 | 131.4 | 176.0 | 611.0 | -0.004 | 144.2 |
| p1-heart-1 | 63.7 | 134.3 | 180.8 | 692.0 | -0.028 | 142.7 |
| p1-heart-2 | 62.1 | 136.2 | 175.1 | 634.7 | -0.037 | 143.3 |
| p1-round-1 | 63.0 | 142.7 | 163.4 | 601.1 | 0.006 | 144.0 |
| p1-round-2 | 63.9 | 143.0 | 163.4 | 638.3 | -0.021 | 143.6 |
| p2-jaw-sharp | 61.4 | 131.8 | 188.5 | 596.9 | 0.014 | 143.4 |
| p2-jaw-soft | 60.3 | 127.9 | 159.2 | 656.9 | -0.015 | 141.1 |
| p2-lips-full | 64.1 | 137.8 | 169.1 | 1077.1 | 0.015 | 141.7 |
| p2-lips-thin | 60.7 | 132.1 | 182.8 | 544.4 | 0.003 | 144.3 |
| p2-eyes-wide | 61.7 | 131.3 | 190.5 | 580.8 | -0.016 | 143.8 |
| p2-eyes-close | 62.1 | 133.5 | 178.2 | 621.9 | -0.011 | 144.5 |
| p2-brow-thick | 63.0 | 135.0 | 175.4 | 631.9 | 0.013 | 141.5 |
| p2-brow-thin | 61.6 | 129.7 | 173.3 | 615.4 | -0.023 | 142.6 |
| p2-nose-narrow | 61.6 | 128.8 | 170.6 | 607.3 | 0.000 | 143.3 |
| p2-nose-wide | 62.0 | 131.6 | 167.6 | 631.5 | 0.018 | 140.9 |

## gate calibration (deliberately degraded copies of p1-wide-1)
- clean: pass (sharp 726) | blur r=3: pass (sharp 163) | blur r=6: **fail** (sharp 45)
- 160x200 downscale: **fail** (iid 33px < 40, pose degrades: pitch 14.3 deg)

## what v2 adds over v1
- quality vector with pass/warn/fail — the instrument now refuses bad inputs instead of numbering them
- iris-anchored mm scale (11.7mm iris; +/-5% biological variation noted, calibration override supported)
- contour areas: eye fissure L/R, lip vermilion (shoelace on full landmark rings)
- true 3D pose via solvePnP + reprojection error as a fit-quality signal
- per-side decomposition, mm duals, mouth corner drop, brow apex angle

