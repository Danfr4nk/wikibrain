# Spotify — REUP gap-fill pull

- **Source:** Spotify, via `/opt/hatch/bin/spotify-api` (connector doc `/opt/hatch/connectors/spotify/CONNECTOR.md`); status check at pull start: `connected`.
- **Pull date:** 2026-11-11 (America/New_York)
- **Account:** the user's single connected Spotify account (profile snapshot = the library responses below; the CLI exposes no separate profile endpoint).
- **Mode:** read-only. No playback started, nothing saved/unsaved, no playlists created or modified.
- **Baseline:** nothing for Spotify was held in wikibrain `raw/` at HEAD f347cc88 — everything here is new.

## Coverage

| Item | Available | Pulled |
|---|---|---|
| Library, unfiltered (paginated, 6 pages) | 103 items | 103 (`library-all.json`) |
| Playlists (library filter) | 68 entries | 68 (`library-playlists.json`); 67 carry playlist URIs and **all 67 are expanded** with full track lists in `playlists/<id>.json` (the 68th entry is the Liked Songs collection pseudo-item, expanded separately) |
| Playlist tracks (sum over 67 playlists) | — | **7,778 tracks** |
| Liked Songs | 5,209 (per the collection's own item count) | **5,209 tracks, complete**, 209 pages (`liked-songs.json`) |
| Saved albums | 9 | 9 (`library-albums.json`); all 9 expanded with track lists in `albums/<id>.json` (35 album tracks total) |
| Followed/saved artists | 24 | 24 (`library-artists.json`) |
| Saved episodes | 3 | 3 (`library-episodes.json`) |
| Saved podcasts/shows | 3 | 3 (`library-podcasts.json`, `library-shows.json`, `library-podcasts_and_shows.json`) |
| Saved audiobooks | 0 | 0 (`library-audiobooks.json`) |
| Save to Spotify shows (user-created) | 0 shows | `save-to-spotify-shows.json` (`{"shows": []}`) |

## Not exposed by the connector

- Recently played history, top tracks/artists, and a standalone user-profile object are **not exposed** by `spotify-api` (no such commands; documented unavailable list checked). Nothing was invented to fill these slots.

## Incidents

- The first pass's crude substring rate-limit detector false-tripped on words inside track/page payloads and stopped playlist expansion at 15. A resume pass with a structured-error-only detector completed everything above; its stats record `resume_rate_limited: false`. No true 429 was received from Spotify at any point.
- All files are the CLI's JSON responses exactly as returned (playlist/album files wrap the paginated `experience` responses with the library metadata entry and a track count).

## Files

91 files, ~5.1 MB. Layout: `library-*.json` (paginated library snapshots), `playlists/` (67), `albums/` (9), `liked-songs.json`, `liked-songs-first-response.json`, `save-to-spotify-shows.json`, `status.json`, `pull-stats.json`.
