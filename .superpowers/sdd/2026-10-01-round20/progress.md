# Ledger - round 20 (owner 2026-10-01): 'light, dark, system mode doesn't work on admin portal' (+ 'git push')
- Cause: admin built dark-only (--a-* fixed dark, no switch). Fix: html[data-theme='light'] #adminPanel.hm-admin token set; #hmAdminTheme switch (window capture click; setThemeMode shares hailifu_theme with site); 75 rules (#hmMedia/#hmAdsAdmin/#adminPanel) literals -> var(--a-text/--a-muted/--a-bad-text/--a-bg/--a-line-2/--a-raise, old value fallback).
- Also: base-select dropdown value centred + ::picker-icon shown (drawn arrow did not render).
- Tests round20 2/2 RED->GREEN; screenshots all 9 tabs light + dark ok.
- Push: owner chose merge-on-top, backups kept local (untracked + .gitignore), push after round 20. NEEDS the GitHub repo URL (not given yet). No gh CLI on this PC.
- Also: logo card buttons paused while busy (race found by round12:105). Suites round11/12/14/17/18/20: 49 run, 46 + 3 on rerun pass. Round 20 COMPLETE.
- Pushed 2026-10-01: origin=https://github.com/Hailifu/Hailifu_Website.git, merge -s ours of origin/main (GitHub tree == _backup-original), 979e87b..857a366. Pages deploy OK (live shows script v8.2 / css r20). GitHub 'Playwright smoke' FAILED after 11 min (log needs sign-in). Local CI-mode run (CI=1, own server, 1 worker, 2 retries): 162/162 pass in 23.2 min -> failure is GitHub-only; waiting for log from owner.
