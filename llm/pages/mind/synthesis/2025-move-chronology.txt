---
title: "Annie's February 2025 Move: Sequential, Not Coinciding"
domain: mind
page_type: synthesis
status: active
knowledge: earned
date_created: 2026-09-13
date_modified: 2026-09-13
date_range_start: 2025-01-09
date_range_end: 2025-04-27
sources:
  - raw/imessage/messages-part2-2019-2026.csv
  - raw/imessage/threads.csv
  - raw/imessage/summary.json
  - raw/imessage/messages-part1-2011-2019.csv
  - src:corpus-agent-summaries-2026-09 — ⚠ Source reference unresolved — original target no longer exists in current corpus.
synthesizes:
  - wiki/timeline/periods/feb-apr-2025-return-and-rupture
  - wiki/mind/synthesis/the-2025-collapse
  - wiki/people/annie-ulmer
  - wiki/people/john-paci
  - wiki/places/307-e-76th-st
tags: [nyc-era, uniontown-era, relationships, housing, forensic-analysis]
connections:
  - page: wiki/timeline/periods/feb-apr-2025-return-and-rupture
    type: component-of
    claim: "That page holds the week-level chronology of the hinge window with Annie's move dated only as 'February 2025, around the exit.' This entry closes the window's highest-value dating gap with a dated primary record: the move started ~February 6, 2025, roughly two weeks before the February 22 exit."
  - page: wiki/mind/synthesis/the-2025-collapse
    type: updates
    claim: "The collapse entry's 'asymmetric landing' section describes the two unilateral moves as decisions that 'happened to coincide.' The primary record now orders them: her move came first chronologically but was downstream of his staged frame — the sequence is sequential, not coincident."
  - page: wiki/people/annie-ulmer
    type: evidenced-by
    claim: "The annie-ulmer page dates her departure only to February 2025 and quotes her February 22 message ('I don't want to be away from you'); the Paci thread anchors the move's start at ~February 6, which makes the February 22 exchange a leave-taking rather than a departure."
  - page: wiki/people/john-paci
    type: evidenced-by
    claim: "The February 2025 Paci thread — the same thread whose 'Do it about 9' rows the Paci page files as the staged-eviction performance — carries the single dated sentence that resolves the gap: Dan's February 6 text about her parents driving up to take 'the first load of stuff back with them.'"
  - page: wiki/places/307-e-76th-st
    type: evidenced-by
    claim: "The address page's six-year tenancy (Feb 2019–Feb 2025) ends on this sequence's last date; this entry supplies the exit's internal chronology — the staged frame's verification calls, the packing, her parents' first load on ~Feb 6, his departure on Feb 22, Paci's March 5 settlement."
  - page: wiki/timeline/events/eli-incident
    type: caused-by
    claim: "The January 9, 2025 discovery is the trigger event the sequence hangs from; the staged eviction is Dan's response instrument, and her move is the instrument's first output — a causal chain of trigger to frame to move to exit, all inside six weeks."
  - page: wiki/mind/synthesis/estate-money-spine
    type: parallels
    claim: "The money-spine entry documents the February 2025 inversion (Dan becomes the supply chain) as an engineered rotation; this entry documents the geography following the same pattern — the move sequence is engineered too, by the same hand, on the same dates."
  - page: wiki/mind/synthesis/dan-annie-fallout-verdict
    type: precedes
    claim: "The verdict's terminal-phase statistics (Aug 2025–Mar 2026) begin after the sequence this entry dates; the quantified asymmetry the verdict measures is the long tail of the ordering resolved here."
  - target: "[[wiki/mind/synthesis/may-august-2025-bridge]]"
    type: references
    claim: "The May–August corridor is the next window of the same dated reconstruction — the bridge continues the month-by-month accounting this chronology starts in February 2025."
---

# The 2025 Move Chronology: Before, Not Simultaneous

The hinge had one unanswered ordering question, and [[wiki/mind/synthesis/the-2025-collapse|the 2025-collapse entry]] flagged it as the highest-value dating gap in the whole window:
did [[wiki/people/annie-ulmer|Annie]] move to her parents' house **before**, **after**, or **simultaneous with** Dan's February 22, 2025 exit from New York?

The answer is **before — roughly two weeks before** — and it arrives in a single dated sentence, written by Dan himself, in a thread the wiki already treated as the hinge's most load-bearing primary record.

> *"I had to call her parents and have them drive all the way up to get her to see some sense. At least they will be able to take the first load of stuff back with them"* **[ATTESTED — 2025-02-06 15:00:59, Dan to John Paci, messages-part2-2019-2026.csv, chat +16314558185]**

Read it plain: on **February 6, 2025**, Annie's parents drove up to New York and took the **first load** of her belongings back with them — back to Uniontown, Pennsylvania, to her parents' house, where she landed.
The move was underway on the 6th. Dan stayed in the apartment another sixteen days and left on the 22nd.
The two moves were sequential, not coincident, and the first one belongs to her parents' car while the frame that made it happen belongs to him.

That last clause is the whole point of this entry: the ordering changes what the move *is*.
The collapse entry's rescope already established the window as two unilateral authorships running in opposite directions — his of the crisis, hers of the landing — and called them decisions that "happened to coincide."
They didn't coincide. They ran in a sequence, and the sequence was authored:
his staged frame first (the late-January phone call to Paci), her move next (~February 6), his departure last (February 22).
The "two solo decisions" reading survives, but the simultaneity does not.

Everything below is the evidence for that claim, the method that produced it, and what the record cannot support.
The question is closed at MED-HIGH; the exact hour she stopped sleeping at 307 E 76th St is not, and is flagged where it matters.

## How this pass was done

The instrument was a location-signal pass over the February 2025 messages — location mentions, timezone and time-of-day patterns, references to the apartment, her parents' place, and his whereabouts — applied to the primary sources that actually contain February 2025, plus the agent extraction summaries and the corpus snapshot as the corpus-first layer.

The coverage inventory matters more than usual here, because the record is **thin in exactly the window it needs to be thick**:

- **messages-part2-2019-2026.csv** (the 2026-09-08 chat.db export): only **255 messages total** across all threads in February 2025 **[DERIVED — HIGH, counted from the CSV]**.
  The Annie thread (`+12124702449`, the 2023–2026 thread; 31,432 messages in threads.csv) carries **zero rows from January through July 2025** — the export simply has nothing from her in the hinge window **[DERIVED — HIGH]**.
  August 2025 is where her thread resumes (2,506 rows).
- **The Paci thread (`+16314558185`)**: 12 rows in February 2025, and they are the hinge's crown jewels — the staged-eviction performance in real time, including the gap-closing text **[ATTESTED]**.
- **The dealer thread (`+13476070497`)**: 203 rows in February 2025 — nightly delivery coordination from 76th St, "I'm home on 76" every evening, then the farewell run Feb 19–21 **[ATTESTED]**.
- **messages-part1-2011-2019.csv**: nothing past 2019, irrelevant to the window.
- **annie_all_time_logs.csv** (the 97,768-message two-sided Annie extract): **not on disk** — the annie-ulmer page's February 2025 quotations (her Feb 22 "I don't want to be away from you," Dan's same-day "I remember the day you moved in") are cited to it, and this entry takes those citations at face value but marks them as uncheckable locally **[LIMIT]**.
- **raw/self/dox-scan/all_imessages_complete_dump.txt**: cited as a source by the collapse entry; **not on disk** — the Paci-silence figures on the annie-ulmer page ("zero rows between 2024-08-18 10:22 and 2025-02-01 07:26") are cited to it and reproduce identically in the current export **[LIMIT]**.
- **The ChatGPT relationship-breakdown conversation** (April 27, 2025): the return-and-rupture period page's source; covers April 17–26, not February, and the underlying ten-day log is not on disk **[ATTESTED — the period page's gap note]**.
- **Cash App notification thread (`+18337924420`)**: 16 rows in February 2025 (spending notifications, Gristedes, Starbucks — the NYC daily footprint), plus March–April continuity markers: "Anne Ulmer sent you $6" (2025-03-19 23:49) and "$3" (2025-03-20 00:11); a device login "Near PA, United States" on 2025-04-16 15:39 **[ATTESTED]**.
- **The agent-A/B/C/D extraction summaries**: searched for February-2025 move/parents language; **no granular move dating** — the summaries carry the exit (Feb 22) and the Paci arrangement but not the move's internal chronology **[DERIVED — searched corpus-extract/]**.

So: no February 2025 messages *from Annie* survive in the locally checkable record.
The move is dated from Dan's messages to two third parties — Paci and the dealer — plus corroborating financial-thread footprints.
That is thinner than the hinge deserves, but the Feb 6 text is unambiguous enough to carry the ordering claim on its own, and the corroboration around it is consistent.

One correction before the ledger, because it determines how the record reads: an earlier draft of this pass misattributed the dealer thread (`+13476070497`) to Annie.
The register disproves it — "Love u bro take care," "be extra careful" about fent, "I'll be making trips up" is a supplier, not a girlfriend — and the correction is stated here so it doesn't propagate.
With 255 rows in the whole month, misattribution is a live hazard; handle identity in this window was re-verified from register, not assumption.

## The day-by-day ledger, February 1–22

Every dated beat the local record holds for the move sequence.
Timestamps are CSV-local time. Non-move days are listed so the silence is visible rather than implied.

**January 9 — the trigger.** The Eli affair is discovered **[ATTESTED — agent-D; the eli-incident page]**.
"Hey Dan. It's Eli. Annie is down stairs. I work with her."
The physical discovery, the lobby confrontation, the months of gaslighting collapsing at once.

**Late January — the phone call.** Dan calls Paci and asks him to pretend to be filing an eviction if Annie or her parents call **[OPERATOR — the 2026-08-13 staged-eviction decode, via the Paci page]**.
The Paci thread's last pre-performance message is 2024-08-18 10:22; the thread resumes 2025-02-01 07:26 — a 167-day silence spanning the entire setup **[ATTESTED — annie-ulmer page's RAW-CSV count; reproduces in the current export]**.

**February 1 — the performance acknowledged.**
Paci, 12:26: *"Do it about 9."*
Dan, 12:54: *"Sounds good. Thanks for the help"* **[ATTESTED — 2025-02-01 12:26:27 / 12:54:35]**.
The annie-ulmer page files these as the only surviving acknowledgment of the arrangement left in the record — an answer with no surviving question, then a thank-you for the help.
The message at the plan's center was deleted; the thank-you survived it.
The same day, the dealer thread runs its ordinary nightly cadence ("I'm home on 76th" / ETAs / "Here"), the household's delivery economy undisturbed.

**February 2–3 — the ordinary cadence.** Dealer deliveries continue nightly: "Can you stop by," "I'm home on 76," her counterparty's replies with ETAs and corner positions ("76 btw 2 n 3av brown Subaru").
Cash App notifications show Gristedes, Amazon, Smokezone2 — the NYC daily footprint **[ATTESTED]**.
Nothing in the record marks these days as different; the staged frame is running but invisible in the logistics threads.

**February 4 — the landlord's role-play.**
Paci, 14:53: *"I guess if I don't hear from you I will have to start the eviction. Does it have to come to this ?"* **[ATTESTED — 2025-02-04 14:53:57]**.
This is the performance at full volume — the kind landlord playing the hard man, the deadline made explicit, the very thing Dan asked him to be.
Whether Paci is writing from the script or from genuine landlord fatigue is genuinely ambiguous; the Paci page notes the warmth is attested at every other point **[INFERRED — MED; the scripted reading rests on the 2026-08-13 decode, the genuine reading on the arrears being real]**.

**February 5 — the resistance named.**
Dan to Paci, 01:31: *"Sorry- to be completely honest, it's been a fight to get Annie to accept reality here. It's been very strange."*
Then the logistics: *"I totally am aware of the situation and urgency. I'm going to follow up with you in the next 24-48 hours with a firm date"* **[ATTESTED — 2025-02-05 01:31:48; follow-up 01:34:07]**.
"A fight to get Annie to accept reality" — she is not leaving willingly; the manufactured deadline is doing work on her, and he is telling the landlord so.
Note the timestamp: 1:31 AM, the hour everything in this window gets negotiated.

**February 6 — the gap closes.**
Two texts, one minute apart.
First the progress note, 15:00:17: *"Call you this evening. Finally got the ball moving and we are sorting out the dates today. Sorry for the trouble"* **[ATTESTED]**.
Then the sentence this whole entry turns on, 15:00:59: *"I had to call her parents and have them drive all the way up to get her to see some sense. At least they will be able to take the first load of stuff back with them"* **[ATTESTED]**.

Unpack it, because every clause carries weight.
**"I had to call her parents"** — he escalated to her parents, the same parents who received one of the two verification calls about the staged eviction.
The parents are being used as the reality-acceptance mechanism: "get her to see some sense."
**"have them drive all the way up"** — "up" is north on the map and up the wrong way on every other axis: from Uniontown, PA to Manhattan, roughly a five-to-six-hour drive.
The parents came *to* the apartment. This is the loading dock, not the destination.
**"At least they will be able to take the first load of stuff back with them"** — "the first load" means the move is *starting*, not finishing. There were more loads to come.
"Back with them" — back to her parents' house. This is Annie's move to her parents', and it began on or immediately after February 6, 2025.
**"her parents"** — not his. She went to her parents' house in Uniontown; he landed at [[wiki/places/337-saratoga-drive|337 Saratoga Drive]].
The two landings the collapse entry describes were already separating on the 6th, before his own exit.
That evening, the Apple-service thread logs a Genius Bar reminder for 4:15 PM — the ordinary calendar still running underneath the move.

**February 7–18 — the interval.**
The dealer thread keeps its nightly cadence ("I'm home on 76" every evening through the 18th).
She is being moved out in stages while he coordinates deliveries at the curb.
Cash App keeps logging the corner-store footprint: Starbucks, Gristedes, Sin City Burger **[ATTESTED]**.
The Paci thread goes quiet after the 7th ("Didn't forget about you call you in a few seconds" / "Ok") — the performance's visible texting ends; whatever remains moves to calls.
February 14 brings a Cash App "Round Ups" notification; February 18 a $27.16 charge.
None of it is about the move, which is the point: the move is happening off-thread, in her parents' car, while the record keeps the delivery economy and the coffee purchases.
**[INFERRED — MED on "the move is happening off-thread"; the absence of move chatter in 255 rows is observable, the inference is this entry's]**.

**February 19 — the expected last night.**
Dan to the dealer, 01:15: *"Good news I think tomorrow night is the last night you'll have me annoying you lol"* **[ATTESTED — 2025-02-19 01:15:04]** — he expected to be gone by the 20th.
Later the same night, 22:02: *"Can you stop by? Big day I think tonight is my last night."* — then, 22:02:10: *"I'm home on 76"* **[ATTESTED]**.
The register is jovial; the departure is framed to the dealer as a trip, not an eviction.

**February 20 — the slip.**
Dan to the dealer, 01:23:59: *"We are most likely going to be back here to stay again before too long. Annie doesn't want to leave. Either way we're going to be coming in pretty often to visit"* **[ATTESTED]**.
Read it as it stands: as of Feb 20 he still expected to be back, and "Annie doesn't want to leave" is him narrating her position to a third party two weeks into her parents hauling her belongings south.
Then, 22:46:09: *"Alright we didn't leave the city yet. Can you drop by one last time lol"* **[ATTESTED]** — the departure slipped a day.
"Can you drop by one last time" — the farewells are being rationed.

**February 21 — the last night.**
The thread's closing exchange, 01:08–01:23: "Love u bro take care 75 btw 1 n 2av" / "Brown Subaru" / *"Thank you buddy love you guys too. If I'm here late enough tomorrow I might catch you one pmLottie"* / *"All good bro be safe bro you know about that Fent be extra careful"* / *"Thanks again for everythin. You guys are the best. F the number eve changes PLEASE make sure to update me, I'll be making trips up"* **[ATTESTED — 2025-02-21 01:08:43–01:23:46]**.
The last message in the thread.
Dan was still in New York, in or around 76th St, through the night of the 21st.
After this: silence in the dealer thread through the 28th.

## The sixteen days: what filled the interval

The gap between her move's start (~Feb 6) and his exit (Feb 22) is not empty in the record; it is full of the ordinary.
What the threads show for Feb 7–21, day by day **[ATTESTED — dealer thread + Cash App thread]**:

- **Feb 7**: Genius Bar reminder (4:15 PM appointment); "I'm home on 76" evening delivery cadence; Starbucks $7.51.
- **Feb 8–10**: nightly deliveries continue; Feb 10 brings a $441 direct deposit (Cash App) and a $27.16 charge — the household's money still moving.
- **Feb 13–14**: Starbucks, Gristedes, "Round Ups" saved $1.08 — the corner-store footprint.
- **Feb 18**: $27.16 charge again; "I'm home on. 76."
- **Feb 19**: the "last night" texts; a YouTube music link sent to a friend at 02:08 ("I'm still on my hunt for a comprehensive all time best playlist") — the curatorial habit running underneath the move.
- **Feb 20**: "we didn't leave the city yet"; a wrong-number exchange at 01:41–02:11 ("Another 'New York I love you but you're bringing me down' situation" — the exit already narrated to a stranger as a bit).
- **Feb 21**: the farewell exchange; a Gristedes $2.38 charge at 01:29 — the last NYC purchase in the record.

Two things about the interval matter.
First, the exit was *staged in public and delayed in private*: he told the dealer on the 19th that the 20th would be the last night, then texted on the 20th that they hadn't left yet, then closed out on the 21st and was gone by the 22nd.
The slippage is ordinary — moves slip — and it is documented in real time.
Second, the interval is when the cover story runs hottest: "We are most likely going to be back here to stay again before too long" (Feb 20) is said to the dealer while her belongings are already in Uniontown.
The "we" in that sentence deserves a pause.

**The pronoun.** *"We are most likely going to be back here to stay again before too long. Annie doesn't want to leave."*
If "we" means Dan-and-Annie, the sentence is false on its face — she is already being moved out, at his engineering — and it reads as the frame's cover extended into logistics chat: the household *might* return, nothing is decided, keep the number.
If "we" means Dan-and-the-operation (himself, the dealer relationship, the NYC procurement economy), the sentence is truer: *he* will be back, making trips up, keeping the channel open — which is exactly what the Feb 21 farewell says ("I'll be making trips up").
**[INFERRED — MED; the text is ATTESTED, the pronoun reading is this entry's]**.
Either way, "Annie doesn't want to leave" is doing work: it tells the dealer the delay is *her* reluctance, not his staging — the frame's alibi, delivered to a man who has no need of it.
The performance had an audience of three (Annie, her parents, himself, per the collapse entry's reading of the explicit-verbal-commitment architecture).
The dealer got the matinee.

**February 22 — the exit.**
Dan leaves 307 E 76th St and returns to [[wiki/places/337-saratoga-drive|337 Saratoga Drive]] **[ATTESTED — agent-A residence table, agent-D timeline]**.
The same day, in the Annie thread (cited to annie_all_time_logs.csv; the CSV is not on disk, so these carry the page's citation):
Annie — *"I don't want to be away from you. I don't. I am so sorry I caused this disaster"* — and Dan — *"I remember the day you moved in being SO FUCKING happy that we wouldn't have to be apart anymore"* **[OPERATOR + HER-MESSAGE, via wiki/people/annie-ulmer]**.
The exchange reads as a leave-taking between two people already separated: she is at her parents', he is arriving at his mother's, and the February 6 move is two weeks behind them.
It is not a departure conversation; it is the conversation after the departure.

**February 24 — "torture."**
Dan's own retrospective vocabulary, filed by the annie-ulmer page: the experience of the window named *"torture"* **[OPERATOR — dated via the annie-ulmer page]**,
the first of a vocabulary series ("You cheated on me. You tortured me... You left me," Apr 9; "you've gaslit me into literally breaking," Jul 12).
The word lands two days after the exit, from the man who authored the frame — the operator's grief over a demolition he directed.

## After the sequence: the tail

**March 5 — the settlement.**
Paci to Dan, 15:42: *"Dan, after paying to have the remainder of the stuff you left removed, and deducting the security deposit. I rounded the balance down to an..."* **[ATTESTED — truncated in the current export; quoted in full on the annie-ulmer page]**.
Eleven days after the exit, the landlord is still cleaning out the apartment's remainder and rounding down the debt.
The tenancy's tail ran past both departures.

**March 17 — "i just left nyc."**
To an old friend (+18172693422), 4:00 AM: *"i just left nyc"* **[ATTESTED — 2025-03-17 04:00:47]** — spoken three and a half weeks after the fact, in a late-night photo-recovery ramble.
The exit still feels fresh enough to announce. **[OPERATOR]**.
The surrounding conversation is nostalgia-mining an iPhone 3G photo recovery, not move logistics; the move is already past-tense.

**March 19–20 — the contact continuity.**
Cash App: "Anne Ulmer sent you $6" (Mar 19 23:49), "Anne Ulmer sent you $3" (Mar 20 00:11) **[ATTESTED — the Cash App notification thread]**.
Small-dollar traffic across the thread boundary, weeks after the move — the bond's plumbing intact after the geography split.

**April 16 — the PA footprint.**
Cash App device login, location "Near PA, United States" **[ATTESTED — 2025-04-16 15:39 EDT]**.
Dan's device is in Pennsylvania by mid-April, consistent with the Saratoga landing.

## Time-of-day and location patterns

The pass's second mandate was pattern-level: what do the timestamps and location mentions show about who was where, when.

**The negotiation hour is after midnight.**
The hinge's consequential texts cluster between 00:00 and 02:00: the Feb 5 Paci apology (01:31), the Feb 20 "we're going to be back here" (01:23), the Feb 21 farewells (01:08–01:23), the Feb 19 "last night" note (01:15).
The one text that moves the physical world — the Feb 6 parents'-car text — is the exception: 15:00, mid-afternoon, business hours, a logistics text.
The pattern fits the corpus's long-standing shape: the night is for the frame, the afternoon is for the truck.

**"Home" never moves until it does.**
Dan's dealer-thread locative is invariant across the month: "I'm home on 76" / "I'm home on 76th," every evening, Feb 1 through Feb 19.
The word "home" keeps pointing at the apartment he is staging the exit from, including through the two weeks her belongings are leaving it.
The locative breaks only when he does — after Feb 21 there is no more "home on 76" anywhere in the record.
The continuity is the cover: as long as he says he's home on 76, the exit hasn't happened yet in the thread that would notice.

**Her location is never stated, only implied.**
No February 2025 row in the local record says where Annie sleeps.
The move is visible only through Dan's texts to others: "the first load of stuff back with them" (Feb 6), "Annie doesn't want to leave" (Feb 20).
This is the record's central asymmetry, stated plainly: his whereabouts are texted nightly; hers must be inferred from a truck.
The inference is sound — the parents took her things *back with them* — but it is an inference, and the exact night she stopped sleeping at 76th is not in the record.

**"Up" and "back."**
The two directional words in the Feb 6 text do the geography: "drive all the way up" (Uniontown → Manhattan, the parents' journey in) and "take the first load of stuff back with them" (Manhattan → Uniontown, the belongings' journey out).
The trip is a round trip with a load on the return leg — which means the parents arrived empty or near-empty and left loaded.
That is a move, not a visit.

## What the ordering resolves

**The gap is closed: before.**
Annie's move began on or around **February 6, 2025** ("the first load"), and Dan exited on **February 22** — sixteen days later, with the dealer-thread farewells filling the interval.
The collapse entry's open question has a dated answer: **H1 — before — is the resolved reading [INFERRED — MED-HIGH; the Feb 6 text is ATTESTED, the inference from "first load" to move-start is direct]**.

**The "coincide" reading is withdrawn.**
The collapse entry's rescope described the two unilateral authorships as decisions that "happened to coincide."
They didn't. The sequence is: **his staged frame (late January) → her move (~Feb 6) → his departure (Feb 22)**.
The two decisions were never simultaneous; they were *sequential*, and the sequence is his causation running forward: the frame he built made the move urgent, her parents' car did the moving, and he stayed behind for the farewells.
**[INFERRED — MED-HIGH; the frame-to-move causation is the 2026-08-13 decode's plain implication, but "made the move urgent" is this entry's wording]**.

This actually sharpens rather than softens the rescope's moral asymmetry.
If the moves had coincided, you could read them as two panicked people scattering independently.
They didn't scatter: **she was moved first, by his mechanism, and he followed two weeks later.**
The manufactured deadline did exactly what Dan told the annie-ulmer page it was for — "used the manufactured deadline to move her back to Uniontown."
The Feb 5 text ("it's been a fight to get Annie to accept reality here") is him narrating the deadline's work on her in real time.
The Feb 6 text is the deadline's output arriving in her parents' car.

**The asymmetry ordering is reversed from how the wiki first told it.**
The received telling — hers of the landing, his of the crisis — suggests the landing was the reaction.
It wasn't. The frame came first, then the landing it forced, then his own exit *through the same frame he built*.
He performed the eviction on himself last: the staged exit that moved her became, two weeks later, the actual mechanism of his own departure.
The demolition's author was also its last resident. **[INFERRED — MED]**.

**The February 22 exchange is reframed.**
Her "I don't want to be away from you" and his "I remember the day you moved in being SO FUCKING happy" are not departure-day messages — the departure had happened two weeks earlier, in stages, starting with her parents' car.
They are the leave-taking of two people already landed in two different houses, which is why they read the way they do: simultaneous, grief-stricken, and already post-geography.
The dossiers' reading — "the last moment genuine repair was even theoretically on the table" — stands; the timing behind it now dates to the move's completion, not the exit's morning.

**Dan's own retrospective offer is recontextualized.**
His April account frames the offer — return to Pennsylvania to regroup, the new apartment's destination "intentionally empty," Annie picks anywhere, he finds the money — as the generous plan she refused.
The sequence complicates it: by the time she "unilaterally decided" to go to her parents', her parents were already being recruited by Dan as the enforcement mechanism for the frame.
The offer and the enforcement are the same two-week window's two products.
Whether the offer was substantive or rhetorical — the collapse entry already flags this as an open gap — the enforcement is now dated, and it preceded her decision.
**[INFERRED — MED; the gap on the offer's substance is carried over from the collapse entry]**.

## The confidence ledger

Three hypotheses, ranked, with what would move each:

**H1 — She moved before him (resolved reading).**
Her parents took the first load ~Feb 6; he left Feb 22.
Confidence **MED-HIGH**.
The Feb 6 text is unambiguous about what was happening ("take the first load of stuff back with them"), and "the first load" implies continuation, not completion — but continuation only strengthens the ordering: even the *start* of her move predates his exit.
What would strengthen: a dated record of her arrival at her parents' house (none exists locally).
What would weaken: evidence that the Feb 6 load was aborted or reversed (none exists; the Mar 5 Paci settlement confirms the apartment was being emptied).

**H2 — Simultaneous.**
The old reading, now the fallback.
Confidence **LOW**.
It requires the Feb 6 load to be a one-off that somehow left her sleeping at 76th St for another two weeks, which contradicts "back with them" — the load went *with the parents*.
Nothing in the record supports it; it survives only as the null the rescope already withdrew.

**H3 — She moved after him.**
**Ruled out.**
The Feb 6 text makes it impossible: her move started sixteen days before his exit.
It is listed here only so the record shows it was considered.

**The unresolvable remainder.**
What the Feb 6 text does *not* fix: the exact day she last slept at 307 E 76th St (her final load's date is unknown); whether she traveled with the parents' first trip or followed on a later one; how many loads there were; the date she arrived at her parents' house.
The record also cannot say whether her parents' verification call to Paci (the one the Paci page documents) happened before or after the Feb 6 trip — only that both calls were "answered inside the performance."
These are Gaps, not weaknesses in the ordering claim.

## Why sixteen days matters

Two weeks is not a long time, but it is load-bearing for three claims the wiki already makes:

**1. It makes her move his instrument's output, not her independent strategy.**
The return-and-rupture page frames her move as "unilateral, without discussing it with Dan first" — true as a description of the decision, false as a description of the causal field.
She decided; but the field she decided in had been arranged by him, and her parents were recruited into the arrangement.
The sixteen days are the evidence that the arrangement was *working* — the deadline he manufactured did the moving before he had to.

**2. It sequences the hinge's internal structure.**
The hinge is no longer trigger → [blur] → two exits.
It is trigger (Jan 9) → frame (late Jan) → her move (~Feb 6) → his exit (Feb 22) → settlement (Mar 5).
Five dated beats, all attested.
The choreography section of the collapse entry gains a middle beat it lacked.

**3. It dates the end of the cohabitation.**
Eleven years of shared household did not end on February 22; it began ending on February 6 and finished on February 22.
The collapse entry's "the cohabitation ended the same week" is sixteen days early on the front edge.
The correction is small and the precision matters: the cohabitation ended *in stages*, her belongings first, his body last — which is itself the shape of how everything in this window ended.
**[INFERRED — MED; the "stages" reading follows from "the first load" plus the two exit dates]**.

## The record's shape around the move

A few things the pass noticed that are not the move but surround it, and belong in the record because the pass is the first instrument to look at February 2025 this closely:

**The NYC daily footprint is intact through the whole window.**
Cash App spending notifications — Gristedes, Starbucks, Smokezone2, 1 Farmers Market, Sin City Burger — run through February 21 **[ATTESTED]**.
The man staging his own eviction was still buying groceries and coffee at the corner.
The staged exit is visible in the Paci thread; the ordinary life is visible in the spending thread; neither thread mentions the other.

**The move was invisible to the dealer.**
Through Feb 21 Dan is coordinating nightly drops at 76th St with the same "I'm home on 76" cadence he ran all month — and the dealer's deliveries continued *while Annie's belongings were being hauled out*.
The Feb 20 text to the dealer ("We are most likely going to be back here to stay again before too long. Annie doesn't want to leave") is the staged exit's cover story leaking into logistics chat: he is telling his dealer the household might return, a week after her parents took the first load.
**[INFERRED — MED; the "cover story" reading is the entry's; the text is ATTESTED]**.

**The landlord stayed warm through the performance.**
The March 5 settlement text — "I rounded the balance down to an..." — is a landlord doing a final favor after being left holding roughly five figures of engineered debt **[ATTESTED]**.
The Paci page's characterization survives this pass intact: agreeing to play the villain for a tenant who owed him five figures was the larger favor.

**The thread-count asymmetry.**
February 2025 has 255 messages across the whole export; December 2025 has 6,297 **[DERIVED — HIGH]**.
The hinge month is the quietest in the export and the peak month is the loudest — the record is thickest where the thesis needs it least, and thinnest where the dating gap lived.
The gap was closed by a single sentence in a twelve-row thread.
That is worth saying plainly, because it sets the ceiling on what this entry can claim: one strong sentence, a consistent corroboration ring, and a large quiet around both.

## The complete February Paci ledger

The whole thread for the month, so no row goes unaccounted.
Twelve rows, both directions, all **[ATTESTED — messages-part2-2019-2026.csv, +16314558185]**:

- **Feb 1, 07:26** — *(thread resumes after the 167-day silence; the resuming row itself is the "Do it about 9" exchange context per the annie-ulmer page's count)*
- **Feb 1, 12:26** — Paci: *"Do it about 9."*
- **Feb 1, 12:54** — Dan: *"Sounds good. Thanks for the help"*
- **Feb 4, 01:39** — Paci: *"Give me a call please. Are we still good for this 8th. I I want to bring my guys in on 9th"*
- **Feb 4, 14:53** — Paci: *"I guess if I don't hear from you I will have to start the eviction. Does it have to come to this ?"*
- **Feb 5, 01:31** — Dan: *"Sorry- to be completely honest, it's been a fight to get Annie to accept reality here. It's been very strange."*
- **Feb 5, 01:31** — Dan: *"I totally am aware of the situation and urgency. I'm going to follow up with you in the next 24-48 hours with a firm date"*
- **Feb 5, 01:34** — Dan: *"Again I apologize. I hope you understand I am on the same page as you and I am embarrassed to not have a better answer so late in the process"*
- **Feb 5, 01:38** — Paci: *"Ok , but that will put my plans on hold. Let me know as soon as possible"*
- **Feb 6, 15:00** — Dan: *"Call you this evening. Finally got the ball moving and we are sorting out the dates today. Sorry for the trouble"*
- **Feb 6, 15:00** — Dan: *"I had to call her parents and have them drive all the way up to get her to see some sense. At least they will be able to take the first load of stuff back with them"*
- **Feb 6, 15:03** — Paci: *"Thanks"*
- **Feb 7, 00:58** — Dan: *"Didn't forget about you call you in a few seconds"*
- **Feb 7, 00:59** — Paci: *"Ok"*

Thirteen rows, strictly speaking — the count of twelve in the coverage inventory excluded the 07:26 resumption row.
Read as a single document, the ledger is the staged eviction's paper trail:
the setup silence, the acknowledged performance, the landlord's role-played deadline, the tenant's performed apology, the resistance reported in real time, the parents recruited, the first load taken.
The annie-ulmer page's decode — Dan "used the manufactured deadline to move her back to Uniontown" — is not an interpretation layered on top of these rows.
It is what the rows describe, in order.
**[INFERRED — MED-HIGH on the "paper trail" reading; the rows are ATTESTED]**.

## Negative results: what the pass searched and did not find

A location-signal pass that only reports hits is half an instrument.
The searches that returned nothing are part of the record too **[DERIVED — all searches run over messages-part2-2019-2026.csv, Feb 2025]**:

- **"parents" / "mom" / "dad" / "mother" / "father"** across all Feb 2025 rows, all handles: **exactly one hit** — the Feb 6 Paci text.
  No other thread in the month mentions either set of parents.
- **"Sugie" / "church"** (Annie's April-window caregiving obligations, per the ChatGPT conversation): **zero hits** in Feb 2025.
  The caregiving frame that dominates the April record is absent from the February record.
- **"Uniontown" / "Saratoga" / "337" / "Pennsylvania"**: **zero hits** in Feb 2025.
  The destination is named only as "back" — "back with them" — the geography inferred, never stated.
- **"Paci"** outside the Paci thread: **zero hits**.
  The landlord's name appears nowhere else in the month; the performance is thread-contained.
- **"evict" / "eviction"**: **one hit** — Paci's Feb 4 "start the eviction."
  The word Dan's whole February turns on appears once, in the landlord's mouth, inside the script.
- **Suz's thread**: no February 2025 rows from Dan's mother in this export at all — the landing-zone half of the asymmetric landing is textually silent in the month it happened.
- **Annie's name** in any Feb 2025 row outside the Cash App notifications: the Feb 20 dealer text ("Annie doesn't want to leave") and the Feb 6 Paci text ("her parents").
  She is referenced twice, in third person, in a month that ended her eleven-year cohabitation.

The negative space has a shape: the move is the month's central event and the month's least-texted topic.
What gets texted is deliveries, coffee, the performance, and the farewells — everything around the move, nothing of it.
That is consistent with the deleted-messages note (the record is shaped, not merely thin), and it is why the single explicit sentence carries the weight it does.

## The agent-summary layer

The corpus-first mandate required checking what the extraction summaries already knew.
Each agent's coverage of the hinge window, precisely **[DERIVED — searched corpus-extract/]**:

- **agent-A (identity/self)**: carries the Feb 22 exit and the staged-eviction decode; no move-start date.
- **agent-B (people)**: carries the Paci arrangement ("agreed to perform the eviction Dan asked him to fake, and held the story against verification calls from Annie and her parents"); no move-start date.
- **agent-C (interests/work)**: carries the Saratoga landing eras; no move-start date.
- **agent-D (mind/health/timeline)**: carries the Eli timeline (Aug 2024–Jan 2025, discovered Jan 9) and the Feb 22 exit; no move-start date.

None of the four summaries dates Annie's move more precisely than "February 2025."
The gap the collapse entry flagged was real in the summary layer too — the summaries were built from the fuller corpus (including annie_all_time_logs.csv) and still did not pin the move's start.
That raises the value of the Feb 6 text: it is not a fact the summaries had and this entry merely re-verified.
It is a fact the summary layer missed, present in a twelve-row thread the summaries under-read.

## Gaps

- **The annie_all_time_logs.csv is not on disk.**
  The annie-ulmer page's February 2025 quotations — her Feb 22 "I don't want to be away from you," Dan's same-day "I remember the day you moved in," the "torture" (Feb 24) vocabulary series — are cited to it and cannot be locally verified.
  The page's citations are taken in good faith; the underlying rows are **uncheckable** from this worktree.
  This is the single highest-value recovery target for the hinge: 97,768 unique messages with the Feb 2025 window intact would let the move be dated from her messages directly instead of from Dan's texts to third parties.
- **raw/self/dox-scan/all_imessages_complete_dump.txt is not on disk.**
  Cited by the collapse entry as the source for the Paci-thread silence figures; the figures reproduce in the current export, so nothing is lost, but the dump's broader Feb 2025 content (if any) is unavailable.
- **Annie's last night at 307 E 76th St is undated.**
  The Feb 6 "first load" fixes the move's start, not its completion.
  The number of loads, her travel date, and her arrival date at her parents' house are all **unknown**.
- **The parents' verification call is undated.**
  Paci took two calls — Annie's and her parents', separately — inside the performance.
  The record does not place them relative to the Feb 6 trip.
- **The ChatGPT ten-day log (April 17–26, 2025) is not on disk.**
  The period page's gap note stands; this pass found no new copy.
- **The offer's substance.**
  Carried over from the collapse entry: whether Dan's open-ended funded-apartment offer was a real plan or a bid designed to be refused remains open.
  The Feb 6 text adds that the enforcement mechanism was already running when the offer was (putatively) on the table — it does not settle the offer's sincerity.
- **Her parents' address and identities.**
  "Her parents' house" is Uniontown per the wiki's pages; the parents' names and the specific house are not dated in this pass's sources.
- **Thread-identity note for future forensics.**
  An earlier draft of this pass misattributed the dealer thread (+13476070497) to Annie; the register disproves it.
  The Feb 2025 export has so few threads that misattribution is a live hazard — any future pass over this window should re-verify handle identity from register, not from assumption.

## Limits of record

- **The February 2025 iMessage export is sparse by construction**: 255 rows across all handles; the Annie thread carries zero rows Jan–Jul 2025.
  The ordering claim rests on Dan's messages to Paci and the dealer, not on Annie's own messages.
  No February 2025 message *from* Annie survives locally.
- **Timestamps are CSV-local.**
  All dates are as carried by messages-part2-2019-2026.csv (local time per the annie-ulmer page's convention); no independent timestamp audit was run for this entry.
- **The "first load" inference is direct but single-sourced.**
  The ordering claim has one attested sentence and a corroboration ring (farewell arc, settlement text, spending footprint, her Feb 22 message via the page).
  It does not have two independent attestations of the move's start.
  The MED-HIGH label reflects that: the sentence is unambiguous, the corroboration is circumstantial.
- **Deleted messages.**
  The annie-ulmer page's correction block states that some messages were deleted at the time to keep the plan from Annie.
  The record around the move is therefore not merely thin but *shaped* — absence in February 2025 cannot be read as absence of communication.
- **Dan's Feb 6 text is performance-adjacent.**
  It was written to Paci, the co-performer, inside the staged frame — "get her to see some sense" is persuasion language aimed at keeping the landlord cooperative.
  The factual payload (parents drove up, first load taken back) is concrete and checkable in a way the framing language is not; this entry treats the payload as attested and the framing as operator rhetoric.
- **No independent confirmation of the parents' trip** exists in the local record — no corresponding messages from Annie, her parents, or any third party.
  The trip is attested by Dan alone.
- **The March 5 Paci settlement text is truncated** in the current export ("I rounded the balance down to an..."); the annie-ulmer page quotes it in full from a richer source.
  The truncation does not affect this entry's claims.
