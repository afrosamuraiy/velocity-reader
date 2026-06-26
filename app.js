/* =========================================================================
   mdtAPE.reader — app logic (language-agnostic engine)
   Reads all copy + passages from window.VELO_CONTENT (content.<lang>.js).
   Plain vanilla JS, no build step. Runs from file:// directly.
   ========================================================================= */
(function () {
  'use strict';
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const C = window.VELO_CONTENT;
  const U = C.ui;
  const SAMPLE = C.sample;
  const PASSAGES = C.passages;

  /* ORP — optimal recognition point. Returns pivot letter index. */
  function orp(word) {
    const n = word.replace(/[^a-zA-Z0-9äöüÄÖÜß]/g, '').length;
    if (n <= 1) return 0;
    if (n <= 5) return 1;
    if (n <= 9) return 2;
    if (n <= 13) return 3;
    return 4;
  }
  function renderORP(token) {
    const i = Math.min(orp(token), token.length - 1);
    return `${escapeHtml(token.slice(0, i))}<span class="orp">${escapeHtml(token[i] || '')}</span>${escapeHtml(token.slice(i + 1))}`;
  }
  function escapeHtml(s) { return (s || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
  function tokenize(text) { return text.trim().split(/\s+/).filter(Boolean); }
  function chunkWords(words, size) {
    const out = [];
    for (let i = 0; i < words.length; i += size) out.push(words.slice(i, i + size));
    return out;
  }

  /* ===================================================================
     THEME
     =================================================================== */
  const root = document.documentElement;
  const themeBtn = $('#themeBtn');
  const sun = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"/></svg>`;
  const moon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>`;
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    themeBtn.innerHTML = t === 'paper' ? moon : sun;
    try { localStorage.setItem('vel-theme', t); } catch (e) {}
  }
  themeBtn.addEventListener('click', () =>
    applyTheme(root.getAttribute('data-theme') === 'paper' ? 'night' : 'paper'));
  try { applyTheme(localStorage.getItem('vel-theme') || 'night'); } catch (e) { applyTheme('night'); }

  /* ===================================================================
     REVEAL ON SCROLL
     =================================================================== */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  // Reveal anything already in (or near) the viewport immediately — above-the-fold
  // content shouldn't wait on the observer. Observe the rest for scroll-in.
  const _vh = window.innerHeight || document.documentElement.clientHeight || 0;
  $$('.reveal').forEach(el => {
    if (_vh < 200 || el.getBoundingClientRect().top < _vh * 0.92) el.classList.add('in');
    else io.observe(el);
  });
  // Safety net: never leave content stuck hidden if the observer is throttled.
  window.addEventListener('load', () => {
    setTimeout(() => $$('.reveal:not(.in)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
    }), 600);
  });

  /* ===================================================================
     HERO RSVP loop
     =================================================================== */
  (function heroLoop() {
    const stage = $('#heroWord');
    if (!stage) return;
    const words = tokenize(C.heroLoop);
    let i = 0;
    function tick() {
      const w = words[i % words.length];
      stage.innerHTML = `<span>${renderORP(w)}</span>`;
      i++;
      const delay = 60000 / 320 + (w.length > 7 ? 90 : 0) + (/[.,]$/.test(w) ? 140 : 0);
      setTimeout(tick, delay);
    }
    tick();
  })();

  /* ===================================================================
     TABS
     =================================================================== */
  $$('.tool-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.tool-tab').forEach(t => t.classList.remove('active'));
      $$('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      $(`.panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
    });
  });

  /* ===================================================================
     WPM TEST
     =================================================================== */
  const testSel = $('#testPassage');
  PASSAGES.forEach((p, i) => {
    const o = document.createElement('option');
    o.value = i; o.textContent = p.title; testSel.appendChild(o);
  });
  let testState = { passage: null, start: 0, wpm: 0 };

  $('#testStart').addEventListener('click', () => {
    const p = PASSAGES[+testSel.value];
    testState.passage = p;
    $('#testText').textContent = p.text;
    $('#testIntro').classList.add('hidden');
    $('#testReading').classList.remove('hidden');
    $('#testQuiz').classList.add('hidden');
    $('#testResult').classList.add('hidden');
    $('#testReading').scrollIntoView({ behavior: 'smooth', block: 'center' });
    testState.start = performance.now();
  });

  $('#testDone').addEventListener('click', () => {
    const secs = (performance.now() - testState.start) / 1000;
    const wordCount = tokenize(testState.passage.text).length;
    testState.wpm = Math.round((wordCount / secs) * 60);
    $('#testReading').classList.add('hidden');
    const box = $('#quizBox'); box.innerHTML = '';
    testState.passage.quiz.forEach((item, qi) => {
      const div = document.createElement('div');
      div.className = 'quiz-q';
      div.innerHTML = `<p class="q">${qi + 1}. ${item.q}</p>` +
        item.opts.map((opt, oi) =>
          `<label class="quiz-opt"><input type="radio" name="q${qi}" value="${oi}"><span>${opt}</span></label>`
        ).join('');
      box.appendChild(div);
    });
    $('#testQuiz').classList.remove('hidden');
    $('#testQuiz').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  $('#quizSubmit').addEventListener('click', () => {
    const quiz = testState.passage.quiz;
    let correct = 0;
    quiz.forEach((item, qi) => {
      const chosen = $(`input[name="q${qi}"]:checked`);
      const opts = $$(`.quiz-q:nth-child(${qi + 1}) .quiz-opt`);
      opts[item.a].classList.add('correct');
      if (chosen) {
        const v = +chosen.value;
        if (v === item.a) correct++;
        else opts[v].classList.add('wrong');
      }
    });
    const comp = Math.round((correct / quiz.length) * 100);
    const effective = Math.round(testState.wpm * (correct / quiz.length));
    showTestResult(testState.wpm, comp, correct, quiz.length, effective);
    saveSession(testState.wpm, comp);
    renderProgress();
  });

  function speedLabel(wpm) {
    for (const [max, txt] of U.speed) if (wpm < max) return txt;
    return '';
  }
  function showTestResult(wpm, comp, correct, total, effective) {
    const compColor = comp >= 70 ? 'var(--good)' : 'var(--bad)';
    const warn = comp < 70
      ? `<div class="callout" style="background:color-mix(in srgb,var(--bad) 12%,transparent)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--bad)" stroke-width="2" stroke-linecap="round"><path d="M12 9v4M12 17h.01M10.3 3.9 2 19a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 19L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg><p>${U.warnLow}</p></div>`
      : `<div class="callout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg><p>${U.warnOk}</p></div>`;
    $('#testResult').innerHTML = `
      <div class="result-card">
        <div class="muted" style="text-transform:uppercase;letter-spacing:.12em;font-size:.78rem">${U.resultEyebrow}</div>
        <div class="result-big"><span id="wpmCount">0</span></div>
        <div class="result-sub">${U.wpmUnit} — ${speedLabel(wpm)}</div>
        <div class="result-grid">
          <div class="m"><b style="color:${compColor}">${comp}%</b><span>${U.comprehension}</span></div>
          <div class="m"><b>${correct}/${total}</b><span>${U.correct}</span></div>
          <div class="m"><b style="color:var(--accent)">${effective}</b><span>${U.effective}</span></div>
        </div>
        <p class="note mt">${U.effectiveNote}</p>
        ${warn}
        <button class="btn btn-ghost mt" id="testAgain">${U.takeAnother}</button>
      </div>`;
    $('#testResult').classList.remove('hidden');
    $('#testResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
    countUp($('#wpmCount'), wpm, 900);
    $('#testAgain').addEventListener('click', () => {
      $('#testResult').classList.add('hidden');
      $('#testIntro').classList.remove('hidden');
      $('#train').scrollIntoView({ behavior: 'smooth' });
    });
  }

  function countUp(el, target, dur) {
    const t0 = performance.now();
    function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ===================================================================
     RSVP READER
     =================================================================== */
  const rsvp = { words: [], idx: 0, timer: null, playing: false, chunk: 1 };
  $('#rsvpText').value = SAMPLE;
  function rsvpBuild() {
    rsvp.words = chunkWords(tokenize($('#rsvpText').value || SAMPLE), rsvp.chunk);
    rsvp.idx = 0;
  }
  function rsvpShow() {
    if (rsvp.idx >= rsvp.words.length) { rsvpStop(true); return; }
    const grp = rsvp.words[rsvp.idx];
    $('#rsvpWord').innerHTML = rsvp.chunk === 1 ? renderORP(grp[0]) : escapeHtml(grp.join(' '));
    $('#rsvpBar').style.width = ((rsvp.idx + 1) / rsvp.words.length * 100) + '%';
  }
  function rsvpNext() {
    rsvpShow();
    if (rsvp.idx >= rsvp.words.length) return;
    const wpm = +$('#rsvpWpm').value;
    const grp = rsvp.words[rsvp.idx];
    const base = 60000 / wpm * rsvp.chunk;
    const joined = grp.join(' ');
    const extra = (/[.,;:!?]$/.test(joined) ? base * 0.9 : 0) + (joined.length > 9 ? 50 : 0);
    rsvp.idx++;
    rsvp.timer = setTimeout(rsvpNext, base + extra);
  }
  function rsvpStop(done) {
    rsvp.playing = false; clearTimeout(rsvp.timer);
    $('#rsvpPlay').textContent = U.play;
    $('#rsvpStatus').textContent = done ? U.finished : '';
  }
  $('#rsvpPlay').addEventListener('click', () => {
    if (rsvp.playing) { rsvpStop(false); return; }
    if (rsvp.idx >= rsvp.words.length || rsvp.words.length === 0) rsvpBuild();
    rsvp.playing = true; $('#rsvpPlay').textContent = U.pause; $('#rsvpStatus').textContent = '';
    rsvpNext();
  });
  $('#rsvpReset').addEventListener('click', () => { rsvpStop(false); rsvpBuild(); $('#rsvpWord').textContent = U.ready; $('#rsvpBar').style.width = '0%'; });
  $('#rsvpWpm').addEventListener('input', e => $('#rsvpWpmVal').textContent = e.target.value);
  $('#rsvpText').addEventListener('input', () => { if (!rsvp.playing) rsvpBuild(); });
  segHandler('#rsvpChunk', c => { rsvp.chunk = c; rsvpStop(false); rsvpBuild(); $('#rsvpWord').textContent = U.ready; });
  rsvpBuild();
  $('#rsvpPlay').textContent = U.play;
  $('#rsvpReset').textContent = U.restart;

  /* ===================================================================
     GUIDED PACER
     =================================================================== */
  const pacer = { spans: [], chunks: [], idx: 0, timer: null, playing: false, chunk: 2 };
  $('#pacerInput').value = SAMPLE;
  function pacerBuild() {
    const words = tokenize($('#pacerInput').value || SAMPLE);
    const host = $('#pacerText'); host.innerHTML = '';
    pacer.spans = words.map(w => {
      const s = document.createElement('span'); s.className = 'w'; s.textContent = w;
      host.appendChild(s); host.appendChild(document.createTextNode(' '));
      return s;
    });
    pacer.chunks = [];
    for (let i = 0; i < words.length; i += pacer.chunk) {
      pacer.chunks.push([...Array(Math.min(pacer.chunk, words.length - i))].map((_, k) => i + k));
    }
    pacer.idx = 0;
  }
  function pacerStep() {
    if (pacer.idx >= pacer.chunks.length) { pacerStop(true); return; }
    pacer.spans.forEach(s => s.classList.remove('lit'));
    const group = pacer.chunks[pacer.idx];
    group.forEach(gi => { pacer.spans[gi].classList.add('lit'); });
    pacer.spans.forEach((s, i) => { if (i < group[0]) s.classList.add('done'); });
    pacer.spans[group[0]].scrollIntoView({ block: 'nearest' });
    const wpm = +$('#pacerWpm').value;
    const dur = 60000 / wpm * group.length;
    pacer.idx++;
    pacer.timer = setTimeout(pacerStep, dur);
  }
  function pacerStop(done) {
    pacer.playing = false; clearTimeout(pacer.timer);
    $('#pacerPlay').textContent = done ? U.done : U.start;
    if (done) setTimeout(() => $('#pacerPlay').textContent = U.start, 1500);
  }
  $('#pacerPlay').addEventListener('click', () => {
    if (pacer.playing) { pacerStop(false); return; }
    if (pacer.idx >= pacer.chunks.length || !pacer.chunks.length) pacerBuild();
    pacer.playing = true; $('#pacerPlay').textContent = U.pause;
    pacerStep();
  });
  $('#pacerReset').addEventListener('click', () => { pacerStop(false); pacerBuild(); pacer.spans.forEach(s => s.classList.remove('done', 'lit')); });
  $('#pacerWpm').addEventListener('input', e => $('#pacerWpmVal').textContent = e.target.value);
  $('#pacerInput').addEventListener('input', () => { if (!pacer.playing) pacerBuild(); });
  segHandler('#pacerChunk', c => { pacer.chunk = c; pacerStop(false); pacerBuild(); });
  pacerBuild();
  $('#pacerPlay').textContent = U.start;

  /* ===================================================================
     CHUNK TRAINER
     =================================================================== */
  const chunk = { groups: [], idx: 0, timer: null, playing: false, size: 2 };
  function chunkBuild() {
    chunk.groups = chunkWords(tokenize(SAMPLE), chunk.size);
    chunk.idx = 0;
  }
  function chunkStep() {
    if (!chunk.playing) return;
    if (chunk.idx >= chunk.groups.length) { chunk.idx = 0; }
    const ms = +$('#chunkMs').value;
    $('#chunkWord').textContent = chunk.groups[chunk.idx].join(' ');
    $('#chunkWord').style.opacity = '1';
    chunk.idx++;
    chunk.timer = setTimeout(() => {
      $('#chunkWord').style.opacity = '0.12';
      chunk.timer = setTimeout(chunkStep, Math.max(120, ms * 0.4));
    }, ms);
  }
  $('#chunkPlay').addEventListener('click', () => {
    if (chunk.playing) { chunk.playing = false; clearTimeout(chunk.timer); $('#chunkPlay').textContent = U.start; $('#chunkWord').style.opacity = '1'; return; }
    chunkBuild(); chunk.playing = true; $('#chunkPlay').textContent = U.stop; chunkStep();
  });
  $('#chunkMs').addEventListener('input', e => $('#chunkMsVal').textContent = e.target.value);
  segHandler('#chunkSize', c => { chunk.size = c; if (chunk.playing) chunkBuild(); });
  $('#chunkPlay').textContent = U.start;

  /* ===================================================================
     SCHULTE TABLE
     =================================================================== */
  const schulte = { next: 1, t0: 0, timer: null };
  function schulteBuild() {
    const grid = $('#schulteGrid'); grid.innerHTML = '';
    const nums = [...Array(25)].map((_, i) => i + 1);
    nums.sort(() => Math.random() - 0.5);
    nums.forEach((n, i) => {
      const b = document.createElement('button');
      b.textContent = n;
      if (i === 12) b.classList.add('schulte-center');
      b.addEventListener('click', () => schulteHit(b, n));
      grid.appendChild(b);
    });
    schulte.next = 1; $('#schulteNext').textContent = '1';
    $('#schulteTime').textContent = '0.0s';
  }
  function schulteHit(btn, n) {
    if (!schulte.t0) return;
    if (n === schulte.next) {
      btn.classList.add('hit'); btn.disabled = true;
      schulte.next++;
      $('#schulteNext').textContent = schulte.next <= 25 ? schulte.next : '✓';
      if (schulte.next > 25) {
        clearInterval(schulte.timer);
        const secs = ((performance.now() - schulte.t0) / 1000).toFixed(1);
        $('#schulteTime').textContent = secs + 's';
        $('#schulteNext').innerHTML = `${U.schulteDone} <b>${secs}s</b>`;
        saveSchulte(parseFloat(secs));
        schulte.t0 = 0;
      }
    } else {
      btn.classList.add('miss');
      setTimeout(() => btn.classList.remove('miss'), 300);
    }
  }
  $('#schulteStart').addEventListener('click', () => {
    schulteBuild();
    schulte.t0 = performance.now();
    clearInterval(schulte.timer);
    schulte.timer = setInterval(() => {
      $('#schulteTime').textContent = ((performance.now() - schulte.t0) / 1000).toFixed(1) + 's';
    }, 100);
  });
  schulteBuild();

  /* ===================================================================
     PROGRESS  (localStorage)
     =================================================================== */
  function loadData() {
    try { return JSON.parse(localStorage.getItem('vel-data')) || { sessions: [], schulte: [] }; }
    catch (e) { return { sessions: [], schulte: [] }; }
  }
  function saveData(d) { try { localStorage.setItem('vel-data', JSON.stringify(d)); } catch (e) {} }
  function saveSession(wpm, comp) {
    const d = loadData();
    d.sessions.push({ wpm, comp, t: Date.now() });
    if (d.sessions.length > 30) d.sessions = d.sessions.slice(-30);
    saveData(d);
  }
  function saveSchulte(secs) { const d = loadData(); d.schulte.push(secs); saveData(d); }

  function renderProgress() {
    const d = loadData();
    const s = d.sessions;
    if (!s.length) { return; }
    $('#pgEmpty').classList.add('hidden');
    const best = Math.max(...s.map(x => x.wpm));
    const last = s[s.length - 1].wpm;
    const avgComp = Math.round(s.reduce((a, x) => a + x.comp, 0) / s.length);
    $('#pgBest').textContent = best;
    $('#pgLast').textContent = last;
    $('#pgComp').textContent = avgComp + '%';
    $('#pgComp').style.color = avgComp >= 70 ? 'var(--good)' : 'var(--bad)';
    $('#pgSessions').textContent = s.length;
    const spark = $('#pgSpark'); spark.innerHTML = '';
    const max = Math.max(...s.map(x => x.wpm), 1);
    s.slice(-16).forEach(x => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = '4px';
      bar.title = `${x.wpm} wpm · ${x.comp}%`;
      spark.appendChild(bar);
      requestAnimationFrame(() => { bar.style.height = Math.max(6, (x.wpm / max) * 100) + '%'; });
    });
  }
  $('#pgClear').addEventListener('click', () => {
    if (confirm(U.clearConfirm)) {
      try { localStorage.removeItem('vel-data'); } catch (e) {}
      $('#pgBest').textContent = $('#pgLast').textContent = '—';
      $('#pgComp').textContent = '—'; $('#pgSessions').textContent = '0';
      $('#pgSpark').innerHTML = ''; $('#pgEmpty').classList.remove('hidden');
    }
  });
  renderProgress();

  /* ---------- helper: segmented control ---------- */
  function segHandler(sel, cb) {
    const seg = $(sel); if (!seg) return;
    seg.addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      $$('button', seg).forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      cb(+btn.dataset.c);
    });
  }

  /* ===================================================================
     MOTION POLISH — scroll progress, nav condense, parallax, pointer glow
     =================================================================== */
  (function motion() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // top scroll-progress bar + nav scroll state
    const prog = document.createElement('div');
    prog.className = 'scroll-prog';
    document.body.appendChild(prog);
    const nav = $('header.nav');
    let ticking = false;
    function onScroll() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const sc = el.scrollTop || document.body.scrollTop;
      prog.style.width = (max > 0 ? (sc / max) * 100 : 0) + '%';
      if (nav) nav.classList.toggle('scrolled', sc > 24);
      ticking = false;
    }
    document.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    // mobile hamburger menu
    const burger = $('#navBurger'), navLinks = $('#navLinks');
    if (burger && navLinks) {
      const setOpen = (open) => {
        navLinks.classList.toggle('open', open);
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      burger.addEventListener('click', (e) => { e.stopPropagation(); setOpen(!navLinks.classList.contains('open')); });
      navLinks.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => setOpen(false)));
      document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !burger.contains(e.target)) setOpen(false);
      });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    }

    // Pointer-reactive depth — only on devices with a real pointer (skip touch).
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return;

    // aurora reacts subtly to pointer; cards/banners get a pointer-follow glow
    const aurora = $('.aurora');
    const glowEls = $$('.card, .banner');
    let raf = 0, px = 0, py = 0;
    window.addEventListener('pointermove', (e) => {
      px = e.clientX; py = e.clientY;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        if (aurora) {
          const x = (px / window.innerWidth - 0.5) * 26;
          const y = (py / window.innerHeight - 0.5) * 26;
          aurora.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    }, { passive: true });

    glowEls.forEach(el => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  })();

})();
