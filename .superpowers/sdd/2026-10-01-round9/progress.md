# SDD ledger - plan: docs/superpowers/plans/2026-10-01-round9.md
Setup: Ruling: not a git repo - backups in _backup-before-round9-2026-10-01 stand in for BASE - cost if wrong: no per-task rollback beyond backup.
Pre-flight: tasks share only constants (service key 'networking' in T1 used by T2/T3/T6) and settings rows (T4/T5 used by T6) - names fixed in Global Constraints.
Task 1: RED observed (2 e2e + 1 tool test). Found+fixed: pseudo-project without media fields made old coerceProjectMediaItems recurse forever (page crashed, quote buttons unbound) - media fields added to pseudo-projects; networking test now asserts no page errors. Ruling: service cards now use each gallery's cover photo (then legacy project, then built-in networking photo) and re-render after galleries load - cost if wrong: card photo changes when owner changes a cover.
Task 1: complete (round9 + galleries e2e 40/40; tool 13/13)
Task 2: RED observed (5 tests). Found+fixed: Delete icon overlapped the Move button in narrow tiles (Move now its own full-width row); tick box visual covered the input (input now on top). Ruling: old galleries test switched from the removed 'Move to' select to the Move button - cost: none. Ruling: bulk delete/move run one by one so a refusal never blocks others - cost: slower for very large selections.
Task 2: complete (round9 + galleries 45/45)
Task 3: Ruling: "Add photos" button hidden in the review form — photos were never uploaded anywhere (names only), visitors can't write to storage — cost if wrong: owner wants photos back, needs a storage upload policy.
Task 3: Ruling: phone number is removed when a review is approved — approved rows are publicly readable via the API — cost if wrong: owner loses the phone after approval (can note it before approving).
Task 3: Ruling: admin_setup.sql review policies updated to match reviews_public_submit.sql — re-running admin_setup must not reopen pending reviews to the public — cost if wrong: none.
Task 3: complete (tests: npx playwright test e2e/round9.spec.js e2e/smoke.spec.js → 20/20 pass; review tests 6/6 RED→GREEN)
Task 4: Ruling: defaults = the browser key already in index.html + existing Place ID when Site Control is empty — works as soon as Places API (New) is enabled on that key, without admin setup — cost if wrong: one failed request per visitor per 12 h until settings are saved (fallback box shows).
Task 4: Ruling: fallback no longer invents "5.0 / 100+" stats — they were not real numbers — cost if wrong: counters show the site's own numbers instead.
Task 4: Ruling: Site Control made a live tab — cached clones lost every button listener on the second visit (existing bug) — cost if wrong: one re-render per visit.
Task 4: complete (tests: npx playwright test e2e/round9.spec.js -g "Google reviews feed" → 5/5 pass, RED→GREEN)
Task 5: Ruling: second "Accent colour" picker removed — it set --brand-dark, the likely cause of the "blurred/dark" site; spec names one colour only — cost if wrong: owner loses a control nobody saw working.
Task 5: Ruling: every hard-coded #140c05 text on accent and #fff hover text on accent in premium.css now uses var(--p-on-accent) — otherwise navy accent kept dark text — cost if wrong: none (all uses were text on accent, checked).
Task 5: Ruling: a preview that fails to save snaps back to the saved colour — cost if wrong: none.
Task 5: Found+fixed: Site Control renders into a detached container, so the card is bound via the container, not document.
Task 5: complete (tests: npx playwright test e2e/round9.spec.js -g "Brand colour" → 4/4 pass, RED 4 failed → GREEN)
Task 6: Ruling: leads check reads the leads table directly instead of loadLeadsFromSupabase — that loader silently falls back to this browser's copy, which would hide a broken table — cost if wrong: one extra request.
Task 6: Ruling: Site health is a live tab (fresh checks every visit) plus a "Check again" button — cost if wrong: ~8 requests per visit.
Task 6: complete (tests: npx playwright test e2e/round9.spec.js -g "Site health" → 4/4 pass, RED 4 failed → GREEN)
Task 7: Ruling: account menu was drawn behind page cards (blurred header = own stacking layer) — header lifted (z-index 40); test "account menu opens on top" RED→GREEN — cost if wrong: none.
Task 7: Ruling: asset versions bumped (premium.css/premium.js 20261001r9, script.js 7.1) — round 9 had not bumped them — cost if wrong: none.
Task 7: complete (tests: round9 "Aftercare card" group 5/5; full suite 80/80)
Final review: self-review (no subagent spawned: session rule says spawn only when asked). Fixed: Site health brand check used the unsaved preview colour → now the saved colour.
