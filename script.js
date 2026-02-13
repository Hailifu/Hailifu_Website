const adminSecretEncoded = 'aGFpbGlmdTIwMjY=';
        const adminUnlockStorageKey = 'hailifu_admin_unlocked';

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
        const featuredBento = document.getElementById('featuredBento');
        const adminTrigger = document.getElementById('admin-trigger');
        const adminLogoLink = document.getElementById('headerLogo');
        const heroQuoteBtn = document.getElementById('heroQuoteBtn');
        const heroVideo = document.getElementById('heroVideo');
        const heroFallbackImage = document.getElementById('heroFallbackImage');
        const mainNav = document.getElementById('main-nav');
        const backToTopBtn = document.getElementById('backToTop');
        const servicesTitleCta = document.getElementById('servicesTitleCta');
        const themeToggle = document.getElementById('themeToggle');

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

        function featuredLoopPrefersNativeScroll() {
            try {
                return !!window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
            } catch {
                return false;
            }
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

        let approvedReviewsGrid = null;
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

        const cloudinaryCloudName = 'daovfi3i5';
        const defaultCloudinaryUnsignedPreset = 'ml_default';
        const cloudinaryPresetStorageKey = 'hailifu_cloudinary_upload_preset';
        const firebaseConfigStorageKey = 'hailifu_firebase_config';
        const hardcodedFirebaseConfig = {
            apiKey: 'AIzaSyBf0-nHMqu_ojZ1Ls-CEIHCXyiCnkNbRCY',
            authDomain: 'hailifu-website.firebaseapp.com',
            databaseURL: 'https://hailifu-website-default-rtdb.firebaseio.com/',
            projectId: 'hailifu-website',
            storageBucket: 'hailifu-website.firebasestorage.app',
            messagingSenderId: '209696316971',
            appId: '1:209696316971:web:4074db68735ba09221d46e'
        };
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
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-electrical-grid',
                title: 'Industrial Power Grid',
                name: 'Industrial Power Grid',
                category: 'electrical',
                description: 'Heavy-duty distribution upgrade with smart load balancing and redundant protection.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-gates-biometric',
                title: 'Biometric Entry Gate',
                name: 'Biometric Entry Gate',
                category: 'gates',
                description: 'Secure biometric access with real-time logging and fail-safe control.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-solar-hub',
                title: 'Solar Command Hub',
                name: 'Solar Command Hub',
                category: 'solar',
                description: 'Centralized solar command with live performance analytics and smart switching.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-solar-perimeter',
                title: 'Solar Security Perimeter',
                name: 'Solar Security Perimeter',
                category: 'solar',
                description: 'Solar-powered perimeter lighting and security coverage with resilient backup.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-electrical-residence',
                title: 'Electrical Smart Residence',
                name: 'Electrical Smart Residence',
                category: 'electrical',
                description: 'Smart home distribution with intelligent load scheduling and monitoring.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-hvac',
                title: 'Smart HVAC Control',
                name: 'Smart HVAC Control',
                category: 'airconditioning',
                description: 'Precision cooling systems with energy-efficient smart thermostats.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-fence',
                title: 'High-Tension Security',
                name: 'High-Tension Security',
                category: 'fencing',
                description: 'Advanced intrusion detection with localized alarm zones.',
                showInShowcase: true,
                showcase: true
            },
            {
                id: 'demo-blinds',
                title: 'Automated Shading',
                name: 'Automated Shading',
                category: 'blindcurtain',
                description: 'Smart motorized blinds integrated with light sensors for climate control.',
                showInShowcase: true,
                showcase: true
            }
        ];
        const defaultFirebaseSettingsPath = 'hailifu/settings';
        const integrityImageStorageKey = 'hailifu_integrity_image_url';
        const remoteConfigPublicIdStorageKey = 'hailifu_remote_config_public_id';
        const remoteConfigUrlStorageKey = 'hailifu_remote_config_url';
        const defaultRemoteConfigPublicId = 'hailifu_site_config';

        let remoteConfigState = null;
        let remoteConfigFingerprint = '';
        let remoteConfigPollTimer = null;

        let firebaseDb = null;
        let firebaseProjectsState = null;
        let firebaseProjectsRef = null;
        let firebaseSettingsRef = null;

        let adminPanel = null;
        let adminToggle = null;
        let adminTabs = [];
        let adminTabPanels = [];
        let reviewsRequireApproval = null;

        let adminLazyLoop = null;
        let adminLazyLoopTrack = null;
        let adminLazyLoopDots = null;
        let adminLazyLoopTimer = null;
        let adminLazyLoopIndex = 0;
        let adminLazyLoopCount = 0;
        let adminLazyLoopHasBindings = false;
        let adminLazyLoopSlides = [];

        const themeStorageKey = 'hailifu_theme';

        function applyTheme(theme) {
            const normalized = theme === 'light' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', normalized === 'light' ? 'light' : 'dark');
            if (themeToggle) themeToggle.setAttribute('aria-pressed', String(normalized === 'light'));

        }

        function getInitialTheme() {
            const stored = String(localStorage.getItem(themeStorageKey) || '').trim().toLowerCase();
            if (stored === 'light' || stored === 'dark') return stored;
            return 'dark';
        }

        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            const next = current === 'light' ? 'dark' : 'light';
            applyTheme(next);
            localStorage.setItem(themeStorageKey, next);
        }

        applyTheme(getInitialTheme());

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
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

        function readFirebaseConfig() {
            try {
                const fromWindow = window.HAILIFU_FIREBASE_CONFIG;
                if (fromWindow && typeof fromWindow === 'object') return fromWindow;
            } catch {}
            const stored = readJsonStorage(firebaseConfigStorageKey, null);
            if (stored && typeof stored === 'object') return stored;
            try {
                if (hardcodedFirebaseConfig && typeof hardcodedFirebaseConfig === 'object') return hardcodedFirebaseConfig;
            } catch {}
            return null;
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
            firebaseDb = null;
            firebaseProjectsState = null;
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

        function persistFirebaseProjectsPath(path) {
            const next = String(path || '').trim();
            writeJsonStorage(firebaseProjectsPathStorageKey, next);
        }

        function persistFirebaseSettingsPath(path) {
            const next = String(path || '').trim();
            writeJsonStorage(firebaseSettingsPathStorageKey, next);
        }

        function firebaseIsReady() {
            const cfg = readFirebaseConfig();
            if (!cfg) return false;
            if (!window.firebase) return false;
            if (!firebase.initializeApp) return false;
            if (!firebase.database) return false;
            return true;
        }

        function ensureFirebaseDb() {
            if (firebaseDb) return firebaseDb;
            if (!firebaseIsReady()) return null;
            try {
                if (!firebase.apps || !firebase.apps.length) {
                    firebase.initializeApp(readFirebaseConfig());
                }
            } catch {}
            try {
                firebaseDb = firebase.database();
                return firebaseDb;
            } catch {
                return null;
            }
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

        function getIntegrityImageUrl() {
            return String(localStorage.getItem(integrityImageStorageKey) || '').trim();
        }

        function setIntegrityImageUrlLocal(url) {
            const next = String(url || '').trim();
            if (next) localStorage.setItem(integrityImageStorageKey, next);
            else try { localStorage.removeItem(integrityImageStorageKey); } catch {}
        }

        function loadIntegrityImage(url) {
            const panel = document.getElementById('integrityPanel');
            const container = document.getElementById('integrityContainer');
            const img = document.getElementById('integrityImage');
            if (!container || !img) return;
            const raw = String(url || '').trim();
            if (!raw) {
                img.removeAttribute('src');
                img.style.display = 'none';
                if (panel) panel.classList.remove('is-loading');
                if (container) container.classList.add('integrity-empty');
                return;
            }
            if (container) container.classList.remove('integrity-empty');
            if (panel) panel.classList.add('is-loading');
            img.style.display = 'none';
            img.onload = function() {
                img.style.display = 'block';
                if (panel) panel.classList.remove('is-loading');
            };
            img.onerror = function() {
                if (panel) panel.classList.remove('is-loading');
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
            setValue('integrityStatus', 'SECURE');
            setValue('integrityUptime', '99.9%');
            setValue('integrityLatency', '< 15 min');
            setValue('integrityCoverage', '360°');
        }

        function upsertProjectInFirebase(project) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = 'projects';
            const id = String(project?.id || '').trim();
            if (!id) return Promise.reject(new Error('Missing project id'));
            return db.ref(`${path}/${id}`).set(stripProjectQuoteFields(project));
        }

        function addProjectInFirebase(project) {
            const db = ensureFirebaseDb();
            if (!db) return Promise.reject(new Error('Firebase not configured'));
            const path = 'projects';
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
            const path = 'projects';
            const id = String(projectId || '').trim();
            if (!id) return Promise.resolve();
            return db.ref(`${path}/${id}`).remove();
        }

        function getRemoteConfigUrl() {
            const explicitUrl = String(readJsonStorage(remoteConfigUrlStorageKey, '') || '').trim();
            if (explicitUrl && /^https?:\/\//i.test(explicitUrl)) return explicitUrl;
            const publicIdRaw = String(readJsonStorage(remoteConfigPublicIdStorageKey, '') || '').trim() || defaultRemoteConfigPublicId;
            const publicId = publicIdRaw.endsWith('.json') ? publicIdRaw : `${publicIdRaw}.json`;
            return `https://res.cloudinary.com/${cloudinaryCloudName}/raw/upload/${publicId}`;
        }

        function setRemoteConfigUrl(url) {
            const next = String(url || '').trim();
            writeJsonStorage(remoteConfigUrlStorageKey, next);
        }

        function setRemoteConfigPublicId(publicId) {
            const next = String(publicId || '').trim();
            writeJsonStorage(remoteConfigPublicIdStorageKey, next);
        }

        async function fetchRemoteConfigOnce() {
            const baseUrl = getRemoteConfigUrl();
            if (!baseUrl) return null;
            const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) throw new Error('Failed to load remote config');
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
                const heroUrl = String(remoteConfigState?.heroVideoUrl || '').trim();
                if (heroUrl) initHeroVideo(heroUrl);
                try {
                    const projects = Array.isArray(remoteConfigState?.projects) ? remoteConfigState.projects : null;
                    if (projects) {
                        writeJsonStorage('hailifu_projects', projects);
                    }
                } catch {}

                try {
                    loadProjects();
                    renderAdminLazyLoop();
                } catch {}
            } catch {}
        }

        function startRemoteConfigPolling() {
            if (remoteConfigPollTimer) return;
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
            if (startFirebaseProjectsSync()) {
                startFirebaseSettingsSync();
                stopRemoteConfigPolling();
                return true;
            }
            stopFirebaseSettingsSync();
            syncFromRemoteConfig();
            startRemoteConfigPolling();
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
                const additions = [];
                if (!hasFAuto) additions.push('f_auto');
                if (!hasQAuto) additions.push('q_auto');
                if (!additions.length) return raw;
                parts[0] = `${additions.join(',')},${first}`;
                return `${prefix}${parts.join('/')}`;
            }

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
            const fallback = 'media';
            const cleaned = String(override || fallback).trim();
            return cleaned.replace(/^\.?\/*/, '').replace(/\/+$/, '') || fallback;
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

            const lower = raw.toLowerCase();
            const isLegacyLocal = hadDrivePrefix || lower.includes('c:/') || lower.includes('/users/') || lower.includes('users/');
            if (isLegacyLocal) {
                const filenameOnly = raw.replace(/^.*\//, '').trim();
                if (filenameOnly) {
                    const folder = getPreferredMediaFolderName().toLowerCase();
                    const cleanName = filenameOnly.replace(/\s+/g, '_').toLowerCase();
                    return `./${folder}/${cleanName}${suffix}`;
                }
            }
            const marker = '/media/';
            let idx = lower.lastIndexOf(marker);
            if (idx >= 0) {
                raw = raw.slice(idx + marker.length);
            } else if (lower.startsWith('media/')) {
                raw = raw.slice('media/'.length);
            }

            if (!raw) return '';
            const folder = getPreferredMediaFolderName().toLowerCase();
            const cleaned = raw.replace(/\s+/g, '_').toLowerCase();
            return `./${folder}/${cleaned}${suffix}`;
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
            const filename = raw.replace(/^.*[\\/]/, '').trim();
            if (!filename) return '';
            const cleanName = filename.replace(/\s+/g, '_').toLowerCase();
            return `./media/${cleanName}`;
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
                gates: 'gates',
                gate: 'gates',
                autogate: 'gates',
                automatedgates: 'gates',
                solar: 'solar',
                solarenergy: 'solar',
                solars: 'solar',
                airconditioning: 'airconditioning',
                airconditioner: 'airconditioning',
                aircondition: 'airconditioning',
                ac: 'airconditioning',
                fencing: 'fencing',
                electricfence: 'fencing',
                fence: 'fencing',
                blindcurtain: 'blindcurtain',
                blinds: 'blindcurtain',
                windowblinds: 'blindcurtain',
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
                    ? `<img class="gallery-queue-thumb" src="${safeThumb}" alt="${safeName}">`
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
                const cleanName = file.name.replace(/\s+/g, '_');
                const localMediaPath = `media/${cleanName.toLowerCase()}`;
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
            const project = {
                createdAt: new Date().toISOString(),
                title: projectTitle?.value || 'Project',
                category: projectCategory?.value || 'cctv',
                description: projectDescription?.value || '',
                mediaType: primary.mediaType || 'image',
                mediaSrc: primary.mediaSrc || '',
                thumbSrc: primary.thumbSrc || '',
                mediaItems,
                featured: true,
                showcase: true,
                services: true,
                isStarred: false,
                isFeatured: false
            };

            try {
                if (firebaseIsReady()) {
                    setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                    await addProjectInFirebase(project);
                    alert('Project Saved Successfully!');
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

        function getReviews() {
            return readJsonStorage('hailifu_reviews', []);
        }

        function saveReviews(reviews) {
            writeJsonStorage('hailifu_reviews', reviews);
        }

        function renderPublicReviews() {
            const publicGrid = document.getElementById('publicReviewsGrid');
            if (!publicGrid) return;
            const reviews = getReviews().filter((review) => review.status === 'approved');
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
            if (!pendingReviewsGrid || !approvedReviewsGrid) return;
            const reviews = getReviews();
            const pending = reviews.filter((review) => review.status === 'pending');
            const approved = reviews.filter((review) => review.status === 'approved');
            const renderCard = (review, statusLabel) => {
                const name = String(review.name || 'Customer').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const comment = String(review.comment || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
                const stars = '\u2605\u2605\u2605\u2605\u2605'.slice(0, rating).padEnd(5, '\u2605');
                const actions = statusLabel === 'pending'
                    ? `<button type="button" data-review-approve="${review.id}">Approve</button>`
                    : '';
                return `
                    <div class="admin-review-card">
                        <div class="admin-review-header">
                            <strong>${name}</strong>
                            <span>${stars}</span>
                        </div>
                        <p>${comment}</p>
                        <div class="admin-review-actions">
                            ${actions}
                            <button type="button" data-review-delete="${review.id}">Delete</button>
                        </div>
                    </div>
                `;
            };
            pendingReviewsGrid.innerHTML = pending.length
                ? pending.map((review) => renderCard(review, 'pending')).join('')
                : '<div class="admin-empty">No pending reviews.</div>';
            approvedReviewsGrid.innerHTML = approved.length
                ? approved.map((review) => renderCard(review, 'approved')).join('')
                : '<div class="admin-empty">No approved reviews.</div>';
        }

        function refreshOverview() {
            if (overviewTotalLeads) overviewTotalLeads.textContent = String(getLeads().length);
            if (overviewRecentReviews) overviewRecentReviews.textContent = String(getReviews().length);
            if (overviewReach) overviewReach.textContent = String(readJsonStorage('hailifu_page_reach', 0));

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

        function bumpPageLoads() {
            const count = Number(readJsonStorage('hailifu_page_reach', 0)) || 0;
            writeJsonStorage('hailifu_page_reach', count + 1);
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
            void toast.offsetWidth;
            toast.classList.add('active');
            if (adminMediaToastTimer) clearTimeout(adminMediaToastTimer);
            adminMediaToastTimer = setTimeout(() => {
                toast.classList.remove('active');
            }, 1800);
        }

        function notifyAdminReviewSubmitted(review) {
            // Placeholder for future notifications
        }

        // Review Form Submission
        const reviewForm = document.getElementById('reviewForm');
        const formSuccess = document.getElementById('formSuccess');
        const reviewModal = document.getElementById('reviewModal');
        const reviewModalClose = document.getElementById('reviewModalClose');

        if (reviewForm) {
            reviewForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const formData = new FormData(reviewForm);

                const name = String(formData.get('name') || '').trim();
                const rating = Number(formData.get('rating') || 0);
                const comment = String(formData.get('comment') || '').trim();

                if (!name || !rating || !comment) {
                    alert('Please fill in your Name, Rating, and Review.');
                    return;
                }

                const settings = getReviewSettings();
                const successMessage = settings.requireApproval
                    ? 'Thanks! Your review was received and will appear after approval.'
                    : 'Thank you for your review! We appreciate your feedback.';
                const review = {
                    id: `r_${Date.now()}`,
                    createdAt: new Date().toISOString(),
                    name,
                    rating,
                    comment,
                    status: settings.requireApproval ? 'pending' : 'approved'
                };

                const reviews = getReviews();
                reviews.unshift(review);
                saveReviews(reviews);

                renderAdminReviews();
                renderPublicReviews();
                refreshOverview();
                notifyAdminReviewSubmitted(review);

                if (formSuccess) {
                    formSuccess.textContent = successMessage;
                    formSuccess.style.display = 'block';
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                        closeReviewModal();
                    }, 5000);
                } else {
                    closeReviewModal();
                }

                reviewForm.reset();
            });
        }

        function openReviewModal() {
            if (!reviewModal) return;
            if (formSuccess) formSuccess.style.display = 'none';
            if (reviewForm) reviewForm.reset();
            reviewModal.classList.add('active');
            reviewModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            const nameInput = document.getElementById('reviewerName');
            if (nameInput) nameInput.focus();
        }

        function closeReviewModal() {
            if (!reviewModal) return;
            reviewModal.classList.remove('active');
            reviewModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }

        document.addEventListener('click', (e) => {
            const opener = e.target.closest('[data-review-modal-open]');
            if (!opener) return;
            e.preventDefault();
            openReviewModal();
        });

        if (reviewModalClose) {
            reviewModalClose.addEventListener('click', closeReviewModal);
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
                gate: 'Hello! Looking for a professional Auto-Gate technician?',
                gates: 'Hello! Looking for a professional Auto-Gate technician?',
                ac: 'Hi! Need an AC Installer or Air Condition Technician for installation or repairs?',
                aircondition: 'Hi! Need an AC Installer or Air Condition Technician for installation or repairs?',
                airconditioning: 'Hi! Need an AC Installer or Air Condition Technician for installation or repairs?',
                blinds: 'Hello! Interested in Smart Blinds / Curtain & Window Blinds?',
                blindcurtain: 'Hello! Interested in Smart Blinds / Curtain & Window Blinds?',
                electrical: 'Hi! Need a professional Electrician for wiring, installations, or repairs?'
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

        const adminKnockWindowMs = 3000;
        const adminKnockCount = 5;
        const adminClickDelayMs = 600;
        let adminKnocks = [];
        let adminKnockTimer = null;

        function decodeAdminSecret() {
            try {
                return atob(adminSecretEncoded || '');
            } catch {
                return '';
            }
        }

        function isAdminUnlocked() {
            try {
                return sessionStorage.getItem(adminUnlockStorageKey) === '1';
            } catch {
                return false;
            }
        }

        function setAdminUnlocked() {
            try {
                sessionStorage.setItem(adminUnlockStorageKey, '1');
            } catch {}
        }

        function seedOpsLayer() {
            if (adminPanel) return adminPanel;
            const existing = document.getElementById('adminPanel');
            if (existing) {
                adminPanel = existing;
                return adminPanel;
            }
            const markup = `
                <div class="admin-panel" id="adminPanel" aria-hidden="true">
                    <div class="admin-header">
                        <div class="admin-brand">
                            <div class="admin-logo-wrap">
                                <img src="./logo.webp" alt="Hailifu" class="admin-logo">
                            </div>
                            <div class="admin-brand-text">
                                <div class="admin-title">Premium Command Center</div>
                                <div class="admin-subtitle">Hailifu Ops Console</div>
                            </div>
                        </div>

                        <div class="admin-status" role="status" aria-live="polite">
                            <span class="status-pulse" aria-hidden="true"></span>
                            <div class="status-text">
                                <span class="status-label">System Status</span>
                                <span class="status-value">Operational</span>
                            </div>
                        </div>

                        <button class="admin-toggle" id="adminToggle" type="button" aria-label="Close admin panel">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="admin-content">
                        <div class="admin-tabs">
                            <button class="admin-tab active" type="button" data-admin-tab="overview">Overview</button>
                            <button class="admin-tab" type="button" data-admin-tab="leads">Leads</button>
                            <button class="admin-tab" type="button" data-admin-tab="projects">Projects</button>
                            <button class="admin-tab" type="button" data-admin-tab="reviews">Reviews</button>
                        </div>
                        <div class="admin-tab-panel active" data-admin-panel="overview">
                            <div class="command-center-grid">
                                <div class="admin-section admin-section--metrics full-span">
                                    <div class="admin-section-heading">
                                        <h3><i class="fas fa-gauge-high"></i> Performance Metrics</h3>
                                        <span class="admin-section-tag">Live Sync</span>
                                    </div>
                                    <div class="metrics-grid">
                                        <div class="metrics-card metrics-card--accent">
                                            <span class="metrics-label">Total Leads</span>
                                            <div class="metrics-value" id="overviewTotalLeads">0</div>
                                            <span class="metrics-meta">Active inquiries</span>
                                        </div>
                                        <div class="metrics-card">
                                            <span class="metrics-label">Reviews</span>
                                            <div class="metrics-value" id="overviewRecentReviews">0</div>
                                            <span class="metrics-meta">Awaiting approval</span>
                                        </div>
                                        <div class="metrics-card metrics-card--success">
                                            <span class="metrics-label">Page Reach</span>
                                            <div class="metrics-value" id="overviewReach">0</div>
                                            <span class="metrics-meta">Weekly touches</span>
                                        </div>
                                        <div class="metrics-card">
                                            <span class="metrics-label">Response Window</span>
                                            <div class="metrics-value">12m</div>
                                            <span class="metrics-meta">Avg. turnaround</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin-section admin-section--actions full-span">
                                    <div class="admin-section-heading">
                                        <h3><i class="fas fa-rocket"></i> Action Tiles</h3>
                                        <span class="admin-section-tag">Rapid Deploy</span>
                                    </div>
                                    <div class="action-tiles">
                                        <button class="action-tile" type="button">
                                            <span class="action-icon"><i class="fas fa-bolt"></i></span>
                                            <div class="action-details">
                                                <strong>Deploy Update</strong>
                                                <span>Sync new assets</span>
                                            </div>
                                        </button>
                                        <button class="action-tile" type="button">
                                            <span class="action-icon"><i class="fas fa-sync-alt"></i></span>
                                            <div class="action-details">
                                                <strong>Restart Loop</strong>
                                                <span>Refresh showcase</span>
                                            </div>
                                        </button>
                                        <button class="action-tile" type="button">
                                            <span class="action-icon"><i class="fas fa-satellite-dish"></i></span>
                                            <div class="action-details">
                                                <strong>Broadcast Brief</strong>
                                                <span>Team status ping</span>
                                            </div>
                                        </button>
                                        <button class="action-tile" type="button">
                                            <span class="action-icon"><i class="fas fa-shield-alt"></i></span>
                                            <div class="action-details">
                                                <strong>Run Diagnostics</strong>
                                                <span>Integrity scan</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div class="admin-section full-span">
                                    <div class="admin-section-heading">
                                        <h3><i class="fas fa-image"></i> Integrity Graphic</h3>
                                        <span class="admin-section-tag">Site Asset</span>
                                    </div>
                                    <p style="margin-bottom:12px; font-size:0.85rem; color: rgba(255,255,255,0.7);">Image shown in the &quot;Why Choose Us&quot; area. Upload to replace.</p>
                                    <input type="file" id="integrityImageInput" class="admin-file-input" accept="image/*" style="position:absolute; left:-9999px; width:1px; height:1px; opacity:0;">
                                    <button class="upload-btn admin-action-btn integrity-graphic-btn" id="integrityGraphicBtn" type="button"><i class="fas fa-upload"></i> Change Integrity Graphic</button>
                                    <div class="integrity-upload-progress" id="integrityUploadProgress" aria-hidden="true" style="display:none; margin-top:10px;">
                                        <div class="upload-progress-bar"><div class="upload-progress-fill" id="integrityUploadProgressFill" style="width:0%"></div></div>
                                    </div>
                                </div>
                                <div class="admin-section admin-section--interest">
                                    <h3><i class="fas fa-signal"></i> Client Interest</h3>
                                    <div class="interest-grid">
                                        <div class="interest-row">
                                            <div class="interest-label">
                                                <span>CCTV</span>
                                                <strong id="interestCctvCount">0</strong>
                                            </div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestCctv"></div></div>
                                        </div>

                                        <div class="interest-row">
                                            <div class="interest-label">
                                                <span>Electrical</span>
                                                <strong id="interestElectricalCount">0</strong>
                                            </div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestElectrical"></div></div>
                                        </div>

                                        <div class="interest-row">
                                            <div class="interest-label">
                                                <span>Air Conditioning</span>
                                                <strong id="interestAirconditioningCount">0</strong>
                                            </div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestAirconditioning"></div></div>
                                        </div>

                                        <div class="interest-row">
                                            <div class="interest-label">
                                                <span>Smart Window Solutions</span>
                                                <strong id="interestBlindcurtainCount">0</strong>
                                            </div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestBlindcurtain"></div></div>
                                        </div>

                                        <div class="interest-row">
                                            <div class="interest-label">
                                                <span>Automated Gates</span>
                                                <strong id="interestGatesCount">0</strong>
                                            </div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestGates"></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin-section admin-section--preview">
                                    <h3><i class="fas fa-infinity"></i> Live Showcase Loop</h3>
                                    <div class="admin-lazyloop" id="adminLazyLoop">
                                        <div class="admin-lazyloop-viewport">
                                            <div class="admin-lazyloop-track" id="adminLazyLoopTrack"></div>
                                        </div>
                                        <div class="admin-lazyloop-dots" id="adminLazyLoopDots" aria-hidden="true"></div>
                                    </div>
                                </div>
                                <div class="admin-section admin-section--logs full-span">
                                    <div class="admin-section-heading">
                                        <h3><i class="fas fa-terminal"></i> Recent Logs</h3>
                                        <span class="admin-section-tag">Live Feed</span>
                                    </div>
                                    <div class="admin-logs">
                                        <div class="log-row">
                                            <span class="log-time">00:24:18</span>
                                            <span class="log-message">Deploy package queued</span>
                                            <span class="log-status"><span class="log-dot" aria-hidden="true"></span>OK</span>
                                        </div>
                                        <div class="log-row">
                                            <span class="log-time">00:24:41</span>
                                            <span class="log-message">Lead sync handshake</span>
                                            <span class="log-status"><span class="log-dot" aria-hidden="true"></span>PASS</span>
                                        </div>
                                        <div class="log-row">
                                            <span class="log-time">00:25:02</span>
                                            <span class="log-message">Media pipeline aligned</span>
                                            <span class="log-status"><span class="log-dot" aria-hidden="true"></span>LIVE</span>
                                        </div>
                                        <div class="log-row">
                                            <span class="log-time">00:25:30</span>
                                            <span class="log-message">Analytics pulse check</span>
                                            <span class="log-status"><span class="log-dot" aria-hidden="true"></span>OK</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin-section admin-section--leads full-span">
                                    <h3><i class="fas fa-user-clock"></i> Recent Leads</h3>
                                    <div id="overviewLeadsList"></div>
                                </div>
                            </div>
                        </div>
                        <div class="admin-tab-panel" data-admin-panel="leads">
                            <div class="admin-section">
                                <h3><i class="fas fa-id-card"></i> Lead Inbox</h3>
                                <div id="leadsGrid"></div>
                            </div>
                        </div>
                        <div class="admin-tab-panel" data-admin-panel="projects">
                            <div class="admin-section">
                                <h3><i class="fas fa-images"></i> Gallery Manager</h3>
                                <p style="margin-bottom:14px; font-size:0.85rem; color: rgba(255,255,255,0.7);">Add Media: upload images/videos, set title and description, delete or reorder. Changes persist after refresh.</p>
                                <form class="upload-form">
                                    <div class="form-group">
                                        <label for="cloudinaryPreset">Cloudinary Unsigned Upload Preset</label>
                                        <input id="cloudinaryPreset" type="password" placeholder="Preset name">
                                    </div>
                                    <div class="form-group">
                                        <label for="firebaseConfig">Firebase Config (JSON)</label>
                                        <textarea id="firebaseConfig" placeholder='{"apiKey":"...","authDomain":"...","databaseURL":"...","projectId":"...","appId":"..."}'></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="firebaseProjectsPath">Firebase Projects Path</label>
                                        <input id="firebaseProjectsPath" type="text" placeholder="hailifu/projects">
                                    </div>
                                    <div class="form-group">
                                        <label for="firebaseSettingsPath">Firebase Settings Path</label>
                                        <input id="firebaseSettingsPath" type="text" placeholder="hailifu/settings">
                                    </div>
                                    <div class="form-group">
                                        <label for="remoteConfigPublicId">Remote Config Public ID</label>
                                        <input id="remoteConfigPublicId" type="text" placeholder="hailifu_site_config">
                                    </div>
                                    <div class="form-group">
                                        <label for="remoteConfigUrl">Remote Config URL (optional override)</label>
                                        <input id="remoteConfigUrl" type="url" placeholder="https://res.cloudinary.com/.../raw/upload/...json">
                                    </div>
                                    <div class="form-group">
                                        <label for="projectTitle">Project Title</label>
                                        <input id="projectTitle" type="text" placeholder="Project name">
                                    </div>
                                    <div class="form-group">
                                        <label for="projectCategory">Showcase Project Category</label>
                                        <select id="projectCategory">
                                            <option value="all">All Projects</option>
                                            <option value="cctv">CCTV</option>
                                            <option value="electrical">Electrical</option>
                                            <option value="gates">Automated Gates</option>
                                            <option value="solar">Solar Energy</option>
                                            <option value="fencing">Electric Fence</option>
                                            <option value="airconditioning">Air Conditioner</option>
                                            <option value="blindcurtain">Window Blinds</option>
                                            <option value="smarthome">Smart Home</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="projectDescription">Description</label>
                                        <textarea id="projectDescription" placeholder="Short summary"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Media Type</label>
                                        <div class="media-type-toggle">
                                            <button class="media-btn active" type="button" data-type="image"><i class="fas fa-image"></i> Image</button>
                                            <button class="media-btn" type="button" data-type="video"><i class="fas fa-video"></i> Video</button>
                                        </div>
                                    </div>
                                    <div class="upload-controls">
                                        <div class="form-group">
                                            <label>Upload Media</label>
                                            <div class="file-upload-area gallery-manager-dropzone" id="fileUploadArea">
                                                <div class="upload-content">
                                                    <i class="fas fa-cloud-upload-alt"></i>
                                                    <p>Drag and drop or click to upload</p>
                                                    <span class="file-types">PNG, JPG, MP4 (max 4MB)</span>
                                                </div>
                                                <input id="projectFile" class="admin-file-input" type="file" accept="image/*,video/*" multiple style="display:none;">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="projectMediaUrl">Or Media URL (YouTube / direct link)</label>
                                            <input id="projectMediaUrl" type="url" placeholder="https://youtube.com/shorts/...">
                                        </div>
                                        <div class="form-group">
                                            <label>Gallery Items</label>
                                            <div class="gallery-queue" id="galleryQueue" aria-live="polite">
                                                <div class="gallery-queue-empty">No media added yet.</div>
                                            </div>
                                            <div class="gallery-queue-actions">
                                                <button class="upload-btn upload-btn--ghost" id="addGalleryItemBtn" type="button"><i class="fas fa-plus"></i> Add to Gallery</button>
                                                <button class="upload-btn upload-btn--ghost" id="clearGalleryBtn" type="button"><i class="fas fa-trash"></i> Clear</button>
                                            </div>
                                        </div>
                                        <div class="form-group" style="display:flex; align-items:center; gap:10px;">
                                            <input type="checkbox" id="setAsHeroToggle" style="width:auto;">
                                            <label for="setAsHeroToggle" style="margin:0; text-transform:none; letter-spacing:0; font-weight:700;">Set as Hero Background Video</label>
                                        </div>
                                        <button class="upload-btn admin-action-btn" id="uploadBtn" type="button"><i class="fas fa-upload"></i> Save Project</button>
                                        <div class="upload-progress" id="uploadProgress" aria-hidden="true">
                                            <div class="upload-progress-row">
                                                <span class="upload-spinner" aria-hidden="true"></span>
                                                <span class="upload-progress-text" id="uploadProgressText">Uploading...</span>
                                            </div>
                                            <div class="upload-progress-bar">
                                                <div class="upload-progress-fill" id="uploadProgressFill" style="width:0%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-layer-group"></i> All Media</h3>
                                <div id="projectsGrid" class="projects-grid"></div>
                            </div>
                        </div>
                        <div class="admin-tab-panel" data-admin-panel="reviews">
                            <div class="admin-section">
                                <h3><i class="fas fa-sliders-h"></i> Review Settings</h3>
                                <label style="display:flex; align-items:center; gap:10px; color: rgba(255,255,255,0.85);">
                                    <input type="checkbox" id="reviewsRequireApproval">
                                    Require approval before reviews appear publicly.
                                </label>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-hourglass-half"></i> Pending Reviews</h3>
                                <div id="pendingReviewsGrid"></div>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-check-circle"></i> Approved Reviews</h3>
                                <div id="approvedReviewsGrid"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', markup);
            adminPanel = document.getElementById('adminPanel');
            return adminPanel;
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
            const maxSlides = 4;
            const cacheStamp = Date.now();
            const featured = projects
                .filter((p) => p && p.featured)
                .map((p) => {
                    if (!p || typeof p !== 'object') return null;
                    const mediaSrc = String(p.mediaSrc || p.imageUrl || '').trim();
                    if (!mediaSrc) return null;
                    return {
                        ...p,
                        mediaSrc,
                        mediaType: String(p.mediaType || 'image') || 'image'
                    };
                })
                .filter(Boolean)
                .sort((a, b) => {
                    const ta = Number(a?.timestamp) || (Date.parse(a?.createdAt || '') || 0);
                    const tb = Number(b?.timestamp) || (Date.parse(b?.createdAt || '') || 0);
                    return tb - ta;
                })
                .slice(0, maxSlides);

            adminLazyLoopCount = featured.length;
            adminLazyLoopIndex = 0;

            if (!featured.length) {
                adminLazyLoopTrack.innerHTML = `
                    <div class="admin-lazyloop-slide is-empty">
                        <div class="admin-lazyloop-overlay">
                            <div class="admin-lazyloop-title">No projects yet</div>
                            <div class="admin-lazyloop-subtitle">Add a project in the Admin Panel to see it here.</div>
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
                    return `<img src="${finalThumb}" alt="" ${crossorigin} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')">`;
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
                return `<img src="${finalSrc}" alt="" ${crossorigin} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')">`;
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

        function setAdminTab(tabKey) {
            if (!adminTabs.length || !adminTabPanels.length) {
                adminTabs = Array.from(document.querySelectorAll('.admin-tab'));
                adminTabPanels = Array.from(document.querySelectorAll('.admin-tab-panel'));
            }
            if (!adminTabs.length || !adminTabPanels.length) return;

            const normalizedKey = String(tabKey || '').trim().toLowerCase();
            if (!normalizedKey) return;

            adminTabs.forEach((tab) => {
                const tabValue = String(tab.dataset.adminTab || '').trim().toLowerCase();
                tab.classList.toggle('active', tabValue === normalizedKey);
            });
            adminTabPanels.forEach((panel) => {
                const panelValue = String(panel.dataset.adminPanel || '').trim().toLowerCase();
                const isActive = panelValue === normalizedKey;
                panel.classList.toggle('active', isActive);
                panel.style.display = isActive ? 'block' : 'none';
            });

            if (normalizedKey === 'overview') startAdminLazyLoop();
            else stopAdminLazyLoop();
        }

        function syncOpsNodes() {
            if (!adminPanel || adminBindingsReady) return;
            adminBindingsReady = true;

            adminToggle = document.getElementById('adminToggle');
            adminTabs = Array.from(document.querySelectorAll('.admin-tab'));
            adminTabPanels = Array.from(document.querySelectorAll('.admin-tab-panel'));
            reviewsRequireApproval = document.getElementById('reviewsRequireApproval');
            pendingReviewsGrid = document.getElementById('pendingReviewsGrid');
            approvedReviewsGrid = document.getElementById('approvedReviewsGrid');
            overviewTotalLeads = document.getElementById('overviewTotalLeads');
            overviewRecentReviews = document.getElementById('overviewRecentReviews');
            overviewReach = document.getElementById('overviewReach');
            overviewLeadsList = document.getElementById('overviewLeadsList');
            interestCctv = document.getElementById('interestCctv');
            interestElectrical = document.getElementById('interestElectrical');
            interestGates = document.getElementById('interestGates');
            interestAirconditioning = document.getElementById('interestAirconditioning');
            interestBlindcurtain = document.getElementById('interestBlindcurtain');
            interestCctvCount = document.getElementById('interestCctvCount');
            interestElectricalCount = document.getElementById('interestElectricalCount');
            interestGatesCount = document.getElementById('interestGatesCount');
            interestAirconditioningCount = document.getElementById('interestAirconditioningCount');
            interestBlindcurtainCount = document.getElementById('interestBlindcurtainCount');
            leadsGrid = document.getElementById('leadsGrid');
            projectsGrid = document.getElementById('projectsGrid');
            uploadBtn = document.getElementById('uploadBtn');
            uploadProgress = document.getElementById('uploadProgress');
            uploadProgressFill = document.getElementById('uploadProgressFill');
            uploadProgressText = document.getElementById('uploadProgressText');
            cloudinaryPresetInput = document.getElementById('cloudinaryPreset');
            firebaseConfigInput = document.getElementById('firebaseConfig');
            firebaseProjectsPathInput = document.getElementById('firebaseProjectsPath');
            firebaseSettingsPathInput = document.getElementById('firebaseSettingsPath');
            remoteConfigPublicIdInput = document.getElementById('remoteConfigPublicId');
            remoteConfigUrlInput = document.getElementById('remoteConfigUrl');
            setAsHeroToggle = document.getElementById('setAsHeroToggle');
            projectTitle = document.getElementById('projectTitle');
            projectCategory = document.getElementById('projectCategory');
            projectDescription = document.getElementById('projectDescription');
            projectFile = document.getElementById('projectFile');
            projectMediaUrl = document.getElementById('projectMediaUrl');
            fileUploadArea = document.getElementById('fileUploadArea');
            galleryQueue = document.getElementById('galleryQueue');
            addGalleryItemBtn = document.getElementById('addGalleryItemBtn');
            clearGalleryBtn = document.getElementById('clearGalleryBtn');
            mediaTypeButtons = Array.from(document.querySelectorAll('.media-btn'));

            adminLazyLoop = document.getElementById('adminLazyLoop');
            adminLazyLoopTrack = document.getElementById('adminLazyLoopTrack');
            adminLazyLoopDots = document.getElementById('adminLazyLoopDots');

            if (adminToggle) {
                adminToggle.addEventListener('click', haltDataSync);
            }

            adminTabs.forEach((tab) => {
                tab.addEventListener('click', () => {
                    setAdminTab(tab.dataset.adminTab);
                });
            });

            if (reviewsRequireApproval) {
                const settings = getReviewSettings();
                reviewsRequireApproval.checked = !!settings.requireApproval;
                reviewsRequireApproval.addEventListener('change', () => {
                    saveReviewSettings({ requireApproval: !!reviewsRequireApproval.checked });
                });
            }

            if (cloudinaryPresetInput) {
                const stored = String(readJsonStorage(cloudinaryPresetStorageKey, '') || '').trim();
                if (!cloudinaryPresetInput.value) {
                    cloudinaryPresetInput.value = stored || defaultCloudinaryUnsignedPreset;
                }
                cloudinaryPresetInput.addEventListener('change', persistCloudinaryPreset);
                cloudinaryPresetInput.addEventListener('blur', persistCloudinaryPreset);
            }

            if (firebaseConfigInput) {
                const stored = readFirebaseConfig();
                if (!firebaseConfigInput.value && stored) {
                    try { firebaseConfigInput.value = JSON.stringify(stored); } catch {}
                }
                const persist = () => {
                    const ok = persistFirebaseConfigFromText(firebaseConfigInput.value);
                    if (!ok) {
                        alert('Firebase config must be valid JSON.');
                        return;
                    }
                    resetFirebaseRuntime();
                    startServerlessProjectsSync();
                };
                firebaseConfigInput.addEventListener('change', persist);
                firebaseConfigInput.addEventListener('blur', persist);
            }

            if (firebaseProjectsPathInput) {
                const stored = String(readJsonStorage(firebaseProjectsPathStorageKey, '') || '').trim();
                if (!firebaseProjectsPathInput.value) firebaseProjectsPathInput.value = stored || defaultFirebaseProjectsPath;
                const persist = () => {
                    persistFirebaseProjectsPath(firebaseProjectsPathInput.value);
                    resetFirebaseRuntime();
                    startServerlessProjectsSync();
                };
                firebaseProjectsPathInput.addEventListener('change', persist);
                firebaseProjectsPathInput.addEventListener('blur', persist);
            }

            if (firebaseSettingsPathInput) {
                const stored = String(readJsonStorage(firebaseSettingsPathStorageKey, '') || '').trim();
                if (!firebaseSettingsPathInput.value) firebaseSettingsPathInput.value = stored || defaultFirebaseSettingsPath;
                const persist = () => {
                    persistFirebaseSettingsPath(firebaseSettingsPathInput.value);
                    resetFirebaseRuntime();
                    startServerlessProjectsSync();
                };
                firebaseSettingsPathInput.addEventListener('change', persist);
                firebaseSettingsPathInput.addEventListener('blur', persist);
            }

            if (remoteConfigPublicIdInput) {
                const stored = String(readJsonStorage(remoteConfigPublicIdStorageKey, '') || '').trim();
                remoteConfigPublicIdInput.value = stored || defaultRemoteConfigPublicId;
                remoteConfigPublicIdInput.addEventListener('change', () => setRemoteConfigPublicId(remoteConfigPublicIdInput.value));
                remoteConfigPublicIdInput.addEventListener('blur', () => setRemoteConfigPublicId(remoteConfigPublicIdInput.value));
            }

            if (remoteConfigUrlInput) {
                const stored = String(readJsonStorage(remoteConfigUrlStorageKey, '') || '').trim();
                if (stored && !remoteConfigUrlInput.value) remoteConfigUrlInput.value = stored;
                remoteConfigUrlInput.addEventListener('change', () => setRemoteConfigUrl(remoteConfigUrlInput.value));
                remoteConfigUrlInput.addEventListener('blur', () => setRemoteConfigUrl(remoteConfigUrlInput.value));
            }

            mediaTypeButtons.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    mediaTypeButtons.forEach((b) => b.classList.remove('active'));
                    btn.classList.add('active');
                    selectedMediaType = btn.dataset.type || 'image';
                });
            });

            if (fileUploadArea && projectFile) {
                try {
                    projectFile.setAttribute('accept', 'image/*,video/*');
                    if (!projectFile.hasAttribute('capture')) {
                        projectFile.setAttribute('capture', 'environment');
                    }
                    if (projectFile.style && String(projectFile.style.display || '').toLowerCase() === 'none') {
                        projectFile.style.display = '';
                    }
                    projectFile.style.position = 'absolute';
                    projectFile.style.left = '-9999px';
                    projectFile.style.width = '1px';
                    projectFile.style.height = '1px';
                    projectFile.style.opacity = '0';
                } catch {}

                const openPicker = () => {
                    try {
                        projectFile.focus();
                        projectFile.click();
                    } catch {}
                };

                fileUploadArea.addEventListener('click', openPicker);

                projectFile.addEventListener('change', () => {
                    try {
                        const f = projectFile?.files?.[0];
                        console.log('Mobile file selected:', {
                            name: f?.name,
                            type: f?.type,
                            size: f?.size
                        });
                    } catch {
                        console.log('Mobile file selected');
                    }
                });

                fileUploadArea.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    fileUploadArea.classList.add('dragover');
                });
                fileUploadArea.addEventListener('dragleave', () => fileUploadArea.classList.remove('dragover'));
                fileUploadArea.addEventListener('drop', (e) => {
                    e.preventDefault();
                    fileUploadArea.classList.remove('dragover');
                    if (e.dataTransfer?.files?.[0]) {
                        projectFile.files = e.dataTransfer.files;
                        try { projectFile.dispatchEvent(new Event('change', { bubbles: true })); } catch {}
                    }
                });
            }

            if (galleryQueue) {
                renderGalleryQueue();
                galleryQueue.addEventListener('click', (e) => {
                    const removeBtn = e.target.closest('[data-gallery-remove]');
                    if (!removeBtn) return;
                    e.preventDefault();
                    const idx = Number(removeBtn.getAttribute('data-gallery-remove'));
                    if (!Number.isFinite(idx)) return;
                    galleryQueueItems.splice(idx, 1);
                    renderGalleryQueue();
                });
            }

            if (addGalleryItemBtn) {
                addGalleryItemBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    addMediaFromInputs();
                });
            }

            if (clearGalleryBtn) {
                clearGalleryBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    clearGalleryQueueState();
                });
            }

            if (uploadBtn) {
                uploadBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    saveProjectFromQueue();
                });
            }

            if (projectsGrid) {
                projectsGrid.addEventListener('click', (e) => {
                    const saveBtn = e.target.closest('[data-visibility-save-id]');
                    if (saveBtn) {
                        e.preventDefault();
                        e.stopPropagation();
                        const card = saveBtn.closest('.project-thumb');
                        const id = saveBtn.getAttribute('data-visibility-save-id') || card?.getAttribute('data-admin-project-id');
                        if (!card || !id) return;
                        const featuredInput = card.querySelector('input[data-visibility-flag="featured"]');
                        const showcaseInput = card.querySelector('input[data-visibility-flag="showcase"]');
                        const servicesInput = card.querySelector('input[data-visibility-flag="services"]');
                        const nextVisibility = {
                            featured: Boolean(featuredInput?.checked),
                            showcase: Boolean(showcaseInput?.checked),
                            services: Boolean(servicesInput?.checked)
                        };

                        const projects = getProjects();
                        const idx = projects.findIndex((p) => p.id === id);
                        if (idx < 0) return;
                        const previousVisibility = normalizeVisibilityFlags(projects[idx]);
                        projects[idx] = {
                            ...projects[idx],
                            ...nextVisibility
                        };

                        const resetControls = () => {
                            if (featuredInput) featuredInput.checked = previousVisibility.featured;
                            if (showcaseInput) showcaseInput.checked = previousVisibility.showcase;
                            if (servicesInput) servicesInput.checked = previousVisibility.services;
                            updateProjectLiveStatus(card, previousVisibility);
                        };

                        const finalizeButton = (label) => {
                            if (!saveBtn.isConnected) return;
                            saveBtn.textContent = label;
                            if (label === 'Saved') {
                                setTimeout(() => {
                                    if (saveBtn.isConnected) saveBtn.textContent = 'Save';
                                }, 1400);
                            }
                        };

                        if (firebaseIsReady()) {
                            saveBtn.disabled = true;
                            finalizeButton('Saving...');
                            upsertProjectInFirebase(projects[idx])
                                .then(() => {
                                    updateProjectLiveStatus(card, nextVisibility);
                                    finalizeButton('Saved');
                                })
                                .catch((err) => {
                                    console.error('Firebase save failed:', err);
                                    resetControls();
                                    finalizeButton('Retry');
                                })
                                .finally(() => {
                                    saveBtn.disabled = false;
                                });
                        } else {
                            saveProjects(projects);
                            loadProjects();
                        }
                        return;
                    }

                    const visibilityControls = e.target.closest('.project-visibility-controls');
                    if (visibilityControls) {
                        e.stopPropagation();
                        return;
                    }

                    const starBtn = e.target.closest('[data-star-project-id]');
                    if (starBtn) {
                        e.preventDefault();
                        e.stopPropagation();
                        const id = starBtn.getAttribute('data-star-project-id');
                        const projects = getProjects();
                        const idx = projects.findIndex((p) => p.id === id);
                        if (idx >= 0) {
                            projects[idx].isStarred = !projects[idx].isStarred;
                            if (firebaseIsReady()) {
                                upsertProjectInFirebase(projects[idx]).catch(() => {});
                            } else {
                                saveProjects(projects);
                                loadProjects();
                            }
                        }
                        return;
                    }

                    const featureToggle = e.target.closest('[data-feature-project-id]');
                    if (featureToggle) {
                        e.preventDefault();
                        e.stopPropagation();
                        const id = featureToggle.getAttribute('data-feature-project-id');
                        const projects = getProjects();
                        const idx = projects.findIndex((p) => p.id === id);
                        if (idx >= 0) {
                            projects[idx].isFeatured = featureToggle.checked;
                            if (firebaseIsReady()) {
                                upsertProjectInFirebase(projects[idx]).catch(() => {});
                            } else {
                                saveProjects(projects);
                                loadProjects();
                            }
                        }
                        return;
                    }

                    const deleteBtn = e.target.closest('[data-delete-project-id]');
                    if (deleteBtn) {
                        const id = deleteBtn.getAttribute('data-delete-project-id');
                        const currentProjects = getProjects();
                        const deletedProject = currentProjects.find((p) => p.id === id) || null;
                        const projects = currentProjects.filter((p) => p.id !== id);
                        saveProjects(projects);
                        loadProjects();
                        showAdminMediaToast('Media deleted', 'success');

                        if (firebaseIsReady()) {
                            removeProjectInFirebase(id).catch(() => {
                                if (deletedProject) {
                                    const restored = getProjects();
                                    if (!restored.some((p) => p.id === id)) {
                                        restored.unshift(deletedProject);
                                        saveProjects(restored);
                                        loadProjects();
                                    }
                                }
                                showAdminMediaToast('Delete failed. Please retry.', 'error');
                            });
                        } else {
                            const preset = getCloudinaryPresetValue();
                            if (preset) {
                                persistCloudinaryPreset();
                                const nextConfig = {
                                    ...(remoteConfigState && typeof remoteConfigState === 'object' ? remoteConfigState : {}),
                                    updatedAt: new Date().toISOString(),
                                    projects
                                };
                                uploadRemoteConfig(nextConfig, preset)
                                    .then(() => {
                                        remoteConfigState = nextConfig;
                                        remoteConfigFingerprint = '';
                                    })
                                    .catch(() => {
                                        showAdminMediaToast('Deleted locally. Cloud sync failed.', 'warning');
                                    });
                            }
                        }
                        const generated = document.querySelector(`[data-generated-project-id="${id}"]`);
                        if (generated) generated.remove();
                        const activeFilter = document.querySelector('.showcase-filters .filter-btn.active');
                        if (activeFilter) {
                            filterProjects(activeFilter.dataset.filter || 'all');
                        }
                        return;
                    }

                    const thumb = e.target.closest('[data-admin-project-id]');
                    if (!thumb) return;
                    const id = thumb.getAttribute('data-admin-project-id');
                    const project = getProjects().find((p) => p.id === id);
                    if (!project) return;

                    const temp = document.createElement('div');
                    temp.dataset.mediaSrc = normalizeProjectMediaPath(project.mediaSrc);
                    temp.dataset.mediaType = project.mediaType;
                    temp.innerHTML = `
                        <div class="project-category">${project.category || ''}</div>
                        <div class="showcase-overlay">
                            <h3 class="showcase-title">${project.title || 'Project'}</h3>
                            <p class="showcase-description">${project.description || ''}</p>
                        </div>
                    `;
                    openProjectModalFromItem(temp);
                });
            }

            const integrityGraphicBtn = document.getElementById('integrityGraphicBtn');
            const integrityImageInput = document.getElementById('integrityImageInput');
            const integrityUploadProgress = document.getElementById('integrityUploadProgress');
            const integrityUploadProgressFill = document.getElementById('integrityUploadProgressFill');
            if (integrityGraphicBtn && integrityImageInput) {
                integrityGraphicBtn.addEventListener('click', () => { integrityImageInput.click(); });
                integrityImageInput.addEventListener('change', function() {
                    const file = this.files?.[0];
                    if (!file || !file.type.startsWith('image/')) {
                        this.value = '';
                        return;
                    }
                    const preset = getCloudinaryPresetValue();
                    if (!preset) {
                        alert('Enter Cloudinary preset in Projects tab first.');
                        this.value = '';
                        return;
                    }
                    if (integrityUploadProgress) {
                        integrityUploadProgress.style.display = 'block';
                        integrityUploadProgress.setAttribute('aria-hidden', 'false');
                    }
                    if (integrityUploadProgressFill) integrityUploadProgressFill.style.width = '0%';
                    cloudinaryUnsignedUpload(file, {
                        preset,
                        resourceType: 'image',
                        folder: 'hailifu',
                        onProgress: (pct) => {
                            if (integrityUploadProgressFill) integrityUploadProgressFill.style.width = pct + '%';
                        }
                    }).then((payload) => {
                        const url = String(payload?.secure_url || '').trim();
                        if (!url) throw new Error('Upload failed');
                        setIntegrityImageUrlLocal(url);
                        loadIntegrityImage(url);
                        if (firebaseIsReady()) {
                            return setFirebaseIntegrityImageUrl(url);
                        }
                    }).then(() => {
                        if (integrityImageInput) integrityImageInput.value = '';
                    }).catch((err) => {
                        alert(String(err?.message || err || 'Upload failed'));
                    }).finally(() => {
                        if (integrityUploadProgress) {
                            integrityUploadProgress.style.display = 'none';
                            integrityUploadProgress.setAttribute('aria-hidden', 'true');
                        }
                        if (integrityUploadProgressFill) integrityUploadProgressFill.style.width = '0%';
                    });
                });
            }

            if (adminPanel) {
                adminPanel.addEventListener('click', (e) => {
                    const closeBtn = e.target.closest('#adminToggle, .admin-toggle');
                    if (closeBtn) {
                        e.preventDefault();
                        e.stopPropagation();
                        haltDataSync();
                        return;
                    }

                    const tabBtn = e.target.closest('.admin-tab');
                    if (tabBtn) {
                        e.preventDefault();
                        setAdminTab(tabBtn.dataset.adminTab);
                        return;
                    }

                    const approveBtn = e.target.closest('[data-review-approve]');
                    if (approveBtn) {
                        const id = approveBtn.getAttribute('data-review-approve');
                        const reviews = getReviews();
                        const idx = reviews.findIndex((r) => r.id === id);
                        if (idx >= 0) {
                            reviews[idx].status = 'approved';
                            saveReviews(reviews);
                            renderAdminReviews();
                            renderPublicReviews();
                            refreshOverview();
                        }
                        return;
                    }

                    const deleteBtn = e.target.closest('[data-review-delete]');
                    if (deleteBtn) {
                        const id = deleteBtn.getAttribute('data-review-delete');
                        const reviews = getReviews().filter((r) => r.id !== id);
                        saveReviews(reviews);
                        renderAdminReviews();
                        renderPublicReviews();
                        refreshOverview();
                    }
                });
            }
        }

        function initDataSync() {
            seedOpsLayer();
            syncOpsNodes();
            if (adminPanel) {
                adminPanel.classList.add('active');
                adminPanel.setAttribute('aria-hidden', 'false');
            }
            setAdminTab('overview');
            renderLeads();
            renderProjects();
            renderAdminReviews();
            refreshOverview();
            renderAdminLazyLoop();
            startAdminLazyLoop();
        }

        function haltDataSync() {
            try { stopAdminLazyLoop(); } catch {}
            if (adminPanel) {
                adminPanel.classList.remove('active');
                adminPanel.setAttribute('aria-hidden', 'true');
            }
        }

        async function gateCheck() {
            if (isAdminUnlocked()) {
                initDataSync();
                return true;
            }
            const entered = prompt('Enter access code');
            if (entered === null) return false;
            const ok = String(entered).trim() === decodeAdminSecret();
            if (ok) {
                setAdminUnlocked();
                initDataSync();
                return true;
            }
            alert('Access denied');
            return false;
        }

        if (adminTrigger) {
            adminTrigger.addEventListener('click', async (e) => {
                e.preventDefault();

                const now = Date.now();

                adminKnocks = adminKnocks.filter((t) => now - t <= adminKnockWindowMs);
                adminKnocks.push(now);

                if (adminKnockTimer) {
                    clearTimeout(adminKnockTimer);
                    adminKnockTimer = null;
                }

                if (adminKnocks.length >= adminKnockCount) {
                    adminKnocks = [];
                    await gateCheck();
                    return;
                }

                adminKnockTimer = window.setTimeout(() => {
                    if (adminKnocks.length === 1 && adminLogoLink) {
                        const href = adminLogoLink.getAttribute('href') || '#hero';
                        if (href.startsWith('#')) {
                            const target = document.querySelector(href);
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.hash = href;
                            }
                        } else {
                            window.location.href = href;
                        }
                    }
                    adminKnocks = [];
                    adminKnockTimer = null;
                }, adminClickDelayMs);
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            if (adminPanel && adminPanel.classList.contains('active')) {
                haltDataSync();
            }
        });

        document.addEventListener('click', (e) => {
            const closeBtn = e.target.closest('#adminToggle, .admin-toggle');
            if (!closeBtn) return;
            if (adminPanel && adminPanel.classList.contains('active')) {
                e.preventDefault();
                e.stopPropagation();
                haltDataSync();
            }
        });

        if (isAdminUnlocked()) {
            seedOpsLayer();
            syncOpsNodes();
        }

        function getLeads() {
            return readJsonStorage('hailifu_leads', []);
        }

        function saveLeads(leads) {
            writeJsonStorage('hailifu_leads', leads);
        }

        function addLead(lead) {
            const leads = getLeads();
            leads.unshift(lead);
            saveLeads(leads);
            renderLeads();
            refreshOverview();
        }

        function renderLeads() {
            if (!leadsGrid) return;
            const leads = getLeads();
            if (leads.length === 0) {
                leadsGrid.innerHTML = '<div class="lead-card"><strong>No leads yet</strong><small>Leads from the Brilliant Assistant will appear here.</small></div>';
                return;
            }
            leadsGrid.innerHTML = leads.slice(0, 50).map((l) => {
                const when = l.createdAt ? new Date(l.createdAt).toLocaleString() : '';
                const service = l.serviceLabel || l.service || 'Lead';
                const lines = [
                    l.name ? `Name: ${l.name}` : '',
                    l.phone ? `Phone: ${l.phone}` : '',
                    l.location ? `Location: ${l.location}` : '',
                    l.serviceAnswer ? `Details: ${l.serviceAnswer}` : ''
                ].filter(Boolean).join('<br>');
                return `<div class="lead-card"><strong>${service}</strong><small>${when}</small><div style="margin-top:10px; line-height:1.5;">${lines}</div></div>`;
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
  <rect x="40" y="40" width="1120" height="670" rx="34" fill="rgba(255,140,0,0.06)" stroke="rgba(255,140,0,0.35)" stroke-width="6"/>
  <text x="600" y="380" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="800" fill="#FF8C00" letter-spacing="6">${safeLabel}</text>
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

        function getProjects() {
            const firebaseProjects = Array.isArray(firebaseProjectsState)
                ? firebaseProjectsState
                : null;

            if (firebaseProjects) {
                const list = Array.isArray(firebaseProjects) ? firebaseProjects : [];
                return list.map((project) => {
                    const base = stripProjectQuoteFields(project);
                    const visibility = normalizeVisibilityFlags(base);
                    const rawMediaSrc = String(base?.mediaSrc || base?.imageUrl || base?.mediaUrl || '').trim();
                    const rawThumbSrc = String(base?.thumbSrc || base?.thumbnailUrl || base?.thumbUrl || '').trim();
                    const mediaSrc = normalizeProjectMediaPath(rawMediaSrc);
                    const thumbSrc = normalizeProjectMediaPath(rawThumbSrc);
                    const mediaType = String(base?.mediaType || (mediaSrc && /\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc) ? 'video' : 'image') || 'image').trim().toLowerCase() || 'image';
                    return {
                        ...base,
                        mediaSrc,
                        thumbSrc,
                        mediaType,
                        ...visibility,
                        isStarred: Boolean(project?.isStarred),
                        isFeatured: Boolean(project?.isFeatured)
                    };
                });
            }

            const fromRemote = remoteConfigState && Array.isArray(remoteConfigState?.projects)
                ? remoteConfigState.projects
                : null;
            const fromStorage = readJsonStorage('hailifu_projects', []);
            let list = (Array.isArray(fromRemote) && fromRemote.length)
                ? fromRemote
                : (Array.isArray(fromStorage) ? fromStorage : []);
            if (!list.length) list = DEFAULT_SHOWCASE_PROJECTS;

            let changed = false;
            const sanitized = list.map((project) => {
                if (project && typeof project === 'object') {
                    if (
                        Object.prototype.hasOwnProperty.call(project, 'quote')
                        || Object.prototype.hasOwnProperty.call(project, 'testimonial')
                        || Object.prototype.hasOwnProperty.call(project, 'testimonials')
                        || Object.prototype.hasOwnProperty.call(project, 'clientQuote')
                        || Object.prototype.hasOwnProperty.call(project, 'clientTestimonial')
                    ) {
                        changed = true;
                    }
                }
                return stripProjectQuoteFields(project);
            });

            if (changed) {
                writeJsonStorage('hailifu_projects', sanitized);
            }

            return sanitized.map((project, idx) => {
                const base = stripProjectQuoteFields(project);
                const visibility = normalizeVisibilityFlags(base);
                const rawMediaSrc = String(base?.mediaSrc || base?.imageUrl || base?.mediaUrl || '').trim();
                const rawThumbSrc = String(base?.thumbSrc || base?.thumbnailUrl || base?.thumbUrl || '').trim();
                const mediaSrc = normalizeProjectMediaPath(rawMediaSrc);
                const thumbSrc = normalizeProjectMediaPath(rawThumbSrc);
                const mediaType = String(base?.mediaType || (mediaSrc && /\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc) ? 'video' : 'image') || 'image').trim().toLowerCase() || 'image';
                const fallbackId = String(base?.id || project?.id || mediaSrc || rawMediaSrc || base?.title || `local-${idx}`).trim();
                return {
                    ...base,
                    id: fallbackId,
                    mediaSrc,
                    thumbSrc,
                    mediaType,
                    ...visibility,
                    isStarred: Boolean(project?.isStarred),
                    isFeatured: Boolean(project?.isFeatured)
                };
            });
        }

        function saveProjects(projects) {
            const sanitized = Array.isArray(projects)
                ? projects.map(stripProjectQuoteFields)
                : [];

            if (Array.isArray(firebaseProjectsState)) {
                firebaseProjectsState = sanitized;
            }

            writeJsonStorage('hailifu_projects', sanitized);

            if (remoteConfigState && typeof remoteConfigState === 'object') {
                remoteConfigState = {
                    ...remoteConfigState,
                    projects: sanitized
                };
            }
        }

        function renderProjects() {
            if (!projectsGrid) return;
            const projects = getProjects();

            if (projects.length === 0) {
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

            projectsGrid.innerHTML = projects.slice(0, 50).map((p) => {
                const safeTitle = (p.title || 'Project').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const starred = Boolean(p.isStarred);
                const featured = Boolean(p.isFeatured);
                const visibility = normalizeVisibilityFlags(p);
                const starClass = starred ? 'project-star active' : 'project-star';
                const starLabel = starred ? 'Unstar project' : 'Star project';
                const featureChecked = featured ? 'checked' : '';
                const featuredChecked = visibility.featured ? 'checked' : '';
                const showcaseChecked = visibility.showcase ? 'checked' : '';
                const servicesChecked = visibility.services ? 'checked' : '';
                const resolvedMediaSrc = resolveAdminAssetPath(p.mediaSrc);
                const resolvedThumbSrc = resolveAdminAssetPath(p.thumbSrc || p.mediaSrc);
                const finalPath = p.mediaType === 'video' ? resolvedMediaSrc : (resolvedThumbSrc || resolvedMediaSrc);
                const finalPathWithBuster = appendCacheBuster(finalPath, cacheStamp);
                const thumbWithBuster = appendCacheBuster(resolvedThumbSrc || resolvedMediaSrc, cacheStamp);
                const videoWithBuster = appendCacheBuster(resolvedMediaSrc, cacheStamp);
                const assetForLog = p.mediaType === 'video' ? videoWithBuster : thumbWithBuster;
                if (assetForLog) console.log('Admin Displaying URL:', assetForLog);
                const crossorigin = getFirebaseCrossoriginAttr(assetForLog);

                const mediaItems = coerceProjectMediaItems(p);
                const maxTiles = 4;
                const buildTile = (item) => {
                    const type = String(item?.mediaType || '').toLowerCase();
                    const rawSrc = type === 'youtube'
                        ? (item?.thumbSrc || getYoutubeThumbUrl(getYoutubeVideoId(item?.mediaSrc || '')) || '')
                        : (type === 'video' ? item?.mediaSrc : (item?.thumbSrc || item?.mediaSrc));
                    const resolved = resolveAdminAssetPath(rawSrc);
                    const finalSrc = appendCacheBuster(resolved, cacheStamp);
                    const cross = getFirebaseCrossoriginAttr(finalSrc);
                    if (!finalSrc) {
                        return `<div class="project-thumb-tile is-empty"></div>`;
                    }
                    if (type === 'video') {
                        return `<div class="project-thumb-tile"><video src="${finalSrc}" muted playsinline webkit-playsinline loop autoplay preload="metadata"></video></div>`;
                    }
                    return `<div class="project-thumb-tile"><img src="${finalSrc}" alt="${safeTitle}" ${cross} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')"></div>`;
                };

                const thumb = mediaItems.length > 1
                    ? `
                        <div class="project-thumb-gallery">
                            ${mediaItems.slice(0, maxTiles).map(buildTile).join('')}
                            <span class="project-thumb-count">${mediaItems.length}</span>
                        </div>
                    `
                    : (p.mediaType === 'video'
                        ? `<video src="${videoWithBuster}" muted playsinline webkit-playsinline loop autoplay preload="metadata"></video>`
                        : `<img src="${thumbWithBuster}" alt="${safeTitle}" ${crossorigin} onerror="this.onerror=null; this.src=getHailifuPlaceholderDataUri('HAILIFU')">`);

                return `
                    <div class="project-thumb" data-admin-project-id="${p.id}">
                        ${thumb}
                        <button class="${starClass}" type="button" data-star-project-id="${p.id}" aria-label="${starLabel}">
                            <i class="fas fa-star"></i>
                        </button>
                        <button class="project-delete" type="button" data-delete-project-id="${p.id}" aria-label="Delete project">
                            <i class="fas fa-trash"></i>
                        </button>
                        <label class="project-feature-toggle">
                            <input type="checkbox" ${featureChecked} data-feature-project-id="${p.id}">
                            <span>Feature in Lazy Loop</span>
                        </label>
                        <div class="project-meta">
                            <div class="project-live-status">
                                <span class="project-live-label">Live Status</span>
                                <div class="project-live-pills">
                                    <span class="status-pill${visibility.featured ? ' is-on' : ''}" data-status-pill="featured">Featured</span>
                                    <span class="status-pill${visibility.showcase ? ' is-on' : ''}" data-status-pill="showcase">Showcase</span>
                                    <span class="status-pill${visibility.services ? ' is-on' : ''}" data-status-pill="services">Services</span>
                                </div>
                            </div>
                            <div class="project-visibility-title">Placement Control</div>
                            <div class="project-visibility-controls">
                                <label class="visibility-toggle">
                                    <input type="checkbox" ${featuredChecked} data-visibility-flag="featured">
                                    <span>Featured</span>
                                </label>
                                <label class="visibility-toggle">
                                    <input type="checkbox" ${showcaseChecked} data-visibility-flag="showcase">
                                    <span>Showcase</span>
                                </label>
                                <label class="visibility-toggle">
                                    <input type="checkbox" ${servicesChecked} data-visibility-flag="services">
                                    <span>Services</span>
                                </label>
                                <button class="project-visibility-save" type="button" data-visibility-save-id="${p.id}">Save</button>
                            </div>
                            <div class="project-title">${safeTitle}</div>
                        </div>
                    </div>
                `;
            }).join('');
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

        const escapeHTML = (value) => String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const buildStarIcons = () => {
            return Array.from({ length: 5 }, () => '<i class="fas fa-star"></i>').join('');
        };

        function renderReviews() {
            const container = document.getElementById('reviewsContainer');
            const showMoreBtn = document.getElementById('reviewsShowMore');
            if (!container) return;

            const visibleCount = reviewsExpanded
                ? REVIEWS_DATA.length
                : Math.min(reviewsInitialCount, REVIEWS_DATA.length);

            container.innerHTML = REVIEWS_DATA.slice(0, visibleCount).map((review) => {
                const name = escapeHTML(review.name);
                const comment = escapeHTML(review.comment);
                const date = escapeHTML(review.date);
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
                                <span class="review-name">${name}</span>
                                ${metaLine}
                                <span class="review-date">${date}</span>
                            </div>
                            <div class="review-stars">${stars}</div>
                        </div>
                        <p class="review-comment">"${comment}"</p>
                        ${replyBlock}
                    </article>
                `;
            }).join('');

            if (showMoreBtn) {
                showMoreBtn.style.display = REVIEWS_DATA.length > visibleCount ? 'inline-flex' : 'none';
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
            if (!slide || !Array.isArray(REVIEWS_DATA) || !REVIEWS_DATA.length) return;

            const starsSvg = Array.from({ length: 5 }, () =>
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.5 7.1.6-5.3 4.6 1.6 6.9-6.3-3.7-6.3 3.7 1.6-6.9L2 9.1l7.1-.6L12 2z"/></svg>'
            ).join('');

            let index = 0;
            const reviews = REVIEWS_DATA.filter(Boolean);
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
                }, 180);
            };

            if (prevBtn) prevBtn.addEventListener('click', () => goTo(-1));
            if (nextBtn) nextBtn.addEventListener('click', () => goTo(1));

            render();

            let autoTimer = null;
            const startAuto = () => {
                if (autoTimer) clearInterval(autoTimer);
                autoTimer = setInterval(() => goTo(1), 5500);
            };
            const stopAuto = () => {
                if (autoTimer) clearInterval(autoTimer);
                autoTimer = null;
            };
            const terminal = document.querySelector('.review-terminal-box');
            if (terminal) {
                terminal.addEventListener('mouseenter', stopAuto);
                terminal.addEventListener('mouseleave', startAuto);
                terminal.addEventListener('focusin', stopAuto);
                terminal.addEventListener('focusout', startAuto);
            }
            startAuto();
        }

        renderReviewTerminal();

        function renderFeaturedReviewsFeed() {
            const track = document.querySelector('.modern-review-section .featured-reviews-feed .featured-reviews-track');
            if (!track || !Array.isArray(REVIEWS_DATA) || !REVIEWS_DATA.length) return;

            const reviews = REVIEWS_DATA.slice(0, 22);
            track.innerHTML = reviews.map((review) => {
                const name = escapeHTML(review.name);
                const date = escapeHTML(review.date);
                const comment = escapeHTML(review.comment);
                return `
                    <article class="featured-review-card" data-rating="${Math.max(1, Math.min(5, Number(review.rating) || 5))}">
                        <div class="featured-review-meta">
                            <span class="review-source">Google</span>
                            <span class="reviewer-name">${name}</span>
                            <span class="review-time">${date}</span>
                        </div>
                        <div class="featured-review-stars">\u2605\u2605\u2605\u2605\u2605</div>
                        <p>${comment}</p>
                    </article>
                `;
            }).join('');
        }

        renderFeaturedReviewsFeed();

        function initGoogleBusinessStatusToggle() {
            const statusBtn = document.getElementById('googleBusinessStatusBtn');
            const messageEl = document.getElementById('googleBusinessMessage');
            if (!statusBtn) return;

            const pendingMessage = 'Connect the Google Business feed to stream verified reviews here.';
            const activeMessage = `Google Business sync active. ${REVIEWS_DATA.length} verified reviews ready.`;

            const setState = (active) => {
                statusBtn.classList.toggle('is-active', active);
                statusBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
                statusBtn.textContent = active ? 'SYNC ACTIVE' : 'SYNC PENDING';
                if (messageEl) messageEl.textContent = active ? activeMessage : pendingMessage;
            };

            statusBtn.addEventListener('click', () => {
                const isActive = statusBtn.classList.contains('is-active');
                setState(!isActive);
            });

            setState(false);
        }

        initGoogleBusinessStatusToggle();

        function renderModernReviewTerminal() {
            const terminal = document.getElementById('reviewTerminal');
            const card = terminal ? terminal.querySelector('.review-terminal-card') : null;
            const nameEl = document.getElementById('reviewTerminalName');
            const starsEl = document.getElementById('reviewTerminalStars');
            const textEl = document.getElementById('reviewTerminalText');
            const ownerWrap = document.getElementById('reviewTerminalOwner');
            const ownerText = document.getElementById('reviewTerminalResponse');
            const avgEl = document.getElementById('reviewAvgRating');
            const totalEl = document.getElementById('reviewTotalReports');
            const prevBtn = terminal ? terminal.querySelector('[data-review-terminal-prev]') : null;
            const nextBtn = terminal ? terminal.querySelector('[data-review-terminal-next]') : null;

            if (!terminal || !card || !nameEl || !starsEl || !textEl) return;

            const reviews = Array.isArray(REVIEWS_DATA) ? REVIEWS_DATA.filter(Boolean) : [];
            if (!reviews.length) return;

            const average = reviews.reduce((sum, review) => sum + (Number(review.rating) || 0), 0) / reviews.length;
            if (avgEl) avgEl.textContent = average.toFixed(1);
            if (totalEl) totalEl.textContent = String(reviews.length);

            const buildStars = (rating) => {
                const safe = Math.max(1, Math.min(5, Number(rating) || 5));
                return '\u2605\u2605\u2605\u2605\u2605'.slice(0, safe).padEnd(5, '\u2605');
            };

            let index = 0;

            const paint = (review) => {
                nameEl.textContent = String(review.name || 'Customer');
                starsEl.textContent = buildStars(review.rating);
                textEl.textContent = `"${String(review.comment || '')}"`;

                if (ownerWrap && ownerText) {
                    const reply = String(review.ownerReply || '').trim();
                    ownerWrap.style.display = reply ? '' : 'none';
                    ownerText.textContent = reply || '';
                }
            };

            const goTo = (dir) => {
                card.classList.add('is-fading');
                window.setTimeout(() => {
                    index = (index + dir + reviews.length) % reviews.length;
                    paint(reviews[index]);
                    card.classList.remove('is-fading');
                }, 180);
            };

            if (prevBtn) prevBtn.addEventListener('click', () => goTo(-1));
            if (nextBtn) nextBtn.addEventListener('click', () => goTo(1));

            let autoTimer = null;
            const startAuto = () => {
                if (autoTimer) window.clearInterval(autoTimer);
                autoTimer = window.setInterval(() => goTo(1), 5500);
            };

            const stopAuto = () => {
                if (autoTimer) window.clearInterval(autoTimer);
                autoTimer = null;
            };

            terminal.addEventListener('mouseenter', stopAuto);
            terminal.addEventListener('mouseleave', startAuto);
            terminal.addEventListener('focusin', stopAuto);
            terminal.addEventListener('focusout', startAuto);

            paint(reviews[index]);
            startAuto();
        }

        renderModernReviewTerminal();

        function isVisibilityEnabled(project, primaryKey, fallbackKey) {
            if (!project || typeof project !== 'object') return false;
            if (typeof project[primaryKey] === 'boolean') return project[primaryKey];
            if (typeof project[fallbackKey] === 'boolean') return project[fallbackKey];
            return false;
        }

        function loadProjects() {
            if (!projectsGrid) projectsGrid = document.getElementById('projectsGrid');
            renderProjects();
            const projects = getProjects();
            const showcaseProjects = projects.filter((p) => p && isVisibilityEnabled(p, 'showInShowcase', 'showcase'));
            renderFeaturedWork(projects);
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
                const projectCategory = slotToProjectCategory[normalized] || normalized;
                const matches = showcaseProjects.filter((p) => String(p?.category || '').toLowerCase().trim() === projectCategory);
                const withMedia = matches.filter((p) => p && p.mediaSrc);
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
            slots.forEach((slot) => {
                const slotCategory = (slot.getAttribute('data-category') || slot.dataset.category || '').toLowerCase().trim();
                const project = pickProjectForSlot(slotCategory);

                if (project) {
                    if (project.id) usedIds.add(String(project.id));
                    if (project.mediaSrc) assignedCount += 1;
                    console.log('Rendering card for:', project.id);
                    const label = categoryLabelMap[slotCategory] || categoryLabelMap[String(project.category || '').toLowerCase().trim()] || (project.category || 'Project');
                    const title = String(project.title || project.name || '').trim();
                    const description = String(project.description || '').trim();

                    slot.dataset.mediaSrc = project.mediaSrc || '';
                    slot.dataset.mediaType = project.mediaType || 'image';
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
                        const mediaSrc = String(project.mediaSrc || project.imageUrl || project.mediaUrl || '').trim();
                        const normalizedSrc = mediaSrc ? normalizeCloudinaryUrl(mediaSrc) : '';
                        const type = String(project.mediaType || 'image').trim().toLowerCase() || 'image';
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
                            const thumb = normalizeCloudinaryUrl(String(project.thumbSrc || getYoutubeThumbUrl(youtubeId) || '').trim());
                            node.innerHTML = `<img src="${thumb || normalizedSrc}" alt="" loading="lazy">`;
                        } else {
                            node.innerHTML = `<img src="${normalizedSrc}" alt="" loading="lazy">`;
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
                    if (idValue) {
                        slot.setAttribute('onclick', 'openGalleryFromElement(this)');
                    } else {
                        slot.removeAttribute('onclick');
                    }
                } else {
                    const existingBg = slot.querySelector('.showcase-bg');
                    if (existingBg) existingBg.remove();
                    slot.classList.remove('has-media');
                    slot.classList.add('showcase-card');
                    delete slot.dataset.generatedProjectId;
                    delete slot.dataset.modalTitle;
                    delete slot.dataset.modalDescription;
                    delete slot.dataset.modalCategory;
                    slot.dataset.mediaSrc = '';
                    slot.dataset.mediaType = 'image';
                    slot.dataset.galleryGroup = 'category';
                    if (slotCategory) slot.dataset.category = slotCategory;
                    slot.setAttribute('onclick', 'openGalleryFromElement(this)');
                    updateMediaCountBadge(slot, 0);
                }

                if (slot.dataset.modalBound) {
                    delete slot.dataset.modalBound;
                }
                slot.removeAttribute('role');
                slot.removeAttribute('tabindex');
            });
        }

        function renderShowcase(projectsOverride) {
            const showcaseGrid = document.querySelector('#showcase .showcase-grid');
            if (!showcaseGrid) return;
            hydrateShowcaseFromStoredProjects(projectsOverride, showcaseGrid);
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
                    }).slice(0, 24);
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
                autogate: 'Auto Gate Service'
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

            if (!featuredLoopObserver && viewport && typeof IntersectionObserver !== 'undefined') {
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
            const normalizeProject = (project) => {
                if (!project || typeof project !== 'object') return null;
                const mediaSrc = String(project.mediaSrc || project.imageUrl || '').trim();
                if (!mediaSrc) return null;
                return {
                    ...project,
                    mediaSrc,
                    mediaType: String(project.mediaType || 'image') || 'image'
                };
            };

            const normalized = projects.map(normalizeProject).filter(Boolean);
            const featured = normalized
                .filter((p) => isVisibilityEnabled(p, 'showInFeatured', 'featured'))
                .sort((a, b) => toTimestamp(b) - toTimestamp(a));

            let featuredList = [...featured];
            if (featuredList.length < 5) {
                const featuredIds = new Set(featuredList.map((p) => String(p?.id || p?.mediaSrc || '').trim()));
                const fallback = normalized
                    .filter((p) => isVisibilityEnabled(p, 'showInShowcase', 'showcase'))
                    .filter((p) => {
                        const key = String(p?.id || p?.mediaSrc || '').trim();
                        return key && !featuredIds.has(key);
                    })
                    .sort((a, b) => toTimestamp(b) - toTimestamp(a))
                    .slice(0, Math.max(0, 5 - featuredList.length));
                featuredList = [...featuredList, ...fallback];
            }

            stopFeaturedLoop();
            featuredLoopHasBindings = false;
            featuredLoopBoundNode = null;
            featuredLoopIndex = 0;
            featuredLoopCount = featuredList.length;

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
                if (isYoutube) return `<img src="${youtubeThumb || ''}" alt="${safeTitle}" loading="lazy">`;

                const normalizedSrc = normalizeCloudinaryUrl(mediaSrc);
                if (isVideo) return `<video src="${normalizedSrc}" muted playsinline webkit-playsinline loop preload="metadata"></video>`;
                return `<img src="${normalizedSrc}" alt="${safeTitle}" loading="lazy">`;
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

        const assistantCatalog = {
            cctv: {
                label: 'CCTV',
                question: 'For CCTV, how many cameras are you looking to install?'
            },
            gates: {
                label: 'Gate Automation',
                question: 'For Gate Automation, is it a sliding gate or swing gate?'
            },
            electrical: {
                label: 'Electrical Wiring',
                question: 'For Electrical Wiring, is this for a new house wiring or fixing an existing fault?'
            },
            airconditioning: {
                label: 'Air Conditioning',
                question: 'For Air Conditioning, is it installation, servicing, or repairs?'
            },
            blindcurtain: {
                label: 'Smart Window Solutions',
                question: 'For Smart Window Solutions, do you want motorized blinds, automated curtains, or a full smart window setup?'
            }
        };

        const assistantState = {
            step: 'service',
            serviceKey: '',
            serviceLabel: '',
            serviceAnswer: '',
            name: '',
            phone: '',
            location: ''
        };

        function resetAssistant() {
            assistantState.step = 'service';
            assistantState.serviceKey = '';
            assistantState.serviceLabel = '';
            assistantState.serviceAnswer = '';
            assistantState.name = '';
            assistantState.phone = '';
            assistantState.location = '';
        }

        function normalizeService(text) {
            const t = (text || '').toLowerCase();
            if (t.includes('cctv') || t.includes('camera')) return 'cctv';
            if (t.includes('gate')) return 'gates';
            if (t.includes('electric')) return 'electrical';
            if (t.includes('air conditioning') || t.includes('aircondition') || t.includes('aircon') || t.includes('conditioner') || /\bac\b/.test(t)) return 'airconditioning';
            if (t.includes('curtain') || t.includes('blind') || t.includes('smart window') || t.includes('smart windows') || t.includes('window')) return 'blindcurtain';
            return '';
        }
        function normalizePhone(text) {
            const raw = (text || '').trim();
            const digits = raw.replace(/[^0-9+]/g, '');
            if (digits.startsWith('+233')) return digits;
            if (digits.startsWith('233')) return `+${digits}`;
            if (digits.startsWith('0') && digits.length === 10) return digits;
            if (digits.length >= 9) return digits;
            return '';
        }

        function showGreeting() {
            clearChatMessages();

            const serviceGreeting = getServiceGreeting(deepLinkServiceKey);
            const greetingText = serviceGreeting || 'Welcome to Hailifu! I can help you with a quick quote. Are you interested in CCTV, Gate Automation, Electrical Wiring, Air Conditioning, or Smart Window Solutions?';

            addMessage('bot', `${greetingText}
                <div class="brilliant-quick-actions">
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="cctv">CCTV</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="gates">Gate Automation</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="electrical">Electrical Wiring</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="airconditioning">Air Conditioning</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="blindcurtain">Smart Window Solutions</button>
                </div>`);
        }

        function openChatbot() {
            if (!chatbotContainer) return;
            const opening = !chatbotContainer.classList.contains('active');
            chatbotContainer.classList.add('active');
            if (opening) {
                setTyping(false);
                resetAssistant();
                showGreeting();
            }
        }

        function showWhatsAppButton() {
            const label = assistantState.serviceLabel || 'Service';
            addMessage('bot', `
                <button type="button" class="chatbot-action-btn" data-assistant-whatsapp="1">
                    <i class="fab fa-whatsapp"></i> Chat with Engineer on WhatsApp
                </button>
            `);
        }

        function saveLeadFromState() {
            addLead({
                createdAt: new Date().toISOString(),
                service: assistantState.serviceKey,
                serviceLabel: assistantState.serviceLabel,
                serviceAnswer: assistantState.serviceAnswer,
                name: assistantState.name,
                phone: assistantState.phone,
                location: assistantState.location
            });
        }

        function handleUserInput(text) {
            const value = (text || '').trim();
            if (!value) return;

            addUserMessage(value);

            if (assistantState.step === 'service') {
                const key = normalizeService(value) || value.toLowerCase();
                const serviceKey = assistantCatalog[key] ? key : normalizeService(value);
                if (!serviceKey || !assistantCatalog[serviceKey]) {
                    addMessage('bot', 'Please choose: CCTV, Gate Automation, Electrical Wiring, Air Conditioning, or Smart Window Solutions.');
                    return;
                }
                assistantState.serviceKey = serviceKey;
                assistantState.serviceLabel = assistantCatalog[serviceKey].label;

                assistantState.step = 'service_question';
                addMessage('bot', assistantCatalog[serviceKey].question);
                return;
            }

            if (assistantState.step === 'service_question') {
                assistantState.serviceAnswer = value;
                assistantState.step = 'name';
                addMessage('bot', 'Great! Please leave your Name. Our head engineer will call you in less than 30 minutes to finalize the price.');
                return;
            }

            if (assistantState.step === 'name') {
                assistantState.name = value;
                assistantState.step = 'phone';
                addMessage('bot', 'Thanks. Please enter your Phone Number (Ghana).');
                return;
            }

            if (assistantState.step === 'phone') {
                const phone = normalizePhone(value);
                if (!phone) {
                    addMessage('bot', 'Please enter a valid phone number (e.g., 0550XXXXXXX or +23355XXXXXXX).');
                    return;
                }
                assistantState.phone = phone;
                assistantState.step = 'location';
                addMessage('bot', 'Finally, what is your Location (Accra or Tema)?');
                return;
            }

            if (assistantState.step === 'location') {
                assistantState.location = value;
                saveLeadFromState();
                addMessage('bot', `Thank you, ${assistantState.name}. We have received your details for ${assistantState.serviceLabel}. Our engineer will call you soon.`);
                showWhatsAppButton();
                assistantState.step = 'done';
                return;
            }

            if (assistantState.step === 'done') {
                resetAssistant();
                handleUserInput(value);
            }
        }

        function sendChat() {
            if (!chatInput) return;
            const text = chatInput.value;
            chatInput.value = '';
            setTyping(false);
            handleUserInput(text);
        }

        if (chatSendBtn) {
            chatSendBtn.addEventListener('click', sendChat);
        }

        if (chatInput) {
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendChat();
                }
            });
        }

        if (chatbotMessages) {
            chatbotMessages.addEventListener('click', (e) => {
                const serviceBtn = e.target.closest('[data-assistant-service]');
                if (serviceBtn) {
                    const key = serviceBtn.getAttribute('data-assistant-service');
                    handleUserInput(key);
                    return;
                }
                const waBtn = e.target.closest('[data-assistant-whatsapp]');
                if (waBtn) {
                    const service = assistantState.serviceLabel || 'Service';
                    const msg = `Hi Hailifu, I am interested in a quote for ${service}.`;
                    const url = `https://wa.me/233550997270?text=${encodeURIComponent(msg)}`;
                    window.open(url, '_blank');
                }
            });
        }

        if (chatbotToggle && chatbotContainer) {
            chatbotToggle.addEventListener('click', () => {
                const opening = !chatbotContainer.classList.contains('active');
                chatbotContainer.classList.toggle('active');
                if (opening) {
                    setTyping(false);
                    resetAssistant();
                    showGreeting();
                }
            });
        }

        if (chatbotClose && chatbotContainer) {
            chatbotClose.addEventListener('click', () => {
                chatbotContainer.classList.remove('active');
            });
        }

        startServerlessProjectsSync();

        loadIntegrityImage(getIntegrityImageUrl());
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

            const primary = project.mediaSrc
                ? normalizeMediaItem({ mediaSrc: project.mediaSrc, mediaType: project.mediaType, thumbSrc: project.thumbSrc })
                : null;

            const combined = [...fromList, ...(primary ? [primary] : [])];
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
            if (fromDataset.length) return fromDataset;

            const groupMode = String(item?.dataset?.galleryGroup || '').trim().toLowerCase();
            if (groupMode === 'category') {
                const categoryKey = normalizeCategoryKey(item?.dataset?.category || item?.dataset?.modalCategory || '');
                if (categoryKey) {
                    const projects = getProjects();
                    try {
                        const categories = projects.map((p) => String(p?.category || '').trim()).filter(Boolean);
                        console.log('Gallery category match:', categoryKey, 'Available categories:', categories);
                    } catch {}
                    const matches = projects
                        .filter((p) => p && normalizeCategoryKey(p.category || '') === categoryKey)
                        .filter((p) => {
                            if (!p || typeof p !== 'object') return false;
                            if (typeof p.showInShowcase === 'boolean') return p.showInShowcase;
                            if (typeof p.showcase === 'boolean') return p.showcase;
                            return true;
                        });

                    const combined = [];
                    matches.forEach((p) => {
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
                    if (unique.length) return unique.slice(0, 24);
                }
            }

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
                    }).slice(0, 12);
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

            const caption = projectLightbox.querySelector('.media-lightbox-caption');
            if (caption) caption.textContent = String(title || '').trim();

            const type = String(mediaItem?.mediaType || '').toLowerCase();
            const src = String(mediaItem?.mediaSrc || '').trim();
            const displayTitle = String(title || 'Preview').trim();

            if (type === 'video') {
                const video = document.createElement('video');
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                content.appendChild(video);
            } else if (type === 'youtube') {
                const youtubeId = getYoutubeVideoId(src);
                const watchUrl = youtubeId ? getYoutubeWatchUrl(youtubeId) : src;

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
            }

            projectLightbox.classList.add('active');
            projectLightbox.setAttribute('aria-hidden', 'false');
            syncProjectLightboxNav();
        }

        function buildProjectModalGallery(mediaItems, title) {
            const gallery = document.createElement('div');
            gallery.className = 'project-modal-gallery';
            const safeTitle = String(title || 'Preview').trim();

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
                    btn.appendChild(img);
                }

                gallery.appendChild(btn);
            });

            gallery.addEventListener('click', (e) => {
                const tile = e.target.closest('.project-modal-tile');
                if (!tile) return;
                const idx = Number(tile.dataset.index);
                if (!Number.isFinite(idx) || !mediaItems[idx]) return;
                openProjectLightbox(mediaItems[idx], safeTitle);
            });

            return gallery;
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
                projectModal.classList.remove('has-gallery');
                projectModal.setAttribute('aria-hidden', 'true');
                const mainEl = document.querySelector('main');
                if (mainEl) mainEl.removeAttribute('inert');
            }
            if (projectModalMedia) {
                projectModalMedia.innerHTML = '';
            }
            closeProjectLightbox();
            if (projectModalLastFocus && typeof projectModalLastFocus.focus === 'function') {
                try { projectModalLastFocus.focus(); } catch {}
            }
            projectModalLastFocus = null;
        }

        function openProjectModalFromItem(item) {
            if (!item || !projectModal) return;

            projectModal.classList.toggle('is-compact', item.classList?.contains('showcase-item'));

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
                } else {
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
        }

        renderServices();

        const popupOverlay = document.getElementById('popupOverlay');
        const popupClose = document.getElementById('popupClose');
        const popupQuoteForm = document.getElementById('popupQuoteForm');
        const popupSuccess = document.getElementById('popupSuccess');
        const popupService = document.getElementById('popupService');
        const serviceContext = document.getElementById('serviceContext');
        const popupFormShell = popupOverlay ? popupOverlay.querySelector('.popup-form') : null;

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

        const sharePortfolioFab = document.getElementById('sharePortfolioFab');
        const sharePortfolioToast = document.getElementById('sharePortfolioToast');
        const portfolioShareUrl = 'https://hailifu.github.io/Hailifu_Website/';
        let sharePortfolioToastTimer = null;

        function showSharePortfolioToast(message) {
            if (!sharePortfolioToast) return;
            sharePortfolioToast.textContent = message || 'Link Copied!';
            sharePortfolioToast.classList.add('active');
            if (sharePortfolioToastTimer) clearTimeout(sharePortfolioToastTimer);
            sharePortfolioToastTimer = setTimeout(() => {
                sharePortfolioToast.classList.remove('active');
            }, 1600);
        }

        async function copyPortfolioUrl() {
            try {
                if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                    await navigator.clipboard.writeText(portfolioShareUrl);
                    return true;
                }
            } catch {}

            try {
                const input = document.createElement('input');
                input.value = portfolioShareUrl;
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

        function isLikelyMobile() {
            const ua = navigator.userAgent || '';
            return /android|iphone|ipad|ipod|mobile/i.test(ua);
        }

        async function handleSharePortfolioClick(e) {
            if (e && typeof e.preventDefault === 'function') e.preventDefault();

            const canNativeShare = typeof navigator.share === 'function' && isLikelyMobile();
            if (canNativeShare) {
                try {
                    await navigator.share({
                        title: 'Hailifu Portfolio',
                        text: 'Check out the Hailifu portfolio.',
                        url: portfolioShareUrl
                    });
                    return;
                } catch {}
            }

            const copied = await copyPortfolioUrl();
            showSharePortfolioToast(copied ? 'Link Copied!' : 'Copy failed');
        }

        [sharePortfolioFab].filter(Boolean).forEach((btn) => {
            btn.addEventListener('click', handleSharePortfolioClick);
        });

        function setQuoteService(serviceKey) {
            const labelMap = {
                cctv: 'CCTV Installation',
                electrical: 'Electrical Wiring',
                airconditioning: 'Air Conditioning',
                gates: 'Automated Gates',
                fencing: 'Electric Fencing',
                smarthome: 'Smart Home System',
                blindcurtain: 'Smart Window Solutions'
            };
            const iconMap = {
                cctv: 'fa-video',
                electrical: 'fa-bolt',
                airconditioning: 'fa-snowflake',
                gates: 'fa-door-open',
                fencing: 'fa-shield-alt',
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
            popupQuoteForm.addEventListener('submit', (e) => {
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
                    smarthome: 'Smart Home System',
                    blindcurtain: 'Smart Window Solutions'
                };

                const name = String(document.getElementById('popupName')?.value || '').trim();
                const location = String(document.getElementById('popupLocation')?.value || '').trim();
                const serviceKey = String(popupService?.value || '').trim();
                const message = String(document.getElementById('popupMessage')?.value || '').trim();
                const serviceLabel = labelMap[serviceKey] || 'Service';

                const whatsappNumber = '233550997270';
                const lines = [
                    'New Quote Request',
                    `Name: ${name || 'Not provided'}`,
                    `Location: ${location || 'Not provided'}`,
                    `Service: ${serviceLabel}`,
                    `Message: ${message || 'No details provided'}`
                ];
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
                const popup = window.open(whatsappUrl, '_blank');
                if (!popup) {
                    window.location.href = whatsappUrl;
                }

                if (popupSuccess) {
                    popupSuccess.style.display = 'block';
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

        document.querySelectorAll('#service-cctv, #service-electrical, #service-airconditioning, #service-gates, #service-fencing, #service-smarthome, #service-blindcurtain').forEach((card) => {
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
            showcaseGrid.addEventListener('click', (e) => {
                const card = e.target.closest('.showcase-item');
                if (!card || !showcaseGrid.contains(card)) return;
                e.preventDefault();
                openProjectModalFromItem(card);
            });
        }

        document.querySelectorAll('#showcase .showcase-grid .showcase-item').forEach(item => item.classList.add('is-visible'));
        if (filterButtons.length) {
            const active = document.querySelector('.showcase-filters .filter-btn.active') || filterButtons[0];
            if (active) {
                filterProjects(active.dataset.filter || 'all');
            }
        }

        const updateHeaderScrolled = () => {
            if (!mainNav) return;
            const y = window.scrollY || document.documentElement.scrollTop || 0;
            mainNav.classList.toggle('is-scrolled', y > 12);
            if (backToTopBtn) backToTopBtn.classList.toggle('is-visible', y > 420);
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

        });

