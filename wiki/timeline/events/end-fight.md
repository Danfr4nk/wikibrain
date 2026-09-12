---
domain: timeline
page_type: event
status: archived
date_created: 2026-06-23
date_modified: 2026-09-12
date_range_start: 2026-05-31
date_range_end: 2026-08-19
sources:
  - RAWLOGS raw/imessage/messages.csv (held corpus; 666-row window 2026-05-31→2026-06-01, handle +12124702449)
  - raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv (August coda)
  - kb/data/0125-end-fight-stale-attribution.md (attribution forensics)
  - wiki/people/annie-ulmer.md (2026-08-13 correction; four-movement chronology)
  - wiki/mind/synthesis/dan-annie-fallout-verdict.md (defamation + independent-validation findings)
  - wiki/people/tuquick-17248123683.md (June 15 defection verbatims)
  - raw/self/dox-md/LIFE_EVENTS_CALENDAR.md
related: ["wiki/people/annie-ulmer", "wiki/timeline/events/group-chat-closure", "wiki/timeline/periods/2025-collapse", "wiki/mind/concepts/attachment-model", "wiki/mind/concepts/conflict-architecture"]
tags: [addiction-recovery, trauma-bond]
connections:
  - page: wiki/mind/synthesis/dan-annie-fallout-verdict
    type: evidences
    claim: "This event corpus is the primary RAW-CSV backbone of the fallout verdict's defamation and independent-validation findings."
  - page: wiki/people/jerel-coles
    type: co-occurs
    claim: "He is the counterpart of the terminal group chat that closed the relationship on June 1, 2026."
---

# The End Fight (May 31 – June 1, 2026), with June epilogue and August coda

> **CORRECTED 2026-09-12 — the exit line is Dan's, not Annie's.** The previous version of this page attributed the June 1 closing line — *"Goodbye forever. This was not how it should have ended but. sic semper lupanis."* (2026-06-01 00:27:49 EDT) — to Annie, in two places. It is Dan's line, sent at the end of his own unbroken six-message outbound run (00:21:47–00:27:49). The full forensic proof is [dat:0125](kb/data/0125-end-fight-stale-attribution.md): the direction column in these exports is written from Dan's point of view, so "Sent" means Dan sent it, and an earlier pass had glossed the row as "Sent (Received by Dan)" after already deciding the line was Annie's. As Annie's line it read as her closing the door; as Dan's, it is Dan performing finality to himself, in the same breath as 601 other messages that night. The old attribution is **SUPERSEDED** and retained below only as a record of the error.

## What happened

On the night of May 30–31, 2026, Dan texted Annie. What followed — across roughly 26 hours and **666 iMessages, 601 from Dan and 65 from Annie** [RAW-CSV] — was the confrontation that confirmed, in real time and in front of witnesses, the two facts that broke the eleven-year relationship: the concealed relationship with Jerel "Tuquick" Coles, and an active defamation campaign against Dan inside Annie's peer network. The night ended at 00:27:49 EDT on June 1 with Dan's own sign-off. It held for 52 days — the longest severance in the relationship's history — and then failed like all the others.

This rewrite is built on the held corpus: the full 666-row window read in timestamp order, every load-bearing quote verified against its row. Timestamps below are America/New_York (EDT); the exports store UTC.

## I. The spam incident (May 30, 22:36 – May 31, 01:31)

The fight does not begin with an accusation. It begins with a machine malfunctioning.

At 22:36:15 on May 30, Dan's phone sends Annie two identical messages of mathematical gibberish — `λx.∀y:⟪x⊕y⟫→⨁(x⟲y)…` — and he spends the next half hour apologizing for them. He had, he explains at 22:58:07, "set up an AI agent that is supposed to lock me out from unblocking you and it just started" sending on its own [RAW-CSV]. Annie's reply at 22:50:40: "I dont know what you are saying. It's all in Chinese."

This is the night's first documented instance of the pattern that defines it: Dan building machinery to enforce a boundary, the machinery failing, and the failure becoming the event. He tells her he has cut her people from his socials and will "just use regular block so I don't bother you" (23:03:37). She answers "Don't.." (23:06:07), then "Dan." / "Don't." (23:07:30–32). He says goodbye at 23:20:06. Then, at 23:24:08, the first self-harm threat of the night: "and please remember that it may look like an accident, but it won't be and you caused it." [RAW-CSV] "Now I'm done. Goodbye." (23:24:17).

At 01:08 on May 31 the agent fires again — and this time it does not stop. Over the next five minutes it sends the same gibberish string **more than three hundred times** [DERIVED: 313 consecutive identical rows, 01:08:30–01:13:12, plus smaller bursts later; ~400 total across the window]. Annie, at 01:29:22: "Dan. Chinese." Dan, at 01:29:48: "Omg I am so sorry." At 01:31:37: "alright I'm gonna go hang myself. This is so fucking embarassing I'm sorry I didn't even see it was doing that." Annie: "Please stop Dan. Do not hurt yourself please" (01:33:00) [RAW-CSV].

Two things are worth holding onto from this opening. First, roughly three-fifths of Dan's 601 messages that night are this spam — his substantive output is closer to 200 messages against her 65, still a 3:1 ratio, but the headline 601 is inflated by a runaway script [DERIVED]. Second, Annie's longest and most human messages of the entire 666-row window are the ones where she is trying to keep him alive. Everything after this is shorter.

## II. The grief spiral (May 31, 01:31 – 06:46)

With the spam deleted ("alright I've deleted the whole thing that was sending the weird texts," 02:32:38), the next five hours are Dan grieving out loud at a woman who mostly answers in fragments. The accusations arrive mixed with eulogy. At 01:42:34: "you decided this was the moment to let your new boyfriend spend a few hours convincing me" — the first explicit naming of the boyfriend that night [RAW-CSV]. At 02:42:34, the specific wound: "I will never, ever forgive you or forget that you made fun of me to the person you were secretly fucking dating about my water being off or the dynamics of our relationship." At 02:50:38: "i loved you so fucking much that I broke myself believing that the best and closest friend I've ever had, the person I shared a life with for SO long could not possibly put me here."

Annie's contributions in this stretch: "No dan" (01:46:01). "Please do not do this.. you don't understand how absolutely horrible and disgusting and cruel i have felt. Guilt. Shame." (01:47:54). "You don't know how much I tried to stop it…" (03:10:36). That is nearly the whole of her side of the night's emotional ledger — guilt and shame asserted, nothing specified, no denial of the boyfriend, no defense [RAW-CSV].

Dan's eulogies keep coming between the accusations: "you haven't been my best friend for a long time, I need to stop acting like you are" (03:25:10); "you were my favorite part about myself. and i would never have stopped feeling like the luckiest peson in the world just to know you were there for me" (04:21:01); "and it doesn't matter how many times you cheated on me that i never knew about…you gave me all the love and attention I would ever need" (04:26:09). The man is simultaneously conducting the funeral and cross-examining the corpse.

By 06:35 he is down to logistics — "Okay I'm sorry that I am still trying to reach eggie or hold on to any hope that there even is an eggie anymore," the golf club she can pick up, the clippers left out (06:35:38–06:37:36) — and then, at 06:46:18, the question that will detonate the afternoon: "Does your fucking boyfriend know how many times you've lied and said there was noone else in your life?"

## III. The afternoon ultimatum (May 31, 13:38 – 15:12)

Seven quiet hours. Then Dan returns with a threat and a question. At 13:38:11: "That was a real question. Is there some reason why I can't or shouldn't make sure that it's not left ambiguous everything you've said and done in the last 5 months." Translation: he has the text logs, and he is asking whether she can give him one reason not to publish them. "you have said NOTHING. if you think that's what i deserve or is not going to be a cancer to me then tell me why i should keep your secrets now" (13:51:05). "i'm fucking done with this. by this time tomorrow i want to have ended this" (13:51:59). "you lied to me to manipullate me so you could keep using me to get stuff for over a year" (13:59:28). "you kept me thinking you still loved me like I still loved you for so long and through so much strife that it is going to be impossible to unwind in my brain" (14:00:16).

Annie's only substantive answer of the day, at 14:14:52: "Yeah and I had asked you about that constantly. But Dan. Bc you care about me? I know I have fucked up to the absolute extreme.. and I know your mom heard me screaming and crying in the background.. please if you care at all.." [RAW-CSV]. It is an appeal to the very attachment the rest of the night is trying to kill. An hour later, at 15:12:48, the other register entirely: "So I'm assuming you wouldn't get me anything today."

That pivot — from "please if you care at all" to procurement logistics in 58 minutes — is the night in miniature. And Dan, to his credit in the record, notices the structure even as he participates in it: "you might not need closure or momentum or any markers but I do" (19:27:57).

## IV. The procurement interlude (May 31, 17:37 – 22:05)

Here is the strangest passage in the 666 rows, and the one the old page never mentioned: in the middle of ending an eleven-year relationship, Dan spends four hours procuring drugs for Annie.

It starts at 17:50: "Can you go to atm" (Annie). "100?" (17:51:01). Dan negotiates with "bop," discusses CashApp, asks for her ATM access code (18:23:14), and at 18:37:17: "wow. awesome. / i should NOT fucking do this but i'm going to cover you." She sends the code; "Take our $100" (18:38:12). At 21:07:26: "Should be about 30 mins until is ee him. Then we can discuss pickup." At 21:40:59: "there is a blue folder in the mailbox. Take the entire folder" [RAW-CSV].

This is the mundane trigger the Tuquick account preserves: Dan dropped a blue folder of drugs Annie had requested into a mailbox, and the group-chat confrontation ignited around it. The procurement thread and the breakup thread are the same thread. He is ending her while supplying her — "If you're wondering why you got part of mine it's because I'm quite certain this is the last time you're going to ask me for something" (21:46:58) — and the line lands as both generosity and indictment, because it is both.

Woven through the logistics are the night's ugliest accusations and its most revealing quote. At 19:59:07, Dan reaches all the way back to the beginning: "you know, i told alexis the NEXT FUCKING DAY that i couldn't be with her because i wanted to have you in my life so badly." The Alexis-to-Annie handoff, stated by Dan himself as the founding sacrifice of the relationship — the thing he gave up to choose Annie, now cited as the measure of what she wasted. At 20:27:52 he quotes her, in quotation marks, describing Tuquick: "no you don't understand, he will not stop, he's like insane and i don't know how to make him go away" [RAW-CSV]. She is afraid of the man she left Dan for, and she is telling Dan so on the night Dan is ending it over that man.

At 20:06:59 and 20:08:19, the two lines the old page preserved: "i am not delusional enough to believe that you will ever want anything to do with me again but you know… it's probably time to cut your losses and look elsewhere as you decided to" — then "too bad so sad you just couldn't give me any decency and now there's a poison pill baked in" [RAW-CSV, Dan, 20:08:19 EDT]. The "poison pill" is the documentation threat from the afternoon, now named: whatever she does next, the record of what she did will be in it.

## V. The threatened woman (May 31, 22:05 – 23:58)

At 22:05:38 Annie confirms receipt of the folder. At 22:05:49: "Please listen to me rn ," — then 22:06:03: "I m being threatened." 22:07:27: "I have a broken finger." 22:08:57: "Just do me a favor and disregard anything I say After this." 22:10:43: "Please leave me alone" [RAW-CSV].

This is the passage the group-chat record clarifies: the broken-finger claim was debunked in-thread that same night by Tuquick himself ("Her finger isn't broken"), and the threat narrative was the cover story for the group chat's real content — the rape-narrative framing ("I have recorded videos of me obviously passed out still being touched," 23:54) and the "junkie"/"molester" framing aimed at Dan [see [wiki/timeline/events/group-chat-closure]; [wiki/people/tuquick-17248123683]]. In the dyad, Dan refuses the frame absolutely: "also stop lying about whoever the fuck this is. Youre not being threatened. You just can't stop lying" (00:26:32, in the closing run). "You're in danger? Call the police and your fucking parents stop being an absolute dope about this" (22:21:39).

The begging intensifies as the accusations do — "I'm begging you right now" (00:03:04), "Please for my own wellbeing right now Dan" (00:09:44) — and at 22:42:03 she draws her one boundary of the night: "Do NOT say one more stupid thing about him please." Dan: "Uh fuck you seriously" (22:43:11). At 23:58:41, three words in all caps, the closest Dan comes to matching her brevity: "I fucking / HATE YOU." She answers: "Don't do this to me" (23:58:56).

## VI. The closure cluster (June 1, 00:00 – 00:27)

Midnight. Dan: "Best friend / Yeah the fck right / Never again. I'm blocking you now" (00:00:43–00:00:58). "Don't speak to me / Seriously / Ever again" (00:05:00–03). "I am calling your parents tomorrow to clear a few things up / And then you are dead to me / Have a fucked cursed life" (00:08:00–15). "YOU JUST CALLED ME A FUCKING MOLESTER" (00:08:36) — the group chat's content bleeding into the dyad; the accusation was made in front of witnesses, and Dan is answering it here. "Blocking you / Have a terrible life" (00:09:31–33). Annie: "Understood" (00:10:06) [RAW-CSV].

Then eleven minutes of silence — her last word of the night, and nearly her last word of the relationship's first ending.

What follows, from 00:21:47 to 00:27:49, is Dan's unbroken six-message outbound run — no reply between any of them, the actual closing passage of the End Fight, every row his [RAW-CSV]:

- 00:21:47 — "I'm ashamed to have thought you were the person you clearly are not"
- 00:22:46 — "and you will never unring this bell. Have a nice life. Do not forget that you did this to me tonight on top of what you did to me over the last year"
- 00:24:59 — "You are not capable of love and I really did try to not make you look like the treacherous person you are."
- 00:25:59 — "I saved you from fucking DYING when you were shooting coke and you would sell me out to virtue signal your loyalty to someone else?"
- 00:26:32 — "Shame on you. Seriously. I hope your parents will be able to set you right / also stop lying about whoever the fuck this is. Youre not being threatened. You just can't stop lying"
- 00:27:49 — "Goodbye forever. This was not how it should have ended but. / sic semper lupanis."

Note the full "unring this bell" line carries the tail the old page omitted: *"on top of what you did to me over the last year"* — the night is the verdict, the year is the evidence. And note what the sign-off is: *sic semper lupanis* parodies *sic semper tyrannis*, and its noun (*lupa*, Latin slang for a prostitute) makes it an insult directed at its recipient — natural as Dan's parting shot, incoherent as a self-description, which is one of the ways the misattribution should have been caught [INFERENCE, per dat:0125]. Annie sent nothing after it. She has no exit line in this record. She stopped answering; he ended it.

## The night's machinery

Three machines run through the 666 rows, and Dan built or armed all of them.

The first is the AI agent — the runaway script that opens the night. Dan's own account, at 22:58:07 on May 30: he "set up an AI agent that is supposed to lock me out from unblocking you and it just started" sending [RAW-CSV]. Read that sentence again slowly. He built a machine whose job was to enforce a boundary he did not trust himself to hold, and the machine's first act was to violate the boundary four hundred times. The spam is not incidental to the fight; it is the fight's thesis in miniature. Every boundary in this relationship's record was performed rather than enacted — the block declarations that night ("Never again. I'm blocking you now," "Blocking you") sit inside a 26-hour, 601-message outbound run, which is to say the blocking was announced continuously while not happening. The agent is just the automated version: a boundary-enforcement device that produces the exact contact it was built to prevent. Annie's verdict on the machine age, at 01:29:22: "Dan. Chinese."

The second machine is the documentation threat — the "poison pill." Dan spends the afternoon of May 31 converting the archive into a weapon: "you know i have the text logs. that's basic" (14:01:09), "I will be making fucking SURE to document all of this, past events relevant here and protect myself from whatever you might do to me in the future" (00:24:59), and the "poison pill baked in" line itself (20:08:19) [RAW-CSV]. This is the wiki-brain impulse turned outward as coercion — the same archival drive that built this corpus, deployed mid-fight as "tell me why i should keep your secrets now" (13:51:05). It is worth stating plainly because the wiki is the mature form of this machine: the difference between the poison pill and the archive is only who it is aimed at.

The third machine is the camera. At 18:03:54, mid-procurement: "i ALMOST stopped autosaving this camera when you wrote me that note because I thought I actually was just being too much" [RAW-CSV]. He is surveilling his own house, saving the footage automatically, and apologizing for the surveillance while continuing it — "I have over 100 videos of you coming and going from my house JUST THIS YEAR ANNIE" (22:18:36). The camera, the logs, the agent: a man who processes reality by recording it, discovering in real time that the recording does not give him any control over what it records.

## The asymmetry, stated plainly

601 to 65. That is the night: roughly nine messages from Dan for every one from Annie, and three-fifths of his are a runaway script [DERIVED]. Her 65 break down into roughly four registers [DERIVED from the full row read]:

1. **Self-preservation fragments** — "Please…", "Don't..", "Dan.", "Don't.", "Stop", "STOP", "Do not reply", "Please leave me alone", "Understood." About half her total output.
2. **Begging** — "I am begging you right now" (22:14:20, 00:03:04), "Please for my own wellbeing right now Dan" (00:09:44), "Please do not do this" (01:47:54).
3. **The threat/broken-finger sequence** (22:05–22:10) — six messages, the only passage where she drives, and every claim in it was debunked in the parallel group chat the same night.
4. **Three substantive messages** — "You don't know how much I tried to stop it…" (03:10:36); the guilt-and-shame message (01:47:54); and the afternoon's "I know I have fucked up to the absolute extreme.. and I know your mom heard me screaming and crying in the background.. please if you care at all.." (14:14:52).

What is not in her 65: no denial of the boyfriend. No defense against the defamation evidence. No goodbye — not once in 666 rows. The old page's framing implied a mutual escalation; the rows show a monologue with a frightened audience. That does not make Dan's 601 messages proportionate or well — the self-harm threats (23:24:08, 01:31:37), the documentation blackmail (13:38–14:01), the "I HATE YOU" are all his, and they are all in the record — but it fixes the shape of what happened: one person ending a relationship at another person, for twenty-six hours, while she mostly asked him to stop [INFERENCE from complete row read].

## The June epilogue: what the rows show and what they don't

The 666-row window closes at 00:27:49 on June 1. What follows is documented across the wiki's other pages, with mixed provenance that this rewrite labels honestly:

- **June 5, 00:37:42** — Annie's only unprompted acknowledgment: "Daniel, i just want to say that i am extremely sorry." Received, corroborated in the deep export [RAW-CSV via [wiki/mind/synthesis/dan-annie-fallout-verdict]].
- **June 9–10** — two more unanswered approaches ("Are you okay" / "Please answer"; a Valic/Corebridge paperwork request), then silence [per [wiki/people/annie-ulmer]; unheld export].
- **June 15, 01:39 EDT** — the epilogue window in the held corpus contains exactly one row: Annie → Dan, full text "Daniel" [RAW-CSV, this rewrite's window-2 extraction]. One word, two weeks later, unanswered.
- **June 15, ~13:15** — the Tuquick defection. Fourteen days after savaging Dan in Annie's defense, Tuquick independently converged on Dan's decade-long read: "She's a compulsive liar with a drug addiction" (13:15:12), "you can have her back something is seriously wrong with her in her thirties still texting her ex" and "You can have her back ? She's no good 🤣 trauma bond to the cuck" [corroborated verbatim across [wiki/people/tuquick-17248123683], the verdict page, and annie-ulmer.md; primary rows in the unheld `imessage_export_7248123683_20260624.csv`].
- **The AI model and the Spotify crate** — the old page's claim that Dan fine-tuned an AI model on the fight logs and shared it with Annie and Tuquick along with a custom Spotify crate, prompting the defection exchange, rests on the page's unheld sources (the June 24 export and the NotebookLM dramatization, flagged plausible-not-confirmed on the Tuquick page) [OPERATOR/unheld — not verified against a held row in this rewrite]. The defection quotes themselves are stable across three corrected pages; the crate-and-model framing around them is not.

June 1 → July 23 was zero outbound from Dan: 52 days, the longest severance in the relationship's recorded history, against a background of 127 declared exits and 110 re-engagements in 48 hours [per [wiki/timeline/events/group-chat-closure], [wiki/people/annie-ulmer]].

## The coda: it did not hold

The June 1 closure must not be presented as the end of the relationship. It was the end of the relationship's first ending. What followed, in brief [per [wiki/people/annie-ulmer]; August rows verified in `aug-sep-2026-imessage-export.csv` by this rewrite]:

- **July 23** — Annie emails about Milo (fireworks weekend); Dan answers ("I should not have responded to that email"). 624 messages across four days, ending July 26 at 05:04 with "whatever goodbye annie."
- **July 26 – Aug 2** — the re-entanglement: 1,880 messages and six in-person meetings in eight days.
- **Aug 10–16** — "the good week": 1,136 messages; she sleeps over Aug 10; Dan gets the BFS job back Aug 11.
- **Aug 16–19** — the terminal end: 1,199 messages across 67 hours. Coles calls Dan from Annie's phone on the night of the 16th (Dan records 15:27 of audio); a 97-message thread from Coles's own number on the 17th including Dan's home address sent unprompted and a conditional threat naming Dan's mother; six SOS texts from Annie on the night of the 18th (duress code "Betty. Milo."). On **Aug 19, 05:46–06:04**, the goodbye ritual the June page never got: a mutual exchange of "Goodbye" ending with Annie's "Goodbye Daniel" at 06:04 [RAW-CSV, this rewrite's read of the aug-sep export] — the exit line she never gave him in June, delivered seventy-nine days late.

Even that did not fully hold: the same export shows contact resuming August 27 and running daily through September 7 (283 messages on Sep 6). The record's honest shape is not "June 1 ended it" but "June 1 was the first of two terminal performances, and the second one also leaked" [INFERENCE].

## Why this night matters to the wiki

Three findings rest on this corpus, and the attribution correction touches each differently:

1. **The defamation finding is untouched.** The Nov 2025 and Feb 2026 written denials, the peer-network rape-narrative and "junkie" framing, the June 1 group-chat confirmation — none of it depends on who said the sign-off [per the verdict page].
2. **The "zero explicit severance signals from Annie" finding is stronger, not weaker.** The single apparent counterexample — a closing "Goodbye forever" from her — was Dan's. She has no exit line anywhere in the 666 rows, and her June contribution to the closure is the June 5 apology [per annie-ulmer.md's 08-13 correction].
3. **"Cannot self-close" is downgraded to "implements suspend, not delete."** Dan closed it himself on June 1 and held it 52 days — the longest hold on record — then answered an email about the dog. The August coda is the same architecture at higher stakes: ~25 declared goodbyes across Aug 17–19, a declared-but-unexecuted block, contact resumed within eight days [per the verdict's 08-13 RE-CHECKED block and this rewrite's export read].

A fourth point belongs to this page specifically, because it is the only page that has now read the 666 rows end to end: **the breakup and the procurement are the same event.** Dan ends Annie while supplying her — the ATM code, the CashApp, the blue folder in the mailbox, "i'm going to cover you" — and the group-chat confrontation ignites around the folder drop. Any account of the night that treats the drugs as context and the breakup as text has it backwards; in the rows, they are one thread, alternating message by message. The relationship's operating system is visible here without abstraction: love as logistics, logistics as love, and when the logistics stop being sustainable the love has no other channel to run on. The verdict calls this the procurement-structured love instrument; the night of May 31 is the primary exhibit, and it took a full row-by-row read to see that the exhibit was hiding inside the "fight" the whole time [INFERENCE].

The night also documents, almost incidentally, the relationship's operating system: the procurement thread inside the breakup thread (he ends her while supplying her), the runaway AI agent (he builds machinery to enforce boundaries; the machinery becomes the violation), and the 9:1 ratio itself — the clearest single-window illustration of the diagnosis-to-behavior gap the verdict names. He knew, correctly, that he was wronged; he responded with 601 messages, and it cost him the decade anyway.

## Data record

- **Primary:** 666 rows, 2026-05-30 22:36 → 2026-06-01 00:27 EDT, handle +12124702449: **601 sent by Dan, 65 by Annie** [RAW-CSV: RAWLOGS `raw/imessage/messages.csv`, window extracted for this rewrite]. ~400 of Dan's 601 are identical rows from the runaway AI agent (01:08:30–01:13:12 May 31); substantive Dan output ≈ 200 messages [DERIVED].
- **Closure cluster:** the final six rows (00:21:47–00:27:49 Jun 1) are an unbroken Dan outbound run; Annie's last message of the window is "Understood" at 00:10:06 [RAW-CSV].
- **Epilogue window** (Jun 15–16): exactly one row in the held corpus — Annie → Dan, "Daniel," Jun 15 01:39 EDT [RAW-CSV].
- **August coda:** `augs-sep-2026-imessage-export.csv`, +12124702449 thread: 447 msgs Aug 17, 523 Aug 18, 229 Aug 19; the 05:46–06:04 Aug 19 goodbye ritual ending "Goodbye Daniel" [RAW-CSV, this rewrite].
- **Unheld sources cited via corroborating pages:** `THE END FIGHT.csv` (591 rows), `imessage_export_7248123683_20260624.csv` (2,993 rows; June 15–16 defection exchange), the NotebookLM end-fight dramatization (flagged plausible-not-confirmed). The June 15 defection verbatims are stable across three independently corrected pages; the AI-model/Spotify-crate framing is not row-verified here.
- **SUPERSEDED (retained as error record):** the pre-2026-09-12 version of this page stated in two places that "Goodbye forever. This was not how it should have ended but. sic semper lupanis." (00:27:49) was Annie's closing line. It is Dan's. Companion page [wiki/timeline/events/group-chat-closure] still carries the stale attribution at line 102 (dated 2026-07-26, predates the 08-13 correction) — flagged for the same fix; out of this rewrite's scope.
