# React CRUD · Supabase

A responsive full-stack CRUD application built with **React + Vite** and **Supabase**.

## Features

- Add User
- Edit User
- Delete User
- Fetch All Users

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18 + Vite         |
| Database  | Supabase (PostgreSQL)   |
| Styling   | CSS (custom, responsive)|
| Icons     | Lucide React            |
| Toasts    | React Hot Toast         |

## Getting Started

### 1. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. In the SQL Editor, run:

```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  created_at timestamptz default now()
);

alter table users enable row level security;

create policy "Allow all" on users for all using (true);
```

### 2. Environment Variables

```bash
cp .env.example .env
```

Fill in your Supabase **Project URL** and **Anon Key** from
`Project Settings → API`.

### 3. Install & Run

```bash
npm install
npm run dev
```
