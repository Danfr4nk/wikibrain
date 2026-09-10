#!/usr/bin/env python3
"""Rebuild wiki/ from the 2026-09-04 full-corpus export.

This is the script that produced the tree in this repository. It is kept so the
reconstruction is reproducible rather than asserted: point it at the export and
it should write byte-identical pages every time.

The export is the prior wiki's own `text/plain` dump. text/plain is never
converted to a Google Doc, so it escaped the conversion that flattened YAML
frontmatter in every .md copy on Drive. pages.json carries a byte offset and
length per page, so each page is an exact slice — no parsing, nothing to get
subtly wrong on an em-dash or a fence.

Usage:
    tools/reconstruct-from-export.py /path/to/old-wiki-export-2026-09-04 [dest]

The export directory must contain whole.txt and pages.json.
"""
import json
import pathlib
import hashlib
import sys

EXPECTED_SHA = "4037dedc019e2595fab9dca558a70ee466a39b5ed2a0d3ed58af3c25fb69d5a6"
EXPECTED_BYTES = 7536214
EXPECTED_PAGES = 497


def main(argv):
    if not 2 <= len(argv) <= 3:
        sys.exit(__doc__)
    src = pathlib.Path(argv[1])
    dst = pathlib.Path(argv[2]) if len(argv) == 3 else pathlib.Path(__file__).resolve().parent.parent

    whole, index = src / "whole.txt", src / "pages.json"
    for f in (whole, index):
        if not f.is_file():
            sys.exit(f"FATAL: missing {f}")

    raw = whole.read_bytes()
    actual = hashlib.sha256(raw).hexdigest()
    if actual != EXPECTED_SHA:
        sys.exit(
            "FATAL: export hash mismatch — this is not the verified export.\n"
            f"  expected {EXPECTED_SHA}\n  actual   {actual}\n"
            "Do not proceed. A different export is a different source and needs\n"
            "its own manifest entry, not a silent substitution here."
        )
    if len(raw) != EXPECTED_BYTES:
        sys.exit(f"FATAL: expected {EXPECTED_BYTES:,} bytes, got {len(raw):,}")
    print(f"source verified: {len(raw):,} bytes, sha256 {actual[:16]}…")

    pages = json.loads(index.read_text())["pages"]
    if len(pages) != EXPECTED_PAGES:
        sys.exit(f"FATAL: expected {EXPECTED_PAGES} pages in index, got {len(pages)}")

    seen, written, total = set(), 0, 0
    for p in pages:
        path = p["path"]
        if path in seen:
            sys.exit(f"FATAL: duplicate page path in index: {path}")
        seen.add(path)

        blob = raw[p["byte_offset"]:p["byte_offset"] + p["byte_length"]]

        # Every page in this export opens with YAML frontmatter. A page that
        # does not is a bad offset, and a bad offset writes plausible-looking
        # garbage rather than failing — so check before writing, not after.
        if not blob.decode("utf-8").lstrip().startswith("---"):
            sys.exit(f"FATAL: page does not begin with frontmatter: {path}")

        out = dst / path
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_bytes(blob)
        if out.read_bytes() != blob:
            sys.exit(f"FATAL: readback mismatch: {path}")

        written += 1
        total += len(blob)

    print(f"wrote {written} pages, {total:,} bytes — every one verified on readback")


if __name__ == "__main__":
    main(sys.argv)
