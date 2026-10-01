(() => {
    const REVIEWS_DATA = [
        {
            name: 'Daouda',
                meta: '1 review | 0 photos',
                date: '2 weeks ago',
                rating: 5,
                comment: 'Best CCTV technician. He is good in everything.',
                ownerReply: 'We are really grateful and always available for your service.'
            },
            {
                name: 'Rakiba Mohammed',
                meta: '0 reviews | 0 photos',
                date: '19 weeks ago',
                rating: 5,
                comment: 'Excellent service and professional execution.',
                ownerReply: 'Thank you so much for your time and your appreciation.'
            },
            {
                name: 'Dennis Somuah',
                meta: '2 reviews | 2 photos',
                date: '22 weeks ago',
                rating: 5,
                comment: 'Best installation company you can trust.',
                ownerReply: 'Really appreciate it.'
            },
            {
                name: 'Arafat Fatawu',
                meta: '1 review | 2 photos',
                date: '30 weeks ago',
                rating: 5,
                comment: 'Best installer I have seen so far because he is kind.',
                ownerReply: 'Thank you. We appreciate your trust.'
            },
            {
                name: 'Alidu Salifu',
                meta: '1 review | 1 photo',
                date: '30 weeks ago',
                rating: 5,
                comment: 'They are reliable and professional, always on time, with great communication.',
                ownerReply: 'Thank you. Reliability is our priority.'
            },
            {
                name: 'Abu Bawie',
                meta: '1 review | 0 photos',
                date: '34 weeks ago',
                rating: 5,
                comment: 'Great service offered. Hassle-free.',
                ownerReply: 'Great working with you, sir.'
            },
            {
                name: 'Arafat Yankine',
                meta: '2 reviews | 0 photos',
                date: '20 Jan 2025',
                rating: 5,
                comment: 'They are good and reliable.',
                ownerReply: 'You are always welcome.'
            },
            {
                name: 'Abdullah Yusuf',
                meta: 'Local Guide | 15 reviews | 11 photos',
                date: '29 Aug 2023',
                rating: 5,
                comment: 'As the company name suggests, all services were brilliant.',
                ownerReply: 'We appreciate it a lot.'
            },
            {
                name: 'admin admin',
                meta: '1 review | 0 photos',
                date: '15 Feb 2023',
                rating: 5,
                comment: 'I have been using their services for 4 years. Best value, on time, and very responsive.',
                ownerReply: 'Thank you. We appreciate it.'
            },
            {
                name: 'Mohammed Drame',
                meta: '0 reviews | 0 photos',
                date: '19 Oct 2022',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you for your appreciation. Hailifu is always here for you.'
            },
            {
                name: 'Yussif Nuhu',
                meta: '0 reviews | 0 photos',
                date: '1 Aug 2022',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you so much for your review.'
            },
            {
                name: 'Ali Yoro',
                meta: '0 reviews | 0 photos',
                date: '13 May 2022',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you. Together we are strong, and we appreciate you too.'
            },
            {
                name: 'Abdul-Wahab Abubakar',
                meta: '0 reviews | 0 photos',
                date: '26 Apr 2022',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you so much.'
            },
            {
                name: 'Ghana',
                meta: '8 reviews | 0 photos',
                date: '19 Apr 2022',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you. Together we are strong, and we appreciate you too.'
            },
            {
                name: 'Fuseini Adam',
                meta: '0 reviews | 0 photos',
                date: '4 Oct 2020',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you for your appreciation.'
            },
            {
                name: 'Sam Yeboah',
                meta: '1 review | 0 photos',
                date: '25 Jul 2020',
                rating: 5,
                comment: 'Awesome. Bravo.',
                ownerReply: 'Thank you for your appreciation.'
            },
            {
                name: 'bright senoo',
                meta: '0 reviews | 0 photos',
                date: '12 Jul 2020',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you for your appreciation.'
            },
            {
                name: 'Michael Obeng',
                meta: '1 review | 0 photos',
                date: '7 Jul 2020',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you for your appreciation.'
            },
            {
                name: 'LAWER JOSEPH',
                meta: 'Local Guide | 3 reviews | 114 photos',
                date: '4 Jul 2020',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you for your appreciation.'
            },
            {
                name: 'Wendy Bibio',
                meta: '0 reviews | 0 photos',
                date: '3 Jul 2020',
                rating: 5,
                comment: 'Full review available on Google.',
                ownerReply: 'Thank you for your appreciation. We love you too.'
            },
            {
                name: 'Shaibu Salifu',
                meta: '1 review | 0 photos',
                date: 'Recent',
                rating: 5,
                comment: 'Outstanding team execution. Fast response, clean install, and professional finish.',
                ownerReply: 'Thank you for trusting Hailifu with your installation.'
            },
            {
                name: 'Amina',
                meta: '1 review | 0 photos',
                date: 'Recent',
                rating: 5,
                comment: 'Prompt installation with clear explanations. The team exceeded expectations.',
                ownerReply: 'We appreciate your feedback and support.'
            }
        ];

        document.addEventListener('DOMContentLoaded', () => {
        let adminLogs = [];
        
        function pushAdminLog(message, status = 'OK') {
            const time = new Date().toTimeString().split(' ')[0];
            if (!Array.isArray(adminLogs)) adminLogs = [];
            adminLogs.unshift({ time, message, status });
            if (adminLogs.length > 50) adminLogs.pop();
            if (typeof renderAdminLogs === 'function') renderAdminLogs();
        }

        function renderAdminLogs() {
            const container = document.getElementById('adminLogsContainer');
            if (!container) return;
            if (!Array.isArray(adminLogs) || adminLogs.length === 0) {
                container.innerHTML = '<div class="admin-empty">No activity logs yet.</div>';
                return;
            }
            container.innerHTML = adminLogs.map((log) => {
                let dotClass = 'log-dot';
                if (log.status === 'PASS' || log.status === 'LIVE' || log.status === 'OK') dotClass += ' log-dot--success';
                return `<div class="log-row"><span class="log-time">${log.time}</span><span class="log-message">${log.message}</span><span class="log-status"><span class="${dotClass}" aria-hidden="true"></span>${log.status}</span></div>`;
            }).join('');
        }

        const featuredBento = document.getElementById('featuredBento');
        const adminTrigger = document.getElementById('admin-trigger');
        const ghostAdminTrigger = document.getElementById('ghostAdminTrigger');
        const adminEntryBtn = document.getElementById('adminEntryBtn');
        const heroQuoteBtn = document.getElementById('heroQuoteBtn');
        const heroVideo = document.getElementById('heroVideo');
        const heroFallbackImage = document.getElementById('heroFallbackImage');
        const mainNav = document.getElementById('main-nav');
        const backToTopBtn = document.getElementById('backToTop');
        const servicesTitleCta = document.getElementById('servicesTitleCta');
        const themeToggle = document.getElementById('themeToggle');
        const primarySiteUrl = 'https://hailifugh.com';
        try {
            const visitMarkerKey = 'hailifu_visit_marker';
            if (!sessionStorage.getItem(visitMarkerKey)) {
                sessionStorage.setItem(visitMarkerKey, String(Date.now()));
                pushAdminNotification(
                    'visit',
                    'New Site Visitor',
                    `A visitor opened the site at ${new Date().toLocaleString()}.`
                );
            }
        } catch {}
        
        const adminSecretParamKey = 'dev';
        // Admin entry (round 10): hailifugh.com/hailifu=access sets a one-time flag
        // for this tab and opens the site. The old ?admin / #admin no longer work.
        const ADMIN_ENTRY_REQUESTED = (() => {
            try {
                const asked = sessionStorage.getItem('hailifu_admin_entry') === '1';
                sessionStorage.removeItem('hailifu_admin_entry');
                return asked;
            } catch {
                return false;
            }
        })();
        let adminEntryPending = ADMIN_ENTRY_REQUESTED;
        window.__hailifuAdminEntry = ADMIN_ENTRY_REQUESTED;

        const canonicalRedirectHosts = new Set([
            'hailifu-website.web.app',
            'hailifu-website.firebaseapp.com'
        ]);

        function enforceCanonicalHostRedirect() {
            try {
                const host = String(window.location.hostname || '').trim().toLowerCase();
                if (!canonicalRedirectHosts.has(host)) return false;
                const target = new URL(primarySiteUrl);
                target.pathname = window.location.pathname || '/';
                target.search = window.location.search || '';
                target.hash = window.location.hash || '';
                window.location.replace(target.toString());
                return true;
            } catch {
                return false;
            }
        }

        if (enforceCanonicalHostRedirect()) return;

        // Apply the site-wide brand colour on load (copy cached from the last visit;
        // the saved setting is fetched later by loadBrandSettings).
        applyBrandColor(readBrandCache());

        function shouldSkipHeroVideo() {
            try {
                const saveData = navigator.connection && navigator.connection.saveData;
                if (saveData) return true;
            } catch {}

            try {
                const effectiveType = navigator.connection && navigator.connection.effectiveType;
                if (effectiveType && /(^|-)2g$/.test(String(effectiveType))) return true;
            } catch {}

            try {
                if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
            } catch {}

            try {
                if (window.matchMedia && window.matchMedia('(max-width: 600px)').matches) return true;
            } catch {}

            return false;
        }

        function initHeroVideo(nextSrc) {
            if (!heroVideo) return;
            const container = heroVideo.closest('.hero-video-container');

            if (heroVideo.tagName === 'VIDEO') {
                try {
                    heroVideo.muted = true;
                    heroVideo.defaultMuted = true;
                    heroVideo.volume = 0;
                    heroVideo.playsInline = true;
                    heroVideo.setAttribute('muted', '');
                    heroVideo.setAttribute('playsinline', '');
                    heroVideo.setAttribute('webkit-playsinline', '');

                    if (typeof nextSrc === 'string' && nextSrc.trim()) {
                        const sourceEl = heroVideo.querySelector('source');
                        if (sourceEl) sourceEl.src = nextSrc.trim();
                        else heroVideo.src = nextSrc.trim();
                        try { heroVideo.load(); } catch {}
                    }

                    const attemptPlay = () => {
                        try {
                            const playPromise = heroVideo.play();
                            if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
                        } catch {}
                    };

                    if (heroVideo.readyState >= 2) attemptPlay();
                    else {
                        heroVideo.addEventListener('loadeddata', attemptPlay, { once: true });
                        heroVideo.addEventListener('canplay', attemptPlay, { once: true });
                        heroVideo.addEventListener('canplaythrough', attemptPlay, { once: true });
                    }
                } catch {}
                return;
            }

            const src = heroVideo.getAttribute('data-src');
            if (!src) return;

            if (container) container.classList.remove('is-loaded');

            if (shouldSkipHeroVideo()) {
                return;
            }

            heroVideo.src = src;
            heroVideo.addEventListener('load', () => {
                if (container) container.classList.add('is-loaded');
            }, { once: true });
        }

        initHeroVideo();

        const deepLinkServiceMap = {
            cctv: {
                scrollSectionId: 'services',
                cardId: 'service-cctv',
                featuredCategory: 'cctv',
                showcaseCategory: 'cctv'
            },
            electrical: {
                scrollSectionId: 'services',
                cardId: 'service-electrical',
                featuredCategory: 'electrical',
                showcaseCategory: 'electrical'
            },
            gates: {
                scrollSectionId: 'services',
                cardId: 'service-gates',
                featuredCategory: 'gates',
                showcaseCategory: 'gates'
            },
            gate: {
                scrollSectionId: 'services',
                cardId: 'service-gates',
                featuredCategory: 'gates',
                showcaseCategory: 'gates'
            },
            ac: {
                scrollSectionId: 'services',
                cardId: 'service-airconditioning',
                featuredCategory: 'airconditioning',
                showcaseCategory: 'airconditioning'
            },
            aircondition: {
                scrollSectionId: 'services',
                cardId: 'service-airconditioning',
                featuredCategory: 'airconditioning',
                showcaseCategory: 'airconditioning'
            },
            airconditioning: {
                scrollSectionId: 'services',
                cardId: 'service-airconditioning',
                featuredCategory: 'airconditioning',
                showcaseCategory: 'airconditioning'
            },
            solar: {
                scrollSectionId: 'services',
                cardId: 'service-solar',
                featuredCategory: 'solar',
                showcaseCategory: 'solar'
            },
            solarenergy: {
                scrollSectionId: 'services',
                cardId: 'service-solar',
                featuredCategory: 'solar',
                showcaseCategory: 'solar'
            },
            blinds: {
                scrollSectionId: 'services',
                cardId: 'service-blindcurtain',
                featuredCategory: 'blindcurtain',
                showcaseCategory: 'smartwindows'
            },
            blindcurtain: {
                scrollSectionId: 'services',
                cardId: 'service-blindcurtain',
                featuredCategory: 'blindcurtain',
                showcaseCategory: 'smartwindows'
            }
        };

        const getDeepLinkServiceKey = () => {
            try {
                const params = new URLSearchParams(window.location.search || '');
                const raw = String(params.get('service') || '').toLowerCase().trim();
                return raw;
            } catch {
                return '';
            }
        };

        let preferredFeaturedCategoryKey = '';
        const deepLinkServiceKey = getDeepLinkServiceKey();
        if (deepLinkServiceKey && deepLinkServiceMap[deepLinkServiceKey]) {
            preferredFeaturedCategoryKey = deepLinkServiceMap[deepLinkServiceKey].featuredCategory;
        }

        function applyServiceDeepLink() {
            if (!deepLinkServiceKey) return;
            const config = deepLinkServiceMap[deepLinkServiceKey];
            if (!config) return;

            const pulseFor = (node, clearSelector, className) => {
                if (!node) return;
                try {
                    document.querySelectorAll(clearSelector).forEach((el) => el.classList.remove(className));
                    node.classList.add(className);
                    window.setTimeout(() => {
                        try { node.classList.remove(className); } catch {}
                    }, 3000);
                } catch {}
            };

            const focusCard = () => {
                const card = document.getElementById(config.cardId);
                if (card) {
                    try { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch {}
                    pulseFor(card, '#services .services-grid .showcase-item.highlight-service', 'highlight-service');
                }

                if (config.showcaseCategory) {
                    const showcaseItem = document.querySelector(`.showcase-item[data-category="${config.showcaseCategory}"]`);
                    if (showcaseItem) pulseFor(showcaseItem, '.showcase-item.highlight', 'highlight');
                }
            };

            const section = config.scrollSectionId ? document.getElementById(config.scrollSectionId) : null;
            if (section) {
                try { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch {}
                window.setTimeout(focusCard, 250);
                return;
            }

            focusCard();
        }

        let featuredVideoObserver = null;
        let featuredVideoKickstartCleanup = null;
        let featuredBindingsReady = false;
        let adminBindingsReady = false;
        let pendingReviewsGrid = null;

        let featuredLoop = null;
        let featuredLoopTrack = null;
        let featuredLoopDots = null;
        let featuredLoopPrev = null;
        let featuredLoopNext = null;
        let featuredLoopSlides = [];
        let featuredLoopTimer = null;
        let featuredLoopIndex = 0;
        let featuredLoopCount = 0;
        let featuredLoopHasBindings = false;
        let featuredLoopBoundNode = null;
        let featuredLoopVisibilityBound = false;

        let featuredLoopSwipeActive = false;
        let featuredLoopSwipeLocked = false;
        let featuredLoopSwipeStartX = 0;
        let featuredLoopSwipeStartY = 0;
        let featuredLoopSwipeDeltaX = 0;
        let featuredLoopSwipeWidth = 0;
        let featuredLoopSwipePointerId = null;

        let featuredLoopObserver = null;
        let featuredLoopIsVisible = true;
        let featuredRenderDebounceTimer = null;

        // Round 11: phones use the same sliding track as desktop. The old phone mode
        // (smooth scrollTo inside a scroll-snap box) froze on iPhone after one slide.
        function featuredLoopPrefersNativeScroll() {
            return false;
        }

        function featuredLoopIsProbablyVisible() {
            if (!featuredLoop) return false;
            try {
                const rect = featuredLoop.getBoundingClientRect();
                const vh = window.innerHeight || document.documentElement.clientHeight || 0;
                if (!vh) return true;
                return rect.bottom > 0 && rect.top < vh;
            } catch {
                return true;
            }
        }

        let publishedReviewsGrid = null;
        let reviewAuthForm = null;
        let reviewAuthEmailInput = null;
        let reviewAuthPasswordInput = null;
        let reviewAuthStatus = null;
        let reviewAuthLoginBtn = null;
        let reviewAuthLogoutBtn = null;
        let reviewModerationShell = null;
        let overviewTotalLeads = null;

        let overviewRecentReviews = null;
        let overviewReach = null;
        let overviewLeadsList = null;
        let interestCctv = null;
        let interestElectrical = null;
        let interestGates = null;
        let interestAirconditioning = null;
        let interestBlindcurtain = null;
        let interestCctvCount = null;
        let interestElectricalCount = null;
        let interestGatesCount = null;
        let interestAirconditioningCount = null;
        let interestBlindcurtainCount = null;
        let leadsGrid = null;
        let leadsSearch = null;
        let leadsRefreshBtn = null;
        let adminLogsContainer = null;
        let adminClearLogsBtn = null;
        let projectsGrid = null;
        let uploadBtn = null;
        let uploadProgress = null;
        let uploadProgressFill = null;
        let uploadProgressText = null;
        let cloudinaryPresetInput = null;
        let firebaseConfigInput = null;
        let firebaseProjectsPathInput = null;
        let firebaseSettingsPathInput = null;
        let remoteConfigPublicIdInput = null;
        let remoteConfigUrlInput = null;
        let setAsHeroToggle = null;
        let projectTitle = null;
        let projectCategory = null;
        let projectDescription = null;
        let projectFile = null;
        let projectMediaUrl = null;
        let fileUploadArea = null;
        let galleryQueue = null;
        let galleryQueueItems = [];
        let addGalleryItemBtn = null;
        let clearGalleryBtn = null;
        let mediaTypeButtons = [];
        let selectedMediaType = 'image';
        let adminMediaToastTimer = null;
        let mediaLibrarySearch = null;
        let mediaLibraryRefreshBtn = null;
        let mediaLibraryUploadArea = null;
        let mediaLibraryFileInput = null;
        let mediaLibraryUploadBtn = null;
        let mediaLibraryLinkBtn = null;
        let mediaLibraryUrlInput = null;
        let mediaLibraryGrid = null;
        let mediaLibraryProgress = null;
        let mediaLibraryProgressFill = null;
        let mediaLibraryProgressText = null;
        let sectionSlotSelect = null;
        let sectionsClearSlotBtn = null;
        let sectionsCurrentAssignment = null;
        let sectionsMediaPicker = null;

        const cloudinaryCloudName = 'daovfi3i5';
        const defaultCloudinaryUnsignedPreset = 'ml_default';
        const cloudinaryPresetStorageKey = 'hailifu_cloudinary_upload_preset';
        const firebaseConfigStorageKey = 'hailifu_firebase_config';
        function buildFirebaseConfigFromConfigObject(rawConfig) {
            if (!rawConfig || typeof rawConfig !== 'object') return null;
            const projectId = String(rawConfig.FIREBASE_PROJECT_ID || '').trim();
            const databaseURL = String(rawConfig.FIREBASE_DATABASE_URL || '').trim();
            const firebaseConfig = {
                apiKey: String(rawConfig.FIREBASE_API_KEY || '').trim(),
                authDomain: String(rawConfig.FIREBASE_AUTH_DOMAIN || '').trim(),
                databaseURL,
                projectId,
                storageBucket: String(rawConfig.FIREBASE_STORAGE_BUCKET || '').trim(),
                messagingSenderId: String(rawConfig.FIREBASE_MESSAGING_SENDER_ID || '').trim(),
                appId: String(rawConfig.FIREBASE_APP_ID || '').trim()
            };
            if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) return null;
            return firebaseConfig;
        }

        const firebaseProjectsPathStorageKey = 'hailifu_firebase_projects_path';
        const defaultFirebaseProjectsPath = 'projects';
        const firebaseSettingsPathStorageKey = 'hailifu_firebase_settings_path';

        const DEFAULT_SHOWCASE_PROJECTS = [
            {
                id: 'demo-cctv-ai',
                title: 'AI-Assisted Monitoring',
                name: 'AI-Assisted Monitoring',
                category: 'cctv',
                description: 'Large-scale, AI-assisted monitoring with intelligent alerts and threat detection.',
                mediaSrc: 'assets/img/cctv.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-electrical-grid',
                title: 'Industrial Power Grid',
                name: 'Industrial Power Grid',
                category: 'electrical',
                description: 'Heavy-duty distribution upgrade with smart load balancing and redundant protection.',
                mediaSrc: 'assets/img/electrical.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-gates-biometric',
                title: 'Biometric Entry Gate',
                name: 'Biometric Entry Gate',
                category: 'gates',
                description: 'Secure biometric access with real-time logging and fail-safe control.',
                mediaSrc: 'assets/img/gate-automation.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-solar-hub',
                title: 'Solar Command Hub',
                name: 'Solar Command Hub',
                category: 'solar',
                description: 'Centralized solar command with live performance analytics and smart switching.',
                mediaSrc: 'assets/img/power-panel.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-solar-perimeter',
                title: 'Solar Security Perimeter',
                name: 'Solar Security Perimeter',
                category: 'solar',
                description: 'Solar-powered perimeter lighting and security coverage with resilient backup.',
                mediaSrc: 'assets/img/lighting.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-electrical-residence',
                title: 'Electrical Smart Residence',
                name: 'Electrical Smart Residence',
                category: 'electrical',
                description: 'Smart home distribution with intelligent load scheduling and monitoring.',
                mediaSrc: 'assets/img/termination.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-smarthome',
                title: 'Smart Home Core',
                name: 'Smart Home Core',
                category: 'smarthome',
                description: 'Unified automation across lighting, climate, and access control.',
                mediaSrc: 'assets/img/site-work-2021.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-hvac',
                title: 'Smart HVAC Control',
                name: 'Smart HVAC Control',
                category: 'airconditioning',
                description: 'Precision cooling systems with energy-efficient smart thermostats.',
                mediaSrc: 'assets/img/air-conditioning.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-fence',
                title: 'High-Tension Security',
                name: 'High-Tension Security',
                category: 'fencing',
                description: 'Advanced intrusion detection with localized alarm zones.',
                mediaSrc: 'assets/img/field-technician.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-blinds',
                title: 'Automated Shading',
                name: 'Automated Shading',
                category: 'blindcurtain',
                description: 'Smart motorized blinds integrated with light sensors for climate control.',
                mediaSrc: 'assets/img/curtains-lighting.webp',
                mediaType: 'image',
                showInShowcase: true,
                showcase: true
            }
        ];
        const DEFAULT_PROJECT_MEDIA_BY_ID = Object.freeze(
            DEFAULT_SHOWCASE_PROJECTS.reduce((acc, project) => {
                const id = String(project?.id || '').trim();
                const mediaSrc = String(project?.mediaSrc || '').trim();
                const mediaType = String(project?.mediaType || 'image').trim().toLowerCase() || 'image';
                if (!id || !mediaSrc) return acc;
                acc[id] = { mediaSrc, mediaType };
                return acc;
            }, {})
        );
        const defaultFirebaseSettingsPath = 'hailifu/settings';
        const defaultFirebaseReviewsPath = 'reviews';
        const defaultFirestoreReviewsCollection = 'reviews';
        const expectedFirestoreProjectId = 'hailifu-brilliant';
        const integrityImageStorageKey = 'hailifu_integrity_image_url';
        // Round 11: no built-in Aftercare photo. Nothing saved = the card shows no photo.
        const defaultIntegrityMediaUrl = '';
        const remoteConfigPublicIdStorageKey = 'hailifu_remote_config_public_id';
        const remoteConfigUrlStorageKey = 'hailifu_remote_config_url';
        const defaultRemoteConfigPublicId = 'hailifu_site_config';
        const leadsStorageKey = 'hailifu_leads';
        const reviewsStorageKey = 'hailifu_reviews';
        const deletedReviewsStorageKey = 'hailifu_deleted_reviews';
        const adminNotificationsStorageKey = 'hailifu_admin_notifications';
        const adminControlPinStorageKey = 'hailifu_admin_control_pin';

        function getDeletedReviewIds() {
            return readJsonStorage(deletedReviewsStorageKey, []);
        }

        function getAdminNotifications() {
            return readJsonStorage(adminNotificationsStorageKey, []);
        }

        function saveAdminNotifications(items) {
            writeJsonStorage(adminNotificationsStorageKey, Array.isArray(items) ? items : []);
        }

        function pushAdminNotification(type, title, details, meta = {}) {
            const current = getAdminNotifications();
            const record = {
                id: `notif_${hashText(`${Date.now()}|${Math.random()}|${type}|${title}`)}`,
                type: String(type || 'info').trim().toLowerCase(),
                title: String(title || 'Notification').trim() || 'Notification',
                details: String(details || '').trim(),
                createdAt: new Date().toISOString(),
                read: false,
                meta: meta && typeof meta === 'object' ? meta : {}
            };
            current.unshift(record);
            if (current.length > 200) current.length = 200;
            saveAdminNotifications(current);
            return record;
        }

        function markAllAdminNotificationsRead() {
            const current = getAdminNotifications();
            const next = current.map((entry) => ({ ...entry, read: true }));
            saveAdminNotifications(next);
        }

        // Round 11: the browser-only "Destructive Action PIN" was removed (Supabase login + RLS
        // protect the admin; every delete still asks to confirm). Clear the old stored PIN.
        try { localStorage.removeItem(adminControlPinStorageKey); } catch {}

        function recordDeletedReviewId(id) {
            const ids = getDeletedReviewIds();
            const targetId = String(id || '').trim();
            if (targetId && !ids.includes(targetId)) {
                ids.push(targetId);
                writeJsonStorage(deletedReviewsStorageKey, ids);
            }
        }
        const projectsStorageKey = 'hailifu_projects';
        const deletedProjectsStorageKey = 'hailifu_deleted_project_ids';
        const mediaLibraryStorageKey = 'hailifu_media_library';
        const sectionMediaStorageKey = 'hailifu_section_media';
        const pageReachStorageKey = 'hailifu_page_reach';
        const mediaUploadHistoryStorageKey = 'hailifu_media_upload_history';
        const pageReachSessionKey = 'hailifu_page_reach_session';

        let remoteConfigState = null;
        let remoteConfigFingerprint = '';
        let remoteConfigPollTimer = null;
        let remoteConfigDisabledForSession = false;

        let firebaseDb = null;
        let firebaseAuth = null;
        let firebaseFirestore = null;
        let firebaseStorage = null;
        let firebaseProjectsState = null;
        let firebaseMediaLibraryState = null;
        let firebaseSectionMediaState = null;
        let firebaseProjectsRef = null;
        let firebaseMediaLibraryRef = null;
        let firebaseSectionMediaRef = null;
        let firebaseSettingsRef = null;
        let firebaseReviewsRef = null;
        let firebaseAuthObserverUnsubscribe = null;
        let reviewIdentityAuthUnsubscribe = null;
        let firestorePendingReviewsUnsubscribe = null;
        let firestorePublishedReviewsUnsubscribe = null;
        let firebaseAuthUser = null;
        let firestorePendingReviewsState = [];
        let firestorePublishedReviewsState = [];
        let firestoreProjectMismatchWarned = false;

        let supabaseClient = null;
        const reviewOauthBrandName = 'HAILIFU BRILLIANT INSTALLATION';
        const MEDIA_SECTION_SLOTS = Object.freeze([
            { key: 'hero.background', label: 'Hero Background' },
            { key: 'about.integrityMedia', label: 'About Integrity Media' },
            { key: 'services.cctvCard', label: 'Services CCTV Card' },
            { key: 'services.electricalCard', label: 'Services Electrical Card' },
            { key: 'services.gatesCard', label: 'Services Gates Card' },
            { key: 'services.airconditioningCard', label: 'Services Air Conditioning Card' },
            { key: 'services.blindcurtainCard', label: 'Services Smart Window Card' },
            { key: 'showcase.defaultFallback', label: 'Showcase Fallback Media' },
            { key: 'featured.defaultFallback', label: 'Featured Fallback Media' }
        ]);
        const reviewGoogleClientIdStorageKey = 'hailifu_google_client_id';
        const emptyReviewIdentityState = Object.freeze({
            name: '',
            displayName: '',
            email: '',
            photoURL: '',
            providerId: '',
            uid: '',
            verified: false
        });
        let reviewIdentityState = { ...emptyReviewIdentityState };
        let reviewOneTapInitialized = false;
        let reviewOneTapBootstrapAttempted = false;
        let reviewOneTapPendingPromise = null;
        let reviewOneTapPendingResolve = null;
        let reviewOneTapPendingTimer = null;
        let reviewAuthHandshakePromise = null;
        let reviewAuthHandshakeSettled = false;
        let currentUserProfile = {
            displayName: '',
            photoURL: '',
            email: '',
            providerId: '',
            uid: '',
            verified: false,
            updatedAt: 0
        };
        try {
            window.currentUserProfile = { ...currentUserProfile };
        } catch {}

        let adminBackdrop = null;
        let adminPanel = null;
        let adminHideTimer = null;
        let adminToggle = null;
        let adminTabs = [];
        let adminTabPanels = [];
        let reviewsRequireApproval = null;

        // Centralized State Management for Premium Admin Portal
        const adminState = {
            currentUser: null,
            activeTab: 'overview',
            isLoading: false,
            data: {
                leads: [],
                projects: [],
                media: [],
                reviews: [],
                systemHealth: {
                    database: 'unknown',
                    googleApi: 'unknown',
                    lastChecked: null
                }
            },
            cache: new Map(),
            listeners: new Set()
        };

        function updateAdminState(key, value) {
            adminState[key] = value;
            adminState.listeners.forEach(listener => listener(key, value));
        }

        function subscribeToAdminState(listener) {
            adminState.listeners.add(listener);
            return () => adminState.listeners.delete(listener);
        }

        let adminLazyLoop = null;
        let adminLazyLoopTrack = null;
        let adminLazyLoopDots = null;
        let adminLazyLoopTimer = null;
        let adminLazyLoopIndex = 0;
        let adminLazyLoopCount = 0;
        let adminLazyLoopHasBindings = false;
        let adminLazyLoopSlides = [];

        const themeStorageKey = 'hailifu_theme';

        // Round 11: three modes. 'light' / 'dark' = the visitor chose it (saved); 'system' =
        // nothing chosen, so the site follows the device setting and changes with it.
        const systemThemeQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
        const THEME_LABELS = { light: 'Light', dark: 'Dark', system: 'Auto (follows your device)' };

        function getThemeMode() {
            let stored = '';
            try { stored = String(localStorage.getItem(themeStorageKey) || '').trim().toLowerCase(); } catch {}
            return stored === 'light' || stored === 'dark' ? stored : 'system';
        }

        function resolveTheme(mode) {
            if (mode === 'light' || mode === 'dark') return mode;
            return systemThemeQuery && systemThemeQuery.matches ? 'light' : 'dark';
        }

        function applyTheme(mode) {
            const safeMode = mode === 'light' || mode === 'dark' ? mode : 'system';
            const theme = resolveTheme(safeMode);
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.setAttribute('data-theme-mode', safeMode);
            document.body.setAttribute('data-theme', theme);
            if (themeToggle) {
                themeToggle.title = `Theme: ${THEME_LABELS[safeMode]}`;
                themeToggle.setAttribute('aria-label', `Theme: ${THEME_LABELS[safeMode].toLowerCase()}. Tap to change.`);
            }
        }

        // Auto -> the opposite of what the device shows (so the first tap always changes
        // something) -> the other one -> back to Auto.
        function toggleTheme() {
            const mode = getThemeMode();
            let next;
            if (mode === 'system') next = resolveTheme('system') === 'dark' ? 'light' : 'dark';
            else if (mode !== resolveTheme('system')) next = mode === 'light' ? 'dark' : 'light';
            else next = 'system';
            try {
                if (next === 'system') localStorage.removeItem(themeStorageKey);
                else localStorage.setItem(themeStorageKey, next);
            } catch {}
            applyTheme(next);
            try { if (typeof showSiteShareSnackbar === 'function') showSiteShareSnackbar(`Theme: ${THEME_LABELS[next]}`); } catch {}
        }

        applyTheme(getThemeMode());
        if (systemThemeQuery) {
            const onSystemTheme = () => { if (getThemeMode() === 'system') applyTheme('system'); };
            if (typeof systemThemeQuery.addEventListener === 'function') systemThemeQuery.addEventListener('change', onSystemTheme);
            else if (typeof systemThemeQuery.addListener === 'function') systemThemeQuery.addListener(onSystemTheme);
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                themeToggle.classList.remove('is-rotating');
                requestAnimationFrame(() => {
                    themeToggle.classList.add('is-rotating');
                });
                toggleTheme();
            });
            themeToggle.addEventListener('animationend', () => {
                themeToggle.classList.remove('is-rotating');
            });
        }

        function readJsonStorage(key, fallback) {
            try {
                const raw = localStorage.getItem(key);

                if (!raw) return fallback;
                return JSON.parse(raw);
            } catch {
                return fallback;
            }
        }

        function writeJsonStorage(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function getMediaUploadHistory() {
            const raw = readJsonStorage(mediaUploadHistoryStorageKey, []);
            if (!Array.isArray(raw)) return [];
            return raw
                .map((entry) => (entry && typeof entry === 'object' ? entry : null))
                .filter(Boolean);
        }

        function pushMediaUploadHistory(fileName) {
            const name = String(fileName || '').trim();
            if (!name) return;
            const current = getMediaUploadHistory();
            current.unshift({ name, uploadedAt: new Date().toISOString() });
            const deduped = [];
            const seen = new Set();
            current.forEach((entry) => {
                const key = String(entry?.name || '').trim();
                if (!key || seen.has(key)) return;
                seen.add(key);
                deduped.push(entry);
            });
            if (deduped.length > 200) deduped.length = 200;
            writeJsonStorage(mediaUploadHistoryStorageKey, deduped);
        }

        const siteControlStorageKey = 'hailifu_site_control_settings';

        const defaultSiteControlSettings = {
            sectionOrder: ['hero', 'trust-strip', 'featured-work', 'showcase', 'about', 'services', 'reviews'],
            sectionVisibility: {
                hero: true,
                'trust-strip': true,
                'featured-work': true,
                showcase: true,
                about: true,
                services: true,
                reviews: true
            },
            hero: {
                title: 'Hailifu Brilliant Installation',
                tagline: 'Brilliant installations for secure, modern living.',
                slogan: 'WHERE SECURITY MEETS INNOVATION',
                subtitle: 'Advanced Surveillance & Electrical Engineering Solutions for Ghana.'
            },
            services: {}
        };

        function getSiteControlSettings() {
            const raw = readJsonStorage(siteControlStorageKey, {});
            return {
                ...defaultSiteControlSettings,
                ...(raw && typeof raw === 'object' ? raw : {}),
                sectionVisibility: {
                    ...defaultSiteControlSettings.sectionVisibility,
                    ...(raw?.sectionVisibility || {})
                },
                hero: {
                    ...defaultSiteControlSettings.hero,
                    ...(raw?.hero || {})
                },
                services: {
                    ...(raw?.services || {})
                }
            };
        }

        function saveSiteControlSettings(next) {
            const merged = {
                ...getSiteControlSettings(),
                ...(next && typeof next === 'object' ? next : {})
            };
            writeJsonStorage(siteControlStorageKey, merged);
            return merged;
        }

        function applySiteSectionOrderAndVisibility(settingsInput = null) {
            const settings = settingsInput && typeof settingsInput === 'object' ? settingsInput : getSiteControlSettings();
            const sectionIds = ['hero', 'trust-strip', 'featured-work', 'showcase', 'about', 'services', 'reviews'];
            const mainRoot = document.body;
            const footer = document.querySelector('footer.site-footer') || document.querySelector('footer');
            const order = Array.isArray(settings.sectionOrder) ? settings.sectionOrder : defaultSiteControlSettings.sectionOrder;
            const ordered = [...new Set(order.filter((id) => sectionIds.includes(id)).concat(sectionIds))];
            ordered.forEach((id) => {
                const node = document.getElementById(id);
                if (!node || !mainRoot.contains(node)) return;
                if (footer && footer.parentNode === mainRoot) {
                    mainRoot.insertBefore(node, footer);
                } else {
                    mainRoot.appendChild(node);
                }
            });
            sectionIds.forEach((id) => {
                const node = document.getElementById(id);
                if (!node) return;
                const visible = settings.sectionVisibility?.[id] !== false;
                node.style.display = visible ? '' : 'none';
            });
        }

        function applyHeroContentSettings(settingsInput = null) {
            const settings = settingsInput && typeof settingsInput === 'object' ? settingsInput : getSiteControlSettings();
            const heroRoot = document.getElementById('hero');
            if (!heroRoot) return;
            const titleNode = heroRoot.querySelector('h1');
            const taglineNode = heroRoot.querySelector('.brand-tagline');
            const sloganNode = heroRoot.querySelector('.hero-slogan');
            const subtitleNode = heroRoot.querySelector('.hero-slogan-sub');
            if (titleNode && settings.hero?.title) titleNode.textContent = settings.hero.title;
            if (taglineNode && settings.hero?.tagline) taglineNode.textContent = settings.hero.tagline;
            if (sloganNode && settings.hero?.slogan) sloganNode.textContent = settings.hero.slogan;
            if (subtitleNode && settings.hero?.subtitle) subtitleNode.textContent = settings.hero.subtitle;
        }

        function applyServiceCardContentSettings(settingsInput = null) {
            const settings = settingsInput && typeof settingsInput === 'object' ? settingsInput : getSiteControlSettings();
            const map = settings.services && typeof settings.services === 'object' ? settings.services : {};
            Object.entries(map).forEach(([cardId, payload]) => {
                const card = document.getElementById(cardId);
                if (!card || !payload || typeof payload !== 'object') return;
                const titleNode = card.querySelector('h3');
                const descNode = card.querySelector('p');
                if (titleNode && payload.title) titleNode.textContent = String(payload.title);
                if (descNode && payload.description) descNode.textContent = String(payload.description);
            });
        }

        function hasStorageKey(key) {
            try {
                return localStorage.getItem(key) !== null;
            } catch {
                return false;
            }
        }

        function hashText(value) {
            const raw = String(value || '');
            let hash = 0x811c9dc5;
            for (let i = 0; i < raw.length; i += 1) {
                hash ^= raw.charCodeAt(i);
                hash = Math.imul(hash, 0x01000193) >>> 0;
            }
            return (hash >>> 0).toString(16).padStart(8, '0');
        }

        function withFirebaseProjectDefaults(configInput) {
            if (!configInput || typeof configInput !== 'object') return null;
            const next = { ...configInput };
            const projectId = String(next.projectId || '').trim();
            if (!projectId) return next;
            if (!String(next.authDomain || '').trim()) {
                next.authDomain = `${projectId}.firebaseapp.com`;
            }
            if (!String(next.storageBucket || '').trim()) {
                next.storageBucket = `${projectId}.firebasestorage.app`;
            }
            return next;
        }

        function isExpectedFirestoreProject(configInput) {
            const projectId = String(configInput && configInput.projectId ? configInput.projectId : '').trim().toLowerCase();
            return !!projectId && projectId === expectedFirestoreProjectId;
        }

        function warnFirestoreProjectMismatch(configInput, sourceLabel = 'active') {
            if (firestoreProjectMismatchWarned) return;
            const activeProjectId = String(configInput && configInput.projectId ? configInput.projectId : '').trim();
            if (!activeProjectId) return;
            if (activeProjectId.toLowerCase() === expectedFirestoreProjectId) return;
            console.warn(
                `[HAILIFU] Firestore config mismatch (${sourceLabel}). Expected project "${expectedFirestoreProjectId}" but found "${activeProjectId}".`
            );
            firestoreProjectMismatchWarned = true;
        }

        function readFirebaseConfig() {
            let windowConfig = null;
            try {
                const fromWindow = window.HAILIFU_FIREBASE_CONFIG;
                if (fromWindow && typeof fromWindow === 'object') {
                    windowConfig = withFirebaseProjectDefaults(fromWindow);
                }
            } catch {}
            if (windowConfig) {
                if (isExpectedFirestoreProject(windowConfig)) return windowConfig;
                warnFirestoreProjectMismatch(windowConfig, 'window');
            }

            const stored = withFirebaseProjectDefaults(readJsonStorage(firebaseConfigStorageKey, null));
            if (stored) {
                if (isExpectedFirestoreProject(stored)) return stored;
                warnFirestoreProjectMismatch(stored, 'localStorage');
            }
            return windowConfig || stored || null;
        }

        function persistFirebaseConfigFromText(text) {
            const raw = String(text || '').trim();
            if (!raw) {
                try { localStorage.removeItem(firebaseConfigStorageKey); } catch {}
                return true;
            }
            try {
                const parsed = JSON.parse(raw);
                if (!parsed || typeof parsed !== 'object') return false;
                writeJsonStorage(firebaseConfigStorageKey, parsed);
                return true;
            } catch {
                return false;
            }
        }

        function resetFirebaseRuntime() {
            stopFirebaseProjectsSync();
            stopFirebaseSettingsSync();
            stopFirebaseReviewsSync();
            stopReviewIdentityAuthSync();
            stopFirestoreReviewAuthSync();
            firebaseDb = null;
            firebaseAuth = null;
            firebaseFirestore = null;
            firebaseStorage = null;
            firebaseProjectsState = null;
            firebaseAuthUser = null;
            firestorePendingReviewsState = [];
            firestorePublishedReviewsState = [];
        }

        function getFirebaseProjectsPath() {
            const stored = String(readJsonStorage(firebaseProjectsPathStorageKey, '') || '').trim();
            if (!stored) return defaultFirebaseProjectsPath;
            if (stored === 'hailifu/projects') return 'projects';
            return stored;
        }

        function getFirebaseSettingsPath() {
            const stored = String(readJsonStorage(firebaseSettingsPathStorageKey, '') || '').trim();
            return stored || defaultFirebaseSettingsPath;
        }

        function getFirebaseReviewsPath() {
            return defaultFirebaseReviewsPath;
        }

        function persistFirebaseProjectsPath(path) {
            const next = String(path || '').trim();
            writeJsonStorage(firebaseProjectsPathStorageKey, next);
        }

        function persistFirebaseSettingsPath(path) {
            const next = String(path || '').trim();
            writeJsonStorage(firebaseSettingsPathStorageKey, next);
        }

        function firebaseCoreIsReady() {
            const cfg = readFirebaseConfig();
            if (!cfg) return false;
            if (!window.firebase) return false;
            if (!firebase.initializeApp) return false;
            return true;
        }

        function ensureFirebaseApp() {
            if (!firebaseCoreIsReady()) return null;
            try {
                if (!firebase.apps || !firebase.apps.length) {
                    firebase.initializeApp(readFirebaseConfig());
                }
            } catch {}
            try {
                return Array.isArray(firebase.apps) && firebase.apps.length ? firebase.apps[0] : null;
            } catch {
                return null;
            }
        }

        function firebaseIsReady() {
            const cfg = readFirebaseConfig();
            if (!cfg || !hasRealtimeDatabaseUrl(cfg)) return false;
            if (!ensureFirebaseApp()) return false;
            if (!firebase.database) return false;
            return true;
        }

        function hasRealtimeDatabaseUrl(configInput) {
            const rawUrl = String(configInput && configInput.databaseURL ? configInput.databaseURL : '').trim();
            if (!rawUrl) return false;
            try {
                const parsed = new URL(rawUrl);
                const host = String(parsed.host || '').toLowerCase();
                return host.includes('firebaseio.com') || host.includes('firebasedatabase.app');
            } catch {
                return false;
            }
        }

        function ensureFirebaseDb() {
            if (firebaseDb) return firebaseDb;
            if (!firebaseIsReady()) return null;
            try {
                firebaseDb = firebase.database();
                return firebaseDb;
            } catch {
                return null;
            }
        }

        function ensureFirebaseAuthService() {
            if (firebaseAuth) return firebaseAuth;
            if (!ensureFirebaseApp()) return null;
            if (!firebase.auth) return null;
            try {
                firebaseAuth = firebase.auth();
                return firebaseAuth;
            } catch {
                return null;
            }
        }

        function ensureFirebaseFirestoreService() {
            const activeConfig = readFirebaseConfig();
            if (activeConfig && !isExpectedFirestoreProject(activeConfig)) {
                warnFirestoreProjectMismatch(activeConfig, 'runtime');
            }
            if (firebaseFirestore) return firebaseFirestore;
            if (!ensureFirebaseApp()) return null;
            if (!firebase.firestore) return null;
            try {
                firebaseFirestore = firebase.firestore();
                return firebaseFirestore;
            } catch {
                return null;
            }
        }

        function ensureFirebaseStorageService() {
            if (firebaseStorage) return firebaseStorage;
            if (!ensureFirebaseApp()) return null;
            if (!firebase.storage || typeof firebase.storage !== 'function') return null;
            try {
                firebaseStorage = firebase.storage();
                return firebaseStorage;
            } catch (error) {
                try {
                    console.warn('[HAILIFU] Firebase Storage unavailable. Media upload features are temporarily disabled.', error);
                } catch {}
                return null;
            }
        }

        function ensureFirebaseFunctionsService() {
            if (!ensureFirebaseApp()) return null;
            if (!firebase.functions || typeof firebase.functions !== 'function') return null;
            try {
                return firebase.functions();
            } catch {
                return null;
            }
        }

        function deleteCloudinaryAssetViaFunction(publicId, resourceType = 'image') {
            const pid = String(publicId || '').trim();
            if (!pid) return Promise.resolve({ ok: false, skipped: true });
            const functions = ensureFirebaseFunctionsService();
            if (!functions || typeof functions.httpsCallable !== 'function') {
                return Promise.reject(new Error('Firebase Functions unavailable on this page.'));
            }
            const callable = functions.httpsCallable('deleteCloudinaryAsset');
            return callable({
                publicId: pid,
                resourceType: String(resourceType || 'image').trim().toLowerCase() || 'image'
            });
        }

        function startFirebaseProjectsSync() {
            const db = ensureFirebaseDb();
            if (!db) return false;
            const path = getFirebaseProjectsPath();
            try {
                if (firebaseProjectsRef) {
                    try { firebaseProjectsRef.off(); } catch {}
                }
            } catch {}
            firebaseProjectsRef = db.ref(path);
            firebaseProjectsRef.on('value', (snap) => {
                try {
                    const raw = snap && typeof snap.val === 'function' ? snap.val() : null;
                    const map = raw && typeof raw === 'object' ? raw : {};
                    const list = Object.keys(map).map((id) => {
                        const p = map[id];
                        if (!p || typeof p !== 'object') return null;
                        return { ...p, id: String(p.id || id) };
                    }).filter(Boolean);
                    list.sort((a, b) => {
                        const ta = Number(a?.timestamp) || (Date.parse(a?.createdAt || '') || 0);
                        const tb = Number(b?.timestamp) || (Date.parse(b?.createdAt || '') || 0);
                        return tb - ta;
                    });
                    firebaseProjectsState = list;
                    loadProjects();
                    renderAdminLazyLoop();
                } catch {}
            }, () => {
                firebaseProjectsState = null;
                stopFirebaseProjectsSync();
                syncFromRemoteConfig({ forceRender: true }).catch(() => {});
            });
            return true;
        }

        function stopFirebaseProjectsSync() {
            if (firebaseProjectsRef) {
                try { firebaseProjectsRef.off(); } catch {}
            }
            firebaseProjectsRef = null;
        }

        function startFirebaseSettingsSync() {
            const db = ensureFirebaseDb();
            if (!db) return false;
            const path = getFirebaseSettingsPath();
            try {
                if (firebaseSettingsRef) {
                    try { firebaseSettingsRef.off(); } catch {}
                }
            } catch {}
            firebaseSettingsRef = db.ref(path);
            firebaseSettingsRef.on('value', (snap) => {
                try {
                    const raw = snap && typeof snap.val === 'function' ? snap.val() : null;
                    const settings = raw && typeof raw === 'object' ? raw : {};
                    const heroUrl = String(settings?.heroVideoUrl || '').trim();
                    if (heroUrl) {
                        try { initHeroVideo(heroUrl); } catch {}
                    }
                    const integrityUrl = String(settings?.integrityImageUrl || '').trim();
                    if (integrityUrl) {
                        try { loadIntegrityImage(integrityUrl); } catch {}
                    }
                    const remoteReach = Number(settings?.pageReach);
                    if (Number.isFinite(remoteReach) && remoteReach >= 0) {
                        const safeReach = Math.floor(remoteReach);
                        if (safeReach !== getPageReachCount()) {
                            writeJsonStorage(pageReachStorageKey, safeReach);
                            refreshOverview();
                        }
                    }
                } catch {}
            });
            return true;
        }

        function stopFirebaseSettingsSync() {
            if (firebaseSettingsRef) {
                try { firebaseSettingsRef.off(); } catch {}
            }
            firebaseSettingsRef = null;
        }

        function getFirebaseMediaLibraryPath() {
            return 'hailifu/mediaLibrary';
        }

        function getFirebaseSectionMediaPath() {
            return 'hailifu/sectionMedia';
        }

        function getMediaLibraryRecords() {
            if (Array.isArray(firebaseMediaLibraryState)) return firebaseMediaLibraryState;
            const raw = readJsonStorage(mediaLibraryStorageKey, []);
            return Array.isArray(raw) ? raw.filter(Boolean) : [];
        }

        function saveMediaLibraryRecords(records) {
            writeJsonStorage(mediaLibraryStorageKey, Array.isArray(records) ? records : []);
        }

        function getSectionMediaAssignments() {
            if (firebaseSectionMediaState && typeof firebaseSectionMediaState === 'object') {
                return firebaseSectionMediaState;
            }
            const raw = readJsonStorage(sectionMediaStorageKey, {});
            return raw && typeof raw === 'object' ? raw : {};
        }

        function saveSectionMediaAssignments(assignments) {
            const safe = assignments && typeof assignments === 'object' ? assignments : {};
            writeJsonStorage(sectionMediaStorageKey, safe);
        }

        function getMediaLibraryMap() {
            const map = {};
            getMediaLibraryRecords().forEach((entry) => {
                const id = String(entry?.id || '').trim();
                if (!id) return;
                map[id] = entry;
            });
            return map;
        }

        function normalizeMediaLibraryRecord(input) {
            if (!input || typeof input !== 'object') return null;
            const id = String(input.id || '').trim();
            const url = normalizeProjectMediaPath(String(input.url || input.mediaSrc || '').trim());
            if (!id || !url) return null;
            const type = String(input.type || input.mediaType || '').trim().toLowerCase();
            const normalizedType = type === 'video' || type === 'youtube' ? type : 'image';
            return {
                id,
                url,
                type: normalizedType,
                provider: String(input.provider || '').trim().toLowerCase() || 'external',
                publicId: String(input.publicId || '').trim(),
                resourceType: String(input.resourceType || '').trim().toLowerCase() || 'auto',
                tags: Array.isArray(input.tags) ? input.tags.map((t) => String(t || '').trim()).filter(Boolean) : [],
                title: String(input.title || '').trim(),
                createdAt: String(input.createdAt || '').trim() || new Date().toISOString(),
                deletedAt: input.deletedAt ? String(input.deletedAt) : ''
            };
        }

        function normalizeSectionMediaShape(raw) {
            if (!raw || typeof raw !== 'object') return {};
            const out = {};
            Object.entries(raw).forEach(([slot, value]) => {
                const key = String(slot || '').trim();
                if (!key) return;
                if (value && typeof value === 'object') {
                    const mediaId = String(value.mediaId || '').trim();
                    if (mediaId) out[key] = { mediaId };
                    return;
                }
                const mediaId = String(value || '').trim();
                if (mediaId) out[key] = { mediaId };
            });
            return out;
        }

        function startFirebaseMediaLibrarySync() {
            const db = ensureFirebaseDb();
            if (!db) return false;
            const path = getFirebaseMediaLibraryPath();
            try {
                if (firebaseMediaLibraryRef) {
                    try { firebaseMediaLibraryRef.off(); } catch {}
                }
            } catch {}
            firebaseMediaLibraryRef = db.ref(path);
            firebaseMediaLibraryRef.on('value', (snap) => {
                const raw = snap && typeof snap.val === 'function' ? snap.val() : null;
                const map = raw && typeof raw === 'object' ? raw : {};
                const list = Object.keys(map)
                    .map((id) => normalizeMediaLibraryRecord({ ...map[id], id }))
                    .filter(Boolean)
                    .sort((a, b) => (Date.parse(b?.createdAt || '') || 0) - (Date.parse(a?.createdAt || '') || 0));
                firebaseMediaLibraryState = list;
                saveMediaLibraryRecords(list);
                renderMediaLibraryAndSections();
            });
            return true;
        }

        function stopFirebaseMediaLibrarySync() {
            if (firebaseMediaLibraryRef) {
                try { firebaseMediaLibraryRef.off(); } catch {}
            }
            firebaseMediaLibraryRef = null;
        }

        function startFirebaseSectionMediaSync() {
            const db = ensureFirebaseDb();
            if (!db) return false;
            const path = getFirebaseSectionMediaPath();
            try {
                if (firebaseSectionMediaRef) {
                    try { firebaseSectionMediaRef.off(); } catch {}
                }
            } catch {}
            firebaseSectionMediaRef = db.ref(path);
            firebaseSectionMediaRef.on('value', (snap) => {
                const raw = snap && typeof snap.val === 'function' ? snap.val() : null;
                const normalized = normalizeSectionMediaShape(raw);
                firebaseSectionMediaState = normalized;
                saveSectionMediaAssignments(normalized);
                renderMediaLibraryAndSections();
            });
            return true;
        }

        function stopFirebaseSectionMediaSync() {
            if (firebaseSectionMediaRef) {
                try { firebaseSectionMediaRef.off(); } catch {}
            }
            firebaseSectionMediaRef = null;
        }

        function startFirebaseReviewsSync() {
            const db = ensureFirebaseDb();
            if (!db) return false;
            const path = getFirebaseReviewsPath();
            try {
                if (firebaseReviewsRef) {
                    try { firebaseReviewsRef.off(); } catch {}
                }
            } catch {}
            firebaseReviewsRef = db.ref(path);
            firebaseReviewsRef.on('value', (snap) => {
                try {
                    const raw = snap && typeof snap.val === 'function' ? snap.val() : null;
                    const map = raw && typeof raw === 'object' ? raw : {};
                    const list = Object.keys(map).map((id) => {
                        const review = map[id];
                        if (!review || typeof review !== 'object') return null;
                        return { ...review, id: String(review.id || id) };
                    }).filter(Boolean);
                    list.sort((a, b) => {
                        const ta = Date.parse(a?.createdAt || a?.date || '') || 0;
                        const tb = Date.parse(b?.createdAt || b?.date || '') || 0;
                        return tb - ta;
                    });
                    const { normalized } = normalizeReviewRecords(list);
                    writeJsonStorage(reviewsStorageKey, normalized);
                    renderAdminReviews();
                    renderPublicReviews();
                    refreshOverview();
                    refreshLiveReviewSection();
                } catch {}
            }, () => {
                stopFirebaseReviewsSync();
            });
            return true;
        }

        function stopFirebaseReviewsSync() {
            if (firebaseReviewsRef) {
                try { firebaseReviewsRef.off(); } catch {}
            }
            firebaseReviewsRef = null;
        }

        function getFirestoreReviewsCollection() {
            return defaultFirestoreReviewsCollection;
        }

        function getFirestoreTimestampValue() {
            try {
                if (firebase && firebase.firestore && firebase.firestore.FieldValue && typeof firebase.firestore.FieldValue.serverTimestamp === 'function') {
                    return firebase.firestore.FieldValue.serverTimestamp();
                }
            } catch {}
            return new Date().toISOString();
        }

        function hasFirestoreReviewRuntime() {
            return !!(ensureFirebaseAuthService() && ensureFirebaseFirestoreService());
        }

        function canAccessReviewModeration() {
            return hasAdminVisibilityAccess() && !!firebaseAuthUser;
        }

        function syncReviewAuthUiState() {
            const hasHandshake = hasAdminVisibilityAccess();
            const runtimeReady = hasFirestoreReviewRuntime();
            const signedIn = !!firebaseAuthUser;
            const moderationUnlocked = hasHandshake && signedIn;

            if (reviewModerationShell) {
                reviewModerationShell.hidden = !moderationUnlocked;
            }

            if (reviewAuthEmailInput) reviewAuthEmailInput.disabled = !runtimeReady || !hasHandshake || signedIn;
            if (reviewAuthPasswordInput) reviewAuthPasswordInput.disabled = !runtimeReady || !hasHandshake || signedIn;
            if (reviewAuthLoginBtn) reviewAuthLoginBtn.disabled = !runtimeReady || !hasHandshake || signedIn;
            if (reviewAuthLogoutBtn) {
                reviewAuthLogoutBtn.style.display = signedIn ? '' : 'none';
                reviewAuthLogoutBtn.disabled = !runtimeReady || !signedIn;
            }

            if (!reviewAuthStatus) return;
            if (!hasHandshake) {
                reviewAuthStatus.textContent = 'Complete the Triple-Click Handshake to unlock the review module.';
                return;
            }
            if (!runtimeReady) {
                reviewAuthStatus.textContent = 'Firebase Auth/Firestore unavailable. Check Firebase config in Projects tab.';
                return;
            }
            if (signedIn) {
                const email = String(firebaseAuthUser && firebaseAuthUser.email ? firebaseAuthUser.email : '').trim();
                reviewAuthStatus.textContent = email
                    ? `Authenticated as ${email}. Pending moderation feed is live.`
                    : 'Authenticated. Pending moderation feed is live.';
                return;
            }
            reviewAuthStatus.textContent = 'Sign in with Firebase to access pending reviews.';
        }

        function firstNonEmptyReviewValue(candidates = []) {
            const source = Array.isArray(candidates) ? candidates : [];
            for (let i = 0; i < source.length; i += 1) {
                const value = source[i];
                if (value === null || value === undefined) continue;
                const text = String(value).trim();
                if (text) return text;
            }
            return '';
        }

        function normalizeFirestoreReviewRecordShape(recordInput, opts = {}) {
            const record = recordInput && typeof recordInput === 'object' ? { ...recordInput } : {};
            const reviewerIdentity = record.reviewerIdentity && typeof record.reviewerIdentity === 'object'
                ? record.reviewerIdentity
                : {};
            const displayName = firstNonEmptyReviewValue([
                record.displayName,
                record.reviewerDisplayName,
                record.name,
                record.authorName,
                record.userName,
                reviewerIdentity.displayName,
                reviewerIdentity.name
            ]);
            const email = firstNonEmptyReviewValue([
                record.reviewEmail,
                record.reviewerEmail,
                record.email,
                record.userEmail,
                record.authorEmail,
                reviewerIdentity.email
            ]);
            const comment = firstNonEmptyReviewValue([
                record.comment,
                record.reviewText,
                record.review_text,
                record.text,
                record.message,
                record.content,
                record.description
            ]);
            const photoURL = firstNonEmptyReviewValue([
                record.reviewerPhotoURL,
                record.photoURL,
                record.authorImage,
                record.author_image,
                record.avatar,
                record.photo_url,
                record.picture,
                reviewerIdentity.photoURL
            ]);
            const ownerReply = firstNonEmptyReviewValue([
                record.ownerReply,
                record.owner_reply,
                record.ownerResponse,
                record.owner_response,
                record.reply,
                record.response
            ]);
            const ratingRaw = record.rating ?? record.stars ?? record.score ?? record.reviewRating ?? record.review_score ?? record.overallRating;
            const rating = Number(ratingRaw);
            const statusRaw = String(record.status || '').trim().toLowerCase();
            const fallbackStatus = String(opts.defaultStatusWhenMissing || '').trim().toLowerCase();
            const next = { ...record };

            if (displayName) {
                next.name = displayName;
                next.displayName = displayName;
                next.reviewerDisplayName = displayName;
            }
            if (email) {
                next.email = email;
                next.reviewEmail = email;
                next.reviewerEmail = email;
            }
            if (comment) next.comment = comment;
            if (photoURL) {
                next.reviewerPhotoURL = photoURL;
                next.photoURL = photoURL;
                next.authorImage = photoURL;
            }
            if (ownerReply) next.ownerReply = ownerReply;
            if (Number.isFinite(rating)) {
                next.rating = Math.max(1, Math.min(5, Math.round(rating)));
            }
            if (!statusRaw && fallbackStatus) {
                next.status = fallbackStatus;
            }
            return next;
        }

        function normalizeFirestoreReviewSnapshot(snapshot, opts = {}) {
            const list = [];
            if (!snapshot || typeof snapshot.forEach !== 'function') return list;
            snapshot.forEach((doc) => {
                try {
                    const data = doc && typeof doc.data === 'function' ? doc.data() : null;
                    if (!data || typeof data !== 'object') return;
                    const normalizedRecord = normalizeFirestoreReviewRecordShape({
                        ...data,
                        id: String((doc && doc.id) || data.id || '').trim()
                    }, opts);
                    list.push(normalizedRecord);
                } catch {}
            });
            const { normalized } = normalizeReviewRecords(list);
            return normalized;
        }

        function hasVerifiedReviewIdentity(identity) {
            return !!(identity && identity.email && identity.verified);
        }

        function decodeJwtPayload(token = '') {
            const raw = String(token || '').trim();
            if (!raw) return null;
            const parts = raw.split('.');
            if (parts.length < 2) return null;
            let payload = parts[1] || '';
            if (!payload) return null;
            payload = payload.replace(/-/g, '+').replace(/_/g, '/');
            while (payload.length % 4) payload += '=';
            try {
                const json = atob(payload);
                const parsed = JSON.parse(json);
                return parsed && typeof parsed === 'object' ? parsed : null;
            } catch {
                return null;
            }
        }

        function mapGoogleIdTokenToReviewIdentity(idToken = '') {
            const payload = decodeJwtPayload(idToken);
            if (!payload || typeof payload !== 'object') return { ...emptyReviewIdentityState };
            const email = toSafeEmailAddress(payload.email || payload.emailAddress || '');
            const emailVerified = payload.email_verified === true
                || payload.email_verified === 'true'
                || payload.verified_email === true
                || payload.verified_email === 'true';
            if (!email || !emailVerified) return { ...emptyReviewIdentityState };
            const mapped = normalizeReviewIdentity({
                email,
                displayName: String(payload.name || payload.given_name || '').trim() || deriveNameFromEmail(email) || 'Client',
                photoURL: payload.picture || '',
                providerId: 'google.com',
                uid: String(payload.sub || '').trim(),
                verified: true
            });
            return hasVerifiedReviewIdentity(mapped) ? mapped : { ...emptyReviewIdentityState };
        }

        function setCurrentUserProfileFromIdentity(identityInput = {}) {
            const identity = normalizeReviewIdentity(identityInput);
            const verified = hasVerifiedReviewIdentity(identity);
            const hasIdentitySignal = Boolean(
                identity.email
                || String(identity.displayName || identity.name || '').trim()
                || normalizeReviewPhotoUrl(identity.photoURL || '')
                || String(identity.uid || '').trim()
            );
            currentUserProfile = {
                displayName: hasIdentitySignal ? String(identity.displayName || identity.name || '').trim() : '',
                photoURL: hasIdentitySignal ? normalizeReviewPhotoUrl(identity.photoURL || '') : '',
                email: hasIdentitySignal ? toSafeEmailAddress(identity.email) : '',
                providerId: hasIdentitySignal ? String(identity.providerId || '').trim().toLowerCase() : '',
                uid: hasIdentitySignal ? String(identity.uid || '').trim() : '',
                verified,
                updatedAt: Date.now()
            };
            try {
                window.currentUserProfile = { ...currentUserProfile };
            } catch {}
            return { ...currentUserProfile };
        }

        function setCurrentUserProfileFromFirebaseUser(user = null) {
            const identity = mapFirebaseUserToReviewIdentity(user);
            return setCurrentUserProfileFromIdentity(identity);
        }

        function getFirebaseConfiguredGoogleClientId() {
            const candidates = [];
            try {
                if (window.CONFIG && typeof window.CONFIG === 'object') {
                    candidates.push(window.CONFIG.GOOGLE_CLIENT_ID);
                }
            } catch {}
            try {
                const auth = ensureFirebaseAuthService();
                if (auth && auth.app && auth.app.options && typeof auth.app.options === 'object') {
                    candidates.push(auth.app.options.googleClientId);
                    candidates.push(auth.app.options.clientId);
                }
            } catch {}
            for (let i = 0; i < candidates.length; i += 1) {
                const candidate = String(candidates[i] || '').trim();
                if (/\.apps\.googleusercontent\.com$/i.test(candidate)) return candidate;
            }
            return '';
        }

        function getGoogleOneTapClientId() {
            const candidates = [];
            const firebaseClientId = getFirebaseConfiguredGoogleClientId();
            if (firebaseClientId) candidates.push(firebaseClientId);
            try { candidates.push(window.HAILIFU_GOOGLE_CLIENT_ID); } catch {}
            try {
                if (window.CONFIG && typeof window.CONFIG === 'object') {
                    candidates.push(window.CONFIG.GOOGLE_CLIENT_ID);
                    candidates.push(window.CONFIG.FIREBASE_GOOGLE_CLIENT_ID);
                    candidates.push(window.CONFIG.GOOGLE_OAUTH_CLIENT_ID);
                }
            } catch {}
            try {
                const firebaseCfg = readFirebaseConfig();
                if (firebaseCfg && typeof firebaseCfg === 'object') {
                    candidates.push(firebaseCfg.googleClientId);
                    candidates.push(firebaseCfg.clientId);
                }
            } catch {}
            try {
                const stored = String(readJsonStorage(reviewGoogleClientIdStorageKey, '') || '').trim();
                if (stored) candidates.push(stored);
            } catch {}

            for (let i = 0; i < candidates.length; i += 1) {
                const candidate = String(candidates[i] || '').trim();
                if (!candidate) continue;
                if (/\.apps\.googleusercontent\.com$/i.test(candidate)) return candidate;
            }
            return '';
        }

        function hasGoogleOneTapRuntime() {
            try {
                return !!(
                    window.google &&
                    google.accounts &&
                    google.accounts.id &&
                    typeof google.accounts.id.initialize === 'function' &&
                    typeof google.accounts.id.prompt === 'function'
                );
            } catch {
                return false;
            }
        }

        function clearReviewOneTapPendingTimer() {
            if (reviewOneTapPendingTimer) {
                clearTimeout(reviewOneTapPendingTimer);
                reviewOneTapPendingTimer = null;
            }
        }

        function resolveReviewOneTapPending(result) {
            const resolver = reviewOneTapPendingResolve;
            reviewOneTapPendingResolve = null;
            clearReviewOneTapPendingTimer();
            reviewOneTapPendingPromise = null;
            if (resolver) resolver(result);
        }

        async function signInReviewIdentityWithGoogleIdToken(idToken) {
            const token = String(idToken || '').trim();
            if (!token) return { ...emptyReviewIdentityState, code: 'one-tap-token-missing' };
            const tokenIdentity = mapGoogleIdTokenToReviewIdentity(token);
            const auth = ensureFirebaseAuthService();
            if (!auth) {
                if (hasVerifiedReviewIdentity(tokenIdentity)) {
                    cacheReviewIdentity(tokenIdentity.email, tokenIdentity.displayName, tokenIdentity.photoURL, tokenIdentity);
                    return { ...tokenIdentity, code: '' };
                }
                return { ...emptyReviewIdentityState, code: 'auth-unavailable' };
            }
            try {
                if (!(window.firebase && firebase.auth && firebase.auth.GoogleAuthProvider && typeof firebase.auth.GoogleAuthProvider.credential === 'function')) {
                    if (hasVerifiedReviewIdentity(tokenIdentity)) {
                        cacheReviewIdentity(tokenIdentity.email, tokenIdentity.displayName, tokenIdentity.photoURL, tokenIdentity);
                        return { ...tokenIdentity, code: '' };
                    }
                    return { ...emptyReviewIdentityState, code: 'google-provider-unavailable' };
                }
                const credential = firebase.auth.GoogleAuthProvider.credential(token);
                const result = await auth.signInWithCredential(credential);
                const user = (result && result.user) || auth.currentUser || null;
                const identity = mapFirebaseUserToReviewIdentity(user);
                if (!hasVerifiedReviewIdentity(identity)) return { ...emptyReviewIdentityState, code: 'google-email-missing' };
                firebaseAuthUser = user || firebaseAuthUser;
                cacheReviewIdentity(identity.email, identity.displayName, identity.photoURL, identity);
                return { ...identity, code: '' };
            } catch (error) {
                const code = String(error && (error.code || error.message) ? (error.code || error.message) : '').toLowerCase();
                if (hasVerifiedReviewIdentity(tokenIdentity)) {
                    cacheReviewIdentity(tokenIdentity.email, tokenIdentity.displayName, tokenIdentity.photoURL, tokenIdentity);
                    return { ...tokenIdentity, code: '' };
                }
                return { ...emptyReviewIdentityState, code };
            }
        }

        async function handleReviewOneTapCredentialResponse(response) {
            const token = String(response && response.credential ? response.credential : '').trim();
            if (!token) {
                resolveReviewOneTapPending({ ...emptyReviewIdentityState, code: 'one-tap-token-missing' });
                return;
            }
            const result = await signInReviewIdentityWithGoogleIdToken(token);
            resolveReviewOneTapPending(result);
        }

        function ensureReviewOneTapInitialized() {
            if (reviewOneTapInitialized) return true;
            if (!hasGoogleOneTapRuntime()) return false;
            const clientId = getGoogleOneTapClientId();
            if (!clientId) return false;
            try {
                google.accounts.id.initialize({
                    client_id: clientId,
                    callback: (response) => {
                        handleReviewOneTapCredentialResponse(response).catch(() => {
                            resolveReviewOneTapPending({ ...emptyReviewIdentityState, code: 'one-tap-callback-error' });
                        });
                    },
                    auto_select: true,
                    use_fedcm_for_prompt: true,
                    itp_support: true,
                    cancel_on_tap_outside: false
                });
                reviewOneTapInitialized = true;
                return true;
            } catch {
                return false;
            }
        }

        async function runReviewOneTapPrompt(reasonCode = '') {
            if (!ensureReviewOneTapInitialized()) {
                const clientId = getGoogleOneTapClientId();
                if (!clientId) return { ...emptyReviewIdentityState, code: 'one-tap-client-id-missing' };
                if (!hasGoogleOneTapRuntime()) return { ...emptyReviewIdentityState, code: 'one-tap-runtime-unavailable' };
                return { ...emptyReviewIdentityState, code: 'one-tap-init-failed' };
            }
            if (reviewOneTapPendingPromise) return reviewOneTapPendingPromise;

            reviewOneTapPendingPromise = new Promise((resolve) => {
                reviewOneTapPendingResolve = resolve;
                clearReviewOneTapPendingTimer();
                reviewOneTapPendingTimer = setTimeout(() => {
                    resolveReviewOneTapPending({ ...emptyReviewIdentityState, code: 'one-tap-timeout' });
                }, 12000);

                try {
                    google.accounts.id.prompt((notification) => {
                        let code = '';
                        try {
                            if (notification && typeof notification.isNotDisplayed === 'function' && notification.isNotDisplayed()) {
                                const reason = typeof notification.getNotDisplayedReason === 'function' ? String(notification.getNotDisplayedReason() || '').trim() : '';
                                code = reason ? `one-tap-not-displayed:${reason}` : 'one-tap-not-displayed';
                            } else if (notification && typeof notification.isSkippedMoment === 'function' && notification.isSkippedMoment()) {
                                const reason = typeof notification.getSkippedReason === 'function' ? String(notification.getSkippedReason() || '').trim() : '';
                                code = reason ? `one-tap-skipped:${reason}` : 'one-tap-skipped';
                            } else if (notification && typeof notification.isDismissedMoment === 'function' && notification.isDismissedMoment()) {
                                const reason = typeof notification.getDismissedReason === 'function' ? String(notification.getDismissedReason() || '').trim() : '';
                                if (reason && reason.toLowerCase() === 'credential_returned') {
                                    return;
                                }
                                code = reason ? `one-tap-dismissed:${reason}` : 'one-tap-dismissed';
                            }
                        } catch {}
                        if (code) {
                            resolveReviewOneTapPending({ ...emptyReviewIdentityState, code: code.toLowerCase() });
                        }
                    });
                } catch (error) {
                    const code = String(error && (error.code || error.message) ? (error.code || error.message) : reasonCode || 'one-tap-prompt-error').toLowerCase();
                    resolveReviewOneTapPending({ ...emptyReviewIdentityState, code });
                }
            });

            return reviewOneTapPendingPromise;
        }

        function bootstrapSilentReviewIdentity() {
            if (reviewOneTapBootstrapAttempted) return;
            reviewOneTapBootstrapAttempted = true;
            const current = resolveCurrentReviewIdentity();
            if (hasVerifiedReviewIdentity(current)) {
                cacheReviewIdentity(current.email, current.displayName, current.photoURL, current);
            }
        }

        function startReviewIdentityAuthSync() {
            const auth = ensureFirebaseAuthService();
            if (!auth || typeof auth.onAuthStateChanged !== 'function') {
                stopReviewIdentityAuthSync();
                setCurrentUserProfileFromIdentity(emptyReviewIdentityState);
                return false;
            }
            const immediateIdentity = mapFirebaseUserToReviewIdentity(auth.currentUser || firebaseAuthUser || null);
            setCurrentUserProfileFromIdentity(immediateIdentity);
            if (hasVerifiedReviewIdentity(immediateIdentity)) {
                const hydrated = cacheReviewIdentity(immediateIdentity.email, immediateIdentity.displayName, immediateIdentity.photoURL, immediateIdentity);
                try { applyReviewIdentityToForm(hydrated, { preserveIfFilled: false }); } catch {}
            }
            if (reviewIdentityAuthUnsubscribe) {
                bootstrapSilentReviewIdentity();
                return true;
            }

            reviewIdentityAuthUnsubscribe = auth.onAuthStateChanged((user) => {
                setCurrentUserProfileFromFirebaseUser(user || null);
                const identity = mapFirebaseUserToReviewIdentity(user);
                if (hasVerifiedReviewIdentity(identity)) {
                    const hydrated = cacheReviewIdentity(identity.email, identity.displayName, identity.photoURL, identity);
                    applyReviewIdentityToForm(hydrated, { preserveIfFilled: false });
                    clearReviewIdentityFailureState();
                    clearReviewFormNotice();
                    return;
                }
                clearCachedReviewIdentity();
                syncReviewSubmitButtons(emptyReviewIdentityState);
                if (reviewModal && reviewModal.classList.contains('active')) {
                    const resolved = resolveCurrentReviewIdentity();
                    if (!hasVerifiedReviewIdentity(resolved)) {
                        applyReviewIdentityToForm(emptyReviewIdentityState, { preserveIfFilled: false });
                    }
                }
            }, () => {
                setCurrentUserProfileFromIdentity(emptyReviewIdentityState);
            });
            bootstrapSilentReviewIdentity();
            return true;
        }

        function stopReviewIdentityAuthSync() {
            if (reviewIdentityAuthUnsubscribe) {
                try { reviewIdentityAuthUnsubscribe(); } catch {}
            }
            reviewIdentityAuthUnsubscribe = null;
            reviewOneTapBootstrapAttempted = false;
            reviewOneTapInitialized = false;
            setCurrentUserProfileFromIdentity(emptyReviewIdentityState);
            if (reviewOneTapPendingResolve) {
                resolveReviewOneTapPending({ ...emptyReviewIdentityState, code: 'one-tap-cancelled' });
            } else {
                clearReviewOneTapPendingTimer();
                reviewOneTapPendingPromise = null;
            }
        }

        function stopFirestoreReviewListeners() {
            if (firestorePendingReviewsUnsubscribe) {
                try { firestorePendingReviewsUnsubscribe(); } catch {}
            }
            if (firestorePublishedReviewsUnsubscribe) {
                try { firestorePublishedReviewsUnsubscribe(); } catch {}
            }
            firestorePendingReviewsUnsubscribe = null;
            firestorePublishedReviewsUnsubscribe = null;
            firestorePendingReviewsState = [];
            firestorePublishedReviewsState = [];
        }

        function stopFirestorePendingReviewsSync() {
            if (firestorePendingReviewsUnsubscribe) {
                try { firestorePendingReviewsUnsubscribe(); } catch {}
            }
            firestorePendingReviewsUnsubscribe = null;
            firestorePendingReviewsState = [];
        }

        function reportFirestoreReviewReadError(error, collectionName = defaultFirestoreReviewsCollection) {
            const code = String(error && error.code ? error.code : '').trim().toLowerCase();
            const rawMessage = String(error && error.message ? error.message : '').trim();
            const message = rawMessage.toLowerCase();
            const isPermissionDenied = code.includes('permission') || code.includes('denied') || message.includes('permission denied');
            if (!isPermissionDenied) return;
            const isProjectPermissionIssue = message.includes('resource project');
            if (isProjectPermissionIssue) {
                console.error(
                    `[HAILIFU] Firestore project-level permission denied (${rawMessage}). ` +
                    'Verify that API key/appId/senderId all belong to the same Firebase project, ' +
                    'Cloud Firestore API is enabled, and the project is active in Google Cloud.'
                );
                return;
            }
            console.error(
                `[HAILIFU] Firestore read permission denied on "${collectionName}". Apply rules:\n` +
                "rules_version = '2';\n" +
                'service cloud.firestore {\n' +
                '  match /databases/{database}/documents {\n' +
                '    match /reviews/{reviewId} {\n' +
                '      allow read: if true;\n' +
                '      allow write: if request.auth != null;\n' +
                '    }\n' +
                '  }\n' +
                '}'
            );
        }

        function startFirestorePendingReviewsSync() {
            const firestore = ensureFirebaseFirestoreService();
            if (!firestore || !canAccessReviewModeration()) {
                stopFirestorePendingReviewsSync();
                return false;
            }

            if (firestorePendingReviewsUnsubscribe) {
                try { firestorePendingReviewsUnsubscribe(); } catch {}
                firestorePendingReviewsUnsubscribe = null;
            }

            const collectionName = getFirestoreReviewsCollection();
            firestorePendingReviewsUnsubscribe = firestore
                .collection(collectionName)
                .where('status', '==', 'pending')
                .onSnapshot((snapshot) => {
                    const normalized = normalizeFirestoreReviewSnapshot(snapshot)
                        .filter((review) => review.status === 'pending');
                    firestorePendingReviewsState = normalized;
                    renderAdminReviews();
                    refreshOverview();
                }, (error) => {
                    reportFirestoreReviewReadError(error, collectionName);
                    firestorePendingReviewsState = [];
                    renderAdminReviews();
                    refreshOverview();
                });
            return true;
        }

        function startFirestorePublishedReviewsSync() {
            const firestore = ensureFirebaseFirestoreService();
            if (!firestore) {
                if (firestorePublishedReviewsUnsubscribe) {
                    try { firestorePublishedReviewsUnsubscribe(); } catch {}
                    firestorePublishedReviewsUnsubscribe = null;
                }
                firestorePublishedReviewsState = [];
                return false;
            }

            if (firestorePublishedReviewsUnsubscribe) return true;

            const collectionName = getFirestoreReviewsCollection();
            firestorePublishedReviewsUnsubscribe = firestore
                .collection(collectionName)
                .onSnapshot((snapshot) => {
                    const normalized = normalizeFirestoreReviewSnapshot(snapshot, { defaultStatusWhenMissing: 'published' })
                        .filter((review) => {
                            const status = String(review.status || '').trim().toLowerCase();
                            if (status === 'pending') return false;
                            const comment = String(
                                review.comment ||
                                review.reviewText ||
                                review.review_text ||
                                review.text ||
                                review.message ||
                                review.content ||
                                ''
                            ).trim();
                            return !!comment;
                        });
                    firestorePublishedReviewsState = normalized;
                    renderAdminReviews();
                    renderPublicReviews();
                    refreshLiveReviewSection();
                }, (error) => {
                    reportFirestoreReviewReadError(error, collectionName);
                    firestorePublishedReviewsState = [];
                    renderAdminReviews();
                    renderPublicReviews();
                    refreshLiveReviewSection();
                });
            return true;
        }

        function startFirestoreReviewAuthSync() {
            const auth = ensureFirebaseAuthService();
            const firestore = ensureFirebaseFirestoreService();

            if (!auth || !firestore) {
                stopFirestoreReviewListeners();
                if (firebaseAuthObserverUnsubscribe) {
                    try { firebaseAuthObserverUnsubscribe(); } catch {}
                    firebaseAuthObserverUnsubscribe = null;
                }
                firebaseAuthUser = null;
                syncReviewAuthUiState();
                return false;
            }

            startFirestorePublishedReviewsSync();

            if (firebaseAuthObserverUnsubscribe) {
                if (canAccessReviewModeration()) startFirestorePendingReviewsSync();
                else stopFirestorePendingReviewsSync();
                syncReviewAuthUiState();
                return true;
            }

            firebaseAuthObserverUnsubscribe = auth.onAuthStateChanged((user) => {
                firebaseAuthUser = user || null;
                setCurrentUserProfileFromFirebaseUser(firebaseAuthUser);
                if (firebaseAuthUser && firebaseAuthUser.email) {
                    const authIdentity = mapFirebaseUserToReviewIdentity(firebaseAuthUser);
                    if (hasVerifiedReviewIdentity(authIdentity)) {
                        cacheReviewIdentity(authIdentity.email, authIdentity.displayName, authIdentity.photoURL, authIdentity);
                    }
                }
                if (canAccessReviewModeration()) startFirestorePendingReviewsSync();
                else stopFirestorePendingReviewsSync();

                startFirestorePublishedReviewsSync();
                syncReviewAuthUiState();
                renderAdminReviews();
                renderPublicReviews();
                refreshOverview();
                refreshLiveReviewSection();
            });

            syncReviewAuthUiState();
            return true;
        }

        function stopFirestoreReviewAuthSync() {
            if (firebaseAuthObserverUnsubscribe) {
                try { firebaseAuthObserverUnsubscribe(); } catch {}
            }
            firebaseAuthObserverUnsubscribe = null;
            stopFirestoreReviewListeners();
            firebaseAuthUser = null;
            syncReviewAuthUiState();
        }

        function buildReviewIdentityDocumentFields(identityInput = {}, recordInput = {}) {
            const record = recordInput && typeof recordInput === 'object' ? recordInput : {};
            const identity = normalizeReviewIdentity({
                ...(record.reviewerIdentity && typeof record.reviewerIdentity === 'object' ? record.reviewerIdentity : {}),
                ...record,
                ...(identityInput && typeof identityInput === 'object' ? identityInput : {})
            });
            const email = toSafeEmailAddress(identity.email || record.reviewEmail || record.email || record.reviewerEmail);
            const displayName = String(identity.displayName || record.reviewerDisplayName || record.displayName || record.name || deriveNameFromEmail(email) || 'Client').trim() || 'Client';
            const photoURL = normalizeReviewPhotoUrl(identity.photoURL || record.reviewerPhotoURL || record.authorImage || '');
            const providerId = String(identity.providerId || record.identityProvider || '').trim().toLowerCase();
            const uid = String(identity.uid || record.identityUid || record.reviewerUid || '').trim();
            const verified = Boolean(identity.verified || (email && providerId === 'google.com'));

            return {
                name: displayName,
                email,
                reviewEmail: email,
                authorImage: photoURL || '',
                reviewerDisplayName: displayName,
                reviewerEmail: email,
                reviewerPhotoURL: photoURL || '',
                identityProvider: providerId || '',
                identityUid: uid,
                identityVerified: verified,
                reviewerIdentity: {
                    displayName,
                    email,
                    photoURL: photoURL || '',
                    provider: providerId || '',
                    uid,
                    verified,
                    source: verified ? 'google-oauth' : 'manual-fallback'
                }
            };
        }

        function upsertReviewInFirestore(review) {
            const firestore = ensureFirebaseFirestoreService();
            if (!firestore) return Promise.reject(new Error('Firestore not configured'));
            const { normalized } = normalizeReviewRecords([review]);
            const record = normalized[0];
            const id = String(record?.id || '').trim();
            if (!id) return Promise.reject(new Error('Missing review id'));
            const now = getFirestoreTimestampValue();
            const identityFields = buildReviewIdentityDocumentFields(record, record);
            const payload = {
                ...record,
                ...identityFields,
                updatedAt: now
            };
            if (payload.status === 'published' && !payload.publishedAt) {
                payload.publishedAt = now;
            }
            return firestore.collection(getFirestoreReviewsCollection()).doc(id).set(payload, { merge: true });
        }

        function updateReviewStatusInFirestore(reviewId, status) {
            const firestore = ensureFirebaseFirestoreService();
            if (!firestore) return Promise.reject(new Error('Firestore not configured'));
            const id = String(reviewId || '').trim();
            if (!id) return Promise.reject(new Error('Missing review id'));
            const nextStatus = normalizeReviewStatus(status);
            const now = getFirestoreTimestampValue();
            const payload = {
                status: nextStatus,
                updatedAt: now
            };
            if (nextStatus === 'published') payload.publishedAt = now;
            return firestore.collection(getFirestoreReviewsCollection()).doc(id).set(payload, { merge: true });
        }

        function removeReviewInFirestore(reviewId) {
            const firestore = ensureFirebaseFirestoreService();
            if (!firestore) return Promise.reject(new Error('Firestore not configured'));
            const id = String(reviewId || '').trim();
            if (!id) return Promise.resolve();
            return firestore.collection(getFirestoreReviewsCollection()).doc(id).delete();
        }

        function upsertReviewInFirebase(review) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const { normalized } = normalizeReviewRecords([review]);
            const record = normalized[0];
            const id = String(record?.id || '').trim();
            if (!id) return Promise.reject(new Error('Missing review id'));
            const path = getFirebaseReviewsPath();
            const identityFields = buildReviewIdentityDocumentFields(record, record);
            const payload = {
                ...record,
                ...identityFields
            };
            return db.ref(`${path}/${id}`).set(payload);
        }

        function removeReviewInFirebase(reviewId) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const id = String(reviewId || '').trim();
            if (!id) return Promise.resolve();
            const path = getFirebaseReviewsPath();
            return db.ref(`${path}/${id}`).remove();
        }

        function setFirebaseHeroVideoUrl(url) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = getFirebaseSettingsPath();
            const next = String(url || '').trim();
            return db.ref(`${path}/heroVideoUrl`).set(next);
        }

        function setFirebaseIntegrityImageUrl(url) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = getFirebaseSettingsPath();
            const next = String(url || '').trim();
            return db.ref(`${path}/integrityImageUrl`).set(next);
        }

        function normalizeIntegrityMediaPath(rawPath) {
            let raw = String(rawPath || '').trim();
            if (!raw) return '';
            raw = raw.replace(/\\/g, '/');
            raw = raw.replace(/^\.?\/*/, '');
            raw = raw.replace(/^public\//i, '');
            return normalizeProjectMediaPath(raw);
        }

        function getIntegrityImageUrl() {
            const stored = String(localStorage.getItem(integrityImageStorageKey) || '').trim();
            const normalizedStored = normalizeIntegrityMediaPath(stored);
            if (normalizedStored) return normalizedStored;
            return normalizeIntegrityMediaPath(defaultIntegrityMediaUrl);
        }

        function setIntegrityImageUrlLocal(url) {
            const next = String(url || '').trim();
            if (next) localStorage.setItem(integrityImageStorageKey, next);
            else try { localStorage.removeItem(integrityImageStorageKey); } catch {}
        }

        function isIntegrityVideoUrl(url) {
            const raw = String(url || '').trim().toLowerCase();
            if (!raw) return false;
            if (raw.includes('/video/upload/')) return true;
            return /\.(mp4|webm|mov|m4v|ogg|ogv)(\?|#|$)/i.test(raw);
        }

        function loadIntegrityImage(url) {
            const panel = document.getElementById('integrityPanel');
            const container = document.getElementById('integrityContainer');
            const img = document.getElementById('integrityImage');
            const video = document.getElementById('integrityVideo');
            if (!container || !img || !video) return;
            const raw = normalizeIntegrityMediaPath(url);
            const fallbackUrl = normalizeIntegrityMediaPath(defaultIntegrityMediaUrl);
            const clearIntegrityMedia = () => {
                img.removeAttribute('src');
                video.removeAttribute('src');
                try { video.load(); } catch {}
                img.style.display = 'none';
                video.style.display = 'none';
                if (panel) panel.classList.remove('is-loading');
                if (container) container.classList.add('integrity-empty');
            };
            const applyIntegrityFallback = () => {
                if (!fallbackUrl || raw === fallbackUrl) {
                    clearIntegrityMedia();
                    return;
                }
                setIntegrityImageUrlLocal(fallbackUrl);
                loadIntegrityImage(fallbackUrl);
                if (firebaseIsReady()) {
                    setFirebaseIntegrityImageUrl(fallbackUrl).catch(() => {});
                }
            };
            if (!raw) {
                applyIntegrityFallback();
                return;
            }
            if (container) container.classList.remove('integrity-empty');
            if (panel) panel.classList.add('is-loading');
            img.style.display = 'none';
            video.style.display = 'none';

            if (isIntegrityVideoUrl(raw)) {
                img.removeAttribute('src');
                video.onloadeddata = function() {
                    video.style.display = 'block';
                    if (panel) panel.classList.remove('is-loading');
                    const playPromise = video.play();
                    if (playPromise && typeof playPromise.catch === 'function') {
                        playPromise.catch(() => {});
                    }
                };
                video.onerror = function() {
                    applyIntegrityFallback();
                };
                video.src = raw;
                try { video.load(); } catch {}
                return;
            }

            video.removeAttribute('src');
            try { video.load(); } catch {}
            img.onload = function() {
                img.style.display = 'block';
                if (panel) panel.classList.remove('is-loading');
            };
            img.onerror = function() {
                applyIntegrityFallback();
            };
            img.src = raw;
        }

        function setIntegrityDefaults() {
            const setValue = (id, value) => {
                const node = document.getElementById(id);
                if (!node) return;
                const current = String(node.textContent || '').trim();
                if (!current || /not\s*found/i.test(current)) {
                    node.textContent = value;
                }
            };
            setValue('integrityStatus', 'Included');
        }

        function upsertProjectInFirebase(project) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = getFirebaseProjectsPath();
            const id = String(project?.id || '').trim();
            if (!id) return Promise.reject(new Error('Missing project id'));
            return db.ref(`${path}/${id}`).set(stripProjectQuoteFields(project));
        }

        function addProjectInFirebase(project) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = getFirebaseProjectsPath();
            const listRef = db.ref(path);
            const newRef = listRef.push();
            const key = String(newRef?.key || '').trim();
            if (!key) return Promise.reject(new Error('Failed to create project id'));
            const title = String(project?.title || '').trim();
            const imageUrl = String(project?.mediaSrc || project?.imageUrl || '').trim();
            const visibility = normalizeVisibilityFlags(project);
            const record = stripProjectQuoteFields({
                title,
                imageUrl,
                timestamp: Date.now(),
                ...(project && typeof project === 'object' ? project : {}),
                ...visibility,
                id: key
            });
            return newRef.set(record);
        }

        function removeProjectInFirebase(projectId) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = getFirebaseProjectsPath();
            const id = String(projectId || '').trim();
            if (!id) return Promise.resolve();
            return db.ref(`${path}/${id}`).remove();
        }

        function ensureSupabaseClient() {
            if (supabaseClient) return supabaseClient;
            if (typeof window.supabase === 'undefined') {
                console.warn('[HAILIFU] Supabase client not loaded');
                return null;
            }
            const supabaseUrl = window.SUPABASE_URL || '';
            const supabaseKey = window.SUPABASE_ANON_KEY || '';
            if (!supabaseUrl || !supabaseKey) {
                console.warn('[HAILIFU] Supabase credentials not configured');
                return null;
            }
            try {
                supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
                return supabaseClient;
            } catch (error) {
                console.error('[HAILIFU] Failed to initialize Supabase client:', error);
                return null;
            }
        }

        // Rows are stored as { id, data (jsonb), updated_at } so new form fields never break the table.
        function toRemoteRow(record) {
            return { id: String(record?.id || ''), data: record, updated_at: new Date().toISOString() };
        }
        function fromRemoteRow(row) {
            if (row && row.data && typeof row.data === 'object') return { ...row.data, id: row.id };
            return row;
        }
        async function hasAdminAuthSession() {
            const supabase = ensureSupabaseClient();
            if (!supabase || !supabase.auth) return false;
            try {
                const { data } = await supabase.auth.getSession();
                return !!data?.session;
            } catch {
                return false;
            }
        }

        // THE NEW, OPEN CIRCUIT
        // Returns { ok, removed, message }. `.select()` returns the deleted rows, so we can tell a
        // real delete from one that row-level security silently refused (no error, 0 rows).
        async function deleteProjectInSupabase(id) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, removed: 0, message: 'Storage is offline.' };
            try {
                const { data, error } = await withTimeout(
                    supabase.from('installations').delete().eq('id', String(id)).select('id'),
                    10000,
                    'Deleting project'
                );
                if (error) throw error;
                const removed = Array.isArray(data) ? data.length : 0;
                if (!removed && Array.isArray(adminState?.data?.projects) && adminState.data.projects.some((p) => String(p?.id || '') === String(id))) {
                    return { ok: false, removed: 0, message: 'Not allowed. Sign in again as admin.' };
                }
                return { ok: true, removed };
            } catch (err) {
                const msg = String(err?.message || err);
                return { ok: false, removed: 0, message: /row-level security|not allowed|401|403/i.test(msg) ? 'Not allowed. Sign in again as admin.' : msg };
            }
        }

        function getRemoteConfigUrl() {
            const explicitUrl = String(readJsonStorage(remoteConfigUrlStorageKey, '') || '').trim();
            if (explicitUrl && /^https?:\/\//i.test(explicitUrl)) return explicitUrl;
            const publicIdRaw = String(readJsonStorage(remoteConfigPublicIdStorageKey, '') || '').trim();
            if (!publicIdRaw) return '';
            const publicId = publicIdRaw.endsWith('.json') ? publicIdRaw : `${publicIdRaw}.json`;
            return `https://res.cloudinary.com/${cloudinaryCloudName}/raw/upload/${publicId}`;
        }

        function setRemoteConfigUrl(url) {
            const next = String(url || '').trim();
            writeJsonStorage(remoteConfigUrlStorageKey, next);
            remoteConfigDisabledForSession = false;
        }

        function setRemoteConfigPublicId(publicId) {
            const next = String(publicId || '').trim();
            writeJsonStorage(remoteConfigPublicIdStorageKey, next);
            remoteConfigDisabledForSession = false;
        }

        async function fetchRemoteConfigOnce() {
            if (remoteConfigDisabledForSession) return null;
            const baseUrl = getRemoteConfigUrl();
            if (!baseUrl) return null;
            const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) {
                const error = new Error(`Failed to load remote config (${res.status})`);
                try {
                    error.code = res.status === 404 ? 'remote-config-not-found' : `remote-config-http-${res.status}`;
                    error.status = res.status;
                } catch {}
                throw error;
            }
            const json = await res.json();
            if (!json || typeof json !== 'object') return null;
            return json;
        }

        function computeConfigFingerprint(config) {
            try {
                const updatedAt = String(config?.updatedAt || '').trim();
                if (updatedAt) return updatedAt;
            } catch {}
            try {
                return JSON.stringify(config || {});
            } catch {
                return '';
            }
        }

        async function syncFromRemoteConfig(opts = {}) {
            const { forceRender = false } = opts;
            try {
                const cfg = await fetchRemoteConfigOnce();
                if (!cfg) return;
                const fp = computeConfigFingerprint(cfg);
                const changed = fp && fp !== remoteConfigFingerprint;
                if (!changed && !forceRender) return;
                remoteConfigState = cfg;
                remoteConfigFingerprint = fp;
                remoteConfigDisabledForSession = false;
                const heroUrl = String(remoteConfigState?.heroVideoUrl || '').trim();
                if (heroUrl) initHeroVideo(heroUrl);
                try {
                    const projects = Array.isArray(remoteConfigState?.projects) ? remoteConfigState.projects : null;
                    if (projects) {
                        mergeRemoteProjectsIntoStorage(projects);
                    }
                } catch {}

                try {
                    loadProjects();
                    renderAdminLazyLoop();
                } catch {}
            } catch (error) {
                const errorCode = String(error && error.code ? error.code : '').trim().toLowerCase();
                if (errorCode === 'remote-config-not-found') {
                    const explicitUrl = String(readJsonStorage(remoteConfigUrlStorageKey, '') || '').trim();
                    const storedPublicId = String(readJsonStorage(remoteConfigPublicIdStorageKey, '') || '').trim();
                    if (!explicitUrl && storedPublicId === defaultRemoteConfigPublicId) {
                        setRemoteConfigPublicId('');
                    }
                    remoteConfigDisabledForSession = true;
                    stopRemoteConfigPolling();
                }
            }
        }

        function startRemoteConfigPolling() {
            if (remoteConfigPollTimer || remoteConfigDisabledForSession) return;
            if (!getRemoteConfigUrl()) return;
            remoteConfigPollTimer = window.setInterval(() => {
                syncFromRemoteConfig();
            }, 15000);
        }

        function stopRemoteConfigPolling() {
            if (!remoteConfigPollTimer) return;
            clearInterval(remoteConfigPollTimer);
            remoteConfigPollTimer = null;
        }

        function startServerlessProjectsSync() {
            startReviewIdentityAuthSync();
            try { ensureFirebaseStorageService(); } catch {}
            if (startFirebaseProjectsSync()) {
                startFirebaseSettingsSync();
                startFirebaseMediaLibrarySync();
                startFirebaseSectionMediaSync();
                if (startFirestoreReviewAuthSync()) {
                    stopFirebaseReviewsSync();
                } else {
                    startFirebaseReviewsSync();
                }
                stopRemoteConfigPolling();
                return true;
            }
            stopFirebaseSettingsSync();
            stopFirebaseMediaLibrarySync();
            stopFirebaseSectionMediaSync();
            stopFirebaseReviewsSync();
            stopFirestoreReviewAuthSync();
            syncFromRemoteConfig();
            startRemoteConfigPolling();
            renderMediaLibraryAndSections();
            return false;
        }

        function getCloudinaryPresetValue() {
            const inputRaw = String(cloudinaryPresetInput?.value || '');
            const fromInput = inputRaw.trim();
            if (fromInput) return fromInput;
            const storedRaw = String(readJsonStorage(cloudinaryPresetStorageKey, '') || '');
            const stored = storedRaw.trim();
            if (stored) return stored;
            return String(defaultCloudinaryUnsignedPreset || '').trim();
        }

        function persistCloudinaryPreset() {
            const preset = String(cloudinaryPresetInput?.value || '').trim();
            if (!preset) return;
            writeJsonStorage(cloudinaryPresetStorageKey, preset);
        }

        function setUploadUiState(state) {
            const active = !!state?.active;
            const pct = Math.max(0, Math.min(100, Number(state?.pct) || 0));
            const text = String(state?.text || '').trim();
            if (uploadProgress) {
                uploadProgress.classList.toggle('is-active', active);
                uploadProgress.setAttribute('aria-hidden', String(!active));
            }
            if (uploadProgressFill) uploadProgressFill.style.width = `${pct}%`;
            if (uploadProgressText) uploadProgressText.textContent = text || (active ? 'Uploading...' : '');
            if (uploadBtn) uploadBtn.disabled = active;
            if (addGalleryItemBtn) addGalleryItemBtn.disabled = active;
            if (clearGalleryBtn) clearGalleryBtn.disabled = active;
        }

        function cloudinaryUnsignedUpload(file, opts = {}) {
            const preset = String(opts.preset || '').trim();
            const resourceType = String(opts.resourceType || 'auto').trim();
            const onProgress = typeof opts.onProgress === 'function' ? opts.onProgress : null;
            const folder = String(opts.folder || '').trim();
            const publicId = String(opts.publicId || '').trim();
            console.log('Using Preset:', preset);

            return new Promise((resolve, reject) => {
                if (!preset) {
                    reject(new Error('Missing upload preset'));
                    return;
                }
                if (!file) {
                    reject(new Error('Missing file'));
                    return;
                }

                const xhr = new XMLHttpRequest();
                const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/${resourceType}/upload`;
                xhr.open('POST', uploadUrl);
                xhr.responseType = 'json';

                if (xhr.upload && onProgress) {
                    xhr.upload.onprogress = (e) => {
                        if (!e || !e.lengthComputable) return;
                        const pct = Math.round((e.loaded / e.total) * 100);
                        try { onProgress(pct); } catch {}
                    };
                }

                xhr.onerror = () => reject(new Error('Upload failed'));
                xhr.onload = () => {
                    const payload = xhr.response || null;
                    const ok = xhr.status >= 200 && xhr.status < 300 && payload && payload.secure_url;
                    if (ok) resolve(payload);
                    else {
                        const msg = payload?.error?.message || 'Upload failed';
                        reject(new Error(msg));
                    }
                };

                const fd = new FormData();
                fd.append('upload_preset', preset);
                fd.append('unsigned', 'true');
                fd.append('file', file);
                if (folder) fd.append('folder', folder);
                if (publicId) fd.append('public_id', publicId);
                xhr.send(fd);
            });
        }

        async function uploadRemoteConfig(config, preset) {
            const publicIdRaw = String(remoteConfigPublicIdInput?.value || '').trim() || String(readJsonStorage(remoteConfigPublicIdStorageKey, '') || '').trim() || defaultRemoteConfigPublicId;
            const publicId = publicIdRaw.endsWith('.json') ? publicIdRaw : `${publicIdRaw}.json`;
            const explicitUrl = String(remoteConfigUrlInput?.value || '').trim();
            if (publicIdRaw) setRemoteConfigPublicId(publicIdRaw);

            if (explicitUrl) setRemoteConfigUrl(explicitUrl);
            else setRemoteConfigUrl('');

            const jsonText = JSON.stringify(config || {});
            const blob = new Blob([jsonText], { type: 'application/json' });

            return cloudinaryUnsignedUpload(blob, {
                preset,
                resourceType: 'raw',
                publicId,
                onProgress: (pct) => setUploadUiState({ active: true, pct, text: 'Saving...' })
            });
        }

        function getServiceInterest() {
            const raw = readJsonStorage('hailifu_service_interest', null);
            const base = {
                cctv: 0,
                electrical: 0,
                airconditioning: 0,
                gates: 0,
                fencing: 0,
                smarthome: 0,
                blindcurtain: 0
            };

            if (!raw || typeof raw !== 'object') return base;

            return {
                ...base,
                cctv: Number(raw.cctv) || 0,
                electrical: Number(raw.electrical) || 0,
                airconditioning: Number(raw.airconditioning) || 0,
                gates: Number(raw.gates) || 0,
                fencing: Number(raw.fencing) || 0,
                smarthome: Number(raw.smarthome) || 0,
                blindcurtain: Number(raw.blindcurtain) || 0
            };
        }

        function saveServiceInterest(data) {
            writeJsonStorage('hailifu_service_interest', data);
        }

        function bumpServiceInterest(serviceKey) {
            if (!serviceKey) return;
            const interest = getServiceInterest();
            if (typeof interest[serviceKey] !== 'number') return;
            interest[serviceKey] += 1;
            saveServiceInterest(interest);
            refreshOverview();
        }

        function getYoutubeVideoId(urlString) {
            try {
                const url = new URL(String(urlString || '').trim());
                const host = url.hostname.replace(/^www\./, '').toLowerCase();

                if (host === 'youtu.be') {
                    const id = url.pathname.replace(/^\//, '').trim();
                    return id || null;
                }

                if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com' || host === 'www.youtube-nocookie.com') {
                    if (url.pathname.startsWith('/shorts/')) {
                        const id = url.pathname.split('/shorts/')[1]?.split('/')[0]?.trim();
                        return id || null;
                    }

                    if (url.pathname === '/watch') {
                        const id = url.searchParams.get('v');
                        return id ? id.trim() : null;
                    }

                    if (url.pathname.startsWith('/embed/')) {
                        const id = url.pathname.split('/embed/')[1]?.split('/')[0]?.trim();
                        return id || null;
                    }
                }
            } catch {}

            return null;
        }

        function getYoutubeEmbedUrl(videoId) {
            const id = String(videoId || '').trim();
            if (!id) return '';
            const params = new URLSearchParams({
                rel: '0',
                modestbranding: '1',
                playsinline: '1'
            });
            try {
                if (window.location && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
                    params.set('origin', window.location.origin);
                }
            } catch {}
            return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
        }

        function getYoutubeWatchUrl(videoId) {
            const id = String(videoId || '').trim();
            if (!id) return '';
            return `https://www.youtube.com/watch?v=${id}`;
        }

        function canEmbedYoutube() {
            try {
                return window.location && (window.location.protocol === 'http:' || window.location.protocol === 'https:');
            } catch {
                return false;
            }
        }

        function getYoutubeThumbUrl(videoId) {
            const id = String(videoId || '').trim();
            if (!id) return '';
            return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        }

        function normalizeCloudinaryUrl(urlString) {
            const raw = String(urlString || '').trim();
            if (!raw) return raw;
            if (!/^https?:\/\//i.test(raw)) return raw;
            if (!/res\.cloudinary\.com/i.test(raw)) return raw;
            const isVideoUploadUrl = /\/video\/upload\//i.test(raw);

            const uploadToken = '/upload/';
            const uploadIndex = raw.indexOf(uploadToken);
            if (uploadIndex < 0) return raw;

            const prefix = raw.slice(0, uploadIndex + uploadToken.length);
            const after = raw.slice(uploadIndex + uploadToken.length);
            if (!after) return raw;

            const parts = after.split('/');
            const first = parts[0] || '';
            const hasFAuto = /\bf_auto\b/.test(first);
            const hasQAuto = /\bq_auto\b/.test(first);
            const isTransformSegment = first.includes(',') || /(^|,)(w_|h_|c_|g_|ar_|q_|f_|e_|dpr_|fl_)/.test(first);

            if (isTransformSegment) {
                if (isVideoUploadUrl) {
                    const cleaned = first
                        .split(',')
                        .map((entry) => String(entry || '').trim())
                        .filter(Boolean)
                        .filter((entry) => !/^f_auto(?::[^,]+)?$/i.test(entry) && !/^q_auto(?::[^,]+)?$/i.test(entry));
                    if (cleaned.length === 0) {
                        return `${prefix}${parts.slice(1).join('/')}`;
                    }
                    parts[0] = cleaned.join(',');
                    return `${prefix}${parts.join('/')}`;
                }
                const additions = [];
                if (!hasFAuto) additions.push('f_auto');
                if (!hasQAuto) additions.push('q_auto');
                if (!additions.length) return raw;
                parts[0] = `${additions.join(',')},${first}`;
                return `${prefix}${parts.join('/')}`;
            }

            if (isVideoUploadUrl) return raw;
            if (hasFAuto && hasQAuto) return raw;
            return `${prefix}f_auto,q_auto/${after}`;
        }

        function getPreferredMediaFolderName() {
            let override = '';
            try {
                override = String(window?.HAILIFU_MEDIA_FOLDER || '').trim();
            } catch {}
            if (!override) {
                try {
                    override = String(remoteConfigState?.mediaFolder || '').trim();
                } catch {}
            }
            const cleaned = String(override || '').trim();
            return cleaned.replace(/^\.?\/*/, '').replace(/\/+$/, '');
        }

        function sanitizeLocalMediaPath(rawPath) {
            const source = String(rawPath || '').trim().replace(/\\/g, '/');
            if (!source) return '';
            const parts = source.split('/');
            const kept = [];
            parts.forEach((part) => {
                const token = String(part || '').trim();
                if (!token || token === '.' || token === '..') return;
                kept.push(token);
            });
            return kept.join('/');
        }

        function normalizeLocalMediaPath(rawPath) {
            let raw = String(rawPath || '').trim();
            if (!raw) return '';

            const suffixMatch = raw.match(/([?#].*)$/);
            const suffix = suffixMatch ? suffixMatch[1] : '';
            if (suffix) raw = raw.slice(0, -suffix.length);

            raw = raw.replace(/\\/g, '/');
            raw = raw.replace(/^file:\/*/i, '');
            const hadDrivePrefix = /^[a-z]:\//i.test(raw);
            raw = raw.replace(/^[a-z]:\//i, '');
            raw = raw.replace(/^(\.\/)+/, '');
            raw = raw.replace(/^\/+/, '');

            let lower = raw.toLowerCase();
            const isLegacyLocal = hadDrivePrefix || lower.includes('c:/') || lower.includes('/users/') || lower.includes('users/');
            if (isLegacyLocal) {
                const filenameOnly = raw.replace(/^.*\//, '').trim();
                if (filenameOnly) {
                    raw = filenameOnly;
                }
            }

            lower = raw.toLowerCase();
            const marker = '/media/';
            let idx = lower.lastIndexOf(marker);
            if (idx >= 0) {
                raw = raw.slice(idx + marker.length);
            } else if (lower.startsWith('media/')) {
                raw = raw.slice('media/'.length);
            }

            const cleaned = sanitizeLocalMediaPath(raw);
            if (!cleaned) return '';

            const folder = sanitizeLocalMediaPath(getPreferredMediaFolderName());
            if (folder) return `./${folder}/${cleaned}${suffix}`;
            return `./${cleaned}${suffix}`;
        }

        function normalizeProjectMediaPath(rawPath) {
            const raw = String(rawPath || '').trim();
            if (!raw) return '';
            if (/^https?:\/\//i.test(raw)) return normalizeCloudinaryUrl(raw);
            if (/^(data:|blob:)/i.test(raw)) return raw;
            if (/^\/\/.*/.test(raw)) {
                try {
                    return normalizeCloudinaryUrl(`${window.location.protocol}${raw}`);
                } catch {
                    return raw;
                }
            }
            if (/^gs:\/\//i.test(raw)) return raw;
            return normalizeLocalMediaPath(raw);
        }

        function appendCacheBuster(urlString, stamp) {
            const raw = String(urlString || '').trim();
            if (!raw) return '';
            if (/^(data:|blob:)/i.test(raw)) return raw;
            const token = Number.isFinite(stamp) ? stamp : Date.now();
            const joiner = raw.includes('?') ? '&' : '?';
            return `${raw}${joiner}v=${token}`;
        }

        function getFirebaseCrossoriginAttr(urlString) {
            const raw = String(urlString || '').trim().toLowerCase();
            if (!raw) return '';
            if (raw.includes('firebasestorage.googleapis.com') || raw.includes('firebase')) {
                return 'crossorigin="anonymous"';
            }
            return '';
        }

        function buildAdminMediaPath(rawPath) {
            const raw = String(rawPath || '').trim();
            if (!raw) return '';
            if (/^https?:\/\//i.test(raw) || /^(data:|blob:|gs:)/i.test(raw)) return raw;
            return normalizeLocalMediaPath(raw);
        }

        function resolveProjectMediaFromUrl(urlString, requestedType) {
            const raw = String(urlString || '').trim();
            if (!raw) return null;
            if (!/^https?:\/\//i.test(raw)) return null;

            const youtubeId = getYoutubeVideoId(raw);
            if (youtubeId) {
                return {
                    mediaType: 'youtube',
                    mediaSrc: getYoutubeEmbedUrl(youtubeId),
                    thumbSrc: getYoutubeThumbUrl(youtubeId)
                };
            }

            const normalizedType = String(requestedType || 'image').trim().toLowerCase();
            return {
                mediaType: normalizedType === 'video' ? 'video' : 'image',
                mediaSrc: raw,
                thumbSrc: ''
            };
        }

        function escapeHtml(value) {
            return String(value || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function normalizeQueueItem(item) {
            if (!item || typeof item !== 'object') return null;
            const rawSrc = String(item.mediaSrc || item.src || item.url || '').trim();
            if (!rawSrc) return null;
            const mediaSrc = normalizeProjectMediaPath(rawSrc);
            if (!mediaSrc) return null;
            let mediaType = String(item.mediaType || '').trim().toLowerCase();
            if (!mediaType) {
                const youtubeId = getYoutubeVideoId(mediaSrc);
                if (youtubeId) mediaType = 'youtube';
                else if (/\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc)) mediaType = 'video';
                else mediaType = 'image';
            }
            const rawThumb = String(item.thumbSrc || item.thumb || '').trim();
            const thumbSrc = normalizeProjectMediaPath(rawThumb);
            return { mediaSrc, mediaType, thumbSrc };
        }

        function normalizeCategoryKey(raw) {
            const base = String(raw || '').trim().toLowerCase();
            if (!base) return '';
            const cleaned = base.replace(/[\s_-]+/g, '');
            const map = {
                cctv: 'cctv',
                camera: 'cctv',
                electrical: 'electrical',
                electricals: 'electrical',
                electric: 'electrical',
                electricalwiring: 'electrical',
                electricalinstallation: 'electrical',
                electrician: 'electrical',
                electricianservices: 'electrical',
                gates: 'gates',
                gate: 'gates',
                autogate: 'gates',
                autogates: 'gates',
                autogateservice: 'gates',
                automatedgates: 'gates',
                solar: 'solar',
                solarenergy: 'solar',
                solars: 'solar',
                airconditioning: 'airconditioning',
                airconditioner: 'airconditioning',
                aircondition: 'airconditioning',
                airconditioningservice: 'airconditioning',
                ac: 'airconditioning',
                fencing: 'fencing',
                electricfence: 'fencing',
                fence: 'fencing',
                blindcurtain: 'blindcurtain',
                blinds: 'blindcurtain',
                windowblind: 'blindcurtain',
                windowblinds: 'blindcurtain',
                smartwindow: 'blindcurtain',
                smartcurtain: 'blindcurtain',
                smartwindows: 'blindcurtain'
            };
            return map[cleaned] || cleaned;
        }

        function renderGalleryQueue() {
            if (!galleryQueue) return;
            if (!Array.isArray(galleryQueueItems) || !galleryQueueItems.length) {
                galleryQueue.innerHTML = '<div class="gallery-queue-empty">No media added yet.</div>';
                return;
            }
            const items = galleryQueueItems.map((item, idx) => {
                const safeType = escapeHtml(String(item.mediaType || 'image'));
                const typeLabel = safeType.toUpperCase();
                const rawName = String(item.mediaSrc || '').split('/').pop() || item.mediaSrc || 'Media';
                const safeName = escapeHtml(rawName);
                const thumbSrc = item.thumbSrc || (item.mediaType === 'image' ? item.mediaSrc : '');
                const safeThumb = escapeHtml(thumbSrc);
                const icon = item.mediaType === 'video'
                    ? 'video'
                    : (item.mediaType === 'youtube' ? 'play-circle' : 'image');
                const thumbMarkup = thumbSrc
                    ? `<img class="gallery-queue-thumb" src="${safeThumb}" alt="${safeName}" loading="lazy" decoding="async">`
                    : `<div class="gallery-queue-thumb gallery-queue-thumb--icon"><i class="fas fa-${icon}"></i></div>`;
                return `
                    <div class="gallery-queue-item" data-gallery-index="${idx}">
                        ${thumbMarkup}
                        <div class="gallery-queue-meta">
                            <strong>${typeLabel}</strong>
                            <span>${safeName}</span>
                        </div>
                        <button class="gallery-queue-remove" type="button" data-gallery-remove="${idx}">Remove</button>
                    </div>
                `;
            }).join('');
            galleryQueue.innerHTML = items;
        }

        function addGalleryItems(items) {
            const list = Array.isArray(items)
                ? items.map(normalizeQueueItem).filter(Boolean)
                : [];
            if (!list.length) return 0;
            if (!Array.isArray(galleryQueueItems)) galleryQueueItems = [];
            const seen = new Set(galleryQueueItems.map((item) => `${item.mediaType}::${item.mediaSrc}`));
            let added = 0;
            list.forEach((item) => {
                const key = `${item.mediaType}::${item.mediaSrc}`;
                if (seen.has(key)) return;
                seen.add(key);
                galleryQueueItems.push(item);
                added += 1;
            });
            renderGalleryQueue();
            return added;
        }

        function clearGalleryQueueState() {
            galleryQueueItems = [];
            renderGalleryQueue();
        }

        function normalizeMediaTypeFromFile(file, fallbackType) {
            const type = String(file?.type || '').toLowerCase();
            if (type.startsWith('video/')) return 'video';
            if (type.startsWith('image/')) return 'image';
            const fallback = String(fallbackType || '').trim().toLowerCase();
            return fallback === 'video' ? 'video' : 'image';
        }

        function applyHeroVideoForItem(mediaItem) {
            const setAsHero = !!setAsHeroToggle?.checked;
            if (!setAsHero) return false;
            if (!mediaItem || mediaItem.mediaType !== 'video') return false;
            const src = String(mediaItem.mediaSrc || '').trim();
            if (!src) return false;
            try { initHeroVideo(src); } catch {}
            if (firebaseIsReady()) {
                setFirebaseHeroVideoUrl(src).catch(() => {});
            } else {
                remoteConfigState = remoteConfigState && typeof remoteConfigState === 'object' ? remoteConfigState : {};
                remoteConfigState.heroVideoUrl = src;
            }
            if (setAsHeroToggle) setAsHeroToggle.checked = false;
            return true;
        }

        async function buildMediaItemFromFile(file, opts = {}) {
            if (!file) return null;
            const preset = String(opts.preset || '').trim();
            const index = Number.isFinite(opts.index) ? opts.index : 0;
            const total = Number.isFinite(opts.total) && opts.total > 0 ? opts.total : 1;
            const mediaType = normalizeMediaTypeFromFile(file, selectedMediaType);
            if (!preset) {
                const localMediaPath = String(file.name || '').trim();
                return normalizeQueueItem({ mediaSrc: localMediaPath, mediaType, thumbSrc: '' });
            }
            setUploadUiState({ active: true, pct: 0, text: `Uploading ${index + 1}/${total}...` });
            const payload = await cloudinaryUnsignedUpload(file, {
                preset,
                resourceType: 'auto',
                onProgress: (pct) => {
                    const overall = Math.min(100, Math.round(((index + pct / 100) / total) * 100));
                    setUploadUiState({ active: true, pct: overall, text: `Uploading ${index + 1}/${total}...` });
                },
                folder: 'hailifu'
            });
            const url = String(payload?.secure_url || '').trim();
            if (!url) throw new Error('Upload failed');
            return normalizeQueueItem({ mediaSrc: url, mediaType, thumbSrc: '' });
        }

        async function addMediaFromInputs(opts = {}) {
            const silent = !!opts.silent;
            const items = [];
            const urlRaw = String(projectMediaUrl?.value || '').trim();
            if (urlRaw) {
                const urls = urlRaw.split(/[\n,]+/).map((u) => u.trim()).filter(Boolean);
                urls.forEach((url) => {
                    const resolved = resolveProjectMediaFromUrl(url, selectedMediaType);
                    if (resolved) items.push(resolved);
                });
            }

            const files = Array.from(projectFile?.files || []);
            const preset = getCloudinaryPresetValue();
            if (files.length && preset) persistCloudinaryPreset();
            try {
                for (let i = 0; i < files.length; i += 1) {
                    const item = await buildMediaItemFromFile(files[i], { preset, index: i, total: files.length });
                    if (item) items.push(item);
                }
            } catch (err) {
                setUploadUiState({ active: false, pct: 0, text: '' });
                if (!silent) alert(String(err?.message || err || 'Upload failed'));
                return 0;
            }

            if (!items.length) {
                if (!silent) alert('Please choose a file or enter a valid Media URL first.');
                return 0;
            }

            let heroApplied = false;
            items.forEach((item) => {
                if (!heroApplied && applyHeroVideoForItem(item)) heroApplied = true;
            });

            const count = addGalleryItems(items);
            if (projectMediaUrl) projectMediaUrl.value = '';
            if (projectFile) projectFile.value = '';
            setUploadUiState({ active: false, pct: 0, text: '' });
            return count;
        }

        async function saveProjectFromQueue() {
            setUploadUiState({ active: false, pct: 0, text: '' });
            if (!Array.isArray(galleryQueueItems) || !galleryQueueItems.length) {
                await addMediaFromInputs({ silent: true });
            }
            if (!Array.isArray(galleryQueueItems) || !galleryQueueItems.length) {
                alert('Please add at least one media item to the gallery.');
                return;
            }

            const mediaItems = galleryQueueItems.slice();
            const primary = mediaItems[0] || {};
            const mediaLibrary = getMediaLibraryRecords().map(normalizeMediaLibraryRecord).filter(Boolean);
            const mediaByUrl = new Map(mediaLibrary.map((entry) => [String(entry.url || '').trim(), entry]));
            const mediaIds = [];
            mediaItems.forEach((item) => {
                const mediaSrc = normalizeProjectMediaPath(String(item?.mediaSrc || '').trim());
                if (!mediaSrc) return;
                let entry = mediaByUrl.get(mediaSrc);
                if (!entry) {
                    entry = normalizeMediaLibraryRecord({
                        id: `media_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
                        title: String(projectTitle?.value || 'Project media').trim(),
                        url: mediaSrc,
                        type: String(item?.mediaType || 'image').trim().toLowerCase() || 'image',
                        provider: /res\.cloudinary\.com/i.test(mediaSrc) ? 'cloudinary' : 'external',
                        createdAt: new Date().toISOString()
                    });
                    if (!entry) return;
                    mediaLibrary.unshift(entry);
                    mediaByUrl.set(mediaSrc, entry);
                }
                if (entry?.id && !mediaIds.includes(entry.id)) mediaIds.push(entry.id);
            });
            if (mediaLibrary.length) {
                saveMediaLibraryRecords(mediaLibrary);
            }
            const project = {
                createdAt: new Date().toISOString(),
                title: projectTitle?.value || 'Project',
                category: projectCategory?.value || 'cctv',
                description: projectDescription?.value || '',
                mediaType: primary.mediaType || 'image',
                mediaSrc: primary.mediaSrc || '',
                thumbSrc: primary.thumbSrc || '',
                mediaItems,
                mediaIds,
                featured: true,
                showcase: true,
                services: true,
                isStarred: false,
                isFeatured: false
            };

            try {
                if (firebaseIsReady()) {
                    setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                    const db = ensureFirebaseDb();
                    if (db && Array.isArray(mediaLibrary)) {
                        const mediaUpdates = {};
                        mediaLibrary.forEach((entry) => {
                            const id = String(entry?.id || '').trim();
                            if (!id) return;
                            mediaUpdates[id] = entry;
                        });
                        if (Object.keys(mediaUpdates).length) {
                            await db.ref(getFirebaseMediaLibraryPath()).update(mediaUpdates);
                        }
                    }
                    await addProjectInFirebase(project);
                    alert('Project Saved Successfully!');
                    
                    // Trigger immediate local update for Firebase users
                    if (typeof firebaseProjectsState !== 'undefined' && Array.isArray(firebaseProjectsState)) {
                        firebaseProjectsState.unshift(project);
                        loadProjects();
                    }
                } else {
                    project.id = `p_${Date.now()}`;
                    const projects = getProjects();
                    projects.unshift(project);
                    saveProjects(projects);
                    loadProjects();
                }

                if (!firebaseIsReady()) {
                    const preset = getCloudinaryPresetValue();
                    if (preset) {
                        persistCloudinaryPreset();
                        const nextConfig = {
                            updatedAt: new Date().toISOString(),
                            heroVideoUrl: String(remoteConfigState?.heroVideoUrl || '').trim() || undefined,
                            projects: getProjects()
                        };
                        setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                        await uploadRemoteConfig(nextConfig, preset);
                        remoteConfigFingerprint = '';
                        syncFromRemoteConfig({ forceRender: true });
                    }
                }
            } catch (err) {
                alert(String(err?.message || err || 'Save failed'));
            } finally {
                setUploadUiState({ active: false, pct: 0, text: '' });
                if (projectTitle) projectTitle.value = '';
                if (projectDescription) projectDescription.value = '';
                if (projectFile) projectFile.value = '';
                if (projectMediaUrl) projectMediaUrl.value = '';
                if (setAsHeroToggle) setAsHeroToggle.checked = false;
                clearGalleryQueueState();
            }
        }

        function getReviewSettings() {
            return readJsonStorage('hailifu_review_settings', { requireApproval: true });
        }

        function saveReviewSettings(settings) {
            const current = getReviewSettings();
            writeJsonStorage('hailifu_review_settings', { ...current, ...settings });
        }

        function normalizeReviewStatus(status) {
            const normalized = String(status || '').trim().toLowerCase();
            if (normalized === 'published' || normalized === 'approved' || normalized === 'active') return 'published';
            return 'pending';
        }

        function normalizeReviewRecords(reviews) {
            const source = Array.isArray(reviews) ? reviews : [];
            let changed = false;
            const normalized = source.map((entry, idx) => {
                if (!entry || typeof entry !== 'object') {
                    changed = true;
                    return null;
                }
                const status = normalizeReviewStatus(entry.status);
                const existingId = String(entry.id || '').trim();
                const fallbackSeed = [
                    entry.createdAt,
                    entry.date,
                    entry.name,
                    entry.comment,
                    idx
                ].map((value) => String(value || '').trim()).join('|');
                const id = existingId || `review_${hashText(fallbackSeed)}`;
                if (!existingId || status !== entry.status) changed = true;
                return {
                    ...entry,
                    id,
                    status
                };
            }).filter(Boolean);
            return { normalized, changed };
        }

        function getReviews() {
            let stored = readJsonStorage(reviewsStorageKey, []);
            if (!Array.isArray(stored) || stored.length === 0) {
                stored = REVIEWS_DATA.map(r => ({ ...r, status: 'published' }));
            }
            const { normalized, changed } = normalizeReviewRecords(stored);
            if (changed) {
                writeJsonStorage(reviewsStorageKey, normalized);
            }
            return normalized;
        }

        function saveReviews(reviews) {
            const { normalized } = normalizeReviewRecords(reviews);
            writeJsonStorage(reviewsStorageKey, normalized);
        }

        // ---------- Website reviews (Supabase "reviews" table, 2026-10-01) ----------
        // Round 11: visitors add rows as "published" (live at once); the owner can hide ("pending"), reply or delete in Admin > Reviews.
        const REVIEWS_TABLE = 'reviews';
        const siteReviews = { items: [], loaded: false, error: '', confirming: '' };

        // Round 10: Google-style answers. Keys are stored; labels are shown.
        // "amount" is shown to the owner only, never on the public site.
        const REVIEW_CHOICES = {
            used: { service: 'Got a service', quote: 'Only got a quote' },
            price: { inexpensive: 'Inexpensive', fair: 'Fair', expensive: 'Expensive' },
            amount: { u500: 'Under ₵500', '500-2k': '₵500 to ₵2,000', '2k-5k': '₵2,000 to ₵5,000', '5k-10k': '₵5,000 to ₵10,000', '10k+': 'Over ₵10,000' },
            speed: { 'same-day': 'Responded the same day', 'few-days': 'Responded within a few days', longer: 'Took longer to respond' }
        };
        const REVIEW_MEDIA_PATH = /^reviews\/r_[a-z0-9]+\/[a-z0-9.-]+$/i;
        const REVIEW_MAX_PHOTOS = 5;
        const REVIEW_MAX_VIDEO_BYTES = 30 * 1024 * 1024;

        function reviewChoice(group, value) {
            const v = String(value || '');
            return Object.prototype.hasOwnProperty.call(REVIEW_CHOICES[group], v) ? v : '';
        }

        function reviewMediaUrl(m) {
            return m && REVIEW_MEDIA_PATH.test(m.path) ? getMediaPublicUrl(m.path) : '';
        }

        // public tags: services, what they liked, response speed, price (never the amount)
        function publicReviewTags(r) {
            return [
                ...(r.services || []),
                ...(r.likes || []),
                r.speed ? REVIEW_CHOICES.speed[r.speed] : '',
                r.price ? `Price: ${REVIEW_CHOICES.price[r.price]}` : ''
            ].filter(Boolean);
        }

        // ---- review form: photos & videos picked by the visitor (uploaded on Post) ----
        const reviewMediaState = { items: [] };

        function paintReviewMedia(note) {
            const list = document.getElementById('reviewMediaList');
            const noteEl = document.getElementById('reviewMediaNote');
            if (!list) return;
            list.querySelectorAll('.hm-rv-thumb').forEach((el) => el.remove());
            const addBtn = document.getElementById('reviewMediaBtn');
            reviewMediaState.items.forEach((item, i) => {
                const el = document.createElement('div');
                el.className = 'hm-rv-thumb';
                el.innerHTML = `${item.kind === 'video'
                    ? `<video src="${escapeHTML(item.preview)}" muted playsinline preload="metadata"></video><i class="fas fa-play" aria-hidden="true"></i>`
                    : `<img src="${escapeHTML(item.preview)}" alt="">`}
                    <button type="button" class="hm-rv-remove" data-rv-remove="${i}" aria-label="Remove ${escapeHTML(item.file.name)}"><i class="fas fa-xmark" aria-hidden="true"></i></button>`;
                list.insertBefore(el, addBtn);
            });
            if (noteEl) noteEl.textContent = note || '';
        }

        function addReviewMedia(files) {
            const notes = [];
            Array.from(files || []).forEach((file) => {
                const kind = getMediaKind(file.name, file.type);
                const photos = reviewMediaState.items.filter((x) => x.kind === 'image').length;
                const hasVideo = reviewMediaState.items.some((x) => x.kind === 'video');
                if (kind === 'image') {
                    if (photos >= REVIEW_MAX_PHOTOS) { notes.push(`You can add up to ${REVIEW_MAX_PHOTOS} photos.`); return; }
                } else if (kind === 'video') {
                    if (hasVideo) { notes.push('You can add 1 video.'); return; }
                    if (file.size > REVIEW_MAX_VIDEO_BYTES) { notes.push('That video is too big (max 30 MB).'); return; }
                } else { notes.push(`${file.name} is not a photo or video.`); return; }
                reviewMediaState.items.push({ file, kind, preview: URL.createObjectURL(file) });
            });
            paintReviewMedia([...new Set(notes)].join(' '));
        }

        function clearReviewMedia() {
            reviewMediaState.items.forEach((x) => { try { URL.revokeObjectURL(x.preview); } catch {} });
            reviewMediaState.items = [];
            paintReviewMedia('');
        }

        // uploads to media/reviews/<reviewId>/ (visitors may only write there, see SQL)
        async function uploadReviewMedia(reviewId) {
            const supabase = ensureSupabaseClient();
            if (!supabase) throw new Error('offline');
            const out = [];
            let i = 0;
            for (const item of reviewMediaState.items) {
                i += 1;
                const blob = item.kind === 'image' ? await optimizeImageForUpload(item.file) : item.file;
                const type = String(blob.type || item.file.type || '').toLowerCase();
                const ext = (type.split('/')[1] || (item.kind === 'video' ? 'mp4' : 'jpg')).replace(/[^a-z0-9]/g, '').replace('jpeg', 'jpg').replace('quicktime', 'mov') || 'bin';
                const path = `reviews/${reviewId}/${i}-${Date.now().toString(36)}.${ext}`;
                const { error } = await withTimeout(supabase.storage.from(MEDIA_BUCKET).upload(path, blob, { contentType: type || undefined, upsert: false }), 120000, 'Uploading review photo');
                if (error) throw error;
                out.push({ path, type: item.kind === 'video' ? 'video' : 'image' });
            }
            return out;
        }

        function syncReviewSingleChoice(group) {
            const box = document.querySelector(`#reviewForm [data-review-single="${group}"]`);
            const input = document.getElementById(`review_${group}`);
            const on = box ? box.querySelector('[aria-checked="true"]') : null;
            const value = on ? reviewChoice(group, on.dataset.value) : '';
            if (input) input.value = value;
            return value;
        }

        function resetReviewSingleChoices() {
            document.querySelectorAll('#reviewForm [data-review-single] [data-value]').forEach((b) => b.setAttribute('aria-checked', 'false'));
            Object.keys(REVIEW_CHOICES).forEach(syncReviewSingleChoice);
        }

        (function bindReviewFormRound10() {
            const form = document.getElementById('reviewForm');
            if (!form) return;
            const input = document.getElementById('reviewMediaInput');
            form.addEventListener('click', (e) => {
                const choice = e.target.closest('[data-review-single] [data-value]');
                if (choice) {
                    const box = choice.closest('[data-review-single]');
                    const was = choice.getAttribute('aria-checked') === 'true';
                    box.querySelectorAll('[data-value]').forEach((b) => b.setAttribute('aria-checked', 'false'));
                    if (!was) choice.setAttribute('aria-checked', 'true'); // tap again to clear
                    syncReviewSingleChoice(box.dataset.reviewSingle);
                    return;
                }
                if (e.target.closest('#reviewMediaBtn')) { input?.click(); return; }
                const remove = e.target.closest('[data-rv-remove]');
                if (remove) {
                    const [gone] = reviewMediaState.items.splice(Number(remove.dataset.rvRemove), 1);
                    if (gone) { try { URL.revokeObjectURL(gone.preview); } catch {} }
                    paintReviewMedia('');
                }
            });
            input?.addEventListener('change', () => {
                addReviewMedia(input.files);
                input.value = '';
            });
        })();


        // Keep only known fields so nothing unexpected (image links, markup) reaches the page
        function cleanSiteReview(raw) {
            if (!raw || typeof raw !== 'object') return null;
            const text = (v, max) => String(v == null ? '' : v).trim().slice(0, max);
            const list = (v) => (Array.isArray(v) ? v : []).map((x) => text(x, 60)).filter(Boolean).slice(0, 12);
            const id = text(raw.id, 80);
            if (!id) return null;
            return {
                id,
                name: text(raw.name, 60) || 'Hailifu customer',
                phone: text(raw.phone, 30),
                rating: Math.max(1, Math.min(5, Math.round(Number(raw.rating) || 5))),
                comment: text(raw.comment, 1500),
                ownerReply: text(raw.ownerReply, 800),
                likes: list(raw.likes),
                services: list(raw.services),
                used: reviewChoice('used', raw.used),
                price: reviewChoice('price', raw.price),
                amount: reviewChoice('amount', raw.amount),
                speed: reviewChoice('speed', raw.speed),
                media: (Array.isArray(raw.media) ? raw.media : [])
                    .map((m) => ({ path: text(m && m.path, 200), type: m && m.type === 'video' ? 'video' : 'image' }))
                    .filter((m) => REVIEW_MEDIA_PATH.test(m.path))
                    .slice(0, REVIEW_MAX_PHOTOS + 1),
                status: raw.status === 'published' ? 'published' : 'pending',
                source: 'website',
                createdAt: text(raw.createdAt, 40) || new Date().toISOString(),
                publishedAt: text(raw.publishedAt, 40)
            };
        }

        function getPublishedSiteReviews() {
            return siteReviews.items
                .filter((r) => r.status === 'published')
                .map(({ phone, amount, ...r }) => ({
                    ...r,
                    source: 'Hailifu website',
                    siteReview: true,
                    siteTags: publicReviewTags(r),
                    siteMedia: r.media.map((m) => ({ url: reviewMediaUrl(m), type: m.type })).filter((m) => m.url)
                }));
        }

        function getPublishedReviews() {
            const firestorePublished = Array.isArray(firestorePublishedReviewsState)
                ? firestorePublishedReviewsState.filter(Boolean)
                : [];
            const base = firestorePublished.length
                ? firestorePublished
                : getReviews().filter((review) => review.status === 'published');
            const seen = new Set();
            return [...getPublishedSiteReviews(), ...base].filter((r) => {
                const key = String(r?.id || '');
                if (key && seen.has(key)) return false;
                if (key) seen.add(key);
                return true;
            });
        }

        // Round 11: reviews go live at once, so the amount paid is kept OUT of the public
        // reviews row, in the admin-only table review_private { id, data: { id, amount } }.
        const REVIEWS_PRIVATE_TABLE = 'review_private';

        // The row written to the public reviews table: never the amount; no phone once live.
        function reviewPublicRow(review) {
            const { amount, ...rest } = review || {};
            if (rest.status === 'published') rest.phone = '';
            return toRemoteRow(rest);
        }

        async function fetchSiteReviews(opts = {}) {
            const supabase = ensureSupabaseClient();
            if (!supabase) {
                siteReviews.error = 'Supabase is not configured (see ADMIN_SETUP.md).';
                return false;
            }
            try {
                const { data, error } = await withTimeout(supabase.from(REVIEWS_TABLE).select('*'), 10000, 'Loading reviews');
                if (error) throw error;
                // admin only: the private amounts (visitors get nothing back from this table)
                let privateById = new Map();
                if (opts.withPrivate) {
                    try {
                        const res = await withTimeout(supabase.from(REVIEWS_PRIVATE_TABLE).select('*'), 8000, 'Loading review amounts');
                        if (!res.error && Array.isArray(res.data)) privateById = new Map(res.data.map((row) => [String(row.id), fromRemoteRow(row)]));
                    } catch {}
                }
                siteReviews.items = (Array.isArray(data) ? data : [])
                    .map(fromRemoteRow)
                    .map((r) => (privateById.has(String(r?.id)) ? { ...r, amount: privateById.get(String(r.id)).amount || r.amount } : r))
                    .map(cleanSiteReview)
                    .filter(Boolean)
                    .sort((x, y) => String(y.createdAt).localeCompare(String(x.createdAt)));
                siteReviews.error = '';
                return true;
            } catch (err) {
                siteReviews.error = /fetch|network|timed out|failed/i.test(String(err?.message || err))
                    ? 'Reviews can\'t be reached right now. Check your connection.'
                    : `Reviews error: ${String(err?.message || err)}`;
                return false;
            } finally {
                siteReviews.loaded = true;
            }
        }

        // Round 11: a review is published at once. If the database still has the older
        // "waiting only" rule (reviews_instant_publish.sql not run yet), it is sent as
        // waiting instead, so nothing is lost. Returns { ok, live }.
        async function submitPublicReview(review) {
            const supabase = ensureSupabaseClient();
            if (!supabase || !review) return { ok: false };
            const send = (r) => withTimeout(supabase.from(REVIEWS_TABLE).insert(reviewPublicRow(r)), 10000, 'Sending review');
            try {
                // no .select(): visitors may add a review but not read it back
                let live = review.status === 'published';
                let { error } = await send(review);
                if (error && live && /42501|row-level security|violates/i.test(`${error.code || ''} ${error.message || ''}`)) {
                    live = false;
                    ({ error } = await send({ ...review, status: 'pending', publishedAt: '' }));
                }
                if (error) throw error;
                if (review.amount) {
                    try {
                        await withTimeout(supabase.from(REVIEWS_PRIVATE_TABLE).insert(toRemoteRow({ id: review.id, amount: review.amount })), 8000, 'Sending amount');
                    } catch {}
                }
                return { ok: true, live };
            } catch (err) {
                console.warn('[Reviews] Could not send review:', err);
                return { ok: false, message: /too many/i.test(String(err?.message || '')) ? 'busy' : '' };
            }
        }

        async function saveSiteReview(next) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const { data, error } = await withTimeout(
                    supabase.from(REVIEWS_TABLE).upsert([reviewPublicRow(next)], { onConflict: 'id' }).select(),
                    10000,
                    'Saving review'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('not allowed');
                const i = siteReviews.items.findIndex((r) => r.id === next.id);
                if (i >= 0) siteReviews.items[i] = next; else siteReviews.items.unshift(next);
                refreshPublicSiteReviews();
                return { ok: true };
            } catch (err) {
                return { ok: false, message: /not allowed|security|42501|jwt/i.test(String(err?.message || err)) ? 'Not allowed. Sign in again and retry.' : 'Could not save. Check your connection.' };
            }
        }

        async function deleteSiteReview(id) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const { data, error } = await withTimeout(supabase.from(REVIEWS_TABLE).delete().eq('id', id).select('id'), 10000, 'Deleting review');
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('not allowed');
                const gone = siteReviews.items.find((r) => r.id === id);
                siteReviews.items = siteReviews.items.filter((r) => r.id !== id);
                refreshPublicSiteReviews();
                try { await supabase.from(REVIEWS_PRIVATE_TABLE).delete().eq('id', id); } catch {}
                const paths = (gone?.media || []).map((m) => m.path).filter((p) => REVIEW_MEDIA_PATH.test(p));
                if (paths.length) { try { await supabase.storage.from(MEDIA_BUCKET).remove(paths); } catch {} }
                return { ok: true };
            } catch (err) {
                return { ok: false, message: /not allowed|security|42501|jwt/i.test(String(err?.message || err)) ? 'Not allowed. Sign in again and retry.' : 'Could not delete. Check your connection.' };
            }
        }

        function refreshPublicSiteReviews() {
            try { renderPublicReviews(); } catch {}
            try { refreshLiveReviewSection(); } catch {}
        }

        function renderPublicReviews() {
            const publicGrid = document.getElementById('publicReviewsGrid');
            if (!publicGrid) return;
            const reviews = getPublishedReviews();
            if (!reviews.length) return;
            publicGrid.innerHTML = reviews.slice(0, 12).map((review) => {
                const name = String(review.name || 'Customer').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const comment = String(review.comment || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
                const stars = '\u2605\u2605\u2605\u2605\u2605'.slice(0, rating).padEnd(5, '\u2605');
                return `
                    <article class="hailifu-review-card">
                        <div class="hailifu-review-card-header">
                            <span class="hailifu-reviewer">${name}</span>
                            <span class="hailifu-review-score">${stars}</span>
                        </div>
                        <p>"${comment}"</p>
                    </article>
                `;
            }).join('');
        }

        function renderAdminReviews() {
            if (!pendingReviewsGrid || !publishedReviewsGrid) return;

            const runtimeReady = hasFirestoreReviewRuntime();
            const moduleUnlocked = canAccessReviewModeration();

            if (!moduleUnlocked) {
                const pendingMessage = runtimeReady
                    ? 'Sign in with Firebase to load pending reviews.'
                    : 'Firebase Auth/Firestore unavailable. Configure Firebase and sign in.';
                pendingReviewsGrid.innerHTML = `<div class="admin-empty">${pendingMessage}</div>`;
                publishedReviewsGrid.innerHTML = '<div class="admin-empty">Published reviews become visible after Firebase login.</div>';
                return;
            }

            const stored = getReviews();
            const pending = runtimeReady
                ? (Array.isArray(firestorePendingReviewsState) ? firestorePendingReviewsState.filter(Boolean) : [])
                : stored.filter((review) => review.status === 'pending');
            const published = runtimeReady
                ? (Array.isArray(firestorePublishedReviewsState) && firestorePublishedReviewsState.length
                    ? firestorePublishedReviewsState.filter(Boolean)
                    : stored.filter((review) => review.status === 'published'))
                : stored.filter((review) => review.status === 'published');

            const renderCard = (review, statusLabel) => {
                const name = String(review.name || 'Customer').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const comment = String(review.comment || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const meta = String(review.meta || '').trim();
                const metaMarkup = meta ? `<div class="admin-review-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 4px;">${meta.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>` : '';
                const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
                const stars = '\u2605\u2605\u2605\u2605\u2605'.slice(0, rating).padEnd(5, '\u2605');
                const actions = statusLabel === 'pending'
                    ? `<button type="button" class="review-admin-btn approve" data-review-approve="${review.id}">Approve</button>`
                    : '';
                const statusText = statusLabel === 'pending' ? 'PENDING' : 'PUBLISHED';
                const reply = String(review.ownerReply || '').trim();
                const replyMarkup = reply
                    ? `<div class="admin-review-reply"><strong>Response:</strong> <p>${reply.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p></div>`
                    : '';
                return `
                    <div class="admin-review-card">
                        <div class="admin-review-header">
                            <strong>${name}</strong>
                            <span class="admin-review-status admin-review-status--${statusLabel}">${statusText}</span>
                            <span>${stars}</span>
                        </div>
                        ${metaMarkup}
                        <p>${comment}</p>
                        ${replyMarkup}
                        <div class="review-admin-actions">
                            ${actions}
                            <button type="button" class="review-admin-btn delete" data-review-delete="${review.id}">Delete</button>
                        </div>
                    </div>
                `;
            };
            pendingReviewsGrid.innerHTML = pending.length
                ? pending.map((review) => renderCard(review, 'pending')).join('')
                : '<div class="admin-empty">No pending reviews.</div>';
            publishedReviewsGrid.innerHTML = published.length
                ? published.map((review) => renderCard(review, 'published')).join('')
                : '<div class="admin-empty">No published reviews.</div>';
        }

        function refreshOverview() {
            if (overviewTotalLeads) overviewTotalLeads.textContent = String(getLeads().length);
            const localPending = getReviews().filter((review) => review.status === 'pending').length;
            const pendingCount = canAccessReviewModeration()
                ? (Array.isArray(firestorePendingReviewsState) ? firestorePendingReviewsState.length : 0)
                : localPending;
            if (overviewRecentReviews) overviewRecentReviews.textContent = String(pendingCount);
            if (overviewReach) overviewReach.textContent = String(getPageReachCount());

            const interest = getServiceInterest();
            const max = Math.max(
                interest.cctv,
                interest.electrical,
                interest.airconditioning,
                interest.gates,
                interest.blindcurtain,
                1
            );

            if (interestCctv) interestCctv.style.width = `${Math.round((interest.cctv / max) * 100)}%`;
            if (interestElectrical) interestElectrical.style.width = `${Math.round((interest.electrical / max) * 100)}%`;
            if (interestAirconditioning) interestAirconditioning.style.width = `${Math.round((interest.airconditioning / max) * 100)}%`;
            if (interestGates) interestGates.style.width = `${Math.round((interest.gates / max) * 100)}%`;
            if (interestBlindcurtain) interestBlindcurtain.style.width = `${Math.round((interest.blindcurtain / max) * 100)}%`;

            if (interestCctvCount) interestCctvCount.textContent = String(interest.cctv);
            if (interestElectricalCount) interestElectricalCount.textContent = String(interest.electrical);
            if (interestAirconditioningCount) interestAirconditioningCount.textContent = String(interest.airconditioning);
            if (interestGatesCount) interestGatesCount.textContent = String(interest.gates);
            if (interestBlindcurtainCount) interestBlindcurtainCount.textContent = String(interest.blindcurtain);

            if (overviewLeadsList) {
                const leads = getLeads().slice(0, 5);
                overviewLeadsList.innerHTML = leads.length
                    ? leads.map((lead) => `<div class="lead-mini">${lead.serviceLabel || lead.service || 'Lead'} - ${lead.name || ''}</div>`).join('')
                    : '<div class="lead-mini">No recent leads.</div>';
            }
        }

        function getPageReachCount() {
            const count = Number(readJsonStorage(pageReachStorageKey, 0));
            if (!Number.isFinite(count) || count < 0) return 0;
            return Math.floor(count);
        }

        function setPageReachCount(value) {
            const numeric = Number(value);
            const safe = Number.isFinite(numeric) && numeric >= 0 ? Math.floor(numeric) : 0;
            writeJsonStorage(pageReachStorageKey, safe);
            return safe;
        }

        function shouldCountPageReachForSession() {
            try {
                const alreadyCounted = String(sessionStorage.getItem(pageReachSessionKey) || '') === '1';
                if (alreadyCounted) return false;
                sessionStorage.setItem(pageReachSessionKey, '1');
            } catch {}
            return true;
        }

        function bumpPageLoads() {
            if (!shouldCountPageReachForSession()) return;

            const localCurrent = getPageReachCount();
            const localNext = setPageReachCount(localCurrent + 1);
            refreshOverview();

            const db = ensureFirebaseDb();
            if (!db) return;
            const path = getFirebaseSettingsPath();
            db.ref(`${path}/pageReach`).transaction((current) => {
                const remoteCurrent = Number(current);
                if (Number.isFinite(remoteCurrent) && remoteCurrent >= 0) {
                    return Math.floor(remoteCurrent) + 1;
                }
                return localNext;
            }, (error, committed, snap) => {
                if (error || !committed) return;
                const remoteValue = snap && typeof snap.val === 'function' ? Number(snap.val()) : NaN;
                if (!Number.isFinite(remoteValue) || remoteValue < 0) return;
                setPageReachCount(remoteValue);
                refreshOverview();
            });
        }

        function ensureAdminMediaToast() {
            let toast = document.getElementById('adminMediaToast');
            if (toast) return toast;
            toast = document.createElement('div');
            toast.id = 'adminMediaToast';
            toast.className = 'admin-media-toast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            document.body.appendChild(toast);
            return toast;
        }

        function showAdminMediaToast(message, type = 'success') {
            const toast = ensureAdminMediaToast();
            if (!toast) return;
            toast.textContent = String(message || 'Update complete');
            toast.classList.remove('is-success', 'is-warning', 'is-error', 'active');
            toast.classList.add(`is-${type}`);
            // errors/warnings stay long enough to read; CSS draws a matching countdown bar
            const duration = type === 'error' || type === 'warning' ? 4500 : 2400;
            toast.style.setProperty('--toast-ms', `${duration}ms`);
            void toast.offsetWidth;
            toast.classList.add('active');
            if (adminMediaToastTimer) clearTimeout(adminMediaToastTimer);
            adminMediaToastTimer = setTimeout(() => {
                toast.classList.remove('active');
            }, duration);
        }

        function notifyAdminReviewSubmitted(review) {
            if (!adminPanel || !adminPanel.classList.contains('active')) return;
            const name = String(review?.name || 'Customer').trim() || 'Customer';
            showAdminMediaToast(`New review submitted by ${name}`, 'success');
        }

        async function handleReviewAuthLoginSubmit(event) {
            if (event) event.preventDefault();
            if (!hasAdminVisibilityAccess()) {
                syncReviewAuthUiState();
                return;
            }
            const auth = ensureFirebaseAuthService();
            if (!auth) {
                showAdminMediaToast('Firebase Auth is not configured.', 'error');
                return;
            }

            const email = String(reviewAuthEmailInput?.value || '').trim();
            const password = String(reviewAuthPasswordInput?.value || '');
            if (!email || !password) {
                showAdminMediaToast('Enter email and password.', 'warning');
                return;
            }

            const loginBtn = reviewAuthLoginBtn;
            const previousLabel = loginBtn ? loginBtn.textContent : '';
            if (loginBtn) {
                loginBtn.disabled = true;
                loginBtn.textContent = 'Signing In...';
            }

            try {
                await auth.signInWithEmailAndPassword(email, password);
                if (reviewAuthPasswordInput) reviewAuthPasswordInput.value = '';
                showAdminMediaToast('Firebase login successful.', 'success');
            } catch (error) {
                const message = String(error?.message || 'Login failed').replace(/^Firebase:\s*/i, '');
                showAdminMediaToast(message, 'error');
            } finally {
                if (loginBtn) {
                    loginBtn.disabled = false;
                    loginBtn.textContent = previousLabel || 'Firebase Login';
                }
                syncReviewAuthUiState();
            }
        }

        async function handleReviewAuthLogoutClick(event) {
            if (event) event.preventDefault();
            const auth = ensureFirebaseAuthService();
            if (!auth) return;
            try {
                await auth.signOut();
                if (reviewAuthPasswordInput) reviewAuthPasswordInput.value = '';
                showAdminMediaToast('Signed out from Firebase.', 'success');
            } catch (error) {
                const message = String(error?.message || 'Sign out failed').replace(/^Firebase:\s*/i, '');
                showAdminMediaToast(message, 'error');
            } finally {
                syncReviewAuthUiState();
            }
        }

        // Review Form Submission
        const reviewForm = document.getElementById('reviewForm');
        const formSuccess = document.getElementById('formSuccess');
        const reviewModal = document.getElementById('reviewModal');
        const reviewModalClose = document.getElementById('reviewModalClose');
        const reviewModalOpenButtons = Array.from(document.querySelectorAll('[data-review-modal-open]'));
        const reviewSubmitBtn = reviewForm ? reviewForm.querySelector('#reviewComposer .submit-btn') : null;
        const reviewLegacySubmitBtn = reviewForm ? reviewForm.querySelector('.review-legacy-submit') : null;
        const reviewModalTitle = reviewModal ? reviewModal.querySelector('.review-modal-header h3') : null;
        const reviewModalTitleEcho = reviewModal ? reviewModal.querySelector('.review-modal-title-echo') : null;
        const reviewModalSubtitle = reviewModal ? reviewModal.querySelector('.review-modal-header p') : null;
        const reviewModalHeaderDefault = document.getElementById('reviewModalHeaderDefault');
        const reviewModalIdentityOverlay = document.getElementById('reviewModalIdentityOverlay');
        const reviewModalIdentityAvatar = document.getElementById('reviewModalIdentityAvatar');
        const reviewModalIdentityName = document.getElementById('reviewModalIdentityName');
        const reviewModalIdentityMeta = document.getElementById('reviewModalIdentityMeta');
        const reviewIdentityBanner = document.getElementById('reviewIdentityBanner');
        const reviewIdentitySpinner = document.getElementById('reviewIdentitySpinner');
        const reviewIdentityAvatar = document.getElementById('reviewIdentityAvatar');
        const reviewIdentityText = document.getElementById('reviewIdentityText');
        const reviewIdentityRetryBtn = document.getElementById('reviewIdentityRetryBtn');
        const reviewPublicIdentity = document.getElementById('reviewPublicIdentity');
        const reviewPublicAvatar = document.getElementById('reviewPublicAvatar');
        const reviewPublicName = document.getElementById('reviewPublicName');
        const reviewPublicPostingText = document.getElementById('reviewPublicPostingText');
        const verifiedClientBadge = document.getElementById('verifiedClientBadge');
        const verifiedClientAvatar = document.getElementById('verifiedClientAvatar');
        const reviewGoogleSignInBtn = document.getElementById('reviewGoogleSignInBtn');
        const reviewLegacyToggleBtn = document.getElementById('reviewLegacyToggle');
        const reviewLegacyCancelBtn = document.getElementById('reviewLegacyCancel');
        const reviewLegacyPanel = document.getElementById('reviewLegacyPanel');
        const legacyIdentityNameGroup = document.getElementById('legacyIdentityNameGroup');
        const legacyIdentityEmailGroup = document.getElementById('legacyIdentityEmailGroup');
        const legacyReviewerNameInput = document.getElementById('legacyReviewerName');
        const legacyReviewerEmailInput = document.getElementById('legacyReviewerEmail');
        const legacyReviewCommentInput = document.getElementById('legacyReviewComment');
        const reviewCommentInput = document.getElementById('reviewComment');
        const reviewLikesInput = document.getElementById('reviewLikesInput');
        const reviewServicesInput = document.getElementById('reviewServicesInput');
        const reviewPhotoNamesInput = document.getElementById('reviewPhotoNamesInput');
        const reviewLikeTagButtons = reviewForm ? Array.from(reviewForm.querySelectorAll('[data-review-like-tag]')) : [];
        const reviewServiceOptionInputs = reviewForm ? Array.from(reviewForm.querySelectorAll('input[name="reviewServiceOption"]')) : [];
        const reviewPhotoInput = document.getElementById('reviewPhotoInput');
        const reviewPhotoBtn = document.getElementById('reviewPhotoBtn');
        const reviewPhotoStatus = document.getElementById('reviewPhotoStatus');
        const reviewSubmitButtons = reviewForm ? Array.from(reviewForm.querySelectorAll('.submit-btn')) : [];
        const reviewIdentityEmailStorageKey = 'hailifu_review_identity_email';
        const reviewIdentityNameStorageKey = 'hailifu_review_identity_name';
        const reviewIdentityPhotoStorageKey = 'hailifu_review_identity_photo_url';
        const reviewIdentityProviderStorageKey = 'hailifu_review_identity_provider';
        const reviewIdentityUidStorageKey = 'hailifu_review_identity_uid';
        const reviewIdentityVerifiedStorageKey = 'hailifu_review_identity_verified';
        let reviewIdentityLastFailureCode = '';
        let editingReviewId = '';
        let reviewUiState = 'composer-ready';
        let reviewSilentIdentityPrimed = false;
        let reviewIdentityWarmupObserver = null;

        function setReviewUiState(state, opts = {}) {
            const requested = String(state || '').trim().toLowerCase();
            const next = requested === 'legacy-manual' ? 'legacy-manual' : 'composer-ready';
            reviewUiState = next;
            if (!reviewForm) return;
            reviewForm.classList.remove('is-auth-gate', 'is-composer-ready', 'is-legacy-manual');
            if (next === 'composer-ready') reviewForm.classList.add('is-composer-ready');
            else if (next === 'legacy-manual') reviewForm.classList.add('is-legacy-manual');
            else reviewForm.classList.add('is-auth-gate');
            reviewForm.dataset.reviewUiState = next;

            const isLegacy = next === 'legacy-manual';
            if (reviewLegacyPanel) {
                reviewLegacyPanel.hidden = !isLegacy;
                reviewLegacyPanel.setAttribute('aria-hidden', isLegacy ? 'false' : 'true');
            }
            if (reviewLegacyToggleBtn) {
                reviewLegacyToggleBtn.hidden = isLegacy;
            }
            if (reviewGoogleSignInBtn) {
                reviewGoogleSignInBtn.hidden = true;
            }
            if (reviewCommentInput) {
                reviewCommentInput.required = next === 'composer-ready';
            }
            if (legacyReviewerNameInput) legacyReviewerNameInput.required = isLegacy;
            if (legacyReviewerEmailInput) legacyReviewerEmailInput.required = isLegacy;
            if (legacyReviewCommentInput) legacyReviewCommentInput.required = isLegacy;

            if (opts && opts.focus) {
                if (next === 'composer-ready') {
                    try { reviewCommentInput?.focus(); } catch {}
                } else if (next === 'legacy-manual') {
                    try { legacyReviewerNameInput?.focus(); } catch {}
                } else {
                    try { reviewCommentInput?.focus(); } catch {}
                }
            }
        }

        function setLeaveReviewButtonsLoading(isLoading, loadingLabel = 'Syncing Account...') {
            const loading = !!isLoading;
            reviewModalOpenButtons.forEach((btn) => {
                if (!btn) return;
                const labelNode = btn.querySelector('span');
                if (!btn.dataset.defaultLabel) {
                    const current = labelNode ? labelNode.textContent : btn.textContent;
                    btn.dataset.defaultLabel = String(current || '').trim();
                }
                btn.classList.toggle('is-auth-loading', loading);
                btn.disabled = loading;
                btn.setAttribute('aria-busy', loading ? 'true' : 'false');
                if (labelNode) {
                    labelNode.textContent = loading
                        ? String(loadingLabel || 'Syncing Account...')
                        : (btn.dataset.defaultLabel || labelNode.textContent);
                }
            });
        }

        function waitForReviewAuthHandshake() {
            if (reviewAuthHandshakePromise) return reviewAuthHandshakePromise;
            setLeaveReviewButtonsLoading(true, 'Syncing Google Session...');
            const auth = ensureFirebaseAuthService();
            if (!auth || typeof auth.onAuthStateChanged !== 'function') {
                reviewAuthHandshakeSettled = true;
                setLeaveReviewButtonsLoading(false);
                reviewAuthHandshakePromise = Promise.resolve({ ...emptyReviewIdentityState });
                return reviewAuthHandshakePromise;
            }

            reviewAuthHandshakePromise = new Promise((resolve) => {
                let settled = false;
                let unsubscribe = null;
                const finalize = (user) => {
                    if (settled) return;
                    settled = true;
                    let identity = mapFirebaseUserToReviewIdentity(user || auth.currentUser || firebaseAuthUser || null);
                    setCurrentUserProfileFromIdentity(identity);
                    if (hasVerifiedReviewIdentity(identity)) {
                        identity = cacheReviewIdentity(identity.email, identity.displayName, identity.photoURL, identity);
                    }
                    reviewAuthHandshakeSettled = true;
                    setLeaveReviewButtonsLoading(false);
                    try { if (unsubscribe) unsubscribe(); } catch {}
                    resolve(identity);
                };

                const fallbackTimer = setTimeout(() => {
                    finalize(auth.currentUser || firebaseAuthUser || null);
                }, 9000);

                try {
                    unsubscribe = auth.onAuthStateChanged((user) => {
                        clearTimeout(fallbackTimer);
                        finalize(user || null);
                    }, () => {
                        clearTimeout(fallbackTimer);
                        finalize(auth.currentUser || firebaseAuthUser || null);
                    });
                } catch {
                    clearTimeout(fallbackTimer);
                    finalize(auth.currentUser || firebaseAuthUser || null);
                }
            });

            return reviewAuthHandshakePromise;
        }

        function setReviewPublicIdentity(identity = {}) {
            const normalized = normalizeReviewIdentity(identity);
            const show = hasVerifiedReviewIdentity(normalized);
            if (reviewPublicIdentity) {
                reviewPublicIdentity.hidden = !show;
            }
            if (!show) {
                if (reviewPublicAvatar) reviewPublicAvatar.removeAttribute('src');
                return;
            }
            const name = String(normalized.displayName || normalized.name || deriveNameFromEmail(normalized.email) || 'Verified Reviewer').trim() || 'Verified Reviewer';
            const photo = normalizeReviewPhotoUrl(normalized.photoURL || '');
            if (reviewPublicName) {
                reviewPublicName.textContent = name;
            }
            if (reviewPublicPostingText) {
                reviewPublicPostingText.textContent = `Posting publicly as ${name} on hailifugh.com`;
            }
            if (reviewPublicAvatar) {
                if (photo) reviewPublicAvatar.src = photo;
                else reviewPublicAvatar.removeAttribute('src');
            }
        }

        function setReviewModalIdentityOverlay(identity = {}) {
            const normalized = normalizeReviewIdentity(identity);
            const show = hasVerifiedReviewIdentity(normalized);
            if (reviewModalHeaderDefault) {
                reviewModalHeaderDefault.hidden = true;
            }
            if (reviewModalIdentityOverlay) {
                reviewModalIdentityOverlay.hidden = false;
            }
            const name = String(
                normalized.displayName ||
                normalized.name ||
                deriveNameFromEmail(normalized.email) ||
                'Verified Client'
            ).trim() || 'Verified Client';
            const photo = normalizeReviewPhotoUrl(normalized.photoURL || '');
            if (reviewModalIdentityName) reviewModalIdentityName.textContent = name;
            if (reviewModalIdentityMeta) reviewModalIdentityMeta.textContent = 'Posting publicly on hailifugh.com and across Google';
            if (reviewModalIdentityAvatar) {
                if (show && photo) reviewModalIdentityAvatar.src = photo;
                else reviewModalIdentityAvatar.removeAttribute('src');
            }
        }

        function setVerifiedClientBadge(identity = {}) {
            const normalized = normalizeReviewIdentity(identity);
            const show = hasVerifiedReviewIdentity(normalized);
            if (verifiedClientBadge) {
                verifiedClientBadge.hidden = !show;
            }
            if (!show) {
                if (verifiedClientAvatar) verifiedClientAvatar.removeAttribute('src');
                return;
            }
            const photo = normalizeReviewPhotoUrl(normalized.photoURL || '');
            if (verifiedClientAvatar) {
                if (photo) verifiedClientAvatar.src = photo;
                else verifiedClientAvatar.removeAttribute('src');
            }
        }

        function setLegacyIdentityFieldsVisibility(showIdentityFields) {
            const show = !!showIdentityFields;
            if (reviewForm) {
                reviewForm.classList.toggle('is-identity-locked', !show);
            }
            if (legacyIdentityNameGroup) legacyIdentityNameGroup.hidden = !show;
            if (legacyIdentityEmailGroup) legacyIdentityEmailGroup.hidden = !show;
        }

        function setDefaultReviewRating() {
            if (!reviewForm) return;
            const starFive = reviewForm.querySelector('#star5');
            if (starFive) starFive.checked = true;
        }

        function focusReviewCommentField() {
            try { reviewCommentInput?.focus(); } catch {}
        }

        function normalizeReviewSelectionList(value, opts = {}) {
            const allowObjects = !!opts.allowObjects;
            const output = [];
            const pushValue = (entry) => {
                if (entry == null || typeof entry === 'boolean') return;
                if (Array.isArray(entry)) {
                    entry.forEach(pushValue);
                    return;
                }
                if (allowObjects && entry && typeof entry === 'object') {
                    const objectName = String(
                        entry.name ||
                        entry.fileName ||
                        entry.label ||
                        entry.value ||
                        ''
                    ).trim();
                    if (objectName) output.push(objectName);
                    return;
                }
                const text = String(entry || '').trim();
                if (!text) return;
                if (text.startsWith('[') && text.endsWith(']')) {
                    try {
                        const parsed = JSON.parse(text);
                        if (Array.isArray(parsed)) {
                            parsed.forEach(pushValue);
                            return;
                        }
                    } catch {}
                }
                const parts = text.includes(',') ? text.split(',') : [text];
                parts.forEach((part) => {
                    const item = String(part || '').trim();
                    if (item) output.push(item);
                });
            };
            pushValue(value);
            return Array.from(new Set(output));
        }

        function updateReviewServiceOptionStyles() {
            reviewServiceOptionInputs.forEach((input) => {
                const host = input && typeof input.closest === 'function'
                    ? input.closest('.review-service-option')
                    : null;
                if (!host) return;
                host.classList.toggle('is-selected', !!input.checked);
            });
        }

        function getSelectedReviewLikeTags() {
            const values = reviewLikeTagButtons.map((btn) => {
                if (!btn || !btn.classList.contains('is-selected')) return '';
                return String(btn.dataset.reviewLikeTag || btn.textContent || '').trim();
            }).filter(Boolean);
            return normalizeReviewSelectionList(values);
        }

        function getSelectedReviewServices() {
            const values = reviewServiceOptionInputs.map((input) => {
                if (!input || !input.checked) return '';
                return String(input.value || '').trim();
            }).filter(Boolean);
            return normalizeReviewSelectionList(values);
        }

        function getSelectedReviewPhotoNames() {
            if (reviewPhotoInput && reviewPhotoInput.files && reviewPhotoInput.files.length) {
                const fileNames = Array.from(reviewPhotoInput.files).map((file) => String(file?.name || '').trim()).filter(Boolean);
                return normalizeReviewSelectionList(fileNames, { allowObjects: true });
            }
            if (reviewPhotoNamesInput && reviewPhotoNamesInput.value) {
                return normalizeReviewSelectionList(reviewPhotoNamesInput.value, { allowObjects: true });
            }
            return [];
        }

        function updateReviewPhotoStatus(photoNames = null) {
            if (!reviewPhotoStatus) return;
            const names = Array.isArray(photoNames) ? photoNames : getSelectedReviewPhotoNames();
            const count = names.length;
            reviewPhotoStatus.textContent = count
                ? `${count} photo${count === 1 ? '' : 's'} selected`
                : 'No photos selected';
        }

        function syncReviewLikeTagInput() {
            const likes = getSelectedReviewLikeTags();
            if (reviewLikesInput) {
                reviewLikesInput.value = likes.length ? JSON.stringify(likes) : '';
            }
            return likes;
        }

        function syncReviewServiceInput() {
            updateReviewServiceOptionStyles();
            const services = getSelectedReviewServices();
            if (reviewServicesInput) {
                reviewServicesInput.value = services.length ? JSON.stringify(services) : '';
            }
            return services;
        }

        function syncReviewPhotoInput() {
            const photoNames = getSelectedReviewPhotoNames();
            if (reviewPhotoNamesInput) {
                reviewPhotoNamesInput.value = photoNames.length ? JSON.stringify(photoNames) : '';
            }
            updateReviewPhotoStatus(photoNames);
            return photoNames;
        }

        function setReviewQuestionnaireState(payload = {}) {
            const likes = normalizeReviewSelectionList(
                payload.likes ?? payload.reviewLikes ?? payload.likeTags ?? []
            );
            const services = normalizeReviewSelectionList(
                payload.services ??
                payload.reviewServices ??
                payload.servicesReceived ??
                payload.serviceTags ??
                []
            );
            const photoNames = normalizeReviewSelectionList(
                payload.photoNames ?? payload.reviewPhotoNames ?? payload.photos ?? [],
                { allowObjects: true }
            );

            reviewLikeTagButtons.forEach((btn) => {
                const tag = String(btn?.dataset?.reviewLikeTag || btn?.textContent || '').trim();
                const selected = likes.includes(tag);
                btn.classList.toggle('is-selected', selected);
                btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
            });
            reviewServiceOptionInputs.forEach((input) => {
                const label = String(input?.value || '').trim();
                input.checked = services.includes(label);
            });
            updateReviewServiceOptionStyles();

            if (reviewPhotoInput && (!photoNames.length || !(payload.keepFileSelection === true))) {
                try { reviewPhotoInput.value = ''; } catch {}
            }
            if (reviewPhotoNamesInput) {
                reviewPhotoNamesInput.value = photoNames.length ? JSON.stringify(photoNames) : '';
            }

            syncReviewLikeTagInput();
            syncReviewServiceInput();
            updateReviewPhotoStatus(photoNames);
        }

        function resetReviewQuestionnaireState() {
            setReviewQuestionnaireState({ likes: [], services: [], photoNames: [] });
            if (reviewPhotoInput) {
                try { reviewPhotoInput.value = ''; } catch {}
            }
            if (reviewPhotoNamesInput) reviewPhotoNamesInput.value = '';
            updateReviewPhotoStatus([]);
        }

        function collectReviewQuestionnaireState() {
            const likes = syncReviewLikeTagInput();
            const services = syncReviewServiceInput();
            const photoNames = syncReviewPhotoInput();
            return { likes, services, photoNames };
        }

        function createReviewGoogleAuthProvider() {
            if (!(window.firebase && firebase.auth && typeof firebase.auth.GoogleAuthProvider === 'function')) {
                return null;
            }
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');
            provider.addScope('profile');
            return provider;
        }

        function runWithSuppressedPopupWarnings(task) {
            if (typeof task !== 'function') return Promise.resolve(null);
            if (!window.console || typeof console.warn !== 'function') {
                try {
                    return Promise.resolve(task());
                } catch (error) {
                    return Promise.reject(error);
                }
            }
            const warningNeedle = 'cross-origin-opener-policy policy would block the window.closed call';
            const originalWarn = console.warn;
            const wrappedWarn = function () {
                const text = String(arguments[0] || '').toLowerCase();
                if (text.includes(warningNeedle)) return;
                return originalWarn.apply(console, arguments);
            };
            console.warn = wrappedWarn;
            let result;
            try {
                result = task();
            } catch (error) {
                if (console.warn === wrappedWarn) console.warn = originalWarn;
                return Promise.reject(error);
            }
            return Promise.resolve(result).finally(() => {
                if (console.warn === wrappedWarn) {
                    console.warn = originalWarn;
                }
            });
        }

        async function signInReviewIdentityWithGooglePopup(reasonCode = '') {
            const auth = ensureFirebaseAuthService();
            if (!auth) return { ...emptyReviewIdentityState, code: 'auth-unavailable' };
            try {
                const provider = createReviewGoogleAuthProvider();
                if (!provider) return { ...emptyReviewIdentityState, code: 'google-provider-unavailable' };
                const result = await runWithSuppressedPopupWarnings(() => auth.signInWithPopup(provider));
                const user = (result && result.user) || auth.currentUser || null;
                const identity = mapFirebaseUserToReviewIdentity(user);
                if (!hasVerifiedReviewIdentity(identity)) return { ...emptyReviewIdentityState, code: 'google-email-missing' };
                firebaseAuthUser = user || firebaseAuthUser;
                cacheReviewIdentity(identity.email, identity.displayName, identity.photoURL, identity);
                return { ...identity, code: '' };
            } catch (error) {
                const code = String(error && (error.code || error.message) ? (error.code || error.message) : reasonCode || 'google-popup-failed').toLowerCase();
                return { ...emptyReviewIdentityState, code };
            }
        }

        function isLegacyReviewMode() {
            return reviewUiState === 'legacy-manual';
        }

        function syncReviewSubmitButtons(identityOverride = null) {
            const identity = identityOverride && typeof identityOverride === 'object'
                ? identityOverride
                : resolveCurrentReviewIdentity();
            const legacyMode = isLegacyReviewMode();
            const composerReady = reviewUiState === 'composer-ready';
            reviewSubmitButtons.forEach((btn) => {
                if (!btn) return;
                const isLegacyBtn = btn.classList.contains('review-legacy-submit');
                if (legacyMode) {
                    btn.disabled = !isLegacyBtn;
                    return;
                }
                if (composerReady) {
                    btn.disabled = isLegacyBtn;
                    return;
                }
                btn.disabled = true;
            });
        }

        function primeSilentIdentityAcquisition(opts = {}) {
            const force = !!opts.force;
            if (reviewSilentIdentityPrimed && !force) return;
            reviewSilentIdentityPrimed = true;

            try { ensureFirebaseApp(); } catch {}
            try { ensureFirebaseAuthService(); } catch {}
            startReviewIdentityAuthSync();

            const currentIdentity = resolveCurrentReviewIdentity();
            if (hasVerifiedReviewIdentity(currentIdentity)) {
                applyReviewIdentityToForm(currentIdentity, { preserveIfFilled: false });
                setReviewUiState('composer-ready');
                clearReviewIdentityFailureState();
                syncReviewSubmitButtons(currentIdentity);
                return;
            }
            setReviewUiState('auth-gate');
            syncReviewSubmitButtons(emptyReviewIdentityState);
        }

        function warmIdentityBeforeTestimonials() {
            if (reviewIdentityWarmupObserver) {
                try { reviewIdentityWarmupObserver.disconnect(); } catch {}
                reviewIdentityWarmupObserver = null;
            }
            const reviewsSection = document.getElementById('reviews') || document.querySelector('.modern-review-section');
            if (!reviewsSection || typeof IntersectionObserver !== 'function') {
                primeSilentIdentityAcquisition({ oneTapPrompt: true });
                return;
            }
            reviewIdentityWarmupObserver = new IntersectionObserver((entries, observer) => {
                const matched = Array.isArray(entries) && entries.some((entry) => entry && entry.isIntersecting);
                if (!matched) return;
                primeSilentIdentityAcquisition({ oneTapPrompt: true });
                try { observer.disconnect(); } catch {}
                reviewIdentityWarmupObserver = null;
            }, {
                root: null,
                rootMargin: '650px 0px 650px 0px',
                threshold: 0.01
            });
            reviewIdentityWarmupObserver.observe(reviewsSection);
        }

        setLeaveReviewButtonsLoading(false);

        function setReviewFormMode(mode) {
            const isEdit = mode === 'edit';
            if (reviewSubmitBtn) {
                reviewSubmitBtn.innerHTML = isEdit
                    ? '<i class="fas fa-pen"></i> Post Update'
                    : '<i class="fas fa-paper-plane"></i> Post';
            }
            if (reviewLegacySubmitBtn) {
                reviewLegacySubmitBtn.innerHTML = isEdit
                    ? '<i class="fas fa-pen"></i> Update Legacy Review'
                    : '<i class="fas fa-paper-plane"></i> Submit Legacy Review';
            }
            if (reviewModalTitle) {
                reviewModalTitle.textContent = 'HAILIFU BRILLIANT INSTALLATION';
            }
            if (reviewModalTitleEcho) {
                reviewModalTitleEcho.textContent = 'HAILIFU BRILLIANT INSTALLATION';
            }
            if (reviewModalSubtitle) {
                reviewModalSubtitle.textContent = 'Posting publicly on hailifugh.com and across Google';
            }
        }

        function clearReviewFormNotice() {
            if (!formSuccess) return;
            formSuccess.textContent = '';
            formSuccess.style.display = 'none';
        }

        function showReviewFormNotice(message) {
            if (!formSuccess) return;
            const text = String(message || '').trim();
            if (!text) {
                clearReviewFormNotice();
                return;
            }
            formSuccess.textContent = text;
            formSuccess.style.display = 'block';
        }

        function setReviewIdentityBannerMessage(message) {
            const text = String(message || '').trim();
            if (reviewIdentityText) {
                reviewIdentityText.textContent = text;
            } else if (reviewIdentityBanner) {
                reviewIdentityBanner.textContent = text;
            }
        }

        function setReviewIdentityRetryVisible(isVisible, reasonCode = '') {
            const visible = !!isVisible;
            const code = String(reasonCode || '').trim().toLowerCase();
            if (reviewIdentityRetryBtn) {
                reviewIdentityRetryBtn.hidden = !visible;
                reviewIdentityRetryBtn.style.display = visible ? 'inline-flex' : 'none';
            }
            if (reviewIdentityBanner) {
                reviewIdentityBanner.classList.toggle('is-error', visible);
            }
            reviewIdentityLastFailureCode = visible ? code : '';
        }

        function clearReviewIdentityFailureState() {
            setReviewIdentityRetryVisible(false);
        }

        function setReviewIdentityLoading(isLoading, label = 'Loading Identity...') {
            if (!reviewIdentityBanner) return;
            const loading = !!isLoading;
            reviewIdentityBanner.classList.toggle('is-loading', loading);
            if (reviewIdentitySpinner) {
                reviewIdentitySpinner.setAttribute('aria-hidden', loading ? 'false' : 'true');
            }
            if (loading) {
                reviewIdentityBanner.classList.remove('is-missing');
                clearReviewIdentityFailureState();
                if (label) setReviewIdentityBannerMessage(label);
                if (reviewGoogleSignInBtn) reviewGoogleSignInBtn.disabled = true;
                reviewSubmitButtons.forEach((btn) => {
                    if (btn) btn.disabled = true;
                });
            } else {
                if (reviewGoogleSignInBtn) reviewGoogleSignInBtn.disabled = false;
                syncReviewSubmitButtons(resolveCurrentReviewIdentity());
            }
        }

        function resetReviewEditState() {
            editingReviewId = '';
            setReviewFormMode('create');
        }

        function titleCaseEmailName(text) {
            const raw = String(text || '').replace(/\s+/g, ' ').trim();
            if (!raw) return '';
            return raw.split(' ').map((word) => {
                const part = String(word || '').trim();
                if (!part) return '';
                return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
            }).filter(Boolean).join(' ');
        }

        function deriveNameFromEmail(email) {
            const safeEmail = toSafeEmailAddress(email);
            if (!safeEmail) return '';
            const localPart = String(safeEmail.split('@')[0] || '').split('+')[0];
            const normalized = localPart.replace(/[._-]+/g, ' ').replace(/\s+/g, ' ').trim();
            return titleCaseEmailName(normalized);
        }

        function normalizeReviewIdentity(input = {}) {
            const source = input && typeof input === 'object' ? input : {};
            const email = toSafeEmailAddress(
                source.email ||
                source.reviewEmail ||
                source.reviewerEmail ||
                source.userEmail ||
                source.authorEmail ||
                source.identityEmail
            );
            const displayNameRaw = String(
                source.displayName ||
                source.name ||
                source.reviewerDisplayName ||
                source.authorName ||
                source.fullName ||
                ''
            ).trim();
            const displayName = displayNameRaw || deriveNameFromEmail(email) || '';
            const photoURL = normalizeReviewPhotoUrl(
                source.photoURL ||
                source.reviewerPhotoURL ||
                source.authorImage ||
                source.avatar ||
                (source.reviewerIdentity && source.reviewerIdentity.photoURL) ||
                ''
            );
            const providerId = String(
                source.providerId ||
                source.identityProvider ||
                (source.reviewerIdentity && source.reviewerIdentity.provider) ||
                ''
            ).trim().toLowerCase();
            const uid = String(
                source.uid ||
                source.identityUid ||
                source.reviewerUid ||
                (source.reviewerIdentity && source.reviewerIdentity.uid) ||
                ''
            ).trim();
            const explicitVerifiedSource = source.verified ?? source.identityVerified ?? (source.reviewerIdentity && source.reviewerIdentity.verified);
            const explicitVerified = typeof explicitVerifiedSource === 'boolean'
                ? explicitVerifiedSource
                : ['1', 'true', 'yes', 'verified'].includes(String(explicitVerifiedSource || '').trim().toLowerCase());
            const verified = Boolean(explicitVerified || (email && providerId === 'google.com'));

            return {
                name: displayName || 'Client',
                displayName: displayName || 'Client',
                email,
                photoURL,
                providerId: providerId || (verified && email ? 'google.com' : ''),
                uid,
                verified
            };
        }

        function publishGlobalReviewAuthProfile(identity = {}) {
            const normalized = normalizeReviewIdentity(identity);
            const verified = hasVerifiedReviewIdentity(normalized);
            const profile = {
                verified,
                displayName: verified ? String(normalized.displayName || normalized.name || '').trim() : '',
                photoURL: verified ? normalizeReviewPhotoUrl(normalized.photoURL || '') : '',
                email: verified ? toSafeEmailAddress(normalized.email) : '',
                providerId: verified ? String(normalized.providerId || '').trim().toLowerCase() : '',
                uid: verified ? String(normalized.uid || '').trim() : '',
                updatedAt: Date.now()
            };
            setCurrentUserProfileFromIdentity({
                ...normalized,
                verified
            });
            try {
                window.HAILIFU_AUTH_PROFILE = { ...profile };
            } catch {}
            return profile;
        }

        function setGlobalReviewIdentityState(identity = {}) {
            reviewIdentityState = normalizeReviewIdentity(identity);
            try {
                window.HAILIFU_REVIEW_IDENTITY = { ...reviewIdentityState };
                const current = window.HAILIFU_REVIEW_STATE && typeof window.HAILIFU_REVIEW_STATE === 'object'
                    ? window.HAILIFU_REVIEW_STATE
                    : {};
                window.HAILIFU_REVIEW_STATE = {
                    ...current,
                    identity: { ...reviewIdentityState },
                    authProfile: publishGlobalReviewAuthProfile(reviewIdentityState)
                };
            } catch {}
            publishGlobalReviewAuthProfile(reviewIdentityState);
            return { ...reviewIdentityState };
        }

        function mapFirebaseUserToReviewIdentity(user) {
            if (!user || typeof user !== 'object') return { ...emptyReviewIdentityState };
            const providerData = Array.isArray(user.providerData) ? user.providerData : [];
            const providerFromData = providerData.find((entry) => String(entry && entry.providerId ? entry.providerId : '').trim());
            const googleProvider = providerData.find((entry) => String(entry && entry.providerId ? entry.providerId : '').trim().toLowerCase() === 'google.com');
            const providerId = String((googleProvider && googleProvider.providerId) || (providerFromData && providerFromData.providerId) || '').trim().toLowerCase();
            const isGoogleIdentity = providerId === 'google.com' || providerData.some((entry) => String(entry && entry.providerId ? entry.providerId : '').trim().toLowerCase() === 'google.com');
            const base = normalizeReviewIdentity({
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                providerId,
                uid: user.uid || '',
                verified: !!(user.email && isGoogleIdentity)
            });
            if (base.email && isGoogleIdentity && base.providerId !== 'google.com') {
                return {
                    ...base,
                    providerId: 'google.com',
                    verified: true
                };
            }
            return base;
        }

        function readCachedReviewIdentity() {
            try {
                const email = toSafeEmailAddress(localStorage.getItem(reviewIdentityEmailStorageKey));
                const name = String(localStorage.getItem(reviewIdentityNameStorageKey) || '').trim();
                const photoURL = String(localStorage.getItem(reviewIdentityPhotoStorageKey) || '').trim();
                const providerId = String(localStorage.getItem(reviewIdentityProviderStorageKey) || '').trim().toLowerCase();
                const uid = String(localStorage.getItem(reviewIdentityUidStorageKey) || '').trim();
                const verifiedRaw = String(localStorage.getItem(reviewIdentityVerifiedStorageKey) || '').trim().toLowerCase();
                const verified = ['1', 'true', 'yes', 'verified'].includes(verifiedRaw);
                return normalizeReviewIdentity({ email, name, photoURL, providerId, uid, verified });
            } catch {
                return { ...emptyReviewIdentityState };
            }
        }

        function normalizeReviewPhotoUrl(value) {
            const raw = String(value || '').trim();
            if (!raw) return '';
            try {
                const parsed = new URL(raw, window.location.origin);
                if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
                    return parsed.toString();
                }
            } catch {}
            return '';
        }

        function cacheReviewIdentity(email, name, photoURL = '', meta = null) {
            const normalized = normalizeReviewIdentity({
                ...(meta && typeof meta === 'object' ? meta : {}),
                email,
                name,
                photoURL
            });
            if (!normalized.email) return normalized;
            try {
                localStorage.setItem(reviewIdentityEmailStorageKey, normalized.email);
                localStorage.setItem(reviewIdentityNameStorageKey, normalized.displayName || deriveNameFromEmail(normalized.email));
                if (normalized.photoURL) localStorage.setItem(reviewIdentityPhotoStorageKey, normalized.photoURL);
                else localStorage.removeItem(reviewIdentityPhotoStorageKey);
                if (normalized.providerId) localStorage.setItem(reviewIdentityProviderStorageKey, normalized.providerId);
                else localStorage.removeItem(reviewIdentityProviderStorageKey);
                if (normalized.uid) localStorage.setItem(reviewIdentityUidStorageKey, normalized.uid);
                else localStorage.removeItem(reviewIdentityUidStorageKey);
                if (normalized.verified) localStorage.setItem(reviewIdentityVerifiedStorageKey, '1');
                else localStorage.removeItem(reviewIdentityVerifiedStorageKey);
            } catch {}
            setGlobalReviewIdentityState(normalized);
            return normalized;
        }

        function clearCachedReviewIdentity() {
            try {
                localStorage.removeItem(reviewIdentityEmailStorageKey);
                localStorage.removeItem(reviewIdentityNameStorageKey);
                localStorage.removeItem(reviewIdentityPhotoStorageKey);
                localStorage.removeItem(reviewIdentityProviderStorageKey);
                localStorage.removeItem(reviewIdentityUidStorageKey);
                localStorage.removeItem(reviewIdentityVerifiedStorageKey);
            } catch {}
            setGlobalReviewIdentityState(emptyReviewIdentityState);
        }

        function getCurrentFirebaseAuthProfile() {
            const observed = mapFirebaseUserToReviewIdentity(firebaseAuthUser);
            if (observed.email) return observed;
            const auth = ensureFirebaseAuthService();
            const direct = mapFirebaseUserToReviewIdentity(auth && auth.currentUser ? auth.currentUser : null);
            if (direct.email) return direct;
            return { ...emptyReviewIdentityState };
        }

        function getPersistedFirebaseAuthEmail() {
            try {
                if (!window.localStorage) return '';
                for (let i = 0; i < localStorage.length; i += 1) {
                    const key = String(localStorage.key(i) || '');
                    if (!/^firebase:authUser:/i.test(key)) continue;
                    const raw = localStorage.getItem(key);
                    if (!raw) continue;
                    const parsed = JSON.parse(raw);
                    const email = toSafeEmailAddress(parsed && parsed.email ? parsed.email : '');
                    if (email) return email;
                }
            } catch {}
            return '';
        }

        function getReviewIdentityFailureMessage(code) {
            const normalized = String(code || '').toLowerCase();
            if (!normalized) return 'Google sign-in is required to submit a review.';
            if (normalized.includes('configuration-not-found')) return 'Google sign-in is not configured in Firebase Auth.';
            if (normalized.includes('operation-not-allowed')) return 'Google sign-in is disabled in Firebase Auth. Please enable Google provider.';
            if (normalized.includes('unauthorized-domain') || normalized.includes('unregistered_origin') || normalized.includes('one-tap-not-displayed:unregistered_origin')) return 'Google authorization is not enabled for this domain yet.';
            if (normalized.includes('popup-blocked') || normalized.includes('cancelled-popup-request')) return 'Google sign-in popup was blocked. Allow popups and retry.';
            if (normalized.includes('popup-closed-by-user')) return 'Google sign-in popup was closed. Retry to verify.';
            if (normalized.includes('auth-unavailable') || normalized.includes('google-provider-unavailable')) return 'Google sign-in is unavailable in this build.';
            return 'Google sign-in is required to submit a review.';
        }

        function showReviewIdentityRetryState(code = '') {
            const normalized = String(code || '').trim().toLowerCase();
            const message = getReviewIdentityFailureMessage(normalized);
            clearReviewFormNotice();
            if (reviewIdentityBanner) {
                reviewIdentityBanner.classList.add('is-missing');
            }
            if (message) setReviewIdentityBannerMessage(message);
            setReviewIdentityRetryVisible(true, normalized);
            if (!isLegacyReviewMode()) {
                setReviewUiState('auth-gate');
            }
            if (reviewGoogleSignInBtn) reviewGoogleSignInBtn.disabled = false;
            syncReviewSubmitButtons(emptyReviewIdentityState);
        }

        async function requestReviewIdentityFromOneTap(reasonCode = '') {
            setReviewIdentityLoading(true, 'Loading Identity...');
            let loadingCleared = false;
            try {
                const currentIdentity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
                if (hasVerifiedReviewIdentity(currentIdentity)) {
                    setReviewIdentityLoading(false);
                    loadingCleared = true;
                    clearReviewIdentityFailureState();
                    return { identity: currentIdentity, code: '' };
                }

                const oneTapIdentity = await requestReviewIdentityViaOneTap(reasonCode);
                if (oneTapIdentity && oneTapIdentity.email) {
                    setReviewIdentityLoading(false);
                    loadingCleared = true;
                    const applied = applyReviewIdentityToForm(oneTapIdentity, { preserveIfFilled: false });
                    clearReviewIdentityFailureState();
                    return { identity: applied, code: '' };
                }
                const code = String((oneTapIdentity && oneTapIdentity.code) || reasonCode || 'identity-required').toLowerCase();
                const fallbackIdentity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
                showReviewIdentityRetryState(code);
                return { identity: fallbackIdentity, code };
            } finally {
                if (!loadingCleared) {
                    setReviewIdentityLoading(false);
                }
            }
        }

        async function requestReviewIdentityViaOneTap(reasonCode = '') {
            const current = resolveCurrentReviewIdentity();
            if (hasVerifiedReviewIdentity(current)) return { ...current, code: '' };
            const oneTapIdentity = await tryAutoReviewIdentityWithGoogleOneTap({ reasonCode });
            if (oneTapIdentity && oneTapIdentity.email) return oneTapIdentity;
            const oneTapCode = String((oneTapIdentity && oneTapIdentity.code) || reasonCode || 'identity-required').toLowerCase();
            return {
                ...emptyReviewIdentityState,
                code: oneTapCode
            };
        }

        async function tryAutoReviewIdentityWithGoogleOneTap(opts = {}) {
            const reasonCode = String(opts && opts.reasonCode ? opts.reasonCode : '').toLowerCase();
            const result = await runReviewOneTapPrompt(reasonCode || 'identity-required');
            if (result && result.email) return result;
            return {
                ...emptyReviewIdentityState,
                code: String((result && result.code) || reasonCode || 'identity-required').toLowerCase()
            };
        }

        async function syncReviewIdentityForModalEntry(opts = {}) {
            const forceLegacy = !!opts.forceLegacy;
            const shouldPromptOneTap = opts.autoPromptOneTap !== false;
            let identity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });

            if (forceLegacy) {
                setReviewUiState('legacy-manual', { focus: true });
                syncReviewSubmitButtons(identity);
                return { identity, code: '' };
            }

            if (hasVerifiedReviewIdentity(identity)) {
                setReviewUiState('composer-ready');
                clearReviewIdentityFailureState();
                clearReviewFormNotice();
                setDefaultReviewRating();
                focusReviewCommentField();
                syncReviewSubmitButtons(identity);
                return { identity, code: '' };
            }

            setReviewUiState('auth-gate', { focus: !shouldPromptOneTap });
            syncReviewSubmitButtons(identity);

            if (!shouldPromptOneTap) {
                return { identity, code: 'identity-required' };
            }

            const oneTapResult = await requestReviewIdentityFromOneTap('review-modal-open');
            identity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
            if (hasVerifiedReviewIdentity(identity)) {
                setReviewUiState('composer-ready');
                clearReviewIdentityFailureState();
                clearReviewFormNotice();
                setDefaultReviewRating();
                focusReviewCommentField();
                syncReviewSubmitButtons(identity);
                return { identity, code: '' };
            }

            const code = String((oneTapResult && oneTapResult.code) || 'identity-required').toLowerCase();
            setReviewUiState('auth-gate', { focus: true });
            syncReviewSubmitButtons(identity);
            return { identity, code };
        }

        function resolveCurrentReviewIdentity() {
            const cached = readCachedReviewIdentity();
            const stateIdentity = normalizeReviewIdentity(reviewIdentityState);
            const authProfile = getCurrentFirebaseAuthProfile();
            const authEmail = toSafeEmailAddress(authProfile.email);
            const stateEmail = toSafeEmailAddress(stateIdentity.email);
            const persistedAuthEmail = getPersistedFirebaseAuthEmail();
            const email = authEmail || stateEmail || persistedAuthEmail;
            if (!email) return { ...emptyReviewIdentityState };
            const cachedMatches = cached.email && cached.email === email;
            const stateMatches = stateEmail && stateEmail === email;
            const displayName = (authEmail === email ? authProfile.displayName : '') || (stateMatches ? String(stateIdentity.displayName || stateIdentity.name || '').trim() : '') || (cachedMatches ? String(cached.displayName || cached.name || '').trim() : '') || deriveNameFromEmail(email) || 'Client';
            const authPhotoURL = authEmail === email ? normalizeReviewPhotoUrl(authProfile.photoURL) : '';
            const statePhotoURL = stateMatches ? normalizeReviewPhotoUrl(stateIdentity.photoURL) : '';
            const cachedPhotoURL = cachedMatches ? normalizeReviewPhotoUrl(cached.photoURL) : '';
            const photoURL = authPhotoURL || statePhotoURL || cachedPhotoURL;
            const providerId = (authEmail === email ? String(authProfile.providerId || '').trim().toLowerCase() : '') || (stateMatches ? String(stateIdentity.providerId || '').trim().toLowerCase() : '') || (cachedMatches ? String(cached.providerId || '').trim().toLowerCase() : '');
            const uid = (authEmail === email ? String(authProfile.uid || '').trim() : '') || (stateMatches ? String(stateIdentity.uid || '').trim() : '') || (cachedMatches ? String(cached.uid || '').trim() : '');
            const verified = Boolean((authEmail === email ? authProfile.verified : false) || (stateMatches ? stateIdentity.verified : false) || (cachedMatches ? cached.verified : false) || (email && providerId === 'google.com'));
            const resolved = normalizeReviewIdentity({
                email,
                displayName,
                photoURL,
                providerId,
                uid,
                verified
            });
            if (resolved.email) setGlobalReviewIdentityState(resolved);
            return resolved;
        }
        function applyReviewIdentityToForm(identity, opts = {}) {
            const preserveIfFilled = !!opts.preserveIfFilled;
            const nameInput = document.getElementById('reviewerName');
            const emailInput = document.getElementById('reviewerEmail');
            const normalizedIdentity = normalizeReviewIdentity(identity);
            const rawName = String(normalizedIdentity.displayName || normalizedIdentity.name || '').trim();
            const rawEmail = toSafeEmailAddress(normalizedIdentity.email);
            const rawPhotoURL = normalizeReviewPhotoUrl(normalizedIdentity.photoURL);
            const safeName = rawName || deriveNameFromEmail(rawEmail) || 'Client';

            if (nameInput && (!preserveIfFilled || !String(nameInput.value || '').trim())) {
                nameInput.value = safeName;
            }
            if (emailInput && (!preserveIfFilled || !String(emailInput.value || '').trim())) {
                emailInput.value = rawEmail;
            }

            const activeName = String(nameInput && nameInput.value ? nameInput.value : safeName).trim() || 'Client';
            const activeEmail = toSafeEmailAddress(emailInput && emailInput.value ? emailInput.value : rawEmail);
            const cached = readCachedReviewIdentity();
            const cachedPhotoURL = activeEmail && cached.email === activeEmail ? normalizeReviewPhotoUrl(cached.photoURL) : '';
            const activePhotoURL = rawPhotoURL || cachedPhotoURL;
            const activeProviderId = normalizedIdentity.providerId || (activeEmail && cached.email === activeEmail ? String(cached.providerId || '').trim().toLowerCase() : '');
            const activeUid = normalizedIdentity.uid || (activeEmail && cached.email === activeEmail ? String(cached.uid || '').trim() : '');
            const activeVerified = Boolean(normalizedIdentity.verified || (activeEmail && cached.email === activeEmail && cached.verified) || (activeEmail && activeProviderId === 'google.com'));

            if (reviewIdentityBanner) {
                reviewIdentityBanner.classList.remove('is-ready', 'is-missing', 'is-error');
                if (activeEmail && activeVerified) {
                    reviewIdentityBanner.classList.add('is-ready');
                    setReviewIdentityBannerMessage(`Reviewing as ${activeName} (Verified)`);
                    clearReviewIdentityFailureState();
                } else {
                    reviewIdentityBanner.classList.add('is-missing');
                    setReviewIdentityBannerMessage('Google verification required. Use Retry Google Sign-In to authenticate.');
                }
            }

            if (reviewIdentityAvatar) {
                if (activeEmail && activeVerified && activePhotoURL) {
                    if (reviewIdentityAvatar.src !== activePhotoURL) {
                        reviewIdentityAvatar.src = activePhotoURL;
                    }
                    reviewIdentityAvatar.style.display = 'inline-block';
                } else {
                    reviewIdentityAvatar.removeAttribute('src');
                    reviewIdentityAvatar.style.display = 'none';
                }
            }

            setReviewPublicIdentity({
                email: activeEmail,
                displayName: activeName,
                photoURL: activePhotoURL,
                providerId: activeProviderId,
                uid: activeUid,
                verified: activeVerified
            });
            setVerifiedClientBadge({
                email: activeEmail,
                displayName: activeName,
                photoURL: activePhotoURL,
                providerId: activeProviderId,
                uid: activeUid,
                verified: activeVerified
            });
            setReviewModalIdentityOverlay({
                email: activeEmail,
                displayName: activeName,
                photoURL: activePhotoURL,
                providerId: activeProviderId,
                uid: activeUid,
                verified: activeVerified
            });
            setLegacyIdentityFieldsVisibility(!activeVerified);

            if (activeEmail && activeVerified) {
                if (!isLegacyReviewMode()) {
                    setReviewUiState('composer-ready');
                }
            } else if (!isLegacyReviewMode()) {
                setReviewUiState('auth-gate');
            }

            if (activeEmail) {
                cacheReviewIdentity(activeEmail, activeName, activePhotoURL, {
                    providerId: activeProviderId,
                    uid: activeUid,
                    verified: activeVerified
                });
            }
            const activeIdentity = normalizeReviewIdentity({
                email: activeEmail,
                displayName: activeName,
                photoURL: activePhotoURL,
                providerId: activeProviderId,
                uid: activeUid,
                verified: activeVerified
            });
            if (activeEmail) setGlobalReviewIdentityState(activeIdentity);
            else setGlobalReviewIdentityState(emptyReviewIdentityState);
            syncReviewSubmitButtons(activeIdentity);
            return activeIdentity;
        }

        function syncReviewIdentityFromInputs() {
            const nameInput = document.getElementById('reviewerName');
            const emailInput = document.getElementById('reviewerEmail');
            const activeEmail = toSafeEmailAddress(emailInput && emailInput.value ? emailInput.value : '');
            const cached = readCachedReviewIdentity();
            const inheritedIdentity = activeEmail && cached.email === activeEmail ? cached : reviewIdentityState;
            return applyReviewIdentityToForm({
                ...(inheritedIdentity && typeof inheritedIdentity === 'object' ? inheritedIdentity : {}),
                displayName: String(nameInput && nameInput.value ? nameInput.value : '').trim(),
                email: activeEmail
            }, { preserveIfFilled: true });
        }

        function populateReviewFormFromRecord(review, opts = {}) {
            if (!reviewForm || !review || typeof review !== 'object') return;
            const keepCurrentValues = !!opts.keepCurrentValues;
            const nameInput = document.getElementById('reviewerName');
            const emailInput = document.getElementById('reviewerEmail');
            const commentInput = document.getElementById('reviewComment');
            const ratingValue = Math.max(1, Math.min(5, Number(review.rating) || 0));
            const reviewEmail = toSafeEmailAddress(review.reviewEmail || extractReviewEmail(review));
            const reviewName = String(review.name || deriveNameFromEmail(reviewEmail) || '').trim();
            const reviewComment = String(review.comment || '').trim();

            if (nameInput) nameInput.value = reviewName || String(nameInput.value || '').trim();
            if (emailInput) emailInput.value = reviewEmail || toSafeEmailAddress(emailInput && emailInput.value ? emailInput.value : '');
            if (legacyReviewerNameInput) legacyReviewerNameInput.value = reviewName || String(legacyReviewerNameInput.value || '').trim();
            if (legacyReviewerEmailInput) legacyReviewerEmailInput.value = reviewEmail || toSafeEmailAddress(legacyReviewerEmailInput && legacyReviewerEmailInput.value ? legacyReviewerEmailInput.value : '');

            if (!keepCurrentValues) {
                if (commentInput) commentInput.value = reviewComment;
                if (legacyReviewCommentInput) legacyReviewCommentInput.value = reviewComment;
            }

            if (!keepCurrentValues && ratingValue) {
                const ratingInput = reviewForm.querySelector(`input[name="rating"][value="${ratingValue}"]`);
                if (ratingInput) ratingInput.checked = true;
            }

            setReviewQuestionnaireState({
                likes: review.likes || review.reviewLikes || review.likeTags || [],
                services: review.services || review.reviewServices || review.servicesReceived || review.serviceTags || [],
                photoNames: review.photoNames || review.reviewPhotoNames || []
            });

            const normalized = normalizeReviewIdentity({
                email: reviewEmail,
                displayName: reviewName,
                photoURL: review.reviewerPhotoURL || review.authorImage || '',
                providerId: review.identityProvider || '',
                uid: review.identityUid || '',
                verified: !!review.identityVerified
            });
            if (hasVerifiedReviewIdentity(normalized)) {
                setReviewUiState('composer-ready');
                applyReviewIdentityToForm(normalized, { preserveIfFilled: true });
            } else {
                setReviewUiState('legacy-manual');
                syncReviewSubmitButtons(normalized);
            }
        }

        function enterReviewEditMode(review, opts = {}) {
            if (!review || typeof review !== 'object') return;
            const id = String(review.id || '').trim();
            if (!id) return;
            editingReviewId = id;
            setReviewFormMode('edit');
            populateReviewFormFromRecord(review, opts);
        }

        function getKnownReviewsByEmail(email) {
            const safeEmail = toSafeEmailAddress(email);
            if (!safeEmail) return [];

            const local = getReviews();
            const pending = Array.isArray(firestorePendingReviewsState) ? firestorePendingReviewsState : [];
            const published = Array.isArray(firestorePublishedReviewsState) ? firestorePublishedReviewsState : [];
            const source = [...pending, ...published, ...local];

            const seen = new Set();
            const output = [];

            source.forEach((review) => {
                if (!review || typeof review !== 'object') return;
                const id = String(review.id || '').trim();
                if (id && seen.has(id)) return;
                const candidateEmail = toSafeEmailAddress(review.reviewEmail || extractReviewEmail(review));
                if (candidateEmail !== safeEmail) return;
                if (id) seen.add(id);
                output.push(review);
            });

            return output;
        }

        async function findFirestoreReviewByEmail(email) {
            const safeEmail = toSafeEmailAddress(email);
            if (!safeEmail) return null;
            const firestore = ensureFirebaseFirestoreService();
            if (!firestore) return null;

            const fields = ['reviewEmail', 'email', 'userEmail', 'reviewerEmail'];
            for (let i = 0; i < fields.length; i += 1) {
                try {
                    const snapshot = await firestore
                        .collection(getFirestoreReviewsCollection())
                        .where(fields[i], '==', safeEmail)
                        .limit(1)
                        .get();
                    const records = normalizeFirestoreReviewSnapshot(snapshot);
                    if (records.length) return records[0];
                } catch {}
            }
            return null;
        }

        // 2026-10-01: simple review form. No Google sign-in (Firebase was never set up, so
        // posting always failed). Round 11: reviews go live at once (owner can hide or delete them in Admin).
        if (reviewForm) {
            reviewForm.setAttribute('novalidate', '');
            reviewForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                if (reviewForm.dataset.sending === '1') return;
                clearReviewFormNotice();
                formSuccess?.classList.remove('is-thanks');

                const formData = new FormData(reviewForm);
                const rating = Math.round(Number(formData.get('rating') || 0));
                const comment = String(formData.get('comment') || '').trim().slice(0, 1500);
                const fail = (message, field) => {
                    showReviewFormNotice(message);
                    try { field?.focus({ preventScroll: false }); } catch {}
                };
                if (!(rating >= 1 && rating <= 5)) return fail('Please tap a star to rate us.', document.querySelector('#googleStarRating .google-star'));
                if (/(https?:\/\/|www\.)/i.test(comment)) return fail('Please remove web links from your review.', reviewForm.querySelector('[name="comment"]'));

                // Spam guards (round 11). Robots fill the hidden trap field or post within a
                // second of opening; they get a normal-looking thank-you and nothing is sent.
                const openedAt = Number(reviewForm.dataset.openedAt || 0);
                if (String(formData.get('website') || '').trim() || (openedAt && Date.now() - openedAt < 3000)) {
                    formSuccess?.classList.add('is-thanks');
                    showReviewFormNotice('Thank you! Your review is now on the website.');
                    return;
                }
                const REVIEW_GAP_MS = 10 * 60 * 1000;
                let lastSent = 0;
                try { lastSent = Number(localStorage.getItem('hailifu_review_last_sent') || 0); } catch {}
                if (lastSent && Date.now() - lastSent < REVIEW_GAP_MS) {
                    return fail('Thank you, your review is already on the website. You can post another one in a few minutes.');
                }

                const questionnaireState = collectReviewQuestionnaireState();
                const now = new Date().toISOString();
                const reviewId = `r_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
                const draft = {
                    id: reviewId,
                    rating,
                    comment,
                    likes: questionnaireState.likes,
                    services: questionnaireState.services,
                    used: syncReviewSingleChoice('used'),
                    price: syncReviewSingleChoice('price'),
                    amount: syncReviewSingleChoice('amount'),
                    speed: syncReviewSingleChoice('speed'),
                    status: 'published', // round 11: live at once; the owner can hide or delete it
                    source: 'website',
                    createdAt: now,
                    publishedAt: now
                };

                const submitBtn = reviewSubmitBtn || reviewForm.querySelector('.submit-btn');
                const initialLabel = submitBtn ? String(submitBtn.innerHTML || '') : '';
                reviewForm.dataset.sending = '1';
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin" aria-hidden="true"></i> Sending...';
                }
                try {
                    if (reviewMediaState.items.length) {
                        if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin" aria-hidden="true"></i> Uploading photos...';
                        try {
                            draft.media = await uploadReviewMedia(reviewId);
                        } catch (err) {
                            console.warn('[Reviews] Photo upload failed:', err);
                            showReviewFormNotice('Your photos could not be uploaded. Check your connection and try again, or remove them to post without photos.');
                            return;
                        }
                    }
                    const review = cleanSiteReview(draft);
                    const res = await submitPublicReview(review);
                    if (!res.ok) {
                        showReviewFormNotice(res.message === 'busy'
                            ? 'Lots of reviews are coming in right now. Please try again in a few minutes.'
                            : 'Your review could not be sent. Please check your connection and try again.');
                        return;
                    }
                    try { localStorage.setItem('hailifu_review_last_sent', String(Date.now())); } catch {}
                    formSuccess?.classList.add('is-thanks');
                    if (res.live) {
                        // show it straight away (amount stays private, never on the page)
                        const shown = { ...review, amount: '' };
                        siteReviews.items = [shown, ...siteReviews.items.filter((r) => r.id !== shown.id)];
                        refreshPublicSiteReviews();
                        showReviewFormNotice('Thank you! Your review is now on the website.');
                    } else {
                        showReviewFormNotice('Thank you! Your review will appear on the site shortly.');
                    }
                    if (formSuccess) {
                        const google = document.createElement('a');
                        google.className = 'hm-rv-google';
                        google.href = 'https://g.page/r/CdsiXmzUDUmjEAE/review';
                        google.target = '_blank';
                        google.rel = 'noopener';
                        google.innerHTML = '<i class="fab fa-google" aria-hidden="true"></i> Also post it on Google';
                        formSuccess.appendChild(google);
                    }
                    reviewForm.classList.add('is-sent');
                    try { notifyAdminReviewSubmitted(review); } catch {}
                    clearTimeout(reviewForm._closeTimer);
                    reviewForm._closeTimer = setTimeout(() => {
                        if (!reviewForm.classList.contains('is-sent')) return;
                        closeReviewModal();
                        reviewForm.reset();
                        resetReviewQuestionnaireState();
                        clearReviewMedia();
                        resetReviewSingleChoices();
                        reviewForm.classList.remove('is-sent');
                        document.querySelectorAll('#googleStarRating .google-star').forEach((s) => s.setAttribute('aria-checked', 'false'));
                    }, 6000);
                } finally {
                    delete reviewForm.dataset.sending;
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        if (initialLabel) submitBtn.innerHTML = initialLabel;
                    }
                }
            });
        }

        async function openReviewModal(opts = {}) {
            if (!reviewModal) return;
            clearReviewFormNotice();
            if (reviewForm) {
                clearTimeout(reviewForm._closeTimer);
                reviewForm.classList.remove('is-sent');
                reviewForm.dataset.openedAt = String(Date.now()); // spam guard: no 1-second robots
            }
            formSuccess?.classList.remove('is-thanks');
            clearReviewIdentityFailureState();
            resetReviewEditState();
            if (reviewForm) reviewForm.reset();
            resetReviewQuestionnaireState();
            if (legacyReviewerNameInput) legacyReviewerNameInput.value = '';
            if (legacyReviewerEmailInput) legacyReviewerEmailInput.value = '';
            if (legacyReviewCommentInput) legacyReviewCommentInput.value = '';
            setDefaultReviewRating();
            setReviewModalIdentityOverlay(emptyReviewIdentityState);
            setReviewPublicIdentity(emptyReviewIdentityState);
            setVerifiedClientBadge(emptyReviewIdentityState);
            setReviewUiState('composer-ready');
            syncReviewSubmitButtons(emptyReviewIdentityState);
            reviewModal.classList.add('active');
            reviewModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            if (reviewModalClose) {
                reviewModal.setAttribute('aria-hidden', 'false');
                try { reviewModalClose.focus({ preventScroll: true }); } catch {}
            }
            focusReviewCommentField();
            return { identity: { ...emptyReviewIdentityState }, code: '' };
        }

        function closeReviewModal() {
            if (!reviewModal) return;
            setReviewIdentityLoading(false);
            clearReviewIdentityFailureState();
            reviewModal.classList.remove('active');
            reviewModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
            resetReviewQuestionnaireState();
            setReviewUiState('composer-ready');
            syncReviewSubmitButtons(resolveCurrentReviewIdentity());
        }

        async function handleReviewGoogleSignInClick(event) {
            if (event) event.preventDefault();
            startReviewIdentityAuthSync();
            clearReviewFormNotice();
            clearReviewIdentityFailureState();
            setReviewUiState('composer-ready');
            setReviewIdentityLoading(true, 'Opening Google sign-in...');
            try {
                const result = await signInReviewIdentityWithGooglePopup('google-popup-required');
                if (result && result.email) {
                    const identity = applyReviewIdentityToForm(result, { preserveIfFilled: false });
                    clearReviewIdentityFailureState();
                    setReviewUiState('composer-ready');
                    setDefaultReviewRating();
                    focusReviewCommentField();
                    syncReviewSubmitButtons(identity);
                    return { identity, code: '' };
                }
                const code = String((result && result.code) || 'google-popup-failed').toLowerCase();
                showReviewIdentityRetryState(code);
                return { identity: emptyReviewIdentityState, code };
            } finally {
                setReviewIdentityLoading(false);
            }
        }

        async function handleReviewIdentityRetryClick(event) {
            if (event) event.preventDefault();
            startReviewIdentityAuthSync();
            clearReviewFormNotice();
            await handleReviewGoogleSignInClick();
        }

        function handleReviewLegacyToggleClick(event) {
            if (event) event.preventDefault();
            clearReviewFormNotice();
            clearReviewIdentityFailureState();
            setReviewUiState('legacy-manual', { focus: true });
            syncReviewSubmitButtons(emptyReviewIdentityState);
        }

        function handleReviewLegacyCancelClick(event) {
            if (event) event.preventDefault();
            clearReviewFormNotice();
            const identity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
            if (hasVerifiedReviewIdentity(identity)) {
                setReviewUiState('composer-ready', { focus: true });
            } else {
                setReviewUiState('auth-gate', { focus: true });
            }
            syncReviewSubmitButtons(identity);
        }

        async function handleLogoIdentityTap(opts = {}) {
            const openReviewModalIfNeeded = opts.openReviewModalIfNeeded !== false;
            startReviewIdentityAuthSync();
            let identity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
            let identityFailureCode = '';

            if (openReviewModalIfNeeded && reviewModal && !reviewModal.classList.contains('active')) {
                const modalState = await openReviewModal({ autoPromptOneTap: true });
                identity = modalState && modalState.identity
                    ? modalState.identity
                    : applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
                identityFailureCode = String((modalState && modalState.code) || '').toLowerCase();
            } else if (!hasVerifiedReviewIdentity(identity) && reviewModal && reviewModal.classList.contains('active')) {
                const oneTapResult = await requestReviewIdentityFromOneTap('logo-identity-tap');
                identity = oneTapResult && oneTapResult.identity
                    ? oneTapResult.identity
                    : applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
                identityFailureCode = String((oneTapResult && oneTapResult.code) || '').toLowerCase();
            } else if (hasVerifiedReviewIdentity(identity)) {
                identity = applyReviewIdentityToForm(resolveCurrentReviewIdentity(), { preserveIfFilled: true });
            }

            if (reviewModal && reviewModal.classList.contains('active')) {
                if (hasVerifiedReviewIdentity(identity)) {
                    clearReviewIdentityFailureState();
                    clearReviewFormNotice();
                } else {
                    showReviewIdentityRetryState(identityFailureCode || 'identity-required');
                }
            }

            return { identity, redirected: false };
        }

        async function handlePrimaryReviewTrigger(event) {
            if (event) event.preventDefault();
            clearReviewFormNotice();
            clearReviewIdentityFailureState();
            await openReviewModal({ autoPromptOneTap: false });
        }

        void (async () => {
            const bootstrapIdentity = resolveCurrentReviewIdentity();
            if (hasVerifiedReviewIdentity(bootstrapIdentity)) {
                applyReviewIdentityToForm({
                    email: bootstrapIdentity.email,
                    displayName: bootstrapIdentity.displayName || bootstrapIdentity.name || deriveNameFromEmail(bootstrapIdentity.email),
                    photoURL: bootstrapIdentity.photoURL || '',
                    providerId: bootstrapIdentity.providerId || '',
                    uid: bootstrapIdentity.uid || '',
                    verified: !!bootstrapIdentity.verified
                }, { preserveIfFilled: false });
                setReviewUiState('composer-ready');
                syncReviewSubmitButtons(bootstrapIdentity);
                return;
            }
            setReviewUiState('composer-ready');
            syncReviewSubmitButtons(emptyReviewIdentityState);
        })();

        document.addEventListener('click', (e) => {
            const opener = e.target.closest('[data-review-modal-open]');
            if (!opener) return;
            e.preventDefault();
            handlePrimaryReviewTrigger(e).catch(() => {
                openReviewModal();
            });
        });

        reviewLikeTagButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const selected = !btn.classList.contains('is-selected');
                btn.classList.toggle('is-selected', selected);
                btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
                syncReviewLikeTagInput();
            });
        });

        reviewServiceOptionInputs.forEach((input) => {
            input.addEventListener('change', () => {
                syncReviewServiceInput();
            });
        });

        if (reviewPhotoBtn && reviewPhotoInput) {
            reviewPhotoBtn.addEventListener('click', () => {
                try { reviewPhotoInput.click(); } catch {}
            });
        }

        if (reviewPhotoInput) {
            reviewPhotoInput.addEventListener('change', () => {
                syncReviewPhotoInput();
            });
        }

        syncReviewLikeTagInput();
        syncReviewServiceInput();
        syncReviewPhotoInput();

        if (reviewModalClose) {
            reviewModalClose.addEventListener('click', closeReviewModal);
        }

        if (reviewGoogleSignInBtn) {
            reviewGoogleSignInBtn.addEventListener('click', handleReviewGoogleSignInClick);
        }

        if (reviewIdentityRetryBtn) {
            reviewIdentityRetryBtn.addEventListener('click', handleReviewIdentityRetryClick);
        }

        if (reviewLegacyToggleBtn) {
            reviewLegacyToggleBtn.addEventListener('click', handleReviewLegacyToggleClick);
        }

        if (reviewLegacyCancelBtn) {
            reviewLegacyCancelBtn.addEventListener('click', handleReviewLegacyCancelClick);
        }

        if (reviewModal) {
            reviewModal.addEventListener('click', (e) => {
                if (e.target === reviewModal) closeReviewModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeReviewModal();
                closeQuotePopup();
            }
        });

        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotContainer = document.getElementById('chatbotContainer');
        const chatbotClose = document.getElementById('chatbotClose');

        const chatbotMessages = document.getElementById('chatbotMessages');
        const chatInput = document.getElementById('chatInput');
        const chatSendBtn = document.getElementById('chatSendBtn');
        const typingIndicator = document.getElementById('typingIndicator');

        function setTyping(isTyping) {
            if (!typingIndicator) return;
            typingIndicator.style.display = isTyping ? '' : 'none';
        }

        function scrollChatToBottom() {
            if (!chatbotMessages) return;
            try {
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            } catch {}
        }

        function addMessage(role, html) {
            if (!chatbotMessages) return;
            const node = document.createElement('div');
            node.className = `message ${role === 'user' ? 'user' : 'bot'}`;
            node.innerHTML = html;
            chatbotMessages.insertBefore(node, typingIndicator || null);
            scrollChatToBottom();
        }

        function addUserMessage(text) {
            if (!chatbotMessages) return;
            const node = document.createElement('div');
            node.className = 'message user';
            node.textContent = String(text || '').trim();
            chatbotMessages.insertBefore(node, typingIndicator || null);
            scrollChatToBottom();
        }

        function clearChatMessages() {
            if (!chatbotMessages) return;
            Array.from(chatbotMessages.querySelectorAll('.message')).forEach((msg) => msg.remove());
        }

        function getServiceGreeting(serviceKey) {
            const key = String(serviceKey || '').toLowerCase().trim();
            const greetings = {
                cctv: 'Hi! Need expert CCTV installation for your property? I can help!',
                gate: 'Hello! Looking for Automated Gate installation or repairs?',
                gates: 'Hello! Looking for Automated Gate installation or repairs?',
                ac: 'Hi! Need Air Conditioner installation, servicing, or repairs?',
                aircondition: 'Hi! Need Air Conditioner installation, servicing, or repairs?',
                airconditioning: 'Hi! Need Air Conditioner installation, servicing, or repairs?',
                blinds: 'Hello! Interested in Window Blinds and smart curtain solutions?',
                blindcurtain: 'Hello! Interested in Window Blinds and smart curtain solutions?',
                electrical: 'Hi! Need a professional electrician for wiring, installations, or repairs?',
                fencing: 'Hi! Need Electric Fence perimeter installation or maintenance?',
                fence: 'Hi! Need Electric Fence perimeter installation or maintenance?',
                solar: 'Hi! Looking for Solar Energy system installation or upgrades?'
            };
            return greetings[key] || '';
        }

        function applyServiceGreetingToStaticChatbot() {
            if (!chatbotMessages) return;
            const greeting = getServiceGreeting(deepLinkServiceKey);
            if (!greeting) return;
            const firstBot = chatbotMessages.querySelector('.message.bot');
            if (!firstBot) return;
            firstBot.textContent = greeting;
            scrollChatToBottom();
        }

        applyServiceGreetingToStaticChatbot();

        const adminGatekeeper = (() => {
            const adminVisibilityTokenStorageKey = 'hailifu_admin_visibility_token';
            const adminVisibilitySealStorageKey = 'hailifu_admin_visibility_seal';
            const adminFlagStorageKey = 'is_admin';
            const adminKeyVerifiedStorageKey = 'hailifu_admin_key_verified';
            const visibilitySalt = 'hailifu_ops_visibility_v1';

            const hashKey = (value) => {
                const raw = String(value || '').trim();
                if (!raw) return '';
                let hash = 0x811c9dc5;
                for (let i = 0; i < raw.length; i += 1) {
                    hash ^= raw.charCodeAt(i);
                    hash = Math.imul(hash, 0x01000193) >>> 0;
                }
                return (hash >>> 0).toString(16).padStart(8, '0');
            };

            const buildVisibilitySeal = (token) => hashKey(`${String(token || '')}:${visibilitySalt}`);

            const generateEntropyToken = () => {
                const bytes = new Uint8Array(32);
                try {
                    if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
                        window.crypto.getRandomValues(bytes);
                    } else {
                        for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);
                    }
                } catch {
                    for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);
                }
                let binary = '';
                for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
                try {
                    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
                } catch {
                    return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}_${Math.random().toString(36).slice(2)}`;
                }
            };

            const clearPersistedVisibilityGrant = () => {
                try { localStorage.removeItem(adminVisibilityTokenStorageKey); } catch {}
                try { localStorage.removeItem(adminVisibilitySealStorageKey); } catch {}
                try { localStorage.removeItem(adminFlagStorageKey); } catch {}
                try { localStorage.removeItem(adminKeyVerifiedStorageKey); } catch {}
            };

            const persistVisibilityGrant = (opts = {}) => {
                try {
                    const token = generateEntropyToken();
                    const seal = buildVisibilitySeal(token);
                    if (!token || !seal) return false;
                    localStorage.setItem(adminVisibilityTokenStorageKey, token);
                    localStorage.setItem(adminVisibilitySealStorageKey, seal);
                    localStorage.setItem(adminFlagStorageKey, '1');
                    if (opts && opts.keyVerified) {
                        localStorage.setItem(adminKeyVerifiedStorageKey, '1');
                    }
                    return true;
                } catch {
                    return false;
                }
            };

            const hasPersistedVisibilityGrant = () => {
                try {
                    const isAdminFlag = String(localStorage.getItem(adminFlagStorageKey) || '').trim();
                    const isKeyVerified = String(localStorage.getItem(adminKeyVerifiedStorageKey) || '').trim() === '1';
                    const token = String(localStorage.getItem(adminVisibilityTokenStorageKey) || '');
                    const seal = String(localStorage.getItem(adminVisibilitySealStorageKey) || '');
                    const hasValidSeal = !!token && !!seal && buildVisibilitySeal(token) === seal;
                    if (hasValidSeal && isKeyVerified) {
                        if (isAdminFlag !== '1') localStorage.setItem(adminFlagStorageKey, '1');
                        return true;
                    }
                    if (isAdminFlag || isKeyVerified || token || seal) {
                        clearPersistedVisibilityGrant();
                    }
                } catch {
                    return false;
                }
                return false;
            };

            const authorizeFromSecretKey = () => {
                if (hasPersistedVisibilityGrant()) return true;
                return persistVisibilityGrant({ keyVerified: true });
            };

            const grantVisibility = () => {
                return hasPersistedVisibilityGrant();
            };

            const hasVisibilityGrant = () => hasPersistedVisibilityGrant();

            const pulseSuccess = (sourceNode = null) => {
                const pulseTarget = sourceNode || (adminTrigger ? (adminTrigger.closest('.whatsapp-logo') || adminTrigger) : null);
                if (pulseTarget) {
                    const previousTransition = pulseTarget.style.transition;
                    const previousBoxShadow = pulseTarget.style.boxShadow;
                    const previousBorderColor = pulseTarget.style.borderColor;
                    const previousTransform = pulseTarget.style.transform;

                    pulseTarget.style.transition = 'box-shadow 0.28s ease, border-color 0.28s ease, transform 0.28s ease';
                    pulseTarget.style.borderColor = '#995400';
                    pulseTarget.style.boxShadow = '0 0 0 2px rgba(153, 84, 0, 0.75), 0 0 22px rgba(153, 84, 0, 0.85)';
                    pulseTarget.style.transform = 'scale(1.04)';

                    window.setTimeout(() => {
                        pulseTarget.style.transition = previousTransition;
                        pulseTarget.style.boxShadow = previousBoxShadow;
                        pulseTarget.style.borderColor = previousBorderColor;
                        pulseTarget.style.transform = previousTransform;
                    }, 620);
                }

                const bodyNode = document.body;
                if (!bodyNode) return;
                if (pulseTarget && typeof pulseTarget.getBoundingClientRect === 'function') {
                    try {
                        const rect = pulseTarget.getBoundingClientRect();
                        const x = Math.max(0, Math.round(rect.left + (rect.width / 2)));
                        const y = Math.max(0, Math.round(rect.top + (rect.height / 2)));
                        bodyNode.style.setProperty('--admin-pulse-x', `${x}px`);
                        bodyNode.style.setProperty('--admin-pulse-y', `${y}px`);
                    } catch {}
                }
                bodyNode.classList.remove('admin-handshake-radial');
                void bodyNode.offsetWidth;
                bodyNode.classList.add('admin-handshake-radial');
                window.setTimeout(() => {
                    bodyNode.classList.remove('admin-handshake-radial');
                }, 1150);

                bodyNode.classList.remove('admin-handshake-glow');
                void bodyNode.offsetWidth;
                bodyNode.classList.add('admin-handshake-glow');
                window.setTimeout(() => {
                    bodyNode.classList.remove('admin-handshake-glow');
                }, 2000);

                const heroSection = document.getElementById('hero');
                if (!heroSection) return;
                heroSection.classList.remove('admin-reveal-blur');
                void heroSection.offsetWidth;
                heroSection.classList.add('admin-reveal-blur');
                window.setTimeout(() => {
                    heroSection.classList.remove('admin-reveal-blur');
                }, 2000);
            };

            return {
                authorizeFromSecretKey,
                grantVisibility,
                hasVisibilityGrant,
                pulseSuccess,
                clearPersistedVisibilityGrant
            };
        })();

        function hasAdminVisibilityAccess() {
            return adminGatekeeper.hasVisibilityGrant();
        }

        function purgeAdminSurfaceFromDom() {
            try { stopAdminLazyLoop(); } catch {}
            if (adminHideTimer) {
                clearTimeout(adminHideTimer);
                adminHideTimer = null;
            }
            const backdropExisting = document.getElementById('adminBackdrop');
            if (backdropExisting && backdropExisting.parentNode) {
                backdropExisting.parentNode.removeChild(backdropExisting);
            }
            const existing = document.getElementById('adminPanel');
            if (existing && existing.parentNode) {
                existing.parentNode.removeChild(existing);
            }
            adminBackdrop = null;
            adminPanel = null;
            adminToggle = null;
            adminTabs = [];
            adminTabPanels = [];
            adminLazyLoop = null;
            adminLazyLoopTrack = null;
            adminLazyLoopDots = null;
            adminLazyLoopSlides = [];
            adminBindingsReady = false;
        }

        function seedOpsLayer() {
            if (adminPanel) return adminPanel;
            const existingBackdrop = document.getElementById('adminBackdrop');
            if (existingBackdrop) {
                adminBackdrop = existingBackdrop;
            }
            const existing = document.getElementById('adminPanel');
            if (existing) {
                adminPanel = existing;
                return adminPanel;
            }
            const markup = `
                <div class="admin-backdrop" id="adminBackdrop" aria-hidden="true"></div>
                <div class="admin-panel premium-admin-v3 hm-admin" id="adminPanel" aria-hidden="true" style="display: none; opacity: 0;">
                    <aside class="admin-sidebar-v2 hm-admin-side">
                        <div class="sidebar-header">
                            <div class="sidebar-logo">
                                <img src="/logo.webp" alt="Hailifu">
                            </div>
                            <div class="sidebar-brand">
                                <h2>Hailifu</h2>
                                <span>Admin portal</span>
                            </div>
                        </div>
                        <nav class="sidebar-nav" aria-label="Admin sections">
                            <span class="hm-nav-indicator" aria-hidden="true"></span>
                            <p class="hm-nav-group">Overview</p>
                            <button class="nav-item active" data-admin-tab="overview">
                                <i class="fas fa-gauge-high"></i> <span>Dashboard</span>
                            </button>
                            <p class="hm-nav-group">Business</p>
                            <button class="nav-item" data-admin-tab="leads">
                                <i class="fas fa-bolt"></i> <span>Leads</span>
                            </button>
                            <button class="nav-item" data-admin-tab="projects">
                                <i class="fas fa-images"></i> <span>Galleries</span>
                            </button>
                            <button class="nav-item" data-admin-tab="reviews">
                                <i class="fas fa-star"></i> <span>Reviews</span>
                            </button>
                            <p class="hm-nav-group">Content</p>
                            <button class="nav-item" data-admin-tab="media">
                                <i class="fas fa-photo-film"></i> <span>Media Library</span>
                            </button>
                            <button class="nav-item" data-admin-tab="adverts">
                                <i class="fas fa-bullhorn"></i> <span>Adverts</span>
                            </button>
                            <button class="nav-item" data-admin-tab="site-control">
                                <i class="fas fa-sliders"></i> <span>Site Control</span>
                            </button>
                            <p class="hm-nav-group">System</p>
                            <button class="nav-item" data-admin-tab="notifications">
                                <i class="fas fa-bell"></i> <span>Notifications</span>
                            </button>
                            <button class="nav-item" data-admin-tab="control-center">
                                <i class="fas fa-heart-pulse"></i> <span>Site health</span>
                            </button>
                        </nav>
                        <div class="sidebar-footer">
                            <a class="hm-side-link" href="/" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> <span>View website</span></a>
                            <button class="admin-exit-btn" id="adminLogoutBtn" type="button">
                                <i class="fas fa-right-from-bracket"></i> <span>Log out</span>
                            </button>
                        </div>
                    </aside>
                    <main class="admin-main-v2">
                        <header class="main-header">
                            <button type="button" class="hm-admin-menu" id="hmAdminMenuBtn" aria-label="Open menu"><i class="fas fa-bars"></i></button>
                            <div class="hm-admin-title">
                                <h1 id="hmAdminPageTitle">Dashboard</h1>
                                <p id="hmAdminPageSub">Your business at a glance</p>
                            </div>
                            <div class="header-search">
                                <i class="fas fa-search"></i>
                                <input type="text" id="adminGlobalSearch" placeholder="Search leads, projects, media..." aria-label="Search">
                            </div>
                            <div class="header-user">
                                <button type="button" class="hm-account" id="hmAccountBtn" aria-haspopup="menu" aria-expanded="false">
                                    <span class="user-avatar"><img src="/logo.webp" alt=""></span>
                                    <span class="hm-account-email" id="hmAccountEmail">Admin</span>
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="hm-account-menu" id="hmAccountMenu" role="menu" hidden>
                                    <p class="hm-account-who" role="presentation">Signed in as <strong id="hmAccountMenuEmail">admin</strong></p>
                                    <button type="button" role="menuitem" data-hm-account="password"><i class="fas fa-key"></i> Change password</button>
                                    <button type="button" role="menuitem" data-hm-account="logout"><i class="fas fa-right-from-bracket"></i> Log out</button>
                                </div>
                            </div>
                        </header>
                        <div class="main-content-scroll" id="adminMainContent">
                            <!-- Content will be dynamically injected here -->
                        </div>
                    </main>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', markup);
            adminBackdrop = document.getElementById('adminBackdrop');
            adminPanel = document.getElementById('adminPanel');
            
            // Set initial tab content
            setAdminTab('overview');

            // Global delegated handlers (survive tab caching/cloning)
            try {
                if (adminPanel && !adminPanel.dataset.globalDelegationBound) {
                    adminPanel.dataset.globalDelegationBound = 'true';
                    adminPanel.addEventListener('click', async (e) => {
                        const trigger = e.target.closest('[data-action]');
                        if (!trigger) return;
                        const action = String(trigger.dataset.action || '').trim();
                        if (!action) return;

                        if (action === 'navigate') {
                            const tab = String(trigger.dataset.tab || '').trim();
                            if (tab) setAdminTab(tab);
                            return;
                        }

                        // Media Bucket browse button (file picker must open on user gesture)
                        if (action === 'media-browse') {
                            const input = document.getElementById('mediaFileInput');
                            if (input) {
                                e.stopPropagation();
                                e.stopImmediatePropagation();
                                input.click();
                            }
                            return;
                        }

                        const waitFor = async (selector, timeoutMs = 2200) => {
                            const started = Date.now();
                            while (Date.now() - started < timeoutMs) {
                                const node = document.querySelector(selector);
                                if (node) return node;
                                await new Promise((r) => requestAnimationFrame(() => r()));
                            }
                            return null;
                        };

                        if (action === 'dashboard-upload-media') {
                            setAdminTab('media');
                            const input = await waitFor('#mediaFileInput', 2400);
                            if (input) input.click();
                            else showAdminMediaToast('Media picker not ready yet. Try again.', 'warning');
                            return;
                        }

                        if (action === 'dashboard-delete-latest-media') {
                            const history = getMediaUploadHistory();
                            const candidate = history.find((entry) => String(entry?.name || '').trim());
                            if (!candidate) {
                                showAdminMediaToast('No uploaded media history yet. Upload first.', 'info');
                                return;
                            }
                            const name = String(candidate.name || '').trim();
                            if (!confirm(`Delete latest uploaded media: ${name}?`)) return;
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            const supabase = ensureSupabaseClient();
                            if (!supabase) {
                                showAdminMediaToast('Supabase unavailable for delete.', 'error');
                                return;
                            }
                            const { error } = await supabase.storage.from('media').remove([name]);
                            if (error) {
                                showAdminMediaToast(`Delete failed: ${error.message}`, 'error');
                                return;
                            }
                            showAdminMediaToast('Latest media deleted.', 'success');
                            try { await loadMediaFromSupabase(); } catch {}
                            return;
                        }

                        if (action === 'lead-whatsapp') {
                            const number = String(trigger.dataset.whatsapp || '').trim();
                            if (number) window.open(`https://wa.me/${number}`, '_blank');
                            return;
                        }

                        if (action === 'lead-delete') {
                            const leadId = String(trigger.dataset.leadId || '').trim();
                            if (!leadId) return;
                            if (!confirm('Delete this lead permanently?')) return;
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            await deleteLeadById(leadId);
                            showAdminMediaToast('Lead deleted.', 'success');
                            setAdminTab('leads');
                            return;
                        }

                        if (action === 'lead-view') {
                            const leadId = String(trigger.dataset.leadId || '').trim();
                            const lead = getActiveLeadRecords().find((entry) => String(entry?.id || '').trim() === leadId);
                            if (!lead) return;
                            alert([
                                `Name: ${lead.name || 'N/A'}`,
                                `Phone: ${lead.phone || 'N/A'}`,
                                `Email: ${lead.email || 'N/A'}`,
                                `Location: ${lead.location || 'N/A'}`,
                                `Service: ${lead.serviceLabel || lead.service || 'N/A'}`,
                                `Invoice: ${lead.invoiceCode || 'N/A'}`,
                                `Risk: ${lead.fraudRisk || 'N/A'}`,
                                `Details: ${lead.serviceAnswer || 'N/A'}`
                            ].join('\n'));
                            return;
                        }

                        if (action === 'preview') {
                            const projectId = String(trigger.dataset.projectId || '').trim();
                            if (!projectId) return;
                            openProjectPreview(projectId);
                            return;
                        }

                        if (action === 'edit') {
                            const projectId = String(trigger.dataset.projectId || '').trim();
                            if (!projectId) return;
                            const project = getActiveProjectRecords().find((entry) => String(entry?.id || '').trim() === projectId);
                            if (!project) return;
                            if (typeof populateProjectForm === 'function') {
                                populateProjectForm(project);
                            } else {
                                alert(`Project: ${project.title || 'Project'}\nCategory: ${project.category || 'N/A'}\nDescription: ${project.description || 'N/A'}`);
                            }
                            return;
                        }

                        // Project delete: inline "Delete / Keep" on the card (was confirm() + a hidden
                        // PIN prompt, and the tab then re-showed a stale cached copy of the card).
                        if (action === 'delete' || action === 'project-cancel-delete' || action === 'project-confirm-delete') {
                            const card = trigger.closest('.project-card-v2');
                            const projectId = String(trigger.dataset.projectId || card?.dataset.projectId || '').trim();
                            if (!projectId || !card) return;
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            if (action === 'delete') {
                                document.querySelectorAll('#adminMainContent .project-card-v2.is-confirming').forEach((c) => c.classList.remove('is-confirming'));
                                card.classList.add('is-confirming');
                                card.querySelector('[data-action="project-confirm-delete"]')?.focus({ preventScroll: true });
                                return;
                            }
                            if (action === 'project-cancel-delete') { card.classList.remove('is-confirming'); return; }
                            if (card.classList.contains('is-deleting')) return;
                            card.classList.add('is-deleting');
                            const result = await deleteProjectById(projectId, { confirmed: true });
                            if (result && result.ok) {
                                card.classList.add('is-removed');
                                setTimeout(() => {
                                    card.remove();
                                    const grid = document.getElementById('projectsGridV2');
                                    if (grid && !grid.querySelector('.project-card-v2')) setAdminTab('projects');
                                }, 380);
                                showAdminMediaToast('Project deleted', 'success');
                            } else {
                                card.classList.remove('is-deleting', 'is-confirming');
                                showAdminMediaToast(`Could not delete: ${result?.message || 'unknown error'}`, 'error');
                            }
                            return;
                        }
                    });

                    adminPanel.addEventListener('change', (e) => {
                        const select = e.target.closest('[data-action="lead-status-change"]');
                        if (select) {
                            Promise.resolve(updateLeadStatus(select.dataset.leadId, select.value)).then(() => {
                                showAdminMediaToast('Lead status saved.', 'success');
                            });
                        }

                        const metadataInput = e.target.closest('[data-action="update-metadata"]');
                        if (metadataInput) {
                            const projectId = String(metadataInput.dataset.projectId || '').trim();
                            const field = String(metadataInput.dataset.field || '').trim();
                            const value = String(metadataInput.value || '').trim();
                            if (!projectId || !field) return;
                            Promise.resolve(updateProjectMetadata(projectId, field, value)).then(() => {
                                showAdminMediaToast('Project metadata saved.', 'success');
                            });
                        }
                    });
                }
            } catch {}
            
            return adminPanel;
        }

        const adminTabCacheV3 = new Map();

        function setAdminTab(tabKey) {
            const container = document.getElementById('adminMainContent');
            if (!container) {
                console.error('[Admin] Container adminMainContent not found');
                return;
            }

            const normalizedKey = String(tabKey || 'overview').trim().toLowerCase();

            // Safety function: Force dashboard if tab doesn't exist
            if (!isValidTab(normalizedKey)) {
                console.warn(`[Admin] Invalid tab: ${normalizedKey}, forcing Dashboard`);
                setAdminTab('overview');
                return;
            }

            // Several sidebar listeners call this for one click. Ignore repeats while the
            // same tab is still loading, and drop any render that a newer call replaced
            // (otherwise slow tabs like Adverts flash loading/content several times).
            if (setAdminTab.pending === normalizedKey) return;
            setAdminTab.pending = normalizedKey;
            const renderToken = (setAdminTab.token = (setAdminTab.token || 0) + 1);
            const isStale = () => renderToken !== setAdminTab.token;

            updateAdminState('activeTab', normalizedKey);
            try { syncAdminPageChrome(normalizedKey); } catch {}

            // Update sidebar active state with #FF8C00 highlight using class-based toggle
            document.querySelectorAll('.nav-item').forEach(item => {
                const isActive = item.dataset.adminTab === normalizedKey;
                item.classList.toggle('active', isActive);
            });

            // Class-based toggle for container transitions
            container.classList.add('loading');
            container.classList.remove('hidden');

            // Show loading skeleton
            container.innerHTML = `
                <div class="loading-skeleton">
                    <div class="skeleton-header"></div>
                    <div class="skeleton-grid">
                        <div class="skeleton-card"></div>
                        <div class="skeleton-card"></div>
                        <div class="skeleton-card"></div>
                    </div>
                </div>
            `;

            requestAnimationFrame(async () => {
                try {
                    // Media is always rendered live (its listeners are delegated; clones went stale).
                    const liveTab = ['overview', 'leads', 'projects', 'media', 'adverts', 'reviews', 'site-control', 'control-center'].includes(normalizedKey); // always fresh data
                    const cached = liveTab ? null : adminState.cache.get(normalizedKey);
                    if (cached) {
                        if (isStale()) return;
                        setAdminTab.pending = '';
                        container.replaceChildren(cached.cloneNode(true));
                        try { animateAdminCounts(container); } catch {}
                        container.classList.remove('loading');
                        pushAdminLog(`Module loaded (cache): ${normalizedKey.toUpperCase()}`, 'OK');
                        return;
                    }

                    updateAdminState('isLoading', true);
                    const tmp = document.createElement('div');

                    switch (normalizedKey) {
                        case 'overview':
                            // Load leads first so the numbers match the Leads tab (was showing 0 on login)
                            try { await loadLeadsFromSupabase(); } catch {}
                            if (!serviceGallery.loaded) { try { await loadServiceGallery(); } catch {} }
                            loadReviewsFromSupabase().catch(() => {});
                            renderAdminDashboard(tmp);
                            break;
                        case 'leads':
                            await loadLeadsFromSupabase();
                            renderAdminLeads(tmp);
                            break;
                        case 'projects':
                            await loadServiceGallery(true);
                            renderAdminServiceGalleries(tmp);
                            break;
                        case 'media':
                            await loadMediaFromSupabase();
                            renderAdminMedia(tmp);
                            break;
                        case 'adverts':
                            await loadAdverts();
                            renderAdminAdverts(tmp);
                            break;
                        case 'site-control':
                            renderAdminSettings(tmp);
                            break;
                        case 'reviews':
                            await loadReviewsFromSupabase();
                            renderAdminReviewsV2(tmp);
                            break;
                        case 'notifications':
                            renderAdminNotifications(tmp);
                            break;
                        case 'control-center':
                            renderAdminControlCenter(tmp);
                            break;
                        default:
                            // Auto-generate premium placeholder for unknown sections
                            renderPremiumPlaceholder(tmp, normalizedKey);
                    }

                    if (isStale()) return;
                    setAdminTab.pending = '';
                    const node = tmp.firstElementChild ? tmp.firstElementChild : tmp;
                    if (!node || node.children.length === 0) {
                        throw new Error(`No content rendered for tab: ${normalizedKey}`);
                    }

                    if (!liveTab) adminState.cache.set(normalizedKey, node.cloneNode(true));
                    container.replaceChildren(node);
                    try { animateAdminCounts(container); } catch {}
                    container.classList.remove('loading');
                    updateAdminState('isLoading', false);
                    pushAdminLog(`Module loaded: ${normalizedKey.toUpperCase()}`, 'PASS');
                } catch (err) {
                    if (isStale()) return;
                    setAdminTab.pending = '';
                    console.error('[Admin] Error loading tab:', err);
                    container.innerHTML = `
                        <div class="admin-error">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>Failed to load section. Redirecting to Dashboard...</p>
                        </div>
                    `;
                    setTimeout(() => setAdminTab('overview'), 1500);
                }
            });
        }

        function isValidTab(tabKey) {
            const validTabs = ['overview', 'leads', 'projects', 'media', 'adverts', 'site-control', 'reviews', 'notifications', 'control-center'];
            return validTabs.includes(tabKey);
        }

        function renderPremiumPlaceholder(container, tabKey) {
            container.innerHTML = `
                <div class="admin-v2-section">
                    <div class="premium-placeholder">
                        <div class="placeholder-icon">
                            <i class="fas fa-construction"></i>
                        </div>
                        <h2>Section Under Development</h2>
                        <p>The <strong>${escapeHTML(tabKey)}</strong> section is currently being built.</p>
                        <button class="admin-btn-premium action-tile" data-action="navigate" data-tab="overview">
                            <i class="fas fa-home"></i> Return to Dashboard
                        </button>
                    </div>
                </div>
            `;
        }

        async function loadLeadsFromSupabase() {
            // Lazy-load leads from Supabase
            const supabase = ensureSupabaseClient();
            if (!supabase) return;
            try {
                const { data, error } = await withTimeout(supabase.from('leads').select('*').order('updated_at', { ascending: false }), 10000, 'Loading leads');
                if (!error && data) {
                    adminState.data.leads = data.map(fromRemoteRow);
                } else if (error) {
                    console.warn('[Admin] Supabase leads table not found, using localStorage');
                    // Fallback to localStorage if table doesn't exist
                    adminState.data.leads = getLeads();
                }
            } catch (err) {
                console.warn('[Admin] Failed to load leads from Supabase, using localStorage:', err);
                // Fallback to localStorage on error
                adminState.data.leads = getLeads();
            }
        }

        async function loadProjectsFromSupabase() {
            // Lazy-load projects from Supabase
            const supabase = ensureSupabaseClient();
            if (!supabase) return;
            try {
                const { data, error } = await withTimeout(supabase.from('installations').select('*'), 10000, 'Loading projects');
                if (!error && data) {
                    adminState.data.projects = data.map(fromRemoteRow);
                }
            } catch (err) {
                console.error('[Admin] Failed to load projects from Supabase:', err);
            }
        }

        async function loadReviewsFromSupabase() {
            await fetchSiteReviews({ withPrivate: true });
            adminState.data.reviews = siteReviews.items.slice();
            syncReviewsNavBadge();
        }

        // Small count on the Reviews menu item: reviews posted in the last 2 days
        // (round 11: they go live at once, so "new" matters more than "waiting")
        function syncReviewsNavBadge() {
            const item = document.querySelector('#adminPanel .nav-item[data-admin-tab="reviews"]');
            if (!item) return;
            const since = Date.now() - 2 * 24 * 60 * 60 * 1000;
            const waiting = siteReviews.items.filter((r) => (Date.parse(r.createdAt) || 0) >= since).length;
            let badge = item.querySelector('.rv-nav-badge');
            if (!waiting) { badge?.remove(); return; }
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'rv-nav-badge';
                item.appendChild(badge);
            }
            badge.textContent = String(waiting);
            badge.setAttribute('aria-label', `${waiting} new in the last 2 days`);
        }

        // ------------------------------------------------------------------
        // ADMIN PORTAL: rebuilt Dashboard + Leads (2026-09-29)
        // Uses the same data functions as before (getActiveLeadRecords,
        // updateLeadStatus, deleteLeadById, getProjects, getReviews,
        // adminLogs, advertState). Listeners are delegated once.
        // ------------------------------------------------------------------
        const ADMIN_PAGE_META = {
            overview: ['Dashboard', 'Your business at a glance'],
            leads: ['Leads', 'Quote requests from the website'],
            projects: ['Galleries', 'Photos and videos by service'],
            media: ['Media Library', 'Photos and videos in storage'],
            adverts: ['Adverts', 'The offer banner on the homepage'],
            'site-control': ['Site Control', 'Text, colours and sections'],
            reviews: ['Reviews', 'Approve and reply'],
            notifications: ['Notifications', 'Alerts and activity'],
            'control-center': ['Site health', 'Is everything on the website working?']
        };
        const LEAD_STATUSES = [
            { key: 'new', label: 'New' },
            { key: 'contacted', label: 'Contacted' },
            { key: 'completed', label: 'Completed' }
        ];
        const leadsUi = { filter: 'all', query: '', confirming: '' };

        function timeAgo(value) {
            const t = new Date(value).getTime();
            if (!value || Number.isNaN(t)) return '';
            const s = Math.max(0, Math.round((Date.now() - t) / 1000));
            if (s < 60) return 'just now';
            const m = Math.round(s / 60); if (m < 60) return `${m} min ago`;
            const h = Math.round(m / 60); if (h < 24) return `${h} h ago`;
            const d = Math.round(h / 24); if (d < 30) return `${d} day${d === 1 ? '' : 's'} ago`;
            return new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
        }

        function toWhatsAppNumber(phone) {
            let digits = String(phone || '').replace(/[^0-9]/g, '');
            if (!digits) return '';
            if (digits.startsWith('0') && digits.length === 10) digits = `233${digits.slice(1)}`; // Ghana local format
            return digits;
        }

        function initials(name) {
            return String(name || '?').trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase() || '?';
        }

        function syncAdminPageChrome(tabKey) {
            const meta = ADMIN_PAGE_META[tabKey] || ADMIN_PAGE_META.overview;
            const titleNode = document.getElementById('hmAdminPageTitle');
            const subNode = document.getElementById('hmAdminPageSub');
            if (titleNode) titleNode.textContent = meta[0];
            if (subNode) subNode.textContent = meta[1];
            const nav = document.querySelector('#adminPanel .sidebar-nav');
            const active = nav && nav.querySelector(`.nav-item[data-admin-tab="${tabKey}"]`);
            if (nav && active) {
                nav.style.setProperty('--hm-ind-top', `${active.offsetTop}px`);
                nav.style.setProperty('--hm-ind-h', `${active.offsetHeight}px`);
                nav.classList.add('has-indicator');
            }
            const panel = document.getElementById('adminPanel');
            if (panel) panel.classList.remove('is-nav-open');
        }

        function animateAdminCounts(root) {
            const nodes = (root || document).querySelectorAll('[data-hm-count]');
            const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            nodes.forEach((node) => {
                const target = Number(node.dataset.hmCount) || 0;
                if (reduce || target === 0) { node.textContent = String(target); return; }
                const start = performance.now();
                const tick = (now) => {
                    const p = Math.min(1, (now - start) / 900);
                    node.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        }

        function renderAdminDashboard(container) {
            const leads = getActiveLeadRecords();
            const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
            const newThisWeek = leads.filter((l) => new Date(l.createdAt || 0).getTime() >= weekAgo).length;
            const openLeads = leads.filter((l) => (l.status || 'new') === 'new').length;
            // Gallery items (Supabase), not the old built-in/local projects
            const galleryCount = serviceGallery.items.length;
            const galleryServices = getServiceGalleryGroups().length;
            const galleryNote = galleryCount
                ? `across ${galleryServices} service${galleryServices === 1 ? '' : 's'}`
                : 'none yet: import in Galleries';
            let reviews = [];
            try { reviews = getReviews(); } catch {}
            const liveAds = advertState.items.filter((a) => a.active).length;
            const kpis = [
                { label: 'Leads', value: leads.length, note: `${newThisWeek} this week`, icon: 'fa-bolt', tab: 'leads' },
                { label: 'Waiting for reply', value: openLeads, note: 'status: New', icon: 'fa-hourglass-half', tab: 'leads' },
                { label: 'Gallery', value: galleryCount, note: galleryNote, icon: 'fa-images', tab: 'projects' },
                { label: 'Reviews', value: reviews.length, note: 'on the website', icon: 'fa-star', tab: 'reviews' },
                { label: 'Live adverts', value: liveAds, note: advertState.bannerEnabled === false ? 'banner is off' : 'banner is on', icon: 'fa-bullhorn', tab: 'adverts' }
            ];
            const recent = leads.slice().sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || ''))).slice(0, 5);
            const logs = Array.isArray(adminLogs) ? adminLogs.slice(0, 6) : [];

            container.innerHTML = `
                <div class="admin-v2-section hm-dash" id="hmDash">
                    <div class="hm-kpis">
                        ${kpis.map((k, i) => `
                            <button type="button" class="hm-kpi" data-action="navigate" data-tab="${k.tab}" style="--i:${i}">
                                <span class="hm-kpi-icon"><i class="fas ${k.icon}"></i></span>
                                <span class="hm-kpi-value" data-hm-count="${k.value}">0</span>
                                <span class="hm-kpi-label">${k.label}</span>
                                <span class="hm-kpi-note">${escapeHTML(k.note)}</span>
                            </button>`).join('')}
                    </div>
                    <div class="hm-dash-grid">
                        <section class="hm-panel hm-dash-leads" style="--i:5">
                            <header class="hm-panel-head"><h3>Latest leads</h3><button type="button" class="hm-link" data-action="navigate" data-tab="leads">View all <i class="fas fa-arrow-right"></i></button></header>
                            ${recent.length ? `<ul class="hm-mini-leads">${recent.map((l) => `
                                <li>
                                    <span class="hm-avatar">${escapeHTML(initials(l.name))}</span>
                                    <div><strong>${escapeHTML(l.name || 'Client')}</strong><span>${escapeHTML(l.serviceLabel || l.service || 'Service')}${l.location ? ` · ${escapeHTML(l.location)}` : ''}</span></div>
                                    <time>${escapeHTML(timeAgo(l.createdAt))}</time>
                                    ${toWhatsAppNumber(l.phone) ? `<a class="hm-icon-link" href="https://wa.me/${toWhatsAppNumber(l.phone)}" target="_blank" rel="noopener" aria-label="WhatsApp ${escapeHTML(l.name || 'client')}"><i class="fab fa-whatsapp"></i></a>` : ''}
                                </li>`).join('')}</ul>` : '<div class="hm-empty-mini"><i class="fas fa-inbox"></i><p>No quote requests yet. They appear here when someone uses the quote form.</p></div>'}
                        </section>
                        <section class="hm-panel hm-dash-actions" style="--i:6">
                            <header class="hm-panel-head"><h3>Quick actions</h3></header>
                            <div class="hm-actions-grid">
                                <button type="button" class="hm-action" data-action="dashboard-upload-media"><i class="fas fa-cloud-arrow-up"></i><span>Upload photos</span></button>
                                <button type="button" class="hm-action" data-action="navigate" data-tab="adverts"><i class="fas fa-bullhorn"></i><span>New advert</span></button>
                                <button type="button" class="hm-action" data-action="navigate" data-tab="projects"><i class="fas fa-images"></i><span>Manage galleries</span></button>
                                <button type="button" class="hm-action" data-action="navigate" data-tab="site-control"><i class="fas fa-sliders"></i><span>Edit site text</span></button>
                            </div>
                        </section>
                        <section class="hm-panel hm-dash-activity" style="--i:7">
                            <header class="hm-panel-head"><h3>Recent activity</h3></header>
                            ${logs.length ? `<ol class="hm-activity">${logs.map((log) => `<li><time>${escapeHTML(log.time || '')}</time><span>${escapeHTML(log.message || '')}</span></li>`).join('')}</ol>` : '<div class="hm-empty-mini"><p>Nothing yet this session.</p></div>'}
                        </section>
                    </div>
                </div>`;
        }

        function getFilteredLeads() {
            const q = leadsUi.query.trim().toLowerCase();
            return getActiveLeadRecords()
                .slice()
                .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
                .filter((l) => leadsUi.filter === 'all' || (l.status || 'new') === leadsUi.filter)
                .filter((l) => !q || `${l.name} ${l.phone} ${l.location} ${l.serviceLabel} ${l.service} ${l.serviceAnswer} ${l.invoiceCode}`.toLowerCase().includes(q));
        }

        function buildLeadsList() {
            const list = getFilteredLeads();
            if (!list.length) {
                return `<div class="hm-state"><i class="fas fa-inbox"></i><h3>${leadsUi.query || leadsUi.filter !== 'all' ? 'No leads match' : 'No leads yet'}</h3><p>${leadsUi.query || leadsUi.filter !== 'all' ? 'Try another search or status.' : 'Quote requests from the website will appear here.'}</p></div>`;
            }
            return `<div class="hm-leads">${list.map((l, i) => {
                const id = escapeHTML(String(l.id || ''));
                const wa = toWhatsAppNumber(l.phone);
                const status = l.status || 'new';
                return `
                    <article class="hm-lead is-${escapeHTML(status)}${leadsUi.confirming === l.id ? ' is-confirming' : ''}" style="--i:${Math.min(i, 10)}">
                        <span class="hm-avatar">${escapeHTML(initials(l.name))}</span>
                        <div class="hm-lead-main">
                            <div class="hm-lead-top">
                                <strong>${escapeHTML(l.name || 'Client')}</strong>
                                <time>${escapeHTML(timeAgo(l.createdAt))}</time>
                            </div>
                            <div class="hm-lead-meta">
                                <span><i class="fas fa-screwdriver-wrench"></i> ${escapeHTML(l.serviceLabel || l.service || 'Service')}</span>
                                ${l.location ? `<span><i class="fas fa-location-dot"></i> ${escapeHTML(l.location)}</span>` : ''}
                                ${l.phone ? `<span><i class="fas fa-phone"></i> ${escapeHTML(l.phone)}</span>` : ''}
                                ${l.invoiceCode ? `<span><i class="fas fa-receipt"></i> ${escapeHTML(l.invoiceCode)}</span>` : ''}
                            </div>
                            ${l.serviceAnswer ? `<p class="hm-lead-msg">${escapeHTML(l.serviceAnswer)}</p>` : ''}
                        </div>
                        <div class="hm-lead-actions">
                            <label class="hm-select-wrap"><span class="hm-sr">Status</span>
                                <select class="hm-lead-status" data-lead-status="${id}">
                                    ${LEAD_STATUSES.map((s) => `<option value="${s.key}"${s.key === status ? ' selected' : ''}>${s.label}</option>`).join('')}
                                </select>
                            </label>
                            ${wa ? `<a class="hm-btn hm-btn-wa" href="https://wa.me/${wa}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : ''}
                            ${l.phone ? `<a class="hm-btn" href="tel:${escapeHTML(String(l.phone).replace(/[^0-9+]/g, ''))}"><i class="fas fa-phone"></i> Call</a>` : ''}
                            <button type="button" class="hm-icon-btn is-danger" data-lead-ask-delete="${id}" aria-label="Delete lead"><i class="fas fa-trash"></i></button>
                        </div>
                        <div class="hm-lead-confirm" role="alertdialog" aria-label="Confirm delete">
                            <span>Delete this lead?</span>
                            <button type="button" class="hm-btn is-danger" data-lead-confirm-delete="${id}">Delete</button>
                            <button type="button" class="hm-btn" data-lead-cancel-delete>Keep</button>
                        </div>
                    </article>`;
            }).join('')}</div>`;
        }

        function buildLeadChips() {
            const all = getActiveLeadRecords();
            const count = (key) => all.filter((l) => (l.status || 'new') === key).length;
            const chip = (key, label, n) => `<button type="button" class="hm-chip-f${leadsUi.filter === key ? ' is-active' : ''}" data-lead-filter="${key}">${label}<span>${n}</span></button>`;
            return chip('all', 'All', all.length) + LEAD_STATUSES.map((s) => chip(s.key, s.label, count(s.key))).join('');
        }

        function refreshLeadsUi() {
            const list = document.getElementById('hmLeadsList');
            if (list) list.innerHTML = buildLeadsList();
            const chips = document.getElementById('hmLeadChips');
            if (chips) chips.innerHTML = buildLeadChips();
        }

        function renderAdminLeads(container) {
            container.innerHTML = `
                <div class="admin-v2-section hm-leads-page" id="hmLeadsPage">
                    <div class="hm-toolbar-row">
                        <div class="hm-chip-row" id="hmLeadChips">${buildLeadChips()}</div>
                        <label class="hm-search"><i class="fas fa-magnifying-glass"></i><span class="hm-sr">Search leads</span>
                            <input type="search" id="hmLeadSearch" placeholder="Search name, phone, place..." value="${escapeHTML(leadsUi.query)}">
                        </label>
                    </div>
                    <div id="hmLeadsList">${buildLeadsList()}</div>
                </div>`;
            bindLeadsOnce();
        }

        function bindLeadsOnce() {
            if (window.__hmLeadsBound) return;
            window.__hmLeadsBound = true;
            document.addEventListener('input', (e) => {
                if (e.target.id !== 'hmLeadSearch') return;
                leadsUi.query = e.target.value;
                const list = document.getElementById('hmLeadsList');
                if (list) list.innerHTML = buildLeadsList();
            });
            document.addEventListener('change', async (e) => {
                const select = e.target.closest && e.target.closest('#hmLeadsPage [data-lead-status]');
                if (!select) return;
                await updateLeadStatus(select.dataset.leadStatus, select.value);
                showAdminMediaToast(`Marked as ${select.options[select.selectedIndex].text}`, 'success');
                refreshLeadsUi();
            });
            document.addEventListener('click', async (e) => {
                const f = e.target.closest('#hmLeadsPage [data-lead-filter]');
                if (f) { leadsUi.filter = f.dataset.leadFilter; refreshLeadsUi(); return; }
                const ask = e.target.closest('#hmLeadsPage [data-lead-ask-delete]');
                if (ask) { leadsUi.confirming = ask.dataset.leadAskDelete; refreshLeadsUi(); return; }
                if (e.target.closest('#hmLeadsPage [data-lead-cancel-delete]')) { leadsUi.confirming = ''; refreshLeadsUi(); return; }
                const del = e.target.closest('#hmLeadsPage [data-lead-confirm-delete]');
                if (del) {
                    e.stopPropagation();
                    leadsUi.confirming = '';
                    await deleteLeadById(del.dataset.leadConfirmDelete);
                    showAdminMediaToast('Lead deleted', 'success');
                    refreshLeadsUi();
                }
            });
        }

        // Account menu (header) + mobile sidebar
        function bindAdminChromeOnce() {
            if (window.__hmChromeBound) return;
            window.__hmChromeBound = true;

            // Account (email) menu. Round 11: handled in the window CAPTURE phase, before any
            // other admin click handler, because several of those stop propagation and the
            // menu then "sometimes didn't respond". Escape closes only the menu (it used to
            // close the whole admin portal); arrow keys move between the items.
            const accountParts = () => ({ btn: document.getElementById('hmAccountBtn'), menu: document.getElementById('hmAccountMenu') });
            const setAccountMenu = (open, focusFirst = false) => {
                const { btn, menu } = accountParts();
                if (!btn || !menu) return;
                menu.hidden = !open;
                btn.setAttribute('aria-expanded', String(!!open));
                if (open && focusFirst) menu.querySelector('[role="menuitem"]')?.focus();
            };
            window.addEventListener('click', (e) => {
                const target = e.target instanceof Element ? e.target : null;
                if (!target) return;
                const { menu } = accountParts();
                if (!menu) return;
                if (target.closest('#hmAccountBtn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    setAccountMenu(menu.hidden, e.detail === 0); // keyboard "click" focuses the first item
                    return;
                }
                const item = target.closest('#hmAccountMenu [data-hm-account]');
                if (item) {
                    e.preventDefault();
                    e.stopPropagation();
                    setAccountMenu(false);
                    if (item.dataset.hmAccount === 'password') openSetPasswordDialog('change');
                    if (item.dataset.hmAccount === 'logout') document.getElementById('adminLogoutBtn')?.click();
                    return;
                }
                if (!menu.hidden && !target.closest('#hmAccountMenu')) setAccountMenu(false);
            }, true);
            window.addEventListener('keydown', (e) => {
                const { btn, menu } = accountParts();
                if (!menu || menu.hidden) return;
                const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
                const at = items.indexOf(document.activeElement);
                if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    setAccountMenu(false);
                    btn?.focus();
                } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const step = e.key === 'ArrowDown' ? 1 : -1;
                    items[(at + step + items.length) % items.length]?.focus();
                } else if (e.key === 'Tab') {
                    setAccountMenu(false);
                }
            }, true);

            document.addEventListener('click', (e) => {
                if (e.target.closest('#hmAdminMenuBtn')) {
                    document.getElementById('adminPanel')?.classList.toggle('is-nav-open');
                }
            });
        }

        async function syncAdminAccountEmail() {
            const node = document.getElementById('hmAccountEmail');
            if (!node) return;
            try {
                const { data } = await ensureSupabaseClient().auth.getSession();
                const email = data?.session?.user?.email;
                if (email) node.textContent = email;
                const menuEmail = document.getElementById('hmAccountMenuEmail');
                if (email && menuEmail) menuEmail.textContent = email;
            } catch {}
        }

        async function checkSystemHealth() {
            const supabase = ensureSupabaseClient();
            if (supabase) {
                try {
                    await supabase.from('installations').select('id').limit(1);
                    adminState.data.systemHealth.database = 'connected';
                } catch (err) {
                    adminState.data.systemHealth.database = 'error';
                }
            } else {
                adminState.data.systemHealth.database = 'unavailable';
            }

            // Check Google API status
            adminState.data.systemHealth.googleApi = 'connected'; // Placeholder - implement actual check

            adminState.data.systemHealth.lastChecked = Date.now();
        }

        async function updateLeadStatus(leadId, newStatus) {
            const leads = getActiveLeadRecords();
            const lead = leads.find(l => l.id === leadId);
            if (lead) {
                lead.status = newStatus;
                saveLeads(leads);
                if (adminState?.data) adminState.data.leads = leads.slice();
                try { await syncLeadRecordToSupabase(lead); } catch {}
                pushAdminLog(`Lead status updated: ${lead.name} -> ${newStatus}`, 'OK');
            }
        }

        function getActiveProjectRecords() {
            if (Array.isArray(adminState?.data?.projects) && adminState.data.projects.length) {
                return adminState.data.projects.slice();
            }
            return getProjects();
        }

        function renderAdminProjects(container) {
            const projects = adminState.data.projects.length ? adminState.data.projects : getProjects();
            container.innerHTML = `
                <div class="admin-v2-section">
                    <div class="section-header-v2">
                        <h2>Gallery Manager</h2>
                        <button class="admin-btn-premium action-tile" data-action="navigate" data-tab="media"><i class="fas fa-plus"></i> New Project</button>
                    </div>
                    ${projects.length ? `
                        <div class="projects-grid-v2" id="projectsGridV2">
                            ${projects.map(project => `
                                <div class="project-card-v2" data-project-id="${project.id}">
                                    <div class="project-thumbnail" data-action="preview" data-project-id="${project.id}">
                                        <img src="${project.mediaSrc || '/placeholder.jpg'}" alt="${escapeHTML(project.title)}" onerror="this.src='/placeholder.jpg'">
                                        <div class="project-overlay">
                                            <i class="fas fa-expand"></i>
                                        </div>
                                    </div>
                                    <div class="project-info">
                                        <h3>${escapeHTML(project.title)}</h3>
                                        <p class="project-category">${escapeHTML(project.category)}</p>
                                        <div class="project-metadata">
                                            <div class="metadata-field">
                                                <label>Location:</label>
                                                <input type="text" value="${escapeHTML(project.location || '')}" 
                                                       data-action="update-metadata" data-field="location" data-project-id="${project.id}"
                                                       class="metadata-input">
                                            </div>
                                            <div class="metadata-field">
                                                <label>Service Type:</label>
                                                <select data-action="update-metadata" data-field="serviceType" data-project-id="${project.id}"
                                                        class="metadata-input">
                                                    <option value="cctv" ${project.serviceType === 'cctv' ? 'selected' : ''}>CCTV</option>
                                                    <option value="electrical" ${project.serviceType === 'electrical' ? 'selected' : ''}>Electrical</option>
                                                    <option value="gates" ${project.serviceType === 'gates' ? 'selected' : ''}>Gates</option>
                                                    <option value="solar" ${project.serviceType === 'solar' ? 'selected' : ''}>Solar</option>
                                                    <option value="airconditioning" ${project.serviceType === 'airconditioning' ? 'selected' : ''}>Air Conditioning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="project-actions">
                                            <button class="btn-icon" data-action="edit" data-project-id="${project.id}" aria-label="Edit project"><i class="fas fa-edit"></i></button>
                                            <button class="btn-icon delete" data-action="delete" data-project-id="${project.id}" aria-label="Delete project"><i class="fas fa-trash"></i></button>
                                        </div>
                                        <div class="r7-proj-confirm" role="alertdialog" aria-label="Confirm delete">
                                            <span>Delete this project?</span>
                                            <button type="button" class="hm-btn is-danger" data-action="project-confirm-delete" data-project-id="${project.id}">Delete</button>
                                            <button type="button" class="hm-btn" data-action="project-cancel-delete" data-project-id="${project.id}">Keep</button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="empty-state">
                            <div class="empty-state-icon">
                                <i class="fas fa-images"></i>
                            </div>
                            <h3>No Projects Yet</h3>
                            <p>Start showcasing your work by adding your first project to the gallery.</p>
                            <button class="empty-state-action" data-action="navigate" data-tab="overview">
                                <i class="fas fa-home"></i> Return to Dashboard
                            </button>
                        </div>
                    `}
                </div>
            `;

            // Attach event listeners using delegation
            container.addEventListener('click', (e) => {
                const actionBtn = e.target.closest('[data-action]');
                if (!actionBtn) return;

                const action = actionBtn.dataset.action;
                const projectId = actionBtn.dataset.projectId;

                switch (action) {
                    case 'preview':
                        openProjectPreview(projectId);
                        break;
                    case 'edit':
                        console.log('[Admin] Edit project:', projectId);
                        pushAdminLog(`Edit project: ${projectId}`, 'INFO');
                        break;
                    case 'delete':
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        if (confirm('Are you sure you want to delete this project?')) {
                            deleteProjectById(projectId);
                            renderAdminProjects(container);
                        }
                        break;
                    case 'navigate':
                        setAdminTab(actionBtn.dataset.tab);
                        break;
                }
            });

            // Handle metadata updates
            container.addEventListener('change', (e) => {
                if (e.target.dataset.action === 'update-metadata') {
                    const projectId = e.target.dataset.projectId;
                    const field = e.target.dataset.field;
                    const value = e.target.value;
                    updateProjectMetadata(projectId, field, value);
                }
            });
        }

        async function updateProjectMetadata(projectId, field, value) {
            const projects = getActiveProjectRecords();
            const project = projects.find(p => p.id === projectId);
            if (project) {
                project[field] = value;
                saveProjects(projects);
                if (adminState?.data) adminState.data.projects = projects.slice();
                try {
                    const supabase = ensureSupabaseClient();
                    if (supabase) {
                        await supabase.from('installations').upsert(toRemoteRow(project), { onConflict: 'id' });
                    }
                } catch {}
                pushAdminLog(`Project metadata updated: ${project.title} ${field} -> ${value}`, 'OK');
            }
        }

        function openProjectPreview(projectId) {
            const projects = getActiveProjectRecords();
            const project = projects.find(p => p.id === projectId);
            if (project) {
                const preview = document.createElement('div');
                preview.className = 'project-preview-modal';
                preview.innerHTML = `
                    <div class="preview-content">
                        <button class="preview-close" onclick="this.closest('.project-preview-modal').remove()"><i class="fas fa-times"></i></button>
                        <img src="${project.mediaSrc || '/placeholder.jpg'}" alt="${escapeHTML(project.title)}">
                        <div class="preview-info">
                            <h3>${escapeHTML(project.title)}</h3>
                            <p>${escapeHTML(project.description || '')}</p>
                        </div>
                    </div>
                `;
                document.body.appendChild(preview);
            }
        }

        // ------------------------------------------------------------------
        // MEDIA MANAGER (2026 rebuild)
        // Fast uploads (auto-compressed photos, parallel, real progress),
        // one-click delete with instant feedback, bulk delete, filters,
        // clear offline/error states. Listeners are bound ONCE at document
        // level, so they survive tab re-renders (the old version bound them
        // to a throw-away element and to the same container repeatedly).
        // ------------------------------------------------------------------
        const MEDIA_BUCKET = 'media';
        const MEDIA_MAX_VIDEO_BYTES = 50 * 1024 * 1024; // Supabase free-plan per-file limit
        const MEDIA_IMAGE_MAX_EDGE = 2400;
        const MEDIA_UPLOAD_CONCURRENCY = 3;
        const mediaUi = {
            status: 'idle', // idle | ready | offline | error
            message: '',
            filter: 'all',
            selected: new Set(),
            confirming: '',
            bulkConfirm: false,
            queue: []
        };

        function withTimeout(promise, ms, label) {
            let timer = null;
            const timeout = new Promise((_, reject) => {
                timer = setTimeout(() => reject(new Error(`${label || 'Request'} timed out`)), ms);
            });
            return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
        }

        function getMediaKind(name, mime) {
            const type = String(mime || '').toLowerCase();
            if (type.startsWith('image/')) return 'image';
            if (type.startsWith('video/')) return 'video';
            const ext = String(name || '').split('.').pop().toLowerCase();
            if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'heic', 'svg'].includes(ext)) return 'image';
            if (['mp4', 'mov', 'webm', 'm4v', 'ogg'].includes(ext)) return 'video';
            return 'file';
        }

        function getMediaPublicUrl(name) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return '';
            try {
                const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(name);
                return String(data?.publicUrl || '').trim();
            } catch {
                return '';
            }
        }

        async function loadMediaFromSupabase() {
            const supabase = ensureSupabaseClient();
            if (!supabase) {
                adminState.data.media = [];
                mediaUi.status = 'offline';
                mediaUi.message = 'Supabase is not configured. Add your project URL and key in index.html (see ADMIN_SETUP.md).';
                return;
            }
            try {
                const { data, error } = await withTimeout(
                    supabase.storage.from(MEDIA_BUCKET).list('', { limit: 1000, sortBy: { column: 'created_at', order: 'desc' } }),
                    10000,
                    'Loading media'
                );
                if (error) throw error;
                adminState.data.media = (Array.isArray(data) ? data : [])
                    .filter((entry) => entry && entry.name && !entry.name.startsWith('.') && entry.id)
                    .map((entry) => ({
                        name: entry.name,
                        url: getMediaPublicUrl(entry.name),
                        kind: getMediaKind(entry.name, entry.metadata?.mimetype),
                        size: Number(entry.metadata?.size || 0),
                        createdAt: entry.created_at || entry.updated_at || ''
                    }));
                mediaUi.status = 'ready';
                mediaUi.message = '';
            } catch (err) {
                adminState.data.media = [];
                const text = String(err?.message || err || '');
                const offline = /fetch|network|timed out|resolve|failed/i.test(text);
                mediaUi.status = offline ? 'offline' : 'error';
                mediaUi.message = offline
                    ? 'Storage can\'t be reached. Your Supabase project may be paused or deleted (see ADMIN_SETUP.md).'
                    : `Storage error: ${text}`;
                console.warn('[Admin] Media list failed:', text);
            }
            try { adminState.cache.delete('media'); } catch {}
        }

        function formatMediaDate(value) {
            const date = new Date(value);
            if (!value || Number.isNaN(date.getTime())) return '';
            return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
        }

        function buildMediaTile(item) {
            const nameAttr = encodeURIComponent(item.name);
            const safeName = escapeHTML(item.name);
            const safeUrl = escapeHTML(item.url);
            const isSelected = mediaUi.selected.has(item.name);
            const isConfirming = mediaUi.confirming === item.name;
            const thumb = item.kind === 'video'
                ? `<video src="${safeUrl}#t=0.5" preload="metadata" muted playsinline></video><span class="hm-badge"><i class="fas fa-play"></i> Video</span>`
                : item.kind === 'image'
                    ? `<img src="${safeUrl}" alt="${safeName}" loading="lazy" decoding="async">`
                    : `<span class="hm-file-icon"><i class="fas fa-file"></i></span>`;
            return `
                <figure class="hm-tile${isSelected ? ' is-selected' : ''}${isConfirming ? ' is-confirming' : ''}" data-media-name="${nameAttr}">
                    <div class="hm-thumb">${thumb}</div>
                    <label class="hm-check" title="Select">
                        <input type="checkbox" data-hm-action="select" data-media-name="${nameAttr}"${isSelected ? ' checked' : ''} aria-label="Select ${safeName}">
                    </label>
                    <figcaption>
                        <span class="hm-name" title="${safeName}">${safeName}</span>
                        <span class="hm-meta">${formatBytes(item.size || 0)}${item.createdAt ? ` · ${formatMediaDate(item.createdAt)}` : ''}</span>
                    </figcaption>
                    <div class="hm-actions">
                        <button type="button" class="hm-icon-btn" data-hm-action="copy" data-media-name="${nameAttr}" title="Copy link" aria-label="Copy link"><i class="fas fa-link"></i></button>
                        <button type="button" class="hm-icon-btn" data-hm-action="open" data-media-name="${nameAttr}" title="Open" aria-label="Open in new tab"><i class="fas fa-up-right-from-square"></i></button>
                        ${item.kind === 'image' || item.kind === 'video' ? `<button type="button" class="hm-icon-btn" data-hm-action="to-gallery" data-media-name="${nameAttr}" title="Add to a service gallery" aria-label="Add to a service gallery"><i class="fas fa-images"></i></button>` : ''}
                        <button type="button" class="hm-icon-btn is-danger" data-hm-action="ask-delete" data-media-name="${nameAttr}" title="Delete" aria-label="Delete"><i class="fas fa-trash"></i></button>
                    </div>
                    <div class="hm-togal" role="group" aria-label="Add to gallery">
                        <select aria-label="Service">
                            ${SERVICE_GALLERY_CATEGORIES.map((c) => `<option value="${c}">${escapeHTML(SHOWCASE_CATEGORY_LABELS[c] || c)}</option>`).join('')}
                        </select>
                        <button type="button" class="hm-btn is-primary" data-hm-action="to-gallery-add" data-media-name="${nameAttr}">Add</button>
                        <button type="button" class="hm-btn" data-hm-action="to-gallery-cancel">Cancel</button>
                    </div>
                    <div class="hm-confirm" role="alertdialog" aria-label="Confirm delete">
                        <p>Delete this file?</p>
                        <div>
                            <button type="button" class="hm-btn is-danger" data-hm-action="confirm-delete" data-media-name="${nameAttr}">Delete</button>
                            <button type="button" class="hm-btn" data-hm-action="cancel-delete">Keep</button>
                        </div>
                    </div>
                </figure>
            `;
        }

        function buildMediaQueue() {
            if (!mediaUi.queue.length) return '';
            const labels = { queued: 'Waiting', optimizing: 'Optimizing', uploading: 'Uploading', done: 'Uploaded', error: 'Failed' };
            return `
                <ul class="hm-queue" aria-live="polite">
                    ${mediaUi.queue.map((job) => `
                        <li class="hm-job is-${job.state}">
                            <div class="hm-job-row">
                                <span class="hm-job-name">${escapeHTML(job.name)}</span>
                                <span class="hm-job-state">${job.state === 'error' ? escapeHTML(job.error || labels.error) : `${labels[job.state] || ''}${job.state === 'uploading' ? ` ${job.progress}%` : ''}`}</span>
                            </div>
                            <div class="hm-bar"><span style="width:${job.state === 'done' ? 100 : job.progress}%"></span></div>
                        </li>
                    `).join('')}
                </ul>
            `;
        }

        function buildMediaManagerInner() {
            const items = Array.isArray(adminState.data.media) ? adminState.data.media : [];
            const photos = items.filter((i) => i.kind === 'image').length;
            const videos = items.filter((i) => i.kind === 'video').length;
            const visible = items.filter((i) => mediaUi.filter === 'all' || (mediaUi.filter === 'image' ? i.kind === 'image' : i.kind === 'video'));
            const selectedCount = mediaUi.selected.size;
            const chip = (key, label, count) => `<button type="button" class="hm-chip${mediaUi.filter === key ? ' is-active' : ''}" data-hm-action="filter" data-filter="${key}">${label} <span>${count}</span></button>`;

            let body = '';
            if (mediaUi.status === 'offline' || mediaUi.status === 'error') {
                body = `
                    <div class="hm-state is-offline">
                        <i class="fas fa-triangle-exclamation"></i>
                        <h3>${mediaUi.status === 'offline' ? 'Storage is offline' : 'Something went wrong'}</h3>
                        <p>${escapeHTML(mediaUi.message)}</p>
                        <button type="button" class="hm-btn" data-hm-action="retry"><i class="fas fa-rotate-right"></i> Try again</button>
                    </div>`;
            } else if (!items.length) {
                body = `
                    <div class="hm-state">
                        <i class="fas fa-photo-film"></i>
                        <h3>No media yet</h3>
                        <p>Drop photos or videos above, click Browse, or paste an image (Ctrl+V).</p>
                    </div>`;
            } else if (!visible.length) {
                body = `<div class="hm-state"><p>No ${mediaUi.filter === 'image' ? 'photos' : 'videos'} yet.</p></div>`;
            } else {
                body = `<div class="hm-grid">${visible.map(buildMediaTile).join('')}</div>`;
            }

            return `
                <div class="hm-head">
                    <div>
                        <h2>Media Library</h2>
                        <p>${items.length} file${items.length === 1 ? '' : 's'} · ${photos} photo${photos === 1 ? '' : 's'} · ${videos} video${videos === 1 ? '' : 's'}</p>
                    </div>
                    <button type="button" class="hm-btn is-primary" data-hm-action="browse"><i class="fas fa-plus"></i> Upload</button>
                </div>
                <input type="file" id="mediaFileInput" multiple accept="image/*,video/*" hidden>
                <div class="hm-drop" id="mediaUploadZone" tabindex="0" role="button" aria-label="Upload photos or videos" data-hm-action="browse">
                    <i class="fas fa-cloud-arrow-up"></i>
                    <p><strong>Drop photos or videos here</strong> or click to browse</p>
                    <span>Photos are optimized automatically. Videos up to 50 MB.</span>
                </div>
                ${buildMediaQueue()}
                <div class="hm-toolbar">
                    <div class="hm-chips">
                        ${chip('all', 'All', items.length)}
                        ${chip('image', 'Photos', photos)}
                        ${chip('video', 'Videos', videos)}
                    </div>
                    <div class="hm-bulk${selectedCount ? ' is-visible' : ''}">
                        ${mediaUi.bulkConfirm
                            ? `<span>Delete ${selectedCount} file${selectedCount === 1 ? '' : 's'}?</span>
                               <button type="button" class="hm-btn is-danger" data-hm-action="confirm-bulk">Delete</button>
                               <button type="button" class="hm-btn" data-hm-action="cancel-bulk">Keep</button>`
                            : `<span>${selectedCount} selected</span>
                               <button type="button" class="hm-btn is-danger" data-hm-action="ask-bulk"><i class="fas fa-trash"></i> Delete selected</button>
                               <button type="button" class="hm-btn" data-hm-action="clear-selection">Clear</button>`}
                    </div>
                </div>
                ${body}
            `;
        }

        function refreshMediaManager() {
            const root = document.getElementById('hmMedia');
            if (root) root.innerHTML = buildMediaManagerInner();
        }

        function renderAdminMedia(container) {
            container.innerHTML = `<div class="admin-v2-section hm-media" id="hmMedia">${buildMediaManagerInner()}</div>`;
            bindMediaManagerOnce();
        }

        function findMediaItem(encodedName) {
            const name = decodeURIComponent(String(encodedName || ''));
            return (adminState.data.media || []).find((item) => item.name === name) || null;
        }

        async function deleteMediaItems(names) {
            const targets = names.filter(Boolean);
            if (!targets.length) return;
            const supabase = ensureSupabaseClient();
            if (!supabase) {
                showAdminMediaToast('Storage is offline. Nothing was deleted.', 'error');
                return;
            }
            // Optimistic: remove immediately, restore if the server refuses.
            const before = (adminState.data.media || []).slice();
            adminState.data.media = before.filter((item) => !targets.includes(item.name));
            targets.forEach((name) => mediaUi.selected.delete(name));
            mediaUi.confirming = '';
            mediaUi.bulkConfirm = false;
            refreshMediaManager();
            try {
                const { data, error } = await withTimeout(supabase.storage.from(MEDIA_BUCKET).remove(targets), 15000, 'Delete');
                if (error) throw error;
                // Supabase returns an empty list (no error) when a policy blocks the delete.
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error('Not allowed. Sign in as admin, or check storage delete policy.');
                }
                showAdminMediaToast(`Deleted ${data.length} file${data.length === 1 ? '' : 's'}`, 'success');
                if (typeof pushAdminLog === 'function') pushAdminLog(`Media deleted: ${targets.join(', ')}`, 'OK');
            } catch (err) {
                adminState.data.media = before;
                refreshMediaManager();
                showAdminMediaToast(`Delete failed: ${err?.message || err}`, 'error');
            }
        }

        async function optimizeImageForUpload(file) {
            const type = String(file.type || '').toLowerCase();
            if (!type.startsWith('image/') || /gif|svg/.test(type)) return file;
            if (file.size < 400 * 1024 || typeof createImageBitmap !== 'function') return file;
            try {
                const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
                const scale = Math.min(1, MEDIA_IMAGE_MAX_EDGE / Math.max(bitmap.width, bitmap.height));
                const canvas = document.createElement('canvas');
                canvas.width = Math.round(bitmap.width * scale);
                canvas.height = Math.round(bitmap.height * scale);
                canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
                if (typeof bitmap.close === 'function') bitmap.close();
                const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', 0.85));
                if (!blob || blob.size >= file.size) return file;
                return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.webp', { type: 'image/webp' });
            } catch {
                return file; // e.g. HEIC the browser can't decode: upload the original
            }
        }

        function buildMediaObjectName(file) {
            const parts = String(file.name || 'file').split('.');
            const ext = (parts.length > 1 ? parts.pop() : (String(file.type).split('/')[1] || 'bin')).toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin';
            const base = parts.join('.').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'media';
            return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}-${base}.${ext}`;
        }

        async function uploadWithProgress(path, blob, onProgress) {
            const supabase = ensureSupabaseClient();
            let accessToken = '';
            try {
                const { data } = await supabase.auth.getSession();
                accessToken = String(data?.session?.access_token || '');
            } catch {}
            const base = String(window.SUPABASE_URL || '').replace(/\/+$/, '');
            const url = `${base}/storage/v1/object/${MEDIA_BUCKET}/${path.split('/').map(encodeURIComponent).join('/')}`;
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('apikey', String(window.SUPABASE_ANON_KEY || ''));
                if (accessToken) xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
                xhr.setRequestHeader('x-upsert', 'false');
                xhr.setRequestHeader('cache-control', 'max-age=31536000');
                xhr.setRequestHeader('Content-Type', blob.type || 'application/octet-stream');
                xhr.upload.onprogress = (e) => { if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100)); };
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) return resolve();
                    let message = `HTTP ${xhr.status}`;
                    try { message = JSON.parse(xhr.responseText).message || message; } catch {}
                    if (xhr.status === 401 || xhr.status === 403 || /row-level security|unauthori/i.test(message)) message = 'Not allowed. Sign in as admin.';
                    if (xhr.status === 413) message = 'File too large for storage.';
                    reject(new Error(message));
                };
                xhr.onerror = () => reject(new Error('Network error. Storage unreachable.'));
                xhr.ontimeout = () => reject(new Error('Upload timed out.'));
                xhr.timeout = 10 * 60 * 1000;
                xhr.send(blob);
            });
        }

        async function uploadMediaToSupabase(filesInput) {
            const files = Array.from(filesInput || []).filter((f) => f && f.size > 0);
            if (!files.length) return;
            if (!ensureSupabaseClient()) {
                showAdminMediaToast('Storage is offline. Upload not possible.', 'error');
                return;
            }
            const jobs = files.map((file) => {
                const kind = getMediaKind(file.name, file.type);
                const job = { id: `${Date.now()}-${Math.random()}`, file, name: file.name, kind, state: 'queued', progress: 0, error: '' };
                if (kind === 'file') { job.state = 'error'; job.error = 'Only photos and videos'; }
                if (kind === 'video' && file.size > MEDIA_MAX_VIDEO_BYTES) { job.state = 'error'; job.error = 'Video over 50 MB. Compress it first.'; }
                return job;
            });
            mediaUi.queue = jobs.concat(mediaUi.queue.filter((j) => j.state !== 'done'));
            refreshMediaManager();

            let lastPaint = 0;
            const paint = (force) => {
                const now = Date.now();
                if (force || now - lastPaint > 120) { lastPaint = now; refreshMediaManager(); }
            };
            const pending = jobs.filter((j) => j.state === 'queued');
            const worker = async () => {
                while (pending.length) {
                    const job = pending.shift();
                    try {
                        let blob = job.file;
                        if (job.kind === 'image') {
                            job.state = 'optimizing'; paint(true);
                            blob = await optimizeImageForUpload(job.file);
                        }
                        job.state = 'uploading'; paint(true);
                        const path = buildMediaObjectName(blob);
                        await uploadWithProgress(path, blob, (p) => { job.progress = p; paint(false); });
                        job.state = 'done'; job.progress = 100;
                        adminState.data.media = [{
                            name: path,
                            url: getMediaPublicUrl(path),
                            kind: job.kind,
                            size: blob.size,
                            createdAt: new Date().toISOString()
                        }].concat(adminState.data.media || []);
                        mediaUi.status = 'ready';
                        try { pushMediaUploadHistory(path); } catch {}
                        if (typeof pushAdminLog === 'function') pushAdminLog(`Uploaded: ${job.name}`, 'OK');
                    } catch (err) {
                        job.state = 'error';
                        job.error = String(err?.message || err);
                    }
                    paint(true);
                }
            };
            await Promise.all(Array.from({ length: Math.min(MEDIA_UPLOAD_CONCURRENCY, pending.length) }, worker));

            const ok = jobs.filter((j) => j.state === 'done').length;
            const failed = jobs.length - ok;
            showAdminMediaToast(failed ? `${ok} uploaded, ${failed} failed` : `${ok} file${ok === 1 ? '' : 's'} uploaded`, failed ? 'warning' : 'success');
            setTimeout(() => {
                mediaUi.queue = mediaUi.queue.filter((j) => j.state !== 'done');
                refreshMediaManager();
            }, 4000);
        }

        function bindMediaManagerOnce() {
            if (window.__hmMediaBound) return;
            window.__hmMediaBound = true;

            document.addEventListener('click', (e) => {
                const trigger = e.target.closest('#hmMedia [data-hm-action]');
                if (!trigger) return;
                const action = trigger.dataset.hmAction;
                if (action === 'select') return; // handled by change
                e.preventDefault();
                const item = findMediaItem(trigger.dataset.mediaName);
                switch (action) {
                    case 'to-gallery': {
                        const tile = trigger.closest('.hm-tile');
                        document.querySelectorAll('#hmMedia .hm-tile.is-picking').forEach((t) => t !== tile && t.classList.remove('is-picking'));
                        tile?.classList.toggle('is-picking');
                        tile?.querySelector('.hm-togal select')?.focus({ preventScroll: true });
                        break;
                    }
                    case 'to-gallery-cancel':
                        trigger.closest('.hm-tile')?.classList.remove('is-picking');
                        break;
                    case 'to-gallery-add': {
                        if (!item) break;
                        const tile = trigger.closest('.hm-tile');
                        const category = tile?.querySelector('.hm-togal select')?.value || 'cctv';
                        if (serviceGallery.items.some((it) => it.src === item.url || it.storagePath === item.name)) {
                            showAdminMediaToast('This file is already in a gallery', 'warning');
                            tile?.classList.remove('is-picking');
                            break;
                        }
                        trigger.disabled = true;
                        insertServiceGalleryItems([{
                            id: newServiceGalleryId(),
                            kind: 'gallery',
                            category,
                            mediaType: item.kind === 'video' ? 'video' : 'image',
                            src: item.url,
                            source: 'supabase',
                            storagePath: item.name,
                            order: sgItemsFor(category).reduce((m, it) => Math.max(m, it.order), 0) + 1,
                            createdAt: new Date().toISOString()
                        }]).then((res) => {
                            trigger.disabled = false;
                            if (!res.ok) { showAdminMediaToast(`Could not add: ${res.message}`, 'error'); return; }
                            tile?.classList.remove('is-picking');
                            showAdminMediaToast(`Added to ${SHOWCASE_CATEGORY_LABELS[category] || category} gallery`, 'success');
                        });
                        break;
                    }
                    case 'browse': {
                        const input = document.getElementById('mediaFileInput');
                        if (input) input.click();
                        break;
                    }
                    case 'filter':
                        mediaUi.filter = trigger.dataset.filter || 'all';
                        refreshMediaManager();
                        break;
                    case 'retry':
                        mediaUi.status = 'idle';
                        refreshMediaManager();
                        loadMediaFromSupabase().then(refreshMediaManager);
                        break;
                    case 'copy':
                        if (!item) break;
                        (navigator.clipboard ? navigator.clipboard.writeText(item.url) : Promise.reject())
                            .then(() => showAdminMediaToast('Link copied', 'success'))
                            .catch(() => window.prompt('Copy this link:', item.url));
                        break;
                    case 'open':
                        if (item) window.open(item.url, '_blank', 'noopener');
                        break;
                    case 'ask-delete':
                        mediaUi.confirming = item ? item.name : '';
                        refreshMediaManager();
                        break;
                    case 'cancel-delete':
                        mediaUi.confirming = '';
                        refreshMediaManager();
                        break;
                    case 'confirm-delete':
                        if (item) deleteMediaItems([item.name]);
                        break;
                    case 'ask-bulk':
                        mediaUi.bulkConfirm = true;
                        refreshMediaManager();
                        break;
                    case 'cancel-bulk':
                        mediaUi.bulkConfirm = false;
                        refreshMediaManager();
                        break;
                    case 'confirm-bulk':
                        deleteMediaItems(Array.from(mediaUi.selected));
                        break;
                    case 'clear-selection':
                        mediaUi.selected.clear();
                        mediaUi.bulkConfirm = false;
                        refreshMediaManager();
                        break;
                    default:
                        break;
                }
            });

            document.addEventListener('change', (e) => {
                if (e.target && e.target.id === 'mediaFileInput') {
                    const files = Array.from(e.target.files || []);
                    e.target.value = '';
                    uploadMediaToSupabase(files);
                    return;
                }
                const box = e.target.closest ? e.target.closest('#hmMedia [data-hm-action="select"]') : null;
                if (!box) return;
                const name = decodeURIComponent(box.dataset.mediaName || '');
                if (box.checked) mediaUi.selected.add(name); else mediaUi.selected.delete(name);
                mediaUi.bulkConfirm = false;
                refreshMediaManager();
            });

            document.addEventListener('keydown', (e) => {
                if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.id === 'mediaUploadZone') {
                    e.preventDefault();
                    const input = document.getElementById('mediaFileInput');
                    if (input) input.click();
                }
            });

            const zoneFrom = (e) => (e.target && e.target.closest ? e.target.closest('#mediaUploadZone') : null);
            document.addEventListener('dragover', (e) => {
                const zone = zoneFrom(e);
                if (!zone) return;
                e.preventDefault();
                zone.classList.add('is-dragging');
            });
            document.addEventListener('dragleave', (e) => {
                const zone = zoneFrom(e);
                if (zone && !zone.contains(e.relatedTarget)) zone.classList.remove('is-dragging');
            });
            document.addEventListener('drop', (e) => {
                const zone = zoneFrom(e);
                if (!zone) return;
                e.preventDefault();
                zone.classList.remove('is-dragging');
                uploadMediaToSupabase(e.dataTransfer ? e.dataTransfer.files : []);
            });

            // Paste screenshots/photos straight into the library while it is open.
            document.addEventListener('paste', (e) => {
                if (!document.getElementById('hmMedia')) return;
                const files = Array.from(e.clipboardData ? e.clipboardData.files : []);
                if (!files.length) return;
                e.preventDefault();
                uploadMediaToSupabase(files);
            });
        }

        // ------------------------------------------------------------------
        // ADVERTS (2026-09-29)
        // Public: rotating advert banner in the Reviews area (#hmAds).
        // Admin: "Adverts" tab to add, pause/show and remove adverts.
        // Stored in Supabase table `adverts` as { id, data (jsonb), updated_at }
        // (see supabase/sql/admin_setup.sql). When there are no active adverts,
        // or Supabase is offline, built-in adverts using the site's own
        // service copy are shown so the section is never empty.
        // ------------------------------------------------------------------
        const ADVERTS_TABLE = 'adverts';
        const ADVERT_ROTATE_MS = 6000;
        const DEFAULT_ADVERTS = [
            {
                id: 'default-cctv',
                title: 'CCTV that watches while you are away',
                text: 'End-to-end camera planning, installation, and secure remote monitoring.',
                ctaLabel: 'Request a Quote',
                ctaUrl: '',
                imageUrl: 'assets/img/cctv.webp',
                active: true
            },
            {
                id: 'default-gates',
                title: 'Automated gates, built for daily use',
                text: 'Durable gate automation with access control and smart entry.',
                ctaLabel: 'Request a Quote',
                ctaUrl: '',
                imageUrl: 'assets/img/gate-automation.webp',
                active: true
            },
            {
                id: 'default-electrical',
                title: 'Safe, compliant electrical work',
                text: 'Safe wiring, distribution upgrades, and compliance-ready systems.',
                ctaLabel: 'Request a Quote',
                ctaUrl: '',
                imageUrl: 'assets/img/power-panel.webp',
                active: true
            }
        ];
        const advertState = {
            items: [],
            status: 'idle', // idle | ready | offline | error
            message: '',
            confirming: '',
            saving: false,
            publicIndex: 0,
            publicTimer: null,
            bannerEnabled: true,
            topbar: null
        };
        const ADVERT_SETTINGS_ID = '__banner_settings';
        const TOPBAR_SETTINGS_ID = '__topbar_settings';
        const TOPBAR_TONES = ['orange', 'dark', 'light'];

        function normalizeTopbar(raw) {
            const t = raw && typeof raw === 'object' ? raw : {};
            const date = (v) => (/^\d{4}-\d{2}-\d{2}$/.test(String(v || '')) ? String(v) : '');
            return {
                enabled: t.enabled === true,
                message: String(t.message || '').trim().slice(0, 110),
                ctaLabel: String(t.ctaLabel || '').trim().slice(0, 28),
                ctaUrl: safeAdvertUrl(t.ctaUrl),
                tone: TOPBAR_TONES.includes(t.tone) ? t.tone : 'orange',
                startsOn: date(t.startsOn),
                endsOn: date(t.endsOn)
            };
        }

        function safeAdvertUrl(value) {
            const url = String(value || '').trim();
            if (!url) return '';
            if (/^(https?:\/\/|tel:|mailto:|#|\/)/i.test(url)) return url;
            if (/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(url)) return `https://${url}`;
            return '';
        }

        function normalizeAdvert(raw) {
            const item = raw && typeof raw === 'object' ? raw : {};
            return {
                id: String(item.id || ''),
                title: String(item.title || '').trim(),
                text: String(item.text || '').trim(),
                ctaLabel: String(item.ctaLabel || '').trim() || 'Request a Quote',
                ctaUrl: safeAdvertUrl(item.ctaUrl),
                imageUrl: String(item.imageUrl || '').trim(),
                active: item.active !== false,
                createdAt: item.createdAt || ''
            };
        }

        async function loadAdverts() {
            const supabase = ensureSupabaseClient();
            if (!supabase) {
                advertState.items = [];
                advertState.status = 'offline';
                advertState.message = 'Supabase is not configured (see ADMIN_SETUP.md).';
                return;
            }
            try {
                const { data, error } = await withTimeout(
                    supabase.from(ADVERTS_TABLE).select('*').order('updated_at', { ascending: false }),
                    8000,
                    'Loading adverts'
                );
                if (error) throw error;
                const allRows = Array.isArray(data) ? data : [];
                const settingsRow = allRows.find((r) => r && r.id === ADVERT_SETTINGS_ID);
                advertState.bannerEnabled = settingsRow ? fromRemoteRow(settingsRow).enabled !== false : true;
                const topbarRow = allRows.find((r) => r && r.id === TOPBAR_SETTINGS_ID);
                advertState.topbar = normalizeTopbar(topbarRow ? fromRemoteRow(topbarRow) : null);
                advertState.items = allRows
                    .filter((r) => r && !String(r.id || '').startsWith('__')) // settings rows (__banner, __topbar, __google, __brand)
                    .map(fromRemoteRow)
                    .map(normalizeAdvert)
                    .filter((ad) => ad.id && ad.title)
                    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
                advertState.status = 'ready';
                advertState.message = '';
            } catch (err) {
                const text = String(err?.message || err || '');
                const offline = /fetch|network|timed out|resolve|failed/i.test(text);
                advertState.items = [];
                advertState.status = offline ? 'offline' : 'error';
                advertState.message = offline
                    ? 'Storage can\'t be reached. Your Supabase project may be paused or deleted (see ADMIN_SETUP.md).'
                    : `Adverts error: ${text}`;
            }
        }

        function getPublicAdverts() {
            const live = advertState.items.filter((ad) => ad.active);
            return live.length ? live : DEFAULT_ADVERTS.map(normalizeAdvert);
        }

        function buildPublicAdvertSlide(ad, index) {
            const url = safeAdvertUrl(ad.ctaUrl);
            const external = /^https?:\/\//i.test(url);
            const cta = url
                ? `<a class="hm-ad-cta" href="${escapeHTML(url)}"${external ? ' target="_blank" rel="noopener"' : ''}>${escapeHTML(ad.ctaLabel)} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>`
                : `<button type="button" class="hm-ad-cta" data-ad-quote>${escapeHTML(ad.ctaLabel)} <i class="fas fa-arrow-right" aria-hidden="true"></i></button>`;
            const media = ad.imageUrl
                ? `<div class="hm-ad-media"><img src="${escapeHTML(ad.imageUrl)}" alt="" loading="lazy" decoding="async"></div>`
                : '';
            return `
                <article class="hm-ad${index === advertState.publicIndex ? ' is-active' : ''}${ad.imageUrl ? '' : ' no-media'}" data-ad-index="${index}" aria-roledescription="slide" aria-label="${index + 1} of ${getPublicAdverts().length}">
                    ${media}
                    <div class="hm-ad-body">
                        <span class="hm-ad-tag"><i class="fas fa-bolt" aria-hidden="true"></i> Hailifu offer</span>
                        <h3>${escapeHTML(ad.title)}</h3>
                        ${ad.text ? `<p>${escapeHTML(ad.text)}</p>` : ''}
                        ${cta}
                    </div>
                </article>
            `;
        }

        function showPublicAdvert(index) {
            const root = document.getElementById('hmAds');
            if (!root) return;
            const slides = root.querySelectorAll('.hm-ad');
            if (!slides.length) return;
            advertState.publicIndex = (index + slides.length) % slides.length;
            slides.forEach((slide, i) => slide.classList.toggle('is-active', i === advertState.publicIndex));
            root.querySelectorAll('.hm-ads-dot').forEach((dot, i) => {
                dot.classList.toggle('is-active', i === advertState.publicIndex);
                dot.setAttribute('aria-current', i === advertState.publicIndex ? 'true' : 'false');
            });
        }

        function restartPublicAdvertTimer() {
            if (advertState.publicTimer) clearInterval(advertState.publicTimer);
            advertState.publicTimer = null;
            const root = document.getElementById('hmAds');
            if (!root || root.querySelectorAll('.hm-ad').length < 2) return;
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            advertState.publicTimer = setInterval(() => {
                if (document.hidden || root.matches(':hover') || root.contains(document.activeElement)) return;
                showPublicAdvert(advertState.publicIndex + 1);
            }, ADVERT_ROTATE_MS);
        }

        function renderPublicAdverts() {
            const root = document.getElementById('hmAds');
            if (!root) return;
            if (advertState.bannerEnabled === false) {
                if (advertState.publicTimer) clearInterval(advertState.publicTimer);
                advertState.publicTimer = null;
                root.innerHTML = '';
                root.hidden = true;
                return;
            }
            root.hidden = false;
            const ads = getPublicAdverts();
            if (advertState.publicIndex >= ads.length) advertState.publicIndex = 0;
            root.innerHTML = `
                <div class="hm-ads-track">${ads.map(buildPublicAdvertSlide).join('')}</div>
                ${ads.length > 1 ? `<div class="hm-ads-dots" role="tablist" aria-label="Choose advert">${ads.map((_, i) => `<button type="button" class="hm-ads-dot${i === advertState.publicIndex ? ' is-active' : ''}" data-ad-go="${i}" aria-label="Show advert ${i + 1}" aria-current="${i === advertState.publicIndex}"></button>`).join('')}</div>` : ''}
            `;
            restartPublicAdvertTimer();
        }

        // ---------- Top advert bar (slides down above the menu) ----------
        function todayIsoLocal() {
            const d = new Date();
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        }

        function isTopbarLive(t) {
            if (!t || !t.enabled || !t.message) return false;
            const today = todayIsoLocal();
            if (t.startsOn && today < t.startsOn) return false;
            if (t.endsOn && today > t.endsOn) return false;
            return true;
        }

        function topbarDismissKey(t) {
            return `hailifu_topbar_closed_${hashString(`${t.message}|${t.ctaLabel}|${t.ctaUrl}`)}`;
        }

        function hashString(value) {
            let h = 0;
            const s = String(value || '');
            for (let i = 0; i < s.length; i += 1) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
            return (h >>> 0).toString(36);
        }

        function buildTopbarInner(t) {
            const url = safeAdvertUrl(t.ctaUrl);
            const external = /^https?:\/\//i.test(url);
            const label = escapeHTML(t.ctaLabel || 'Get a quote');
            const cta = url
                ? `<a class="r7-topbar-cta" href="${escapeHTML(url)}"${external ? ' target="_blank" rel="noopener"' : ''}>${label} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>`
                : `<button type="button" class="r7-topbar-cta" data-topbar-quote>${label} <i class="fas fa-arrow-right" aria-hidden="true"></i></button>`;
            return `
                <div class="r7-topbar-inner">
                    <span class="r7-topbar-dot" aria-hidden="true"></span>
                    <p class="r7-topbar-text">${escapeHTML(t.message)}</p>
                    ${cta}
                </div>
                <button type="button" class="r7-topbar-close" data-topbar-close aria-label="Close this notice"><i class="fas fa-times" aria-hidden="true"></i></button>`;
        }

        // Round 11: the advert is a small floating paper note, so it never pushes the menu down
        // (the admin preview is not fixed and is not measured).
        function setTopbarHeight(bar) {
            const h = 0;
            document.documentElement.style.setProperty('--r7-topbar-h', `${h}px`);
            document.documentElement.classList.toggle('r7-has-topbar', h > 0);
        }

        function renderTopbar() {
            let bar = document.getElementById('r7Topbar');
            const t = advertState.topbar;
            let dismissed = false;
            try { dismissed = !!(t && sessionStorage.getItem(topbarDismissKey(t))); } catch {}
            if (!isTopbarLive(t) || dismissed) {
                if (bar) { bar.classList.remove('is-in'); bar.hidden = true; setTopbarHeight(bar); }
                return;
            }
            if (!bar) {
                bar = document.createElement('div');
                bar.id = 'r7Topbar';
                bar.className = 'r7-topbar';
                bar.setAttribute('role', 'region');
                bar.setAttribute('aria-label', 'Announcement');
                document.body.insertBefore(bar, document.body.firstChild);
            }
            bar.dataset.tone = t.tone;
            bar.innerHTML = buildTopbarInner(t);
            bar.hidden = false;
            if (bar.classList.contains('is-in')) { setTopbarHeight(bar); scheduleTopbarCycle(bar); return; }
            clearTimeout(renderTopbar.timer);
            renderTopbar.timer = setTimeout(() => {
                bar.classList.add('is-in');
                setTopbarHeight(bar);
                scheduleTopbarCycle(bar);
            }, 1800);
        }

        // Round 11 (owner: "shouldn't be distracting"): the note drops, stays 12 s, lifts, and
        // comes back once every 45 s until the visitor closes it. It never lifts while the
        // pointer or keyboard focus is on it.
        const TOPBAR_DOWN_MS = 12000;
        const TOPBAR_UP_MS = 45000;
        function scheduleTopbarCycle(bar) {
            clearTimeout(renderTopbar.cycle);
            const wait = bar.classList.contains('is-in') ? TOPBAR_DOWN_MS : TOPBAR_UP_MS;
            renderTopbar.cycle = setTimeout(() => {
                if (!bar.isConnected || bar.hidden) return;
                const isDown = bar.classList.contains('is-in');
                const inUse = bar.matches(':hover') || bar.contains(document.activeElement);
                if (!(isDown && inUse)) {
                    bar.classList.toggle('is-in', !isDown);
                    setTopbarHeight(bar);
                }
                scheduleTopbarCycle(bar);
            }, wait);
        }

        function closeTopbar() {
            const bar = document.getElementById('r7Topbar');
            const t = advertState.topbar;
            if (t) { try { sessionStorage.setItem(topbarDismissKey(t), '1'); } catch {} }
            clearTimeout(renderTopbar.cycle);
            clearTimeout(renderTopbar.timer);
            if (!bar) return;
            bar.classList.remove('is-in');
            setTopbarHeight(bar);
            setTimeout(() => { bar.hidden = true; }, 400);
        }

        document.addEventListener('click', (e) => {
            if (e.target.closest('#r7Topbar [data-topbar-close]')) { closeTopbar(); return; }
            if (e.target.closest('#r7Topbar [data-topbar-quote]')) {
                e.preventDefault();
                if (typeof setQuoteService === 'function') setQuoteService('');
                openQuotePopup();
            }
        });
        window.addEventListener('resize', () => setTopbarHeight(document.getElementById('r7Topbar')), { passive: true });

        async function initPublicAdverts() {
            renderPublicAdverts(); // built-in adverts appear instantly
            await loadAdverts();
            renderPublicAdverts();
            if (!window.__hailifuAdminEntry) renderTopbar();
        }

        document.addEventListener('click', (e) => {
            const quoteBtn = e.target.closest('#hmAds [data-ad-quote]');
            if (quoteBtn) {
                e.preventDefault();
                if (typeof setQuoteService === 'function') setQuoteService('');
                openQuotePopup();
                return;
            }
            const dot = e.target.closest('#hmAds [data-ad-go]');
            if (dot) {
                showPublicAdvert(Number(dot.dataset.adGo) || 0);
                restartPublicAdvertTimer();
            }
        });

        // ---------- Admin: Adverts tab ----------
        function buildAdvertAdminList() {
            if (advertState.status === 'offline' || advertState.status === 'error') {
                return `
                    <div class="hm-state is-offline">
                        <i class="fas fa-triangle-exclamation"></i>
                        <h3>${advertState.status === 'offline' ? 'Storage is offline' : 'Something went wrong'}</h3>
                        <p>${escapeHTML(advertState.message)}</p>
                        <button type="button" class="hm-btn" data-ad-action="retry"><i class="fas fa-rotate-right"></i> Try again</button>
                    </div>`;
            }
            if (!advertState.items.length) {
                return `
                    <div class="hm-state">
                        <i class="fas fa-bullhorn"></i>
                        <h3>No adverts yet</h3>
                        <p>Visitors currently see the 3 built-in adverts. Publish one above to replace them.</p>
                    </div>`;
            }
            return `<div class="hm-ad-rows">${advertState.items.map((ad) => `
                <article class="hm-ad-row${ad.active ? '' : ' is-paused'}${advertState.confirming === ad.id ? ' is-confirming' : ''}">
                    <div class="hm-ad-thumb">${ad.imageUrl ? `<img src="${escapeHTML(ad.imageUrl)}" alt="" loading="lazy">` : '<i class="fas fa-bullhorn"></i>'}</div>
                    <div class="hm-ad-info">
                        <strong>${escapeHTML(ad.title)}</strong>
                        ${ad.text ? `<span>${escapeHTML(ad.text)}</span>` : ''}
                        <small>${escapeHTML(ad.ctaLabel)} → ${ad.ctaUrl ? escapeHTML(ad.ctaUrl) : 'quote form'}</small>
                    </div>
                    <span class="hm-ad-status">${ad.active ? 'Live' : 'Paused'}</span>
                    <div class="hm-ad-row-actions">
                        <button type="button" class="hm-btn" data-ad-action="toggle" data-ad-id="${escapeHTML(ad.id)}">${ad.active ? '<i class="fas fa-pause"></i> Pause' : '<i class="fas fa-play"></i> Show'}</button>
                        <button type="button" class="hm-btn is-danger-outline" data-ad-action="ask-delete" data-ad-id="${escapeHTML(ad.id)}"><i class="fas fa-trash"></i> Remove</button>
                    </div>
                    <div class="hm-ad-confirm" role="alertdialog" aria-label="Confirm remove">
                        <span>Remove this advert?</span>
                        <button type="button" class="hm-btn is-danger" data-ad-action="confirm-delete" data-ad-id="${escapeHTML(ad.id)}">Remove</button>
                        <button type="button" class="hm-btn" data-ad-action="cancel-delete">Keep</button>
                    </div>
                </article>`).join('')}</div>`;
        }

        function refreshAdvertAdminList() {
            const list = document.getElementById('hmAdsList');
            if (list) list.innerHTML = buildAdvertAdminList();
            const count = document.getElementById('hmAdsCount');
            if (count) {
                const live = advertState.items.filter((a) => a.active).length;
                count.textContent = `${advertState.items.length} advert${advertState.items.length === 1 ? '' : 's'} · ${live} live`;
            }
        }

        function renderAdminAdverts(container) {
            // List + count are built inline: the container is not on the page yet,
            // so getElementById-based refreshes would find nothing on first render.
            const liveCount = advertState.items.filter((a) => a.active).length;
            const countText = `${advertState.items.length} advert${advertState.items.length === 1 ? '' : 's'} · ${liveCount} live`;
            container.innerHTML = `
                <div class="admin-v2-section hm-media hm-ads-admin" id="hmAdsAdmin">
                    <div class="hm-head">
                        <div>
                            <h2>Adverts</h2>
                            <p id="hmAdsCount">${countText}</p>
                        </div>
                        <label class="hm-switch" title="Turn the whole advert banner on or off for visitors">
                            <input type="checkbox" id="hmAdsBannerSwitch" role="switch"${advertState.bannerEnabled === false ? '' : ' checked'}>
                            <span class="hm-switch-track" aria-hidden="true"><span class="hm-switch-thumb"></span></span>
                            <span class="hm-switch-label" id="hmAdsBannerLabel">${advertState.bannerEnabled === false ? 'Banner is off' : 'Banner is on'}</span>
                        </label>
                    </div>
                    ${buildTopbarAdminPanel()}
                    <form class="hm-ad-form" id="hmAdForm" novalidate>
                        <h3>New advert</h3>
                        <div class="hm-ad-form-grid">
                            <div class="hm-ad-field hm-ad-field--wide">
                                <label for="hmAdTitle">Headline</label>
                                <input id="hmAdTitle" maxlength="70" required placeholder="e.g. CCTV installation for homes and shops">
                            </div>
                            <div class="hm-ad-field hm-ad-field--wide">
                                <label for="hmAdText">Short text <span>(optional)</span></label>
                                <textarea id="hmAdText" rows="2" maxlength="160" placeholder="One sentence about the offer"></textarea>
                            </div>
                            <div class="hm-ad-field">
                                <label for="hmAdCta">Button text</label>
                                <input id="hmAdCta" maxlength="28" value="Request a Quote">
                            </div>
                            <div class="hm-ad-field">
                                <label for="hmAdUrl">Button link <span>(optional)</span></label>
                                <input id="hmAdUrl" placeholder="Empty = opens the quote form">
                            </div>
                            <div class="hm-ad-field hm-ad-field--wide">
                                <label for="hmAdImage">Photo <span>(optional)</span></label>
                                <div class="hm-ad-image-row">
                                    <input type="file" id="hmAdImage" accept="image/*">
                                    <img id="hmAdImagePreview" alt="" hidden>
                                </div>
                            </div>
                            <label class="hm-switch hm-ad-check"><input type="checkbox" id="hmAdActive" role="switch" checked><span class="hm-switch-track" aria-hidden="true"><span class="hm-switch-thumb"></span></span><span class="hm-switch-label">Show on the website now</span></label>
                        </div>
                        <p class="hm-ad-error" id="hmAdError" role="alert" hidden></p>
                        <button type="submit" class="hm-btn is-primary" id="hmAdSave"><i class="fas fa-bullhorn"></i> Publish advert</button>
                    </form>
                    <div id="hmAdsList">${buildAdvertAdminList()}</div>
                </div>
            `;
            bindAdvertAdminOnce();
        }

        function topbarStatusText(t) {
            if (!t.enabled) return 'Off';
            if (!t.message) return 'On, but no message yet';
            const today = todayIsoLocal();
            if (t.startsOn && today < t.startsOn) return `Scheduled from ${t.startsOn}`;
            if (t.endsOn && today > t.endsOn) return `Ended on ${t.endsOn}`;
            return t.endsOn ? `Live until ${t.endsOn}` : 'Live now';
        }

        function buildTopbarAdminPanel() {
            const t = normalizeTopbar(advertState.topbar);
            const live = isTopbarLive(t);
            return `
                <form class="r7-tb-admin" id="r7TbForm" novalidate>
                    <div class="r7-tb-head">
                        <div>
                            <h3>Top bar</h3>
                            <p>A small paper note that drops in under the menu. Visitors can close it.</p>
                        </div>
                        <label class="hm-switch">
                            <input type="checkbox" id="r7TbEnabled" role="switch"${t.enabled ? ' checked' : ''}>
                            <span class="hm-switch-track" aria-hidden="true"><span class="hm-switch-thumb"></span></span>
                            <span class="hm-switch-label" id="r7TbStatus" data-live="${live}">${escapeHTML(topbarStatusText(t))}</span>
                        </label>
                    </div>
                    <div class="r7-tb-preview" aria-hidden="true" inert>
                        <div class="r7-topbar is-preview" id="r7TbPreview" data-tone="${t.tone}">${buildTopbarInner({ ...t, message: t.message || 'Your message appears here' })}</div>
                    </div>
                    <div class="r7-tb-grid">
                        <div class="hm-ad-field r7-tb-wide">
                            <label for="r7TbMessage">Message <span id="r7TbCount">${t.message.length}/110</span></label>
                            <input id="r7TbMessage" maxlength="110" value="${escapeHTML(t.message)}" placeholder="e.g. Free CCTV site survey in Accra this month">
                        </div>
                        <div class="hm-ad-field">
                            <label for="r7TbCta">Button text</label>
                            <input id="r7TbCta" maxlength="28" value="${escapeHTML(t.ctaLabel || 'Get a quote')}">
                        </div>
                        <div class="hm-ad-field">
                            <label for="r7TbUrl">Button link <span>(optional)</span></label>
                            <input id="r7TbUrl" value="${escapeHTML(t.ctaUrl)}" placeholder="Empty = opens the quote form">
                        </div>
                        <fieldset class="hm-ad-field r7-tb-tones">
                            <legend>Colour</legend>
                            ${TOPBAR_TONES.map((tone) => `
                                <label class="r7-tb-tone" data-tone="${tone}">
                                    <input type="radio" name="r7TbTone" value="${tone}"${t.tone === tone ? ' checked' : ''}>
                                    <span class="r7-tb-swatch" aria-hidden="true"></span>${tone[0].toUpperCase()}${tone.slice(1)}
                                </label>`).join('')}
                        </fieldset>
                        <div class="hm-ad-field">
                            <label for="r7TbStart">Show from <span>(optional)</span></label>
                            <input type="date" id="r7TbStart" value="${t.startsOn}">
                        </div>
                        <div class="hm-ad-field">
                            <label for="r7TbEnd">Show until <span>(optional)</span></label>
                            <input type="date" id="r7TbEnd" value="${t.endsOn}">
                        </div>
                    </div>
                    <p class="hm-ad-error" id="r7TbError" role="alert" hidden></p>
                    <div class="r7-tb-actions">
                        <button type="submit" class="hm-btn is-primary" id="r7TbSave"><i class="fas fa-check"></i> Save top bar</button>
                        <span class="r7-tb-hint">Changes show to visitors on their next page load.</span>
                    </div>
                </form>`;
        }

        function readTopbarForm() {
            const val = (id) => String(document.getElementById(id)?.value || '').trim();
            return {
                enabled: !!document.getElementById('r7TbEnabled')?.checked,
                message: val('r7TbMessage'),
                ctaLabel: val('r7TbCta'),
                ctaUrlRaw: val('r7TbUrl'),
                tone: document.querySelector('#r7TbForm input[name="r7TbTone"]:checked')?.value || 'orange',
                startsOn: val('r7TbStart'),
                endsOn: val('r7TbEnd')
            };
        }

        function paintTopbarPreview() {
            const f = readTopbarForm();
            const t = normalizeTopbar({ ...f, ctaUrl: f.ctaUrlRaw });
            const preview = document.getElementById('r7TbPreview');
            if (preview) {
                preview.dataset.tone = t.tone;
                preview.innerHTML = buildTopbarInner({ ...t, message: t.message || 'Your message appears here' });
            }
            const count = document.getElementById('r7TbCount');
            if (count) count.textContent = `${f.message.length}/110`;
        }

        async function saveTopbarFromForm() {
            const f = readTopbarForm();
            const errorNode = document.getElementById('r7TbError');
            const saveBtn = document.getElementById('r7TbSave');
            const showError = (msg) => { if (errorNode) { errorNode.textContent = msg; errorNode.hidden = !msg; } };
            if (f.enabled && !f.message) { showError('Add a message, or switch the top bar off.'); document.getElementById('r7TbMessage')?.focus(); return; }
            const ctaUrl = safeAdvertUrl(f.ctaUrlRaw);
            if (f.ctaUrlRaw && !ctaUrl) { showError('The button link must start with https://, tel:, mailto: or #.'); return; }
            if (f.startsOn && f.endsOn && f.endsOn < f.startsOn) { showError('"Show until" must be on or after "Show from".'); return; }
            const supabase = ensureSupabaseClient();
            if (!supabase) { showError('Storage is offline. Not saved.'); return; }
            showError('');
            const record = normalizeTopbar({ ...f, ctaUrl });
            if (saveBtn) { saveBtn.disabled = true; saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...'; }
            try {
                const row = toRemoteRow({ id: TOPBAR_SETTINGS_ID, type: 'settings', ...record });
                const { data, error } = await withTimeout(supabase.from(ADVERTS_TABLE).upsert(row, { onConflict: 'id' }).select(), 10000, 'Saving');
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('Not allowed. Sign in as admin.');
                advertState.topbar = record;
                const status = document.getElementById('r7TbStatus');
                if (status) { status.textContent = topbarStatusText(record); status.dataset.live = String(isTopbarLive(record)); }
                showAdminMediaToast(isTopbarLive(record) ? 'Top bar is live' : 'Top bar saved', 'success');
                if (typeof pushAdminLog === 'function') pushAdminLog(`Top bar saved (${topbarStatusText(record)})`, 'OK');
            } catch (err) {
                const msg = String(err?.message || err);
                showError(/row-level security|not allowed|unauthori|401|403/i.test(msg) ? 'Not allowed. Sign in as admin.' : `Could not save: ${msg}`);
            } finally {
                if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = '<i class="fas fa-check"></i> Save top bar'; }
            }
        }

        async function saveAdvertFromForm() {
            const title = String(document.getElementById('hmAdTitle')?.value || '').trim();
            const text = String(document.getElementById('hmAdText')?.value || '').trim();
            const ctaLabel = String(document.getElementById('hmAdCta')?.value || '').trim() || 'Request a Quote';
            const rawUrl = String(document.getElementById('hmAdUrl')?.value || '').trim();
            const file = document.getElementById('hmAdImage')?.files?.[0] || null;
            const active = !!document.getElementById('hmAdActive')?.checked;
            const errorNode = document.getElementById('hmAdError');
            const saveBtn = document.getElementById('hmAdSave');
            const showError = (msg) => { if (errorNode) { errorNode.textContent = msg; errorNode.hidden = !msg; } };

            if (!title) { showError('Add a headline.'); document.getElementById('hmAdTitle')?.focus(); return; }
            const ctaUrl = safeAdvertUrl(rawUrl);
            if (rawUrl && !ctaUrl) { showError('The button link must start with https://, tel:, mailto: or #.'); return; }
            const supabase = ensureSupabaseClient();
            if (!supabase) { showError('Storage is offline. Advert not saved.'); return; }

            showError('');
            advertState.saving = true;
            if (saveBtn) { saveBtn.disabled = true; saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publishing...'; }
            try {
                let imageUrl = '';
                if (file) {
                    if (getMediaKind(file.name, file.type) !== 'image') throw new Error('The photo must be an image file.');
                    const blob = await optimizeImageForUpload(file);
                    const path = `ad-${buildMediaObjectName(blob)}`;
                    await uploadWithProgress(path, blob, () => {});
                    imageUrl = getMediaPublicUrl(path);
                }
                const record = {
                    id: `ad_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
                    title, text, ctaLabel, ctaUrl, imageUrl, active,
                    createdAt: new Date().toISOString()
                };
                const { data, error } = await withTimeout(supabase.from(ADVERTS_TABLE).insert(toRemoteRow(record)).select(), 12000, 'Publishing');
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('Not allowed. Sign in as admin.');
                advertState.items.unshift(normalizeAdvert(record));
                advertState.status = 'ready';
                document.getElementById('hmAdForm')?.reset();
                const preview = document.getElementById('hmAdImagePreview');
                if (preview) { preview.hidden = true; preview.removeAttribute('src'); }
                refreshAdvertAdminList();
                renderPublicAdverts();
                showAdminMediaToast(active ? 'Advert published' : 'Advert saved (paused)', 'success');
                if (typeof pushAdminLog === 'function') pushAdminLog(`Advert added: ${title}`, 'OK');
            } catch (err) {
                const msg = String(err?.message || err);
                showError(/row-level security|not allowed|unauthori|401|403/i.test(msg) ? 'Not allowed. Sign in as admin.' : `Could not publish: ${msg}`);
            } finally {
                advertState.saving = false;
                if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = '<i class="fas fa-bullhorn"></i> Publish advert'; }
            }
        }

        async function setAdvertActive(id, active) {
            const supabase = ensureSupabaseClient();
            const item = advertState.items.find((a) => a.id === id);
            if (!supabase || !item) return;
            const before = item.active;
            item.active = active;
            refreshAdvertAdminList();
            renderPublicAdverts();
            try {
                const { data, error } = await withTimeout(supabase.from(ADVERTS_TABLE).update(toRemoteRow(item)).eq('id', id).select(), 10000, 'Saving');
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('Not allowed. Sign in as admin.');
                showAdminMediaToast(active ? 'Advert is live' : 'Advert paused', 'success');
            } catch (err) {
                item.active = before;
                refreshAdvertAdminList();
                renderPublicAdverts();
                showAdminMediaToast(`Could not update: ${err?.message || err}`, 'error');
            }
        }

        async function deleteAdvert(id) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return;
            const before = advertState.items.slice();
            advertState.items = advertState.items.filter((a) => a.id !== id);
            advertState.confirming = '';
            refreshAdvertAdminList();
            renderPublicAdverts();
            try {
                const { data, error } = await withTimeout(supabase.from(ADVERTS_TABLE).delete().eq('id', id).select(), 10000, 'Removing');
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('Not allowed. Sign in as admin.');
                showAdminMediaToast('Advert removed', 'success');
                if (typeof pushAdminLog === 'function') pushAdminLog(`Advert removed: ${id}`, 'OK');
            } catch (err) {
                advertState.items = before;
                refreshAdvertAdminList();
                renderPublicAdverts();
                showAdminMediaToast(`Could not remove: ${err?.message || err}`, 'error');
            }
        }

        async function setBannerEnabled(enabled) {
            const supabase = ensureSupabaseClient();
            const before = advertState.bannerEnabled;
            const paint = (on) => {
                const label = document.getElementById('hmAdsBannerLabel');
                const box = document.getElementById('hmAdsBannerSwitch');
                if (label) label.textContent = on ? 'Banner is on' : 'Banner is off';
                if (box) box.checked = on;
            };
            advertState.bannerEnabled = enabled;
            paint(enabled);
            renderPublicAdverts();
            try {
                if (!supabase) throw new Error('Storage is offline.');
                const row = toRemoteRow({ id: ADVERT_SETTINGS_ID, type: 'settings', enabled });
                const { data, error } = await withTimeout(supabase.from(ADVERTS_TABLE).upsert(row, { onConflict: 'id' }).select(), 10000, 'Saving');
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('Not allowed. Sign in as admin.');
                showAdminMediaToast(enabled ? 'Advert banner is on' : 'Advert banner is off', 'success');
                if (typeof pushAdminLog === 'function') pushAdminLog(`Advert banner turned ${enabled ? 'on' : 'off'}`, 'OK');
            } catch (err) {
                advertState.bannerEnabled = before;
                paint(before);
                renderPublicAdverts();
                showAdminMediaToast(`Could not change banner: ${err?.message || err}`, 'error');
            }
        }

        function bindAdvertAdminOnce() {
            if (window.__hmAdsBound) return;
            window.__hmAdsBound = true;
            document.addEventListener('submit', (e) => {
                if (e.target && e.target.id === 'hmAdForm') {
                    e.preventDefault();
                    if (!advertState.saving) saveAdvertFromForm();
                }
                if (e.target && e.target.id === 'r7TbForm') {
                    e.preventDefault();
                    saveTopbarFromForm();
                }
            });
            document.addEventListener('input', (e) => {
                if (e.target && e.target.closest && e.target.closest('#r7TbForm')) paintTopbarPreview();
            });
            document.addEventListener('change', (e) => {
                if (e.target && e.target.closest && e.target.closest('#r7TbForm')) { paintTopbarPreview(); return; }
                if (e.target && e.target.id === 'hmAdsBannerSwitch') { setBannerEnabled(e.target.checked); return; }
                if (!e.target || e.target.id !== 'hmAdImage') return;
                const file = e.target.files && e.target.files[0];
                const preview = document.getElementById('hmAdImagePreview');
                if (!preview) return;
                if (file && getMediaKind(file.name, file.type) === 'image') {
                    preview.src = URL.createObjectURL(file);
                    preview.hidden = false;
                } else {
                    preview.hidden = true;
                }
            });
            document.addEventListener('click', (e) => {
                const trigger = e.target.closest('#hmAdsAdmin [data-ad-action]');
                if (!trigger) return;
                e.preventDefault();
                const id = String(trigger.dataset.adId || '');
                switch (trigger.dataset.adAction) {
                    case 'toggle': {
                        const item = advertState.items.find((a) => a.id === id);
                        if (item) setAdvertActive(id, !item.active);
                        break;
                    }
                    case 'ask-delete':
                        advertState.confirming = id;
                        refreshAdvertAdminList();
                        break;
                    case 'cancel-delete':
                        advertState.confirming = '';
                        refreshAdvertAdminList();
                        break;
                    case 'confirm-delete':
                        deleteAdvert(id);
                        break;
                    case 'retry':
                        loadAdverts().then(() => { refreshAdvertAdminList(); renderPublicAdverts(); });
                        break;
                    default:
                        break;
                }
            });
        }

        function formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        }

        // Admin > Reviews (round 11): live reviews first, hidden ones below; hide / show / reply / delete.
        function renderAdminReviewsV2(container) {
            container.innerHTML = `<div class="admin-v2-section rv-admin" id="rvAdmin">${buildAdminReviewsBody()}</div>`;
            bindAdminReviewActions();
        }

        function buildAdminReviewCard(r) {
            const stars = '\u2605'.repeat(r.rating) + '\u2606'.repeat(5 - r.rating);
            const when = (() => { try { return new Date(r.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return ''; } })();
            const waiting = r.status !== 'published';
            const confirming = siteReviews.confirming === r.id;
            const actions = confirming
                ? `<span class="rv-confirm-text">Delete this review?</span>
                    <button type="button" class="hm-btn is-danger" data-rv-action="delete-yes">Delete</button>
                    <button type="button" class="hm-btn" data-rv-action="delete-no">Keep</button>`
                : `${waiting
                        ? '<button type="button" class="hm-btn is-primary" data-rv-action="approve"><i class="fas fa-eye"></i> Show on website</button>'
                        : '<button type="button" class="hm-btn" data-rv-action="unpublish"><i class="fas fa-eye-slash"></i> Hide</button>'}
                    <button type="button" class="hm-btn" data-rv-action="reply-save"><i class="fas fa-reply"></i> Save reply</button>
                    <button type="button" class="hm-btn is-ghost-danger" data-rv-action="delete"><i class="fas fa-trash"></i> Delete</button>`;
            return `
                <article class="rv-card${waiting ? ' is-waiting' : ''}" data-rv-id="${escapeHTML(r.id)}">
                    <header class="rv-card-head">
                        <span class="rv-avatar" aria-hidden="true">${escapeHTML(r.name.charAt(0).toUpperCase())}</span>
                        <div class="rv-who">
                            <strong>${escapeHTML(r.name)}</strong>
                            <span class="rv-meta"><span class="rv-stars" aria-label="${r.rating} out of 5">${stars}</span>${when ? ` · ${escapeHTML(when)}` : ''}</span>
                        </div>
                        ${r.phone ? `<a class="rv-phone" href="tel:${escapeHTML(r.phone.replace(/[^+\d]/g, ''))}"><i class="fas fa-phone"></i> ${escapeHTML(r.phone)}</a>` : ''}
                    </header>
                    ${r.comment ? `<p class="rv-comment">${escapeHTML(r.comment)}</p>` : '<p class="rv-comment is-empty">No text, stars only.</p>'}
                    ${(() => {
                        const facts = [
                            r.used ? REVIEW_CHOICES.used[r.used] : '',
                            r.price ? `Price: ${REVIEW_CHOICES.price[r.price]}` : '',
                            r.amount ? `Paid ${REVIEW_CHOICES.amount[r.amount]} (only you see this)` : '',
                            r.speed ? REVIEW_CHOICES.speed[r.speed] : ''
                        ].filter(Boolean);
                        const tags = [...r.services, ...r.likes];
                        return (facts.length ? `<div class="rv-facts">${facts.map((x) => `<span>${escapeHTML(x)}</span>`).join('')}</div>` : '')
                            + (tags.length ? `<div class="rv-tags">${tags.map((x) => `<span>${escapeHTML(x)}</span>`).join('')}</div>` : '');
                    })()}
                    ${r.media.length ? `<div class="rv-media">${r.media.map((m) => { const u = reviewMediaUrl(m); return u ? (m.type === 'video' ? `<video src="${escapeHTML(u)}" controls preload="metadata"></video>` : `<a href="${escapeHTML(u)}" target="_blank" rel="noopener"><img src="${escapeHTML(u)}" alt="Photo from this review" loading="lazy"></a>`) : ''; }).join('')}</div>` : ''}
                    <label class="rv-reply"><span>Your reply (shown under the review)</span>
                        <textarea rows="2" data-rv-reply placeholder="Thank you for choosing Hailifu...">${escapeHTML(r.ownerReply)}</textarea>
                    </label>
                    <div class="rv-actions">${actions}</div>
                </article>`;
        }

        function buildAdminReviewsBody() {
            const waiting = siteReviews.items.filter((r) => r.status !== 'published');
            const published = siteReviews.items.filter((r) => r.status === 'published');
            const empty = (text) => `<div class="rv-empty">${text}</div>`;
            return `
                <p class="rv-lead">Reviews from the website go live as soon as a customer sends them. You stay in control: <strong>Hide</strong> takes one off the website, <strong>Save reply</strong> adds your answer under it, <strong>Delete</strong> removes it with its photos. On the site they show as "Hailifu customer". The amount paid is only ever shown to you.</p>
                ${siteReviews.error ? `<div class="rv-error" role="alert">${escapeHTML(siteReviews.error)}</div>` : ''}
                <section class="rv-group">
                    <h3>On the website <span class="rv-count">${published.length}</span></h3>
                    <div class="rv-list" data-rv-list="published">${published.map(buildAdminReviewCard).join('') || empty('No reviews yet. New ones from the website appear here straight away.')}</div>
                </section>
                <section class="rv-group">
                    <h3>Hidden <span class="rv-count">${waiting.length}</span></h3>
                    <div class="rv-list" data-rv-list="pending">${waiting.map(buildAdminReviewCard).join('') || empty('Reviews you hide show here. Press "Show on website" to bring one back.')}</div>
                </section>`;
        }

        function refreshAdminReviews() {
            const root = document.getElementById('rvAdmin');
            if (root) root.innerHTML = buildAdminReviewsBody();
            syncReviewsNavBadge();
        }

        function bindAdminReviewActions() {
            if (bindAdminReviewActions.bound) return;
            bindAdminReviewActions.bound = true;
            document.addEventListener('click', async (e) => {
                const btn = e.target.closest && e.target.closest('#rvAdmin [data-rv-action]');
                if (!btn || btn.disabled) return;
                const card = btn.closest('.rv-card');
                const review = card && siteReviews.items.find((r) => r.id === card.dataset.rvId);
                if (!review) return;
                const action = btn.dataset.rvAction;
                if (action === 'delete') { siteReviews.confirming = review.id; refreshAdminReviews(); return; }
                if (action === 'delete-no') { siteReviews.confirming = ''; refreshAdminReviews(); return; }
                card.querySelectorAll('button').forEach((x) => { x.disabled = true; });
                let res;
                let done = '';
                if (action === 'delete-yes') {
                    res = await deleteSiteReview(review.id);
                    siteReviews.confirming = '';
                    done = 'Review deleted';
                } else {
                    const reply = String(card.querySelector('[data-rv-reply]')?.value || '').trim().slice(0, 800);
                    const next = { ...review, ownerReply: reply };
                    // approved rows are public, so the phone number is removed at this point
                    if (action === 'approve') { next.status = 'published'; next.phone = ''; next.publishedAt = new Date().toISOString(); done = 'It shows on the website again'; }
                    if (action === 'unpublish') { next.status = 'pending'; done = 'Hidden from the website'; }
                    if (action === 'reply-save') done = 'Reply saved';
                    res = await saveSiteReview(next);
                }
                showAdminMediaToast(res.ok ? done : res.message, res.ok ? 'success' : 'error');
                refreshAdminReviews();
            });
        }

        function renderAdminSettings(container) {
            const settings = getSiteControlSettings();
            const sectionRows = (Array.isArray(settings.sectionOrder) ? settings.sectionOrder : ['hero', 'trust-strip', 'featured-work', 'showcase', 'about', 'services', 'reviews'])
                .map((id) => `
                    <div class="admin-notification-item">
                        <header><strong>${id}</strong><span class="section-drag-handle" draggable="true" data-action="section-drag" data-section-id="${id}">Drag</span></header>
                        <div class="admin-quick-actions">
                            <label class="hm-switch is-compact"><input type="checkbox" role="switch" data-action="section-visible" data-section-id="${id}" ${settings.sectionVisibility?.[id] !== false ? 'checked' : ''}><span class="hm-switch-track" aria-hidden="true"><span class="hm-switch-thumb"></span></span><span class="hm-switch-label">Visible</span></label>
                            <button class="admin-btn-premium" data-action="section-move-up" data-section-id="${id}">Up</button>
                            <button class="admin-btn-premium" data-action="section-move-down" data-section-id="${id}">Down</button>
                        </div>
                    </div>
                `).join('');
            const hero = settings.hero || {};
            container.innerHTML = `
                <div class="admin-v2-section">
                    <div class="section-header-v2">
                        <h2>System Configuration</h2>
                    </div>
                    <div class="settings-grid-v2">
                        <div class="admin-card-v2 gp-card" id="gpCard">
                            <h3>Google reviews</h3>
                            <p class="gp-help">Shows your newest Google reviews (Google sends up to 5) and your star rating on the website. Setup steps are in ADMIN_SETUP.md.</p>
                            <div class="form-group-v2">
                                <label for="gpApiKey">Google API key</label>
                                <input type="text" class="admin-input-v2" id="gpApiKey" autocomplete="off" spellcheck="false" placeholder="AIza...">
                            </div>
                            <div class="form-group-v2">
                                <label for="gpPlaceId">Place ID</label>
                                <input type="text" class="admin-input-v2" id="gpPlaceId" autocomplete="off" spellcheck="false" placeholder="ChIJ...">
                            </div>
                            <div class="gp-actions">
                                <button type="button" class="hm-btn" data-gp-action="test"><i class="fas fa-plug"></i> Test</button>
                                <button type="button" class="hm-btn is-primary" data-gp-action="save">Save</button>
                            </div>
                            <p class="gp-status" id="gpStatus" aria-live="polite"></p>
                        </div>
                        <div class="admin-card-v2">
                            <h3>General SEO</h3>
                            <div class="form-group-v2">
                                <label>Site Title</label>
                                <input type="text" class="admin-input-v2" id="siteTitleInput" value="${document.title}">
                            </div>
                            <div class="form-group-v2">
                                <label>Meta Description</label>
                                <textarea class="admin-input-v2" id="metaDescInput" rows="3"></textarea>
                            </div>
                            <div class="form-group-v2">
                                <label>Meta Keywords</label>
                                <input type="text" class="admin-input-v2" id="metaKeywordsInput" placeholder="cctv, electrical, solar">
                            </div>
                            <button class="admin-btn-premium" id="saveSeoBtn">Save SEO</button>
                        </div>
                        <div class="admin-card-v2 gp-card br-card" id="brCard">
                            <h3>Brand colour</h3>
                            <p class="gp-help">One colour for buttons, links and highlights, saved for every visitor. Text on it turns dark or white by itself so it stays readable.</p>
                            <div class="br-row">
                                <input type="color" class="br-swatch" id="brandColor" value="#e8741e" aria-label="Brand colour">
                                <span class="br-sample">Request a Quote</span>
                            </div>
                            <div class="gp-actions">
                                <button type="button" class="hm-btn" data-br-action="reset"><i class="fas fa-rotate-left"></i> Reset to Hailifu orange</button>
                                <button type="button" class="hm-btn is-primary" data-br-action="save">Save for everyone</button>
                            </div>
                            <p class="gp-status" id="brStatus" aria-live="polite"></p>
                        </div>
                        <div class="admin-card-v2 gp-card af-card" id="afCard">
                            <h3>Aftercare photo</h3>
                            <p class="gp-help">The photo in "Looked after after we leave" on the homepage. Saved for every visitor.</p>
                            <div class="af-preview" id="afPreview"></div>
                            <input type="file" id="afFile" accept="image/*,video/*" hidden>
                            <div class="gp-actions">
                                <button type="button" class="hm-btn is-primary" data-af-action="upload"><i class="fas fa-upload"></i> Upload photo or video</button>
                                <button type="button" class="hm-btn" data-af-action="library"><i class="fas fa-photo-film"></i> Media Library</button>
                            </div>
                            <div class="af-library" id="afLibrary" hidden></div>
                            <div class="af-link-row">
                                <label class="hm-sr" for="afLink">Photo link</label>
                                <input type="url" class="admin-input-v2" id="afLink" placeholder="or paste a link: https://..." autocomplete="off" spellcheck="false">
                                <button type="button" class="hm-btn" data-af-action="link">Use link</button>
                            </div>
                            <button type="button" class="hm-btn af-reset" data-af-action="reset"><i class="fas fa-trash-can"></i> Remove photo</button>
                            <p class="gp-status" id="afStatus" aria-live="polite"></p>
                        </div>
                        <div class="admin-card-v2">
                            <h3>Homepage Section Order & Visibility</h3>
                            <div class="admin-notification-list">${sectionRows}</div>
                        </div>
                        <div class="admin-card-v2">
                            <h3>Hero Content Editor</h3>
                            <div class="form-group-v2">
                                <label>Hero Title</label>
                                <input type="text" class="admin-input-v2" id="heroTitleInput" value="${escapeHTML(String(hero.title || ''))}">
                            </div>
                            <div class="form-group-v2">
                                <label>Hero Tagline</label>
                                <input type="text" class="admin-input-v2" id="heroTaglineInput" value="${escapeHTML(String(hero.tagline || ''))}">
                            </div>
                            <div class="form-group-v2">
                                <label>Hero Slogan</label>
                                <input type="text" class="admin-input-v2" id="heroSloganInput" value="${escapeHTML(String(hero.slogan || ''))}">
                            </div>
                            <div class="form-group-v2">
                                <label>Hero Subtitle</label>
                                <textarea class="admin-input-v2" id="heroSubtitleInput" rows="3">${escapeHTML(String(hero.subtitle || ''))}</textarea>
                            </div>
                            <button class="admin-btn-premium" id="saveHeroContentBtn">Save Hero Content</button>
                            <button class="admin-btn-premium" id="previewHeroContentBtn">Live Preview Hero</button>
                        </div>
                        <div class="admin-card-v2">
                            <h3>Service Card Editor</h3>
                            <div class="form-group-v2">
                                <label>Select Service Card</label>
                                <select class="admin-input-v2" id="serviceCardSelector">
                                    <option value="">Choose card...</option>
                                    ${Array.from(document.querySelectorAll('#services .services-grid .card')).map((card) => `<option value="${card.id}">${escapeHTML(String(card.id || 'service'))}</option>`).join('')}
                                </select>
                            </div>
                            <div class="form-group-v2">
                                <label>Service Title</label>
                                <input type="text" class="admin-input-v2" id="serviceTitleInput">
                            </div>
                            <div class="form-group-v2">
                                <label>Service Description</label>
                                <textarea class="admin-input-v2" id="serviceDescInput" rows="3"></textarea>
                            </div>
                            <button class="admin-btn-premium" id="saveServiceCardBtn">Save Service Card</button>
                            <button class="admin-btn-premium" id="previewServiceCardBtn">Live Preview Service</button>
                        </div>
                    </div>
                </div>
            `;
            populateSiteControlForm();
            bindGoogleSettingsCard();
            fillGoogleSettingsCard().catch(() => {});
            bindBrandCard(container);
            bindAftercareCard(container);
            const saveSeoBtn = container.querySelector('#saveSeoBtn');
            const saveThemeBtn = container.querySelector('#saveThemeBtn');
            const saveHeroContentBtn = container.querySelector('#saveHeroContentBtn');
            const saveServiceCardBtn = container.querySelector('#saveServiceCardBtn');
            const previewHeroContentBtn = container.querySelector('#previewHeroContentBtn');
            const previewServiceCardBtn = container.querySelector('#previewServiceCardBtn');
            const serviceCardSelector = container.querySelector('#serviceCardSelector');
            const serviceTitleInput = container.querySelector('#serviceTitleInput');
            const serviceDescInput = container.querySelector('#serviceDescInput');
            if (saveSeoBtn) {
                saveSeoBtn.addEventListener('click', () => {
                    const title = String(container.querySelector('#siteTitleInput')?.value || '').trim();
                    const desc = String(container.querySelector('#metaDescInput')?.value || '').trim();
                    const keywords = String(container.querySelector('#metaKeywordsInput')?.value || '').trim();
                    if (title) document.title = title;
                    const metaDesc = document.querySelector('meta[name="description"]');
                    if (metaDesc) metaDesc.setAttribute('content', desc);
                    const metaKeywords = document.querySelector('meta[name="keywords"]');
                    if (metaKeywords) metaKeywords.setAttribute('content', keywords);
                    pushAdminLog('SEO metadata updated', 'OK');
                    showAdminMediaToast('SEO settings saved.', 'success');
                });
            }
            if (saveThemeBtn) {
                saveThemeBtn.addEventListener('click', () => {
                    const primary = String(container.querySelector('#primaryColorPicker')?.value || '#E8741E').trim();
                    const accent = String(container.querySelector('#accentColorPicker')?.value || '#1a1a1a').trim();
                    applyPremiumBranding({ primary, accent });
                    adminState.cache.clear();
                    showAdminMediaToast('Brand theme applied globally.', 'success');
                });
            }

            if (saveHeroContentBtn) {
                saveHeroContentBtn.addEventListener('click', () => {
                    const next = getSiteControlSettings();
                    next.hero = {
                        title: String(container.querySelector('#heroTitleInput')?.value || '').trim(),
                        tagline: String(container.querySelector('#heroTaglineInput')?.value || '').trim(),
                        slogan: String(container.querySelector('#heroSloganInput')?.value || '').trim(),
                        subtitle: String(container.querySelector('#heroSubtitleInput')?.value || '').trim()
                    };
                    saveSiteControlSettings(next);
                    applyHeroContentSettings(next);
                    showAdminMediaToast('Hero content updated.', 'success');
                });
            }
            if (previewHeroContentBtn) {
                previewHeroContentBtn.addEventListener('click', () => {
                    const draft = getSiteControlSettings();
                    draft.hero = {
                        title: String(container.querySelector('#heroTitleInput')?.value || '').trim(),
                        tagline: String(container.querySelector('#heroTaglineInput')?.value || '').trim(),
                        slogan: String(container.querySelector('#heroSloganInput')?.value || '').trim(),
                        subtitle: String(container.querySelector('#heroSubtitleInput')?.value || '').trim()
                    };
                    applyHeroContentSettings(draft);
                    showAdminMediaToast('Hero preview updated.', 'info');
                });
            }

            if (serviceCardSelector) {
                serviceCardSelector.addEventListener('change', () => {
                    const cardId = String(serviceCardSelector.value || '').trim();
                    const card = cardId ? document.getElementById(cardId) : null;
                    const titleNode = card ? card.querySelector('h3') : null;
                    const descNode = card ? card.querySelector('p') : null;
                    if (serviceTitleInput) serviceTitleInput.value = String(titleNode?.textContent || '').trim();
                    if (serviceDescInput) serviceDescInput.value = String(descNode?.textContent || '').trim();
                });
            }

            if (saveServiceCardBtn) {
                saveServiceCardBtn.addEventListener('click', () => {
                    const cardId = String(serviceCardSelector?.value || '').trim();
                    if (!cardId) {
                        showAdminMediaToast('Select a service card first.', 'warning');
                        return;
                    }
                    const next = getSiteControlSettings();
                    next.services = next.services && typeof next.services === 'object' ? next.services : {};
                    next.services[cardId] = {
                        title: String(serviceTitleInput?.value || '').trim(),
                        description: String(serviceDescInput?.value || '').trim()
                    };
                    saveSiteControlSettings(next);
                    applyServiceCardContentSettings(next);
                    showAdminMediaToast('Service card content updated.', 'success');
                });
            }
            if (previewServiceCardBtn) {
                previewServiceCardBtn.addEventListener('click', () => {
                    const cardId = String(serviceCardSelector?.value || '').trim();
                    if (!cardId) return;
                    const draft = getSiteControlSettings();
                    draft.services = draft.services && typeof draft.services === 'object' ? draft.services : {};
                    draft.services[cardId] = {
                        title: String(serviceTitleInput?.value || '').trim(),
                        description: String(serviceDescInput?.value || '').trim()
                    };
                    applyServiceCardContentSettings(draft);
                    showAdminMediaToast('Service preview updated.', 'info');
                });
            }

            container.addEventListener('click', (e) => {
                const trigger = e.target.closest('[data-action]');
                if (!trigger) return;
                const action = String(trigger.dataset.action || '').trim();
                const sectionId = String(trigger.dataset.sectionId || '').trim();
                if (!sectionId) return;
                const next = getSiteControlSettings();
                const order = Array.isArray(next.sectionOrder) ? next.sectionOrder.slice() : defaultSiteControlSettings.sectionOrder.slice();
                const idx = order.indexOf(sectionId);
                if (idx < 0) return;
                if (action === 'section-move-up' && idx > 0) {
                    [order[idx - 1], order[idx]] = [order[idx], order[idx - 1]];
                    next.sectionOrder = order;
                    saveSiteControlSettings(next);
                    applySiteSectionOrderAndVisibility(next);
                    setAdminTab('site-control');
                    return;
                }
                if (action === 'section-move-down' && idx < order.length - 1) {
                    [order[idx + 1], order[idx]] = [order[idx], order[idx + 1]];
                    next.sectionOrder = order;
                    saveSiteControlSettings(next);
                    applySiteSectionOrderAndVisibility(next);
                    setAdminTab('site-control');
                }
            });

            container.addEventListener('change', (e) => {
                const toggle = e.target.closest('[data-action="section-visible"]');
                if (!toggle) return;
                const sectionId = String(toggle.dataset.sectionId || '').trim();
                if (!sectionId) return;
                const next = getSiteControlSettings();
                next.sectionVisibility = { ...(next.sectionVisibility || {}), [sectionId]: !!toggle.checked };
                saveSiteControlSettings(next);
                applySiteSectionOrderAndVisibility(next);
            });

            let draggedSectionId = '';
            container.querySelectorAll('[data-action="section-drag"]').forEach((node) => {
                node.addEventListener('dragstart', (event) => {
                    draggedSectionId = String(node.dataset.sectionId || '').trim();
                    event.dataTransfer.effectAllowed = 'move';
                });
            });
            container.querySelectorAll('.admin-notification-item').forEach((row) => {
                row.addEventListener('dragover', (event) => {
                    event.preventDefault();
                    row.classList.add('drag-over');
                });
                row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
                row.addEventListener('drop', (event) => {
                    event.preventDefault();
                    row.classList.remove('drag-over');
                    const target = String(row.querySelector('[data-section-id]')?.dataset.sectionId || '').trim();
                    if (!draggedSectionId || !target || draggedSectionId === target) return;
                    const next = getSiteControlSettings();
                    const order = Array.isArray(next.sectionOrder) ? next.sectionOrder.slice() : [];
                    const from = order.indexOf(draggedSectionId);
                    const to = order.indexOf(target);
                    if (from < 0 || to < 0) return;
                    order.splice(from, 1);
                    order.splice(to, 0, draggedSectionId);
                    next.sectionOrder = order;
                    saveSiteControlSettings(next);
                    applySiteSectionOrderAndVisibility(next);
                    setAdminTab('site-control');
                });
            });
        }

        function renderAdminNotifications(container) {
            const notifications = getAdminNotifications();
            container.innerHTML = `
                <div class="admin-v2-section">
                    <div class="section-header-v2">
                        <h2>Notification Center</h2>
                        <div class="header-actions">
                            <button class="admin-btn-premium" data-action="notifications-enable-browser">Enable Browser Alerts</button>
                            <button class="admin-btn-premium" data-action="notifications-mark-read">Mark all read</button>
                        </div>
                    </div>
                    <div class="admin-notification-list">
                        ${notifications.length ? notifications.map((entry) => `
                            <article class="admin-notification-item ${entry.read ? '' : 'is-unread'}">
                                <header>
                                    <strong>${escapeHTML(entry.title || 'Notification')}</strong>
                                    <span>${new Date(entry.createdAt || Date.now()).toLocaleString()}</span>
                                </header>
                                <p>${escapeHTML(entry.details || '')}</p>
                                <small>Type: ${escapeHTML(entry.type || 'info')}</small>
                            </article>
                        `).join('') : '<div class="admin-empty">No notifications yet.</div>'}
                    </div>
                </div>
            `;

            container.addEventListener('click', (e) => {
                const enableBrowser = e.target.closest('[data-action="notifications-enable-browser"]');
                if (enableBrowser) {
                    if (typeof Notification === 'undefined') {
                        showAdminMediaToast('Browser notifications are not supported here.', 'warning');
                        return;
                    }
                    Notification.requestPermission().then((permission) => {
                        if (permission === 'granted') {
                            showAdminMediaToast('Browser alerts enabled.', 'success');
                        } else {
                            showAdminMediaToast('Browser alerts not enabled.', 'warning');
                        }
                    }).catch(() => {
                        showAdminMediaToast('Unable to request notification permission.', 'error');
                    });
                    return;
                }
                const trigger = e.target.closest('[data-action="notifications-mark-read"]');
                if (!trigger) return;
                markAllAdminNotificationsRead();
                setAdminTab('notifications');
            });
        }

        // --- Site health (round 9, replaces the old "Control Center" notes) ---
        // Each check shows green (ok), amber (warn) or red (bad) with a plain
        // reason and a button to the admin page that fixes it.
        const SITE_HEALTH_CHECKS = [
            ['supabase', 'Storage (Supabase)', 'fas fa-database'],
            ['session', 'Your admin sign-in', 'fas fa-user-shield'],
            ['galleries', 'Galleries', 'fas fa-images'],
            ['leads', 'Leads', 'fas fa-inbox'],
            ['reviews', 'Reviews', 'fas fa-star'],
            ['topbar', 'Top advert bar', 'fas fa-bullhorn'],
            ['banner', 'Offer banner', 'fas fa-rectangle-ad'],
            ['google', 'Google reviews feed', 'fab fa-google'],
            ['brand', 'Brand colour', 'fas fa-palette'],
            ['storage', 'Uploaded files', 'fas fa-folder-open']
        ];

        const SITE_HEALTH_FIX_LABELS = { projects: 'Open Galleries', leads: 'Open Leads', reviews: 'Open Reviews', adverts: 'Open Adverts', 'site-control': 'Open Site Control', media: 'Open Media' };

        function siteHealthRowHTML([key, title, icon]) {
            return `
                <li class="sh-row" data-sh="${key}" data-state="busy">
                    <span class="sh-dot" aria-hidden="true"></span>
                    <i class="${icon} sh-icon" aria-hidden="true"></i>
                    <div class="sh-body"><strong>${title}</strong><span class="sh-text">Checking...</span></div>
                    <span class="sh-fix-slot"></span>
                </li>`;
        }

        async function runSiteHealthCheck(key) {
            const supabase = ensureSupabaseClient();
            const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
            const offlineMsg = 'Storage can\'t be reached. Your Supabase project may be paused (see ADMIN_SETUP.md).';
            switch (key) {
                case 'supabase': {
                    if (!supabase) return { state: 'bad', text: 'Not set up: add the project URL and key (see ADMIN_SETUP.md).' };
                    try {
                        const { error } = await withTimeout(supabase.from(ADVERTS_TABLE).select('id').limit(1), 8000, 'Health: storage');
                        if (error) throw error;
                        return { state: 'ok', text: 'Connected.' };
                    } catch {
                        return { state: 'bad', text: offlineMsg };
                    }
                }
                case 'session': {
                    try {
                        const { data } = await supabase.auth.getSession();
                        const email = data?.session?.user?.email;
                        if (email) return { state: 'ok', text: `Signed in as ${email}.` };
                    } catch {}
                    return { state: 'bad', text: 'Not signed in: changes will be refused. Sign out and sign in again.' };
                }
                case 'galleries': {
                    await loadServiceGallery(true);
                    if (serviceGallery.status !== 'ready') return { state: 'bad', text: serviceGallery.message || offlineMsg, fix: 'projects' };
                    const n = serviceGallery.items.length;
                    if (!n) return { state: 'warn', text: 'No gallery items yet, so the built-in photos show. Press "Import site photos" in Galleries.', fix: 'projects' };
                    const services = new Set(serviceGallery.items.map((it) => it.category)).size;
                    return { state: 'ok', text: `${plural(n, 'item')} across ${plural(services, 'service')}.`, fix: 'projects' };
                }
                case 'leads': {
                    if (!supabase) return { state: 'bad', text: offlineMsg, fix: 'leads' };
                    try {
                        const { data, error } = await withTimeout(supabase.from('leads').select('*'), 10000, 'Health: leads');
                        if (error) throw error;
                        const rows = (Array.isArray(data) ? data : []).map(fromRemoteRow);
                        if (!rows.length) return { state: 'ok', text: 'No leads yet. New quote requests will appear in Leads.', fix: 'leads' };
                        const newest = rows.map((r) => String(r.createdAt || '')).sort().pop();
                        const when = newest ? new Date(newest).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) : '';
                        return { state: 'ok', text: `${plural(rows.length, 'lead')} saved${when && when !== 'Invalid Date' ? `, newest ${when}` : ''}.`, fix: 'leads' };
                    } catch {
                        return { state: 'bad', text: 'Leads can\'t be read. New quote requests may not be saved.', fix: 'leads' };
                    }
                }
                case 'reviews': {
                    await loadReviewsFromSupabase();
                    if (siteReviews.error) return { state: 'bad', text: siteReviews.error, fix: 'reviews' };
                    // round 11: reviews go live at once; hidden ones are the owner's choice, not a problem
                    const hidden = siteReviews.items.filter((r) => r.status !== 'published').length;
                    const published = siteReviews.items.length - hidden;
                    return { state: 'ok', text: `${published} on the website${hidden ? `, ${hidden} hidden` : ''}.`, fix: 'reviews' };
                }
                case 'topbar':
                case 'banner': {
                    await loadAdverts();
                    if (advertState.status !== 'ready') return { state: 'bad', text: advertState.message || offlineMsg, fix: 'adverts' };
                    if (key === 'topbar') {
                        const t = advertState.topbar || {};
                        if (!t.enabled) return { state: 'ok', text: 'Off.', fix: 'adverts' };
                        if (!t.message) return { state: 'warn', text: 'On, but it has no message, so visitors see nothing.', fix: 'adverts' };
                        return isTopbarLive(t)
                            ? { state: 'ok', text: `Showing: "${t.message}"`, fix: 'adverts' }
                            : { state: 'warn', text: 'On, but outside its start and end dates, so it is hidden.', fix: 'adverts' };
                    }
                    if (!advertState.bannerEnabled) return { state: 'ok', text: 'Off.', fix: 'adverts' };
                    const live = advertState.items.filter((ad) => ad.active).length;
                    return live
                        ? { state: 'ok', text: `On, ${plural(live, 'offer')} showing.`, fix: 'adverts' }
                        : { state: 'warn', text: 'On, but no offers are active, so the built-in offers show.', fix: 'adverts' };
                }
                case 'google': {
                    const settings = await loadGoogleSettings();
                    try {
                        const place = await withTimeout(fetchGooglePlace(settings.apiKey, settings.placeId), 10000, 'Health: Google');
                        const rating = Number(place.rating);
                        const n = toGoogleReviewCards(place).length;
                        const keyNote = settings.saved.apiKey ? '' : ' (built-in key)';
                        return { state: 'ok', text: `Connected${keyNote}: ${rating > 0 ? rating.toFixed(1) : 'no'} stars from ${Number(place.userRatingCount) || 0} reviews, ${n} shown on the site.`, fix: 'site-control' };
                    } catch (err) {
                        return { state: 'bad', text: `${describeGoogleError(err)} Visitors see the "View reviews on Google" box instead.`, fix: 'site-control' };
                    }
                }
                case 'brand': {
                    const primary = readBrandCache(); // the saved colour, not an unsaved preview
                    const ratio = brandContrast(primary, accentTextFor(primary));
                    const name = primary === '#e8741e' ? 'Hailifu orange' : primary.toUpperCase();
                    if (ratio >= 4.5) return { state: 'ok', text: `${name}, button text is easy to read.`, fix: 'site-control' };
                    return { state: ratio >= 3 ? 'warn' : 'bad', text: `${name}: button text is hard to read (contrast ${ratio.toFixed(1)} to 1). Pick a darker or lighter colour.`, fix: 'site-control' };
                }
                case 'storage': {
                    await loadMediaFromSupabase();
                    if (mediaUi.status !== 'ready') return { state: 'bad', text: mediaUi.message || offlineMsg, fix: 'media' };
                    return { state: 'ok', text: `${plural((adminState.data.media || []).length, 'file')} in storage.`, fix: 'media' };
                }
                default:
                    return { state: 'warn', text: 'Unknown check.' };
            }
        }

        function runSiteHealth(root) {
            const summary = root.querySelector('#shSummary');
            const rows = Array.from(root.querySelectorAll('.sh-row'));
            rows.forEach((row) => {
                row.dataset.state = 'busy';
                row.querySelector('.sh-text').textContent = 'Checking...';
                row.querySelector('.sh-fix-slot').innerHTML = '';
            });
            if (summary) { summary.dataset.state = 'busy'; summary.textContent = 'Checking everything...'; }
            return Promise.all(rows.map(async (row) => {
                let res;
                try { res = await runSiteHealthCheck(row.dataset.sh); } catch (err) { res = { state: 'bad', text: `Check failed: ${String(err?.message || err)}` }; }
                row.dataset.state = res.state;
                row.querySelector('.sh-text').textContent = res.text;
                if (res.fix) row.querySelector('.sh-fix-slot').innerHTML = `<button type="button" class="hm-btn" data-sh-fix="${res.fix}">${SITE_HEALTH_FIX_LABELS[res.fix] || 'Open'}</button>`;
                return res.state;
            })).then((states) => {
                const bad = states.filter((s) => s === 'bad').length;
                const warn = states.filter((s) => s === 'warn').length;
                if (!summary) return;
                summary.dataset.state = bad ? 'bad' : warn ? 'warn' : 'ok';
                if (bad) summary.textContent = `${bad} problem${bad === 1 ? '' : 's'} to fix${warn ? `, ${warn} to look at` : ''}.`;
                else if (warn) summary.textContent = `Working. ${warn} thing${warn === 1 ? '' : 's'} to look at.`;
                else summary.textContent = 'Everything is working.';
            });
        }

        function renderAdminControlCenter(container) {
            container.innerHTML = `
                <div class="admin-v2-section sh-page" id="shPage">
                    <div class="sh-head">
                        <p class="sh-summary" id="shSummary" aria-live="polite" data-state="busy">Checking everything...</p>
                        <button type="button" class="hm-btn" data-sh-again><i class="fas fa-rotate"></i> Check again</button>
                    </div>
                    <ul class="sh-list" id="shList">${SITE_HEALTH_CHECKS.map(siteHealthRowHTML).join('')}</ul>
                </div>
            `;
            const page = container.querySelector('#shPage');
            page.addEventListener('click', (e) => {
                const fix = e.target.closest('[data-sh-fix]');
                if (fix) { setAdminTab(String(fix.dataset.shFix)); return; }
                const again = e.target.closest('[data-sh-again]');
                if (again && !again.disabled) {
                    again.disabled = true;
                    runSiteHealth(page).finally(() => { again.disabled = false; });
                }
            });
            runSiteHealth(page);
        }

        function syncAdminLazyLoopNodes() {
            if (!adminPanel) return;
            if (!adminLazyLoop) adminLazyLoop = document.getElementById('adminLazyLoop');
            if (!adminLazyLoopTrack) adminLazyLoopTrack = document.getElementById('adminLazyLoopTrack');
            if (!adminLazyLoopDots) adminLazyLoopDots = document.getElementById('adminLazyLoopDots');
            if (!adminLazyLoopTrack) return;
            adminLazyLoopSlides = Array.from(adminLazyLoopTrack.querySelectorAll('.admin-lazyloop-slide'));
        }

        function setAdminLazyLoopIndex(nextIndex, opts = {}) {
            syncAdminLazyLoopNodes();
            if (!adminLazyLoopTrack) return;
            if (adminLazyLoopCount <= 0) return;
            if (!adminLazyLoopSlides.length) return;

            const animate = opts.animate !== false;
            const normalized = ((Number(nextIndex) || 0) % adminLazyLoopCount + adminLazyLoopCount) % adminLazyLoopCount;
            adminLazyLoopIndex = normalized;

            adminLazyLoopTrack.style.transition = animate ? '' : 'none';
            adminLazyLoopTrack.style.transform = `translate3d(${-adminLazyLoopIndex * 100}%, 0, 0)`;

            if (!animate) {
                requestAnimationFrame(() => {
                    try { adminLazyLoopTrack.style.transition = ''; } catch {}
                });
            }

            if (adminLazyLoopDots) {
                const dots = Array.from(adminLazyLoopDots.querySelectorAll('.admin-lazyloop-dot'));
                dots.forEach((dot, idx) => dot.classList.toggle('active', idx === adminLazyLoopIndex));
            }
        }

        function advanceAdminLazyLoop(delta = 1) {
            setAdminLazyLoopIndex(adminLazyLoopIndex + (Number(delta) || 1), { animate: true });
        }

        function stopAdminLazyLoop() {
            if (adminLazyLoopTimer) {
                clearInterval(adminLazyLoopTimer);
                adminLazyLoopTimer = null;
            }
        }

        function startAdminLazyLoop() {
            stopAdminLazyLoop();
            if (adminLazyLoopCount <= 1) return;
            adminLazyLoopTimer = setInterval(() => {
                advanceAdminLazyLoop(1);
            }, 4500);
        }

        function ensureAdminLazyLoopBindings() {
            if (!adminLazyLoopDots) return;
            if (adminLazyLoopHasBindings) return;
            adminLazyLoopHasBindings = true;

            adminLazyLoopDots.addEventListener('click', (e) => {
                const dot = e.target.closest('.admin-lazyloop-dot');
                if (!dot) return;
                const dots = Array.from(adminLazyLoopDots.querySelectorAll('.admin-lazyloop-dot'));
                const idx = dots.indexOf(dot);
                if (idx < 0) return;
                stopAdminLazyLoop();
                setAdminLazyLoopIndex(idx, { animate: true });
                startAdminLazyLoop();
            });
        }

        function renderAdminLazyLoop() {
            syncAdminLazyLoopNodes();
            if (!adminLazyLoopTrack || !adminLazyLoopDots) return;

            const projects = getProjects();
            const cacheStamp = Date.now();
            const featured = projects
                .flatMap((p) => {
                    if (!p || !isVisibilityEnabled(p, 'showInFeatured', 'featured')) return [];
                    const mediaList = getProjectSurfaceMediaList(p, 'featured');
                    if (!mediaList.length) return [];
                    return mediaList
                        .map((mediaItem) => {
                            const mediaSrc = String(mediaItem?.mediaSrc || '').trim();
                            if (!mediaSrc) return null;
                            return {
                                ...p,
                                mediaSrc,
                                mediaType: String(mediaItem?.mediaType || 'image') || 'image',
                                thumbSrc: String(mediaItem?.thumbSrc || '').trim()
                            };
                        })
                        .filter(Boolean);
                })
                .filter(Boolean)
                .sort((a, b) => {
                    const ta = Number(a?.timestamp) || (Date.parse(a?.createdAt || '') || 0);
                    const tb = Number(b?.timestamp) || (Date.parse(b?.createdAt || '') || 0);
                    return tb - ta;
                });

            adminLazyLoopCount = featured.length;
            adminLazyLoopIndex = 0;

            if (!featured.length) {
                adminLazyLoopTrack.innerHTML = `
                    <div class="admin-lazyloop-slide is-empty">
                        <div class="admin-lazyloop-overlay">
                            <div class="admin-lazyloop-title">No projects yet</div>
                            <div class="admin-lazyloop-subtitle">Add a project in the Admin Portal to see it here.</div>
                        </div>
                    </div>
                `;
                adminLazyLoopDots.innerHTML = '';
                syncAdminLazyLoopNodes();
                stopAdminLazyLoop();
                return;
            }

            const getMediaMarkup = (project) => {
                const type = String(project?.mediaType || 'image').toLowerCase();
                const srcRaw = String(project?.mediaSrc || '').trim();
                const thumbRaw = String(project?.thumbSrc || '').trim();

                const normalize = (url) => {
                    try {
                        if (typeof normalizeProjectMediaPath === 'function') return normalizeProjectMediaPath(url);
                    } catch {}
                    return url;
                };

                if (type === 'youtube') {
                    const youtubeId = getYoutubeVideoId(srcRaw);
                    const fallbackThumb = youtubeId ? getYoutubeThumbUrl(youtubeId) : '';
                    const thumb = normalize(thumbRaw) || normalize(fallbackThumb);
                    if (!thumb) return '';
                    const finalThumb = appendCacheBuster(buildAdminMediaPath(thumb) || thumb, cacheStamp);
                    const crossorigin = getFirebaseCrossoriginAttr(finalThumb);
                    return `<img src="${finalThumb}" alt="" loading="lazy" decoding="async" ${crossorigin} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')">`;
                }
                if (type === 'video') {
                    const src = normalize(srcRaw);
                    if (!src) return '';
                    const finalSrc = appendCacheBuster(buildAdminMediaPath(src) || src, cacheStamp);
                    return `<video src="${finalSrc}" muted playsinline webkit-playsinline loop autoplay preload="metadata"></video>`;
                }
                const src = normalize(srcRaw);
                if (!src) return '';
                const finalSrc = appendCacheBuster(buildAdminMediaPath(src) || src, cacheStamp);
                const crossorigin = getFirebaseCrossoriginAttr(finalSrc);
                return `<img src="${finalSrc}" alt="" loading="lazy" decoding="async" ${crossorigin} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')">`;
            };

            adminLazyLoopTrack.innerHTML = featured.map((p) => {
                const title = String(p?.title || 'Project').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const category = String(p?.category || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return `
                    <div class="admin-lazyloop-slide" data-generated-project-id="${String(p?.id || '')}">
                        <div class="admin-lazyloop-media">${getMediaMarkup(p)}</div>
                        <div class="admin-lazyloop-overlay">
                            <div class="admin-lazyloop-title">${title}</div>
                            <div class="admin-lazyloop-subtitle">${category}</div>
                        </div>
                    </div>
                `;
            }).join('');

            adminLazyLoopDots.innerHTML = featured.map((_, idx) => {
                const active = idx === 0 ? ' active' : '';
                return `<span class="admin-lazyloop-dot${active}" role="presentation"></span>`;
            }).join('');

            syncAdminLazyLoopNodes();
            ensureAdminLazyLoopBindings();
            setAdminLazyLoopIndex(0, { animate: false });
        }

        // Old setAdminTab function removed - replaced by newer version at line 5591 with Supabase integration and premium UI

        function populateSiteControlForm() {
            const siteTitleInput = document.getElementById('siteTitleInput');
            const metaDescInput = document.getElementById('metaDescInput');
            const metaKeywordsInput = document.getElementById('metaKeywordsInput');
            const primaryColorPicker = document.getElementById('primaryColorPicker');
            
            if (siteTitleInput) siteTitleInput.value = document.title;
            if (metaDescInput) {
                const meta = document.querySelector('meta[name="description"]');
                metaDescInput.value = meta ? meta.getAttribute('content') : '';
            }
            if (metaKeywordsInput) {
                const meta = document.querySelector('meta[name="keywords"]');
                metaKeywordsInput.value = meta ? meta.getAttribute('content') : '';
            }
            
            if (primaryColorPicker) primaryColorPicker.value = readBrandCache();
        }

        // --- Brand colour (round 9, 2026-10-01) ---
        // One colour for the whole site, saved for every visitor in the adverts
        // settings row "__brand_settings" { primary: '#rrggbb' }. Text on the colour
        // is dark or white, whichever reads better (WCAG contrast). The old
        // per-browser "hailifu_branding" (with a second accent that darkened the
        // site) is ignored. Literals instead of consts: this runs before they exist.
        function normalizeBrandHex(value) {
            const v = String(value || '').trim().toLowerCase();
            if (/^#[0-9a-f]{6}$/.test(v)) return v;
            if (/^#[0-9a-f]{3}$/.test(v)) return '#' + v.slice(1).split('').map((c) => c + c).join('');
            return '';
        }

        function brandContrast(hexA, hexB) {
            const lum = (hex) => {
                const n = parseInt(hex.slice(1), 16);
                const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
                    const s = c / 255;
                    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
                });
                return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
            };
            const a = lum(hexA);
            const b = lum(hexB);
            return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        }

        function accentTextFor(hex) {
            const accent = normalizeBrandHex(hex) || '#e8741e';
            return brandContrast(accent, '#140c05') >= brandContrast(accent, '#ffffff') ? '#140c05' : '#ffffff';
        }

        function applyBrandColor(hex) {
            const primary = normalizeBrandHex(hex) || '#e8741e';
            const root = document.documentElement;
            ['--orange', '--brand-primary', '--rating-star', '--accent-gold'].forEach((name) => root.style.setProperty(name, primary));
            root.style.setProperty('--p-on-accent', accentTextFor(primary));
            ['--brand-secondary', '--brand-dark'].forEach((name) => root.style.removeProperty(name));
            return primary;
        }

        function readBrandCache() {
            try { return normalizeBrandHex(localStorage.getItem('hailifu_brand_v1')) || '#e8741e'; } catch { return '#e8741e'; }
        }

        function writeBrandCache(hex) {
            try {
                localStorage.setItem('hailifu_brand_v1', hex);
                localStorage.removeItem('hailifu_branding');
            } catch {}
        }

        async function loadBrandSettings() {
            const supabase = ensureSupabaseClient();
            if (!supabase) return null;
            try {
                const { data, error } = await withTimeout(
                    supabase.from('adverts').select('*').eq('id', '__brand_settings'),
                    8000,
                    'Loading brand colour'
                );
                if (error || !Array.isArray(data)) return null;
                const primary = (data[0] && normalizeBrandHex(fromRemoteRow(data[0]).primary)) || '#e8741e';
                writeBrandCache(applyBrandColor(primary));
                return primary;
            } catch {
                return null;
            }
        }

        async function saveBrandSettings(hex) {
            const primary = normalizeBrandHex(hex);
            if (!primary) return { ok: false, message: 'Pick a colour first.' };
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const record = { id: '__brand_settings', type: 'settings', primary };
                const { data, error } = await withTimeout(
                    supabase.from('adverts').upsert([toRemoteRow(record)], { onConflict: 'id' }).select(),
                    10000,
                    'Saving brand colour'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('not allowed');
                writeBrandCache(applyBrandColor(primary));
                return { ok: true };
            } catch (err) {
                return { ok: false, message: /not allowed|security|42501|jwt/i.test(String(err?.message || err)) ? 'Not allowed. Sign in again and retry.' : 'Could not save. Check your connection.' };
            }
        }

        function describeBrandColor(hex) {
            const primary = normalizeBrandHex(hex) || '#e8741e';
            const text = accentTextFor(primary);
            const ratio = brandContrast(primary, text);
            const verdict = ratio >= 4.5 ? 'easy to read' : ratio >= 3 ? 'readable for big text only' : 'hard to read, pick a different colour';
            return `${text === '#ffffff' ? 'White' : 'Dark'} text on this colour: contrast ${ratio.toFixed(1)} to 1, ${verdict}.`;
        }

        function bindBrandCard(scope) {
            const root = scope || document;
            const card = root.querySelector('#brCard');
            const input = root.querySelector('#brandColor');
            const status = root.querySelector('#brStatus');
            if (!card || !input || card.dataset.bound) return;
            card.dataset.bound = '1';
            const say = (text, tone) => { if (status) { status.textContent = text; status.dataset.tone = tone; } };
            const saved = readBrandCache();
            input.value = saved;
            say(describeBrandColor(saved), 'idle');
            input.addEventListener('input', () => {
                applyBrandColor(input.value);
                say(`Preview only. ${describeBrandColor(input.value)} Press Save to use it for everyone.`, 'busy');
            });
            card.addEventListener('click', async (e) => {
                const btn = e.target.closest && e.target.closest('[data-br-action]');
                if (!btn || btn.disabled) return;
                const reset = btn.dataset.brAction === 'reset';
                if (reset) {
                    input.value = '#e8741e';
                    applyBrandColor('#e8741e');
                }
                btn.disabled = true;
                try {
                    const res = await saveBrandSettings(input.value);
                    if (!res.ok) applyBrandColor(readBrandCache());
                    const okText = reset ? 'Hailifu orange is back for everyone.' : 'Saved. Every visitor now sees this colour.';
                    say(res.ok ? okText : res.message, res.ok ? 'ok' : 'error');
                    showAdminMediaToast(res.ok ? 'Brand colour saved' : res.message, res.ok ? 'success' : 'error');
                } finally {
                    btn.disabled = false;
                }
            });
        }

        // --- Aftercare photo (round 10) ---
        // One photo or video for the Aftercare card, saved for every visitor in the
        // adverts settings row "__aftercare_settings" { imageUrl }. Empty = no photo
        // (round 11: the built-in photo was removed). Replaces the old per-browser / Firebase "integrity" image.
        function readAftercareCache() {
            try { return String(localStorage.getItem('hailifu_aftercare_v1') || '').trim(); } catch { return ''; }
        }

        function writeAftercareCache(url) {
            try {
                if (url) localStorage.setItem('hailifu_aftercare_v1', url);
                else localStorage.removeItem('hailifu_aftercare_v1');
                localStorage.removeItem('hailifu_integrity_image_url'); // old per-browser photo
            } catch {}
        }

        function cleanAftercareUrl(value) {
            const url = String(value || '').trim();
            if (/^https:\/\/[^\s"'<>]+$/i.test(url)) return url;
            if (/^\/[^\s"'<>]*$/.test(url) && !url.startsWith('//')) return url;
            return '';
        }

        function showAftercarePhoto(url) {
            loadIntegrityImage(cleanAftercareUrl(url));
        }

        async function loadAftercareSettings() {
            const supabase = ensureSupabaseClient();
            if (!supabase) return;
            try {
                const { data, error } = await withTimeout(
                    supabase.from('adverts').select('*').eq('id', '__aftercare_settings'),
                    8000,
                    'Loading aftercare photo'
                );
                if (error || !Array.isArray(data)) return;
                const url = data[0] ? cleanAftercareUrl(fromRemoteRow(data[0]).imageUrl) : '';
                writeAftercareCache(url);
                showAftercarePhoto(url);
            } catch {}
        }

        async function saveAftercareUrl(url) {
            const imageUrl = url ? cleanAftercareUrl(url) : '';
            if (url && !imageUrl) return { ok: false, message: 'Use a link that starts with https://' };
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const record = { id: '__aftercare_settings', type: 'settings', imageUrl };
                const { data, error } = await withTimeout(
                    supabase.from('adverts').upsert([toRemoteRow(record)], { onConflict: 'id' }).select(),
                    10000,
                    'Saving aftercare photo'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('not allowed');
                writeAftercareCache(imageUrl);
                showAftercarePhoto(imageUrl);
                return { ok: true, imageUrl };
            } catch (err) {
                return { ok: false, message: /not allowed|security|42501|jwt/i.test(String(err?.message || err)) ? 'Not allowed. Sign in again and retry.' : 'Could not save. Check your connection.' };
            }
        }

        // storage path of a photo this card uploaded itself (only those are removed when replaced)
        function aftercareStoragePath(url) {
            const m = String(url || '').match(/\/storage\/v1\/object\/public\/media\/(site\/aftercare-[^?#]+)/);
            return m ? decodeURIComponent(m[1]) : '';
        }

        function aftercarePreviewHTML(url) {
            const src = cleanAftercareUrl(url);
            if (!src) return '<p class="af-empty"><i class="fas fa-image" aria-hidden="true"></i> No photo yet. The card shows without a photo until you add one.</p>';
            return isIntegrityVideoUrl(src)
                ? `<video src="${escapeHTML(src)}" muted playsinline loop autoplay></video>`
                : `<img src="${escapeHTML(src)}" alt="Aftercare photo">`;
        }

        function bindAftercareCard(scope) {
            const root = scope || document;
            const card = root.querySelector('#afCard');
            if (!card || card.dataset.bound) return;
            card.dataset.bound = '1';
            const preview = card.querySelector('#afPreview');
            const status = card.querySelector('#afStatus');
            const fileInput = card.querySelector('#afFile');
            const linkInput = card.querySelector('#afLink');
            const library = card.querySelector('#afLibrary');
            let current = readAftercareCache();
            let busy = false;
            const say = (text, tone) => { if (status) { status.textContent = text; status.dataset.tone = tone; } };
            const show = () => { if (preview) preview.innerHTML = aftercarePreviewHTML(current); };
            show();
            say(current ? 'Your own photo is showing.' : 'No photo yet: the card shows without one.', 'idle');

            const commit = async (url, okText) => {
                const previousPath = aftercareStoragePath(current);
                const res = await saveAftercareUrl(url);
                if (!res.ok) { say(res.message, 'error'); return false; }
                current = res.imageUrl;
                show();
                say(okText, 'ok');
                showAdminMediaToast('Aftercare photo saved', 'success');
                if (previousPath && previousPath !== aftercareStoragePath(current)) {
                    try { await ensureSupabaseClient().storage.from(MEDIA_BUCKET).remove([previousPath]); } catch {}
                }
                return true;
            };
            const run = async (job) => {
                if (busy) return;
                busy = true;
                card.classList.add('is-busy');
                try { await job(); } finally { busy = false; card.classList.remove('is-busy'); }
            };

            fileInput?.addEventListener('change', () => run(async () => {
                const file = fileInput.files && fileInput.files[0];
                fileInput.value = '';
                if (!file) return;
                const kind = getMediaKind(file.name, file.type);
                if (kind !== 'image' && kind !== 'video') { say('Choose a photo or a video.', 'error'); return; }
                if (kind === 'video' && file.size > MEDIA_MAX_VIDEO_BYTES) { say('That video is too big (max 50 MB).', 'error'); return; }
                let path = '';
                try {
                    say('Uploading...', 'busy');
                    const blob = kind === 'image' ? await optimizeImageForUpload(file) : file;
                    path = `site/aftercare-${buildMediaObjectName(blob)}`;
                    await uploadWithProgress(path, blob, (pct) => say(`Uploading... ${Math.round(pct)}%`, 'busy'));
                } catch (err) {
                    say(/not allowed|security|403|42501/i.test(String(err?.message || err)) ? 'Not allowed. Sign in again and retry.' : 'Upload failed. Check your connection.', 'error');
                    return;
                }
                const ok = await commit(getMediaPublicUrl(path), 'Saved. Every visitor now sees this photo.');
                if (!ok) { try { await ensureSupabaseClient().storage.from(MEDIA_BUCKET).remove([path]); } catch {} }
            }));

            card.addEventListener('click', (e) => {
                const pick = e.target.closest('[data-af-pick]');
                if (pick) {
                    const url = pick.dataset.afPick;
                    run(async () => {
                        if (await commit(url, 'Saved. Every visitor now sees this photo.') && library) library.hidden = true;
                    });
                    return;
                }
                const btn = e.target.closest('[data-af-action]');
                if (!btn) return;
                const action = btn.dataset.afAction;
                if (action === 'upload') fileInput?.click();
                else if (action === 'link') {
                    const url = String(linkInput?.value || '').trim();
                    if (!cleanAftercareUrl(url)) { say('Use a link that starts with https://', 'error'); return; }
                    run(async () => { if (await commit(url, 'Saved. Every visitor now sees this photo.') && linkInput) linkInput.value = ''; });
                } else if (action === 'reset') {
                    run(() => commit('', 'Removed. The card now shows without a photo.'));
                } else if (action === 'library' && library) {
                    if (!library.hidden) { library.hidden = true; return; }
                    library.hidden = false;
                    library.innerHTML = '<p class="af-library-note">Loading your Media Library...</p>';
                    run(async () => {
                        await loadMediaFromSupabase();
                        const files = (adminState.data.media || []).filter((m) => (m.kind === 'image' || m.kind === 'video') && m.url);
                        library.innerHTML = files.length
                            ? files.map((m) => `<button type="button" class="af-pick" data-af-pick="${escapeHTML(m.url)}" title="${escapeHTML(m.name)}">${m.kind === 'video' ? `<video src="${escapeHTML(m.url)}" muted preload="metadata"></video>` : `<img src="${escapeHTML(m.url)}" alt="" loading="lazy">`}</button>`).join('')
                            : '<p class="af-library-note">No photos in the Media Library yet.</p>';
                    });
                }
            });
        }

        // Older admin buttons still call this; only the main colour is used now.
        function applyPremiumBranding(branding) {
            if (!branding) return;
            writeBrandCache(applyBrandColor(branding.primary));
        }

        function setMediaLibraryProgress(state) {
            const active = !!state?.active;
            const pct = Math.max(0, Math.min(100, Number(state?.pct) || 0));
            const text = String(state?.text || '').trim();
            if (mediaLibraryProgress) {
                mediaLibraryProgress.classList.toggle('is-active', active);
                mediaLibraryProgress.setAttribute('aria-hidden', String(!active));
            }
            if (mediaLibraryProgressFill) mediaLibraryProgressFill.style.width = `${pct}%`;
            if (mediaLibraryProgressText && text) mediaLibraryProgressText.textContent = text;
        }

        function upsertMediaLibraryRecord(record) {
            const normalized = normalizeMediaLibraryRecord(record);
            if (!normalized) return Promise.reject(new Error('Invalid media record'));
            const current = getMediaLibraryRecords();
            const idx = current.findIndex((item) => String(item?.id || '') === normalized.id);
            const next = current.slice();
            if (idx >= 0) next[idx] = { ...current[idx], ...normalized };
            else next.unshift(normalized);
            saveMediaLibraryRecords(next);
            if (firebaseIsReady()) {
                const db = ensureFirebaseDb();
                if (db) return db.ref(`${getFirebaseMediaLibraryPath()}/${normalized.id}`).set(normalized);
            }
            renderMediaLibraryAndSections();
            return Promise.resolve();
        }

        function removeMediaLibraryRecord(mediaId) {
            const id = String(mediaId || '').trim();
            if (!id) return Promise.resolve();
            const current = getMediaLibraryRecords();
            const target = current.find((entry) => String(entry?.id || '') === id);
            const next = current.filter((entry) => String(entry?.id || '') !== id);
            saveMediaLibraryRecords(next);

            const assignments = { ...getSectionMediaAssignments() };
            Object.keys(assignments).forEach((slotKey) => {
                if (String(assignments?.[slotKey]?.mediaId || '') === id) delete assignments[slotKey];
            });
            saveSectionMediaAssignments(assignments);

            const projects = getProjects().map((project) => {
                const mediaIds = Array.isArray(project?.mediaIds) ? project.mediaIds : [];
                if (!mediaIds.length) return project;
                const filtered = mediaIds.filter((entryId) => String(entryId || '') !== id);
                return { ...project, mediaIds: filtered };
            });
            saveProjects(projects);

            if (!firebaseIsReady()) {
                renderMediaLibraryAndSections();
                loadProjects();
                return Promise.resolve();
            }

            const db = ensureFirebaseDb();
            const tasks = [];
            const failures = [];
            if (db) {
                tasks.push({
                    label: 'RTDB media record',
                    op: db.ref(`${getFirebaseMediaLibraryPath()}/${id}`).remove()
                });
                tasks.push({
                    label: 'RTDB section assignments',
                    op: db.ref(getFirebaseSectionMediaPath()).set(assignments)
                });
                const updates = {};
                projects.forEach((project) => {
                    if (!project?.id) return;
                    updates[`${project.id}/mediaIds`] = Array.isArray(project.mediaIds) ? project.mediaIds : [];
                });
                tasks.push({
                    label: 'RTDB projects mediaIds',
                    op: db.ref(getFirebaseProjectsPath()).update(updates)
                });
            } else {
                tasks.push({
                    label: 'Firebase database',
                    op: Promise.reject(new Error('Firebase Realtime Database unavailable.'))
                });
            }

            if (target?.provider === 'firebase') {
                const storage = ensureFirebaseStorageService();
                if (storage && target?.url) {
                    try {
                        tasks.push({
                            label: 'Firebase Storage file',
                            op: storage.refFromURL(target.url).delete()
                        });
                    } catch {}
                }
            }

            if (target?.provider === 'cloudinary' && target?.publicId) {
                // Skip Firebase callable function for Cloudinary deletion
                // Cloudinary assets can be deleted via the Cloudinary dashboard or API directly
                console.log('[HAILIFU] Cloudinary asset deletion skipped (Firebase function disabled):', target.publicId);
            }

            return Promise.allSettled(tasks.map((entry) => entry.op)).then((results) => {
                results.forEach((result, idx) => {
                    if (result.status === 'rejected') {
                        const label = tasks[idx]?.label || 'Delete step';
                        const reason = String(result.reason?.message || result.reason || 'Unknown failure');
                        failures.push(`${label}: ${reason}`);
                    }
                });
                renderMediaLibraryAndSections();
                loadProjects();
                if (failures.length) {
                    const blocked = failures.some((msg) => /permission|denied|unauth|auth|required/i.test(String(msg)));
                    if (blocked) {
                        throw new Error(`Delete partially failed (permissions): ${failures.join(' | ')}`);
                    }
                    throw new Error(`Delete partially failed: ${failures.join(' | ')}`);
                }
            });
        }

        function getCurrentSectionSlotKey() {
            return String(sectionSlotSelect?.value || MEDIA_SECTION_SLOTS[0]?.key || '').trim();
        }

        function assignMediaToSection(slotKey, mediaId) {
            const slot = String(slotKey || '').trim();
            const id = String(mediaId || '').trim();
            if (!slot) return Promise.resolve();
            const next = { ...getSectionMediaAssignments() };
            if (id) next[slot] = { mediaId: id };
            else delete next[slot];
            saveSectionMediaAssignments(next);
            renderMediaLibraryAndSections();
            if (firebaseIsReady()) {
                const db = ensureFirebaseDb();
                if (db) return db.ref(getFirebaseSectionMediaPath()).set(next);
            }
            return Promise.resolve();
        }

        async function uploadMediaLibraryFiles(files) {
            const list = Array.from(files || []).filter(Boolean);
            if (!list.length) return;
            const preset = getCloudinaryPresetValue();
            if (!preset) throw new Error('Set Cloudinary preset first in Projects tab.');
            persistCloudinaryPreset();
            for (let i = 0; i < list.length; i += 1) {
                const file = list[i];
                setMediaLibraryProgress({ active: true, pct: Math.round((i / list.length) * 100), text: `Uploading ${i + 1}/${list.length}...` });
                const payload = await cloudinaryUnsignedUpload(file, {
                    preset,
                    resourceType: 'auto',
                    folder: 'hailifu/media-library',
                    onProgress: (pct) => {
                        const overall = Math.round(((i + (pct / 100)) / list.length) * 100);
                        setMediaLibraryProgress({ active: true, pct: overall, text: `Uploading ${i + 1}/${list.length}...` });
                    }
                });
                const secureUrl = String(payload?.secure_url || '').trim();
                if (!secureUrl) continue;
                const mediaType = String(payload?.resource_type || '').toLowerCase() === 'video' ? 'video' : 'image';
                const record = {
                    id: `media_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
                    title: String(file?.name || '').trim(),
                    url: secureUrl,
                    type: mediaType,
                    provider: 'cloudinary',
                    publicId: String(payload?.public_id || '').trim(),
                    resourceType: String(payload?.resource_type || 'auto').trim().toLowerCase(),
                    createdAt: new Date().toISOString()
                };
                await upsertMediaLibraryRecord(record);
            }
            setMediaLibraryProgress({ active: false, pct: 0, text: 'Uploading...' });
        }

        function mediaTypeFromUrl(rawUrl) {
            const raw = String(rawUrl || '').trim().toLowerCase();
            if (!raw) return 'image';
            if (/youtube\.com|youtu\.be/.test(raw)) return 'youtube';
            if (/\.(mp4|webm|mov|m4v|ogg|ogv)(\?|#|$)/i.test(raw) || raw.includes('/video/upload/')) return 'video';
            return 'image';
        }

        function renderMediaLibraryCard(item, opts = {}) {
            const compact = !!opts.compact;
            const id = String(item?.id || '').trim();
            const title = escapeHtml(String(item?.title || id || 'Media'));
            const url = String(item?.url || '').trim();
            const safeUrl = escapeHtml(url);
            const type = String(item?.type || 'image').toLowerCase();
            const provider = escapeHtml(String(item?.provider || 'external').toUpperCase());
            const preview = type === 'video'
                ? `<video src="${safeUrl}" muted playsinline webkit-playsinline preload="metadata"></video>`
                : `<img src="${safeUrl}" alt="${title}" loading="lazy" decoding="async">`;
            const assignBtn = `<button class="upload-btn upload-btn--ghost" type="button" data-media-assign="${id}">Assign</button>`;
            const deleteBtn = compact ? '' : `<button class="upload-btn upload-btn--ghost" type="button" data-media-delete="${id}">Delete</button>`;
            return `
                <article class="media-asset-card" data-media-id="${id}">
                    <div class="media-asset-preview">${preview}</div>
                    <div class="media-asset-meta">
                        <div class="media-asset-title">${title}</div>
                        <div class="media-asset-submeta"><span>${escapeHtml(type.toUpperCase())}</span><span>${provider}</span></div>
                        <div class="media-asset-actions">${assignBtn}${deleteBtn}</div>
                    </div>
                </article>
            `;
        }

        function renderMediaLibraryAndSections() {
            const all = getMediaLibraryRecords()
                .map(normalizeMediaLibraryRecord)
                .filter((entry) => entry && !entry.deletedAt);
            const search = String(mediaLibrarySearch?.value || '').trim().toLowerCase();
            const filtered = !search
                ? all
                : all.filter((entry) => {
                    const hay = `${entry.title} ${entry.url} ${entry.type} ${(entry.tags || []).join(' ')}`.toLowerCase();
                    return hay.includes(search);
                });

            if (mediaLibraryGrid) {
                mediaLibraryGrid.innerHTML = filtered.length
                    ? filtered.map((entry) => renderMediaLibraryCard(entry)).join('')
                    : '<div class="admin-empty">No media in library yet.</div>';
                bindHailifuMediaFallback(mediaLibraryGrid, 'HAILIFU');
            }

            if (sectionSlotSelect) {
                if (!sectionSlotSelect.dataset.ready) {
                    sectionSlotSelect.innerHTML = MEDIA_SECTION_SLOTS.map((slot) => `<option value="${escapeHtml(slot.key)}">${escapeHtml(slot.label)}</option>`).join('');
                    sectionSlotSelect.dataset.ready = '1';
                }
            }

            const slot = getCurrentSectionSlotKey();
            const assignments = getSectionMediaAssignments();
            const assignedId = String(assignments?.[slot]?.mediaId || '').trim();
            const assigned = all.find((entry) => String(entry?.id || '') === assignedId);
            if (sectionsCurrentAssignment) {
                sectionsCurrentAssignment.innerHTML = assigned
                    ? `Current: <strong>${escapeHtml(assigned.title || assigned.id)}</strong> (${escapeHtml(assigned.type)})`
                    : 'Current: <strong>None</strong>';
            }

            if (sectionsMediaPicker) {
                sectionsMediaPicker.innerHTML = filtered.length
                    ? filtered.map((entry) => renderMediaLibraryCard(entry, { compact: true })).join('')
                    : '<div class="admin-empty">No media available to assign.</div>';
                bindHailifuMediaFallback(sectionsMediaPicker, 'HAILIFU');
            }
        }

        function getSectionAssignedMedia(slotKey) {
            const slot = String(slotKey || '').trim();
            if (!slot) return null;
            const assignments = getSectionMediaAssignments();
            const mediaId = String(assignments?.[slot]?.mediaId || '').trim();
            if (!mediaId) return null;
            const media = getMediaLibraryMap()[mediaId];
            if (!media) return null;
            return normalizeMediaLibraryRecord(media);
        }

        function applySectionMediaAssignments() {
            const heroMedia = getSectionAssignedMedia('hero.background');
            if (heroMedia?.url) {
                if (heroMedia.type === 'video') {
                    try { initHeroVideo(heroMedia.url); } catch {}
                } else {
                    const heroContainer = document.querySelector('.hero-video-container');
                    if (heroContainer) {
                        heroContainer.style.backgroundImage = `url("${heroMedia.url.replace(/"/g, '\\"')}")`;
                        heroContainer.style.backgroundSize = 'cover';
                        heroContainer.style.backgroundPosition = 'center center';
                    }
                }
            }

            const integrityMedia = getSectionAssignedMedia('about.integrityMedia');
            if (integrityMedia?.url) {
                try { loadIntegrityImage(integrityMedia.url); } catch {}
            }
        }

        function syncOpsNodes() {
            console.log('[Admin] syncOpsNodes called, adminPanel:', !!adminPanel);
            if (!adminPanel) return;

            adminBackdrop = document.getElementById('adminBackdrop');
            adminToggle = document.getElementById('adminLogoutBtn');
            
            // Sidebar navigation - attach directly to nav buttons
            const navButtons = adminPanel.querySelectorAll('.nav-item[data-admin-tab]');
            console.log('[Admin] Found nav buttons:', navButtons.length);
            console.log('[Admin] setAdminTab function exists:', typeof setAdminTab);
            navButtons.forEach((btn, index) => {
                console.log('[Admin] Attaching listener to button:', btn.dataset.adminTab);
                btn.addEventListener('click', (e) => {
                    console.log('[Admin] Nav button clicked:', btn.dataset.adminTab);
                    e.preventDefault();
                    e.stopPropagation();
                    const tab = String(btn.dataset.adminTab || '').trim();
                    console.log('[Admin] About to call setAdminTab with:', tab);
                    if (tab) {
                        try {
                            setAdminTab(tab);
                            console.log('[Admin] setAdminTab returned successfully');
                        } catch (err) {
                            console.error('[Admin] Error calling setAdminTab:', err);
                        }
                    }
                });
            });

            // Global Search
            const globalSearch = document.getElementById('adminGlobalSearch');
            if (globalSearch) {
                globalSearch.addEventListener('input', (e) => {
                    // Search functionality placeholder
                });
            }

            // Backdrop click to close
            if (adminBackdrop) {
                adminBackdrop.addEventListener('click', () => {
                    haltDataSync();
                });
            }

            // Click outside to close or exit button
            adminPanel.addEventListener('click', (e) => {
                const closeBtn = e.target.closest('#adminLogoutBtn, .admin-exit-btn');
                if (closeBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    adminGatekeeper.clearPersistedVisibilityGrant();
                    haltDataSync();
                    return;
                }
            });
        }

        const OLD_UNUSED_SYNC = () => {};

        function initDataSync() {
            overviewRecentReviews = document.getElementById('overviewRecentReviews');
            overviewReach = document.getElementById('overviewReach');
            
            // Interest Analytics
            interestCctv = document.getElementById('interestCctv');
            interestElectrical = document.getElementById('interestElectrical');
            interestGates = document.getElementById('interestGates');
            interestSolar = document.getElementById('interestSolar');
            interestAirconditioning = document.getElementById('interestAirconditioning');
            interestBlindcurtain = document.getElementById('interestBlindcurtain');
            
            interestCctvCount = document.getElementById('interestCctvCount');
            interestElectricalCount = document.getElementById('interestElectricalCount');
            interestGatesCount = document.getElementById('interestGatesCount');
            interestSolarCount = document.getElementById('interestSolarCount');
            interestAirconditioningCount = document.getElementById('interestAirconditioningCount');
            interestBlindcurtainCount = document.getElementById('interestBlindcurtainCount');

            // Lead Management
            leadsGrid = document.getElementById('leadsGrid');
            leadsSearch = document.getElementById('leadsSearch');
            leadsRefreshBtn = document.getElementById('leadsRefreshBtn');
            
            // Logs
            adminLogsContainer = document.getElementById('adminLogsContainer');
            adminClearLogsBtn = document.getElementById('adminClearLogsBtn');
            
            // Project Manager
            projectsGrid = document.getElementById('projectsGrid');
            uploadBtn = document.getElementById('uploadBtn');
            projectTitle = document.getElementById('projectTitle');
            projectCategory = document.getElementById('projectCategory');
            projectDescription = document.getElementById('projectDescription');
            projectFile = document.getElementById('projectFile');
            fileUploadArea = document.getElementById('fileUploadArea');
            galleryQueue = document.getElementById('galleryQueue');
            
            // Media Library
            mediaLibrarySearch = document.getElementById('mediaLibrarySearch');
            mediaLibraryRefreshBtn = document.getElementById('mediaLibraryRefreshBtn');
            mediaLibraryUploadArea = document.getElementById('mediaLibraryUploadArea');
            mediaLibraryFileInput = document.getElementById('mediaLibraryFileInput');
            mediaLibraryUploadBtn = document.getElementById('mediaLibraryUploadBtn');
            mediaLibraryGrid = document.getElementById('mediaLibraryGrid');

            // Site Control
            const saveSeoBtn = document.getElementById('saveSeoBtn');
            const saveThemeBtn = document.getElementById('saveThemeBtn');
            const saveConfigBtn = document.getElementById('saveConfigBtn');
            const primaryColorPicker = document.getElementById('primaryColorPicker');

            // Review Moderation
            reviewsRequireApproval = document.getElementById('reviewsRequireApproval');
            pendingReviewsGrid = document.getElementById('pendingReviewsGrid');
            publishedReviewsGrid = document.getElementById('publishedReviewsGrid');

            if (adminPanel.dataset.listenersBound) {
                if (typeof renderAdminLogs === 'function') renderAdminLogs();
                return;
            }
            adminPanel.dataset.listenersBound = 'true';

            // Sidebar Tab Switching
            adminTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabKey = tab.dataset.adminTab;
                    if (tabKey) setAdminTab(tabKey);
                });
            });

            if (adminBackdrop) {
                adminBackdrop.addEventListener('click', haltDataSync);
            }

            if (leadsSearch) leadsSearch.addEventListener('input', () => renderLeads());
            if (leadsRefreshBtn) leadsRefreshBtn.addEventListener('click', () => renderLeads());
            if (adminClearLogsBtn) adminClearLogsBtn.addEventListener('click', () => {
                if (Array.isArray(adminLogs)) adminLogs = [];
                if (typeof renderAdminLogs === 'function') renderAdminLogs();
            });

            function handleProjectUpload() {
                console.log('[Admin] Project upload triggered');
                // Placeholder for project upload logic
                showAdminMediaToast('Project upload logic not yet fully implemented', 'info');
            }

            if (uploadBtn) uploadBtn.addEventListener('click', handleProjectUpload);
            
            // File upload area handlers
            if (fileUploadArea) {
                fileUploadArea.addEventListener('click', () => projectFile && projectFile.click());
                fileUploadArea.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    fileUploadArea.classList.add('dragover');
                });
                fileUploadArea.addEventListener('dragleave', () => fileUploadArea.classList.remove('dragover'));
                fileUploadArea.addEventListener('drop', (e) => {
                    e.preventDefault();
                    fileUploadArea.classList.remove('dragover');
                    if (e.dataTransfer.files.length) {
                        handleProjectFileSelection(e.dataTransfer.files);
                    }
                });
            }

            if (projectFile) {
                projectFile.addEventListener('change', (e) => {
                    if (e.target.files.length) handleProjectFileSelection(e.target.files);
                });
            }

            adminPanel.addEventListener('click', (e) => {
                const closeBtn = e.target.closest('#adminLogoutBtn, .admin-exit-btn');
                if (closeBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (closeBtn.id === 'adminLogoutBtn' || closeBtn.classList.contains('admin-exit-btn')) {
                        adminGatekeeper.clearPersistedVisibilityGrant();
                        updateAdminEntryButtonVisibility();
                        pushAdminLog('Admin session terminated. Visibility grant revoked.');
                    }
                    haltDataSync();
                    return;
                }

                const closeBackdropBtn = e.target.closest('.admin-backdrop');
                if (closeBackdropBtn) {
                    haltDataSync();
                    return;
                }

                const leadDeleteBtn = e.target.closest('[data-lead-delete]');
                if (leadDeleteBtn) {
                    e.preventDefault();
                    const leadId = leadDeleteBtn.getAttribute('data-lead-delete');
                    deleteLeadById(leadId);
                    return;
                }

                const approveBtn = e.target.closest('[data-review-approve]');
                if (approveBtn) {
                    e.preventDefault();
                    const id = approveBtn.getAttribute('data-review-approve');
                    if (!canAccessReviewModeration()) {
                        showAdminMediaToast('Complete Triple-Click Handshake and Firebase login first.', 'warning');
                        return;
                    }
                    if (hasFirestoreReviewRuntime() && canAccessReviewModeration()) {
                        updateReviewStatusInFirestore(id, 'published')
                            .then(() => {
                                showAdminMediaToast('Review published.', 'success');
                                pushAdminLog(`Review ${id} published to Firestore`);
                            })
                            .catch((error) => {
                                const message = String(error?.message || 'Failed to publish review').replace(/^Firebase:\s*/i, '');
                                showAdminMediaToast(message, 'error');
                                pushAdminLog(`Failed to publish review ${id}: ${message}`);
                            });
                        return;
                    }

                    const reviews = getReviews();
                    const idx = reviews.findIndex((r) => r.id === id);
                    if (idx >= 0) {
                        reviews[idx].status = 'published';
                        writeJsonStorage(reviewsStorageKey, reviews);
                        renderAdminReviews();
                        showAdminMediaToast('Review published locally.', 'success');
                        pushAdminLog(`Review ${id} published locally`);
                    }
                    return;
                }

                const deleteBtn = e.target.closest('[data-review-delete]');
                if (deleteBtn) {
                    e.preventDefault();
                    const id = deleteBtn.getAttribute('data-review-delete');
                    if (!canAccessReviewModeration()) {
                        showAdminMediaToast('Complete Handshake first.', 'warning');
                        return;
                    }
                    if (hasFirestoreReviewRuntime() && canAccessReviewModeration()) {
                        removeReviewInFirestore(id)
                            .then(() => {
                                showAdminMediaToast('Review deleted.', 'success');
                                pushAdminLog(`Review ${id} deleted from Firestore`);
                            })
                            .catch((error) => {
                                const message = String(error?.message || 'Failed to delete review').replace(/^Firebase:\s*/i, '');
                                showAdminMediaToast(message, 'error');
                                pushAdminLog(`Failed to delete review ${id}: ${message}`);
                            });
                        return;
                    }

                    const reviews = getReviews();
                    const idx = reviews.findIndex((r) => r.id === id);
                    if (idx >= 0) {
                        reviews.splice(idx, 1);
                        writeJsonStorage(reviewsStorageKey, reviews);
                        renderAdminReviews();
                        showAdminMediaToast('Review deleted locally.', 'success');
                        pushAdminLog(`Review ${id} deleted locally`);
                    }
                    return;
                }

                // Media Assignment
                const mediaAssignBtn = e.target.closest('[data-media-assign]');
                if (mediaAssignBtn) {
                    e.preventDefault();
                    const mediaId = mediaAssignBtn.getAttribute('data-media-assign');
                    const slot = getCurrentSectionSlotKey();
                    assignMediaToSection(slot, mediaId)
                        .then(() => {
                            showAdminMediaToast(`Media assigned to ${slot}`, 'success');
                            applySectionMediaAssignments();
                        })
                        .catch((err) => showAdminMediaToast(`Assign failed: ${err.message}`, 'error'));
                    return;
                }

                // Media Library Deletion
                const mediaDeleteBtn = e.target.closest('[data-media-delete]');
                if (mediaDeleteBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    const mediaId = mediaDeleteBtn.getAttribute('data-media-delete');
                    if (!mediaId) return;
                    if (!confirm('Permanently delete this media from the library?')) return;
                    removeMediaLibraryRecord(mediaId)
                        .then(() => showAdminMediaToast('Media deleted from library.', 'success'))
                        .catch((err) => showAdminMediaToast(`Delete failed: ${String(err?.message || err || 'Unknown error')}`, 'error'));
                    return;
                }

                // Project Actions
                const deleteProjectBtn = e.target.closest('[data-project-delete]');
                if (deleteProjectBtn) {
                    e.preventDefault();
                    const projectId = deleteProjectBtn.getAttribute('data-project-delete');
                    if (confirm('Permanently delete this project?')) {
                        deleteProjectById(projectId);
                    }
                    return;
                }

                const editProjectBtn = e.target.closest('[data-project-edit]');
                if (editProjectBtn) {
                    e.preventDefault();
                    const projectId = editProjectBtn.getAttribute('data-project-edit');
                    const project = getProjects().find((p) => String(p?.id || '') === projectId);
                    if (project) populateProjectForm(project);
                    return;
                }
            });

            // Additional Listeners
            if (sectionSlotSelect) sectionSlotSelect.addEventListener('change', () => renderMediaLibraryAndSections());
            if (mediaLibrarySearch) mediaLibrarySearch.addEventListener('input', () => renderMediaLibraryAndSections());
            if (mediaLibraryRefreshBtn) mediaLibraryRefreshBtn.addEventListener('click', () => {
                renderMediaLibraryAndSections();
                showAdminMediaToast('Media library refreshed', 'success');
            });

            if (mediaLibraryUploadBtn && mediaLibraryFileInput) {
                mediaLibraryUploadBtn.addEventListener('click', () => mediaLibraryFileInput.click());
                mediaLibraryFileInput.addEventListener('change', function() {
                    if (!this.files || !this.files.length) return;
                    uploadMediaLibraryFiles(this.files)
                        .then(() => {
                            this.value = '';
                            showAdminMediaToast('Media uploaded to library', 'success');
                        })
                        .catch((err) => alert(String(err?.message || err || 'Upload failed')));
                });
            }

            if (sectionsClearSlotBtn) {
                sectionsClearSlotBtn.addEventListener('click', () => {
                    const slot = getCurrentSectionSlotKey();
                    assignMediaToSection(slot, null)
                        .then(() => {
                            showAdminMediaToast(`Slot ${slot} cleared`, 'success');
                            applySectionMediaAssignments();
                        })
                        .catch((err) => showAdminMediaToast(`Clear failed: ${err.message}`, 'error'));
                });
            }

            if (reviewsRequireApproval) {
                reviewsRequireApproval.addEventListener('change', () => {
                    saveReviewSettings({ requireApproval: !!reviewsRequireApproval.checked });
                });
            }

            // Site Control Button Listeners
            if (saveSeoBtn) {
                saveSeoBtn.addEventListener('click', () => {
                    const title = document.getElementById('siteTitleInput').value;
                    const desc = document.getElementById('metaDescInput').value;
                    const keywords = document.getElementById('metaKeywordsInput').value;
                    document.title = title;
                    const metaDesc = document.querySelector('meta[name="description"]');
                    if (metaDesc) metaDesc.setAttribute('content', desc);
                    const metaKeywords = document.querySelector('meta[name="keywords"]');
                    if (metaKeywords) metaKeywords.setAttribute('content', keywords);
                    pushAdminLog('SEO metadata updated');
                    showAdminMediaToast('SEO settings saved!', 'success');
                });
            }

            if (saveThemeBtn) {
                saveThemeBtn.addEventListener('click', () => {
                    const primary = document.getElementById('primaryColorPicker').value;
                    const accent = document.getElementById('accentColorPicker').value;
                    applyPremiumBranding({ primary, accent });
                    showAdminMediaToast('Branding applied!', 'success');
                });
            }

            if (primaryColorPicker) {
                primaryColorPicker.addEventListener('input', (e) => {
                    const colorValue = e.target.nextElementSibling;
                    if (colorValue) colorValue.textContent = e.target.value.toUpperCase();
                });
            }

            // Bind integrity media uploaders
            bindIntegrityMediaUploader('integrityGraphicBtn', 'integrityImageInput', 'integrityUploadProgress', 'integrityUploadProgressFill');
            bindIntegrityMediaUploader('integrityMediaBtnProjects', 'integrityMediaInputProjects', 'integrityMediaUploadProgressProjects', 'integrityMediaUploadProgressFillProjects');
        }

        function bindIntegrityMediaUploader(buttonId, inputId, progressId, progressFillId) {
            const triggerBtn = document.getElementById(buttonId);
            const fileInput = document.getElementById(inputId);
            const progressWrap = document.getElementById(progressId);
            const progressFill = document.getElementById(progressFillId);
            if (!triggerBtn || !fileInput) return;
            if (fileInput.dataset.boundIntegrityUploader === '1') return;
            fileInput.dataset.boundIntegrityUploader = '1';

            triggerBtn.addEventListener('click', () => { fileInput.click(); });
            fileInput.addEventListener('change', function() {
                const file = this.files?.[0];
                const isImage = Boolean(file && file.type && file.type.startsWith('image/'));
                const isVideo = Boolean(file && file.type && file.type.startsWith('video/'));
                if (!file || (!isImage && !isVideo)) {
                    this.value = '';
                    return;
                }

                const preset = getCloudinaryPresetValue();
                if (!preset) {
                    alert('Enter Cloudinary preset in Site Control tab first.');
                    this.value = '';
                    return;
                }

                if (progressWrap) {
                    progressWrap.style.display = 'block';
                    progressWrap.setAttribute('aria-hidden', 'false');
                }
                if (progressFill) progressFill.style.width = '0%';

                cloudinaryUnsignedUpload(file, {
                    preset,
                    resourceType: 'auto',
                    folder: 'hailifu',
                    onProgress: (pct) => {
                        if (progressFill) progressFill.style.width = `${pct}%`;
                    }
                }).then((payload) => {
                    const url = normalizeIntegrityMediaPath(String(payload?.secure_url || '').trim());
                    if (!url) throw new Error('Upload failed');
                    setIntegrityImageUrlLocal(url);
                    loadIntegrityImage(url);
                    if (firebaseIsReady()) return setFirebaseIntegrityImageUrl(url);
                }).then(() => {
                    fileInput.value = '';
                    showAdminMediaToast('Integrity media updated', 'success');
                }).catch((err) => {
                    alert(String(err?.message || err || 'Upload failed'));
                }).finally(() => {
                    if (progressWrap) {
                        progressWrap.style.display = 'none';
                        progressWrap.setAttribute('aria-hidden', 'true');
                    }
                    if (progressFill) progressFill.style.width = '0%';
                });
            });
        }

        function normalizeLeadRecords(leads) {
            const source = Array.isArray(leads) ? leads : [];
            let changed = false;
            const normalized = source.map((entry, idx) => {
                if (!entry || typeof entry !== 'object') {
                    changed = true;
                    return null;
                }
                const existingId = String(entry.id || '').trim();
                const fallbackSeed = [
                    entry.createdAt,
                    entry.service,
                    entry.serviceLabel,
                    entry.name,
                    entry.phone,
                    entry.location,
                    entry.serviceAnswer,
                    idx
                ].map((value) => String(value || '').trim()).join('|');
                const id = existingId || `lead_${hashText(fallbackSeed)}`;
                if (!existingId) changed = true;
                return {
                    ...entry,
                    id
                };
            }).filter(Boolean);
            return { normalized, changed };
        }

        function initDataSync() {
            if (adminHideTimer) {
                clearTimeout(adminHideTimer);
                adminHideTimer = null;
            }
            seedOpsLayer();
            syncOpsNodes();
            startReviewIdentityAuthSync();
            startFirestoreReviewAuthSync();
            if (canAccessReviewModeration()) startFirestorePendingReviewsSync();
            syncReviewAuthUiState();
            if (adminBackdrop) {
                adminBackdrop.classList.add('active');
                adminBackdrop.setAttribute('aria-hidden', 'false');
                adminBackdrop.style.display = 'block';
                adminBackdrop.style.opacity = '1';
                // Restore backdrop filter for blur effect
                adminBackdrop.style.backdropFilter = '';
                adminBackdrop.style.webkitBackdropFilter = '';
            }
            // This runs several times after sign-in (retry timers). Only the first run, when the
            // portal actually opens, may choose the Dashboard; later runs must not undo the tab
            // the owner has already clicked.
            const wasAlreadyOpen = !!(adminPanel && adminPanel.classList.contains('active'));
            if (adminPanel) {
                adminPanel.style.display = 'flex';
                adminPanel.style.opacity = '1';
                void adminPanel.offsetWidth;
                adminPanel.classList.add('active');
                adminPanel.setAttribute('aria-hidden', 'false');
            }
            if (!wasAlreadyOpen) setAdminTab('overview');
            refreshOverview();
            renderAdminLazyLoop();
            startAdminLazyLoop();
        }

        function haltDataSync() {
            try { stopAdminLazyLoop(); } catch {}
            stopFirestorePendingReviewsSync();
            renderMediaLibraryAndSections();
            if (adminBackdrop) {
                adminBackdrop.classList.remove('active');
                adminBackdrop.setAttribute('aria-hidden', 'true');
                // Remove backdrop filter to prevent blur on site after closing
                adminBackdrop.style.backdropFilter = 'none';
                adminBackdrop.style.webkitBackdropFilter = 'none';
            }
            if (adminPanel) {
                adminPanel.classList.remove('active');
                adminPanel.style.opacity = '0';
                // Blur any focused element inside the admin panel before hiding
                const activeElement = document.activeElement;
                if (activeElement && adminPanel.contains(activeElement)) {
                    activeElement.blur();
                }
                adminPanel.setAttribute('aria-hidden', 'true');
                if (adminHideTimer) clearTimeout(adminHideTimer);
                adminHideTimer = window.setTimeout(() => {
                    if (!adminPanel || adminPanel.classList.contains('active')) return;
                    adminPanel.style.display = 'none';
                    adminHideTimer = null;
                }, 320);
            }
        }

        function updateAdminEntryButtonVisibility() {
            const visible = hasAdminVisibilityAccess();
            if (adminEntryBtn) {
                adminEntryBtn.classList.toggle('is-visible', visible);
                adminEntryBtn.setAttribute('aria-hidden', String(!visible));
            }
            syncReviewAuthUiState();
        }

        function scrubAdminSecretFromUrl() {
            try {
                const url = new URL(window.location.href);
                if (typeof adminSecretParamKey === 'undefined') return;
                if (!url.searchParams.has(adminSecretParamKey)) return;
                url.searchParams.delete(adminSecretParamKey);
                const nextUrl = `${url.pathname}${url.search}${url.hash}`;
                window.history.replaceState({}, document.title, nextUrl || window.location.pathname);
            } catch {}
        }

        function openAdminPortalNow() {
            try { bindAdminChromeOnce(); } catch {}
            setTimeout(() => { try { syncAdminAccountEmail(); syncAdminPageChrome(adminState?.activeTab || 'overview'); } catch {} }, 400);
            // Execute multiple times with small delays to overcome any DOM race conditions
            const forceOpen = () => {
                if (typeof seedOpsLayer === 'function') seedOpsLayer();
                if (typeof initDataSync === 'function') initDataSync();
                updateAdminEntryButtonVisibility();
                
                if (adminPanel) {
                    adminPanel.style.display = 'flex';
                    adminPanel.style.opacity = '1';
                    adminPanel.style.width = '100vw';
                    adminPanel.style.left = '0';
                    adminPanel.classList.add('active');
                    adminPanel.setAttribute('aria-hidden', 'false');
                }
                if (adminBackdrop) {
                    adminBackdrop.style.display = 'block';
                    adminBackdrop.style.opacity = '1';
                    adminBackdrop.classList.add('active');
                    adminBackdrop.setAttribute('aria-hidden', 'false');
                }
            };
            forceOpen();
            setTimeout(forceOpen, 100);
            setTimeout(forceOpen, 500);
            setTimeout(forceOpen, 1000);
        }

        // ------------------------------------------------------------------
        // ADMIN LOGIN (Supabase Auth, email + password)
        // Replaces the old public secret link (?dev=...). The real protection
        // is the Row Level Security in supabase/sql/admin_setup.sql; this
        // screen is how the owner gets a session that those policies accept.
        // Open it with hailifugh.com/hailifu=access (round 10; ?admin and #admin retired)
        // ------------------------------------------------------------------
        let adminLoginOpen = false;

        async function signInAdmin(email, password) {
            const supabase = ensureSupabaseClient();
            if (!supabase || !supabase.auth) throw new Error('Login server is not configured. See ADMIN_SETUP.md.');
            const { data, error } = await withTimeout(supabase.auth.signInWithPassword({ email, password }), 15000, 'Sign in');
            if (error) throw error;
            return data?.session || null;
        }

        function closeAdminLogin() {
            const overlay = document.getElementById('hmAdminLogin');
            if (overlay) overlay.remove();
            adminLoginOpen = false;
        }

        function openAdminLogin() {
            if (adminLoginOpen) return;
            adminLoginOpen = true;
            const overlay = document.createElement('div');
            overlay.id = 'hmAdminLogin';
            overlay.className = 'hm-login';
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-labelledby', 'hmLoginTitle');
            overlay.innerHTML = `
                <div class="hm-login-backdrop" aria-hidden="true"></div>
                <form class="hm-login-card" novalidate data-mode="signin">
                    <div class="hm-login-mark"><img src="/logo.webp" alt="" class="hm-login-logo"></div>
                    <h2 id="hmLoginTitle">Welcome back</h2>
                    <p class="hm-login-sub">Sign in to manage Hailifu Brilliant Installation.</p>
                    <div class="hm-login-field">
                        <label for="hmLoginEmail">Email</label>
                        <div class="hm-login-input">
                            <i class="fas fa-envelope" aria-hidden="true"></i>
                            <input type="email" id="hmLoginEmail" autocomplete="username" inputmode="email" spellcheck="false" required>
                        </div>
                    </div>
                    <div class="hm-login-pwblock hm-login-field">
                        <label for="hmLoginPassword">Password</label>
                        <div class="hm-login-input">
                            <i class="fas fa-lock" aria-hidden="true"></i>
                            <input type="password" id="hmLoginPassword" autocomplete="current-password" required>
                            <button type="button" class="hm-login-eye" id="hmLoginPwToggle" aria-label="Show password" aria-pressed="false" aria-controls="hmLoginPassword"><i class="fas fa-eye" aria-hidden="true"></i></button>
                        </div>
                        <p class="hm-login-caps" id="hmLoginCaps" role="status" hidden><i class="fas fa-arrow-up" aria-hidden="true"></i> Caps Lock is on</p>
                    </div>
                    <p class="hm-login-error" role="alert" hidden></p>
                    <p class="hm-login-ok" role="status" hidden></p>
                    <button type="submit" class="hm-login-submit"><span class="hm-login-spin" aria-hidden="true"></span><span class="hm-login-submit-text">Sign in</span></button>
                    <div class="hm-login-foot">
                        <button type="button" class="hm-login-link" data-login-mode>Forgot password?</button>
                        <button type="button" class="hm-login-cancel"><i class="fas fa-arrow-left" aria-hidden="true"></i> Back to website</button>
                    </div>
                </form>
            `;
            document.body.appendChild(overlay);

            const form = overlay.querySelector('form');
            const title = overlay.querySelector('#hmLoginTitle');
            const sub = overlay.querySelector('.hm-login-sub');
            const emailInput = overlay.querySelector('#hmLoginEmail');
            const passwordInput = overlay.querySelector('#hmLoginPassword');
            const pwBlock = overlay.querySelector('.hm-login-pwblock');
            const errorNode = overlay.querySelector('.hm-login-error');
            const okNode = overlay.querySelector('.hm-login-ok');
            const submitBtn = overlay.querySelector('.hm-login-submit');
            const modeBtn = overlay.querySelector('[data-login-mode]');
            const submitText = overlay.querySelector('.hm-login-submit-text');
            const eyeBtn = overlay.querySelector('#hmLoginPwToggle');
            const capsNode = overlay.querySelector('#hmLoginCaps');
            const card = form;
            const showError = (text) => {
                errorNode.textContent = text;
                errorNode.hidden = !text;
                if (!text) return;
                // a small shake says "not accepted" without moving focus
                card.classList.remove('is-shake');
                void card.offsetWidth;
                card.classList.add('is-shake');
            };
            const showOk = (text) => { okNode.textContent = text; okNode.hidden = !text; };
            const setBusy = (busy, label) => {
                submitBtn.disabled = busy;
                submitBtn.classList.toggle('is-busy', busy);
                if (busy) submitBtn.setAttribute('aria-busy', 'true'); else submitBtn.removeAttribute('aria-busy');
                if (label) submitText.textContent = label;
            };
            card.addEventListener('animationend', (e) => { if (e.animationName === 'hm-login-shake') card.classList.remove('is-shake'); });
            eyeBtn.addEventListener('click', () => {
                const show = passwordInput.type === 'password';
                passwordInput.type = show ? 'text' : 'password';
                eyeBtn.setAttribute('aria-pressed', show ? 'true' : 'false');
                eyeBtn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
                eyeBtn.innerHTML = `<i class="fas ${show ? 'fa-eye-slash' : 'fa-eye'}" aria-hidden="true"></i>`;
                passwordInput.focus({ preventScroll: true });
            });
            const syncCaps = (e) => {
                if (!e || typeof e.getModifierState !== 'function') return;
                capsNode.hidden = !e.getModifierState('CapsLock');
            };
            passwordInput.addEventListener('keydown', syncCaps);
            passwordInput.addEventListener('keyup', syncCaps);
            passwordInput.addEventListener('blur', () => { capsNode.hidden = true; });

            const setMode = (mode) => {
                form.dataset.mode = mode;
                const reset = mode === 'reset';
                title.textContent = reset ? 'Reset password' : 'Welcome back';
                sub.textContent = reset ? 'Enter your admin email and we will send you a reset link.' : 'Sign in to manage Hailifu Brilliant Installation.';
                pwBlock.hidden = reset;
                submitText.textContent = reset ? 'Send reset link' : 'Sign in';
                modeBtn.textContent = reset ? 'Back to sign in' : 'Forgot password?';
                showError('');
                showOk('');
                form.classList.remove('is-switching');
                void form.offsetWidth;
                form.classList.add('is-switching');
                emailInput.focus();
            };
            modeBtn.addEventListener('click', () => setMode(form.dataset.mode === 'reset' ? 'signin' : 'reset'));

            overlay.querySelector('.hm-login-cancel').addEventListener('click', closeAdminLogin);
            overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAdminLogin(); });
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email = emailInput.value.trim();
                const reset = form.dataset.mode === 'reset';
                if (reset) {
                    if (!/^\S+@\S+\.\S+$/.test(email)) { showError('Enter your admin email address.'); return; }
                    showError('');
                    setBusy(true, 'Sending');
                    try {
                        await sendAdminPasswordReset(email);
                        // Same message whether or not the account exists (does not reveal admin emails)
                        showOk('If that email belongs to the admin account, a reset link is on its way. Check your inbox and spam folder.');
                    } catch (err) {
                        const text = String(err?.message || err || '');
                        showError(/fetch|network|timed out|resolve|not configured/i.test(text)
                            ? 'Can\'t reach the login server (Supabase). Check ADMIN_SETUP.md.'
                            : /rate|too many|seconds/i.test(text) ? 'Please wait a minute before asking for another link.' : (text || 'Could not send the reset link.'));
                    } finally {
                        setBusy(false, 'Send reset link');
                    }
                    return;
                }
                const password = passwordInput.value;
                if (!email || !password) {
                    showError('Enter your email and password.');
                    return;
                }
                showError('');
                setBusy(true, 'Signing in');
                try {
                    await signInAdmin(email, password);
                    adminGatekeeper.authorizeFromSecretKey();
                    closeAdminLogin();
                    showAdminMediaToast('Signed in', 'success');
                    if (typeof pushAdminLog === 'function') pushAdminLog(`Admin signed in: ${email}`, 'OK');
                    openAdminPortalNow();
                } catch (err) {
                    const text = String(err?.message || err || '');
                    if (/invalid login|invalid credentials|email not confirmed/i.test(text)) {
                        showError(/not confirmed/i.test(text) ? 'This email is not confirmed yet in Supabase.' : 'Wrong email or password.');
                    } else if (/fetch|network|timed out|resolve|not configured/i.test(text)) {
                        showError('Can\'t reach the login server (Supabase). Check ADMIN_SETUP.md.');
                    } else {
                        showError(text || 'Sign in failed.');
                    }
                    setBusy(false, 'Sign in');
                    passwordInput.focus();
                }
            });
            setTimeout(() => emailInput.focus(), 30);
        }

        // ------------------------------------------------------------------
        // PASSWORD RESET + CHANGE (2026-09-29)
        // "Forgot password?" on the login screen emails a reset link
        // (Supabase Auth). The link returns to /?admin-reset=1, where the
        // owner sets a new password. Signed-in admins can change it from the
        // account menu. Supabase must allow the redirect URL (ADMIN_SETUP.md).
        // ------------------------------------------------------------------
        const ADMIN_RESET_PARAM = 'admin-reset';
        let adminRecoveryPending = false;

        function getAdminResetRedirectUrl() {
            return `${window.location.origin}${window.location.pathname}?${ADMIN_RESET_PARAM}=1`;
        }

        async function sendAdminPasswordReset(email) {
            const supabase = ensureSupabaseClient();
            if (!supabase || !supabase.auth) throw new Error('Login server is not configured. See ADMIN_SETUP.md.');
            const { error } = await withTimeout(
                supabase.auth.resetPasswordForEmail(email, { redirectTo: getAdminResetRedirectUrl() }),
                15000,
                'Reset'
            );
            if (error) throw error;
        }

        function passwordProblem(pw, confirmPw) {
            if (pw.length < 8) return 'Use at least 8 characters.';
            if (!/[0-9]/.test(pw) || !/[a-zA-Z]/.test(pw)) return 'Use letters and at least one number.';
            if (pw !== confirmPw) return 'The two passwords do not match.';
            return '';
        }

        function openSetPasswordDialog(mode) {
            const existing = document.getElementById('hmSetPassword');
            if (existing) existing.remove();
            const isReset = mode === 'reset';
            const overlay = document.createElement('div');
            overlay.id = 'hmSetPassword';
            overlay.className = 'hm-login';
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-labelledby', 'hmSetPwTitle');
            overlay.innerHTML = `
                <form class="hm-login-card" novalidate>
                    <img src="/logo.webp" alt="" class="hm-login-logo">
                    <h2 id="hmSetPwTitle">${isReset ? 'Set a new password' : 'Change password'}</h2>
                    <p class="hm-login-sub">${isReset ? 'Choose a new password for your admin account.' : 'Your new password works the next time you sign in.'}</p>
                    <label for="hmNewPw">New password</label>
                    <div class="hm-pw-wrap">
                        <input type="password" id="hmNewPw" autocomplete="new-password" required minlength="8">
                        <button type="button" class="hm-pw-toggle" data-pw-toggle aria-label="Show password"><i class="fas fa-eye"></i></button>
                    </div>
                    <div class="hm-pw-meter" aria-hidden="true"><span></span></div>
                    <label for="hmNewPw2">Repeat new password</label>
                    <input type="password" id="hmNewPw2" autocomplete="new-password" required minlength="8">
                    <p class="hm-login-hint">At least 8 characters, with letters and a number.</p>
                    <p class="hm-login-error" role="alert" hidden></p>
                    <button type="submit" class="hm-login-submit">Save new password</button>
                    ${isReset ? '' : '<button type="button" class="hm-login-cancel" data-pw-cancel>Cancel</button>'}
                </form>`;
            document.body.appendChild(overlay);
            const form = overlay.querySelector('form');
            const pw = overlay.querySelector('#hmNewPw');
            const pw2 = overlay.querySelector('#hmNewPw2');
            const meter = overlay.querySelector('.hm-pw-meter span');
            const errorNode = overlay.querySelector('.hm-login-error');
            const submit = overlay.querySelector('.hm-login-submit');
            const showError = (t) => { errorNode.textContent = t; errorNode.hidden = !t; };

            pw.addEventListener('input', () => {
                const v = pw.value;
                const score = [v.length >= 8, v.length >= 12, /[0-9]/.test(v) && /[a-zA-Z]/.test(v), /[^a-zA-Z0-9]/.test(v)].filter(Boolean).length;
                meter.style.width = `${score * 25}%`;
                meter.dataset.score = String(score);
            });
            overlay.querySelector('[data-pw-toggle]').addEventListener('click', (e) => {
                const show = pw.type === 'password';
                pw.type = show ? 'text' : 'password';
                pw2.type = pw.type;
                e.currentTarget.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
                e.currentTarget.innerHTML = `<i class="fas ${show ? 'fa-eye-slash' : 'fa-eye'}"></i>`;
            });
            const cancel = overlay.querySelector('[data-pw-cancel]');
            if (cancel) cancel.addEventListener('click', () => overlay.remove());
            overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !isReset) overlay.remove(); });

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const problem = passwordProblem(pw.value, pw2.value);
                if (problem) { showError(problem); return; }
                showError('');
                submit.disabled = true;
                submit.textContent = 'Saving...';
                try {
                    const supabase = ensureSupabaseClient();
                    if (!supabase || !supabase.auth) throw new Error('Login server is not configured.');
                    const { error } = await withTimeout(supabase.auth.updateUser({ password: pw.value }), 15000, 'Saving');
                    if (error) throw error;
                    overlay.remove();
                    showAdminMediaToast('Password updated', 'success');
                    if (typeof pushAdminLog === 'function') pushAdminLog('Admin password changed', 'OK');
                    if (isReset) {
                        adminRecoveryPending = false;
                        adminGatekeeper.authorizeFromSecretKey();
                        openAdminPortalNow();
                    }
                } catch (err) {
                    const t = String(err?.message || err);
                    showError(/session|jwt|expired/i.test(t)
                        ? 'This reset link has expired. Ask for a new one from the login screen.'
                        : /different from the old|same password/i.test(t) ? 'Choose a password different from your old one.' : `Could not save: ${t}`);
                    submit.disabled = false;
                    submit.textContent = 'Save new password';
                }
            });
            setTimeout(() => pw.focus(), 30);
        }

        function consumeAdminResetFromUrl() {
            try {
                const url = new URL(window.location.href);
                const hash = String(url.hash || '');
                const fromParam = url.searchParams.has(ADMIN_RESET_PARAM);
                const fromHash = /type=recovery/.test(hash);
                if (!fromParam && !fromHash) return false;
                adminRecoveryPending = true;
                url.searchParams.delete(ADMIN_RESET_PARAM);
                window.history.replaceState({}, document.title, `${url.pathname}${url.search}${fromHash ? '' : url.hash}` || '/');
                return true;
            } catch {
                return false;
            }
        }

        async function resumeAdminRecovery() {
            if (!adminRecoveryPending) return;
            // Supabase reads the token from the link asynchronously; wait briefly for the session.
            for (let i = 0; i < 20 && adminRecoveryPending; i++) {
                if (await hasAdminAuthSession()) {
                    if (!document.getElementById('hmSetPassword')) openSetPasswordDialog('reset');
                    return;
                }
                await new Promise((r) => setTimeout(r, 500));
            }
            if (adminRecoveryPending) {
                adminRecoveryPending = false;
                openAdminLogin();
                const err = document.querySelector('#hmAdminLogin .hm-login-error');
                if (err) { err.textContent = 'That reset link is invalid or has expired. Request a new one below.'; err.hidden = false; }
            }
        }

        async function syncAdminGrantWithSession() {
            const hasSession = await hasAdminAuthSession();
            if (!hasSession && hasAdminVisibilityAccess()) {
                adminGatekeeper.clearPersistedVisibilityGrant();
                updateAdminEntryButtonVisibility();
            }
            return hasSession;
        }

        // True once per admin visit (see ADMIN_ENTRY_REQUESTED near the top).
        // Old ?dev links still show the login (they never opened the portal alone).
        function wantsAdminLoginFromUrl() {
            if (adminEntryPending) {
                adminEntryPending = false;
                return true;
            }
            try {
                const url = new URL(window.location.href);
                if (!url.searchParams.has(adminSecretParamKey)) return false;
                url.searchParams.delete(adminSecretParamKey);
                window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}` || '/');
                return true;
            } catch {
                return false;
            }
        }

        async function consumeAdminSecretKeyFromUrl() {
            window.hailifuAdmin = {
                login: () => { openAdminLogin(); return 'Login opened'; },
                status: () => ({
                    hasGrant: hasAdminVisibilityAccess(),
                    panel: !!adminPanel,
                    backdrop: !!adminBackdrop
                }),
                clearLogs: () => {
                    if (Array.isArray(adminLogs)) adminLogs = [];
                    if (typeof renderAdminLogs === 'function') renderAdminLogs();
                    return 'Logs cleared';
                }
            };
            if (!wantsAdminLoginFromUrl()) return false;
            if (await syncAdminGrantWithSession()) {
                adminGatekeeper.authorizeFromSecretKey();
                openAdminPortalNow();
                return true;
            }
            openAdminLogin();
            return false;
        }

        updateAdminEntryButtonVisibility();
        syncAdminGrantWithSession();
        setTimeout(() => { initPublicAdverts().catch((err) => console.warn('[HAILIFU] Adverts:', err)); }, 0);
        if (consumeAdminResetFromUrl()) setTimeout(() => { resumeAdminRecovery(); }, 300);
        window.hailifuOpenQuote = (service) => {
            try { setQuoteService(String(service || '')); } catch {}
            openQuotePopup();
        };
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#projectModal .sidebar-cta-btn, [data-hm-quote]');
            if (!btn) return;
            e.preventDefault();
            const closeBtn = document.getElementById('projectModalClose');
            if (btn.closest('#projectModal') && closeBtn) closeBtn.click();
            window.hailifuOpenQuote(btn.dataset.hmQuote || '');
        });
        try {
            const supabaseForAuth = ensureSupabaseClient();
            if (supabaseForAuth && supabaseForAuth.auth) {
                supabaseForAuth.auth.onAuthStateChange((event, session) => {
                    if (event === 'PASSWORD_RECOVERY') {
                        adminRecoveryPending = true;
                        closeAdminLogin();
                        if (!document.getElementById('hmSetPassword')) openSetPasswordDialog('reset');
                        return;
                    }
                    if (session) return;
                    adminGatekeeper.clearPersistedVisibilityGrant();
                    updateAdminEntryButtonVisibility();
                });
            }
        } catch {}

        // Run activation check
        if (typeof consumeAdminSecretKeyFromUrl === 'function') {
            consumeAdminSecretKeyFromUrl();
            setTimeout(consumeAdminSecretKeyFromUrl, 500);
            setTimeout(consumeAdminSecretKeyFromUrl, 2000);
        }

        if (adminEntryBtn) {
            adminEntryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!hasAdminVisibilityAccess()) {
                    updateAdminEntryButtonVisibility();
                    openAdminLogin();
                    return;
                }
                if (adminPanel && adminPanel.classList.contains('active')) {
                    return;
                }
                initDataSync();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            if (adminPanel && adminPanel.classList.contains('active')) {
                haltDataSync();
            }
        });

        document.addEventListener('click', (e) => {
            const closeBtn = e.target.closest('#adminLogoutBtn, .admin-toggle, .admin-exit-btn');
            if (!closeBtn) return;
            if (adminPanel && adminPanel.classList.contains('active')) {
                e.preventDefault();
                e.stopPropagation();
                
                // Clear admin visibility grant on logout
                if (closeBtn.id === 'adminLogoutBtn' || closeBtn.classList.contains('admin-exit-btn')) {
                    adminGatekeeper.clearPersistedVisibilityGrant();
                    updateAdminEntryButtonVisibility();
                    pushAdminLog('Admin session terminated. Visibility grant revoked.');
                    try { const sb = ensureSupabaseClient(); if (sb && sb.auth) sb.auth.signOut(); } catch {}
                }
                
                haltDataSync();
            }
        });

        // Fallback delegated handler to keep critical admin actions responsive
        // even when dynamic panel re-renders replace nodes.
        document.addEventListener('click', (e) => {
            if (!adminPanel || !adminPanel.classList.contains('active')) return;
            const actionRoot = e.target && e.target.closest ? e.target.closest('#adminPanel') : null;
            if (!actionRoot) return;

            const leadDeleteBtn = e.target.closest('[data-lead-delete]');
            if (leadDeleteBtn) {
                e.preventDefault();
                const leadId = leadDeleteBtn.getAttribute('data-lead-delete');
                if (leadId) deleteLeadById(leadId);
                return;
            }

            const reviewDeleteBtn = e.target.closest('[data-review-delete]');
            if (reviewDeleteBtn) {
                e.preventDefault();
                const reviewId = reviewDeleteBtn.getAttribute('data-review-delete');
                if (reviewId) {
                    if (hasFirestoreReviewRuntime() && canAccessReviewModeration()) {
                        removeReviewInFirestore(reviewId).catch(() => {});
                    } else {
                        const reviews = getReviews();
                        const idx = reviews.findIndex((r) => r.id === reviewId);
                        if (idx >= 0) {
                            reviews.splice(idx, 1);
                            writeJsonStorage(reviewsStorageKey, reviews);
                            renderAdminReviews();
                        }
                    }
                }
                return;
            }

            const projectDeleteBtn = e.target.closest('[data-project-delete]');
            if (projectDeleteBtn) {
                e.preventDefault();
                const projectId = projectDeleteBtn.getAttribute('data-project-delete');
                if (projectId) deleteProjectById(projectId);
            }
        });

        if (hasAdminVisibilityAccess()) {
            // Keep admin interface persistent on authorized devices via localStorage grant.
            updateAdminEntryButtonVisibility();
        } else {
            updateAdminEntryButtonVisibility();
        }

        function normalizeLeadRecords(leads) {
            const source = Array.isArray(leads) ? leads : [];
            let changed = false;
            const normalized = source.map((entry, idx) => {
                if (!entry || typeof entry !== 'object') {
                    changed = true;
                    return null;
                }
                const existingId = String(entry.id || '').trim();
                const fallbackSeed = [
                    entry.createdAt,
                    entry.service,
                    entry.serviceLabel,
                    entry.name,
                    entry.phone,
                    entry.location,
                    entry.serviceAnswer,
                    idx
                ].map((value) => String(value || '').trim()).join('|');
                const id = existingId || `lead_${hashText(fallbackSeed)}`;
                if (!existingId) changed = true;
                return {
                    ...entry,
                    id
                };
            }).filter(Boolean);
            return { normalized, changed };
        }

        function getLeads() {
            const { normalized, changed } = normalizeLeadRecords(readJsonStorage(leadsStorageKey, []));
            if (changed) {
                writeJsonStorage(leadsStorageKey, normalized);
            }
            return normalized;
        }

        function saveLeads(leads) {
            const { normalized } = normalizeLeadRecords(leads);
            writeJsonStorage(leadsStorageKey, normalized);
        }

        function getActiveLeadRecords() {
            const source = Array.isArray(adminState?.data?.leads) && adminState.data.leads.length
                ? adminState.data.leads
                : getLeads();
            return normalizeLeadRecords(source).normalized;
        }

        async function syncLeadRecordToSupabase(record) {
            const supabase = ensureSupabaseClient();
            if (!supabase || !record || typeof record !== 'object') return false;
            try {
                // Visitors may only INSERT new leads; updates need an admin session (see supabase/sql/admin_setup.sql).
                const row = toRemoteRow(record);
                const { error } = (await hasAdminAuthSession())
                    ? await supabase.from('leads').upsert(row, { onConflict: 'id' })
                    : await supabase.from('leads').insert(row);
                return !error;
            } catch {
                return false;
            }
        }

        async function deleteLeadRecordFromSupabase(leadId) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return false;
            try {
                const { error } = await supabase.from('leads').delete().eq('id', leadId);
                return !error;
            } catch {
                return false;
            }
        }

        async function deleteLeadById(leadId) {
            const targetId = String(leadId || '').trim();
            if (!targetId) return;
            const nextLeads = getActiveLeadRecords().filter((lead) => String(lead?.id || '').trim() !== targetId);
            saveLeads(nextLeads);
            if (adminState?.data) adminState.data.leads = nextLeads.slice();
            try { await deleteLeadRecordFromSupabase(targetId); } catch {}
            renderLeads();
            refreshOverview();
            pushAdminLog(`Deleted lead ${targetId}`, 'PASS');
        }

        function addLead(lead) {
            const leads = getLeads();
            const nowIso = new Date().toISOString();
            const record = (lead && typeof lead === 'object') ? { ...lead } : {};
            if (!record.createdAt) record.createdAt = nowIso;
            if (!record.id) {
                const seed = [
                    record.createdAt,
                    record.service,
                    record.serviceLabel,
                    record.name,
                    record.phone,
                    record.location,
                    record.serviceAnswer,
                    Date.now(),
                    Math.random()
                ].map((value) => String(value || '').trim()).join('|');
                record.id = `lead_${hashText(seed)}`;
            }
            leads.unshift(record);
            saveLeads(leads);
            if (adminState?.data) adminState.data.leads = leads.slice();
            try { syncLeadRecordToSupabase(record).catch(() => {}); } catch {}
            renderLeads();
            refreshOverview();
            pushAdminNotification(
                'request',
                `New ${record.serviceLabel || record.service || 'service'} request`,
                `${record.name || 'Client'} submitted a request${record.location ? ` from ${record.location}` : ''}.`,
                { leadId: record.id, invoiceCode: record.invoiceCode || '' }
            );
            try {
                if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
                    new Notification('Hailifu Lead Alert', {
                        body: `${record.name || 'A client'} submitted a new request.`,
                        tag: record.id
                    });
                }
            } catch {}
        }

        function renderLeads() {
            if (!leadsGrid) return;
            const leads = getLeads();
            const search = String(leadsSearch?.value || '').trim().toLowerCase();
            const filtered = !search
                ? leads
                : leads.filter((l) => {
                    const hay = `${l.name} ${l.phone} ${l.location} ${l.service} ${l.serviceLabel} ${l.serviceAnswer}`.toLowerCase();
                    return hay.includes(search);
                });

            if (filtered.length === 0) {
                leadsGrid.innerHTML = `<div class="lead-card"><strong>${search ? 'No matches found' : 'No leads yet'}</strong><small>${search ? 'Try a different search term.' : 'Leads from the Brilliant Assistant will appear here.'}</small></div>`;
                return;
            }
            leadsGrid.innerHTML = filtered.map((l) => {
                const leadId = String(l?.id || '').trim();
                const when = l.createdAt ? new Date(l.createdAt).toLocaleString() : '';
                const service = l.serviceLabel || l.service || 'Lead';
                const lines = [
                    l.name ? `Name: ${l.name}` : '',
                    l.phone ? `Phone: ${l.phone}` : '',
                    l.location ? `Location: ${l.location}` : '',
                    l.serviceAnswer ? `Details: ${l.serviceAnswer}` : ''
                ].filter(Boolean).join('<br>');
                const action = leadId
                    ? `<button type="button" class="admin-action-btn" data-lead-delete="${leadId}" style="margin-top:10px; padding:6px 10px; font-size:0.78rem;">Delete</button>`
                    : '';
                return `<div class="lead-card"><strong>${service}</strong><small>${when}</small><div style="margin-top:10px; line-height:1.5;">${lines}</div>${action}</div>`;
            }).join('');
        }

        function stripProjectQuoteFields(project) {
            if (!project || typeof project !== 'object') return project;
            const {
                quote,
                testimonial,
                testimonials,
                clientQuote,
                clientTestimonial,
                ...rest
            } = project;
            return rest;
        }

        function normalizeVisibilityFlags(project) {
            if (!project || typeof project !== 'object') {
                return {
                    featured: true,
                    showcase: true,
                    services: true
                };
            }
            const featured = typeof project.featured === 'boolean'
                ? project.featured
                : (typeof project.showInFeatured === 'boolean' ? project.showInFeatured : true);
            const showcase = typeof project.showcase === 'boolean'
                ? project.showcase
                : (typeof project.showInShowcase === 'boolean' ? project.showInShowcase : true);
            const services = typeof project.services === 'boolean'
                ? project.services
                : (typeof project.showInServices === 'boolean' ? project.showInServices : true);
            return { featured, showcase, services };
        }

        function getHailifuPlaceholderDataUri(label = 'HAILIFU') {
            const safeLabel = String(label || 'HAILIFU').slice(0, 60);
            const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0a"/>
      <stop offset="1" stop-color="#1b1b1b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#g)"/>
  <rect x="40" y="40" width="1120" height="670" rx="34" fill="rgba(153,84,0,0.06)" stroke="rgba(153,84,0,0.35)" stroke-width="6"/>
  <text x="600" y="380" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="800" fill="#995400" letter-spacing="6">${safeLabel}</text>
  <text x="600" y="460" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="700" fill="rgba(255,255,255,0.72)">PROJECT IMAGE</text>
</svg>`;
            return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
        }

        function bindHailifuMediaFallback(root, label) {
            if (!root) return;
            const imgs = Array.from(root.querySelectorAll('img'));
            imgs.forEach((img) => {
                if (img.dataset && img.dataset.hailifuFallbackBound === '1') return;
                if (img.dataset) img.dataset.hailifuFallbackBound = '1';

                img.addEventListener('error', () => {
                    try {
                        const placeholder = getHailifuPlaceholderDataUri(label);
                        if (img.src === placeholder) return;
                        img.src = placeholder;
                    } catch {}
                });
            });
        }

        function getDeletedProjectIdSet() {
            const raw = readJsonStorage(deletedProjectsStorageKey, []);
            if (!Array.isArray(raw)) return new Set();
            return new Set(
                raw
                    .map((value) => String(value || '').trim())
                    .filter(Boolean)
            );
        }

        function persistDeletedProjectIdSet(idSet) {
            if (!(idSet instanceof Set)) {
                writeJsonStorage(deletedProjectsStorageKey, []);
                return;
            }
            writeJsonStorage(deletedProjectsStorageKey, Array.from(idSet));
        }

        function makeProjectStorageId(project, idx = 0) {
            const base = project && typeof project === 'object' ? project : {};
            const explicit = String(base.id || '').trim();
            if (explicit) return explicit;
            const seed = [
                base.createdAt,
                base.timestamp,
                base.title,
                base.name,
                base.category,
                base.mediaSrc,
                base.imageUrl,
                base.mediaUrl,
                idx
            ].map((value) => String(value || '').trim()).join('|');
            return `project_${hashText(seed || String(idx))}`;
        }

        function normalizeProjectRecords(projects, opts = {}) {
            const source = Array.isArray(projects) ? projects : [];
            const skipDeleted = opts && opts.skipDeleted instanceof Set ? opts.skipDeleted : null;
            let changed = false;
            const normalized = [];

            source.forEach((entry, idx) => {
                if (!entry || typeof entry !== 'object') {
                    changed = true;
                    return;
                }
                const stripped = stripProjectQuoteFields(entry);
                const id = makeProjectStorageId(stripped, idx);
                if (skipDeleted && skipDeleted.has(id)) return;
                if (stripped !== entry) changed = true;
                if (String(stripped.id || '').trim() !== id) changed = true;
                normalized.push({
                    ...stripped,
                    id
                });
            });

            return { normalized, changed };
        }

        function mergeProjectRecords(primary, secondary, deletedIds = null) {
            const merged = [];
            const seen = new Set();

            const append = (list) => {
                const source = Array.isArray(list) ? list : [];
                source.forEach((entry, idx) => {
                    if (!entry || typeof entry !== 'object') return;
                    const stripped = stripProjectQuoteFields(entry);
                    const id = makeProjectStorageId(stripped, idx);
                    if (!id) return;
                    if (deletedIds && deletedIds.has(id)) return;
                    if (seen.has(id)) return;
                    seen.add(id);
                    merged.push({
                        ...stripped,
                        id
                    });
                });
            };

            append(primary);
            append(secondary);
            return merged;
        }

        function projectSnapshot(project) {
            const base = project && typeof project === 'object' ? project : {};
            return [
                String(base.id || '').trim(),
                String(base.title || '').trim(),
                String(base.category || '').trim(),
                String(base.mediaSrc || base.imageUrl || base.mediaUrl || '').trim(),
                String(base.thumbSrc || base.thumbnailUrl || base.thumbUrl || '').trim(),
                String(base.createdAt || '').trim(),
                String(base.timestamp || '').trim(),
                String(base.updatedAt || '').trim(),
                String(base.featured),
                String(base.showcase),
                String(base.services)
            ].join('|');
        }

        function areProjectCollectionsEqual(left, right) {
            const a = Array.isArray(left) ? left : [];
            const b = Array.isArray(right) ? right : [];
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i += 1) {
                if (projectSnapshot(a[i]) !== projectSnapshot(b[i])) return false;
            }
            return true;
        }

        function syncDeletedProjectsWithSavedCollection(nextProjects, opts = {}) {
            const markRemovedFromStored = opts.markRemovedFromStored !== false;
            const deletedIds = getDeletedProjectIdSet();
            const nextIds = new Set(
                (Array.isArray(nextProjects) ? nextProjects : [])
                    .map((project) => String(project?.id || '').trim())
                    .filter(Boolean)
            );
            let changed = false;

            nextIds.forEach((id) => {
                if (deletedIds.delete(id)) changed = true;
            });

            if (markRemovedFromStored) {
                const { normalized: previousStored } = normalizeProjectRecords(readJsonStorage(projectsStorageKey, []), {
                    skipDeleted: null
                });
                previousStored.forEach((project) => {
                    const id = String(project?.id || '').trim();
                    if (!id || nextIds.has(id) || deletedIds.has(id)) return;
                    deletedIds.add(id);
                    changed = true;
                });
            }

            if (changed) {
                persistDeletedProjectIdSet(deletedIds);
            }
        }

        function persistProjectsToStorage(projects, opts = {}) {
            const deletedIds = getDeletedProjectIdSet();
            const respectDeleted = opts.respectDeleted !== false;
            const { normalized } = normalizeProjectRecords(projects, { skipDeleted: respectDeleted ? deletedIds : null });
            syncDeletedProjectsWithSavedCollection(normalized, opts);
            writeJsonStorage(projectsStorageKey, normalized);
            return normalized;
        }

        function mergeRemoteProjectsIntoStorage(remoteProjects) {
            const deletedIds = getDeletedProjectIdSet();
            const { normalized: incoming } = normalizeProjectRecords(remoteProjects, { skipDeleted: deletedIds });
            if (!incoming.length) return;
            const { normalized: local } = normalizeProjectRecords(readJsonStorage(projectsStorageKey, []), { skipDeleted: deletedIds });
            const merged = mergeProjectRecords(local, incoming, deletedIds);
            if (!hasStorageKey(projectsStorageKey) || !areProjectCollectionsEqual(local, merged)) {
                persistProjectsToStorage(merged, { markRemovedFromStored: false });
            }
        }

        function getProjects() {
            const deletedIds = getDeletedProjectIdSet();
            const firebaseProjects = Array.isArray(firebaseProjectsState) ? firebaseProjectsState : null;
            let records = [];

            if (firebaseProjects) {
                const { normalized } = normalizeProjectRecords(firebaseProjects, { skipDeleted: deletedIds });
                records = normalized;
            } else {
                const hasStoredProjects = hasStorageKey(projectsStorageKey);
                const { normalized: localProjects, changed: localChanged } = normalizeProjectRecords(readJsonStorage(projectsStorageKey, []), { skipDeleted: deletedIds });
                const { normalized: remoteProjects } = normalizeProjectRecords(
                    remoteConfigState && Array.isArray(remoteConfigState?.projects) ? remoteConfigState.projects : [],
                    { skipDeleted: deletedIds }
                );

                let merged = mergeProjectRecords(localProjects, remoteProjects, deletedIds);

                if (!hasStoredProjects && !merged.length) {
                    const { normalized: defaults } = normalizeProjectRecords(DEFAULT_SHOWCASE_PROJECTS, { skipDeleted: deletedIds });
                    merged = defaults;
                }

                if (hasStoredProjects || merged.length) {
                    if (localChanged || !areProjectCollectionsEqual(localProjects, merged)) {
                        persistProjectsToStorage(merged, { markRemovedFromStored: false });
                    }
                }

                records = merged;
            }

            const sorted = records
                .map((project, idx) => {
                    const base = stripProjectQuoteFields(project);
                    const mediaLibraryMap = getMediaLibraryMap();
                    const visibility = normalizeVisibilityFlags(base);
                    const rawMediaSrc = String(base?.mediaSrc || base?.imageUrl || base?.mediaUrl || '').trim();
                    const rawThumbSrc = String(base?.thumbSrc || base?.thumbnailUrl || base?.thumbUrl || '').trim();
                    const showcaseSurfaceSrc = normalizeProjectMediaPath(String(base?.showcaseMediaSrc || '').trim());
                    const servicesSurfaceSrc = normalizeProjectMediaPath(String(base?.servicesMediaSrc || '').trim());
                    const featuredSurfaceSrc = normalizeProjectMediaPath(String(base?.featuredMediaSrc || '').trim());
                    const hasMediaList = Array.isArray(base?.mediaItems) && base.mediaItems.length > 0;
                    const hasGalleryList = Array.isArray(base?.gallery) && base.gallery.length > 0;
                    let mediaSrc = normalizeProjectMediaPath(rawMediaSrc);
                    const thumbSrc = normalizeProjectMediaPath(rawThumbSrc);
                    const fallbackId = String(base?.id || project?.id || mediaSrc || rawMediaSrc || base?.title || `local-${idx}`).trim();
                    const fallbackMedia = DEFAULT_PROJECT_MEDIA_BY_ID[fallbackId];
                    const hasAnyStructuredMedia = Boolean(
                        mediaSrc ||
                        showcaseSurfaceSrc ||
                        servicesSurfaceSrc ||
                        featuredSurfaceSrc ||
                        hasMediaList ||
                        hasGalleryList
                    );

                    if (!hasAnyStructuredMedia) {
                        if (fallbackMedia && fallbackMedia.mediaSrc) {
                            mediaSrc = normalizeProjectMediaPath(fallbackMedia.mediaSrc);
                        }
                        if (!mediaSrc) {
                            const label = String(base?.title || base?.name || base?.category || 'HAILIFU').trim();
                            mediaSrc = getHailifuPlaceholderDataUri(label || 'HAILIFU');
                        }
                    }

                    const mediaType = String(base?.mediaType || (mediaSrc && /\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc) ? 'video' : 'image') || 'image').trim().toLowerCase() || 'image';
                    const mediaIds = Array.isArray(base?.mediaIds) ? base.mediaIds.map((id) => String(id || '').trim()).filter(Boolean) : [];
                    const mediaItemsFromIds = mediaIds
                        .map((id) => mediaLibraryMap[id])
                        .filter(Boolean)
                        .map((entry) => normalizeMediaItem({
                            mediaSrc: entry.url,
                            mediaType: entry.type,
                            thumbSrc: ''
                        }))
                        .filter(Boolean);

                    const mediaItemsExisting = Array.isArray(base?.mediaItems) ? base.mediaItems : [];
                    const mergedMediaItems = normalizeMediaCollection([...mediaItemsFromIds, ...mediaItemsExisting]);
                    const primaryFromMediaIds = mergedMediaItems[0] || null;

                    const timestamp = Number(base?.timestamp) || (Date.parse(base?.createdAt || '') || 0);

                    return {
                        ...base,
                        id: fallbackId,
                        mediaSrc: primaryFromMediaIds?.mediaSrc || mediaSrc,
                        thumbSrc: primaryFromMediaIds?.thumbSrc || thumbSrc,
                        mediaType: primaryFromMediaIds?.mediaType || mediaType,
                        mediaItems: mergedMediaItems.length ? mergedMediaItems : mediaItemsExisting,
                        mediaIds,
                        ...visibility,
                        isStarred: Boolean(project?.isStarred),
                        isFeatured: Boolean(project?.isFeatured),
                        timestamp
                    };
                })
                .sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));

            return sorted;
        }

        function saveProjects(projects) {
            const sanitized = persistProjectsToStorage(projects, {
                markRemovedFromStored: true,
                respectDeleted: false
            });

            if (Array.isArray(firebaseProjectsState)) {
                firebaseProjectsState = sanitized;
            }

            if (remoteConfigState && typeof remoteConfigState === 'object') {
                remoteConfigState = {
                    ...remoteConfigState,
                    projects: sanitized
                };
            }
        }

        // Deletes a project everywhere. Returns { ok, message }.
        // The admin is already signed in with Supabase (and RLS decides what may be deleted),
        // so without a session the delete is refused (the old PIN prompt was removed in round 11).
        async function deleteProjectById(projectId, opts = {}) {
            if (!projectId) return { ok: false, message: 'No project id' };
            const id = String(projectId);
            if (!opts.confirmed) {
                try {
                    if (adminPanel && adminPanel.classList.contains('active') && !(await hasAdminAuthSession())) {
                        showAdminMediaToast('Please sign in again to delete.', 'warning');
                        return { ok: false, message: 'Blocked' };
                    }
                } catch {}
            }

            // 1. Remove from Supabase first, so a refused delete leaves everything as it was
            let remote = { ok: true, removed: 0 };
            if (typeof deleteProjectInSupabase === 'function') {
                remote = await deleteProjectInSupabase(id);
                if (!remote.ok) return { ok: false, message: remote.message };
            }

            // 2. Local storage + tombstone so merged/remote copies do not bring it back
            const projects = getProjects();
            saveProjects(projects.filter((p) => String(p?.id || '') !== id));
            try {
                const deleted = readJsonStorage(deletedProjectsStorageKey, []);
                if (Array.isArray(deleted) && !deleted.includes(id)) writeJsonStorage(deletedProjectsStorageKey, [...deleted, id]);
            } catch {}
            if (adminState?.data?.projects) adminState.data.projects = adminState.data.projects.filter((p) => String(p?.id || '') !== id);
            try { adminState.cache.delete('projects'); } catch {}

            // 3. Public showcase + other stores
            renderProjects();
            if (typeof removeProjectInFirebase === 'function' && firebaseIsReady()) {
                removeProjectInFirebase(id).catch(() => console.warn('[HAILIFU] Firebase removal failed for:', id));
            }
            if (typeof pushAdminLog === 'function') pushAdminLog(`Project deleted: ${id}`, 'OK');
            if (!opts.confirmed) showAdminMediaToast('Project removed', 'success');
            return { ok: true, removed: remote.removed };
        }

        function migrateLegacyProjectsToMediaLibrary() {
            const projects = getProjects();
            if (!Array.isArray(projects) || !projects.length) return;
            const mediaLibrary = getMediaLibraryRecords().map(normalizeMediaLibraryRecord).filter(Boolean);
            const mediaMapByUrl = new Map(mediaLibrary.map((entry) => [String(entry.url || '').trim(), entry]));
            let mediaChanged = false;
            let projectChanged = false;

            const migratedProjects = projects.map((project) => {
                if (!project || typeof project !== 'object') return project;
                const currentIds = Array.isArray(project.mediaIds) ? project.mediaIds.map((id) => String(id || '').trim()).filter(Boolean) : [];
                const resolvedIds = currentIds.slice();
                const items = coerceProjectMediaItems(project);
                items.forEach((item) => {
                    const mediaSrc = normalizeProjectMediaPath(String(item?.mediaSrc || '').trim());
                    if (!mediaSrc) return;
                    let existing = mediaMapByUrl.get(mediaSrc);
                    if (!existing) {
                        existing = normalizeMediaLibraryRecord({
                            id: `media_mig_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
                            url: mediaSrc,
                            type: String(item?.mediaType || 'image').trim().toLowerCase() || 'image',
                            provider: /^https?:\/\//i.test(mediaSrc) && /res\.cloudinary\.com/i.test(mediaSrc) ? 'cloudinary' : 'external',
                            createdAt: new Date().toISOString(),
                            title: String(project?.title || '').trim() || 'Migrated media'
                        });
                        if (!existing) return;
                        mediaLibrary.unshift(existing);
                        mediaMapByUrl.set(mediaSrc, existing);
                        mediaChanged = true;
                    }
                    if (existing?.id && !resolvedIds.includes(existing.id)) {
                        resolvedIds.push(existing.id);
                    }
                });
                if (resolvedIds.join('|') !== currentIds.join('|')) {
                    projectChanged = true;
                    return { ...project, mediaIds: resolvedIds };
                }
                return project;
            });

            if (mediaChanged) {
                saveMediaLibraryRecords(mediaLibrary);
                if (firebaseIsReady()) {
                    const db = ensureFirebaseDb();
                    if (db) {
                        const updates = {};
                        mediaLibrary.forEach((entry) => {
                            const id = String(entry?.id || '').trim();
                            if (!id) return;
                            updates[id] = entry;
                        });
                        if (Object.keys(updates).length) {
                            db.ref(getFirebaseMediaLibraryPath()).update(updates).catch(() => {});
                        }
                    }
                }
            }
            if (projectChanged) {
                saveProjects(migratedProjects);
                if (firebaseIsReady()) {
                    migratedProjects.forEach((project) => {
                        if (!project?.id) return;
                        upsertProjectInFirebase(project).catch(() => {});
                    });
                }
            }
        }

        function getMediaKey(mediaItem) {
            const item = normalizeMediaItem(mediaItem);
            if (!item) return '';
            return `${item.mediaType}::${item.mediaSrc}`;
        }

        function normalizeMediaCollection(items) {
            if (!Array.isArray(items)) return [];
            const normalized = items
                .map((entry) => {
                    if (!entry) return null;
                    if (typeof entry === 'string') return normalizeMediaItem({ mediaSrc: entry });
                    if (typeof entry === 'object') return normalizeMediaItem(entry);
                    return null;
                })
                .filter(Boolean);

            const seen = new Set();
            return normalized.filter((item) => {
                const key = getMediaKey(item);
                if (!key || seen.has(key)) return false;
                seen.add(key);
                return true;
            });
        }

        function getProjectSurfaceFieldMap(surface) {
            const key = String(surface || '').trim().toLowerCase();
            if (key === 'featured') {
                return { src: 'featuredMediaSrc', type: 'featuredMediaType', thumb: 'featuredThumbSrc' };
            }
            if (key === 'showcase') {
                return { src: 'showcaseMediaSrc', type: 'showcaseMediaType', thumb: 'showcaseThumbSrc' };
            }
            if (key === 'services') {
                return { src: 'servicesMediaSrc', type: 'servicesMediaType', thumb: 'servicesThumbSrc' };
            }
            return null;
        }

        function getProjectSurfaceMediaList(project, surface) {
            if (!project || typeof project !== 'object') return [];
            const key = String(surface || '').trim().toLowerCase();
            if (key === 'featured') {
                const featuredList = normalizeMediaCollection(
                    Array.isArray(project.featuredMediaItems)
                        ? project.featuredMediaItems
                        : (Array.isArray(project.featuredMedia) ? project.featuredMedia : [])
                );

                const legacyMap = getProjectSurfaceFieldMap('featured');
                const legacyItem = legacyMap
                    ? normalizeMediaItem({
                        mediaSrc: project[legacyMap.src],
                        mediaType: project[legacyMap.type],
                        thumbSrc: project[legacyMap.thumb]
                    })
                    : null;

                if (legacyItem) {
                    const legacyKey = getMediaKey(legacyItem);
                    const hasLegacy = featuredList.some((item) => getMediaKey(item) === legacyKey);
                    if (!hasLegacy) featuredList.unshift(legacyItem);
                }

                if (featuredList.length) return featuredList;
            }

            const single = getProjectSurfaceMedia(project, key, { skipList: true });
            return single ? [single] : [];
        }

        function getProjectSurfaceMedia(project, surface, options = {}) {
            if (!project || typeof project !== 'object') return null;
            const key = String(surface || '').trim().toLowerCase();
            const skipList = Boolean(options && options.skipList);
            if (!skipList && key === 'featured') {
                const featuredList = getProjectSurfaceMediaList(project, key);
                if (featuredList.length) return featuredList[0];
            }
            const fieldMap = getProjectSurfaceFieldMap(key);
            if (fieldMap) {
                const candidate = normalizeMediaItem({
                    mediaSrc: project[fieldMap.src],
                    mediaType: project[fieldMap.type],
                    thumbSrc: project[fieldMap.thumb]
                });
                if (candidate) return candidate;
            }

            const primary = normalizeMediaItem({
                mediaSrc: project.mediaSrc,
                mediaType: project.mediaType,
                thumbSrc: project.thumbSrc
            });
            if (primary) return primary;

            const list = coerceProjectMediaItems(project);
            return list.length ? list[0] : null;
        }

        function setProjectSurfaceMedia(project, surface, mediaItem) {
            if (!project || typeof project !== 'object') return;
            const fieldMap = getProjectSurfaceFieldMap(surface);
            const normalized = normalizeMediaItem(mediaItem);
            if (!fieldMap || !normalized) return;
            project[fieldMap.src] = normalized.mediaSrc;
            project[fieldMap.type] = normalized.mediaType;
            project[fieldMap.thumb] = normalized.thumbSrc || '';
        }

        function toggleProjectSurfaceMedia(project, surface, mediaItem) {
            if (!project || typeof project !== 'object') return { added: false, list: [] };
            const key = String(surface || '').trim().toLowerCase();
            const normalized = normalizeMediaItem(mediaItem);
            if (!normalized) return { added: false, list: [] };

            if (key === 'featured') {
                const current = getProjectSurfaceMediaList(project, key);
                const targetKey = getMediaKey(normalized);
                const exists = current.some((item) => getMediaKey(item) === targetKey);
                const next = exists
                    ? current.filter((item) => getMediaKey(item) !== targetKey)
                    : [...current, normalized];

                if (next.length) {
                    project.featuredMediaItems = next.map((item) => ({
                        mediaSrc: item.mediaSrc,
                        mediaType: item.mediaType,
                        thumbSrc: item.thumbSrc || ''
                    }));
                    const primary = next[0];
                    project.featuredMediaSrc = primary.mediaSrc;
                    project.featuredMediaType = primary.mediaType;
                    project.featuredThumbSrc = primary.thumbSrc || '';
                } else {
                    delete project.featuredMediaItems;
                    clearProjectSurfaceMedia(project, 'featured');
                }

                return { added: !exists, list: next };
            }

            setProjectSurfaceMedia(project, key, normalized);
            return { added: true, list: getProjectSurfaceMediaList(project, key) };
        }

        function clearProjectSurfaceMedia(project, surface) {
            if (!project || typeof project !== 'object') return;
            const key = String(surface || '').trim().toLowerCase();
            if (key === 'featured') {
                delete project.featuredMediaItems;
                delete project.featuredMedia;
            }
            const fieldMap = getProjectSurfaceFieldMap(key);
            if (!fieldMap) return;
            delete project[fieldMap.src];
            delete project[fieldMap.type];
            delete project[fieldMap.thumb];
        }

        function renderProjects() {
            if (!projectsGrid) return;
            const projects = getProjects();

            if (projects.length === 0) {
                projectsGrid.classList.remove('is-grouped');
                projectsGrid.innerHTML = '';
                return;
            }
            const cacheStamp = Date.now();

            const resolveAdminAssetPath = (rawPath) => {
                const raw = String(rawPath || '').trim();
                if (!raw) return '';
                const hardcoded = buildAdminMediaPath(raw);
                if (hardcoded) return hardcoded;
                return normalizeProjectMediaPath(raw);
            };

            const escapeText = (value) => String(value || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');

            const normalizeGroupToken = (value) => (
                String(value || '')
                    .toLowerCase()
                    .replace(/\s+/g, ' ')
                    .trim()
            );

            const groupedMap = new Map();
            projects.forEach((project) => {
                const projectId = String(project?.id || '').trim();
                if (!projectId) return;

                const title = String(project?.title || project?.name || 'Untitled Project').trim() || 'Untitled Project';
                const category = String(project?.category || 'general').trim() || 'general';
                const list = coerceProjectMediaItems(project);
                if (!list.length) return;

                const groupKey = `${normalizeGroupToken(title)}::${normalizeGroupToken(category)}` || projectId;
                if (!groupedMap.has(groupKey)) {
                    groupedMap.set(groupKey, {
                        groupKey,
                        title,
                        category,
                        projectIds: new Set(),
                        mediaEntries: []
                    });
                }

                const group = groupedMap.get(groupKey);
                group.projectIds.add(projectId);
                list.forEach((media, index) => {
                    group.mediaEntries.push({
                        project,
                        projectId,
                        title,
                        category,
                        media,
                        index,
                        total: list.length
                    });
                });
            });

            const groupedEntries = Array.from(groupedMap.values());

            if (!groupedEntries.length) {
                projectsGrid.classList.add('is-grouped');
                projectsGrid.innerHTML = '<div class="admin-empty">No media found.</div>';
                return;
            }

            const formatCategoryLabel = (category) => (
                String(category || 'general')
                    .replace(/[-_]+/g, ' ')
                    .replace(/\b\w/g, (ch) => ch.toUpperCase())
            );

            const getDirectSurfaceMediaKey = (project, surface) => {
                const fieldMap = getProjectSurfaceFieldMap(surface);
                if (!fieldMap) return '';
                const assigned = normalizeMediaItem({
                    mediaSrc: project?.[fieldMap.src],
                    mediaType: project?.[fieldMap.type],
                    thumbSrc: project?.[fieldMap.thumb]
                });
                return getMediaKey(assigned);
            };

            const buildMediaCard = ({ project, projectId, title, category, media, index, total }) => {
                const safeTitle = escapeText(title);
                const safeCategory = escapeText(formatCategoryLabel(category));
                const mediaKey = getMediaKey(media);
                const safeMediaKey = escapeText(mediaKey);
                const mediaSrc = String(media?.mediaSrc || '').trim();
                const mediaType = String(media?.mediaType || 'image').trim().toLowerCase();
                const rawThumb = String(media?.thumbSrc || '').trim();
                const thumbLooksVideo = /\.(mp4|webm|mov)(\?|#|$)/i.test(rawThumb);
                const youtubeThumb = getYoutubeThumbUrl(getYoutubeVideoId(mediaSrc));
                const thumbSrcRaw = mediaType === 'youtube'
                    ? (rawThumb || youtubeThumb || mediaSrc)
                    : mediaType === 'video'
                        ? ((rawThumb && !thumbLooksVideo) ? rawThumb : '')
                        : (rawThumb || mediaSrc);
                const resolvedThumb = resolveAdminAssetPath(thumbSrcRaw);
                const thumbWithBuster = appendCacheBuster(resolvedThumb, cacheStamp);
                const previewSrc = thumbWithBuster || getHailifuPlaceholderDataUri('HAILIFU');
                const crossorigin = getFirebaseCrossoriginAttr(previewSrc);
                const mediaItemsData = JSON.stringify(coerceProjectMediaItems(project)).replace(/"/g, '&quot;');

                const featuredMediaKeys = new Set(
                    getProjectSurfaceMediaList(project, 'featured')
                        .map((item) => getMediaKey(item))
                        .filter(Boolean)
                );
                const showcaseMediaKey = getDirectSurfaceMediaKey(project, 'showcase');
                const servicesMediaKey = getDirectSurfaceMediaKey(project, 'services');

                const featuredBtnClass = featuredMediaKeys.has(mediaKey) ? 'media-surface-btn is-active' : 'media-surface-btn';
                const showcaseBtnClass = showcaseMediaKey && showcaseMediaKey === mediaKey ? 'media-surface-btn is-active' : 'media-surface-btn';
                const servicesBtnClass = servicesMediaKey && servicesMediaKey === mediaKey ? 'media-surface-btn is-active' : 'media-surface-btn';
                const heroBtnClass = project?.showInHero && project?.mediaSrc === mediaSrc ? 'media-surface-btn is-active' : 'media-surface-btn';
                const integrityBtnClass = project?.showInIntegrity && project?.mediaSrc === mediaSrc ? 'media-surface-btn is-active' : 'media-surface-btn';

                const typeBadge = mediaType === 'video'
                    ? '<div class="project-media-badge"><i class="fas fa-film"></i> Video</div>'
                    : mediaType === 'youtube'
                        ? '<div class="project-media-badge"><i class="fab fa-youtube"></i> YouTube</div>'
                        : '';

                const previewMarkup = `<img src="${previewSrc}" alt="${safeTitle}" loading="lazy" decoding="async" ${crossorigin} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')">`;

                return `
                    <div
                        class="project-thumb"
                        data-admin-project-id="${projectId}"
                        data-admin-media-key="${safeMediaKey}"
                        data-admin-media-src="${escapeText(mediaSrc)}"
                        data-admin-media-type="${escapeText(mediaType)}"
                        data-media-items="${mediaItemsData}"
                    >
                        ${previewMarkup}
                        ${typeBadge}
                        <button
                            class="project-delete"
                            type="button"
                            data-delete-media-project-id="${projectId}"
                            data-delete-media-key="${safeMediaKey}"
                            aria-label="Delete media"
                        >
                            <i class="fas fa-trash"></i>
                        </button>
                        <div class="project-meta">
                            <div class="project-title">${safeTitle}</div>
                            <div class="project-media-caption">${safeCategory} - ${index + 1}/${total}</div>
                            <div class="media-surface-actions">
                                <button class="${featuredBtnClass}" type="button" data-apply-media-surface="featured" data-apply-project-id="${projectId}" data-apply-media-key="${safeMediaKey}">Featured</button>
                                <button class="${showcaseBtnClass}" type="button" data-apply-media-surface="showcase" data-apply-project-id="${projectId}" data-apply-media-key="${safeMediaKey}">Showcase</button>
                                <button class="${servicesBtnClass}" type="button" data-apply-media-surface="services" data-apply-project-id="${projectId}" data-apply-media-key="${safeMediaKey}">Services</button>
                                <button class="${heroBtnClass}" type="button" data-apply-media-surface="hero" data-apply-project-id="${projectId}" data-apply-media-key="${safeMediaKey}">Hero BG</button>
                                <button class="${integrityBtnClass}" type="button" data-apply-media-surface="integrity" data-apply-project-id="${projectId}" data-apply-media-key="${safeMediaKey}">Integrity</button>
                            </div>
                        </div>
                    </div>
                `;
            };

            const markup = groupedEntries.map((group) => {
                const { title, category, projectIds, mediaEntries } = group;
                const safeTitle = escapeText(title);
                const safeCategory = escapeText(formatCategoryLabel(category));
                const featuredAssigned = mediaEntries.reduce((count, entry) => {
                    const mediaKey = getMediaKey(entry.media);
                    if (!mediaKey) return count;
                    const selected = getProjectSurfaceMediaList(entry.project, 'featured')
                        .some((item) => getMediaKey(item) === mediaKey);
                    return count + (selected ? 1 : 0);
                }, 0);
                const showcaseAssigned = mediaEntries.reduce((count, entry) => {
                    const mediaKey = getMediaKey(entry.media);
                    if (!mediaKey) return count;
                    return count + (getDirectSurfaceMediaKey(entry.project, 'showcase') === mediaKey ? 1 : 0);
                }, 0);
                const servicesAssigned = mediaEntries.reduce((count, entry) => {
                    const mediaKey = getMediaKey(entry.media);
                    if (!mediaKey) return count;
                    return count + (getDirectSurfaceMediaKey(entry.project, 'services') === mediaKey ? 1 : 0);
                }, 0);
                const heroAssigned = mediaEntries.reduce((count, entry) => {
                    return count + (entry.project?.showInHero && getMediaKey(entry.media) === getMediaKey(entry.project) ? 1 : 0);
                }, 0);
                const integrityAssigned = mediaEntries.reduce((count, entry) => {
                    return count + (entry.project?.showInIntegrity && getMediaKey(entry.media) === getMediaKey(entry.project) ? 1 : 0);
                }, 0);
                const cards = mediaEntries.map((entry) => buildMediaCard(entry)).join('');
                const projectRecords = projectIds.size;
                const recordsChip = projectRecords > 1
                    ? `<span class="admin-project-group-chip">${projectRecords} records</span>`
                    : '';
                const groupKeySafe = escapeText(group.groupKey || title);

                return `
                    <section class="admin-project-group" data-admin-project-group="${groupKeySafe}">
                        <header class="admin-project-group-header">
                            <div class="admin-project-group-title">${safeTitle}</div>
                            <div class="admin-project-group-meta">
                                <span class="admin-project-group-chip">${safeCategory}</span>
                                ${recordsChip}
                                <span class="admin-project-group-chip">${mediaEntries.length} media</span>
                                <span class="admin-project-group-chip">Featured ${featuredAssigned}</span>
                                <span class="admin-project-group-chip">Showcase ${showcaseAssigned}</span>
                                <span class="admin-project-group-chip">Services ${servicesAssigned}</span>
                                <span class="admin-project-group-chip">Hero ${heroAssigned}</span>
                                <span class="admin-project-group-chip">Integrity ${integrityAssigned}</span>
                            </div>
                        </header>
                        <div class="admin-project-group-grid">${cards}</div>
                    </section>
                `;
            }).join('');

            projectsGrid.classList.add('is-grouped');
            projectsGrid.innerHTML = markup;
        }

        function updateProjectLiveStatus(card, visibility) {
            if (!card) return;
            const state = visibility || {};
            const pillMap = {
                featured: Boolean(state.featured),
                showcase: Boolean(state.showcase),
                services: Boolean(state.services)
            };
            Object.keys(pillMap).forEach((key) => {
                const pill = card.querySelector(`[data-status-pill="${key}"]`);
                if (pill) pill.classList.toggle('is-on', pillMap[key]);
            });
        }

        const reviewsInitialCount = 8;
        let reviewsExpanded = false;

        // Also escapes quotes: the result is used inside attribute values (value="", src="", alt="")
        const escapeHTML = (value) => String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        const buildStarIcons = () => {
            return Array.from({ length: 5 }, () => '<i class="fas fa-star"></i>').join('');
        };

        const toSafeRating = (value) => Math.max(1, Math.min(5, Number(value) || 5));
        const buildStarText = (rating) => '\u2605'.repeat(toSafeRating(rating)) + '\u2606'.repeat(5 - toSafeRating(rating));
        const VERIFIED_REVIEWER_NAME = 'Verified Customer';
        const REVIEW_AVATAR_PLACEHOLDER_SRC = './logo.webp';
        const REVIEW_SOURCE_GOOGLE = 'Google';
        const REVIEW_SOURCE_NATIVE = 'Native';
        const FEATURABLE_PLACE_ID = 'hailifu-brilliant-installation';
        const normalizePlaceIdKey = (value) => String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const normalizeFeedKey = (value) => String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const FEATURABLE_PLACE_KEY = normalizePlaceIdKey(FEATURABLE_PLACE_ID);
        let mergedReviewTotalCount = 0;
        let mergedReviewCounterFrame = null;
        let mergedReviewCounterRequestId = 0;
        const toSafeMetaCount = (value) => {
            const numeric = Number(value);
            if (!Number.isFinite(numeric)) return null;
            return Math.max(0, Math.round(numeric));
        };
        const toSafeAverageRating = (value) => {
            // Missing/empty/zero means "no rating yet" (Number(null) === 0 used to clamp to a public 1.0).
            if (value === null || value === undefined || value === '') return null;
            const numeric = Number(value);
            if (!Number.isFinite(numeric) || numeric <= 0) return null;
            return Math.max(1, Math.min(5, numeric));
        };
        const formatVerifiedCountLabel = (value) => {
            const count = Math.max(0, Number(value) || 0);
            if (!count) return '--';
            return String(count);
        };
        const isMatchingPlaceId = (value) => {
            const placeKey = normalizePlaceIdKey(value);
            return !placeKey || placeKey === FEATURABLE_PLACE_KEY;
        };
        const toSafeImageUrl = (value) => {
            let raw = String(value || '').trim();
            if (!raw) return '';
            raw = raw.replace(/^url\((['"]?)(.+)\1\)$/i, '$2').trim();
            if (!raw) return '';
            if (/^(?:[a-z0-9-]+\.)*(?:googleusercontent\.com|gstatic\.com)\//i.test(raw)) {
                raw = `https://${raw}`;
            }
            if (/^\/\//.test(raw)) {
                raw = `${window.location.protocol}${raw}`;
            }
            try {
                const parsed = new URL(raw, window.location.origin);
                if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:' && parsed.protocol !== 'data:') {
                    return '';
                }
                return parsed.href;
            } catch (error) {
                return '';
            }
        };
        const shouldUseAnonymousCrossoriginForReviewImage = (value) => {
            const safeUrl = toSafeImageUrl(value);
            if (!safeUrl || safeUrl.startsWith('data:')) return false;
            try {
                const parsed = new URL(safeUrl, window.location.origin);
                const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
                if (!host) return false;
                if (host.includes('firebasestorage.googleapis.com')) return true;
                if (host.includes('res.cloudinary.com')) return true;
                return false;
            } catch (error) {
                return false;
            }
        };
        const isLikelyGeneratedAuthorId = (value) => {
            const raw = String(value || '').trim();
            if (!raw) return false;
            const compact = raw.replace(/[\s_.-]+/g, '');
            const noSpaces = !/\s/.test(raw);
            const isUuidToken = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(raw);
            const isOpaqueAbToken = /^ab[a-z0-9]{10,}$/i.test(compact) && noSpaces;
            const isVeryLongAlphaNumericToken = compact.length > 36 && /^[a-z0-9]+$/i.test(compact) && noSpaces;
            const isHexHashToken = compact.length >= 32 && /^[a-f0-9]+$/i.test(compact) && noSpaces;
            return isUuidToken || isOpaqueAbToken || isVeryLongAlphaNumericToken || isHexHashToken;
        };
        const isDisallowedLongAlphanumericText = (value) => {
            const raw = String(value || '').trim();
            if (!raw) return false;
            const compact = raw.replace(/[_-]+/g, '');
            if (compact.length <= 50) return false;
            if (/\s/.test(raw)) return false;
            if (/^https?:\/\//i.test(raw)) return false;
            return /^[a-z0-9_-]+$/i.test(compact);
        };
        const isIsoTimestampText = (value) => {
            const raw = String(value || '').trim();
            if (!raw) return false;
            return /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(?:\.\d+)?z$/i.test(raw);
        };
        const isDateOnlyText = (value) => {
            const raw = String(value || '').trim();
            if (!raw) return false;
            if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return true;
            if (/^\d{1,2}\s+[a-z]{3,9}\s+\d{4}$/i.test(raw)) return true;
            return false;
        };
        const isUuidLikeText = (value) => {
            const raw = String(value || '').trim();
            if (!raw) return false;
            return /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(raw);
        };
        const isPlaceholderReviewText = (value) => {
            const raw = String(value || '').replace(/\s+/g, ' ').trim();
            if (!raw) return true;
            const lower = raw.toLowerCase();
            const compact = lower.replace(/[\s_-]+/g, '');
            if (isIsoTimestampText(raw)) return true;
            if (isDateOnlyText(raw)) return true;
            if (isUuidLikeText(raw)) return true;
            if (compact === FEATURABLE_PLACE_KEY) return true;
            if (compact === 'firstandlastinitials') return true;
            if (compact === 'verifiedcustomer') return true;
            if (compact === 'relative') return true;
            if (compact === 'recent') return true;
            if (compact === 'today') return true;
            if (compact === 'yesterday') return true;
            if (compact === 'live') return true;
            if (isLikelyGeneratedAuthorId(raw)) return true;
            return false;
        };
        const toSafeReviewComment = (value) => {
            const raw = String(value || '').replace(/\s+/g, ' ').trim();
            if (!raw) return '';
            if (isDisallowedLongAlphanumericText(raw)) return '';
            if (isPlaceholderReviewText(raw)) return '';
            if (raw.length < 8) return '';
            return raw;
        };
        const toSafeOwnerReply = (value) => {
            const raw = String(value || '').replace(/\s+/g, ' ').trim();
            if (!raw) return '';
            if (isDisallowedLongAlphanumericText(raw)) return '';
            if (isPlaceholderReviewText(raw)) return '';
            if (raw.length < 8) return '';
            return raw;
        };
        const toSafeReviewerName = (value) => {
            const raw = String(value || '').replace(/\s+/g, ' ').trim();
            if (!raw) return VERIFIED_REVIEWER_NAME;
            if (isLikelyGeneratedAuthorId(raw)) return VERIFIED_REVIEWER_NAME;
            return raw;
        };
        const firstNonEmptyText = (values) => {
            for (let i = 0; i < values.length; i += 1) {
                const candidate = values[i];
                if (typeof candidate !== 'string' && typeof candidate !== 'number') continue;
                const text = String(candidate).replace(/\s+/g, ' ').trim();
                if (text) return text;
            }
            return '';
        };
        function toSafeEmailAddress(value) {
            const text = String(value || '').trim().toLowerCase();
            if (!text) return '';
            const match = text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
            return match ? String(match[0]).toLowerCase() : '';
        }
        const extractReviewEmail = (review) => {
            if (!review || typeof review !== 'object') return '';
            const emailCandidates = [
                review.email,
                review.userEmail,
                review.user_email,
                review.reviewerEmail,
                review.reviewer_email,
                review.authorEmail,
                review.author_email,
                review.customerEmail,
                review.customer_email,
                review.contactEmail,
                review.contact_email,
                review.author && (review.author.email || review.author.userEmail || review.author.user_email),
                review.reviewer && (review.reviewer.email || review.reviewer.userEmail || review.reviewer.user_email)
            ];
            for (let i = 0; i < emailCandidates.length; i += 1) {
                const email = toSafeEmailAddress(emailCandidates[i]);
                if (email) return email;
            }
            return '';
        };
        const toIdentityText = (value, limit = 180) => String(value || '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .trim()
            .slice(0, Math.max(0, limit));
        const buildReviewIdentityKey = (review) => {
            if (!review || typeof review !== 'object') return '';
            const email = toSafeEmailAddress(review.reviewEmail || extractReviewEmail(review));
            if (email) return `email:${email}`;
            const name = toIdentityText(review.name || review.reviewerName || review.authorName, 100);
            const comment = toIdentityText(review.comment || review.reviewText || review.review_body || review.reviewBody, 260);
            if (name && comment) return `sig:${name}|${comment}`;
            return '';
        };
        const getReviewIdentityCandidates = (review) => {
            if (!review || typeof review !== 'object') return [];
            const email = toSafeEmailAddress(review.reviewEmail || extractReviewEmail(review));
            const signature = buildReviewIdentityKey(review);
            const output = [];
            if (email) output.push(`email:${email}`);
            if (signature) output.push(signature);
            return Array.from(new Set(output));
        };
        const isFallbackReviewerName = (value) => {
            const raw = String(value || '').replace(/\s+/g, ' ').trim();
            return raw === VERIFIED_REVIEWER_NAME;
        };
        const formatTechnicalDate = (value) => {
            const raw = String(value || '').replace(/\s+/g, ' ').trim();
            if (!raw) return 'Recent';
            const parsed = new Date(raw);
            if (!Number.isNaN(parsed.getTime())) {
                return parsed.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
            }
            const normalized = raw.toLowerCase();
            if (normalized === 'just now') return 'Just now';
            if (normalized === 'today') return 'Today';
            if (normalized === 'yesterday') return 'Yesterday';
            if (normalized === 'live') return 'Live';
            if (normalized === 'recent') return 'Recent';
            if (normalized === 'relative') return 'Recent';
            return raw;
        };

        const getRelativeReviewDate = (input) => {
            if (!input) return 'Recent';
            const date = input instanceof Date ? input : new Date(input);
            if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
                return 'Recent';
            }

            const elapsedMs = Date.now() - date.getTime();
            if (elapsedMs <= 0) return 'Recent';

            const minutes = Math.floor(elapsedMs / (1000 * 60));
            if (minutes < 2) return 'Just now';
            if (minutes < 60) return `${minutes} minutes ago`;

            const hours = Math.floor(minutes / 60);
            if (hours < 24) return `${hours} hours ago`;

            const days = Math.floor(hours / 24);
            if (days < 7) return `${days} days ago`;

            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        };

        const toDisplayReviewDate = (value) => formatTechnicalDate(value);
        const formatTrustCounter = (value) => {
            const num = Math.max(0, Math.round(Number(value) || 0));
            return num > 0 ? `${num}+` : '--';
        };
        const drawMergedReviewCounter = () => {};
        const setMergedReviewCounter = (nextTotal, opts = {}) => {
            const safeNext = Math.max(0, Math.round(Number(nextTotal) || 0));
            const animate = opts && opts.animate !== false;
            const startValue = Math.max(0, Math.round(Number(mergedReviewTotalCount) || 0));

            if (!animate || safeNext === startValue) {
                if (mergedReviewCounterFrame) {
                    cancelAnimationFrame(mergedReviewCounterFrame);
                    mergedReviewCounterFrame = null;
                }
                mergedReviewTotalCount = safeNext;
                drawMergedReviewCounter(safeNext);
                return;
            }

            if (mergedReviewCounterFrame) {
                cancelAnimationFrame(mergedReviewCounterFrame);
                mergedReviewCounterFrame = null;
            }

            const duration = 520;
            const startAt = performance.now();
            const tick = (now) => {
                const progress = Math.min(1, (now - startAt) / duration);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(startValue + ((safeNext - startValue) * eased));
                drawMergedReviewCounter(current);
                if (progress < 1) {
                    mergedReviewCounterFrame = requestAnimationFrame(tick);
                    return;
                }
                mergedReviewCounterFrame = null;
                mergedReviewTotalCount = safeNext;
                drawMergedReviewCounter(safeNext);
            };
            mergedReviewCounterFrame = requestAnimationFrame(tick);
        };
        const normalizeReviewMeta = (metaInput) => {
            const meta = metaInput && typeof metaInput === 'object' ? metaInput : {};
            const placeId = String(
                meta.placeId ||
                meta.place_id ||
                meta.placeSlug ||
                meta.place_slug ||
                meta.placeKey ||
                meta.place_key ||
                meta.businessSlug ||
                meta.business_slug ||
                meta.listingId ||
                meta.listing_id ||
                meta.locationId ||
                meta.location_id ||
                meta.slug ||
                FEATURABLE_PLACE_ID
            ).trim();

            if (!isMatchingPlaceId(placeId)) {
                return null;
            }

            const average = toSafeAverageRating(
                meta.average ??
                meta.avg ??
                meta.avgRating ??
                meta.averageRating ??
                meta.rating ??
                meta.ratingValue ??
                meta.overallRating
            );
            const total = toSafeMetaCount(
                meta.total ??
                meta.totalReviews ??
                meta.totalReviewCount ??
                meta.reviewCount ??
                meta.numberOfReviews ??
                meta.reviewsCount
            );
            if (average === null && total === null) {
                return null;
            }
            return {
                average,
                total,
                placeId: placeId || FEATURABLE_PLACE_ID,
                placeMatched: true
            };
        };
        const parseVerifiedState = (value) => {
            if (typeof value === 'boolean') return value;
            const raw = String(value || '').trim().toLowerCase();
            if (!raw) return null;
            if (['verified', 'true', 'yes', 'approved', 'active', 'published'].includes(raw)) return true;
            if (['unverified', 'false', 'no', 'pending', 'rejected', 'disabled'].includes(raw)) return false;
            return null;
        };
        const isGoogleReviewUrl = (value) => {
            const raw = String(value || '').trim();
            if (!raw) return false;
            try {
                const parsed = new URL(raw, window.location.origin);
                const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
                return (
                    host.includes('google.') ||
                    host === 'g.page' ||
                    host.endsWith('.g.page') ||
                    host.includes('googleusercontent.com') ||
                    host.includes('gstatic.com')
                );
            } catch (error) {
                return false;
            }
        };
        const hasReviewShapeSignal = (review) => {
            if (!review || typeof review !== 'object' || Array.isArray(review)) return false;
            let hasComment = false;
            let hasAuthor = false;
            let hasRating = false;

            Object.entries(review).forEach(([rawKey, rawValue]) => {
                const key = normalizeFeedKey(rawKey);
                const value = rawValue;
                if (value && typeof value === 'object') {
                    if (/(author|reviewer|customer)/.test(key)) {
                        const nestedName = String(
                            value.displayName ||
                            value.name ||
                            value.fullName ||
                            value.userName ||
                            value.firstAndLastInitials ||
                            ''
                        ).trim();
                        if (nestedName) hasAuthor = true;
                    }
                    return;
                }
                if (typeof value !== 'string' && typeof value !== 'number') return;
                const text = String(value).replace(/\s+/g, ' ').trim();
                if (!text) return;
                if (/(reviewbody|reviewtext|reviewcontent|comment|message|testimonial|body|content|text)/.test(key) && text.length >= 8) {
                    hasComment = true;
                }
                if (/(authorname|reviewername|customername|displayname|fullname|username|firstname|lastname|name)/.test(key) && text.length >= 2) {
                    hasAuthor = true;
                }
                if (/(rating|stars|score|star)/.test(key)) {
                    const numeric = Number(text);
                    if (Number.isFinite(numeric) && numeric >= 1) hasRating = true;
                }
            });

            return hasComment && (hasAuthor || hasRating);
        };
        const isVerifiedGoogleReview = (review) => {
            if (!review || typeof review !== 'object') return false;

            const sourceRaw = String(
                review.source ||
                review.provider ||
                review.platform ||
                review.reviewSource ||
                review.review_source ||
                (review.author && review.author.source) ||
                ''
            ).trim().toLowerCase();
            const sourceMentionsGoogle = /(google|gmb|gbp|googlebusiness)/.test(sourceRaw);
            const reviewShapeSignal = hasReviewShapeSignal(review);
            const googleUrlSignal = [
                review.url,
                review.link,
                review.reviewUrl,
                review.review_url,
                review.authorUrl,
                review.author_url,
                review.profileUrl,
                review.profile_url,
                review.mapUrl,
                review.map_url,
                review.deepLink,
                review.deep_link,
                review.author && (review.author.url || review.author.profileUrl || review.author.profile_url)
            ].some(isGoogleReviewUrl);
            const googleImageSignal = isGoogleReviewUrl(
                review.profile_photo ||
                review.profilePhoto ||
                review.authorImage ||
                review.author_image ||
                (review.author && (review.author.photoUrl || review.author.image))
            );
            if (sourceRaw && !sourceMentionsGoogle && !reviewShapeSignal) return false;
            if (!(sourceMentionsGoogle || googleUrlSignal || googleImageSignal || reviewShapeSignal)) return false;

            const candidates = [
                review.verified,
                review.isVerified,
                review.verificationStatus,
                review.verifiedStatus,
                review.status,
                review.reviewStatus,
                review.state,
                review.approvalStatus,
                review.publishStatus,
                review.badge,
                review.labels,
                review.tags,
                review.meta,
                review.attributes,
                review.flags,
                review.author && review.author.verified,
                review.author && review.author.status
            ];

            let sawExplicitState = false;
            for (let i = 0; i < candidates.length; i += 1) {
                const state = parseVerifiedState(candidates[i]);
                if (state === null) continue;
                sawExplicitState = true;
                if (state) return true;
            }

            return sawExplicitState ? false : true;
        };

        let featurableReviewFeed = [];
        let featurableReviewFeedSignature = '';
        let featurableReviewBridgeBound = false;
        let featurableReviewMeta = {
            average: null,
            total: null,
            placeId: FEATURABLE_PLACE_ID,
            placeMatched: false
        };

        const normalizeFeaturableReview = (review) => {
            if (!review || typeof review !== 'object') return null;
            if (!isVerifiedGoogleReview(review)) return null;
            const reviewPlaceId = (
                review.placeId ||
                review.place_id ||
                review.placeSlug ||
                review.place_slug ||
                review.placeKey ||
                review.place_key ||
                review.businessSlug ||
                review.business_slug ||
                review.listingId ||
                review.listing_id ||
                review.locationId ||
                review.location_id ||
                review.slug ||
                (review.location && (review.location.slug || review.location.id))
            );
            if (!isMatchingPlaceId(reviewPlaceId)) return null;

            const nameCandidates = [
                review.author_name,
                review.authorName,
                review.authorNameText,
                review.author_display_name,
                review.authorDisplayName,
                review.reviewer_name,
                review.reviewerName,
                review.customer_name,
                review.customerName,
                review.display_name,
                review.displayName,
                review.user_name,
                review.userName,
                review.first_and_last_initials,
                review.firstAndLastInitials,
                review.name,
                review.author && review.author.displayName,
                review.author && review.author.name,
                review.author && review.author.fullName,
                review.author && review.author.userName,
                review.author && review.author.firstAndLastInitials,
                review.reviewer && review.reviewer.displayName,
                review.reviewer && review.reviewer.name,
                review.reviewer && review.reviewer.fullName,
                review.reviewer && review.reviewer.userName,
                review.reviewer && review.reviewer.firstAndLastInitials
            ];
            const rawName = firstNonEmptyText(nameCandidates);
            const name = toSafeReviewerName(rawName || VERIFIED_REVIEWER_NAME);

            const commentCandidates = [
                review.review_body,
                review.reviewBody,
                review.review_body_text,
                review.reviewBodyText,
                review.review_text,
                review.reviewText,
                review.comment,
                review.text,
                review.content,
                review.description,
                review.message
            ];

            let safeComment = '';
            for (let i = 0; i < commentCandidates.length; i += 1) {
                safeComment = toSafeReviewComment(commentCandidates[i]);
                if (safeComment) break;
            }
            if (!safeComment) return null;

            const authorImage = toSafeImageUrl(
                review.profile_photo ||
                review.profilePhoto ||
                review.profilePhotoUrl ||
                review.profile_photo_url ||
                review.authorImage ||
                review.author_image ||
                review.authorPhoto ||
                review.author_photo ||
                review.authorPhotoUrl ||
                review.photoUri ||
                review.photo_uri ||
                review.imageUrl ||
                review.image_url ||
                review.authorProfilePhoto ||
                review.author_profile_photo ||
                (review.author && (
                    review.author.photoUrl ||
                    review.author.photoUri ||
                    review.author.photo_url ||
                    review.author.profilePhoto ||
                    review.author.profilePhotoUrl ||
                    review.author.profile_photo_url ||
                    review.author.image ||
                    review.author.avatar ||
                    review.author.avatarUrl
                )) ||
                (review.authorAttribution && (
                    review.authorAttribution.photoUri ||
                    review.authorAttribution.photoUrl ||
                    review.authorAttribution.profilePhotoUrl
                )) ||
                (review.reviewer && (
                    review.reviewer.photoUrl ||
                    review.reviewer.photoUri ||
                    review.reviewer.profilePhoto ||
                    review.reviewer.profilePhotoUrl ||
                    review.reviewer.avatar ||
                    review.reviewer.avatarUrl ||
                    review.reviewer.image
                )) ||
                review.profile_picture ||
                review.avatar ||
                review.avatar_url ||
                review.image ||
                review.image_url ||
                review.photo ||
                review.photo_url ||
                review.picture ||
                review.picture_url
            );

            const rating = toSafeRating(review.rating || review.stars || review.score || 5);
            const date = toDisplayReviewDate(review.date || review.published_at || review.publishedAt || review.created_at || review.createdAt);
            const ownerReply = toSafeOwnerReply(
                review.owner_reply ||
                review.ownerReply ||
                review.owner_response ||
                review.ownerResponse ||
                review.response ||
                review.reply ||
                review.reply_text ||
                review.replyText ||
                review.business_response ||
                review.businessResponse
            ) || 'Thank you for your feedback. We appreciate your support.';
            const reviewEmail = extractReviewEmail(review);
            const id = String(review.id || review.reviewId || review.review_id || review.externalId || '').trim()
                || `google_${hashText(`${name}|${safeComment}`)}`;

            return {
                id,
                name,
                rating,
                comment: safeComment,
                date,
                ownerReply,
                source: REVIEW_SOURCE_GOOGLE,
                authorImage,
                verified: true,
                isNative: false,
                reviewEmail,
                reviewIdentityKey: buildReviewIdentityKey({
                    reviewEmail,
                    name,
                    comment: safeComment
                })
            };
        };

        const normalizeNativePublishedReview = (review) => {
            if (!review || typeof review !== 'object') return null;
            const safeComment = toSafeReviewComment(
                review.comment ||
                review.reviewText ||
                review.review_text ||
                review.text ||
                review.message ||
                review.content ||
                review.description
            );
            if (!safeComment && !review.siteReview) return null;
            const name = toSafeReviewerName(firstNonEmptyText([
                review.name,
                review.displayName,
                review.reviewerDisplayName,
                review.authorName,
                review.userName,
                review.author && review.author.displayName,
                review.author && review.author.name,
                review.reviewer && review.reviewer.displayName,
                review.reviewer && review.reviewer.name,
                review.reviewerIdentity && review.reviewerIdentity.displayName,
                review.reviewerIdentity && review.reviewerIdentity.name
            ]) || VERIFIED_REVIEWER_NAME);
            const reviewEmail = extractReviewEmail(review);
            const identityProvider = String(
                review.identityProvider ||
                review.providerId ||
                (review.reviewerIdentity && review.reviewerIdentity.provider) ||
                ''
            ).trim().toLowerCase();
            const identityVerified = Boolean(
                review.identityVerified ||
                review.verified ||
                (review.reviewerIdentity && review.reviewerIdentity.verified) ||
                identityProvider === 'google.com'
            );
            const source = String(review.source || review.provider || review.platform || '').trim()
                || (identityProvider === 'google.com' ? REVIEW_SOURCE_GOOGLE : REVIEW_SOURCE_NATIVE);
            return {
                name,
                rating: toSafeRating(review.rating || review.stars || review.score || review.reviewRating || 5),
                comment: safeComment || '',
                siteTags: Array.isArray(review.siteTags) ? review.siteTags.slice(0, 10) : [],
                siteMedia: Array.isArray(review.siteMedia) ? review.siteMedia.slice(0, 6) : [],
                date: toDisplayReviewDate(review.publishedAt || review.createdAt || review.updatedAt || review.date),
                ownerReply: toSafeOwnerReply(
                    review.ownerReply ||
                    review.owner_reply ||
                    review.ownerResponse ||
                    review.owner_response ||
                    review.reply ||
                    review.response
                ) || 'Thank you for your feedback. We appreciate your support.',
                source,
                authorImage: toSafeImageUrl(
                    review.reviewerPhotoURL ||
                    review.photoURL ||
                    review.authorImage ||
                    review.author_image ||
                    review.profile_photo ||
                    review.profilePhoto ||
                    review.profilePhotoUrl ||
                    review.avatar ||
                    review.photo_url ||
                    review.picture ||
                    (review.reviewerIdentity && review.reviewerIdentity.photoURL) ||
                    ''
                ),
                verified: identityVerified,
                isNative: true,
                reviewEmail,
                reviewIdentityKey: buildReviewIdentityKey({
                    reviewEmail,
                    name,
                    comment: safeComment
                })
            };
        };

        const getNativePublishedReviewFeed = () => getPublishedReviews()
            .filter(Boolean)
            .map(normalizeNativePublishedReview)
            .filter(Boolean);

        const getGoogleSyncedReviewFeed = () => featurableReviewFeed
            .map((review) => {
                if (!review || typeof review !== 'object') return null;
                const reviewEmail = extractReviewEmail(review);
                const comment = toSafeReviewComment(review.comment);
                if (!comment) return null;
                const normalized = {
                    ...review,
                    source: REVIEW_SOURCE_GOOGLE,
                    isNative: false,
                    verified: true,
                    reviewEmail,
                    reviewIdentityKey: buildReviewIdentityKey({
                        reviewEmail,
                        name: review.name,
                        comment
                    }),
                    comment
                };
                return normalized;
            })
            .filter(Boolean);

        const countCrossSourceDuplicates = (googleReviewsInput, nativeReviewsInput) => {
            const googleReviews = Array.isArray(googleReviewsInput) ? googleReviewsInput.filter(Boolean) : [];
            const nativeReviews = Array.isArray(nativeReviewsInput) ? nativeReviewsInput.filter(Boolean) : [];
            if (!googleReviews.length || !nativeReviews.length) return 0;

            const googleIdentitySet = new Set();
            googleReviews.forEach((review) => {
                getReviewIdentityCandidates(review).forEach((token) => googleIdentitySet.add(token));
            });
            if (!googleIdentitySet.size) return 0;

            let overlap = 0;
            nativeReviews.forEach((review) => {
                const matches = getReviewIdentityCandidates(review).some((token) => googleIdentitySet.has(token));
                if (matches) overlap += 1;
            });
            return overlap;
        };

        const fetchGoogleBusinessApiReviewTotal = async () => {
            const directMetaTotal = toSafeMetaCount(featurableReviewMeta.total);
            if (directMetaTotal !== null) return directMetaTotal;

            const bridgeMeta = window.__hailifuFeaturableBridge && window.__hailifuFeaturableBridge.latestMeta
                ? window.__hailifuFeaturableBridge.latestMeta
                : null;
            const bridgeMetaTotal = toSafeMetaCount(bridgeMeta && (
                bridgeMeta.total ||
                bridgeMeta.totalReviews ||
                bridgeMeta.totalReviewCount ||
                bridgeMeta.reviewCount
            ));
            if (bridgeMetaTotal !== null) return bridgeMetaTotal;

            if (Array.isArray(featurableReviewFeed) && featurableReviewFeed.length) {
                return featurableReviewFeed.length;
            }
            if (window.__hailifuFeaturableBridge && Array.isArray(window.__hailifuFeaturableBridge.latestReviews)) {
                return window.__hailifuFeaturableBridge.latestReviews.length;
            }
            return 0;
        };

        const refreshDynamicReviewCounters = async (opts = {}) => {
            const requestId = ++mergedReviewCounterRequestId;
            const googleFeed = getGoogleSyncedReviewFeed();
            const nativeFeed = getNativePublishedReviewFeed();
            const googleTotal = await fetchGoogleBusinessApiReviewTotal();
            if (requestId !== mergedReviewCounterRequestId) return;

            const overlap = countCrossSourceDuplicates(googleFeed, nativeFeed);
            const mergedTotal = Math.max(0, googleTotal + nativeFeed.length - overlap);
            setMergedReviewCounter(mergedTotal, { animate: opts.animate !== false });
        };

        const getFallbackReviewFeed = () => {
            return getNativePublishedReviewFeed();
        };

        const getLiveReviewFeed = () => {
            const googleFeed = getGoogleSyncedReviewFeed();
            const nativeFeed = getNativePublishedReviewFeed();
            const deletedIds = getDeletedReviewIds();
            const output = [];
            const seen = new Set();

            const appendReview = (review) => {
                if (!review || typeof review !== 'object') return;
                const id = String(review.id || '').trim();
                if (id && deletedIds.includes(id)) return;
                const identityTokens = getReviewIdentityCandidates(review);
                const isDuplicate = identityTokens.some((token) => seen.has(token));
                if (isDuplicate) return;
                identityTokens.forEach((token) => seen.add(token));
                output.push(review);
            };

            nativeFeed.forEach(appendReview);
            googleFeed.forEach(appendReview);

            if (!output.length) return getFallbackReviewFeed();
            return output;
        };

        const applyFeaturableReviewMeta = (metaInput) => {
            const normalizedMeta = normalizeReviewMeta(metaInput);
            if (!normalizedMeta) return false;

            const hasChanged = (
                featurableReviewMeta.average !== normalizedMeta.average ||
                featurableReviewMeta.total !== normalizedMeta.total ||
                featurableReviewMeta.placeId !== normalizedMeta.placeId ||
                featurableReviewMeta.placeMatched !== normalizedMeta.placeMatched
            );

            if (!hasChanged) return false;
            featurableReviewMeta = { ...featurableReviewMeta, ...normalizedMeta };
            googleBusinessSyncActive = true;
            return true;
        };

        const getLiveReviewTotal = (reviewsInput) => {
            const reviews = Array.isArray(reviewsInput) ? reviewsInput.filter(Boolean) : getLiveReviewFeed();
            const fromFeed = reviews.length;
            const fromMeta = Number.isFinite(Number(featurableReviewMeta.total))
                ? Math.max(0, Math.round(Number(featurableReviewMeta.total)))
                : 0;
            return Math.max(fromFeed, fromMeta);
        };

        const applyFeaturableReviewFeed = (reviewsInput) => {
            const incoming = Array.isArray(reviewsInput) ? reviewsInput : [];
            if (!incoming.length) return;

            const deduped = [];
            const seen = new Set();
            incoming.forEach((item) => {
                const normalized = normalizeFeaturableReview(item);
                if (!normalized) return;
                const signature = `${normalized.name}|${normalized.comment}`.toLowerCase();
                if (seen.has(signature)) return;
                seen.add(signature);
                deduped.push(normalized);
            });

            if (!deduped.length) return;
            const nextSignature = deduped.map((item) => `${item.name}|${item.comment}`).join('||').toLowerCase();
            if (nextSignature === featurableReviewFeedSignature) return;

            featurableReviewFeed = deduped;
            featurableReviewFeedSignature = nextSignature;
            googleBusinessSyncActive = true;
            refreshLiveReviewSection();
        };

        const initFeaturableReviewBridge = () => {
            if (featurableReviewBridgeBound) return;
            featurableReviewBridgeBound = true;

            window.addEventListener('hailifu:featurable-feed', (event) => {
                const detail = event && event.detail ? event.detail : null;
                const incomingPlaceId = detail && (
                    detail.placeId ||
                    (detail.meta && (detail.meta.placeId || detail.meta.place_id || detail.meta.slug))
                );
                if (!isMatchingPlaceId(incomingPlaceId)) return;
                const reviews = detail && Array.isArray(detail.reviews) ? detail.reviews : [];
                const metaUpdated = applyFeaturableReviewMeta(detail && detail.meta ? detail.meta : null);
                applyFeaturableReviewFeed(reviews);
                if (metaUpdated && !reviews.length) {
                    refreshLiveReviewSection();
                }
            });

            const bridge = window.__hailifuFeaturableBridge;
            if (bridge) {
                const metaUpdated = applyFeaturableReviewMeta(bridge.latestMeta || null);
                if (Array.isArray(bridge.latestReviews) && bridge.latestReviews.length) {
                    applyFeaturableReviewFeed(bridge.latestReviews);
                } else if (metaUpdated) {
                    refreshLiveReviewSection();
                }
            }
        };

        const summarizeReviewFeed = (reviews) => {
            const safeReviews = Array.isArray(reviews) ? reviews.filter(Boolean) : [];
            const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            safeReviews.forEach((review) => {
                counts[toSafeRating(review.rating)] += 1;
            });

            const total = safeReviews.length;
            const average = total
                ? safeReviews.reduce((sum, review) => sum + toSafeRating(review.rating), 0) / total
                : 0;

            return { total, average, counts };
        };

        let modernReviewTerminalIndex = 0;
        let modernReviewTerminalFeed = [];
        let modernReviewTerminalTimer = null;
        let googleBusinessSyncActive = false;

        function renderReviews() {
            const container = document.getElementById('reviewsContainer');
            const showMoreBtn = document.getElementById('reviewsShowMore');
            if (!container) return;
            const liveReviews = getLiveReviewFeed();

            const visibleCount = reviewsExpanded
                ? liveReviews.length
                : Math.min(reviewsInitialCount, liveReviews.length);

            container.innerHTML = liveReviews.slice(0, visibleCount).map((review) => {
                const safeName = toSafeReviewerName(review.name);
                const name = escapeHTML(safeName);
                const nameClass = isFallbackReviewerName(safeName) ? 'review-name is-verified-name' : 'review-name';
                const authorImage = review.authorImage || review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=E8741E&color=fff`;
                const comment = escapeHTML(review.comment);
                const date = escapeHTML(toDisplayReviewDate(review.date));
                const meta = escapeHTML(review.meta);
                const ownerReply = escapeHTML(review.ownerReply);
                const stars = buildStarIcons(review.rating);
                const replyBlock = ownerReply
                    ? `
                        <div class="owner-reply">
                            <span class="owner-reply-label"><i class="fas fa-check-circle"></i> Official Reply from Hailifu</span>
                            <div>${ownerReply}</div>
                        </div>
                    `
                    : '';
                const metaLine = meta ? `<span class="review-meta-line">${meta}</span>` : '';

                return `
                    <article class="review-card">
                        <div class="review-card-header">
                            <div class="review-meta">
                                <img src="${escapeHTML(authorImage)}" alt="${name}" class="reviewer-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=E8741E&color=fff'">
                                <div>
                                    <span class="${nameClass}">${name}</span>
                                    ${metaLine}
                                    <span class="review-date">${date}</span>
                                </div>
                            </div>
                            <div class="review-stars">${stars}</div>
                        </div>
                        <p class="review-comment">"${comment}"</p>
                        ${replyBlock}
                    </article>
                `;
            }).join('');

            if (showMoreBtn) {
                showMoreBtn.style.display = liveReviews.length > visibleCount ? 'inline-flex' : 'none';
            }
        }

        const reviewsShowMore = document.getElementById('reviewsShowMore');
        if (reviewsShowMore) {
            reviewsShowMore.addEventListener('click', () => {
                reviewsExpanded = true;
                renderReviews();
            });
        }

        renderReviews();

        function renderReviewTerminal() {
            const slide = document.getElementById('reviewTerminalSlide');
            const reviews = getLiveReviewFeed().filter(Boolean);
            if (!slide || !reviews.length) return;

            const starsSvg = Array.from({ length: 5 }, () =>
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.5 7.1.6-5.3 4.6 1.6 6.9-6.3-3.7-6.3 3.7 1.6-6.9L2 9.1l7.1-.6L12 2z"/></svg>'
            ).join('');

            let index = 0;
            const prevBtn = document.querySelector('.review-terminal-nav.prev');
            const nextBtn = document.querySelector('.review-terminal-nav.next');

            const render = () => {
                const review = reviews[index];
                if (!review) return;
                const name = escapeHTML(review.name);
                const comment = escapeHTML(review.comment);
                const meta = String(review.meta || '');
                const isLocalGuide = /local guide/i.test(meta);
                const badge = isLocalGuide ? '<div class="review-terminal-badge">Local Guide</div>' : '';

                slide.innerHTML = `
                    <div class="review-terminal-name">${name}</div>
                    ${badge}
                    <div class="review-terminal-stars-inline">${starsSvg}</div>
                    <div class="review-terminal-text">"${comment}"</div>
                `;
            };

            const goTo = (dir) => {
                slide.classList.add('is-transitioning');
                setTimeout(() => {
                    index = (index + dir + reviews.length) % reviews.length;
                    render();
                    slide.classList.remove('is-transitioning');
                }, 240);
            };

            if (prevBtn) prevBtn.addEventListener('click', () => goTo(-1));
            if (nextBtn) nextBtn.addEventListener('click', () => goTo(1));

            render();

            let autoTimer = null;
            const startAuto = () => {
                if (autoTimer) clearInterval(autoTimer);
                autoTimer = setInterval(() => goTo(1), 3000);
            };
            const stopAuto = () => {
                if (autoTimer) clearInterval(autoTimer);
                autoTimer = null;
            };
            const terminal = document.querySelector('.review-terminal-box');
            const hoverTargets = [terminal, slide].filter(Boolean);
            if (terminal) {
                hoverTargets.forEach((node) => {
                    node.addEventListener('mouseenter', stopAuto);
                    node.addEventListener('mouseleave', startAuto);
                    node.addEventListener('focusin', stopAuto);
                    node.addEventListener('focusout', startAuto);
                });
            }
            startAuto();
        }

        renderReviewTerminal();

        let reviewShareToastTimer = null;

        function ensureReviewShareToast() {
            let toast = document.getElementById('reviewShareToast');
            if (toast) return toast;
            toast = document.createElement('div');
            toast.id = 'reviewShareToast';
            toast.className = 'review-share-toast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            document.body.appendChild(toast);
            return toast;
        }

        function showReviewShareToast(message) {
            const toast = ensureReviewShareToast();
            if (!toast) return;
            toast.textContent = String(message || 'Link Copied');
            toast.classList.remove('active');
            void toast.offsetWidth;
            toast.classList.add('active');
            if (reviewShareToastTimer) clearTimeout(reviewShareToastTimer);
            reviewShareToastTimer = setTimeout(() => {
                toast.classList.remove('active');
            }, 1600);
        }

        async function copyReviewShareText(text) {
            const shareText = String(text || '').trim();
            if (!shareText) return false;

            try {
                if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                    await navigator.clipboard.writeText(shareText);
                    return true;
                }
            } catch {}

            try {
                const input = document.createElement('input');
                input.value = shareText;
                input.setAttribute('readonly', '');
                input.style.position = 'fixed';
                input.style.left = '-9999px';
                document.body.appendChild(input);
                input.select();
                input.setSelectionRange(0, input.value.length);
                const ok = document.execCommand('copy');
                input.remove();
                return !!ok;
            } catch {
                return false;
            }
        }

        function buildReviewSharePayload(name, text) {
            const fallbackName = String(text || '').trim();
            const safeName = String(name || fallbackName || '').trim() || 'Someone';
            return {
                title: 'HAILIFU | Brilliant Installation',
                text: `${safeName} just gave us 5 stars! Check out our latest project.`,
                url: 'https://hailifu-website.web.app'
            };
        }

        async function handleShare(name, text) {
            const payload = buildReviewSharePayload(name, text);
            if (typeof navigator.share === 'function') {
                try {
                    await navigator.share(payload);
                    return true;
                } catch (error) {
                    if (error && error.name === 'AbortError') return false;
                }
            }

            const copied = await copyReviewShareText(payload.url);
            showReviewShareToast(copied ? 'Link Copied' : 'Copy failed');
            return copied;
        }

        window.handleShare = handleShare;

        function ensureReviewTerminalShareButton(card) {
            if (!card) return null;
            let shareBtn = card.querySelector('.review-share-btn');
            if (!shareBtn) {
                shareBtn = document.createElement('button');
                shareBtn.type = 'button';
                shareBtn.className = 'review-share-btn';
                shareBtn.innerHTML = '<i class="fas fa-share-alt" aria-hidden="true"></i>';
                card.appendChild(shareBtn);
            }
            shareBtn.setAttribute('aria-label', 'Share this review');
            shareBtn.setAttribute('title', 'Share this review');
            shareBtn.setAttribute('data-review-share', '1');
            return shareBtn;
        }

        function bindReviewShareButtons() {
            const reviewsSection = document.getElementById('reviews');
            if (!reviewsSection || reviewsSection.dataset.reviewShareBound === '1') return;
            reviewsSection.dataset.reviewShareBound = '1';
            reviewsSection.addEventListener('click', (event) => {
                const trigger = event.target.closest('[data-review-share]');
                if (!trigger || !reviewsSection.contains(trigger)) return;
                event.preventDefault();
                const shareName = String(trigger.getAttribute('data-review-share-name') || '').trim();
                const shareText = String(trigger.getAttribute('data-review-share-text') || '').trim();
                handleShare(shareName, shareText);
            });
        }

        function renderFeaturedReviewsFeed(reviewsInput) {
            const track = document.querySelector('.modern-review-section .featured-reviews-feed .featured-reviews-track');
            const reviews = Array.isArray(reviewsInput) ? reviewsInput.filter(Boolean) : getLiveReviewFeed();
            if (!track || !reviews.length) return;

            const limitedReviews = reviews.slice(0, 24);
            track.innerHTML = limitedReviews.map((review) => {
                const rawName = toSafeReviewerName(review.name || VERIFIED_REVIEWER_NAME);
                const isFallbackName = isFallbackReviewerName(rawName);
                const name = escapeHTML(rawName);
                const date = escapeHTML(toDisplayReviewDate(review.date || 'Recent'));
                const comment = escapeHTML(review.comment);
                const ownerReply = escapeHTML(String(review.ownerReply || '').trim());
                const source = escapeHTML(review.source || REVIEW_SOURCE_GOOGLE);
                const stars = buildStarText(review.rating);
                
                // Use a small data URI fallback if ui-avatars fails
                const fallbackAvatar = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='100%25' height='100%25' fill='%23E8741E'/%3E%3Ctext x='50%25' y='50%25' font-family='Sora, sans-serif' font-size='16' font-weight='600' fill='white' text-anchor='middle' dy='.3em'%3E${rawName.charAt(0).toUpperCase()}%3C/text%3E%3C/svg%3E`;
                const authorImage = review.authorImage || review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(rawName)}&background=E8741E&color=fff`;
                
                const nativeBadge = review.isNative && review.verified
                    ? '<span class="native-verified-badge" title="Native review approved in admin panel">Verified</span>'
                    : '';
                const responseMarkup = ownerReply
                    ? `<div class="featured-review-response"><span class="featured-review-response-label">Response</span><p>${ownerReply}</p></div>`
                    : '';
                return `
                    <article class="featured-review-card" data-rating="${toSafeRating(review.rating)}">
                        <button type="button" class="review-share-btn" data-review-share="1" aria-label="Share this review" title="Share this review">
                            <i class="fas fa-share-alt" aria-hidden="true"></i>
                        </button>
                        <div class="featured-review-meta">
                            <div class="featured-review-identity">
                                <img src="${escapeHTML(authorImage)}" 
                                     alt="${name}" 
                                     class="reviewer-avatar" 
                                     onerror="this.onerror=null; this.src='${fallbackAvatar}';">
                                <div class="featured-review-meta-copy">
                                    <span class="review-source">${source}</span>
                                    <div class="reviewer-name-row">
                                        <span class="reviewer-name${isFallbackName ? ' is-verified-name' : ''}">${name}</span>
                                        ${nativeBadge}
                                    </div>
                                </div>
                            </div>
                            <span class="review-time">${date}</span>
                        </div>
                        <div class="featured-review-stars">${stars}</div>
                        ${comment ? `<p>${comment}</p>` : ''}
                        ${Array.isArray(review.siteTags) && review.siteTags.length ? `<div class="hm-rv-tags">${review.siteTags.map((t) => `<span>${escapeHTML(t)}</span>`).join('')}</div>` : ''}
                        ${Array.isArray(review.siteMedia) && review.siteMedia.length ? `<div class="hm-rv-media">${review.siteMedia.map((m) => (m.type === 'video'
                            ? `<video src="${escapeHTML(m.url)}" controls playsinline preload="metadata"></video>`
                            : `<a href="${escapeHTML(m.url)}" target="_blank" rel="noopener"><img src="${escapeHTML(m.url)}" alt="Customer photo" loading="lazy" decoding="async"></a>`)).join('')}</div>` : ''}
                        ${responseMarkup}
                    </article>
                `;
            }).join('');
            track.querySelectorAll('.featured-review-card .review-share-btn').forEach((btn, idx) => {
                const review = limitedReviews[idx];
                if (!review) return;
                const shareName = toSafeReviewerName(review.name || VERIFIED_REVIEWER_NAME);
                const shareText = String(review.comment || '').trim();
                btn.setAttribute('data-review-share-name', shareName);
                btn.setAttribute('data-review-share-text', shareText);
            });
            enforceReviewAssetPolicies();
        }

        function enforceReviewAssetPolicies() {
            const reviewsSection = document.getElementById('reviews');
            if (!reviewsSection) return;

            reviewsSection.querySelectorAll('img').forEach((img) => {
                img.setAttribute('referrerpolicy', 'no-referrer');
                const src = String(img.getAttribute('src') || img.currentSrc || '').trim();
                if (shouldUseAnonymousCrossoriginForReviewImage(src)) {
                    img.setAttribute('crossorigin', 'anonymous');
                } else {
                    img.removeAttribute('crossorigin');
                }
            });

            reviewsSection.querySelectorAll('a[href]').forEach((link) => {
                link.setAttribute('referrerpolicy', 'no-referrer');
                if (String(link.target || '').toLowerCase() === '_blank') {
                    const relTokens = String(link.getAttribute('rel') || '')
                        .split(/\s+/)
                        .map((token) => token.trim().toLowerCase())
                        .filter(Boolean);
                    if (!relTokens.includes('noopener')) relTokens.push('noopener');
                    if (!relTokens.includes('noreferrer')) relTokens.push('noreferrer');
                    link.setAttribute('rel', relTokens.join(' '));
                }
            });
        }

        function setGoogleBusinessSyncState(active, total) {
            const statusBtn = document.getElementById('googleBusinessStatusBtn');
            const messageEl = document.getElementById('googleBusinessMessage');
            if (!statusBtn) return;

            const totalCount = Math.max(0, Number(total) || 0);
            const totalLabel = formatVerifiedCountLabel(totalCount);
            const pendingMessage = 'Connect the Google Business feed to stream verified reviews here.';
            const activeMessage = totalLabel === '--'
                ? 'Google Business sync active. Verified reviews are streaming live.'
                : `Google Business sync active. ${totalLabel} verified reviews ready.`;

            statusBtn.classList.toggle('is-active', active);
            statusBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
            statusBtn.textContent = active ? 'SYNC ACTIVE' : 'SYNC PENDING';
            if (messageEl) messageEl.textContent = active ? activeMessage : pendingMessage;
        }

        function initGoogleBusinessStatusToggle() {
            const statusBtn = document.getElementById('googleBusinessStatusBtn');
            if (!statusBtn) return;

            if (!statusBtn.dataset.syncBound) {
                statusBtn.dataset.syncBound = '1';
                statusBtn.addEventListener('click', () => {
                    googleBusinessSyncActive = !googleBusinessSyncActive;
                    const reviews = getLiveReviewFeed();
                    setGoogleBusinessSyncState(googleBusinessSyncActive, getLiveReviewTotal(reviews));
                });
            }

            setGoogleBusinessSyncState(googleBusinessSyncActive, getLiveReviewTotal(getLiveReviewFeed()));
        }

        function renderModernReviewTerminal(reviewsInput) {
            const terminal = document.getElementById('reviewTerminal');
            const card = terminal ? terminal.querySelector('.review-terminal-card') : null;
            const avatarEl = document.getElementById('reviewTerminalAvatar');
            const nameEl = document.getElementById('reviewTerminalName');
            const starsEl = document.getElementById('reviewTerminalStars');
            const textEl = document.getElementById('reviewTerminalText');
            const ownerWrap = document.getElementById('reviewTerminalOwner');
            const ownerText = document.getElementById('reviewTerminalResponse');
            const prevBtn = document.querySelector('[data-review-terminal-prev]');
            const nextBtn = document.querySelector('[data-review-terminal-next]');
            modernReviewTerminalFeed = Array.isArray(reviewsInput) ? reviewsInput.filter(Boolean) : getLiveReviewFeed();
            const reviews = modernReviewTerminalFeed;
            const terminalShareBtn = ensureReviewTerminalShareButton(card);

            if (!terminal || !card || !nameEl || !starsEl || !textEl || !reviews.length) return;

            if (modernReviewTerminalIndex >= reviews.length) modernReviewTerminalIndex = 0;

            const paintAtIndex = () => {
                const review = modernReviewTerminalFeed[modernReviewTerminalIndex];
                if (!review) return;

                const reviewerName = toSafeReviewerName(review.name || VERIFIED_REVIEWER_NAME);
                const reviewText = String(review.comment || '').trim();
                const isNativeReview = Boolean(review.isNative);
                const verifiedBadgeEl = card.querySelector('.review-verified');

                nameEl.textContent = reviewerName;
                nameEl.classList.toggle('is-verified-name', isFallbackReviewerName(reviewerName));
                starsEl.textContent = buildStarText(review.rating);
                textEl.textContent = `"${reviewText}"`;
                if (terminalShareBtn) {
                    terminalShareBtn.setAttribute('data-review-share-name', reviewerName);
                    terminalShareBtn.setAttribute('data-review-share-text', reviewText);
                }
                if (verifiedBadgeEl) {
                    verifiedBadgeEl.textContent = isNativeReview ? 'Verified Native' : 'Verified';
                    verifiedBadgeEl.classList.toggle('review-verified--native', isNativeReview);
                }

                if (ownerWrap && ownerText) {
                    const reply = String(review.ownerReply || '').trim();
                    ownerWrap.style.display = reply ? '' : 'none';
                    ownerText.textContent = reply || '';
                }
            };

            const goTo = (dir) => {
                card.classList.add('is-fading');
                window.setTimeout(() => {
                    const total = modernReviewTerminalFeed.length;
                    if (!total) {
                        card.classList.remove('is-fading');
                        return;
                    }
                    modernReviewTerminalIndex = (modernReviewTerminalIndex + dir + total) % total;
                    paintAtIndex();
                    card.classList.remove('is-fading');
                }, 240);
            };

            if (!terminal.dataset.terminalBound) {
                terminal.dataset.terminalBound = '1';
                if (prevBtn) prevBtn.addEventListener('click', () => goTo(-1));
                if (nextBtn) nextBtn.addEventListener('click', () => goTo(1));

                const startAuto = () => {
                    if (modernReviewTerminalTimer) window.clearInterval(modernReviewTerminalTimer);
                    modernReviewTerminalTimer = window.setInterval(() => goTo(1), 3000);
                };

                const stopAuto = () => {
                    if (modernReviewTerminalTimer) window.clearInterval(modernReviewTerminalTimer);
                    modernReviewTerminalTimer = null;
                };

                [terminal, card].forEach((node) => {
                    if (!node) return;
                    node.addEventListener('mouseenter', stopAuto);
                    node.addEventListener('mouseleave', startAuto);
                    node.addEventListener('focusin', stopAuto);
                    node.addEventListener('focusout', startAuto);
                });
                terminal._startReviewAuto = startAuto;
            }

            paintAtIndex();
            if (typeof terminal._startReviewAuto === 'function') terminal._startReviewAuto();
        }

        function renderModernReviewSummary(reviewsInput) {
            const reviews = Array.isArray(reviewsInput) ? reviewsInput.filter(Boolean) : getLiveReviewFeed();
            const summary = summarizeReviewFeed(reviews);
            const nativeFeed = getNativePublishedReviewFeed();
            const nativeCount = nativeFeed.length;
            const googleFeed = getGoogleSyncedReviewFeed();
            const metaAverage = toSafeAverageRating(featurableReviewMeta.average);
            const metaTotal = toSafeMetaCount(featurableReviewMeta.total);
            const googleTotal = metaTotal !== null ? metaTotal : googleFeed.length;
            const overlapCount = countCrossSourceDuplicates(googleFeed, nativeFeed);
            const mergedTotal = Math.max(0, googleTotal + nativeCount - overlapCount);
            const hasLiveVerifiedFeed = mergedTotal > 0 || reviews.length > 0 || metaAverage !== null;
            const total = hasLiveVerifiedFeed ? mergedTotal : summary.total;
            const average = metaAverage !== null
                ? metaAverage
                : (summary.total ? summary.average : (metaTotal !== null ? 5 : 0));
            const formattedAverage = average > 0 ? average.toFixed(1) : '--';
            const totalLabel = hasLiveVerifiedFeed ? formatTrustCounter(total) : '--';

            const avgEl = document.getElementById('reviewAvgRating');
            const totalEl = document.getElementById('reviewTotalReports');
            const ratingNumber = document.getElementById('googleRatingNumber') || document.querySelector('.review-stats-card .rating-number-large');
            const ratingStars = document.getElementById('googleRatingStars') || document.querySelector('.review-stats-card .rating-stars-large');
            const reviewCount = document.getElementById('googleReviewCount') || document.querySelector('.review-stats-card .review-count-large');
            const headline = document.getElementById('reviewsHeadline') || document.querySelector('.hailifu-review-header h3');
            const headlineStars = document.getElementById('reviewsHeadlineStars') || document.querySelector('.hailifu-review-header .hailifu-review-stars');
            const statsExcellence = document.getElementById('statsOperationalExcellence');
            const statsStars = document.getElementById('statsOperationalStars') || document.querySelector('.stats-dashboard .stats-card .stats-stars');

            if (avgEl) avgEl.textContent = formattedAverage;
            if (totalEl) totalEl.textContent = totalLabel;
            if (ratingNumber) ratingNumber.textContent = formattedAverage;
            if (ratingStars) ratingStars.textContent = buildStarText(average);
            if (reviewCount) reviewCount.textContent = hasLiveVerifiedFeed ? `${totalLabel} Clients` : 'Loading verified reviews...';
            if (headline) {
                if (hasLiveVerifiedFeed) {
                    headline.innerHTML = `<span class="reviews-headline-rating">${formattedAverage}</span> <span class="reviews-headline-meta">Rating |</span> <span class="reviews-headline-count">${totalLabel} Clients</span>`;
                } else {
                    headline.textContent = 'Live Rating | Live Verified Reviews';
                }
            }
            if (headlineStars) headlineStars.textContent = buildStarText(average);
            if (statsExcellence) {
                if (formattedAverage === '--') {
                    statsExcellence.textContent = '--';
                } else {
                    statsExcellence.dataset.counter = formattedAverage;
                    statsExcellence.dataset.decimals = '1';
                    statsExcellence.textContent = formattedAverage;
                }
            }
            if (statsStars) statsStars.textContent = buildStarText(average);

            document.querySelectorAll('.modern-review-section .review-metrics .metric-row').forEach((row) => {
                const labelEl = row.querySelector('.metric-label');
                const fill = row.querySelector('.metric-fill');
                if (!labelEl || !fill) return;
                const ratingKey = Math.max(1, Math.min(5, Number(labelEl.textContent) || 0));
                let width = 0;
                if (hasLiveVerifiedFeed) {
                    if (average >= 4.8) {
                        width = ratingKey === 5 ? 95 : (ratingKey === 4 ? 5 : 0);
                    } else if (average >= 4.5) {
                        width = ratingKey === 5 ? 80 : (ratingKey === 4 ? 15 : 5);
                    } else {
                        width = ratingKey === 5 ? 70 : 10;
                    }
                } else {
                    const count = summary.counts[ratingKey] || 0;
                    width = total > 0 ? (count / total) * 100 : 0;
                }
                fill.style.width = `${width.toFixed(2)}%`;
            });
        }

        function refreshLiveReviewSection() {
            const reviews = getLiveReviewFeed();
            const hasMeta = toSafeAverageRating(featurableReviewMeta.average) !== null || toSafeMetaCount(featurableReviewMeta.total) !== null;
            refreshDynamicReviewCounters({ animate: true }).catch(() => {});
            if (!reviews.length && !hasMeta) {
                setGoogleBusinessSyncState(false, 0);
                enforceReviewAssetPolicies();
                return;
            }
            renderModernReviewSummary(reviews);
            if (reviews.length) {
                renderFeaturedReviewsFeed(reviews);
                renderModernReviewTerminal(reviews);
            }
            const liveTotal = getLiveReviewTotal(reviews);
            const syncActive = googleBusinessSyncActive || reviews.length > 0 || hasMeta;
            setGoogleBusinessSyncState(syncActive, liveTotal);
            enforceReviewAssetPolicies();
        }

        initFeaturableReviewBridge();
        initGoogleBusinessStatusToggle();
        bindReviewShareButtons();
        refreshLiveReviewSection();
        fetchSiteReviews().then((ok) => { if (ok && getPublishedSiteReviews().length) refreshPublicSiteReviews(); });

        let liveReviewRefreshTimer = null;
        const startLiveReviewAutoRefresh = () => {
            if (liveReviewRefreshTimer) clearInterval(liveReviewRefreshTimer);
            liveReviewRefreshTimer = setInterval(() => {
                refreshLiveReviewSection();
            }, 300000);
        };
        const stopLiveReviewAutoRefresh = () => {
            if (liveReviewRefreshTimer) {
                clearInterval(liveReviewRefreshTimer);
                liveReviewRefreshTimer = null;
            }
        };

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                refreshLiveReviewSection();
                startLiveReviewAutoRefresh();
            } else {
                stopLiveReviewAutoRefresh();
            }
        });

        startLiveReviewAutoRefresh();

        window.addEventListener('storage', (event) => {
            if (!event) return;
            if (event.key === reviewsStorageKey) {
                renderAdminReviews();
                renderPublicReviews();
                refreshOverview();
                refreshLiveReviewSection();
            }
            if (event.key === pageReachStorageKey) refreshOverview();
            if (event.key === adminNotificationsStorageKey) {
                const activeTab = String(adminState?.activeTab || '').trim().toLowerCase();
                if (activeTab === 'notifications') {
                    setAdminTab('notifications');
                }
            }
        });

        function isVisibilityEnabled(project, primaryKey, fallbackKey) {
            if (!project || typeof project !== 'object') return false;
            if (typeof project[primaryKey] === 'boolean') return project[primaryKey];
            if (typeof project[fallbackKey] === 'boolean') return project[fallbackKey];
            return false;
        }

        function scheduleFeaturedRender(projectsOverride, immediate = false) {
            if (featuredRenderDebounceTimer) {
                clearTimeout(featuredRenderDebounceTimer);
                featuredRenderDebounceTimer = null;
            }

            const run = () => {
                if (serviceGallery.gate) return; // wait until galleries are known
                // Service galleries (Supabase) replace every legacy source once they exist
                if (serviceGallery.items.length) { renderFeaturedWork(serviceGalleryToFeaturedProjects()); return; }
                renderFeaturedWork(Array.isArray(projectsOverride) ? projectsOverride : getProjects());
            };

            if (immediate) {
                run();
                return;
            }

            featuredRenderDebounceTimer = setTimeout(() => {
                featuredRenderDebounceTimer = null;
                run();
            }, 120);
        }

        function loadProjects() {
            if (!projectsGrid) projectsGrid = document.getElementById('projectsGrid');
            migrateLegacyProjectsToMediaLibrary();
            applySectionMediaAssignments();
            renderProjects();
            const projects = getProjects();
            const showcaseProjects = projects.filter((p) => p && isVisibilityEnabled(p, 'showInShowcase', 'showcase'));
            startServiceGalleryGate(); // holds legacy renders until galleries are known (max 2.5 s)
            scheduleFeaturedRender(projects, true);
            renderShowcase(showcaseProjects);
            renderServices();
            const activeFilter = document.querySelector('.showcase-filters .filter-btn.active');
            if (typeof filterProjects === 'function') {
                if (activeFilter) filterProjects(activeFilter.dataset.filter || 'all');
                else updateShowcaseEmptyState('all');
            }
        }

        function hydrateShowcaseFromStoredProjects(projectsOverride, gridOverride) {
            const showcaseGrid = gridOverride || document.querySelector('#showcase .showcase-grid');
            if (!showcaseGrid) return;

            const projects = Array.isArray(projectsOverride) ? projectsOverride : getProjects();
            const showcaseProjects = projects.filter((p) => p && isVisibilityEnabled(p, 'showInShowcase', 'showcase'));
            const slotToProjectCategory = {
                smartwindows: 'blindcurtain'
            };
            const categoryLabelMap = {
                cctv: 'CCTV',
                electrical: 'Electrical',
                airconditioning: 'Air Conditioner',
                gates: 'Automated Gates',
                solar: 'Solar Energy',
                fencing: 'Electric Fence',
                smarthome: 'Smart Home',
                smartwindows: 'Smart Window Solutions',
                blindcurtain: 'Window Blinds'
            };

            const usedIds = new Set();
            const pickProjectForSlot = (slotCategory) => {
                const normalized = String(slotCategory || '').toLowerCase().trim();
                const projectCategory = normalizeCategoryKey(slotToProjectCategory[normalized] || normalized);
                const matches = showcaseProjects.filter((p) => normalizeCategoryKey(p?.category || '') === projectCategory);
                const withMedia = matches.filter((p) => !!getProjectSurfaceMedia(p, 'showcase'));
                const featured = withMedia.find((p) => p.isFeatured) || withMedia.find((p) => p.isStarred);
                const primary = featured || withMedia[0] || matches[0] || null;
                if (!primary) return null;
                const id = String(primary.id || '').trim();
                if (id && usedIds.has(id)) return null;
                return primary;
            };

            const slots = Array.from(showcaseGrid.querySelectorAll('.showcase-item'));
            let assignedCount = 0;

            const ensureMediaCountBadge = (slot) => {
                if (!slot) return null;
                let badge = slot.querySelector('.project-media-count');
                if (!badge) {
                    badge = document.createElement('div');
                    badge.className = 'project-media-count';
                    badge.innerHTML = '<i class="fas fa-images"></i><span>0</span>';
                    slot.appendChild(badge);
                }
                return badge;
            };

            const updateMediaCountBadge = (slot, count) => {
                const badge = ensureMediaCountBadge(slot);
                if (!badge) return;
                const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
                const label = safeCount > 1 ? `${safeCount}+` : String(safeCount);
                const span = badge.querySelector('span');
                if (span) span.textContent = label;
                badge.setAttribute('aria-label', `${safeCount} media item${safeCount === 1 ? '' : 's'}`);
                badge.classList.toggle('is-hidden', safeCount === 0);
            };

            const ensureShowcaseViewButton = (slot, mediaType) => {
                if (!slot) return null;
                let button = slot.querySelector('.view-project-btn');
                const normalizedType = String(mediaType || slot.dataset.mediaType || 'image').trim().toLowerCase();
                const isVideo = normalizedType === 'video' || normalizedType === 'youtube';
                const label = isVideo ? 'Watch Video' : 'View Project';
                const icon = isVideo ? 'fa-play-circle' : 'fa-eye';
                const iconMarkup = `<i class="fas ${icon}" aria-hidden="true"></i>`;

                if (!button) {
                    button = document.createElement('a');
                    button.href = '#';
                    button.className = 'view-project-btn';
                    slot.appendChild(button);
                }

                button.setAttribute('aria-label', label);
                button.innerHTML = `${iconMarkup} ${label}`;
                return button;
            };
            slots.forEach((slot) => {
                const slotCategory = (slot.getAttribute('data-category') || slot.dataset.category || '').toLowerCase().trim();
                const project = pickProjectForSlot(slotCategory);

                if (project) {
                    const showcaseMedia = getProjectSurfaceMedia(project, 'showcase');
                    if (project.id) usedIds.add(String(project.id));
                    if (showcaseMedia?.mediaSrc) assignedCount += 1;
                    const label = categoryLabelMap[slotCategory] || categoryLabelMap[String(project.category || '').toLowerCase().trim()] || (project.category || 'Project');
                    const title = String(project.title || project.name || '').trim();
                    const description = String(project.description || '').trim();

                    slot.dataset.mediaSrc = showcaseMedia?.mediaSrc || '';
                    slot.dataset.mediaType = showcaseMedia?.mediaType || 'image';
                    if (project.id) slot.dataset.generatedProjectId = String(project.id);
                    slot.dataset.modalTitle = title || 'Project';
                    slot.dataset.modalDescription = description || '';
                    slot.dataset.modalCategory = label || String(project.category || '').trim();
                    slot.dataset.galleryGroup = 'category';
                    if (!slot.dataset.category && slotCategory) {
                        slot.dataset.category = slotCategory;
                    }
                    const mediaItems = coerceProjectMediaItems(project);
                    updateMediaCountBadge(slot, mediaItems.length);
                    if (mediaItems.length > 1) {
                        try { slot.dataset.mediaItems = JSON.stringify(mediaItems); } catch {}
                    } else if (slot.dataset.mediaItems) {
                        delete slot.dataset.mediaItems;
                    }

                    const ensureShowcaseMedia = () => {
                        const existing = slot.querySelector('.showcase-bg');
                        const mediaSrc = String(showcaseMedia?.mediaSrc || '').trim();
                        const normalizedSrc = mediaSrc ? normalizeCloudinaryUrl(mediaSrc) : '';
                        const type = String(showcaseMedia?.mediaType || 'image').trim().toLowerCase() || 'image';
                        let node = existing;
                        if (!node) {
                            node = document.createElement('div');
                            node.className = 'showcase-bg';
                            slot.insertBefore(node, slot.firstChild);
                        }

                        if (!normalizedSrc) {
                            node.innerHTML = '';
                            return;
                        }

                        if (type === 'video') {
                            node.innerHTML = `<video src="${normalizedSrc}" muted playsinline webkit-playsinline loop preload="metadata"></video>`;
                        } else if (type === 'youtube') {
                            const youtubeId = getYoutubeVideoId(normalizedSrc);
                            const thumb = normalizeCloudinaryUrl(String(showcaseMedia?.thumbSrc || getYoutubeThumbUrl(youtubeId) || '').trim());
                            node.innerHTML = `<img src="${thumb || normalizedSrc}" alt="" loading="lazy" decoding="async">`;
                        } else {
                            node.innerHTML = `<img src="${normalizedSrc}" alt="" loading="lazy" decoding="async">`;
                        }

                        slot.classList.add('has-media');
                        bindHailifuMediaFallback(node, 'HAILIFU');
                    };

                    try { ensureShowcaseMedia(); } catch {}

                    const categoryEl = slot.querySelector('.project-category');
                    if (categoryEl) {
                        const categorySpan = categoryEl.querySelector('span');
                        if (categorySpan) categorySpan.textContent = label;
                        else categoryEl.textContent = label;
                    }

                    if (title) {
                        const placeholderTitle = slot.querySelector('.showcase-placeholder span');
                        if (placeholderTitle) placeholderTitle.textContent = title;
                        const overlayTitle = slot.querySelector('.showcase-title');
                        if (overlayTitle) overlayTitle.textContent = title;
                    }

                    if (description) {
                        const overlayDesc = slot.querySelector('.showcase-description');
                        if (overlayDesc) overlayDesc.textContent = description;
                    }

                    const idValue = String(project.id || '').trim();
                    slot.classList.add('showcase-card');
                    slot.removeAttribute('onclick');
                    ensureShowcaseViewButton(slot, showcaseMedia?.mediaType || slot.dataset.mediaType || 'image');
                } else {
                    const existingBg = slot.querySelector('.showcase-bg');
                    const fallbackMedia = getSectionAssignedMedia('showcase.defaultFallback');
                    if (fallbackMedia?.url) {
                        let bgNode = existingBg;
                        if (!bgNode) {
                            bgNode = document.createElement('div');
                            bgNode.className = 'showcase-bg';
                            slot.insertBefore(bgNode, slot.firstChild);
                        }
                        const safeSrc = normalizeCloudinaryUrl(fallbackMedia.url);
                        if (fallbackMedia.type === 'video') {
                            bgNode.innerHTML = `<video src="${safeSrc}" muted playsinline webkit-playsinline loop preload="metadata"></video>`;
                        } else {
                            bgNode.innerHTML = `<img src="${safeSrc}" alt="" loading="lazy" decoding="async">`;
                        }
                        slot.classList.add('has-media');
                        bindHailifuMediaFallback(bgNode, 'HAILIFU');
                    } else {
                        if (existingBg) existingBg.remove();
                        slot.classList.remove('has-media');
                    }
                    slot.classList.add('showcase-card');
                    delete slot.dataset.generatedProjectId;
                    delete slot.dataset.modalTitle;
                    delete slot.dataset.modalDescription;
                    delete slot.dataset.modalCategory;
                    slot.dataset.mediaSrc = '';
                    slot.dataset.mediaType = 'image';
                    slot.dataset.galleryGroup = 'category';
                    if (slotCategory) slot.dataset.category = slotCategory;
                    slot.removeAttribute('onclick');
                    updateMediaCountBadge(slot, 0);
                    ensureShowcaseViewButton(slot, slot.dataset.mediaType || 'image');
                }

                if (slot.dataset.modalBound) {
                    delete slot.dataset.modalBound;
                }
                slot.removeAttribute('role');
                slot.removeAttribute('tabindex');
            });
            showcaseGrid.dataset.showcaseAssigned = String(assignedCount);
        }

        // ------------------------------------------------------------------
        // WORK SHOWCASE + GALLERY (rebuilt 2026-09-29)
        // Same data as before (getProjects + showInShowcase visibility), new UI:
        // category chips with counts, search, bento grid, "show more",
        // full-screen gallery (thumbnails, keyboard, swipe, zoom, share link,
        // deep link #project=<id>, "get a quote for this").
        // ------------------------------------------------------------------
        const SHOWCASE_CATEGORY_LABELS = {
            cctv: 'CCTV',
            electrical: 'Electrical',
            networking: 'Networking',
            gates: 'Gate automation',
            solar: 'Solar',
            smarthome: 'Smart home',
            fencing: 'Electric fence',
            airconditioning: 'Air conditioning',
            blindcurtain: 'Blinds & curtains'
        };
        const SHOWCASE_PAGE_SIZE = 9;
        const showcaseState = { filter: 'all', query: '', limit: SHOWCASE_PAGE_SIZE, projects: [], bound: false };
        const galleryState = { project: null, index: 0, open: false, lastFocus: null, touchX: null };

        function normalizeShowcaseCategory(value) {
            const key = String(value || '').toLowerCase().replace(/[^a-z]/g, '');
            const aliases = { autogate: 'gates', gate: 'gates', gateautomation: 'gates', automatedgates: 'gates', ac: 'airconditioning', aircondition: 'airconditioning', airconditioner: 'airconditioning', fence: 'fencing', electricfence: 'fencing', blinds: 'blindcurtain', curtains: 'blindcurtain', windowblinds: 'blindcurtain', smarthomes: 'smarthome', network: 'networking', lan: 'networking', wifi: 'networking', cabling: 'networking', structuredcabling: 'networking' };
            return aliases[key] || key || 'other';
        }

        function getShowcaseMedia(project) {
            const list = [];
            if (Array.isArray(project?.mediaItems)) list.push(...project.mediaItems);
            if (project?.mediaSrc) list.push({ mediaSrc: project.mediaSrc, mediaType: project.mediaType || 'image', thumbSrc: project.thumbSrc || '' });
            const seen = new Set();
            return list
                .map((m) => { try { const n = normalizeMediaItem(m); return n ? { ...n, caption: String(m?.caption || '').trim() } : null; } catch { return null; } })
                .filter(Boolean)
                .map((m) => ({ ...m, mediaSrc: normalizeCloudinaryUrl(String(m.mediaSrc || '').trim()), thumbSrc: m.thumbSrc ? normalizeCloudinaryUrl(String(m.thumbSrc)) : '' }))
                .filter((m) => {
                    const key = `${m.mediaType}::${m.mediaSrc}`;
                    if (!m.mediaSrc || seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });
        }

        function buildShowcaseMediaTag(media, alt, opts = {}) {
            const src = escapeHTML(media.mediaSrc);
            if (media.mediaType === 'video') {
                return `<video src="${src}${opts.poster ? '#t=0.5' : ''}" muted playsinline preload="metadata"${opts.controls ? ' controls autoplay' : ' loop'}></video>`;
            }
            if (media.mediaType === 'youtube') {
                const id = typeof getYoutubeVideoId === 'function' ? getYoutubeVideoId(media.mediaSrc) : '';
                if (opts.controls && id) return `<iframe src="https://www.youtube.com/embed/${escapeHTML(id)}?autoplay=1&rel=0" title="${escapeHTML(alt)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
                const thumb = media.thumbSrc || (id && typeof getYoutubeThumbUrl === 'function' ? getYoutubeThumbUrl(id) : '');
                return `<img src="${escapeHTML(thumb)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async">`;
            }
            return `<img src="${src}" alt="${escapeHTML(alt)}" loading="${opts.eager ? 'eager' : 'lazy'}" decoding="async">`;
        }

        function getVisibleShowcaseProjects() {
            const q = showcaseState.query.trim().toLowerCase();
            return showcaseState.projects.filter((p) => {
                if (showcaseState.filter !== 'all' && p.category !== showcaseState.filter) return false;
                if (!q) return true;
                return `${p.title} ${p.description} ${SHOWCASE_CATEGORY_LABELS[p.category] || ''}`.toLowerCase().includes(q);
            });
        }

        function paintShowcaseChips() {
            const chips = document.getElementById('hmScChips');
            if (!chips) return;
            const counts = showcaseState.projects.reduce((acc, p) => { acc[p.category] = (acc[p.category] || 0) + 1; return acc; }, {});
            const keys = Object.keys(SHOWCASE_CATEGORY_LABELS).filter((k) => counts[k]);
            const chip = (key, label, count) => `<button type="button" class="hm-sc-chip${showcaseState.filter === key ? ' is-active' : ''}" data-sc-filter="${key}" role="tab" aria-selected="${showcaseState.filter === key}">${escapeHTML(label)}<span>${count}</span></button>`;
            chips.innerHTML = chip('all', showcaseUnit().all, showcaseState.projects.length) + keys.map((k) => chip(k, SHOWCASE_CATEGORY_LABELS[k], counts[k])).join('');
        }

        function paintShowcaseGrid(animate) {
            const grid = document.getElementById('hmScGrid');
            const countNode = document.getElementById('hmScCount');
            const more = document.getElementById('hmScMore');
            if (!grid) return;
            const visible = getVisibleShowcaseProjects();
            const shown = visible.slice(0, showcaseState.limit);
            if (countNode) {
                const photos = visible.reduce((n, p) => n + p.media.length, 0);
                countNode.textContent = visible.length
                    ? `${visible.length} ${visible.length === 1 ? showcaseUnit().one : showcaseUnit().many} · ${photos} photo${photos === 1 ? '' : 's'} & video${photos === 1 ? '' : 's'}`
                    : '';
            }
            if (!shown.length) {
                grid.innerHTML = `
                    <div class="hm-sc-empty">
                        <i class="fas fa-magnifying-glass"></i>
                        <h3>No projects match</h3>
                        <p>${showcaseState.query ? 'Try a different word, or ' : ''}pick another category.</p>
                        <button type="button" class="hm-sc-reset" data-sc-reset>Show all projects</button>
                    </div>`;
            } else {
                grid.innerHTML = shown.map((p, i) => {
                    const cover = p.media[p.coverIndex] || p.media[0];
                    const label = SHOWCASE_CATEGORY_LABELS[p.category] || 'Project';
                    const hasVideo = p.media.some((m) => m.mediaType === 'video' || m.mediaType === 'youtube');
                    return `
                        <article class="hm-sc-card${i === 0 && showcaseState.filter === 'all' && !showcaseState.query ? ' is-feature' : ''}" data-sc-open="${escapeHTML(p.id)}" tabindex="0" role="button" aria-label="Open gallery: ${escapeHTML(p.title)}" style="--i:${i}">
                            <div class="hm-sc-media">${buildShowcaseMediaTag(cover, p.title, { poster: true, eager: i < 3 })}</div>
                            <span class="hm-sc-cat">${escapeHTML(label)}</span>
                            <span class="hm-sc-badge"><i class="fas ${hasVideo ? 'fa-film' : 'fa-images'}" aria-hidden="true"></i> ${p.media.length}</span>
                            <div class="hm-sc-info">
                                <h3>${escapeHTML(p.title)}</h3>
                                ${p.description ? `<p>${escapeHTML(p.description)}</p>` : ''}
                                <div class="hm-sc-actions">
                                    <span class="hm-sc-open">View gallery <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
                                    <button type="button" class="hm-sc-quote" data-sc-quote="${escapeHTML(p.category)}">Get a quote</button>
                                </div>
                            </div>
                        </article>`;
                }).join('');
            }
            if (animate) {
                grid.classList.remove('is-animating');
                void grid.offsetWidth;
                grid.classList.add('is-animating');
            }
            if (more) {
                const remaining = visible.length - shown.length;
                more.hidden = remaining <= 0;
                more.textContent = remaining > 0 ? `Show ${Math.min(remaining, SHOWCASE_PAGE_SIZE)} more ${remaining === 1 ? showcaseUnit().one : showcaseUnit().many}` : '';
            }
        }

        function renderShowcase(projectsOverride) {
            const root = document.getElementById('hmShowcase');
            if (!root) return;
            if (serviceGallery.gate) { paintShowcaseSkeleton(); return; }
            // Service galleries (Supabase) win over every legacy source once they exist,
            // so items deleted in the admin cannot come back from localStorage/remote copies.
            if (serviceGallery.items.length) projectsOverride = serviceGalleryToShowcaseProjects();
            root.classList.toggle('is-services', serviceGallery.items.length > 0);
            const source = Array.isArray(projectsOverride)
                ? projectsOverride
                : getProjects().filter((p) => p && isVisibilityEnabled(p, 'showInShowcase', 'showcase'));
            showcaseState.projects = source
                .map((p) => ({
                    id: String(p.id || ''),
                    title: String(p.title || p.name || 'Project').trim(),
                    description: String(p.description || '').trim(),
                    category: normalizeShowcaseCategory(p.category),
                    media: getShowcaseMedia(p),
                    coverIndex: Number(p.coverIndex) || 0
                }))
                .filter((p) => p.id && p.media.length);
            if (showcaseState.filter !== 'all' && !showcaseState.projects.some((p) => p.category === showcaseState.filter)) {
                showcaseState.filter = 'all';
            }
            paintShowcaseChips();
            paintShowcaseGrid(false);
            bindShowcaseOnce();
            openGalleryFromHash();
        }

        // ------------------------------------------------------------------
        // SERVICE GALLERIES (2026-09-30)
        // Gallery items are rows in `installations` with data.kind = 'gallery'
        // (public read, admin write). Each service becomes one showcase card.
        // Spec: docs/superpowers/specs/2026-09-30-service-galleries-design.md
        // ------------------------------------------------------------------
        const SERVICE_GALLERY_CATEGORIES = ['cctv', 'electrical', 'networking', 'fencing', 'airconditioning', 'solar', 'gates', 'blindcurtain', 'smarthome'];
        const SERVICE_GALLERY_TABLE = 'installations';
        const serviceGallery = { items: [], status: 'idle', message: '', loaded: false, gate: false, inflight: null };

        function normalizeServiceGalleryItem(raw) {
            const item = raw && typeof raw === 'object' ? raw : {};
            // Only https URLs or this site's own root-relative paths may reach src/thumb attributes
            const safeUrl = (v) => { const u = String(v || '').trim(); return /^https:\/\//i.test(u) || /^\/(?!\/)/.test(u) ? u : ''; };
            const src = safeUrl(item.src);
            const category = normalizeShowcaseCategory(item.category);
            if (!src || !SERVICE_GALLERY_CATEGORIES.includes(category)) return null;
            const mediaType = ['image', 'video', 'youtube'].includes(item.mediaType) ? item.mediaType : 'image';
            return {
                id: String(item.id || ''),
                kind: 'gallery',
                category,
                mediaType,
                src,
                thumb: safeUrl(item.thumb),
                source: ['supabase', 'cloudinary', 'youtube', 'link'].includes(item.source) ? item.source : 'link',
                storagePath: String(item.storagePath || '').trim(),
                caption: String(item.caption || '').trim().slice(0, 140),
                featured: item.featured === true,
                cover: item.cover === true,
                order: Number.isFinite(Number(item.order)) ? Number(item.order) : 0,
                createdAt: String(item.createdAt || '')
            };
        }

        function sortServiceGalleryItems(items) {
            return items.slice().sort((a, b) =>
                (SERVICE_GALLERY_CATEGORIES.indexOf(a.category) - SERVICE_GALLERY_CATEGORIES.indexOf(b.category))
                || (a.order - b.order)
                || String(a.createdAt).localeCompare(String(b.createdAt)));
        }

        // One request at a time; pass force=true to refetch (admin retry / tab open)
        function loadServiceGallery(force = false) {
            if (serviceGallery.inflight && !force) return serviceGallery.inflight;
            serviceGallery.inflight = fetchServiceGallery().finally(() => { serviceGallery.inflight = null; });
            return serviceGallery.inflight;
        }

        async function fetchServiceGallery() {
            const supabase = ensureSupabaseClient();
            if (!supabase) {
                serviceGallery.status = 'offline';
                serviceGallery.message = 'Supabase is not configured (see ADMIN_SETUP.md).';
                return;
            }
            try {
                const { data, error } = await withTimeout(
                    supabase.from(SERVICE_GALLERY_TABLE).select('*').eq('data->>kind', 'gallery'),
                    8000,
                    'Loading galleries'
                );
                if (error) throw error;
                serviceGallery.items = sortServiceGalleryItems((Array.isArray(data) ? data : [])
                    .map(fromRemoteRow)
                    .filter((r) => r && r.kind === 'gallery')
                    .map(normalizeServiceGalleryItem)
                    .filter((it) => it && it.id));
                serviceGallery.status = 'ready';
                serviceGallery.message = '';
            } catch (err) {
                const text = String(err?.message || err || '');
                const offline = /fetch|network|timed out|resolve|failed/i.test(text);
                serviceGallery.status = offline ? 'offline' : 'error';
                serviceGallery.message = offline
                    ? 'Storage can\'t be reached. Your Supabase project may be paused or deleted (see ADMIN_SETUP.md).'
                    : `Gallery error: ${text}`;
            } finally {
                serviceGallery.loaded = true;
            }
        }

        function getServiceGalleryGroups() {
            return SERVICE_GALLERY_CATEGORIES
                .map((category) => {
                    const items = serviceGallery.items.filter((it) => it.category === category);
                    return { category, label: SHOWCASE_CATEGORY_LABELS[category] || category, items, cover: items.find((it) => it.cover) || items[0] };
                })
                .filter((g) => g.items.length);
        }

        function describeServiceGalleryCounts(items) {
            const videos = items.filter((it) => it.mediaType !== 'image').length;
            const photos = items.length - videos;
            return [
                photos ? `${photos} photo${photos === 1 ? '' : 's'}` : '',
                videos ? `${videos} video${videos === 1 ? '' : 's'}` : ''
            ].filter(Boolean).join(' · ');
        }

        function serviceGalleryToShowcaseProjects() {
            return getServiceGalleryGroups().map((g) => {
                const ordered = g.items;
                return {
                    coverIndex: Math.max(0, ordered.indexOf(g.cover)),
                    id: g.category,
                    title: g.label,
                    description: describeServiceGalleryCounts(g.items),
                    category: g.category,
                    showInShowcase: true,
                    mediaItems: ordered.map((it) => ({ mediaSrc: it.src, mediaType: it.mediaType, thumbSrc: it.thumb, caption: it.caption }))
                };
            });
        }

        // Wording for the showcase: service galleries vs legacy projects
        function showcaseUnit() {
            return serviceGallery.items.length
                ? { all: 'All services', one: 'service', many: 'services' }
                : { all: 'All projects', one: 'project', many: 'projects' };
        }

        // Featured Work: starred items; if none are starred, each service's cover.
        // Only featured slides are passed (showInShowcase false) so no legacy top-up is added.
        function serviceGalleryToFeaturedProjects() {
            const starred = serviceGallery.items.filter((it) => it.featured);
            const picks = starred.length ? starred : getServiceGalleryGroups().map((g) => g.cover);
            return picks.map((it) => ({
                id: it.id,
                title: SHOWCASE_CATEGORY_LABELS[it.category] || it.category,
                name: SHOWCASE_CATEGORY_LABELS[it.category] || it.category,
                description: it.caption,
                category: it.category,
                mediaSrc: it.src,
                mediaType: it.mediaType,
                thumbSrc: it.thumb,
                createdAt: it.createdAt,
                showInFeatured: true,
                featured: true,
                showInShowcase: false,
                showcase: false
            }));
        }

        function paintShowcaseSkeleton() {
            const grid = document.getElementById('hmScGrid');
            if (grid && !grid.querySelector('.hm-sc-skel')) grid.innerHTML = Array.from({ length: 3 }, () => '<div class="hm-sc-skel" aria-hidden="true"></div>').join('');
        }

        function startServiceGalleryGate() {
            if (serviceGallery.loaded || serviceGallery.gate) return;
            serviceGallery.gate = true;
            paintShowcaseSkeleton();
            const release = () => {
                if (!serviceGallery.gate) return;
                serviceGallery.gate = false;
                renderShowcase();
                scheduleFeaturedRender(null, true);
                if (serviceGallery.items.length) renderServices();
            };
            const timer = setTimeout(release, 2500);
            loadServiceGallery().catch(() => {}).then(() => {
                clearTimeout(timer);
                if (serviceGallery.gate) release();
                else renderPublicServiceGallery(); // arrived after the 2.5 s cap
            });
        }

        function renderPublicServiceGallery() {
            if (!serviceGallery.items.length) return;
            renderShowcase();
            scheduleFeaturedRender(null, true);
            renderServices(); // service cards use each gallery's cover photo
        }

        // ---------- Admin: Galleries tab ----------
        const sgAdmin = { category: 'cctv', confirming: '', queue: [], selected: new Set(), bulkConfirm: false, busy: false };
        const SG_NOT_ALLOWED = 'Not allowed. Sign in again as admin.';

        function sgFriendlyError(err) {
            const msg = String(err?.message || err || '');
            if (/row-level security|not allowed|unauthori|401|403/i.test(msg)) return SG_NOT_ALLOWED;
            if (/fetch|network|timed out|unreachable/i.test(msg)) return 'Storage can\'t be reached. Try again.';
            return msg || 'Something went wrong';
        }

        function newServiceGalleryId() {
            return `g_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
        }

        function sgItemsFor(category) {
            return serviceGallery.items.filter((it) => it.category === category);
        }

        async function insertServiceGalleryItems(records) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, items: [], message: 'Storage is offline.' };
            const items = records.map(normalizeServiceGalleryItem).filter(Boolean);
            if (!items.length) return { ok: true, items: [], message: '' };
            try {
                const { data, error } = await withTimeout(
                    supabase.from(SERVICE_GALLERY_TABLE).upsert(items.map(toRemoteRow), { onConflict: 'id' }).select(),
                    12000,
                    'Saving'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error(SG_NOT_ALLOWED);
                serviceGallery.items = sortServiceGalleryItems(serviceGallery.items.concat(items));
                serviceGallery.status = 'ready';
                renderPublicServiceGallery();
                return { ok: true, items, message: '' };
            } catch (err) {
                return { ok: false, items: [], message: sgFriendlyError(err) };
            }
        }

        function sgTileThumb(it) {
            const src = escapeHTML(it.thumb || it.src);
            if (it.mediaType === 'video') return `<video src="${escapeHTML(it.src)}#t=0.5" preload="metadata" muted playsinline></video><span class="sg-kind"><i class="fas fa-play"></i> Video</span>`;
            if (it.mediaType === 'youtube') {
                const id = typeof getYoutubeVideoId === 'function' ? getYoutubeVideoId(it.src) : '';
                const thumb = it.thumb || (id && typeof getYoutubeThumbUrl === 'function' ? getYoutubeThumbUrl(id) : '');
                return `<img src="${escapeHTML(thumb)}" alt="" loading="lazy"><span class="sg-kind"><i class="fab fa-youtube"></i> YouTube</span>`;
            }
            return `<img src="${src}" alt="${escapeHTML(it.caption)}" loading="lazy" decoding="async">`;
        }

        function buildServiceGalleryTiles() {
            const items = sgItemsFor(sgAdmin.category);
            if (!items.length) {
                return `<div class="hm-state sg-empty"><i class="fas fa-images"></i><h3>No ${escapeHTML(SHOWCASE_CATEGORY_LABELS[sgAdmin.category] || '')} photos yet</h3><p>Drop photos or videos above, or paste links. They appear on the website straight away.</p></div>`;
            }
            const cover = items.find((it) => it.cover) || items[0];
            return items.map((it, i) => `
                <figure class="sg-tile${sgAdmin.selected.has(it.id) ? ' is-selected' : ''}${it === cover ? ' is-cover' : ''}${it.featured ? ' is-featured' : ''}${sgAdmin.confirming === it.id ? ' is-confirming' : ''}" data-sg-id="${escapeHTML(it.id)}" style="--i:${Math.min(i, 12)}">
                    <div class="sg-thumb">${sgTileThumb(it)}${it === cover ? '<span class="sg-cover-badge">Cover</span>' : ''}
                        <label class="sg-check" title="Select"><input type="checkbox" class="sg-select" aria-label="Select this item"${sgAdmin.selected.has(it.id) ? ' checked' : ''}><span aria-hidden="true"><i class="fas fa-check"></i></span></label>
                    </div>
                    <input class="sg-caption" type="text" maxlength="140" value="${escapeHTML(it.caption)}" placeholder="Add a caption" aria-label="Caption">
                    <div class="sg-tools">
                        <button type="button" class="sg-tool${it.featured ? ' is-on' : ''}" data-sg-action="feature" aria-pressed="${it.featured}" title="Show in Featured Work" aria-label="Show in Featured Work"><i class="fas fa-star"></i></button>
                        <button type="button" class="sg-tool" data-sg-action="cover" title="Use as cover" aria-label="Use as cover"${it === cover ? ' disabled' : ''}><i class="fas fa-image"></i></button>
                        <button type="button" class="sg-tool" data-sg-action="left" title="Move earlier" aria-label="Move earlier"${i === 0 ? ' disabled' : ''}><i class="fas fa-arrow-left"></i></button>
                        <button type="button" class="sg-tool" data-sg-action="right" title="Move later" aria-label="Move later"${i === items.length - 1 ? ' disabled' : ''}><i class="fas fa-arrow-right"></i></button>
                        <div class="sg-move-wrap">
                            <button type="button" class="sg-move-btn" data-sg-action="move-open" aria-haspopup="true" aria-expanded="false" title="Move to another service"><i class="fas fa-arrow-right-arrow-left"></i> Move</button>
                            <div class="sg-move-menu" role="menu" aria-label="Move to">
                                <span class="sg-move-title">Move to</span>
                                ${SERVICE_GALLERY_CATEGORIES.filter((c) => c !== it.category).map((c) => `<button type="button" role="menuitem" data-sg-move-to="${c}">${escapeHTML(SHOWCASE_CATEGORY_LABELS[c] || c)}</button>`).join('')}
                            </div>
                        </div>
                        <button type="button" class="sg-tool is-danger" data-sg-action="ask-delete" title="Delete" aria-label="Delete"><i class="fas fa-trash"></i></button>
                    </div>
                    <div class="sg-confirm" role="alertdialog" aria-label="Confirm delete">
                        <span>Delete this item?</span>
                        <button type="button" class="hm-btn is-danger" data-sg-action="confirm-delete">Delete</button>
                        <button type="button" class="hm-btn" data-sg-action="cancel-delete">Keep</button>
                    </div>
                </figure>`).join('');
        }

        function buildServiceGalleryBulk() {
            // forget items that no longer exist (deleted or moved away)
            for (const id of [...sgAdmin.selected]) {
                if (!sgItemsFor(sgAdmin.category).some((it) => it.id === id)) sgAdmin.selected.delete(id);
            }
            const count = sgAdmin.selected.size;
            if (!count) {
                return sgItemsFor(sgAdmin.category).length
                    ? '<button type="button" class="hm-btn" data-sg-action="select-all"><i class="fas fa-check-double"></i> Select all</button><span class="sg-bulk-hint">Tick photos to delete or move several at once.</span>'
                    : '';
            }
            if (sgAdmin.bulkConfirm) {
                return `<strong>Delete ${count} item${count === 1 ? '' : 's'} from the website?</strong>
                    <button type="button" class="hm-btn is-danger" data-sg-action="bulk-confirm"${sgAdmin.busy ? ' disabled' : ''}>${sgAdmin.busy ? 'Deleting...' : 'Delete'}</button>
                    <button type="button" class="hm-btn" data-sg-action="bulk-cancel">Keep</button>`;
            }
            return `<strong>${count} selected</strong>
                <button type="button" class="hm-btn" data-sg-action="select-all"><i class="fas fa-check-double"></i> Select all</button>
                <button type="button" class="hm-btn" data-sg-action="select-none">Clear</button>
                <label class="sg-bulk-move"><span class="hm-sr">Move selected to</span>
                    <select id="sgBulkMove"><option value="">Move to…</option>${SERVICE_GALLERY_CATEGORIES.filter((c) => c !== sgAdmin.category).map((c) => `<option value="${c}">${escapeHTML(SHOWCASE_CATEGORY_LABELS[c] || c)}</option>`).join('')}</select>
                </label>
                <button type="button" class="hm-btn is-danger" data-sg-action="bulk-delete"><i class="fas fa-trash"></i> Delete</button>`;
        }

        function refreshServiceGalleryBulk() {
            const bar = document.getElementById('sgBulk');
            if (bar) {
                bar.innerHTML = buildServiceGalleryBulk();
                bar.classList.toggle('has-selection', sgAdmin.selected.size > 0);
            }
        }

        // Deletes one by one so a refused item never blocks the others. Returns ids that failed.
        async function deleteServiceGalleryItems(ids) {
            const failed = [];
            let deleted = 0;
            for (const id of ids) {
                const res = await deleteServiceGalleryItem(id);
                if (res.ok) deleted += 1; else failed.push(id);
            }
            return { deleted, failed };
        }

        async function moveServiceGalleryItems(ids, category) {
            let moved = 0;
            const failed = [];
            let order = sgItemsFor(category).reduce((m, it) => Math.max(m, it.order), 0);
            for (const id of ids) {
                const res = await updateServiceGalleryItem(id, { category, cover: false, order: (order += 1) });
                if (res.ok) moved += 1; else failed.push(id);
            }
            return { moved, failed };
        }

        function buildServiceGalleryQueue() {
            if (!sgAdmin.queue.length) return '';
            return sgAdmin.queue.map((q) => `
                <div class="sg-q is-${q.status}">
                    <span class="sg-q-name">${escapeHTML(q.name)}</span>
                    <span class="sg-q-state">${q.status === 'uploading' ? `${q.pct}%` : q.status === 'done' ? 'Added' : escapeHTML(q.message)}</span>
                    <span class="sg-q-bar" style="--pct:${q.status === 'error' ? 100 : q.pct}%"></span>
                </div>`).join('');
        }

        function buildServiceGalleryTabs() {
            return SERVICE_GALLERY_CATEGORIES.map((c) => `
                <button type="button" class="sg-tab${c === sgAdmin.category ? ' is-active' : ''}" data-sg-cat="${c}" role="tab" aria-selected="${c === sgAdmin.category}">
                    ${escapeHTML(SHOWCASE_CATEGORY_LABELS[c] || c)}<span>${sgItemsFor(c).length}</span>
                </button>`).join('');
        }

        function renderAdminServiceGalleries(container) {
            const offline = serviceGallery.status === 'offline' || serviceGallery.status === 'error';
            const label = escapeHTML(SHOWCASE_CATEGORY_LABELS[sgAdmin.category] || sgAdmin.category);
            container.innerHTML = `
                <div class="admin-v2-section sg-admin" id="sgAdmin">
                    ${offline ? `
                        <div class="hm-state is-offline">
                            <i class="fas fa-triangle-exclamation"></i>
                            <h3>${serviceGallery.status === 'offline' ? 'Storage is offline' : 'Something went wrong'}</h3>
                            <p>${escapeHTML(serviceGallery.message)}</p>
                            <button type="button" class="hm-btn" data-sg-action="retry"><i class="fas fa-rotate-right"></i> Try again</button>
                        </div>` : `
                        <div class="sg-toolbar">
                            <div class="sg-tabs" role="tablist" aria-label="Services" id="sgTabs">${buildServiceGalleryTabs()}</div>
                            <button type="button" class="hm-btn sg-import" data-sg-action="import" title="Copy the photos your website shows today into these galleries">
                                <i class="fas fa-file-import"></i> Import site photos
                            </button>
                        </div>
                        ${serviceGallery.items.length ? '' : '<p class="sg-hint">Your website still shows its built-in photos. Press <strong>Import site photos</strong> to manage them here, or add new ones below.</p>'}
                        <div class="sg-add">
                            <label class="sg-drop" id="sgDrop" for="sgFile">
                                <i class="fas fa-cloud-arrow-up" aria-hidden="true"></i>
                                <strong>Add photos or videos to <span id="sgDropLabel">${label}</span></strong>
                                <span>Drop files here or click to choose. Photos are resized automatically. Videos up to 50 MB.</span>
                                <input type="file" id="sgFile" multiple accept="image/*,video/*">
                            </label>
                            <form class="sg-links" id="sgLinksForm">
                                <label for="sgLinks">Paste links (Cloudinary or YouTube), one per line</label>
                                <textarea id="sgLinks" rows="3" placeholder="https://res.cloudinary.com/..."></textarea>
                                <button type="submit" class="hm-btn"><i class="fas fa-link"></i> Add links</button>
                                <p class="sg-links-msg" id="sgLinksMsg" role="status" hidden></p>
                            </form>
                            <div class="sg-lib">
                                <button type="button" class="hm-btn" data-sg-lib="toggle" aria-expanded="false" aria-controls="sgLibPanel"><i class="fas fa-photo-film"></i> From Media Library</button>
                                <span class="sg-lib-help">Use photos and videos you already uploaded to the Media Library.</span>
                            </div>
                        </div>
                        <div class="sg-lib-panel" id="sgLibPanel" hidden></div>
                        <div class="sg-queue" id="sgQueue" aria-live="polite">${buildServiceGalleryQueue()}</div>
                        <div class="sg-bulk${sgAdmin.selected.size ? ' has-selection' : ''}" id="sgBulk" aria-live="polite">${buildServiceGalleryBulk()}</div>
                        <div class="sg-grid" id="sgGrid">${buildServiceGalleryTiles()}</div>`}
                </div>`;
            bindAdminServiceGalleriesOnce();
        }

        function refreshAdminServiceGalleries() {
            const tabs = document.getElementById('sgTabs');
            if (tabs) tabs.innerHTML = buildServiceGalleryTabs();
            const grid = document.getElementById('sgGrid');
            // Keep a caption the owner is typing (value, focus, caret) across the rebuild
            const active = document.activeElement;
            const typing = active && active.classList && active.classList.contains('sg-caption') && grid && grid.contains(active)
                ? { id: active.closest('.sg-tile')?.dataset.sgId, value: active.value, start: active.selectionStart, end: active.selectionEnd }
                : null;
            if (grid) grid.innerHTML = buildServiceGalleryTiles();
            if (typing && typing.id && grid) {
                const input = grid.querySelector(`.sg-tile[data-sg-id="${CSS.escape(typing.id)}"] .sg-caption`);
                if (input) {
                    input.value = typing.value;
                    input.focus({ preventScroll: true });
                    try { input.setSelectionRange(typing.start, typing.end); } catch {}
                }
            }
            const queue = document.getElementById('sgQueue');
            if (queue) queue.innerHTML = buildServiceGalleryQueue();
            refreshServiceGalleryBulk();
            const label = document.getElementById('sgDropLabel');
            if (label) label.textContent = SHOWCASE_CATEGORY_LABELS[sgAdmin.category] || sgAdmin.category;
        }

        async function uploadServiceGalleryFiles(category, filesInput) {
            const files = Array.from(filesInput || []).filter((f) => f && f.size > 0);
            if (!files.length) return;
            const jobs = files.map((file) => {
                const kind = getMediaKind(file.name, file.type);
                const job = { name: file.name, pct: 0, status: 'uploading', message: '', file, kind };
                if (kind !== 'image' && kind !== 'video') { job.status = 'error'; job.message = 'Only photos and videos'; }
                else if (kind === 'video' && file.size > MEDIA_MAX_VIDEO_BYTES) { job.status = 'error'; job.message = 'Too big (max 50 MB)'; }
                return job;
            });
            sgAdmin.queue = jobs.concat(sgAdmin.queue.filter((q) => q.status === 'uploading')).slice(0, 20);
            refreshAdminServiceGalleries();
            const pending = jobs.filter((j) => j.status === 'uploading');
            // positions are reserved before uploading so parallel uploads never share one
            const baseOrder = sgItemsFor(category).reduce((m, it) => Math.max(m, it.order), 0);
            pending.forEach((job, i) => { job.order = baseOrder + i + 1; });
            const runOne = async (job) => {
                let uploadedPath = '';
                try {
                    const blob = job.kind === 'image' ? await optimizeImageForUpload(job.file) : job.file;
                    const storagePath = `gallery/${category}/${buildMediaObjectName(blob)}`;
                    await uploadWithProgress(storagePath, blob, (pct) => {
                        job.pct = pct;
                        const q = document.getElementById('sgQueue');
                        if (q) q.innerHTML = buildServiceGalleryQueue();
                    });
                    uploadedPath = storagePath;
                    const res = await insertServiceGalleryItems([{
                        id: newServiceGalleryId(),
                        kind: 'gallery',
                        category,
                        mediaType: job.kind,
                        src: getMediaPublicUrl(storagePath),
                        source: 'supabase',
                        storagePath,
                        order: job.order,
                        createdAt: new Date().toISOString()
                    }]);
                    if (!res.ok) throw new Error(res.message);
                    job.status = 'done';
                    job.pct = 100;
                } catch (err) {
                    job.status = 'error';
                    job.message = sgFriendlyError(err);
                    // the file went up but its gallery row was refused: do not leave an invisible orphan behind
                    if (uploadedPath) {
                        try { await ensureSupabaseClient().storage.from(MEDIA_BUCKET).remove([uploadedPath]); } catch {}
                    }
                }
                refreshAdminServiceGalleries();
            };
            // up to MEDIA_UPLOAD_CONCURRENCY at a time; one failure never stops the others
            const queue = pending.slice();
            const workers = Array.from({ length: Math.min(MEDIA_UPLOAD_CONCURRENCY, queue.length) }, async () => {
                while (queue.length) await runOne(queue.shift());
            });
            await Promise.all(workers);
            const done = jobs.filter((j) => j.status === 'done').length;
            if (done) showAdminMediaToast(`${done} added to ${SHOWCASE_CATEGORY_LABELS[category] || category}`, 'success');
            if (typeof pushAdminLog === 'function' && done) pushAdminLog(`Gallery upload: ${done} to ${category}`, 'OK');
        }

        // One link per line. https only; YouTube / Cloudinary / other image or video URLs.
        function parseServiceGalleryLinks(text, existing) {
            const ytId = (u) => (typeof getYoutubeVideoId === 'function' ? getYoutubeVideoId(u) : '') || '';
            const known = new Set();
            (existing || []).forEach((it) => {
                const s = String(it.src || '').trim();
                known.add(s);
                known.add(normalizeCloudinaryUrl(s));
                const id = ytId(s);
                if (id) known.add(`yt:${id}`);
            });
            const items = [];
            const invalid = [];
            let duplicates = 0;
            String(text || '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean).forEach((line) => {
                let url;
                try { url = new URL(line); } catch { invalid.push(line); return; }
                if (url.protocol !== 'https:') { invalid.push(line); return; }
                const src = normalizeCloudinaryUrl(url.href);
                const host = url.hostname.replace(/^www\./, '');
                const isYoutube = /(^|\.)youtube\.com$|^youtu\.be$/.test(host);
                const isCloudinary = /(^|\.)res\.cloudinary\.com$/.test(host);
                const videoId = isYoutube ? ytId(src) : '';
                const looksLikeMedia = /\.(jpe?g|png|webp|gif|avif|heic|mp4|webm|mov|m4v)$/i.test(url.pathname);
                // YouTube needs a video (not a channel/playlist); other links must point at a photo or video file
                if ((isYoutube && !videoId) || (isCloudinary && !/\/(image|video)\/upload\//.test(url.pathname)) || (!isYoutube && !isCloudinary && !looksLikeMedia)) {
                    invalid.push(line);
                    return;
                }
                const key = videoId ? `yt:${videoId}` : src;
                if (known.has(key) || known.has(src)) { duplicates += 1; return; }
                known.add(key);
                known.add(src);
                let mediaType = 'image';
                let thumb = '';
                if (isYoutube) {
                    mediaType = 'youtube';
                    const id = typeof getYoutubeVideoId === 'function' ? getYoutubeVideoId(src) : '';
                    thumb = id && typeof getYoutubeThumbUrl === 'function' ? getYoutubeThumbUrl(id) : '';
                } else if (/\/video\/upload\//.test(url.pathname) || /\.(mp4|webm|mov|m4v)$/i.test(url.pathname)) {
                    mediaType = 'video';
                }
                items.push({ src, mediaType, thumb, source: isYoutube ? 'youtube' : isCloudinary ? 'cloudinary' : 'link' });
            });
            return { items, invalid, duplicates };
        }

        async function saveServiceGalleryRows(changed) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const { data, error } = await withTimeout(
                    supabase.from(SERVICE_GALLERY_TABLE).upsert(changed.map(toRemoteRow), { onConflict: 'id' }).select(),
                    10000,
                    'Saving'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error(SG_NOT_ALLOWED);
                changed.forEach((next) => {
                    const i = serviceGallery.items.findIndex((it) => it.id === next.id);
                    if (i >= 0) serviceGallery.items[i] = next;
                });
                serviceGallery.items = sortServiceGalleryItems(serviceGallery.items);
                renderPublicServiceGallery();
                return { ok: true, message: '' };
            } catch (err) {
                return { ok: false, message: sgFriendlyError(err) };
            }
        }

        async function updateServiceGalleryItem(id, patch) {
            const item = serviceGallery.items.find((it) => it.id === id);
            if (!item) return { ok: false, message: 'Item not found' };
            const next = normalizeServiceGalleryItem({ ...item, ...patch });
            if (!next) return { ok: false, message: 'Invalid change' };
            return saveServiceGalleryRows([next]);
        }

        async function setServiceGalleryCover(id) {
            const item = serviceGallery.items.find((it) => it.id === id);
            if (!item) return { ok: false, message: 'Item not found' };
            const changed = sgItemsFor(item.category)
                .filter((it) => it.cover !== (it.id === id))
                .map((it) => ({ ...it, cover: it.id === id }));
            return changed.length ? saveServiceGalleryRows(changed) : { ok: true, message: '' };
        }

        async function moveServiceGalleryItem(id, dir) {
            const item = serviceGallery.items.find((it) => it.id === id);
            if (!item) return { ok: false, message: 'Item not found' };
            const list = sgItemsFor(item.category);
            const i = list.indexOf(item);
            const j = i + (dir < 0 ? -1 : 1);
            if (j < 0 || j >= list.length) return { ok: true, message: '' };
            // renumber the whole category so equal/missing orders can never block a swap
            const ordered = list.slice();
            [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
            const changed = ordered
                .map((it, k) => ({ ...it, order: k + 1 }))
                .filter((it) => it.order !== list.find((o) => o.id === it.id).order);
            return saveServiceGalleryRows(changed);
        }

        async function addServiceGalleryLinks(text) {
            const msgNode = document.getElementById('sgLinksMsg');
            const say = (msg) => { if (msgNode) { msgNode.textContent = msg; msgNode.hidden = !msg; } };
            const { items, invalid, duplicates } = parseServiceGalleryLinks(text, serviceGallery.items);
            const category = sgAdmin.category;
            let maxOrder = sgItemsFor(category).reduce((m, it) => Math.max(m, it.order), 0);
            const records = items.map((it) => ({
                ...it,
                id: newServiceGalleryId(),
                kind: 'gallery',
                category,
                order: (maxOrder += 1),
                createdAt: new Date().toISOString()
            }));
            const res = records.length ? await insertServiceGalleryItems(records) : { ok: true, items: [] };
            const parts = [];
            if (res.ok && records.length) parts.push(`${records.length} added`);
            if (!res.ok) parts.push(`Could not add: ${res.message}`);
            if (invalid.length) parts.push(`${invalid.length} not added (use https:// links to a photo, video or YouTube video)`);
            if (duplicates) parts.push(`${duplicates} already in the gallery`);
            say(parts.join('. '));
            if (res.ok) {
                const box = document.getElementById('sgLinks');
                if (box) box.value = '';
            }
            refreshAdminServiceGalleries();
        }

        // Round 11: link the Media Library to the galleries. The owner ticks files already in
        // the Media Library and adds them to the open service gallery. Library files live at
        // the bucket root, and deleting a gallery item never deletes them (see delete code).
        const sgLib = { selected: new Set() };

        function buildServiceGalleryLibrary() {
            const files = (adminState.data.media || []).filter((m) => (m.kind === 'image' || m.kind === 'video') && m.url);
            const label = SHOWCASE_CATEGORY_LABELS[sgAdmin.category] || sgAdmin.category;
            if (!files.length) return '<p class="sg-lib-note">No photos or videos in the Media Library yet. Upload them in Admin → Media Library, or add them here directly above.</p>';
            const inGallery = new Set(sgItemsFor(sgAdmin.category).map((it) => it.src));
            const tiles = files.map((m) => {
                const added = inGallery.has(m.url);
                const thumb = m.kind === 'video'
                    ? `<video src="${escapeHTML(m.url)}#t=0.5" muted preload="metadata" playsinline></video><span class="sg-kind"><i class="fas fa-play"></i> Video</span>`
                    : `<img src="${escapeHTML(m.url)}" alt="" loading="lazy">`;
                return `<label class="sg-lib-item${added ? ' is-added' : ''}" title="${escapeHTML(m.name)}">
                        <input type="checkbox" data-sg-lib-pick="${escapeHTML(m.url)}"${added ? ' disabled' : ''}${sgLib.selected.has(m.url) ? ' checked' : ''}>
                        ${thumb}
                        ${added ? '<span class="sg-lib-added">In this gallery</span>' : ''}
                    </label>`;
            }).join('');
            const n = sgLib.selected.size;
            return `<div class="sg-lib-grid">${tiles}</div>
                <div class="sg-lib-actions">
                    <button type="button" class="hm-btn is-primary" data-sg-lib="add"${n ? '' : ' disabled'}><i class="fas fa-plus"></i> Add ${n || ''} to ${escapeHTML(label)}</button>
                    <button type="button" class="hm-btn" data-sg-lib="close">Close</button>
                    <span class="sg-lib-msg" id="sgLibMsg" role="status"></span>
                </div>`;
        }

        async function toggleServiceGalleryLibrary(btn) {
            const panel = document.getElementById('sgLibPanel');
            if (!panel) return;
            if (!panel.hidden) { panel.hidden = true; btn?.setAttribute('aria-expanded', 'false'); return; }
            panel.hidden = false;
            btn?.setAttribute('aria-expanded', 'true');
            sgLib.selected.clear();
            panel.innerHTML = '<p class="sg-lib-note">Loading your Media Library...</p>';
            try { await loadMediaFromSupabase(); } catch {}
            if (!panel.hidden) panel.innerHTML = buildServiceGalleryLibrary();
        }

        async function addLibraryFilesToServiceGallery() {
            const files = (adminState.data.media || []).filter((m) => sgLib.selected.has(m.url));
            if (!files.length) return;
            const category = sgAdmin.category;
            let maxOrder = sgItemsFor(category).reduce((m, it) => Math.max(m, it.order), 0);
            const records = files.map((m) => ({
                id: newServiceGalleryId(),
                kind: 'gallery',
                category,
                mediaType: m.kind === 'video' ? 'video' : 'image',
                src: m.url,
                thumb: '',
                source: 'supabase',
                storagePath: m.name, // bucket root: never removed when the gallery item is deleted
                caption: '',
                order: (maxOrder += 1),
                createdAt: new Date().toISOString()
            }));
            const res = await insertServiceGalleryItems(records);
            if (res.ok) sgLib.selected.clear();
            const label = SHOWCASE_CATEGORY_LABELS[category] || category;
            showAdminMediaToast(res.ok ? `${records.length} added to ${label}` : `Could not add: ${res.message}`, res.ok ? 'success' : 'error');
            refreshAdminServiceGalleries();
            const panel = document.getElementById('sgLibPanel');
            if (panel && !panel.hidden) panel.innerHTML = buildServiceGalleryLibrary();
        }

        function sgSourceForUrl(src) {
            if (/res\.cloudinary\.com/i.test(src)) return 'cloudinary';
            if (/youtube\.com|youtu\.be/i.test(src)) return 'youtube';
            if (/\/storage\/v1\/object\/public\/media\//i.test(src)) return 'supabase';
            return 'link';
        }

        // Copies what the website shows today (built-in/local projects + old `installations`
        // rows without a kind) into service galleries. Skips URLs already in a gallery.
        async function importCurrentPhotosToServiceGallery() {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, added: 0, skipped: 0, message: 'Storage is offline.' };
            let legacyRows = [];
            try {
                const { data, error } = await withTimeout(supabase.from(SERVICE_GALLERY_TABLE).select('*'), 10000, 'Loading projects');
                if (error) throw error;
                legacyRows = (Array.isArray(data) ? data : []).map(fromRemoteRow).filter((r) => r && r.kind !== 'gallery');
            } catch (err) {
                return { ok: false, added: 0, skipped: 0, message: sgFriendlyError(err) };
            }
            let legacyProjects = [];
            try { legacyProjects = getProjects(); } catch {}
            const known = new Set();
            serviceGallery.items.forEach((it) => { known.add(it.src); known.add(normalizeCloudinaryUrl(it.src)); });
            const perCategory = {};
            const records = [];
            let skipped = 0;
            legacyRows.concat(legacyProjects).forEach((project) => {
                const category = normalizeShowcaseCategory(project?.category);
                if (!SERVICE_GALLERY_CATEGORIES.includes(category)) return;
                let media = [];
                try { media = getShowcaseMedia(project); } catch {}
                media.forEach((m) => {
                    const src = String(m.mediaSrc || '').trim();
                    if (!src || /^(data|blob|javascript):/i.test(src)) return;
                    let absolute = '';
                    try {
                        const u = new URL(src, `${location.origin}/`); // built-ins use site-relative paths
                        if (!/^https?:$/i.test(u.protocol)) return;
                        // this site's own files stay root-relative so they work on any domain (localhost or hailifugh.com)
                        absolute = u.origin === location.origin ? `${u.pathname}${u.search}` : u.href.replace(/^http:/i, 'https:');
                    } catch { return; }
                    if (known.has(absolute) || known.has(normalizeCloudinaryUrl(absolute))) { skipped += 1; return; }
                    known.add(absolute);
                    const existingCount = sgItemsFor(category).length;
                    perCategory[category] = (perCategory[category] || 0) + 1;
                    records.push({
                        id: newServiceGalleryId(),
                        kind: 'gallery',
                        category,
                        mediaType: ['image', 'video', 'youtube'].includes(m.mediaType) ? m.mediaType : 'image',
                        src: absolute,
                        thumb: m.thumbSrc || '',
                        source: sgSourceForUrl(absolute),
                        storagePath: '',
                        caption: String(project?.title || '').trim().slice(0, 140),
                        cover: existingCount === 0 && perCategory[category] === 1,
                        order: existingCount + perCategory[category],
                        createdAt: new Date().toISOString()
                    });
                });
            });
            if (!records.length) return { ok: true, added: 0, skipped, message: '' };
            const res = await insertServiceGalleryItems(records);
            return res.ok ? { ok: true, added: records.length, skipped, message: '' } : { ok: false, added: 0, skipped, message: res.message };
        }

        // Row first (confirmed with .select()), then the Storage file for our own uploads.
        // Cloudinary/YouTube files are left where they are; they just leave the website.
        async function deleteServiceGalleryItem(id) {
            const item = serviceGallery.items.find((it) => it.id === id);
            if (!item) return { ok: false, message: 'Item not found' };
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const { data, error } = await withTimeout(
                    supabase.from(SERVICE_GALLERY_TABLE).delete().eq('id', id).select('id'),
                    10000,
                    'Deleting'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error(SG_NOT_ALLOWED);
            } catch (err) {
                return { ok: false, message: sgFriendlyError(err) };
            }
            serviceGallery.items = serviceGallery.items.filter((it) => it.id !== id);
            const sharedFile = serviceGallery.items.some((it) => it.storagePath && it.storagePath === item.storagePath);
            // Files added from the Media Library live at the bucket root and may be used elsewhere: never delete those here
            if (item.source === 'supabase' && item.storagePath.startsWith('gallery/') && !sharedFile) {
                try {
                    const { error } = await supabase.storage.from(MEDIA_BUCKET).remove([item.storagePath]);
                    if (error) console.warn('[Galleries] File not removed:', item.storagePath, error.message);
                } catch (err) {
                    console.warn('[Galleries] File not removed:', item.storagePath, err);
                }
            }
            renderShowcase(); // falls back to legacy cards if this was the last item
            scheduleFeaturedRender(null, true);
            if (typeof pushAdminLog === 'function') pushAdminLog(`Gallery item deleted (${item.category})`, 'OK');
            return { ok: true, message: '' };
        }

        async function runServiceGalleryAction(action, id, value) {
            let res = { ok: true, message: '' };
            if (action === 'feature') {
                const item = serviceGallery.items.find((it) => it.id === id);
                if (item) res = await updateServiceGalleryItem(id, { featured: !item.featured });
            } else if (action === 'cover') res = await setServiceGalleryCover(id);
            else if (action === 'left') res = await moveServiceGalleryItem(id, -1);
            else if (action === 'right') res = await moveServiceGalleryItem(id, 1);
            else if (action === 'move') res = await updateServiceGalleryItem(id, { category: value, cover: false, order: sgItemsFor(value).reduce((m, it) => Math.max(m, it.order), 0) + 1 });
            else if (action === 'caption') res = await updateServiceGalleryItem(id, { caption: value });
            if (!res.ok) showAdminMediaToast(`Could not save: ${res.message}`, 'error');
            else if (action === 'move') showAdminMediaToast(`Moved to ${SHOWCASE_CATEGORY_LABELS[value] || value}`, 'success');
            else if (action === 'caption') { showAdminMediaToast('Caption saved', 'success'); return; } // no rebuild: keeps typing elsewhere intact
            refreshAdminServiceGalleries();
        }

        function bindAdminServiceGalleriesOnce() {
            if (window.__sgBound) return;
            window.__sgBound = true;
            document.addEventListener('click', (e) => {
                const btn = e.target.closest && e.target.closest('#sgAdmin [data-sg-lib]');
                if (!btn || btn.disabled) return;
                const action = btn.dataset.sgLib;
                if (action === 'toggle') toggleServiceGalleryLibrary(btn);
                if (action === 'close') toggleServiceGalleryLibrary(document.querySelector('#sgAdmin [data-sg-lib="toggle"]'));
                if (action === 'add') { btn.disabled = true; addLibraryFilesToServiceGallery(); }
            });
            document.addEventListener('change', (e) => {
                const pick = e.target && e.target.closest && e.target.closest('#sgLibPanel [data-sg-lib-pick]');
                if (!pick) return;
                if (pick.checked) sgLib.selected.add(pick.dataset.sgLibPick); else sgLib.selected.delete(pick.dataset.sgLibPick);
                const addBtn = document.querySelector('#sgLibPanel [data-sg-lib="add"]');
                if (addBtn) {
                    const n = sgLib.selected.size;
                    addBtn.disabled = !n;
                    addBtn.innerHTML = `<i class="fas fa-plus"></i> Add ${n || ''} to ${escapeHTML(SHOWCASE_CATEGORY_LABELS[sgAdmin.category] || sgAdmin.category)}`;
                }
            });
            document.addEventListener('submit', (e) => {
                if (!e.target || e.target.id !== 'sgLinksForm') return;
                e.preventDefault();
                addServiceGalleryLinks(document.getElementById('sgLinks')?.value || '');
            });
            document.addEventListener('change', async (e) => {
                if (e.target && e.target.id === 'sgBulkMove' && e.target.value) {
                    const to = e.target.value;
                    const ids = [...sgAdmin.selected];
                    const res = await moveServiceGalleryItems(ids, to);
                    sgAdmin.selected = new Set(res.failed);
                    showAdminMediaToast(`${res.moved} moved to ${SHOWCASE_CATEGORY_LABELS[to] || to}${res.failed.length ? `, ${res.failed.length} could not be moved` : ''}`, res.failed.length ? 'warning' : 'success');
                    refreshAdminServiceGalleries();
                    return;
                }
                const tile = e.target.closest && e.target.closest('#sgAdmin .sg-tile');
                if (!tile) return;
                if (e.target.classList.contains('sg-select')) {
                    if (e.target.checked) sgAdmin.selected.add(tile.dataset.sgId); else sgAdmin.selected.delete(tile.dataset.sgId);
                    sgAdmin.bulkConfirm = false;
                    tile.classList.toggle('is-selected', e.target.checked);
                    refreshServiceGalleryBulk();
                    return;
                }
                if (e.target.classList.contains('sg-caption')) {
                    const item = serviceGallery.items.find((it) => it.id === tile.dataset.sgId);
                    if (item && item.caption !== e.target.value.trim()) runServiceGalleryAction('caption', tile.dataset.sgId, e.target.value.trim());
                }
            });
            document.addEventListener('click', async (e) => {
                const bulkBtn = e.target.closest('#sgBulk [data-sg-action]');
                if (bulkBtn && !bulkBtn.disabled) {
                    const action = bulkBtn.dataset.sgAction;
                    if (action === 'select-all') sgAdmin.selected = new Set(sgItemsFor(sgAdmin.category).map((it) => it.id));
                    if (action === 'select-none') sgAdmin.selected.clear();
                    if (action === 'bulk-delete') sgAdmin.bulkConfirm = true;
                    if (action === 'bulk-cancel') sgAdmin.bulkConfirm = false;
                    if (action === 'bulk-confirm') {
                        sgAdmin.busy = true;
                        refreshServiceGalleryBulk();
                        const ids = [...sgAdmin.selected];
                        ids.forEach((id) => document.querySelector(`#sgGrid .sg-tile[data-sg-id="${CSS.escape(id)}"]`)?.classList.add('is-deleting'));
                        const res = await deleteServiceGalleryItems(ids);
                        sgAdmin.busy = false;
                        sgAdmin.bulkConfirm = false;
                        sgAdmin.selected = new Set(res.failed);
                        const parts = [];
                        if (res.deleted) parts.push(`${res.deleted} deleted from the website`);
                        if (res.failed.length) parts.push(`${res.failed.length} could not be deleted (sign in again and retry)`);
                        showAdminMediaToast(parts.join(', ') || 'Nothing deleted', res.failed.length ? 'error' : 'success');
                    }
                    refreshAdminServiceGalleries();
                    return;
                }
                // Move menu on a tile
                const moveTo = e.target.closest('#sgAdmin .sg-move-menu [data-sg-move-to]');
                if (moveTo) {
                    runServiceGalleryAction('move', moveTo.closest('.sg-tile').dataset.sgId, moveTo.dataset.sgMoveTo);
                    return;
                }
                const opener = e.target.closest('#sgAdmin [data-sg-action="move-open"]');
                document.querySelectorAll('#sgGrid .sg-tile.is-moving').forEach((t) => {
                    if (!opener || t !== opener.closest('.sg-tile')) {
                        t.classList.remove('is-moving');
                        t.querySelector('[data-sg-action="move-open"]')?.setAttribute('aria-expanded', 'false');
                    }
                });
                if (opener) {
                    const t = opener.closest('.sg-tile');
                    const open = t.classList.toggle('is-moving');
                    opener.setAttribute('aria-expanded', String(open));
                    if (open) t.querySelector('[data-sg-move-to]')?.focus({ preventScroll: true });
                    return;
                }
                const btn = e.target.closest('#sgAdmin .sg-tile [data-sg-action]');
                if (!btn || btn.disabled) return;
                const action = btn.dataset.sgAction;
                const tileNode = btn.closest('.sg-tile');
                const id = tileNode.dataset.sgId;
                if (['feature', 'cover', 'left', 'right'].includes(action)) { runServiceGalleryAction(action, id); return; }
                if (action === 'ask-delete') {
                    document.querySelectorAll('#sgGrid .sg-tile.is-confirming').forEach((t) => t.classList.remove('is-confirming'));
                    sgAdmin.confirming = id;
                    tileNode.classList.add('is-confirming');
                    tileNode.querySelector('[data-sg-action="confirm-delete"]')?.focus({ preventScroll: true });
                    return;
                }
                if (action === 'cancel-delete') { sgAdmin.confirming = ''; tileNode.classList.remove('is-confirming'); return; }
                if (action === 'confirm-delete') {
                    if (tileNode.classList.contains('is-deleting')) return;
                    tileNode.classList.add('is-deleting');
                    deleteServiceGalleryItem(id).then((res) => {
                        sgAdmin.confirming = '';
                        if (!res.ok) {
                            tileNode.classList.remove('is-deleting', 'is-confirming');
                            showAdminMediaToast(`Could not delete: ${res.message}`, 'error');
                            return;
                        }
                        tileNode.classList.add('is-removed');
                        showAdminMediaToast('Deleted from the website', 'success');
                        setTimeout(refreshAdminServiceGalleries, 380);
                    });
                }
            });
            document.addEventListener('change', (e) => {
                if (e.target && e.target.id === 'sgFile') {
                    const files = Array.from(e.target.files || []);
                    e.target.value = '';
                    uploadServiceGalleryFiles(sgAdmin.category, files);
                }
            });
            document.addEventListener('click', async (e) => {
                const tab = e.target.closest('#sgAdmin .sg-tab');
                if (tab) {
                    sgAdmin.category = tab.dataset.sgCat;
                    sgAdmin.confirming = '';
                    sgAdmin.selected.clear();
                    sgAdmin.bulkConfirm = false;
                    refreshAdminServiceGalleries();
                    const libPanel = document.getElementById('sgLibPanel');
                    if (libPanel && !libPanel.hidden) { sgLib.selected.clear(); libPanel.innerHTML = buildServiceGalleryLibrary(); }
                    return;
                }
                const importBtn = e.target.closest('#sgAdmin [data-sg-action="import"]');
                if (importBtn) {
                    if (importBtn.disabled) return;
                    importBtn.disabled = true;
                    const res = await importCurrentPhotosToServiceGallery();
                    importBtn.disabled = false;
                    if (!res.ok) { showAdminMediaToast(`Could not import: ${res.message}`, 'error'); return; }
                    showAdminMediaToast(`Imported ${res.added} photo${res.added === 1 ? '' : 's'}${res.skipped ? ` (${res.skipped} already there)` : ''}`, 'success');
                    const host = document.getElementById('sgAdmin')?.parentElement;
                    if (host) renderAdminServiceGalleries(host);
                    return;
                }
                if (e.target.closest('#sgAdmin [data-sg-action="retry"]')) {
                    await loadServiceGallery(true);
                    const host = document.getElementById('sgAdmin')?.parentElement;
                    if (host) renderAdminServiceGalleries(host);
                }
            });
            ['dragenter', 'dragover'].forEach((type) => document.addEventListener(type, (e) => {
                const drop = e.target.closest && e.target.closest('#sgDrop');
                if (!drop) return;
                e.preventDefault();
                drop.classList.add('is-over');
            }));
            ['dragleave', 'drop'].forEach((type) => document.addEventListener(type, (e) => {
                const drop = e.target.closest && e.target.closest('#sgDrop');
                if (!drop) return;
                e.preventDefault();
                drop.classList.remove('is-over');
                if (type === 'drop' && e.dataTransfer && e.dataTransfer.files.length) uploadServiceGalleryFiles(sgAdmin.category, e.dataTransfer.files);
            }));
        }

        // ---------- Gallery ----------
        function ensureGalleryShell() {
            let gal = document.getElementById('hmGallery');
            if (gal) return gal;
            document.body.insertAdjacentHTML('beforeend', `
                <div class="hm-gal" id="hmGallery" role="dialog" aria-modal="true" aria-labelledby="hmGalTitle" hidden>
                    <div class="hm-gal-top">
                        <div class="hm-gal-heading">
                            <span class="hm-gal-cat" id="hmGalCat"></span>
                            <h3 id="hmGalTitle"></h3>
                        </div>
                        <div class="hm-gal-tools">
                            <span class="hm-gal-counter" id="hmGalCounter" aria-live="polite"></span>
                            <button type="button" class="hm-gal-btn" data-gal="share" aria-label="Share this project"><i class="fas fa-share-nodes"></i></button>
                            <button type="button" class="hm-gal-btn" data-gal="close" aria-label="Close gallery"><i class="fas fa-xmark"></i></button>
                        </div>
                    </div>
                    <div class="hm-gal-stage" id="hmGalStage">
                        <button type="button" class="hm-gal-nav is-prev" data-gal="prev" aria-label="Previous photo"><i class="fas fa-chevron-left"></i></button>
                        <figure class="hm-gal-figure" id="hmGalFigure"></figure>
                        <button type="button" class="hm-gal-nav is-next" data-gal="next" aria-label="Next photo"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="hm-gal-bottom">
                        <p class="hm-gal-desc" id="hmGalDesc"></p>
                        <button type="button" class="hm-gal-quote" data-gal="quote">Get a quote for this <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                    <div class="hm-gal-thumbs" id="hmGalThumbs" role="tablist" aria-label="Photos"></div>
                </div>`);
            return document.getElementById('hmGallery');
        }

        function paintGallery(direction) {
            const p = galleryState.project;
            if (!p) return;
            const media = p.media[galleryState.index];
            const figure = document.getElementById('hmGalFigure');
            figure.classList.remove('is-zoomed', 'from-left', 'from-right');
            figure.innerHTML = buildShowcaseMediaTag(media, media.caption || `${p.title} photo ${galleryState.index + 1}`, { controls: true, eager: true });
            // per-photo caption (service galleries), else the project description
            const desc = document.getElementById('hmGalDesc');
            if (desc) desc.textContent = media.caption || p.description;
            if (direction) {
                void figure.offsetWidth;
                figure.classList.add(direction > 0 ? 'from-right' : 'from-left');
            }
            document.getElementById('hmGalCounter').textContent = `${galleryState.index + 1} / ${p.media.length}`;
            document.querySelectorAll('#hmGalThumbs .hm-gal-thumb').forEach((t, i) => {
                t.classList.toggle('is-active', i === galleryState.index);
                t.setAttribute('aria-selected', i === galleryState.index ? 'true' : 'false');
                if (i === galleryState.index) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
            });
            const single = p.media.length < 2;
            document.querySelectorAll('#hmGallery .hm-gal-nav').forEach((b) => { b.hidden = single; });
            // preload neighbours
            [1, -1].forEach((d) => {
                const n = p.media[(galleryState.index + d + p.media.length) % p.media.length];
                if (n && n.mediaType === 'image') { const img = new Image(); img.src = n.mediaSrc; }
            });
        }

        function openGallery(projectId, startIndex = 0) {
            const p = showcaseState.projects.find((x) => x.id === projectId);
            if (!p) return;
            const gal = ensureGalleryShell();
            galleryState.project = p;
            galleryState.index = Math.max(0, Math.min(startIndex, p.media.length - 1));
            galleryState.lastFocus = document.activeElement;
            document.getElementById('hmGalCat').textContent = SHOWCASE_CATEGORY_LABELS[p.category] || 'Project';
            document.getElementById('hmGalTitle').textContent = p.title;
            document.getElementById('hmGalDesc').textContent = p.description; // paintGallery swaps in per-photo captions
            document.getElementById('hmGalThumbs').innerHTML = p.media.length > 1
                ? p.media.map((m, i) => `<button type="button" class="hm-gal-thumb" data-gal-go="${i}" role="tab" aria-label="Photo ${i + 1}">${m.mediaType === 'image' ? `<img src="${escapeHTML(m.thumbSrc || m.mediaSrc)}" alt="" loading="lazy">` : '<i class="fas fa-play"></i>'}</button>`).join('')
                : '';
            gal.hidden = false;
            document.body.classList.add('modal-open', 'hm-gal-open');
            requestAnimationFrame(() => gal.classList.add('is-open'));
            galleryState.open = true;
            paintGallery(0);
            try { history.replaceState(null, '', `#project=${encodeURIComponent(p.id)}`); } catch {}
            gal.querySelector('[data-gal="close"]').focus();
        }

        function closeGallery() {
            const gal = document.getElementById('hmGallery');
            if (!gal || !galleryState.open) return;
            galleryState.open = false;
            gal.classList.remove('is-open');
            document.body.classList.remove('hm-gal-open');
            if (!document.querySelector('.popup-overlay.active, .review-modal.active')) document.body.classList.remove('modal-open');
            const figure = document.getElementById('hmGalFigure');
            setTimeout(() => { gal.hidden = true; if (figure) figure.innerHTML = ''; }, 260);
            try { if (location.hash.startsWith('#project=')) history.replaceState(null, '', location.pathname + location.search); } catch {}
            if (galleryState.lastFocus && galleryState.lastFocus.focus) galleryState.lastFocus.focus();
        }

        function stepGallery(delta) {
            const p = galleryState.project;
            if (!p || p.media.length < 2) return;
            galleryState.index = (galleryState.index + delta + p.media.length) % p.media.length;
            paintGallery(delta);
        }

        function openGalleryFromHash() {
            const m = String(location.hash || '').match(/^#project=(.+)$/);
            if (!m || galleryState.open) return;
            const id = decodeURIComponent(m[1]);
            if (showcaseState.projects.some((p) => p.id === id)) openGallery(id, 0);
        }

        async function shareGalleryProject() {
            const p = galleryState.project;
            if (!p) return;
            const url = `${location.origin}${location.pathname}#project=${encodeURIComponent(p.id)}`;
            try {
                if (navigator.share) { await navigator.share({ title: p.title, text: `${p.title} by Hailifu Brilliant Installation`, url }); return; }
                await navigator.clipboard.writeText(url);
                showAdminMediaToast('Project link copied', 'success');
            } catch {}
        }

        function bindShowcaseOnce() {
            if (showcaseState.bound) return;
            showcaseState.bound = true;

            document.addEventListener('click', (e) => {
                const filter = e.target.closest('#hmScChips [data-sc-filter]');
                if (filter) {
                    showcaseState.filter = filter.dataset.scFilter;
                    showcaseState.limit = SHOWCASE_PAGE_SIZE;
                    paintShowcaseChips();
                    paintShowcaseGrid(true);
                    return;
                }
                if (e.target.closest('#hmShowcase [data-sc-reset]')) {
                    showcaseState.filter = 'all';
                    showcaseState.query = '';
                    const search = document.getElementById('hmScSearch');
                    if (search) search.value = '';
                    paintShowcaseChips();
                    paintShowcaseGrid(true);
                    return;
                }
                if (e.target.closest('#hmScMore')) {
                    showcaseState.limit += SHOWCASE_PAGE_SIZE;
                    paintShowcaseGrid(false);
                    return;
                }
                const quote = e.target.closest('#hmShowcase [data-sc-quote]');
                if (quote) {
                    e.stopPropagation();
                    window.hailifuOpenQuote(quote.dataset.scQuote);
                    return;
                }
                const card = e.target.closest('#hmShowcase [data-sc-open]');
                if (card) { openGallery(card.dataset.scOpen, 0); return; }

                const gal = e.target.closest('#hmGallery');
                if (!gal) return;
                // the click that ends a swipe must not zoom or close
                if (galleryState.suppressClick && e.target.closest('#hmGalStage') && !e.target.closest('button')) { galleryState.suppressClick = false; return; }
                const go = e.target.closest('[data-gal-go]');
                if (go) { const i = Number(go.dataset.galGo) || 0; const d = i - galleryState.index; galleryState.index = i; paintGallery(d); return; }
                const action = e.target.closest('[data-gal]')?.dataset.gal;
                if (action === 'close') closeGallery();
                else if (action === 'prev') stepGallery(-1);
                else if (action === 'next') stepGallery(1);
                else if (action === 'share') shareGalleryProject();
                else if (action === 'quote') { const cat = galleryState.project?.category; closeGallery(); window.hailifuOpenQuote(cat); }
                else if (e.target.closest('#hmGalFigure img')) {
                    // click to zoom into the clicked point
                    const fig = document.getElementById('hmGalFigure');
                    const img = e.target.closest('img');
                    const r = img.getBoundingClientRect();
                    img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
                    fig.classList.toggle('is-zoomed');
                } else if (e.target.id === 'hmGalStage') closeGallery();
            });

            document.addEventListener('keydown', (e) => {
                const card = e.target.closest && e.target.closest('#hmShowcase [data-sc-open]');
                if (card && (e.key === 'Enter' || e.key === ' ') && !e.target.closest('button')) { e.preventDefault(); openGallery(card.dataset.scOpen, 0); return; }
                if (!galleryState.open) return;
                if (e.key === 'Escape') { e.preventDefault(); closeGallery(); }
                else if (e.key === 'ArrowRight') stepGallery(1);
                else if (e.key === 'ArrowLeft') stepGallery(-1);
                else if (e.key === 'Tab') {
                    const focusables = Array.from(document.querySelectorAll('#hmGallery button:not([hidden])'));
                    if (!focusables.length) return;
                    const first = focusables[0];
                    const last = focusables[focusables.length - 1];
                    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
                }
            });

            document.addEventListener('input', (e) => {
                if (e.target.id !== 'hmScSearch') return;
                showcaseState.query = e.target.value;
                showcaseState.limit = SHOWCASE_PAGE_SIZE;
                paintShowcaseGrid(false);
            });

            // Swipe between photos (round 10): the photo follows the finger, the
            // previous / next photo slides in beside it ("peeks"), a release past
            // ~22% of the width or a quick flick changes photo, anything less springs
            // back. One photo only: it stretches a little and springs back.
            const GAL_GAP = 24;
            const galSwipe = { id: null, x0: 0, y0: 0, dx: 0, axis: '', samples: [], width: 1, settling: false };
            const galReduceMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            function galPeekHTML(media) {
                if (!media) return '';
                const src = media.mediaType === 'image' ? media.mediaSrc : (media.thumbSrc || '');
                return src
                    ? `<img src="${escapeHTML(src)}" alt="" draggable="false">${media.mediaType === 'image' ? '' : '<i class="fas fa-play" aria-hidden="true"></i>'}`
                    : '<i class="fas fa-play" aria-hidden="true"></i>';
            }

            function galPrepPeeks() {
                const p = galleryState.project;
                const stage = document.getElementById('hmGalStage');
                const figure = document.getElementById('hmGalFigure');
                if (!p || !stage || !figure) return;
                const many = p.media.length > 1;
                const sr = stage.getBoundingClientRect();
                const fr = figure.getBoundingClientRect();
                galSwipe.width = Math.max(1, fr.width);
                stage.style.setProperty('--gal-w', `${fr.width + GAL_GAP}px`);
                [['is-prev', -1], ['is-next', 1]].forEach(([cls, d]) => {
                    let peek = stage.querySelector(`.hm-gal-peek.${cls}`);
                    if (!peek) {
                        peek = document.createElement('div');
                        peek.className = `hm-gal-peek ${cls}`;
                        peek.setAttribute('aria-hidden', 'true');
                        stage.appendChild(peek);
                    }
                    Object.assign(peek.style, { left: `${fr.left - sr.left}px`, top: `${fr.top - sr.top}px`, width: `${fr.width}px`, height: `${fr.height}px` });
                    peek.innerHTML = many ? galPeekHTML(p.media[(galleryState.index + d + p.media.length) % p.media.length]) : '';
                    peek.hidden = !many;
                });
            }

            function galSetDx(dx, mode) {
                const stage = document.getElementById('hmGalStage');
                if (!stage) return;
                stage.classList.toggle('is-dragging', mode === 'drag');
                stage.classList.toggle('is-settling', mode === 'commit' || mode === 'back');
                stage.classList.toggle('is-springing', mode === 'back');
                stage.style.setProperty('--gal-dx', `${dx}px`);
            }

            function galEndSwipe(commitDir) {
                const stage = document.getElementById('hmGalStage');
                if (!stage) return;
                galSwipe.settling = true;
                const finish = () => {
                    clearTimeout(timer);
                    stage.removeEventListener('transitionend', onEnd);
                    if (commitDir) {
                        const p = galleryState.project;
                        galleryState.index = (galleryState.index + commitDir + p.media.length) % p.media.length;
                        paintGallery(0); // already slid into place: no extra slide-in
                    }
                    galSetDx(0, 'idle');
                    stage.classList.remove('is-swiping');
                    galSwipe.settling = false;
                };
                const onEnd = (e) => { if (e.target === document.getElementById('hmGalFigure')) finish(); };
                const timer = setTimeout(finish, 520);
                stage.addEventListener('transitionend', onEnd);
                galSetDx(commitDir ? -commitDir * (galSwipe.width + GAL_GAP) : 0, commitDir ? 'commit' : 'back');
            }

            document.addEventListener('pointerdown', (e) => {
                if (!galleryState.open || galSwipe.id !== null || galSwipe.settling) return;
                if (e.pointerType === 'mouse' && e.button !== 0) return;
                const stage = e.target.closest && e.target.closest('#hmGalStage');
                if (!stage || e.target.closest('button, iframe, video')) return;
                if (document.getElementById('hmGalFigure')?.classList.contains('is-zoomed')) return;
                Object.assign(galSwipe, { id: e.pointerId, x0: e.clientX, y0: e.clientY, dx: 0, axis: '', samples: [{ x: e.clientX, t: e.timeStamp }] });
                galleryState.suppressClick = false;
            });
            document.addEventListener('pointermove', (e) => {
                if (e.pointerId !== galSwipe.id) return;
                const dx = e.clientX - galSwipe.x0;
                const dy = e.clientY - galSwipe.y0;
                if (!galSwipe.axis) {
                    if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
                    galSwipe.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
                    if (galSwipe.axis === 'y') { galSwipe.id = null; return; }
                    galleryState.suppressClick = true;
                    galPrepPeeks();
                    document.getElementById('hmGalStage')?.classList.add('is-swiping');
                }
                galSwipe.samples.push({ x: e.clientX, t: e.timeStamp });
                if (galSwipe.samples.length > 6) galSwipe.samples.shift();
                const single = (galleryState.project?.media.length || 0) < 2;
                // one photo: rubber band (moves less the further you pull)
                galSwipe.dx = single ? Math.sign(dx) * Math.min(galSwipe.width * 0.25, Math.abs(dx) * 0.35) : dx;
                if (!galReduceMotion()) galSetDx(galSwipe.dx, 'drag');
            });
            const galRelease = (e) => {
                if (e.pointerId !== galSwipe.id) return;
                galSwipe.id = null;
                if (galSwipe.axis !== 'x') return;
                const p = galleryState.project;
                const first = galSwipe.samples[0];
                const last = galSwipe.samples[galSwipe.samples.length - 1];
                const v = last && first && last.t > first.t ? (last.x - first.x) / (last.t - first.t) : 0; // px per ms
                const dx = e.clientX - galSwipe.x0;
                const far = Math.abs(dx) > galSwipe.width * 0.22;
                const flick = Math.abs(v) > 0.45 && Math.abs(dx) > 24 && Math.sign(v) === Math.sign(dx);
                const dir = p && p.media.length > 1 && e.type !== 'pointercancel' && (far || flick) ? (dx < 0 ? 1 : -1) : 0;
                if (galReduceMotion()) {
                    document.getElementById('hmGalStage')?.classList.remove('is-swiping');
                    if (dir) stepGallery(dir);
                    return;
                }
                galEndSwipe(dir);
            };
            // a mouse drag on a photo must not start the browser's own image drag (it cancels the swipe)
            document.addEventListener('dragstart', (e) => { if (e.target.closest && e.target.closest('#hmGalStage')) e.preventDefault(); });
            document.addEventListener('pointerup', galRelease);
            document.addEventListener('pointercancel', galRelease);

            // Play video covers on hover (desktop)
            document.addEventListener('mouseover', (e) => {
                const card = e.target.closest && e.target.closest('#hmShowcase .hm-sc-card');
                const video = card && card.querySelector('.hm-sc-media video');
                if (video && video.paused) video.play().catch(() => {});
            });
            document.addEventListener('mouseout', (e) => {
                const card = e.target.closest && e.target.closest('#hmShowcase .hm-sc-card');
                if (!card || (e.relatedTarget && card.contains(e.relatedTarget))) return;
                const video = card.querySelector('.hm-sc-media video');
                if (video) video.pause();
            });

            window.addEventListener('hashchange', openGalleryFromHash);
        }

        function getProjectIsolatedMediaItems(item) {
            const fromDataset = parseMediaItemsFromDataset(item);
            if (fromDataset.length) return fromDataset;

            const id = String(item?.dataset?.generatedProjectId || '').trim();
            if (id) {
                const projects = getProjects();
                const base = projects.find((p) => String(p?.id || '') === id);
                if (base) {
                    const baseItems = Array.isArray(base.mediaItems)
                        ? base.mediaItems.map(normalizeMediaItem).filter(Boolean)
                        : [];

                    const baseSingle = base.mediaSrc
                        ? [{ mediaSrc: String(base.mediaSrc), mediaType: String(base.mediaType || 'image'), thumbSrc: String(base.thumbSrc || '') }]
                        : [];

                    const combined = [...baseItems, ...baseSingle]
                        .map(normalizeMediaItem)
                        .filter(Boolean);

                    const seen = new Set();
                    return combined.filter((m) => {
                        const key = `${m.mediaType}::${m.mediaSrc}`;
                        if (seen.has(key)) return false;
                        seen.add(key);
                        return true;
                    });
                }
            }

            const src = String(item?.dataset?.mediaSrc || '').trim();
            if (src) {
                return [{
                    mediaSrc: src,
                    mediaType: String(item?.dataset?.mediaType || 'image').trim().toLowerCase() || 'image',
                    thumbSrc: ''
                }].map(normalizeMediaItem).filter(Boolean);
            }

            return [];
        }

        function openShowcaseMediaRoom(startEl) {
            if (!startEl) return;

            const title = startEl.querySelector('.showcase-title')?.textContent?.trim()
                || startEl.querySelector('.showcase-placeholder span')?.textContent?.trim()
                || 'Project';

            const mediaItems = getProjectIsolatedMediaItems(startEl);
            if (!mediaItems.length) return;

            const startSrc = String(startEl?.dataset?.mediaSrc || '').trim();
            const startIndex = startSrc
                ? Math.max(0, mediaItems.findIndex((m) => String(m?.mediaSrc || '') === startSrc))
                : 0;

            const playlist = mediaItems.map((m) => ({ mediaItem: m, title }));
            setProjectLightboxPlaylist(playlist, startIndex);
            openProjectLightbox(playlist[startIndex].mediaItem, playlist[startIndex].title);
        }

        function openServiceCategoryMediaRoom(categoryKey) {
            const normalized = String(categoryKey || '').toLowerCase().trim();
            if (!normalized) return;

            const categoryMap = {
                autogate: 'gates'
            };

            const resolved = categoryMap[normalized] || normalized;

            const labelMap = {
                cctv: 'CCTV Installation',
                electrical: 'Electrical Services',
                gates: 'Auto Gate Service',
                autogate: 'Auto Gate Service',
                solar: 'Solar Energy'
            };

            const serviceLabel = labelMap[normalized] || labelMap[resolved] || 'Service';
            const projects = getProjects();
            const matches = projects
                .filter((p) => p && p.services && String(p.category || '').toLowerCase().trim() === resolved)
                .filter((p) => p.mediaSrc || (Array.isArray(p.mediaItems) && p.mediaItems.length));

            const playlist = [];
            matches.forEach((p) => {
                const titlePart = String(p?.title || '').trim();
                const entryTitle = titlePart ? `${serviceLabel}: ${titlePart}` : serviceLabel;
                const items = Array.isArray(p.mediaItems) ? p.mediaItems.map(normalizeMediaItem).filter(Boolean) : [];
                const single = p.mediaSrc
                    ? [{ mediaSrc: String(p.mediaSrc), mediaType: String(p.mediaType || 'image'), thumbSrc: String(p.thumbSrc || '') }].map(normalizeMediaItem).filter(Boolean)
                    : [];

                [...items, ...single].forEach((m) => {
                    if (!m || !m.mediaSrc) return;
                    playlist.push({ mediaItem: m, title: entryTitle });
                });
            });

            if (!playlist.length) return;

            const seen = new Set();
            const unique = playlist.filter((entry) => {
                const m = entry?.mediaItem;
                const key = `${m?.mediaType || ''}::${m?.mediaSrc || ''}`;
                if (!m || !m.mediaSrc) return false;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            if (!unique.length) return;
            setProjectLightboxPlaylist(unique, 0);
            openProjectLightbox(unique[0].mediaItem, unique[0].title);
        }

        window.openMediaRoom = function openMediaRoom(categoryKey) {
            try { openServiceCategoryMediaRoom(categoryKey); } catch {}
        };

        function syncFeaturedLoopNodes() {
            featuredLoop = document.getElementById('featuredLoop');
            featuredLoopTrack = document.getElementById('featuredLoopTrack');
            featuredLoopDots = document.getElementById('featuredLoopDots');
            featuredLoopPrev = document.getElementById('featuredLoopPrev');
            featuredLoopNext = document.getElementById('featuredLoopNext');
            featuredLoopSlides = featuredLoop
                ? Array.from(featuredLoop.querySelectorAll('.featured-loop-slide'))
                : [];
        }

        function setFeaturedLoopTransitionEnabled(enabled) {
            if (!featuredLoop) return;
            featuredLoop.classList.toggle('no-transition', !enabled);
        }

        function updateFeaturedLoopDots() {
            if (!featuredLoopDots) return;
            const dots = Array.from(featuredLoopDots.querySelectorAll('.featured-loop-dot'));
            if (!dots.length) return;
            const active = featuredLoopCount
                ? ((featuredLoopIndex % featuredLoopCount) + featuredLoopCount) % featuredLoopCount
                : 0;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === active);
            });
        }

        function setFeaturedLoopIndex(nextIndex, opts = {}) {
            const { animate = true } = opts;
            if (!featuredLoopSlides.length) return;
            if (featuredLoopCount <= 0) return;
            if (!featuredLoopTrack) {
                syncFeaturedLoopNodes();
            }
            if (!featuredLoopTrack) return;
            const normalized = ((Number(nextIndex) || 0) % featuredLoopCount + featuredLoopCount) % featuredLoopCount;
            featuredLoopIndex = normalized;
            setFeaturedLoopTransitionEnabled(animate);

            if (featuredLoopPrefersNativeScroll()) {
                const viewport = featuredLoop ? featuredLoop.querySelector('.featured-loop-viewport') : null;
                const slide = featuredLoopSlides[featuredLoopIndex];
                if (viewport && slide && typeof viewport.scrollTo === 'function') {
                    try {
                        const maxLeft = Math.max(0, Number(viewport.scrollWidth || 0) - Number(viewport.clientWidth || 0));
                        const targetLeft = Math.max(0, Math.min(maxLeft, Number(slide.offsetLeft || 0)));
                        viewport.scrollTo({
                            left: targetLeft,
                            behavior: animate ? 'smooth' : 'auto'
                        });
                    } catch {}
                }
            } else {
                try {
                    featuredLoopTrack.style.transform = `translate3d(${-featuredLoopIndex * 100}%, 0, 0)`;
                } catch {}
            }

            featuredLoopSlides.forEach((slide, idx) => {
                const isActive = idx === featuredLoopIndex;
                slide.classList.toggle('is-active', isActive);
                const videos = Array.from(slide.querySelectorAll('video'));
                videos.forEach((video) => {
                    if (isActive) {
                        try {
                            video.muted = true;
                            video.defaultMuted = true;
                            video.volume = 0;
                            video.playsInline = true;
                            video.setAttribute('muted', '');
                            video.setAttribute('playsinline', '');
                            video.setAttribute('webkit-playsinline', '');
                            const playPromise = video.play();
                            if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
                        } catch {}
                    } else {
                        try { video.pause(); } catch {}
                    }
                });
            });

            updateFeaturedLoopDots();
            markFeaturedMediaLoaded();
        }

        function stopFeaturedLoop() {
            if (featuredLoopTimer) {
                clearInterval(featuredLoopTimer);
                featuredLoopTimer = null;
            }
        }

        function startFeaturedLoop() {
            stopFeaturedLoop();
            if (featuredLoopCount <= 1) return;
            if (document.hidden) return;
            if (!featuredLoopIsVisible) return;
            if (!featuredLoopObserver && !featuredLoopIsProbablyVisible()) return;
            featuredLoopTimer = setInterval(() => {
                advanceFeaturedLoop(1);
            }, 2000);
        }

        function advanceFeaturedLoop(delta) {
            if (featuredLoopCount <= 1) return;
            const step = delta >= 0 ? 1 : -1;
            const next = (featuredLoopIndex + step + featuredLoopCount) % featuredLoopCount;
            setFeaturedLoopIndex(next, { animate: true });
        }

        function ensureFeaturedLoopBindings() {
            if (!featuredLoop) return;
            if (featuredLoopHasBindings && featuredLoopBoundNode === featuredLoop) return;
            featuredLoopHasBindings = true;
            featuredLoopBoundNode = featuredLoop;

            const viewport = featuredLoop.querySelector('.featured-loop-viewport');
            const swipeTarget = viewport || featuredLoop;

            // The loop is rebuilt when galleries load: watch the NEW node, not the removed one
            // (the removed one reports "not visible" and stopped the loop for good).
            if (featuredLoopObserver) {
                try { featuredLoopObserver.disconnect(); } catch {}
                featuredLoopObserver = null;
                featuredLoopIsVisible = featuredLoopIsProbablyVisible();
            }
            if (viewport && typeof IntersectionObserver !== 'undefined') {
                featuredLoopObserver = new IntersectionObserver((entries) => {
                    const entry = Array.isArray(entries) ? entries[0] : null;
                    const nextVisible = !!entry && entry.isIntersecting && (Number(entry.intersectionRatio || 0) > 0);
                    featuredLoopIsVisible = nextVisible;

                    if (featuredLoopPrefersNativeScroll()) {
                        try {
                            viewport.style.scrollSnapType = nextVisible ? '' : 'none';
                        } catch {}
                    }

                    if (nextVisible) startFeaturedLoop();
                    else stopFeaturedLoop();
                }, { threshold: [0, 0.15] });

                try { featuredLoopObserver.observe(featuredLoop); } catch {}
            }

            if (featuredLoopPrefersNativeScroll() && viewport) {
                let scrollRaf = 0;
                const onScroll = () => {
                    if (scrollRaf) return;
                    scrollRaf = requestAnimationFrame(() => {
                        scrollRaf = 0;
                        if (!featuredLoopSlides.length) return;
                        const viewportLeft = viewport.getBoundingClientRect().left;
                        let bestIdx = 0;
                        let bestDist = Infinity;
                        featuredLoopSlides.forEach((slide, idx) => {
                            const rect = slide.getBoundingClientRect();
                            const dist = Math.abs(rect.left - viewportLeft);
                            if (dist < bestDist) {
                                bestDist = dist;
                                bestIdx = idx;
                            }
                        });
                        if (bestIdx !== featuredLoopIndex) {
                            featuredLoopIndex = bestIdx;
                            featuredLoopSlides.forEach((slide, idx) => {
                                slide.classList.toggle('is-active', idx === featuredLoopIndex);
                            });
                            updateFeaturedLoopDots();
                        }
                    });
                };

                viewport.addEventListener('scroll', onScroll, { passive: true });
                return;
            }

            const resetSwipe = () => {
                featuredLoopSwipeActive = false;
                featuredLoopSwipeLocked = false;
                featuredLoopSwipeDeltaX = 0;
                featuredLoopSwipeWidth = 0;
                featuredLoopSwipePointerId = null;
            };

            const applySwipeTransform = () => {
                if (!featuredLoopTrack) return;
                const w = featuredLoopSwipeWidth || 0;
                if (!w) return;
                const base = -featuredLoopIndex * w;
                try {
                    featuredLoopTrack.style.transform = `translate3d(${base + featuredLoopSwipeDeltaX}px, 0, 0)`;
                } catch {}
            };

            const onSwipeDown = (e) => {
                if (featuredLoopCount <= 1) return;
                if (!e) return;
                if (e.pointerType === 'mouse' && e.button !== 0) return;

                syncFeaturedLoopNodes();
                const w = Number(viewport?.clientWidth || featuredLoop?.clientWidth || 0);
                if (!w) return;

                featuredLoopSwipeActive = true;
                featuredLoopSwipeLocked = false;
                featuredLoopSwipeStartX = Number(e.clientX || 0);
                featuredLoopSwipeStartY = Number(e.clientY || 0);
                featuredLoopSwipeDeltaX = 0;
                featuredLoopSwipeWidth = w;
                featuredLoopSwipePointerId = e.pointerId;

                stopFeaturedLoop();
                setFeaturedLoopTransitionEnabled(false);
            };

            const onSwipeMove = (e) => {
                if (!featuredLoopSwipeActive) return;
                if (!e) return;
                if (featuredLoopSwipePointerId != null && e.pointerId !== featuredLoopSwipePointerId) return;

                const dx = Number(e.clientX || 0) - featuredLoopSwipeStartX;
                const dy = Number(e.clientY || 0) - featuredLoopSwipeStartY;

                if (!featuredLoopSwipeLocked) {
                    if (Math.abs(dx) < 10) return;
                    if (Math.abs(dy) > Math.abs(dx)) {
                        resetSwipe();
                        startFeaturedLoop();
                        return;
                    }
                    featuredLoopSwipeLocked = true;
                }

                featuredLoopSwipeDeltaX = dx;
                try { e.preventDefault(); } catch {}
                applySwipeTransform();
            };

            const onSwipeUp = (e) => {
                if (!featuredLoopSwipeActive) return;
                if (featuredLoopSwipePointerId != null && e?.pointerId !== featuredLoopSwipePointerId) return;

                const w = featuredLoopSwipeWidth || 0;
                const dx = featuredLoopSwipeDeltaX || 0;
                const threshold = w ? w * 0.18 : 0;

                setFeaturedLoopTransitionEnabled(true);

                if (featuredLoopSwipeLocked && threshold && Math.abs(dx) > threshold) {
                    const dir = dx < 0 ? 1 : -1;
                    const next = (featuredLoopIndex + dir + featuredLoopCount) % featuredLoopCount;
                    setFeaturedLoopIndex(next, { animate: true });
                } else {
                    setFeaturedLoopIndex(featuredLoopIndex, { animate: true });
                }

                resetSwipe();
                startFeaturedLoop();
            };

            if (swipeTarget) {
                swipeTarget.addEventListener('pointerdown', onSwipeDown, { passive: true });
                swipeTarget.addEventListener('pointermove', onSwipeMove, { passive: false });
                swipeTarget.addEventListener('pointerup', onSwipeUp, { passive: true });
                swipeTarget.addEventListener('pointercancel', onSwipeUp, { passive: true });
                swipeTarget.addEventListener('lostpointercapture', onSwipeUp, { passive: true });
            }

            featuredLoop.addEventListener('pointerenter', () => {
                stopFeaturedLoop();
            });

            featuredLoop.addEventListener('pointerleave', () => {
                startFeaturedLoop();
            });

            if (featuredLoopPrev) {
                featuredLoopPrev.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    advanceFeaturedLoop(-1);
                    startFeaturedLoop();
                });
            }

            if (featuredLoopNext) {
                featuredLoopNext.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    advanceFeaturedLoop(1);
                    startFeaturedLoop();
                });
            }

            if (featuredLoopDots) {
                featuredLoopDots.addEventListener('click', (e) => {
                    const dot = e.target.closest('.featured-loop-dot');
                    if (!dot) return;
                    const dots = Array.from(featuredLoopDots.querySelectorAll('.featured-loop-dot'));
                    const idx = dots.indexOf(dot);
                    if (idx < 0) return;
                    stopFeaturedLoop();
                    setFeaturedLoopIndex(idx, { animate: true });
                    startFeaturedLoop();
                });
            }

            if (!featuredLoopVisibilityBound) {
                featuredLoopVisibilityBound = true;
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) stopFeaturedLoop();
                    else startFeaturedLoop();
                });
            }
        }

        function renderFeaturedWork(projectsOverride) {
            if (!featuredBento) return;

            const categoryLabelMap = {
                cctv: 'CCTV',
                electrical: 'Electrical',
                airconditioning: 'Air Conditioner',
                gates: 'Automated Gates',
                solar: 'Solar Energy',
                fencing: 'Electric Fence',
                smarthome: 'Smart Home',
                blindcurtain: 'Window Blinds'
            };

            const projects = Array.isArray(projectsOverride) ? projectsOverride : getProjects();
            const toTimestamp = (project) => Number(project?.timestamp) || (Date.parse(project?.createdAt || '') || 0);
            const normalizeFeaturedProject = (project) => {
                if (!project || typeof project !== 'object') return null;
                const selectedMediaList = getProjectSurfaceMediaList(project, 'featured');
                if (!selectedMediaList.length) return [];
                return selectedMediaList
                    .map((selectedMedia) => {
                        if (!selectedMedia || !selectedMedia.mediaSrc) return null;
                        return {
                            ...project,
                            mediaSrc: selectedMedia.mediaSrc,
                            mediaType: String(selectedMedia.mediaType || 'image') || 'image',
                            thumbSrc: selectedMedia.thumbSrc || ''
                        };
                    })
                    .filter(Boolean);
            };

            const normalizeShowcaseProject = (project) => {
                if (!project || typeof project !== 'object') return null;
                const selectedMedia = getProjectSurfaceMedia(project, 'showcase');
                if (!selectedMedia || !selectedMedia.mediaSrc) return null;
                return {
                    ...project,
                    mediaSrc: selectedMedia.mediaSrc,
                    mediaType: String(selectedMedia.mediaType || 'image') || 'image',
                    thumbSrc: selectedMedia.thumbSrc || ''
                };
            };

            const featuredPool = projects
                .flatMap((project) => normalizeFeaturedProject(project) || [])
                .filter(Boolean);
            const showcasePool = projects
                .map(normalizeShowcaseProject)
                .filter(Boolean);

            const featured = featuredPool
                .filter((p) => isVisibilityEnabled(p, 'showInFeatured', 'featured'))
                .sort((a, b) => toTimestamp(b) - toTimestamp(a));

            let featuredList = [...featured];
            if (featuredList.length < 5) {
                const featuredIds = new Set(
                    featuredList
                        .map((p) => `${String(p?.id || '').trim()}::${getMediaKey({ mediaSrc: p?.mediaSrc, mediaType: p?.mediaType, thumbSrc: p?.thumbSrc })}`)
                        .filter(Boolean)
                );
                const fallback = showcasePool
                    .filter((p) => isVisibilityEnabled(p, 'showInShowcase', 'showcase'))
                    .filter((p) => {
                        const key = `${String(p?.id || '').trim()}::${getMediaKey({ mediaSrc: p?.mediaSrc, mediaType: p?.mediaType, thumbSrc: p?.thumbSrc })}`;
                        return key && !featuredIds.has(key);
                    })
                    .sort((a, b) => toTimestamp(b) - toTimestamp(a));
                featuredList = [...featuredList, ...fallback];
            }

            stopFeaturedLoop();
            featuredLoopHasBindings = false;
            featuredLoopBoundNode = null;
            featuredLoopIndex = 0;
            featuredLoopCount = featuredList.length;

            if (!featuredList.length) {
                const fallbackMedia = getSectionAssignedMedia('featured.defaultFallback');
                if (fallbackMedia?.url) {
                    featuredList = [{
                        id: `featured_fallback_${Date.now()}`,
                        title: 'Featured Highlight',
                        description: 'Assigned from Premium Media Library.',
                        category: 'featured',
                        mediaSrc: fallbackMedia.url,
                        mediaType: fallbackMedia.type || 'image',
                        thumbSrc: '',
                        createdAt: new Date().toISOString()
                    }];
                    featuredLoopCount = 1;
                }
            }

            if (!featuredList.length) {
                featuredBento.innerHTML = `
                    <div class="featured-loop" id="featuredLoop">
                        <div class="featured-loop-viewport">
                            <div class="featured-loop-track" id="featuredLoopTrack">
                                <article class="featured-card featured-loop-slide is-empty is-active">
                                    <div class="featured-card-content">
                                        <div class="featured-card-category"><i class="fas fa-star"></i> Featured</div>
                                        <div class="featured-card-title">More work coming soon</div>
                                        <div class="featured-card-description">Fresh installs are on the way. Check back shortly.</div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                `;
                return;
            }

            const normalizeCategory = (raw) => String(raw || '').toLowerCase().trim();
            const buildSlideMedia = (project) => {
                const safeTitle = (project.title || 'Project').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const isVideo = project.mediaType === 'video';
                const isYoutube = project.mediaType === 'youtube';
                const mediaSrc = String(project.mediaSrc || project.imageUrl || '').trim();
                const fallbackYoutubeThumb = getYoutubeThumbUrl(getYoutubeVideoId(mediaSrc));
                const youtubeThumb = normalizeCloudinaryUrl(project.thumbSrc || fallbackYoutubeThumb);
                if (isYoutube) return `<img src="${youtubeThumb || ''}" alt="${safeTitle}" loading="lazy" decoding="async">`;

                const normalizedSrc = normalizeCloudinaryUrl(mediaSrc);
                if (isVideo) return `<video src="${normalizedSrc}" muted playsinline webkit-playsinline loop preload="metadata"></video>`;
                return `<img src="${normalizedSrc}" alt="${safeTitle}" loading="lazy" decoding="async">`;
            };

            const buildSlide = (project, idx) => {
                const safeTitle = (project.title || 'Project').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const safeDescription = (project.description || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const categoryKey = normalizeCategory(project.category);
                const categoryLabel = categoryLabelMap[categoryKey] || 'Project';
                const isVideo = project.mediaType === 'video';
                const isYoutube = project.mediaType === 'youtube';
                const mediaMarkup = buildSlideMedia(project);
                const videoBadge = isVideo || isYoutube
                    ? `<div class="video-badge"><i class="fas fa-play-circle"></i> Video</div>`
                    : '';
                const isActiveClass = idx === 0 ? ' is-active' : '';
                return `
                    <article class="featured-card featured-loop-slide${isActiveClass}" data-featured-index="${idx}" data-generated-project-id="${project.id}" data-media-type="${project.mediaType}" data-media-src="${normalizeCloudinaryUrl(String(project.mediaSrc || project.imageUrl || '').trim())}">
                        ${videoBadge}
                        <div class="featured-card-media">${mediaMarkup}</div>
                        <div class="featured-card-content">
                            <div class="featured-card-category project-category"><i class="fas fa-star"></i> ${categoryLabel}</div>
                            <div class="featured-card-title showcase-title">${safeTitle}</div>
                            <div class="featured-card-description showcase-description">${safeDescription}</div>
                        </div>
                    </article>
                `;
            };

            const slides = featuredList.map((project, idx) => buildSlide(project, idx)).join('');
            const dotsMarkup = featuredLoopCount > 1
                ? featuredList.map((_, idx) => {
                    const active = idx === 0 ? ' active' : '';
                    return `<span class="featured-loop-dot${active}"></span>`;
                }).join('')
                : '';

            const navMarkup = featuredLoopCount > 1
                ? `
                    <button class="featured-loop-nav prev" id="featuredLoopPrev" type="button" aria-label="Previous featured project">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="featured-loop-nav next" id="featuredLoopNext" type="button" aria-label="Next featured project">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                `
                : '';

            featuredBento.innerHTML = `
                <div class="featured-loop" id="featuredLoop">
                    <div class="featured-loop-viewport">
                        <div class="featured-loop-track" id="featuredLoopTrack">${slides}</div>
                        ${navMarkup}
                    </div>
                    <div class="featured-loop-dots" id="featuredLoopDots" aria-hidden="true">${dotsMarkup}</div>
                </div>
            `;

            bindHailifuMediaFallback(featuredBento, 'HAILIFU');

            syncFeaturedLoopNodes();
            ensureFeaturedLoopBindings();

            let startIndex = 0;
            if (preferredFeaturedCategoryKey) {
                const matchIdx = featuredList.findIndex((p) => normalizeCategory(p?.category) === preferredFeaturedCategoryKey);
                if (matchIdx >= 0) startIndex = matchIdx;
            }

            setFeaturedLoopIndex(startIndex, { animate: false });
            if (featuredLoopCount > 1) {
                requestAnimationFrame(() => {
                    setFeaturedLoopTransitionEnabled(true);
                    startFeaturedLoop();
                });
            }

            if (!featuredBindingsReady) {
                featuredBindingsReady = true;
                featuredBento.addEventListener('click', (e) => {
                    const card = e.target.closest('.featured-card');
                    if (!card) return;
                    e.preventDefault();
                    openProjectModalFromItem(card);
                });
            }

            markFeaturedMediaLoaded();
            initFeaturedVideoObserver();
            renderAdminLazyLoop();
        }

        function markFeaturedMediaLoaded() {
            if (!featuredLoopSlides.length) return;

            featuredLoopSlides.forEach((slide) => {
                const media = slide.querySelector('.featured-card-media');
                if (!media) return;
                if (media.classList.contains('is-loaded')) return;

                const img = media.querySelector('img');
                if (img) {
                    if (img.complete && img.naturalWidth > 0) {
                        media.classList.add('is-loaded');
                    } else {
                        img.addEventListener('load', () => media.classList.add('is-loaded'), { once: true });
                        img.addEventListener('error', () => media.classList.add('is-loaded'), { once: true });
                    }
                    return;
                }

                const video = media.querySelector('video');
                if (video) {
                    if (video.readyState >= 2) {
                        media.classList.add('is-loaded');
                    } else {
                        video.addEventListener('loadeddata', () => media.classList.add('is-loaded'), { once: true });
                        video.addEventListener('error', () => media.classList.add('is-loaded'), { once: true });
                    }
                    return;
                }

                const frame = media.querySelector('iframe');
                if (frame) {
                    media.classList.add('is-loaded');
                }
            });
        }

        function initFeaturedVideoObserver() {
            if (!featuredBento) return;

            if (featuredVideoObserver) {
                featuredVideoObserver.disconnect();
            }
            if (featuredVideoKickstartCleanup) {
                try { featuredVideoKickstartCleanup(); } catch {}
                featuredVideoKickstartCleanup = null;
            }

            const videos = featuredBento.querySelectorAll('.featured-card video');
            if (!videos.length) return;

            let gestureRetryBound = false;
            const bindGestureRetry = (kickstartVisible) => {
                if (gestureRetryBound) return;
                gestureRetryBound = true;
                window.addEventListener('pointerdown', () => {
                    requestAnimationFrame(kickstartVisible);
                }, { once: true, passive: true });
            };

            const safePlay = (video, kickstartVisible) => {
                if (!video) return;
                try {
                    const parentSlide = video.closest('.featured-loop-slide');
                    if (parentSlide && !parentSlide.classList.contains('is-active')) {
                        try { video.pause(); } catch {}
                        return;
                    }

                    video.muted = true;
                    video.defaultMuted = true;
                    video.volume = 0;
                    video.playsInline = true;
                    video.autoplay = true;
                    video.loop = true;
                    video.setAttribute('muted', '');
                    video.setAttribute('playsinline', '');
                    video.setAttribute('webkit-playsinline', '');
                    video.setAttribute('autoplay', '');

                    if (video.readyState < 2) {
                        if (!video.dataset.featuredLoadRequested) {
                            video.dataset.featuredLoadRequested = '1';
                            try { video.load(); } catch {}
                        }
                    }

                    const playPromise = video.play();
                    if (playPromise && typeof playPromise.catch === 'function') {
                        playPromise.catch(() => {
                            try {
                                video.addEventListener('canplay', () => {
                                    const retry = video.play();
                                    if (retry && typeof retry.catch === 'function') retry.catch(() => {});
                                }, { once: true });
                            } catch {}

                            bindGestureRetry(kickstartVisible);
                        });
                    }
                } catch {
                    bindGestureRetry(kickstartVisible);
                }
            };

            const kickstartVisible = () => {
                try {
                    const viewH = window.innerHeight || document.documentElement.clientHeight || 0;
                    videos.forEach((video) => {
                        const parentSlide = video.closest('.featured-loop-slide');
                        if (parentSlide && !parentSlide.classList.contains('is-active')) {
                            try { video.pause(); } catch {}
                            return;
                        }
                        const rect = video.getBoundingClientRect();
                        const isVisible = rect.bottom > 0 && rect.top < viewH;
                        if (isVisible) {
                            safePlay(video, kickstartVisible);
                        } else {
                            try { video.pause(); } catch {}
                        }
                    });
                } catch {}
            };

            let rafPending = false;
            const requestKickstart = () => {
                if (rafPending) return;
                rafPending = true;
                requestAnimationFrame(() => {
                    rafPending = false;
                    kickstartVisible();
                });
            };

            featuredVideoObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    const parentSlide = video.closest('.featured-loop-slide');
                    if (parentSlide && !parentSlide.classList.contains('is-active')) {
                        try { video.pause(); } catch {}
                        return;
                    }

                    if (entry.isIntersecting) {
                        safePlay(video, kickstartVisible);
                    } else {
                        try { video.pause(); } catch {}
                    }
                });
            }, {
                root: null,
                rootMargin: '200px 0px',
                threshold: 0.1
            });

            videos.forEach((video) => {
                video.preload = 'metadata';
                video.muted = true;
                video.defaultMuted = true;
                video.playsInline = true;
                video.autoplay = true;
                video.loop = true;
                video.setAttribute('playsinline', '');
                video.setAttribute('webkit-playsinline', '');
                featuredVideoObserver.observe(video);
            });

            window.addEventListener('scroll', requestKickstart, { passive: true });
            window.addEventListener('resize', requestKickstart, { passive: true });
            document.addEventListener('visibilitychange', requestKickstart, { passive: true });
            featuredVideoKickstartCleanup = () => {
                window.removeEventListener('scroll', requestKickstart);
                window.removeEventListener('resize', requestKickstart);
                document.removeEventListener('visibilitychange', requestKickstart);
            };

            requestAnimationFrame(kickstartVisible);
        }

        // ------------------------------------------------------------------
        // CHAT ASSISTANT (rebuilt 2026-09-29, round 7)
        // Same lead flow as before: service -> detail -> name -> phone -> location,
        // saved with addLead() (Admin > Leads), then a WhatsApp hand-off.
        // New: tap-to-answer chips, typing delay, progress bar, Back, quick answers.
        // Everything the visitor types is inserted as text (never as HTML).
        // ------------------------------------------------------------------
        const assistantCatalog = {
            cctv: { label: 'CCTV', icon: 'fa-video', question: 'How many cameras are you thinking of?', options: ['1 to 4', '5 to 8', '9 to 16', 'Not sure yet'] },
            gates: { label: 'Automated Gates', icon: 'fa-door-open', question: 'Is it a sliding gate or a swing gate?', options: ['Sliding gate', 'Swing gate', 'Not sure yet'] },
            electrical: { label: 'Electrical Wiring', icon: 'fa-bolt', question: 'Is this new wiring or fixing an existing fault?', options: ['New wiring', 'Fix a fault', 'Upgrade or extension'] },
            networking: { label: 'Networking', icon: 'fa-network-wired', question: 'Is it new cabling or Wi-Fi, or fixing an existing network?', options: ['New cabling', 'Wi-Fi coverage', 'Fix a network problem'] },
            fencing: { label: 'Electric Fence', icon: 'fa-shield-halved', question: 'Where is the fence going?', options: ['Home', 'Office or shop', 'Industrial site'] },
            airconditioning: { label: 'Air Conditioning', icon: 'fa-snowflake', question: 'Installation, servicing or repair?', options: ['New installation', 'Servicing', 'Repair'] },
            solar: { label: 'Solar Energy', icon: 'fa-solar-panel', question: 'New system, upgrade or maintenance?', options: ['New system', 'Upgrade or batteries', 'Maintenance'] },
            blindcurtain: { label: 'Smart Window Solutions', icon: 'fa-table-columns', question: 'What would you like?', options: ['Motorised blinds', 'Automated curtains', 'Full smart window setup'] }
        };
        // Answers only use facts already on the site (areas, call-back time, quotes).
        const assistantFaq = {
            areas: { label: 'Which areas do you cover?', answer: 'We install across Accra and Tema. Tell us your area when we ask and we will confirm.' },
            speed: { label: 'How fast can you respond?', answer: 'Leave your details here and our head engineer calls you within 30 minutes to agree a visit.' },
            price: { label: 'How much does it cost?', answer: 'Every site is different, so the price comes after a few quick questions. Pick a service below and the engineer will call you with a clear quote.' }
        };
        const ASSISTANT_STEPS = ['service', 'detail', 'name', 'phone', 'location'];
        const WHATSAPP_NUMBER = '233550997270';

        const assistantState = {
            step: 'service',
            serviceKey: '',
            serviceLabel: '',
            serviceAnswer: '',
            name: '',
            phone: '',
            location: '',
            busy: false
        };
        const chatReplies = document.getElementById('r7ChatReplies');
        const chatBackBtn = document.getElementById('r7ChatBack');
        const chatProgress = document.getElementById('r7ChatProgress');
        const chatForm = document.getElementById('r7ChatForm');
        const chatTeaser = document.getElementById('r7ChatTeaser');
        const chatReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let chatQueue = Promise.resolve();
        let chatCloseTimer = null;

        function resetAssistant() {
            Object.assign(assistantState, { step: 'service', serviceKey: '', serviceLabel: '', serviceAnswer: '', name: '', phone: '', location: '' });
        }

        function normalizeService(text) {
            const t = (text || '').toLowerCase();
            if (assistantCatalog[t]) return t;
            if (t.includes('cctv') || t.includes('camera')) return 'cctv';
            if (t.includes('network') || t.includes('wifi') || t.includes('wi-fi') || t.includes('cabling') || /\blan\b/.test(t)) return 'networking';
            if (t.includes('gate')) return 'gates';
            if (t.includes('fenc')) return 'fencing';
            if (t.includes('air conditioning') || t.includes('aircondition') || t.includes('aircon') || t.includes('conditioner') || /\bac\b/.test(t)) return 'airconditioning';
            if (t.includes('electric') || t.includes('wiring')) return 'electrical';
            if (t.includes('solar') || t.includes('panel') || t.includes('inverter')) return 'solar';
            if (t.includes('curtain') || t.includes('blind') || t.includes('window')) return 'blindcurtain';
            return '';
        }

        function normalizePhone(text) {
            const digits = String(text || '').trim().replace(/[^0-9+]/g, '');
            const bare = digits.replace(/\+/g, '');
            if (digits.startsWith('+233') && bare.length === 12) return digits;
            if (bare.startsWith('233') && bare.length === 12) return `+${bare}`;
            if (bare.startsWith('0') && bare.length === 10) return bare;
            if (!digits.startsWith('+') && bare.length === 9) return `0${bare}`;
            if (digits.startsWith('+') && bare.length >= 10 && bare.length <= 15) return digits;
            return '';
        }

        function chatSleep(ms) { return new Promise((resolve) => setTimeout(resolve, chatReduceMotion ? 0 : ms)); }

        // Build a message bubble. `parts` is an array of strings (text) or {html} for trusted markup.
        function chatBubble(role, parts, extraClass = '') {
            const node = document.createElement('div');
            node.className = `message ${role === 'user' ? 'user' : 'bot'} r7-msg${extraClass ? ` ${extraClass}` : ''}`;
            (Array.isArray(parts) ? parts : [parts]).forEach((part) => {
                if (part && typeof part === 'object' && part.html) node.insertAdjacentHTML('beforeend', part.html);
                else node.appendChild(document.createTextNode(String(part || '')));
            });
            chatbotMessages.insertBefore(node, typingIndicator || null);
            scrollChatToBottom();
            return node;
        }

        // Bot messages go through a queue so typing dots + order stay correct.
        function botSay(parts, extraClass) {
            chatQueue = chatQueue.then(async () => {
                const length = (Array.isArray(parts) ? parts : [parts]).map((p) => (typeof p === 'string' ? p : '')).join('').length;
                setTyping(true);
                scrollChatToBottom();
                await chatSleep(Math.min(1100, 420 + length * 9));
                setTyping(false);
                chatBubble('bot', parts, extraClass);
            });
            return chatQueue;
        }

        function setReplies(groups) {
            if (!chatReplies) return;
            chatReplies.innerHTML = '';
            (groups || []).forEach((group) => {
                if (!group || !group.items || !group.items.length) return;
                const wrap = document.createElement('div');
                wrap.className = `r7-reply-group${group.kind ? ` is-${group.kind}` : ''}`;
                if (group.title) {
                    const t = document.createElement('span');
                    t.className = 'r7-reply-title';
                    t.textContent = group.title;
                    wrap.appendChild(t);
                }
                group.items.forEach((item, i) => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'r7-reply';
                    btn.style.setProperty('--i', String(i));
                    btn.dataset.reply = item.value;
                    if (item.faq) btn.dataset.faq = item.faq;
                    if (item.action) btn.dataset.action = item.action;
                    if (item.icon) btn.insertAdjacentHTML('afterbegin', `<i class="${item.icon.includes(' ') ? item.icon : `fas ${item.icon}`}" aria-hidden="true"></i>`);
                    btn.appendChild(document.createTextNode(item.label));
                    wrap.appendChild(btn);
                });
                chatReplies.appendChild(wrap);
            });
            chatReplies.hidden = !chatReplies.children.length;
            scrollChatToBottom();
        }

        function syncChatChrome() {
            const index = ASSISTANT_STEPS.indexOf(assistantState.step);
            const done = assistantState.step === 'done';
            if (chatProgress) chatProgress.style.transform = `scaleX(${done ? 1 : Math.max(0, index) / ASSISTANT_STEPS.length})`;
            if (chatBackBtn) chatBackBtn.hidden = !(index > 0);
            if (chatInput) {
                chatInput.type = assistantState.step === 'phone' ? 'tel' : 'text';
                chatInput.inputMode = assistantState.step === 'phone' ? 'tel' : 'text';
                chatInput.autocomplete = { name: 'name', phone: 'tel', location: 'address-level2' }[assistantState.step] || 'off';
                chatInput.placeholder = {
                    service: 'Type a service, e.g. CCTV',
                    detail: 'Type your answer...',
                    name: 'Your name',
                    phone: 'e.g. 055 099 7270',
                    location: 'Your area, e.g. East Legon',
                    done: 'Type to start a new request'
                }[assistantState.step] || 'Type your answer...';
            }
        }

        function serviceChips() {
            return Object.keys(assistantCatalog).map((key) => ({ label: assistantCatalog[key].label, value: key, icon: assistantCatalog[key].icon }));
        }

        function faqChips() {
            return Object.keys(assistantFaq).map((key) => ({ label: assistantFaq[key].label, value: key, faq: key }))
                .concat([{ label: 'Chat on WhatsApp', value: 'whatsapp', action: 'whatsapp', icon: 'fab fa-whatsapp' }]);
        }

        function askStep(step, lead) {
            assistantState.step = step;
            syncChatChrome();
            const s = assistantState;
            if (step === 'service') {
                setReplies([]);
                botSay(lead || 'What can we help you with?').then(() => setReplies([
                    { items: serviceChips(), kind: 'services' },
                    { title: 'Quick questions', items: faqChips(), kind: 'faq' }
                ]));
            } else if (step === 'detail') {
                setReplies([]);
                const item = assistantCatalog[s.serviceKey];
                botSay([lead ? `${lead} ` : '', item.question]).then(() => setReplies([{ items: item.options.map((o) => ({ label: o, value: o })) }]));
            } else if (step === 'name') {
                setReplies([]);
                botSay(lead || 'Great. What is your name?');
            } else if (step === 'phone') {
                setReplies([]);
                botSay(lead || `Thanks, ${s.name}. What is the best phone or WhatsApp number to reach you?`);
            } else if (step === 'location') {
                setReplies([]);
                botSay(lead || 'Last one: which area is the job in?').then(() => setReplies([{ items: ['Accra', 'Tema', 'East Legon', 'Spintex', 'Kasoa'].map((o) => ({ label: o, value: o })) }]));
            }
            if (chatInput && !('ontouchstart' in window)) chatInput.focus({ preventScroll: true });
        }

        function saveLeadFromState() {
            addLead({
                createdAt: new Date().toISOString(),
                source: 'chat',
                service: assistantState.serviceKey,
                serviceLabel: assistantState.serviceLabel,
                serviceAnswer: assistantState.serviceAnswer,
                name: assistantState.name,
                phone: assistantState.phone,
                location: assistantState.location
            });
        }

        function whatsappUrlFromState() {
            const s = assistantState;
            const msg = s.name
                ? `Hi Hailifu, I am ${s.name}. I would like a quote for ${s.serviceLabel || 'a service'}${s.serviceAnswer ? ` (${s.serviceAnswer})` : ''}${s.location ? ` in ${s.location}` : ''}.`
                : `Hi Hailifu, I would like a quote${s.serviceLabel ? ` for ${s.serviceLabel}` : ''}.`;
            return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        }

        function finishAssistant() {
            const s = assistantState;
            saveLeadFromState();
            assistantState.step = 'done';
            syncChatChrome();
            setReplies([]);
            const row = (label, value) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`;
            botSay([`Thank you, ${s.name}. Your request is in. Our engineer will call you soon.`]);
            botSay([{ html: `<dl class="r7-summary">${row('Service', s.serviceLabel)}${row('Details', s.serviceAnswer)}${row('Phone', s.phone)}${row('Area', s.location)}</dl>` }], 'is-card')
                .then(() => setReplies([{ items: [
                    { label: 'Continue on WhatsApp', value: 'whatsapp', action: 'whatsapp', icon: 'fab fa-whatsapp' },
                    { label: 'Start a new request', value: 'restart', action: 'restart', icon: 'fa-rotate-left' }
                ] }]));
        }

        function answerFaq(key) {
            const faq = assistantFaq[key];
            if (!faq) return;
            chatBubble('user', faq.label);
            setReplies([]);
            botSay(faq.answer).then(() => setReplies([
                { items: serviceChips(), kind: 'services' },
                { title: 'Quick questions', items: faqChips().filter((c) => c.faq !== key), kind: 'faq' }
            ]));
        }

        function handleUserInput(text, opts = {}) {
            const value = String(text || '').trim().slice(0, 200);
            if (!value) return;
            const s = assistantState;
            if (s.step === 'done') { restartAssistant(value); return; }
            if (!opts.silent) chatBubble('user', opts.label || value);
            setReplies([]);

            if (s.step === 'service') {
                const key = normalizeService(value);
                if (!key) { askStep('service', 'Sorry, I did not catch that. Tap one of the services below.'); return; }
                s.serviceKey = key;
                s.serviceLabel = assistantCatalog[key].label;
                askStep('detail', `${s.serviceLabel}, good choice.`);
                return;
            }
            if (s.step === 'detail') { s.serviceAnswer = value; askStep('name'); return; }
            if (s.step === 'name') {
                if (value.length < 2 || !/[a-z]/i.test(value)) { askStep('name', 'Please type your name so the engineer knows who to ask for.'); return; }
                s.name = value.replace(/\s+/g, ' ').slice(0, 60);
                askStep('phone');
                return;
            }
            if (s.step === 'phone') {
                const phone = normalizePhone(value);
                if (!phone) { askStep('phone', 'That number does not look right. Try a Ghana number like 055 099 7270 or +233 55 099 7270.'); return; }
                s.phone = phone;
                askStep('location');
                return;
            }
            if (s.step === 'location') { s.location = value.slice(0, 80); finishAssistant(); }
        }

        function goBackOneStep() {
            const index = ASSISTANT_STEPS.indexOf(assistantState.step);
            if (index <= 0) return;
            const prev = ASSISTANT_STEPS[index - 1];
            const field = { service: 'serviceKey', detail: 'serviceAnswer', name: 'name', phone: 'phone' }[prev];
            if (field) assistantState[field] = '';
            if (prev === 'service') assistantState.serviceLabel = '';
            chatBubble('bot', 'Going back one step.', 'is-note');
            askStep(prev, prev === 'service' ? 'Which service do you need?' : undefined);
        }

        function restartAssistant(firstInput) {
            resetAssistant();
            chatBubble('bot', 'New request', 'is-note');
            if (firstInput) { assistantState.step = 'service'; syncChatChrome(); handleUserInput(firstInput); return; }
            askStep('service');
        }

        function showGreeting() {
            clearChatMessages();
            resetAssistant();
            syncChatChrome();
            const serviceGreeting = getServiceGreeting(deepLinkServiceKey);
            botSay(serviceGreeting || 'Hi! I am the Hailifu assistant. I can get you a quick quote in about a minute.');
            askStep('service', 'What can we help you with?');
        }

        function isChatOpen() { return !!chatbotContainer && chatbotContainer.classList.contains('active'); }

        function openChatbot() {
            if (!chatbotContainer || isChatOpen()) return;
            clearTimeout(chatCloseTimer);
            hideChatTeaser(true);
            chatbotContainer.hidden = false;
            chatbotContainer.classList.remove('is-closing');
            void chatbotContainer.offsetWidth;
            chatbotContainer.classList.add('active');
            document.documentElement.classList.add('r7-chat-open');
            if (chatbotToggle) { chatbotToggle.setAttribute('aria-expanded', 'true'); chatbotToggle.setAttribute('aria-label', 'Close chat'); }
            if (!chatbotMessages.querySelector('.r7-msg')) showGreeting();
            else syncChatChrome();
        }

        function closeChatbot() {
            if (!chatbotContainer || !isChatOpen()) return;
            chatbotContainer.classList.remove('active');
            chatbotContainer.classList.add('is-closing');
            document.documentElement.classList.remove('r7-chat-open');
            if (chatbotToggle) { chatbotToggle.setAttribute('aria-expanded', 'false'); chatbotToggle.setAttribute('aria-label', 'Chat with Hailifu'); }
            chatCloseTimer = setTimeout(() => { chatbotContainer.hidden = true; chatbotContainer.classList.remove('is-closing'); }, chatReduceMotion ? 0 : 240);
        }
        window.hailifuOpenChat = openChatbot;

        function sendChat() {
            if (!chatInput) return;
            const text = chatInput.value;
            chatInput.value = '';
            handleUserInput(text);
        }

        if (chatForm) {
            chatForm.addEventListener('submit', (e) => { e.preventDefault(); sendChat(); });
        }

        if (chatReplies) {
            chatReplies.addEventListener('click', (e) => {
                const btn = e.target.closest('.r7-reply');
                if (!btn) return;
                if (btn.dataset.action === 'whatsapp') { window.open(whatsappUrlFromState(), '_blank', 'noopener'); return; }
                if (btn.dataset.action === 'restart') { restartAssistant(); return; }
                if (btn.dataset.faq) { answerFaq(btn.dataset.faq); return; }
                handleUserInput(btn.dataset.reply, { label: btn.textContent.trim() });
            });
        }

        if (chatBackBtn) chatBackBtn.addEventListener('click', goBackOneStep);

        if (chatbotToggle && chatbotContainer) {
            chatbotToggle.addEventListener('click', () => { if (isChatOpen()) closeChatbot(); else openChatbot(); });
        }

        if (chatbotClose && chatbotContainer) {
            chatbotClose.addEventListener('click', () => { closeChatbot(); if (chatbotToggle) chatbotToggle.focus({ preventScroll: true }); });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isChatOpen() && !document.querySelector('#popupOverlay.active, #reviewModal.active')) closeChatbot();
        });

        // One gentle nudge per visit, only after the visitor has spent a little time on the page.
        function hideChatTeaser(remember) {
            if (!chatTeaser) return;
            chatTeaser.classList.remove('is-in');
            setTimeout(() => { chatTeaser.hidden = true; }, 250);
            if (remember) { try { sessionStorage.setItem('hailifu_chat_teased', '1'); } catch {} }
        }
        if (chatTeaser) {
            chatTeaser.addEventListener('click', (e) => {
                if (e.target.closest('[data-r7-teaser-close]')) { hideChatTeaser(true); return; }
                if (e.target.closest('[data-r7-chat-open]')) openChatbot();
            });
            let teased = false;
            try { teased = !!sessionStorage.getItem('hailifu_chat_teased'); } catch {}
            if (!teased && !window.__hailifuAdminEntry) {
                setTimeout(() => {
                    if (isChatOpen() || document.querySelector('#popupOverlay.active')) return;
                    chatTeaser.hidden = false;
                    requestAnimationFrame(() => chatTeaser.classList.add('is-in'));
                    try { sessionStorage.setItem('hailifu_chat_teased', '1'); } catch {}
                    setTimeout(() => hideChatTeaser(false), 9000);
                }, 14000);
            }
        }

        startServerlessProjectsSync();
        bumpPageLoads();

        showAftercarePhoto(readAftercareCache()); // site-wide copy from the last visit; loadAftercareSettings refreshes it
        setIntegrityDefaults();

        renderLeads();
        loadProjects();
        applyServiceDeepLink();

        const projectModal = document.getElementById('projectModal');
        const projectModalClose = document.getElementById('projectModalClose');
        const projectModalTitle = document.getElementById('projectModalTitle');
        const projectModalCategory = document.getElementById('projectModalCategory');
        const projectModalDescription = document.getElementById('projectModalDescription');
        const projectModalMedia = document.getElementById('projectModalMedia');
        let projectModalLastFocus = null;
        let projectModalGalleryScrollNode = null;
        let projectModalGalleryScrollHandler = null;
        let projectModalHeaderLastScrollTop = 0;

        let projectLightbox = null;
        let projectLightboxPlaylist = null;
        let projectLightboxIndex = 0;

        function ensureProjectLightbox() {
            if (projectLightbox) return;

            const node = document.createElement('div');
            node.className = 'media-lightbox';
            node.setAttribute('aria-hidden', 'true');
            node.innerHTML = `
                <button class="media-lightbox-close" type="button" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
                <button class="media-lightbox-nav media-lightbox-prev" type="button" aria-label="Previous">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="media-lightbox-nav media-lightbox-next" type="button" aria-label="Next">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="media-lightbox-content"></div>
                <div class="media-lightbox-caption" aria-live="polite"></div>
            `;

            document.body.appendChild(node);
            projectLightbox = node;

            const closeBtn = node.querySelector('.media-lightbox-close');
            if (closeBtn) closeBtn.addEventListener('click', closeProjectLightbox);

            const prevBtn = node.querySelector('.media-lightbox-prev');
            if (prevBtn) prevBtn.addEventListener('click', () => stepProjectLightboxPlaylist(-1));
            const nextBtn = node.querySelector('.media-lightbox-next');
            if (nextBtn) nextBtn.addEventListener('click', () => stepProjectLightboxPlaylist(1));

            document.addEventListener('keydown', (e) => {
                if (!isProjectLightboxOpen()) return;
                const key = String(e.key || '');
                if (key === 'Escape') {
                    e.preventDefault();
                    closeProjectLightbox();
                    return;
                }
                if (key === 'ArrowLeft') {
                    e.preventDefault();
                    stepProjectLightboxPlaylist(-1);
                    return;
                }
                if (key === 'ArrowRight') {
                    e.preventDefault();
                    stepProjectLightboxPlaylist(1);
                }
            });

            const content = node.querySelector('.media-lightbox-content');
            if (content) {
                let touchStartX = 0;
                let touchStartY = 0;
                content.addEventListener('touchstart', (e) => {
                    const t = e.touches && e.touches[0];
                    if (!t) return;
                    touchStartX = t.clientX;
                    touchStartY = t.clientY;
                }, { passive: true });

                content.addEventListener('touchend', (e) => {
                    const t = e.changedTouches && e.changedTouches[0];
                    if (!t) return;
                    const dx = t.clientX - touchStartX;
                    const dy = t.clientY - touchStartY;
                    if (Math.abs(dx) < 55) return;
                    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;
                    if (!hasProjectLightboxPlaylist()) return;
                    stepProjectLightboxPlaylist(dx < 0 ? 1 : -1);
                }, { passive: true });
            }

            node.addEventListener('click', (e) => {
                if (e.target === node) closeProjectLightbox();
            });
        }

        function hasProjectLightboxPlaylist() {
            return Array.isArray(projectLightboxPlaylist) && projectLightboxPlaylist.length > 1;
        }

        function setProjectLightboxPlaylist(playlist, startIndex = 0) {
            const list = Array.isArray(playlist) ? playlist : [];
            projectLightboxPlaylist = list.length ? list : null;
            const idx = Number(startIndex);
            projectLightboxIndex = Number.isFinite(idx) ? Math.max(0, Math.min(idx, (list.length ? list.length - 1 : 0))) : 0;
            syncProjectLightboxNav();
        }

        function syncProjectLightboxNav() {
            if (!projectLightbox) return;
            const prevBtn = projectLightbox.querySelector('.media-lightbox-prev');
            const nextBtn = projectLightbox.querySelector('.media-lightbox-next');
            const enabled = hasProjectLightboxPlaylist();
            if (prevBtn) prevBtn.style.display = enabled ? '' : 'none';
            if (nextBtn) nextBtn.style.display = enabled ? '' : 'none';
        }

        function stepProjectLightboxPlaylist(delta) {
            if (!hasProjectLightboxPlaylist()) return;
            const len = projectLightboxPlaylist.length;
            const next = (projectLightboxIndex + Number(delta || 0) + len) % len;
            projectLightboxIndex = next;
            const entry = projectLightboxPlaylist[next];
            if (!entry || !entry.mediaItem) return;
            openProjectLightbox(entry.mediaItem, entry.title);
        }

        function closeProjectLightbox() {
            if (!projectLightbox) return;
            projectLightbox.classList.remove('active');
            projectLightbox.setAttribute('aria-hidden', 'true');
            const content = projectLightbox.querySelector('.media-lightbox-content');
            if (content) content.innerHTML = '';
            const caption = projectLightbox.querySelector('.media-lightbox-caption');
            if (caption) caption.textContent = '';
            projectLightboxPlaylist = null;
            projectLightboxIndex = 0;
            syncProjectLightboxNav();
        }

        function isProjectLightboxOpen() {
            return !!(projectLightbox && projectLightbox.classList.contains('active'));
        }

        function normalizeMediaItem(m) {
            const rawMediaSrc = String(m?.mediaSrc || m?.src || m?.url || '').trim();
            const mediaSrc = normalizeProjectMediaPath(rawMediaSrc);
            if (!mediaSrc) return null;
            const rawType = String(m?.mediaType || m?.type || '').trim().toLowerCase();
            let mediaType = rawType;
            if (!mediaType) {
                const youtubeId = getYoutubeVideoId(mediaSrc);
                if (youtubeId) mediaType = 'youtube';
                else if (/\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc)) mediaType = 'video';
                else mediaType = 'image';
            }
            const rawThumbSrc = String(m?.thumbSrc || m?.thumb || '').trim();
            const thumbSrc = normalizeProjectMediaPath(rawThumbSrc);
            return { mediaSrc, mediaType, thumbSrc };
        }

        function coerceProjectMediaItems(project) {
            if (!project || typeof project !== 'object') return [];
            const rawList = Array.isArray(project.mediaItems)
                ? project.mediaItems
                : (Array.isArray(project.media) ? project.media
                    : (Array.isArray(project.gallery) ? project.gallery
                        : (Array.isArray(project.mediaGallery) ? project.mediaGallery
                            : (Array.isArray(project.images) ? project.images : []))));
            const fromList = rawList
                .map((entry) => {
                    if (!entry) return null;
                    if (typeof entry === 'string') return normalizeMediaItem({ mediaSrc: entry });
                    if (typeof entry === 'object') {
                        const mediaSrc = entry.mediaSrc || entry.src || entry.url || '';
                        return normalizeMediaItem({ ...entry, mediaSrc });
                    }
                    return null;
                })
                .filter(Boolean);

            const primarySource = String(project.mediaSrc || project.imageUrl || project.mediaUrl || '').trim();
            const primary = primarySource
                ? normalizeMediaItem({ mediaSrc: primarySource, mediaType: project.mediaType, thumbSrc: project.thumbSrc || project.thumbnailUrl || project.thumbUrl || '' })
                : null;

            // Some records only populate surface-specific fields (showcase/services/featured),
            // so include those as part of the modal media collection fallback.
            const fromSurfaces = [];
            const featuredItems = getProjectSurfaceMediaList(project, 'featured');
            featuredItems.forEach((item) => {
                const normalized = normalizeMediaItem(item);
                if (normalized) fromSurfaces.push(normalized);
            });

            ['showcase', 'services'].forEach((surface) => {
                const media = getProjectSurfaceMedia(project, surface);
                const normalized = normalizeMediaItem(media);
                if (normalized) fromSurfaces.push(normalized);
            });

            const combined = [...fromList, ...(primary ? [primary] : []), ...fromSurfaces];
            const seen = new Set();
            return combined.filter((item) => {
                const key = `${item.mediaType}::${item.mediaSrc}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });
        }

        function parseMediaItemsFromDataset(item) {
            const raw = item?.dataset?.mediaItems;
            if (!raw) return [];
            try {
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed)) return [];
                return parsed.map(normalizeMediaItem).filter(Boolean);
            } catch {
                return [];
            }
        }

        function getMediaItemsForModal(item) {
            const fromDataset = parseMediaItemsFromDataset(item);

            const groupMode = String(item?.dataset?.galleryGroup || '').trim().toLowerCase();
            if (groupMode === 'category') {
                const categoryKey = normalizeCategoryKey(item?.dataset?.category || item?.dataset?.modalCategory || '');
                if (categoryKey) {
                    const projects = getProjects();
                    try {
                        const categories = projects.map((p) => String(p?.category || '').trim()).filter(Boolean);
                        console.log('Gallery category match:', categoryKey, 'Available categories:', categories);
                    } catch {}
                    const matches = projects.filter((p) => p && normalizeCategoryKey(p.category || '') === categoryKey);
                    const isPreferredShowcaseProject = (p) => {
                        if (!p || typeof p !== 'object') return false;
                        if (typeof p.showInShowcase === 'boolean') return p.showInShowcase;
                        if (typeof p.showcase === 'boolean') return p.showcase;
                        return false;
                    };
                    const orderedMatches = [
                        ...matches.filter((p) => isPreferredShowcaseProject(p)),
                        ...matches.filter((p) => !isPreferredShowcaseProject(p))
                    ];

                    const combined = [];
                    orderedMatches.forEach((p) => {
                        try {
                            console.log('Gallery match project:', {
                                id: p?.id,
                                title: p?.title || p?.name,
                                category: p?.category,
                                showInShowcase: p?.showInShowcase,
                                showcase: p?.showcase,
                                mediaSrc: p?.mediaSrc,
                                mediaItemsCount: Array.isArray(p?.mediaItems) ? p.mediaItems.length : 0
                            });
                        } catch {}
                        const items = coerceProjectMediaItems(p);
                        items.forEach((entry) => {
                            if (entry) combined.push(entry);
                        });
                    });
                    try {
                        console.log('Gallery media items combined:', combined.length, combined.map((m) => m.mediaSrc));
                    } catch {}

                    const seen = new Set();
                    const unique = combined.filter((m) => {
                        const key = `${m.mediaType}::${m.mediaSrc}`;
                        if (!m || !m.mediaSrc) return false;
                        if (seen.has(key)) return false;
                        seen.add(key);
                        return true;
                    });
                    if (unique.length) return unique;
                }

                if (fromDataset.length) return fromDataset;
            }
            if (fromDataset.length) return fromDataset;

            const id = String(item?.dataset?.generatedProjectId || '').trim();
            if (id) {
                const projects = getProjects();
                const base = projects.find((p) => String(p?.id || '') === id);
                if (base) {
                    const baseItems = Array.isArray(base.mediaItems)
                        ? base.mediaItems.map(normalizeMediaItem).filter(Boolean)
                        : [];

                    const baseSingle = base.mediaSrc
                        ? [{ mediaSrc: String(base.mediaSrc), mediaType: String(base.mediaType || 'image'), thumbSrc: String(base.thumbSrc || '') }]
                        : [];

                    const normalizedTitle = String(base.title || '').trim().toLowerCase();
                    const normalizedCategory = String(base.category || '').trim().toLowerCase();

                    const extra = projects
                        .filter((p) => p && String(p.id || '') !== id)
                        .filter((p) => String(p.title || '').trim().toLowerCase() === normalizedTitle)
                        .filter((p) => String(p.category || '').trim().toLowerCase() === normalizedCategory)
                        .filter((p) => p.mediaSrc)
                        .map((p) => ({
                            mediaSrc: String(p.mediaSrc),
                            mediaType: String(p.mediaType || 'image'),
                            thumbSrc: String(p.thumbSrc || '')
                        }));

                    const combined = [...baseItems, ...baseSingle, ...extra]
                        .map(normalizeMediaItem)
                        .filter(Boolean);

                    const seen = new Set();
                    return combined.filter((m) => {
                        const key = `${m.mediaType}::${m.mediaSrc}`;
                        if (seen.has(key)) return false;
                        seen.add(key);
                        return true;
                    });
                }
            }

            const src = String(item?.dataset?.mediaSrc || '').trim();
            if (src) {
                return [{
                    mediaSrc: src,
                    mediaType: String(item?.dataset?.mediaType || 'image').trim().toLowerCase() || 'image',
                    thumbSrc: ''
                }];
            }

            return [];
        }

        function openProjectLightbox(mediaItem, title) {
            ensureProjectLightbox();
            if (!projectLightbox) return;

            const content = projectLightbox.querySelector('.media-lightbox-content');
            if (!content) return;
            content.innerHTML = '';
            content.style.removeProperty('--lightbox-bg');

            const caption = projectLightbox.querySelector('.media-lightbox-caption');
            if (caption) caption.textContent = String(title || '').trim();

            const type = String(mediaItem?.mediaType || '').toLowerCase();
            const src = String(mediaItem?.mediaSrc || '').trim();
            const thumbSrc = String(mediaItem?.thumbSrc || '').trim();
            const displayTitle = String(title || 'Preview').trim();
            const setLightboxBackdrop = (value) => {
                const raw = String(value || '').trim();
                if (!raw) return;
                const safe = raw.replace(/"/g, '\\"');
                content.style.setProperty('--lightbox-bg', `url("${safe}")`);
            };

            if (type === 'video') {
                const video = document.createElement('video');
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                content.appendChild(video);
                setLightboxBackdrop(thumbSrc);
            } else if (type === 'youtube') {
                const youtubeId = getYoutubeVideoId(src);
                const watchUrl = youtubeId ? getYoutubeWatchUrl(youtubeId) : src;
                const youtubeThumb = thumbSrc || getYoutubeThumbUrl(youtubeId) || '';
                setLightboxBackdrop(youtubeThumb);

                if (!canEmbedYoutube()) {
                    const wrap = document.createElement('div');
                    wrap.style.padding = '22px';
                    wrap.style.textAlign = 'center';
                    wrap.style.color = 'rgba(255, 255, 255, 0.82)';
                    wrap.innerHTML = `
                        <div style="font-size:2rem; margin-bottom:10px; color: var(--orange);"><i class="fas fa-play-circle"></i></div>
                        <div style="margin-bottom:12px;">This video can't be embedded in file preview mode.</div>
                        <a href="${watchUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; justify-content:center; gap:10px; background: var(--orange); color: #fff; padding: 12px 18px; border-radius: 999px; font-weight: 800; text-decoration: none;">Open on YouTube</a>
                    `;
                    content.appendChild(wrap);
                } else {
                    const iframe = document.createElement('iframe');
                    iframe.src = youtubeId ? getYoutubeEmbedUrl(youtubeId) : src;
                    iframe.title = displayTitle;
                    iframe.loading = 'lazy';
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                    iframe.setAttribute('allowfullscreen', '');
                    content.appendChild(iframe);
                }
            } else {
                const img = document.createElement('img');
                img.src = src;
                img.alt = displayTitle;
                content.appendChild(img);
                setLightboxBackdrop(src);
            }

            projectLightbox.classList.add('active');
            projectLightbox.setAttribute('aria-hidden', 'false');
            syncProjectLightboxNav();
        }

        function buildProjectModalGallery(mediaItems, title) {
            const wrapper = document.createElement('div');
            wrapper.className = 'project-modal-gallery-wrap';
            const gallery = document.createElement('div');
            gallery.className = 'project-modal-gallery';
            const safeTitle = String(title || 'Preview').trim();
            let suppressNextTileTap = false;
            let touchStartX = 0;
            let touchStartY = 0;
            let lastTouchMoveAt = 0;
            const tapSuppressWindowMs = 320;
            const visibleCount = Math.min(9, mediaItems.length);

            gallery.addEventListener('touchstart', (e) => {
                const t = e.touches && e.touches[0];
                if (!t) return;
                touchStartX = Number(t.clientX || 0);
                touchStartY = Number(t.clientY || 0);
                suppressNextTileTap = false;
                lastTouchMoveAt = 0;
            }, { passive: true });

            gallery.addEventListener('touchmove', (e) => {
                const t = e.touches && e.touches[0];
                if (!t) return;
                const dx = Math.abs(Number(t.clientX || 0) - touchStartX);
                const dy = Math.abs(Number(t.clientY || 0) - touchStartY);
                if (dx > 8 || dy > 8) {
                    suppressNextTileTap = true;
                    lastTouchMoveAt = Date.now();
                }
            }, { passive: true });

            gallery.addEventListener('touchend', () => {
                if (!suppressNextTileTap) return;
                window.setTimeout(() => {
                    suppressNextTileTap = false;
                }, tapSuppressWindowMs);
            }, { passive: true });

            gallery.addEventListener('touchcancel', () => {
                suppressNextTileTap = false;
                lastTouchMoveAt = 0;
            }, { passive: true });

            mediaItems.forEach((m, idx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'project-modal-tile';
                btn.dataset.index = String(idx);
                if (idx === 0) btn.classList.add('is-hero');

                const type = String(m?.mediaType || '').toLowerCase();
                const src = String(m?.mediaSrc || '').trim();
                const thumb = String(m?.thumbSrc || '').trim();

                if (type === 'video') {
                    const video = document.createElement('video');
                    video.src = src;
                    video.muted = true;
                    video.defaultMuted = true;
                    video.playsInline = true;
                    video.autoplay = true;
                    video.loop = true;
                    video.preload = 'metadata';
                    video.setAttribute('muted', '');
                    video.setAttribute('playsinline', '');
                    video.setAttribute('webkit-playsinline', '');
                    btn.appendChild(video);
                } else if (type === 'youtube') {
                    const youtubeId = getYoutubeVideoId(src);
                    const img = document.createElement('img');
                    img.src = thumb || getYoutubeThumbUrl(youtubeId) || '';
                    img.alt = safeTitle;
                    img.loading = 'lazy';
                    img.decoding = 'async';
                    btn.appendChild(img);

                    const badge = document.createElement('div');
                    badge.className = 'project-modal-tile-badge';
                    badge.innerHTML = '<i class="fas fa-play"></i>';
                    btn.appendChild(badge);
                } else {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = safeTitle;
                    img.loading = 'lazy';
                    img.decoding = 'async';
                    btn.appendChild(img);
                }

                gallery.appendChild(btn);
            });

            bindHailifuMediaFallback(gallery, 'HAILIFU');

            const applyVisibleWindow = () => {
                const tiles = Array.from(gallery.querySelectorAll('.project-modal-tile'));
                tiles.forEach((tile, idx) => {
                    tile.classList.toggle('is-hidden', idx >= visibleCount);
                });
            };

            gallery.addEventListener('click', (e) => {
                const now = Date.now();
                if (suppressNextTileTap || (lastTouchMoveAt > 0 && (now - lastTouchMoveAt) < tapSuppressWindowMs)) {
                    e.preventDefault();
                    suppressNextTileTap = false;
                    return;
                }
                const tile = e.target.closest('.project-modal-tile');
                if (!tile) return;
                const idx = Number(tile.dataset.index);
                if (!Number.isFinite(idx) || !mediaItems[idx]) return;
                const playlist = mediaItems.map((entry) => ({
                    mediaItem: entry,
                    title: safeTitle
                }));
                setProjectLightboxPlaylist(playlist, idx);
                openProjectLightbox(mediaItems[idx], safeTitle);
            });

            wrapper.appendChild(gallery);

            applyVisibleWindow();
            return wrapper;
        }

        function clearProjectModalHeaderAutoHide() {
            if (projectModalGalleryScrollNode && projectModalGalleryScrollHandler) {
                try { projectModalGalleryScrollNode.removeEventListener('scroll', projectModalGalleryScrollHandler); } catch {}
            }
            projectModalGalleryScrollNode = null;
            projectModalGalleryScrollHandler = null;
            projectModalHeaderLastScrollTop = 0;
            if (projectModal) projectModal.classList.remove('is-header-hidden');
        }

        function bindProjectModalHeaderAutoHide(scrollNode) {
            clearProjectModalHeaderAutoHide();
            if (!projectModal || !scrollNode) return;
            if (!projectModal.classList.contains('is-showcase-fullscreen')) return;

            const isMobileViewport = window.matchMedia
                ? window.matchMedia('(max-width: 820px)').matches
                : ((window.innerWidth || 0) <= 820);
            if (!isMobileViewport) return;

            projectModalHeaderLastScrollTop = Math.max(0, Number(scrollNode.scrollTop || 0));
            const deltaThreshold = 8;

            const onScroll = () => {
                const nextTop = Math.max(0, Number(scrollNode.scrollTop || 0));
                if (nextTop <= 10) {
                    projectModal.classList.remove('is-header-hidden');
                    projectModalHeaderLastScrollTop = nextTop;
                    return;
                }

                const delta = nextTop - projectModalHeaderLastScrollTop;
                if (delta > deltaThreshold) {
                    projectModal.classList.add('is-header-hidden');
                } else if (delta < -deltaThreshold) {
                    projectModal.classList.remove('is-header-hidden');
                }

                projectModalHeaderLastScrollTop = nextTop;
            };

            projectModalGalleryScrollNode = scrollNode;
            projectModalGalleryScrollHandler = onScroll;
            scrollNode.addEventListener('scroll', onScroll, { passive: true });
        }

        function closeProjectModal() {
            if (projectModal) {
                try {
                    const active = document.activeElement;
                    if (active && projectModal.contains(active)) {
                        active.blur();
                    }
                } catch {}
                projectModal.classList.remove('active');
                projectModal.classList.remove('is-compact');
                projectModal.classList.remove('is-showcase-fullscreen');
                projectModal.classList.remove('has-gallery');
                projectModal.setAttribute('aria-hidden', 'true');
                const mainEl = document.querySelector('main');
                if (mainEl) mainEl.removeAttribute('inert');
            }
            if (projectModalMedia) {
                projectModalMedia.innerHTML = '';
            }
            clearProjectModalHeaderAutoHide();
            closeProjectLightbox();
            if (projectModalLastFocus && typeof projectModalLastFocus.focus === 'function') {
                try { projectModalLastFocus.focus(); } catch {}
            }
            projectModalLastFocus = null;
        }

        function openProjectModalFromItem(item) {
            if (!item || !projectModal) return;

            const isShowcaseItem = !!item.classList?.contains('showcase-item');
            projectModal.classList.toggle('is-compact', false);
            projectModal.classList.toggle('is-showcase-fullscreen', isShowcaseItem);
            projectModal.classList.remove('is-header-hidden');

            const title = item.querySelector('.showcase-title')?.textContent?.trim()
                || item.querySelector('h3')?.textContent?.trim()
                || item.dataset?.modalTitle
                || 'Project';
            const description = item.querySelector('.showcase-description')?.textContent?.trim()
                || item.querySelector('.featured-card-description')?.textContent?.trim()
                || item.dataset?.modalDescription
                || '';
            const category = item.querySelector('.project-category')?.textContent?.trim()
                || item.dataset?.modalCategory
                || '';

            if (projectModalTitle) projectModalTitle.textContent = title;
            if (projectModalCategory) projectModalCategory.textContent = category;
            if (projectModalDescription) projectModalDescription.textContent = description;

            projectModalLastFocus = document.activeElement;
            const mainEl = document.querySelector('main');
            if (mainEl) mainEl.setAttribute('inert', '');

            const modal = document.getElementById('projectModal');
            if (modal) {
                modal.setAttribute('aria-hidden', 'false');
                modal.classList.add('active');
            }
            setTimeout(() => { document.getElementById('projectModalClose').focus(); }, 100);
            projectModal.removeAttribute('inert');

            if (projectModalMedia) {
                projectModalMedia.innerHTML = '';
                projectModal.classList.remove('has-gallery');

                const mediaItems = getMediaItemsForModal(item);
                if (mediaItems.length) {
                    projectModal.classList.add('has-gallery');
                    projectModalMedia.appendChild(buildProjectModalGallery(mediaItems, title));
                    const galleryNode = projectModalMedia.querySelector('.project-modal-gallery');
                    bindProjectModalHeaderAutoHide(galleryNode);
                } else {
                    clearProjectModalHeaderAutoHide();
                    const placeholder = document.createElement('div');
                    placeholder.style.padding = '22px';
                    placeholder.style.textAlign = 'center';
                    placeholder.style.color = 'rgba(255, 255, 255, 0.75)';
                    placeholder.innerHTML = '<div style="font-size:2.2rem; margin-bottom:10px; color: var(--orange);"><i class="fas fa-image"></i></div><div>Project preview will appear here once media is added.</div>';
                    projectModalMedia.appendChild(placeholder);
                }

            }
        }

        function openGalleryFromElement(el) {
            if (!el) return false;
            openProjectModalFromItem(el);
            return true;
        }

        function openModal(projectId) {
            const id = String(projectId || '').trim();
            console.log('Attempting to open gallery for:', id);
            if (!id) return false;
            const projects = getProjects();
            const project = projects.find((p) => String(p?.id || '') === id);
            if (!project) {
                try {
                    const selector = `.showcase-item[data-generated-project-id="${CSS.escape(id)}"]`;
                    const fallbackEl = document.querySelector(selector);
                    if (fallbackEl) {
                        openProjectModalFromItem(fallbackEl);
                        return true;
                    }
                } catch {}
                return false;
            }
            if (!projectModal) return false;
            if (projectModalMedia) {
                projectModalMedia.innerHTML = '';
            }
            const temp = document.createElement('div');
            temp.className = 'showcase-item';
            temp.dataset.generatedProjectId = id;
            temp.dataset.mediaSrc = String(project.mediaSrc || '').trim();
            temp.dataset.mediaType = String(project.mediaType || 'image').trim().toLowerCase() || 'image';
            temp.dataset.modalTitle = String(project.title || project.name || 'Project').trim();
            temp.dataset.modalDescription = String(project.description || '').trim();
            temp.dataset.modalCategory = String(project.category || '').trim();
            const mediaItems = coerceProjectMediaItems(project);
            if (mediaItems.length > 1) {
                try { temp.dataset.mediaItems = JSON.stringify(mediaItems); } catch {}
            }
            openProjectModalFromItem(temp);
            return true;
        }

        window.openModal = openModal;
        window.openGallery = openModal;
        window.openGalleryFromElement = openGalleryFromElement;

        if (projectModalClose) {
            projectModalClose.addEventListener('click', closeProjectModal);
        }

        if (projectModal) {
            projectModal.addEventListener('click', (e) => {
                if (e.target === projectModal) closeProjectModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (isProjectLightboxOpen()) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    stepProjectLightboxPlaylist(-1);
                    return;
                }
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    stepProjectLightboxPlaylist(1);
                    return;
                }
            }

            if (e.key === 'Escape') {
                if (isProjectLightboxOpen()) {
                    closeProjectLightbox();
                    return;
                }
                closeProjectModal();
            }
        });

        function renderServices() {
            const servicesGrid = document.querySelector('#services .services-grid');
            if (!servicesGrid) return;

            const cards = Array.from(servicesGrid.querySelectorAll('.card'));
            if (!cards.length) return;

            cards.forEach((card) => {
                card.removeAttribute('role');
                card.removeAttribute('tabindex');
                card.removeAttribute('onclick');
                card.classList.remove('has-media', 'highlight', 'highlight-service');

                try {
                    delete card.dataset.mediaSrc;
                    delete card.dataset.mediaType;
                    delete card.dataset.generatedProjectId;
                    delete card.dataset.modalTitle;
                    delete card.dataset.modalDescription;
                    delete card.dataset.modalCategory;
                } catch {}

                const preview = card.querySelector('.service-media');
                if (preview) preview.remove();

                const quoteBtn = card.querySelector('.request-quote-btn');
                if (quoteBtn) {
                    quoteBtn.textContent = 'Request a Quote';
                    quoteBtn.setAttribute('href', '#quote');
                    quoteBtn.removeAttribute('target');
                    quoteBtn.removeAttribute('rel');
                    quoteBtn.removeAttribute('onclick');
                    quoteBtn.dataset.quoteService = card.dataset.serviceCategory || '';
                }
            });

            const emptyNode = servicesGrid.querySelector('.services-empty');
            if (emptyNode) emptyNode.remove();

            const projects = getProjects()
                .filter((p) => p && isVisibilityEnabled(p, 'showInServices', 'services'));
            const aliasMap = {
                autogate: 'gates'
            };

            // Service galleries (Supabase): the service's cover photo
            const pickServiceGalleryCover = (serviceCategory) => {
                const group = getServiceGalleryGroups().find((g) => g.category === serviceCategory);
                if (!group || !group.cover) return null;
                const media = { mediaSrc: group.cover.src, mediaType: group.cover.mediaType, thumbSrc: group.cover.thumb };
                // media fields on the project too: the old media helpers loop forever on a project without any
                return { project: { id: `gallery-${serviceCategory}`, category: serviceCategory, ...media }, media };
            };
            // Photos that ship with the site, for services without any project yet
            const builtInServicePhoto = (serviceCategory) => {
                const photos = { networking: '/hailifu%20Networking%201%20-%20Copy.png' };
                if (!photos[serviceCategory]) return null;
                const media = { mediaSrc: photos[serviceCategory], mediaType: 'image', thumbSrc: '' };
                return { project: { id: `builtin-${serviceCategory}`, category: serviceCategory, ...media }, media };
            };
            const pickProjectForService = (serviceCategory) => {
                const normalizedCategory = String(serviceCategory || '').toLowerCase().trim();
                const projectCategory = aliasMap[normalizedCategory] || normalizedCategory;
                const matches = projects.filter((p) => String(p?.category || '').toLowerCase().trim() === projectCategory);
                if (!matches.length) return null;
                const withMedia = matches
                    .map((project) => ({ project, media: getProjectSurfaceMedia(project, 'services') }))
                    .filter((entry) => entry.media && entry.media.mediaSrc);
                if (!withMedia.length) return null;
                const featured = withMedia.find((entry) => entry.project?.isFeatured) || withMedia.find((entry) => entry.project?.isStarred);
                return featured || withMedia[0];
            };

            cards.forEach((card) => {
                const serviceCategory = String(card.dataset.serviceCategory || '').toLowerCase().trim();
                if (!serviceCategory) return;
                const selected = pickServiceGalleryCover(serviceCategory) || pickProjectForService(serviceCategory) || builtInServicePhoto(serviceCategory);
                if (!selected) return;

                const project = selected.project;
                const media = selected.media;
                const mediaSrc = normalizeCloudinaryUrl(String(media.mediaSrc || '').trim());
                const mediaType = String(media.mediaType || 'image').trim().toLowerCase() || 'image';
                if (!mediaSrc) return;

                const preview = document.createElement('div');
                preview.className = 'service-media';
                if (mediaType === 'video') {
                    preview.innerHTML = `<video src="${mediaSrc}" muted playsinline webkit-playsinline loop preload="metadata"></video>`;
                } else if (mediaType === 'youtube') {
                    const youtubeId = getYoutubeVideoId(mediaSrc);
                    const thumb = normalizeCloudinaryUrl(String(media.thumbSrc || getYoutubeThumbUrl(youtubeId) || '').trim());
                    preview.innerHTML = `<img src="${thumb || mediaSrc}" alt="" loading="lazy" decoding="async">`;
                } else {
                    preview.innerHTML = `<img src="${mediaSrc}" alt="" loading="lazy" decoding="async">`;
                }

                const glow = card.querySelector('.card-glow');
                if (glow && glow.nextSibling) {
                    card.insertBefore(preview, glow.nextSibling);
                } else if (glow) {
                    card.appendChild(preview);
                } else {
                    card.insertBefore(preview, card.firstChild);
                }

                card.classList.add('has-media');
                card.dataset.mediaSrc = mediaSrc;
                card.dataset.mediaType = mediaType;
                card.dataset.generatedProjectId = String(project?.id || '');
                card.dataset.modalTitle = String(project?.title || project?.name || '').trim();
                card.dataset.modalDescription = String(project?.description || '').trim();
                card.dataset.modalCategory = String(project?.category || '').trim();
                const mediaItems = coerceProjectMediaItems(project);
                if (mediaItems.length > 1) {
                    try { card.dataset.mediaItems = JSON.stringify(mediaItems); } catch {}
                } else if (card.dataset.mediaItems) {
                    delete card.dataset.mediaItems;
                }
            });
        }

        renderServices();
        const initialSiteControlSettings = getSiteControlSettings();
        applySiteSectionOrderAndVisibility(initialSiteControlSettings);
        applyHeroContentSettings(initialSiteControlSettings);
        applyServiceCardContentSettings(initialSiteControlSettings);

        const popupOverlay = document.getElementById('popupOverlay');
        const popupClose = document.getElementById('popupClose');
        const popupQuoteForm = document.getElementById('popupQuoteForm');
        const popupSuccess = document.getElementById('popupSuccess');
        const popupService = document.getElementById('popupService');
        const popupTimeline = document.getElementById('popupTimeline');
        const popupInvoicePreview = document.getElementById('popupInvoicePreview');
        const serviceContext = document.getElementById('serviceContext');
        const popupFormShell = popupOverlay ? popupOverlay.querySelector('.popup-form') : null;

        function parseBudgetAmount(rawValue) {
            const amount = Number(rawValue);
            if (!Number.isFinite(amount) || amount <= 0) return 0;
            return Math.round(amount);
        }

        function estimateInvoiceAmount(serviceKey, message, budgetAmount) {
            if (budgetAmount > 0) return budgetAmount;
            const messageText = String(message || '').toLowerCase();
            const baseByService = {
                cctv: 3200,
                electrical: 2500,
                airconditioning: 2800,
                gates: 5400,
                fencing: 4200,
                solar: 12000,
                smarthome: 7600,
                blindcurtain: 3400
            };
            let estimate = baseByService[String(serviceKey || '').trim()] || 3000;
            if (/warehouse|factory|industrial|hotel|school/.test(messageText)) estimate += 2600;
            if (/villa|mansion|complex|estate|multi/.test(messageText)) estimate += 1800;
            if (/urgent|asap|today|immediately/.test(messageText)) estimate += 900;
            return estimate;
        }

        function buildQuoteInvoiceDraft(payload) {
            const now = new Date();
            const createdAt = now.toISOString();
            const cleanName = String(payload?.name || 'Client').trim() || 'Client';
            const serviceLabel = String(payload?.serviceLabel || 'Service').trim() || 'Service';
            const message = String(payload?.message || '').trim();
            const timeline = String(payload?.timelineLabel || 'Standard').trim();
            const budgetAmount = parseBudgetAmount(payload?.budget);
            const subtotal = estimateInvoiceAmount(payload?.serviceKey, message, budgetAmount);
            const serviceFee = Math.round(subtotal * 0.08);
            const antiFraudFee = 150;
            const total = subtotal + serviceFee + antiFraudFee;
            const verificationSeed = `${cleanName}|${serviceLabel}|${payload?.phone || ''}|${payload?.location || ''}|${createdAt}|${total}`;
            const verificationCode = `HFI-${hashText(verificationSeed).slice(0, 10).toUpperCase()}`;

            const suspiciousWords = /bitcoin|crypto|gift card|western union|anonymous|cash only|overseas/i;
            const fraudRisk = suspiciousWords.test(message) ? 'Elevated' : 'Low';

            return {
                createdAt,
                validUntil: new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)).toISOString(),
                verificationCode,
                serviceLabel,
                timeline,
                subtotal,
                serviceFee,
                antiFraudFee,
                total,
                fraudRisk
            };
        }

        function renderQuoteInvoicePreview(invoice) {
            if (!popupInvoicePreview || !invoice) return;
            popupInvoicePreview.innerHTML = `
                <h4><i class="fas fa-file-invoice-dollar"></i> Invoice Preview</h4>
                <div class="invoice-preview-grid">
                    <span>Invoice Code</span><strong>${invoice.verificationCode}</strong>
                    <span>Service</span><strong>${invoice.serviceLabel}</strong>
                    <span>Timeline</span><strong>${invoice.timeline}</strong>
                    <span>Risk Status</span><strong class="invoice-risk-${String(invoice.fraudRisk).toLowerCase()}">${invoice.fraudRisk}</strong>
                    <span>Estimated Total</span><strong>GHS ${invoice.total.toLocaleString()}</strong>
                </div>
                <p class="invoice-preview-note">Code valid for 7 days. Always confirm this code with Hailifu before payment.</p>
            `;
        }

        const invoiceApiConfig = {
            endpoint: String(window.HAILIFU_INVOICE_API_URL || '').trim(),
            bearerToken: String(window.HAILIFU_INVOICE_API_TOKEN || '').trim()
        };

        async function registerInvoiceOnServer(payload) {
            if (!invoiceApiConfig.endpoint) {
                return {
                    ok: false,
                    mode: 'local-only',
                    reason: 'missing-endpoint'
                };
            }

            const headers = {
                'Content-Type': 'application/json'
            };
            if (invoiceApiConfig.bearerToken) {
                headers.Authorization = `Bearer ${invoiceApiConfig.bearerToken}`;
            }

            const response = await fetch(invoiceApiConfig.endpoint, {
                method: 'POST',
                headers,
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const text = await response.text().catch(() => '');
                throw new Error(text || `Invoice API failed (${response.status})`);
            }
            const result = await response.json().catch(() => ({}));
            return {
                ok: true,
                mode: 'server-verified',
                data: result
            };
        }

        function initCustomSelect(selectEl) {
            if (!selectEl || selectEl.dataset.customBound) return;
            selectEl.dataset.customBound = '1';
            selectEl.classList.add('custom-select-native');

            const wrapper = document.createElement('div');
            wrapper.className = 'custom-select';

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'custom-select-button';

            const label = document.createElement('span');
            label.className = 'custom-select-label';
            button.appendChild(label);

            const caret = document.createElement('i');
            caret.className = 'fas fa-chevron-down';
            button.appendChild(caret);

            const list = document.createElement('div');
            list.className = 'custom-select-list';

            const options = Array.from(selectEl.options);
            options.forEach((opt) => {
                const optionBtn = document.createElement('button');
                optionBtn.type = 'button';
                optionBtn.className = 'custom-select-option';
                optionBtn.textContent = opt.textContent;
                optionBtn.dataset.value = opt.value;
                if (opt.disabled) {
                    optionBtn.disabled = true;
                }
                if (opt.selected && opt.value) {
                    optionBtn.classList.add('is-selected');
                }
                optionBtn.addEventListener('click', () => {
                    if (optionBtn.disabled) return;
                    selectEl.value = optionBtn.dataset.value || '';
                    selectEl.dispatchEvent(new Event('change', { bubbles: true }));
                    closeSelect();
                });
                list.appendChild(optionBtn);
            });

            function syncLabel() {
                const selectedOption = selectEl.options[selectEl.selectedIndex];
                const text = selectedOption ? selectedOption.textContent : 'Select';
                label.textContent = text;
                list.querySelectorAll('.custom-select-option').forEach((btn) => {
                    const isSelected = btn.dataset.value === selectEl.value && selectEl.value;
                    btn.classList.toggle('is-selected', Boolean(isSelected));
                });
            }

            function closeSelect() {
                wrapper.classList.remove('is-open');
            }

            button.addEventListener('click', () => {
                wrapper.classList.toggle('is-open');
            });

            selectEl.addEventListener('change', syncLabel);

            document.addEventListener('click', (e) => {
                if (!wrapper.contains(e.target)) {
                    closeSelect();
                }
            });

            const parent = selectEl.parentNode;
            if (parent) {
                parent.insertBefore(wrapper, selectEl);
                wrapper.appendChild(selectEl);
                wrapper.appendChild(button);
                wrapper.appendChild(list);
                syncLabel();
            }
        }

        initCustomSelect(popupService);

        const siteShareButtons = Array.from(document.querySelectorAll('[data-site-share]'));
        const siteShareSnackbar = document.getElementById('siteShareSnackbar');
        const siteShareUrl = primarySiteUrl;
        let siteShareSnackbarTimer = null;

        function showSiteShareSnackbar(message) {
            const text = String(message || 'Link Copied').trim() || 'Link Copied';
            if (!siteShareSnackbar) {
                showReviewShareToast(text);
                return;
            }
            siteShareSnackbar.textContent = text;
            siteShareSnackbar.classList.remove('active');
            void siteShareSnackbar.offsetWidth;
            siteShareSnackbar.classList.add('active');
            if (siteShareSnackbarTimer) clearTimeout(siteShareSnackbarTimer);
            siteShareSnackbarTimer = setTimeout(() => {
                siteShareSnackbar.classList.remove('active');
            }, 1600);
        }

        async function copySiteShareUrl() {
            try {
                if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                    await navigator.clipboard.writeText(siteShareUrl);
                    return true;
                }
            } catch {}

            try {
                const input = document.createElement('input');
                input.value = siteShareUrl;
                input.setAttribute('readonly', '');
                input.style.position = 'fixed';
                input.style.left = '-9999px';
                document.body.appendChild(input);
                input.select();
                input.setSelectionRange(0, input.value.length);
                const ok = document.execCommand('copy');
                input.remove();
                return !!ok;
            } catch {
                return false;
            }
        }

        async function handleSiteShareClick(e) {
            if (e && typeof e.preventDefault === 'function') e.preventDefault();
            const payload = {
                title: 'HAILIFU | Brilliant Installation',
                text: "Check out Accra's premier CCTV and Electrical installation experts. Experience the Brilliant standard.",
                url: siteShareUrl
            };

            if (typeof navigator.share === 'function') {
                try {
                    await navigator.share(payload);
                    return;
                } catch (error) {
                    if (error && error.name === 'AbortError') return;
                }
            }

            const copied = await copySiteShareUrl();
            showSiteShareSnackbar(copied ? 'Link Copied' : 'Copy failed');
        }

        siteShareButtons.forEach((btn) => {
            btn.addEventListener('click', handleSiteShareClick);
        });

        function setQuoteService(serviceKey) {
            const labelMap = {
                cctv: 'CCTV Installation',
                electrical: 'Electrical Wiring',
                airconditioning: 'Air Conditioning',
                gates: 'Automated Gates',
                fencing: 'Electric Fencing',
                solar: 'Solar Energy',
                smarthome: 'Smart Home System',
                blindcurtain: 'Smart Window Solutions'
            };
            const iconMap = {
                cctv: 'fa-video',
                electrical: 'fa-bolt',
                airconditioning: 'fa-snowflake',
                gates: 'fa-door-open',
                fencing: 'fa-shield-alt',
                solar: 'fa-solar-panel',
                smarthome: 'fa-house',
                blindcurtain: 'fa-grip-lines-vertical'
            };

            if (popupService && serviceKey) {
                popupService.value = serviceKey;
                popupService.dispatchEvent(new Event('change', { bubbles: true }));
            }

            if (serviceContext) {
                const label = labelMap[serviceKey] || 'Service';
                const icon = iconMap[serviceKey] || 'fa-quote-right';
                const description = label === 'Service'
                    ? 'Get a free quote for professional services'
                    : `Get a free quote for professional ${label.toLowerCase()} services`;
                serviceContext.innerHTML = `
                    <i class="fas ${icon}"></i>
                    <h3>${label}</h3>
                    <p>${description}</p>
                `;
            }
        }

        function openQuotePopup() {
            if (popupOverlay) {
                popupOverlay.classList.add('active');
                if (popupFormShell) popupFormShell.classList.add('is-active');
                document.body.classList.add('modal-open');
            }
        }

        function closeQuotePopup() {
            if (popupOverlay) {
                popupOverlay.classList.remove('active');
                if (popupFormShell) popupFormShell.classList.remove('is-active');
                document.body.classList.remove('modal-open');
            }
        }

        if (popupClose) {
            popupClose.addEventListener('click', closeQuotePopup);
        }

        if (popupOverlay) {
            popupOverlay.addEventListener('click', (e) => {
                if (e.target === popupOverlay) closeQuotePopup();
            });
        }

        if (popupQuoteForm) {
            popupQuoteForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                if (typeof popupQuoteForm.reportValidity === 'function' && !popupQuoteForm.reportValidity()) {
                    return;
                }

                const honey = document.getElementById('popupWebsite');
                if (honey && String(honey.value || '').trim()) {
                    return;
                }

                const labelMap = {
                    cctv: 'CCTV Installation',
                    electrical: 'Electrical Wiring',
                    airconditioning: 'Air Conditioning',
                    gates: 'Automated Gates',
                    fencing: 'Electric Fencing',
                    solar: 'Solar Energy',
                    smarthome: 'Smart Home System',
                    blindcurtain: 'Smart Window Solutions'
                };

                const name = String(document.getElementById('popupName')?.value || '').trim();
                const location = String(document.getElementById('popupLocation')?.value || '').trim();
                const serviceKey = String(popupService?.value || '').trim();
                const phone = String(document.getElementById('popupPhone')?.value || '').trim();
                const email = String(document.getElementById('popupEmail')?.value || '').trim();
                const message = String(document.getElementById('popupMessage')?.value || '').trim();
                const timelineKey = String(popupTimeline?.value || '').trim();
                const budget = String(document.getElementById('popupBudget')?.value || '').trim();
                const serviceLabel = labelMap[serviceKey] || 'Service';
                const timelineMap = {
                    urgent: 'Urgent (48 hours)',
                    standard: 'Standard (1-2 weeks)',
                    planned: 'Planned (1 month+)'
                };
                const timelineLabel = timelineMap[timelineKey] || 'Standard (1-2 weeks)';

                const invoice = buildQuoteInvoiceDraft({
                    name,
                    phone,
                    email,
                    location,
                    serviceKey,
                    serviceLabel,
                    message,
                    timelineLabel,
                    budget
                });
                renderQuoteInvoicePreview(invoice);

                let serverVerification = {
                    ok: false,
                    mode: 'local-only'
                };
                try {
                    serverVerification = await registerInvoiceOnServer({
                        client: {
                            name,
                            phone,
                            email,
                            location
                        },
                        request: {
                            serviceKey,
                            serviceLabel,
                            timeline: timelineLabel,
                            message,
                            budget: parseBudgetAmount(budget)
                        },
                        invoice
                    });
                } catch (error) {
                    console.warn('[HAILIFU] Invoice API verification failed:', error?.message || error);
                }

                const whatsappNumber = '233550997270';
                const lines = [
                    'New Verified Quote Request',
                    `Name: ${name || 'Not provided'}`,
                    `Phone: ${phone || 'Not provided'}`,
                    `Email: ${email || 'Not provided'}`,
                    `Location: ${location || 'Not provided'}`,
                    `Service: ${serviceLabel}`,
                    `Timeline: ${timelineLabel}`,
                    `Message: ${message || 'No details provided'}`,
                    `Invoice Code: ${invoice.verificationCode}`,
                    `Invoice Total: GHS ${invoice.total.toLocaleString()}`,
                    `Risk Check: ${invoice.fraudRisk}`,
                    `Verification: ${serverVerification.ok ? 'Server Verified' : 'Local Draft'}`
                ];
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
                const popup = window.open(whatsappUrl, '_blank');
                if (!popup) {
                    window.location.href = whatsappUrl;
                }

                addLead({
                    name,
                    phone,
                    email,
                    location,
                    service: serviceKey,
                    serviceLabel,
                    serviceAnswer: message,
                    timeline: timelineLabel,
                    invoiceCode: invoice.verificationCode,
                    invoiceTotal: invoice.total,
                    fraudRisk: invoice.fraudRisk,
                    verificationMode: serverVerification.ok ? 'server-verified' : 'local-only',
                    source: 'popupQuoteForm'
                });

                if (popupSuccess) {
                    popupSuccess.style.display = 'block';
                    popupSuccess.textContent = `Verified invoice ${invoice.verificationCode} generated. We will contact you shortly for confirmation.`;
                    setTimeout(() => {
                        popupSuccess.style.display = 'none';
                        closeQuotePopup();
                    }, 4000);
                } else {
                    closeQuotePopup();
                }

                popupQuoteForm.reset();
            });
        }

        const popupInvoiceInputs = ['popupName', 'popupPhone', 'popupLocation', 'popupMessage', 'popupBudget'];
        popupInvoiceInputs.forEach((id) => {
            const node = document.getElementById(id);
            if (!node || !popupQuoteForm) return;
            node.addEventListener('input', () => {
                const serviceKey = String(popupService?.value || '').trim();
                const serviceLabel = (popupService?.selectedOptions && popupService.selectedOptions[0]?.textContent) || 'Service';
                const timelineLabel = (popupTimeline?.selectedOptions && popupTimeline.selectedOptions[0]?.textContent) || 'Standard (1-2 weeks)';
                const invoice = buildQuoteInvoiceDraft({
                    name: document.getElementById('popupName')?.value,
                    phone: document.getElementById('popupPhone')?.value,
                    location: document.getElementById('popupLocation')?.value,
                    serviceKey,
                    serviceLabel,
                    message: document.getElementById('popupMessage')?.value,
                    timelineLabel,
                    budget: document.getElementById('popupBudget')?.value
                });
                renderQuoteInvoicePreview(invoice);
            });
        });
        if (popupService) popupService.addEventListener('change', () => {
            const invoice = buildQuoteInvoiceDraft({
                serviceKey: popupService.value,
                serviceLabel: popupService.selectedOptions?.[0]?.textContent || 'Service',
                timelineLabel: popupTimeline?.selectedOptions?.[0]?.textContent || 'Standard (1-2 weeks)',
                budget: document.getElementById('popupBudget')?.value,
                message: document.getElementById('popupMessage')?.value
            });
            renderQuoteInvoicePreview(invoice);
        });
        if (popupTimeline) popupTimeline.addEventListener('change', () => {
            const invoice = buildQuoteInvoiceDraft({
                serviceKey: popupService?.value,
                serviceLabel: popupService?.selectedOptions?.[0]?.textContent || 'Service',
                timelineLabel: popupTimeline.selectedOptions?.[0]?.textContent || 'Standard (1-2 weeks)',
                budget: document.getElementById('popupBudget')?.value,
                message: document.getElementById('popupMessage')?.value
            });
            renderQuoteInvoicePreview(invoice);
        });

        if (heroQuoteBtn) {
            heroQuoteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                setQuoteService(popupService?.value || '');
                openQuotePopup();
            });
        }

        if (servicesTitleCta) {
            servicesTitleCta.addEventListener('click', (e) => {
                e.preventDefault();
                setQuoteService('cctv');
                openQuotePopup();
            });
        }

        function bindQuoteButtons() {
            const buttons = document.querySelectorAll('.request-quote-btn');
            buttons.forEach((btn) => {
                if (btn.dataset.quoteBound) return;
                btn.dataset.quoteBound = '1';
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const parentCard = btn.closest('[data-service-category]');
                    const serviceKey = btn.dataset.quoteService
                        || parentCard?.dataset.serviceCategory
                        || '';
                    setQuoteService(serviceKey);
                    openQuotePopup();
                });
            });
        }

        bindQuoteButtons();

        function bindQuoteOpenTriggers() {
            document.querySelectorAll('[data-quote-open]').forEach((el) => {
                if (el.dataset.quoteOpenBound) return;
                el.dataset.quoteOpenBound = '1';
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    const key = String(el.dataset.quoteService || '').trim().toLowerCase();
                    if (key) setQuoteService(key);
                    openQuotePopup();
                });
            });
        }
        bindQuoteOpenTriggers();

        document.querySelectorAll('#service-cctv, #service-electrical, #service-airconditioning, #service-gates, #service-fencing, #service-solar, #service-smarthome, #service-blindcurtain').forEach((card) => {
            card.removeAttribute('role');
            card.removeAttribute('tabindex');
        });

        function filterProjects(filterValue) {
            const normalizedFilter = String(filterValue || 'all').toLowerCase().trim();
            const showcaseItems = document.querySelectorAll('#showcase .showcase-grid .showcase-item');
            if (!showcaseItems.length) return;
            const fadeMs = 260;

            showcaseItems.forEach(item => {
                const itemCategory = (item.getAttribute('data-category') || item.dataset.category || '').toLowerCase().trim();
                const shouldShow = normalizedFilter === 'all' || itemCategory === normalizedFilter;

                if (item._hideTimer) {
                    clearTimeout(item._hideTimer);
                    item._hideTimer = null;
                }

                if (shouldShow) {
                    item.style.display = '';
                    item.hidden = false;
                    item.setAttribute('aria-hidden', 'false');
                    requestAnimationFrame(() => {
                        item.classList.remove('is-hidden');
                        item.classList.add('is-visible');
                    });
                } else {
                    item.setAttribute('aria-hidden', 'true');
                    item.classList.remove('is-visible');
                    item.classList.add('is-hidden');
                    item.hidden = false;
                    item._hideTimer = setTimeout(() => {
                        if (item.classList.contains('is-hidden')) {
                            item.style.display = 'none';
                            item.hidden = true;
                        }
                    }, fadeMs);
                }
            });
            updateShowcaseEmptyState(normalizedFilter);
        }

        function updateShowcaseEmptyState(normalizedFilter) {
            const showcaseGrid = document.querySelector('#showcase .showcase-grid');
            if (!showcaseGrid) return;
            if (showcaseGrid.dataset.showcaseAssigned === '0') {
                const items = Array.from(showcaseGrid.querySelectorAll('.showcase-item'));
                items.forEach((item) => {
                    item.hidden = true;
                    item.setAttribute('aria-hidden', 'true');
                    item.style.display = 'none';
                    item.classList.add('is-hidden');
                    item.classList.remove('is-visible');
                });
                const emptyState = showcaseGrid.querySelector('.showcase-empty');
                if (!emptyState) {
                    const node = document.createElement('div');
                    node.className = 'showcase-empty';
                    node.textContent = 'Project coming soon';
                    showcaseGrid.appendChild(node);
                } else {
                    emptyState.textContent = 'Project coming soon';
                }
                return;
            }
            const items = Array.from(showcaseGrid.querySelectorAll('.showcase-item'));
            const matches = items.filter((item) => {
                const itemCategory = (item.getAttribute('data-category') || item.dataset.category || '').toLowerCase().trim();
                return normalizedFilter === 'all' || itemCategory === normalizedFilter;
            });
            const emptyState = showcaseGrid.querySelector('.showcase-empty');
            if (!matches.length) {
                if (!emptyState) {
                    const node = document.createElement('div');
                    node.className = 'showcase-empty';
                    node.textContent = 'Project coming soon';
                    showcaseGrid.appendChild(node);
                }
            } else if (emptyState) {
                emptyState.remove();
            }
        }

        const filterButtons = document.querySelectorAll('.showcase-filters .filter-btn');
        filterButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterProjects(button.dataset.filter || 'all');
            });
        });

        const showcaseGrid = document.querySelector('#showcase .showcase-grid');
        if (showcaseGrid && !showcaseGrid.dataset.modalClickBound) {
            showcaseGrid.dataset.modalClickBound = '1';
            let suppressShowcaseTap = false;
            let showcaseTouchStartX = 0;
            let showcaseTouchStartY = 0;

            showcaseGrid.addEventListener('touchstart', (e) => {
                const t = e.touches && e.touches[0];
                if (!t) return;
                showcaseTouchStartX = Number(t.clientX || 0);
                showcaseTouchStartY = Number(t.clientY || 0);
                suppressShowcaseTap = false;
            }, { passive: true });

            showcaseGrid.addEventListener('touchmove', (e) => {
                const t = e.touches && e.touches[0];
                if (!t) return;
                const dx = Math.abs(Number(t.clientX || 0) - showcaseTouchStartX);
                const dy = Math.abs(Number(t.clientY || 0) - showcaseTouchStartY);
                if (dx > 8 || dy > 8) suppressShowcaseTap = true;
            }, { passive: true });

            showcaseGrid.addEventListener('touchend', () => {
                window.setTimeout(() => {
                    suppressShowcaseTap = false;
                }, 0);
            }, { passive: true });

            // Disabled - replaced with photo gallery modal
            // showcaseGrid.addEventListener('click', (e) => {
            //     const card = e.target.closest('.showcase-item');
            //     if (!card || !showcaseGrid.contains(card)) return;
            //     if (suppressShowcaseTap) {
            //         e.preventDefault();
            //         return;
            //     }
            //     e.preventDefault();
            //     openProjectModalFromItem(card);
            // });
        }

        document.querySelectorAll('#showcase .showcase-grid .showcase-item').forEach(item => item.classList.add('is-visible'));
        if (filterButtons.length) {
            const active = document.querySelector('.showcase-filters .filter-btn.active') || filterButtons[0];
            if (active) {
                filterProjects(active.dataset.filter || 'all');
            }
        }

        let headerLastY = Math.max(0, window.scrollY || document.documentElement.scrollTop || 0);
        const updateHeaderScrolled = () => {
            if (!mainNav) return;
            const y = window.scrollY || document.documentElement.scrollTop || 0;
            const delta = y - headerLastY;
            mainNav.classList.toggle('is-scrolled', y > 12);
            // Hide while reading down, bring back as soon as the visitor scrolls up
            if (y <= 20 || document.documentElement.classList.contains('r7-lock')) {
                mainNav.classList.remove('is-hidden');
            } else if (delta > 6 && y > 240) {
                mainNav.classList.add('is-hidden');
            } else if (delta < -4) {
                mainNav.classList.remove('is-hidden');
            }
            if (backToTopBtn) backToTopBtn.classList.toggle('is-visible', y > 420);
            headerLastY = y;
        };

        updateHeaderScrolled();
        window.addEventListener('scroll', updateHeaderScrolled, { passive: true });

        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                try {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } catch {
                    window.scrollTo(0, 0);
                }
            });
        }

        // Scroll Animation Observer
        const scrollElements = document.querySelectorAll('.animate-on-scroll');

        if (scrollElements.length > 0) {
            if ('IntersectionObserver' in window) {
                const scrollObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.45, rootMargin: '0px 0px -10% 0px' });

                scrollElements.forEach(element => scrollObserver.observe(element));
            } else {
                scrollElements.forEach(element => element.classList.add('animated'));
            }
        }

        // Smooth Stats Dashboard Number Animation
        const statsDashboardGrid = document.querySelector('.stats-dashboard-grid');
        const statsCounterNodes = document.querySelectorAll('.stats-value[data-counter]');

        const animateStatsCounter = (node) => {
            const target = Number(node.dataset.counter || 0);
            if (!Number.isFinite(target)) return;

            const decimals = Math.max(0, Math.min(2, Number(node.dataset.decimals || 0)));
            const suffix = String(node.dataset.suffix || '');
            const duration = Math.max(900, Number(node.dataset.duration || 1300));
            const startValue = 0;
            const startTime = performance.now();

            const draw = (current) => {
                const value = decimals > 0 ? current.toFixed(decimals) : String(Math.round(current));
                node.textContent = `${value}${suffix}`;
            };

            const tick = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = startValue + ((target - startValue) * eased);
                draw(current);
                if (progress < 1) {
                    requestAnimationFrame(tick);
                } else {
                    draw(target);
                }
            };

            requestAnimationFrame(tick);
        };

        const startStatsCounters = () => {
            if (startStatsCounters.started) return;
            startStatsCounters.started = true;
            statsCounterNodes.forEach((node) => animateStatsCounter(node));
        };

        if (statsDashboardGrid && statsCounterNodes.length > 0) {
            if ('IntersectionObserver' in window) {
                const statsObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            startStatsCounters();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.4, rootMargin: '0px 0px -8% 0px' });

                statsObserver.observe(statsDashboardGrid);
            } else {
                startStatsCounters();
            }
        }

        // Review Toggle Functionality
        const reviewToggleButtons = document.querySelectorAll('[data-review-toggle]');
        const reviewPanels = document.querySelectorAll('[data-review-panel]');

        reviewToggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetPanel = button.dataset.reviewToggle;

                reviewToggleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                reviewPanels.forEach(panel => {
                    if (panel.dataset.reviewPanel === targetPanel) {
                        panel.classList.remove('is-hidden');
                    } else {
                        panel.classList.add('is-hidden');
                    }
                });
            });
        });

        // Interactive Star Rating Functionality
        const interactiveRating = document.getElementById('interactiveRating');
        const ratingValue = document.getElementById('ratingValue');
        const stars = interactiveRating ? interactiveRating.querySelectorAll('i') : [];
        let selectedRating = 0;

        function updateStars(rating) {
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                    star.classList.remove('hover');
                } else {
                    star.classList.remove('active');
                    star.classList.remove('hover');
                }
            });
        }

        function updateStarsHover(rating) {
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('hover');
                } else {
                    star.classList.remove('hover');
                }
            });
        }

        if (interactiveRating && stars.length > 0) {
            // Initialize stars
            stars.forEach((star, index) => {
                star.addEventListener('click', function() {
                    selectedRating = parseInt(this.dataset.rating);
                    ratingValue.value = selectedRating;
                    updateStars(selectedRating);
                });

                star.addEventListener('mouseenter', function() {
                    const hoverRating = parseInt(this.dataset.rating);
                    updateStarsHover(hoverRating);
                });
            });

            interactiveRating.addEventListener('mouseleave', function() {
                updateStars(selectedRating);
            });
        }

        // Submit Interactive Review Function
        function submitInteractiveReview() {
            const name = document.getElementById('leaveReviewerName').value;
            const rating = document.getElementById('ratingValue').value;
            const comment = document.getElementById('leaveReviewComment').value;

            // Validate form
            if (!name || !rating || !comment) {
                alert('Please fill in all fields and select a rating');
                return;
            }

            // Hide form and show thank you message
            const form = document.querySelector('.leave-review-form');
            const thankYou = document.getElementById('reviewThankYou');

            if (form && thankYou) {
                form.style.display = 'none';
                thankYou.style.display = 'block';

                // Reset form after 3 seconds
                setTimeout(() => {
                    form.style.display = 'block';
                    thankYou.style.display = 'none';
                    document.getElementById('leaveReviewerName').value = '';
                    document.getElementById('ratingValue').value = '0';
                    document.getElementById('leaveReviewComment').value = '';
                    updateStars(0);
                }, 3000);
            }
        }

        // Photo Gallery Modal Functionality
        const photoGalleryModal = document.getElementById('photoGalleryModal');
        const galleryBackdrop = document.getElementById('galleryBackdrop');
        const galleryCloseBtn = document.getElementById('galleryCloseBtn');
        const galleryGrid = document.getElementById('galleryGrid');
        const galleryTitle = document.getElementById('galleryTitle');
        const gallerySubtitle = document.getElementById('gallerySubtitle');
        const galleryTabs = document.getElementById('galleryTabs');
        const galleryGridView = document.getElementById('galleryGridView');
        const galleryLightboxView = document.getElementById('galleryLightboxView');
        const lightboxImage = document.getElementById('lightboxImage');
        const gallerySideCarousel = document.getElementById('gallerySideCarousel');
        const galleryPrevBtn = document.getElementById('galleryPrevBtn');
        const galleryNextBtn = document.getElementById('galleryNextBtn');
        let currentGalleryPhotos = [];
        let currentCollection = 'all';
        let currentPhotoIndex = 0;
        let filteredPhotos = [];

        function openPhotoGallery(project) {
            console.log('[Gallery] openPhotoGallery called with project:', project);
            if (!project || !photoGalleryModal) {
                console.log('[Gallery] Cannot open - missing project or modal');
                return;
            }

            // Set title and subtitle
            galleryTitle.textContent = project.title || 'Project Gallery';
            gallerySubtitle.textContent = project.description || 'Browse all photos';

            // Collect photos from the project
            currentGalleryPhotos = [];

            // Add main media
            if (project.mediaSrc) {
                currentGalleryPhotos.push({
                    src: project.mediaSrc,
                    type: project.mediaType || 'image',
                    collection: 'all'
                });
            }

            // Add media items if available
            if (project.mediaItems && Array.isArray(project.mediaItems)) {
                project.mediaItems.forEach((item, index) => {
                    if (item.mediaSrc) {
                        currentGalleryPhotos.push({
                            src: item.mediaSrc,
                            type: item.mediaType || 'image',
                            collection: index % 2 === 0 ? 'exterior' : 'interior'
                        });
                    }
                });
            }

            // Add some demo photos for visual testing
            const demoPhotos = [
                { src: 'assets/img/cctv.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/electrical.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/gate-automation.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/power-panel.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/lighting.webp', type: 'image', heightSpan: 2 },
                { src: 'assets/img/termination.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/site-work-2021.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/air-conditioning.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/cctv.webp', type: 'image', heightSpan: 2 },
                { src: 'assets/img/electrical.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/gate-automation.webp', type: 'image', heightSpan: 1 },
                { src: 'assets/img/power-panel.webp', type: 'image', heightSpan: 2 }
            ];

            demoPhotos.forEach((photo, index) => {
                currentGalleryPhotos.push({
                    src: photo.src,
                    type: photo.type,
                    collection: index % 3 === 0 ? 'exterior' : (index % 3 === 1 ? 'interior' : 'latest'),
                    heightSpan: photo.heightSpan || 1
                });
            });

            // Show grid view by default
            showGridView();
            renderGalleryGrid();
            photoGalleryModal.classList.add('active');
            photoGalleryModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closePhotoGallery() {
            if (!photoGalleryModal) return;

            // Remove focus from any element inside the modal
            const activeElement = document.activeElement;
            if (activeElement && photoGalleryModal.contains(activeElement)) {
                activeElement.blur();
            }

            photoGalleryModal.classList.remove('active');
            photoGalleryModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        function showGridView() {
            if (galleryGridView && galleryLightboxView) {
                galleryGridView.style.display = 'block';
                galleryLightboxView.style.display = 'none';
            }
        }

        function showLightboxView(photoIndex) {
            if (galleryGridView && galleryLightboxView) {
                galleryGridView.style.display = 'none';
                galleryLightboxView.style.display = 'flex';
                currentPhotoIndex = photoIndex;
                updateLightbox();
            }
        }

        function filterPhotos() {
            if (currentCollection === 'all') {
                filteredPhotos = currentGalleryPhotos;
            } else if (currentCollection === 'videos') {
                filteredPhotos = currentGalleryPhotos.filter(p => p.type === 'video');
            } else {
                filteredPhotos = currentGalleryPhotos.filter(p => p.collection === currentCollection);
            }
            return filteredPhotos;
        }

        function renderGalleryGrid() {
            if (!galleryGrid) return;

            const photos = filterPhotos();

            galleryGrid.innerHTML = '';

            if (photos.length === 0) {
                galleryGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: rgba(255,255,255,0.5); padding: 40px;">No photos in this collection</div>';
                return;
            }

            photos.forEach((photo, index) => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                if (photo.type === 'video') {
                    item.classList.add('video-indicator');
                }
                if (photo.heightSpan) {
                    item.style.gridRowEnd = `span ${photo.heightSpan}`;
                }

                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = `Photo ${index + 1}`;
                img.loading = 'lazy';

                item.appendChild(img);
                item.addEventListener('click', () => showLightboxView(index));
                galleryGrid.appendChild(item);
            });
        }

        function updateLightbox() {
            if (!lightboxImage || !gallerySideCarousel) return;

            const photos = filterPhotos();
            if (photos.length === 0) return;

            const currentPhoto = photos[currentPhotoIndex];
            lightboxImage.src = currentPhoto.src;
            lightboxImage.alt = `Photo ${currentPhotoIndex + 1}`;

            // Render carousel thumbnails
            gallerySideCarousel.innerHTML = '';
            photos.forEach((photo, index) => {
                const item = document.createElement('div');
                item.className = 'gallery-carousel-item';
                if (index === currentPhotoIndex) {
                    item.classList.add('active');
                }

                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = `Photo ${index + 1}`;

                item.appendChild(img);
                item.addEventListener('click', () => {
                    currentPhotoIndex = index;
                    updateLightbox();
                });
                gallerySideCarousel.appendChild(item);
            });

            // Scroll active thumbnail into view
            const activeItem = gallerySideCarousel.querySelector('.active');
            if (activeItem) {
                activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        function navigatePhoto(direction) {
            const photos = filterPhotos();
            if (photos.length === 0) return;

            currentPhotoIndex += direction;
            if (currentPhotoIndex < 0) {
                currentPhotoIndex = photos.length - 1;
            } else if (currentPhotoIndex >= photos.length) {
                currentPhotoIndex = 0;
            }
            updateLightbox();
        }

        function initPhotoGallery() {
            console.log('[Gallery] Initializing photo gallery...');
            console.log('[Gallery] Modal element:', photoGalleryModal);
            console.log('[Gallery] Grid element:', galleryGrid);

            // Close button
            if (galleryCloseBtn) {
                galleryCloseBtn.addEventListener('click', closePhotoGallery);
            }

            // Backdrop click
            if (galleryBackdrop) {
                galleryBackdrop.addEventListener('click', closePhotoGallery);
            }

            // Escape key
            document.addEventListener('keydown', (e) => {
                if (!photoGalleryModal.classList.contains('active')) return;

                if (e.key === 'Escape') {
                    closePhotoGallery();
                } else if (e.key === 'ArrowLeft') {
                    navigatePhoto(-1);
                } else if (e.key === 'ArrowRight') {
                    navigatePhoto(1);
                }
            });

            // Tab switching
            if (galleryTabs) {
                galleryTabs.addEventListener('click', (e) => {
                    const tab = e.target.closest('.gallery-tab');
                    if (!tab) return;

                    // Update active state
                    galleryTabs.querySelectorAll('.gallery-tab').forEach(t => {
                        t.classList.remove('active');
                        t.setAttribute('aria-pressed', 'false');
                    });
                    tab.classList.add('active');
                    tab.setAttribute('aria-pressed', 'true');

                    // Update collection
                    currentCollection = tab.dataset.collection || 'all';
                    showGridView();
                    renderGalleryGrid();
                });
            }

            // Navigation buttons
            if (galleryPrevBtn) {
                galleryPrevBtn.addEventListener('click', () => navigatePhoto(-1));
            }

            if (galleryNextBtn) {
                galleryNextBtn.addEventListener('click', () => navigatePhoto(1));
            }

            // Add click handlers to showcase items
            const showcaseItems = document.querySelectorAll('.showcase-item');
            console.log('[Gallery] Found showcase items:', showcaseItems.length);
            showcaseItems.forEach(item => {
                item.style.cursor = 'pointer';
                item.addEventListener('click', () => {
                    console.log('[Gallery] Showcase item clicked');
                    const category = item.dataset.category;
                    const title = item.querySelector('.showcase-title')?.textContent || 'Project';
                    const description = item.querySelector('.showcase-description')?.textContent || '';

                    openPhotoGallery({
                        title: title,
                        description: description,
                        category: category
                    });
                });
            });

            // Action buttons
            const manageBtn = document.getElementById('galleryManageBtn');
            const addBtn = document.getElementById('galleryAddBtn');

            if (manageBtn) {
                manageBtn.addEventListener('click', () => {
                    console.log('[Gallery] Manage photos clicked');
                    alert('Photo management feature coming soon!\n\nThis will allow you to:\n- Delete photos\n- Reorder photos\n- Edit photo captions\n- Manage collections');
                });
            }

            if (addBtn) {
                addBtn.addEventListener('click', () => {
                    console.log('[Gallery] Add photo clicked');
                    // Create a file input
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'image/*,video/*';
                    fileInput.multiple = true;

                    fileInput.addEventListener('change', (e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                            console.log('[Gallery] Selected files:', files.length);
                            alert(`Selected ${files.length} file(s) for upload.\n\nPhoto upload feature coming soon!\n\nThis will upload your photos to Cloudinary and add them to the gallery.`);
                        }
                    });

                    fileInput.click();
                });
            }
        }

        // Initialize gallery when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPhotoGallery);
        } else {
            initPhotoGallery();
        }

        // ── Google Business-style Review Modal ──────────────────────────
        (function initGoogleStyleReview() {
            const starContainer = document.getElementById('googleStarRating');
            const ratingInput = document.getElementById('reviewRatingInput');
            if (!starContainer || !ratingInput) return;

            const stars = starContainer.querySelectorAll('.google-star');

            function updateStars(selectedRating) {
                stars.forEach(star => {
                    const r = parseInt(star.dataset.rating);
                    star.setAttribute('aria-checked', r <= selectedRating ? 'true' : 'false');
                });
            }

            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const rating = parseInt(star.dataset.rating);
                    ratingInput.value = rating;
                    updateStars(rating);
                });

                star.addEventListener('mouseenter', () => {
                    const hoverRating = parseInt(star.dataset.rating);
                    stars.forEach(s => {
                        const r = parseInt(s.dataset.rating);
                        s.setAttribute('aria-checked', r <= hoverRating ? 'true' : 'false');
                    });
                });
            });

            starContainer.addEventListener('mouseleave', () => {
                const current = parseInt(ratingInput.value) || 0;
                updateStars(current);
            });

            // Initialize all stars as unchecked
            updateStars(0);

            // Google-style pill buttons for "Did you use this business?"
            const usedBtns = document.querySelectorAll('[data-review-used]');
            const usedInput = document.getElementById('reviewUsedInput');
            usedBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    usedBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
                    btn.setAttribute('aria-pressed', 'true');
                    if (usedInput) usedInput.value = btn.dataset.reviewUsed;
                });
            });
        })();

        // --- Google reviews (Places API New, 2026-10-01) ---
        // The old Maps JavaScript PlacesService is deprecated and was blocked
        // (ApiTargetBlockedMapError), so this asks the Places API (New) directly.
        // Key + Place ID come from Admin > Site Control (adverts row "__google_settings").
        // Google sends at most 5 reviews. Each visitor's browser keeps a copy for 12 hours.
        const GOOGLE_SETTINGS_ID = '__google_settings';
        const GOOGLE_PLACE_ID = 'ChIJyZ8YI4_E348RS_Xz7N_CSh4';
        // browser key that was in index.html; it must stay restricted to hailifugh.com in Google Cloud
        const GOOGLE_DEFAULT_KEY = 'AIzaSyBf0-nHMqu_ojZ1Ls-CEIHCXyiCnkNbRCY';
        const GOOGLE_CACHE_KEY = 'hailifu_google_place_v1';
        const GOOGLE_CACHE_MS = 12 * 60 * 60 * 1000;
        const GOOGLE_REVIEW_LINK = 'https://g.page/r/CdsiXmzUDUmjEAE/review';
        const GOOGLE_FIELD_MASK = 'rating,userRatingCount,reviews,googleMapsUri';

        function normalizeGoogleSettings(raw) {
            const t = raw && typeof raw === 'object' ? raw : {};
            const clean = (v) => String(v || '').trim().replace(/[^\w-]/g, '').slice(0, 120);
            return { apiKey: clean(t.apiKey), placeId: clean(t.placeId) };
        }

        async function loadGoogleSettings() {
            let saved = { apiKey: '', placeId: '' };
            const supabase = ensureSupabaseClient();
            if (supabase) {
                try {
                    const { data, error } = await withTimeout(
                        supabase.from(ADVERTS_TABLE).select('*').eq('id', GOOGLE_SETTINGS_ID),
                        8000,
                        'Loading Google settings'
                    );
                    if (!error && Array.isArray(data) && data[0]) saved = normalizeGoogleSettings(fromRemoteRow(data[0]));
                } catch {}
            }
            return { apiKey: saved.apiKey || GOOGLE_DEFAULT_KEY, placeId: saved.placeId || GOOGLE_PLACE_ID, saved };
        }

        async function saveGoogleSettings(settings) {
            const supabase = ensureSupabaseClient();
            if (!supabase) return { ok: false, message: 'Storage is offline.' };
            try {
                const record = { id: GOOGLE_SETTINGS_ID, type: 'settings', ...normalizeGoogleSettings(settings) };
                const { data, error } = await withTimeout(
                    supabase.from(ADVERTS_TABLE).upsert([toRemoteRow(record)], { onConflict: 'id' }).select(),
                    10000,
                    'Saving Google settings'
                );
                if (error) throw error;
                if (!Array.isArray(data) || !data.length) throw new Error('not allowed');
                try { localStorage.removeItem(GOOGLE_CACHE_KEY); } catch {}
                return { ok: true };
            } catch (err) {
                return { ok: false, message: /not allowed|security|42501|jwt/i.test(String(err?.message || err)) ? 'Not allowed. Sign in again and retry.' : 'Could not save. Check your connection.' };
            }
        }

        async function fetchGooglePlace(apiKey, placeId) {
            const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`, {
                headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': GOOGLE_FIELD_MASK }
            });
            let body = null;
            try { body = await res.json(); } catch {}
            if (!res.ok) {
                const err = new Error((body && body.error && body.error.message) || `Google answered ${res.status}`);
                err.status = res.status;
                throw err;
            }
            return body && typeof body === 'object' ? body : {};
        }

        function readGoogleCache(placeId) {
            try {
                const c = JSON.parse(localStorage.getItem(GOOGLE_CACHE_KEY) || 'null');
                if (c && c.placeId === placeId && Date.now() - Number(c.at) < GOOGLE_CACHE_MS && c.data) return c.data;
            } catch {}
            return null;
        }

        function writeGoogleCache(placeId, data) {
            try { localStorage.setItem(GOOGLE_CACHE_KEY, JSON.stringify({ at: Date.now(), placeId, data })); } catch {}
        }

        // Plain fields only, so nothing from Google is ever inserted as markup
        function toGoogleReviewCards(place) {
            return (Array.isArray(place && place.reviews) ? place.reviews : []).map((r) => {
                const author = (r && r.authorAttribution) || {};
                const text = String((r && ((r.text && r.text.text) || (r.originalText && r.originalText.text))) || '').trim();
                if (!text) return null;
                const photo = String(author.photoUri || '');
                let when = String(r.relativePublishTimeDescription || '');
                if (!when && r.publishTime) {
                    try { when = new Date(r.publishTime).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }); } catch {}
                }
                return {
                    name: String(author.displayName || 'Google user').trim().slice(0, 80),
                    photo: /^https:\/\/[^\s"'<>]+$/.test(photo) ? photo : '',
                    rating: Math.max(1, Math.min(5, Math.round(Number(r.rating) || 5))),
                    text: text.slice(0, 1200),
                    when
                };
            }).filter(Boolean).slice(0, 5);
        }

        function renderGoogleFallbackUI() {
            const grid = document.getElementById('google-reviews-grid');
            if (!grid) return;
            grid.innerHTML = `
                <div class="google-fallback-ui">
                    <i class="fab fa-google" aria-hidden="true"></i>
                    <p>Read what our clients say on Google.</p>
                    <a href="${GOOGLE_REVIEW_LINK}" target="_blank" rel="noopener" class="hailifu-review-link">See our Google reviews</a>
                </div>`;
        }

        function renderGoogleReviews(cards) {
            const grid = document.getElementById('google-reviews-grid');
            if (!grid) return;
            grid.innerHTML = cards.map((c) => {
                const initial = escapeHTML(c.name.charAt(0).toUpperCase() || 'G');
                const avatar = c.photo
                    ? `<img src="${escapeHTML(c.photo)}" alt="" class="google-reviewer-avatar" loading="lazy" referrerpolicy="no-referrer">`
                    : `<span class="google-reviewer-avatar is-initial" aria-hidden="true">${initial}</span>`;
                return `
                    <article class="google-review-card">
                        <div class="google-review-source"><i class="fab fa-google" aria-hidden="true"></i></div>
                        <div class="google-review-header">
                            ${avatar}
                            <div class="google-reviewer-info">
                                <span class="google-reviewer-name">${escapeHTML(c.name)}</span>
                                <span class="google-review-date">${escapeHTML(c.when)}</span>
                            </div>
                        </div>
                        <div class="google-review-stars" aria-label="${c.rating} out of 5 stars">${'\u2605'.repeat(c.rating)}${'\u2606'.repeat(5 - c.rating)}</div>
                        <p class="google-review-text">${escapeHTML(c.text)}</p>
                    </article>`;
            }).join('');
            // a broken Google photo falls back to the initial
            grid.querySelectorAll('img.google-reviewer-avatar').forEach((img) => {
                img.addEventListener('error', () => {
                    const span = document.createElement('span');
                    span.className = 'google-reviewer-avatar is-initial';
                    span.textContent = (img.closest('.google-review-card')?.querySelector('.google-reviewer-name')?.textContent || 'G').charAt(0).toUpperCase();
                    img.replaceWith(span);
                }, { once: true });
            });
        }

        function updateReviewStats(rating, total) {
            const avg = Number(rating);
            const count = Number(total);
            if (!(avg > 0)) return;
            try {
                if (applyFeaturableReviewMeta({ average: avg, total: count > 0 ? count : undefined })) refreshLiveReviewSection();
            } catch {}
            const formatted = avg.toFixed(1);
            const avgEl = document.getElementById('reviewAvgRating');
            const ratingNumber = document.getElementById('googleRatingNumber');
            if (avgEl) avgEl.textContent = formatted;
            if (ratingNumber) ratingNumber.textContent = formatted;
        }

        function showGooglePlace(place) {
            const cards = toGoogleReviewCards(place);
            if (cards.length) renderGoogleReviews(cards); else renderGoogleFallbackUI();
            updateReviewStats(place && place.rating, place && place.userRatingCount);
        }

        async function initGoogleReviews() {
            if (!document.getElementById('google-reviews-grid')) return;
            const settings = await loadGoogleSettings();
            const cached = readGoogleCache(settings.placeId);
            if (cached) { showGooglePlace(cached); return; }
            try {
                const place = await withTimeout(fetchGooglePlace(settings.apiKey, settings.placeId), 8000, 'Google reviews');
                writeGoogleCache(settings.placeId, place);
                showGooglePlace(place);
            } catch (err) {
                console.warn('[Hailifu] Google reviews unavailable (see Admin > Site Control):', err && err.message ? err.message : err);
                renderGoogleFallbackUI();
            }
        }

        // Admin > Site Control > Google reviews card (listeners delegated once)
        function describeGoogleError(err) {
            const msg = String(err && err.message ? err.message : err || '');
            if (err && err.status === 403) return `Google refused the key: ${msg} Check that "Places API (New)" is enabled and hailifugh.com is allowed for this key.`;
            if (err && (err.status === 400 || err.status === 404)) return `Google could not find that Place ID: ${msg}`;
            return `Could not reach Google: ${msg}`;
        }

        async function fillGoogleSettingsCard() {
            const settings = await loadGoogleSettings();
            const key = document.getElementById('gpApiKey');
            const pid = document.getElementById('gpPlaceId');
            if (key && !key.value) key.value = settings.saved.apiKey;
            if (pid && !pid.value) pid.value = settings.saved.placeId;
            if (key) key.placeholder = settings.saved.apiKey ? 'AIza...' : 'Using the built-in key';
            if (pid) pid.placeholder = GOOGLE_PLACE_ID;
        }

        function bindGoogleSettingsCard() {
            if (bindGoogleSettingsCard.bound) return;
            bindGoogleSettingsCard.bound = true;
            document.addEventListener('click', async (e) => {
                const btn = e.target.closest && e.target.closest('#gpCard [data-gp-action]');
                if (!btn || btn.disabled) return;
                const status = document.getElementById('gpStatus');
                const apiKey = String(document.getElementById('gpApiKey')?.value || '').trim();
                const placeId = String(document.getElementById('gpPlaceId')?.value || '').trim();
                const say = (text, tone) => { if (status) { status.textContent = text; status.dataset.tone = tone; } };
                btn.disabled = true;
                try {
                    if (btn.dataset.gpAction === 'test') {
                        say('Asking Google...', 'busy');
                        try {
                            const place = await withTimeout(fetchGooglePlace(apiKey || GOOGLE_DEFAULT_KEY, placeId || GOOGLE_PLACE_ID), 10000, 'Google test');
                            const n = toGoogleReviewCards(place).length;
                            const rating = Number(place.rating);
                            say(`Connected: ${rating > 0 ? rating.toFixed(1) : 'no'} stars from ${Number(place.userRatingCount) || 0} reviews. ${n} review${n === 1 ? '' : 's'} will show on the site.`, 'ok');
                        } catch (err) {
                            say(describeGoogleError(err), 'error');
                        }
                    } else if (btn.dataset.gpAction === 'save') {
                        const res = await saveGoogleSettings({ apiKey, placeId });
                        say(res.ok ? 'Saved. Visitors see the new reviews on their next visit.' : res.message, res.ok ? 'ok' : 'error');
                        showAdminMediaToast(res.ok ? 'Google settings saved' : res.message, res.ok ? 'success' : 'error');
                    }
                } finally {
                    btn.disabled = false;
                }
            });
        }

        // Execute activation
        loadBrandSettings();
        loadAftercareSettings();
        initGoogleReviews();
        
        if (typeof bumpPageLoads === 'function') bumpPageLoads();
    });
})();


