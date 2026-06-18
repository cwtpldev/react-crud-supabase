-- Run this SQL in your Supabase SQL Editor
-- Project: hgdeczzjsciwvgpvdjaz

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table users enable row level security;

-- Allow all operations (adjust for production)
create policy "Allow all" on users
  for all
  using (true)
  with check (true);
