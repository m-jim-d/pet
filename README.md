# Physics Engine Tutorial (PET)

A video walkthrough and tutorial website for developing 2D game-physics engines with Python and Pygame. The site presents a progression of topics — from basic Pygame drawing through 1D and 2D collision engines to Box2D integration — each accompanied by screen-capture videos, syntax-highlighted source code, and PDF assignments.

- **Cloudflare Pages (main site):** [pet.triquence.org](https://pet.triquence.org/)
- **GitHub Pages:** [m-jim-d.github.io/pet](https://m-jim-d.github.io/pet/)
- **Firebase Hosting:** [pet-ttc.web.app](https://pet-ttc.web.app/)

---

## Overview

This site originated as course material for a January-term class at Gustavus Adolphus College. It combines lecture-style exposition with live demonstrations, offering a self-guided path through physics-engine development. The companion code repository contains all the executable Python scripts and modules referenced here:

**[m-jim-d/pet-code](https://github.com/m-jim-d/pet-code?tab=readme-ov-file#readme)** — file descriptions and the assignment progression from A01 through A16.

## Site structure

The main page (`index.html`) is organized into sections that mirror the course progression:

### First steps
- **Installation** — setting up Miniconda, Pygame, pgu, and pybox2d.
- **Pygame basics** (A01) — game loop, event handling, drawing, and screen updates.

### 1D physics engine
- **Pure-Python engine** (A02) — a one-page physics engine rendering to a text string.
- **1D framework** (A02) — air-track simulation introducing Euler's method and the screen/world relationship.
- **Wall collisions and gravity** (A03) — penetration correction and coefficient of restitution.
- **Car-car collisions** (A04) — momentum exchange and stickiness correction.
- **Cursor tethers** (A05) — spring and drag forces from mouse interaction.
- **GUI controls** (A06) — sliders and toggles via pgu.
- **Hollow cars and demos** (A07) — mass visualization, 13 demos, and counting to pi.

### Multiplayer
- **Server/client demo** (A08) — networked game-pad input and state rendering.

### 2D physics engine
- **Vector class** (A09) — 2D vector module and interactive sandbox.
- **2D framework** (A10) — merging the 1D engine with vectors and multiplayer; spring class introduction.
- **Rotating tubes** (A11) — polygon rotation via the vector class.
- **Jets** (A12) — thrust forces and jet-tube inheritance.
- **Jet forces** (A13) — continuous force application with Euler's method.
- **Gun and impulse** (A14) — recoil physics, bullet lifetime management.
- **Final game features** (A15) — Puck Popper and Jello Madness with shields, health, and drones.
- **Perfect Kiss** (A15c) — ideal contact-normal collision resolution and reversibility.

### Box2D integration
- **Pybox2d framework example** (A16a) — bullet shooting in the pybox2d test framework.
- **Pybox2d without the framework** (A16b) — mouse joints, zooming, and force points.
- **Box2D in our air table** (A16c) — full integration bringing non-spherical collisions, rotation, torque, friction, and settling into the game framework.
- **A Physics Story / Odds and Evens** — conservation of angular momentum demonstrated with Box2D.

### Tournament
- A final PDF describing student project entries from the J-term class.

## Content per topic

Each topic on the main page typically provides:

1. **A PDF assignment** — problem statement, reference material, algorithms, and conceptual drawings.
2. **Syntax-highlighted source code** — generated with Pygments, viewable in the browser.
3. **A screen-capture video** — embedded YouTube with a cookie-consent dialog and load-on-demand to minimize page weight.

## Other pages

- **One-pager walkthrough** (`A02.1_sr_walkthrough.html`) — detailed code discussion of the pure-Python engine.
- **Raspberry Pi** (`raspberrypi.html`) — Linux installation notes, RPi performance demos, and keyboard/mouse control summary.
- **Pygame course** (`pygame.html`) — scope and context of the J-term course offering.
- **Revision history** (`pe_tutorial_revhistory.html`) — changelog for the tutorial content.
- **Installation** (`installation.html`) — highlighted source of the install helper script.
- **Sitemap** (`sitemap.html`) — navigation overlay shared across the triquence.org family of sites.

## Relationship to other repositories

| Repository | Role |
|---|---|
| **[m-jim-d/pet-code](https://github.com/m-jim-d/pet-code)** | Python source files (A01–A16), modules, and installation instructions |
| **[m-jim-d/springsandpucks](https://github.com/m-jim-d/springsandpucks)** | Browser-based HTML5 Canvas counterpart using Box2D.js |

The code repo README provides the full file listing and assignment progression. This website README describes the tutorial presentation layer — videos, PDFs, and code-viewing pages — that wraps around that code.