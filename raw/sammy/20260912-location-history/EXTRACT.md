# EXTRACT.md — semantic location history batch

## Done at ingest
- 96 unique month JSONs (2014–2024) + 4 distinct semantic_location.db snapshots,
  all sha256-verified against the Drive pull. Provenance (every Drive file ID
  and parent tree) is in manifest.json.

## Still owed
- [ ] Year/month coverage audit: which months are missing per year, and whether
      any tree holds months no other tree has (beyond 2018_NOVEMBER, already noted).
- [ ] semantic_location.db schema inspection (read-only): does the database add
      records beyond the monthly JSONs?
- [ ] timelineObjects census per year: counts of placeVisit vs activitySegment.
- [ ] Cross-reference with Google Maps MyActivity.html (separate raw source,
      complementary not equivalent).
- [ ] Spot-check a second month end-to-end (only 2018_NOVEMBER parsed so far:
      368 timelineObjects).
