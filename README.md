# Imam Wijayanto — Portfolio (Revised)

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · lucide-react. Tanpa backend.

## Apa yang diperbaiki

- **Foto pribadi di About Me**: memakai foto pengguna beserta **background zebra cross asli**, tanpa menghapus atau mengedit background. Resolusi WebP 1024 × 1535, ukuran ±241 KB. File PNG asli disimpan sebagai `assets-master/personal/imam-portrait-original.png`.
- **Aset lama dipertahankan**: seluruh 13 artwork WebP, 52 SVG dekorasi, dan aset master dari ZIP awal tetap identik secara SHA-256 (lihat `qa/original-asset-hashes.json`).
- **Hero mobile**: proyek unggulan kini dapat digeser secara horizontal di layar kecil; label nama terlihat di hero dan jumlah proyek dinamis.
- **Selected Work**: kategori menggunakan filter `aria-pressed` yang sesuai, status filter dibacakan bagi pembaca layar, dan tombol navigasi tetap tersedia.
- **Halaman detail**: header + footer sama dengan homepage, navigasi previous/next lebih jelas, dan konteks/kontribusi ditampilkan hanya ketika informasi yang mendukung sudah tersedia.
- **Tautan**: repository GitHub Pollusafe, Wave Education, dan Money Mate sudah diverifikasi, serta tautan profil GitHub ditambahkan ke kontak. Tidak ada URL buatan.
- **SEO & aksesibilitas**: canonical per proyek, favicon dari logo yang sudah ada, metadata share, sitemap production-aware, skip link, dan dukungan reduced-motion.

## Jalankan di komputer kamu

Prasyarat: Node.js 20.9+ dan npm, akses internet untuk memasang paket.

```bash
npm install
npm run qa:assets
npm run typecheck
npm run build
npm run dev
```

Buka http://localhost:3000. Untuk Vercel, import project dan gunakan Next.js preset. Opsional: set `NEXT_PUBLIC_SITE_URL=https://domainmu.com` sebagai environment variable.

> **Status audit**: pemeriksaan struktur TS/TSX tanpa dependency, inventaris aset, keutuhan berkas asli, lokasi artwork, dan struktur XML SVG berhasil. **Build Next.js, typecheck dengan dependency, Lighthouse, dan pengujian lint belum dapat dilakukan** di lingkungan penyusunan karena registry npm tidak dapat diakses. Jalankan perintah di atas sebelum deploy produksi.

## Ubah konten

- `src/data/projects.ts`: 13 proyek, judul, ringkasan, role, teknologi, tautan GitHub dan asset path.
- `src/data/project-details.ts`: penjelasan konteks dan kontribusi yang diketahui. Jangan isi hasil/role tanpa bukti.
- `src/data/content.ts`: kontak dan skill. Email/LinkedIn masih kosong, sehingga tidak menampilkan tautan palsu. WhatsApp mengikuti nilai dari proyek asli.
- `src/components/AboutSection.tsx`: layout About Me dan foto personal.
- `public/about/imam-portrait.webp`: foto pribadi yang sudah dioptimalkan, background tetap asli.
- `assets-master/personal/imam-portrait-original.png`: berkas asli pengguna.
- `qa/original-asset-hashes.json`: hash untuk memastikan file aset tetap utuh.

## Catatan

- Tautan repository kolaboratif yang dicantumkan adalah bukti karya tim; deskripsi kontribusi membedakan frontend yang dikerjakan pengguna dengan backend/pekerjaan tim.
- Tesis XAU/USD tetap diberi status penelitian berjalan. Jangan mempublikasikan hasil akhir yang belum ada.
- Jangan mengganti aset WebP dan SVG proyek yang sudah disetujui. Modifikasi layout/konten tidak memerlukan regenerasi artwork.

- Catatan: ZIP hasil revisi belum menyertakan `package-lock.json` karena registry npm tidak tersedia saat audit. Perintah `npm install` akan membuat lockfile pada komputer dengan internet; sebaiknya commit lockfile tersebut ke repository setelah berhasil.
