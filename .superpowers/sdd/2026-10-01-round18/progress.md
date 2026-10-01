# Ledger - round 18 (owner 2026-10-01): 'i dont see smart home in the service ... admin Select Service Card popup color doesnt match the brand color not only there in most places'
- Smart Home: card #service-smarthome added (never existed, even in _backup-original); chat assistantCatalog.smarthome + normalizeService; grid 18.1 fixes old gaps. Quote/review/galleries already had it ('Smart home' sentence case like other short labels).
- Colour audit (brand set to #7c3aed, every admin tab, all visible elements): only intended colours off-brand (WhatsApp green, danger red, Site health dots, switches). Off-brand = native browser parts: select picker (Windows blue), checkbox/radio/date accent. Fix 18.2: html accent-color brand; appearance: base-select (Chrome/Edge 135+) with ::picker(select) styled. Service Card options show h3 names.
- Ruling: Safari/iOS keeps native select list (base-select unsupported) - OS look, not Windows blue.
- Tests round18.spec 4/4 RED->GREEN.
- Related suites round9/10/18/topbar/smoke 70/70. Round 18 COMPLETE.
