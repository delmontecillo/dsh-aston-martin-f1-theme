# Aston Martin Formula One Team theme for DeepSeek Harness

A client-only Web UI theme built on the Aston Martin Formula One Team livery:
British racing green bodywork, luminous lime flashes, carbon black, and chalk
white. Light mode is the garage at noon; dark mode is the circuit under
floodlights. The host half is intentionally empty.

## Brand mark

Everything here is the supplied Aston Martin artwork, keyed from the green
ground to transparent white glyphs and embedded as data URIs so the marks need
no extra request.

- `assets/wings.png` — the wings badge, mounted on a racing-green plate with a
  lime light bar. Used for the sidebar rail and the blank-session hero.
- `assets/wordmark.png` — the "Aston Martin" wordmark, used in the sidebar brand
  row as a CSS mask, so it picks up `--dsw-alias-label-primary` and stays legible
  in both light and dark instead of being a fixed white bitmap.
- `icon.png` — the plate at icon size for the plugin inventory.

The brand row reads: wings plate, wordmark, then the time-of-day greeting and a
lime-to-green livery rule. The whole block is 25px tall so the 30px brand-name
seat never crops it.

## What it changes

- Both Light and Dark palettes, with every alias token supplied for both modes.
- **Nose stripe** across the top edge: carbon, racing green, lime, and a chalk
  sliver, cut at an angle as it leaves the window.
- **Speed streaks** in the bottom-right corner, rotated and faded into the
  workspace so they read as a printed texture rather than a panel.
- **Wings plates** replace the sidebar brand mark (expanded row and collapsed
  rail) and the blank-session hero mark.
- **Composer timing strip** in `conversation.composer.dock`: five start lights
  that illuminate one by one and go out in a wipe, the team name, the chassis
  code, three sector ticks, and a pulsing DRS pill. Reduced motion is respected.
- **Race lines**: a two-pixel green-to-lime edge on every composer card with a
  lime glow while focused, a three-pixel lime underline on New Session, and a
  three-pixel lime leading edge on the selected Session row.
- Lime text selection, racing-green focus rings, teal secondary marks, amber
  warnings, F1 red for errors, and a success green that stays distinct from the
  lime accent.

## Install

From the DSH Web GUI: **Plugins → Add plugin → local directory path**, then enter
this directory and choose **Install → Enable now**.

The bundle also works through `plugin_manager` with `action: install_bundle` and
this directory as the `target`.

## Files

| File | Role |
|---|---|
| `index.js` | Host half; empty plugin row that keeps the bundle active. |
| `client.js` | Client half; registers the palette, the livery chrome, the wings plates, and the timing strip. |
| `cordis.patch.yml` | Inserts the `aston-martin-f1-theme` row. |
| `locale/*.json` | Plugin title and description for English and Chinese. |
| `icon.png` | Wings plate icon shown in the plugin inventory. |
| `assets/wings.png` | The keyed wings artwork used for the in-app plates. |
