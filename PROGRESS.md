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

- Diperbarui: 2026-11-06.
- Landing page, List Project dan Detail Project sudah dibangun dan menunggu
  tinjauan Jay. Data project ada di src/data/projects.ts dan masih dummy.
  Belum di-commit. Sisa: tinjau teks ID, ganti gambar demo hero sebelum rilis,
  perbarui og-en.png dan og-id.png.
- Catatan di bawah adalah riwayat 2026-11-02.
- Pemulihan shortcut lanjutan: Desktop dan pinned FigCraft - AI MCP kini
  memakai ~/.codex/helpers/Start-FigCraft-AI.ps1. Launcher mencari instalasi
  terbaru melalui registry/lokasi umum, membuka --control 7979 atau memakai
  sesi MCP aktif. Pembatas folder outputs EAI dihapus dari launcher umum;
  file proyek lain di D dapat dibuka. Uji fresh launch dan klik ulang lulus.
  mini-erp.figcraft berhasil dibuka via MCP tanpa perubahan desain; laporan
  work/figcraft-repair/launcher-report.json. Desain EAI tetap tersimpan di file utama.
- Jay menilai keseluruhan desain sudah bagus, lalu meminta eksperimen
  How It Works vertikal pada duplikat desain 03. Versi baru sudah dibuat:
  `09 · How It Works · Vertical Flow · English` (5643), x=9840,
  1440 × 8211,91, di kanan detail 08 dalam file dan kanvas yang sama.
- Section proses baru (5867) setinggi 2176 px: Start with an idea →
  Discover → Plan → Create → Review & Refine → Deliver. Kartu bergantian
  kiri/kanan; empat kategori layanan bercabang di bawah Plan dan menyatu
  kembali sebelum Create. Latar putih eAI, Instrument Serif + Manrope.
- Desain 03 tetap memakai cincin. Enam frame lama, halaman komponen dan
  34 variable lama identik dengan snapshot sebelum eksperimen. Section lain
  pada duplikat sama secara visual; FAQ/kontak/footer bergeser 1276 px.
- FAQ duplikat memakai collection tersendiri dan variable 35–44. Uji native
  semua jawaban terbuka/tertutup lulus; FAQ asli tetap tertutup. Tujuh flow,
  0 target terputus, 0 font hilang. Tidak mengklaim uji klik GUI.
- Preview How-It-Works-09-Vertical-Flow-EN.png dan
  Design-09-Vertical-Flow-Overview-EN.png; report work/process-vertical-09/.
  File disimpan dan kanvas fokus ke section baru. Ini komposisi FigCraft;
  animasi scroll dengan Motion menunggu implementasi website. Copy proses
  ditandai DRAFT; P-008 final tim tetap terbuka. Lanjut tinjauan Jay atas 09.
- Detail Project sudah dibuat atas permintaan Jay, terinspirasi struktur
  GG Design. Frame `08 · Project Detail · Studio Workspace · English`
  (5222), x=8200, 1440 × 5517,34, di kanan List Project dalam file kerja
  EAI-Tech.figcraft yang sama. Inggris/desktop, memakai label Concept Project.
- Koreksi Jay: latar utama memakai putih eAI Tech #F4F8F7, menggantikan
  usulan hijau gelap. Teks/garis/tombol disesuaikan; Instrument Serif dan
  Manrope dipertahankan. Struktur: hero deskriptif, chip layanan, cover,
  tiga baris cerita, galeri, Next Project, kontak dan footer.
- Studio Workspace pada homepage 03 dan List Project membuka detail 08.
  Tersedia Back to Projects, Contact, Home, Back to top dan empat preview
  gambar yang bisa ditutup. Morrow di Next Project baru concept preview,
  belum halaman detail lengkap. Semua karya dan cerita tetap konsep demo.
- Verifikasi native: 11 tautan preview, tombol Close/Escape, target navigasi,
  enam flow, serta 0 font hilang. Tidak mengklaim uji klik GUI. Bukti di
  work/project-detail/report.json; preview Project-Detail-Studio-Overview-EN.png.
  Website tidak diubah. Detail 08 termasuk desain yang dinilai bagus oleh Jay.
- Update FigCraft 0.14.0 memindahkan aplikasi ke
  C:\Program Files\ArtCraft\FigCraft. Shortcut Desktop FigCraft - AI MCP
  dan command MCP di ~/.codex/config.toml sudah diperbarui. Aplikasi dibuka
  kembali dengan port 7979; native MCP berhasil membaca file kerja. Font
  pilihan dipasang per pengguna. Backup dan laporan work/figcraft-repair/.
- Halaman List Project sudah dibuat atas permintaan Jay, dalam file dan
  kanvas workspace yang sama: frame `07 · Project List · English` (4958),
  x=6560, 1440 × 2827,34 pada filter All. Letaknya di kanan desain 06.
  Navbar, judul Project, breadcrumb Home, galeri dua kolom, kontak dan footer
  memakai Instrument Serif + Manrope serta palet yang sama.
- Galeri menggunakan tiga konsep yang sudah ada (Studio Workspace, Morrow,
  Forma Material Studies). Filter aktif: All Projects (3), Digital Products
  (1), Design & Visualization (2), sesuai kategori yang punya karya. Hasil
  dan tinggi halaman berubah mengikuti filter. Komponen 4957, instance 5012.
- View All pada homepage 03 sekarang navigate ke List Project; logo/Home
  kembali ke homepage, menu Services/How it works/FAQ kembali ke section
  terkait, Back to top menuju navbar List. Kartu/judul Studio Workspace
  sekarang membuka detail 08. Halaman baru masih Inggris/desktop.
- Verifikasi saat pembuatan List: native kategori, layout dan target
  interaksi lulus; 0 font hilang, 0 target terputus, lima flow saat itu.
  Desain 01/02/06 identik; homepage 03 identik selain nama/interaksi View All;
  lima komponen lama identik. Detail 08 menambah navigasi Studio dan satu flow.
  Tidak mengklaim uji klik GUI. Report work/project-list/report.json,
  preview Project-List-EN.png dan Project-List-Overview-EN.png. File disimpan.
- FAQ desain 03 sudah diubah menjadi lima pertanyaan pilihan Jay, dalam
  bahasa Inggris mengikuti frame 03. Biaya/durasi dihapus dari FAQ ini.
  Tata letak pertanyaan panjang dibungkus rapi; kelima accordion mempunyai
  pasangan variable terpisah agar tidak memengaruhi desain lain. Jawaban
  masih placeholder karena belum dibahas/disetujui.
- Preview FAQ-03-Five-Questions-EN.png. FAQ tertutup sekarang 1162,56 px,
  total desain 03 = 6935,91 px; kontak/footer bergeser 181,25 px. Isi section
  lain, desain 01/02/06, halaman komponen dan 24 variable lama tidak berubah.
  Verifikasi binding buka/tutup dan layout kelima jawaban lulus; uji klik UI
  tidak diklaim karena sesi Present sempat tidak memiliki viewport valid.
  Laporan di work/faq-draft/. File kerja tunggal disimpan; website tidak diubah.
- Jay meminta ide galeri List Project dituangkan ke FigCraft. Layout dua
  kolom frame 07 sudah dinilai pas oleh Jay untuk dilanjutkan.
  Referensi alternatif daftar interaktif Aperios /projects tetap catatan
  eksplorasi. Draft detail Studio Workspace mengikuti arah GG Design pilihan Jay.
- Jay memilih How It Works versi cincin sebelumnya dan meminta pengembalian.
  Percobaan diagram flow sudah dibatalkan dengan 12 undo yang diverifikasi
  terhadap riwayat; seluruh halaman workspace, halaman komponen, dan empat
  desain identik dengan snapshot sebelum percobaan flow. Section 1949 tetap
  1440 × 900 di y=3720, dengan state cincin lama beserta interaksinya.
- Empat klik cincin (1 → 2 → 3 → 4 → 1) lulus. 0 font hilang. Preview
  aktif How-It-Works-03-Ring-EN.png, laporan work/process-restore/. PNG flow
  tetap arsip eksperimen; komponen flow tidak lagi ada di kanvas aktif.
  What We Do dan Project dipertahankan. File FigCraft yang sama disimpan.
- FAQ: Jay memilih lima pertanyaan dari usulan sebelumnya, nomor 1/2/3/5/8:
  Apa itu eAI Tech; konsultasi saat ide belum matang; beberapa layanan dalam
  satu proyek; persiapan sebelum proyek dimulai; cara mulai bekerja sama.
  Pertanyaan biaya dan durasi tidak dimasukkan. Pertanyaannya sudah dipasang
  di FigCraft 03; jawaban belum disusun/disetujui, website belum diubah.
  Materi final tim tetap mengikuti P-008.
- Draft section `Project` sudah dibuat hanya di desain 03, setelah What We
  Do dan sebelum How It Works, sesuai permintaan Jay. Tiga konsep: Studio
  Workspace (utama lebar), Morrow (poster kiri), Forma Material Studies
  (render 3D kanan). Pasangan bawah berbeda ukuran dan bergeser vertikal;
  semuanya diberi label Concept Project. Preview `Project-03-Homepage-EN.png`.
- Project berukuran 1440 × 1920, di y=1800. Menu Work dan CTA hero View our
  work sudah scroll ke section baru. Hover ketiga cover aktif (zoom 1,8%,
  SmartAnimate 240 ms). View All sudah menuju frame List Project 07.
  Reveal mengikuti scroll belum disimulasikan.
- Pemeriksaan Project: empat tautan navigasi, tiga render hover, dan CTA
  layanan ke kontak lulus. Desain 01/02/06 serta What We Do tidak berubah;
  isi section bawah 03 bergeser 1920 px saat Project ditambahkan. Setelah
  revisi FAQ, total tinggi 03 sekarang 6935,91 px.
  0 font hilang, 0 target terputus. Laporan di work/project-draft/. File
  kerja FigCraft tunggal disimpan; website belum diubah.
- Jay menyetujui posisi portofolio setelah What We Do dan sebelum How It
  Works. Judul yang diminta `Project`, dengan beberapa karya pilihan dan
  tombol `View All` menuju halaman khusus Project yang akan dibahas nanti.
  Pembahasan saat ini khusus section di halaman utama; sudah dicoba pada
  FigCraft desain 03, belum diterapkan ke website.
- Referensi Project: Aperios Design diperiksa langsung pada 2026-11-01,
  melalui web dan browser 1440 × 900. Featured Work memakai gambar pertama
  besar, pasangan visual asimetris/berbeda tinggi, judul/ringkasan di bawah,
  dan View all work di akhir. Usulan adaptasi eAI Tech: tiga karya (satu
  utama lebar, dua pendamping asimetris), latar terang, judul Project dengan
  Instrument Serif dan metadata Manrope. Jay meminta rancangan ini dicoba;
  tiga proyek saat ini merupakan contoh konsep, belum pilihan karya final.
- Penyempurnaan What We Do pada desain 03 sesuai anotasi Jay: teks sekunder
  di bawah empat kategori dihapus; nomor 01–04 diperbesar menjadi 38 px dan
  disejajarkan dengan judul. Sembilan label layanan sekarang memakai ikon
  vector native yang sesuai, tinggi pil 36 px, teks 12 px, lebar diukur dari
  font agar tetap satu baris. Diterapkan pada keempat state kategori.
  Preview utama dan empat state diperbarui. Lima klik kategori + CTA tetap
  lulus; desain lain dan section lain pada 03 tetap identik. File kerja sama.
- Jay menyetujui judul section `What We Do` lalu meminta draft tampilannya
  dicoba hanya pada desain `03 · New Hero · English`. Section layanan 03
  sekarang memakai empat kategori di kiri, visual/rincian/layanan/CTA di kanan:
  Digital Products, AI & Automation, Design & Visualization, serta Content &
  Social Media. Kategori bisa diklik di Present dengan dissolve 180 ms;
  Digital Products terbuka secara default. Penamaan dan copy masih draft.
- Draft What We Do tersimpan dalam file kerja FigCraft tunggal. Section
  tetap 1440 × 900; hero dan section lain pada 03, serta seluruh desain
  01/02/06, terbukti identik dengan snapshot sebelum revisi. Lima klik kategori
  (empat state dan kembali ke awal) serta CTA ke kontak berhasil diuji.
  Preview `outputs\EAI-Tech\Services-03-What-We-Do-EN.png`; laporan di
  `work\services-draft\`. Website belum diubah.
- Pembahasan beralih ke Layanan; eksplorasi hero dihentikan sementara sesuai
  arahan Jay. Empat tambahan yang disebut Jay: Desain Grafis, 3D, editing
  (multimedia), dan social media consulting. Cakupan rinci dan nama publik
  belum dikunci; usulan nama sudah dicoba pada draft FigCraft desain 03,
  belum diterapkan ke kode website.
- Hero awal/kandidat 1: Jay memilih mencoba kolase hasil karya, lalu meminta
  penerapannya di FigCraft beserta preview efek cursor. Hero awal ID dan EN
  sudah diperbarui menjadi kolase website, aplikasi, dan studi bentuk 3D,
  seluruhnya di dalam hero. Snapshot logo yang melintasi Hero → Layanan
  dihapus dari kedua versi. Judul, navbar, font, dan section lain dipertahankan.
- Hover kolase sudah aktif di Present: tiap panel terangkat, membesar 2%,
  sedikit berubah kemiringan dan bayangannya menguat. Empat state komponen:
  Rest/Website/App/3D, transisi 220–240 ms. Uji akhir 12/12 lulus di EN dan ID,
  termasuk perpindahan langsung antar-panel dan reset pada celah/keluar.
  Parallax kontinu mengikuti posisi cursor masih untuk implementasi website.
- Master komponen disimpan pada halaman `Components · Hero Collage` dalam
  file yang sama; keempat desain pembanding tetap di satu halaman workspace.
  Preview `Hero-01-Collage-ID.png`, `Hero-01-Collage-EN.png`, dan
  `Hero-01-Collage-Comparison.png`. Render 3D dan prompt ada di Assets/
  hero01-ceramic-study-v1*. Seluruh karya ditandai sebagai konsep demo.
- Hero pilihan Jay untuk dilanjutkan: nomor 6, foto penggunaan aplikasi.
  Frame sekarang bernama `06 · Hero 03 · Rounded Product · English`.
  Versi 4 (studio gelap) dan 5 (studio terang) sudah dihapus dari kanvas
  beserta flow-nya, sesuai permintaan Jay.
- Bentuk versi 6: halaman putih dengan navbar 100 px sebagai saudara hero,
  di luar bidang rounded. Foto, fade, headline, paragraf, dan CTA berada di
  frame dalam 1376 × 756, radius 32 px, margin sisi 32 px. Total navbar dan
  area hero tetap 1440 × 900. Teks kiri, Instrument Serif + Manrope, CTA
  tanpa ikon panah. Preview terkini `outputs\EAI-Tech\Hero-06-Rounded-EN.png`.
- Aset versi 6: `outputs\EAI-Tech\Assets\hero03-lifestyle-light-v1.png`,
  dengan prompt pada `hero03-lifestyle-light-v1-prompt.md`. Foto menampilkan
  tangan menggunakan aplikasi demo di sisi kanan. Aset dan PNG studio lama
  tetap sebagai arsip; galeri hanya eksplorasi gambar. Website belum diubah.
- File kerja FigCraft tunggal: `C:\Users\giana\Documents\Codex\2026-10-31\v\outputs\EAI-Tech\EAI-Tech.figcraft`.
  Halaman `EAI Tech · Design Workspace` berisi empat desain penuh berdampingan:
  `01 · Hero 01 · Collage · Indonesia`, `02 · Hero 01 · Collage · English`,
  `03 · New Hero · English` (kandidat 2), dan
  `06 · Hero 03 · Rounded Product · English` (pilihan yang dilanjutkan).
  Keempatnya memakai Instrument Serif + Manrope. Nomor 6 dipertahankan
  sebagai penanda versi, posisinya sekarang x=4920 setelah frame ketiga.
  Revisi berikutnya dilanjutkan di file dan kanvas ini; tidak dibuat file
  kerja terpisah untuk setiap percobaan. File lama tetap sebagai arsip.
- Hero: kandidat 2 (komposisi tengah, referensi Northeast Tomato). Jay
  menyetujui HP di kiri dan laptop di kanan; untuk contoh FigCraft memakai
  konsep demo dengan screenshot dari internet sementara. Draft **Inggris
  saja** sudah dibuat dan digabung ke frame ketiga pada kanvas kerja,
  acuan satu layar desktop 1440 × 900 termasuk navbar.
- Navbar hero baru: Jay memilih logo di tengah mengikuti referensi Tomato.
  Judul hero opsi A dipilih untuk dicoba: `Design meets technology.` (EN)
  dan `Desain bertemu teknologi.` (ID). Teks pendukung EN/ID sudah dipilih.
  CTA Discuss your project dan View our work disetujui tanpa ikon panah;
  pada tahap ini hero baru hanya diterapkan ke draft FigCraft Inggris.
- Keputusan font Jay (2026-11-01): Instrument Serif + Manrope untuk EN dan ID.
  Kedua versi desain awal serta salinan hero baru di FigCraft sudah memakai
  pasangan ini dan disimpan. Implementasi font pada kode website masih memakai Sora.
- Persiapan revisi landing page: seluruh delapan dokumen Markdown proyek
  sudah dibaca. Tindak lanjut: menerima rincian revisi pertama dari Jay;
  belum ada keputusan desain baru pada tahap pembacaan ini.
- Salinan desain desktop dan prototipe FigCraft EN/ID dibuat dari localhost:4321,
  tersimpan di `C:\Users\giana\Documents\Codex\2026-10-31\v\outputs\EAI-Tech\`.
  Titik lanjut development/rilis website tetap mengikuti daftar di bawah.
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
- Commit (atas permintaan Jay, 2026-10-30): commit pertama `5cef472` di branch
  `main` repo lokal - 54 file (dokumen planning, situs Astro, aset publik).
  Tanpa remote (P-004). Entri PROGRESS ini sendiri ditulis sesudah commit,
  jadi belum ikut di dalamnya.
- Push (atas permintaan Jay, 2026-10-30): remote `origin` =
  https://github.com/jayyeunnn/eaitech-landingpage.git (repo kosong sebelum
  push); `main` dipush dan melacak `origin/main`. Visibilitas repo (publik/
  privat) tidak dicek agent (`gh` tidak terpasang). PRD P-004 dan AGENTS
  bagian 5 diperbarui. Catatan PROGRESS/PRD/AGENTS sesudah commit `5cef472`
  belum di-commit.
- Koreksi (Jay, 2026-10-30): tidak boleh ada nama AI agent di commit maupun
  contributor. Fakta: aturan itu tidak tercantum di AGENTS.md (agent
  memeriksa) dan skill freelance-project-planning tidak tersedia di sesi ini;
  commit `5cef472` memuat `Co-Authored-By: Claude`. Atas persetujuan Jay:
  pesan commit diubah tanpa baris itu (commit baru `364dde3`, isi file/tree
  identik `1c82296`), lalu force-push dengan pengaman lease ke `origin/main`.
  AGENTS.md aturan 11 ditambahkan agar tidak terulang. GitHub mungkin perlu
  waktu untuk memperbarui daftar contributor.
- Koreksi lanjutan (2026-10-30): agent membaca skill freelance-project-planning
  dari disk (`C:\Users\giana\.claude\skills\freelance-project-planning\`) -
  sebelumnya keliru disebut tidak tersedia. Skill mengatur identitas Git
  `jayyeunnn` / email privaterelay, larangan atribusi AI, Conventional
  Commits, larangan force-push tanpa permintaan; template AGENTS-nya punya
  bagian "Git dan contributor" yang tidak terbawa saat finalisasi karena
  skill tidak dibaca. Jay mengonfirmasi dan meminta kedua commit ditulis ulang.
  Dikerjakan: `git config --local` = jayyeunnn / privaterelay (global tidak
  diubah); AGENTS.md aturan 11 dilengkapi; kedua commit dibuat ulang dengan
  identitas dan pesan Conventional Commits, isi file sama, lalu force-push
  dengan pengaman lease.
- Celah lain terhadap skill (belum dikerjakan, dicatat): tasklist ber-ID T-xxx
  dengan fase QA/Quality/Security/Release, README, foundation HTML di
  `previews/templates/`, Humanizer untuk teks, diagram Archify saat rilis.
- Dokumentasi: VISUAL-DNA (arahan Layanan), LAYOUT (Layanan desktop/HP),
  DESIGN (token `dark-card`, kartu layanan, pengecualian sudut) diperbarui.

### 2026-11-01 WIB - Salinan desain dan prototipe FigCraft

- Permintaan Jay: melihat landing page localhost:4321 dan memindahkan desainnya
  ke FigCraft, termasuk prototipe yang bisa diklik.
- Hasil: `EAI-Tech-Prototype.figcraft`, dua frame desktop EN/ID (lebar 1440 px,
  viewport prototipe 900 px), enam bagian per bahasa, teks dan elemen UI native.
  PNG seluruh halaman dan per bagian, font Sora beserta OFL, serta PETUNJUK.md
  tersedia di folder output yang disebut dalam petunjuk lanjut aktif.
- Interaksi: navigasi scroll ke bagian; lima kartu layanan dapat digeser
  horizontal; cincin proses diklik untuk berganti empat tahap; FAQ membuka dan
  menutup jawaban dengan auto layout; ID/EN; tautan WhatsApp; kembali ke atas.
- Adaptasi: sticky scroll Layanan menjadi horizontal scroll; perubahan tahap
  Cara Kerja menjadi klik cincin. Ilustrasi titik/pita canvas memakai gambar
  diam. Lingkaran proses tetap berupa elemen vektor. Scope desktop, belum
  salinan layout mobile.
- Pemeriksaan: tampilan dibandingkan dengan browser, file disimpan dan dibuka
  kembali, 39/39 pemeriksaan interaksi lulus melalui mode Present aplikasi FigCraft. Nomor WA
  placeholder sumber dipertahankan; tidak ada pesan yang dikirim.
- Website dan kode aplikasinya tidak diubah. Tidak ada commit/push.

### 2026-11-01 WIB - Persiapan revisi landing page

- Permintaan Jay: masuk ke folder EAI Tech dan membaca file Markdown sebelum
  membahas revisi landing page.
- Dibaca lengkap: AGENTS.md, PROGRESS.md, PRD.md, product.md, VISUAL-DNA.md,
  LAYOUT.md, DESIGN.md dan CLAUDE.md.
- Catatan konteks: sejumlah ringkasan/wireframe lama masih menyebut default
  Indonesia, garis rangka dan tombol WA menempel. Riwayat revisi Jay terakhir
  menetapkan default Inggris, penghapusan garis rangka, header tidak menempel,
  dan penghapusan permanen tombol WA menempel di HP.
- Belum ada implementasi revisi atau perubahan keputusan desain. Tindak
  lanjut: rincian revisi dari Jay. Tidak ada commit/push.

### 2026-11-01 WIB - Diskusi revisi | Referensi tipografi

- Jay menyampaikan rencana revisi font, penambahan portofolio, isi FAQ,
  pengelompokan layanan (termasuk desain dan 3D), What We Build dan hero;
  rincian masing-masing belum ditentukan. Jay memilih membahas font dahulu.
- Referensi https://hyperliquid.xyz/ dan https://outway.com/ diperiksa melalui
  browser dan computed styles pada 2026-11-01.
- Hyperliquid: h1 Teodor Light 300; paragraf hero ABC Diatype Regular.
  Outway: judul hero Affairs; beberapa label/judul kategori JetBrains Mono;
  stylesheet juga memuat Perfektta dan Plus Jakarta Sans pada sejumlah UI.
- Pembahasan awal: pembagian peran serif untuk judul ekspresif dan sans-serif
  untuk teks/UI. Dua keluarga font menjadi usulan, belum keputusan Jay.
- Tindak lanjut: pilih arah karakter dan contoh pasangan font sebelum
  menerapkannya. Aturan font Sora saat ini belum diganti. Tidak ada commit/push.

### 2026-11-01 WIB - Perbandingan font di FigCraft

- Arahan Jay: cukup dua contoh, pasangan pertama pada versi Indonesia dan
  pasangan kedua pada versi Inggris; bukan empat contoh.
- Dibuat halaman `Perbandingan Font · 2 Contoh` dalam salinan file FigCraft.
  Indonesia: Instrument Serif (judul besar) + Manrope (teks/UI). Inggris:
  DM Serif Display (judul besar) + DM Sans (teks/UI). Halaman Sora awal tetap
  tersedia dalam file perbandingan.
- Diterapkan ke contoh seluruh landing page; 30 layer judul memakai serif,
  162 layer teks/UI memakai sans. Isi, ukuran dan posisi dasar dipertahankan.
- Pemeriksaan: render hero ID/EN ditinjau; font report menunjukkan 0 font
  hilang. Halaman perbandingan dibuka dan area hero kedua contoh diperbesar.
- Hasil: `C:\Users\giana\Documents\Codex\2026-10-31\v\outputs\EAI-Tech-Font-Comparison\`:
  file `.figcraft`, PNG hero/seluruh halaman, font dan lisensi, petunjuk;
  ZIP tersedia di folder outputs. Pasangan final menunggu pilihan Jay.
- Kode website belum diganti. Tidak ada commit/push.

### 2026-11-01 WIB - Keputusan font | Instrument Serif + Manrope

- Jay memilih Instrument Serif + Manrope dan meminta versi Inggris juga
  menggunakan pasangan tersebut.
- FigCraft: 15 layer judul display Inggris diubah ke Instrument Serif dan
  82 layer teks/UI ke Manrope. Versi Indonesia sudah memakai pasangan ini.
  Halaman diubah menjadi `Pilihan Font · Instrument Serif + Manrope`.
- File .figcraft, PNG hero/seluruh halaman EN/ID, petunjuk dan ZIP pada folder
  output EAI-Tech-Font-Comparison diperbarui. Versi Inggris diperbesar untuk
  ditinjau di kanvas.
- Pemeriksaan: seluruh layer teks pada kedua frame hanya memakai Instrument
  Serif dan Manrope; font report menunjukkan 0 font hilang; render hero EN
  ditinjau.
- DESIGN bagian 2 dan identitas font di product.md diperbarui sebagai
  keputusan desain. Penerapan font baru ke kode website belum dikerjakan
  pada langkah FigCraft ini. Tidak ada commit/push.

### 2026-11-01 WIB - Diskusi hero | Kandidat 2 dan isi aset

- Jay mengajukan tiga kandidat: hero lama dengan logomark utuh di hero dan
  efek cursor; komposisi tengah dengan aset samping seperti Northeast Tomato;
  background gambar penuh seperti Outway. Jay memilih mengeksplorasi kandidat 2.
- Referensi https://northeasttomato.com/ diperiksa langsung di browser:
  pergerakan cursor mengubah translasi/rotasi dua aset; scroll menggesernya
  ke luar dengan perpindahan vertikal berbeda.
- Jay kurang menyukai usulan objek 3D abstrak/logomark di kanan dan bertanya
  tentang HP di kiri, laptop di kanan, beserta isi layarnya.
- Jenis perangkat, isi layar, karya portofolio dan efek final belum dipilih.
  Arah diskusi: mockup menampilkan hasil karya atau satu produk contoh yang
  mempunyai tampilan mobile dan desktop. Belum ada implementasi hero baru.
- Tidak ada commit/push.

### 2026-11-01 WIB - Hero | Aset demo dan pembahasan navbar

- Jay memilih konsep demo dahulu. Untuk percobaan visual di FigCraft,
  screenshot dari internet boleh digunakan sementara sebagai isi mockup.
- Penempatan HP di kiri dan laptop di kanan disetujui Jay. Screenshot dan
  isi produk spesifik belum ditentukan; aset tersebut tidak dianggap karya
  atau proyek klien eAI Tech.
- Jay meminta pembahasan berurutan dari navbar, lalu bagian hero di bawahnya.
  Susunan navbar dan copy hero baru masih dalam pembahasan. Belum diterapkan.
- Tidak ada commit/push.

### 2026-11-01 WIB - Hero | Logo navbar di tengah

- Jay menyetujui posisi logo navbar di tengah mengikuti referensi Northeast
  Tomato. Usulan susunan yang dibahas: Services/Work di kiri, logo eAI Tech
  di tengah, How it works/FAQ dan ID/EN di kanan.
- Jay meminta melanjutkan ke pembahasan teks hero. Copy utama dan pendukung
  masih berupa usulan; belum ada implementasi hero baru atau commit/push.

### 2026-11-01 WIB - Hero | Judul opsi A untuk dicoba

- Jay memilih mencoba opsi A: `Design meets technology.` (EN) dan
  `Desain bertemu teknologi.` (ID), untuk hero kandidat 2 dengan teks tengah.
- Bentuk usulan dua baris: `Design meets` / `technology.` dan
  `Desain bertemu` / `teknologi.`, memakai Instrument Serif.
- Pilihan ini mencakup judul. Teks pendukung dan CTA masih dalam pembahasan;
  belum ada implementasi hero baru, commit atau push.

### 2026-11-01 WIB - Hero | Teks pendukung draft dipilih

- Jay menyetujui teks pendukung yang diusulkan untuk draft hero.
- EN: `From websites and apps to 3D visuals and AI-powered systems, we bring your ideas to life.`
- ID: `Dari website dan aplikasi hingga visual 3D dan sistem berbasis AI, kami mewujudkan idemu.`
- Presentasi yang dibahas: Manrope, rata tengah, sekitar dua-tiga baris di
  bawah judul Instrument Serif. Berikutnya membahas CTA sebelum menyusun
  percobaan hero di FigCraft. Belum ada commit/push.

### 2026-11-01 WIB - FigCraft | Draft hero kandidat 2, Inggris saja

- Jay menyetujui dua CTA dengan teks tanpa ikon panah dan meminta percobaan
  hero di FigCraft dalam bahasa Inggris saja, lebih tinggi dari hero lama
  agar tampil satu layar penuh.
- Hasil: halaman `Hero 02 · English`, hero 1440 × 900 termasuk navbar.
  Logo di tengah, menu Services/Work di kiri dan How it works/FAQ/ID-EN di
  kanan. Judul Instrument Serif `Design meets technology.` di tengah;
  paragraf Manrope dan CTA sesuai copy yang dipilih.
- Mockup HP kiri dan laptop kanan dibuat dari bentuk native dengan screenshot
  publik sementara: produk Saleor storefront dan dashboard shadcn/ui.
  Sumber dicatat di SOURCES.md. Screenshot tidak dianggap proyek eAI Tech.
- Ekor logo lama pada What We Build pada salinan English ini dihapus agar
  sesuai konsep baru. Halaman di bawah hero mengikuti prototipe sebelumnya.
- Disimpan ke folder output `EAI-Tech-Hero-EN`: .figcraft, PNG hero, font,
  lisensi, screenshot referensi, petunjuk dan ZIP. Area hero diperbesar pada
  kanvas untuk tinjauan Jay.
- Pemeriksaan: render ditinjau, ukuran hero 1440 × 900, 0 font hilang;
  5/5 uji lulus (viewport, navigasi Services/Process/FAQ, dialog WhatsApp).
  Tidak ada pesan yang dikirim.
- Cakupan draft: efek cursor/parallax belum disimulasikan; Work/View our work
  masih visual menunggu section portofolio; hero baru belum dibuat dalam
  bahasa Indonesia. Kode website belum diubah. Tidak ada commit/push.

### 2026-11-01 WIB - FigCraft | Satu file dan satu kanvas kerja

- Jay meminta desain awal Indonesia/Inggris yang sudah memakai font terpilih
  digabung dengan desain hero baru Inggris, ditempatkan berdampingan.
- Dibuat file kerja utama `outputs\EAI-Tech\EAI-Tech.figcraft`, dengan satu
  halaman `EAI Tech · Design Workspace`. Urutan kiri ke kanan: desain awal
  Indonesia, desain awal Inggris, desain hero baru Inggris. Lebar masing-masing
  1440 px, jarak 200 px. Ketiganya memuat seluruh section sampai footer.
- Dua halaman lama yang tidak diperlukan dihapus dari salinan master, setelah
  memastikan semua tujuan interaksi berada dalam tiga frame yang dipertahankan.
  Tiga flow Present tetap tersedia. File sumber lama tidak dihapus.
- Pemeriksaan: jumlah dan ID seluruh layer dalam ketiga desain sama sebelum
  dan setelah pemindahan; posisi relatif anak, ukuran, teks, font, dan definisi
  interaksi tidak berubah. Ketiganya hanya memakai Instrument Serif + Manrope,
  font report menunjukkan 0 font hilang. Render gabungan ditinjau dan tersimpan
  sebagai `EAI-Tech-Three-Designs.png`.
- Kartu Recent Files EAI lama yang berulang dibersihkan tanpa menghapus file
  di disk atau mengubah file BATANYO. File master aktif sudah tersimpan.
- Petunjuk dan sumber aset di folder master diperbarui. Revisi berikutnya
  menggunakan file master ini. Kode website belum diubah. Tidak ada commit/push.

### 2026-11-01 WIB - Hero kandidat 3 | Generate background studio pertama

- Jay meminta generate contoh dari prompt studio kreatif yang dibahas.
  Gambar dibuat menggunakan tool image_gen bawaan, tanpa gambar referensi.
- Hasil: satu ruang studio konseptual dengan tablet grafis di kiri bawah,
  monitor eksplorasi bentuk 3D di kanan bawah, material gelap, cahaya hangat
  dan daylight. Bagian tengah sengaja tenang dan gelap untuk headline putih.
- Aset dan prompt persis disimpan dalam folder kerja utama FigCraft pada
  `outputs\EAI-Tech\Assets\hero03-studio-v1.png` dan
  `outputs\EAI-Tech\Assets\hero03-studio-v1-prompt.md`. Sumber asli hasil
  generator tetap dipertahankan. Hasil gambar ditinjau langsung.
- Tahap berikutnya: tinjauan Jay atas arah gambar, lalu komposisi teks dan
  penempatan kandidat 3 di kanvas kerja yang sama bila diminta. Belum ada
  penerapan ke FigCraft atau kode website, commit, atau push.

### 2026-11-01 WIB - FigCraft | Hero kandidat 3 dengan background studio

- Jay meminta gambar hasil generate pertama diterapkan pada desain hero
  kandidat 3 untuk menilai hasilnya langsung di FigCraft.
- Ditambahkan frame keempat pada file `outputs\EAI-Tech\EAI-Tech.figcraft`,
  halaman yang sama `EAI Tech · Design Workspace`, di x=4920/y=0. Desain
  Indonesia, Inggris, dan kandidat 2 tetap tersedia di sebelah kiri.
- Hero baru 1440 × 900 memakai foto studio sebagai background penuh dengan
  lapisan gradien teal gelap tipis. Navbar/logo di tengah dengan teks putih;
  judul Instrument Serif 132 px, paragraf Manrope, tombol utama putih dan
  tombol sekunder outline. Copy dan CTA sama dengan kandidat 2, tanpa ikon panah.
- Section di bawah hero mengikuti salinan kandidat 2 sampai footer. Terdapat
  empat flow Present. Semua tujuan interaksi internal pada salinan baru
  menunjuk ke salinan tersebut; link bahasa pada footer tetap ke desain ID.
  Work/View our work dan pilihan bahasa navbar tetap visual sementara.
- Pemeriksaan: render 1440 × 900 ditinjau, frame dan flow ada di kanvas yang
  sama, seluruh referensi tujuan interaksi diperiksa, 0 font hilang setelah
  font dimuat kembali pada sesi aplikasi. Ini pemeriksaan struktur/render;
  pengujian klik menyeluruh tidak diulang untuk percobaan visual ini.
- File master sudah disimpan; preview `outputs\EAI-Tech\Hero-03-Studio-EN.png`.
  Kode website belum diubah. Belum ada keputusan final pemilihan hero,
  commit, atau push.

### 2026-11-01 WIB - Hero kandidat 3 | Alternatif studio terang

- Jay menilai versi gelap cukup baik dan meminta mencoba gambar kedua
  dengan tema terang beserta rancangan penyesuaian hero.
- Gambar dibuat memakai tool image_gen bawaan dengan studio gelap sebagai
  edit target. Kamera dan letak tablet/monitor dipertahankan. Material berubah
  menjadi putih hangat, mint pucat, kayu oak terang, dan hardware silver;
  pencahayaan daylight lembut serta tanaman di tepi.
- Rancangan teks: Instrument Serif dan Manrope tetap; headline/navbar teal
  gelap, paragraf teal redup, tombol utama teal dan tombol sekunder outline.
  Copy, susunan tengah, dan ukuran hero 1440 × 900 tetap untuk perbandingan.
- Hasil dan prompt persis tersimpan di Assets/hero03-studio-light-v1.png
  dan Assets/hero03-studio-light-v1-prompt.md pada folder kerja FigCraft utama.
  Render ditinjau langsung; file gambar lama tetap dipertahankan.
- Versi terang masih preview gambar, belum ditempatkan pada kanvas FigCraft
  dan belum menjadi keputusan final. Tidak ada perubahan kode website,
  commit, atau push.

### 2026-11-01 WIB - Hero kandidat 3 | Generate galeri digital terang

- Jay meminta gambar baru dengan objek dan suasana berbeda, tetap bertema
  terang. Tiga arah dibahas: galeri ide digital, instalasi bentuk logo, dan
  penggunaan produk digital. Jay memilih mencoba ide pertama.
- Gambar dibuat dari awal menggunakan tool image_gen bawaan, tanpa referensi
  studio sebelumnya: galeri putih hangat, lantai batu terang, sinar daylight,
  panel studi desain dan diagram sistem di kanan, serta eksplorasi bentuk 3D
  di atas pedestal. Area kiri disediakan untuk headline teal gelap.
- Hasil dan prompt persis disimpan di Assets/hero03-gallery-light-v1.png dan
  Assets/hero03-gallery-light-v1-prompt.md dalam folder kerja FigCraft utama.
  Render ditinjau langsung. Semua karya pada gambar bersifat konsep demo.
- Tahap masih preview aset; belum ditempatkan di FigCraft, belum memilih
  versi final. Kode website tidak diubah. Tidak ada commit/push.

### 2026-11-01 WIB - Hero kandidat 3 | Generate penggunaan produk digital

- Jay meminta mencoba ide nomor 3 dari alternatif gambar terang: produk
  digital yang digunakan seseorang dalam kehidupan sehari-hari.
- Gambar dibuat dari awal dengan tool image_gen bawaan, tanpa referensi.
  Hasil berupa foto editorial konseptual, tangan menggunakan aplikasi demo
  di HP pada sisi kanan, teras kafe dengan daylight dan latar lembut di kiri.
  Wajah berada di luar frame, dengan palet netral hangat, hijau dan aksen teal.
- Hasil dan prompt persis tersimpan pada Assets/hero03-lifestyle-light-v1.png
  dan Assets/hero03-lifestyle-light-v1-prompt.md dalam folder kerja FigCraft
  utama. Render ditinjau langsung; konten aplikasi bersifat demo.
- Masih preview gambar untuk tinjauan. Belum ditempatkan di FigCraft atau
  dipilih sebagai versi final; kode website tidak diubah. Tidak ada commit/push.

### 2026-11-01 WIB - FigCraft | Dua hero terang untuk perbandingan

- Jay meminta foto penggunaan aplikasi terakhir dan lampiran studio terang
  dipakai di FigCraft. Dua salinan penuh ditambahkan di halaman kerja yang
  sama; file utama tetap `outputs\EAI-Tech\EAI-Tech.figcraft`.
- Frame 05 `Light Studio · English` berada di x=6560/y=0, memakai lampiran
  persis yang disalin ke Assets/hero03-studio-light-user-reference.png.
  Teks tengah, headline teal gelap, paragraf dibagi tiga baris agar tidak
  melewati tanaman, CTA teal dan sekunder terang. Lapisan terang lembut di
  tengah membantu keterbacaan; foto dan UI tetap terpisah dan dapat diedit.
- Frame 06 `Everyday Product · English` berada di x=8200/y=0, memakai
  Assets/hero03-lifestyle-light-v1.png. Teks dan CTA digeser ke kiri; foto
  tangan/HP tetap terlihat di kanan. Fade terang di kiri dan lapisan navbar
  terang membantu keterbacaan.
- Kedua hero 1440 × 900, English only, memakai Instrument Serif + Manrope,
  copy dan CTA yang sama tanpa ikon panah. Section bawah mengikuti salinan
  studio gelap sampai footer. Enam desain dan enam flow Present tersedia.
- Pemeriksaan: render kedua hero ditinjau; tujuan interaksi internal mengarah
  ke salinan masing-masing, link ID footer tetap ke desain Indonesia; 0 font
  hilang. Pemeriksaan struktur/render, bukan uji klik menyeluruh ulang.
- Master sudah disimpan. PNG: Hero-03-Light-Studio-EN.png,
  Hero-03-Everyday-Product-EN.png, dan Hero-03-Light-Comparison.png. Kanvas
  menampilkan kedua hero baru berdampingan. Belum ada pilihan final, perubahan
  kode website, commit, atau push.

### 2026-11-01 WIB - FigCraft | Pilih nomor 6, hapus studio, hero rounded

- Jay menyukai nomor 6 dan meminta nomor 4 serta 5 dihapus. Jay juga meminta
  hero diberi sudut rounded pada halaman putih, dengan navbar di luar bidangnya.
- Dua frame studio dan flow-nya dihapus dari file kerja utama. Tidak ada
  frame lain yang mempunyai link menuju kandidat yang dihapus. Aset sumber
  dan PNG lama tetap tersimpan sebagai arsip, tanpa membuat file desain baru.
- Frame nomor 6 dipindah ke x=4920 dan dinamai `06 · Hero 03 · Rounded Product
  · English`. Halaman putih, navbar 100 px dipindah menjadi child root yang
  terpisah dari area hero. Hero luar 800 px berisi frame foto 1376 × 756,
  x=32/y=12, clip aktif, radius 32 px. Total satu layar tetap 1440 × 900.
- Foto, fade keterbacaan, headline, paragraf, dan kedua CTA dipindahkan ke
  frame rounded. Headline kiri Instrument Serif 118 px; paragraf/UI Manrope.
  Warna dan copy dipertahankan, tanpa ikon panah. Logo dan Back to top kini
  menarget navbar di y=0 agar kembali ke bagian paling atas.
- Pemeriksaan: render ditinjau; empat frame dan empat flow tersisa, navbar
  berada di luar frame rounded, tidak ada referensi interaksi yang putus,
  0 font hilang. Posisi/tinggi seluruh section di bawah hero tidak berubah:
  Services y=900, Process y=1800, FAQ y=2700. Uji klik menyeluruh tidak diulang.
- Master sudah disimpan ke `outputs\EAI-Tech\EAI-Tech.figcraft`; preview
  `outputs\EAI-Tech\Hero-06-Rounded-EN.png`. Kode website belum diubah.
  Tidak ada commit/push.

### 2026-11-01 WIB - Diskusi hero awal | Aset yang menjelaskan hasil kerja

- Jay meminta kembali merevisi konsep hero pertama: logomark besar dinaikkan
  agar berada di hero, lalu menanyakan pengganti yang lebih menjelaskan
  pekerjaan eAI Tech dibanding logo 3D saja.
- Komposisi native diperiksa: judul di kiri, snapshot logomark di kanan
  bawah hero, dengan potongan lanjutannya pada section Layanan.
- Usulan yang disiapkan untuk diskusi: wireframe → produk jadi (satu panel
  produk demo sebagai fokus), kolase hasil desain/website/3D, atau alur kerja
  otomasi yang divisualisasikan. Rekomendasi agent adalah wireframe → produk
  jadi karena terkait langsung dengan judul awal "Dari ide jadi sistem
  yang berjalan." Usulan belum menjadi keputusan Jay.
- Tidak ada perubahan FigCraft, generate gambar, kode website, commit,
  atau push pada tahap pembahasan ini.

### 2026-11-01 WIB - FigCraft | Hero awal kolase dan hover interaktif

- Setelah tertarik pada opsi kolase hasil karya, Jay menanyakan efek cursor.
  Parallax berlapis dan hover terangkat dibahas; Jay meminta dibuat di FigCraft.
- Hero awal Indonesia dan Inggris diperbarui pada file kerja yang sama.
  Snapshot logo besar dan ekornya di section Layanan dihapus. Sebagai gantinya,
  kolase 680 × 488 ditempatkan di x=720/y=126: mockup website konsep FORMA,
  aplikasi manajemen proyek demo, dan tile studi bentuk 3D. Hero tetap
  1440 × 682.63; posisi/tinggi section di bawahnya tidak berubah.
- Website dan aplikasi dibuat dari layer native yang bisa diedit. Render
  keramik dibuat melalui tool image_gen bawaan dan disimpan dengan prompt
  persis di Assets/hero01-ceramic-study-v1*. Label konsep ID/EN disertakan
  agar visual tidak dianggap pekerjaan klien nyata.
- Satu master kolase dengan empat variant Rest/Website/App/3D disimpan pada
  halaman komponen dalam file yang sama, dipakai oleh instance EN dan ID.
  Hover memperbesar panel 2%, mengangkatnya sekitar 8–11 px, mengubah tilt
  sekitar 1 derajat, dan memperkuat bayangan. Transisi Smart Animate 220–240 ms.
- Area hover tetap dan area reset yang tidak tumpang tindih menjaga
  perpindahan antar-panel stabil. Uji akhir Present: EN 6/6 dan ID 6/6
  lulus, mencakup Rest, Website, App, 3D, celah di antara panel, dan keluar
  kolase; keadaan juga stabil pada pemeriksaan kedua setelah transisi.
- Pemeriksaan struktur: empat desain dan empat flow utama tetap ada;
  0 referensi interaksi putus; 0 font hilang. Master tersimpan; PNG ID/EN
  dan perbandingan beserta laporan hover tersedia pada folder output utama.
- Cakupan: efek hover aktif di FigCraft. Parallax kontinu mengikuti posisi
  cursor dan gerak scroll belum diterapkan ke website. Tidak ada perubahan
  kode website, commit, atau push.

### 2026-11-01 WIB - Layanan | Empat tambahan dan diskusi penamaan

- Jay menyatakan revisi hero cukup untuk sekarang dan memulai pembahasan
  Layanan. Tambahan yang diminta: Desain Grafis, 3D, editing (multimedia),
  serta social media consulting.
- Penamaan usulan untuk dibahas: Graphic Design, 3D Design & Visualization,
  Video & Multimedia Editing, dan Social Media Strategy & Consulting.
  Nama dan cakupan belum menjadi keputusan final; branding, produksi/shooting,
  motion graphics, serta pengelolaan akun tidak diasumsikan otomatis termasuk.
- Tambahan empat layanan berasal dari Jay. Pengelompokan kategori besar,
  judul pengganti What We Build, copy, dan implementasi menunggu diskusi
  lanjut. Tidak ada perubahan FigCraft, kode website, commit, atau push.

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

### 2026-11-01 WIB - Layanan | What We Do dan arah tampilan baru

- Keputusan Jay: judul section `What We Do` diterima; cara menampilkan
  layanan perlu dirombak setelah penambahan layanan kreatif dan consulting.
- Usulan untuk diskusi, belum disetujui: empat kelompok `Digital Products`
  (Website, Apps, ERP System), `AI & Automation` (Automation, Agentic AI),
  `Design & Visualization` (Graphic Design, 3D Design & Visualization), dan
  `Content & Social Media` (Video & Multimedia Editing, Social Media Strategy
  & Consulting). Nama publik tiap layanan juga masih berupa usulan sebelumnya.
- Usulan tampilan: daftar empat kategori di kiri dengan ringkasan singkat;
  kategori aktif menampilkan contoh visual, rincian layanan dan satu CTA di
  kanan. Kategori pertama terbuka sejak awal. Pada HP dapat menjadi accordion.
- Belum ada perubahan desain FigCraft, source website atau cakupan rinci
  layanan. Pengelompokan, visual, interaksi dan copy menunggu pembahasan Jay.
- Tindak lanjut: sepakati pengelompokan lalu bahas komposisi section sebelum
  membuat draft FigCraft.

### 2026-11-01 WIB - Layanan | Draft What We Do di desain 03 saja

- Arahan Jay: coba rancangan layanan yang dibahas di FigCraft dan ubah hanya
  desain 03. Persetujuan ini untuk percobaan tampilan; penamaan/copy belum final.
- Dikerjakan: isi section layanan lama (id 1877) pada root 1856 diganti dengan
  What We Do. Tetap 1440 × 900 di y=900; target navigasi id 1877 dipertahankan.
- Komposisi: judul Instrument Serif, pengantar, daftar empat kategori di kiri,
  showcase dan rincian di kanan, label layanan, CTA tanpa ikon panah. Kategori:
  Digital Products (Website/Apps/ERP System), AI & Automation (Automation/Agentic
  AI), Design & Visualization (Graphic Design/3D Design & Visualization), Content
  & Social Media (Video & Multimedia Editing/Social Media Strategy & Consulting).
- Prototipe: component set 4343, state Digital 4109 / AI 4183 / Design 4237 /
  Content 4279; instance 4352 di section 1877. Klik kategori mengganti state
  dengan dissolve 180 ms; CTA scroll ke kontak 2285. Master berada di halaman
  komponen 3769 dalam file yang sama, di bawah komponen hero.
- Visual: UI workspace+app, diagram workflow, poster+render keramik, editing
  preview+content planning. Render/foto memakai ulang aset konsep yang sudah ada;
  lainnya native editable. Label konsep/draft terlihat pada tampilan.
- Pemeriksaan: lima klik (empat state dan kembali Digital) dicek langsung di
  Present; hasil screenshot mengonfirmasi kategori aktif dan visual yang sesuai.
  CTA berhasil scroll ke y=3681.31. 0 font hilang, 0 target interaksi terputus.
  Perbandingan JSON sebelum/sesudah memastikan seluruh root 930/1394/3303 sama,
  hero 1857 dan section 1949/2242/2285/2292 pada 03 sama; ukuran root tetap.
- Bukti: work/services-draft/report.json, structural-checks.json, click-checks.json,
  click-*.png; outputs/EAI-Tech/Services-03-What-We-Do-EN.png dan empat preview state.
- Disimpan: outputs/EAI-Tech/EAI-Tech.figcraft (file kerja tunggal). Petunjuk dan
  SOURCES diperbarui. Tidak ada perubahan website, commit, atau push.
- Tindak lanjut: Jay meninjau draft 03; revisi pengelompokan, copy, dan komposisi
  mengikuti hasil tinjauan sebelum diterapkan pada versi lain atau website.

### 2026-11-01 WIB - Layanan | Nomor kategori dan ikon label layanan

- Arahan Jay dari dua screenshot: hapus label sekunder kategori, perbesar
  nomornya, tambahkan ikon pada label layanan lalu rapikan perataannya.
- Dikerjakan hanya pada What We Do desain 03: empat teks ringkasan kategori
  dihapus pada masing-masing dari empat state (16 layer). Nomor 01-04 naik
  dari 11 menjadi 38 px Manrope Medium dengan angka tabular; judul kategori
  digeser dan disejajarkan secara vertikal dengan nomor.
- Sembilan label layanan diberi ikon native: browser, smartphone, grid ERP,
  workflow, bot, pencil, cube, film, dan messages. Pil tinggi 36 px, teks
  Manrope Medium 12 px, ikon mint 1.4 px; jarak ikon/teks dan antar-pil seragam.
  Lebar teks diukur melalui auto-size font, lalu lebar pil disesuaikan agar
  semua label satu baris. Seluruh state kategori diperbarui.
- Pemeriksaan: preview utama dan state Content diperiksa visual; keempat
  state dirender. Lima klik kategori dan CTA diuji ulang di Present, lulus.
  0 font hilang dan 0 target terputus. Root 930/1394/3303, hero dan lima
  section lain pada 03 tetap identik dengan snapshot sebelum perubahan.
- Bukti: work/services-draft/refinement-report.json, structural-checks.json,
  click-checks.json; Services-03-What-We-Do-EN.png dan empat preview state.
- File kerja EAI-Tech.figcraft disimpan; petunjuk diperbarui. Website belum
  diubah. Tindak lanjut: Jay meninjau hasil penyempurnaan desain 03.

### 2026-11-01 WIB - Portofolio | Diskusi posisi section

- Arahan Jay: What We Do cukup untuk sekarang; bahas lokasi portofolio,
  terutama sesudah layanan atau sesudah How It Works.
- Usulan: tempatkan portofolio sesudah What We Do dan sebelum How It Works.
  Alur yang diusulkan: Hero, What We Do, Selected Work, How It Works, FAQ,
  Contact, Footer. Pertimbangannya: calon klien memahami layanan, melihat
  contoh hasil, lalu mempelajari cara bekerja sama.
- Nama Selected Work masih usulan. Posisi, jenis karya, dan tampilan belum
  dikunci; belum ada perubahan FigCraft, LAYOUT, atau website pada diskusi ini.
- Tindak lanjut: Jay memilih posisi, kemudian bahas isi dan komposisi portofolio.

### 2026-11-01 WIB - Project | Referensi Aperios dan komposisi homepage

- Keputusan Jay: lokasi setelah What We Do diterima. Nama section `Project`;
  tampilkan beberapa karya dengan pilihan `View All`. Halaman khusus Project
  dibahas nanti; fokus sekarang hanya section di homepage.
- Observasi referensi https://aperios-design.co.uk/ melalui web dan browser
  1440 × 900: judul Featured Work besar, satu proyek pertama selebar konten,
  kombinasi pasangan gambar berbeda ukuran dan posisi vertikal, beberapa
  visual tunggal di tengah, nama/ringkasan di bawah gambar, serta View all
  work di akhir menuju /projects. Homepage situs hidup memuat lebih banyak
  karya daripada jumlah yang dibutuhkan untuk draft eAI Tech.
- Usulan adaptasi, belum disetujui: tiga proyek pilihan; satu visual utama
  landscape lebar lalu dua visual pendamping asimetris dengan pergeseran
  vertikal ringan. Judul Project dan pengantar di atas; View All di bawah.
  Latar terang setelah section layanan gelap, Instrument Serif untuk judul,
  Manrope untuk nama proyek/kategori. Hover pembesaran visual dan reveal
  saat scroll adalah usulan interaksi eAI Tech, belum klaim hasil pengujian
  efek interaksi Aperios.
- Belum menentukan karya nyata/konsep yang dipilih, belum mendesain halaman
  Project khusus/detail, dan belum mengubah FigCraft atau website.
- Tindak lanjut: Jay meninjau komposisi homepage dan memilih jumlah/isi karya.

### 2026-11-01 WIB - Project | Draft homepage pada desain 03

- Arahan Jay: coba kerjakan rancangan Project yang dibahas. Diterapkan hanya
  pada desain 03, melanjutkan scope revisi sebelumnya, dalam file kerja yang sama.
- Section baru 4617 disisipkan pada urutan ketiga, setelah What We Do 1877 dan
  sebelum How It Works 1949. Ukuran 1440 × 1920, y=1800; root 1856 menjadi
  6754.66 px tinggi. Nama layer section berikutnya disesuaikan 04/05/06/07.
- Galeri: Studio Workspace sebagai cover utama 1360 × 600; Morrow 544 × 584
  di kiri bawah, Forma Material Studies 656 × 500 di kanan dengan offset
  vertikal 64 px. Nama proyek dan kategori di bawah gambar; tiap entri punya
  label Concept Project. Header memakai Instrument Serif, metadata Manrope,
  latar terang, rounded cover 18 px. View All di bagian bawah galeri.
- Studio Workspace berupa UI native aplikasi desktop/mobile; Morrow berupa
  poster native asli dengan tipografi dan bentuk vektor. Forma memakai ulang
  render konsep keramik hero01. Tidak mengarang proyek klien, hasil bisnis,
  atau klaim pekerjaan yang sudah selesai. Tidak ada generate gambar baru.
- Interaksi: navbar Work 2344 dan hero CTA View our work 2355 scroll ke 4617.
  Tiga component set cover: 4526/4601/4611, instance 4633/4707/4716, masing-
  masing Rest/Hover. Hover membesarkan artwork 1.8% dalam crop tetap,
  SmartAnimate 240 ms; keluar gambar mengembalikan Rest.
- Batas draft: View All masih visual, sesuai arahan bahwa halaman khusus
  Project dibahas nanti. Halaman detail proyek belum dibuat. Animasi reveal
  berdasarkan scroll belum disimulasikan dalam prototipe FigCraft ini.
- Pemeriksaan struktur: root 930/1394/3303 identik; What We Do identik; hero
  1857 identik selain dua interaksi navigasi baru. Isi section bawah identik
  selain nama layer/posisi yang bergeser 1920 px. Komponen hero dan layanan
  lama identik. Empat flow tetap valid; 0 font hilang, 0 target terputus.
- Uji Present: navbar Work, hero View our work, How It Works dan FAQ menuju
  posisi benar; ketiga hover mengubah render tanpa mengubah scroll/frame;
  CTA layanan masih menuju kontak, sekarang di y=5601.31. Semua lulus.
- Bukti: work/project-draft/report.json, structural-checks.json, ui-checks.json,
  hover-*.png; outputs/EAI-Tech/Project-03-Homepage-EN.png. PETUNJUK/SOURCES
  diperbarui. File EAI-Tech.figcraft disimpan. Tidak ada perubahan website,
  commit, atau push.
- Tindak lanjut: Jay meninjau section homepage sebelum pemilihan karya final,
  revisi komposisi, atau pembahasan halaman khusus Project.

### 2026-11-01 WIB - How It Works | Diskusi diagram flow

- Jay menyatakan Project sudah oke untuk saat ini, lalu meminta pendapat
  tentang alternatif How It Works, terutama bentuk diagram flow.
- Tampilan sekarang diperiksa dari subtree 1949 dan render tersimpan di
  work/process-discussion/Current-How-It-Works-03.png: cincin titik di kiri,
  judul dan satu tahap aktif di kanan, empat tahap placeholder Discuss your
  needs / Plan / Build / Handover. Isi proses final tetap P-008.
- Usulan untuk diskusi: empat tahap terlihat bersamaan dalam diagram
  horizontal berjalur melengkung ringan. Judul di area terang, diagram pada
  bidang hijau gelap rounded, node bernomor dan deskripsi singkat. Aksen
  mint bergerak/mengisi koneksi seiring scroll adalah ide untuk website,
  bukan perilaku yang sudah diimplementasikan.
- Draft nama Discover / Plan / Create / Deliver. Create diusulkan agar
  mencakup software, desain, 3D, multimedia dan consulting. Penjelasan tahap
  masih draft, tidak menutup P-008 atau menetapkan proses operasional tim.
- Alternatif tambahan yang dapat dipertimbangkan: timeline vertikal dengan
  uraian tiap tahap. Belum ada perubahan pada desain FigCraft atau website.
- Tindak lanjut: Jay memilih arah visual dan membahas isi tahap sebelum draft.

### 2026-11-01 WIB - How It Works | Diagram flow interaktif pada desain 03

- Arahan Jay: kerjakan rancangan flow yang dibahas. Scope dilanjutkan pada
  desain 03 saja, Inggris, dalam file kerja FigCraft tunggal.
- Dikerjakan: empat frame cincin lama (1950/2023/2096/2169) dihapus dari
  section 1949, lalu diganti dengan header dan diagram flow. Section tetap
  1440 × 900 di y=3720; tidak menggeser FAQ/kontak/footer atau mengubah root.
- Komposisi: judul How It Works Instrument Serif di area terang, diagram
  1360 × 520 pada x40/y264 dengan radius 28, empat nomor dalam lingkaran
  80 px, nama tahap dan deskripsi singkat. Jalur cubic menghubungkan node
  dengan ketinggian bervariasi. Keterangan hasil tahap berada di bawah.
- State: Discover 4721, Plan 4757, Create 4793, Deliver 4829; component set
  4865, instance 4873. Keempat tahap selalu terlihat. Klik tahap mengubah
  fill node aktif, warna label, progres mint, counter dan outcome. Transisi
  SmartAnimate 320 ms easeOut; Discover sebagai default. Semua elemen native.
- Batas draft: copy tahap/outcome masih untuk pembahasan, tidak menutup
  P-008. Progres berdasarkan scroll dan susunan vertikal HP belum dibuat;
  prototipe desktop ini menggunakan klik tahap sebagai simulasi progres.
- Pemeriksaan: seluruh root 930/1394/3303 identik; hero, What We Do, Project,
  FAQ, kontak dan footer pada 03 identik; lima component set lama identik.
  Ukuran/posisi root dan section sama, empat flow tetap sama. 0 font hilang,
  0 target terputus. Pola tiga koneksi progres pada empat state sesuai tahap.
- Uji Present: menu How it works menuju y3720; enam klik Plan/Create/Deliver/
  Discover/Deliver/Discover mengubah render dan ringkasan yang sesuai tanpa
  mengubah scroll/root. Semua lulus, hasil visual Plan dan Deliver diperiksa.
- Bukti: work/process-draft/report.json, structural-checks.json, ui-checks.json,
  step-*.png; outputs/EAI-Tech/How-It-Works-03-Flow-EN.png dan empat state PNG.
  PETUNJUK/SOURCES diperbarui; EAI-Tech.figcraft disimpan. Tidak ada perubahan
  website, commit atau push. Present ditutup, kanvas fokus ke How It Works.
- Tindak lanjut: Jay meninjau diagram/copy draft dan memberi revisi bila perlu.

### 2026-11-01 WIB - How It Works dipulihkan | Mulai diskusi FAQ

- Arahan Jay: kembalikan How It Works ke versi sebelumnya. Lanjut membahas
  pertanyaan FAQ, dimulai Apa itu eAI Tech; biaya dan lama pengerjaan tidak
  dimasukkan karena fleksibel.
- Pemulihan: riwayat 12 langkah eksperimen flow dicocokkan dahulu, lalu
  dibatalkan dengan edit.undo. Section cincin dan ID lama dipulihkan, bukan
  dibuat ulang. Komponen flow percobaan ikut dibatalkan. PNG flow dipertahankan
  di disk sebagai arsip; file kerja utama tetap EAI-Tech.figcraft.
- Verifikasi: seluruh subtree root 930/1394/1856/3303 serta halaman 3769 dan
  929 identik dengan work/process-draft/before-nodes.json. What We Do, Project,
  FAQ dan navigasi kembali tepat pada kondisi sebelum eksperimen. 0 font hilang.
  Empat klik ring 1→2→3→4→1 lulus, tanpa mengubah scroll/frame. File disimpan.
- Bukti: work/process-restore/report.json, ui-checks.json, ring-restored.png;
  outputs/EAI-Tech/How-It-Works-03-Ring-EN.png. PETUNJUK/SOURCES diperbarui.
- Usulan FAQ untuk diskusi, belum disetujui/diterapkan:
  1. Apa itu eAI Tech?
  2. Apakah saya bisa berkonsultasi meski ide proyeknya belum matang?
  3. Bisakah saya menggunakan beberapa layanan dalam satu proyek?
  4. Apakah eAI Tech bisa membantu mengembangkan proyek yang sudah ada?
  5. Apa yang perlu saya siapkan sebelum proyek dimulai?
  6. Bagaimana proses komunikasi dan revisi selama pengerjaan?
  7. Apa saja yang saya terima setelah proyek selesai?
  8. Bagaimana cara mulai bekerja sama dengan eAI Tech?
- Daftar ini menghindari pertanyaan biaya dan durasi sesuai arahan Jay.
  Jawaban tentang lingkup layanan, revisi dan serah terima tidak diasumsikan;
  materi final tim tetap P-008. FAQ di FigCraft/website belum diubah.
- Tindak lanjut: Jay memilih pertanyaan, lalu menyusun jawaban dan menerapkan
  FAQ. Website, commit dan push tidak disentuh.

### 2026-11-01 WIB - FAQ | Lima pertanyaan dipilih

- Pilihan Jay: ambil nomor 1, 2, 3, 5, dan 8 dari delapan usulan FAQ.
- Urutan draft yang dipilih, dinomori ulang:
  1. Apa itu eAI Tech?
  2. Apakah saya bisa berkonsultasi meski ide proyeknya belum matang?
  3. Bisakah saya menggunakan beberapa layanan dalam satu proyek?
  4. Apa yang perlu saya siapkan sebelum proyek dimulai?
  5. Bagaimana cara mulai bekerja sama dengan eAI Tech?
- Tetap mengikuti arahan sebelumnya: tanpa pertanyaan biaya atau durasi.
- Jawaban belum disusun/disetujui. Tidak ada perubahan pada FigCraft,
  website, commit, atau push pada tahap pemilihan pertanyaan ini.
- Tindak lanjut: bahas jawaban kelima pertanyaan sebelum penerapan FAQ.

### 2026-11-01 WIB - FAQ diterapkan | Diskusi halaman khusus Project

- Arahan Jay: terapkan lima pertanyaan FAQ yang dipilih, kemudian bahas
  halaman Project. Pesan continue melanjutkan pekerjaan dan pembahasan ini.
- Dikerjakan pada desain 03 saja: lima pertanyaan EN padanan pilihan ID
  mengganti empat pertanyaan lama. FAQ section 2242, container 2248; item
  1-4 mempertahankan ID lama, item 5 merupakan duplikat dengan ID 4721.
  Biaya dan durasi tidak lagi ada di subtree FAQ 03. Jawaban tetap placeholder.
- Tata letak: teks dibatasi 600 px dan auto-height. Pertanyaan dua baris
  mendapat header 142 px, lainnya 103 px. Ikon plus/minus tetap di tengah.
  FAQ tertutup = 1162.56 px, naik 181.25 px; root 1856 = 6935.91 px.
  Kontak/footer bergeser 181.25 px, isi keduanya dipertahankan.
- Accordion: collection FAQ / Design 03 (VariableCollectionId:2), sepuluh
  variable baru VariableID:25-34, satu pasangan open/closed per pertanyaan.
  Binding plus dan jawaban serta conditional toggle diarahkan ke pasangan
  masing-masing. Semua 24 variable lama tidak diubah.
- Pemeriksaan: root 930/1394/3303, library 3769, hero/layanan/Project/How It
  Works pada 03 identik. Kontak/footer identik setelah normalisasi posisi.
  Empat flow tetap sama, 0 font hilang. Kelima binding jawaban dan tinggi
  saat open/closed diperiksa melalui native API, lalu default ditutup lagi.
  Semua lulus. Uji klik UI tidak dituntaskan: sesi Present sempat tidak
  memiliki viewport valid/zoom sangat kecil. Tidak mengklaim klik UI lulus.
- File dibuka ulang pada sesi MCP FigCraft yang baru (document id 3; jangan
  mengandalkan id 2 dari log lama), kedua font dimuat untuk sesi ini, dan
  EAI-Tech.figcraft disimpan. Preview FAQ-03-Five-Questions-EN.png; bukti
  work/faq-draft/report.json, structural-checks.json, binding-checks.json.
- Referensi halaman Project: https://aperios-design.co.uk/projects dilihat
  melalui web dan browser 1440×900, termasuk hover Seeper. Halaman daftar
  menampilkan nama, jenis pekerjaan dan nomor; hover memunculkan preview.
- Usulan untuk diskusi, belum diterapkan: halaman Project dengan navbar
  konsisten, judul besar dan intro, filter kategori sesuai karya tersedia,
  galeri gambar dua kolom, lalu CTA/footer. Alternatif: daftar interaktif
  dengan preview hover seperti Aperios. Arah visual serta perilaku membuka
  detail per proyek masih menunggu pilihan Jay.
- Belum ada halaman Project khusus/detail baru. View All tetap visual.
  Jawaban FAQ tetap P-008. Tidak ada perubahan website, commit atau push.
- Tindak lanjut: pilih galeri atau daftar untuk halaman Project, kemudian
  susun komposisi dan pembahasan detail proyek.

### 2026-11-01 WIB - Project List | Draft galeri dua kolom di FigCraft

- Arahan Jay: tuangkan ide halaman List Project ke FigCraft untuk dilihat.
  Dibuat sebagai halaman produk baru dalam kanvas/file kerja yang sama,
  bukan file revisi terpisah. Halaman detail tidak termasuk pekerjaan ini.
- Frame 4958, 07 · Project List · English, x6560/y0, width1440. Flow baru
  dengan nama yang sama ditambahkan; empat flow homepage lama dipertahankan.
- Layout: navbar 110, pengantar 244 (breadcrumb Home, Project 128 px Instrument
  Serif, intro Manrope), galeri dua kolom, area kontak 431.78 dan footer
  721.56. Kartu menggunakan tiga konsep lama: Studio Workspace, Morrow, Forma
  Material Studies. Rasio gambar mengikuti bentuk karya; semua Concept Project.
- Component set gallery 4957, instance 5012. State Category: All Projects
  4730 (3 kartu, height1320), Digital Products 4839 (1 kartu, height720),
  Design & Visualization 4926 (2 kartu, height1040). Filter kategori kosong
  tidak ditambahkan. Source cover 4438/4512/4521 dipakai ulang sebagai native
  instances dalam crop grid. Tidak ada generate atau pengambilan aset baru.
- Halaman All setinggi2827.34; Digital2227.34; Design2547.34. Pengujian via
  instance.setProperties memastikan jumlah/nama kartu, master variant, posisi
  kontak (y1674/1074/1394) dan tinggi halaman sesuai; default dikembalikan All.
- Navigasi: View All 4630 dari homepage 03 → root4958. Logo/navbar4959 dan
  breadcrumb5007 kembali ke homepage03 (1856); Services/How it works/FAQ
  navigate ke homepage lalu scroll ke1877/1949/2242. Back to top menuju
  navbar List4959. Duplikat kontak4971 dan footer4978 mempertahankan gaya
  dan tautan WA lama. Bahasa baru hanya EN; tautan ID baru tidak diarahkan
  ke halaman lain yang tidak sesuai. Detail/kartu klik detail belum dibuat.
- Pemeriksaan: root930/1394/3303 identik. Root1856 identik setelah mengecualikan
  hanya nama dan interaksi View All. Lima component set lama identik. Empat
  flow lama tetap sama, satu flow List baru; 0 font hilang, 0 target interaksi
  terputus. Sembilan target changeTo kategori diverifikasi benar. Pengujian
  native properties/layout/targets, tidak mengklaim uji klik GUI.
- Hasil visual All dan Design diperiksa. Preview Project-List-EN.png,
  Project-List-Overview-EN.png, Project-List-Filter-Digital-EN.png,
  Project-List-Filter-Design-EN.png. Report work/project-list/report.json.
- File EAI-Tech.figcraft disimpan. PETUNJUK/SOURCES/PROGRESS diperbarui.
  Website, commit dan push tidak diubah. Fokus kanvas ke List Project.
- Tindak lanjut: Jay meninjau halaman daftar, lalu revisi atau pembahasan
  rancangan Detail Project sesuai arah berikutnya.

### 2026-11-01 WIB - Detail Project | Diskusi struktur awal

- Penilaian Jay: halaman List Project sudah pas. Lanjut meminta ide untuk
  halaman Detail Project. Tidak ada revisi List yang diminta.
- Usulan, belum diterapkan: studi kasus singkat yang dominan gambar, dengan
  navbar konsisten dan breadcrumb Project / nama proyek. Hero berisi nama,
  pengantar singkat, label layanan dan tipe Concept Project bila relevan.
- Susunan usulan: cover lebar; Project Overview dan What We Created yang
  menjelaskan tujuan/pekerjaan secara singkat; galeri hasil dengan variasi
  gambar lebar dan pasangan gambar; Next Project dan Back to Projects;
  kontak serta footer yang konsisten.
- Template mendukung karya digital, desain grafis dan 3D; isi gambar dan
  penjelasan menyesuaikan jenis proyek. Link Live Demo/Visit Website hanya
  ditampilkan bila ada tautan yang benar-benar tersedia, belum ditambahkan.
- Studio Workspace diusulkan sebagai contoh pertama untuk menguji template.
  Tidak menetapkan klaim proyek klien, angka hasil bisnis, atau data proyek
  yang belum tersedia. Karya konsep tetap diberi label Concept Project.
- Belum ada halaman detail atau perubahan FigCraft/website pada tahap ide
  ini. Tidak ada commit atau push. Tindak lanjut: Jay meninjau arah struktur
  dan menentukan apakah dibuat contoh Detail Project berikutnya.

### 2026-11-01 WIB - Detail Project | Referensi GG Design dari Jay

- Jay menemukan dan menyukai referensi Detail Project:
  https://ggdesign.it/work/crafting-a-premium-identity-for-modern-agritourism
  Meminta dilihat untuk kemungkinan adaptasi dan penyempurnaan eAI Tech.
- Halaman dibuka langsung di browser 1440×900 (web reader tidak dapat
  mengaksesnya, browser berhasil). Hero dan bagian cerita/galeri diperiksa
  lewat snapshot, screenshot, serta bounding box media pada DOM.
- Observasi: navbar sangat sederhana, headline deskriptif dua baris besar
  di tengah, tiga chip layanan, latar gelap bertekstur. Cover 1332×888;
  sesudahnya tiga baris cerita (judul kiri, paragraf kanan, garis pembatas)
  About the project / The Challenge / The Solution. Galeri terdiri dari
  pasangan portrait dan gambar lebar secara bergantian, gap sempit. Total
  tujuh gambar termasuk cover. Penutup CTA Let's talk berukuran besar.
- Usulan adaptasi, belum disetujui: pertahankan urutan hero-cover-cerita-
  galeri; gunakan hijau gelap/mint serta Instrument Serif + Manrope milik
  eAI Tech. Nama proyek menjadi label kecil, headline besar menjelaskan ide
  atau fokus proyek. Studio Workspace tetap kandidat contoh pertama dan
  ditandai Concept Project.
- Pengembangan yang diusulkan: Back to Projects dan Next Project agar alur
  penjelajahan tersambung; caption singkat pada visual yang perlu konteks;
  pilihan memperbesar gambar untuk detail antarmuka/3D. Copy cerita ringkas,
  tidak mengarang angka hasil bisnis, klien atau hasil proyek yang belum ada.
- Tidak mengklaim efek animasi spesifik GG Design yang belum diuji. Tidak
  mengunduh/mengimpor artwork referensi. Belum ada perubahan FigCraft atau
  website, commit maupun push pada tahap pembahasan ini.
- Tindak lanjut: Jay menilai arah adaptasi GG Design sebelum dibuat draft
  halaman Detail Project dalam file kerja yang sama.

### 2026-11-02 WIB - Detail Project putih dan pemulihan MCP setelah update

- Jay meminta rancangan detail dibuat di FigCraft, lalu mengoreksi latar
  utama menjadi putih eAI Tech. Draft 08 · Project Detail · Studio Workspace
  · English sudah tersimpan dalam EAI-Tech.figcraft, di kanan List Project.
- Struktur mengikuti arah referensi GG Design: headline deskriptif besar,
  chip Apps / ERP System / UI Design, cover lebar, About the project / The
  Challenge / The Solution, pasangan visual desktop/mobile, papan fondasi
  UI, Next Project, kontak dan footer. Ukuran 1440 × 5517,34.
- Latar utama #F4F8F7; teks #0B1F1E dan warna garis/tombol disesuaikan.
  Studio Workspace tetap Concept Project. Tidak ada klaim klien/hasil bisnis.
  Semua visual halaman detail berupa layer native konsep yang sudah ada
  atau dibuat untuk draft ini; tidak mengambil artwork GG Design.
- Navigasi Studio dari homepage 03 dan List 07 menuju detail 08. Back to
  Projects menuju List; logo menuju homepage; Contact dan Back to top
  mengarah ke section detail yang sesuai. Hover Studio lama dipertahankan.
- Sebelas area gambar/caption/judul/tombol membuka empat overlay: desktop,
  mobile, fondasi UI dan Morrow. Close, Escape dan close-on-outside terpasang.
  Next Morrow baru preview konsep, bukan halaman detail lengkap kedua.
- Pemeriksaan native properties/targets: enam flow, 0 target tidak ditemukan,
  0 font hilang; ukuran halaman dan overlay sesuai. Gambar overview dan
  mobile preview diperiksa visual. Tidak mengklaim uji klik GUI. Report
  work/project-detail/report.json dan preview Project-Detail-Studio-*.png.
- Saat melanjutkan, FigCraft tidak dapat dihubungi. Jay menyebut baru update.
  Log installer lokal menunjukkan 0.12.1 dihapus dan 0.14.0 berhasil dipasang
  ke C:\Program Files\ArtCraft\FigCraft, sedangkan shortcut/MCP masih
  menunjuk AppData\Local\Programs\ArtCraft\FigCraft yang sudah tanpa binary.
- Shortcut Desktop FigCraft - AI MCP dan command server FigCraft dalam
  ~/.codex/config.toml diperbaiki; parameter MCP tetap mcp --attach 7979.
  Shortcut memakai --control 7979 dan akses baca/tulis automation terbatas
  ke folder outputs workspace. Nilai konfigurasi lain diverifikasi tetap sama.
- Aplikasi baru dibuka dengan file kerja; MCP inspect berhasil. Instrument
  Serif dan Manrope dipasang per pengguna serta dimuat ulang, 0 layer perlu
  refit. File disimpan kembali; kanvas difokuskan ke detail 08. Backup
  shortcut/config/desain dan report tersedia di work/figcraft-repair/.
- PETUNJUK, SOURCES dan petunjuk aktif diperbarui. Website, commit dan push
  tidak diubah. Tindak lanjut: tinjauan Jay terhadap draft detail putih 08.

### 2026-11-02 WIB - How It Works | Eksperimen flow vertikal pada duplikat 03

- Jay menilai keseluruhan desain sudah bagus dan meminta satu eksperimen:
  duplikat desain 03, lalu ubah hanya How It Works menjadi flow dari atas
  ke bawah. Usulan Discover, Plan, Create, Review & Refine, Deliver disetujui
  untuk dicoba, diawali label Start with an idea. Motion scroll untuk kode
  website dibahas sebagai tahap selanjutnya, bukan implementasi saat ini.
- Duplikat dibuat di workspace yang sama, frame 09 (5643), x=9840. Section
  proses 5867 berada di y=3720, ukuran 1440 × 2176; total halaman 8211,91 px.
  Kartu tahap bergantian di kiri/kanan garis utama, nomor di simpul tengah,
  dengan label hasil singkat di sisi berlawanan. Discover menampilkan contoh
  sorotan awal. Di bawah Plan ada empat cabang kategori layanan yang menyatu
  kembali menuju Create. Seluruh visual berupa layer native yang bisa diedit.
- Header memakai Instrument Serif; judul langkah/isi/icon memakai Manrope
  dan vector native. Latar putih #F4F8F7, kartu putih, garis pucat dan aksen
  teal/mint. Label DRAFT menandai copy proses; tidak menetapkan prosedur tim
  atau jumlah revisi/dukungan yang belum disepakati dalam P-008.
- Anotasi handoff pada section menjelaskan arah Motion: garis tergambar
  mengikuti scroll, tiap tahap muncul saat masuk viewport, tahap aktif lebih
  menonjol, cabang layanan bertemu lagi. Semua isi tetap terbaca tanpa motion.
  Tidak mengklaim animasi scroll kontinu sudah berjalan di FigCraft.
- Duplikasi otomatis meremap menu Services/Work/How it works/FAQ, CTA hero,
  CTA layanan dan Back to top ke section duplikat. Tautan Project List dan
  Detail tetap memakai halaman bersama. Flow baru ditambahkan; total tujuh.
- FAQ duplikat diisolasi ke collection VariableCollectionId:3, variable 35–44.
  Lima pertanyaan diuji terbuka bersamaan melalui variable native: tinggi
  FAQ duplikat 1579,11 px, FAQ asli tetap 1162,56 px. Setelah ditutup kembali,
  FAQ duplikat 1162,56 dan total halaman kembali 8211,91. Binding plus/jawaban
  memakai variable baru; nilai 34 variable lama tidak berubah.
- Verifikasi native sebelum/sesudah: enam frame lama dan seluruh halaman
  komponen identik, enam flow lama identik. Section lain duplikat sama secara
  visual setelah normalisasi ID/variable/offset; metadata override characters
  pada lima teks FAQ tidak disalin oleh duplicate, isi/style/geometri sama.
  Tidak ada target prototype terputus dan tidak ada font hilang. Tidak
  mengklaim uji klik GUI. Preview section dan halaman lengkap diperiksa visual.
- Bukti: work/process-vertical-09/report.json,
  How-It-Works-09-Vertical-Flow-EN.png,
  Design-09-Vertical-Flow-Overview-EN.png. EAI-Tech.figcraft disimpan;
  kanvas fokus ke section 5867. PETUNJUK/SOURCES/PROGRESS diperbarui.
  Website, commit dan push tidak diubah. Tindak lanjut: Jay meninjau versi 09.

### 2026-11-02 WIB - Shortcut AI MCP | Launcher umum dan akses proyek disk D

- Jay meminta pemeriksaan shortcut setelah update 0.14.0. Desktop AI MCP
  sudah menunjuk binary baru dengan benar; shortcut taskbar bawaan MSI masih
  tanpa --control. Proses yang berjalan tidak membuka port 7979. Uji membuka
  Desktop AI MCP berhasil membuat koneksi, lalu shortcut taskbar AI diperbarui.
- Jay melaporkan file D:\Projek\Web\Mini ERP\docs\assets\previews\mini-erp.figcraft
  ditolak dengan automation path rejected. Penyebabnya flag read/write root
  yang sebelumnya dibatasi ke outputs EAI Tech; flag ini juga membatasi
  pembukaan file manual dalam aplikasi. Batas khusus proyek dilepas dari
  shortcut umum sesuai kebutuhan Jay untuk membuka proyek lain.
- Launcher baru ~/.codex/helpers/Start-FigCraft-AI.ps1 mencari binary lewat
  App Paths Windows dan beberapa lokasi instalasi, menjalankan --control 7979,
  atau memfokuskan sesi kontrol yang sudah aktif. Mutex mencegah peluncuran
  bersamaan. Launcher berjalan tanpa console; error nyata dicatat/ditampilkan.
  Tidak menutup paksa proses atau dokumen pengguna.
- Shortcut Desktop dan pinned taskbar FigCraft - AI MCP memakai launcher
  yang sama, dengan icon FigCraft. Shortcut sebelumnya dicadangkan dalam
  work/figcraft-repair/. Konfigurasi MCP Codex diperiksa: command Program Files,
  args mcp --attach 7979 sudah benar dan tidak perlu diubah lagi.
- Jendela uji kosong tanpa perubahan ditutup secara normal. Fresh launch
  berhasil, proses 36856 memakai --control 7979 tanpa automation roots.
  Peluncuran ulang lewat pinned shortcut memakai proses yang sama. MCP
  inspect berhasil. File mini-erp.figcraft terbuka dengan dua halaman,
  0 repair dan dirty=false; tidak ada perubahan/simpan pada desain Mini ERP.
- Bukti work/figcraft-repair/launcher-report.json dan log
  ~/.codex/helpers/FigCraft-AI-launcher.log. PETUNJUK dan petunjuk aktif
  diperbarui. Website/desain EAI, commit dan push tidak diubah.

### 2026-11-06 WIB - Revisi | Landing page mengikuti frame 09 (arahan Jay)

- Dikerjakan: FigCraft disambungkan lewat `figcraft-cli mcp --attach 7979`
  (aplikasi dibuka ulang dengan `--control 7979`, desain tidak diubah). Tujuh
  bagian homepage dibangun ulang dari frame 09: Hero, What We Do, Project, How
  It Works, FAQ, ajakan WhatsApp, Footer. Font diganti ke Instrument Serif +
  Manrope. Gambar HP, laptop, contoh layanan dan cover project diekspor dari
  FigCraft ke src/assets/design. PRD, LAYOUT, DESIGN dan AGENTS diperbarui.
- Keputusan Jay: portofolio masuk scope (F-006, S-002, S-003); frame 07 dan 08
  dipakai; karya saat ini dummy; detail Morrow dan Forma dibuat di kode; menu
  memakai "Project" dan ditambahkan ke footer; screenshot demo hero hanya untuk
  pengembangan; landing page dulu, halaman baru menyusul; What We Do hanya
  mengikuti scroll, tidak bisa diklik; animasi masuk hero dipakai; di HP efek
  kursor mati, efek scroll tetap, What We Do tetap menahan layar.
- Animasi: hero mengacu hasil ukur northeasttomato.com (DESIGN bagian 5.0).
  Logomark titik, kartu Services menempel dan cincin Cara Kerja dihapus.
- Bukti: build lolos. Playwright 1440 x 900, 1920 x 1080, 1366 x 640, 768 x
  1024, 390 x 844 dan 375 x 667 tanpa error konsol dan tanpa geser horizontal
  pada ukuran HP yang dicek. Nilai kursor terukur sekitar 11,5 px / 2,3 derajat
  (HP) dan 13,4 px / 3,6 derajat (laptop). Ganti bahasa menjaga posisi scroll dan
  kategori aktif, animasi masuk tidak berulang. Reduced motion: kategori dan alur
  tampil utuh, perangkat diam. Tanpa JS: isi tampil dan gambar termuat.
- Lighthouse HP: `/` 98/96/100/100, `/id/` 96/96/100/100, CLS 0. Accessibility
  96 karena judul yang belum muncul masih samar saat dipindai, sama seperti
  sebelumnya.
- Belum: teks ID terjemahan agent perlu ditinjau; `og-en.png` dan `og-id.png`
  masih gambar lama; tombol View All dan kartu Project belum punya tujuan; ukuran
  label 9 px di frame dinaikkan ke 11 px agar terbaca; animasi belum dicek di HP
  fisik. Belum di-commit.

### 2026-11-06 WIB - Revisi | What We Do tanpa pengantar, daftar muncul mengikuti scroll (arahan Jay)

- Dikerjakan: label "Our capabilities", kalimat pengantar dan garis di bawah
  judul dihapus. Daftar kategori kosong di awal; 01 muncul saat bagian naik ke
  layar, lalu 02 s.d. 04 muncul satu per satu mengikuti scroll dan hilang lagi
  saat di-scroll balik. Isi kanan tetap dimulai dari 01.

### 2026-11-06 WIB - Revisi | What We Do kartu bertumpuk (arahan Jay)

- Jay memilih ide C dari tiga sketsa. Judul dan deskripsi kategori dihapus.
  Isi kanan menjadi kartu terang berisi gambar, pil layanan dan tombol WhatsApp.
  Kartu berikutnya naik menimpa kartu sebelumnya mengikuti scroll; kartu lama
  mengecil sedikit dan tepinya tetap terlihat. Gambar dipakai apa adanya karena
  latarnya sama dengan latar kartu, jadi tidak perlu ekspor ulang.

### 2026-11-06 WIB - Development | Halaman List dan Detail Project (keputusan Jay)

- Dikerjakan: `/projects`, `/id/projects`, dan detail tiga project di dua bahasa
  (10 halaman statis). Filter kategori, perbesar gambar, gambar kartu membesar
  saat pindah ke detail, tautan homepage, menu, footer, tombol bahasa, sitemap dan
  hreflang. Detail Morrow dan Forma dibuat langsung di kode dengan template frame
  08; teks dan potongan gambarnya dummy. Data project disatukan di
  src/data/projects.ts.
- Keputusan Jay: gambar membesar saat pindah ke detail, fade bergantian untuk
  filter, galeri bisa diperbesar dengan animasi.
- Bukti: build lolos, tidak ada error konsol atau tautan 404 pada alur yang
  dicek. Filter, Esc, Next Project, kembali lewat browser, ganti bahasa dengan
  posisi scroll tetap, dan menu ke bagian homepage berjalan. Tanpa JS filter
  tersembunyi, tiga kartu tampil, gambar tetap link ke versi besar.
- Lighthouse HP sebelum perbaikan label link: homepage 98/96/100/100, List
  100/96/100/100 dan 98/96/100/100, Detail 100/96/100/100; CLS 0.
- Deviasi dari frame 08: label "Preview project" menjadi "View project" karena
  semua project kini punya detail; tidak ada pil bahasa di navbar detail, sesuai
  frame.

### 2026-11-06 WIB - Revisi | List dan Detail Project (arahan Jay)

- List: breadcrumb, kalimat pengantar dan teks jumlah dihapus. Tab kategori
  dirombak dari pil berangka "(03)" menjadi tab teks bergaris dengan angka kecil.
- Project dummy ditambah menjadi tujuh: Terrace, Open Gallery, Still Studio dan
  Flowline. Gambarnya dari aset konsep FigCraft yang sudah ada; teks ditulis agent.
  Tab kini memuat empat kategori layanan. Homepage tetap tiga project pertama.
- Detail: Back to Projects pindah ke kiri, logo di tengah, Contact di kanan.
  Tombol Close tampilan besar pindah ke pojok kanan atas.

### 2026-11-06 WIB - Revisi | How It Works diagram alur sederhana (arahan Jay)

- Jay memilih opsi B. Kartu, ikon, label hasil, pil "Start with an idea" dan
  "Ready for what's next", catatan penutup, serta label cabang dihapus. Tiap tahap
  tinggal titik, nama dan satu kalimat. Cabang empat kategori tetap ada sebagai
  pil kecil. Garis tetap tergambar mengikuti scroll.

### 2026-11-06 WIB - Revisi | Judul Project dan How It Works tanpa pengantar (arahan Jay)

- Label kecil "Selected work" dan "Our process" serta kalimat pengantar kedua
  bagian dihapus dari homepage, di EN dan ID.
