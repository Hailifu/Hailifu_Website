const adminSecretEncoded = 'aGFpbGlmdTIwMjY=';
        const adminUnlockStorageKey = 'hailifu_admin_unlocked';

        document.addEventListener('DOMContentLoaded', () => {
        const featuredBento = document.getElementById('featuredBento');
        const adminTrigger = document.getElementById('admin-trigger');
        const adminLogoLink = document.getElementById('headerLogo');
        const heroQuoteBtn = document.getElementById('heroQuoteBtn');
        const heroVideo = document.getElementById('heroVideo');
        const heroFallbackImage = document.getElementById('heroFallbackImage');
        const header = document.getElementById('header');
        const navLinks = document.querySelectorAll('#nav a[href^="#"]');
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('nav');
        const servicesTitleCta = document.getElementById('servicesTitleCta');
        const shortcutSidebar = document.getElementById('shortcutSidebar');
        const shortcutSidebarTab = document.getElementById('shortcutSidebarTab');
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
                    pulseFor(card, '#services .services-grid .card.highlight-service', 'highlight-service');
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
        let mediaTypeButtons = [];
        let selectedMediaType = 'image';

        const cloudinaryCloudName = 'daovfi3i5';
        const defaultCloudinaryUnsignedPreset = 'hailifu_presset';
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
        const defaultFirebaseSettingsPath = 'hailifu/settings';
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

            const hubThemeBtn = document.getElementById('actionHubTheme');
            if (hubThemeBtn) {
                const icon = hubThemeBtn.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-moon', normalized !== 'light');
                    icon.classList.toggle('fa-sun', normalized === 'light');
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
                    renderProjects();
                    hydrateShowcaseFromStoredProjects();
                    renderFeaturedWork();
                    renderAdminLazyLoop();
                    bindServiceCardsToMedia();
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
            const record = stripProjectQuoteFields({
                title,
                imageUrl,
                timestamp: Date.now(),
                ...(project && typeof project === 'object' ? project : {}),
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
                    renderProjects();
                    hydrateShowcaseFromStoredProjects();
                    renderFeaturedWork();
                    renderAdminLazyLoop();
                    bindServiceCardsToMedia();
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
            const fromInput = String(cloudinaryPresetInput?.value || '').trim();
            if (fromInput) return fromInput;
            const stored = String(readJsonStorage(cloudinaryPresetStorageKey, '') || '').trim();
            if (stored) return stored;
            return defaultCloudinaryUnsignedPreset;
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
        }

        function cloudinaryUnsignedUpload(file, opts = {}) {
            const preset = String(opts.preset || '').trim();
            const resourceType = String(opts.resourceType || 'auto').trim();
            const onProgress = typeof opts.onProgress === 'function' ? opts.onProgress : null;
            const folder = String(opts.folder || '').trim();
            const publicId = String(opts.publicId || '').trim();

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
                xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/${resourceType}/upload`);
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
                fd.append('file', file);
                fd.append('upload_preset', preset);
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
                const stars = 'â˜…â˜…â˜…â˜…â˜…'.slice(0, rating).padEnd(5, 'â˜…');
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
                const stars = 'â˜…â˜…â˜…â˜…â˜…'.slice(0, rating).padEnd(5, 'â˜…');
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
            }
        });

        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotContainer = document.getElementById('chatbotContainer');
        const chatbotClose = document.getElementById('chatbotClose');

        const actionHub = document.getElementById('actionHub');
        const actionHubMain = document.getElementById('actionHubMain');
        const actionHubItems = actionHub ? actionHub.querySelector('.action-hub-items') : null;
        const actionHubTheme = document.getElementById('actionHubTheme');
        const actionHubChat = document.getElementById('actionHubChat');
        const actionHubShare = document.getElementById('actionHubShare');
        const actionHubWhatsApp = document.getElementById('actionHubWhatsApp');

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
                                <div class="admin-title">Hailifu Command</div>
                                <div class="admin-subtitle">Operations Console</div>
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
                            <div class="command-stats">
                                <div class="command-stat-card new">
                                    <div class="command-stat-label">Total Leads</div>
                                    <div class="command-stat-value" id="overviewTotalLeads">0</div>
                                </div>
                                <div class="command-stat-card">
                                    <div class="command-stat-label">Reviews</div>
                                    <div class="command-stat-value" id="overviewRecentReviews">0</div>
                                </div>
                                <div class="command-stat-card success">
                                    <div class="command-stat-label">Page Reach</div>
                                    <div class="command-stat-value" id="overviewReach">0</div>
                                </div>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-infinity"></i> Lazy Loop Preview</h3>
                                <div class="admin-lazyloop" id="adminLazyLoop">
                                    <div class="admin-lazyloop-viewport">
                                        <div class="admin-lazyloop-track" id="adminLazyLoopTrack"></div>
                                    </div>
                                    <div class="admin-lazyloop-dots" id="adminLazyLoopDots" aria-hidden="true"></div>
                                </div>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-chart-line"></i> Service Interest</h3>
                                <div class="interest-row">
                                    <span>CCTV</span>
                                    <div class="interest-bar"><div class="interest-fill" id="interestCctv"></div></div>
                                    <strong id="interestCctvCount">0</strong>
                                </div>

                                <div class="interest-row">
                                    <span>Electrical</span>
                                    <div class="interest-bar"><div class="interest-fill" id="interestElectrical"></div></div>
                                    <strong id="interestElectricalCount">0</strong>
                                </div>

                                <div class="interest-row">
                                    <span>Air Conditioning</span>
                                    <div class="interest-bar"><div class="interest-fill" id="interestAirconditioning"></div></div>
                                    <strong id="interestAirconditioningCount">0</strong>
                                </div>

                                <div class="interest-row">
                                    <span>Smart Window Solutions</span>
                                    <div class="interest-bar"><div class="interest-fill" id="interestBlindcurtain"></div></div>
                                    <strong id="interestBlindcurtainCount">0</strong>
                                </div>

                                <div class="interest-row">
                                    <span>Automated Gates</span>
                                    <div class="interest-bar"><div class="interest-fill" id="interestGates"></div></div>
                                    <strong id="interestGatesCount">0</strong>
                                </div>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-user-clock"></i> Recent Leads</h3>
                                <div id="overviewLeadsList"></div>
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
                                <h3><i class="fas fa-photo-video"></i> Upload Project</h3>
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
                                        <label for="projectCategory">Category</label>
                                        <select id="projectCategory">
                                            <option value="cctv">CCTV</option>
                                            <option value="electrical">Electrical</option>
                                            <option value="airconditioning">Air Conditioning</option>
                                            <option value="blindcurtain">Smart Window Solutions</option>
                                            <option value="gates">Automated Gates</option>
                                            <option value="fencing">Electric Fencing</option>
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
                                    <div class="form-group">
                                        <label>Upload Media</label>
                                        <div class="file-upload-area" id="fileUploadArea">
                                            <div class="upload-content">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                                <p>Click or drop a file here</p>
                                                <span class="file-types">PNG, JPG, MP4 (max 4MB)</span>
                                            </div>
                                            <input id="projectFile" type="file" accept="image/*,video/*" style="display:none;">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="projectMediaUrl">Or Media URL (YouTube / direct link)</label>
                                        <input id="projectMediaUrl" type="url" placeholder="https://youtube.com/shorts/...">
                                    </div>
                                    <div class="form-group" style="display:flex; align-items:center; gap:10px;">
                                        <input type="checkbox" id="setAsHeroToggle" style="width:auto;">
                                        <label for="setAsHeroToggle" style="margin:0; text-transform:none; letter-spacing:0; font-weight:700;">Set as Hero Background Video</label>
                                    </div>
                                    <button class="upload-btn" id="uploadBtn" type="button"><i class="fas fa-upload"></i> Save Project</button>
                                    <div class="upload-progress" id="uploadProgress" aria-hidden="true">
                                        <div class="upload-progress-row">
                                            <span class="upload-spinner" aria-hidden="true"></span>
                                            <span class="upload-progress-text" id="uploadProgressText">Uploading...</span>
                                        </div>
                                        <div class="upload-progress-bar">
                                            <div class="upload-progress-fill" id="uploadProgressFill" style="width:0%"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="admin-section">
                                <h3><i class="fas fa-layer-group"></i> Stored Projects</h3>
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
            const featured = projects
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
                        if (typeof normalizeCloudinaryUrl === 'function') return normalizeCloudinaryUrl(url);
                    } catch {}
                    return url;
                };

                if (type === 'youtube') {
                    const thumb = normalize(thumbRaw) || normalize(srcRaw);
                    return `<img src="${thumb}" alt="" loading="lazy">`;
                }
                if (type === 'video') {
                    const src = normalize(srcRaw);
                    return `<video src="${src}" muted playsinline webkit-playsinline loop preload="metadata"></video>`;
                }
                const src = normalize(srcRaw);
                return `<img src="${src}" alt="" loading="lazy">`;
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
                fileUploadArea.addEventListener('pointerup', (e) => {
                    try { e.preventDefault(); } catch {}
                    openPicker();
                });

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

            if (uploadBtn) {
                uploadBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    setUploadUiState({ active: false, pct: 0, text: '' });

                    const mediaUrl = String(projectMediaUrl?.value || '').trim();
                    if (mediaUrl) {
                        const resolved = resolveProjectMediaFromUrl(mediaUrl, selectedMediaType);
                        if (!resolved) {
                            alert('Please enter a valid Media URL (must start with http:// or https://).');
                            return;
                        }

                        const setAsHero = !!setAsHeroToggle?.checked;
                        if (setAsHero && resolved.mediaType === 'video') {
                            try { initHeroVideo(resolved.mediaSrc); } catch {}
                            if (firebaseIsReady()) {
                                setFirebaseHeroVideoUrl(resolved.mediaSrc).catch(() => {});
                            } else {
                                remoteConfigState = remoteConfigState && typeof remoteConfigState === 'object' ? remoteConfigState : {};
                                remoteConfigState.heroVideoUrl = resolved.mediaSrc;
                            }
                        }

                        const project = {
                            createdAt: new Date().toISOString(),
                            title: projectTitle?.value || 'Project',
                            category: projectCategory?.value || 'cctv',
                            description: projectDescription?.value || '',
                            mediaType: resolved.mediaType,
                            mediaSrc: resolved.mediaSrc,
                            thumbSrc: resolved.thumbSrc,
                            isStarred: false,
                            isFeatured: false
                        };

                        if (firebaseIsReady()) {
                            setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                            addProjectInFirebase(project)
                                .then(() => {
                                    console.log('Data saved to Firebase!');
                                    alert('Project Saved Successfully!');
                                })
                                .catch((err) => {
                                    console.error('Firebase save failed:', err);
                                    alert(`Firebase save failed: ${String(err?.message || err || 'Unknown error')}`);
                                })
                                .finally(() => setUploadUiState({ active: false, pct: 0, text: '' }));
                        } else {
                            project.id = `p_${Date.now()}`;
                            const projects = getProjects();
                            projects.unshift(project);
                            saveProjects(projects);
                            renderProjects();
                            hydrateShowcaseFromStoredProjects();
                            renderFeaturedWork();
                        }

                        if (setAsHeroToggle) setAsHeroToggle.checked = false;

                        try {
                            const preset = getCloudinaryPresetValue();
                            if (preset && !firebaseIsReady()) {
                                const nextConfig = {
                                    updatedAt: new Date().toISOString(),
                                    heroVideoUrl: String(remoteConfigState?.heroVideoUrl || '').trim() || undefined,
                                    projects: getProjects()
                                };
                                setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                                uploadRemoteConfig(nextConfig, preset)
                                    .then(() => {
                                        remoteConfigFingerprint = '';
                                        syncFromRemoteConfig({ forceRender: true });
                                    })
                                    .finally(() => setUploadUiState({ active: false, pct: 0, text: '' }));
                            }
                        } catch {}

                        if (projectTitle) projectTitle.value = '';
                        if (projectDescription) projectDescription.value = '';
                        if (projectFile) projectFile.value = '';
                        if (projectMediaUrl) projectMediaUrl.value = '';
                        return;
                    }

                    const file = projectFile?.files?.[0];
                    if (!file) {
                        alert('Please choose a file first.');
                        return;
                    }

                    const preset = getCloudinaryPresetValue();
                    if (!preset) {
                        alert('Enter your Cloudinary unsigned upload preset first.');
                        return;
                    }

                    persistCloudinaryPreset();

                    const setAsHero = !!setAsHeroToggle?.checked;
                    setUploadUiState({ active: true, pct: 0, text: 'Uploading...' });

                    cloudinaryUnsignedUpload(file, {
                        preset,
                        resourceType: 'auto',
                        onProgress: (pct) => setUploadUiState({ active: true, pct, text: 'Uploading...' }),
                        folder: 'hailifu'
                    }).then((payload) => {
                        const url = String(payload?.secure_url || '').trim();
                        if (!url) throw new Error('Upload failed');

                        if (setAsHero && selectedMediaType === 'video') {
                            try { initHeroVideo(url); } catch {}
                            if (firebaseIsReady()) {
                                setFirebaseHeroVideoUrl(url).catch(() => {});
                            } else {
                                remoteConfigState = remoteConfigState && typeof remoteConfigState === 'object' ? remoteConfigState : {};
                                remoteConfigState.heroVideoUrl = url;
                            }
                        }

                        const project = {
                            createdAt: new Date().toISOString(),
                            title: projectTitle?.value || 'Project',
                            category: projectCategory?.value || 'cctv',
                            description: projectDescription?.value || '',
                            mediaType: selectedMediaType,
                            mediaSrc: url,
                            thumbSrc: '',
                            isStarred: false,
                            isFeatured: false
                        };

                        if (firebaseIsReady()) {
                            setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                            return addProjectInFirebase(project)
                                .then(() => {
                                    console.log('Data saved to Firebase!');
                                    alert('Project Saved Successfully!');
                                })
                                .catch((err) => {
                                    console.error('Firebase save failed:', err);
                                    alert(`Firebase save failed: ${String(err?.message || err || 'Unknown error')}`);
                                    throw err;
                                });
                        }

                        project.id = `p_${Date.now()}`;

                        const projects = getProjects();
                        projects.unshift(project);
                        saveProjects(projects);
                        renderProjects();
                        hydrateShowcaseFromStoredProjects();
                        renderFeaturedWork();

                        const nextConfig = {
                            updatedAt: new Date().toISOString(),
                            heroVideoUrl: String(remoteConfigState?.heroVideoUrl || '').trim() || undefined,
                            projects: getProjects()
                        };

                        setUploadUiState({ active: true, pct: 100, text: 'Saving...' });
                        return uploadRemoteConfig(nextConfig, preset);
                    }).then(() => {
                        if (setAsHeroToggle) setAsHeroToggle.checked = false;
                        if (!firebaseIsReady()) {
                            remoteConfigFingerprint = '';
                            syncFromRemoteConfig({ forceRender: true });
                        }
                    }).catch((err) => {
                        alert(String(err?.message || err || 'Upload failed'));
                    }).finally(() => {
                        setUploadUiState({ active: false, pct: 0, text: '' });
                        if (projectTitle) projectTitle.value = '';
                        if (projectDescription) projectDescription.value = '';
                        if (projectFile) projectFile.value = '';
                        if (projectMediaUrl) projectMediaUrl.value = '';
                    });
                });
            }

            if (projectsGrid) {
                projectsGrid.addEventListener('click', (e) => {
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
                                renderProjects();
                                renderFeaturedWork();
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
                                renderFeaturedWork();
                            }
                        }
                        return;
                    }

                    const deleteBtn = e.target.closest('[data-delete-project-id]');
                    if (deleteBtn) {
                        const id = deleteBtn.getAttribute('data-delete-project-id');
                        if (firebaseIsReady()) {
                            removeProjectInFirebase(id).catch(() => {});
                        } else {
                            const projects = getProjects().filter((p) => p.id !== id);
                            saveProjects(projects);
                            renderProjects();
                        }
                        const generated = document.querySelector(`[data-generated-project-id="${id}"]`);
                        if (generated) generated.remove();
                        renderFeaturedWork();
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
                    temp.dataset.mediaSrc = project.mediaSrc;
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
                        const href = adminLogoLink.getAttribute('href') || '#home';
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
            const firebaseProjects = firebaseProjectsState && Array.isArray(firebaseProjectsState)
                ? firebaseProjectsState
                : null;

            if (firebaseProjects && firebaseProjects.length) {
                const list = Array.isArray(firebaseProjects) ? firebaseProjects : [];
                return list.map((project) => {
                    const base = stripProjectQuoteFields(project);
                    const mediaSrc = String(base?.mediaSrc || base?.imageUrl || base?.mediaUrl || '').trim();
                    const thumbSrc = String(base?.thumbSrc || base?.thumbnailUrl || base?.thumbUrl || '').trim();
                    const mediaType = String(base?.mediaType || (mediaSrc && /\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc) ? 'video' : 'image') || 'image').trim().toLowerCase() || 'image';
                    return {
                        ...base,
                        mediaSrc,
                        thumbSrc,
                        mediaType,
                        isStarred: Boolean(project?.isStarred),
                        isFeatured: Boolean(project?.isFeatured)
                    };
                });
            }

            const fromRemote = remoteConfigState && Array.isArray(remoteConfigState?.projects)
                ? remoteConfigState.projects
                : null;
            const fromStorage = readJsonStorage('hailifu_projects', []);
            const list = (Array.isArray(fromRemote) && fromRemote.length)
                ? fromRemote
                : (Array.isArray(fromStorage) ? fromStorage : []);

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

            return sanitized.map((project) => {
                const base = stripProjectQuoteFields(project);
                const mediaSrc = String(base?.mediaSrc || base?.imageUrl || base?.mediaUrl || '').trim();
                const thumbSrc = String(base?.thumbSrc || base?.thumbnailUrl || base?.thumbUrl || '').trim();
                const mediaType = String(base?.mediaType || (mediaSrc && /\.(mp4|webm|mov)(\?|#|$)/i.test(mediaSrc) ? 'video' : 'image') || 'image').trim().toLowerCase() || 'image';
                return {
                    ...base,
                    mediaSrc,
                    thumbSrc,
                    mediaType,
                    isStarred: Boolean(project?.isStarred),
                    isFeatured: Boolean(project?.isFeatured)
                };
            });
        }

        function saveProjects(projects) {
            if (firebaseProjectsState && Array.isArray(firebaseProjectsState)) {
                firebaseProjectsState = Array.isArray(projects)
                    ? projects.map(stripProjectQuoteFields)
                    : [];
                return;
            }
            const sanitized = Array.isArray(projects)
                ? projects.map(stripProjectQuoteFields)
                : [];
            void sanitized;
        }

        function renderProjects() {
            if (!projectsGrid) return;
            const projects = getProjects();

            if (projects.length === 0) {
                projectsGrid.innerHTML = '';
                return;
            }
            projectsGrid.innerHTML = projects.slice(0, 50).map((p) => {
                const safeTitle = (p.title || 'Project').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const starred = Boolean(p.isStarred);
                const featured = Boolean(p.isFeatured);
                const starClass = starred ? 'project-star active' : 'project-star';
                const starLabel = starred ? 'Unstar project' : 'Star project';
                const featureChecked = featured ? 'checked' : '';
                const thumb = p.mediaType === 'video'
                    ? `<video src="${p.mediaSrc}" muted playsinline webkit-playsinline></video>`
                    : `<img src="${p.thumbSrc || p.mediaSrc}" alt="${safeTitle}">`;

                return `<div class="project-thumb" data-admin-project-id="${p.id}">${thumb}<button class="${starClass}" type="button" data-star-project-id="${p.id}" aria-label="${starLabel}"><i class="fas fa-star"></i></button><button class="project-delete" type="button" data-delete-project-id="${p.id}" aria-label="Delete project"><i class="fas fa-trash"></i></button><label class="project-feature-toggle"><input type="checkbox" ${featureChecked} data-feature-project-id="${p.id}"><span>Feature in Lazy Loop</span></label><div style="position:absolute; left:8px; bottom:8px; right:8px; font-size:0.8rem; background: rgba(0,0,0,0.55); padding:6px 8px; border-radius:10px;">${safeTitle}</div></div>`;
            }).join('');
        }

        function hydrateShowcaseFromStoredProjects() {
            const showcaseGrid = document.querySelector('.showcase-grid');
            if (!showcaseGrid) return;

            Array.from(showcaseGrid.querySelectorAll('.showcase-item[data-generated-project-id]')).forEach((item) => {
                item.remove();
            });

            const projects = getProjects();
            const slotToProjectCategory = {
                smartwindows: 'blindcurtain'
            };
            const categoryLabelMap = {
                cctv: 'CCTV',
                electrical: 'Electrical',
                airconditioning: 'Air Conditioning',
                gates: 'Automated Gates',
                fencing: 'Electric Fencing',
                smarthome: 'Smart Home',
                smartwindows: 'Smart Window Solutions',
                blindcurtain: 'Smart Window Solutions'
            };

            const pickProjectForSlot = (slotCategory) => {
                const normalized = String(slotCategory || '').toLowerCase().trim();
                const projectCategory = slotToProjectCategory[normalized] || normalized;
                const matches = projects.filter((p) => String(p?.category || '').toLowerCase().trim() === projectCategory);
                const withMedia = matches.filter((p) => p && p.mediaSrc);
                const featured = withMedia.find((p) => p.isFeatured) || withMedia.find((p) => p.isStarred);
                return featured || withMedia[0] || matches[0] || null;
            };

            const slots = Array.from(showcaseGrid.querySelectorAll('.showcase-item'));
            slots.forEach((slot) => {
                if (slot.hasAttribute('data-generated-project-id')) return;

                const slotCategory = (slot.getAttribute('data-category') || slot.dataset.category || '').toLowerCase().trim();
                const project = pickProjectForSlot(slotCategory);

                if (project) {
                    const label = categoryLabelMap[slotCategory] || categoryLabelMap[String(project.category || '').toLowerCase().trim()] || (project.category || 'Project');
                    const title = String(project.title || '').trim();
                    const description = String(project.description || '').trim();

                    slot.dataset.mediaSrc = project.mediaSrc || '';
                    slot.dataset.mediaType = project.mediaType || 'image';

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
                } else {
                    const existingBg = slot.querySelector('.showcase-bg');
                    if (existingBg) existingBg.remove();
                    slot.classList.remove('has-media');
                }

                if (!slot.dataset.modalBound) {
                    slot.dataset.modalBound = '1';
                    slot.addEventListener('click', (e) => {
                        e.preventDefault();
                        openProjectModalFromItem(slot);
                    });
                }
            });
        }

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
            }, 5000);
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

        function renderFeaturedWork() {
            if (!featuredBento) return;

            const categoryLabelMap = {
                cctv: 'CCTV',
                electrical: 'Electrical',
                airconditioning: 'Air Conditioning',
                gates: 'Automated Gates',
                fencing: 'Electric Fencing',
                smarthome: 'Smart Home',
                blindcurtain: 'Smart Window Solutions'
            };

            const projects = getProjects();
            const maxSlides = 4;
            const featured = projects
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

            stopFeaturedLoop();
            featuredLoopHasBindings = false;
            featuredLoopBoundNode = null;
            featuredLoopIndex = 0;
            featuredLoopCount = featured.length;

            if (!featured.length) {
                featuredBento.innerHTML = `
                    <div class="featured-loop" id="featuredLoop">
                        <div class="featured-loop-viewport">
                            <div class="featured-loop-track" id="featuredLoopTrack">
                                <article class="featured-card featured-loop-slide is-empty is-active">
                                    <div class="featured-card-content">
                                        <div class="featured-card-category"><i class="fas fa-star"></i> Featured</div>
                                        <div class="featured-card-title">No projects yet</div>
                                        <div class="featured-card-description">Add a project in the Admin Panel to see it here instantly.</div>
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

            const slides = featured.map((project, idx) => buildSlide(project, idx)).join('');
            const dotsMarkup = featuredLoopCount > 1
                ? featured.map((_, idx) => {
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
                const matchIdx = featured.findIndex((p) => normalizeCategory(p?.category) === preferredFeaturedCategoryKey);
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

        let actionHubIsOpen = false;
        function setActionHubOpen(next) {
            actionHubIsOpen = !!next;
            if (actionHub) actionHub.classList.toggle('is-open', actionHubIsOpen);
            if (actionHubMain) actionHubMain.setAttribute('aria-expanded', actionHubIsOpen ? 'true' : 'false');
            if (actionHubItems) actionHubItems.setAttribute('aria-hidden', actionHubIsOpen ? 'false' : 'true');
        }

        if (actionHubTheme) {
            actionHubTheme.addEventListener('click', (e) => {
                e.preventDefault();
                setActionHubOpen(false);
                toggleTheme();
            });
        }

        if (actionHubMain) {
            actionHubMain.addEventListener('click', (e) => {
                e.preventDefault();
                setActionHubOpen(!actionHubIsOpen);
            });
        }

        if (actionHubChat) {
            actionHubChat.addEventListener('click', (e) => {
                e.preventDefault();
                setActionHubOpen(false);
                openChatbot();
            });
        }

        startServerlessProjectsSync();

        renderLeads();
        renderProjects();
        hydrateShowcaseFromStoredProjects();
        if (!firebaseIsReady()) {
            renderFeaturedWork();
        }
        applyServiceDeepLink();

        const projectModal = document.getElementById('projectModal');
        const projectModalClose = document.getElementById('projectModalClose');
        const projectModalTitle = document.getElementById('projectModalTitle');
        const projectModalCategory = document.getElementById('projectModalCategory');
        const projectModalDescription = document.getElementById('projectModalDescription');
        const projectModalMedia = document.getElementById('projectModalMedia');

        let projectLightbox = null;

        function ensureProjectLightbox() {
            if (projectLightbox) return;

            const node = document.createElement('div');
            node.className = 'media-lightbox';
            node.setAttribute('aria-hidden', 'true');
            node.innerHTML = `
                <button class="media-lightbox-close" type="button" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="media-lightbox-content"></div>
            `;

            document.body.appendChild(node);
            projectLightbox = node;

            const closeBtn = node.querySelector('.media-lightbox-close');
            if (closeBtn) closeBtn.addEventListener('click', closeProjectLightbox);
            node.addEventListener('click', (e) => {
                if (e.target === node) closeProjectLightbox();
            });
        }

        function closeProjectLightbox() {
            if (!projectLightbox) return;
            projectLightbox.classList.remove('active');
            projectLightbox.setAttribute('aria-hidden', 'true');
            const content = projectLightbox.querySelector('.media-lightbox-content');
            if (content) content.innerHTML = '';
        }

        function isProjectLightboxOpen() {
            return !!(projectLightbox && projectLightbox.classList.contains('active'));
        }

        function normalizeMediaItem(m) {
            const mediaSrc = String(m?.mediaSrc || m?.src || '').trim();
            if (!mediaSrc) return null;
            const mediaType = String(m?.mediaType || m?.type || '').trim().toLowerCase() || 'image';
            const thumbSrc = String(m?.thumbSrc || m?.thumb || '').trim();
            return { mediaSrc, mediaType, thumbSrc };
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
                        <div style="margin-bottom:12px;">This video canâ€™t be embedded in file preview mode.</div>
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
                projectModal.classList.remove('active');
                projectModal.classList.remove('is-compact');
                projectModal.classList.remove('has-gallery');
                projectModal.setAttribute('aria-hidden', 'true');
            }
            if (projectModalMedia) {
                projectModalMedia.innerHTML = '';
            }
            closeProjectLightbox();
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

            if (projectModalMedia) {
                projectModalMedia.innerHTML = '';
                projectModal.classList.remove('has-gallery');

                const mediaItems = getMediaItemsForModal(item);
                if (mediaItems.length > 1) {
                    projectModal.classList.add('has-gallery');
                    projectModalMedia.appendChild(buildProjectModalGallery(mediaItems, title));
                } else {
                    const datasetType = item.dataset?.mediaType || '';
                    if (datasetType === 'youtube' && item.dataset?.mediaSrc) {
                        const youtubeId = getYoutubeVideoId(item.dataset.mediaSrc);
                        const watchUrl = youtubeId ? getYoutubeWatchUrl(youtubeId) : item.dataset.mediaSrc;

                        if (!canEmbedYoutube()) {
                            const wrap = document.createElement('div');
                            wrap.style.padding = '22px';
                            wrap.style.textAlign = 'center';
                            wrap.style.color = 'rgba(255, 255, 255, 0.82)';
                            wrap.innerHTML = `
                                <div style="font-size:2rem; margin-bottom:10px; color: var(--orange);"><i class="fas fa-play-circle"></i></div>
                                <div style="margin-bottom:12px;">This video canâ€™t be embedded in file preview mode.</div>
                                <a href="${watchUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; justify-content:center; gap:10px; background: var(--orange); color: #fff; padding: 12px 18px; border-radius: 999px; font-weight: 800; text-decoration: none;">Open on YouTube</a>
                            `;
                            projectModalMedia.appendChild(wrap);
                        } else {
                            const iframe = document.createElement('iframe');
                            iframe.src = youtubeId ? getYoutubeEmbedUrl(youtubeId) : item.dataset.mediaSrc;
                            iframe.title = title;
                            iframe.loading = 'lazy';
                            iframe.setAttribute('frameborder', '0');
                            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                            iframe.setAttribute('allowfullscreen', '');
                            projectModalMedia.appendChild(iframe);
                        }
                    } else {
                        const mediaEl = item.querySelector('img, video, iframe');
                        if (mediaEl) {
                            const clone = mediaEl.cloneNode(true);
                            if (clone.tagName && clone.tagName.toLowerCase() === 'video') {
                                clone.controls = true;
                                clone.autoplay = false;
                                clone.muted = false;
                            }
                            projectModalMedia.appendChild(clone);
                        } else if (item.dataset && item.dataset.mediaSrc) {
                            const type = item.dataset.mediaType || 'image';
                            if (type === 'video') {
                                const video = document.createElement('video');
                                video.src = item.dataset.mediaSrc;
                                video.controls = true;
                                projectModalMedia.appendChild(video);
                            } else {
                                const img = document.createElement('img');
                                img.src = item.dataset.mediaSrc;
                                img.alt = title;
                                projectModalMedia.appendChild(img);
                            }
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
            }

            projectModal.classList.add('active');
            projectModal.setAttribute('aria-hidden', 'false');
        }

        if (projectModalClose) {
            projectModalClose.addEventListener('click', closeProjectModal);
        }

        if (projectModal) {
            projectModal.addEventListener('click', (e) => {
                if (e.target === projectModal) closeProjectModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (isProjectLightboxOpen()) {
                    closeProjectLightbox();
                    return;
                }
                closeProjectModal();
            }
        });

        function bindServiceCardsToMedia() {
            const servicesSection = document.getElementById('services');
            if (!servicesSection) return;

            const cards = servicesSection.querySelectorAll('.services-grid .card');
            if (!cards.length) return;

            const projects = getProjects();
            const categoryLabelMap = {
                cctv: 'CCTV',
                electrical: 'Electrical',
                airconditioning: 'Air Conditioning',
                gates: 'Automated Gates',
                fencing: 'Electric Fencing',
                smarthome: 'Smart Home',
                blindcurtain: 'Smart Window Solutions'
            };

            const serviceIdToCategory = {
                'service-cctv': 'cctv',
                'service-electrical': 'electrical',
                'service-gates': 'gates',
                'service-fencing': 'fencing',
                'service-smarthome': 'smarthome',
                'service-airconditioning': 'airconditioning',
                'service-blindcurtain': 'blindcurtain'
            };

            const getProjectForCategory = (category) => {
                if (!category) return null;
                const matches = projects.filter((p) => String(p.category || '').toLowerCase().trim() === category && p.mediaSrc);
                if (!matches.length) return null;
                const featured = matches.find((p) => p.isFeatured) || matches.find((p) => p.isStarred);
                return featured || matches[0];
            };

            const buildPreviewMarkup = (project, titleText) => {
                if (!project || !project.mediaSrc) return '';
                const safeTitle = String(titleText || project.title || 'Service').replace(/</g, '&lt;').replace(/>/g, '&gt;');

                const normalizedSrc = normalizeCloudinaryUrl(String(project.mediaSrc || '').trim());
                const normalizedThumb = normalizeCloudinaryUrl(String(project.thumbSrc || '').trim());

                if (project.mediaType === 'video') {
                    return `<video src="${normalizedSrc}" muted playsinline webkit-playsinline loop autoplay preload="metadata"></video>`;
                }

                if (project.mediaType === 'youtube') {
                    const youtubeId = getYoutubeVideoId(normalizedSrc);
                    const thumb = normalizedThumb || getYoutubeThumbUrl(youtubeId) || '';
                    return thumb ? `<img src="${thumb}" alt="${safeTitle}" loading="lazy">` : '';
                }

                return `<img src="${normalizedSrc}" alt="${safeTitle}" loading="lazy">`;
            };

            const ensureServicePreview = (card, previewMarkup) => {
                if (!previewMarkup) return;
                const existing = card.querySelector('.service-media');
                if (existing) {
                    existing.innerHTML = previewMarkup;
                    bindHailifuMediaFallback(existing, 'HAILIFU');
                    return;
                }
                const wrap = document.createElement('div');
                wrap.className = 'service-media';
                wrap.innerHTML = previewMarkup;
                card.insertBefore(wrap, card.firstChild);
                bindHailifuMediaFallback(wrap, 'HAILIFU');
            };

            cards.forEach((card) => {
                const category = serviceIdToCategory[card.id] || card.dataset?.serviceCategory || '';
                const categoryLabel = categoryLabelMap[category] || '';
                if (categoryLabel) card.dataset.modalCategory = categoryLabel;

                const project = getProjectForCategory(category);
                const titleText = card.querySelector('h3')?.textContent?.trim() || categoryLabel || 'Service';
                const previewMarkup = buildPreviewMarkup(project, titleText);

                if (project && project.mediaSrc) {
                    card.dataset.mediaSrc = normalizeCloudinaryUrl(String(project.mediaSrc || '').trim());
                    card.dataset.mediaType = project.mediaType || 'image';
                    card.classList.add('has-media');
                }

                ensureServicePreview(card, previewMarkup);
            });
        }

        bindServiceCardsToMedia();

        const popupOverlay = document.getElementById('popupOverlay');
        const popupClose = document.getElementById('popupClose');
        const popupQuoteForm = document.getElementById('popupQuoteForm');
        const popupSuccess = document.getElementById('popupSuccess');
        const popupService = document.getElementById('popupService');
        const serviceContext = document.getElementById('serviceContext');

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
            setActionHubOpen(false);

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

        [sharePortfolioFab, actionHubShare].filter(Boolean).forEach((btn) => {
            btn.addEventListener('click', handleSharePortfolioClick);
        });

        if (actionHubWhatsApp) {
            actionHubWhatsApp.addEventListener('click', (e) => {
                e.preventDefault();
                setActionHubOpen(false);
                window.open('https://wa.me/233550997270', '_blank');
            });
        }

        document.addEventListener('click', (e) => {
            if (!actionHubIsOpen) return;
            if (e.target.closest('#actionHub')) return;
            setActionHubOpen(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            if (actionHubIsOpen) setActionHubOpen(false);
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
            }
        }

        function closeQuotePopup() {
            if (popupOverlay) {
                popupOverlay.classList.remove('active');
            }
        }

        if (popupClose) {
            popupClose.addEventListener('click', closeQuotePopup);
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

        document.querySelectorAll('#service-cctv, #service-electrical, #service-airconditioning, #service-gates, #service-fencing, #service-smarthome, #service-blindcurtain').forEach((card) => {
            card.addEventListener('click', (e) => {
                const id = card.id || '';
                const key = id.replace('service-', '');
                bumpServiceInterest(key);

                setQuoteService(key);
                openQuotePopup();
            });
        });

        function filterProjects(filterValue) {
            const normalizedFilter = String(filterValue || 'all').toLowerCase().trim();
            const showcaseItems = document.querySelectorAll('.showcase-grid .showcase-item');
            if (!showcaseItems.length) return;

            showcaseItems.forEach(item => {
                const itemCategory = (item.getAttribute('data-category') || item.dataset.category || '').toLowerCase().trim();
                const shouldShow = normalizedFilter === 'all' || itemCategory === normalizedFilter;

                item.hidden = !shouldShow;
                item.setAttribute('aria-hidden', String(!shouldShow));

                if (shouldShow) {
                    item.style.display = '';
                    item.classList.remove('is-hidden');
                    item.classList.add('is-visible');
                } else {
                    item.style.display = 'none';
                    item.classList.add('is-hidden');
                    item.classList.remove('is-visible');
                }
            });
            updateShowcaseEmptyState(normalizedFilter);
        }

        function updateShowcaseEmptyState(normalizedFilter) {
            const showcaseGrid = document.querySelector('.showcase-grid');
            if (!showcaseGrid) return;
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
                    node.textContent = 'No projects in this category yet';
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

        document.querySelectorAll('.showcase-item').forEach(item => item.classList.add('is-visible'));
        if (filterButtons.length) {
            const active = document.querySelector('.showcase-filters .filter-btn.active') || filterButtons[0];
            if (active) {
                filterProjects(active.dataset.filter || 'all');
            }
        }

        const updateHeaderScrolled = () => {
            if (!header) return;
            const y = window.scrollY || document.documentElement.scrollTop || 0;
            header.classList.toggle('scrolled', y > 12);
        };

        updateHeaderScrolled();
        window.addEventListener('scroll', updateHeaderScrolled, { passive: true });

        const closeMobileNav = () => {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        };

        const toggleMobileNav = () => {
            if (!navMenu || !mobileToggle) return;
            const nextOpen = !navMenu.classList.contains('active');
            navMenu.classList.toggle('active', nextOpen);
            mobileToggle.classList.toggle('active', nextOpen);
            mobileToggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
        };

        if (navLinks.length) {
            navLinks.forEach((link) => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href') || '';

                    if (!href.startsWith('#')) return;
                    const target = document.querySelector(href);
                    if (!target) return;
                    e.preventDefault();

                    if (shortcutSidebar?.classList?.contains('is-open')) {
                        shortcutSidebar.classList.remove('is-open');
                        shortcutSidebarTab?.setAttribute('aria-expanded', 'false');
                    }

                    target.scrollIntoView({ behavior: 'smooth' });
                    closeMobileNav();
                });
            });
        }

        if (mobileToggle && navMenu) {
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMobileNav();
            });
        }

        document.addEventListener('click', (e) => {
            if (!navMenu || !mobileToggle) return;
            if (!navMenu.classList.contains('active')) return;
            if (e.target.closest('#nav')) return;
            if (e.target.closest('#mobileToggle')) return;
            closeMobileNav();
        });

        window.addEventListener('resize', () => {
            try {
                if (window.matchMedia && window.matchMedia('(min-width: 901px)').matches) {
                    closeMobileNav();
                }
            } catch {}
        }, { passive: true });

        if (shortcutSidebar && shortcutSidebarTab) {
            let autoHideTimer = null;
            let suppressTabClickUntil = 0;
            const sidebarTopStorageKey = 'hailifu_shortcut_sidebar_top_px';

            const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

            const applySavedSidebarTop = () => {
                try {
                    const saved = localStorage.getItem(sidebarTopStorageKey);
                    if (!saved) return;
                    const topPx = Number(saved);
                    if (!Number.isFinite(topPx)) return;
                    shortcutSidebar.classList.add('is-dragged');
                    shortcutSidebar.style.top = `${topPx}px`;
                    shortcutSidebar.style.bottom = 'auto';
                } catch {}
            };

            applySavedSidebarTop();

            const initSidebarDrag = () => {
                let dragging = false;
                let startPointerY = 0;
                let startTop = 0;
                let moved = false;

                const ensurePxTopMode = () => {
                    const rect = shortcutSidebar.getBoundingClientRect();
                    shortcutSidebar.classList.add('is-dragged');
                    shortcutSidebar.style.top = `${rect.top}px`;
                    shortcutSidebar.style.bottom = 'auto';
                    startTop = rect.top;
                };

                const onMove = (e) => {
                    if (!dragging) return;
                    const clientY = e.clientY;
                    const deltaY = clientY - startPointerY;
                    if (Math.abs(deltaY) > 6) moved = true;

                    const rect = shortcutSidebar.getBoundingClientRect();
                    const h = rect.height || 0;
                    const maxTop = Math.max(0, (window.innerHeight || document.documentElement.clientHeight || 0) - h);
                    const nextTop = clamp(startTop + deltaY, 0, maxTop);
                    shortcutSidebar.style.top = `${nextTop}px`;
                };

                const onUp = () => {
                    if (!dragging) return;
                    dragging = false;
                    shortcutSidebar.classList.remove('is-dragging');
                    try { shortcutSidebarTab.releasePointerCapture?.(pointerId); } catch {}

                    if (moved) {
                        suppressTabClickUntil = Date.now() + 450;
                        try {
                            const topPx = parseFloat(shortcutSidebar.style.top);
                            if (Number.isFinite(topPx)) {
                                localStorage.setItem(sidebarTopStorageKey, String(Math.round(topPx)));
                            }
                        } catch {}
                    }
                };

                let pointerId = null;

                shortcutSidebarTab.addEventListener('pointerdown', (e) => {
                    if (e.button !== undefined && e.button !== 0) return;
                    pointerId = e.pointerId;
                    dragging = true;
                    moved = false;
                    startPointerY = e.clientY;
                    ensurePxTopMode();
                    shortcutSidebar.classList.add('is-dragging');
                    clearAutoHide();
                    try { shortcutSidebarTab.setPointerCapture(pointerId); } catch {}
                });

                shortcutSidebarTab.addEventListener('pointermove', onMove);
                shortcutSidebarTab.addEventListener('pointerup', onUp);
                shortcutSidebarTab.addEventListener('pointercancel', onUp);
                shortcutSidebarTab.addEventListener('lostpointercapture', onUp);
            };

            initSidebarDrag();
            const isOpen = () => shortcutSidebar.classList.contains('is-open');
            const clearAutoHide = () => {
                if (autoHideTimer) {
                    clearTimeout(autoHideTimer);
                    autoHideTimer = null;
                }
            };
            const scheduleAutoHide = () => {
                clearAutoHide();
                autoHideTimer = setTimeout(() => {
                    closeSidebar();
                }, 3000);
            };

            function openSidebar() {
                if (isOpen()) {
                    scheduleAutoHide();
                    return;
                }
                shortcutSidebar.classList.add('is-open');
                shortcutSidebarTab.setAttribute('aria-expanded', 'true');
                scheduleAutoHide();
            }

            function closeSidebar() {
                clearAutoHide();
                shortcutSidebar.classList.remove('is-open');
                shortcutSidebarTab.setAttribute('aria-expanded', 'false');
            }

            const markInteraction = () => {
                if (!isOpen()) return;
                scheduleAutoHide();
            };

            shortcutSidebarTab.addEventListener('click', (e) => {
                if (Date.now() < suppressTabClickUntil) {
                    e.preventDefault();
                    return;
                }
                e.preventDefault();
                if (isOpen()) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            });

            shortcutSidebar.addEventListener('mouseenter', openSidebar);
            shortcutSidebar.addEventListener('mousemove', markInteraction);
            shortcutSidebar.addEventListener('mouseleave', scheduleAutoHide);
            shortcutSidebar.addEventListener('touchstart', () => {
                openSidebar();
            }, { passive: true });

            document.addEventListener('click', (e) => {
                if (!isOpen()) return;
                if (shortcutSidebar.contains(e.target)) return;
                closeSidebar();
            });

            shortcutSidebar.addEventListener('click', (e) => {
                const link = e.target.closest('.shortcut-sidebar-link');
                if (!link) return;
                closeSidebar();
            });

            shortcutSidebar.querySelectorAll('[data-shortcut-scroll]').forEach((a) => {
                a.addEventListener('click', (e) => {
                    const href = a.getAttribute('href') || '';
                    if (!href.startsWith('#')) return;
                    const target = document.querySelector(href);
                    if (!target) return;
                    e.preventDefault();

                    closeSidebar();
                    target.scrollIntoView({ behavior: 'smooth' });

                    if (a.hasAttribute('data-review-modal-open')) {
                        e.stopPropagation();
                        setTimeout(() => {
                            try { openReviewModal(); } catch {}
                        }, 450);
                    }
                });
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
                }, { threshold: 0.2 });

                scrollElements.forEach(element => scrollObserver.observe(element));
            } else {
                scrollElements.forEach(element => element.classList.add('animated'));
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

