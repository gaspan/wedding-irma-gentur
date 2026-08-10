# Undangan Pernikahan — Irma & Gentur

Undangan pernikahan digital bertema *Elegant Islamic Minimalist*. Seluruh visual
menggunakan ilustrasi SVG buatan sendiri (tanpa foto), dengan ucapan dan RSVP
tersimpan permanen di Supabase.

**Stack:** React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · Framer Motion · Supabase

---

## Fitur

| Fitur | Keterangan |
|---|---|
| Cover pembuka | Scroll terkunci sampai tombol *Buka Undangan* ditekan |
| Personalisasi tamu | `?to=Nama+Tamu` menampilkan nama di cover |
| Ayat Al-Quran | QS. Ar-Rum: 21, teks Arab + terjemahan |
| Countdown | Hitung mundur real-time ke hari H |
| Save the Date | Unduh file `.ics` untuk kalender |
| Peta lokasi | Embed Google Maps + tombol buka aplikasi peta |
| Galeri | 6 ilustrasi dekoratif dengan lightbox |
| Gift | QRIS statis + tombol unduh |
| RSVP & Ucapan | Tersimpan di Supabase, muncul realtime |
| Musik latar | Tombol putar/jeda mengambang |
| Share WhatsApp | Bagikan undangan sekali klik |

---

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. Tanpa konfigurasi Supabase, ucapan otomatis
tersimpan di `localStorage` sehingga situs tetap bisa dicoba.

---

## Langkah Setup

### 1. Isi data undangan

Semua konten ada di satu file: **`src/config/wedding.ts`**.
Cari komentar `[GANTI]` dan sesuaikan:

- Nama orang tua kedua mempelai
- Tanggal & jam akad dan resepsi
- Nama gedung, alamat, dan link Google Maps
- `meta.siteUrl` — URL final setelah deploy

Untuk link Google Maps, buka lokasi di Google Maps → *Bagikan* → salin tautan.
Untuk `mapsEmbed`, gunakan format:

```
https://www.google.com/maps?q=NAMA+LOKASI&output=embed
```

### 2. Tambahkan aset

| File | Lokasi | Catatan |
|---|---|---|
| QRIS | `public/qris/qris-irma-gentur.png` | Screenshot QRIS statis dari bank/e-wallet |
| Musik | `public/music/backsound.mp3` | Idealnya di bawah 3 MB |

Jika QRIS belum ada, halaman tetap tampil normal dengan pesan pengganti.

### 3. Setup Supabase

1. Buat project gratis di [supabase.com](https://supabase.com)
2. Buka **SQL Editor** → *New query* → tempel isi `supabase/schema.sql` → **Run**
3. Buka **Settings → API**, salin **Project URL** dan **anon public key**
4. Buat file `.env` di root project:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

> **Soal keamanan:** `anon key` memang dirancang untuk dipakai di frontend.
> Keamanannya berasal dari Row Level Security di database — pada skema ini
> pengunjung hanya bisa *membaca* dan *menambah* ucapan, tidak bisa mengubah
> atau menghapus. Jangan pernah memakai `service_role key` di frontend.

### 4. Deploy ke GitHub Pages

1. Buat repository di GitHub, lalu push project ini
2. Sesuaikan `REPO_NAME` di **`vite.config.ts`** dengan nama repository Anda
3. Buka **Settings → Secrets and variables → Actions**, tambahkan dua secret:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Buka **Settings → Pages**, ubah *Source* menjadi **GitHub Actions**
5. Push ke branch `main` — deploy berjalan otomatis

Hasil akhir: `https://<username>.github.io/<nama-repo>/`

---

## Menyebar Undangan

Tambahkan nama tamu pada URL agar muncul di cover:

```
https://gaspan.github.io/wedding-irma-gentur/?to=Budi+Santoso
```

Spasi ditulis sebagai `+` atau `%20`.

---

## Melihat Data Masuk

Buka **Supabase → Table Editor → wishes**, atau jalankan di SQL Editor:

```sql
-- Semua ucapan terbaru
select name, message, attendance, guest_count, created_at
from wishes order by created_at desc;

-- Total tamu yang konfirmasi hadir
select sum(guest_count) from wishes where attendance = 'hadir';
```

---

## Catatan Penting

### Keterbatasan QRIS statis

QRIS yang dipakai adalah QRIS **statis** (dibuat sekali dari aplikasi
bank/e-wallet). Konsekuensinya:

- Nominal tidak bisa ditentukan otomatis — tamu memasukkan nominal sendiri di
  aplikasi banknya.
- Anda **tidak mendapat notifikasi otomatis** siapa yang mengirim.
- Jika ingin tahu siapa saja yang sudah memberi, perlu tambahan form konfirmasi
  manual (nama + nominal) yang disimpan ke Supabase. Bisa ditambahkan jika
  dibutuhkan.

### Kenapa `anon key` tidak masalah di-share

`anon key` Supabase akan terlihat di bundle JavaScript yang dipublikasikan.
Ini normal dan aman, karena keamanan datang dari **Row Level Security**:
anon hanya boleh `SELECT` dan `INSERT` ucapan — tidak bisa mengubah atau
menghapus data.

> Jangan pernah memasang `service_role key` di frontend. Key itu melewati
> semua RLS dan memberikan akses penuh ke database.

---

## Struktur Project

```
src/
├── config/wedding.ts        # SEMUA data undangan
├── lib/                     # supabase client, utilitas
├── hooks/                   # countdown, audio, wishes, nama tamu
├── components/
│   ├── ui/                  # Section, Reveal, NavBar, MusicToggle
│   ├── illustrations/       # seluruh aset SVG
│   └── sections/            # 10 section halaman
supabase/schema.sql          # skema database + RLS
.github/workflows/deploy.yml # deploy otomatis
```

---

## Perintah

```bash
npm run dev      # server pengembangan
npm run build    # build produksi ke dist/
npm run preview  # pratinjau hasil build
npm run lint     # periksa kode
```
