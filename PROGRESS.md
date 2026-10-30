# PROGRESS - Landing Page EAI Tech

## Metadata & Cara Membaca

- Tujuan: seluruh perkembangan, keputusan, perubahan, approval dan bukti bertanggal.
- Batas: status fitur/PENDING terkini di PRD; task/fase/GATE development di
  [AGENTS.md](AGENTS.md).
- Rujukan langsung: [PRD.md](PRD.md).
- Versi skill saat planning: freelance-project-planning (versi paket tidak tercatat).

Baca petunjuk lanjut dan entri terbaru dahulu; sejarah terkait ditelusuri bila
perlu. Log historis tidak diubah agar terlihat mengikuti kondisi sekarang.

## Satu Petunjuk Lanjut Aktif

- Diperbarui: 2026-10-29.
- Titik lanjut: Fase 0-3 selesai, GATE 3 lolos. Untuk rilis
  masih perlu: domain asli (ganti `site` di astro.config.mjs), hosting P-006,
  nomor WA P-001, copy final P-002/P-008/P-016, persetujuan tim P-003. Usulan teknis Fase 2 (pita
  di HP, titik mulai saat terlihat) masih menunggu pilihan Jay. Catatan hero
  Jay mungkin berlanjut (baru nomor 1 diterima).
- Entri terkait: 2026-10-29 WIB - Revisi | Hero, header, bahasa default.

## Log Seluruh Perkembangan

### 2026-10-28 22:54 WIB - Discovery | Tujuan & Keberhasilan

- Konteks/scope: planning dimulai di folder `D:\Projek\EAI Tech` (dikonfirmasi Jay).
- Dikerjakan: Discovery kelompok 1 dibahas lewat chat.
- Hasil:
  - EAI Tech adalah startup kecil; Jay bergabung ke tim dan tugas pertamanya
    membuat satu landing page.
  - Pengguna: calon klien dan orang yang penasaran dengan EAI Tech. Platform web.
  - Layanan inti menurut Jay: jasa pembuatan aplikasi, AI/otomasi. Draft empat
    layanan (Website, Aplikasi, Automation, Agentic AI) dibagikan seorang teman
    tim; menurut Jay draft ini kemungkinan AI generated, jadi dipakai sebagai
    bahan awal saja.
  - Kontak utama: WhatsApp. Form/booking tidak dipakai untuk sekarang.
  - Keputusan diambil tim bersama. Tidak ada deadline.
- Keputusan/perubahan: belum ada persetujuan; PRD masih DRAFT.
- Persetujuan: -
- Dokumentasi terkait:
  - PRD.md bagian 1, 2, 5 - dibuat (DRAFT), PENDING P-001 sampai P-007.
- Tindak lanjut: Discovery kelompok 2.

### 2026-10-28 WIB - Discovery | Isi halaman

- Konteks/scope: lanjutan Discovery kelompok 2.
- Hasil:
  - Daftar layanan final menurut Jay: Website, Aplikasi, Automation, Agentic AI,
    ERP System. Copy final tetap belum ada.
  - Bagian tambahan yang dipilih: Cara Kerja dan FAQ. Isinya belum diberikan
    tim, jadi memakai placeholder dulu.
  - EAI Tech belum pernah mengerjakan proyek klien; Portofolio dan Testimoni
    tidak dimasukkan.
  - Halaman dwibahasa: Indonesia dan Inggris.
- Keputusan/perubahan: arahan Jay di atas dicatat di PRD; belum ada persetujuan
  Brief. Agent mengusulkan BR-002 (placeholder wajib diganti sebelum publikasi),
  menunggu tinjauan Jay saat recap Brief.
- Persetujuan: -
- Dokumentasi terkait:
  - PRD.md bagian 1-3 dan 5 - diperbarui: F-003 s.d. F-005, S-001, FL-001/002,
    BR-001/002, P-008 s.d. P-010.
- Tindak lanjut: P-009, P-010, lalu Discovery kelompok 3.

### 2026-10-28 WIB - Discovery | Tombol WhatsApp dan bahasa

- Hasil: Jay memilih opsi rekomendasi untuk keduanya.
  - P-009: satu tombol WhatsApp umum + tombol di setiap layanan dengan pesan
    awal berisi nama layanan.
  - P-010: default Bahasa Indonesia, tombol ID/EN di header.
- Keputusan/perubahan: keputusan Jay (bukan approval tim). BR-002 belum dijawab
  Jay; ditanyakan lagi saat recap Brief.
- Dokumentasi terkait:
  - PRD.md F-002, F-005, FL-002, BR-003, BR-004, tracker P-009/P-010 - diperbarui.
- Tindak lanjut: Discovery kelompok 3.

### 2026-10-28 WIB - Discovery | Batasan & operasional

- Hasil (disampaikan Jay):
  - Domain sudah ada, dipegang seorang teman tim. Hosting belum dipastikan.
  - Konten diubah Jay lewat kode; tidak perlu CMS.
  - Analytics belum perlu di versi pertama ("belum perlu, bukan tidak perlu").
  - Status Jay: kemungkinan anggota tetap. Landing page boleh masuk portofolio
    pribadi Jay nanti (izin seperti yang disampaikan Jay; waktu belum disebut).
- Keputusan/perubahan: tanpa CMS dicatat sebagai pilihan strategis. Asumsi agent
  soal pengunjung mayoritas HP menunggu konfirmasi saat recap Brief.
- Persetujuan: -
- Dokumentasi terkait:
  - PRD.md bagian 4 (baru) dan bagian 5 - diperbarui; P-004, P-006, P-007 direvisi.
- Tindak lanjut: Discovery kelompok 4.

### 2026-10-28 WIB - Discovery | Desain & aset brand

- Hasil:
  - Jay menaruh `Logomark.png` dan `Logo 2.png` di root proyek.
  - Agent menganalisis logo: warna diambil lewat sampel pixel (.NET
    System.Drawing), hasilnya dicatat di product.md bagian 5 sebagai perkiraan.
    Nama font tidak bisa dipastikan dari gambar. Tulisan logo putih, jadi logo
    dibuat untuk latar gelap.
  - Rasa tampilan menurut Jay: modern, clean, profesional, tidak pasaran,
    tidak AI slop.
  - Referensi awal dari teman tim: https://hyperliquid.xyz/. Jay masih mencari
    referensi lain; dibahas di tahap Reference.
  - Mode belajar: tidak (LEARNING.md tidak dibuat).
- Keputusan/perubahan: warna brand mengikuti logo (arahan Jay). Token resmi dan
  font ditanyakan ke pembuat logo (P-011). Ejaan tagline ditanyakan (P-012).
- Persetujuan: -
- Dokumentasi terkait:
  - product.md - dibuat (DRAFT).
  - PRD.md tracker P-005 (diputuskan), P-011, P-012 (baru).
- Tindak lanjut: recap Brief untuk disetujui Jay.

### 2026-10-28 WIB - Discovery | Persetujuan Brief

- Dikerjakan: agent menampilkan recap Brief (tujuan, isi halaman, out of scope,
  batasan, arah desain, BR-002, asumsi mobile-first, daftar PENDING).
- Persetujuan: Jay menjawab "Setuju" di chat, 2026-10-28.
  - Objek: Brief di PRD.md bagian 1-3, batasan PRD bagian 4, BR-002, asumsi
    mobile-first, arah desain product.md (DRAFT tetap untuk palet/font).
  - Cakupan: persetujuan Jay saja. Bukan persetujuan tim EAI Tech (P-003) dan
    tidak mengesahkan stack, desain final atau deployment.
- Dokumentasi terkait:
  - PRD.md metadata dan bagian 4 (perangkat) - diperbarui.
  - product.md bagian 2 - diperbarui.
- Tindak lanjut: tahap Arsitektur & Pilihan Teknis.

### 2026-10-28 WIB - Arsitektur | Stack inti (sebagian)

- Dikerjakan: agent menawarkan opsi framework, cara dua bahasa dan hosting.
  Sumber dibaca via Context7: dokumentasi Astro i18n (`prefixDefaultLocale`)
  dan dokumentasi Motion (impor `animate`/`scroll` dari `motion`).
- Keputusan Jay: Tailwind CSS; Motion untuk animasi/transisi; dua bahasa dengan
  URL terpisah (`/` dan `/en`). Hosting ditunda (P-006).
- Framework belum dipilih: Jay sangat familiar Next.js, ingin mencoba Astro/Vue/
  Angular, dan meminta penjelasan perbandingan (P-013).
- Dokumentasi terkait:
  - PRD.md bagian 4 pilihan strategis, tracker P-013 - diperbarui.
- Tindak lanjut: P-013.

### 2026-10-28 WIB - Arsitektur | Koreksi asumsi mobile-first

- Konteks: Jay bertanya kapan mobile-first diputuskan dan tidak merasa pernah
  menyetujuinya.
- Fakta: mobile-first adalah asumsi agent yang dimasukkan ke recap Brief sebagai
  bagian dari tombol "Setuju". Jay tidak pernah memilihnya secara eksplisit.
- Keputusan/perubahan: asumsi ditarik dari cakupan persetujuan Brief dan menjadi
  P-014. Bagian Brief lain tetap disetujui.
- Dokumentasi terkait:
  - PRD.md metadata, bagian 4 (perangkat), tracker P-014 - diperbarui.
  - product.md bagian 2 - diperbarui.
- Tindak lanjut: P-014.

### 2026-10-28 WIB - Arsitektur | Prioritas perangkat

- Keputusan Jay: semua perangkat disamaratakan (responsive). Urutan merancang:
  desktop dulu, lalu HP, tablet, TV.
- Lingkup TV dikonfirmasi terpisah (P-015) agar tidak menjadi asumsi agent.
- Dokumentasi terkait:
  - PRD.md bagian 4 (perangkat), tracker P-014 (diputuskan), P-015 (baru).
  - product.md bagian 2 - diperbarui.
- Tindak lanjut: P-015, P-013.

### 2026-10-28 WIB - Arsitektur | Framework

- Dikerjakan: agent menjelaskan perbandingan Astro, Next.js, Nuxt/Vue, Angular
  untuk landing page (rekomendasi Astro).
- Keputusan Jay: Astro.
- Dokumentasi terkait:
  - PRD.md bagian 4 baris Framework, tracker P-013 (diputuskan).
- Tindak lanjut: P-015, mode agent, usulan teknis kelompok 2-5.

### 2026-10-28 WIB - Arsitektur | Tooling dan usulan teknis

- Keputusan Jay:
  - P-015: "TV" = layar besar lewat browser; tanpa navigasi remote.
  - Mode development: satu agent (dimasukkan ke AGENTS saat finalisasi).
  - Usulan agent disetujui semua: tanpa backend/DB/API, optimasi gambar logo,
    font self-host, header keamanan dasar, SEO dasar per bahasa. Jay meminta
    penjelasan sederhana arti "output statis" dan "SEO dasar"; diberikan di chat.
- Dokumentasi terkait:
  - PRD.md bagian 4 (perangkat, backend, tabel performa/keamanan/SEO), P-015.
- Tindak lanjut: persetujuan Arsitektur.

### 2026-10-29 WIB - Arsitektur | Persetujuan Arsitektur

- Dikerjakan: agent menampilkan ringkasan Arsitektur dan menjelaskan output
  statis (SSG) dibanding SSR/CSR serta arti SEO dasar per bahasa.
- Persetujuan: Jay menjawab "Setuju" di chat, 2026-10-29.
  - Objek: PRD.md bagian 4 - Astro (SSG), Tailwind CSS, Motion, URL dua bahasa,
    perangkat setara desktop-dulu, tanpa backend, tabel performa/keamanan/SEO,
    satu agent.
  - Cakupan: persetujuan Jay saja; hosting tetap P-006; bukan approval tim.
- Dokumentasi terkait: PRD.md metadata - diperbarui.
- Tindak lanjut: tahap Reference.

### 2026-10-29 WIB - Reference | Hyperliquid dan Breaver Studios

- Dikerjakan: agent mengamati hyperliquid.xyz di browser (1440x900) dan
  merangkum 8 elemen. Jay mengirim screenshot footer Hyperliquid dan footer
  Breaver Studios (situs Breaver tidak dibuka agent).
- Hasil: Jay menyukai semuanya secara umum, terutama footer yang tersambung
  dengan bagian atasnya. Jay juga ingin hero yang tersambung dengan bagian
  berikutnya. Belum ada referensi lain.
- Keputusan/perubahan: konsep sambungan antarbagian dipilih Jay. Usulan
  adaptasi lain belum diputuskan.
- Dokumentasi terkait: VISUAL-DNA.md - dibuat (DRAFT), REF-001, REF-002.
- Tindak lanjut: Jay memilih usulan adaptasi.

### 2026-10-29 WIB - Reference | Keputusan adaptasi

- Keputusan Jay:
  - Huruf judul ikut gaya logo (sans-serif geometris).
  - Bagian terang dan gelap berselang-seling.
  - Sambungan antarbagian: coba pita logomark dulu; gabungan dengan wordmark
    raksasa di footer dievaluasi lagi saat Layout.
  - Referensi diambil konsepnya saja, tidak ditiru 100%, memakai aset sendiri.
- Belum jelas: elemen B1-B5 mana yang dipakai; ditanyakan ulang ke Jay.
- Dokumentasi terkait: VISUAL-DNA.md bagian 2-4; product.md bagian 5 (font,
  mode); PRD P-011 (tambah varian logo gelap).
- Tindak lanjut: konfirmasi B1-B5, lalu persetujuan VISUAL-DNA.
- Lanjutan (2026-10-29): Jay mengonfirmasi semua konsep B1-B5 dipakai, dengan
  syarat tidak ditiru 100%: diolah ulang dan memakai aset EAI Tech sendiri.
  VISUAL-DNA bagian 2 diperbarui.

### 2026-10-29 WIB - Reference | Persetujuan VISUAL-DNA

- Persetujuan: Jay menjawab "Setuju" di chat, 2026-10-29.
  - Objek: VISUAL-DNA.md seluruh bagian (REF-001, REF-002, arahan craft,
    komposisi, adaptasi) beserta keputusan font dan mode di product.md bagian 5.
  - Cakupan: persetujuan Jay saja. Palet/font resmi tetap menunggu P-011.
- Tindak lanjut: tahap Layout.

### 2026-10-29 WIB - Layout | Draft sketsa

- Dikerjakan: agent menulis LAYOUT.md (DRAFT) - shell, urutan terang/gelap,
  wireframe desktop S-001, hierarki, penempatan state, adaptasi TV/tablet/HP.
- Keputusan/perubahan: semua isi masih usulan agent. Pertanyaan baru P-016
  (kontak footer), P-017 (wordmark raksasa), P-018 (navigasi HP).
- Dokumentasi terkait: LAYOUT.md - dibuat; PRD tracker P-016 s.d. P-018.
- Tindak lanjut: walkthrough dengan Jay.

### 2026-10-29 WIB - Layout | Walkthrough pertama

- Dikerjakan: agent menampilkan urutan enam bagian dan pola terang/gelap, lalu
  menanyakan P-016 s.d. P-018.
- Hasil (jawaban Jay):
  - Urutan bagian dan pola terang/gelap: "Sudah oke".
  - P-018: opsi rekomendasi - tanpa menu, tombol WA menempel di bawah layar HP.
  - P-017: "Coba pakai pita dulu" - footer tanpa wordmark raksasa.
  - P-016: kontak lain belum ada; slot placeholder dibuat dulu.
- Keputusan/perubahan: keputusan Jay, belum persetujuan LAYOUT. Turunan P-018
  yang belum dipilih: tombol WA ringkas di header HP tetap ada atau dihapus.
- Dokumentasi terkait:
  - LAYOUT.md metadata, wireframe footer, catatan craft, state, adaptasi HP.
  - PRD.md tracker P-016 (placeholder), P-017, P-018 (diputuskan).
- Tindak lanjut: tombol WA header HP, lalu persetujuan LAYOUT.
- Lanjutan (2026-10-29): agent mengusulkan tombol WA di header HP dihapus agar
  tidak dobel dengan tombol menempel. Jay menjawab "Ya, hapus". LAYOUT.md
  adaptasi HP diperbarui.
- Lanjutan (2026-10-29): agent memisahkan usulannya sendiri di LAYOUT dari
  pilihan Jay: garis rangka vertikal, adaptasi tablet, adaptasi HP (Layanan
  bertumpuk, animasi hero lebih ringan), batas lebar dan huruf di layar besar,
  link "lompat ke konten", fallback JavaScript gagal dan reduced motion. Jay
  menjawab "Pakai semua". Ini keputusan atas usulan, belum persetujuan LAYOUT.

### 2026-10-29 WIB - Layout | Persetujuan LAYOUT

- Persetujuan: Jay menjawab "Setuju" di chat, 2026-10-29.
  - Objek: LAYOUT.md seluruh isi - shell, urutan enam bagian terang/gelap,
    sambungan pita, wireframe desktop S-001, hierarki, penempatan state,
    adaptasi TV/tablet/HP/keyboard.
  - Cakupan: persetujuan Jay saja, bukan tim (P-003). Tidak mencakup isi
    placeholder (P-002, P-008, P-016; tetap BR-002) maupun nilai warna, font,
    ukuran dan animasi (tahap DESIGN; P-011).
- Dokumentasi terkait: LAYOUT.md metadata - status diperbarui.
- Tindak lanjut: tahap DESIGN.

### 2026-10-29 WIB - DESIGN | Kelompok 1 (warna dan font)

- Dikerjakan: Jay meminta mulai DESIGN. Agent melihat `Logo 2.png` (wordmark
  tipis dan lebar), menghitung rasio kontras warna kandidat, lalu menulis
  DESIGN.md (DRAFT) bagian warna dan tipografi.
- Temuan: aqua logo `#02E6DF` hanya 1,5:1 di latar terang, jadi tidak bisa
  dipakai untuk teks atau tombol tanpa pendamping di bagian terang.
- Keputusan/perubahan: semua isi DESIGN.md masih usulan agent. Pertanyaan baru
  P-019 s.d. P-022.
- Dokumentasi terkait: DESIGN.md - dibuat; PRD tracker P-019 s.d. P-022.
- Tindak lanjut: Jay memilih P-019 s.d. P-022.
- Lanjutan (2026-10-29): Jay menjawab "Pakai saran" - P-019 teal sangat tua
  `#04201F`, P-020 tombol gelap dengan panah aqua, P-021 Sora, P-022 satu
  keluarga font.

### 2026-10-29 WIB - DESIGN | Kelompok 2 (ukuran dan komponen)

- Dikerjakan: agent menulis usulan skala huruf Sora, jarak, titik ganti
  layout, bentuk sudut dan spesifikasi komponen di DESIGN.md bagian 2-4.
- Keputusan/perubahan: semua isi kelompok 2 masih usulan agent. Pertanyaan
  baru P-023 (bentuk sudut), P-024 (perilaku header).
- Dokumentasi terkait: DESIGN.md bagian 1-4; PRD tracker P-019 s.d. P-024.
- Tindak lanjut: Jay memilih P-023, P-024 dan menanggapi usulan lain.
- Lanjutan (2026-10-29): Jay menjawab "Pakai saran" - P-023 tombol pil dan
  bidang bersudut tegas, P-024 header ikut bagian di bawahnya. Usulan lain
  (ketebalan, skala ukuran, jarak/lebar, spesifikasi komponen) ditanyakan
  terpisah.
- Lanjutan (2026-10-29): Jay menetapkan ikon memakai Lucide, dan menegaskan
  animasi/transisi memakai Motion (sudah tercatat di PRD bagian 4). Agent
  mencatat bahwa Lucide tidak memuat logo merek; logo WhatsApp tidak dipakai
  di desain saat ini. DESIGN.md bagian 4-5 diperbarui.
- Lanjutan (2026-10-29): Jay menjawab "Pakai semua" untuk usulan lain
  kelompok 2 (ketebalan Sora 300/400/500, skala ukuran, jarak dan lebar
  kolom, spesifikasi komponen). Keputusan atas usulan, belum persetujuan
  DESIGN.

### 2026-10-29 WIB - DESIGN | Kelompok 3 (animasi dan interaksi)

- Dikerjakan: agent menulis usulan animasi utama, token durasi/easing, teknik
  (Canvas 2D + Motion), batas performa, reduced motion dan fallback JS di
  DESIGN.md bagian 5.
- Keputusan/perubahan: semua isi kelompok 3 masih usulan agent. Pertanyaan
  baru P-025 (animasi titik hero), P-026 (pita menembus batas).
- Dokumentasi terkait: DESIGN.md metadata dan bagian 5; PRD tracker P-025,
  P-026.
- Tindak lanjut: Jay memilih P-025, P-026 dan menanggapi usulan lain.
- Lanjutan (2026-10-29): Jay menjawab "Pakai saran" - P-025 titik terbentuk
  lalu bernapas pelan (tanpa reaksi kursor), P-026 pita tergambar mengikuti
  scroll. Usulan lain (token durasi, teks muncul, teknik/performa,
  aksesibilitas) ditanyakan terpisah.
- Lanjutan (2026-10-29): Jay menjawab "Pakai semua" untuk usulan lain
  kelompok 3. Agent memeriksa ulang DESIGN.md: token warna pendukung
  (`accent-ink`, `light-bg`, `light-text`, `light-muted`, `light-line`,
  `dark-text`, `dark-muted`, `dark-line`) dan aturan gradasi belum pernah
  dipilih Jay secara eksplisit; ditanyakan terpisah sebelum persetujuan.
- Lanjutan (2026-10-29): Jay menjawab "Pakai" untuk warna pendukung dan aturan
  gradasi. Semua isi DESIGN.md kini pilihan Jay; belum persetujuan DESIGN.

### 2026-10-29 WIB - DESIGN | Persetujuan DESIGN

- Persetujuan: Jay menjawab "Setuju" di chat, 2026-10-29.
  - Objek: DESIGN.md seluruh isi - warna dan aturan gradasi, tipografi Sora
    dan skala ukuran, jarak/lebar/bentuk sudut, komponen dan ikon Lucide,
    animasi utama, token durasi, teknik Canvas 2D + Motion, batas performa,
    reduced motion dan fallback JS.
  - Cakupan: persetujuan Jay saja, bukan tim (P-003). Tidak mencakup nilai
    warna/font resmi dari pembuat logo (P-011) maupun isi placeholder (P-002,
    P-008, P-016; tetap BR-002).
- Dokumentasi terkait: DESIGN.md metadata - status diperbarui.
- Tindak lanjut: finalisasi - AGENTS.md dan pemeriksaan konsistensi dokumen.

### 2026-10-29 WIB - Finalisasi | Konsistensi dokumen dan draft AGENTS

- Dikerjakan: agent membaca ulang semua dokumen dan memperbaiki rujukan usang
  (perubahan redaksional, tanpa mengubah keputusan):
  - Semua dokumen: baris "Peta dokumen" kini menunjuk AGENTS.md bagian 1.
  - PRD: metadata menyebut persetujuan LAYOUT/DESIGN; S-001 merujuk LAYOUT
    S-001; baris font self-host menyebut Sora; Ketentuan "Logo/warna belum
    dibahas" diganti status P-005/P-011; dependency P-011 diperbarui (tidak
    memblokir development); baris P-010 dipindah ke urutannya; FL-002
    diselaraskan dengan URL terpisah yang disetujui di Arsitektur (pindah ke
    `/` ↔ `/en` di bagian yang sama).
  - product.md: status mencerminkan persetujuan Brief dan VISUAL-DNA; font web
    Sora.
  - VISUAL-DNA: wordmark raksasa tidak dipakai (P-017); animasi titik di Hero.
- AGENTS.md dibuat (DRAFT): peta dokumen, aturan kerja, stack, fase 0-3 dan
  GATE, PENDING per fase, cara pemeriksaan.
- Keputusan/perubahan: fase/GATE, target Lighthouse ≥ 90, repo lokal sebelum
  P-004, nomor WA placeholder selama development, dan cara pemeriksaan tanpa
  test otomatis adalah usulan agent, menunggu pilihan Jay.
- Dokumentasi terkait: AGENTS.md - dibuat; PRD, product.md, VISUAL-DNA,
  LAYOUT, DESIGN - metadata/rujukan diperbarui.
- Tindak lanjut: Jay menanggapi usulan AGENTS, lalu persetujuan AGENTS.
- Lanjutan (2026-10-29): Jay menjawab "Pakai semua" untuk enam usulan agent:
  empat fase dengan GATE, Lighthouse ≥ 90 (simulasi HP, `/` dan `/en`), repo
  git lokal sebelum P-004, nomor WA placeholder selama development (P-001),
  pemeriksaan manual + Lighthouse tanpa test otomatis terpisah, dan CLAUDE.md
  yang mengimpor AGENTS.md. Penanda usulan di AGENTS.md dihapus; CLAUDE.md
  dibuat. Belum persetujuan AGENTS.

### 2026-10-29 WIB - Finalisasi | Persetujuan AGENTS, planning selesai

- Persetujuan: Jay menjawab "Setuju" di chat, 2026-10-29.
  - Objek: AGENTS.md seluruh isi - peta dokumen, aturan kerja, stack, fase
    0-3 dan GATE, syarat rilis, PENDING per fase, cara pemeriksaan; beserta
    CLAUDE.md sebagai titik masuk.
  - Cakupan: persetujuan Jay saja, bukan tim (P-003). Tidak memutuskan
    hosting (P-006) maupun PENDING lain yang masih terbuka.
- Hasil: seluruh dokumen planning disetujui Jay (Brief, Arsitektur,
  VISUAL-DNA, LAYOUT, DESIGN, AGENTS). Planning selesai.
- PENDING terbuka saat planning selesai: P-001, P-002, P-003, P-004, P-006,
  P-008, P-011, P-012, P-016 (terbuka/sebagian); P-007 ditunda.
- Dokumentasi terkait: AGENTS.md metadata - status diperbarui.
- Tindak lanjut: development Fase 0 - Setup (AGENTS bagian 4).

### 2026-10-29 WIB - Development | Fase 0 Setup (menunggu tinjauan GATE 0)

- Konteks/scope: Jay meminta Fase 0 dikerjakan di sesi ini (bukan sesi baru).
- Dikerjakan:
  - Versi dicek di registry npm dan dokumentasi resmi via Context7 (Astro
    i18n dan Tailwind 4, Lucide Astro): Astro 7.4.4, Tailwind CSS 4.3.3 +
    `@tailwindcss/vite` 4.3.3, Motion 14.7.1, `@lucide/astro` 1.64.0
    (paket resmi Lucide), `@fontsource/sora` 5.3.0. Semua dipasang dengan
    versi persis. Node v24.16.0, npm 11.13.0.
  - Proyek Astro disusun manual di root, tanpa menimpa dokumen planning atau
    logo PNG: `package.json`, `astro.config.mjs` (output statis, i18n `id`
    default tanpa prefix + `en`), `tsconfig.json`, `.gitignore`.
  - `src/styles/global.css`: semua token DESIGN di `@theme` Tailwind - warna,
    gradasi pita, Sora 300/400/500, skala ukuran fluid 375→1440 px, titik ganti
    layout `tablet` 768 / `desktop` 1200 / `wide` 1920 px, lebar kolom 1200 px,
    durasi dan easing; ukuran dasar ×1,15 di ≥1920 px; cincin fokus; reduced
    motion dasar.
  - Sora self-host lewat Fontsource subset Latin (WOFF2 sekitar 15 KB per
    ketebalan, disajikan dari `/_astro/`).
  - `src/i18n/ui.ts`: teks ID/EN terpisah dari markup; deskripsi meta ditandai
    PLACEHOLDER (BR-002, P-002).
  - Halaman sementara `/` dan `/en` (`SetupPreview.astro`) berisi satu bagian
    terang dan satu gelap untuk mengecek token; diganti di Fase 1.
  - Repo git lokal `main` dibuat; belum ada commit dan tidak ada remote (P-004).
  - `.claude/launch.json` untuk pratinjau (`npm run preview`, port 4321).
- Bukti GATE 0 (dicek agent):
  - `npm run build` berhasil: 2 halaman (`/index.html`, `/en/index.html`).
  - Di browser: `/` lang `id`, `/en` lang `en` dengan teks EN; latar terang
    `rgb(244,248,247)` = `#F4F8F7`, latar gelap `rgb(4,32,31)` = `#04201F`,
    tombol terang `#0B1F1E` berbentuk pil; judul Sora 300; Sora 300/400/500
    termuat (`document.fonts.check` true).
- Catatan: Astro mengirim data penggunaan anonim (telemetry) saat build;
  belum diubah, menunggu keputusan Jay.
- Tindak lanjut: Jay meninjau GATE 0; setelah lolos, Fase 1.
- GATE 0: Jay menyatakan "Lolos" di chat, 2026-10-29. Telemetry Astro belum
  diubah. Belum ada commit.

### 2026-10-29 WIB - Development | Fase 1 Struktur, konten & responsive (menunggu tinjauan GATE 1)

- Dikerjakan:
  - Konten ID/EN di `src/i18n/content.ts`; id bagian per bahasa di
    `src/i18n/ui.ts`. Blok belum final bertanda `placeholder: true` dan tampil
    dengan label "Placeholder" (6 tempat: Hero, Layanan, Cara Kerja, FAQ,
    Ajakan WA, kontak lain di footer). Deskripsi meta juga ditandai di kode.
  - `src/config/whatsapp.ts`: satu konfigurasi WA. Nomor kosong (P-001), jadi
    link memakai `wa.me/?text=` yang membuka pilihan penerima di WhatsApp;
    sengaja tanpa nomor rekaan agar pesan tidak terkirim ke orang lain.
  - Komponen: Header (warna ikut bagian, menu aktif bergaris bawah, HP hanya
    logomark + ID/EN), LangSwitch, Footer, tombol WA menempel di HP, Button
    pil dengan panah Lucide, Section bergaris rangka, SectionHeading,
    PlaceholderTag, DotArt (ilustrasi titik Cara Kerja).
  - Bagian: Hero (logomark diam sebagai fallback animasi Fase 2), Layanan
    (baris bergaris + tombol per layanan), Cara Kerja (4 langkah), FAQ
    (`<details>`), Ajakan WA. Link "lompat ke konten".
  - Logo disalin ke `src/assets/` dan dipotong ruang transparannya agar
    terbaca di header/footer; file asli di root tidak diubah.
- Bukti GATE 1 (dicek agent di browser pane):
  - F-001: lima layanan tampil dengan nama dan penjelasan di `/` dan `/en`.
  - F-002/BR-001/BR-003: 10 link WA per halaman, semua buka tab baru dengan
    `noopener`; pesan umum dan 5 pesan per layanan sesuai bahasa.
  - F-003/F-004: 4 langkah dan 4 FAQ placeholder bertanda; FAQ buka-tutup.
  - F-005/FL-002: `/` lang `id`, `/en` lang `en`; tombol ID/EN membawa anchor
    bagian yang sedang dibaca (mis. `/en/#services` dari Layanan).
  - Header berganti terang/gelap sesuai bagian; menu aktif tertandai.
  - Tanpa JS: HTML hasil build memuat semua teks, 10 link WA dan 4
    `<details>`; satu-satunya skrip hanya untuk warna header, menu aktif dan
    anchor ganti bahasa. Tanpa JS header tetap terang dan ganti bahasa
    membuka bagian atas halaman.
  - Keyboard: Tab pertama memunculkan "Lompat ke konten"; cincin fokus dari
    token DESIGN.
  - Ukuran layar: 375 (HP), 768 (tablet), 1440 (desktop), 1920 (layar besar,
    ukuran dasar 18,4 px); tidak ada scroll horizontal. Ditemukan dan
    diperbaiki: baris layanan di tablet sempit (penjelasan masuk kolom nomor).
  - Kontras memakai pasangan token DESIGN bagian 1 (sudah dihitung saat
    DESIGN). Label "Placeholder" sedikit lebih samar (opacity 80%) karena
    hanya penanda sementara.
- Belum termasuk (Fase 2): animasi titik/pita, pita menembus batas, teks
  muncul saat scroll, animasi tinggi FAQ.
- Tindak lanjut: Jay meninjau GATE 1.
- GATE 1 (2026-10-29): Jay memilih "Ada catatan" tanpa merinci, lalu meminta
  "Coba lanjut fase 2 dulu aja". GATE 1 belum dinyatakan lolos; catatan Jay
  masih ditunggu. Fase 2 dimulai atas permintaan Jay (pengecualian dari
  AGENTS bagian 4 "fase berikut setelah GATE lolos").

### 2026-10-29 WIB - Development | Fase 2 Animasi & interaksi (menunggu tinjauan GATE 2)

- Dikerjakan (API Motion dicek via Context7: `animate` nilai tunggal +
  `onUpdate`, `scroll` dengan `target`/`offset`, `inView`):
  - `src/scripts/hero-ribbon.ts`: Canvas 2D; bentuk dan warna titik diambil
    dari gambar logomark di hero. Titik berkumpul 1,5 detik (Motion
    `animate`), lalu bergerak pelan seperti bernapas. Maks. 800 titik desktop
    / 300 HP, DPR maks. 2. Mulai saat visual pertama kali terlihat; jeda saat
    di luar layar atau tab tidak aktif. Gambar logomark tetap di tempatnya
    (disembunyikan saat canvas jalan), jadi tidak ada pergeseran layout.
  - `RibbonCross.astro` + `src/scripts/scroll-ribbons.ts`: pita gradasi
    aqua→teal di batas Hero→Layanan dan Ajakan WA→Footer, tergambar mengikuti
    scroll (Motion `scroll`).
  - `src/scripts/reveal.ts`: judul bagian, langkah Cara Kerja (bertahap 0,08
    detik) dan judul Ajakan WA muncul dari opacity 0,25 + naik 16 px, 0,7
    detik, sekali. Judul hero dan tombol WA tidak ikut animasi.
  - FAQ: tinggi jawaban beranimasi lewat CSS `::details-content` di browser
    yang mendukung; browser lain langsung terbuka.
  - Pengaman: kelas `js` di `<head>` memasang keadaan awal animasi dan dicabut
    bila skrip animasi tidak siap dalam 3 detik.
- Keputusan teknis agent yang perlu ditinjau Jay (usulan, belum dipilih):
  - Pita menembus batas disembunyikan di HP (< 768 px) agar tidak menimpa
    judul bagian yang selebar layar.
  - Di HP titik mulai berkumpul saat visual hero terlihat, bukan tepat saat
    halaman dibuka, karena visual ada di bawah teks.
- Bukti GATE 2 (dicek agent):
  - Reduced motion (emulasi Playwright): canvas tidak dibuat, logomark diam
    tampil (opacity 1), judul bagian langsung opacity 1, pita utuh
    (dashoffset 0, tanpa dasharray).
  - Gerak normal: canvas aktif; judul hero dan tombol WA hero opacity 1 sejak
    awal (tidak menunggu animasi).
  - Jeda: 0 pemanggilan `requestAnimationFrame` per detik saat hero di luar
    layar.
  - Pergeseran layout (CLS) 0 di desktop 1440 px.
  - Ukuran JS animasi + header: 76 KB mentah, 27,5 KB gzip.
  - Console: satu-satunya error adalah `favicon.ico` 404 (favicon dibuat di
    Fase 3).
- Belum bisa dicek agent: kemulusan di HP kelas menengah sungguhan (hanya
  emulasi ukuran layar di browser pane); perlu dicoba Jay di HP.
- Catatan visual: pita Hero→Layanan belum tersambung langsung dengan logomark
  (ada jarak di bawah visual hero).
- Tindak lanjut: Jay meninjau GATE 2; catatan GATE 1 dari Jay masih ditunggu.

### 2026-10-29 WIB - Revisi | Hero, header, bahasa default (arahan Jay)

- Konteks: Jay meninjau hasil Fase 2, memilih "Ada yang diubah", lalu
  menyampaikan bahwa banyak bagian perlu dirombak, dimulai dari hero. Jay
  juga menyatakan sambungan antarbagian versi agent (garis pita melayang)
  salah tangkap; maksudnya batas bagian itu sendiri yang menyambung, seperti
  footer Breaver (ilustrasi berupa bidang warna footer yang naik ke bagian
  atas) dan Hyperliquid (ekor huruf meleleh ke footer).
- Keputusan Jay (revisi atas LAYOUT, DESIGN, Brief):
  1. Garis rangka vertikal dihapus di hero dulu (bagian lain belum).
  2. Header: logomark + teks "eAI Tech" dibuat di kode (bukan warna ulang
     file logo).
  3. Header tanpa tombol Chat WA; menu di kanan, lalu pil bahasa `( ID | EN )`
     dengan bahasa aktif terisi (opsi A). **Bahasa default diganti Inggris**:
     `/` = EN, `/id` = ID (mengubah BR-004, P-010).
  4. Judul hero: "From idea to a working system." / "Dari ide jadi sistem
     yang berjalan." (opsi A); kalimat pendukung dihapus. Label placeholder
     hero hilang karena judul sudah final.
  5. Sambungan Hero → Layanan memakai konsep B: logomark duduk di batas dan
     separuh bawahnya meleleh ke latar gelap. Sambungan footer dibahas nanti.
- Dikerjakan agent:
  - `astro.config.mjs`, `ui.ts`, halaman `src/pages/index.astro` (EN) dan
    `src/pages/id/index.astro` (ID); folder `src/pages/en` dihapus.
  - Header, LangSwitch (pil), Hero, Section (`frame={false}`), Services
    (jarak atas HP/tablet untuk logomark), `content.ts` (judul baru, tanpa
    kalimat pendukung, tanpa label Chat WA).
  - `hero-ribbon.ts`: titik di bawah batas memudar dan 22% menetes pelan;
    canvas diperpanjang 35% untuk ruang tetesan. Gambar diam (fallback)
    diberi mask gradasi agar separuh bawahnya juga memudar.
  - Pita garis Hero → Layanan dihapus. Pita garis Ajakan WA → Footer masih
    ada sampai sambungan footer dibahas.
  - Garis rangka di header juga dihapus agar tidak berhenti mendadak di atas
    hero (garis bawah header tetap) - keputusan agent, perlu konfirmasi Jay.
  - PRD (FL-002, BR-004, pilihan teknis, SEO, P-010, P-011), AGENTS (stack,
    GATE), LAYOUT (URL, wireframe header, tombol WA umum, catatan hero),
    DESIGN (header) diperbarui.
- Bukti: build 2 halaman (`/index.html` EN, `/id/index.html` ID). Dicek di
  Playwright (rAF normal): desktop 1440 dan HP 375 - logomark terbentuk,
  duduk di batas, separuh bawah meleleh dengan tetesan; tanpa scroll
  horizontal. Panel browser aplikasi sedang diperlambat (1 frame/detik),
  jadi animasi di sana tampak tidak bergerak; itu bukan bug halaman.
- Tindak lanjut: Jay meninjau hero baru; lalu bagian berikutnya (footer dan
  bagian lain) dibahas. GATE 1 dan GATE 2 belum lolos.
- Lanjutan (2026-10-29): catatan hero Jay nomor 1 - "Garis di navbar hapus
  aja". Garis bawah header dihapus (garis vertikal header sudah dihapus
  sebelumnya, jadi keputusan agent itu kini sejalan dengan arahan Jay).
  Header kini tanpa garis sama sekali; pemisah dengan hero hanya dari isi.

### 2026-10-29/30 WIB - Revisi | Services jadi kartu menempel (arahan Jay)

- Keputusan Jay: garis di Services dihapus; lima layanan jadi kartu rounded
  vertikal (atas gambar penuh, bawah judul, deskripsi, tombol Discuss);
  berjajar kiri → kanan dan muncul satu per satu mulai 01 saat di-scroll,
  pakai Motion. Pilihan: A1 (bagian menempel, deretan bergeser), B gambar
  placeholder dulu, C detail kartu usulan agent dipakai (sudut 24 px, rasio
  3:4, latar teal lebih terang, nomor 01-05, fallback deretan biasa).
- Dikerjakan: `Services.astro` ditulis ulang; `src/scripts/services-scroll.ts`
  (Motion `scroll` + `animate`; deretan bergeser bersamaan dengan munculnya
  kartu yang tidak muat; fokus keyboard ke kartu tersembunyi menggulir ke
  posisinya); token `dark-card`; teks placeholder gambar ID/EN di
  `content.ts`.
- 2026-10-30, arahan Jay: ekor logomark hero yang meleleh tidak boleh hilang
  saat Services di-scroll. `hero-ribbon.ts` kini memakai dua canvas: bagian
  atas di hero, bagian bawah di wadah `[data-ribbon-tail]` dalam area Services
  yang menempel. Saat menempel, jarak atas Services dipindah ke dalam area
  menempel agar sambungan di garis batas tetap pas.
- Bukti (Playwright, browser normal): desktop 1440 - kartu muncul 1 → 5,
  kartu terbaru selalu utuh di kanan, bagian lepas setelah kartu 05; fokus
  ke tombol kartu 05 menggulir dan memunculkannya; ekor logomark tetap di
  atas Services selama menempel dan tersambung mulus di garis batas. HP 375:
  sama, tanpa scroll horizontal.
- Masalah terbuka: dengan reduced motion (deretan biasa), halaman bisa
  tergeser horizontal ±285 px di desktop; penyebab belum ditemukan (Jay
  meminta berhenti saat investigasi).
- 2026-10-30, tindak lanjut (Jay: "Perbaiki dulu"): masalah tidak bisa
  dimunculkan lagi di build terbaru - reduced motion di 375, 768, 1440, 1920
  px, `/` dan `/id`, setelah ganti ukuran tanpa muat ulang, dan setelah fokus
  ke tombol kartu 05: lebar scroll halaman selalu sama dengan lebar layar.
  Penyebab pasti tetap tidak diketahui. Pengaman ditambahkan: `body {
  overflow-x: clip }` di `global.css` (bukan `hidden`, agar header dan
  Layanan tetap bisa menempel). Dicek: gerak normal - header tetap di atas,
  area Layanan menempel di 72 px, tidak ada geser horizontal; reduced motion
  - deretan kartu tetap bisa digeser, halaman tidak bisa digeser ke samping.

### 2026-10-30 WIB - Revisi | Cara Kerja menempel dengan cincin progres (arahan Jay)

- Keputusan Jay: konsep sama dengan Services (berdasarkan scroll, mulai dari
  langkah 1); layar penuh terang; kiri progres bulat yang bergerak, kanan
  nomor dan teks yang berganti. Pilihan: progres terisi halus (A), teks lama
  naik/baru masuk dari bawah (A), susunan kanan label → nomor → judul →
  deskripsi, HP cincin di atas, fallback daftar biasa - semua usulan agent
  dipakai. Lanjutan: "gausah ada / 04" dan nomor tanpa 0 di depan.
- Dikerjakan: `Process.astro` ditulis ulang (fallback daftar + panel
  menempel); `src/scripts/process-scroll.ts` (Motion `scroll` + `animate`).
  `trackContentSize` ditambahkan di scroll Services dan Cara Kerja agar posisi
  ikut diperbarui saat tinggi halaman berubah (font dimuat, area menempel lain
  diukur). Pergantian teks dilompati ke langkah terbaru saat scroll cepat.
- Bukti (Playwright): desktop 1440 - panel menempel di 72 px, header terang,
  cincin terisi bertahap (3 → 26 → 40 → 62 dari 64 titik), teks 1 → 4;
  lompat langsung dari langkah 1 ke 4 lalu kembali ke 2 tampil benar; setelah
  langkah 4 bagian lepas ke FAQ; tanpa geser horizontal. HP 375 - cincin di
  atas, teks di bawah. Reduced motion - tidak menempel, daftar 4 langkah.
- Belum diubah: nomor di kartu Services (01-05) dan di daftar fallback Cara
  Kerja masih memakai nol di depan.
- Dokumentasi: LAYOUT (Cara Kerja desktop/HP), DESIGN (komponen Cara Kerja).
- Lanjutan: Jay memilih nomor kartu Services tetap 01-05 ("Biarin aja").

### 2026-10-30 WIB - Revisi | FAQ adaptasi Aperios (arahan Jay)

- Jay menyukai FAQ di https://aperios-design.co.uk/ dan bertanya apakah bisa
  ditiru. Agent mengamati situsnya (REF-003 di VISUAL-DNA) dan mengusulkan
  adaptasi konsep, bukan salinan. Jay: "Pakai saran" - judul raksasa "Good to
  know" / "Perlu diketahui", label kiri hanya "FAQ", tanpa pita abu-abu,
  tanpa garis rangka, pertanyaan redup/terang saat disorot, ikon + → −,
  jawaban terang, tetap 4 pertanyaan placeholder (P-008).
- Dikerjakan: `Faq.astro` ditulis ulang; token `text-display` (48 → 152 px);
  judul FAQ di `content.ts` diganti.
- Bukti (Playwright): desktop 1440 - judul 120 px satu baris, daftar di kanan,
  pertanyaan terbuka menampilkan ikon − dan jawaban terang; header gelap dan
  menu FAQ aktif saat di bagian ini. HP 375 - judul dua baris, satu kolom;
  tanpa geser horizontal.
- Dokumentasi: VISUAL-DNA (REF-003), LAYOUT (FAQ), DESIGN (token, item FAQ).
- Lanjutan: Jay menyatakan FAQ sudah oke.

### 2026-10-30 WIB - Revisi | Header tidak menempel (arahan Jay)

- Jay: navbar jangan ikut saat di-scroll, tetap di atas saja (menggantikan
  P-024).
- Dikerjakan: header `relative` (bukan `sticky`), selalu terang; skrip header
  kini hanya menandai menu aktif dan anchor ganti bahasa (bagian yang melintasi
  sepertiga atas layar). Area menempel Services dan Cara Kerja kini `top-0`
  dan setinggi layar penuh (`h-svh`); offset scroll Motion `start start`;
  jarak anchor (`scroll-mt`) dihapus.
- Bukti (Playwright 1440): header tergulir keluar layar; area Services dan
  Cara Kerja menempel di 0 px setinggi 900 px; kartu dan langkah tetap
  berganti; ganti bahasa membawa anchor `/id/#cara-kerja`.
- Dokumentasi: PRD (P-024), LAYOUT (shell, wireframe header), DESIGN (header,
  token durasi, animasi FAQ).

### 2026-10-30 WIB - Reference | Penutup dan footer Aperios (permintaan Jay)

- Jay menyukai desain setelah FAQ di aperios-design.co.uk dan ingin
  menirunya. Agent mengamati via browser (1440x900): bagian ajakan putih -
  kalimat tebal di kiri atas, panah garis raksasa ↗ di kanan atas, ruang
  kosong, lalu judul raksasa "Get Started" duduk tepat di batas footer;
  footer hitam - pita abu-abu di atas, 3 kolom (Links, Connect, Contact
  rata kanan) dengan label sangat kecil dan link besar, garis putus-putus,
  wordmark raksasa yang bergerak menyamping terus-menerus, blok teks
  bergaya label pakaian di tengah, baris bawah lokasi / copyright /
  "Back to top ↑".
- Status: usulan adaptasi ditanyakan ke Jay sebelum dikerjakan.

### 2026-10-30 WIB - Revisi | Ajakan WA dan footer gaya Aperios (arahan Jay)

- Jay: "Pakai saran" - judul raksasa "Let's talk" / "Ayo ngobrol" Sora tipis;
  seluruh area ajakan jadi link WA dengan panah garis raksasa; footer tanpa
  pita abu-abu, 3 kolom (navigasi, kontak + placeholder P-016, pil bahasa),
  garis putus-putus, copyright + "Back to top"; wordmark "eAI Tech" raksasa
  bergerak menyamping (mengubah P-017); blok "label pakaian" diganti
  kepanjangan logo (ejaan P-012); pita garis lama dihapus.
- Dikerjakan: `Cta.astro` dan `Footer.astro` ditulis ulang; animasi marquee
  CSS di `global.css` (diam saat reduced motion); `RibbonCross.astro` dan
  `scroll-ribbons.ts` dihapus beserta CSS-nya; teks `big` dan `backToTop` di
  `content.ts`.
- Ditemukan dan diperbaiki: ekor huruf "y" dan "g" pada "Ayo ngobrol"
  terpotong batas footer; tinggi baris judul dinaikkan ke 1,2.
- Bukti (Playwright): desktop 1440 - judul raksasa tepat di batas footer
  (jarak 0 px), link mengarah ke `wa.me`, wordmark bergerak, tanpa geser
  horizontal. HP 375 (reduced motion) - wordmark diam, ekor huruf utuh,
  kolom footer bertumpuk.
- Dokumentasi: PRD (P-017, P-026), VISUAL-DNA (sambungan, wordmark), LAYOUT
  (urutan, wireframe, catatan), DESIGN (komponen ajakan & footer, animasi).

### 2026-10-30 WIB - Revisi | Nama tebal terpotong di footer, judul ajakan tebal (arahan Jay)

- Jay: localhost dihidupkan lagi; footer lebih suka gaya https://outway.com/
  (nama tebal di paling bawah, sedikit terpotong) untuk "eAI Tech"; "Let's
  talk" dibuat tebal dan dinaikkan sedikit dari batas.
- Agent mengamati footer Outway (REF-004 di VISUAL-DNA).
- Dikerjakan: Sora 700 ditambahkan (Fontsource, `--font-weight-bold`);
  wordmark bergerak diganti nama "eAI Tech" Sora 700 selebar layar yang
  terpotong di dasar halaman; animasi marquee dihapus; judul ajakan Sora 700
  dengan jarak bawah 32/40/56 px; `pb-21` di `body` dihapus agar nama footer
  menempel di dasar halaman; pil bahasa footer tidak lagi melebar di HP.
- Usulan agent (perlu konfirmasi Jay): di HP, tombol WA menempel bergeser
  keluar layar saat nama di dasar footer terlihat, supaya tidak menutupinya
  (footer sudah punya link WhatsApp). Tanpa JS tombol tetap tampil.
- Bukti (Playwright): desktop 1440 - lebar nama 1370 dari 1425 px, bagian
  bawah huruf terpotong di dasar halaman, Sora 700 termuat, "Let's talk"
  tebal dengan jarak dari batas. HP 375 - nama terpotong di dasar, tombol WA
  menyingkir saat nama terlihat, tanpa geser horizontal. Localhost dihidupkan
  ulang (`npm run preview`, port 4321).
- Dokumentasi: VISUAL-DNA (REF-004, wordmark), PRD (P-017), LAYOUT (ajakan,
  footer), DESIGN (ketebalan font, komponen ajakan dan footer).

### 2026-10-30 WIB - Revisi | Tata letak menyeluruh (arahan Jay)

- Keputusan Jay: tombol WA menempel di HP dihapus permanen; footer oke; tag
  placeholder dihilangkan dari tampilan (A1: penanda tetap di kode); hero
  tanpa tombol WA; Services tanpa label kecil, "What we build" besar tebal;
  How it works semua diperbesar dan judul tebal; FAQ diperbesar; isi semua
  bagian "dipojokkan" - melebar hampir ke tepi layar, termasuk header dan
  footer (B1); judul Services, How it works, FAQ disamakan besar tebal (C1);
  area ajakan dipojokkan dan dipersempit setinggi contoh Aperios.
- Dikerjakan: `StickyWhatsApp.astro` dihapus; `PlaceholderTag.astro` kini
  hanya penanda tersembunyi; `--container-content` 120rem dan jarak tepi
  desktop 40 px; `SectionHeading.astro` jadi judul `text-display` Sora 700
  kapital; label Services dan judul lama Cara Kerja dihapus dari
  `content.ts` (judul Cara Kerja kini "How it works" / "Cara Kerja"); token
  `text-lead`; panel How it works 1:1 dengan cincin maks. 608 px, nomor
  `text-display`, judul langkah `text-hero`; FAQ kolom 1:1, pertanyaan
  `text-lead`, ikon lebih besar; ajakan padding atas 32/40 px dan jarak ke
  judul 64/80/96 px.
- Ditemukan dan diperbaiki: judul "WHAT WE BUILD" menimpa ekor logomark di
  kanan atas Services - judul dibatasi ±58% lebar di desktop (jadi dua baris)
  dan kartu desktop diperkecil ke 320 px agar muat setinggi layar.
- Konsekuensi dicatat: di HP tidak ada lagi tombol WA yang selalu terlihat;
  WA ada di kartu layanan, area ajakan dan footer. Gaya kapital diterapkan ke
  ketiga judul agar sama (keputusan agent mengikuti C1; mudah diubah).
- Bukti (Playwright): desktop 1440 - 0 tag placeholder tampil (11 penanda
  tersembunyi di DOM), 7 link WA, tanpa tombol menempel; Services, How it
  works (panel 146-754 px dari 900), FAQ, ajakan (tinggi 432 px) dicek. HP
  375 `/id/` - judul panjang tidak meluap, tanpa geser horizontal.
- Dokumentasi: PRD (BR-002, P-018), LAYOUT (revisi tata letak, HP), DESIGN
  (lebar isi, judul bagian, token).
- Lanjutan (2026-10-30): Jay menyatakan tata letak oke, tetapi kalimat
  ajakan, pertanyaan FAQ dan teks langkah How it works minta dikecilkan
  sedikit. Dikerjakan: token baru `text-subhead` (24 → 36 px) untuk kalimat
  ajakan, `text-numeral` (48 → 80 px) untuk nomor langkah, `text-lead`
  diturunkan ke 20 → 28 px; judul langkah `text-section`. Dicek di 1440 px:
  kalimat ajakan 32 px, pertanyaan FAQ 28 px, nomor 80 px, judul langkah
  48 px, deskripsi 28 px.
- Jay juga melaporkan "What we build" menimpa logomark 3D dan menawarkan gaya
  judul "FEATURED WORK" dari Aperios. Agent mengecek ulang build terbaru di
  1920 px: judul dua baris berakhir di x 800, ekor logomark mulai x 1134
  (tidak menimpa); screenshot Jay kemungkinan dari versi sebelum pembatasan
  lebar atau dari zoom browser berbeda. Usulan gaya judul ditanyakan ke Jay.
- Jay memilih A (Sora tipis + tebal). Dikerjakan: judul bagian di
  `content.ts` jadi dua baris (`title: [baris tipis, baris tebal]`, mis.
  "What we" / "build", "Yang kami" / "kerjakan", "How it" / "works",
  "Cara" / "kerja", "Good to" / "know", "Perlu" / "diketahui");
  `SectionHeading.astro` menampilkan baris 1 Sora 300 dan baris 2 Sora 700;
  dipakai di Services, How it works (fallback dan panel) dan FAQ. Bukti
  (Playwright 1440): judul Services berakhir di x 820, ekor logomark mulai
  x 851 (tidak menimpa), kartu muat setinggi layar.
- Jay (pesan saat agent bekerja): hover pada "Let's talk" berupa kotak hijau
  yang masuk dari kiri menutupi teks, berisi "Via WhatsApp" tebal.
  Dikerjakan di `Cta.astro`: kotak `accent` (aqua, warna hijau brand) berskala
  dari kiri saat area ajakan disorot atau difokus keyboard, teks "Via
  WhatsApp" Sora 700 muncul setelahnya; teks `via` ID/EN di `content.ts`.
  Bukti (Playwright): saat disorot kotak penuh (skala 1) dan teks terlihat.
- Dokumentasi: DESIGN (judul bagian, komponen ajakan), VISUAL-DNA (REF-003).
- Lanjutan (Jay): warna kotak hover harus sama dengan latar bagian gelap,
  teks diperbesar sampai tidak ada ruang kosong, teks putih bila bentrok.
  Dikerjakan: kotak `bg-dark-bg` (rgb 4,32,31 - sama dengan latar FAQ), teks
  `dark-text` (putih kehijauan), ukuran teks `14cqw` dari lebar kotak
  (container query) sehingga mengisi kotak. Bukti (Playwright 1440): EN
  mengisi ±97% lebar dalam kotak, ID ±99%, tinggi teks muat dalam kotak.
- Lanjutan (Jay): di versi ID ekor huruf "y" dan "g" pada "Ayo ngobrol"
  keluar dari kotak. Diperbaiki: kotak diperpanjang ke bawah 0,24em (dan ke
  atas 0,04em). Bukti (Playwright, /id/): ujung bawah huruf 2457 px, tepi
  bawah kotak 2478 px (tertutup).
- Jay menanyakan agar ganti bahasa tidak terasa memuat ulang halaman. Agent
  memberi dua pilihan (A: tukar isi di tempat via Astro ClientRouter; B:
  transisi halus antarhalaman via View Transitions CSS); Jay meminta
  penjelasan plus-minus masing-masing sebelum memilih.

### 2026-10-30 WIB - Revisi | Ganti bahasa tanpa memuat ulang, penanda cincin dihapus (arahan Jay)

- Keputusan Jay: pilihan A (tukar isi di tempat); 4 titik penanda di luar
  cincin How it works dihapus.
- Dikerjakan:
  - `Base.astro`: `<ClientRouter />` (Astro, dicek via Context7: event
    `astro:before-swap` / `astro:after-swap`, `navigate()`, `transition:persist`).
  - Visual hero (`data-ribbon-stage`) dan wadah ekor logomark di Services
    diberi `transition:persist`, jadi animasi titik tidak mulai ulang.
  - `src/scripts/motion.ts` jadi pengatur halaman: semua bagian dibersihkan di
    `astro:before-swap` dan dipasang ulang di `astro:after-swap` (sebelum
    halaman baru tampil); kelas `js` dipasang lagi. `reveal.ts`,
    `services-scroll.ts`, `process-scroll.ts` kini mengembalikan fungsi
    pembersih; `hero-ribbon.ts` tidak dipasang dua kali dan mencari garis
    batas Services ulang setiap ukur.
  - Skrip header dipindah ke `src/scripts/header-nav.ts`; baru:
    `src/scripts/lang-switch.ts` (simpan bagian + jarak di dalamnya saat klik,
    `navigate()` ke bahasa lain, kembalikan posisi setelah tukar).
  - Titik penanda tahap di `Process.astro` dihapus.
- Bukti (Playwright 1440): ganti bahasa di tengah Services - URL `/id/`,
  `lang="id"`, judul berganti, canvas hero elemen yang sama (tidak dibuat
  ulang), area menempel tetap aktif, tanpa error JS; di tengah How it works -
  jarak dalam bagian 1240 → 1239 px, langkah dan cincin di tahap yang benar
  (38 dari 64 titik); dari footer - footer tetap terlihat setelah tukar;
  link menu `#faq` tetap menggulir ke FAQ; tombol back browser kembali ke
  `/` lalu `/id/` dengan benar. Console: hanya `favicon.ico` 404.
- Ukuran JS: skrip halaman 29,3 KB gzip + ClientRouter 1,7 KB + klien
  transisi 4,2 KB (tambahan ±6 KB gzip).
- Catatan: karena header tidak menempel, tombol bahasa hanya terjangkau di
  atas halaman (header) atau di bawah (footer).
- Dokumentasi: PRD (FL-002, pilihan teknis dua bahasa), AGENTS (stack),
  DESIGN (tombol ID/EN, cincin).
- Lanjutan: Jay menyatakan ganti bahasa sudah pas. Jay melaporkan nama
  "eAI Tech" di footer hilang di tampilan HP (screenshot lebar ±466 px) dan
  ingin seperti footer Outway versi HP. Dicek di Playwright 466 px sampai
  dasar halaman: nama ada (lebar 451 dari 466 px, terpotong di dasar), tetapi
  jaraknya 64 px di bawah copyright sehingga mudah terlewat bila halaman
  belum digulir habis. Jarak dirapatkan: 32 px HP, 48 px tablet, 80 px
  desktop (seperti Outway, nama langsung di bawah baris copyright).
  Screenshot hasil dikirim ke Jay. Panel browser aplikasi tidak bisa digulir
  lewat skrip (diperlambat), jadi tampilan Jay di panel tidak bisa
  direproduksi langsung.
- Jay: "Oke sudah aman. Untuk sekarang semuanya udah aman. Sekarang lanjut ke
  fase 3 yaa?" (2026-10-30). Dicatat sebagai GATE 1 dan GATE 2 ditutup Jay
  setelah rangkaian revisi. Catatan: kemulusan animasi di HP kelas menengah
  sungguhan belum diuji agent (hanya emulasi).

### 2026-10-30 WIB - Development | Fase 3 SEO, performa & kesiapan rilis (menunggu tinjauan GATE 3)

- Dikerjakan:
  - Ikon: `public/favicon-32.png`, `icon-192.png`, `apple-touch-icon.png`
    (latar `dark-bg`) dibuat dari logomark; menghilangkan 404 favicon.
  - Gambar preview link 1200x630: `public/og-en.png`, `og-id.png` (latar
    `dark-bg`, logomark + "eAI Tech", judul hero Sora 700, kepanjangan logo),
    dirender dengan font Sora asli lewat Playwright.
  - `Base.astro`: canonical, hreflang en/id/x-default, Open Graph (judul,
    deskripsi, URL, gambar, locale en_US/id_ID), twitter card, ikon,
    theme-color.
  - `src/pages/sitemap.xml.ts` (dengan alternatif hreflang) dan
    `robots.txt.ts`.
  - `public/_headers`: header keamanan dasar + cache aset (format Cloudflare
    Pages/Netlify; hosting P-006 belum dipilih).
  - `astro.config.mjs`: `site: 'https://example.com'` - PLACEHOLDER, domain
    asli belum diketahui agent.
  - Perbaikan CLS: mode menempel kini dipasang lewat kelas `pin` di `<html>`
    oleh skrip `<head>` sebelum halaman tampil (varian Tailwind `pinned:`),
    menggantikan atribut `data-pinned` yang dipasang skrip modul setelah
    tampil. Dipasang ulang setelah ganti bahasa.
- Bukti GATE 3 (Lighthouse 13.6.0, simulasi HP, Chrome headless):
  - `/`: Performance 100, Accessibility 96, Best Practices 100, SEO 100
    (LCP 0,8 dtk, TBT 0 ms, CLS 0).
  - `/id/`: Performance 99, Accessibility 96, Best Practices 100, SEO 100
    (LCP 2,0 dtk, TBT 0 ms, CLS 0).
  - Sebelum perbaikan CLS: Performance 96/97, CLS 0,105 (area Services
    bergeser saat padding diganti skrip).
  - Accessibility 96: Lighthouse menilai judul bagian di bawah layar yang
    masih dalam keadaan samar (opacity 0,25 sebelum animasi muncul) sebagai
    kontras rendah; setelah muncul kontrasnya sesuai DESIGN.
  - Dicek ulang: area menempel di 0 px, kartu muncul bertahap, ganti bahasa
    memperbarui canonical, reduced motion tanpa kelas `pin` (daftar biasa).
- Belum bisa dicek: preview link WhatsApp sungguhan (butuh domain dan hosting
  yang bisa diakses WhatsApp); tag sudah benar di HTML.
- Dokumentasi: PRD bagian 4 (tabel performa/keamanan/SEO).
- GATE 3: Jay menyatakan "Lolos" di chat, 2026-10-30. Semua fase development
  (0-3) selesai. Rilis menunggu syarat AGENTS bagian 4 (domain/hosting P-006,
  P-001, P-002, P-008, P-016, persetujuan tim P-003). Belum ada commit.
- Dokumentasi: VISUAL-DNA (arahan Layanan), LAYOUT (Layanan desktop/HP),
  DESIGN (token `dark-card`, kartu layanan, pengecualian sudut) diperbarui.

## Indeks Persetujuan

| Objek/cakupan | Tautan entri persetujuan |
|---|---|
| Brief (Jay) | 2026-10-28 WIB - Discovery, Persetujuan Brief |
| Arsitektur (Jay) | 2026-10-29 WIB - Arsitektur, Persetujuan Arsitektur |
| VISUAL-DNA (Jay) | 2026-10-29 WIB - Reference, Persetujuan VISUAL-DNA |
| LAYOUT (Jay) | 2026-10-29 WIB - Layout, Persetujuan LAYOUT |
| DESIGN (Jay) | 2026-10-29 WIB - DESIGN, Persetujuan DESIGN |
| AGENTS (Jay) | 2026-10-29 WIB - Finalisasi, Persetujuan AGENTS |
| GATE 0 (Jay) | 2026-10-29 WIB - Development, Fase 0 Setup |
| GATE 1 dan GATE 2 (Jay) | 2026-10-30 WIB - pernyataan "semuanya udah aman" di akhir revisi footer HP |
| GATE 3 (Jay) | 2026-10-30 WIB - Development, Fase 3 SEO, performa & kesiapan rilis |
