# Ledger - round 14 (owner request 2026-10-01): 'delete logo_k1iyvc.png and Homepage Section Order & Visibility it doesn't work properly. Something must be showing in the browser tab side'
Found: (a) Site Control is rendered into a temp div and only its first child is kept -> click/change listeners on the temp div are lost: Up/Down/Visible never worked. (b) settings were localStorage only (never reached visitors). (c) favicon.ico is a 1x1 placeholder -> blank tab icon.
## Status
