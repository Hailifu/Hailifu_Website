# Ledger - round 19 (owner 2026-10-01): 'your photos could not be uploaded on phone (laptop works); popup doesn't look nice'
- Cause: file type from phone missing/HEIF -> blob sent as non-image -> bucket allowed_mime_types (image/*, video/*) refuses; .heif ext refused by review policy; typeless+extensionless file dropped silently as 'not a photo'. Fix: sniffReviewFileType (magic bytes), prepareReviewUpload (decode via createImageBitmap or <img>, WebP else JPEG, explicit Blob type), size-based timeout, 1 retry, pendingId reused on Try again (already-uploaded items reused).
- Notice overlap cause: style.css .review-form.is-composer-ready .review-composer max-height 620px with overflow visible. Pills white text: style.css .review-service-option span color #fff.
- Not reproduced on a real phone (no device access); fixed the failure classes found. Tests round19 6/6 RED->GREEN; review suites 49/49 after server restart + wording update.
- Round 19 COMPLETE.
