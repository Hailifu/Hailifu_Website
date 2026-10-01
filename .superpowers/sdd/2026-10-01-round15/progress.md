# Ledger - round 15 (owner request 2026-10-01): 'track down the script errors'
Found: the 22x "Unexpected identifier 'http'" = renderFeaturedReviewsFeed avatar onerror: fallback SVG data URI contains 'http://www.w3.org/2000/svg' (single quotes) inside onerror="this.src='...'" -> syntax error, fallback never works. renderReviews onerror points at ui-avatars again, no onerror=null (retry loop). Every review without a photo loads ui-avatars.com (slow 'load' while that site drops connections; sends names to a third party).
Plan: local initials SVG (no outside service), data-avatar-fallback + one capture-phase error listener.
## Status
- Test 'Reviewer pictures' (round14.spec.js) RED.
