// TAB: sage
PortalTab_sage = {
  html: `
    <div class="panel">
      <h2>▚ THE SAGE — RETRIEVAL CONSOLE</h2>
      <div class="sage-banner">RETRIEVAL ONLY — no LLM backend. Answers are ranked excerpts from the graph; the hook is real, the personality layer is not.</div>
      <p class="sage-sub">Type a question. The Sage tokenizes it, scores every node in the built graph, and composes an answer out of ranked excerpts. Nothing is generated; everything is cited.</p>
      <div class="sage-row">
        <input id="sage-q" placeholder="ask the graph…" autocomplete="off" spellcheck="false">
        <button id="sage-go">ASK ▸</button>
      </div>
      <div class="sage-meta" id="sage-meta"></div>
      <div id="sage-out"></div>
    </div>
  `,
  css: `
    .sage-banner{border:2px solid var(--yel); color:var(--yel); background:#0f0d00;
      padding:8px 10px; font-size:11px; font-weight:bold; letter-spacing:1px; margin-bottom:10px;}
    .sage-sub{font-size:12px; color:var(--dim); margin-bottom:10px; max-width:70ch;}
    .sage-row{display:flex; gap:8px; margin-bottom:8px;}
    #sage-q{flex:1; background:#000; border:2px solid var(--mag); color:var(--lime);
      font:inherit; padding:10px; outline:none;}
    #sage-q:focus{box-shadow:0 0 10px var(--mag);}
    #sage-go{background:var(--mag); color:#000; border:2px solid var(--mag);
      font:inherit; font-weight:900; letter-spacing:2px; padding:10px 16px; cursor:pointer;}
    #sage-go:hover{background:#000; color:var(--mag);}
    .sage-meta{font-size:11px; color:var(--dim); margin-bottom:8px;}
    .sage-hit{border:1px solid var(--line); border-left:3px solid var(--pur);
      padding:10px; margin-bottom:10px; background:#0d0a12;}
    .sage-hit h3{font-size:13px; color:var(--wht); margin:4px 0 6px;}
    .sage-hit .conf{font-size:11px; color:var(--dim);}
    .sage-hit p.ex{font-size:12px; color:#cfcfd6; margin:6px 0;}
    .sage-chips{margin-top:6px;}
    .sage-chip{display:inline-block; font-size:10px; border:1px solid var(--cyn); color:var(--cyn);
      padding:1px 6px; margin:2px 4px 2px 0; text-decoration:none;}
    .sage-chip:hover{background:var(--cyn); color:#000;}
    .sage-restson{font-size:11px; color:var(--dim); margin-top:6px;}
    .sage-restson b{color:var(--yel);}
    .sage-score{font-size:10px; color:var(--dim); float:right;}
  `,
  init: function(root, G){
    var nodes = (G && G.nodes) || [];
    var out = root.querySelector("#sage-out");
    var meta = root.querySelector("#sage-meta");
    var q = root.querySelector("#sage-q");
    var go = root.querySelector("#sage-go");

    function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

    var STOP = {};
    "a,an,the,and,or,but,if,then,else,for,nor,so,yet,of,at,by,to,in,on,up,out,as,is,are,was,were,be,been,being,it,its,this,that,these,those,i,me,my,we,us,our,you,your,he,him,his,she,her,they,them,their,what,which,who,whom,when,where,why,how,do,does,did,can,could,should,would,will,has,have,had,not,no,yes,from,with,about,into,over,after,before,during,between,under,again,once,here,there,all,any,both,each,few,more,most,other,some,such,only,own,same,than,too,very,just,don,now,hereby"
      .split(",").forEach(function(w){STOP[w]=1;});

    function tokenize(s){
      return String(s||"").toLowerCase()
        .replace(/[^a-z0-9\s]/g," ")
        .split(/\s+/)
        .filter(function(t){return t.length>1 && !STOP[t];});
    }

    function nodeHref(n){
      return "../node/" + String(n.id).replace(/:/g,"-") + ".html";
    }

    function excerpt(body){
      body = String(body||"").replace(/\s+/g," ").trim();
      if(body.length<=200) return body;
      return body.slice(0,200).replace(/\s\S*$/,"") + "…";
    }

    function search(query){
      var terms = tokenize(query);
      if(!terms.length){
        meta.textContent = "Query reduced to stopwords and punctuation. Give me real words.";
        out.innerHTML = "";
        return;
      }
      var t0 = performance.now();
      var scored = [];
      nodes.forEach(function(n){
        var title = String(n.title||"").toLowerCase();
        var id = String(n.id||"").toLowerCase().replace(/:/g," ");
        var tags = (n.tags||[]).join(" ").toLowerCase();
        var body = String(n.body||"").toLowerCase();
        var s = 0;
        terms.forEach(function(t){
          if(title.indexOf(t)>=0) s += 5;
          if(id.indexOf(t)>=0) s += 4;
          if(tags.indexOf(t)>=0) s += 3;
          if(body.indexOf(t)>=0) s += 1; /* per-term body cap: 1 max */
        });
        if(s>0){
          s *= 1 + ((n.importance||0)/10); /* importance boost */
          scored.push({n:n, s:s});
        }
      });
      scored.sort(function(a,b){return b.s-a.s;});
      var top = scored.slice(0,8);
      var ms = (performance.now()-t0).toFixed(1);

      if(!top.length){
        meta.textContent = terms.length+" term(s), "+nodes.length+" nodes scanned, 0 matches in "+ms+"ms.";
        out.innerHTML = '<div class="sage-hit"><p class="ex">Nothing in the graph answers that. Try fewer words, or a name, tag, or event — the graph only knows what the build extracted.</p></div>';
        return;
      }
      meta.textContent = top.length+" answer(s) assembled from "+nodes.length+" nodes · "+ms+"ms · terms: "+terms.join(", ");
      var html = "";
      top.forEach(function(hit,i){
        var n = hit.n;
        var chips = '<a class="sage-chip" href="'+esc(nodeHref(n))+'">'+esc(n.id)+'</a>';
        var rests = (n.cites||[]).length
          ? '<div class="sage-restson"><b>RESTS ON:</b> '+(n.cites||[]).map(function(c){return esc(c);}).join(" · ")+'</div>'
          : '<div class="sage-restson"><b>RESTS ON:</b> nothing lower — foundation node</div>';
        html += '<div class="sage-hit"><span class="sage-score">rank #'+(i+1)+' · score '+hit.s.toFixed(1)+'</span>'
          + '<span class="lbadge L'+n.layer+'">L'+n.layer+'</span>'
          + '<span class="conf">confidence: '+esc(n.confidence||"?")+'</span>'
          + '<h3>'+esc(n.title)+'</h3>'
          + '<p class="ex">'+esc(excerpt(n.body))+'</p>'
          + '<div class="sage-chips">'+chips+'</div>'
          + rests
          + '</div>';
      });
      out.innerHTML = html;
    }

    go.onclick = function(){ search(q.value); };
    q.addEventListener("keydown", function(e){ if(e.key==="Enter") search(q.value); });
    meta.textContent = "Graph wired: "+nodes.length+" nodes loaded. No LLM here — just ranked excerpts.";
  }
};
