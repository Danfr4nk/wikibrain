+++
id            = "dat:1121-facebook-interests-export-record-relay"
layer         = 1
type          = "datum"
title         = "Facebook Interests report: ~229–234 liked pages, event/group record, 339 off-Facebook tracking files — page-attributed, export unheld"
claim         = "The Facebook Interests page relays what the **September-2022-era Facebook export** (`raw/self/facebook/facebook-ihatedanfrank/`, not held) records: **~229–234 unique pages liked** spanning ~2012–2022 — the music/electronic core (ODESZA, JAUZ, Borgore/Buygore, DIM MAK, Flying Lotus, Diplo, Zedd, Mad Decent, Spinnin' Records, Anamanaguchi, plus Elliott Smith, LCD Soundsystem, Bright Eyes, Tegan and Sara, Deerhunter, Wavves), heavy 2012–2014; a comedy/skeptic cluster 2017–2020 (Gotham Comedy Club, Comedy Cellar, The Stand, Nathan For You, Bill Burr, Jim Norton, George Carlin, Andy Kaufman, Tim and Eric, Penn Jillette); politics/philosophy 2017–2020 (Alexandria Ocasio-Cortez liked Feb 2020, The Trump White House Jan 2017 later archived, Dawkins, Neil deGrasse Tyson, Sam Harris–adjacent skepticism); gaming/tech (WoW, LoL, TF2, Binding of Isaac, Starcraft, PlayStation, Spotify); plus Alfa Romeo USA, Suzanne S. Frank Realtor, Axis Productions & Events. Profile music adds **Apr 29, 2019**: 'Now You Do' by A-1 and 'Press Rewind' by Del the Funky Homosapien. Event responses 2008–2020 (High Tide 4/20 Cruise w/ Freddie Gibbs, Apr 2019; United Ravers of America Festival Jul 2014; Funny or Die Oddball Fest Aug 2013; Obama Facebook townhall Apr 2011); groups 2007–2020 (earliest posts Feb 2007 in 'Nice Hat... ROBIN HOOD!!!'; 'Say Anything ... Is a Real Band' Aug 2007; Overcast Kids Apr 2012; Pittsburgh EDM Aug 2014). Facebook's derived **ads-interest profile**: electronic music, hip hop, concerts, video games, political philosophy, photography, NYC, elections/Congress/Constitution, survival horror, gambling, Las Vegas, weddings. **339 `your_off-facebook_activity` files** document commercial tracking (GameStop page views Nov 2020, repeated Domino's orders 2020–21, inman.com real-estate browsing Sep 2020). The page's narrative arc — emo/pop-punk (2007) → chiptune/IDM (2012) → peak EDM/bass (2014) → comedy clubs and left politics (2017–2020), converging with the favorites masterlist — is the page's synthesis, not a held measurement. None of this is checkable in this repo: `raw/facebook-threads/` holds only MANIFEST.json, and the 2026-06-23 Facebook source on disk here is a different export pull."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 77500 (65 lines); corpus page and old-wiki export are text-identical. The page's stated source directory (raw/self/facebook/facebook-ihatedanfrank/) is not held in this repo's raw/ tree. The June-2026 Facebook export source node (src:facebook-export-2026-06-23) covers a different pull (generated 2026-06-23, retrievable per-file over HTTPS), so it is NOT cited: citing it would launder a different instrument behind these figures. Counts are preserved in prose per the relay-style convention (attributed_to, no measurement field). The page's date_range (2007-01-09 – 2022-09-05) matches the Sep-2022 export era."
importance    = 3
tags          = ["facebook", "interests", "taste", "tracking", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2007-01-09"
end   = "2022-09-05"
+++

## Notes

- The 'double-layer' observation — the export contains Facebook's
  commercial model of Dan alongside his self-presentation, downloaded as
  one object — is the page's framing of why the tracking files matter,
  and it is why the datum is kept whole rather than reduced to the taste
  arc.
- If the Sep-2022 Facebook export surfaces, every figure here (229–234,
  339, the dated like clusters) should be re-derived and this node's
  confidence raised or a discrepancy filed.

## Cross-references

- [`dat:0034`](0034-facebook-fetch-provenance-verified.md) — the Facebook
  fetch provenance, the channel's standing in this repository.
- [`dat:0035`](0035-facebook-fills-the-corpus-gap.md) — why the Facebook
  channel matters independently of the message corpus.
