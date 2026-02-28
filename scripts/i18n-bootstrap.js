(function () {
    var config = {
        lng: "en",
        fallbackLng: "en",
        defaultNS: "translation",
        ns: ["translation"]
    };

    var localResources = {
        "review.title": "Verified Reviews",
        "review.subtitle": "Live customer feedback from Google and HAILIFU channels.",
        "review.cta": "Leave Review",
        "review.verified": "Verified",
        "review.postingPublicly": "Posting publicly with your Google profile."
    };

    function toObject(value) {
        return value && typeof value === "object" ? value : {};
    }

    function copyLanguages(list) {
        return Array.isArray(list) ? list.slice() : [config.lng];
    }

    function withI18nShape(target, state) {
        var instance = toObject(target);
        instance.language = state.language;
        instance.languages = copyLanguages(state.languages);
        instance.resolvedLanguage = state.language;
        instance.isInitialized = !!state.isInitialized;
        instance.options = state.options;
        instance.store = toObject(instance.store);
        instance.store.data = toObject(state.store && state.store.data);
        if (typeof instance.t !== "function") {
            instance.t = function (key) {
                return String(key || "");
            };
        }
        if (typeof instance.changeLanguage !== "function") {
            instance.changeLanguage = function (nextLanguage) {
                var next = String(nextLanguage || "").trim() || config.lng;
                instance.language = next;
                instance.languages = [next];
                instance.resolvedLanguage = next;
                return Promise.resolve(next);
            };
        }
        if (typeof instance.on !== "function") {
            instance.on = function () { return instance; };
        }
        if (typeof instance.off !== "function") {
            instance.off = function () { return instance; };
        }
        if (typeof instance.hasLoadedNamespace !== "function") {
            instance.hasLoadedNamespace = function () { return true; };
        }
        if (typeof instance.loadNamespaces !== "function") {
            instance.loadNamespaces = function () { return Promise.resolve(); };
        }
        return instance;
    }

    function applyState(resources, loadError) {
        var data = toObject(resources);
        var state = {
            language: config.lng,
            languages: [config.lng],
            isInitialized: true,
            options: config,
            loadError: !!loadError,
            store: {
                data: {
                    en: {
                        translation: data
                    }
                }
            }
        };
        window.HAILIFU_I18N_CONFIG = config;
        window.HAILIFU_I18N = state;
        window.i18n = withI18nShape(window.i18n, state);
        window.i18next = withI18nShape(window.i18next, state);
        return state;
    }

    function loadTranslations() {
        try {
            return Promise.resolve(applyState(localResources, false));
        } catch (error) {
            return Promise.resolve(applyState({}, true));
        }
    }

    window.HAILIFU_I18N_CONFIG = config;
    window.HAILIFU_I18N_READY = loadTranslations();
})();
