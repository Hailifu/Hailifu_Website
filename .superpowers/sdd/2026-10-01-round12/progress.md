# Ledger - round 12 (owner request 2026-10-01). Checkpoint: git tag/commit before start.
Owner's words:
1. "When open admin portal and close the site cover with some white blour which affact the quality" -> after closing admin, a white blur stays over the site.
2. "Should be able to upload new logos" -> owner uploads the site logo in admin, used everywhere.
3. "When I click on feature work something happens check it for me" -> investigate the click on Featured Work.
Rule: update this file after EVERY finished step + git checkpoint commit.

## Status
- Item 1 (white haze): DONE. Cause: #adminBackdrop inline display:block opacity:1 (bg white 20%) never reset by haltDataSync -> now opacity 0 then display none. ALSO FOUND: Log out never called supabase signOut (adminPanel handlers stopPropagation before the document handler) -> signOutAdminSession() in both adminPanel handlers. Tests RED->GREEN.
- Item 3 (featured click): DONE. Click opened legacy #projectModal (unstyled). Now openFeaturedInGallery(card) -> openGallery(project, index) by matching media file name (fallback: same category, then openProjectLightbox). Slider paused while viewer open (startFeaturedLoop guard + restart on closeGallery). Tests 2/2; live phone screenshot ok.
