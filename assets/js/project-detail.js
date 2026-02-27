(function () {
  "use strict";

  var dataPath = "/assets/data/projects.json";

  function getSlug() {
    var params = new URLSearchParams(window.location.search);
    var querySlug = params.get("slug");
    return querySlug || document.body.getAttribute("data-project-slug");
  }

  function renderListItems(items, wrapper) {
    wrapper.innerHTML = (items || [])
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");
  }

  function renderTags(tags, wrapper) {
    wrapper.innerHTML = (tags || [])
      .map(function (tag) {
        return '<li class="tag">' + tag + "</li>";
      })
      .join("");
  }

  function renderLinks(links, wrapper) {
    var entries = Object.entries(links || {}).filter(function (entry) {
      return Boolean(entry[1]);
    });

    if (!entries.length) {
      wrapper.innerHTML = '<li class="inline-note">Links available on request.</li>';
      return;
    }

    wrapper.innerHTML = entries
      .map(function (entry) {
        var label = entry[0].charAt(0).toUpperCase() + entry[0].slice(1);
        return (
          '<li><a class="text-link" href="' +
          entry[1] +
          '" target="_blank" rel="noopener noreferrer">' +
          label +
          "</a></li>"
        );
      })
      .join("");
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node) {
      node.textContent = value || "";
    }
  }

  function showNotFound(slug) {
    var content = document.getElementById("project-content");
    var error = document.getElementById("project-not-found");
    var slugText = document.getElementById("missing-project-slug");

    if (content) {
      content.hidden = true;
    }

    if (error) {
      error.hidden = false;
    }

    if (slugText) {
      slugText.textContent = slug || "(none)";
    }
  }

  function renderProject(project) {
    setText("project-title", project.title);
    setText("project-summary", project.summary);
    setText("project-overview", project.overview);
    setText("project-meta-year", project.year);
    setText("project-meta-status", project.status);
    setText("project-challenge", project.challenge);
    setText("project-approach", project.approach);

    document.title = project.title + " | Portfolio";

    var tagsWrapper = document.getElementById("project-tags");
    var outcomesWrapper = document.getElementById("project-outcomes");
    var toolsWrapper = document.getElementById("project-tools");
    var linksWrapper = document.getElementById("project-links");

    if (tagsWrapper) {
      renderTags(project.tags, tagsWrapper);
    }

    if (outcomesWrapper) {
      renderListItems(project.outcomes, outcomesWrapper);
    }

    if (toolsWrapper) {
      renderListItems(project.tools, toolsWrapper);
    }

    if (linksWrapper) {
      renderLinks(project.links, linksWrapper);
    }
  }

  function initDetailPage() {
    if (!document.getElementById("project-content")) {
      return;
    }

    var slug = getSlug();

    if (!slug) {
      showNotFound("No slug provided");
      return;
    }

    fetch(dataPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Project data unavailable");
        }
        return response.json();
      })
      .then(function (projects) {
        var project = projects.find(function (candidate) {
          return candidate.slug === slug;
        });

        if (!project) {
          showNotFound(slug);
          return;
        }

        renderProject(project);
      })
      .catch(function () {
        showNotFound(slug);
      });
  }

  initDetailPage();
})();
