# PRD - Landing Page EAI Tech

## Metadata

- Tujuan: kebutuhan, scope, acceptance, keputusan teknis strategis dan PENDING.
- Batas: task/fase/GATE development di AGENTS; detail tampilan pada dokumen desain.
- Status spesifikasi: Brief (bagian 1-3, batasan bagian 4, BR-002) disetujui
  Jay 2026-10-28. Pilihan teknis bagian 4 (Arsitektur) disetujui Jay
  2026-10-29; hosting masih P-006. LAYOUT dan DESIGN disetujui Jay
  2026-10-29. Lihat PROGRESS. Belum disetujui tim (P-003).
- Rujukan langsung: [PROGRESS.md](PROGRESS.md) - log Discovery 2026-10-28.
- Peta dokumen: [AGENTS.md](AGENTS.md) bagian 1.

## 1. Ringkasan Proyek

- Masalah dan proses saat ini: EAI Tech adalah startup kecil yang baru berdiri
  dan belum punya halaman untuk memperkenalkan layanannya kepada calon klien.
  EAI Tech belum pernah mengerjakan proyek klien.
- Solusi/hasil yang dituju: satu landing page dwibahasa (Indonesia dan Inggris)
  yang menjelaskan layanan EAI Tech dan mengarahkan pengunjung untuk menghubungi
  tim lewat WhatsApp.
- Pengguna: calon klien EAI Tech dan orang yang ingin tahu tentang EAI Tech.
- PIC keputusan: tim EAI Tech secara bersama (cara tim memberi persetujuan: P-003).
  Jay anggota tim yang mengerjakan landing page ini sebagai tugas pertamanya.
- Platform dan tahap: web, satu halaman (landing page), versi pertama.
- Target waktu: belum ada tanggal target dari tim.
- Keberhasilan: pengunjung memahami layanan EAI Tech lalu memulai chat WhatsApp
  dengan tim. Cara mengukurnya belum dibahas (P-007).

### Layanan EAI Tech

Daftar layanan final (dikonfirmasi Jay, 2026-10-28):

| Layanan | Inti dari draft teman (bahan awal) |
|---|---|
| Website | Website yang ringan dan fokus membuat pengunjung bertindak |
| Aplikasi | Aplikasi web dan mobile untuk alur kerja nyata pengguna |
| Automation | Mengubah proses manual berulang menjadi alur otomatis |
| Agentic AI | Agent AI yang terhubung ke sistem bisnis dan menindaklanjuti pekerjaan |
| ERP System | Belum ada draft |

Kolom kanan berasal dari draft teman tim yang kemungkinan dibuat dengan AI
generator. Isinya hanya bahan awal; copy final belum ditentukan (P-002).

## 2. Scope & Fitur

### In Scope / Out of Scope

- In scope: satu landing page publik dwibahasa; bagian Hero, Layanan, Cara Kerja,
  FAQ, ajakan chat WhatsApp dan Footer.
- Out of scope versi ini: form kontak, booking konsultasi, halaman tambahan,
  Portofolio dan Testimoni (EAI Tech belum punya proyek klien), Tentang Tim.

### Fitur dan acceptance - satu checklist fitur

- [ ] **F-001 - Informasi layanan** - prioritas MUST.
  - Kebutuhan/sumber: pengunjung perlu tahu apa yang dikerjakan EAI Tech.
  - Acceptance: DRAFT - kelima layanan pada Bagian 1 tampil dengan nama dan
    penjelasan singkat dalam bahasa yang sedang aktif.
  - Bukti jika terpenuhi: -
- [ ] **F-002 - Hubungi via WhatsApp** - prioritas MUST.
  - Kebutuhan/sumber: arahan Jay, kanal kontak utama untuk saat ini.
  - Acceptance: DRAFT - ada satu tombol WhatsApp umum dan satu tombol di setiap
    layanan. Pengunjung menekan tombol → WhatsApp terbuka ke nomor tim EAI Tech
    dengan pesan awal terisi. Tombol layanan menyebut nama layanannya di pesan
    awal; tombol umum memakai pesan umum (BR-003). Nomor dan teks pesan: P-001.
  - Bukti jika terpenuhi: -
- [ ] **F-003 - Cara kerja** - prioritas MUST.
  - Kebutuhan/sumber: pilihan Jay; membantu calon klien memahami proses.
  - Acceptance: DRAFT - langkah kerja EAI Tech tampil berurutan. Isi langkah
    belum diberikan tim, jadi memakai placeholder dulu (P-008, BR-002).
  - Bukti jika terpenuhi: -
- [ ] **F-004 - FAQ** - prioritas MUST.
  - Kebutuhan/sumber: pilihan Jay; menjawab keraguan sebelum chat.
  - Acceptance: DRAFT - daftar tanya-jawab tampil. Isi belum diberikan tim,
    jadi memakai placeholder dulu (P-008, BR-002).
  - Bukti jika terpenuhi: -
- [ ] **F-005 - Dwibahasa Indonesia/Inggris** - prioritas MUST.
  - Kebutuhan/sumber: arahan Jay.
  - Acceptance: DRAFT - halaman pertama kali dibuka dalam Bahasa Indonesia.
    Pengunjung menekan tombol ID/EN di header → semua teks halaman dan pesan
    awal WhatsApp ikut berganti.
  - Bukti jika terpenuhi: -

## 3. Alur, Screens & Aturan Bisnis

### Screens dan navigasi

| S-ID | Screen/tujuan | Role/akses | F-ID | Navigasi |
|---|---|---|---|---|
| S-001 | Landing page: Hero, Layanan, Cara Kerja, FAQ, ajakan WhatsApp, Footer | Publik, tanpa login | F-001 s.d. F-005 | Satu halaman; detail susunan di LAYOUT S-001 |

### Flow

**FL-001 - Pengunjung menghubungi EAI Tech:** pengunjung membuka halaman →
membaca layanan/cara kerja/FAQ → menekan tombol WhatsApp → aplikasi atau web
WhatsApp terbuka dengan pesan awal. Jika WhatsApp tidak terpasang, link tetap
membuka WhatsApp Web.

**FL-002 - Ganti bahasa:** halaman terbuka dalam bahasa default (Inggris sejak
revisi 2026-10-29) → pengunjung menekan ID/EN di header atau footer → isi
halaman ditukar di tempat tanpa memuat ulang, URL berganti (`/` ↔ `/id`), dan
posisi scroll tetap di titik yang sama (revisi Jay 2026-10-30, Astro
ClientRouter). Tanpa JS: link membuka halaman bahasa lain di bagian yang sama.

### Aturan bisnis dan validasi

| BR-ID | Aturan | Berlaku pada | Kasus gagal/pemulihan |
|---|---|---|---|
| BR-001 | Pesan awal WhatsApp mengikuti bahasa yang sedang aktif | F-002, F-005 | - |
| BR-002 | Konten placeholder ditandai jelas dan wajib diganti konten final sebelum halaman dipublikasikan. Revisi Jay 2026-10-30: tanda tidak lagi tampil di halaman; penanda tetap di kode (`placeholder: true`) dan DOM tersembunyi (`data-placeholder`) untuk dicek sebelum publikasi | F-003, F-004, copy F-001 | Publikasi ditahan sampai konten final tersedia atau tim memutuskan lain |
| BR-003 | Pesan awal dari tombol layanan menyebut nama layanan tersebut; tombol umum memakai pesan umum | F-002 | - |
| BR-004 | Bahasa default Inggris (revisi Jay 2026-10-29; sebelumnya Indonesia); pergantian bahasa hanya lewat tombol ID/EN, tidak mengikuti setelan browser | F-005 | - |

### Role & Permission

Halaman publik tanpa login dan tanpa panel admin.

## 4. Kebutuhan Teknis & Operasional

### Batasan yang sudah diketahui (Discovery kelompok 3)

- Pengelola konten: Jay sendiri, langsung lewat kode. Tidak ada CMS atau panel
  admin. Teks dua bahasa disimpan di dalam source code.
- Data pengguna: halaman tidak mengumpulkan data pribadi (tanpa form, tanpa
  login). Kontak terjadi di WhatsApp, di luar halaman.
- Analytics: belum dipasang di versi pertama. Tim mungkin butuh nanti, jadi
  struktur halaman sebaiknya memudahkan penambahan pelacak klik WhatsApp.
- Domain: sudah ada, dipegang seorang teman tim. Hosting belum dipastikan (P-006).
- Perangkat: responsive dan setara untuk desktop, HP, tablet dan layar besar/TV
  (keputusan Jay, P-014). Urutan merancang: desktop dulu, lalu HP, tablet, TV.
  Lingkup "TV": layar besar lewat browser; tampilan tetap proporsional. Navigasi
  dengan remote TV tidak termasuk scope (P-015).

### Pilihan strategis

| Area | Pilihan/status | Alasan/tradeoff/dasar | Pemilik rincian |
|---|---|---|---|
| Pengelolaan konten | Tanpa CMS; konten di source code | Jay satu-satunya pengubah konten; lebih sederhana dan gratis | PRD |
| Framework | Astro, output statis (disetujui Jay). Versi stabil terbaru dicek saat Setup; per Context7 saat planning seri 6.x. Setup (2026-10-29) memakai Astro 7.4.4 (versi terbaru di npm saat itu) | Halaman konten statis, JavaScript minimal, i18n routing bawaan; Jay ingin mencoba framework baru dan pengalaman Next.js/JSX tetap terpakai. Next.js lebih cocok untuk web app dinamis, Angular untuk aplikasi besar seperti ERP | PRD bagian ini |
| Styling | Tailwind CSS (disetujui Jay) | Pilihan Jay | DESIGN |
| Animasi/transisi | Motion (`motion`, github.com/motiondivision/motion) - disetujui Jay | Pilihan Jay. Punya API JavaScript biasa (`animate`, `scroll`, `inView`) sehingga tidak wajib React (motion.dev/docs, dibaca via Context7). Di luar React, dukungan reduced motion ditangani manual | DESIGN (spek motion) |
| Ikon | Lucide - pilihan Jay, 2026-10-29 | Ditetapkan Jay saat DESIGN. Tidak memuat logo merek (mis. WhatsApp); paket untuk Astro dipastikan saat development | DESIGN bagian 4 |
| Dua bahasa | URL terpisah: `/` Inggris, `/id` Indonesia (disetujui Jay; default Inggris sejak revisi 2026-10-29). Ganti bahasa menukar isi di tempat lewat Astro ClientRouter (revisi Jay 2026-10-30; JS tambahan ±6 KB gzip) | Bisa diindeks mesin pencari per bahasa dan dibagikan langsung; tombol ID/EN membawa ke bagian yang sama | PRD F-005 |
| Hosting | Belum dipilih (P-006). Rekomendasi agent: Cloudflare Pages | Situs statis; paket gratis boleh untuk situs bisnis | PRD bagian ini |
| Backend/database/API | Tidak ada; tombol WhatsApp memakai link `wa.me` (disetujui Jay) | Halaman statis tanpa data pengguna | PRD |

### Performa, keamanan dan SEO

| Kebutuhan/teknik | Dasar | Keputusan Jay | Detail |
|---|---|---|---|
| Optimasi gambar logo | Logo PNG besar (355-702 KB) | Terapkan | Konversi ke WebP/AVIF lewat fitur gambar Astro; ganti ke SVG bila tersedia (P-011). Status Fase 3: logo di halaman disajikan WebP lewat `astro:assets`; PNG asli di root tidak ikut terbit |
| Font self-host | Kecepatan dan tanpa request ke pihak ketiga | Terapkan | File font disajikan dari domain sendiri; font Sora (DESIGN bagian 2) |
| Header keamanan dasar | Situs publik tanpa data pengguna; risiko rendah | Terapkan | Misalnya larangan iframe dari situs lain, nosniff, referrer policy; diatur di hosting (P-006). Status Fase 3: `public/_headers` (format Cloudflare Pages/Netlify) berisi nosniff, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, HSTS, cache `/_astro/*`; hosting lain perlu padanannya |
| SEO dasar per bahasa | URL terpisah `/` dan `/id`; link sering dibagikan lewat WhatsApp | Terapkan | Judul dan deskripsi per bahasa, penanda hubungan versi ID/EN (hreflang), gambar preview link (Open Graph), sitemap. Status Fase 3: canonical, hreflang (en, id, x-default), Open Graph + gambar `og-en.png`/`og-id.png` 1200x630, favicon/ikon, `sitemap.xml`, `robots.txt`; domain masih placeholder `example.com` di `astro.config.mjs` |
| Analytics | Belum perlu | Tunda | Evaluasi setelah halaman online (P-007) |

## 5. Kesiapan, Dependency, PENDING & Persetujuan

### Ketentuan Pengerjaan

Proyek ini bukan pesanan klien biasa: Jay bergabung sebagai anggota tim EAI Tech.
Ketentuan di bawah diisi sesuai yang sudah diketahui; sisanya PENDING.

| Area | Keputusan/rujukan yang berlaku |
|---|---|
| Jenis, pihak dan hasil serahan | Pekerjaan internal tim EAI Tech. Menurut Jay, statusnya kemungkinan anggota tetap tim. Keputusan oleh tim (P-003). Hasil serahan: landing page online; detail repo/source di P-004. |
| Bahan dan revisi | Copy Cara Kerja, FAQ dan layanan belum diberikan tim (P-002, P-008). Logo ada di root; warna diambil dari logo (P-005); nilai resmi di P-011. Revisi mengikuti diskusi internal tim; tidak ada batas putaran formal. |
| Waktu dan biaya | Tidak ada deadline. Domain sudah ada (dipegang teman tim); hosting dan pembayarnya belum pasti (P-006). |
| Kepemilikan dan akses | Domain dipegang teman tim. Pemilik repo/source belum dibahas (P-004). |
| Portofolio dan support | Jay menyampaikan landing page ini boleh masuk portofolio pribadinya nanti. Waktu boleh publikasinya belum disebut. Peran yang ditulis di CV: pembuat landing page (sesuai pekerjaan nyata). |

### Satu tracker keputusan PENDING

| P-ID | Pertanyaan/keputusan | Penjawab | Dependency/tahap terhambat | Next action | Status | Rujukan |
|---|---|---|---|---|---|---|
| P-001 | Nomor WhatsApp tujuan dan isi pesan awal (ID dan EN) | Tim EAI Tech | Implementasi F-002 | Jay tanyakan ke tim | terbuka | F-002 |
| P-002 | Copy final kelima layanan (ID dan EN). Daftar layanan sudah fix | Tim EAI Tech | Publikasi (BR-002); tidak memblokir planning | Pakai placeholder dari draft teman sampai copy tersedia | terbuka sebagian | Bagian 1 - Layanan |
| P-003 | Cara tim memberi persetujuan (siapa yang mewakili) | Tim EAI Tech | Approval Brief/desain dari pihak tim | Jay tanyakan ke tim | terbuka | Bagian 1 |
| P-004 | Repo/source disimpan di akun siapa (akun Jay atau akun/organisasi EAI Tech) dan kapan boleh ditampilkan di portofolio | Jay / tim | Setup repo (development); tidak memblokir planning | Jay tanyakan ke tim | terbuka sebagian (status anggota & izin portofolio sudah disampaikan Jay) | Bagian 5 |
| P-005 | Aset brand yang sudah ada (logo, warna, font) | Tim EAI Tech | - | - | diputuskan: logo ada di root; warna diambil dari logo; sisa detail di P-011 | product.md bagian 1, 5 |
| P-006 | Hosting: sudah ada atau belum, pemilik akun dan pembayar. Akses DNS domain lewat teman tim | Jay / tim | Release; pilihan hosting di Arsitektur | Jay pastikan ke tim | terbuka sebagian (domain sudah ada) | Bagian 4 |
| P-007 | Cara mengukur keberhasilan (misal jumlah klik WhatsApp) | Jay / tim | Tidak memblokir | Evaluasi lagi setelah halaman online | ditunda: analytics belum dipasang di versi pertama | Bagian 4 |
| P-008 | Isi Cara Kerja dan FAQ (ID dan EN) | Tim EAI Tech | Publikasi (BR-002); tidak memblokir planning/development | Placeholder dulu; Jay minta brief ke tim | terbuka | F-003, F-004 |
| P-009 | Satu tombol WhatsApp umum, atau tombol per layanan dengan pesan berisi nama layanan | Jay | - | - | diputuskan: tombol umum + tombol per layanan | F-002, BR-003 |
| P-010 | Bahasa default dan cara berganti bahasa | Jay | - | - | diputuskan: default Inggris (revisi Jay 2026-10-29; awalnya Indonesia), tombol pil ID/EN di header | F-005, BR-004 |
| P-011 | Token warna resmi, nama font logo, file logo vektor (SVG), dan varian logo bertulisan gelap untuk latar terang | Pembuat logo (lewat Jay) | Tidak memblokir development: DESIGN memakai warna sampel, header logomark + teks "eAI Tech" dari kode, PNG dioptimasi | Jay tanyakan ke pembuat logo; bila datang, ganti nilai token/aset tanpa mengubah peran | terbuka | product.md bagian 5, DESIGN bagian 1 |
| P-012 | Ejaan "Intelegens" pada kepanjangan logo dan penulisan nama di teks ("eAI Tech" atau "EAI Tech") | Tim / pembuat logo | Copy final; tidak memblokir planning | Jay tanyakan ke tim | terbuka | product.md bagian 1 |
| P-013 | Framework utama (kandidat: Astro, Next.js, Nuxt/Vue, Angular) | Jay | - | - | diputuskan: Astro | PRD bagian 4 |
| P-014 | Prioritas desain: mobile-first atau desktop-first | Jay | - | - | diputuskan: semua perangkat setara; urutan rancang desktop → HP → tablet → TV | PRD bagian 4 |
| P-015 | "TV" berarti layar besar lewat browser saja, atau juga navigasi pakai remote TV | Jay | - | - | diputuskan: layar besar lewat browser saja | PRD bagian 4 |
| P-016 | Kontak lain di footer: email, Instagram, LinkedIn, dll. (yang benar-benar ada) | Tim EAI Tech | Publikasi (BR-002); tidak memblokir Layout | Sementara slot Email/Instagram/LinkedIn berisi placeholder; Jay tanyakan ke tim | terbuka | LAYOUT S-001 |
| P-017 | Wordmark raksasa "eAI Tech" di footer: dipakai bersama pita atau tidak | Jay | - | Bisa dievaluasi lagi bila pita saja terasa kurang | diputuskan (coba dulu): pita saja, tanpa wordmark; direvisi Jay 2026-10-30: nama "eAI Tech" tebal selebar layar, terpotong di dasar footer (REF-004) | VISUAL-DNA bagian 2, LAYOUT S-001 |
| P-018 | Navigasi di HP: menu overlay, atau tanpa menu + tombol WA menempel di bawah | Jay | - | - | diputuskan: tanpa menu, tombol WA menempel di bawah; direvisi Jay 2026-10-30: tombol WA menempel dihapus permanen (WA tetap di kartu layanan, area ajakan, footer) | LAYOUT S-001 |
| P-019 | Warna latar bagian gelap: teal sangat tua atau hitam netral | Jay | - | - | diputuskan: teal sangat tua `#04201F` | DESIGN bagian 1 |
| P-020 | Gaya tombol utama di bagian terang (aqua kurang kontras di latar terang) | Jay | - | - | diputuskan: tombol gelap dengan panah aqua | DESIGN bagian 1 |
| P-021 | Font web (kandidat: Sora, Outfit, Plus Jakarta Sans) | Jay | - | - | diputuskan: Sora | DESIGN bagian 2 |
| P-022 | Satu keluarga font untuk judul dan isi, atau font isi terpisah | Jay | - | - | diputuskan: satu keluarga (Sora) | DESIGN bagian 2 |
| P-023 | Bentuk sudut: tombol pil + bidang bersudut tegas, atau semua bersudut tegas | Jay | - | - | diputuskan: tombol pil, bidang lain bersudut tegas | DESIGN bagian 3 |
| P-024 | Header menempel: berganti terang/gelap mengikuti bagian di bawahnya, atau selalu gelap | Jay | - | - | diputuskan: header ikut bagian di bawahnya; direvisi Jay 2026-10-30: header tidak menempel (ikut tergulir, selalu terang di atas hero) | DESIGN bagian 4 |
| P-025 | Animasi titik pita di hero: terbentuk lalu bernapas pelan, atau ditambah reaksi kursor | Jay | - | - | diputuskan: terbentuk lalu bernapas pelan, tanpa reaksi kursor | DESIGN bagian 5 |
| P-026 | Pita menembus batas: tergambar mengikuti scroll, atau tampil utuh dan diam | Jay | - | - | diputuskan: tergambar mengikuti scroll; direvisi Jay 2026-10-29/30: pita garis dihapus - Hero → Layanan memakai logomark meleleh, Ajakan WA → Footer memakai judul raksasa yang duduk di batas | DESIGN bagian 5 |
