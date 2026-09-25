/* search.js — full-text + field search over the search adapter index. */
(function () {
  "use strict";

  function render(main, params) {
    var S = window.HarnessStore, esc = window.hEsc;
    var q = params.q || "";
    main.innerHTML = '<h2>Search</h2>'
      + '<div class="controls"><input type="search" id="hq" placeholder="title, alias, tag, or text…" value="' + esc(q) + '">'
      + '<button id="hqb">Search</button></div>'
      + '<div id="hresults"></div>';
    var box = document.getElementById("hq"), res = document.getElementById("hresults");
    function run() {
      var hits = S.search(box.value);
      if (!hits.length) {
        res.innerHTML = box.value.trim().length < 2
          ? '<p class="dim">Type at least 2 characters.</p>'
          : '<p class="dim">No objects match.</p>';
        return;
      }
      res.innerHTML = "<ul class=\"plain\">" + hits.map(function (o) {
        var badges = (o.domain ? '<span class="badge">' + esc(o.domain) + "</span>" : "")
          + (o.evidence ? '<span class="badge">evidence</span>' : "")
          + (o.chrono ? '<span class="badge">chronology</span>' : "");
        return "<li><a href=\"#/object/" + encodeURIComponent(o.id) + "\">" + esc(o.title) + "</a> " + badges
          + "<br><span class=\"faint small\">" + esc(o.sample || "") + "</span></li>";
      }).join("") + "</ul>";
    }
    document.getElementById("hqb").addEventListener("click", run);
    box.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); });
    if (q) run();
  }

  window.HarnessViews.register("search", render);
})();
