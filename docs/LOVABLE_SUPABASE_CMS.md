# Using Lovable + Supabase as a CMS for the Build Log

You have two main paths: **rebuild in Lovable** (recommended for long-term) or **keep this static site and add Supabase** for managed content.

---

## Option 1: Rebuild in Lovable (WordPress/CMS-style)

Lovable projects are React-based and use **Supabase as the default backend**. To manage posts like a blog/CMS:

1. **Create a new project in Lovable** and connect your own Supabase project (create the project in Supabase first, then connect it in Lovable so you keep dashboard access).

2. **Run the schema** in Supabase:
   - In Supabase: SQL Editor → run `supabase/schema.sql` from this repo.

3. **Design the UI in Lovable** to match this build log (timeline by year, 3D cards, logos, media). Use prompts like:
   - “Show a reverse-chronological timeline by year.”
   - “Each year has a title, caption, summary, and a list of images/videos from Supabase.”
   - “Tech stack logos per year from a `build_log_logos` table.”

4. **Store media in Supabase Storage** and save the public URLs in `build_log_media.url`. Or keep hosting media elsewhere and store those URLs.

5. **Manage content** by inserting/updating rows in `build_log_entries`, `build_log_media`, and `build_log_logos` (via Supabase Dashboard, a simple admin UI you build in Lovable, or Supabase Studio).

**Result:** Full CMS: add/edit years and posts in Supabase; the Lovable app reads from the API and renders the build log.

---

## Option 2: Keep This Static Site and Add Supabase

Keep `index.html` / `resume.html` and use Supabase only as the data source for the build log entries.

### Adjustments needed

1. **Supabase project**
   - Create a project at [supabase.com](https://supabase.com).
   - Run `supabase/schema.sql` in the SQL Editor.

2. **Load Supabase in the page**
   - Add the Supabase JS client (e.g. CDN) in `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ```
   - Create a Supabase project and add **Project URL** and **anon (public) key** to the page (or env if you later add a build step).

3. **Replace hardcoded entries with fetched data**
   - On page load, call something like:
   ```js
   const { data: entries } = await supabase
     .from('build_log_entries')
     .select(`
       *,
       build_log_media(*),
       build_log_logos(*)
     `)
     .order('year', { ascending: false });
   ```
   - Use this array to build the year cards (and their media/logos) in JavaScript instead of static HTML.

4. **Media URLs**
   - Either keep files in `assets/` and store paths like `assets/videos/remote.webm` in `build_log_media.url`, or upload to Supabase Storage and store the public URL there.

5. **Deploy**
   - Static hosting (Netlify, Vercel, GitHub Pages, etc.) is fine. No server required; the browser talks to Supabase from the client.

**Caveat:** Supabase URL and anon key are visible in the front end. RLS is set to “public read” for these tables, which is appropriate for a public build log. Do not put service_role key in the front end.

---

## Schema summary

| Table               | Purpose |
|---------------------|--------|
| `build_log_entries` | One row per year/section: year, title, caption, summary, sort_order. |
| `build_log_media`   | Images/videos per entry: url, kind, alt, aspect_class. |
| `build_log_logos`  | Logo keys per entry (e.g. `cursor`, `lovable`, `supabase`). |

You can seed data by inserting into these tables; the front end (Lovable app or your static JS) just reads and renders.

---

## Checklist before pushing to Lovable

- [ ] Create Supabase project (if not using Lovable Cloud–managed DB).
- [ ] Run `supabase/schema.sql` in that project.
- [ ] Decide: full rebuild in Lovable (Option 1) or static site + Supabase (Option 2).
- [ ] If Option 1: in Lovable, connect this Supabase project and build UI that queries these tables.
- [ ] If Option 2: add Supabase client to `index.html`, replace static entries with a JS-rendered list from `build_log_entries` + media + logos.
- [ ] Media: either keep `assets/` and reference paths in DB, or upload to Supabase Storage and store public URLs in `build_log_media`.

No changes are *required* to the current file/folder structure for Option 2; you only add Supabase and switch the build log content from static HTML to API-driven rendering.
