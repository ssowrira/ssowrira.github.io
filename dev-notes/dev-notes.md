# Development Notes and Change Log

## Purpose
This file tracks the portfolio website's evolution as a lightweight mix of commit history and version notes.
Use it to capture what changed, why it changed, and how it was verified.

## Template Creation Baseline (v1.0.0)
- Date: 2026-02-26
- Source commit: `41b296a` (`template change and placeholder fills`)
- Scope: First full multi-page portfolio template rollout.
- Core structure created:
  - Pages: `index.html`, `projects.html`, `project.html`, `about.html`, `hobbies.html`, `contact.html`
  - Standalone project detail routes: `projects/legged-adaptive-control.html`, `projects/precice-fsi-gripper.html`
  - Global styling: `assets/css/styles.css`
  - Shared site config: `assets/js/site-config.js`
  - Shared behavior: `assets/js/main.js` (theme toggle, nav toggle, config text/link binding, footer year)
  - Projects rendering: `assets/js/projects.js`, `assets/js/home-projects.js`, `assets/js/project-detail.js`
  - Project data source: `assets/data/projects.json`
- Initial template capabilities:
  - Responsive layout and mobile navigation.
  - Light/dark theme toggle with localStorage persistence.
  - Data-driven profile/contact links from `SITE_CONFIG`.
  - Data-driven project cards, tag filters, and detail pages from `projects.json`.
  - Resume integration via `/Srikarran_Resume.pdf`.

## Rules for Updating This File
Add a new log entry whenever website work is done, including content edits and visual formatting changes.
This includes changes to home-page bio content, project card formatting, navigation, data files, or scripts.

For every update:
1. Add the newest entry at the top of the `## Change Log` section.
2. Use the required template below.
3. List exact files changed.
4. Describe user-visible impact (not only code-level details).
5. Record how you checked the change (manual page check, quick regression, etc.).
6. Add commit hash after commit is created (or mark as `uncommitted` while in progress).

## Required Entry Template
```md
### YYYY-MM-DD | vX.Y.Z | Short Change Title
- Type: `content` | `design` | `feature` | `fix` | `refactor` | `docs`
- Area: Home | Projects | Project Detail | Hobbies | Contact | Global
- Files: `path/file-a`, `path/file-b`
- Summary: One clear sentence describing what changed.
- Impact: What visitors will notice.
- Verification: How the change was checked.
- Commit: `<hash>` or `uncommitted`
- Follow-up: `none` or next action needed
```

## Change Log

### 2026-03-03 | v1.3.1 | Temporarily Unpublished Projects and Hobbies
- Type: `refactor`
- Area: Home | Projects | Hobbies | Global
- Files: `index.html`, `contact.html`, `projects.html`, `project.html`, `projects/legged-adaptive-control.html`, `projects/precice-fsi-gripper.html`, `hobbies.html`, `assets/js/main.js`, `dev-notes/dev-notes.md`
- Summary: Hid Projects and Hobbies from global navigation, removed the Home Featured Projects section, and added production-time redirects for Projects/Hobbies pages.
- Impact: Public navigation now focuses on Home and Contact, and hidden sections redirect to Home on deployed environments.
- Verification: Confirmed nav links were removed in all HTML pages, Featured Projects was removed from Home, and redirect/noindex logic was added to hidden pages.
- Commit: `uncommitted`
- Follow-up: Re-enable by restoring nav links and removing redirect scripts when ready to publish those pages.

### 2026-03-03 | v1.3.0 | Expanded Research Profile Sections Across Home and Hobbies
- Type: `content`
- Area: Home | Hobbies
- Files: `index.html`, `hobbies.html`, `dev-notes/dev-notes.md`
- Summary: Reworked Home and Hobbies content to reflect updated research interests, current work streams, technical expertise, and beyond-research narrative.
- Impact: Visitors now see a clearer research identity with dedicated sections for interests, active projects, technical capabilities, and personal context.
- Verification: Confirmed updated section headings and copy in `index.html` and `hobbies.html` match the provided content themes and structure.
- Commit: `uncommitted`
- Follow-up: Optionally align `projects.json` project summaries with the same current-work terminology.

### 2026-03-03 | v1.2.2 | Expanded Home Bio Content
- Type: `content`
- Area: Home | Global
- Files: `assets/js/site-config.js`, `index.html`, `dev-notes/dev-notes.md`
- Summary: Updated profile bio content and structure by expanding the home introduction into multiple detailed bio paragraphs sourced from `SITE_CONFIG`.
- Impact: The Home page now communicates a clearer and more complete research narrative, including robotics focus areas and current FibroScan-related work.
- Verification: Confirmed `profile.shortBio`, `profile.bio1`, `profile.bio2`, and `profile.bio3` are defined in `site-config.js` and referenced by `data-site-text` bindings in `index.html`.
- Commit: `uncommitted`
- Follow-up: Consider removing unused `profile.longerBio` if no longer needed on any page.

### 2026-03-03 | v1.2.1 | Prevent Legacy About Nav Link from Reappearing
- Type: `fix`
- Area: Global
- Files: `assets/js/main.js`, `dev-notes/dev-notes.md`
- Summary: Added a global nav cleanup step in shared JavaScript to remove any legacy `About` link if it appears in stale page markup.
- Impact: `About` no longer reappears in navigation when moving across pages with cached or outdated HTML.
- Verification: Searched repository HTML for `about.html` nav links and added runtime removal fallback in `main.js`.
- Commit: `uncommitted`
- Follow-up: none

### 2026-03-03 | v1.2.0 | Merged About Content into Home and Removed About Page
- Type: `refactor`
- Area: Home | Global
- Files: `index.html`, `projects.html`, `project.html`, `contact.html`, `hobbies.html`, `projects/legged-adaptive-control.html`, `projects/precice-fsi-gripper.html`, `about.html` (deleted), `dev-notes/dev-notes.md`
- Summary: Folded About narrative/skills/education into Home, removed About from all navigation menus, and deleted the standalone `about.html` page.
- Impact: The site is leaner with Home as the single personal-introduction page and no redundant About route.
- Verification: Verified all nav links were updated and `about.html` was removed from the repository.
- Commit: `uncommitted`
- Follow-up: none

### 2026-03-03 | v1.1.0 | Added Professional Headshot to Home and About
- Type: `feature`
- Area: Home | About | Global
- Files: `photo_srikarran.jpg` (moved), `assets/images/headshot-srikarran.jpg`, `index.html`, `about.html`, `assets/css/styles.css`
- Summary: Moved the uploaded JPG into `assets/images/` and integrated it as a styled headshot component on both the Home hero and About sidebar.
- Impact: Visitors now immediately see a professional profile photo on key personal-introduction pages, improving visual identity and personal branding.
- Verification: Verified path migration and updated markup/classes in both pages; confirmed responsive image styling rules were added in global CSS.
- Commit: `uncommitted`
- Follow-up: Optionally add additional image formats (`.webp`) for faster loading.

### 2026-02-26 | v1.0.0 | Initial Multi-Page Portfolio Template
- Type: `feature`
- Area: Global
- Files: `README.md`, `index.html`, `projects.html`, `project.html`, `about.html`, `hobbies.html`, `contact.html`, `projects/legged-adaptive-control.html`, `projects/precice-fsi-gripper.html`, `assets/css/styles.css`, `assets/js/site-config.js`, `assets/js/main.js`, `assets/js/projects.js`, `assets/js/home-projects.js`, `assets/js/project-detail.js`, `assets/data/projects.json`
- Summary: Introduced the first complete static portfolio template with shared styling, reusable page structure, and data-driven project content.
- Impact: Visitors can navigate dedicated pages, filter projects by tag, view project detail routes, switch themes, and access updated profile/contact/resume links.
- Verification: Template was committed as a full site scaffold and intended for GitHub Pages static hosting.
- Commit: `41b296a`
- Follow-up: Replace remaining placeholder project links/content with production-ready details.

### 2023-10-06 | v0.x | Pre-Template Repository Setup (Historical Context)
- Type: `docs`
- Area: Global
- Files: historical repo state before template rollout
- Summary: Repository initialized and resume-link related commits were made before the current template architecture existed.
- Impact: Established the project history prior to the 2026 template rebuild.
- Verification: Verified from git history (`4610d6a`, `d96d34b`, `6c6f9ff`, `020ec06`).
- Commit: `multiple`
- Follow-up: none
