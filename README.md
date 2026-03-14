# CV Tailor

A personal tool for managing, tailoring, and downloading multiple CV versions — one per job application — with a built-in application tracker.

Runs entirely in the browser. No backend, no installation.

---

## What it does

**CV Tailor** solves the problem of maintaining multiple tailored CV versions without losing track of what you sent where.

- **Version switcher** — dropdown to switch between the base CV and all tailored versions instantly
- **Live preview** — renders each CV as an A4 page card with accurate pagination
- **PDF download** — print-to-PDF via browser (File → Print → Save as PDF, Margins: None, Scale: 100%)
- **Application tracker** — tracks status, applied date, and notes per application with localStorage persistence
- **Cover letter support** — optional cover letter section per version

---

## How to add a new CV version

Edit `cv_data.js` and add a new entry to the `CV_APPLICATIONS` array:

```js
{
  key:       "company-role",        // unique ID (used in localStorage)
  label:     "Company – Role",      // shown in the dropdown
  company:   "Company Name",        // shown in the tracker
  role:      "Job Title",           // shown in the tracker
  jdUrl:     "https://...",         // link to the job posting (optional)
  dateAdded: "YYYY-MM-DD",          // date you created this version
  cv:        `...markdown content`  // full CV in markdown format (see below)
}
```

---

## CV markdown format

The CV content uses a lightweight markdown-like format:

| Syntax | Renders as |
|--------|-----------|
| `# FIRST LAST` | Name box (top right) |
| `## contact info` | Contact line |
| `### SECTION NAME` | Section header |
| `**Role** \| Company \| Date` | Entry header row (bold role, center company, right date) |
| `- bullet text` | Bullet point |
| `  - sub-bullet` | Indented sub-bullet |
| Plain text | Small plain paragraph |

---

## Application tracker

Click **Application Tracker** in the left panel to see all tailored versions in a table. For each application you can track:
- Status (To Apply → Applied → Phone Screen → Interview → Final Round → Offer → Rejected → etc.)
- Date applied
- Notes (editable inline)
- Link to the original job posting

All tracker state is saved to `localStorage` — no data leaves your browser.

---

## Project structure

```
assistcv/
├── cv_tailor.html   # Full app — single file, open directly in browser
└── cv_data.js       # All CV versions — edit this file to add/update content
```

---

## Running locally

Open `cv_tailor.html` directly in any modern browser. No server or installation needed.

---

## Author

Silvia Adinda — personal tool, 2025–2026
