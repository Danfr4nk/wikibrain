/* read.js — home + Read/object view. Home: index stats + entry points.
   Object: identity header, grouped relationship lists, timeline slice, evidence
   summary, canonical-wiki links. */
(function () {
  "use strict";

  function section(title, items) {
    if (!items.length) return "";
    return '<div class="card"><h3>' + window.hEsc(title) + "</h3><ul class=\"plain\">" + items.join("") + "</ul></div>";
  }

  function edgeItem(S, esc, e, other) {
    var n = S.get(other), name = n ? n.title : other;
    var mech = e.class === "ASSOCIATIVE" ? "This page links to "
      : e.class === "SEMANTIC" ? "Declared: " + esc(e.relation_original || e.relation) + " — "
      : "";
    return "<li><span class=\"edge-class edge-" + e.class + "\">" + e.class + "</span> "
      + esc(mech) + '<a href="#/object/' + encodeURIComponent(other) + '">' + esc(name) + "</a>"
      + (n && n.hub ? ' <span class="badge hub">hub</span>' : "")
      + ' <span class="faint small">' + e.strength.toFixed(2) + "</span></li>";
  }

  function renderHome(main) {
    var S = window.HarnessStore, esc = window.hEsc;
    var g = S.graph, st = g.stats;
    main.innerHTML =
      '<h2>WikiBrain Harness</h2>'
      + '<p class="dim">A read-only exploration layer over the WikiBrain corpus. It reveals structure; it never manufactures it. The existing wiki stays untouched and canonical.</p>'
      + '<div class="stat-grid">'
      + '<div class="stat"><div class="n">' + st.pages + '</div><div class="l">objects</div></div>'
      + '<div class="stat"><div class="n">' + st.edges + '</div><div class="l">typed edges</div></div>'
      + '<div class="stat"><div class="n">' + S.timeline.stats.events + '</div><div class="l">timeline events</div></div>'
      + '<div class="stat"><div class="n">' + Object.keys(S.evidence.pages || {}).length + '</div><div class="l">pages with evidence pointers</div></div>'
      + "</div>"
      + '<div class="card"><h3>Views</h3><ul class="plain">'
      + '<li><a href="#/explore">Explore</a> <span class="dim">— the neighborhood: outbound, inbound, typed.</span></li>'
      + '<li><a href="#/journey">Journey</a> <span class="dim">— how any two objects connect, hub-mediated paths labeled honestly.</span></li>'
      + '<li><a href="#/time">Time</a> <span class="dim">— the regenerated chronology. Tier filter; Tier 3 never silently omitted.</span></li>'
      + '<li><a href="#/evidence">Evidence</a> <span class="dim">— coverage-aware: shows what evidence exists and where it doesn\'t.</span></li>'
      + '<li><a href="#/search">Search</a> <span class="dim">— title, alias, tag, and text search.</span></li>'
      + "</ul></div>"
      + '<p class="faint small">Indexes generated from commit <code>' + esc(g.generated_from_commit.slice(0, 7)) + '</code> at ' + esc(g.generated_at) + '. The harness is allowed to discover that corpus data is inadequate; it is not allowed to repair that inadequacy implicitly.</p>';
  }

  function renderObject(main, params, id) {
    var S = window.HarnessStore, esc = window.hEsc;
    var n = S.get(id);
    if (!n) {
      main.innerHTML = '<div class="err">Unknown object: ' + esc(id || "(none)") + ". Try <a href=\"#/search\">search</a>.</div>";
      return;
    }
    var outs = S.edgesOut(id), ins = S.edgesIn(id);
    var pageOuts = outs.filter(function (e) { return !S.isKB(e.target); });
    var pageIns = ins.filter(function (e) { return !S.isKB(e.source); });
    var grp = { ASSOCIATIVE: [], SEMANTIC: [], EVIDENCE: [] };
    pageOuts.forEach(function (e) { grp[e.class].push(e); });
    Object.keys(grp).forEach(function (k) {
      grp[k].sort(function (a, b) { return b.strength - a.strength; });
    });
    var ev = S.evidenceFor(id), evOk = ev.filter(function (c) { return c.resolved; });
    var tl = S.timelineFor(id).slice(0, 10);
    var wiki = window.hWikiURL(id);

    var html = '<h2>' + esc(n.title) + "</h2>"
      + '<p class="faint small">' + esc(id)
      + (n.domain ? " · " + esc(n.domain) : "") + (n.page_type ? " · " + esc(n.page_type) : "")
      + (n.hub ? ' · <span class="badge hub">hub</span>' : "") + "</p>"
      + (wiki ? '<p><a href="' + esc(wiki) + '">Open canonical wiki article →</a></p>' : "");

    var outItems = [];
    grp.SEMANTIC.forEach(function (e) { outItems.push(edgeItem(S, esc, e, e.target)); });
    grp.ASSOCIATIVE.forEach(function (e) { outItems.push(edgeItem(S, esc, e, e.target)); });
    html += section("Outbound relationships (" + pageOuts.length + ")", outItems);
    html += section("Inbound links (" + pageIns.length + ")", pageIns
      .sort(function (a, b) { return b.strength - a.strength; }).slice(0, 40)
      .map(function (e) { return edgeItem(S, esc, e, e.source); }));

    var evItems = evOk.slice(0, 20).map(function (c) {
      return "<li><code>" + esc(c.resolved_id) + "</code> <span class=\"faint small\">" + esc(c.node_type || "") + "</span><br><span class=\"dim\">" + esc(c.claim || c.node_title || "") + "</span></li>";
    });
    html += '<div class="card"><h3>Evidence (' + evOk.length + " of " + ev.length + " pointers resolvable)</h3>";
    if (ev.length === 0) html += '<p class="dim">No resolvable evidence is currently attached to this object.</p>';
    else {
      html += '<ul class="plain">' + evItems.join("") + "</ul>";
      if (ev.length > evOk.length) html += '<p class="small cov-warn">Evidence pointers exist in the corpus, but ' + (ev.length - evOk.length) + " referenced path(s) are no longer resolvable.</p>";
      html += '<p class="small"><a href="#/evidence?id=' + encodeURIComponent(id) + '">Full evidence view →</a></p>';
    }
    html += "</div>";

    html += '<div class="card"><h3>Timeline (' + S.timelineFor(id).length + " events)</h3>";
    if (tl.length === 0) html += '<p class="dim">No timeline events for this object.</p>';
    else {
      html += "<ul class=\"plain\">" + tl.map(function (e) {
        return "<li><span class=\"badge t" + e.tier + "\">T" + e.tier + "</span> <strong>" + esc(e.date) + "</strong> — " + esc(e.text.slice(0, 160)) + "</li>";
      }).join("") + "</ul>";
      html += '<p class="small"><a href="#/time">Open Time view →</a></p>';
    }
    html += "</div>";

    main.innerHTML = html;
  }

  window.HarnessViews.register("home", renderHome);
  window.HarnessViews.register("object", renderObject);
})();
