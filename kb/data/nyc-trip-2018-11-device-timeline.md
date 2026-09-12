+++
id         = "dat:nyc-trip-2018-11-device-timeline"
layer      = 1
type       = "datum"
title      = "Nov 6-7 2018 NYC trip reconstructed from Semantic Timeline (device record)"
claim      = "Semantic Location History for 2018-11 establishes Dan's NYC drive began 4:44 PM EST Nov 6 (not noon), with arrival at the Shoreham Hotel 11:14 PM, and a Nov 7 Manhattan itinerary ending at The Book of Mormon 6:46-8:20 PM."
cites      = ["src:semantic-location-history-2026-09-12"]
confidence = "high"
importance = 5
tags       = ["location-history", "nyc", "2018", "timeline", "device-record"]
created    = "2026-09-12"

[when]
start  = "2018-11-06"
end    = "2018-11-07"
+++

Parsed from 2018_NOVEMBER.json (368 timelineObjects; source timestamps UTC, converted below to EST = UTC-5). placeVisit/activitySegment are Google's inferences with confidence grades — carried as device record, not ground truth.

NOV 6, 2018 (all EST):
- 12:17-4:20 AM: home. Contains the ~3:18 AM 'Lex' coordination screenshot and the 4:22 AM night-vision bedroom footage.
- 4:20-4:41 AM: passenger-vehicle segment, ~6.5 km.
- 4:41-9:15 AM: home.
- 9:15-9:38 AM: passenger-vehicle segment, ~7.8 km.
- 9:38 AM-2:58 PM: home. Contains the 10:19-10:26 AM footage (Dan says his 'dreams came true').
- 2:59-3:14 PM: Hatfield Elementary School inferred visit/drive-by.
- 3:15-3:53 PM: home.
- 3:53-4:31 PM: vehicle segment, ~26.5 km.
- 4:31-4:44 PM: Sheetz #183.
- 4:44 PM: NYC-bound drive begins (activitySegment origin).
- 7:21-7:48 PM: PA Turnpike Cumberland Valley Service Plaza.
- 11:14 PM: arrival Shoreham Hotel (placeVisit).
- 11:23:42 PM: Manhattan photo EXIF time — 9 minutes after inferred hotel arrival. iPhone 8 Plus; GPS 40d45'44.82''N, 73d58'36.42''W (Midtown Manhattan); GPS date/time 2018-11-07 04:23 UTC consistent. Dan's testimony: picture taken upon arrival.

NOV 7, 2018 (all EST):
- Shoreham Hotel through 1:22 PM.
- Walk to Metropolitan Museum of Art, inferred visit 2:02-2:09 PM.
- Two Little Red Hens, 2:33-2:45 PM (low confidence).
- Subway to Regal Union Square Stadium 14, inferred 2:59-3:38 PM (low confidence).
- Return to Shoreham, 3:56-6:38 PM.
- The Book of Mormon, 6:46-8:20 PM (high-confidence inferred visit).

INDEPENDENT CORROBORATION (Google Maps My Activity, checked 2026-09-12 — separate source, complementary):
- Nov 6, 1:39 PM: Leith-Hatfield map view; 1:40 PM: Shoreham Hotel search/directions; 2:55-2:56 PM: New York/West Virginia map views; 6:23 PM: directions to Shoreham from current location (mid-drive).
- Nov 7: Manhattan/Chipotle/adidas Flagship searches and directions.

INFERENCE vs RECORD: segment boundaries, place names, and confidence grades are Google's inference over sensor data. The raw sensor timeline (timestamps, coordinates, distances) is the device record; 'Sheetz #183' / 'Shoreham Hotel' labels are inference, carried with their confidence.
