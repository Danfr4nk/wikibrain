/* evidence.js — coverage-aware by design. The audit proved ~28% of pages carry
   resolvable evidence; this view leads with that, never hides the gap, and
   uses the exact mandated wording for empty/dead states. */
(function () {
  "use strict";

  var EMPTY_MSG = "No resolvable evidence is currently attached to this object.";
  var DEAD_MSG = "Evidence pointers exist in the corpus, but their referenced source paths are no longer resolvable.";

  function render(main, params) {
    var S = window.HarnessStore, esc = window.hEsc;
    var id = params.id || "";

    var pages = Object.keys(S.evidence.pages || {});
    var resolvedPages = pages.filter(function (p) {
      return S.evidenceFor(p).some(function (c) { return c.resolved; });
    });

    main.innerHTML = '<h2>Evidence</h2>'
      + '<p class="dim">The strongest signal in the corpus is also the sparsest: '
      + resolvedPages.length + " of " + Object.keys(S.nodes).length
      + " pages carry at least one resolvable evidence pointer. This view shows what exists — and names where it doesn't.</p>"
      + '<div class="controls"><input type="search" id="evq" placeholder="object… (e.g. annie)" value="' + esc(id) + '">'
      + '<button id="evb">Show evidence</button></div>'
      + '<div id="evbody">' + (id ? "" : '<p class="dim">Enter an object above.</p>') + "</div>";

    function show(oid) {
      var n = S.get(oid), body = document.getElementById("evbody");
      if (!n) { body.innerHTML = '<p class="dim">No object matches.</p>'; return; }
      var items = S.evidenceFor(oid);
      var ok = items.filter(function (c) { return c.resolved; });
      var dead = items.filter(function (c) { return !c.resolved; });
      var cov = S.evidenceCoverage(oid);

      var html = "<h3>" + esc(n.title) + "</h3>"
        + "<p>" + window.HarnessContext.COV_TEXT[cov] + "</p>";

      var ss = S.sourcesPageSummary(oid);
      if (ss) {
        var clsTxt = Object.keys(ss.classes).sort().map(function (k) {
          return k + "×" + ss.classes[k];
        }).join(" ");
        html += '<div class="card"><h3>Frontmatter sources (' + ss.resolved + " of " + ss.total + " resolve)</h3>"
          + '<p class="faint small">D1 classification — P exact path · N node-ref · A remapped · '
          + 'B ambiguous (never guessed) · C lost · D dead local · E url/prose. ' + esc(clsTxt) + "</p>"
          + "<ul class=\"plain small\">" + ss.entries.map(function (e) {
            return "<li><code>" + esc(e.entry) + "</code>"
              + ' <span class="badge">' + esc(e.class) + "</span>"
              + (e.resolved && e.target ? ' <span class="faint">→ ' + esc(e.target) + "</span>" : "")
              + "</li>";
          }).join("") + "</ul></div>";
      } else {
        html += '<p class="dim small">No frontmatter <code>sources:</code> entries on this page.</p>';
      }

      if (!items.length) {
        html += '<div class="card"><p class="dim">' + EMPTY_MSG + "</p></div>";
      } else {
        html += '<div class="card"><h3>Resolvable pointers (' + ok.length + ")</h3>";
        if (!ok.length) html += '<p class="dim">' + EMPTY_MSG + "</p>";
        else {
          html += "<ul class=\"plain\">" + ok.map(function (c) {
            return "<li><code>" + esc(c.resolved_id) + "</code>"
              + ' <span class="badge">' + esc(c.node_type || "?") + "</span>"
              + (c.confidence ? ' <span class="faint small">confidence: ' + esc(c.confidence) + "</span>" : "")
              + "<br><span class=\"dim\">" + esc(c.claim || c.node_title || "") + "</span>"
              + '<br><span class="faint small">cited at ' + esc(c.source_location || "")
              + (c.resolution === "shorthand" ? " · resolved from shorthand" : "") + "</span></li>";
          }).join("") + "</ul>";
        }
        html += "</div>";
        if (dead.length) {
          html += '<div class="card"><h3>Unresolved pointers (' + dead.length + ")</h3>"
            + '<p class="cov-warn small">' + DEAD_MSG + "</p>"
            + "<ul class=\"plain small\">" + dead.map(function (c) {
                return "<li><code>" + esc(c.cite) + "</code> <span class=\"faint\">— " + esc(c.resolution || "dead")
                  + " · at " + esc(c.source_location || "") + "</span></li>";
              }).join("") + "</ul></div>";
        }
      }
      body.innerHTML = html;
      if (window.HarnessContext && window.HarnessContext.update) {
        window.HarnessContext.update({ id: oid, params: {} });
      }
    }

    function go() {
      var q = document.getElementById("evq").value.trim();
      if (!q) return;
      var hit = S.get(q) ? { id: q } : null;
      var hits = hit ? [hit] : S.search(q);
      if (!hits.length) {
        document.getElementById("evbody").innerHTML = '<p class="dim">No object matches.</p>';
        return;
      }
      window.HarnessViews.go("/evidence?id=" + encodeURIComponent(hits[0].id));
      show(hits[0].id);
    }
    document.getElementById("evb").addEventListener("click", go);
    document.getElementById("evq").addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    if (id && S.get(id)) show(id);
  }

  window.HarnessViews.register("evidence", render);
})();
