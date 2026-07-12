---
title: 'Automating a fishing grind, twice'
description: 'Two AutoHotkey scripts that turned a 5,000-catch fishing grind in Neverness to Everness into a background task, and survived the patch that killed the first one.'
problem: 'Levelling fishing to 10 in Neverness to Everness takes 152,450 EXP, roughly 5,000 catches of a manual minigame. On top of that, 700 City Stamina of weekly rewards sit behind the same repetitive loop, every single week.'
impact: '15 to 24 hours of active clicking → fully unattended'
pubDate: 2026-05-07
updatedDate: 2026-07-11
tags: ['Automation', 'AutoHotkey', 'Reverse engineering']
stack: ['AutoHotkey v2', 'Pixel detection', 'Window Spy']
draft: false
order: 1
---

## What is Neverness to Everness?

*Neverness to Everness* (NTE) is a free-to-play open-world RPG set in a modern city. Alongside the main story it has life skills that reward repetition, and fishing is the grindiest of them: a short timing minigame you play once per catch, with a levelling track and a chunk of the weekly currency economy hanging off it.

I play NTE casually and enjoy it. The fishing grind is the part I do not enjoy, so I automated it. Twice, because the first script got patched out.

## The problem, in numbers

Fishing pays out twice:

- **Levelling it to 10** unlocks titles, Expansion Cores and an exclusive skin.
- **The weekly economy runs through it.** My account caps at 700 City Stamina a week, each fish sold consumes 6 to 10 stamina, and every stamina point pays 1,000 Fons. Spend all 700 and that is 700,000 Fons a week for progression items like Beetle Coins.

The catch is the minigame:

- Each fish takes 11 to 16 seconds of focused input, plus casting, waiting for the bite and closing dialogs.
- Reaching level 10 needs 152,450 EXP, roughly 5,000 catches. That is 15 to 24 hours of nonstop clicking.
- Draining the weekly stamina cap needs another ~70 to 115 fish, every week, forever. Other minigames can also spend stamina, but all of them demand active play.

So the question was never "how do I fish faster". It was "how do I stop paying attention".

## Attempt 1: don't play the minigame, skip it

While poking at the UI I noticed a bug: clicking an invisible chat menu at the bottom left of the screen during a catch bypassed the minigame entirely. The fish landed by itself when the timer expired.

That decided the approach. Instead of building something clever, I wrote about 40 lines of AutoHotkey v2 to run the loop: cast, wait for the bite, hook, trigger the bug, close the dialogs, repeat.

<div class="img-placeholder"><span>The script running in-game, with its status tooltip visible over the fishing spot</span></div>

Three problems surfaced, and each fix was small once the cause was clear:

- **The stop key did nothing.** Long `Sleep` calls block AutoHotkey from reading hotkeys, so F9 was being ignored for up to 15 seconds. I replaced every long sleep with a `WaitCheck()` helper that sleeps in 50ms slices and checks a stop flag each slice.
- **A successful catch needs two Esc presses, a failed one needs one.** Sending a blind second Esc opened random game menus. Fix: after the first Esc, read one pixel where the result screen sits. Right colour means a catch, send the second Esc. Wrong colour, skip it.
- **The pixel check failed on my second monitor**, doubling the cycle time from 26 to 52 seconds. Likely a colour-profile difference between panels. I timeboxed the debugging, wrote the workaround down (run the game on the primary monitor) and moved on. Not every bug deserves a root cause.

<div class="img-placeholder"><span>Window Spy reading the screen coordinates and pixel colour used for the catch check</span></div>

Benchmark: 130 fish in 2 hours, hands off. Good enough. Shipped.

<div class="img-placeholder"><span>The results screen after a session: fish caught and fishing EXP earned</span></div>

## Then the devs patched it

A few weeks later the chat-menu bug was fixed and v1 died overnight. Fair enough. Exploits are borrowed time, and I had knowingly traded durability for a one-night build.

The durable version had to play the minigame for real. The minigame is a horizontal bar: a green target zone drifts around and you hold A or D to keep a yellow line inside it.

<div class="img-placeholder"><span>The fishing minigame bar: the green target zone and the yellow line the script steers</span></div>

v2 replaces the exploit with a control loop:

- Every 50ms, three `PixelSearch` scans read the bar: one finds the yellow line, two find the left and right edges of the green zone.
- The script computes the zone's centre and steers with A and D, with a 15-pixel dead zone so it does not jitter when already on target.
- When the green zone disappears, the fish is caught and the loop exits. A 20-second timeout stops it from ever hanging.

The rewrite actually deleted code elsewhere: since the minigame is now completed legitimately, every catch succeeds, so the conditional pixel check and the two-Esc logic from v1 went away.

## What this was really about

- **Match the solution to its lifespan.** The bug exploit was the right first move: minimal effort, immediate payoff, and I knew it was temporary. When the platform shifted, I rebuilt on mechanics the developers intend to keep.
- **Measure before optimising.** The benchmark numbers (11 to 16s manual, 26s scripted, 52s when the pixel check broke) are what turned "it feels slow" into decisions.
- **Know when to stop debugging.** The second-monitor issue had a one-line workaround. I documented it and spent the time on the loop instead.

The scripts still run every week, quietly converting 700 stamina into 700,000 Fons while I do something else.
