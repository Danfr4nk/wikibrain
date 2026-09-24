/* router.js — hash router + view registry. Convention: each view module calls
   window.HarnessViews.register(name, renderFn). renderFn(mainEl, params). */
(function () {
  "use strict";

  var views = {};

  function parseHash() {
    var h = location.hash || "#/";
    var parts = h.slice(1).split("?");           // "/object/wiki/a?view=x"
    var segs = parts[0].split("/").filter(Boolean);
    var params = {};
    (parts[1] || "").split("&").forEach(function (kv) {
      if (!kv) return;
      var p = kv.split("=");
      params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || "");
    });
    return { segs: segs, params: params };
  }

  function current() {
    var r = parseHash();
    var s = r.segs;
    if (s.length === 0) return { view: "home", params: r.params };
    if (s[0] === "object") return { view: "object", id: decodeURIComponent(s.slice(1).join("/")), params: r.params };
    if (views[s[0]]) return { view: s[0], params: r.params };
    return { view: "home", params: r.params };
  }

  function render() {
    var main = document.getElementById("harness-main");
    var route = current();
    document.querySelectorAll("#harness-nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-view") === route.view);
    });
    var fn = views[route.view];
    if (!fn) fn = views.home;
    window.scrollTo(0, 0);
    main.innerHTML = "";
    try {
      fn(main, route.params, route.id);
    } catch (err) {
      main.innerHTML = '<div class="err">View failed: ' + window.hEsc(err.message) + "</div>";
    }
    if (window.HarnessContext && window.HarnessContext.update) {
      window.HarnessContext.update(route);
    }
  }

  window.HarnessViews = {
    register: function (name, fn) { views[name] = fn; },
    go: function (path) { location.hash = path; },
    parse: parseHash,
    render: render
  };
  window.addEventListener("hashchange", render);
})();
