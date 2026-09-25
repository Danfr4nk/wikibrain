# Retracted claims

Machine-readable ledger of claims the wiki once asserted and has since
retracted. `bin/wiki-timeline` refuses to emit any event whose text matches a
pattern below; `bin/wiki-lint` fails any page where a pattern matches a live
(not quarantined) assertion. The human-readable corrections live on the pages
themselves, in `CORRECTED` blockquotes — this file is only the guard that keeps
a retracted claim from coming back to life in generated output.

```json
{
  "id": "ret-20260924-dan-dui-misattribution",
  "claim": "Dan received DUI #1 in February 2019 and DUI #2 on June 29, 2024.",
  "retracted": "2026-09-24",
  "basis": "Dan's own confirmation (2026-09-24): he has never had a DUI. His only arrest was the February 2015 possession (residue) matter; ARD granted February 2016. The 2019-02-03 and 2024-06-29 dates are Jerel Wayne Coles's FOREWARN record, misattributed to Dan via agent-D extraction. The October 2017 'already got a DUI' line is likewise not his: the wiki's speaker-structure parse (dat:0031) attributes it to Christo Coan.",
  "patterns": [
    "second DUI after February 2019",
    "DUI #2.{0,60}second DUI after",
    "DUI #2.{0,50}SUPERSEDED"
  ],
  "replacement": "Dan has never had a DUI (confirmed 2026-09-24). The February 2019 and June 2024 DUI dates were Jerel Wayne Coles's record, misattributed to Dan."
}
```
