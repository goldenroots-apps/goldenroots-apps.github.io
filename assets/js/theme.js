(function () {
  var STORAGE_KEY = "theme";

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" ? "light" : "dark";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#fafafa");
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  apply(getPreferred());

  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute("data-theme") || "light";
    var next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  };

  document.addEventListener("click", function (e) {
    var target = e.target.closest ? e.target.closest("[data-theme-toggle]") : null;
    if (target) {
      e.preventDefault();
      window.toggleTheme();
    }
  });
})();
