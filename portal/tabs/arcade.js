// TAB: arcade
// Three generative canvas toys. Zero external assets. Abstract noise only.
PortalTab_arcade = {
  html: ''
    + '<div class="panel">'
    + '<h2>👾 THE ARCADE — CHAOS ENGINES</h2>'
    + '<div class="arc-note" id="arc-note">chaos engines — no assets were harmed.</div>'
    + '<div class="arc-grid">'
    + '<div class="toy"><h3>▚ CHAOS FIELD</h3><canvas class="toy-cv" data-toy="0"></canvas>'
    + '<div class="toybtns"><button data-act="seed">RESEED</button><button data-act="pause">PAUSE</button><button data-act="gust">GUST</button></div>'
    + '<div class="toycap">particle storm. mouse is a gravity well / repulsor. drag to stir.</div></div>'
    + '<div class="toy"><h3>▚ FLOW</h3><canvas class="toy-cv" data-toy="1"></canvas>'
    + '<div class="toybtns"><button data-act="seed">RESEED</button><button data-act="pause">PAUSE</button><button data-act="swirl">SWIRL</button></div>'
    + '<div class="toycap">value-noise flow field. lines are particles advected by the field.</div></div>'
    + '<div class="toy"><h3>▚ LIFE</h3><canvas class="toy-cv" data-toy="2"></canvas>'
    + '<div class="toybtns"><button data-act="seed">RESEED</button><button data-act="pause">PAUSE</button><button data-act="rule">RULE: B3/S23</button></div>'
    + '<div class="toycap">cellular automaton. RULE swaps conway B3/S23 with highlife B36/S23.</div></div>'
    + '</div>'
    + '</div>',

  css: ''
    + '.arc-note{font-size:11px;color:var(--dim);border:1px dashed var(--line);padding:8px 10px;margin-bottom:10px;letter-spacing:1px;}'
    + '.arc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}'
    + '@media (max-width:1100px){.arc-grid{grid-template-columns:1fr;}}'
    + '.toy{border:2px solid var(--line);background:#08080a;padding:10px;}'
    + '.toy h3{font-size:12px;letter-spacing:2px;color:var(--cyn);margin-bottom:8px;}'
    + '.toy-cv{width:100%;height:280px;display:block;background:#000;border:1px solid var(--line);cursor:crosshair;}'
    + '.toybtns{display:flex;gap:6px;margin-top:8px;}'
    + '.toybtns button{flex:1;font:inherit;font-size:10px;font-weight:bold;letter-spacing:1px;padding:7px 4px;background:#111;color:var(--wht);border:2px solid var(--line);cursor:pointer;}'
    + '.toybtns button:hover{border-color:var(--mag);color:var(--mag);}'
    + '.toybtns button.on{border-color:var(--lime);color:var(--lime);}'
    + '.toycap{font-size:10px;color:var(--dim);margin-top:6px;letter-spacing:1px;}',

  init: function (root, G) {
    "use strict";
    var PAL = ["#ff2bd1", "#9b30ff", "#00e5ff", "#b8ff00", "#ffe900", "#ff3131"];
    var seedBase = ((G.nodes || []).length || 775) * 7919;

    function mulberry32(a) {
      return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        var t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    function hidden() { return document.hidden || !root.classList.contains("active"); }

    var cvs = root.querySelectorAll(".toy-cv");
    root.querySelector("#arc-note").textContent =
      "chaos engines — no assets were harmed. 3 toys · 0 images · seeded by corpus node count: " +
      ((G.nodes || []).length) + ".";

    /* ============ TOY 0: CHAOS FIELD ============ */
    (function () {
      var cv = cvs[0], ctx = cv.getContext("2d");
      var W = 0, H = 0, parts = [], rng, paused = false;
      var mouse = { x: -9999, y: -9999, down: false };
      function resize() { W = cv.width = cv.clientWidth; H = cv.height = 280; }
      function seed() {
        rng = mulberry32(seedBase + 1);
        parts = [];
        for (var i = 0; i < 380; i++) {
          parts.push({ x: rng() * W, y: rng() * H,
            vx: (rng() - 0.5) * 1.6, vy: (rng() - 0.5) * 1.6,
            c: PAL[i % PAL.length], s: 1 + rng() * 2 });
        }
        ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
      }
      function step() {
        ctx.fillStyle = "rgba(0,0,0,0.09)"; ctx.fillRect(0, 0, W, H);
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          var dx = p.x - mouse.x, dy = p.y - mouse.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < 25600 && d2 > 1) {
            var d = Math.sqrt(d2), f = (mouse.down ? -1 : 1) * 260 / d2;
            p.vx += (dx / d) * f; p.vy += (dy / d) * f;
          }
          p.vx += (rng() - 0.5) * 0.12; p.vy += (rng() - 0.5) * 0.12;
          p.vx += (W / 2 - p.x) * 0.00004; p.vy += (H / 2 - p.y) * 0.00004;
          p.vx *= 0.985; p.vy *= 0.985;
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) { p.x = 0; p.vx *= -1; } if (p.x > W) { p.x = W; p.vx *= -1; }
          if (p.y < 0) { p.y = 0; p.vy *= -1; } if (p.y > H) { p.y = H; p.vy *= -1; }
          ctx.fillStyle = p.c; ctx.globalAlpha = 0.8;
          ctx.fillRect(p.x, p.y, p.s, p.s);
        }
        ctx.globalAlpha = 1;
      }
      cv.addEventListener("mousemove", function (ev) {
        var r = cv.getBoundingClientRect();
        mouse.x = ev.clientX - r.left; mouse.y = ev.clientY - r.top;
      });
      cv.addEventListener("mouseleave", function () { mouse.x = -9999; mouse.y = -9999; mouse.down = false; });
      cv.addEventListener("mousedown", function () { mouse.down = true; });
      window.addEventListener("mouseup", function () { mouse.down = false; });
      var btns = cvs[0].parentElement.querySelectorAll(".toybtns button");
      btns[0].onclick = function () { seed(); };
      btns[1].onclick = function () { paused = !paused; btns[1].textContent = paused ? "RESUME" : "PAUSE"; btns[1].classList.toggle("on", paused); };
      btns[2].onclick = function () {
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i], a = rng() * Math.PI * 2;
          p.vx += Math.cos(a) * 7; p.vy += Math.sin(a) * 7;
        }
      };
      window.addEventListener("resize", resize);
      resize(); seed();
      (function loop() {
        requestAnimationFrame(loop);
        if (hidden() || paused) return;
        step();
      })();
    })();

    /* ============ TOY 1: FLOW ============ */
    (function () {
      var cv = cvs[1], ctx = cv.getContext("2d");
      var W = 0, H = 0, parts = [], rng, paused = false, t = 0, swirl = 0;
      var P = new Array(512);
      function hash(x, y) {
        var h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
        return h - Math.floor(h);
      }
      function noise(x, y) {
        var xi = Math.floor(x), yi = Math.floor(y);
        var xf = x - xi, yf = y - yi;
        var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
        var a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
        return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
      }
      function field(x, y) {
        var s = 0.004 + swirl * 0.004;
        var n = noise(x * s + t * 0.05, y * s) + 0.5 * noise(x * s * 2.7, y * s * 2.7 + t * 0.03);
        return n * Math.PI * 4;
      }
      function resize() { W = cv.width = cv.clientWidth; H = cv.height = 280; }
      function seed() {
        rng = mulberry32(seedBase + 2);
        parts = [];
        for (var i = 0; i < 260; i++) {
          parts.push({ x: rng() * W, y: rng() * H, px: 0, py: 0, c: PAL[i % PAL.length], life: 60 + rng() * 160 });
        }
        parts.forEach(function (p) { p.px = p.x; p.py = p.y; });
        ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
      }
      function step() {
        t += 0.008;
        ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0, 0, W, H);
        ctx.lineWidth = 1.2;
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          var a = field(p.x, p.y);
          p.px = p.x; p.py = p.y;
          p.x += Math.cos(a) * 2.2; p.y += Math.sin(a) * 2.2;
          p.life--;
          if (p.life <= 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
            p.x = rng() * W; p.y = rng() * H; p.px = p.x; p.py = p.y;
            p.life = 60 + rng() * 160;
          }
          ctx.strokeStyle = p.c; ctx.globalAlpha = 0.55;
          ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      var btns = cvs[1].parentElement.querySelectorAll(".toybtns button");
      btns[0].onclick = function () { seed(); };
      btns[1].onclick = function () { paused = !paused; btns[1].textContent = paused ? "RESUME" : "PAUSE"; btns[1].classList.toggle("on", paused); };
      btns[2].onclick = function () { swirl = (swirl + 1) % 3; btns[2].classList.toggle("on", swirl > 0); };
      window.addEventListener("resize", resize);
      resize(); seed();
      (function loop() {
        requestAnimationFrame(loop);
        if (hidden() || paused) return;
        step();
      })();
    })();

    /* ============ TOY 2: LIFE ============ */
    (function () {
      var cv = cvs[2], ctx = cv.getContext("2d");
      var W = 0, H = 0, grid, next, cols = 0, rows = 0, rng, paused = false;
      var CELL = 5, frame = 0;
      var rules = [{ b: [3], s: [2, 3], name: "RULE: B3/S23" }, { b: [3, 6], s: [2, 3], name: "RULE: B36/S23" }];
      var ri = 0;
      function resize() {
        W = cv.width = cv.clientWidth; H = cv.height = 280;
        cols = Math.floor(W / CELL); rows = Math.floor(H / CELL);
        seed();
      }
      function seed() {
        rng = mulberry32(seedBase + 3 + frame);
        grid = new Uint8Array(cols * rows); next = new Uint8Array(cols * rows);
        for (var i = 0; i < grid.length; i++) grid[i] = rng() < 0.18 ? 1 : 0;
      }
      function stepOnce() {
        var r = rules[ri];
        for (var y = 0; y < rows; y++) {
          for (var x = 0; x < cols; x++) {
            var n = 0;
            for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) {
              if (!dx && !dy) continue;
              var nx = (x + dx + cols) % cols, ny = (y + dy + rows) % rows;
              n += grid[ny * cols + nx];
            }
            var alive = grid[y * cols + x];
            next[y * cols + x] = alive ? (r.s.indexOf(n) >= 0 ? 1 : 0) : (r.b.indexOf(n) >= 0 ? 1 : 0);
          }
        }
        var tmp = grid; grid = next; next = tmp;
      }
      function draw() {
        ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
        var live = 0;
        for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
          if (!grid[y * cols + x]) continue;
          live++;
          var h = (x * 7 + y * 13) % PAL.length;
          ctx.fillStyle = PAL[h];
          ctx.fillRect(x * CELL, y * CELL, CELL - 1, CELL - 1);
        }
        ctx.fillStyle = "#8a8a93"; ctx.font = '10px "Courier New",monospace';
        ctx.textAlign = "left";
        ctx.fillText(rules[ri].name + " · live " + live + "/" + (cols * rows), 8, H - 8);
      }
      var btns = cvs[2].parentElement.querySelectorAll(".toybtns button");
      btns[0].onclick = function () { frame++; seed(); draw(); };
      btns[1].onclick = function () { paused = !paused; btns[1].textContent = paused ? "RESUME" : "PAUSE"; btns[1].classList.toggle("on", paused); };
      btns[2].onclick = function () { ri = (ri + 1) % rules.length; btns[2].textContent = rules[ri].name; draw(); };
      window.addEventListener("resize", resize);
      resize();
      (function loop() {
        requestAnimationFrame(loop);
        if (hidden()) return;
        if (!paused && ++frame % 7 === 0) { stepOnce(); draw(); }
        else if (frame % 7 === 1) draw();
      })();
    })();
  }
};
