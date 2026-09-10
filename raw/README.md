# `raw/` — originals, preserved

Every artifact ingested by `bin/wb-ingest` is copied here byte-exact before
anything is derived from it, one directory per source:

```
raw/<source-slug>/
    <original filename>    the artifact, unmodified
    manifest.json          sha256, size, ingest date, original path
    EXTRACT.md             what extraction still owes; deleted when done
```

## Why originals are kept after processing

A derived representation can always be regenerated. An original cannot.

Every layer above L0 in this system is disposable by design — an interpretation
can be revised, a synthesis regenerated, an LLM's reading rejected outright.
That disposability is only safe because the evidence underneath survives. Delete
the originals and the whole structure becomes unfalsifiable: there is no longer
anything to check a conclusion against, and "trace this back to its evidence"
terminates in a summary somebody wrote once.

So the rule is that raw material is **append-only**. Correcting a mistaken
extraction means writing better data, never editing the artifact it came from.

## Integrity

`manifest.json` carries the sha256 taken at ingest. Corruption is therefore
detectable rather than assumed — the same discipline `corpus/manifest.json`
applies to the message record.

## A note on size

This directory is tracked in git, because the evidence layer is the part that
must not be lost and git is what is backing this repository up. Git stores every
version of every file forever, which is right for text and wrong for large
media. `wb-ingest` warns above 10 MB. If image and video intake arrives at
volume, this is the decision to revisit — content-addressed storage outside git,
with the manifest hashes as the link — and it should be revisited deliberately
rather than discovered when a clone takes twenty minutes.
