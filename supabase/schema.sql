-- Supabase Schema
-- Project: hgdeczzjsciwvgpvdjaz
-- Applied automatically via Management API

-- Table: users
create table if not exists users (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null,
  email       text        unique,
  created_at  timestamptz default now()
);

-- Row Level Security
alter table users enable row level security;

-- Policies
create policy "Allow select" on users
  for select using (true);

create policy "Allow insert" on users
  for insert with check (true);

create policy "Allow update" on users
  for update using (true) with check (true);

create policy "Allow delete" on users
  for delete using (true);
