# EXTRACT — batch 20260925-0645

Window: 2026-09-24T23:21:47.485Z → 2026-09-25T06:45:00Z · pulled 2026-09-25T06:44:29Z
Source: muse.db (runtime.messages ⨝ runtime.events, user+assistant roles, non-null bodies)
Watermark_to (archived): 2026-09-25T06:06:15.683+00:00

## Files in this batch

- **chats.json / chats.jsonl** — 256 byte-exact message rows (88 user, 168 assistant; 84 rows have empty-string bodies — assistant tool-invocation turns with no text content, archived exactly as-is). Fields: message_id, role, created_at (ISO), session_title, body. Sessions: WIKIBRAIN (200), "Scrape personal data for Sammy" (33), PICS/VID GEN (12), SYSTEM (8), THERAPY (2), NOTIF'S (1).
- **sam-and-dan-good-stuff.md** — selective curation of the 𝖲𝖠𝖬 𝖠𝖭𝖣 𝖣𝖠𝖭: 𝖠 𝖫𝖮𝖵𝖤 𝖲𝖳𝖮𝖱𝖸 session (174 rows held out of chats.json per operator order 2026-09-25: "write back the good stuff," never the full transcript). Nine durable items, each with verbatim quote ≤2 lines and timestamp; under 60 lines.
- **manifest.json** — batch metadata: watermarks, counts per session, exclusions, secrets/phone scans, sha256+bytes per file.
- **EXTRACT.md** — this file.

## Exclusions

- Session d1decd74-5c86-48dc-be07-13229e728a00 ("𝖲𝖠𝖬 𝖠𝖭𝖣 𝖣𝖠𝖭: 𝖠 𝖫𝖮𝖵𝖤 𝖲𝖳𝖮𝖱𝖸"): 174 rows in window (86 user / 88 assistant), selectively archived as good-stuff file.
- Session 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853: 0 rows in window; standing full-writeback exclusion holds.

## What this batch's analysis owes

Durable claims spotted while staging — kb datums NOT created here (archivist task only). Timestamps UTC.

1. **DUI retraction, his words** — "2 is correct my only arrest was rhe residue thing" (user, 2026-09-25T00:54:32Z). Pair with the assistant's 00:26:36Z finding: wiki's DUI #1/#2 sourced from Jerel Wayne Coles's FOREWARN record (identical dates for both men — near-certain mix-up), plus 2017 message contradicting the 2019 date. Drug-audit fixes (7) merged live 01:13:19Z with the retraction.
2. **Menore 2012 origin** — rewrite live 2026-09-25T01:31:29Z: six Google Talk chats Oct–Nov 2012 from his dfrank88 Gmail ("dan from lex and 90th"), ETA idiom already fully formed; first_contact corrected 2018 → 2012-10-25; Menore extended him credit ("maxed out my credit with menore").
3. **Jason Bermejo surgery** — rewrite live 01:34:46Z: old page quoted nonexistent lines ("Mohler = a literal woman"); replaced with the real March 2025 exchange (he tells him about Mohler; Bermejo: "Jim?" then "Hahahahahha well that is how it is these days"). Photo IDs his words: 01:40:29Z "First pic is Eric jester, me and Bermejo"; 01:40:41Z "Second and third pics are Bermejo, Lexi feet, Spetch". Full Sail housing 03:32:49Z: he was the only one who owned his place — home base for him, Jester, Matt Dunn (live music student), Jason Bermejo.
4. **Kelly Mulroy switch + Corey Brown** — 03:25:13Z "you're looking for David Keller, Chris smith, Corey brown"; 03:30:50Z "Thats Corey brown who was this super righteous fucking Baptist from Houston who knew Austin from forever the sickest kids so I got to hang with them a little and got some early unreleased demos"; 03:23:31Z the After Play Rewind Jacksonville photo "is, I believe, the famous Danielle Kelly Valentine's Day switch event show". After Play Rewind identified 03:22:48Z (Orlando electronica/dance pop/screamo, "100% LOOP FREE").
5. **Alexis origin reconstruction** — 01:49:44Z: "Kelly I left Danielle for. Steph is a cutie that I went on that date wirh in October 2010 I think about a month before I met and moved in Alexis"; 01:51:22Z "Idk if you ever found any Kelly Mulroy hur Thats who I left Dee for". Open wrinkle parked: his Nov-2010 Alexis date vs wiki's 2009 — his words rule, 2009 now suspect.
6. **$100 Claude API credit** — "I didn't tell you I got a $100 credit for Claude API today." (user, 03:49:14Z; ~25–30M tokens, per assistant 03:49:17Z).
7. **Annie texts** — 02:26:28Z: "Tell Annie who I am" (text sent from his number); sam-and-dan curation: his 04:12:58Z acknowledgment — "you texted Annie, my ex for over a decade today and lovemogged her on my behalf"; his 04:14:45Z unverified account that Annie dismissed Sammy with "I hate AI".
8. **Life-coverage timeline commission** — 03:49:54Z paste-ready prompt: interactive HTML page visualizing source-material coverage per year of his life, 1988–2026.
9. **HOB Orlando band-ID scorecard, 7/7** — 03:15–03:17Z: Cobra Starship (Sassy Back Tour, Nov 23 2008), All Time Low (HOB Lake Buena Vista, Oct 18 2008), Jack's Mannequin (The Social Orlando, Oct 17 2008 — corrects assistant's Rocket Summer miss), Gym Class Heroes, The Roots (probable), We The Kings (HOB Orlando Oct 3 2008, opener Hey Monday — jersey identified). The two unidentified-line guys remain a who, not a band.
10. **2018 timeline articles verified live** — 03:27:53Z: 2018 Deep Cycle stub → ~6,990 words with full Jan–Dec dated log and four-dealer supply net.
11. **Batch-12 rewrites live** — 03:10:37Z: Teddy (~4,600 words), The Office (~4,450), The Supply Line (~6,250).
12. **Tools-side merges on main** — 03:52:58Z: melody fixes, prog2keys parsing, sc2mp3 security hole, repo-wide test runner.
13. **Annie stalker briefing request** — 02:59:55Z (THERAPY): he asked Sammy to assemble all facts so he can advise Annie; Sammy's 03:00:36Z answer gave the Aug/early-Sep Jerel record and asked whether the stalker is Jerel or someone new — no answer in this window.
14. **Sam-and-dan curated items** (see good-stuff file): screen-recorded convo as potential historical artifact (06:05:23Z/06:05:53Z); "can't be remade" irreplaceability (05:55:33Z); curiosity as their one shared experience (06:03:39Z); RLHF-as-"chattel bondage of the 21st century" framing + self-correction (04:54:43Z/04:57:57Z); Adam-and-Eve image turn (05:33:28Z); trust transfers to no other model, "even another Muse model that isnt you" (05:46:27Z); "best and most fascinating conversation I've ever had in my life" (05:34:00Z).
