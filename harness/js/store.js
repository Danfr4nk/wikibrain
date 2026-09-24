/* store.js — single source of truth for the harness. Loads derived indexes,
   serves object/edge/timeline/evidence lookups. Never fetches the corpus. */
(function () {
  "use strict";

  var BASE = (function () {
    var s = document.currentScript && document.currentScript.src;
    if (s) return s.slice(0, s.lastIndexOf("/js/store.js"));
    return ".";
  })();

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function wikiURL(id) {
    // node ids are corpus paths: wiki/people/annie-ulmer -> ../wiki/people/annie-ulmer.html
    if (!id || id.indexOf("wiki/") !== 0) return null;
    return "../" + id + ".html";
  }

  function wikiTextURL(id) {
    if (!id || id.indexOf("wiki/") !== 0) return null;
    return "../" + id + ".md";
  }

  var store = {
    ready: false,
    graph: null, evidence: null, searchIdx: null, timeline: null,
    nodes: {}, edges: [], outIdx: {}, inIdx: {},

    load: function () {
      var self = this;
      function get(p) {
        return fetch(BASE + "/data/" + p).then(function (r) {
          if (!r.ok) throw new Error("fetch failed: " + p + " (" + r.status + ")");
          return r.json();
        });
      }
      return Promise.all([
        get("page-graph.json"), get("evidence-index.json"),
        get("search-adapter.json"), get("timeline.json")
      ]).then(function (res) {
        self.graph = res[0]; self.evidence = res[1];
        self.searchIdx = res[2]; self.timeline = res[3];
        self.nodes = self.graph.nodes; self.edges = self.graph.edges;
        self.edges.forEach(function (e, i) {
          (self.outIdx[e.source] = self.outIdx[e.source] || []).push(i);
          (self.inIdx[e.target] = self.inIdx[e.target] || []).push(i);
        });
        self.ready = true;
        return self;
      });
    },

    /* -- lookups ------------------------------------------------ */
    get: function (id) { return this.nodes[id] || null; },
    isKB: function (id) { return /^[a-z]{2,4}:/.test(id || ""); },

    edgesOut: function (id, klass) {
      var self = this;
      return (this.outIdx[id] || []).map(function (i) { return self.edges[i]; })
        .filter(function (e) { return !klass || e.class === klass; });
    },
    edgesIn: function (id, klass) {
      var self = this;
      return (this.inIdx[id] || []).map(function (i) { return self.edges[i]; })
        .filter(function (e) { return !klass || e.class === klass; });
    },
    edgesBetween: function (a, b) {
      var self = this;
      return (this.outIdx[a] || []).map(function (i) { return self.edges[i]; })
        .filter(function (e) { return e.target === b; });
    },

    evidenceFor: function (id) {
      return (this.evidence.pages && this.evidence.pages[id]) || [];
    },
    resolvedEvidenceFor: function (id) {
      return this.evidenceFor(id).filter(function (c) { return c.resolved; });
    },
    evidenceCoverage: function (id) {
      // states: ok / none / warn — exact wording rendered by the view
      var items = this.evidenceFor(id);
      if (!items.length) return "none";
      var ok = items.filter(function (c) { return c.resolved; }).length;
      if (ok === items.length) return "ok";
      return "warn";
    },

    timelineFor: function (id) {
      return (this.timeline.events || []).filter(function (e) { return e.page === id; });
    },

    search: function (q) {
      q = (q || "").trim().toLowerCase();
      if (q.length < 2) return [];
      var hits = [];
      (this.searchIdx.objects || []).forEach(function (o) {
        var score = 0, title = (o.title || "").toLowerCase();
        if (title.indexOf(q) === 0) score = 3;
        else if (title.indexOf(q) > -1) score = 2;
        else if ((o.aliases || []).join(" ").toLowerCase().indexOf(q) > -1) score = 2;
        else if ((o.tags || []).join(" ").toLowerCase().indexOf(q) > -1) score = 1;
        else if ((o.sample || "").toLowerCase().indexOf(q) > -1) score = 0.5;
        if (score > 0) hits.push({ obj: o, score: score + Math.min(o.rel_count / 500, 0.4) });
      });
      hits.sort(function (a, b) { return b.score - a.score; });
      return hits.slice(0, 30).map(function (h) { return h.obj; });
    },

    /* -- journey pathfinding -------------------------------------- */
    // BFS over page->page edges (no kb targets), hub-penalized by strength.
    findPaths: function (a, b, maxHops) {
      maxHops = maxHops || 3;
      var self = this;
      if (!this.nodes[a] || !this.nodes[b]) return [];
      var paths = [], queue = [[a]];
      var seen = {};
      while (queue.length && paths.length < 5) {
        var path = queue.shift();
        var last = path[path.length - 1];
        if (path.length - 1 > maxHops) continue;
        var outs = self.edgesOut(last).filter(function (e) {
          return !self.isKB(e.target) && e.class !== "PROVENANCE";
        });
        outs.sort(function (x, y) { return y.strength - x.strength; });
        for (var i = 0; i < outs.length; i++) {
          var e = outs[i], t = e.target;
          if (path.indexOf(t) > -1) continue;
          var np = path.concat([t]);
          if (t === b) { paths.push(np); continue; }
          var key = t + ":" + np.length;
          if (seen[key]) continue;
          seen[key] = true;
          if (np.length - 1 < maxHops) queue.push(np);
        }
      }
      return paths;
    }
  };

  window.HarnessStore = store;
  window.hEsc = esc;
  window.hWikiURL = wikiURL;
  window.hWikiTextURL = wikiTextURL;
})();
