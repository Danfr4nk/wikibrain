/* journey.js — "how do these connect": hub-penalized BFS, honest mechanism
   labels. Hub-mediated hops are labeled ("You reached X through the People
   index"); associative hops say "This page links to Y." Never claims discovery. */
(function () {
  "use strict";

  function render(main, params) {
    var S = window.HarnessStore, esc = window.hEsc;
    var a = params.a || "", b = params.b || "";
    main.innerHTML = '<h2>Journey</h2>'
      + '<p class="dim">How do two objects connect? Paths are read from the corpus graph — never invented. Hub-mediated hops are labeled.</p>'
      + '<div class="controls">'
      + '<input type="search" id="ja" placeholder="from…" value="' + esc(a) + '" style="max-width:220px">'
      + '<input type="search" id="jb" placeholder="to…" value="' + esc(b) + '" style="max-width:220px">'
      + '<button id="jbgo">Find paths</button></div>'
      + '<div id="jbody"></div>';

    function resolve(q) {
      q = (q || "").trim();
      if (S.get(q)) return S.get(q) && { id: q, title: S.get(q).title };
      var hits = S.search(q);
      return hits.length ? hits[0] : null;
    }
    function go() {
      var oa = resolve(document.getElementById("ja").value),
          ob = resolve(document.getElementById("jb").value);
      var body = document.getElementById("jbody");
      if (!oa || !ob) { body.innerHTML = '<p class="dim">Both endpoints need to match an object.</p>'; return; }
      window.HarnessViews.go("/journey?a=" + encodeURIComponent(oa.id) + "&b=" + encodeURIComponent(ob.id));
      var paths = S.findPaths(oa.id, ob.id, 3);
      if (!paths.length) {
        body.innerHTML = '<p class="dim">No path of 3 hops or fewer connects '
          + esc(oa.title) + " to " + esc(ob.title) + " through page links and typed relationships.</p>";
        return;
      }
      var html = "<p class=\"small dim\">" + paths.length + " path(s), strongest first:</p>";
      paths.forEach(function (path, pi) {
        html += '<div class="card"><h3>Path ' + (pi + 1) + " — " + (path.length - 1) + " hop(s)</h3>";
        for (var i = 0; i < path.length; i++) {
          var n = S.get(path[i]);
          html += '<div class="journey-hop"><a href="#/object/' + encodeURIComponent(path[i]) + '">'
            + esc(n ? n.title : path[i]) + "</a>"
            + (n && n.hub ? ' <span class="badge hub">hub</span>' : "") + "</div>";
          if (i < path.length - 1) {
            var es = S.edgesBetween(path[i], path[i + 1]);
            var e = es.sort(function (x, y) { return y.strength - x.strength; })[0];
            var next = S.get(path[i + 1]);
            var label;
            if (next && next.hub) {
              label = "You reached " + esc(next.title) + " — a hub page (" + esc(next.hub_reason || "structural index") + ")";
            } else if (e.class === "ASSOCIATIVE") {
              label = "This page links to " + esc(next ? next.title : path[i + 1]);
            } else {
              label = "Declared: " + esc(e.relation_original || e.relation);
            }
            html += '<div class="journey-arrow">↓ ' + label + "</div>";
          }
        }
        html += "</div>";
      });
      body.innerHTML = html;
    }
    document.getElementById("jbgo").addEventListener("click", go);
    ["ja", "jb"].forEach(function (id) {
      document.getElementById(id).addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
    if (a && b) go();
  }

  window.HarnessViews.register("journey", render);
})();
