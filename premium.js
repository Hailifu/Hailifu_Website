/* ==========================================================================
   HAILIFU premium.js (2026-09-29)
   Small, self-contained enhancements that sit on top of script.js:
   1. Quote form service chips (drive the hidden #popupService select)
   2. Tile animations: staggered entrance, pointer tilt + light, re-filter pop
   Everything degrades to plain content if this file fails to load.
   ========================================================================== */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    /* ---------------- 1. Quote form chips ---------------- */
    var SERVICE_ICONS = {
        cctv: 'fa-video',
        electrical: 'fa-bolt',
        networking: 'fa-network-wired',
        airconditioning: 'fa-snowflake',
        gates: 'fa-door-open',
        fencing: 'fa-shield-halved',
        solar: 'fa-solar-panel',
        smarthome: 'fa-house-signal',
        blindcurtain: 'fa-table-columns'
    };
    var SHORT_LABELS = {
        cctv: 'CCTV',
        electrical: 'Electrical',
        networking: 'Networking',
        airconditioning: 'Air conditioning',
        gates: 'Gate automation',
        fencing: 'Electric fence',
        solar: 'Solar',
        smarthome: 'Smart home',
        blindcurtain: 'Blinds & curtains'
    };

    function initQuoteChips() {
        var select = document.getElementById('popupService');
        var holder = document.getElementById('hmQuoteChips');
        var form = document.getElementById('popupQuoteForm');
        var error = document.getElementById('hmServiceError');
        if (!select || !holder || !form) return;

        Array.prototype.forEach.call(select.options, function (opt) {
            if (!opt.value) return;
            var chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'hm-chip';
            chip.setAttribute('role', 'radio');
            chip.setAttribute('aria-checked', 'false');
            chip.dataset.service = opt.value;
            chip.innerHTML = '<i class="fas ' + (SERVICE_ICONS[opt.value] || 'fa-screwdriver-wrench') + '" aria-hidden="true"></i><span></span>';
            chip.querySelector('span').textContent = SHORT_LABELS[opt.value] || opt.textContent;
            holder.appendChild(chip);
        });

        function sync() {
            Array.prototype.forEach.call(holder.querySelectorAll('.hm-chip'), function (chip) {
                var on = chip.dataset.service === select.value;
                chip.classList.toggle('is-selected', on);
                chip.setAttribute('aria-checked', on ? 'true' : 'false');
            });
            if (select.value && error) error.hidden = true;
        }

        holder.addEventListener('click', function (e) {
            var chip = e.target.closest('.hm-chip');
            if (!chip) return;
            select.value = chip.dataset.service;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            sync();
        });
        // script.js sets the service when a "Request a Quote" button is clicked on a service card
        select.addEventListener('change', sync);
        form.addEventListener('reset', function () { setTimeout(sync, 0); });

        // A service must be picked; runs before script.js's submit handler
        document.addEventListener('submit', function (e) {
            if (e.target !== form || select.value) return;
            e.preventDefault();
            e.stopImmediatePropagation();
            if (error) error.hidden = false;
            var first = holder.querySelector('.hm-chip');
            if (first) first.focus();
        }, true);

        sync();
    }

    /* ---------------- 2. Tile animations ---------------- */
    var TILE_SELECTOR = '#hmScGrid .hm-sc-card, #services .services-grid > .card';

    function initTileEntrance() {
        if (reduceMotion || !('IntersectionObserver' in window)) return;
        document.documentElement.classList.add('hm-anim');
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                // stagger tiles that enter together (per row feel)
                var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
                    return c.matches && c.matches(TILE_SELECTOR) && !c.classList.contains('hm-in');
                });
                var index = Math.max(0, siblings.indexOf(el));
                el.style.setProperty('--hm-delay', (Math.min(index, 6) * 70) + 'ms');
                el.classList.add('hm-in');
                io.unobserve(el);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

        function observeAll() {
            document.querySelectorAll(TILE_SELECTOR).forEach(function (el) {
                if (el.dataset.hmObserved) return;
                el.dataset.hmObserved = '1';
                io.observe(el);
            });
        }
        observeAll();
        // script.js renders some tiles later (projects, media)
        var grids = document.querySelectorAll('#hmScGrid, #services .services-grid');
        if ('MutationObserver' in window) {
            grids.forEach(function (grid) {
                new MutationObserver(observeAll).observe(grid, { childList: true });
            });
        }
    }

    // 3D tilt + pointer light: Services tiles and Work Showcase cards (round 9)
    var TILT_SELECTOR = '#services .services-grid > .card, #showcase .hm-sc-card';
    function initTileTilt() {
        if (reduceMotion || !finePointer) return;
        var MAX = 6; // degrees
        document.addEventListener('pointermove', function (e) {
            var tile = e.target.closest && e.target.closest(TILT_SELECTOR);
            if (!tile) return;
            var r = tile.getBoundingClientRect();
            var x = (e.clientX - r.left) / r.width;
            var y = (e.clientY - r.top) / r.height;
            tile.style.setProperty('--rx', ((0.5 - y) * MAX).toFixed(2) + 'deg');
            tile.style.setProperty('--ry', ((x - 0.5) * MAX).toFixed(2) + 'deg');
            tile.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
            tile.style.setProperty('--my', (y * 100).toFixed(1) + '%');
            tile.classList.add('is-tilting');
        }, { passive: true });
        document.addEventListener('pointerout', function (e) {
            var tile = e.target.closest && e.target.closest(TILT_SELECTOR);
            if (!tile || (e.relatedTarget && tile.contains(e.relatedTarget))) return;
            tile.classList.remove('is-tilting');
            tile.style.setProperty('--rx', '0deg');
            tile.style.setProperty('--ry', '0deg');
        }, { passive: true });
    }

    /* Spring press: squash on press, bounce on release (mouse and touch, round 9) */
    var PRESS_SELECTOR = '.hm-btn, .hm-chip, .hm-sc-chip, .filter-btn, .premium-nav-cta, .hm-cta-btn, .request-quote-btn, .hm-ad-cta, .hm-sc-quote, .hm-gal-quote, .btn, .submit-btn, .site-share-btn, .theme-toggle, .r7-burger, .social-links a, .hm-sc-more, .google-star';
    function initSpringPress() {
        if (reduceMotion) return;
        var pressed = null;
        function release() {
            if (!pressed) return;
            var el = pressed;
            pressed = null;
            el.classList.remove('hm-pressing');
            void el.offsetWidth; // restart the bounce
            el.classList.add('hm-bounce');
        }
        document.addEventListener('pointerdown', function (e) {
            if (e.button && e.button !== 0) return;
            var el = e.target.closest && e.target.closest(PRESS_SELECTOR);
            if (!el || el.disabled) return;
            el.classList.remove('hm-bounce');
            el.classList.add('hm-pressing');
            pressed = el;
        }, { passive: true });
        document.addEventListener('pointerup', release, { passive: true });
        document.addEventListener('pointercancel', release, { passive: true });
        document.addEventListener('animationend', function (e) {
            if (e.animationName === 'hm-spring-release' && e.target.classList) e.target.classList.remove('hm-bounce');
        });
    }

    /* Page stays still behind popups (round 10). overflow:hidden alone is ignored
       by iPhones, so the page is pinned in place (position: fixed at its scroll
       offset) while anything below is open, then put back exactly where it was.
       Watches the DOM, so every popup is covered without touching its own code. */
    var LOCK_SELECTORS = '#popupOverlay.active, #reviewModal.active, #hmGallery.is-open, #photoGalleryModal.active, #r7NavSheet.is-open, #hmAdminLogin, #hmSetPassword, #adminPanel.active';
    function initScrollLock() {
        var root = document.documentElement;
        var body = document.body;
        var phone = window.matchMedia ? window.matchMedia('(max-width: 640px)') : { matches: false };
        var locked = false;
        var savedY = 0;
        var queued = false;
        function wanted() {
            if (document.querySelector(LOCK_SELECTORS)) return true;
            return root.classList.contains('r7-chat-open') && phone.matches; // chat is full screen on phones only
        }
        function apply() {
            queued = false;
            var want = wanted();
            if (want === locked) return;
            locked = want;
            if (want) {
                savedY = window.scrollY || window.pageYOffset || 0;
                var gap = window.innerWidth - root.clientWidth; // keep layout from jumping when the scrollbar goes
                body.style.top = (-savedY) + 'px';
                if (gap > 0) body.style.paddingRight = gap + 'px';
                root.classList.add('hm-scroll-locked');
            } else {
                root.classList.remove('hm-scroll-locked');
                body.style.top = '';
                body.style.paddingRight = '';
                var behavior = root.style.scrollBehavior;
                root.style.scrollBehavior = 'auto';
                window.scrollTo(0, savedY);
                root.style.scrollBehavior = behavior;
            }
        }
        function queue() {
            if (queued) return;
            queued = true;
            requestAnimationFrame(apply);
        }
        if ('MutationObserver' in window) {
            new MutationObserver(queue).observe(body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'hidden'] });
            new MutationObserver(queue).observe(root, { attributes: true, attributeFilter: ['class'] });
        }
        if (phone.addEventListener) phone.addEventListener('change', queue);
        queue();
    }

    /* ---------------- 3. Review stars: say what the rating means ---------------- */
    var RATING_WORDS = ['Tap a star', 'Terrible', 'Poor', 'Okay', 'Good', 'Excellent'];
    function initRatingWords() {
        var box = document.getElementById('googleStarRating');
        var word = document.getElementById('hmRatingWord');
        var input = document.getElementById('reviewRatingInput');
        if (!box || !word || !input) return;
        function show(n) {
            word.textContent = RATING_WORDS[n] || RATING_WORDS[0];
            word.dataset.rating = String(n || 0);
        }
        box.addEventListener('mouseover', function (e) {
            var star = e.target.closest('.google-star');
            if (star) show(Number(star.dataset.rating));
        });
        box.addEventListener('mouseleave', function () { show(Number(input.value) || 0); });
        box.addEventListener('click', function (e) {
            var star = e.target.closest('.google-star');
            if (!star) return;
            show(Number(star.dataset.rating));
            star.classList.remove('is-pop');
            void star.offsetWidth;
            star.classList.add('is-pop');
        });
    }

    /* ---------------- 4. Menu bar: active-section pill + phone sheet ---------------- */
    function initNavPill() {
        var bar = document.querySelector('.premium-nav-links');
        var pill = bar && bar.querySelector('.r7-nav-pill');
        if (!bar || !pill) return;
        var links = Array.prototype.slice.call(bar.querySelectorAll('a[href^="#"]'));
        var sheetLinks = Array.prototype.slice.call(document.querySelectorAll('.r7-sheet-links a'));
        var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
        var current = null;
        var ticking = false;

        function place(link) {
            if (!link) { bar.classList.remove('has-active'); return; }
            bar.style.setProperty('--r7-pill-x', link.offsetLeft + 'px');
            bar.style.setProperty('--r7-pill-w', link.offsetWidth + 'px');
            bar.classList.add('has-active');
        }
        function setActive(id) {
            var active = null;
            links.concat(sheetLinks).forEach(function (a) {
                var on = a.getAttribute('href') === '#' + id;
                a.classList.toggle('is-active', on);
                if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
                if (on && links.indexOf(a) > -1) active = a;
            });
            place(active);
        }
        // Active = the section crossing a line 40% down the screen (works for any section height/order)
        function update() {
            ticking = false;
            var line = window.innerHeight * 0.4;
            var id = '';
            targets.forEach(function (t) {
                var r = t.getBoundingClientRect();
                if (r.top <= line && r.bottom > line && r.height > 0) id = t.id;
            });
            if (id !== current) { current = id; setActive(id); }
        }
        window.addEventListener('scroll', function () {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });
        update();
        window.addEventListener('resize', function () { place(bar.querySelector('a.is-active')); }, { passive: true });
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { place(bar.querySelector('a.is-active')); });
    }

    function initNavSheet() {
        var burger = document.getElementById('r7Burger');
        var sheet = document.getElementById('r7NavSheet');
        if (!burger || !sheet) return;
        var closeTimer = null;
        var lastFocus = null;

        function open() {
            clearTimeout(closeTimer);
            lastFocus = document.activeElement;
            sheet.hidden = false;
            sheet.classList.remove('is-closing');
            void sheet.offsetWidth; // start transitions from the hidden state
            sheet.classList.add('is-open');
            burger.setAttribute('aria-expanded', 'true');
            burger.setAttribute('aria-label', 'Close menu');
            document.documentElement.classList.add('r7-lock');
            var first = sheet.querySelector('.r7-sheet-links a');
            if (first) first.focus({ preventScroll: true });
        }
        function close(restoreFocus) {
            if (sheet.hidden) return;
            sheet.classList.remove('is-open');
            sheet.classList.add('is-closing');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Open menu');
            document.documentElement.classList.remove('r7-lock');
            closeTimer = setTimeout(function () { sheet.hidden = true; sheet.classList.remove('is-closing'); }, reduceMotion ? 0 : 260);
            if (restoreFocus !== false && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
        }
        burger.addEventListener('click', function () { if (sheet.classList.contains('is-open')) close(); else open(); });
        // Section links: the page is frozen while the menu is open (initScrollLock), so the
        // browser's own jump was lost and the page went back to where it was. Jump after the
        // menu has closed and the page is free again.
        function goToSection(hash) {
            var target = document.getElementById(hash.slice(1));
            if (!target) return;
            var tries = 0;
            (function wait() {
                if (document.documentElement.classList.contains('hm-scroll-locked') && tries++ < 30) { requestAnimationFrame(wait); return; }
                if (location.hash === hash) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
                else location.hash = hash;
            })();
        }
        sheet.addEventListener('click', function (e) {
            if (!e.target.closest('[data-r7-close]')) return;
            var link = e.target.closest('a[href^="#"]');
            var hash = link && !link.hasAttribute('data-quote-open') ? link.getAttribute('href') : '';
            if (hash && hash.length > 1) e.preventDefault();
            close(false);
            if (hash && hash.length > 1) requestAnimationFrame(function () { goToSection(hash); });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && sheet.classList.contains('is-open')) close();
            if (e.key === 'Tab' && sheet.classList.contains('is-open')) {
                var items = sheet.querySelectorAll('a, button');
                var firstEl = items[0];
                var lastEl = items[items.length - 1];
                if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); burger.focus(); }
                else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); burger.focus(); }
            }
        });
        window.addEventListener('resize', function () { if (window.innerWidth > 1080) close(false); }, { passive: true });
    }

    /* ---------------- 5. Popups: let them animate out ----------------
       script.js closes popups by removing .active (display:none at once). When that
       happens we add .r7-leaving for ~240ms so CSS can play the exit animation.
       MutationObserver runs before the next paint, so the popup never blinks. */
    function initPopupExit() {
        if (reduceMotion || !('MutationObserver' in window)) return;
        ['popupOverlay', 'reviewModal', 'projectModal'].forEach(function (id) {
            var el = document.getElementById(id);
            if (!el) return;
            var wasOpen = el.classList.contains('active');
            var timer = null;
            new MutationObserver(function () {
                var open = el.classList.contains('active');
                if (wasOpen && !open) {
                    el.classList.add('r7-leaving');
                    clearTimeout(timer);
                    timer = setTimeout(function () { el.classList.remove('r7-leaving'); }, 240);
                } else if (open && el.classList.contains('r7-leaving')) {
                    clearTimeout(timer);
                    el.classList.remove('r7-leaving');
                }
                wasOpen = open;
            }).observe(el, { attributes: true, attributeFilter: ['class'] });
        });
    }

    /* ---------------- 6. Scroll motion: word-by-word section titles ---------------- */
    function splitWords(el) {
        var target = el.querySelector('a') || el;
        if (target.children.length || !target.textContent.trim()) return false;
        var words = target.textContent.trim().split(/\s+/);
        target.setAttribute('aria-label', target.textContent.trim());
        target.textContent = '';
        words.forEach(function (w, i) {
            var span = document.createElement('span');
            span.className = 'r7-word';
            span.setAttribute('aria-hidden', 'true');
            span.style.setProperty('--w', String(i));
            span.textContent = i < words.length - 1 ? w + ' ' : w;
            target.appendChild(span);
        });
        el.classList.add('r7-split');
        return true;
    }

    function initScrollMotion() {
        if (reduceMotion || !('IntersectionObserver' in window)) return;
        var titles = document.querySelectorAll('section .section-title, #showcase .showcase-heading h2, .modern-review-header h2');
        var subs = document.querySelectorAll('section .section-subtitle, #showcase .showcase-heading p');
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('r7-in');
                io.unobserve(entry.target);
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
        titles.forEach(function (t) {
            // Skip anything already on screen at load so nothing visible "blinks" away.
            var r = t.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) return;
            if (splitWords(t)) io.observe(t);
        });
        subs.forEach(function (s) {
            var r = s.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) return;
            s.classList.add('r7-reveal');
            io.observe(s);
        });
        document.documentElement.classList.add('r7-motion');
    }

    /* ---------------- 7. Admin portal motion hooks ---------------- */
    function initAdminMotion() {
        if (!('MutationObserver' in window)) return;
        var panel = document.getElementById('adminPanel');
        if (!panel) {
            // script.js builds the admin panel on demand: wait for it once
            var waiter = new MutationObserver(function () {
                if (!document.getElementById('adminPanel')) return;
                waiter.disconnect();
                initAdminMotion();
            });
            waiter.observe(document.body, { childList: true, subtree: true });
            return;
        }
        var wasOpen = false;
        var openTimer = null;
        function indexNav() {
            var nav = panel.querySelector('.sidebar-nav');
            if (!nav) return;
            Array.prototype.forEach.call(nav.children, function (el, i) { el.style.setProperty('--n', String(i)); });
        }
        // Portal opens: play the entrance once (also when it was switched on before we started watching)
        function syncOpen() {
            var open = panel.classList.contains('active');
            if (open && !wasOpen && !reduceMotion) {
                indexNav();
                panel.classList.add('r7-opening');
                clearTimeout(openTimer);
                openTimer = setTimeout(function () { panel.classList.remove('r7-opening'); }, 1100);
            }
            wasOpen = open;
        }
        new MutationObserver(syncOpen).observe(panel, { attributes: true, attributeFilter: ['class'] });
        syncOpen();

        // Tab changes: replay the title animation when the page title text changes
        var title = document.getElementById('hmAdminPageTitle');
        var wrap = title && title.closest('.hm-admin-title');
        if (title && wrap && !reduceMotion) {
            new MutationObserver(function () {
                wrap.classList.remove('r7-swap');
                void wrap.offsetWidth;
                wrap.classList.add('r7-swap');
            }).observe(title, { childList: true, characterData: true, subtree: true });
        }

        // Phones: tapping the dimmed area closes the slide-in sidebar
        panel.addEventListener('click', function (e) {
            if (panel.classList.contains('is-nav-open') && e.target.classList && e.target.classList.contains('admin-main-v2')) {
                panel.classList.remove('is-nav-open');
            }
        });
    }

    /* ---------------- 8. Liquid glass: soft light follows the pointer across the menu ---------------- */
    function initNavLight() {
        var nav = document.getElementById('main-nav');
        if (!nav || reduceMotion || !finePointer) return;
        var frame = 0;
        var last = null;
        nav.addEventListener('pointermove', function (e) {
            last = e;
            if (frame) return;
            frame = requestAnimationFrame(function () {
                frame = 0;
                var r = nav.getBoundingClientRect();
                nav.style.setProperty('--lx', ((last.clientX - r.left) / r.width * 100).toFixed(1) + '%');
                nav.style.setProperty('--ly', ((last.clientY - r.top) / r.height * 100).toFixed(1) + '%');
                nav.style.setProperty('--lo', '1');
            });
        }, { passive: true });
        nav.addEventListener('pointerleave', function () { nav.style.setProperty('--lo', '0'); }, { passive: true });
    }

    /* ---------------- Round 11: photos and videos in full ----------------
       Work photos/videos on the public site are shown whole (never cropped).
       The empty space around them is filled with a blurred copy of the same
       picture (videos: their poster / Cloudinary first frame). Watches the DOM,
       so galleries rendered later by script.js are handled too. */
    var FULL_MEDIA = [
        '#featured-work .featured-card-media img', '#featured-work .featured-card-media video',
        '#services .service-media img', '#services .service-media video',
        '#showcase .hm-sc-media img', '#showcase .hm-sc-media video',
        '#integrityContainer img', '#integrityContainer video',
        '.featured-review-card .hm-rv-media img', '.featured-review-card .hm-rv-media video'
    ].join(',');

    function fillUrlFor(el) {
        if (el.tagName === 'IMG') return el.currentSrc || el.getAttribute('src') || '';
        var poster = el.getAttribute('poster');
        if (poster) return poster;
        var src = el.currentSrc || el.getAttribute('src') || '';
        if (!src) { var s = el.querySelector('source'); src = s ? s.getAttribute('src') || '' : ''; }
        // Cloudinary can serve a video's first frame as a picture.
        if (/res\.cloudinary\.com\/.+\/video\/upload\//.test(src)) {
            return src.replace('/video/upload/', '/video/upload/so_0/').replace(/\.[a-z0-9]+(\?.*)?$/i, '.jpg');
        }
        return '';
    }

    function fitMedia(el) {
        var host = el.parentElement;
        if (!host) return;
        el.classList.add('r11-fit');
        host.classList.add('r11-fit-host');
        var fill = host.querySelector(':scope > .r11-fill');
        if (!fill) {
            fill = document.createElement('span');
            fill.className = 'r11-fill';
            fill.setAttribute('aria-hidden', 'true');
            host.insertBefore(fill, host.firstChild);
        }
        var url = fillUrlFor(el);
        var css = url ? 'url("' + url.replace(/["\\\n]/g, '') + '")' : '';
        if (fill.style.backgroundImage !== css) fill.style.backgroundImage = css;
    }

    function initFullMedia() {
        var queued = false;
        function scan() {
            queued = false;
            var list = document.querySelectorAll(FULL_MEDIA);
            for (var i = 0; i < list.length; i++) fitMedia(list[i]);
        }
        function queue() {
            if (queued) return;
            queued = true;
            requestAnimationFrame(scan);
        }
        scan();
        try {
            new MutationObserver(queue).observe(document.body, {
                childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'poster']
            });
        } catch (e) {}
        // Images that pick a different source (srcset) after loading.
        document.addEventListener('load', function (e) {
            var t = e.target;
            if (t && t.tagName === 'IMG' && t.classList.contains('r11-fit')) fitMedia(t);
        }, true);
    }

    /* ---------------- Round 11: pull down to close ----------------
       Every popup with an X can also be closed by pulling it down with a finger.
       Starts only when the drag is mostly downward, the content under the finger is
       scrolled to the top, and not on a text field or a zoomed photo. Past ~110 px (or a
       quick flick) it presses the popup's own X, so each popup closes the usual way.
       Moves the panel with CSS `translate` (opening animations own `transform`). */
    var PULL_TARGETS = [
        { panel: '#popupOverlay .hm-quote', close: '#popupClose' },
        { panel: '#reviewModal .review-modal-dialog', close: '#reviewModalClose' },
        { panel: '#projectModal .project-modal-dialog', close: '#projectModalClose' },
        { panel: '#photoGalleryModal .gallery-container', close: '#galleryCloseBtn' },
        { panel: '#hmGallery', close: '#hmGallery [data-gal="close"]', skip: function () { var f = document.getElementById('hmGalFigure'); return !!(f && f.classList.contains('is-zoomed')); } },
        { panel: '.media-lightbox', close: '.media-lightbox-close' },
        { panel: '#chatbotContainer', close: '#chatbotClose' },
        { panel: '#brilliantChatWindow', close: '#brilliantChatClose' },
        { panel: '#r7NavSheet .r7-sheet-panel', close: '#r7NavSheet .r7-sheet-backdrop' }
    ];
    var PULL_CLOSE_PX = 110;

    function isShown(el) {
        if (!el || el.closest('[hidden]')) return false;
        if (!el.getClientRects().length) return false;
        var cs = getComputedStyle(el);
        return cs.visibility !== 'hidden' && cs.display !== 'none' && Number(cs.opacity) > 0.05;
    }

    function scrolledAway(from, panel) {
        for (var n = from; n && n !== panel.parentElement; n = n.parentElement) {
            if (n.scrollTop > 0 && n.scrollHeight > n.clientHeight + 1) {
                var oy = getComputedStyle(n).overflowY;
                if (oy === 'auto' || oy === 'scroll') return true;
            }
        }
        return false;
    }

    function initPullToClose() {
        var drag = null;
        function reset(panel, animate) {
            panel.style.transition = animate && !reduceMotion ? 'translate 0.32s cubic-bezier(0.23, 1, 0.32, 1)' : '';
            panel.style.translate = '';
            if (animate) setTimeout(function () { panel.style.transition = ''; }, 340);
        }
        document.addEventListener('touchstart', function (e) {
            drag = null;
            if (e.touches.length !== 1) return;
            var t = e.target;
            if (!(t instanceof Element)) return;
            if (t.closest('input, textarea, select, [contenteditable="true"]')) return;
            for (var i = 0; i < PULL_TARGETS.length; i++) {
                var cfg = PULL_TARGETS[i];
                var panel = t.closest(cfg.panel);
                if (!panel || !isShown(panel)) continue;
                if ((cfg.skip && cfg.skip()) || scrolledAway(t, panel)) return;
                var closeBtn = document.querySelector(cfg.close);
                if (!closeBtn) return;
                drag = { panel: panel, closeBtn: closeBtn, x0: e.touches[0].clientX, y0: e.touches[0].clientY, t0: Date.now(), dy: 0, locked: false };
                return;
            }
        }, { passive: true });
        document.addEventListener('touchmove', function (e) {
            if (!drag) return;
            var dx = e.touches[0].clientX - drag.x0;
            var dy = e.touches[0].clientY - drag.y0;
            if (!drag.locked) {
                if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
                if (dy <= 0 || Math.abs(dx) > Math.abs(dy)) { drag = null; return; } // up or sideways: not ours
                drag.locked = true;
                drag.panel.style.transition = 'none';
            }
            if (e.cancelable) e.preventDefault();
            drag.dy = Math.max(0, dy);
            // follows the finger, a little heavier the further it goes
            var shown = drag.dy < 160 ? drag.dy : 160 + (drag.dy - 160) * 0.5;
            drag.panel.style.translate = '0 ' + shown.toFixed(1) + 'px';
        }, { passive: false });
        function end() {
            if (!drag) return;
            var d = drag;
            drag = null;
            if (!d.locked) return;
            var speed = d.dy / Math.max(1, Date.now() - d.t0); // px per ms
            if (d.dy > PULL_CLOSE_PX || (speed > 0.6 && d.dy > 40)) {
                d.closeBtn.click();
                setTimeout(function () { reset(d.panel, false); }, 450);
            } else {
                reset(d.panel, true);
            }
        }
        document.addEventListener('touchend', end, { passive: true });
        document.addEventListener('touchcancel', end, { passive: true });
    }

    function start() {
        initFullMedia();
        initPullToClose();
        initAdminMotion();
        initNavLight();
        initQuoteChips();
        initTileEntrance();
        initTileTilt();
        initSpringPress();
        initScrollLock();
        initRatingWords();
        initNavPill();
        initNavSheet();
        initPopupExit();
        initScrollMotion();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
