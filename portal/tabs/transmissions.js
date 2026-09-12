// TAB: transmissions
PortalTab_transmissions = {
  html: `
    <div class="panel">
      <h2>&#9618; TRANSMISSIONS</h2>
      <p class="tm-note">the wiki thinking out loud — newest first.</p>
      <div id="tm-list"></div>
    </div>`,
  css: `
    .tm-note{font-size:11px; color:var(--dim); letter-spacing:1px; margin-bottom:10px;}
    .tm-card{border:1px solid var(--line); background:#000; padding:10px 12px;
      margin-bottom:10px;}
    .tm-card:hover{border-color:var(--mag);}
    .tm-title{font-weight:bold; font-size:13px; color:var(--wht); margin-bottom:4px;}
    .tm-meta{display:flex; gap:10px; align-items:center; flex-wrap:wrap;
      font-size:11px; margin-bottom:6px;}
    .tm-date{color:var(--yel);}
    .tm-conf{font-weight:bold; padding:1px 6px; border:1px solid;}
    .tm-conf.high{color:var(--lime); border-color:var(--lime);}
    .tm-conf.medium{color:var(--yel); border-color:var(--yel);}
    .tm-conf.low{color:var(--red); border-color:var(--red);}
    .tm-conf.q{color:var(--dim); border-color:var(--dim);}
    .tm-id{color:var(--dim); font-size:10px;}
    .tm-ex{color:#cfcfd6; font-size:12px; margin-bottom:8px;}
    .tm-open{font-size:12px; color:var(--cyn);}
    .tm-empty{color:var(--dim); padding:8px 0; font-size:12px;}`,
  init: function(root, G, FEEDS){
    var list = root.querySelector("#tm-list");
    function esc(s){return String(s).replace(/[&<>"]/g,function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
    if(!FEEDS || !FEEDS.transmissions){
      list.innerHTML = '<div class="tm-empty">feed not built — run bin/wb-feeds</div>';
      return;
    }
    var items = FEEDS.transmissions.items || [];
    if(!items.length){
      list.innerHTML = '<div class="tm-empty">no findings in the feed.</div>';
      return;
    }
    function confBadge(c){
      c = String(c||"?").toLowerCase();
      var cls = c==="high"?"high":c==="medium"?"medium":c==="low"?"low":"q";
      return '<span class="tm-conf '+cls+'">conf: '+esc(c)+'</span>';
    }
    list.innerHTML = items.map(function(x){
      var ex = x.excerpt || "";
      if(ex.length>=300) ex += "…";
      return '<div class="tm-card">'+
        '<div class="tm-title">'+esc(x.title||x.id)+'</div>'+
        '<div class="tm-meta">'+
          '<span class="tm-date">'+esc(x.created||"undated")+'</span>'+
          confBadge(x.confidence)+
          '<span class="tm-id">&#9618; '+esc(x.id||"")+'</span>'+
        '</div>'+
        '<div class="tm-ex">'+esc(ex)+'</div>'+
        '<a class="tm-open" href="'+esc(x.node_path||"#")+'">open node &#8599;</a>'+
      '</div>';
    }).join("");
  }
};
