(function () {
  "use strict";

  var dataPath = "/assets/data/projects.json";

  function projectUrl(project) {
    return project.detailPage || "/project.html?slug=" + encodeURIComponent(project.slug);
  }

  function cardMarkup(project) {
    var tags = (project.tags || [])
      .slice(0, 3)
      .map(function (tag) {
        return '<li class="tag">' + tag + "</li>";
      })
      .join("");

    return (
      '<article class="project-card">' +
      '<p class="project-card-meta">' +
      (project.year || "") +
      (project.status ? " \u2022 " + project.status : "") +
      "</p>" +
      '<h3 class="project-card-title"><a href="' +
      projectUrl(project) +
      '">' +
      project.title +
      "</a></h3>" +
      '<p class="project-card-summary">' +
      (project.summary || "") +
      "</p>" +
      '<ul class="tag-list" aria-label="Project tags">' +
      tags +
      "</ul>" +
      "</article>"
    );
  }

  function initHomeProjects() {
    var container = document.getElementById("home-projects-grid");
    if (!container) {
      return;
    }

    fetch(dataPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load projects");
        }
        return response.json();
      })
      .then(function (projects) {
        var featured = projects.filter(function (project) {
          return project.featured;
        });

        var selected = (featured.length ? featured : projects)
          .slice()
          .sort(function (a, b) {
            return Number(b.year || 0) - Number(a.year || 0);
          })
          .slice(0, 3);

        container.innerHTML = selected.map(cardMarkup).join("");
      })
      .catch(function () {
        container.innerHTML =
          '<p class="inline-note">Unable to load featured projects right now. View all projects on the Projects page.</p>';
      });
  }

  initHomeProjects();
})();
