---
domain: timeline
page_type: period
knowledge: mixed
status: active
date_created: 2026-07-20
date_modified: 2026-09-27
date_range_start: 2025-02-01
date_range_end: 2025-04-27
sources:
  - raw/self/chatgpt-export/relationship-breakdown-summary-2025-04-27.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - "raw/chatgpt/iHateDanFRANK-2025-08-05/iHateDanFRANK 5 AUG 2025/conversations.json.from-cli-json.txt — conversation 680dc72f-b274-8011-8819-48a800b74a99, 'Relationship Breakdown Summary' (recovered; resolves the entry above)"
  - raw/imessage/messages-part2-2019-2026.csv
  - kb/data/0681-feb-apr-2025-return-and-rupture-sources.md
  - kb/data/0539-john-paci-corroboration-replicated.md
  - kb/data/0164-annie-record-coverage-and-progress.md
related:
  - wiki/timeline/periods/2025-collapse
  - wiki/mind/synthesis/the-2025-collapse
  - wiki/mind/synthesis/2025-move-chronology
  - wiki/mind/synthesis/may-august-2025-bridge
  - wiki/mind/synthesis/dan-annie-fallout-verdict
  - wiki/people/annie-ulmer
  - wiki/people/john-paci
  - wiki/people/suzanne-frank
  - wiki/places/307-e-76th-st
  - wiki/places/337-saratoga-drive
  - wiki/timeline/events/eli-incident
  - wiki/self/concepts/chatgpt
tags: [relationships, financial-stress, addiction-recovery, housing, infidelity, ai-collaboration, forensic-analysis]
connections:
  - page: wiki/timeline/periods/2025-collapse
    type: component-of
    claim: "This page fills the specific Feb-April 2025 window that the broader 2025-collapse period names only in aggregate — the immediate weeks after the NYC apartment exit, before the terminal-phase record (Aug 2025 onward) that dan-annie-fallout-verdict.md quantifies."
  - page: wiki/people/suzanne-frank
    type: evidences
    claim: "Suz's 2024 personal bankruptcy and the resulting listing of the childhood home (337 Saratoga Drive) in spring 2025 is a full year earlier than the sale process suzanne-frank.md's housing-arc section otherwise documents starting from — the same house went through at least two listing attempts across 2025-2026. [REVISED 2026-09-27: the recovered source dates the listing to 'this Thursday' as written in the early hours of Sunday 2025-04-27, i.e. Thursday 2025-05-01, consistent with the $615,000 May 2025 list price on 337-saratoga-drive; the bankruptcy is the October 2024 Chapter 13 (case 24-22285-GLT) that suzanne-frank.md now documents from the docket.]"
  - page: wiki/mind/synthesis/dan-annie-fallout-verdict
    type: evidences
    claim: "Dan's own self-authored, contemporaneous timeline of this week (built with ChatGPT as an impartial-arbiter exercise) is independent corroborating material for the verdict's pursuit/withdrawal framing, predating the terminal-phase raw-CSV recount by four months. [CORRECTED 2026-09-27: the recovered conversation shows the day-by-day timeline and the manipulation analysis were printouts from earlier LLM sessions that Dan pasted in, and the pursuit/withdrawal frame was ChatGPT's first-pass reading; what Dan authored is three context notes. It corroborates that the loop was named in April 2025, by machines working from his upload, not that he derived it by hand.]"
  - page: wiki/people/annie-ulmer
    type: evidences
    claim: "Annie's unilateral move to her parents' house rather than accepting Dan's open-ended offer to fund an apartment anywhere she chose is the first concrete post-affair decision-making asymmetry in the corpus, predating the terminal-phase asymmetry by roughly eight months."
  - page: wiki/people/annie-ulmer
    type: evidenced-by
    claim: "Rescoped 2026-08-13: the choice Annie made here was made inside a frame Dan had built without telling her — a landlord eviction he arranged and Paci agreed to perform — so the window records two asymmetries, her unilateral move to her parents' house over his offer to fund an apartment anywhere she chose, and his unilateral authorship of the crisis that made the choice urgent."
  - page: wiki/people/john-paci
    type: caused-by
    claim: "Paci's agreed performance of a landlord eviction is the proximate mechanism of the February 2025 exit from New York — what that period page called a 'forced exit' was his half of an arrangement Dan initiated by phone in January."
---

# Feb–April 2025: Return and Rupture

Between February 1 and April 27, 2025, Dan Frank left New York, lost the apartment he had shared with [[wiki/people/annie-ulmer|Annie]] for six years, moved back into his mother's house in Uniontown alone, and watched that house get prepared for sale. He and Annie stayed a couple, at a distance. In the small hours of Sunday, April 27, he uploaded ten days of their messages to [[wiki/self/concepts/chatgpt|ChatGPT]] and asked it to tell him the truth about the relationship, including his own part in it.

This page is the week-level record of those twelve weeks. It sits between the January 9 discovery ([[wiki/timeline/events/eli-incident]]) and the four-month corridor that follows ([[wiki/mind/synthesis/may-august-2025-bridge]]). The year-level record is [[wiki/timeline/periods/2025-collapse]], and the day-by-day reconstruction of the move is [[wiki/mind/synthesis/2025-move-chronology]]. This page does not repeat their February ledgers. It carries what they point here for: the April week, the April 27 conversation, and the complete logs for the window.

> **GAP CLOSED [2026-09-27] — source recovered.** Every earlier version of this page, and every page that inherited from it, cited `raw/self/chatgpt-export/relationship-breakdown-summary-2025-04-27.md` and marked it unresolved ([`dat:0681`](../../../kb/data/0681-feb-apr-2025-return-and-rupture-sources.md): "The ChatGPT source is absent from this repository's raw/ tree"). The full conversation is now in the repository. It sits inside the August 5, 2025 ChatGPT account export at `raw/chatgpt/iHateDanFRANK-2025-08-05/iHateDanFRANK 5 AUG 2025/conversations.json.from-cli-json.txt`, as conversation `680dc72f-b274-8011-8819-48a800b74a99`, titled *"Relationship Breakdown Summary"*. It was created 2025-04-27 05:57 UTC (01:57 EDT) and last updated 2025-05-11 18:03 UTC. Reading it corrects four things the wiki had said:
>
> 1. **The day-by-day April 17–25 timeline was not written by Dan, and was not written by ChatGPT in this conversation.** Dan pasted it at 02:50 EDT. At 02:51 he pasted a second document, the "Eggie" manipulation analysis, and then wrote: *"these are the LLM printouts from the research i've already done on this."* Both came from earlier LLM sessions run over the same uploaded log. What Dan wrote himself is three context notes (02:17, 02:33, 02:48 EDT).
> 2. **The "pursuit/withdrawal" frame was ChatGPT's first reading, not Dan's.** It appears in the model's opening analysis at 02:17 EDT, before Dan had added any context.
> 3. **"The house is being listed this Thursday"** was written on Sunday, April 27, so it means **Thursday, May 1, 2025**, not "a Thursday in late April".
> 4. **The conversation does not end on April 27.** Dan came back on **May 5** (three drafts of a status summary for friends) and **May 11** (a question about terminology). [[wiki/mind/synthesis/may-august-2025-bridge]] says May 2025 "opens with no recorded follow-up" to the session. The record shows a follow-up in the same thread, eight days later.
>
> The conversation does **not** mention John Paci, the staged eviction, or any January phone call. [`dat:0681`](../../../kb/data/0681-feb-apr-2025-return-and-rupture-sources.md) named it as the single source for that arrangement. That was wrong. The arrangement rests on the 2026-08-13 operator decode and on the Paci thread itself ([[wiki/people/john-paci]]; [`dat:0539`](../../../kb/data/0539-john-paci-corroboration-replicated.md)), and nothing in the April 27 conversation bears on it either way.

## February: the frame, the first load, the exit

In late January, two or three weeks after the discovery, Dan phoned landlord [[wiki/people/john-paci|John Paci]] and asked him to play the part of a landlord filing an eviction if Annie or her parents called. Both did, and both were told the eviction was real ([[wiki/timeline/periods/2025-collapse]], "CORRECTED [2026-09-21]"; [[wiki/people/john-paci]]). The vacancy was also real. Roughly $10,000 in arrears was outstanding, and Paci had his own plans riding on the date ([[wiki/timeline/periods/2025-collapse]]). The accurate description, as the collapse page puts it, is a performed eviction inside a real one.

The held Paci thread (`+1631…8185`) has thirteen rows between February 1 and March 5, and every one is printed in the complete log below. Two of Dan's lines in it belong in any account of what the landing was.

On **February 4 at 20:31 ET**, answering Paci's *"I guess if I don't hear from you I will have to start the eviction. Does it have to come to this ?"*, Dan wrote: *"Sorry- to be completely honest, it's been a fight to get Annie to accept reality here. It's been very strange."*

On **February 6 at 10:00 ET**, he wrote: *"I had to call her parents and have them drive all the way up to get her to see some sense. At least they will be able to take the first load of stuff back with them."* (`raw/imessage/messages-part2-2019-2026.csv`; timestamps converted from UTC. [`dat:0539`](../../../kb/data/0539-john-paci-corroboration-replicated.md) replicates the Paci rows verbatim.)

[[wiki/mind/synthesis/2025-move-chronology]] uses the February 6 line to settle the order of events: Annie's move to her parents' began about two weeks before Dan left, not at the same time. The page adds one thing here. Eleven weeks later Dan told ChatGPT that Annie decided *"without telling me, [to] make the call that she would be moving back in with her parents."* In February, writing to the landlord, Dan described himself as the one who called her parents to come and collect her. The two statements can be squared: calling her parents to take a load of belongings back is not the same as agreeing she would live there. But they come from the same man about the same decision, and they point in different directions. Both were written for an audience. The February line went to a landlord inside an arrangement Dan had scripted. The April line went to a model he had asked to be impartial. The record does not settle which is closer to the truth.

Dan left New York on **February 22**. That ended the six-year tenancy at [[wiki/places/307-e-76th-st|307 E 76th St]] and eleven years of living together, and he landed at [[wiki/places/337-saratoga-drive|337 Saratoga Drive]] alone ([[wiki/timeline/periods/2025-collapse]], February). His own account of the money at the time: *"no savings and already 10k in the hole at the apartment we were in right then (AND a 7k bill to ConEd)"*, which made staying *"so far outside the scope of what was possible"* that it was *"not really even worth the time it would take to 'debate'"* (April 27 conversation, 02:33 EDT). The February 4 message, where Annie asks *"Please can you call coned"* because the electricity was off, is logged on [[wiki/timeline/periods/2025-collapse]].

## March: the landing

On **March 5 at 10:42 ET**, Paci closed the account: *"Dan, after paying to have the remainder of the stuff you left removed, and deducting the security deposit. I rounded the balance down to an even $10,000.00 . Let me know when you can begin to pay it"* (complete log, Paci row 13). Dan did not reply in the held record.

The rest of March is thin in every held source. The collapse page records three dated items. On **March 6** there is *"I had my doctor move my prescription here"*, quoted by the prior wiki and not verifiable in the corpus (`dat:0028`, via [[wiki/timeline/periods/2025-collapse]]). On **March 21** there is *"After working for Libby this must be easy."* On **March 31**, Annie: *"I got the letter I was denied unemployment"*, which is the only record of her applying ([[wiki/timeline/periods/2025-collapse]], March). The held iMessage corpus has no Dan–Annie messages anywhere in the window (see the complete log and the coverage limits below). March in the held corpus is 167 messages across twenty-one threads. The busiest day is March 16, and 73 of its 89 messages are a single catch-up with an old friend ([[wiki/people/jason-bermejo]], thread `+1817…3422`).

## The week of April 17–25

What the wiki knows about this week comes from one document: the day-by-day timeline Dan pasted into the April 27 conversation. It was produced by an earlier LLM session from a ten-day message log (April 17–26) that Dan had uploaded. The log is not in the repository, so none of its quotations can be checked against a message row. They are second-hand quotations of an unheld source, filtered through a model. What follows is what the timeline says, day by day, with its own framing kept apart from the events it reports.

- **Thursday, April 17.** A drug purchase is planned. A supplier referred to as "The supplier" comes up. Annie wants delivery before a visitor, Claire, arrives around 4 PM. Dan coordinates it with his mother. Annie is impatient (*"Hurry please"*) and Dan is stretched (*"please fucking give me a minute"*). After the pickup, Annie goes to see cousins. Dan: *"sucks to be me! i only took 4 lines because i assumed i would see you..."* That evening Annie asks whether Dan's mother took some of the supply, noting that $125 had been sent, and then apologises for asking.
- **Friday, April 18.** Dan: *"I don't believe you"*, *"humiliated"*, cut out, treated like *"shit"*. Annie sends a long apology with her caregiving schedule and asks whether the dog, Betty, can stay over on Saturday. Dan replies *"ok thanks"* and *"yes she can"*.
- **Saturday, April 19.** An argument over a $70 purchase that Dan and his mother think is a bad deal. Annie: *"I'm going fucking crazy here"*, *"dealing with an old women's piss"*. Betty barks through the night.
- **Sunday, April 20 (Easter).** A calm day, mostly about the dogs. Annie stops by between Easter lunch and returning to "Sugie's". In the evening "John" is at the house with *"line or two"*, but leaves before Annie arrives. She forgets a Cadbury egg she had for Dan.
- **Monday, April 21.** The "Pope Killer" joke after Annie comes back from church. Her check hasn't cleared, which puts the planned purchase at risk, so she gets money from her mother. An argument about an old car wreck. In the afternoon, a game with a Pixar-style AI photo filter goes wrong: Annie says she is uncomfortable with Dan uploading her pictures, and he keeps sharing images, including one with a third woman in it.
- **Tuesday, April 22.** Dan's *"worst day"*. He talks about deep depression and loneliness and tells Annie to leave him alone. She says *"I love you"* and goes. Later that day she comes back and stays until 10 PM, and Dan acknowledges that this is the time he asked for.
- **Wednesday, April 23.** Annie describes feeling like a *"servant"* (the timeline's wording). An uncle visits. Annie leaves the next purchase for Dan to arrange. The cat is sick.
- **Thursday, April 24.** Milo, the other dog, is behaving anxiously, and Dan denies that there are drugs on the floor. At midday Dan says the problem is not chores but the relationship itself: it is broken, and Annie *"smashed"* it. Annie offers to *"split it"*. In the evening Annie is late because she is cutting hair. Dan: *"who i spent 10 years with"*. Annie says she is not giving up.
- **Friday, April 25.** A spider story and some banter, then Dan brings up again how little he sees her, dismisses his own complaint, and ends the conversation: *"okay i have to go."*

The recurring figures are real in the wider corpus. "Sugie", the older woman Annie cared for, appears 134 times in the held messages for 2025. "The supplier" appears in September 2025 in a runner role ([`dat:0681`](../../../kb/data/0681-feb-apr-2025-return-and-rupture-sources.md)). Betty and Milo are the couple's dogs. A "Claire" is counted 257 times on [[wiki/people/alice]] ([`dat:0109`](../../../kb/data/0109-alice-counts-range-from-dump-not-held-here.md)), but nothing establishes that she is the April 17 visitor. Otherwise the week survives only as a machine's summary of a log that is not in the repository.

The timeline sums the week up as *"intense cyclical conflict"*: periods of logistics or calm, then *"eruptions of conflict stemming from Dan's feelings of neglect, mistrust, and unmet needs"*, against *"Annie's significant external stressors (caregiving)"*. That is the pasted model's conclusion, not an observation.

## April 27: what Dan asked, and what he said

The conversation opened at **01:57 EDT** with the upload. The assistant asked what Dan wanted done with it and offered to summarise it, analyse patterns, or *"Prepare it for something (e.g., therapy, court, personal project)"*. Dan's first message, at **02:17**, set the terms that every later description of the session quotes:

> *"what i want to do first is have you analyze it, developing a sense of the true nature of the relationship based on your own independent assessment. You should be an exclusively impartial arbiter of the fact patterns and any other relevant observations you might make - do not favor me or be reluctant to include anything that might help me better understand what, if any role I play in the downward spiral."*

The same message says what he was testing. He asked whether he was *"misreading or grossly exaggerating the significance of"* Annie's cues, which he read as *"her disconnecting while continuing to ask me for 'chances' which reliably and predictably are fantasy and their only use is to terminate an unpleasant conversation where i am demanding she either do what she is saying she will (spend an evening together or like, more than 2 hours) or let me move on because i am unhappy with the current conditions."*

The model's first answer was balanced. It named a *"trust tax"*, a mismatch between Dan's wish for long stretches together and Annie's caregiving limits, a *"tug-of-war: pursuit (Dan), withdrawal (Annie)"*, and volatility on Dan's side (*"shut your dumb fucking mouth"*). It assigned him a role: *"His lingering suspicion and uncompromising demands exacerbate Annie's stress."*

Dan then wrote the three notes that are the only first-person account of this window anywhere in the wiki.

**02:33, on the affair and the move.** *"Annie's cheating was absolutely a devastating thing to process and the lack of resolution on her part is a bothersome detail...but I would not have (and did not) treat that as a terminal blow to myability to love her and find the relationship to be way above net positive as an element of my life. I wasn't always responive to her and am kinda boring and weird but - i really still loved being together and didn't see any of this coming."* Then the plan: go home to regroup, get an apartment with money from family *"in a month or two"*, and *"I left the destination of that apartment intentionally empty as i would be willing to just let her pick absolutely anywhere on earth she would want to go ... i would make it my mission to come up with the funds needed to accomplish it (...somehow.)"* And the move, in his words: *"she decides to, without telling me, make the call that she would be moving back in with her parents. She would insist that this didn't represent any change in our status as a couple."* The export cuts the message off mid-sentence after *"I told her I would be out of my depth if she couldn"*.

**02:48, on tone, time and the house.** On the insults: *"it was the kind of playful joke that we had been doing for almost 10 years,"* and the same goes for the time *"i accused her of the pope's death"*. On time together, what he asked for was small: *"once every month or two spend an evening with me or like come over a few extra hours a week. Like...anything. Write me a note? Something. Anything."* He named Annie's three reasons as *"'family obligations', 'working on myself to be better for us' or 'my parents are strict'."* And the house:

> *"after coming back and having to move to my moms house alone...that puts me in the middle of a house that is about to be listed for sale because my mom declared bankruptcy last year and needs to sell it. It is being listed this Thursday. It is the house i grew up in and was the single 'safe' place that existed in my life that i could crash land in. And I did. Annie is with her parents in a comfortable and stable, secure situation with her parents - a situation i do not begrudge her for or wish her to have to suffer like I do. The reason I mention it is that I find myself suddenly in this ultra precarious and totally unsure place and it feels a lot like one day in january i get a text to my phone and from that moment forward - everything in my life has been just getting progressively worse and more"*

The export ends that message there, mid-sentence. The "text to my phone" is January 9, when six messages from Eli arrived on Annie's phone ([[wiki/timeline/events/eli-incident]]).

With each note the model's reading moved further toward Dan. By 02:48 it described him as *"Generous, committed"* and Annie as *"Overloaded by obligations and exerting autonomy by defaulting to family"*. At 02:50 and 02:51 Dan pasted the earlier printouts. The second of them (the one that calls Annie "Eggie") had already escalated to *"DARVO"*, *"Intermittent Reinforcement"*, *"calculated impression management"*, and a finding that the problem was *"primarily one-sided"*.

Then, at **02:51**, Dan asked: *"is there anything in these that is objectionable or incorrect that you can identify"*. ChatGPT's answer is the most important thing in the conversation, and no earlier page reported it. It held back on the printouts. Labelling every vague timeline as *"strategic vagueness"* *"assumes deliberate intent to manipulate"*. DARVO *"is a very specific pattern ... Identifying it in everyday 'I'm stressed' responses may stretch the concept"*. Calling her visits *"intermittent reinforcement"* *"risks pathologizing normal relationship ebb and flow"*. Phrases like *"consciously chooses"* *"ascribe a level of self-awareness and malice that we can't fully verify from texts alone."* Its recommendation was to *"reframe statements about motive into descriptions of impact."*

The record does not show Dan replying to that on April 27. The next messages are eight days later.

**May 5, 18:48 EDT.** Dan asked for *"a brief bullet point list of what the state of my relationship is for a friend who i haven't talked to in years"*, then a longer one covering *"just about the last 5 months"*, then one for *"one of my best friends who stayed with us a month before the affair but doesn't know anything since jan"*. All three drafts use the one-sided framing (*"it feels like I'm the only one actually in the relationship"*), not the model's April 27 caution. The record does not show whether any draft was sent, or to whom.

**May 11, 14:02 EDT.** *"is there a term for someone who conceals their emotional abuse to the outside world AND nominally to the abused victim themself by always exhibiting a calm and polite demeanor while making decisions that are contrary to your interest and playing rhetorical games to avoid being called out"*. The model answered with *"Covert Emotional Abuse"*, *"Communal Narcissist"*, *"Soft gaslighting"* and *"Weaponized calm"*. That is the conversation's last turn.

So the session did three things in order. It gave a balanced reading. It moved toward Dan as he added context. When he asked it directly, it flagged the over-reach in the printouts. Two weeks later Dan was using the vocabulary the flag had warned against. The wiki's earlier description, *"Dan generating the analysis himself"* ([[wiki/mind/synthesis/dan-annie-fallout-verdict]], connection), is inaccurate. Dan generated the question, the context and the persistence. The analysis came from the machines, and the one piece of it he did not keep was the correction.

## The house and the money

Dan's statement that his mother *"declared bankruptcy last year"* was the page's biggest single-source claim. It is now documented from the docket. [[wiki/people/suzanne-frank|Suzanne Frank]] filed a **Chapter 13 voluntary petition in October 2024, case 24-22285-GLT**, with about $157,000 in liabilities ([[wiki/people/suzanne-frank]], filings table and 2024-10 row). 337 Saratoga was the only unencumbered asset in that case. The sale was a bankruptcy remedy, not a choice ([[wiki/places/337-saratoga-drive]]). The listing Dan said was coming *"this Thursday"*, which is May 1, 2025, matches the house's first list price of **$615,000 in May 2025**. Price cuts followed through the $500–550k range to a **$465,000** sale in June 2026 ([[wiki/places/337-saratoga-drive]]). The earlier version of this page said the house "went through at least two separate listing attempts". The better reading is one liquidation carried out over thirteen months, with the price falling along the way ([[wiki/places/337-saratoga-drive]]).

The money trail for the window is on [[wiki/timeline/periods/2025-collapse]] and [[wiki/mind/synthesis/four-financial-inversions]]: about $10,000 owed to Paci, the $7,000 ConEd bill, Annie's unemployment denied on March 31, and the Libby income gone since October 2024. The April week adds small, concrete figures that the timeline reports and that cannot be checked: $125 sent on April 17, a disputed $70 purchase on April 19, and a check that had not cleared on April 21.

## Reading it against the rest of the record

The previous version of this page argued that the April week showed the terminal-phase pattern (the 74/17/11 verbal-abuse triad and the volume asymmetry that [[wiki/mind/synthesis/dan-annie-fallout-verdict]] counts from August 2025 on) already *"fully present ... four months earlier"*, and so *"stable across the whole terminal window"*. With the source recovered, that claim has to be narrowed:

- **What holds.** By April 27, 2025, the pursuit/withdrawal loop had been named, repeatedly, by at least three LLM passes over a real ten-day log. Dan's own notes describe the same structure in his own words: small repeated asks, promises that do not arrive, and Annie's reasons.
- **What does not hold.** Nothing here is counted. There are no counts from April to compare with the terminal-phase counts, because the underlying log is not in the repository and the held iMessage corpus has **no** Dan–Annie rows between January and July 2025 (complete log below; [[wiki/mind/synthesis/2025-move-chronology]], coverage inventory). "Stable across the whole window" is an inference from the shape of a model's summary, not a measurement.
- **What is new.** The April 27 session is the first recorded case of Dan using an LLM as a judge over his own relationship, and the model's objection is part of that record. [[wiki/mind/synthesis/the-2025-collapse]] calls the session *"the prototype"* of the wiki's later forensics. That holds, with one addition: the prototype contained its own warning about over-attributing intent.

## Complete logs

### 1. Held message volume, February 1 – April 27, 2025

Every day in the window, every thread, from `raw/imessage/messages-part2-2019-2026.csv`, converted to Eastern time (EST to March 8, EDT from March 9). The window holds **489 messages, 247 of them sent by Dan**: February 248 (13 threads), March 167 (21 threads), April 1–27 74 (14 threads). **None is between Dan and Annie.** Her 2023–2026 thread has zero held rows from January through July 2025 and resumes in August 2025 with 2,506 rows.

| Week of (Mon) | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|---|
| Jan 27 | — | — | — | — | — | Feb 1: 15 | Feb 2: 8 |
| Feb 3 | 15 | 14 | 7 | 16 | 11 | 9 | 9 |
| Feb 10 | 11 | 14 | 7 | 12 | 14 | 11 | 4 |
| Feb 17 | 6 | 22 | 22 | 15 | 1 | 1 (Feb 22, the exit) | 4 |
| Feb 24 | 0 | 0 | 0 | 0 | 0 | Mar 1: 0 | Mar 2: 0 |
| Mar 3 | 0 | 0 | 1 (Mar 5, Paci's $10,000 letter) | 3 | 7 | 6 | 3 |
| Mar 10 | 4 | 0 | 0 | 2 | 0 | 1 | 89 (Mar 16) |
| Mar 17 | 27 | 14 | 2 | 0 | 2 | 3 | 0 |
| Mar 24 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mar 31 | 2 | 1 | 0 | 1 | 1 | 2 | 3 |
| Apr 7 | 0 | 2 | 0 | 2 | 0 | 0 | 3 |
| Apr 14 | 0 | 5 | 4 | 1 (Apr 17) | 0 | 31 (Apr 19) | 1 (Apr 20, Easter) |
| Apr 21 | 3 | 6 | 0 | 2 | 6 | 0 | Apr 27: 0 |

The nine days from February 24 to March 4 have **zero** held messages in any thread. That is the first nine days after the exit. Under [`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md) this is absence of evidence in a database the policy calls complete with respect to `chat.db` but not with respect to history. It is not evidence that nothing happened. The other held channels (Cash App notifications, a March 19–20 pair of small transfers from Annie) are logged on [[wiki/mind/synthesis/2025-move-chronology]].

### 2. The Paci thread, complete for the window

`+1631…8185`, `raw/imessage/messages-part2-2019-2026.csv`, Eastern time. **P** = Paci, **D** = Dan. [`dat:0539`](../../../kb/data/0539-john-paci-corroboration-replicated.md) also records a Dan message of 2025-02-19 20:23 EST (*"We are most likely going to be back here to stay again before too long. Annie doesn't want to leave"*). It is not on this handle's rows in the held CSV, so it is listed separately and not merged in.

| # | ET | From | Text |
|---|---|---|---|
| 1 | 2025-02-01 07:26 | P | Do it about 9 |
| 2 | 2025-02-01 07:54 | D | Sounds good. Thanks for the help |
| 3 | 2025-02-03 20:39 | P | Give me a call please. Are we still good for this 8th. I I want to bring my guys in on 9th |
| 4 | 2025-02-04 09:53 | P | I guess if I don't hear from you I will have to start the eviction. Does it have to come to this ? |
| 5 | 2025-02-04 20:31 | D | Sorry- to be completely honest, it's been a fight to get Annie to accept reality here. It's been very strange. I totally am aware of the situation and urgency. I'm going to follow up with you in the … (truncated in export) |
| 6 | 2025-02-04 20:34 | D | Again I apologize. I hope you understand I am on the same page as you and I am embarrassed to not have a better answer so late in the process |
| 7 | 2025-02-04 20:38 | P | Ok , but that will put my plans on hold. Let me know as soon as possible |
| 8 | 2025-02-06 10:00 | D | Call you this evening. Finally got the ball moving and we are sorting out the dates today. Sorry for the trouble |
| 9 | 2025-02-06 10:00 | D | I had to call her parents and have them drive all the way up to get her to see some sense. At least they will be able to take the first load of stuff back with them |
| 10 | 2025-02-06 10:03 | P | Thanks |
| 11 | 2025-02-06 19:58 | D | Didn't forget about you call you in a few seconds |
| 12 | 2025-02-06 19:59 | P | Ok |
| 13 | 2025-03-05 10:42 | P | Dan, after paying to have the remainder of the stuff you left removed, and deducting the security deposit. I rounded the balance down to an even $10,000.00 . Let me know when you can begin to pay it |

**Time-zone note.** The stored values are UTC (row 1 is 12:26:27, row 4 is 14:53:57). The ET column subtracts five hours, per [`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md), "Timestamps" (CORRECTED 2026-09-19), and matches [`dat:0539`](../../../kb/data/0539-john-paci-corroboration-replicated.md) and [[wiki/timeline/periods/2025-collapse]] to the minute. [[wiki/mind/synthesis/2025-move-chronology]] prints the same rows as 12:26 and 14:53 and labels them "CSV-local". Those are the raw UTC values. Under the settled rule they are not local times, and any reader lining the two pages up should expect a five-hour offset.

### 3. The April 27 conversation, turn by turn

Conversation `680dc72f-b274-8011-8819-48a800b74a99`. EDT, converted from the export's UTC epoch timestamps. Every turn in the active branch is listed.

| # | EDT | Speaker | Content |
|---|---|---|---|
| 1 | 2025-04-27 01:57 | system tool | Upload loaded ("All the files uploaded by the user have been fully loaded") |
| 2 | 01:57 | ChatGPT | Identifies a ten-day log, April 17–26, and asks what to do with it |
| 3 | 02:17 | Dan | The "exclusively impartial arbiter" request; asks whether he is misreading her cues |
| 4 | 02:17 | ChatGPT | Six-theme analysis: trust tax, availability mismatch, pursuit/withdrawal, volatility, power, hope/disillusionment; assigns roles to both |
| 5 | 02:33 | Dan | Context note 1: the affair not terminal; the shot clock; $10k plus $7k ConEd; the open-destination apartment offer; her move to her parents' (cut off in export) |
| 6 | 02:33 | ChatGPT | Revised assessment: his "continued commitment", her "unilateral decision" |
| 7 | 02:48 | Dan | Context note 2: the jokes; what he asked for; her three reasons; the house to be listed "this Thursday"; "one day in january" (cut off in export) |
| 8 | 02:48 | ChatGPT | Further revision: "Generous, committed" against "Overloaded by obligations"; suggests tone flags and a negotiation |
| 9 | 02:50 | Dan | Pastes the prior-LLM day-by-day timeline, April 17–25 |
| 10 | 02:50 | ChatGPT | Offers four next steps |
| 11 | 02:50 | Dan | Pastes the prior-LLM "Eggie" analysis (DARVO, intermittent reinforcement, "primarily one-sided") |
| 12 | 02:50 | ChatGPT | Offers scripts and plans |
| 13 | 02:51 | Dan | "these are the LLM printouts from the research i've already done on this" |
| 14 | 02:51 | ChatGPT | Offers four formats |
| 15 | 02:51 | Dan | "is there anything in these that is objectionable or incorrect that you can identify" |
| 16 | 02:51 | ChatGPT | Five objections: intent over-attributed, DARVO too broad, intermittent reinforcement pathologizes, certainty about motive, humor misread; "reframe statements about motive into descriptions of impact" |
| 17 | 2025-05-05 18:48 | Dan | Status summary for a friend not seen in years |
| 18 | 18:48 | ChatGPT | Seven bullets |
| 19 | 18:48 | Dan | "make it longer and just about the last 5 months" |
| 20 | 18:48 | ChatGPT | Eleven bullets |
| 21 | 18:49 | Dan | Version for "one of my best friends who stayed with us a month before the affair" |
| 22 | 18:49 | ChatGPT | Eleven bullets |
| 23 | 2025-05-11 14:02 | Dan | Asks for a term for concealed emotional abuse behind a calm, polite manner |
| 24 | 14:02 | ChatGPT | Covert emotional abuse; communal narcissist; passive gaslighting; "weaponized calm" |

The May 5 and May 11 rows are EDT, converted from the export's 22:48 and 18:02 UTC.

## Coverage limits

- **The ten-day log is not held.** Every April 17–26 quotation on this page is second-hand, repeated by an LLM. None is checked against a message row. The timeline's own disclaimer applies: *"Identifying who is 'creating problems' is subjective."*
- **The prior LLM sessions are not held.** Which model produced the timeline and the "Eggie" analysis, and when, is not recorded. The "Eggie" text refers to *"my initial summary"*, so it was the later turn of a longer session that is not in the repository.
- **Two of Dan's messages are cut off in the export** (turns 5 and 7). What he wrote after *"if she couldn"* and after *"progressively worse and more"* is lost.
- **No Dan–Annie messages are held for the window.** The February 22 exchange quoted on [[wiki/timeline/periods/2025-collapse]] and [[wiki/people/annie-ulmer]] comes from the unheld two-sided Annie extract ([`dat:0164`](../../../kb/data/0164-annie-record-coverage-and-progress.md)). Nothing on this page adds to or tests those quotations.
- **The January arrangement with Paci** is operator testimony plus the Paci rows. This page's source neither confirms nor contradicts it.
- **Documented versus inferred.** Documented here: the conversation's full text and timestamps, the Paci rows, the daily volumes, and the Chapter 13 filing (through [[wiki/people/suzanne-frank]]). Inferred: that "this Thursday" means May 1 (by calendar arithmetic, and consistent with the May 2025 list price); that the three May drafts were never sent (the record does not show it either way); and every characterisation of the April week, which belongs to the pasted timeline and not to this page.

## Sources

- `raw/chatgpt/iHateDanFRANK-2025-08-05/iHateDanFRANK 5 AUG 2025/conversations.json.from-cli-json.txt`: conversation `680dc72f-b274-8011-8819-48a800b74a99`, 24 turns in the active branch, 2025-04-27 → 2025-05-11.
- `raw/imessage/messages-part2-2019-2026.csv`: the Paci thread and the daily volume log.
- [`kb/data/0681`](../../../kb/data/0681-feb-apr-2025-return-and-rupture-sources.md): named-figure checks (Sugie, The supplier). Its claim that the ChatGPT export is the arrangement's single source is superseded here.
- [`kb/data/0539`](../../../kb/data/0539-john-paci-corroboration-replicated.md): Paci thread replication.
- [`kb/data/0164`](../../../kb/data/0164-annie-record-coverage-and-progress.md): Annie record coverage and the unheld extract.
- [`kb/data/0109`](../../../kb/data/0109-alice-counts-range-from-dump-not-held-here.md): the Claire count.
- Index: [[wiki/timeline/index]].
- Wiki pages: [[wiki/timeline/periods/2025-collapse]], [[wiki/mind/synthesis/2025-move-chronology]], [[wiki/mind/synthesis/the-2025-collapse]], [[wiki/mind/synthesis/may-august-2025-bridge]], [[wiki/people/john-paci]], [[wiki/people/suzanne-frank]], [[wiki/places/337-saratoga-drive]], [[wiki/places/307-e-76th-st]], [[wiki/timeline/events/eli-incident]], [[wiki/mind/synthesis/dan-annie-fallout-verdict]].
