# mdtAPE.reader — Learn to Read Faster

An honest, evidence-based speed-reading web app. No "10,000 wpm" promises — it
teaches only the levers reading-science research actually supports, and measures
every gain against comprehension.

**Live:** https://reader.mdtape.app/ · **Deutsch:** https://reader.mdtape.app/de/

## Languages

Fully bilingual (English + German) from one shared engine. The UI language is
chosen by the page you open — `/` (English) or `/de/` (German) — with an EN/DE
switch in the nav. `app.js` is language-agnostic and reads all copy, passages,
and quizzes from a per-language bundle:

- `content.en.js` — English content
- `content.de.js` — German content (`Deutsch`)

To add another language: copy a content bundle, translate it, and add a page
that loads it before `app.js`.

## Run it

It's a static site — no build step.

```bash
# from this folder
python3 -m http.server 4178
# then open http://localhost:4178
```

Or just open `index.html` directly in a browser.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Page structure + content |
| `styles.css` | Design system, two themes (night / paper), all motion |
| `app.js` | All five trainers, the test engine, and local progress storage (language-agnostic) |
| `content.en.js` / `content.de.js` | Per-language copy, passages, and quizzes |
| `de/index.html` | German page (loads `../content.de.js`) |

## The five tools

1. **WPM Test** — timed passage + comprehension quiz → your *real* reading speed
   (speed × comprehension = "effective WPM").
2. **RSVP Reader** — one word/phrase at a time at a fixed point, with the optimal
   recognition point highlighted. Paste your own text.
3. **Guided Pacer** — a moving highlight that cuts regressions (the biggest
   evidence-friendly drill).
4. **Chunk Trainer** — flashes 2–4 word phrases to widen what you take in per glance.
5. **Eye-Span Grid** — a Schulte table for peripheral-vision span.

Progress (best WPM, comprehension trend) is saved in `localStorage` on the device.

## The science (and why this app is honest about it)

- Eye movement is only ~10% of reading time; the bottleneck is word recognition
  and comprehension — so there's a real **speed–accuracy trade-off**
  (Rayner et al., 2016).
- RSVP holds comprehension up to ~350 wpm, then it degrades (Nocera et al., 2018).
- The biggest long-term gains come from **vocabulary and practice**, not tricks.

Full citations are in the page footer.
