-- Build Log CMS schema for Lovable + Supabase
-- Run this in Supabase SQL Editor to create tables for managing build log entries.

-- Optional: enable UUID extension if not already
-- create extension if not exists "uuid-ossp";

-- Build log "posts" (one per year/section, or one per card)
create table if not exists public.build_log_entries (
  id uuid primary key default gen_random_uuid(),
  year int not null,
  title text,
  caption text,
  summary text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Media items linked to an entry (videos, images)
create table if not exists public.build_log_media (
  id uuid primary key default gen_random_uuid(),
  entry_id uuid references public.build_log_entries(id) on delete cascade,
  kind text not null check (kind in ('image', 'video')),
  url text not null,
  alt text,
  sort_order int default 0,
  aspect_class text default 'year-video-crop'
);

-- Tech stack logos per entry (e.g. cursor, lovable, supabase)
create table if not exists public.build_log_logos (
  id uuid primary key default gen_random_uuid(),
  entry_id uuid references public.build_log_entries(id) on delete cascade,
  logo_key text not null,
  sort_order int default 0
);

-- RLS: allow public read for build log (no auth required for viewing)
alter table public.build_log_entries enable row level security;
alter table public.build_log_media enable row level security;
alter table public.build_log_logos enable row level security;

create policy "Public read build_log_entries"
  on public.build_log_entries for select using (true);

create policy "Public read build_log_media"
  on public.build_log_media for select using (true);

create policy "Public read build_log_logos"
  on public.build_log_logos for select using (true);

-- Optional: storage bucket for uploads (Lovable often uses this)
-- insert into storage.buckets (id, name, public)
-- values ('build-log-media', 'build-log-media', true)
-- on conflict (id) do nothing;

-- Optional: updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists build_log_entries_updated_at on public.build_log_entries;
create trigger build_log_entries_updated_at
  before update on public.build_log_entries
  for each row execute function public.set_updated_at();
