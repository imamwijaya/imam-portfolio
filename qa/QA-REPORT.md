# QA Report — Portfolio Revision (17 Nov 2026)

## Pemeriksaan selesai

| Pemeriksaan | Hasil |
|---|---|
| Data 13 proyek + slug unik | PASS |
| 13 artwork WebP ditemukan, dimensi sesuai data | PASS |
| 52 dekorasi SVG ditemukan dan XML valid | PASS |
| SHA-256 semua 94 aset awal tidak berubah | PASS |
| Foto PNG asli tersimpan persis, WebP turunannya ada | PASS |
| Favicon SVG baru tersedia dan terstruktur benar | PASS |
| Parsing sintaks 19 file `.ts` dan `.tsx` memakai TypeScript 5.8.3 | PASS |
| GitHub Pollusafe, Wave Education, Money Mate | VERIFIED (URL publik dapat dibuka saat audit) |
| Tautan profil GitHub | VERIFIED (URL publik dapat dibuka saat audit) |

## Perlu dicek pada komputer dengan dependensi

- `npm install` (npm registry tidak dapat diakses dari lingkungan audit ini).
- `npm run typecheck` untuk seluruh deklarasi tipe React/Next.
- `npm run build` untuk bundling dan static page generation 13 proyek.
- Uji layar 320, 375, 390, 768, 1024 dan 1440 px; cek kartu hero horizontal, keterbacaan About Me, serta menu mobile.
- Uji mouse, keyboard, pembaca layar, scroll carousel, dan Lighthouse pada preview Vercel.

## Batasan konten

- Link yang belum diketahui tidak dibuat-buat. Tautan publik yang dimasukkan hanya untuk 3 repository yang diverifikasi.
- Email, LinkedIn, CV dan tautan lain belum ditambahkan karena datanya tidak tersedia/terkonfirmasi.
- Tidak ada penggantian aset karya yang sudah ada, tidak ada hasil riset fiktif.
