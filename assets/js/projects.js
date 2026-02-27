(function () {
  "use strict";

  var dataPath = "/assets/data/projects.json";
  var projects = [];
  var activeTag = "All";

  function projectUrl(project) {
    return project.detailPage || "/project.html?slug=" + encodeURIComponent(project.slug);
  }

  function cardMarkup(project) {
    var tags = (project.tags || [])
      .map(function (tag) {
        return '<li class="tag">' + tag + "</li>";
      })
      .join("");

    return (
      '<article class="project-card">' +
      '<header class="project-card-header">' +
      '<p class="project-card-meta">' +
      (project.year || "") +
      (project.status ? " \u2022 " + project.status : "") +
      "</p>" +
      '<h3 class="project-card-title"><a href="' +
      projectUrl(project) +
      '">' +
      project.title +
      "</a></h3>" +
      "</header>" +
      '<p class="project-card-summary">' +
      (project.summary || "") +
      "</p>" +
      '<ul class="tag-list" aria-label="Project tags">' +
      tags +
      "</ul>" +
      '<a class="text-link" href="' +
      projectUrl(project) +
      '">View details</a>' +
      "</article>"
    );
  }

  function renderProjects() {
    var grid = document.getElementById("projects-grid");
    var empty = document.getElementById("projects-empty");

    if (!grid) {
      return;
    }

    var visible =
      activeTag === "All"
        ? projects
        : projects.filter(function (project) {
            return (project.tags || []).indexOf(activeTag) !== -1;
          });

    if (!visible.length) {
      grid.innerHTML = "";
      if (empty) {
        empty.hidden = false;
      }
      return;
    }

    if (empty) {
      empty.hidden = true;
    }

    grid.innerHTML = visible.map(cardMarkup).join("");
  }

  function tagSort(tags) {
    var preferredOrder = [
      "Robotics",
      "Simulation",
      "Control",
      "ML",
      "ROS2",
      "MuJoCo",
      "preCICE"
    ];

    return tags.sort(function (a, b) {
      var ai = preferredOrder.indexOf(a);
      var bi = preferredOrder.indexOf(b);

      if (ai !== -1 && bi !== -1) {
        return ai - bi;
      }

      if (ai !== -1) {
        return -1;
      }

      if (bi !== -1) {
        return 1;
      }

      return a.localeCompare(b);
    });
  }

  function renderFilters() {
    var wrapper = document.getElementById("project-filters");
    if (!wrapper) {
      return;
    }

    var tags = projects.reduce(function (acc, project) {
      (project.tags || []).forEach(function (tag) {
        acc.add(tag);
      });
      return acc;
    }, new Set());

    var allTags = ["All"].concat(tagSort(Array.from(tags)));

    wrapper.innerHTML = allTags
      .map(function (tag) {
        var selected = tag === activeTag;
        return (
          '<button class="filter-chip" type="button" data-tag="' +
          tag +
          '" aria-pressed="' +
          String(selected) +
          '">' +
          tag +
          "</button>"
        );
      })
      .join("");

    wrapper.querySelectorAll("button[data-tag]").forEach(function (button) {
      button.addEventListener("click", function () {
        activeTag = button.getAttribute("data-tag") || "All";
        renderFilters();
        renderProjects();
      });
    });
  }

  function initialTagFromQuery() {
    var query = new URLSearchParams(window.location.search);
    return query.get("tag") || "All";
  }

  function initProjectsPage() {
    var grid = document.getElementById("projects-grid");

    if (!grid) {
      return;
    }

    activeTag = initialTagFromQuery();

    fetch(dataPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load projects data");
        }
        return response.json();
      })
      .then(function (data) {
        projects = data
          .slice()
          .sort(function (a, b) {
            return Number(b.year || 0) - Number(a.year || 0);
          });

        var availableTags = new Set(["All"]);
        projects.forEach(function (project) {
          (project.tags || []).forEach(function (tag) {
            availableTags.add(tag);
          });
        });

        if (!availableTags.has(activeTag)) {
          activeTag = "All";
        }

        renderFilters();
        renderProjects();
      })
      .catch(function () {
        grid.innerHTML =
          '<p class="inline-note">Could not load project data. Check <code>assets/data/projects.json</code>.</p>';
      });
  }

  initProjectsPage();
})();
