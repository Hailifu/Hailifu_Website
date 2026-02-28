(function () {
    var BUNDLE_SRC = "https://featurable.com/assets/bundle.js";
    var started = false;
    var FALLBACK_TIMEOUT_MS = 4000;
    var FEATURABLE_I18N_WARNING_TEXT = "react-i18next:: i18n.languages were undefined or empty";

    function installFeaturableWarnFilter() {
        if (!window.console || typeof console.warn !== "function") {
            return function () {};
        }
        var originalWarn = console.warn;
        var wrappedWarn = function () {
            var message = "";
            try {
                message = String(arguments[0] || "");
            } catch {}
            if (message.indexOf(FEATURABLE_I18N_WARNING_TEXT) !== -1) {
                return;
            }
            return originalWarn.apply(console, arguments);
        };
        console.warn = wrappedWarn;
        return function restoreWarn() {
            if (console.warn === wrappedWarn) {
                console.warn = originalWarn;
            }
        };
    }

    function i18nReadyState() {
        var i18n = window.i18n || window.i18next || window.HAILIFU_I18N || {};
        if (!i18n || typeof i18n !== "object") return false;
        var hasLanguages = Array.isArray(i18n.languages) && i18n.languages.length > 0;
        return hasLanguages && !!i18n.isInitialized;
    }

    function injectBundle() {
        if (started) return;
        started = true;
        var restoreWarn = installFeaturableWarnFilter();
        var script = document.createElement("script");
        script.src = BUNDLE_SRC;
        script.defer = true;
        script.charset = "UTF-8";
        script.onload = function () {
            setTimeout(restoreWarn, 2000);
        };
        script.onerror = function () {
            restoreWarn();
            console.warn("[HAILIFU] Featurable bundle failed to load.");
        };
        document.head.appendChild(script);
        setTimeout(restoreWarn, 10000);
    }

    function waitForStateWithPolling(attempt) {
        var tries = Number(attempt || 0);
        if (i18nReadyState()) {
            injectBundle();
            return;
        }
        if (tries >= 120) {
            injectBundle();
            return;
        }
        setTimeout(function () {
            waitForStateWithPolling(tries + 1);
        }, 50);
    }

    function bootWhenReady() {
        var ready = window.HAILIFU_I18N_READY;
        if (ready && typeof ready.then === "function") {
            var timedOut = false;
            var timeoutId = setTimeout(function () {
                timedOut = true;
                waitForStateWithPolling(0);
            }, FALLBACK_TIMEOUT_MS);
            ready.then(function () {
                if (timedOut) return;
                clearTimeout(timeoutId);
                waitForStateWithPolling(0);
            }).catch(function () {
                if (timedOut) return;
                clearTimeout(timeoutId);
                waitForStateWithPolling(0);
            });
            return;
        }
        waitForStateWithPolling(0);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootWhenReady, { once: true });
    } else {
        bootWhenReady();
    }
})();
