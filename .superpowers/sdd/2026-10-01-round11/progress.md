# Ledger - round 11 (approved in chat 2026-10-01). Backup: _backup-before-round11-2026-10-01
Restarted after PC shutdown. Owner's words (re-pasted 2026-10-01):
1. Featured work on phone: the image doesn't change.
2. Featured work images AND videos must show in full; apply to the whole site (blur fill behind).
3. Admin Security "Destructive Action PIN" / "Save Admin PIN" - owner asks what it does -> remove it (Supabase login is the security).
4. Aftercare photo: no default/built-in photo ("Looked after after we leave" card).
5. Top drop advert: small square paper note dropping from the top, not distracting.
6. Switch buttons must be in colour (on = green, off = red).
7. Reviews publish immediately on submit, no approval; admin keeps full control (hide/edit/delete).
8. Admin portal: account (email) drop-down sometimes doesn't respond.
9. Question: does Media library link to galleries? If not, what is it for? (answer / link it)
10. Wherever there is an X close button, pulling down should close it too.
11. Whole site theme: if not dark or light chosen -> follow system.
12. Crash safety: don't lose our place when the PC shuts off (git checkpoints + this ledger).
13. Check the review design.

Rule for this round: update this file after EVERY finished step, and make a git checkpoint commit.

## Status
- Item 12 (crash safety): DONE. git repo created, checkpoint commit after every step. core.autocrlf=false.
- Item 1 (featured on phone): DONE. Cause: phone mode = smooth scrollTo in scroll-snap box froze on WebKit after 1 slide; also IntersectionObserver kept watching the removed node after re-render. Fix: phones use transform track (featuredLoopPrefersNativeScroll -> false), observer re-attached per render, premium.css 11.1. WebKit test 9 photos RED->GREEN.
- Item 2 (photos in full): DONE. premium.js initFullMedia (FULL_MEDIA selectors) adds .r11-fit/.r11-fit-host/.r11-fill; premium.css 11.2 (fill z-index -1 inside isolated host; media position untouched). Also fixed featured chip overlapping title. Tests 3/3; screenshots ok (featured phone/desktop, showcase desktop).
- Item 3 (PIN): DONE. Removed getAdminControlPin/verifyAdminControlPin, 3 prompt blocks, Site Control card + handler; deleteProjectById without session now refuses; old localStorage key cleared. ADMIN_SETUP updated. Test RED->GREEN.
- Item 4 (aftercare no default): DONE. defaultIntegrityMediaUrl=''; empty -> #integrityContainer hidden (premium.css 11.4); admin 'Remove photo' + .af-empty preview. round10 reset test updated. e2e/zz-shot.spec.js = scratch screenshot spec (delete at end).
- Item 5 (paper note): DONE. premium.css 11.5 (square 200px/168px note, tape, drop rotate); script.js setTopbarHeight always 0, rhythm 12 s down / 45 s up. topbar.spec.js rewritten 4/4. Screenshots ok.
- Item 6 (switch colours): DONE. premium.css 11.6 green #22a55b on / red #d0453c off + tick/cross in thumb. Test GREEN. Also topbar admin text updated.
- Item 7 (reviews live): DONE. script.js reviewPublicRow strips amount (+phone when live); review_private table (REVIEWS_PRIVATE_TABLE) for amount; submitPublicReview falls back to pending on RLS refusal; spam: honeypot #reviewWebsite (.hm-trap), 3 s min (dataset.openedAt), 10 min per browser (hailifu_review_last_sent), links refused; SQL reviews_instant_publish.sql (created_at col set by trigger, flood guard 8/10min). Admin: On the website / Hidden, 'Show on website', badge = last 2 days, Site health ok. Tests round11 5/5 + round9/10 review tests pass. OWNER MUST RUN reviews_instant_publish.sql.
- Item 8 (account menu): DONE. Menu handled in window capture phase (click + keydown); Escape closes only menu (was closing portal: bug found by test); arrows/Tab. Click failure NOT reproduced (9 tabs x desktop/phone, occlusion check ok) - told owner. Test RED (Escape) -> GREEN.
- Item 9 (media library <-> galleries): DONE. Correction: Media Library -> gallery (one file, tile icon 'to-gallery') ALREADY existed; added gallery-side multi-select picker 'From Media Library' (#sgLibPanel, sgLib). Test GREEN; screenshot ok. Told owner what Media Library is for.
- Item 10 (pull down to close): DONE. premium.js initPullToClose, PULL_TARGETS (9 popups), touch events, translate; tests 4/4 (real CDP touch), RED->GREEN.
- Item 11 (theme system): DONE. head inline script sets data-theme + data-theme-mode; script.js getThemeMode/resolveTheme/applyTheme, cycle opposite->other->system, matchMedia change listener; 3 icons (premium.css 11.11). Tests 3/3. NOTE: Playwright default colorScheme is light -> watch full suite.
- Item 13 (review design): DONE. Cards were fixed 220px -> comment collapsed to 0, photos+reply cut; owner replies hidden site-wide by style.css display:none!important (admin says shown) -> fixed; 'Native' label -> 'Customer review'; header redesigned (name normal case, source+date muted); 'Reply from Hailifu'. premium.css 11.13. Test RED->GREEN; screenshots desk/phone/light ok.
- FINAL: full suite 131 green (part1 92/92 before timeout kill; part2 40 + 2 updated round9 tests). index.html versions bumped r11 / 7.3. Round 11 COMPLETE. Owner to-do: run reviews_instant_publish.sql.
