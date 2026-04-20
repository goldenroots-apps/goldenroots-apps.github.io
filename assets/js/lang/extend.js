(function () {
  var scriptEl = document.currentScript;
  var baseUrl = scriptEl ? new URL("../../i18n/", scriptEl.src).href : "/assets/i18n/";

  var EXTRA_FLAGS = {
    ar: "sa", bn: "bd", de: "de", fa: "ir", fil: "ph", fr: "fr",
    id: "id", it: "it", lo: "la", ms: "my", my: "mm", nl: "nl",
    pt: "pt", ru: "ru", tr: "tr", ur: "pk", vi: "vn"
  };

  if (typeof LANG_FLAGS !== "undefined") {
    for (var k in EXTRA_FLAGS) LANG_FLAGS[k] = EXTRA_FLAGS[k];
  }

  // Snapshot the original English defaults from HTML before any setLang runs.
  // This lets us reset every [data-i18n] element before applying a new language,
  // so missing keys fall back to English instead of lingering from a previous language.
  var DEFAULTS = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (!(key in DEFAULTS)) DEFAULTS[key] = el.innerHTML;
  });

  function resetToDefaults() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key in DEFAULTS) el.innerHTML = DEFAULTS[key];
    });
  }

  // Wrap setLang: reset to English defaults first, then apply the translation.
  // Always force dir=ltr, even for ar/fa/ur, to avoid layout-flip issues.
  if (typeof window.setLang === "function" && !window.setLang.__wrapped) {
    var origSetLang = window.setLang;
    window.setLang = function (code) {
      resetToDefaults();
      origSetLang(code);
      document.documentElement.dir = "ltr";
    };
    window.setLang.__wrapped = true;
  }

  var cache = {};
  var origPickLang = window.pickLang;

  function applyMissing(code) {
    resetToDefaults();
    var flag = document.getElementById("lang-flag");
    var codeEl = document.getElementById("lang-code");
    if (flag) flag.className = "fi fi-" + (EXTRA_FLAGS[code] || (typeof LANG_FLAGS !== "undefined" && LANG_FLAGS[code]) || "us");
    if (codeEl) codeEl.textContent = code.toUpperCase();
    document.documentElement.lang = code;
    document.documentElement.dir = "ltr";
    try { localStorage.setItem("lang", code); } catch (e) {}
    document.querySelectorAll(".lang-option").forEach(function (o) {
      o.classList.toggle("active", o.getAttribute("data-lang") === code);
    });
    var dd = document.getElementById("lang-dropdown");
    if (dd) dd.classList.remove("open");
  }

  function load(code, done) {
    if (typeof LANGS !== "undefined" && LANGS[code]) { done(true); return; }
    if (cache[code] === false) { done(false); return; }
    if (cache[code]) { if (typeof LANGS !== "undefined") LANGS[code] = cache[code]; done(true); return; }
    fetch(baseUrl + code + ".json", { cache: "default" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && typeof LANGS !== "undefined") {
          data.dir = "ltr";
          LANGS[code] = data;
          cache[code] = data;
          done(true);
        } else {
          cache[code] = false;
          done(false);
        }
      })
      .catch(function () { cache[code] = false; done(false); });
  }

  window.pickLang = function (code) {
    load(code, function (ok) {
      if (ok && typeof setLang === "function") {
        origPickLang ? origPickLang(code) : setLang(code);
      } else {
        applyMissing(code);
      }
    });
  };

  var initial = (function () {
    var url = new URLSearchParams(window.location.search).get("lang");
    var stored;
    try { stored = localStorage.getItem("lang"); } catch (e) {}
    return url || stored;
  })();
  if (initial && typeof LANGS !== "undefined" && !LANGS[initial]) {
    load(initial, function (ok) {
      if (ok && typeof setLang === "function") setLang(initial);
      else applyMissing(initial);
    });
  }
})();
