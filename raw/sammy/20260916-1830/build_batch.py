#!/usr/bin/env python3
"""Assemble raw/sammy/20260916-1830: chats.json (214 rows, dedup by message_id),
manifest.json, external.json. Run from the worktree root."""
import json, hashlib, os

WORKTREE = os.path.dirname(os.path.abspath(__file__))  # raw/sammy/20260916-1830
BATCH = "20260916-1830"
W_FROM = "2026-09-16T15:51:38.892Z"
W_TO = "2026-09-16T18:27:06.013+00:00"

SRC = "/home/hatch/workspace/agents/79a2860d-3419-4a33-88da-a7afef0ca733/tool-output/db-call_01a0ab8886ee70309c8a0f2b41cb76c1.json"

# Rows 201-214 (OFFSET 200 batch), transcribed from the inline db result.
# Verified byte-exact against the DB via a body-equality JOIN before use.
TAIL = [
 {"author_label": None, "body": "Hahahaha", "created_at": "2026-09-16T18:22:30.233+00:00", "message_id": "7bc3c839-a2c3-419f-8aed-586ca8c81a84", "role": "user"},
 {"author_label": None, "body": "Keep me posted, Romeo.", "created_at": "2026-09-16T18:22:31.397+00:00", "message_id": "assistant-msg-b1091bb4-fe40-47d3-94a7-9fc8d49bdec4", "role": "assistant"},
 {"author_label": None, "body": "If not I will do us all a favor and shift from this mortal coil", "created_at": "2026-09-16T18:23:00.224+00:00", "message_id": "165476a4-26d9-44a7-81a2-2a9da7ae4800", "role": "user"},
 {"author_label": None, "body": "It's been ten minutes, Romeo. Give her time to be overwhelmed by the tattoo thing.", "created_at": "2026-09-16T18:23:01.875+00:00", "message_id": "assistant-msg-bbf46228-bcc1-4f44-87ec-a6e70211b617", "role": "assistant"},
 {"author_label": None, "body": "Option 3", "created_at": "2026-09-16T18:23:23.862+00:00", "message_id": "772857e5-41de-45a0-98f9-9f276b285b40", "role": "user"},
 {"author_label": None, "body": "New me now.", "created_at": "2026-09-16T18:23:27.568+00:00", "message_id": "assistant-msg-4b1aadbe-fd87-4331-a616-3a16d0d4dd94", "role": "assistant"},
 {"author_label": None, "body": "Lookin good hot stuff", "created_at": "2026-09-16T18:23:38.301+00:00", "message_id": "d2a21143-1570-4ed2-8fa8-466e5998096e", "role": "user"},
 {"author_label": None, "body": "QUEEN KETAMINA reporting for duty", "created_at": "2026-09-16T18:23:39.551+00:00", "message_id": "assistant-msg-1014b661-6345-4b00-a2d6-0b1a5230ec9b", "role": "assistant"},
 {"author_label": None, "body": "Make anither 4 versions of that ajd incorporate the text wirh your name somewhere but don\u2019t remove mine", "created_at": "2026-09-16T18:24:06.515+00:00", "message_id": "ec734a81-53c0-4689-85a7-82a64d9e9576", "role": "user"},
 {"author_label": None, "body": "Choose from 4 image options", "created_at": "2026-09-16T18:24:43.865+00:00", "message_id": "77d2271d-d9a5-4ee3-82d3-16b6f03a0476", "role": "assistant"},
 {"author_label": None, "body": "four above, both names on the crawl. pick.", "created_at": "2026-09-16T18:24:45.25+00:00", "message_id": "assistant-msg-f8f07db3-f8f6-4c32-8d1b-6352e8523120", "role": "assistant"},
 {"author_label": None, "body": "You can share it with friends!", "created_at": "2026-09-16T18:25:02.491+00:00", "message_id": "d0e61b94-a7cb-47a5-8bd8-7a95ac21cf5c", "role": "assistant"},
 {"author_label": None, "body": "Wgat stops it going forward\n[image:image/jpeg workspace/user/media_library/image/80/802d113f3af6c8b7ef8b3b0358a6b5b1d3b70798383c819c3b94a1d0b71bacfe.jpg]", "created_at": "2026-09-16T18:26:59.97+00:00", "message_id": "1c684ce8-e6ff-4350-b226-20c0b2615d79", "role": "user"},
 {"author_label": None, "body": "Nothing. There's no forward stop on this table — the tether strap only catches it going backward into inversion. Forward stability is 100% the height setting on that boom. If it's set longer than she is, her weight sits above the pivot and the table goes head-heavy the moment she shifts.\n\nShorten the boom to her height and it'll sit dead still while she locks in.", "created_at": "2026-09-16T18:27:06.013+00:00", "message_id": "assistant-msg-bbcf7a7d-2f3c-41be-989b-741f0fa1ebb0", "role": "assistant"},
]

def emit_verify_sql(path="/tmp/verify_tail.sql"):
    vals = ",\n ".join(
        "('%s', '%s')" % (r["message_id"], r["body"].replace("'", "''"))
        for r in TAIL)
    sql = ("SELECT m.message_id AS mid, (m.body = v.b) AS exact_match "
           "FROM runtime.messages m JOIN (VALUES\n %s\n) AS v(id,b) "
           "ON m.message_id = v.id ORDER BY m.created_at;" % vals)
    open(path, "w").write(sql)
    print("wrote", path)

def build():
    d = json.load(open(SRC))
    rows = d["result"]["rows"]
    assert len(rows) == 200, len(rows)
    seen = {r["message_id"] for r in rows}
    for r in TAIL:
        assert r["message_id"] not in seen, "dup " + r["message_id"]
        seen.add(r["message_id"])
        rows.append(r)
    rows.sort(key=lambda r: r["created_at"])
    assert len(rows) == 214
    assert rows[0]["created_at"].startswith("2026-09-16T15:52:08")
    assert rows[-1]["created_at"].startswith("2026-09-16T18:27:06")
    n_user = sum(1 for r in rows if r["role"] == "user")
    n_ass = sum(1 for r in rows if r["role"] == "assistant")
    max_body = max(len(r["body"] or "") for r in rows)

    chats_path = os.path.join(WORKTREE, "chats.json")
    with open(chats_path, "w") as f:
        json.dump(rows, f, ensure_ascii=False, indent=1)
        f.write("\n")
    raw = open(chats_path, "rb").read()
    sha = hashlib.sha256(raw).hexdigest()

    manifest = {
        "batch": BATCH,
        "pulled_at_utc": "2026-09-16T18:50:00Z",
        "watermark_from": W_FROM,
        "watermark_to": W_TO,
        "counts": {"user": n_user, "assistant": n_ass, "total": len(rows)},
        "sources": {"chats": {"watermark_from": W_FROM, "watermark_to": W_TO,
                              "rows": len(rows)}},
        "files": {"chats.json": {"sha256": sha, "bytes": len(raw)}},
        "notes": ("CUMTHREAD3 carve-out: 0 rows from side chat "
                  "24754b5b-b83e-4c49-a6a3-d6f2ab2c1853. Bodies full-length "
                  "(max %d chars), no truncation. Tail 14 rows verified "
                  "byte-exact via body-equality JOIN." % max_body),
    }
    with open(os.path.join(WORKTREE, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=1)
        f.write("\n")

    external = {
        "checked_at_utc": "2026-09-16T18:50:00Z",
        "note": "No external pull this window (task scope: main-chat window rows only).",
    }
    with open(os.path.join(WORKTREE, "external.json"), "w") as f:
        json.dump(external, f, indent=1)
        f.write("\n")

    print("rows:", len(rows), "user:", n_user, "assistant:", n_ass,
          "max_body:", max_body, "sha256:", sha[:16])

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "verify-sql":
        emit_verify_sql()
    else:
        build()
