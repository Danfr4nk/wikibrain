/* time.js — the regenerated chronology. Tier filter (T1/T2/ALL, default T1+T2),
   decade grouping, quoted-text flag, link-backs to page+section. Tier 3 is
   never silently omitted: the toggle names the omission state explicitly. */
(function () {
  "use strict";

  var DEC = function (d) { return d.slice(0, 4) + "s"; };

  function render(main, params) {
    var S = window.HarnessStore, esc = window.hEsc;
    var tiers = (params.tiers || "1,2").split(",").map(Number);
    var q = (params.q || "").toLowerCase();

    main.innerHTML = '<h2>Time</h2>'
      + '<p class="dim">Every dated event the corpus records, regenerated from the pages by <code>bin/wiki-timeline</code>. Events link back to the page and section that carries them.</p>'
      + '<div class="controls">'
      + '<label><input type="checkbox" id="t1" ' + (tiers.indexOf(1) > -1 ? "checked" : "") + '> Tier 1 — anchor events</label>'
      + '<label><input type="checkbox" id="t2" ' + (tiers.indexOf(2) > -1 ? "checked" : "") + '> Tier 2 — notable</label>'
      + '<label><input type="checkbox" id="t3" ' + (tiers.indexOf(3) > -1 ? "checked" : "") + '> Tier 3 — everything else dated</label>'
      + '<input type="search" id="tq" placeholder="filter text…" value="' + esc(params.q || "") + '" style="max-width:200px">'
      + "</div>"
      + '<p class="small faint" id="tnote"></p>'
      + '<div id="tbody"></div>';

    function apply() {
      var t1 = document.getElementById("t1").checked,
          t2 = document.getElementById("t2").checked,
          t3 = document.getElementById("t3").checked,
          f = document.getElementById("tq").value.toLowerCase();
      var on = [];
      if (t1) on.push(1); if (t2) on.push(2); if (t3) on.push(3);
      window.HarnessViews.go("/time?tiers=" + on.join(",") + (f ? "&q=" + encodeURIComponent(f) : ""));
      draw(on, f);
    }
    ["t1", "t2", "t3"].forEach(function (id) {
      document.getElementById(id).addEventListener("change", apply);
    });
    document.getElementById("tq").addEventListener("keydown", function (e) {
      if (e.key === "Enter") apply();
    });

    function draw(on, f) {
      var evs = (S.timeline.events || []).filter(function (e) {
        return on.indexOf(e.tier) > -1 && (!f || e.text.toLowerCase().indexOf(f) > -1);
      });
      var total = (S.timeline.events || []).length;
      var note = "Showing " + evs.length + " of " + total + " events.";
      if (on.indexOf(3) === -1) note += " Tier 3 events are currently hidden — check the box to include them.";
      document.getElementById("tnote").textContent = note;

      // group by decade, cap at 400 for render sanity
      var groups = {}, order = [];
      evs.slice(0, 400).forEach(function (e) {
        var d = DEC(e.date) || "undated";
        if (!groups[d]) { groups[d] = []; order.push(d); }
        groups[d].push(e);
      });
      var html = "";
      order.sort().forEach(function (d) {
        html += "<h3>" + esc(d) + "</h3>";
        groups[d].forEach(function (e) {
          var pg = S.get(e.page);
          html += '<div class="tl-event tier' + e.tier + '"><span class="d">' + esc(e.date) + "</span> "
            + '<span class="badge t' + e.tier + '">T' + e.tier + "</span> "
            + (e.quoted ? '<span class="badge" title="event text is quoted from the page">quoted</span> ' : "")
            + esc(e.text.slice(0, 220))
            + (e.page ? '<br><span class="faint small">↳ <a href="#/object/' + encodeURIComponent(e.page) + '">'
              + esc(pg ? pg.title : e.page) + "</a>" + (e.section ? " · " + esc(e.section) : "") + "</span>" : "")
            + "</div>";
        });
      });
      if (evs.length > 400) html += '<p class="dim small">Render capped at 400 events — narrow with the text filter.</p>';
      document.getElementById("tbody").innerHTML = html;
    }

    draw(tiers, q);
  }

  window.HarnessViews.register("time", render);
})();
