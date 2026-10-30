# Product - EAI Tech

## Metadata

- Tujuan: identitas, kebutuhan pengalaman, prinsip, voice/copy dan identitas visual.
- Batas: fitur/flow/screens di PRD, adaptasi referensi di VISUAL-DNA, susunan di
  LAYOUT, nilai teknis token/komponen di DESIGN.
- Status spesifikasi: arah desain disetujui Jay bersama Brief (2026-10-28);
  font dan mode bagian 5 disetujui bersama VISUAL-DNA (2026-10-29). Palet
  tetap perkiraan sampai P-011. Lihat PROGRESS.
- Rujukan langsung: [PRD.md](PRD.md) bagian 1 (pengguna), FL-001, FL-002.
- Peta dokumen: [AGENTS.md](AGENTS.md) bagian 1.

## 1. Identitas

- Nama: EAI Tech. Logo menulisnya "eAI Tech" (huruf e kecil).
- Kepanjangan pada logo: "Equator Andalas Intelegens". Ejaan "Intelegens"
  perlu dikonfirmasi ke pembuat logo (P-012).
- Karakter yang diinginkan Jay: modern, bersih, profesional, tidak pasaran, dan
  tidak terlihat seperti tampilan generik hasil AI ("AI slop").
- Aset existing (di root proyek):
  - `Logomark.png` - simbol pita tiga lengkung bergradasi aqua ke teal tua,
    1254x1254, latar transparan.
  - `Logo 2.png` - simbol + tulisan "eAI Tech" + garis pemisah + kepanjangan,
    2172x724, latar transparan. Tulisannya putih, jadi logo ini dibuat untuk
    latar gelap.
  - Keduanya raster PNG dengan efek glow dan sedikit noise pixel di tepi. Untuk
    web lebih baik ada file vektor (SVG) dari pembuatnya (P-011).

## 2. Kebutuhan Pengguna & Pengalaman

Pengunjung adalah calon klien yang belum mengenal EAI Tech (PRD bagian 1).
EAI Tech belum punya portofolio, jadi kepercayaan dibangun dari kejelasan
layanan, proses kerja yang terbuka, dan tampilan yang rapi. Jalur utamanya
pendek: paham layanan → chat WhatsApp (FL-001). Pengalaman harus sama baiknya
di desktop, HP, tablet dan layar besar (PRD bagian 4).

## 3. Prinsip Desain

| Prinsip konkret | Implikasi pada pengalaman | Contoh penerapan |
|---|---|---|
| Jelas dalam 5 detik | Hero langsung menyebut apa yang dikerjakan EAI Tech | Judul hero menyebut layanan, bukan slogan abstrak |
| Satu tindakan utama | WhatsApp selalu mudah dijangkau, tanpa ajakan lain yang bersaing | Tombol umum + tombol per layanan (BR-003) |
| Jujur sebagai tim baru | Tidak ada angka klien, testimoni atau logo klien rekaan | Kepercayaan lewat Cara Kerja dan FAQ |
| Khas, tidak template | Hindari pola landing page generik: gradien ungu, ikon-kartu seragam, kalimat bombastis | Detail dibahas di tahap Reference (VISUAL-DNA) |

## 4. Voice, Copy & Glosarium

- Bahasa/register: Indonesia (default) dan Inggris. Nada profesional tapi tidak kaku.
- Copy final belum ada (PRD P-002, P-008). Draft layanan dari teman tim hanya
  bahan awal dan perlu disunting agar tidak terdengar seperti hasil AI.

| Istilah | Arti/pemakaian |
|---|---|
| EAI Tech | Nama brand; ditulis "eAI Tech" pada logo (penulisan di teks: P-012) |
| Agentic AI | Nama layanan, dipertahankan dalam bahasa Inggris di kedua bahasa |
| ERP System | Nama layanan, dipertahankan dalam bahasa Inggris di kedua bahasa |

## 5. Arah Visual & Identitas

| Elemen | Keputusan yang berlaku | Sumber/approval |
|---|---|---|
| Palet brand | Diambil dari logo (lihat tabel di bawah). Nilai resmi menunggu pembuat logo (P-011) | Sampel pixel oleh agent, 2026-10-28; belum disetujui |
| Font identity | Mengikuti gaya logo: sans-serif geometris, juga untuk judul (bukan serif). Nama font logo belum diketahui (P-011); font web: Sora (DESIGN bagian 2, P-021) | Keputusan Jay, 2026-10-29 |
| Mood/treatment umum | Modern, bersih, profesional, tidak pasaran | Jay, 2026-10-28 |
| Mode | Bagian terang dan gelap berselang-seling. Di bagian terang, logo perlu varian bertulisan gelap atau cukup logomark (P-011) | Keputusan Jay, 2026-10-29 |

Warna hasil sampel pixel `Logomark.png` dan `Logo 2.png` (perkiraan, bukan token resmi):

| Peran perkiraan | Hex | Lokasi di logo |
|---|---|---|
| Aqua terang (warna utama) | `#02E6DF` | Lengkung kiri |
| Aqua muda | `#73F9F0` | Lengkung atas |
| Mint pucat | `#CEFBF2` | Lengkung kanan |
| Teal sedang | `#029492` | Bayangan lengkung kiri |
| Teal garis pemisah | `#03A597` | Garis vertikal di logo teks |
| Teal tua | `#025552` | Lipatan dalam |
| Teks logo | `#FFFFFF` | Tulisan "eAI Tech" |
