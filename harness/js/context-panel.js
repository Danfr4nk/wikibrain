/* context-panel.js — universal context panel: identity, coverage, top edges,
   chronology presence, links out to the canonical wiki page. Same on every view. */
(function () {
  "use strict";
  var S = null, esc = null;

  var COV_TEXT = {
    ok: '<span class="cov-ok">✓ Resolvable evidence</span>',
    none: '<span class="cov-none">○ No attached evidence found</span>',
    warn: '<span class="cov-warn">⚠ Evidence pointer exists but is unresolved</span>'
  };

  function edgeLabel(e) {
    var t = S.get(e.target), tn = t ? t.title : e.target;
    var mech = e.class === "ASSOCIATIVE" ? "This page links to "
      : e.class === "SEMANTIC" ? (e.relation_original || e.relation) + ": "
      : "";
    return '<span class="edge-class edge-' + e.class + '">' + e.class + "</span> "
      + esc(mech) + '<a href="#/object/' + encodeURIComponent(e.target) + '">' + esc(tn) + "</a>"
      + ' <span class="faint small">(' + e.strength.toFixed(2) + ")</span>";
  }

  function update(route) {
    S = window.HarnessStore; esc = window.hEsc;
    var el = document.getElementById("context-panel");
    var id = route.id || route.params.id;
    if (!id || !S.get(id)) {
      el.innerHTML = '<h4>Context</h4><p class="faint small">Select an object to see its identity, coverage, and top relationships.</p>';
      return;
    }
    var n = S.get(id);
    var cov = S.evidenceCoverage(id);
    var outs = S.edgesOut(id).filter(function (e) { return !S.isKB(e.target); })
      .sort(function (a, b) { return b.strength - a.strength; }).slice(0, 8);
    var ins = S.edgesIn(id).filter(function (e) { return !S.isKB(e.source); })
      .sort(function (a, b) { return b.strength - a.strength; }).slice(0, 5);
    var ev = S.resolvedEvidenceFor(id);
    var tl = S.timelineFor(id);
    var wiki = window.hWikiURL(id), wikitxt = window.hWikiTextURL(id);

    var html = '<h4>Context</h4>'
      + '<div class="sec"><div style="font-weight:bold;font-size:1.05rem">' + esc(n.title) + "</div>"
      + '<div class="faint small">' + esc(id) + "</div>"
      + (n.hub ? ' <span class="badge hub">hub · ' + esc(n.hub_reason || "") + "</span>" : "")
      + (n.domain ? ' <span class="badge">' + esc(n.domain) + "</span>" : "")
      + (n.page_type ? ' <span class="badge">' + esc(n.page_type) + "</span>" : "")
      + "</div>"
      + '<div class="sec"><div class="small dim">Evidence coverage</div>' + COV_TEXT[cov]
      + (ev.length ? ' <span class="faint small">(' + ev.length + " resolvable)</span>" : "") + "</div>"
      + '<div class="sec"><div class="small dim">Relationships</div>'
      + '<div class="small">' + n.out_degree + " out · " + n.in_degree + " in</div>"
      + (n.dead_link_count ? '<div class="small cov-warn">' + n.dead_link_count + " dead link(s) not rendered</div>" : "")
      + "</div>";
    if (outs.length) {
      html += '<div class="sec"><div class="small dim">Top outbound</div><ul class="plain small">'
        + outs.map(function (e) { return "<li>" + edgeLabel(e) + "</li>"; }).join("") + "</ul></div>";
    }
    if (ins.length) {
      html += '<div class="sec"><div class="small dim">Top inbound</div><ul class="plain small">'
        + ins.map(function (e) {
            var s = S.get(e.source), sn = s ? s.title : e.source;
            return "<li><a href=\"#/object/" + encodeURIComponent(e.source) + "\">" + esc(sn) + "</a></li>";
          }).join("") + "</ul></div>";
    }
    html += '<div class="sec"><div class="small dim">Chronology</div><div class="small">'
      + (tl.length ? tl.length + " timeline event(s)" : "No timeline events for this object") + "</div></div>";
    if (wiki) {
      html += '<div class="sec"><div class="small dim">Canonical wiki</div>'
        + '<div class="small"><a href="' + esc(wiki) + '">Open article</a> · <a href="' + esc(wikitxt) + '">Source</a></div></div>';
    }
    el.innerHTML = html;
  }

  window.HarnessContext = { update: update, COV_TEXT: COV_TEXT };
})();
