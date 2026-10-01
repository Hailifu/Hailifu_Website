# Ledger - round 13 (owner request 2026-10-01): 'fix the share preview logo too and start the server'.
Found: logo_k1iyvc.png (og:image, twitter:image, apple-touch-icon) is a 1x1 placeholder -> link previews are blank today.
Plan: browser draws 1200x630 share card from current logo, upserts media/site/share-card.png; meta tags point there; admin auto-creates it if missing.
## Status
