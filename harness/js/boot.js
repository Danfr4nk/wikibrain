/* boot.js — harness startup: load indexes, register footer, start the router.
   Detects the wiki password gate: the harness rides the same session, so if
   the wiki session isn't unlocked, every canonical-wiki link will challenge.
   We say so up front instead of failing silently. */
(function () {
  "use strict";

  function gateBanner() {
    var unlocked = false;
    try {
      unlocked = !!sessionStorage.getItem("wb_gate_v1");
    } catch (e) { /* storage unavailable — banner stays */ }
    var el = document.getElementById("gate-banner");
    if (unlocked) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = "This harness shares your wiki session. "
      + '<a href="../index.html">Open the wiki once</a> to unlock it — '
      + "canonical-article links will ask for the password until you do.";
  }

  function boot() {
    var main = document.getElementById("harness-main");
    main.innerHTML = '<div class="loading">Loading derived indexes…</div>';
    window.HarnessStore.load().then(function (S) {
      var g = S.graph;
      document.getElementById("harness-footer").innerHTML =
        "WikiBrain Harness · derived presentation indexes from commit <code>"
        + window.hEsc(g.generated_from_commit.slice(0, 7)) + "</code> · "
        + "read-only: reveals structure, never manufactures it";
      gateBanner();
      window.HarnessViews.render();
    }).catch(function (err) {
      main.innerHTML = '<div class="err">Could not load harness data: '
        + window.hEsc(err.message)
        + '<br><span class="dim">The harness indexes are built by <code>bin/wb-harness</code> into <code>data/</code>.</span></div>';
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
