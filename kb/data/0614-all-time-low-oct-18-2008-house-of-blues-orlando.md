+++
id            = "dat:0614-all-time-low-oct-18-2008-house-of-blues-orlando"
layer         = 1
type          = "datum"
title         = "All Time Low: Oct 18, 2008 House of Blues, Orlando — the third of the page's three documented appearances"
claim         = "The All Time Low artist page records three live appearances: **Aug 8, 2007** Vans Warped Tour at Post-Gazette Pavilion, Burgettstown PA (lineup: Paramore, Coheed & Cambria, All Time Low, Bad Religion); **Jul 29, 2008** Vans Warped Tour at the same venue (lineup: Anberlin, All Time Low, Against Me!, 3OH!3); and **Oct 18, 2008**, a multi-act show at House of Blues, Orlando FL, noted *\"Resolved. Joint fall 2008 package\"*, co-billed with Mayday Parade, The Maine and Every Avenue. The two Warped Tour editions are already independently filed as [`dat:0241`](0241-vans-warped-tour-four-editions.md); the Oct 18, 2008 Orlando show is the one appearance on this page with no existing kb node. The page's stated source, `raw/self/concerts/table.csv`, is not held in this repository; the page matches the old-wiki export verbatim, and the Orlando row matches master event list row 28 of the concert index."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 10314 (45 lines). Verified present verbatim in raw/old-wiki-export-2026-09-04/whole.txt (the Oct 18, 2008 row's note and co-bill line). The Orlando date/venue/bill also matches the master event list row 28 carried in the corpus concert-record page (line ~8430: 'Oct 18, 2008 | All Time Low, Mayday Parade, The Maine, Every Avenue | House of Blues | Orlando, FL'). The Warped editions' dates, venues and lineups are those already checked in dat:0241 and are not re-filed. The underlying concert log (table.csv) was not found anywhere under raw/ or elsewhere in this repo."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2007-08-08"
end   = "2008-10-18"
+++

## What the check adds

The two 2007–2008 Warped Tour editions on this page are already covered by
[`dat:0241`](0241-vans-warped-tour-four-editions.md) (four editions, all at
Post-Gazette Pavilion, matched against the export and the master list). What
was not yet in the kb was the third row: **Oct 18, 2008, House of Blues,
Orlando — All Time Low, Mayday Parade, The Maine, Every Avenue**, tagged
*\"Resolved. Joint fall 2008 package.\"* That row is now filed here. The same
row is cross-referenced from the page's own connection to the
`vans-warped-tour` festival page (the Aug 8, 2007 date) and the
`mayday-parade` co-occurs connection (the Orlando date) — both connections
restate, rather than extend, the table rows.

## What it does not confirm

The page's header claim — *\"an act Dan Frank saw live 3 times between
2007-2008\"* — is a count over the table, and the table is the old wiki's
own consolidation, not a held document. The Orlando bill's \"Resolved\"
status is the prior wiki's resolution of an initially tentative entry; no
ticket or contemporaneous record for it is in `raw/`. Attendance itself is
assumed by the page, not documented on it. Any datum that cites one of
these three dates as *attended* inherits that single-source reliance.
