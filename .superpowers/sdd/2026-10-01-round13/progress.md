# Ledger - round 13 (owner request 2026-10-01): 'fix the share preview logo too and start the server'.
Found: logo_k1iyvc.png (og:image, twitter:image, apple-touch-icon) is a 1x1 placeholder -> link previews are blank today.
Plan: browser draws 1200x630 share card from current logo, upserts media/site/share-card.png; meta tags point there; admin auto-creates it if missing.
## Status
- DONE: share card (script.js drawShareCard/publishShareCard/ensureShareCard, logoVisibleBox crop), meta tags -> media/site/share-card.png, apple-touch-icon.png 180x180, script v7.5, README round 13. round12 Featured test made robust (clicked a fixed screen point; 1 in ~6 flaked). round12+13 18/18 x2. Dev server started: npx serve -l 3000 .
- OWNER TO DO: open Site Control once (creates the picture); Facebook debugger to refresh old previews; logo_k1iyvc.png unused.
