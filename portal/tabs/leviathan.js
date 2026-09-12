// TAB: leviathan
PortalTab_leviathan = {
  html: `
    <div class="panel">
      <h2>▦ LEVIATHAN — FULL-TEXT TRAWLER</h2>
      <div class="lev-label">full-text pressure over the built graph, not the raw corpus.</div>
      <p class="lev-sub">Searches title, tags and body of every node, ranked title &gt; tags &gt; body. No interpretation — just the archive, pressurized.</p>
      <input id="lev-q" placeholder="trawl the archive…" autocomplete="off" spellcheck="false">
      <div class="lev-filters" id="lev-filters"></div>
      <div class="lev-meta" id="lev-meta"></div>
      <div id="lev-out"></div>
    </div>
  `,
  css: `
    .lev-label{border:2px solid var(--cyn); color:var(--cyn); background:#001214;
      padding:8px 10px; font-size:11px; font-weight:bold; letter-spacing:1px; margin-bottom:10px;}
    .lev-sub{font-size:12px; color:var(--dim); margin-bottom:10px; max-width:70ch;}
    #lev-q{width:100%; background:#000; border:2px solid var(--cyn); color:var(--lime);
      font:inherit; padding:10px; margin-bottom:8px; outline:none;}
    #lev-q:focus{box-shadow:0 0 10px var(--cyn);}
    .lev-filters{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:8px; font-size:11px;}
    .lev-filters label{display:flex; align-items:center; gap:4px; cursor:pointer;
      border:1px solid var(--line); padding:3px 8px; color:var(--dim);}
    .lev-filters label.on{color:var(--lime); border-color:var(--lime);}
    .lev-filters input{accent-color:var(--lime);}
    .lev-meta{font-size:11px; color:var(--dim); margin-bottom:8px;}
    .lev-hit{border:1px solid var(--line); border-left:3px solid var(--cyn);
      padding:10px; margin-bottom:8px; background:#0a1014;}
    .lev-hit h3{font-size:13px; margin:4px 0 6px;}
    .lev-hit h3 a{color:var(--wht); text-decoration:none;}
    .lev-hit h3 a:hover{color:var(--cyn);}
    .lev-hit .lmeta{font-size:11px; color:var(--dim);}
    .lev-hit p.snip{font-size:12px; color:#cfcfd6; margin-top:6px;}
    .hl{background:var(--cyn); color:#000; font-weight:bold; padding:0 1px;}
    .lev-score{font-size:10px; color:var(--dim); float:right;}
  `,
  init: function(root, G){
    var nodes = (G && G.nodes) || [];
    var out = root.querySelector("#lev-out");
    var meta = root.querySelector("#lev-meta");
    var q = root.querySelector("#lev-q");
    var filtersEl = root.querySelector("#lev-filters");
    var LBL = ["L0 SOURCES","L1 DATA","L2 ENTITIES","L3 INTERP","L4 PATTERNS","L5 SYNTH"];

    function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
    function escRx(s){return String(s).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}

    /* layer filter checkboxes — all on by default */
    var onLayers = {0:true,1:true,2:true,3:true,4:true,5:true};
    LBL.forEach(function(lbl,i){
      var lab = document.createElement("label");
      lab.className = "on";
      var box = document.createElement("input");
      box.type = "checkbox"; box.checked = true;
      box.onchange = function(){
        onLayers[i] = box.checked;
        lab.className = box.checked ? "on" : "";
        run();
      };
      lab.appendChild(box);
      lab.appendChild(document.createTextNode(" "+lbl));
      filtersEl.appendChild(lab);
    });

    function nodeHref(n){
      return "../node/" + String(n.id).replace(/:/g,"-") + ".html";
    }

    function snippet(body, terms){
      var clean = String(body||"").replace(/\s+/g," ").trim();
      if(!clean) return "";
      var low = clean.toLowerCase(), pos = -1, hit = "";
      for(var i=0;i<terms.length;i++){
        var p = low.indexOf(terms[i]);
        if(p>=0 && (pos<0 || p<pos)){ pos = p; hit = terms[i]; }
      }
      var win;
      if(pos<0){ win = clean.slice(0,150); }
      else{
        var start = Math.max(0, pos-60);
        var end = Math.min(clean.length, start+150);
        win = (start>0?"…":"") + clean.slice(start,end) + (end<clean.length?"…":"");
      }
      var out2 = esc(win);
      if(hit){
        var rx = new RegExp("("+escRx(esc(hit))+")","gi");
        out2 = out2.replace(rx,'<span class="hl">$1</span>');
      }
      return out2;
    }

    function run(){
      var raw = q.value.trim();
      if(!raw){
        meta.textContent = "Type something to trawl. "+nodes.length+" nodes in the tank.";
        out.innerHTML = "";
        return;
      }
      var terms = raw.toLowerCase().split(/\s+/).filter(function(t){return t.length>0;});
      if(!terms.length){ out.innerHTML = ""; return; }
      var t0 = performance.now();
      var hits = [];
      nodes.forEach(function(n){
        if(!onLayers[n.layer]) return;
        var title = String(n.title||"").toLowerCase();
        var tags = (n.tags||[]).join(" ").toLowerCase();
        var body = String(n.body||"").toLowerCase();
        var s = 0;
        terms.forEach(function(t){
          if(title.indexOf(t)>=0) s += 10;
          if(tags.indexOf(t)>=0) s += 5;
          /* body: 1 pt per term present, plus small frequency bonus capped at 5 */
          var c = 0, idx = body.indexOf(t);
          while(idx>=0){ c++; idx = body.indexOf(t, idx+1); }
          if(c>0) s += 1 + Math.min(4, c-1);
        });
        if(s>0) hits.push({n:n, s:s});
      });
      hits.sort(function(a,b){return b.s-a.s;});
      var ms = (performance.now()-t0).toFixed(1);
      var activeL = Object.keys(onLayers).filter(function(k){return onLayers[k];}).length;
      meta.textContent = hits.length+" hit(s) across "+nodes.length+" nodes · layers "+activeL+"/6 · "+ms+"ms";

      if(!hits.length){
        out.innerHTML = '<div class="lev-hit"><p class="snip">Leviathan surfaced nothing. Check spelling, drop a word, or widen the layer filters — the graph only contains what the build extracted.</p></div>';
        return;
      }
      var html = "";
      hits.slice(0,100).forEach(function(hit,i){
        var n = hit.n;
        html += '<div class="lev-hit"><span class="lev-score">#'+(i+1)+' · '+hit.s.toFixed(0)+' pts</span>'
          + '<span class="lbadge L'+n.layer+'">L'+n.layer+'</span>'
          + '<h3><a href="'+esc(nodeHref(n))+'">'+esc(n.title)+'</a></h3>'
          + '<div class="lmeta">'+esc(n.id)+' · '+esc(n.type||"node")+' · confidence: '+esc(n.confidence||"?")+'</div>'
          + '<p class="snip">'+snippet(n.body, terms)+'</p>'
          + '</div>';
      });
      if(hits.length>100) html += '<div class="lev-meta">… '+ (hits.length-100) +' more hits below the surface — narrow your terms.</div>';
      out.innerHTML = html;
    }

    q.addEventListener("input", run);
    q.addEventListener("keydown", function(e){ if(e.key==="Enter") run(); });
    meta.textContent = "Tank loaded: "+nodes.length+" nodes. Full-text pressure over the built graph, not the raw corpus.";
  }
};
