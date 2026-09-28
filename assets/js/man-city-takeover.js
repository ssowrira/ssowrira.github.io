(function () {
  "use strict";

  // Exported from premier-league/clean_data (notebook 05_man_city_takeover.ipynb).
  var DATA = {"positions":[{"season":"1992-93","year":1992,"position":9,"points":57,"played":42,"teams":22,"complete":true},{"season":"1993-94","year":1993,"position":16,"points":45,"played":42,"teams":22,"complete":true},{"season":"1994-95","year":1994,"position":17,"points":49,"played":42,"teams":22,"complete":true},{"season":"1995-96","year":1995,"position":18,"points":38,"played":38,"teams":20,"complete":true},{"season":"2000-01","year":2000,"position":18,"points":34,"played":38,"teams":20,"complete":true},{"season":"2002-03","year":2002,"position":9,"points":51,"played":38,"teams":20,"complete":true},{"season":"2003-04","year":2003,"position":16,"points":41,"played":38,"teams":20,"complete":true},{"season":"2004-05","year":2004,"position":8,"points":52,"played":38,"teams":20,"complete":true},{"season":"2005-06","year":2005,"position":15,"points":43,"played":38,"teams":20,"complete":true},{"season":"2006-07","year":2006,"position":14,"points":42,"played":38,"teams":20,"complete":true},{"season":"2007-08","year":2007,"position":9,"points":55,"played":38,"teams":20,"complete":true},{"season":"2008-09","year":2008,"position":10,"points":50,"played":38,"teams":20,"complete":true},{"season":"2009-10","year":2009,"position":5,"points":67,"played":38,"teams":20,"complete":true},{"season":"2010-11","year":2010,"position":3,"points":71,"played":38,"teams":20,"complete":true},{"season":"2011-12","year":2011,"position":1,"points":89,"played":38,"teams":20,"complete":true},{"season":"2012-13","year":2012,"position":2,"points":78,"played":38,"teams":20,"complete":true},{"season":"2013-14","year":2013,"position":1,"points":86,"played":38,"teams":20,"complete":true},{"season":"2014-15","year":2014,"position":2,"points":79,"played":38,"teams":20,"complete":true},{"season":"2015-16","year":2015,"position":4,"points":66,"played":38,"teams":20,"complete":true},{"season":"2016-17","year":2016,"position":3,"points":78,"played":38,"teams":20,"complete":true},{"season":"2017-18","year":2017,"position":1,"points":100,"played":38,"teams":20,"complete":true},{"season":"2018-19","year":2018,"position":1,"points":98,"played":38,"teams":20,"complete":true},{"season":"2019-20","year":2019,"position":2,"points":81,"played":38,"teams":20,"complete":true},{"season":"2020-21","year":2020,"position":1,"points":86,"played":38,"teams":20,"complete":true},{"season":"2021-22","year":2021,"position":1,"points":93,"played":38,"teams":20,"complete":true},{"season":"2022-23","year":2022,"position":1,"points":89,"played":38,"teams":20,"complete":true},{"season":"2023-24","year":2023,"position":1,"points":91,"played":38,"teams":20,"complete":true},{"season":"2024-25","year":2024,"position":3,"points":71,"played":38,"teams":20,"complete":true},{"season":"2025-26","year":2025,"position":2,"points":78,"played":38,"teams":20,"complete":true}],"firstYear":1992,"lastYear":2025,"titles":[{"season":"2011-12","city_pts":89,"runner_up":"Manchester United","runner_up_pts":89,"champ_without":"Manchester United","pts_without":89},{"season":"2013-14","city_pts":86,"runner_up":"Liverpool","runner_up_pts":84,"champ_without":"Liverpool","pts_without":81},{"season":"2017-18","city_pts":100,"runner_up":"Manchester United","runner_up_pts":81,"champ_without":"Manchester United","pts_without":78},{"season":"2018-19","city_pts":98,"runner_up":"Liverpool","runner_up_pts":97,"champ_without":"Liverpool","pts_without":96},{"season":"2020-21","city_pts":86,"runner_up":"Manchester United","runner_up_pts":74,"champ_without":"Manchester United","pts_without":70},{"season":"2021-22","city_pts":93,"runner_up":"Liverpool","runner_up_pts":92,"champ_without":"Liverpool","pts_without":90},{"season":"2022-23","city_pts":89,"runner_up":"Arsenal","runner_up_pts":84,"champ_without":"Arsenal","pts_without":84},{"season":"2023-24","city_pts":91,"runner_up":"Arsenal","runner_up_pts":89,"champ_without":"Arsenal","pts_without":85}],"europe":[{"season":"2008-09","city_pos":10,"cl_gained":[],"el_gained":null},{"season":"2009-10","city_pos":5,"cl_gained":[],"el_gained":"Aston Villa"},{"season":"2010-11","city_pos":3,"cl_gained":["Tottenham Hotspur"],"el_gained":"Liverpool"},{"season":"2011-12","city_pos":1,"cl_gained":["Newcastle United"],"el_gained":"Chelsea"},{"season":"2012-13","city_pos":2,"cl_gained":["Tottenham Hotspur"],"el_gained":"Liverpool"},{"season":"2013-14","city_pos":1,"cl_gained":["Everton"],"el_gained":"Tottenham Hotspur"},{"season":"2014-15","city_pos":2,"cl_gained":["Tottenham Hotspur"],"el_gained":"Southampton"},{"season":"2015-16","city_pos":4,"cl_gained":["Manchester United"],"el_gained":"Southampton"},{"season":"2016-17","city_pos":3,"cl_gained":["Arsenal"],"el_gained":"Manchester United"},{"season":"2017-18","city_pos":1,"cl_gained":["Chelsea"],"el_gained":"Arsenal"},{"season":"2018-19","city_pos":1,"cl_gained":["Arsenal"],"el_gained":"Manchester United"},{"season":"2019-20","city_pos":2,"cl_gained":["Leicester City"],"el_gained":"Arsenal"},{"season":"2020-21","city_pos":1,"cl_gained":["West Ham United"],"el_gained":null},{"season":"2021-22","city_pos":1,"cl_gained":["Arsenal"],"el_gained":"Manchester United"},{"season":"2022-23","city_pos":1,"cl_gained":["Liverpool"],"el_gained":"Brighton & Hove Albion"},{"season":"2023-24","city_pos":1,"cl_gained":["Tottenham Hotspur"],"el_gained":"Chelsea"},{"season":"2024-25","city_pos":3,"cl_gained":["Newcastle United"],"el_gained":"Aston Villa"},{"season":"2025-26","city_pos":2,"cl_gained":["Liverpool"],"el_gained":"Bournemouth"}]};

  var SVG_NS = "http://www.w3.org/2000/svg";
  var TAKEOVER_YEAR = 2008;

  function el(name, attrs, parent) {
    var node = document.createElementNS(SVG_NS, name);
    Object.keys(attrs || {}).forEach(function (key) {
      node.setAttribute(key, attrs[key]);
    });
    if (parent) {
      parent.appendChild(node);
    }
    return node;
  }

  function text(parent, x, y, content, attrs) {
    var node = el("text", Object.assign({ x: x, y: y }, attrs || {}), parent);
    node.textContent = content;
    return node;
  }

  function newSvg(frame, width, height, label) {
    frame.querySelectorAll("svg").forEach(function (old) {
      old.remove();
    });
    var svg = el("svg", {
      viewBox: "0 0 " + width + " " + height,
      width: width,
      height: height,
      role: "img",
      "aria-label": label
    });
    frame.insertBefore(svg, frame.firstChild);
    return svg;
  }

  function seasonLabel(year) {
    return year + "-" + String(year + 1).slice(-2);
  }

  function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  // Tooltip: one per chart frame, filled with textContent only.
  function tooltipFor(frame) {
    var tip = frame.querySelector(".chart-tooltip");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "chart-tooltip";
      tip.hidden = true;
      frame.appendChild(tip);
    }
    return {
      show: function (heading, rows, x, y) {
        tip.textContent = "";
        var head = document.createElement("div");
        head.className = "tt-head";
        head.textContent = heading;
        tip.appendChild(head);
        rows.forEach(function (row) {
          var line = document.createElement("div");
          line.className = "tt-row";
          if (row.key) {
            var key = document.createElement("span");
            key.className = "legend-line " + row.key;
            line.appendChild(key);
          }
          var value = document.createElement("span");
          value.className = "tt-value";
          value.textContent = row.value;
          line.appendChild(value);
          if (row.label) {
            var label = document.createElement("span");
            label.textContent = row.label;
            line.appendChild(label);
          }
          tip.appendChild(line);
        });
        tip.hidden = false;
        var frameWidth = frame.clientWidth;
        var tipWidth = tip.offsetWidth;
        var left = x + 14;
        if (left + tipWidth > frameWidth) {
          left = Math.max(0, x - tipWidth - 14);
        }
        tip.style.left = left + "px";
        tip.style.top = Math.max(0, y - tip.offsetHeight / 2) + "px";
      },
      hide: function () {
        tip.hidden = true;
      }
    };
  }

  function pointerPos(frame, event) {
    var rect = frame.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  // Wire hover + keyboard focus on a hit target to the tooltip.
  function bindHit(hit, frame, tip, content, anchor) {
    hit.setAttribute("tabindex", "0");
    hit.addEventListener("pointermove", function (event) {
      var p = pointerPos(frame, event);
      var c = content();
      tip.show(c.heading, c.rows, p.x, p.y);
    });
    hit.addEventListener("pointerleave", tip.hide);
    hit.addEventListener("focus", function () {
      var c = content();
      var a = anchor();
      tip.show(c.heading, c.rows, a.x, a.y);
    });
    hit.addEventListener("blur", tip.hide);
  }

  // Chart 1: final league position by season.
  function drawPositions(frame) {
    var width = Math.max(300, frame.clientWidth);
    var compact = width < 560;
    var height = compact ? 280 : 330;
    var m = { top: 26, right: 12, bottom: 34, left: 36 };
    var svg = newSvg(frame, width, height, "Line chart of Manchester City's final Premier League position by season, 1992-93 to 2025-26.");
    var tip = tooltipFor(frame);

    var years = [];
    for (var yr = DATA.firstYear; yr <= DATA.lastYear; yr++) {
      years.push(yr);
    }
    var bySeason = {};
    DATA.positions.forEach(function (p) {
      bySeason[p.year] = p;
    });

    var plotW = width - m.left - m.right;
    var plotH = height - m.top - m.bottom;
    var step = plotW / years.length;
    var x = function (year) {
      return m.left + (year - DATA.firstYear + 0.5) * step;
    };
    var y = function (pos) {
      return m.top + ((pos - 1) / 21) * plotH;
    };

    // Pre-takeover shading and seasons outside the Premier League.
    el("rect", { class: "band", x: m.left, y: m.top, width: x(TAKEOVER_YEAR) - step / 2 - m.left, height: plotH }, svg);
    years.forEach(function (year) {
      if (!bySeason[year]) {
        el("rect", { class: "band", x: x(year) - step / 2, y: m.top, width: step, height: plotH }, svg);
      }
    });

    [1, 5, 10, 15, 20].forEach(function (pos) {
      el("line", { class: "grid-line", x1: m.left, x2: width - m.right, y1: y(pos), y2: y(pos) }, svg);
      text(svg, m.left - 8, y(pos) + 4, ordinal(pos), { "text-anchor": "end" });
    });
    el("line", { class: "axis-line", x1: m.left, x2: width - m.right, y1: m.top + plotH, y2: m.top + plotH }, svg);

    var tickEvery = compact ? 8 : 4;
    years.forEach(function (year) {
      var onStep = (year - DATA.firstYear) % tickEvery === 0;
      var lastFits = year === DATA.lastYear && (year - DATA.firstYear) % tickEvery >= tickEvery / 2;
      if (onStep || lastFits) {
        text(svg, x(year), height - m.bottom + 18, compact ? "'" + String(year).slice(-2) : seasonLabel(year), { "text-anchor": "middle" });
      }
    });

    // Takeover marker.
    var tx = x(TAKEOVER_YEAR) - step / 2;
    el("line", { class: "axis-line", x1: tx, x2: tx, y1: m.top - 8, y2: m.top + plotH }, svg);
    text(svg, tx - 6, m.top - 12, "Before the takeover", { "text-anchor": "end" });
    text(svg, tx + 6, m.top - 12, "Takeover, 1 Sep 2008", { "text-anchor": "start", class: "label-strong" });

    var missingMid = years.filter(function (year) {
      return !bySeason[year];
    });
    if (missingMid.length && !compact) {
      text(svg, x(1998), y(21) + 2, "Outside the Premier League", { "text-anchor": "middle" });
    }

    // Line, broken across seasons outside the Premier League.
    var d = "";
    var penDown = false;
    years.forEach(function (year) {
      var p = bySeason[year];
      if (!p) {
        penDown = false;
        return;
      }
      d += (penDown ? "L" : "M") + x(year).toFixed(1) + "," + y(p.position).toFixed(1);
      penDown = true;
    });
    el("path", { d: d, class: "m-series1-line" }, svg);

    DATA.positions.forEach(function (p) {
      el("circle", {
        cx: x(p.year),
        cy: y(p.position),
        r: 4,
        class: p.complete ? "m-series1-dot" : "m-series1-dot-open"
      }, svg);
    });

    // Direct label: first title.
    var first = DATA.positions.filter(function (p) {
      return p.position === 1;
    })[0];
    if (first) {
      text(svg, x(first.year) - 8, y(1) + 4, "First title", { "text-anchor": "end", class: "label-strong" });
    }

    // Crosshair and tooltip, snapped to the nearest season.
    var cross = el("line", { class: "crosshair", y1: m.top, y2: m.top + plotH, visibility: "hidden" }, svg);
    var overlay = el("rect", { class: "hit", x: m.left, y: m.top, width: plotW, height: plotH, style: "fill: transparent" }, svg);
    overlay.addEventListener("pointermove", function (event) {
      var p = pointerPos(frame, event);
      var scale = width / frame.clientWidth;
      var idx = Math.min(years.length - 1, Math.max(0, Math.floor((p.x * scale - m.left) / step)));
      var year = years[idx];
      var row = bySeason[year];
      cross.setAttribute("x1", x(year));
      cross.setAttribute("x2", x(year));
      cross.setAttribute("visibility", "visible");
      if (row) {
        var rows = [
          { key: "k-series1", value: ordinal(row.position), label: "of " + row.teams },
          { value: row.points + " pts", label: "from " + row.played + " games" }
        ];
        if (!row.complete) {
          rows.push({ value: "", label: "Season incomplete in the data" });
        }
        tip.show(seasonLabel(year), rows, p.x, p.y);
      } else {
        tip.show(seasonLabel(year), [{ value: "", label: "Not in the Premier League" }], p.x, p.y);
      }
    });
    overlay.addEventListener("pointerleave", function () {
      cross.setAttribute("visibility", "hidden");
      tip.hide();
    });
  }

  // Chart 2: City's title-winning points vs the would-be champion's points without City.
  function drawTitles(frame) {
    var width = Math.max(300, frame.clientWidth);
    var compact = width < 560;
    var rowH = 34;
    var m = { top: 26, right: compact ? 44 : 56, bottom: 34, left: 64 };
    var rows = DATA.titles;
    var height = m.top + rows.length * rowH + m.bottom;
    var svg = newSvg(frame, width, height, "Dot plot comparing Manchester City's points in each title-winning season with the points of the team that would have won without them.");
    var tip = tooltipFor(frame);

    var lo = 65;
    var hi = 100;
    var plotW = width - m.left - m.right;
    var x = function (pts) {
      return m.left + ((pts - lo) / (hi - lo)) * plotW;
    };
    var y = function (i) {
      return m.top + (i + 0.5) * rowH;
    };

    [70, 80, 90, 100].forEach(function (pts) {
      el("line", { class: "grid-line", x1: x(pts), x2: x(pts), y1: m.top, y2: height - m.bottom }, svg);
      text(svg, x(pts), height - m.bottom + 18, String(pts), { "text-anchor": "middle" });
    });
    el("line", { class: "axis-line", x1: m.left, x2: width - m.right, y1: height - m.bottom, y2: height - m.bottom }, svg);

    rows.forEach(function (row, i) {
      var cy = y(i);
      var gap = row.city_pts - row.pts_without;
      text(svg, m.left - 10, cy + 4, row.season, { "text-anchor": "end", class: "label-strong" });
      el("line", { class: "m-connector", x1: x(row.pts_without), x2: x(row.city_pts), y1: cy, y2: cy }, svg);
      el("circle", { cx: x(row.pts_without), cy: cy, r: 5, class: "m-neutral-dot" }, svg);
      el("circle", { cx: x(row.city_pts), cy: cy, r: 5, class: "m-series1-dot" }, svg);
      text(svg, width - m.right + 8, cy + 4, gap === 0 ? "level" : "+" + gap, { "text-anchor": "start" });

      var hit = el("rect", { class: "hit", x: 0, y: cy - rowH / 2, width: width, height: rowH }, svg);
      bindHit(hit, frame, tip, function () {
        return {
          heading: row.season,
          rows: [
            { key: "k-series1", value: row.city_pts + " pts", label: "Manchester City (champions)" },
            { key: "k-neutral", value: row.pts_without + " pts", label: row.champ_without + ", without City" },
            { value: row.runner_up_pts + " pts", label: row.runner_up + ", actual total" }
          ]
        };
      }, function () {
        return { x: (x(row.city_pts) / width) * frame.clientWidth, y: (cy / height) * frame.clientHeight };
      });
    });
    text(svg, width - m.right + 8, m.top - 10, "Margin", { "text-anchor": "start", class: "label-strong" });
    text(svg, m.left, m.top - 10, "Points", { "text-anchor": "start", class: "label-strong" });
  }

  // Chart 3: which clubs inherit City's European place, by competition.
  function drawEurope(frame) {
    var counts = {};
    DATA.europe.forEach(function (season) {
      season.cl_gained.forEach(function (team) {
        counts[team] = counts[team] || { cl: 0, el: 0 };
        counts[team].cl += 1;
      });
      if (season.el_gained) {
        counts[season.el_gained] = counts[season.el_gained] || { cl: 0, el: 0 };
        counts[season.el_gained].el += 1;
      }
    });
    var teams = Object.keys(counts).sort(function (a, b) {
      var diff = counts[b].cl + counts[b].el - (counts[a].cl + counts[a].el);
      return diff || counts[b].cl - counts[a].cl || a.localeCompare(b);
    });

    var width = Math.max(300, frame.clientWidth);
    var compact = width < 560;
    var rowH = 30;
    var barH = 18;
    var m = { top: 6, right: 28, bottom: 30, left: compact ? 120 : 160 };
    var height = m.top + teams.length * rowH + m.bottom;
    var svg = newSvg(frame, width, height, "Stacked bar chart of how many extra Champions League and Europa League places each club would have gained without Manchester City.");
    var tip = tooltipFor(frame);

    var maxTotal = Math.max.apply(null, teams.map(function (t) {
      return counts[t].cl + counts[t].el;
    }));
    var plotW = width - m.left - m.right;
    var x = function (n) {
      return m.left + (n / maxTotal) * plotW;
    };

    for (var n = 0; n <= maxTotal; n++) {
      el("line", { class: "grid-line", x1: x(n), x2: x(n), y1: m.top, y2: height - m.bottom }, svg);
      text(svg, x(n), height - m.bottom + 18, String(n), { "text-anchor": "middle" });
    }

    teams.forEach(function (team, i) {
      var c = counts[team];
      var cy = m.top + i * rowH + (rowH - barH) / 2;
      var name = compact ? team.replace("Brighton & Hove Albion", "Brighton").replace("Tottenham Hotspur", "Tottenham") : team;
      text(svg, m.left - 10, cy + barH / 2 + 4, name, { "text-anchor": "end", class: "label-strong" });

      // Segments separated by a 2px surface gap; rounded only at the data end.
      var segs = [];
      if (c.cl) segs.push({ n: c.cl, cls: "m-series1" });
      if (c.el) segs.push({ n: c.el, cls: "m-neutral" });
      var start = 0;
      segs.forEach(function (seg, si) {
        var x0 = x(start) + (si > 0 ? 1 : 0);
        var x1 = x(start + seg.n) - (si < segs.length - 1 ? 1 : 0);
        var w = Math.max(0, x1 - x0);
        var r = si === segs.length - 1 ? Math.min(4, w / 2) : 0;
        el("path", {
          class: seg.cls,
          d: "M" + x0 + "," + cy +
            "H" + (x0 + w - r) +
            (r ? "Q" + (x0 + w) + "," + cy + " " + (x0 + w) + "," + (cy + r) : "") +
            "V" + (cy + barH - r) +
            (r ? "Q" + (x0 + w) + "," + (cy + barH) + " " + (x0 + w - r) + "," + (cy + barH) : "") +
            "H" + x0 + "Z"
        }, svg);
        start += seg.n;
      });
      text(svg, x(c.cl + c.el) + 6, cy + barH / 2 + 4, String(c.cl + c.el), { "text-anchor": "start", class: "label-strong" });

      var hit = el("rect", { class: "hit", x: 0, y: m.top + i * rowH, width: width, height: rowH }, svg);
      bindHit(hit, frame, tip, function () {
        return {
          heading: team,
          rows: [
            { key: "k-series1", value: String(c.cl), label: "Champions League " + (c.cl === 1 ? "season" : "seasons") },
            { key: "k-neutral", value: String(c.el), label: "Europa League " + (c.el === 1 ? "season" : "seasons") }
          ]
        };
      }, function () {
        return { x: (x(c.cl + c.el) / width) * frame.clientWidth, y: ((cy + barH / 2) / height) * frame.clientHeight };
      });
    });
  }

  var charts = [
    ["chart-positions", drawPositions],
    ["chart-titles", drawTitles],
    ["chart-europe", drawEurope]
  ];

  function renderAll() {
    charts.forEach(function (entry) {
      var frame = document.getElementById(entry[0]);
      if (frame) {
        entry[1](frame);
      }
    });
  }

  var lastWidth = 0;
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        renderAll();
      }
    }, 150);
  });

  lastWidth = window.innerWidth;
  renderAll();
})();
