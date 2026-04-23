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
        const ghostAdminTrigger = document.getElementById('ghostAdminTrigger');
        const adminEntryBtn = document.getElementById('adminEntryBtn');
        const adminLogoLink = document.getElementById('headerLogo');
        const heroQuoteBtn = document.getElementById('heroQuoteBtn');
        const heroVideo = document.getElementById('heroVideo');
        const heroFallbackImage = document.getElementById('heroFallbackImage');
        const mainNav = document.getElementById('main-nav');
        const backToTopBtn = document.getElementById('backToTop');
        const servicesTitleCta = document.getElementById('servicesTitleCta');
        const themeToggle = document.getElementById('themeToggle');
        const adminSecretParamKey = 'dev';
        const adminSecretParamValue = 'hailifu_access';
        const primarySiteUrl = 'https://hailifugh.com';
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
                mediaSrc: 'hailifu cctv - Copy.png',
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
                mediaSrc: 'electric-1 - Copy.jpg',
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
                mediaSrc: '1663060778Sliding-Gate-Automation-1.webp',
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
                mediaSrc: 'hailifu power panel.png',
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
                mediaSrc: 'lighting.jpg',
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
                mediaSrc: 'hailifu termination.png',
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
                mediaSrc: 'IMG_20210727_132436_260.jpg',
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
                mediaSrc: 'hailifu AC - Copy.png',
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
                mediaSrc: 'IMG_20210429_133549_551.jpg',
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
                mediaSrc: 'courtains with light.jpg',
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
        const defaultIntegrityMediaUrl = './IMG_20210429_133549_551.jpg';
        const remoteConfigPublicIdStorageKey = 'hailifu_remote_config_public_id';
        const remoteConfigUrlStorageKey = 'hailifu_remote_config_url';
        const defaultRemoteConfigPublicId = 'hailifu_site_config';
        const leadsStorageKey = 'hailifu_leads';
        const reviewsStorageKey = 'hailifu_reviews';
        const deletedReviewsStorageKey = 'hailifu_deleted_reviews';

        function getDeletedReviewIds() {
            return readJsonStorage(deletedReviewsStorageKey, []);
        }

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
            document.documentElement.setAttribute('data-theme', normalized);
            document.body.setAttribute('data-theme', normalized);
            if (themeToggle) {
                themeToggle.setAttribute('aria-pressed', String(normalized === 'light'));
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.className = normalized === 'light' ? 'fas fa-moon' : 'fas fa-sun';
                }
            }
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
            setValue('integrityStatus', 'SECURE');
            setValue('integrityUptime', '99.9%');
            setValue('integrityLatency', '< 15 min');
            setValue('integrityCoverage', '360°');
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

        // THE NEW, OPEN CIRCUIT
        async function deleteProjectInSupabase(id) {
            console.log("[HAILIFU] Bypassing blocked Firebase service...");
            const supabase = ensureSupabaseClient();
            if (!supabase) {
                console.error("[HAILIFU] Supabase client not available");
                return;
            }

            const { data, error } = await supabase
                .from('installations') // Your new table name
                .delete()
                .eq('id', id);

            if (error) {
                console.error("Supabase Error:", error.message);
            } else {
                console.log("[HAILIFU] Success: Project removed from Supabase.");
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

        function getPublishedReviews() {
            const firestorePublished = Array.isArray(firestorePublishedReviewsState)
                ? firestorePublishedReviewsState.filter(Boolean)
                : [];
            if (firestorePublished.length) return firestorePublished;
            return getReviews().filter((review) => review.status === 'published');
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

        let adminLogs = [];

        function pushAdminLog(message, status = 'OK') {
            const time = new Date().toTimeString().split(' ')[0];
            adminLogs.unshift({ time, message, status });
            if (adminLogs.length > 50) adminLogs.pop();
            renderAdminLogs();
        }

        function renderAdminLogs() {
            if (!adminLogsContainer) return;
            if (adminLogs.length === 0) {
                adminLogsContainer.innerHTML = '<div class="admin-empty">No activity logs yet.</div>';
                return;
            }
            adminLogsContainer.innerHTML = adminLogs.map((log) => {
                let dotClass = 'log-dot';
                if (log.status === 'PASS' || log.status === 'LIVE' || log.status === 'OK') dotClass += ' log-dot--success';
                return `<div class="log-row"><span class="log-time">${log.time}</span><span class="log-message">${log.message}</span><span class="log-status"><span class="${dotClass}" aria-hidden="true"></span>${log.status}</span></div>`;
            }).join('');
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
            void toast.offsetWidth;
            toast.classList.add('active');
            if (adminMediaToastTimer) clearTimeout(adminMediaToastTimer);
            adminMediaToastTimer = setTimeout(() => {
                toast.classList.remove('active');
            }, 1800);
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

        if (reviewForm) {
            reviewForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                clearReviewFormNotice();
                clearReviewIdentityFailureState();
                setReviewUiState('composer-ready');

                const formData = new FormData(reviewForm);
                const rating = Number(formData.get('rating') || 0);
                const comment = String(formData.get('comment') || '').trim();
                if (!rating || !comment) {
                    showReviewFormNotice('Please select a star rating and share your experience.');
                    return;
                }
                const questionnaireState = collectReviewQuestionnaireState();

                const submitBtn = reviewSubmitBtn || null;
                const initialLabel = submitBtn ? String(submitBtn.innerHTML || '') : '';
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fab fa-google"></i> Verifying...';
                }
                setReviewIdentityLoading(true, 'Verifying with Google...');

                try {
                    const popupIdentity = await signInReviewIdentityWithGooglePopup('submit-review');
                    if (!popupIdentity || !hasVerifiedReviewIdentity(popupIdentity)) {
                        const code = String((popupIdentity && popupIdentity.code) || 'google-popup-failed').toLowerCase();
                        showReviewIdentityRetryState(code);
                        showReviewFormNotice('Google sign-in is required before submitting your review.');
                        return;
                    }

                    const resolvedIdentity = applyReviewIdentityToForm(popupIdentity, { preserveIfFilled: false });
                    const email = toSafeEmailAddress(resolvedIdentity.email);
                    const name = String(
                        resolvedIdentity.displayName ||
                        resolvedIdentity.name ||
                        deriveNameFromEmail(email) ||
                        'Verified Client'
                    ).trim() || 'Verified Client';
                    if (!email) {
                        showReviewFormNotice('Unable to resolve your Google email. Please try again.');
                        return;
                    }

                    const now = new Date().toISOString();
                    let existingReview = getKnownReviewsByEmail(email)[0] || null;
                    if (!existingReview && hasFirestoreReviewRuntime()) {
                        existingReview = await findFirestoreReviewByEmail(email);
                    }

                    const reviewId = String(
                        (existingReview && existingReview.id) ||
                        editingReviewId ||
                        `r_${Date.now()}`
                    ).trim();
                    const existingById = getReviews().find((entry) => String(entry?.id || '').trim() === reviewId) || existingReview;
                    const mergedIdentity = normalizeReviewIdentity({
                        ...resolvedIdentity,
                        email,
                        displayName: name,
                        providerId: 'google.com',
                        verified: true
                    });
                    const identityFields = buildReviewIdentityDocumentFields(mergedIdentity, {
                        ...(existingById && typeof existingById === 'object' ? existingById : {}),
                        name,
                        email,
                        reviewEmail: email,
                        authorImage: mergedIdentity.photoURL || ''
                    });

                    const review = {
                        ...(existingById && typeof existingById === 'object' ? existingById : {}),
                        id: reviewId,
                        createdAt: String(existingById && existingById.createdAt ? existingById.createdAt : now),
                        updatedAt: now,
                        ...identityFields,
                        rating,
                        comment,
                        likes: questionnaireState.likes,
                        services: questionnaireState.services,
                        photoNames: questionnaireState.photoNames,
                        photoCount: questionnaireState.photoNames.length,
                        status: 'published',
                        publishedAt: String(existingById && existingById.publishedAt ? existingById.publishedAt : now)
                    };

                    cacheReviewIdentity(
                        review.reviewEmail || email,
                        review.reviewerDisplayName || review.name || name,
                        review.reviewerPhotoURL || review.authorImage || '',
                        {
                            providerId: 'google.com',
                            uid: review.identityUid || resolvedIdentity.uid || '',
                            verified: true
                        }
                    );

                    const reviews = getReviews();
                    const existingIndex = reviews.findIndex((entry) => String(entry?.id || '').trim() === reviewId);
                    if (existingIndex >= 0) {
                        reviews[existingIndex] = review;
                    } else {
                        reviews.unshift(review);
                    }
                    saveReviews(reviews);
                    if (hasFirestoreReviewRuntime()) {
                        upsertReviewInFirestore(review).catch(() => {});
                    }
                    if (firebaseIsReady()) {
                        upsertReviewInFirebase(review).catch(() => {});
                    }

                    renderAdminReviews();
                    renderPublicReviews();
                    refreshOverview();
                    refreshLiveReviewSection();
                    notifyAdminReviewSubmitted(review);

                    closeReviewModal();
                    reviewForm.reset();
                    resetReviewQuestionnaireState();
                    if (legacyReviewerNameInput) legacyReviewerNameInput.value = '';
                    if (legacyReviewerEmailInput) legacyReviewerEmailInput.value = '';
                    if (legacyReviewCommentInput) legacyReviewCommentInput.value = '';
                    resetReviewEditState();
                    setReviewUiState('composer-ready');
                    setDefaultReviewRating();
                    syncReviewSubmitButtons(resolvedIdentity);
                } finally {
                    setReviewIdentityLoading(false);
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
                pulseSuccess
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

        function activateAdminFromGhostTrigger(sourceNode = null) {
            const granted = adminGatekeeper.grantVisibility();
            if (!granted) return false;
            adminGatekeeper.pulseSuccess(sourceNode);
            return true;
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
                <div class="admin-panel" id="adminPanel" aria-hidden="true" style="display: none; opacity: 0;">
                        <nav class="admin-sidebar">
                            <div class="admin-sidebar-brand">
                                <div class="admin-brand-logo">H</div>
                                <div class="admin-brand-text">
                                    <span class="admin-brand-name">HAILIFU</span>
                                    <span class="admin-brand-tagline">Brilliant Installation</span>
                                </div>
                            </div>
                            <ul class="admin-sidebar-nav">
                                <li class="admin-sidebar-item active" data-admin-tab="overview">
                                    <i class="fas fa-chart-line"></i> <span>Dashboard</span>
                                </li>
                                <li class="admin-sidebar-item" data-admin-tab="leads">
                                    <i class="fas fa-inbox"></i> <span>Leads</span>
                                </li>
                                <li class="admin-sidebar-item" data-admin-tab="projects">
                                    <i class="fas fa-project-diagram"></i> <span>Projects</span>
                                </li>
                                <li class="admin-sidebar-item" data-admin-tab="media">
                                    <i class="fas fa-cloud-upload-alt"></i> <span>Media Library</span>
                                </li>
                                <li class="admin-sidebar-item" data-admin-tab="sections">
                                    <i class="fas fa-layer-group"></i> <span>Site Sections</span>
                                </li>
                                <li class="admin-sidebar-item" data-admin-tab="reviews">
                                    <i class="fas fa-star-half-alt"></i> <span>Reviews</span>
                                </li>
                            </ul>
                            <div class="admin-sidebar-footer">
                                <button class="admin-exit-btn" id="adminToggle" type="button">
                                    <i class="fas fa-sign-out-alt"></i> <span>Exit Portal</span>
                                </button>
                            </div>
                        </nav>
                    <main class="admin-main">
                        <header class="admin-main-header">
                            <div class="admin-header-left">
                                <h1 id="adminMainTitle">Dashboard</h1>
                                <p class="admin-header-subtitle" id="adminMainSubtitle">System Overview</p>
                            </div>
                            <div class="admin-main-header-right">
                                <div class="admin-user-profile">
                                    <div class="admin-user-info">
                                        <span class="admin-user-name">Administrator</span>
                                        <span class="admin-user-role">System Root</span>
                                    </div>
                                    <div class="admin-user-avatar">H</div>
                                </div>
                            </div>
                        </header>
                        <div class="admin-main-content">
                            <div class="admin-tab-panel active" data-admin-panel="overview">
                                <section class="admin-stats-grid">
                                    <div class="admin-stat-card">
                                        <div class="admin-stat-icon"><i class="fas fa-user-clock"></i></div>
                                        <div class="admin-stat-body">
                                            <h3>Total Leads</h3>
                                            <p id="overviewTotalLeads">0</p>
                                            <span class="admin-stat-meta">Active inquiries</span>
                                        </div>
                                    </div>
                                    <div class="admin-stat-card">
                                        <div class="admin-stat-icon"><i class="fas fa-star"></i></div>
                                        <div class="admin-stat-body">
                                            <h3>Reviews</h3>
                                            <p id="overviewRecentReviews">0</p>
                                            <span class="admin-stat-meta">Awaiting approval</span>
                                        </div>
                                    </div>
                                    <div class="admin-stat-card">
                                        <div class="admin-stat-icon"><i class="fas fa-satellite-dish"></i></div>
                                        <div class="admin-stat-body">
                                            <h3>Page Reach</h3>
                                            <p id="overviewReach">0</p>
                                            <span class="admin-stat-meta">Weekly touches</span>
                                        </div>
                                    </div>
                                    <div class="admin-stat-card">
                                        <div class="admin-stat-icon"><i class="fas fa-clock"></i></div>
                                        <div class="admin-stat-body">
                                            <h3>Response Window</h3>
                                            <p>12m</p>
                                            <span class="admin-stat-meta">Avg. turnaround</span>
                                        </div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <div class="admin-section-heading">
                                        <h2><i class="fas fa-photo-film"></i> Integrity Media</h2>
                                        <span class="admin-section-tag">Site Asset</span>
                                    </div>
                                    <p style="margin-bottom:12px; font-size:0.85rem; color: rgba(255,255,255,0.7);">Media shown in the &quot;Why Choose Us&quot; area. Upload image or video to replace.</p>
                                    <input type="file" id="integrityImageInput" class="admin-file-input" accept="image/*,video/*" style="position:absolute; left:-9999px; width:1px; height:1px; opacity:0;">
                                    <button class="upload-btn admin-action-btn integrity-graphic-btn" id="integrityGraphicBtn" type="button"><i class="fas fa-upload"></i> Upload Integrity Media</button>
                                    <div class="integrity-upload-progress" id="integrityUploadProgress" aria-hidden="true" style="display:none; margin-top:10px;">
                                        <div class="upload-progress-bar"><div class="upload-progress-fill" id="integrityUploadProgressFill" style="width:0%"></div></div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-signal"></i> Client Interest</h2>
                                    <div class="interest-grid">
                                        <div class="interest-row">
                                            <div class="interest-label"><span>CCTV</span><strong id="interestCctvCount">0</strong></div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestCctv"></div></div>
                                        </div>
                                        <div class="interest-row">
                                            <div class="interest-label"><span>Electrical</span><strong id="interestElectricalCount">0</strong></div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestElectrical"></div></div>
                                        </div>
                                        <div class="interest-row">
                                            <div class="interest-label"><span>Air Conditioning</span><strong id="interestAirconditioningCount">0</strong></div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestAirconditioning"></div></div>
                                        </div>
                                        <div class="interest-row">
                                            <div class="interest-label"><span>Smart Window Solutions</span><strong id="interestBlindcurtainCount">0</strong></div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestBlindcurtain"></div></div>
                                        </div>
                                        <div class="interest-row">
                                            <div class="interest-label"><span>Automated Gates</span><strong id="interestGatesCount">0</strong></div>
                                            <div class="interest-bar"><div class="interest-fill" id="interestGates"></div></div>
                                        </div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-infinity"></i> Live Showcase Loop</h2>
                                    <div class="admin-lazyloop" id="adminLazyLoop">
                                        <div class="admin-lazyloop-viewport">
                                            <div class="admin-lazyloop-track" id="adminLazyLoopTrack"></div>
                                        </div>
                                        <div class="admin-lazyloop-dots" id="adminLazyLoopDots" aria-hidden="true"></div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <div class="admin-section-heading">
                                        <h2><i class="fas fa-terminal"></i> Recent Logs</h2>
                                        <button class="upload-btn upload-btn--ghost" id="adminClearLogsBtn" type="button" style="padding: 4px 8px; font-size: 0.7rem;"><i class="fas fa-trash"></i> Clear</button>
                                    </div>
                                    <div class="admin-logs" id="adminLogsContainer">
                                        <div class="admin-empty">No activity logs yet.</div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-user-clock"></i> Recent Leads</h2>
                                    <div id="overviewLeadsList"></div>
                                </section>
                            </div>
                            <div class="admin-tab-panel" data-admin-panel="leads">
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-id-card"></i> Lead Inbox</h2>
                                    <div class="media-library-toolbar" style="margin-bottom: 20px;">
                                        <input id="leadsSearch" type="search" placeholder="Search leads by name, email or service..." autocomplete="off">
                                        <button class="upload-btn upload-btn--ghost" id="leadsRefreshBtn" type="button"><i class="fas fa-rotate"></i> Refresh</button>
                                    </div>
                                    <div id="leadsGrid"></div>
                                </section>
                            </div>
                            <div class="admin-tab-panel" data-admin-panel="projects">
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-images"></i> Gallery Manager</h2>
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
                                </section>
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-photo-film"></i> System Integrity Media</h2>
                                    <p style="margin-bottom:12px; font-size:0.85rem; color: rgba(255,255,255,0.7);">Upload image or video for the System Integrity block (Uptime / Latency / Coverage).</p>
                                    <input type="file" id="integrityMediaInputProjects" class="admin-file-input" accept="image/*,video/*" style="position:absolute; left:-9999px; width:1px; height:1px; opacity:0;">
                                    <button class="upload-btn admin-action-btn integrity-graphic-btn" id="integrityMediaBtnProjects" type="button"><i class="fas fa-upload"></i> Upload Integrity Media</button>
                                    <div class="integrity-upload-progress" id="integrityMediaUploadProgressProjects" aria-hidden="true" style="display:none; margin-top:10px;">
                                        <div class="upload-progress-bar"><div class="upload-progress-fill" id="integrityMediaUploadProgressFillProjects" style="width:0%"></div></div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-layer-group"></i> All Media</h2>
                                    <div id="projectsGrid" class="projects-grid"></div>
                                </section>
                            </div>
                            <div class="admin-tab-panel" data-admin-panel="media">
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-photo-film"></i> Media Library</h2>
                                    <p style="margin-bottom:14px; font-size:0.85rem; color: rgba(255,255,255,0.7);">Upload once, reuse anywhere. Assign media to sections (Hero, About, Services, Showcase, Featured Work) and delete assets safely.</p>
                                    <div class="media-library-toolbar">
                                        <input id="mediaLibrarySearch" type="search" placeholder="Search by filename, tag, type..." autocomplete="off">
                                        <button class="upload-btn upload-btn--ghost" id="mediaLibraryRefreshBtn" type="button"><i class="fas fa-rotate"></i> Refresh</button>
                                    </div>
                                    <div class="media-library-uploader">
                                        <div class="file-upload-area media-library-dropzone" id="mediaLibraryUploadArea">
                                            <div class="upload-content">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                                <p>Drag & drop or click to upload</p>
                                                <span class="file-types">PNG, JPG, MP4 (Cloudinary)</span>
                                            </div>
                                            <input id="mediaLibraryFileInput" class="admin-file-input" type="file" accept="image/*,video/*" multiple style="display:none;">
                                        </div>
                                        <div class="media-library-actions">
                                            <button class="upload-btn admin-action-btn" id="mediaLibraryUploadBtn" type="button"><i class="fas fa-upload"></i> Upload</button>
                                            <button class="upload-btn upload-btn--ghost" id="mediaLibraryLinkBtn" type="button"><i class="fas fa-link"></i> Add by URL</button>
                                        </div>
                                        <input id="mediaLibraryUrlInput" type="url" placeholder="https://res.cloudinary.com/... or https://..." autocomplete="off">
                                        <div class="upload-progress" id="mediaLibraryProgress" aria-hidden="true">
                                            <div class="upload-progress-row">
                                                <span class="upload-spinner" aria-hidden="true"></span>
                                                <span class="upload-progress-text" id="mediaLibraryProgressText">Uploading...</span>
                                            </div>
                                            <div class="upload-progress-bar">
                                                <div class="upload-progress-fill" id="mediaLibraryProgressFill" style="width:0%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-grid-2"></i> Library</h2>
                                    <div id="mediaLibraryGrid" class="media-library-grid"></div>
                                </section>
                            </div>
                            <div class="admin-tab-panel" data-admin-panel="sections">
                                <section class="admin-data-section">
                                    <h2><i class="fas fa-sitemap"></i> Section Media</h2>
                                    <p style="margin-bottom:14px; font-size:0.85rem; color: rgba(255,255,255,0.7);">Pick a section slot, then assign a Media Library item to display on that part of the website.</p>
                                    <div class="sections-toolbar">
                                        <label class="sections-label" for="sectionSlotSelect">Section slot</label>
                                        <select id="sectionSlotSelect"></select>
                                        <button class="upload-btn upload-btn--ghost" id="sectionsClearSlotBtn" type="button"><i class="fas fa-eraser"></i> Clear slot</button>
                                    </div>
                                    <div class="sections-assignment">
                                        <div class="sections-current" id="sectionsCurrentAssignment"></div>
                                        <div class="sections-picker">
                                            <div class="sections-picker-title">Assign from Media Library</div>
                                            <div id="sectionsMediaPicker" class="media-library-grid media-library-grid--compact"></div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="admin-tab-panel" data-admin-panel="reviews">
                                <section class="admin-data-section">
                                    <h2><i class="fab fa-google"></i> Google Business Reviews</h2>
                                    <div class="google-business-admin-status">
                                        <button class="google-business-status" id="googleBusinessStatusBtn" type="button" aria-pressed="false">SYNC PENDING</button>
                                        <p id="googleBusinessMessage">Connect the Google Business feed to stream verified reviews here.</p>
                                    </div>
                                </section>
                                <section class="admin-data-section admin-section--review-auth">
                                    <h2><i class="fas fa-user-shield"></i> Firebase Review Access</h2>
                                    <p id="reviewAuthStatus" class="review-auth-status">Sign in with Firebase to access pending reviews.</p>
                                    <form id="reviewAuthForm" class="review-auth-form" autocomplete="on">
                                        <div class="review-auth-grid">
                                            <input id="reviewAuthEmail" type="email" placeholder="admin@hailifu.com" autocomplete="username">
                                            <input id="reviewAuthPassword" type="password" placeholder="Firebase password" autocomplete="current-password">
                                        </div>
                                        <div class="review-admin-actions">
                                            <button type="submit" class="review-admin-btn approve" id="reviewAuthLoginBtn">Firebase Login</button>
                                            <button type="button" class="review-admin-btn delete" id="reviewAuthLogoutBtn">Sign Out</button>
                                        </div>
                                    </form>
                                </section>
                                <div class="admin-review-module" id="reviewModerationShell" hidden>
                                    <section class="admin-data-section">
                                        <h2><i class="fas fa-sliders-h"></i> Review Settings</h2>
                                        <label style="display:flex; align-items:center; gap:10px; color: rgba(255,255,255,0.85);">
                                            <input type="checkbox" id="reviewsRequireApproval">
                                            Require approval before reviews appear publicly.
                                        </label>
                                    </section>
                                    <section class="admin-data-section">
                                        <h2><i class="fas fa-hourglass-half"></i> Pending Reviews</h2>
                                        <div id="pendingReviewsGrid" class="admin-review-stack"></div>
                                    </section>
                                    <section class="admin-data-section">
                                        <h2><i class="fas fa-check-circle"></i> Published Reviews</h2>
                                        <div id="publishedReviewsGrid" class="admin-review-stack"></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', markup);
            adminBackdrop = document.getElementById('adminBackdrop');
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

        function setAdminTab(tabKey) {
            if (!adminTabPanels.length) {
                adminTabs = Array.from(document.querySelectorAll('.admin-tab, .admin-sidebar-item'));
                adminTabPanels = Array.from(document.querySelectorAll('.admin-tab-panel'));
            }
            const sidebarItems = Array.from(document.querySelectorAll('.admin-sidebar-item'));
            if (!adminTabPanels.length) return;

            const normalizedKey = String(tabKey || '').trim().toLowerCase();
            if (!normalizedKey) return;

            pushAdminLog(`Switched to ${normalizedKey} tab`);

            const titleMap = { overview: 'System Overview', leads: 'Lead Inbox', projects: 'Gallery Manager', media: 'Media Library', sections: 'Section Media', reviews: 'Reviews' };
            const titleEl = document.getElementById('adminMainTitle');
            if (titleEl) titleEl.textContent = titleMap[normalizedKey] || 'Dashboard';

            adminTabs.forEach((tab) => {
                const tabValue = String(tab.dataset.adminTab || '').trim().toLowerCase();
                tab.classList.toggle('active', tabValue === normalizedKey);
            });
            sidebarItems.forEach((item) => {
                const itemValue = String(item.dataset.adminTab || '').trim().toLowerCase();
                item.classList.toggle('active', itemValue === normalizedKey);
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
            if (!adminPanel) return;

            adminBackdrop = document.getElementById('adminBackdrop');
            adminToggle = document.getElementById('adminToggle');
            adminTabs = Array.from(document.querySelectorAll('.admin-tab, .admin-sidebar-item'));
            adminTabPanels = Array.from(document.querySelectorAll('.admin-tab-panel'));
            reviewsRequireApproval = document.getElementById('reviewsRequireApproval');
            pendingReviewsGrid = document.getElementById('pendingReviewsGrid');
            publishedReviewsGrid = document.getElementById('publishedReviewsGrid');
            reviewAuthForm = document.getElementById('reviewAuthForm');
            reviewAuthEmailInput = document.getElementById('reviewAuthEmail');
            reviewAuthPasswordInput = document.getElementById('reviewAuthPassword');
            reviewAuthStatus = document.getElementById('reviewAuthStatus');
            reviewAuthLoginBtn = document.getElementById('reviewAuthLoginBtn');
            reviewAuthLogoutBtn = document.getElementById('reviewAuthLogoutBtn');
            reviewModerationShell = document.getElementById('reviewModerationShell');
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
            leadsSearch = document.getElementById('leadsSearch');
            leadsRefreshBtn = document.getElementById('leadsRefreshBtn');
            adminLogsContainer = document.getElementById('adminLogsContainer');
            adminClearLogsBtn = document.getElementById('adminClearLogsBtn');
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
            mediaLibrarySearch = document.getElementById('mediaLibrarySearch');
            mediaLibraryRefreshBtn = document.getElementById('mediaLibraryRefreshBtn');
            mediaLibraryUploadArea = document.getElementById('mediaLibraryUploadArea');
            mediaLibraryFileInput = document.getElementById('mediaLibraryFileInput');
            mediaLibraryUploadBtn = document.getElementById('mediaLibraryUploadBtn');
            mediaLibraryLinkBtn = document.getElementById('mediaLibraryLinkBtn');
            mediaLibraryUrlInput = document.getElementById('mediaLibraryUrlInput');
            mediaLibraryGrid = document.getElementById('mediaLibraryGrid');
            mediaLibraryProgress = document.getElementById('mediaLibraryProgress');
            mediaLibraryProgressFill = document.getElementById('mediaLibraryProgressFill');
            mediaLibraryProgressText = document.getElementById('mediaLibraryProgressText');
            sectionSlotSelect = document.getElementById('sectionSlotSelect');
            sectionsClearSlotBtn = document.getElementById('sectionsClearSlotBtn');
            sectionsCurrentAssignment = document.getElementById('sectionsCurrentAssignment');
            sectionsMediaPicker = document.getElementById('sectionsMediaPicker');

            adminLazyLoop = document.getElementById('adminLazyLoop');
            adminLazyLoopTrack = document.getElementById('adminLazyLoopTrack');
            adminLazyLoopDots = document.getElementById('adminLazyLoopDots');

            if (adminPanel.dataset.listenersBound) return;
            adminPanel.dataset.listenersBound = 'true';

            if (adminBackdrop) {
                adminBackdrop.addEventListener('click', haltDataSync);
            }

            if (leadsSearch) leadsSearch.addEventListener('input', () => renderLeads());
            if (leadsRefreshBtn) leadsRefreshBtn.addEventListener('click', () => renderLeads());
            if (adminClearLogsBtn) adminClearLogsBtn.addEventListener('click', () => {
                adminLogs = [];
                renderAdminLogs();
            });

            adminPanel.addEventListener('click', (e) => {
                const closeBtn = e.target.closest('#adminToggle, .admin-sidebar-close, .admin-toggle');
                if (closeBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    haltDataSync();
                    return;
                }

                const tabBtn = e.target.closest('.admin-tab, .admin-sidebar-item');
                if (tabBtn) {
                    e.preventDefault();
                    setAdminTab(tabBtn.dataset.adminTab);
                    return;
                }

                const uploadBtnEl = e.target.closest('#uploadBtn');
                if (uploadBtnEl) {
                    e.preventDefault();
                    saveProjectFromQueue();
                    return;
                }

                const addGalleryBtnEl = e.target.closest('#addGalleryItemBtn');
                if (addGalleryBtnEl) {
                    e.preventDefault();
                    addMediaFromInputs();
                    return;
                }

                const clearGalleryBtnEl = e.target.closest('#clearGalleryBtn');
                if (clearGalleryBtnEl) {
                    e.preventDefault();
                    clearGalleryQueueState();
                    return;
                }

                const mediaTypeBtnEl = e.target.closest('.media-btn');
                if (mediaTypeBtnEl) {
                    e.preventDefault();
                    const type = mediaTypeBtnEl.dataset.type || 'image';
                    mediaTypeButtons.forEach((b) => b.classList.toggle('active', b === mediaTypeBtnEl));
                    selectedMediaType = type;
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
                            })
                            .catch((error) => {
                                const message = String(error?.message || 'Failed to publish review').replace(/^Firebase:\s*/i, '');
                                showAdminMediaToast(message, 'error');
                            });
                        return;
                    }

                    const reviews = getReviews();
                    const idx = reviews.findIndex((r) => r.id === id);
                    if (idx >= 0) {
                        reviews[idx].status = 'published';
                        saveReviews(reviews);
                        if (hasFirestoreReviewRuntime()) {
                            upsertReviewInFirestore(reviews[idx]).catch(() => {});
                        }
                        if (firebaseIsReady()) {
                            upsertReviewInFirebase(reviews[idx]).catch(() => {});
                        }
                        renderAdminReviews();
                        renderPublicReviews();
                        refreshOverview();
                        refreshLiveReviewSection();
                    }
                    return;
                }

                const deleteBtn = e.target.closest('[data-review-delete]');
                if (deleteBtn) {
                    e.preventDefault();
                    const id = deleteBtn.getAttribute('data-review-delete');
                    if (!canAccessReviewModeration()) {
                        showAdminMediaToast('Complete Triple-Click Handshake and Firebase login first.', 'warning');
                        return;
                    }
                    if (hasFirestoreReviewRuntime() && canAccessReviewModeration()) {
                        removeReviewInFirestore(id)
                            .then(() => {
                                showAdminMediaToast('Review deleted.', 'success');
                            })
                            .catch((error) => {
                                const message = String(error?.message || 'Failed to delete review').replace(/^Firebase:\s*/i, '');
                                showAdminMediaToast(message, 'error');
                            });
                        return;
                    }
                    const reviews = getReviews().filter((r) => r.id !== id);
                    saveReviews(reviews);
                    recordDeletedReviewId(id);
                    if (hasFirestoreReviewRuntime()) {
                        removeReviewInFirestore(id).catch(() => {});
                    }
                    if (firebaseIsReady()) {
                        removeReviewInFirebase(id).catch(() => {});
                    }
                    renderAdminReviews();
                    renderPublicReviews();
                    refreshOverview();
                    refreshLiveReviewSection();
                    return;
                }

                const applySurfaceBtn = e.target.closest('[data-apply-media-surface][data-apply-project-id][data-apply-media-key]');
                if (applySurfaceBtn) {
                    e.preventDefault();
                    e.stopPropagation();

                    const surface = String(applySurfaceBtn.getAttribute('data-apply-media-surface') || '').trim().toLowerCase();
                    const projectId = String(applySurfaceBtn.getAttribute('data-apply-project-id') || '').trim();
                    const mediaKey = String(applySurfaceBtn.getAttribute('data-apply-media-key') || '').trim();
                    if (!surface || !projectId || !mediaKey) return;

                    const projects = getProjects();
                    const idx = projects.findIndex((p) => String(p?.id || '') === projectId);
                    if (idx < 0) return;

                    const originalProject = { ...projects[idx] };
                    const allMedia = coerceProjectMediaItems(originalProject);
                    const selected = allMedia.find((item) => getMediaKey(item) === mediaKey);
                    if (!selected) return;

                    const nextProject = { ...originalProject };
                    let toastMessage = 'Media placement updated';

                    if (surface === 'featured') {
                        const featuredToggle = toggleProjectSurfaceMedia(nextProject, surface, selected);
                        const hasFeaturedItems = Array.isArray(featuredToggle.list) && featuredToggle.list.length > 0;
                        nextProject.showInFeatured = hasFeaturedItems;
                        nextProject.featured = hasFeaturedItems;
                        toastMessage = featuredToggle.added
                            ? 'Added to Featured Loop'
                            : 'Removed from Featured Loop';
                    } else if (surface === 'showcase') {
                        setProjectSurfaceMedia(nextProject, surface, selected);
                        nextProject.showInShowcase = true;
                        nextProject.showcase = true;
                    } else if (surface === 'services') {
                        setProjectSurfaceMedia(nextProject, surface, selected);
                        nextProject.showInServices = true;
                        nextProject.services = true;
                    } else if (surface === 'hero') {
                        nextProject.showInHero = true;
                        nextProject.hero = true;
                        // Clear hero from other projects
                        projects.forEach((p, pIdx) => {
                            if (pIdx !== idx) {
                                p.showInHero = false;
                                p.hero = false;
                            }
                        });
                        try { initHeroVideo(selected.mediaSrc); } catch {}
                        toastMessage = 'Set as Hero Background';
                    } else if (surface === 'integrity') {
                        nextProject.showInIntegrity = true;
                        nextProject.integrity = true;
                        // Clear integrity from other projects
                        projects.forEach((p, pIdx) => {
                            if (pIdx !== idx) {
                                p.showInIntegrity = false;
                                p.integrity = false;
                            }
                        });
                        try { loadIntegrityImage(selected.mediaSrc); } catch {}
                        toastMessage = 'Set as Integrity Media';
                    }

                    const rerenderAfterSurfaceChange = (projectState, surfaceKey) => {
                        renderProjects();
                        if (surfaceKey === 'featured') {
                            scheduleFeaturedRender(projectState, false);
                            return;
                        }
                        if (surfaceKey === 'showcase') {
                            const showcaseProjects = projectState.filter((p) => p && isVisibilityEnabled(p, 'showInShowcase', 'showcase'));
                            renderShowcase(showcaseProjects);
                            const activeFilter = document.querySelector('.showcase-filters .filter-btn.active');
                            if (typeof filterProjects === 'function') {
                                if (activeFilter) filterProjects(activeFilter.dataset.filter || 'all');
                                else updateShowcaseEmptyState('all');
                            }
                            return;
                        }
                        if (surfaceKey === 'services') {
                            renderServices();
                        }
                        if (surfaceKey === 'hero' || surfaceKey === 'integrity') {
                            renderProjects();
                        }
                    };

                    projects[idx] = nextProject;
                    saveProjects(projects);
                    rerenderAfterSurfaceChange(projects, surface);
                    showAdminMediaToast(toastMessage, 'success');

                    if (firebaseIsReady()) {
                        upsertProjectInFirebase(nextProject).catch(() => {
                            projects[idx] = originalProject;
                            saveProjects(projects);
                            rerenderAfterSurfaceChange(projects, surface);
                            showAdminMediaToast('Save failed. Please retry.', 'error');
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
                                })
                                .catch(() => {
                                    showAdminMediaToast('Remote config save failed.', 'error');
                                });
                        }
                    }
                    return;
                }

                const deleteMediaBtn = e.target.closest('[data-delete-media-project-id][data-delete-media-key]');
                if (deleteMediaBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    const projectId = deleteMediaBtn.getAttribute('data-delete-media-project-id');
                    const mediaKey = deleteMediaBtn.getAttribute('data-delete-media-key');
                    if (!projectId || !mediaKey) return;

                    const projects = getProjects();
                    const idx = projects.findIndex((p) => String(p?.id || '') === projectId);
                    if (idx < 0) return;

                    const originalProject = { ...projects[idx] };
                    const nextProject = { ...originalProject };
                    const allMedia = coerceProjectMediaItems(nextProject);
                    const nextMedia = allMedia.filter((item) => getMediaKey(item) !== mediaKey);

                    if (nextMedia.length === 0) {
                        if (!confirm('This is the last media item. Deleting it will remove the entire project. Continue?')) return;
                        deleteProjectById(projectId);
                        return;
                    }

                    nextProject.mediaItems = nextMedia;
                    nextProject.mediaIds = nextMedia.map((m) => getMediaKey(m));

                    // If primary media was deleted, pick the first remaining one
                    if (getMediaKey(nextProject) === mediaKey) {
                        const first = nextMedia[0];
                        nextProject.mediaSrc = first.mediaSrc || first.src || '';
                        nextProject.thumbSrc = first.thumbSrc || first.thumb || '';
                        nextProject.mediaType = first.mediaType || first.type || 'image';
                    }

                    projects[idx] = nextProject;
                    saveProjects(projects);
                    renderProjects();
                    showAdminMediaToast('Media item removed', 'success');

                    if (firebaseIsReady()) {
                        upsertProjectInFirebase(nextProject).catch(() => {
                            projects[idx] = originalProject;
                            saveProjects(projects);
                            renderProjects();
                            showAdminMediaToast('Delete failed. Please retry.', 'error');
                        });
                    }
                    return;
                }

                const refreshReviewBtn = e.target.closest('#refreshReviewFeedBtn');
                if (refreshReviewBtn) {
                    e.preventDefault();
                    refreshReviewBtn.disabled = true;
                    const originalHtml = refreshReviewBtn.innerHTML;
                    refreshReviewBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
                    refreshLiveReviewSection();
                    setTimeout(() => {
                        refreshReviewBtn.disabled = false;
                        refreshReviewBtn.innerHTML = originalHtml;
                        showAdminMediaToast('Review feed refreshed', 'success');
                    }, 1500);
                    return;
                }

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

                const mediaDeleteBtn = e.target.closest('[data-media-delete]');
                if (mediaDeleteBtn) {
                    e.preventDefault();
                    const mediaId = mediaDeleteBtn.getAttribute('data-media-delete');
                    if (confirm('Are you sure you want to delete this media asset from the library? This will also remove it from any assigned sections.')) {
                        removeMediaLibraryRecord(mediaId)
                            .then(() => {
                                showAdminMediaToast('Media asset removed', 'success');
                                applySectionMediaAssignments();
                            })
                            .catch((err) => showAdminMediaToast(`Delete failed: ${err.message}`, 'error'));
                    }
                    return;
                }
            });

            if (sectionSlotSelect) {
                 sectionSlotSelect.addEventListener('change', () => renderMediaLibraryAndSections());
             }

             if (mediaLibrarySearch) {
                 mediaLibrarySearch.addEventListener('input', () => renderMediaLibraryAndSections());
             }

             if (mediaLibraryRefreshBtn) {
                 mediaLibraryRefreshBtn.addEventListener('click', () => {
                     renderMediaLibraryAndSections();
                     showAdminMediaToast('Media library refreshed', 'success');
                 });
             }

             if (mediaLibraryUploadBtn && mediaLibraryFileInput) {
                 mediaLibraryUploadBtn.addEventListener('click', () => mediaLibraryFileInput.click());
                 mediaLibraryFileInput.addEventListener('change', function() {
                     if (!this.files || !this.files.length) return;
                     uploadMediaLibraryFiles(this.files)
                         .then(() => {
                             this.value = '';
                             showAdminMediaToast('Media uploaded to library', 'success');
                         })
                         .catch((err) => {
                             alert(String(err?.message || err || 'Upload failed'));
                         });
                 });
             }

             if (mediaLibraryLinkBtn && mediaLibraryUrlInput) {
                 mediaLibraryLinkBtn.addEventListener('click', () => {
                     const url = String(mediaLibraryUrlInput.value || '').trim();
                     if (!url) {
                         alert('Enter a valid media URL first.');
                         return;
                     }
                     const type = mediaTypeFromUrl(url);
                     const record = {
                         id: `media_link_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
                         title: 'Linked Media',
                         url,
                         type,
                         provider: 'external',
                         createdAt: new Date().toISOString()
                     };
                     upsertMediaLibraryRecord(record)
                         .then(() => {
                             mediaLibraryUrlInput.value = '';
                             showAdminMediaToast('Media link added to library', 'success');
                         })
                         .catch((err) => {
                             alert(String(err?.message || err || 'Failed to add link'));
                         });
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
                const settings = getReviewSettings();
                reviewsRequireApproval.checked = !!settings.requireApproval;
                reviewsRequireApproval.addEventListener('change', () => {
                    saveReviewSettings({ requireApproval: !!reviewsRequireApproval.checked });
                });
            }

            if (reviewAuthForm) {
                reviewAuthForm.addEventListener('submit', handleReviewAuthLoginSubmit);
            }
            if (reviewAuthLogoutBtn) {
                reviewAuthLogoutBtn.addEventListener('click', handleReviewAuthLogoutClick);
            }
            syncReviewAuthUiState();

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
                remoteConfigPublicIdInput.value = stored;
                remoteConfigPublicIdInput.addEventListener('change', () => setRemoteConfigPublicId(remoteConfigPublicIdInput.value));
                remoteConfigPublicIdInput.addEventListener('blur', () => setRemoteConfigPublicId(remoteConfigPublicIdInput.value));
            }

            if (remoteConfigUrlInput) {
                const stored = String(readJsonStorage(remoteConfigUrlStorageKey, '') || '').trim();
                if (stored && !remoteConfigUrlInput.value) remoteConfigUrlInput.value = stored;
                remoteConfigUrlInput.addEventListener('change', () => setRemoteConfigUrl(remoteConfigUrlInput.value));
                remoteConfigUrlInput.addEventListener('blur', () => setRemoteConfigUrl(remoteConfigUrlInput.value));
            }

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

            renderMediaLibraryAndSections();

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
                        alert('Enter Cloudinary preset in Projects tab first.');
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

            bindIntegrityMediaUploader('integrityGraphicBtn', 'integrityImageInput', 'integrityUploadProgress', 'integrityUploadProgressFill');
            bindIntegrityMediaUploader('integrityMediaBtnProjects', 'integrityMediaInputProjects', 'integrityMediaUploadProgressProjects', 'integrityMediaUploadProgressFillProjects');
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
            }
            if (adminPanel) {
                adminPanel.classList.remove('admin-login-modal');
                adminPanel.style.display = 'grid';
                adminPanel.style.opacity = '1';
                void adminPanel.offsetWidth;
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
            stopFirestorePendingReviewsSync();
            renderMediaLibraryAndSections();
            if (adminBackdrop) {
                adminBackdrop.classList.remove('active');
                adminBackdrop.setAttribute('aria-hidden', 'true');
            }
            if (adminPanel) {
                adminPanel.classList.remove('active');
                adminPanel.style.opacity = '0';
                adminPanel.setAttribute('aria-hidden', 'true');
                if (adminHideTimer) clearTimeout(adminHideTimer);
                adminHideTimer = window.setTimeout(() => {
                    if (!adminPanel || adminPanel.classList.contains('active')) return;
                    adminPanel.style.display = 'none';
                    adminHideTimer = null;
                }, 320);
            }
        }

        function navigateToAdminTriggerFallback() {
            if (!adminLogoLink) return;
            const href = adminLogoLink.getAttribute('href') || '#hero';
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.hash = href;
                }
                return;
            }
            window.location.href = href;
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
                if (!url.searchParams.has(adminSecretParamKey)) return;
                url.searchParams.delete(adminSecretParamKey);
                const nextUrl = `${url.pathname}${url.search}${url.hash}`;
                window.history.replaceState({}, document.title, nextUrl || window.location.pathname);
            } catch {}
        }

        function consumeAdminSecretKeyFromUrl() {
            try {
                const url = new URL(window.location.href);
                const incoming = String(url.searchParams.get(adminSecretParamKey) || '').trim();
                if (!incoming) return false;
                const isValid = incoming === adminSecretParamValue;
                if (!isValid) return false;
                scrubAdminSecretFromUrl();
                const granted = adminGatekeeper.authorizeFromSecretKey();
                if (granted) adminGatekeeper.pulseSuccess(ghostAdminTrigger || adminTrigger || null);
                return granted;
            } catch {
                return false;
            }
        }

        const ghostActivationWindowMs = 500;
        const ghostActivationClicksRequired = 3;
        let ghostActivationClicks = [];
        let ghostActivationFallbackTimer = null;

        consumeAdminSecretKeyFromUrl();
        updateAdminEntryButtonVisibility();

        const ghostTriggerNode = ghostAdminTrigger || adminTrigger;
        if (ghostTriggerNode) {
            ghostTriggerNode.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (reviewModal && reviewModal.classList.contains('active')) {
                    if (ghostActivationFallbackTimer) {
                        clearTimeout(ghostActivationFallbackTimer);
                        ghostActivationFallbackTimer = null;
                    }
                    ghostActivationClicks = [];

                    void (async () => {
                        await handleLogoIdentityTap({ openReviewModalIfNeeded: false });
                    })();
                    return;
                }

                const now = Date.now();
                ghostActivationClicks = ghostActivationClicks.filter((stamp) => now - stamp <= ghostActivationWindowMs);
                ghostActivationClicks.push(now);

                if (ghostActivationFallbackTimer) {
                    clearTimeout(ghostActivationFallbackTimer);
                    ghostActivationFallbackTimer = null;
                }

                if (ghostActivationClicks.length >= ghostActivationClicksRequired) {
                    ghostActivationClicks = [];
                    const granted = activateAdminFromGhostTrigger(ghostTriggerNode);
                    if (!granted) return;
                    updateAdminEntryButtonVisibility();
                    if (adminPanel && adminPanel.classList.contains('active')) {
                        return;
                    }
                    initDataSync();
                    return;
                }

                ghostActivationFallbackTimer = window.setTimeout(() => {
                    ghostActivationClicks = [];
                    ghostActivationFallbackTimer = null;
                    void (async () => {
                        const result = await handleLogoIdentityTap({ openReviewModalIfNeeded: true });
                        if (result && result.redirected) return;
                        const hasIdentity = !!(result && result.identity && result.identity.email);
                        if (!hasIdentity && !reviewModal?.classList?.contains('active')) {
                            navigateToAdminTriggerFallback();
                        }
                    })();
                }, ghostActivationWindowMs + 20);
            });
        }

        if (adminEntryBtn) {
            adminEntryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!hasAdminVisibilityAccess()) {
                    updateAdminEntryButtonVisibility();
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
            const closeBtn = e.target.closest('#adminToggle, .admin-toggle');
            if (!closeBtn) return;
            if (adminPanel && adminPanel.classList.contains('active')) {
                e.preventDefault();
                e.stopPropagation();
                haltDataSync();
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

        function deleteLeadById(leadId) {
            const targetId = String(leadId || '').trim();
            if (!targetId) return;
            const nextLeads = getLeads().filter((lead) => String(lead?.id || '').trim() !== targetId);
            saveLeads(nextLeads);
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
            renderLeads();
            refreshOverview();
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

        function deleteProjectById(projectId) {
            if (!projectId) return;
            const projects = getProjects();
            const filteredProjects = projects.filter((p) => String(p?.id || '') !== String(projectId));

            // 1. Update local storage
            saveProjects(filteredProjects);

            // 2. Immediate UI Update
            renderProjects();

            // 3. Remove from cloud databases
            if (typeof removeProjectInFirebase === 'function' && firebaseIsReady()) {
                removeProjectInFirebase(projectId).catch(() => {
                    console.warn('[HAILIFU] Firebase removal failed for:', projectId);
                });
            }

            if (typeof deleteProjectInSupabase === 'function') {
                deleteProjectInSupabase(projectId).catch(() => {
                    console.warn('[HAILIFU] Supabase removal failed for:', projectId);
                });
            }

            showAdminMediaToast('Project and all its media removed', 'success');
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

        const escapeHTML = (value) => String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

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
            const numeric = Number(value);
            if (!Number.isFinite(numeric)) return null;
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
            if (!safeComment) return null;
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
                comment: safeComment,
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
                const authorImage = review.authorImage || review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=FF8C00&color=fff`;
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
                                <img src="${authorImage}" alt="${name}" class="reviewer-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=FF8C00&color=fff'">
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
                const authorImage = review.authorImage || review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(rawName)}&background=FF8C00&color=fff`;
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
                                <img src="${authorImage}" alt="${name}" class="reviewer-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(rawName)}&background=FF8C00&color=fff'">
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
                        <p>${comment}</p>
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

        const assistantCatalog = {
            cctv: {
                label: 'CCTV',
                question: 'For CCTV, how many cameras are you looking to install?'
            },
            gates: {
                label: 'Automated Gates',
                question: 'For Automated Gates, is it a sliding gate or swing gate?'
            },
            electrical: {
                label: 'Electrical Wiring',
                question: 'For Electrical Wiring, is this for a new house wiring or fixing an existing fault?'
            },
            fencing: {
                label: 'Electric Fence',
                question: 'For Electric Fence, is this for a home perimeter, office, or industrial site?'
            },
            airconditioning: {
                label: 'Air Conditioning',
                question: 'For Air Conditioning, is it installation, servicing, or repairs?'
            },
            solar: {
                label: 'Solar Energy',
                question: 'For Solar Energy, do you need a new installation, upgrade, or maintenance?'
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
            if (t.includes('fenc')) return 'fencing';
            if (t.includes('electric')) return 'electrical';
            if (t.includes('air conditioning') || t.includes('aircondition') || t.includes('aircon') || t.includes('conditioner') || /\bac\b/.test(t)) return 'airconditioning';
            if (t.includes('solar') || t.includes('panel') || t.includes('inverter')) return 'solar';
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
            const greetingText = serviceGreeting || 'Welcome to Hailifu! I can help you with a quick quote. Are you interested in CCTV, Automated Gates, Electrical Wiring, Electric Fence, Air Conditioning, Solar Energy, or Smart Window Solutions?';

            addMessage('bot', `${greetingText}
                <div class="brilliant-quick-actions">
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="cctv">CCTV</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="gates">Automated Gates</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="electrical">Electrical Wiring</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="fencing">Electric Fence</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="airconditioning">Air Conditioning</button>
                    <button class="brilliant-quick-btn" type="button" data-assistant-service="solar">Solar Energy</button>
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
                    addMessage('bot', 'Please choose: CCTV, Automated Gates, Electrical Wiring, Electric Fence, Air Conditioning, Solar Energy, or Smart Window Solutions.');
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
        bumpPageLoads();

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
                const selected = pickProjectForService(serviceCategory);
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
                    solar: 'Solar Energy',
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
            if (y <= 20) {
                mainNav.classList.remove('is-hidden');
            } else if (delta < -4) {
                mainNav.classList.add('is-hidden');
            } else if (delta > 4) {
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
                { src: 'hailifu cctv - Copy.png', type: 'image', heightSpan: 1 },
                { src: 'electric-1 - Copy.jpg', type: 'image', heightSpan: 1 },
                { src: '1663060778Sliding-Gate-Automation-1.webp', type: 'image', heightSpan: 1 },
                { src: 'hailifu power panel.png', type: 'image', heightSpan: 1 },
                { src: 'lighting.jpg', type: 'image', heightSpan: 2 },
                { src: 'hailifu termination.png', type: 'image', heightSpan: 1 },
                { src: 'IMG_20210727_132436_260.jpg', type: 'image', heightSpan: 1 },
                { src: 'hailifu AC - Copy.png', type: 'image', heightSpan: 1 },
                { src: 'hailifu cctv - Copy.png', type: 'image', heightSpan: 2 },
                { src: 'electric-1 - Copy.jpg', type: 'image', heightSpan: 1 },
                { src: '1663060778Sliding-Gate-Automation-1.webp', type: 'image', heightSpan: 1 },
                { src: 'hailifu power panel.png', type: 'image', heightSpan: 2 }
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

        // --- Google Places API Integration (SAB Logic: No Map) ---
        const GOOGLE_PLACE_ID = 'ChIJyZ8YI4_E348RS_Xz7N_CSh4';

        async function initGoogleReviews() {
            const grid = document.getElementById('google-reviews-grid');
            if (!grid) return;

            // --- Timeout & Fallback Logic ---
            let apiResolved = false;
            const fallbackTimeout = setTimeout(() => {
                if (!apiResolved) {
                    renderGoogleFallbackUI('API Timeout: Handshake latency detected.');
                }
            }, 5000);

            function renderGoogleFallbackUI(reason) {
                console.warn('[HAILIFU] Google Reviews Fallback:', reason);
                grid.innerHTML = `
                    <div class="google-fallback-ui animate-on-scroll">
                        <i class="fab fa-google" style="font-size: 2rem; color: #FF8C00; margin-bottom: 15px;"></i>
                        <p>We're having trouble loading live reviews right now.</p>
                        <a href="https://g.page/r/CdsiXmzUDUmjEAE/review" target="_blank" class="hailifu-review-link" style="margin-top: 15px; display: inline-flex;">
                            View Verified Reviews on Google
                        </a>
                    </div>
                `;
                // Set default stats if they are still '--'
                const avgEl = document.getElementById('reviewAvgRating');
                const totalEl = document.getElementById('reviewTotalReports');
                if (avgEl && avgEl.textContent === '--') avgEl.textContent = '5.0';
                if (totalEl && totalEl.textContent === '--') totalEl.textContent = '100+';
            }

            try {
                // Modern Library Loading Pattern
                const { PlacesService } = await google.maps.importLibrary("places");
                
                // Initialize the Places Service with a dummy element (SAB logic - no map display)
                const service = new PlacesService(document.createElement('div'));

                const request = {
                    placeId: GOOGLE_PLACE_ID,
                    fields: ['reviews', 'rating', 'user_ratings_total']
                };

                service.getDetails(request, (place, status) => {
                    apiResolved = true;
                    clearTimeout(fallbackTimeout);

                    // --- Live-API-Debugger: Diagnostic Logs ---
                    console.group('[HAILIFU] Live-API-Debugger: Google Places Handshake');
                    console.log('Status Code:', status);
                    console.log('Place Payload:', place);
                    
                    if (status === 'OVER_QUERY_LIMIT') {
                        console.error('CRITICAL: Billing quota exceeded or rapid requests. Check Google Cloud Console Billing.');
                    } else if (status === 'REQUEST_DENIED') {
                        console.error('CRITICAL: API Key rejected. Check Referrer Restrictions in GCP (hailifugh.com must be allowed).');
                    } else if (status === 'INVALID_REQUEST') {
                        console.error('CRITICAL: Place ID mismatch or malformed request parameters.');
                    } else if (status === 'NOT_FOUND') {
                        console.error('CRITICAL: The Place ID "ChIJyZ8YI4_E348RS_Xz7N_CSh4" was not found in the Google database.');
                    }
                    console.groupEnd();

                    if (status === google.maps.places.PlacesServiceStatus.OK && place) {
                        if (place.reviews && place.reviews.length > 0) {
                            renderGoogleReviews(place.reviews);
                        } else {
                            renderGoogleFallbackUI('No reviews found.');
                        }
                        updateReviewStats(place.rating, place.user_ratings_total);
                    } else {
                        renderGoogleFallbackUI(`Google API Status: ${status}`);
                    }
                });
            } catch (err) {
                apiResolved = true;
                clearTimeout(fallbackTimeout);
                
                if (err.message && err.message.includes('ApiNotActivatedMapError')) {
                    console.error('CRITICAL: ApiNotActivatedMapError detected. You must enable "Places API (New)" and "Maps JavaScript API" in the Google Cloud Console for project "hailifu-website".');
                }
                
                renderGoogleFallbackUI(`Service Error: ${err.message}`);
            }
        }

        function renderGoogleReviews(reviews) {
            const grid = document.getElementById('google-reviews-grid');
            if (!grid) return;

            grid.innerHTML = reviews.map(review => {
                const rating = Math.round(review.rating || 5);
                const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
                const date = new Date(review.time * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                return `
                    <article class="google-review-card animate-on-scroll">
                        <div class="google-review-source">
                            <i class="fab fa-google"></i>
                        </div>
                        <div class="google-review-header">
                            <img src="${review.profile_photo_url}" alt="${review.author_name}" class="google-reviewer-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=FF8C00&color=fff'">
                            <div class="google-reviewer-info">
                                <span class="google-reviewer-name">${review.author_name}</span>
                                <span class="google-review-date">${date}</span>
                            </div>
                        </div>
                        <div class="google-review-stars">${stars}</div>
                        <p class="google-review-text">${review.text}</p>
                    </article>
                `;
            }).join('');
        }

        function updateReviewStats(rating, total) {
            const avgEl = document.getElementById('reviewAvgRating');
            const totalEl = document.getElementById('reviewTotalReports');
            const ratingNumber = document.getElementById('googleRatingNumber');
            const reviewCount = document.getElementById('googleReviewCount');
            
            const formattedRating = rating ? rating.toFixed(1) : '5.0';
            const formattedTotal = total ? `${total.toLocaleString()}+` : '100+';

            if (avgEl) avgEl.textContent = formattedRating;
            if (totalEl) totalEl.textContent = formattedTotal;
            if (ratingNumber) ratingNumber.textContent = formattedRating;
            if (reviewCount) reviewCount.textContent = `${formattedTotal} Verified Reviews`;
        }

        // Execute activation
        initGoogleReviews();

        });


