# Ledger - round 14 (owner request 2026-10-01): 'delete logo_k1iyvc.png and Homepage Section Order & Visibility it doesn't work properly. Something must be showing in the browser tab side'
Found: (a) Site Control is rendered into a temp div and only its first child is kept -> click/change listeners on the temp div are lost: Up/Down/Visible never worked. (b) settings were localStorage only (never reached visitors). (c) favicon.ico is a 1x1 placeholder -> blank tab icon.
## Status
- Item 1 (sections): code written (script.js HOME_SECTIONS/bindSectionsCard/loadSectionsSettings, row __sections_settings, premium.css 14.1); tests pending.
- Item 3 (tab icon): DONE (code). favicon.ico 16/32/48 + favicon-32.png drawn from logo.webp on #111112 (scratch make-favicon.js); index.html + 404.html links ?v=r14; head fixIcons keeps each link's own type. logo_k1iyvc.png deleted. Item 2 (delete) DONE.
- Tests: e2e/round14.spec.js 5/5 GREEN; same spec on start-of-round code (worktree e22d935) 5/5 RED.
- README round 14 + script 7.6 committed. Full suite running.
- Full suite: dev server hit 30-min limit mid-run (stale servers held ports). Updated round10:414 (new #scCard switches) + round12:95 (two icon links -> .first()). galleries:60/224/472 + round9:14 also fail on start-of-round code (same 22 'Unexpected identifier http' page errors and ~10-20 s loads on BOTH old and new code with clean servers -> pre-existing/network, not round 14).
