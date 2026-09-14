// TAB: words
PortalTab_words = {
  html: `
    <div class="panel">
      <h2>&#9618; WORDS — THE LEXICON</h2>
      <p class="wx-honest">lexicon of the WRITTEN WIKI, not the message corpus</p>
      <div class="wx-stats" id="wx-stats"></div>
      <h2 style="margin-top:14px;">&#9618; TAG CLOUD — TOP TOKENS</h2>
      <div class="wx-cloud" id="wx-cloud"></div>
      <h2 style="margin-top:14px;">&#9618; TOP TAGS</h2>
      <div class="wx-tags" id="wx-tags"></div>
    </div>`,
  css: `
    .wx-honest{font-size:11px; letter-spacing:1px; color:var(--yel);
      border:1px dashed var(--yel); padding:6px 8px; margin-bottom:10px;}
    .wx-stats{display:flex; gap:18px; flex-wrap:wrap; font-size:12px;}
    .wx-stats .vrow{border-bottom:none;}
    .wx-stats b{color:var(--lime); font-size:16px;}
    .wx-stats .lbl{color:var(--dim); font-size:10px; letter-spacing:1px;}
    .wx-cloud{line-height:2; max-height:340px; overflow-y:auto;
      border:1px solid var(--line); padding:12px; background:#000;}
    .wx-cloud span{margin:0 7px; white-space:nowrap; color:var(--cyn);}
    .wx-cloud span:hover{color:var(--mag);}
    .wx-tags{font-size:12px; max-height:280px; overflow-y:auto;}
    .wx-tagrow{display:flex; justify-content:space-between; padding:4px 0;
      border-bottom:1px dotted #222;}
    .wx-tagrow b{color:var(--mag);}
    .wx-empty{color:var(--dim); font-size:12px; padding:8px 0;}`,
  init: function(root, G, FEEDS){
    var cloud = root.querySelector("#wx-cloud"),
        tags = root.querySelector("#wx-tags"),
        stats = root.querySelector("#wx-stats");
    function esc(s){return String(s).replace(/[&<>"]/g,function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
    if(!FEEDS || !FEEDS.words){
      stats.innerHTML = '<span class="wx-empty">feed not built — run bin/wb-feeds</span>';
      cloud.innerHTML = ""; tags.innerHTML = "";
      return;
    }
    var f = FEEDS.words;
    stats.innerHTML =
      '<div><div class="lbl">TOTAL TOKENS</div><b>'+esc(f.total_tokens||0)+'</b></div>'+
      '<div><div class="lbl">UNIQUE TOKENS</div><b>'+esc(f.unique_tokens||0)+'</b></div>';
    var top = (f.top||[]).slice(0,60);
    if(!top.length){ cloud.innerHTML = '<span class="wx-empty">no tokens in feed.</span>'; }
    else{
      var min = top[top.length-1].n || 1, max = top[0].n || 1;
      cloud.innerHTML = top.map(function(t){
        var s = 12 + 22*(Math.log(t.n||1)-Math.log(min)+0.1)/(Math.log(max)-Math.log(min)+0.1);
        return '<span style="font-size:'+s.toFixed(1)+'px;" title="'+esc(t.n)+'">'+esc(t.w)+'</span>';
      }).join("");
    }
    var tt = f.top_tags||[];
    if(!tt.length){ tags.innerHTML = '<div class="wx-empty">no tags in feed.</div>'; }
    else{
      tags.innerHTML = tt.map(function(t){
        return '<div class="wx-tagrow"><span>#'+esc(t.t)+'</span><b>'+esc(t.n)+'</b></div>';
      }).join("");
    }
  }
};
