// TAB: transcript
PortalTab_transcript = {
  html: `
    <div class="panel">
      <h2>&#9618; THE TRANSCRIPT — BUILD HISTORY</h2>
      <p class="tx-note">every extraction brief filed under raw/, newest first.</p>
      <div id="tx-list"></div>
    </div>`,
  css: `
    .tx-note{font-size:11px; color:var(--dim); letter-spacing:1px; margin-bottom:10px;}
    .tx-row{border:1px solid var(--line); background:#000; padding:8px 10px;
      margin-bottom:8px; font-size:12px;}
    .tx-row:hover{border-color:var(--pur);}
    .tx-head{display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap;
      margin-bottom:4px;}
    .tx-batch{color:var(--cyn); font-weight:bold; word-break:break-all;}
    .tx-date{color:var(--yel); font-size:11px;}
    .tx-date.undated{color:var(--dim);}
    .tx-sum{color:#cfcfd6; font-size:12px;}
    .tx-empty{color:var(--dim); padding:8px 0; font-size:12px;}`,
  init: function(root, G, FEEDS){
    var list = root.querySelector("#tx-list");
    function esc(s){return String(s).replace(/[&<>"]/g,function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
    if(!FEEDS || !FEEDS.transcript){
      list.innerHTML = '<div class="tx-empty">feed not built — run bin/wb-feeds</div>';
      return;
    }
    var b = FEEDS.transcript.batches || [];
    if(!b.length){
      list.innerHTML = '<div class="tx-empty">no extraction briefs found in raw/.</div>';
      return;
    }
    list.innerHTML = b.map(function(x){
      var d = x.date
        ? '<span class="tx-date">'+esc(x.date.slice(0,16).replace("T"," "))+'</span>'
        : '<span class="tx-date undated">date unknown</span>';
      return '<div class="tx-row"><div class="tx-head"><span class="tx-batch">'+esc(x.batch)+
        '</span>'+d+'</div><div class="tx-sum">'+esc(x.summary||"—")+'</div></div>';
    }).join("");
  }
};
