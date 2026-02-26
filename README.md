# Juan Nogueira — Build Log

A year-by-year build log and portfolio site with resume.

## Structure

```
buildLog/
├── index.html          # Main build log page
├── resume.html         # Resume page (print/Save as PDF, Word download)
├── README.md
├── archive/            # Backup / legacy files
├── assets/
│   ├── images/         # Logos, UI (play, Lovable, Cursor, etc.)
│   ├── videos/         # WebM/MP4/MOV demos
│   │   ├── buildathon/
│   │   ├── 24/
│   │   └── old/
│   ├── screenshots/
│   │   ├── codingstats/ # Cursor/Lovable stats images
│   │   └── tudebuildimages/
│   └── downloads/      # Add Juan_Nogueira_Resume.docx here for Word download
```

## Setup

- **Word resume:** Place `Juan_Nogueira_Resume.docx` in `assets/downloads/` to enable the “Download Word” link on the resume page.
- Open `index.html` or `resume.html` in a browser (or use a local server).

## Deploy

Static site. Serve the repo root (so `index.html`, `resume.html`, and `assets/` are at the same level). No build step required.

## Using Lovable + Supabase as a CMS

To manage build log posts via Supabase (like a WordPress blog), see **[docs/LOVABLE_SUPABASE_CMS.md](docs/LOVABLE_SUPABASE_CMS.md)**. It covers:

- **Option 1:** Rebuilding the build log in Lovable (React + Supabase) for a full CMS.
- **Option 2:** Keeping this static site and loading entries from Supabase with JavaScript.

A ready-to-run Supabase schema is in **`supabase/schema.sql`** (tables: `build_log_entries`, `build_log_media`, `build_log_logos`).
