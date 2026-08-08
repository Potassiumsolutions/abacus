# Abacus — Silk Road Reckoner

A tactile edutainment PWA that teaches the ancient **soroban** (Japanese/Asian abacus) by
turning arithmetic into a **Silk Road trading game**. Fill merchant orders by sliding beads,
earn silk / spice / jade, and raise **3D historical cities** block by block from Chang'an to
Constantinople.

In the same family as *Stonecutter* and *DunkHer* — single-file, offline-capable.

## How to play
- **Learn the beads** — a one-rod tutorial. Heaven bead (above the bar) = 5, each of the four
  earth beads (below) = 1. Tap to slide them toward the bar.
- **Trade & Reckon** — the teaching sequence ramps as you travel:
  - *City 1* — just **place a number** on the abacus (learn to read the beads).
  - *City 2 onward* — **alternating addition and subtraction**: the abacus **pre-loads the first
    number** and you work the beads (carrying/borrowing) to the total, e.g. `35 − 26` or `2520 + 6148`.
  - *Final cities* — occasional **multi-step chains** like `24 + 18 − 9`.
  
  Hit *Deliver*; correct answers pay goods and raise blocks of the current city's monument.
  *Reset* returns the beads to the order's starting number.
- **Speed run** — reckon as many as you can in 60 seconds; tracks a best score.
- **The caravan road** — a **geographic map** of the whole Silk Road. Tap any waystation to read
  about it (monument, rods, blurb, build progress) and view *that* city's 3D model.

## Two bead layouts
Every bead is **labeled with its value**, and the layout adapts to the size of the numbers:
- **Soroban (5/4)** for the 2- and 3-rod cities — 1 heaven bead worth 5, four earth beads worth 1.
- **Ten-bead columns** once numbers pass 999 (the 4-rod cities onward) — each rod is just ten
  beads worth 1; slide up to nine across. Simpler to count when the numbers get big.
(Bead and place-value labels can be turned off in Settings.)

## The ten waystations
Digits (rods) ramp from 2 up to **6** across the route.

| # | City | Monument | Rods |
|---|------|----------|------|
| 1 | Chang'an | Great Wild Goose Pagoda | 2 |
| 2 | Dunhuang | Mogao Grotto Shrine | 2 |
| 3 | Turfan | Emin Minaret | 3 |
| 4 | Kashgar | Caravanserai Gate | 3 |
| 5 | Samarkand | Registan Portal | 4 |
| 6 | Bukhara | Kalyan Minaret | 4 |
| 7 | Merv | Round City of Merv | 5 |
| 8 | Samarra | Malwiya Spiral | 5 |
| 9 | Damascus | Umayyad Mosque | 6 |
| 10 | Constantinople | Hagia Sophia | 6 |

Each city needs ~16 delivered orders to complete, then the caravan advances.

## Look
Samarkand-tile palette — deep lapis-blue field, brass-gold and turquoise accents, cream text.
Abacus beads read slate-blue when idle and **gold when active**, so a number lights up as you build it.

## Tech
- Single `index.html` — no build step. Vanilla JS.
- Interactive soroban rendered in the DOM (tap beads; standard soroban physics — tapping a bead
  moves it and every bead between it and the bar).
- 3D monuments = voxel models rendered with **Three.js r128** (CDN). Blocks reveal bottom-up as
  you build; unbuilt blocks show as faint wireframe ghosts.
- Progress + goods saved to `localStorage`.
- PWA: `manifest.json` + `sw.js` (offline after first online visit, which caches Three.js).

## Files
- `index.html` — the whole game
- `manifest.json`, `sw.js` — PWA install + offline
- `icon-192.png`, `icon-512.png` — app icons (rendered from `icon.svg`)

## Run / test
Serve the folder over HTTP (service workers need it) and open `index.html`:

```bash
python -m http.server 8891
```

Then browse to `http://localhost:8891/index.html`. Works offline once loaded.

## Deploy
Static host (e.g. GitHub Pages) — drop the folder in a repo, enable Pages. Same pattern as
Stonecutter/DunkHer.

*Ksol Designs — Paul A.T. Ramey*
