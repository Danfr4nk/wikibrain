// TAB: gallery
// GALLERY — catalog of media intake. Text-only descriptions + outbound links.
// POLICY: no originals in the repo, no compressed derivatives here, zero bytes
// embedded. share_url anchors are plain outbound <a target="_blank"> — never
// fetched, never proxied, never previewed.
PortalTab_gallery = {
  html: `
<div class="g-wrap">
  <div class="g-head">
    <h2>▚ THE GALLERY</h2>
    <div class="g-policyline">CATALOG ONLY — DESCRIPTIONS + OUTBOUND LINKS. NO BYTES LIVE HERE.</div>
  </div>
  <div class="g-stats" id="g-stats"><span class="g-dim">building…</span></div>
  <div class="g-controls">
    <div class="g-filters" id="g-filters">
      <button data-t="ALL" class="on">ALL</button>
      <button data-t="photo">PHOTO</button>
      <button data-t="video">VIDEO</button>
      <button data-t="album">ALBUM</button>
      <button data-t="image">IMAGE</button>
    </div>
    <input class="g-search" id="g-search" type="text" maxlength="120"
      placeholder="filter descriptions ▸" autocomplete="off" spellcheck="false">
  </div>
  <div class="g-countline" id="g-countline"></div>
  <div class="g-grid" id="g-grid"></div>
  <div class="g-policyfoot">CATALOG ONLY — no originals stored. Compressed derivatives live inside wiki entries.</div>
</div>`,
  css: `
.g-wrap{max-width:1200px; margin:0 auto;}
.g-head h2{font-size:13px; letter-spacing:2px; color:var(--yel); margin-bottom:4px;}
.g-policyline{font-size:11px; color:var(--mag); font-weight:bold; letter-spacing:1px; margin-bottom:10px;}
.g-stats{display:flex; flex-wrap:wrap; gap:6px; margin-bottom:10px; font-size:11px; font-weight:bold;}
.g-stat{border:1px solid var(--line); background:#0a0a0c; padding:4px 10px; letter-spacing:1px;}
.g-stat b{color:var(--lime);}
.g-stat.t-photo b{color:var(--cyn);} .g-stat.t-video b{color:var(--mag);}
.g-stat.t-album b{color:var(--yel);} .g-stat.t-image b{color:var(--pur);}
.g-stat.range b{color:var(--wht);}
.g-dim{color:var(--dim); font-size:12px;}
.g-controls{display:flex; gap:8px; flex-wrap:wrap; align-items:stretch; margin-bottom:8px;}
.g-filters{display:flex; gap:6px; flex-wrap:wrap;}
.g-filters button{font:inherit; font-size:11px; font-weight:bold; letter-spacing:1px;
  padding:6px 10px; background:#111; color:var(--wht); border:2px solid var(--line); cursor:pointer;}
.g-filters button:hover{border-color:var(--mag);}
.g-filters button.on{border-color:var(--lime); color:var(--lime);}
.g-search{flex:1; min-width:200px; background:#000; border:2px solid var(--line);
  color:var(--lime); font:inherit; font-size:12px; padding:6px 10px; outline:none;}
.g-search:focus{border-color:var(--cyn);}
.g-countline{font-size:11px; color:var(--dim); letter-spacing:1px; margin-bottom:8px;}
.g-countline b{color:var(--wht);}
.g-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:10px;}
.g-card{background:var(--panel); border:2px solid var(--line); padding:10px; font-size:12px; position:relative;}
.g-card:hover{border-color:var(--pur);}
.g-top{display:flex; align-items:center; gap:8px; margin-bottom:6px; flex-wrap:wrap;}
.g-id{font-size:10px; color:var(--dim); letter-spacing:1px;}
.g-type{display:inline-block; font-size:10px; font-weight:bold; padding:1px 7px; border:1px solid; letter-spacing:1px;}
.g-type.photo{color:var(--cyn); border-color:var(--cyn);}
.g-type.video{color:var(--mag); border-color:var(--mag);}
.g-type.album{color:var(--yel); border-color:var(--yel);}
.g-type.image{color:var(--pur); border-color:var(--pur);}
.g-date{margin-left:auto; font-size:11px; color:var(--dim);}
.g-desc{color:var(--wht); margin-bottom:8px; word-break:break-word;}
.g-meta{font-size:11px; color:var(--dim); margin-bottom:6px;}
.g-meta b{color:var(--yel); font-weight:bold;}
.g-nodes{display:flex; gap:5px; flex-wrap:wrap; margin-bottom:6px;}
.g-nodechip{font-size:10px; border:1px dashed var(--cyn); color:var(--cyn); padding:1px 6px;}
.g-open{display:inline-block; margin-top:2px; font-size:12px; font-weight:bold; color:var(--lime);
  border:2px solid var(--lime); padding:4px 10px; text-decoration:none; letter-spacing:1px;}
.g-open:hover{background:var(--lime); color:#000;}
.g-nolink{font-size:11px; color:var(--dim); font-style:italic;}
.g-empty{grid-column:1/-1; border:2px dashed var(--line); padding:26px; text-align:center;
  color:var(--dim); font-size:12px; letter-spacing:1px;}
.g-empty b{color:var(--yel);}
.g-policyfoot{margin-top:14px; border-top:2px solid var(--line); padding-top:8px;
  font-size:11px; color:var(--mag); font-weight:bold; letter-spacing:1px;}`,
  init: function(root, G, FEEDS){
    var data = FEEDS ? FEEDS.gallery : null;
    var grid = root.querySelector("#g-grid");
    var statsEl = root.querySelector("#g-stats");
    var countEl = root.querySelector("#g-countline");

    function esc(s){
      return String(s == null ? "" : s)
        .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
    }

    if(!data || !Array.isArray(data.items)){
      statsEl.innerHTML = '<span class="g-stat"><b>FEED</b> NOT BUILT</span>';
      countEl.innerHTML = "";
      grid.innerHTML = '<div class="g-empty"><b>FEED NOT BUILT.</b><br>' +
        'media/registry.json has not been copied to feeds/gallery.json yet.<br>' +
        'nothing to catalog — and no bytes would be shown here even if there were.</div>';
      return;
    }

    var items = data.items.slice();
    var TYPES = ["photo","video","album","image"];
    var state = { type:"ALL", q:"" };

    // --- stats (all computed from the feed) ---
    var counts = {photo:0, video:0, album:0, image:0};
    var dates = [];
    items.forEach(function(it){
      var t = String(it.type || "").toLowerCase();
      if(counts[t] !== undefined) counts[t]++;
      if(it.date) dates.push(String(it.date));
    });
    dates.sort();
    var range = dates.length ? dates[0] + " ▸ " + dates[dates.length-1] : "NO DATES";
    statsEl.innerHTML =
      '<span class="g-stat">TOTAL <b>' + items.length + '</b></span>' +
      '<span class="g-stat t-photo">PHOTO <b>' + counts.photo + '</b></span>' +
      '<span class="g-stat t-video">VIDEO <b>' + counts.video + '</b></span>' +
      '<span class="g-stat t-album">ALBUM <b>' + counts.album + '</b></span>' +
      '<span class="g-stat t-image">IMAGE <b>' + counts.image + '</b></span>' +
      '<span class="g-stat range">RANGE <b>' + esc(range) + '</b></span>';

    // --- card renderer ---
    function card(it){
      var t = String(it.type || "image").toLowerCase();
      if(TYPES.indexOf(t) === -1) t = "image";
      var id = esc(it.id || "no-id");
      var desc = esc(it.description || "(no description)");
      var date = it.date ? esc(it.date) : '<span class="g-nolink">no date</span>';
      var status = it.analysis_status ? esc(it.analysis_status) : "unknown";
      var nodes = (it.linked_nodes || []);
      var nodeHtml = nodes.length
        ? '<div class="g-nodes">' + nodes.map(function(n){
            return '<span class="g-nodechip">' + esc(n) + '</span>';
          }).join("") + '</div>' : "";
      var linkHtml;
      if(it.share_url){
        // plain outbound anchor: never fetched by this page, no prefetch, no embed
        linkHtml = '<a class="g-open" href="' + esc(it.share_url) +
          '" target="_blank" rel="noopener">OPEN &#8599;</a>';
      } else {
        linkHtml = '<span class="g-nolink">no share_url — outbound link unavailable</span>';
      }
      return '<div class="g-card">' +
        '<div class="g-top"><span class="g-id">' + id + '</span>' +
        '<span class="g-type ' + t + '">' + esc(String(it.type || "image").toUpperCase()) + '</span>' +
        '<span class="g-date">' + date + '</span></div>' +
        '<div class="g-desc">' + desc + '</div>' +
        nodeHtml +
        '<div class="g-meta">STATUS: <b>' + status + '</b></div>' +
        linkHtml + '</div>';
    }

    function filtered(){
      var q = state.q.trim().toLowerCase();
      return items.filter(function(it){
        if(state.type !== "ALL" && String(it.type || "").toLowerCase() !== state.type.toLowerCase())
          return false;
        if(q && String(it.description || "").toLowerCase().indexOf(q) === -1)
          return false;
        return true;
      });
    }

    function render(){
      var list = filtered();
      countEl.innerHTML = "SHOWING <b>" + list.length + "</b> / <b>" + items.length + "</b>" +
        (state.type !== "ALL" ? " — TYPE: <b>" + esc(state.type.toUpperCase()) + "</b>" : "") +
        (state.q.trim() ? ' — Q: <b>"' + esc(state.q.trim()) + '"</b>' : "");
      if(!list.length){
        grid.innerHTML = '<div class="g-empty"><b>NOTHING MATCHES.</b><br>' +
          'type filter and/or text query excluded every item.<br>' +
          'loosen the filter — the catalog itself is not empty (' + items.length + ' items).</div>';
        return;
      }
      grid.innerHTML = list.map(card).join("");
    }

    root.querySelector("#g-filters").addEventListener("click", function(e){
      var b = e.target.closest ? e.target.closest("button") : null;
      if(!b || !b.dataset || !b.dataset.t) return;
      state.type = b.dataset.t;
      var btns = root.querySelectorAll("#g-filters button");
      for(var i=0;i<btns.length;i++) btns[i].classList.toggle("on", btns[i]===b);
      render();
    });
    root.querySelector("#g-search").addEventListener("input", function(e){
      state.q = e.target.value;
      render();
    });

    render();
  }
};
