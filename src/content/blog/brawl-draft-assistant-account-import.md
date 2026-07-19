---
title: 'The first user is free. The second one costs an API.'
description: 'What was inside v1 of my Brawl Stars draft assistant, and why catering to a second user meant replacing manual data entry with an account import.'
pubDate: 2026-07-19
tags: ['Shipping', 'APIs', 'Brawl Stars']
draft: false
---

I built a [draft assistant for Brawl Stars](/projects/brawl-stars-draft-assistant): a React app that treats brawler upgrades as a resource-allocation problem. V1 had two tabs. **Draft** coached ranked picks live — record the picks in snake order, and it names the role to take and your best owned options. **Brawlers** tracked your collection by role and answered the only question that spends resources: who to max next. The meta sat in a thin, swappable tier-list layer so a balance patch meant editing data, not logic.

V1 had one quiet assumption baked in: its only user was me.

You could see it in the setup. The app needed to know your collection, so you tapped each brawler to set its level. I did that once for my own account and kept it updated by hand. Fine for the author. A wall for anyone else — there are 106 brawlers, so a new user faces minutes of data entry before the app shows any value, and most people reasonably close the tab instead. Worse, hand-entered data goes stale the moment you upgrade someone in-game, and a recommendation computed from wrong levels is worse than no recommendation.

So the main addition since v1: enter your player tag, and the app imports your real collection from the official Supercell API. A few considerations worth penning down:

- **The API token cannot live in the browser.** Anyone can read it there. The fix is one small serverless function that proxies the request, so the token stays server-side and the app stays a static page.
- **Two systems never agree on names.** The API's brawler names and mine didn't match everywhere, so imports go through one canonical name table with aliases. Boring, but it is the difference between "import works" and "import mostly works".
- **"Maxed" is a rule, not a level.** Truly maxed means Power 11 plus a gadget, a star power, both gears, and the hypercharge if one exists. That rule now lives in one unit-tested module instead of in my head.
- **Import replaces typing; it doesn't remove it.** Tapping a brawler still works, because an API can be down and a plan can be hypothetical.

The payoff: setup went from minutes of tapping to a few seconds, recommendations always run on true data, and the app now works for anyone with a player tag, not just the person who wrote it. That is the general lesson I am keeping. Building for yourself, data entry feels free because you only pay it once. The moment a second user exists, it is the first wall they hit — and lowering that wall is a feature, not plumbing.
