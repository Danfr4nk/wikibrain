/* explore.js — the neighborhood: outbound grouped by edge class with honest
   mechanism labels, hub flags, inbound, dead-link honesty. */
(function () {
  "use strict";

  function render(main, params) {
    var S = window.HarnessStore, esc = window.hEsc;
    var id = params.id;
    main.innerHTML = '<h2>Explore</h2>'
      + '<div class="controls"><input type="search" id="exq" placeholder="start from an object… (e.g. annie)" value="' + esc(id || "") + '">'
      + '<button id="exb">Explore</button></div>'
      + '<div id="exbody"><p class="dim">Enter an object above, or pick one from <a href="#/search">search</a>.</p></div>';

    var box = document.getElementById("exq");
    function resolve(q) {
      q = (q || "").trim();
      if (S.get(q)) return { id: q };
      var hits = S.search(q);
      return hits.length ? hits[0] : null;
    }
    function go() {
      var hit = resolve(box.value);
      if (!hit) {
        document.getElementById("exbody").innerHTML = '<p class="dim">No object matches.</p>';
        return;
      }
      show(hit.id);
      window.HarnessViews.go("/explore?id=" + encodeURIComponent(hit.id));
    }
    document.getElementById("exb").addEventListener("click", go);
    box.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });

    function show(oid) {
      var n = S.get(oid);
      if (!n) return;
      var outs = S.edgesOut(oid).filter(function (e) { return !S.isKB(e.target); });
      var byClass = { SEMANTIC: [], ASSOCIATIVE: [], EVIDENCE: [] };
      outs.forEach(function (e) { (byClass[e.class] || (byClass[e.class] = [])).push(e); });
      Object.keys(byClass).forEach(function (k) {
        byClass[k].sort(function (a, b) { return b.strength - a.strength; });
      });
      var ins = S.edgesIn(oid).filter(function (e) { return !S.isKB(e.source); })
        .sort(function (a, b) { return b.strength - a.strength; }).slice(0, 20);

      function li(e, other) {
        var t = S.get(other), name = t ? t.title : other;
        var mech = e.class === "ASSOCIATIVE" ? "This page links to "
          : "Declared: " + esc(e.relation_original || e.relation) + " — ";
        return "<li><span class=\"edge-class edge-" + e.class + "\">" + e.class + "</span> "
          + esc(mech) + '<a href="#/object/' + encodeURIComponent(other) + '">' + esc(name) + "</a>"
          + (t && t.hub ? ' <span class="badge hub" title="structural hub — concentrated linkage, down-weighted">hub</span>' : "")
          + ' <span class="faint small">' + e.strength.toFixed(2)
          + (e.frequency > 1 ? " ×" + e.frequency : "") + "</span></li>";
      }

      var html = '<h3>' + esc(n.title) + '</h3><p class="faint small">' + esc(oid) + "</p>";
      [["SEMANTIC", "Typed relationships"], ["ASSOCIATIVE", "Page links"]].forEach(function (pair) {
        var cls = pair[0], label = pair[1], items = byClass[cls] || [];
        html += '<div class="card"><h3>' + label + " (" + items.length + ")</h3>";
        if (!items.length) html += '<p class="dim">None recorded.</p>';
        else html += "<ul class=\"plain\">" + items.slice(0, 60).map(function (e) { return li(e, e.target); }).join("") + "</ul>";
        html += "</div>";
      });
      html += '<div class="card"><h3>Inbound (' + S.edgesIn(oid).length + ")</h3>";
      if (!ins.length) html += '<p class="dim">Nothing links here yet.</p>';
      else html += "<ul class=\"plain\">" + ins.map(function (e) { return li(e, e.source); }).join("") + "</ul></div>";
      if (n.dead_link_count) {
        html += '<p class="small cov-warn">' + n.dead_link_count + " outbound link(s) on this page point nowhere in the corpus — they are counted, not rendered.</p>";
      }
      document.getElementById("exbody").innerHTML = html;
      if (window.HarnessContext && window.HarnessContext.update) {
        window.HarnessContext.update({ id: oid, params: {} });
      }
    }

    if (id && S.get(id)) { box.value = S.get(id).title; show(id); }
  }

  window.HarnessViews.register("explore", render);
})();
