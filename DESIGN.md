# DESIGN - Landing Page EAI Tech

## Metadata

- Tujuan: nilai token (warna, font, ukuran, jarak), komponen, interaksi dan
  animasi yang dipakai saat development.
- Batas: identitas dan palet sumber di product.md; arahan craft di VISUAL-DNA;
  susunan bagian di LAYOUT; aturan bisnis di PRD.
- Status spesifikasi: DISETUJUI Jay, 2026-10-29 (persetujuan Jay saja, bukan
  tim - P-003). Warna masih turunan sampel logo sampai P-011 terjawab;
  placeholder tetap tunduk BR-002. Riwayat pilihan:
  - Kelompok 1 (warna, font): dipilih Jay 2026-10-29 (P-019 s.d. P-022).
  - Kelompok 2 (ukuran, jarak, komponen, ikon): dipilih Jay 2026-10-29
    (P-023, P-024, Lucide; usulan agent lain di bagian 2-4 "pakai semua").
  - Kelompok 3 (animasi, interaksi): dipilih Jay 2026-10-29 (P-025, P-026;
    usulan agent di bagian 5.2-5.3 "pakai semua").
  - Token warna pendukung dan aturan gradasi di bagian 1: dipilih Jay
    2026-10-29 ("Pakai").
  - Seluruh isi disetujui Jay, 2026-10-29 (lihat PROGRESS).
- Rujukan langsung: product.md bagian 5; VISUAL-DNA bagian 2; LAYOUT S-001.
- Catatan sumber: semua warna turunan sampel pixel logo (product.md bagian 5),
  bukan token resmi. Bila pembuat logo memberi nilai resmi (P-011), token di
  sini diganti tanpa mengubah perannya.
- Peta dokumen: [AGENTS.md](AGENTS.md) bagian 1.

## 1. Warna

Rasio kontras dihitung agent (rumus WCAG 2.x) pada 2026-10-29.

| Token | Hex | Peran | Kontras |
|---|---|---|---|
| `accent` | `#02E6DF` | Aqua logo: tombol di bagian gelap, titik/pita, sorotan, panah tombol | 10,9:1 di `dark-bg`; 1,5:1 di `light-bg` (tidak untuk teks/latar tombol di bagian terang) |
| `accent-ink` | `#027A77` | Teal untuk link/teks aksen dan cincin fokus di bagian terang | 4,8:1 di `light-bg` |
| `light-bg` | `#F4F8F7` | Latar bagian terang (putih sedikit kehijauan) | - |
| `light-text` | `#0B1F1E` | Teks utama di bagian terang; latar tombol utama di bagian terang; teks di atas tombol aqua | 16:1 di `light-bg`; 10,9:1 di atas aqua |
| `light-muted` | `#4A5E5C` | Teks pendukung di bagian terang | 6,4:1 |
| `light-line` | `#D5E0DE` | Garis rangka dan pemisah di bagian terang | dekoratif |
| `dark-bg` | `#04201F` | Latar bagian gelap - teal sangat tua (P-019, Jay) | - |
| `dark-text` | `#E8F5F3` | Teks utama di bagian gelap | 15,3:1 |
| `dark-muted` | `#9AB3B0` | Teks pendukung di bagian gelap | 7,7:1 |
| `dark-line` | `#1E3634` | Garis rangka dan pemisah di bagian gelap | dekoratif |
| `dark-card` | `#0A2B29` | Latar kartu layanan (revisi 2026-10-29) | `dark-text` 13:1+, `dark-muted` ±7:1 |

- Gradasi aqua → teal pada pita dan titik mengikuti logo (`#73F9F0`,
  `#02E6DF`, `#029492`, `#025552`). Gradasi tidak dipakai untuk latar bagian
  (product.md prinsip "khas, tidak template").
- Tombol utama: di bagian terang tombol `light-text` dengan teks `dark-text`
  dan panah `accent`; di bagian gelap tombol `accent` dengan teks
  `light-text` (P-020, Jay).

## 2. Tipografi

- Font: **Sora** untuk judul dan isi, satu keluarga (P-021, P-022, Jay).
  Lisensi OFL, di-self-host (PRD bagian 4) lewat Fontsource, format WOFF2.
- Ketebalan yang dimuat: 300 (judul, mengikuti wordmark logo yang tipis),
  400 (isi), 500 (tombol dan label kecil), dan 700 (judul ajakan WA dan nama
  di footer; ditambahkan atas arahan Jay 2026-10-30). Empat file WOFF2 per
  subset Latin (masing-masing sekitar 15 KB), cukup untuk ID dan EN.

Skala ukuran (usulan; nilai HP → desktop, bertambah halus sesuai lebar layar):

| Peran | Ukuran | Tebal | Tinggi baris | Catatan |
|---|---|---|---|---|
| Judul raksasa (`text-display`) | 48 → 152 px | 300 | 0,95 | Jarak huruf -2%, huruf kapital; judul FAQ (revisi 2026-10-30) |
| Judul bagian | 32 → 48 px | 300 | 1,1 | Teks muncul saat scroll (kelompok 3) |
| Nama layanan / pertanyaan FAQ | 20 → 24 px | 400 | 1,3 | - |
| Teks isi | 16 → 18 px | 400 | 1,6 | Lebar baris maks. sekitar 65 karakter |
| Tombol | 15 px | 500 | 1 | - |
| Label kecil (nomor 01-05, label bagian) | 13 px | 500 | 1,4 | Huruf kapital, jarak huruf +6% |

- Layar besar/TV (LAYOUT adaptasi): ukuran dasar naik bertahap di lebar
  ≥1920 px, sekitar ×1,15.

## 3. Ukuran, Jarak & Bentuk (usulan)

- Satuan jarak dasar 4 px; jarak yang dipakai: 8, 12, 16, 24, 32, 48, 64,
  96, 128 px.
- Jarak atas-bawah per bagian: 128 px desktop, 96 px tablet, 80 px HP.
- Lebar isi (revisi Jay 2026-10-30, "dipojokkan"): hampir sampai tepi layar,
  jarak tepi 16 px HP, 32 px tablet, 40 px desktop; dibatasi 1920 px. Berlaku
  untuk semua bagian termasuk header dan footer. Garis rangka tidak dipakai lagi
  di bagian mana pun.
- Judul bagian Services, How it works, FAQ (revisi Jay 2026-10-30): sama -
  `text-display` huruf kapital, warna teks utama, dua baris: baris pertama Sora
  300, baris kedua Sora 700 (adaptasi gaya "FEATURED WORK" REF-003, tanpa
  serif; mis. "WHAT WE" / "BUILD"). Services di desktop
  dibatasi ±58% lebar agar tidak menimpa ekor logomark.
- Token tambahan (revisi Jay 2026-10-30, lalu dikecilkan sedikit):
  `text-lead` 20 → 28 px (pertanyaan FAQ, deskripsi langkah How it works),
  `text-subhead` 24 → 36 px (kalimat ajakan WA), `text-numeral` 48 → 80 px
  (nomor langkah How it works); judul langkah memakai `text-section`.
- Titik ganti layout: HP < 768 px, tablet 768-1199 px, desktop 1200-1919 px,
  layar besar ≥ 1920 px.
- Bentuk sudut (P-023, Jay): tombol berbentuk pil (bulat penuh, menggemakan
  lengkung pita logo); bidang lain bersudut tegas, selaras garis rangka.
  Pengecualian: kartu layanan rounded 24 px (revisi Jay 2026-10-29).
- Bayangan: tidak dipakai, kecuali tombol WA menempel di HP (bayangan tipis
  agar terpisah dari isi di bawahnya).

## 4. Komponen (usulan)

| Komponen | Spesifikasi usulan |
|---|---|
| Header | Tinggi 72 px desktop / 60 px HP. Logo: logomark + teks "eAI Tech" dari kode (Sora 300, warna ikut mode) sampai ada logo vektor resmi (P-011). Menu teks 15 px di kanan, link aktif bergaris bawah, lalu pil bahasa `( ID | EN )` dengan bahasa aktif terisi; tanpa tombol WA dan tanpa garis (revisi Jay 2026-10-29). Perilaku warna: P-024 |
| Tombol utama | Tinggi 48 px, jarak dalam kiri-kanan 24 px. Warna sesuai bagian (bagian 1). Panah ↗ bergeser 2 px saat hover |
| Tombol "Diskusikan ↗" | Tombol garis tepi 1 px `dark-line`, teks `dark-text`; saat hover terisi `accent` dengan teks `light-text` |
| Kartu layanan | Revisi Jay 2026-10-29: kartu rounded 24 px, rasio 3:4, latar `dark-card` (`#0A2B29`); lebar 78vw (maks. 288 px) HP, 320 px tablet, 352 px desktop; jarak 16/24 px. Atas gambar penuh (placeholder), bawah nomor `accent`, judul, deskripsi, tombol Discuss. Bagian menempel; kartu muncul satu per satu (opacity, naik 40 px, skala 0,96 → 1, 0,6 detik) dan deretan bergeser via Motion. Reduced motion/tanpa JS: deretan biasa yang bisa digeser |
| Cara Kerja (menempel) | Revisi Jay 2026-10-30: cincin 64 titik (`light-line` → `ribbon-3`, titik terdepan `ribbon-2` lebih besar) dan nomor di tengah (4 penanda tahap di luar cincin dihapus, arahan Jay 2026-10-30); terisi halus mengikuti scroll (Motion `scroll`). Kanan: label + placeholder, nomor `text-hero` 1-4 tanpa nol dan tanpa "/ 4", judul `text-section`, deskripsi. Pergantian teks: lama naik 16 px + memudar 0,22 detik, baru masuk dari bawah 0,3 detik; langkah terlewati saat scroll cepat dilompati. Lebar cincin 224 px HP, 288 px tablet, maks. 416 px desktop. Fallback: daftar langkah dengan ilustrasi titik |
| Item FAQ | Elemen buka-tutup bawaan HTML agar tetap jalan tanpa JavaScript (LAYOUT state). Revisi Jay 2026-10-30 (REF-003): pertanyaan `text-title` warna `dark-muted`, menjadi `dark-text` saat disorot; ikon Lucide `plus` berganti `minus` saat terbuka; jawaban `dark-text`; garis pemisah `dark-line` |
| Tombol ID/EN | Revisi Jay 2026-10-29/30: menukar isi halaman di tempat tanpa memuat ulang (crossfade bawaan ClientRouter, posisi scroll tetap, logomark hero tidak mulai ulang). Pil `( ID | EN )` bergaris tepi, bahasa aktif terisi (`light-text` di header terang, `accent` di footer gelap), teks 13 px |
| Tombol WA menempel (HP) | Lebar penuh dikurangi 16 px kiri-kanan, tinggi 52 px, latar `accent`, teks `light-text`, garis tepi 1 px `light-text` agar terlihat di bagian terang maupun gelap. Usulan agent 2026-10-30: bergeser keluar layar saat nama di dasar footer terlihat |
| Ajakan WhatsApp | Revisi Jay 2026-10-30 (REF-003): seluruh area satu link WA; kalimat `text-section` tipis + placeholder; panah garis SVG 64/96/128 px (stroke 2, bergeser saat disorot); judul `text-display` Sora 700 (revisi Jay 2026-10-30), tinggi baris 1, jarak bawah 32/40/56 px dari batas footer; saat disorot/fokus kotak `dark-bg` (sama dengan latar bagian gelap) masuk dari kiri (skala 0 → 1, `dur-base`) menutupi judul, lalu teks Sora 700 "Via WhatsApp" warna `dark-text` (putih kehijauan) muncul dan mengisi lebar kotak (`14cqw`, container query); kotak diperpanjang ke bawah 0,24em agar ekor huruf (y, g) tertutup (arahan Jay 2026-10-30); tidak ada di layar sentuh |
| Footer | Revisi Jay 2026-10-30 (REF-003, REF-004): latar `dark-bg`, tanpa garis rangka. Tiga kolom (label kecil `dark-muted`, link `text-title` tipis): navigasi, kontak (WhatsApp + placeholder BR-002), pil bahasa rata kanan; bertumpuk di HP. Garis putus-putus `dark-muted`/40. Kepanjangan logo `text-label` di tengah; baris copyright + "Back to top" dengan ikon `arrow-up`. Penutup: nama "eAI Tech" Sora 700, 23,4vw (hampir selebar layar), `dark-text`, jarak huruf -4%, wadah setinggi 0,72em sehingga bagian bawah huruf terpotong di dasar halaman |
| Fokus keyboard | Cincin 2 px berjarak 2 px: `accent` di bagian gelap, `accent-ink` di bagian terang |
| Ikon | **Lucide** (keputusan Jay, 2026-10-29). Panah tombol ↗ = `arrow-up-right`, ikon FAQ = `plus`. Ikon dekoratif disembunyikan dari pembaca layar. Lucide tidak memuat logo merek; logo WhatsApp saat ini tidak dipakai (tombol berupa teks + panah) |

- Header: tidak menempel dan selalu terang di atas hero (revisi Jay 2026-10-30;
  menggantikan P-024 yang mengikuti warna bagian).

## 5. Animasi & Interaksi

Library: **Motion** untuk animasi dan transisi (PRD bagian 4, disetujui di
Arsitektur; ditegaskan Jay 2026-10-29).

### 5.1 Animasi utama (pilihan Jay)

- Titik pita di hero (P-025, Jay): saat halaman dibuka, titik-titik berkumpul
  membentuk pita logomark (sekitar 1,5 detik), lalu terus bergerak pelan
  seperti bernapas. Tanpa reaksi kursor.
- Sambungan antarbagian (revisi P-026): Hero → Layanan memakai logomark
  meleleh yang ekornya ikut menempel di Layanan; Ajakan WA → Footer memakai
  judul raksasa yang duduk di batas. Pita garis yang tergambar mengikuti scroll
  tidak dipakai lagi.

### 5.2 Token & aturan (usulan)

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `dur-fast` | 150 ms | Hover tombol, panah bergeser |
| `dur-base` | 300 ms | Buka-tutup FAQ, pil bahasa |
| `dur-slow` | 700 ms | Teks muncul saat scroll |
| `ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Semua transisi masuk |

- Teks muncul saat scroll: judul bagian dan langkah Cara Kerja berubah dari
  samar (opacity 0,25) ke penuh sambil naik 16 px; berjalan sekali per elemen.
  Teks tetap ada di HTML sejak awal (aman untuk SEO dan bila JS gagal).
- Hover baris layanan dan tombol: perubahan warna latar dan geser panah,
  `dur-fast`. Tidak berlaku di layar sentuh.
- FAQ: tinggi jawaban `dur-base`; ikon `plus` berganti `minus` (REF-003).
- Header: tidak ada transisi warna lagi (header tidak menempel, revisi
  2026-10-30).

### 5.3 Teknik, performa & aksesibilitas (usulan)

- Titik dan pita digambar dengan Canvas 2D (tanpa library 3D). Motion
  mengatur pemicu scroll, kemunculan dan transisi (PRD bagian 4).
- Jumlah titik: maks. sekitar 800 di desktop, 300 di HP.
- Animasi berhenti saat hero di luar layar atau tab tidak aktif.
- Hanya properti `transform` dan `opacity` yang dianimasikan untuk elemen
  HTML, agar tetap mulus.
- Judul hero dan tombol WA tampil langsung tanpa menunggu animasi.
- Reduced motion (pengaturan perangkat): pita tampil diam dalam bentuk akhir,
  teks langsung terlihat, transisi hover/FAQ tanpa gerak (LAYOUT state).
- JavaScript gagal: pita diganti gambar diam; semua teks, link WA dan FAQ
  tetap berfungsi (LAYOUT state).
