(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  function getPathValue(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function bindSiteText() {
    document.querySelectorAll("[data-site-text]").forEach(function (node) {
      var value = getPathValue(config, node.dataset.siteText);
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-site-link]").forEach(function (node) {
      var value = getPathValue(config, node.dataset.siteLink);
      if (typeof value === "string") {
        node.setAttribute("href", value);
      }
    });
  }

  function removeLegacyAboutNavLinks() {
    document.querySelectorAll('.site-nav a[href="/about.html"], .site-nav a[href="about.html"]').forEach(function (link) {
      link.remove();
    });
  }

  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);

    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      var isDark = mode === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      button.textContent = isDark ? "Light" : "Dark";
    });
  }

  function initThemeToggle() {
    var saved = localStorage.getItem("theme");
    var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (systemPrefersDark ? "dark" : "light"));

    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") || "light";
        setTheme(current === "light" ? "dark" : "light");
      });
    });
  }

  function initNavToggle() {
    document.querySelectorAll("[data-nav-toggle]").forEach(function (button) {
      var targetId = button.getAttribute("aria-controls");
      var menu = targetId ? document.getElementById(targetId) : null;

      if (!menu) {
        return;
      }

      button.addEventListener("click", function () {
        var isOpen = menu.getAttribute("data-open") === "true";
        menu.setAttribute("data-open", String(!isOpen));
        button.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  }

  function closeMenuOnResize() {
    if (window.innerWidth > 860) {
      document.querySelectorAll(".site-nav").forEach(function (menu) {
        menu.setAttribute("data-open", "false");
      });

      document.querySelectorAll("[data-nav-toggle]").forEach(function (button) {
        button.setAttribute("aria-expanded", "false");
      });
    }
  }

  function setCurrentYear() {
    var yearNodes = document.querySelectorAll("[data-current-year]");
    var year = String(new Date().getFullYear());
    yearNodes.forEach(function (node) {
      node.textContent = year;
    });
  }

  bindSiteText();
  removeLegacyAboutNavLinks();
  initThemeToggle();
  initNavToggle();
  closeMenuOnResize();
  setCurrentYear();
  window.addEventListener("resize", closeMenuOnResize);
})();
