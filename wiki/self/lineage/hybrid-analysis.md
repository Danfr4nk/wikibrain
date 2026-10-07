---
domain: self
page_type: synthesis
title: Hybrid Lineage Analysis
knowledge: mixed
status: active
tier: major
date_created: 2026-07-25
date_modified: 2026-10-07
changelog:
  - "2026-10-07: Expanded to major tier; restructured to canonical article template v1; resolved stale frontmatter source paths to the july11-snapshot locations established 2026-10-05."
sources:
  - raw/july11-snapshot/self/ancestry/dna-reports/Ancestry Composition - 23andMe.pdf
  - raw/july11-snapshot/self/ancestry/dna-reports/chromosome.pdf
  - raw/july11-snapshot/self/ancestry/dna-reports/health.pdf
  - raw/self/ancestry/extracted/Daniel Frank family tree.txt — ⚠ Source reference unresolved — original target no longer exists in current corpus; the GEDCOM is cited as parsed on wiki/self/lineage/family-tree.
synthesizes:
  - wiki/mind/synthesis/ancestral-dialectic
  - wiki/self/ancestry
  - wiki/self/lineage/23andme-genomics
  - wiki/self/lineage/family-tree
tags:
  - family
  - personality-profile
connections:
  - page: wiki/mind/synthesis/ancestral-dialectic
    type: component-of
    claim: "This page is the dialectic's evidentiary workings — where the genomic and documentary records are set against each other — and it flags its own conclusions as an interpretive frame rather than a clinical finding."
  - page: wiki/self/ancestry
    type: component-of
    claim: "The ancestry hub holds the integrated reading of the two evidentiary streams; this page is its workings — the line-by-line cross-check between DNA and paper."
  - page: wiki/self/lineage/23andme-genomics
    type: evidenced-by
    claim: "The 23andMe ancestry composition, haplogroups, and Neanderthal data are one of the two evidentiary streams this page cross-references against the documentary family tree."
  - page: wiki/self/lineage/family-tree
    type: evidences
    claim: "The 515-individual GEDCOM is the second evidentiary stream this page cross-references against the genomic data."
  - page: wiki/health/chemical-architecture
    type: contextualizes
    claim: "The 95th-percentile Neanderthal load and the wellness panel (caffeine, deep sleep) are offered as background to the documented chemical stack, never as causes of it."
  - page: wiki/mind/synthesis/fayette-return
    type: contextualizes
    claim: "The return dynamic documented across four paternal-line generations is fully accounted for inside one line, which constrains what the maternal half of the dialectic is needed to explain."
---

# Hybrid Lineage Analysis

This page is where the two halves of Dan Frank's ancestry record are forced to answer to each other. On one side: the 23andMe genomic profile, exported as three PDFs in March 2025, which reads the body as data — 21.4% Ashkenazi Jewish, 78.3% Northwestern European, two anomalous haplogroups, a 95th-percentile Neanderthal variant load. On the other: the Ancestry.com GEDCOM — 515 individuals, 218 families, 90 direct ancestors across seven generations — which reads the paper trail, from a Russian immigrant appearing in Manhattan in 1900 to a West Virginia matrilineal line running Amelia to Susan A. Zearly to Ida Ellen Conwell to Frances "Fran" Coldren. The job here is cross-referencing: where biology and documents agree, where they diverge, and which facts only one of them can see.

The headline is corroboration. The two streams confirm each other at the population level — the genomic composition independently matches the documentary record's dual heritage: Russian and Austrian Jewish immigration on the paternal side against deep Pennsylvania and West Virginia settler roots on the maternal side. That independent agreement matters because the two streams were produced by unrelated mechanisms — one by a genotyping chip, the other by census records and family trees — and they land in the same place. But the reason this page exists is the anomalies: a 3.6-point Ashkenazi deficit, a 25.8-point British & Irish overperformance, a maternal haplogroup rare in Northern Europe, a paternal haplogroup more at home in Central Asia than in a shtetl, and a 0.2% Sub-Saharan African trace with no documentary counterpart. These are the live questions, and neither stream resolves them alone.

This page is also the evidentiary workings for a larger interpretive frame — the [[wiki/mind/synthesis/ancestral-dialectic]]'s reading of two incompatible inherited operating systems, Ashkenazi hypervigilance against Appalachian numbness. That frame is recorded here as interpretation, not finding. The DNA and the GEDCOM are facts about what was inherited; the dialectic is one coherent story about what that inheritance does. This page keeps the two apart on purpose.

## The two evidentiary streams

The genomic stream begins with a March 2025 export. Dan pulled three PDFs from 23andMe — the Ancestry Composition report, the Chromosome Painting visualization, and the Health report (whose underlying service data was updated in October 2024). The files are not large — the chromosome painting is a 199 KB, two-page visual, the health report 1,032 KB across eleven pages — but they carry the full composition breakdown, both haplogroup assignments, the Neanderthal percentage, fourteen health predisposition reports, forty-six-plus carrier screens, the eight wellness reports, and thirty-seven-plus trait reports. A byte-identical duplicate of the chromosome PDF (`chromosome copy.pdf`, 204,233 bytes both) sits in the raw directory and should be flagged for deduplication. A second copy of all three PDFs sits under `raw/july11-snapshot/self/ancestry/extracted/23andme Ancestry geneoiogy family tree/`, alongside the family-tree zip `raw/july11-snapshot/self/ancestry/23andme-ancestry-family-tree-20260623.zip`. One thing worth knowing up front: the 23andMe chromosome painting remains a visual reference only — the per-segment CSV that 23andMe offers from its Scientific Details page was not part of the PDF dump, so no segment-level ancestry assignments are digitally recorded anywhere in this wiki.

The documentary stream is the Ancestry.com GEDCOM parsed from the file `Daniel Frank family tree.txt`: 515 individuals, 218 families, 90 direct ancestors, seven generations, four hundred-plus birth/death/residence events. Its geographic signature is extreme concentration — 45 birth/death/residence instances in Pennsylvania against 5 in West Virginia and 4 in New York — with six documented migration corridors (Russia → Manhattan → the Bronx → Brownsville; Austria → Brownsville; Germany → Manhattan in the pre-Civil War wave; Scotland → PA/WV; the German Palatinate → PA; the colonial Dutch → PA). After correction, 14 of the 515 individuals were European-born, and only 3 of those sit on direct parental lines: David J. Frank (Russia), Sadie Harris (Austria), and the man listed only as "Harris" (Czechoslovakia) — Sadie's father, who contributed roughly 12.5% of Dan's DNA and is otherwise completely undocumented. The Germany-born Frank and Cohen ancestors are on collateral lines, contributing 0% of the autosomal DNA.

The two streams were not built to talk to each other. The genomic export answers what the body carries; the GEDCOM answers what the paper remembers. Setting them side by side is what this page does — and the comparison is asymmetric in a useful way, because each stream's blind spots are the other stream's territory.

## Where the streams corroborate each other

At the population level the agreement is structural:

| Metric | Documentary Record | 23andMe Result | Alignment |
|---|---|---|---|
| Ashkenazi Jewish | One fully-Jewish grandparent (Morley Jay Frank) = ~25% expected | 21.4% | Within normal recombination variance |
| British & Irish | Maternal Gillingham/Lewellen/Shrum lines (English, Scots-Irish) | 55.8% | Higher than expected |
| French & German | Maternal Shrum/Van Voorhis/Coldren lines (German, Dutch) | 22.2% | Lower than expected |
| Sub-Saharan African | None documented | 0.2% (trace) | Anomalous |
| Maternal haplogroup | Appalachian Protestant (expected: H, U, K, T, J, V) | R0 | Anomalous |
| Paternal haplogroup | Ashkenazi Jewish (expected: J1, J2, E1b1b, R1b) | R-Z93 | Anomalous |

The five points of agreement are worth stating plainly because they are what make the anomalies worth taking seriously rather than dismissing as noise:

1. **Dan is overwhelmingly European.** 99.7% European composition matches a documentary record of exclusively European ancestry. Both streams rule out any recent non-European admixture above trace level.

2. **The Ashkenazi signal is present and significant.** 21.4% Ashkenazi Jewish matches the known paternal Jewish immigrant line — David J. Frank from Russia, Sadie Harris from Austria, converging in Morley Jay Frank and passing to Dan through Rick. The sub-regional assignment (Central European and Western Ukrainian Jews) is consistent with a Russia/Austria origin.

3. **The maternal lines are Northwestern European.** 78.3% Northwestern European matches the known maternal lines (Gillingham, Lewellen, Shrum, Van Voorhis, Coldren, Thomas, Conwell) that have been rooted in Pennsylvania and West Virginia since the 1700s.

4. **The ancestry timeline independently checks the paper.** 23andMe estimates the Ashkenazi ancestor 1–3 generations back — consistent with David J. Frank and Sadie Harris as paternal great-grandparents, three generations up. The British & Irish 1–3 generation range reflects the deep multi-generational presence of the maternal lines; the French & German 2–4 generation range is consistent with 18th- and 19th-century German Palatine and Pennsylvania Dutch immigration. The chip knew nothing about the GEDCOM; it arrived at the same generational depths.

5. **The geographic concentration is real in both records.** The GEDCOM's 45 Pennsylvania instances against single digits everywhere else matches 23andMe's additional ancestry-region flags — "Tidal Potomac River Early British/Irish Americans" and "European Diaspora" — both describing exactly this kind of rooted, early-settler American population.

## The four variances

Corroboration at the macro level makes the four variances more interesting, not less. Each one is a place where the chip and the paper disagree, and each disagreement has a different most-likely explanation.

**The Ashkenazi deficit (−3.6 points).** 21.4% against ~25% expected from one fully-Jewish grandparent. The first and boring explanation is recombination noise: a grandparent contributes 25% of DNA on average, but the actual per-grandparent range runs roughly 18–32%, so 21.4% is squarely inside the normal band. It does not need an explanation beyond inheritance mechanics. But the second explanation is worth keeping open: the deficit is also consistent with mixed ancestry in the Frank line. Morley Jay Frank may not have been 100% Ashkenazi. The ancestry hub's reading points at the most likely place for the mixture — Sadie Harris's father, the undocumented "Harris" from Czechoslovakia, who may have been partially non-Jewish Czech rather than fully Jewish — or at a non-Jewish ancestor somewhere in David J. Frank's line. The variance sits exactly on the boundary between "noise" and "signal," and the record does not contain what would decide it.

**The British & Irish overperformance (+25.8 points).** 55.8% against ~30% expected. This is almost certainly a reference-panel artifact rather than a real ancestry discovery. 23andMe's algorithm classifies most German and Pennsylvania Dutch ancestry as "British & Irish" rather than "French & German" — the German settlers of southwestern Pennsylvania intermarried heavily with British colonists, and their DNA is frequently indistinguishable from the British & Irish reference population. The number is telling us about the classifier, not about Dan's ancestors.

**The French & German underperformance (−7.8 points).** 22.2% against ~30% expected. This is the same artifact's other face: the German ancestry documented in the Shrum, Van Voorhis, Coldren, and Whyel lines is being read as "British & Irish" by the algorithm. The sub-regional assignment that does appear — Central Swabia (+2 additional regions) — is genuinely German, and its smallness relative to the paper trail is further evidence that the classifier is dumping most of the Germanic signal into the British & Irish bucket.

**The Sub-Saharan African trace (+0.2 points).** 0.2% West African (Ghanaian/Liberian/Sierra Leonean) with no documentary counterpart anywhere in the GEDCOM. Two readings, both live: it is statistical noise at the detection threshold, or it is a real ancestor 7–8 generations back on any line. The deciding evidence would be chromosome location and segment size — a long, contiguous segment in one place argues for a real ancestor; scattered sub-threshold blips argue for noise. That evidence does not exist in this wiki because the segment-level CSV was never exported. The trace is unresolvable on current data, and should stay that way rather than being rounded to zero or treated as a finding.

## The deep-time layer: two anomalous haplogroups

The haplogroups are a different kind of fact from everything else on this page. The ancestry composition describes the last five to seven generations; the GEDCOM extends about the same distance. The haplogroups describe thousands of years. They are orthogonal to the paper trail — neither stream can corroborate or refute the other across that timescale, which is exactly why they are the most speculative part of the genomic record and the most tempting to over-read.

**Maternal R0.** R0 is the ancestral haplogroup of H and V, the most common mitochondrial haplogroups in Europe — but R0 itself is relatively rare in Northern Europe, found at higher frequencies in the Arabian Peninsula, the Middle East, and among some Ashkenazi Jewish populations. On the maternal matrilineal chain (Suzanne → Diane → Fran → Ida Ellen Conwell → Susan A. Zearly → Amelia), it is unexpected for an ostensibly purely Appalachian Protestant lineage. Three explanations compete: a distant Jewish or Middle Eastern ancestor entering through the Van Voorhis Dutch colonial line or the Conwell/Thomas Appalachian lines; a preserved ancient European variant of R0 that predates the current frequency distribution; or an undocumented adoption or non-paternity event somewhere on the maternal line. Note which lines are candidates for the first explanation — and this is where the 2026-08-02 correction matters: the maternal matrilineal line runs through Fran's chain (Conwell, Zearly, Amelia), not through the Shrum line, so research into the Conwell, Zearly, and Amelia origins is the correct next move, not research into the Shrums.

**Paternal R-Z93.** R-Z93 is a subclade of R1a found in Central and South Asia and in some Ashkenazi Jewish populations, particularly associated with the Levite lineage. It is consistent with the Frank line's Ashkenazi heritage but it is not the typical Ashkenazi Y-DNA assignment — J1, J2, E1b1b, or R1b would have been the unremarkable result. The three readings: the Levite lineage or Central Asian ancestry predating the Ashkenazi bottleneck (in which case the Frank line carries a genuinely interesting deep-time signature); a non-paternity event in the Frank line within the last few generations; or simply the long tail of R1a distribution in Eastern European Jewish populations. More detailed Y-DNA testing (e.g., FamilyTreeDNA) could confirm or refine the 23andMe prediction; the PDF export is the end of what 23andMe says.

The honest standing for both haplogroups: they are the deepest data points in the record and the least interpretable against recent ancestry. The page that treats them as a mystery to be solved is this one; the page that treats them as solved is wrong.

## What only the DNA knows

Beyond composition and haplogroups, the genomic stream carries facts the paper trail cannot, in principle, contain:

**The Neanderthal load.** Dan sits in the 95th percentile of 23andMe customers for Neanderthal-introgressed variants — a genuine outlier. The scientific literature links some Neanderthal-introgressed variants to population-level associations with mood disorders, nicotine addiction, and chronotype, but those are PheWAS correlations, not causal claims about an individual, and this page carries them with that warning attached. In the wiki's architecture the number functions less as biology and more as background: it is offered to [[wiki/health/chemical-architecture]] as context for the documented stimulant use and sleep patterns — never as a cause of them — and the dialectic page reads it as symbolic reinforcement of an identity Dan already holds, an outsider even at the species level. The wellness panel's findings that Dan is likely to consume less caffeine and is less likely to be a deep sleeper intersect with chronotype research on Neanderthal variants, but no direct causal link is established, and none is claimed.

**The health panel's negative space.** Fourteen health predisposition reports, forty-six-plus carrier screens, and the result is almost entirely clear: one ARSACS carrier variant, one benign Alpha-1 Antitrypsin variant ("variant detected, not likely at increased risk"), everything else not detected or typical likelihood. The ARSACS finding matters only for family planning — carrier status means one copy of the variant without the disease, relevant if a partner is also a carrier. Two predisposition results (Age-Related Macular Degeneration, Hereditary Thrombophilia) were never fully extracted from the PDF, and the Prostate Cancer (BRCA1/BRCA2) report is locked behind an incomplete questionnaire — its result is unavailable, not negative. This panel is a baseline for future reference, not a source of findings.

**The trait and wellness panels.** Thirty-seven-plus traits and eight wellness reports, mostly of biographical-color status: likely prefers salty over sweet, likely average-or-less sleep movement, lactose tolerant, predisposed to weigh about average, "common in elite power athletes" muscle composition (a population-level fast-twitch association, not a claim about athletic ability), likely ring finger longer than index (lower 2D:4D ratio, associated in some studies with higher prenatal testosterone), about a 50/50 chance on matching musical pitch, and a predicted 8:34 am wake-up time from chronotype genetics. None of this corroborates or contradicts the GEDCOM; it is included here because it is part of what the genomic stream uniquely contributes.

## The interpretive layer and its boundary

The genomic and documentary streams, once cross-referenced, become the substrate for an interpretive frame that this page deliberately keeps quarantined from the findings above. The [[wiki/mind/synthesis/ancestral-dialectic]] — a long-form AI research report's reading of the same family tree and psych corpus — proposes two incompatible inherited "operating systems": the paternal line encoding a "syntax of suffering," hypervigilant pattern-recognition as a survival tool turned inward ("high verbal IQ," "neurotic overprocessing," "trauma-coded pattern recognition"); the maternal line encoding a "numbness of survival," the stoic emotional withholding of company-town labor, with Fran's thrice-married great-grandmother offered as the archetype of "emotional dissociation via reinvention." The collision of the two in one person is read as a parasitic loop — relentless analysis applied to trauma that was built to resist mapping, periodic shutdown offering escape without resolution — reframing the documented alternation between obsessive forensic analysis and abrupt dissociative withdrawal as two ancestral survival scripts on incompatible assumptions.

This page records the frame as interpretive synthesis, not fact, and three corrections from the documentary stream bear directly on it:

First, the pogrom-flight image that does real work in the collision thesis is wrong in its specifics. The report reads David J. Frank and Sadie Harris as fleeing the Russian pogroms directly into the Fayette County coal patch — the two inheritances meeting on arrival. A direct GEDCOM read places David J. Frank in Manhattan in 1900, 1905, and 1910 and in the Bronx in June 1915, reaching Brownsville only by the 1920 census. The immigration terminated in New York City; the move to Fayette County was a second and separate decision, fifteen years later. The two codes still meet; they meet a generation later, and by choice rather than by displacement.

Second, the collapse-cycle model — the dialectic's most concrete claim, a four-phase rhythm (ecstatic rise, aesthetic domestic phase, rupture, collapse and return) said to recur at both life-era and single-relationship scale — is fitted after the fact to exactly two documented relationships (Alexis, Annie). It is a useful description, not a validated model, and one of its instance dates has already moved: the Zazza Williamsburg apartment hunt that the phase table dated to 2011 was underway by February 2010, per a 2010-02-17 text from Dan to Suz — *"coming home tomorrow now, look up zazza williamsburg"* [dat:1880] — making 2011 a late bound, not the date.

Third, [[wiki/mind/synthesis/fayette-return]] shows the return dynamic is fully documented within the paternal line alone, across four generations — David's Manhattan-to-Brownsville move, Morley's brief 1957 Seattle eruption and permanent collapse back to Uniontown, Dan's own 2013 and 2025 returns — and both first-generation immigrants are on the Ashkenazi side. If one line reproduces the pattern by itself, the maternal half of the dialectic is unproven for the return dynamic specifically. The dialectic is not falsified as a frame for the psychological material; the return is removed from the list of things it is needed for. Where the two pages disagree, the residue (censuses, directories, burial records) wins over the testimony (one AI report's reading).

Two further notes from the same dialectic page belong here as boundary markers. The chemical-regulation section (cocaine as amplifier of the analytical/Ashkenazi mode, cannabis as amplifier of the dissociative/Appalachian one) restates what [[wiki/health/chemical-architecture]] already documents as the stack's self-model — engineering, not indulgence. A 2026-08-31 re-check against the intake ledger's first measured night found the two substances interleaved rather than running in separate blocks — 22:06:36 arriving 53 seconds after the 22:05:43 cocaine dose, 00:37:40 falling between the 00:01 and 02:35 doses, 02:36:01 opening 24 seconds after the cocaine unit closed — which is not a falsification (two amplifiers can run concurrently) but is one night of evidence against a reading that expected alternation, with n = 1. And the page's own connections flag that the reinvention archetype it assigns to Fran's great-grandmother fits Fran herself exactly — three marriages, two name changes — raising the possibility that the report attributed to an ancestor a biography belonging to its own anchor figure.

The whole interpretive layer arrives `knowledge: mixed` and must not have that status laundered by anything that later reasons from it. That is the provenance rule, and this page is its worked example.

## What remains unresolved

Folded here rather than standing as an apologetic tail — each item is a concrete next move, not a vague wish:

- **The Harris paternal line** is the single largest gap. "Harris," born in Czechoslovakia, Sadie Harris's father, contributed ~12.5% of Dan's DNA and is documented by a single datum: no given name, no birth date, no immigration record, no residence history. Czech immigration records, census data, and synagogue records are the named next steps.
- **The maternal R0 origin** wants research into the Conwell, Zearly, and Amelia lines — the actual matrilineal chain — not the Shrum line the pre-correction framing would have pointed at.
- **The paternal R-Z93 origin** wants Y-DNA testing (e.g., FamilyTreeDNA) to confirm or refine the 23andMe prediction.
- **The 0.2% Sub-Saharan trace** wants chromosome location and segment size, which do not exist in this wiki because the segment CSV was never exported.
- **Two health results** (Age-Related Macular Degeneration, Hereditary Thrombophilia) were listed but never fully extracted from the PDF; the BRCA report needs the questionnaire completed.
- **Henry and Hannah Frank's relationship** is unclear from the GEDCOM — parents of Max Frank, or father plus stepmother — which decides whether Hannah Frank is a direct ancestor (~6.25% DNA) or collateral (0%).
- **The Cohen connection** (Meyer and Bertha Cohen, both born in Germany) — relationship to the Frank/Harris line undocumented.
- **George Dixon Shrum Jr.'s death date** remains unknown and undocumented in the GEDCOM.
- **Place-name inconsistencies** throughout the GEDCOM ("Pennslyvania," "Westmorland Co," "Fayette" vs "Fayette County") complicate geographic analysis.
- **The Lincoln line** (31 individuals) — relationship to the direct ancestry unclear.
- **Link debt:** inverse connections to this page from [[wiki/self/ancestry]], [[wiki/self/lineage/23andme-genomics]], and [[wiki/self/lineage/family-tree]] need to be added to those pages' frontmatter.

## Conflicts in the record

**[2026-10-07] Source references resolved.** This page's frontmatter carried "⚠ Source reference unresolved" warnings on all four source paths, pointing at `raw/self/ancestry/dna-reports/` and `raw/self/ancestry/extracted/`. A fresh listing of the repository's tree (2026-10-05, on the [[wiki/self/lineage/23andme-genomics]] pass) established the three PDFs live under `raw/july11-snapshot/self/ancestry/dna-reports/` — `Ancestry Composition - 23andMe.pdf`, `chromosome.pdf`, `health.pdf` — with a second copy under `raw/july11-snapshot/self/ancestry/extracted/23andme Ancestry geneoiogy family tree/` and the family-tree zip `raw/july11-snapshot/self/ancestry/23andme-ancestry-family-tree-20260623.zip`. Current standing: the three PDF paths on this page are updated to the resolved locations; the GEDCOM extraction path retains its unresolved warning, since the family-tree page on main still carries it.

**[2026-08-02] The maternal line ran through the wrong grandparent.** The documentary stream this page cross-references was corrected: Fran's descent reaches Dan through **Rebecca Diane Van Voorhis** — Dan's maternal *grandmother*, Fran's daughter by her first husband Emmet Graden Van Voorhis — not through George Dixon Shrum Jr., who married into the line. Earlier hybrid framings that routed the maternal Appalachian reading through the Shrum/Gillingham lines inherited the wrong wiring. The consequence is not cosmetic: the Whyel coal money, the Coldren legal connection, the estate that produced Dan's 2020 distribution, and the "Whyel" Suz carries as a middle name all descend through the grandmother. The same correction gave Fran's maiden name as **Thomas** and identified her first husband, closing two gaps the fran-coldren page had carried.

**[2026-08-02] The pogrom-flight-into-the-coal-patch image revised.** A direct read of the GEDCOM places David J. Frank in Manhattan in 1900, 1905, and 1910 and in the Bronx in June 1915, reaching Brownsville only by the 1920 census. The immigration terminated in New York City; the family moved to Fayette County fifteen years later as a second and separate decision. The dialectic's "pogrom-flight directly into the Appalachian coal patch" image — which does real work in the collision thesis, because it makes the two inheritances meet on arrival — is not what the record shows. Current standing: the two codes still meet, a generation later and by choice rather than by displacement; the interpretive section above carries the corrected version.

**[2026-08-14] The "image-based PDFs" claim retracted.** The prior version of the genomics stream's page claimed the three 23andMe PDFs were "image-based without an extractable text layer" and that specific percentage values were not digitally recorded. All three PDFs contain a full text layer and were extracted via pymupdf for the 2026-08-14 revision. Current standing: every percentage, haplogroup, and health result this page cross-references comes directly from that extraction; nothing rests on the old claim.

**[2026-08-18] Diane's married surname corrected.** The maternal grandmother was carried in the tree under her birth name and the wiki's entity page under an inferred "Shrum." The message corpus names her twice on 2018-04-01 as **Diane Moore**, alongside **Dave Moore**, her second husband. George Dixon Shrum Jr. is the first husband and Suz's father. Current standing: matrilineal labeling in the hybrid readings uses Moore; the Shrum patrilineal line stops at Suz's paternal grandfather, who married into the line.

**[2026-08-02] European-born count corrected 16 → 14.** Susannah Elizabeth Emerick and William Preston Gillingham were flagged European-born by a place-name parsing error (their birthplaces lacked "USA"); both are US-born. Current standing: 14 European-born individuals in the GEDCOM, of whom only 3 sit on direct parental lines. Note: the [[wiki/self/ancestry]] hub's lede still carries the uncorrected "16" — that page is stale on this point.

**[2026-07-14] Dan confirmed the frownie-cookie correction.** Per his account, the 2025-09-03 message ("eat n' park delivered frownie cookies to my grandfather's funeral i swear to god lmao") referenced **Morley Frank's 1998 funeral**, recounted in an essay by Dan's cousin Alex Frank — the auto-extracted calendar had dated the entry to when Dan referenced the essay (2025), not when the funeral happened (1998). George Dixon Shrum Jr.'s death date remains genuinely unknown. This is testimony, recorded as such.

**[2026-09-23] Collapse-cycle instance date corrected.** The phase table's Zazza row carried a 2011 move date. A 2010-02-17 text from Dan to Suz — *"coming home tomorrow now, look up zazza williamsburg"* [dat:1880] — shows the Williamsburg apartment hunt was underway a full year earlier. Current standing: 2011 is a late bound at best; the hunt began by February 2010; the phase structure of the model is unaffected.

## Assessment

This page's value is as a check, and at that job the record is strong. The genomic stream independently confirms the documentary record's two-line structure — Ashkenazi immigration against Appalachian roots — to within the normal noise of recombination, with the ancestry timeline arriving at the same generational depths the GEDCOM documents. That is the corroboration that lets the anomalies be read as anomalies rather than as noise to be dismissed.

The anomalies are the live edge, and they are uneven in kind. The four composition variances are mostly explainable — three are classifier artifacts or recombination noise, one (the Sub-Saharan trace) is genuinely undecidable on current data. The haplogroups are the deepest data points and the least interpretable: they operate on a timescale the paper trail cannot reach, which makes them the most tempting part of the record to over-read and the most important part to keep labeled speculative. The health and carrier panels are almost entirely negative space — a baseline, not a finding.

The interpretive frame that sits on top of all of this — two incompatible ancestral operating systems — is speculative by design, and this page treats it that way. The corrections that have already landed on it (the NYC-first migration, the maternal-line rewiring, the Zazza date, the fayette-return single-line sufficiency) are the frame working as intended: an interpretation that updates when the residue moves. The one thing the frame must never do is launder its own status — it arrived `knowledge: mixed`, and anything that reasons from it inherits that mark.

## See also

- [[wiki/self/ancestry]] — the ancestry hub; holds the integrated reading this page works out in detail
- [[wiki/self/lineage/family-tree]] — the documentary stream: 515-individual GEDCOM, migration corridors, surname frequencies
- [[wiki/self/lineage/23andme-genomics]] — the genomic stream: full composition, haplogroups, health/carrier/wellness/trait panels
- [[wiki/mind/synthesis/ancestral-dialectic]] — the interpretive frame this page supplies evidence to
- [[wiki/health/chemical-architecture]] — the documented chemical stack the Neanderthal and wellness findings contextualize
- [[wiki/mind/synthesis/fayette-return]] — the single-line sufficiency argument constraining the dialectic's return claims
- [[wiki/people/morley-frank]] — the paternal grandfather whose migration arc templates Dan's own
- [[wiki/people/david-j-frank]] — the Russian immigrant; Manhattan 1900–1910, the Bronx 1915, Brownsville by 1920
- [[wiki/people/fran-coldren]] — the maternal matrilineal anchor; the corrected routing runs through her

## References

- `raw/july11-snapshot/self/ancestry/dna-reports/Ancestry Composition - 23andMe.pdf` — 23andMe ancestry composition export (exported 2025-03-31, service-updated 2024-10-25).
- `raw/july11-snapshot/self/ancestry/dna-reports/chromosome.pdf` (199 KB, 2 pages) — chromosome painting visualization; per-segment ancestry assignments are visual only, no CSV data included.
- `raw/july11-snapshot/self/ancestry/dna-reports/health.pdf` (1,032 KB, 11 pages) — health predisposition, carrier status, wellness, and trait reports.
- A second copy of the three PDFs sits under `raw/july11-snapshot/self/ancestry/extracted/23andme Ancestry geneoiogy family tree/`, alongside the family-tree zip `raw/july11-snapshot/self/ancestry/23andme-ancestry-family-tree-20260623.zip`.
- The documentary stream is cited as parsed on `wiki/self/lineage/family-tree` (GitHub main), whose frontmatter still carries an unresolved warning for the original GEDCOM extraction path.
- `chromosome copy.pdf` is a byte-identical duplicate of `chromosome.pdf` (both 204,233 bytes) and should be flagged for deduplication.

Link-debt note: inverse connections to this page from [[wiki/self/ancestry]], [[wiki/self/lineage/23andme-genomics]], and [[wiki/self/lineage/family-tree]] have not yet been added to those pages' frontmatter (`bin/wiki-connect check` will flag them as missing inverses).
