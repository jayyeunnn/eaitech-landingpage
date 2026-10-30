# AGENTS - Landing Page EAI Tech

## Metadata

- Tujuan: panduan kerja agent saat development - peta dokumen, aturan kerja,
  fase, GATE dan PENDING yang menghambat tiap fase.
- Batas: kebutuhan dan PENDING di PRD; identitas di product.md; craft di
  VISUAL-DNA; susunan di LAYOUT; nilai token/komponen/animasi di DESIGN;
  riwayat dan persetujuan di PROGRESS.
- Status spesifikasi: DISETUJUI Jay, 2026-10-29 (persetujuan Jay saja, bukan
  tim - P-003). Disusun agent saat finalisasi; usulan agent (fase/GATE,
  target Lighthouse, repo lokal, nomor WA placeholder, cara pemeriksaan,
  CLAUDE.md) dipilih Jay "pakai semua" sebelum persetujuan.
- Titik masuk Claude Code: [CLAUDE.md](CLAUDE.md) mengimpor file ini.
- Mode development: satu agent (keputusan Jay, Arsitektur 2026-10-28).

## 1. Peta Dokumen

| Dokumen | Pemilik isi | Dibaca saat |
|---|---|---|
| [PROGRESS.md](PROGRESS.md) | Petunjuk lanjut, log, keputusan, persetujuan | Paling awal setiap sesi; diperbarui di akhir sesi |
| [PRD.md](PRD.md) | Scope, fitur F-001 s.d. F-005, acceptance, flow, BR, pilihan teknis, tracker PENDING | Sebelum mengerjakan fitur; saat cek GATE |
| [product.md](product.md) | Identitas, prinsip, voice/copy, palet sampel logo | Saat menulis copy/placeholder dan memakai logo |
| [VISUAL-DNA.md](VISUAL-DNA.md) | Referensi dan arahan craft | Saat membangun tampilan dan animasi |
| [LAYOUT.md](LAYOUT.md) | Urutan bagian, wireframe, state, adaptasi perangkat | Saat menyusun markup dan responsive |
| [DESIGN.md](DESIGN.md) | Token warna/font/jarak, komponen, animasi, performa | Saat menulis style, komponen, animasi |
| AGENTS.md (ini) | Aturan kerja, fase, GATE | Awal setiap fase |
| [CLAUDE.md](CLAUDE.md) | Hanya mengimpor AGENTS.md agar dibaca otomatis oleh Claude Code | Otomatis setiap sesi |

Urutan prioritas bila ada konflik: PRD (aturan bisnis) → LAYOUT (susunan) →
DESIGN (nilai). Konflik dicatat di PROGRESS dan ditanyakan ke Jay, bukan
diputuskan agent.

## 2. Aturan Kerja Agent

1. Mulai sesi dengan membaca "Satu Petunjuk Lanjut Aktif" di PROGRESS.
2. Kerjakan hanya scope PRD. Fitur di luar scope (form, booking, portofolio,
   testimoni, halaman lain) tidak ditambahkan tanpa keputusan Jay.
3. PENDING tidak diputuskan agent. Bila pekerjaan butuh jawaban PENDING,
   pakai placeholder yang ditandai atau tanyakan ke Jay.
4. Usulan agent selalu ditanyakan terpisah dan jelas ditandai sebagai usulan,
   tidak diselipkan ke dalam permintaan persetujuan (feedback Jay; lihat
   PROGRESS 2026-10-28 "Koreksi asumsi mobile-first").
5. Semua placeholder ditandai jelas di kode dan di tampilan (BR-002), dan
   terkumpul di satu tempat agar mudah dicek sebelum publikasi.
6. Teks dua bahasa disimpan di source code, terpisah dari markup (PRD bagian
   4). Teks ID dan EN selalu ditambah/diubah bersamaan.
7. Nilai visual diambil dari token DESIGN, bukan angka lepas di komponen.
8. Versi library dicek ke dokumentasi resmi saat Setup (Astro, Tailwind,
   Motion, Lucide, Fontsource); jangan mengandalkan ingatan.
9. Setiap akhir sesi: entri baru di PROGRESS (dikerjakan, hasil, bukti,
   tindak lanjut) dan perbarui petunjuk lanjut.
10. Commit/push hanya bila Jay meminta.
11. Git dan contributor (arahan Jay 2026-10-30, dari skill
    freelance-project-planning; lebih kuat dari kebiasaan bawaan agent):
    - Author dan committer `jayyeunnn`, email
      `4z9n99hknm@privaterelay.appleid.com` (sudah diatur di
      `git config --local` repo ini; jangan ubah config global).
    - Tanpa AI/bot sebagai author, committer, co-author, `Signed-off-by`,
      "Generated with Claude/Codex", maupun contributor di README/docs.
    - Pesan Conventional Commits `type(scope): ringkasan`, body berisi
      perubahan, alasan, dampak, pemeriksaan yang benar-benar dilakukan atau
      dilewati, dan rujukan F-ID/P-ID bila berguna.
    - Jangan tulis ulang riwayat atau force-push tanpa permintaan Jay.
    - Sebelum commit/push: cek akses pembaca repo dan isi sensitif (data
      pribadi, harga, bahan klien).

## 3. Stack

| Bagian | Pilihan | Rujukan |
|---|---|---|
| Framework | Astro, output statis | PRD bagian 4 |
| Styling | Tailwind CSS; token DESIGN dipetakan ke tema Tailwind | PRD bagian 4, DESIGN |
| Animasi | Motion (API JavaScript) + Canvas 2D untuk titik/pita | PRD bagian 4, DESIGN bagian 5 |
| Ikon | Lucide | PRD bagian 4, DESIGN bagian 4 |
| Font | Sora 300/400/500, self-host (Fontsource, WOFF2) | DESIGN bagian 2 |
| Dua bahasa | i18n routing Astro: `/` (EN, default) dan `/id`; ganti bahasa tanpa memuat ulang lewat ClientRouter (skrip dipasang ulang di `astro:after-swap`, dibersihkan di `astro:before-swap`; visual hero `transition:persist`) | PRD F-005, BR-004, FL-002 |
| WhatsApp | Link `wa.me` dengan pesan awal per bahasa dan per layanan | PRD F-002, BR-001, BR-003 |
| Hosting | Belum dipilih (P-006) | PRD bagian 4 |

## 4. Fase & GATE

Setiap GATE ditutup dengan pemeriksaan agent, tinjauan Jay, dan entri di
PROGRESS. Fase berikut dimulai setelah Jay menyatakan GATE lolos.

### Fase 0 - Setup

- Proyek Astro + Tailwind, i18n routing `/` dan `/id`, font Sora self-host,
  token DESIGN di tema Tailwind, Lucide, Motion.
- Repo git lokal; remote menunggu P-004.
- GATE 0: build statis berhasil; halaman kosong `/` dan `/id` terbuka;
  token warna/font terpasang sesuai DESIGN.

### Fase 1 - Struktur, konten & responsive

- Enam bagian S-001 dengan HTML semantik sesuai LAYOUT; header (warna ikut
  bagian), footer, tombol ID/EN, link "lompat ke konten".
- Teks ID/EN dari file terjemahan; placeholder ditandai (BR-002).
- Tombol WA umum + per layanan dengan pesan awal per bahasa (F-002, BR-001,
  BR-003); nomor dan teks pesan dari satu konfigurasi (P-001).
- FAQ dengan elemen buka-tutup bawaan HTML; tombol WA menempel di HP.
- Responsive urut desktop → HP → tablet → layar besar (PRD bagian 4).
- GATE 1: acceptance F-001 s.d. F-005 dicek manual di `/` dan `/id`;
  halaman berfungsi penuh dengan JavaScript dimatikan; navigasi keyboard
  lengkap; kontras sesuai DESIGN bagian 1; tampilan dicek di 4 ukuran layar.

### Fase 2 - Animasi & interaksi

- Titik pita hero (P-025), pita tergambar mengikuti scroll (P-026), teks
  muncul saat scroll, hover, FAQ, transisi header (DESIGN bagian 5).
- Reduced motion, jeda saat di luar layar/tab tidak aktif, fallback gambar
  diam bila JS gagal.
- GATE 2: reduced motion menampilkan pita diam dan teks langsung terlihat;
  animasi mulus di HP kelas menengah; judul dan tombol WA tidak menunggu
  animasi; tidak ada pergeseran layout saat halaman dimuat.

### Fase 3 - SEO, performa & kesiapan rilis

- Judul/deskripsi per bahasa, hreflang, Open Graph, sitemap; optimasi logo
  (PRD bagian 4).
- Header keamanan dasar disiapkan untuk hosting terpilih (P-006).
- GATE 3: skor Lighthouse ≥ 90 untuk Performance, Accessibility, Best
  Practices dan SEO pada simulasi HP, di `/` dan `/id`; preview link
  WhatsApp menampilkan judul dan gambar yang benar.

### Rilis

- Syarat: GATE 3 lolos; tidak ada placeholder tersisa atau tim memutuskan
  lain (BR-002); P-001, P-002, P-008, P-016 terjawab; hosting dan DNS siap
  (P-006); persetujuan tim (P-003).

## 5. PENDING per Fase

| Fase | PENDING yang berpengaruh | Cara kerja sementara |
|---|---|---|
| Fase 0 | P-004 (pemilik repo) | Repo git lokal dulu; sejak 2026-10-30 remote `origin` = github.com/jayyeunnn/eaitech-landingpage (atas permintaan Jay) |
| Fase 1 | P-001 (nomor WA, pesan awal), P-002, P-008, P-016, P-012 | Nomor WA placeholder di satu konfigurasi dan ditandai; copy placeholder ditandai (BR-002) |
| Fase 1-3 | P-011 (warna/font resmi, SVG, logo gelap) | Warna sampel, header logomark + teks dari kode, PNG dioptimasi |
| Fase 3 | P-006 (hosting) | Header keamanan disiapkan generik, dipasang saat hosting dipilih |
| Rilis | P-001, P-002, P-003, P-006, P-008, P-016 | Tidak bisa dilewati |
| Setelah rilis | P-007 (analytics) | Ditunda; struktur tombol WA memudahkan pelacak klik nanti |

## 6. Cara Pemeriksaan

- Pemeriksaan manual per GATE dengan daftar cek di bagian 4, di browser
  desktop dan HP (atau emulasi ukuran layar).
- Lighthouse untuk performa, aksesibilitas, praktik baik dan SEO (GATE 3).
- Tanpa test otomatis terpisah untuk versi pertama: halaman statis tanpa
  logika bisnis selain pembentukan link WA; link WA dicek manual per bahasa
  dan per layanan.
- Bukti tiap GATE (ringkasan hasil, screenshot bila perlu) dicatat di PROGRESS.
