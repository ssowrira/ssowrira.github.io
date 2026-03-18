# Career Portfolio Template (GitHub Pages)

This repo now contains a static multi-page portfolio template for a robotics/mechanical engineering PhD profile.

## Edit Profile Name, Bio, and Links

Update one file:

- `assets/js/site-config.js`

Fields to edit:

- `profile.name`, `profile.role`, `profile.shortBio`, `profile.longerBio`
- `contact.email`
- `links.resume` (already set to `/Srikarran_Resume.pdf`)
- `links.email`, `links.linkedin`, `links.github`, `links.scholar`

## Add or Edit Publications and News

Update one file:

- `publications.html`

Use this page to:

- List selected publications
- Add institutional/news feature links
- Link out to full publication history on Google Scholar

## Add or Edit Projects

Update one file:

- `assets/data/projects.json`

Each project object controls:

- Card content (`title`, `summary`, `tags`, `year`, `status`)
- Detail page content (`overview`, `challenge`, `approach`, `outcomes`, `tools`, `links`)
- Optional custom detail route (`detailPage`)
- Homepage featured projects (`featured: true`)

To add a new project:

1. Copy an existing project object in `assets/data/projects.json`.
2. Set a unique `slug`.
3. Fill in title/summary/tags and detail fields.
4. Save and refresh.

Default detail pages are auto-generated via:

- `/project.html?slug=<your-project-slug>`

Two standalone detail-page examples are included:

- `/projects/legged-adaptive-control.html`
- `/projects/precice-fsi-gripper.html`

## Local Preview

Run a simple static server from repo root:

```bash
python3 -m http.server 4000
```

Then open:

- `http://localhost:4000`

## Publish on GitHub Pages

For a `<username>.github.io` repository:

1. Push changes to the default branch (typically `main`).
2. In GitHub: `Settings` -> `Pages`.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), `/ (root)`
4. Save and wait for deployment.

Your site should publish at `https://<username>.github.io/`.
