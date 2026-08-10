-- =====================================================
-- Skema Supabase untuk Undangan Pernikahan
-- Jalankan di: Supabase Dashboard > SQL Editor > New query
-- =====================================================

create table if not exists public.wishes (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 60),
  message text not null check (char_length(trim(message)) between 1 and 500),
  attendance text check (attendance in ('hadir', 'tidak_hadir', 'ragu')),
  guest_count int default 1 check (guest_count between 0 and 10),
  created_at timestamptz not null default now()
);

create index if not exists wishes_created_at_idx
  on public.wishes (created_at desc);

-- Aktifkan Row Level Security
alter table public.wishes enable row level security;

-- Anon hanya boleh baca & tulis. Tidak boleh ubah/hapus.
grant select, insert on public.wishes to anon;

drop policy if exists "public read wishes" on public.wishes;
create policy "public read wishes"
  on public.wishes for select
  to anon
  using (true);

drop policy if exists "public insert wishes" on public.wishes;
create policy "public insert wishes"
  on public.wishes for insert
  to anon
  with check (true);

-- Aktifkan Realtime agar ucapan baru muncul tanpa refresh
alter publication supabase_realtime add table public.wishes;

-- =====================================================
-- Cara melihat semua ucapan yang masuk:
--   select name, message, attendance, guest_count, created_at
--   from public.wishes order by created_at desc;
--
-- Menghitung total tamu yang konfirmasi hadir:
--   select sum(guest_count) from public.wishes where attendance = 'hadir';
--
-- Menghapus ucapan spam (jalankan dari SQL Editor, bukan dari web):
--   delete from public.wishes where id = 'uuid-nya';
-- =====================================================
