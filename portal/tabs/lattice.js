// TAB: lattice
// Typed-edge graph visualization: focus-node model over the citation backbone
// + the sparse set of typed derived edges declared in graph.json.
PortalTab_lattice = {
  html: ''
    + '<div class="panel">'
    + '<h2>▦ THE LATTICE — TYPED-EDGE GRAPH</h2>'
    + '<div class="lat-note" id="lat-honesty"></div>'
    + '<div class="lat-bar">'
    + '<input id="lat-search" class="lat-search" placeholder="search nodes — title or id…" autocomplete="off" spellcheck="false">'
    + '<div id="lat-sugg" class="lat-sugg"></div>'
    + '<div class="lat-fams" id="lat-fams"></div>'
    + '</div>'
    + '<div class="lat-main">'
    + '<div class="lat-cvwrap"><canvas id="lat-cv"></canvas><div id="lat-tip" class="lat-tip"></div></div>'
    + '<div class="lat-side"><div id="lat-focus"></div><div id="lat-edges" class="lat-edges"></div></div>'
    + '</div>'
    + '<div class="lat-foot" id="lat-foot"></div>'
    + '</div>',

  css: ''
    + '.lat-note{font-size:11px;color:var(--dim);border:1px dashed var(--line);padding:8px 10px;margin-bottom:10px;letter-spacing:1px;}'
    + '.lat-note b{color:var(--yel);}'
    + '.lat-bar{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-start;margin-bottom:10px;position:relative;}'
    + '.lat-search{width:280px;background:#000;border:2px solid var(--mag);color:var(--lime);font:inherit;padding:8px 10px;outline:none;}'
    + '.lat-search:focus{box-shadow:0 0 10px var(--mag);}'
    + '.lat-sugg{position:absolute;top:38px;left:0;width:280px;background:#0d0d10;border:2px solid var(--line);z-index:20;display:none;max-height:240px;overflow-y:auto;}'
    + '.lat-sugg .sg{padding:6px 8px;font-size:11px;cursor:pointer;border-bottom:1px solid #1c1c22;}'
    + '.lat-sugg .sg:hover{background:#141419;}'
    + '.lat-fams{display:flex;gap:8px;flex-wrap:wrap;flex:1;}'
    + '.fam{display:flex;align-items:center;gap:6px;font-size:10px;border:1px solid var(--line);padding:4px 8px;cursor:pointer;user-select:none;letter-spacing:1px;}'
    + '.fam .dot{width:10px;height:10px;display:inline-block;}'
    + '.fam.off{opacity:.28;}'
    + '.fam .cl{color:var(--dim);}'
    + '.lat-main{display:grid;grid-template-columns:1fr 330px;gap:12px;}'
    + '@media (max-width:1100px){.lat-main{grid-template-columns:1fr;}}'
    + '.lat-cvwrap{position:relative;}'
    + '#lat-cv{width:100%;height:520px;display:block;background:#000;border:2px solid var(--line);cursor:crosshair;}'
    + '.lat-tip{position:absolute;display:none;background:#0d0d10;border:1px solid var(--mag);padding:6px 8px;font-size:11px;pointer-events:none;z-index:30;max-width:260px;}'
    + '.lat-tip .t{font-weight:bold;}'
    + '.lat-tip .i{color:var(--dim);font-size:10px;}'
    + '.lat-side{border:2px solid var(--line);background:#0a0a0c;padding:10px;max-height:560px;overflow-y:auto;}'
    + '.lat-side h3{font-size:14px;margin:6px 0;color:var(--wht);}'
    + '.lat-side .meta{font-size:10px;color:var(--dim);margin-bottom:8px;}'
    + '.lat-side .fstats{font-size:11px;margin:8px 0;border-top:1px dashed var(--line);border-bottom:1px dashed var(--line);padding:6px 0;}'
    + '.lat-edges{margin-top:6px;}'
    + '.edge{border:1px solid var(--line);border-left-width:4px;padding:6px 8px;margin-bottom:6px;font-size:11px;background:#0d0d10;cursor:default;}'
    + '.edge .er{font-weight:bold;}'
    + '.edge .et{color:var(--cyn);cursor:pointer;}'
    + '.edge .et:hover{text-decoration:underline;}'
    + '.edge .em{color:var(--dim);font-size:10px;margin-top:3px;}'
    + '.edge .em b{color:var(--wht);}'
    + '.edge .fchip{display:inline-block;font-size:9px;font-weight:bold;padding:1px 6px;border:1px solid;margin-right:6px;letter-spacing:1px;}'
    + '.lat-foot{font-size:11px;color:var(--dim);margin-top:10px;letter-spacing:1px;}'
    + '.lat-foot b{color:var(--lime);}',

  init: function (root, G) {
    "use strict";
    var nodes = G.nodes || [];
    var fams = (G.edgeVocab && G.edgeVocab.families) || {};

    function esc(s) {
      return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    }

    var FAMCOLOR = {
      structural: "#00e5ff", temporal: "#ffe900", causal: "#ff3131",
      semantic: "#ff2bd1", narrative: "#9b30ff", editorial: "#b8ff00"
    };
    var LAYCOLOR = ["#00e5ff", "#b8ff00", "#ffe900", "#ffa500", "#ff2bd1", "#ff3131"];
    var FAMORDER = ["structural", "temporal", "causal", "semantic", "narrative", "editorial"];

    /* ---------- build typed edge list ---------- */
    var rel2fam = {};
    FAMORDER.forEach(function (f) {
      ((fams[f] && fams[f].relations) || []).forEach(function (r) { rel2fam[r] = f; });
    });
    function famOf(rel) {
      if (rel === "cites") return "structural";
      return rel2fam[rel] || "semantic";
    }

    var byId = {}, edges = [], adj = {}, deg = {};
    nodes.forEach(function (n) { byId[n.id] = n; adj[n.id] = {}; deg[n.id] = 0; });
    function addEdge(from, to, family, rel, strength, basis, assertedBy, note) {
      if (!byId[from] || !byId[to] || from === to) return;
      var e = { from: from, to: to, family: family, rel: rel, strength: strength || "asserted",
                basis: basis || "", asserted_by: assertedBy || "", note: note || "" };
      edges.push(e);
      adj[from][to] = 1; adj[to][from] = 1;
      deg[from]++; deg[to]++;
    }
    nodes.forEach(function (n) {
      (n.cites || []).forEach(function (c) {
        addEdge(n.id, c, "structural", "cites", "declared", "", "", "");
      });
      (n.derived_edges || []).forEach(function (d) {
        addEdge(n.id, d.target, famOf(d.rel), d.rel, d.strength, d.basis, d.asserted_by, d.note);
      });
    });

    var typedEdgeCount = edges.filter(function (e) { return e.rel !== "cites"; }).length;
    var typedNodeSet = {};
    nodes.forEach(function (n) { if ((n.derived_edges || []).length) typedNodeSet[n.id] = 1; });
    var typedNodeCount = Object.keys(typedNodeSet).length;

    /* ---------- honesty header (all numbers computed) ---------- */
    root.querySelector("#lat-honesty").innerHTML =
      "<b>" + typedNodeCount + " nodes</b> carry typed derived edges; the lattice's backbone is citation structure. " +
      "edges built: <b>" + edges.length + "</b> total — " + (edges.length - typedEdgeCount) + " cites + " +
      typedEdgeCount + " typed. neighborhood capped at 120 nodes for perf.";

    /* ---------- family toggles + legend ---------- */
    var famOn = {};
    FAMORDER.forEach(function (f) { famOn[f] = true; });
    var famsEl = root.querySelector("#lat-fams");
    famsEl.innerHTML = "";
    FAMORDER.forEach(function (f) {
      var claim = (fams[f] && fams[f].claim) || "";
      var d = document.createElement("div");
      d.className = "fam"; d.dataset.fam = f;
      d.title = claim;
      d.innerHTML = '<span class="dot" style="background:' + FAMCOLOR[f] + '"></span>' +
        '<span>' + esc(f.toUpperCase()) + '</span><span class="cl">' + esc(claim.split(".")[0]) + '</span>';
      d.onclick = function () {
        famOn[f] = !famOn[f];
        d.classList.toggle("off", !famOn[f]);
        focus(currentFocus);
      };
      famsEl.appendChild(d);
    });

    /* ---------- default focus: highest cited_by count ---------- */
    var defaultFocus = null, best = -1;
    nodes.forEach(function (n) {
      var c = (n.cited_by || []).length;
      if (c > best) { best = c; defaultFocus = n.id; }
    });
    if (!defaultFocus && nodes.length) defaultFocus = nodes[0].id;

    /* ---------- search ---------- */
    var searchEl = root.querySelector("#lat-search");
    var suggEl = root.querySelector("#lat-sugg");
    searchEl.addEventListener("input", function () {
      var q = searchEl.value.trim().toLowerCase();
      if (q.length < 2) { suggEl.style.display = "none"; return; }
      var hits = [];
      for (var i = 0; i < nodes.length && hits.length < 8; i++) {
        var n = nodes[i];
        if ((n.title + " " + n.id).toLowerCase().indexOf(q) >= 0) hits.push(n);
      }
      if (!hits.length) { suggEl.style.display = "none"; return; }
      suggEl.innerHTML = "";
      hits.forEach(function (n) {
        var d = document.createElement("div");
        d.className = "sg";
        d.innerHTML = '<span class="lbadge L' + n.layer + '">L' + n.layer + '</span> ' + esc(n.title) +
          '<br><span style="color:var(--dim);font-size:10px">' + esc(n.id) + '</span>';
        d.onclick = function () { suggEl.style.display = "none"; searchEl.value = ""; focus(n.id); };
        suggEl.appendChild(d);
      });
      suggEl.style.display = "block";
    });
    document.addEventListener("click", function (ev) {
      if (ev.target !== searchEl && ev.target !== suggEl) suggEl.style.display = "none";
    });

    /* ---------- canvas ---------- */
    var cv = root.querySelector("#lat-cv");
    var ctx = cv.getContext("2d");
    var tip = root.querySelector("#lat-tip");
    var W = 0, H = 0, currentFocus = null, hoverId = null, shown = null, pos = {}, dirty = true;

    function resize() {
      W = cv.width = cv.clientWidth;
      H = cv.height = 520;
      dirty = true;
    }
    window.addEventListener("resize", resize);

    function visEdges() { return edges.filter(function (e) { return famOn[e.family]; }); }
    function visAdj(fid) {
      var out = [];
      var es = visEdges();
      for (var i = 0; i < es.length; i++) {
        var e = es[i];
        if (e.from === fid && out.indexOf(e.to) < 0) out.push(e.to);
        else if (e.to === fid && out.indexOf(e.from) < 0) out.push(e.from);
      }
      return out;
    }
    function vdeg(id) { return visAdj(id).length; }

    var BUDGET = 120, RING1MAX = 60;
    function neighborhood(fid) {
      var ring1 = visAdj(fid).slice().sort(function (a, b) { return vdeg(b) - vdeg(a); });
      var total1 = ring1.length;
      ring1 = ring1.slice(0, RING1MAX);
      var seen = {}; seen[fid] = 1;
      ring1.forEach(function (id) { seen[id] = 1; });
      var ring2 = [];
      outer:
      for (var i = 0; i < ring1.length; i++) {
        var nb = visAdj(ring1[i]).slice().sort(function (a, b) { return vdeg(b) - vdeg(a); });
        for (var j = 0; j < nb.length; j++) {
          if (1 + ring1.length + ring2.length >= BUDGET) break outer;
          var id = nb[j];
          if (seen[id]) continue;
          seen[id] = 1; ring2.push(id);
        }
      }
      return { ring1: ring1, ring2: ring2, total1: total1 };
    }

    function doLayout(nb) {
      pos = {};
      var cx = W / 2, cy = H / 2;
      var R1 = Math.min(W, H) * 0.30, R2 = Math.min(W, H) * 0.46;
      pos[currentFocus] = { x: cx, y: cy, r: 11 };
      nb.ring1.forEach(function (id, i) {
        var a = (i / Math.max(1, nb.ring1.length)) * Math.PI * 2 - Math.PI / 2;
        a += (i % 2 ? 0.02 : -0.02);
        pos[id] = { x: cx + Math.cos(a) * R1, y: cy + Math.sin(a) * R1, r: 6.5 };
      });
      nb.ring2.forEach(function (id, i) {
        var a = (i / Math.max(1, nb.ring2.length)) * Math.PI * 2 - Math.PI / 2 + 0.13;
        pos[id] = { x: cx + Math.cos(a) * R2, y: cy + Math.sin(a) * R2, r: 4 };
      });
    }

    function draw() {
      if (!shown) return;
      ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
      var es = visEdges();
      var inShown = function (id) { return !!pos[id]; };
      var i, e, p1, p2;
      for (i = 0; i < es.length; i++) {
        e = es[i];
        if (!inShown(e.from) || !inShown(e.to)) continue;
        var hot = hoverId && (e.from === hoverId || e.to === hoverId);
        var typed = e.rel !== "cites";
        p1 = pos[e.from]; p2 = pos[e.to];
        ctx.strokeStyle = FAMCOLOR[e.family];
        ctx.globalAlpha = hot ? 1 : (typed ? 0.95 : 0.32);
        ctx.lineWidth = typed ? 2 : 1;
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        if (typed) {
          var ang = Math.atan2(p2.y - p1.y, p2.x - p1.x);
          var ax = p2.x - Math.cos(ang) * 7, ay = p2.y - Math.sin(ang) * 7;
          ctx.fillStyle = FAMCOLOR[e.family];
          ctx.beginPath();
          ctx.moveTo(ax + Math.cos(ang) * 6, ay + Math.sin(ang) * 6);
          ctx.lineTo(ax + Math.cos(ang + 2.5) * 5, ay + Math.sin(ang + 2.5) * 5);
          ctx.lineTo(ax + Math.cos(ang - 2.5) * 5, ay + Math.sin(ang - 2.5) * 5);
          ctx.closePath(); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      ctx.textAlign = "center";
      var ids = Object.keys(pos);
      for (i = 0; i < ids.length; i++) {
        var id = ids[i], p = pos[id], n = byId[id];
        if (!n) continue;
        var isF = id === currentFocus, isH = id === hoverId;
        ctx.fillStyle = LAYCOLOR[n.layer] || "#888";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + (isH ? 2 : 0), 0, Math.PI * 2); ctx.fill();
        if (isF) {
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2); ctx.stroke();
        } else if (isH) {
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2); ctx.stroke();
        }
        if (isF || isH || p.r > 5) {
          ctx.fillStyle = isF ? "#fff" : "#cfcfd6";
          ctx.font = (isF ? "bold 11px" : "10px") + ' "Courier New",monospace';
          var t = n.title || id;
          if (t.length > 22) t = t.slice(0, 21) + "…";
          ctx.fillText(t, p.x, p.y + p.r + 12);
        }
      }
    }

    function shortTitle(id) {
      var n = byId[id];
      return n ? (n.title || id) : id;
    }

    function renderPanel(fid) {
      var n = byId[fid];
      var fel = root.querySelector("#lat-focus");
      var eel = root.querySelector("#lat-edges");
      if (!n) { fel.innerHTML = ""; eel.innerHTML = ""; return; }
      var myEdges = edges.filter(function (e) { return famOn[e.family] && (e.from === fid || e.to === fid); });
      var famCounts = {};
      myEdges.forEach(function (e) { famCounts[e.family] = (famCounts[e.family] || 0) + 1; });
      var fcHtml = FAMORDER.filter(function (f) { return famCounts[f]; }).map(function (f) {
        return '<span style="color:' + FAMCOLOR[f] + '">' + esc(f) + ':' + famCounts[f] + '</span>';
      }).join(" · ");
      var tags = (n.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("");
      fel.innerHTML =
        '<span class="lbadge L' + n.layer + '">L' + n.layer + '</span>'
        + '<h3>' + esc(n.title) + '</h3>'
        + '<div class="meta">' + esc(n.id) + ' · ' + esc(n.type || "") + ' · conf: ' + esc(n.confidence || "?") + '</div>'
        + tags
        + '<div class="fstats">' + myEdges.length + ' visible edges<br>' + (fcHtml || '<span style="color:var(--dim)">no visible edges</span>') + '</div>'
        + '<div style="font-size:10px;color:var(--dim);letter-spacing:1px;margin-bottom:6px;">EDGES — CLICK TARGET TO REFOCUS</div>';
      myEdges.sort(function (a, b) {
        var ta = a.rel === "cites" ? 1 : 0, tb = b.rel === "cites" ? 1 : 0;
        return ta - tb;
      });
      var html = "";
      myEdges.forEach(function (e) {
        var other = e.from === fid ? e.to : e.from;
        var dir = e.from === fid ? "→" : "←";
        html += '<div class="edge" style="border-left-color:' + FAMCOLOR[e.family] + '">'
          + '<span class="fchip" style="color:' + FAMCOLOR[e.family] + ';border-color:' + FAMCOLOR[e.family] + '">'
          + esc(e.family) + '</span>'
          + '<span class="er">' + esc(e.rel) + '</span> '
          + '<span class="et" data-fid="' + esc(other) + '">' + dir + ' ' + esc(shortTitle(other)) + '</span><br>'
          + '<span class="em">strength: <b>' + esc(e.strength) + '</b></span>'
          + (e.basis ? '<div class="em">basis: ' + esc(e.basis) + '</div>' : "")
          + (e.asserted_by ? '<div class="em">asserted_by: <b>' + esc(e.asserted_by) + '</b></div>' : "")
          + (e.note ? '<div class="em">note: ' + esc(e.note) + '</div>' : "")
          + '</div>';
      });
      eel.innerHTML = html || '<div style="color:var(--dim);font-size:11px">No visible edges. Toggle families on.</div>';
      eel.querySelectorAll(".et").forEach(function (el) {
        el.onclick = function () { focus(el.dataset.fid); };
      });
    }

    function focus(fid) {
      if (!byId[fid]) return;
      currentFocus = fid;
      hoverId = null;
      tip.style.display = "none";
      var nb = neighborhood(fid);
      shown = nb;
      doLayout(nb);
      renderPanel(fid);
      var totalShown = 1 + nb.ring1.length + nb.ring2.length;
      root.querySelector("#lat-foot").innerHTML =
        "FOCUS: <b>" + esc(shortTitle(fid)) + "</b> · showing <b>" + totalShown + "</b>/120 neighborhood nodes" +
        " · 1-hop: " + nb.ring1.length + " of " + nb.total1 + " · 2-hop: " + nb.ring2.length +
        (nb.total1 > RING1MAX ? " · ring-1 capped at " + RING1MAX + " (highest degree first)" : "");
      dirty = true;
    }

    cv.addEventListener("mousemove", function (ev) {
      var r = cv.getBoundingClientRect();
      var mx = ev.clientX - r.left, my = ev.clientY - r.top;
      var bestId = null, bestD = 1e9;
      Object.keys(pos).forEach(function (id) {
        var p = pos[id];
        var d = Math.hypot(p.x - mx, p.y - my);
        if (d < p.r + 6 && d < bestD) { bestD = d; bestId = id; }
      });
      if (bestId !== hoverId) { hoverId = bestId; dirty = true; }
      if (hoverId) {
        var n = byId[hoverId];
        tip.style.display = "block";
        tip.style.left = (mx + 14) + "px";
        tip.style.top = (my + 14) + "px";
        tip.innerHTML = '<div class="t">' + esc(n.title) + '</div>'
          + '<div class="i">' + esc(n.id) + ' · L' + n.layer + ' · deg ' + vdeg(hoverId) + '</div>'
          + '<div style="color:var(--dim);font-size:10px">click to refocus</div>';
        cv.style.cursor = "pointer";
      } else {
        tip.style.display = "none";
        cv.style.cursor = "crosshair";
      }
    });
    cv.addEventListener("mouseleave", function () {
      hoverId = null; tip.style.display = "none"; dirty = true;
    });
    cv.addEventListener("click", function () {
      if (hoverId && hoverId !== currentFocus) focus(hoverId);
    });

    /* ---------- loop: redraw on dirty, skip when hidden ---------- */
    (function loop() {
      requestAnimationFrame(loop);
      if (document.hidden || !root.classList.contains("active")) return;
      if (dirty) { draw(); dirty = false; }
    })();

    resize();
    focus(defaultFocus);
  }
};
