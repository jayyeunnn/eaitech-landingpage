# LAYOUT - Landing Page EAI Tech

## Metadata

- Tujuan: susunan dan hierarki halaman, shell bersama, penempatan state.
- Batas: aturan bisnis di PRD, identitas di product.md, craft di VISUAL-DNA,
  nilai token/komponen/interaksi di DESIGN.
- Status spesifikasi: DISETUJUI Jay, 2026-10-29 (persetujuan Jay saja, bukan
  tim - P-003). Placeholder tetap tunduk BR-002; nilai visual di DESIGN.
- Rujukan langsung: PRD S-001, F-001 s.d. F-005, FL-001, FL-002, BR-001 s.d.
  BR-004; VISUAL-DNA bagian 2-4.
- Peta dokumen: [AGENTS.md](AGENTS.md) bagian 1.

## 1. Shared Shell & Pola Layout

- Satu halaman panjang (S-001) dengan enam bagian. Dua versi URL dengan susunan
  identik: `/` (EN, default sejak revisi 2026-10-29) dan `/id` (ID).
- Header tidak menempel (revisi Jay 2026-10-30): tetap di atas halaman dan ikut
  tergulir. Link navigasi melompat ke bagian (anchor); bagian Layanan dan Cara
  Kerja menempel selayar penuh.
- Kolom konten di tengah dengan garis tipis vertikal kiri-kanan (VISUAL-DNA,
  kolom bergaris). Garis ini menerus melewati semua bagian sebagai "rangka".
- Bagian terang (T) dan gelap (G) berselang-seling:

| Urutan | Bagian | Mode | Sambungan di batas bawah |
|---|---|---|---|
| 1 | Hero | T | Pita logo turun menembus ke Layanan |
| 2 | Layanan | G | Garis tegas |
| 3 | Cara Kerja | T | Garis tegas |
| 4 | FAQ | G | Garis tegas |
| 5 | Ajakan WhatsApp | T | Judul raksasa tebal sedikit di atas batas Footer |
| 6 | Footer | G | - |

- Titik ukuran layar (nilai pasti di DESIGN): desktop sebagai acuan desain
  (sekitar 1440 px), lalu HP, tablet, dan layar besar/TV.

## 2. Screen dalam Scope

### S-001 - Landing page

- Tujuan/konteks: pengunjung paham layanan lalu chat WhatsApp (PRD bagian 1).
- Fitur/flow: F-001 s.d. F-005, FL-001, FL-002. Publik, tanpa role.

#### Wireframe desktop (acuan)

```text
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER (tidak menempel)                                              │
│ [◎ eAI Tech]               Layanan  Cara Kerja  FAQ        ( ID | EN )│
├────┬────────────────────────────────────────────────────────────┬────┤
│    │ 1. HERO  (terang)                                          │    │
│    │                                                            │    │
│    │  Judul besar sans-serif,              . · ∙ ● ∙ · .        │    │
│    │  2-3 baris, menyebut                ·   pita logo   ·      │    │
│    │  apa yang dikerjakan EAI Tech      ∙  dari titik-titik ∙   │    │
│    │                                     ·   bergerak pelan ·   │    │
│    │  Kalimat pendukung singkat            · ∙ ●  ∙ ·           │    │
│    │                                             ╲              │    │
│    │  [Chat via WhatsApp ↗]                       ╲             │    │
├────┼───────────────────────────────────────────────╲────────────┼────┤
│    │ 2. LAYANAN  (gelap)          pita menembus →    ╲           │    │
│    │  Judul bagian (muncul saat scroll)                          │    │
│    │  ─────────────────────────────────────────────────────────  │    │
│    │  01  Website      Penjelasan singkat...    [Diskusikan ↗]   │    │
│    │  ─────────────────────────────────────────────────────────  │    │
│    │  02  Aplikasi     Penjelasan singkat...    [Diskusikan ↗]   │    │
│    │  ─────────────────────────────────────────────────────────  │    │
│    │  03  Automation   ...                      [Diskusikan ↗]   │    │
│    │  04  Agentic AI   ...                      [Diskusikan ↗]   │    │
│    │  05  ERP System   ...                      [Diskusikan ↗]   │    │
│    │  ─────────────────────────────────────────────────────────  │    │
├────┼────────────────────────────────────────────────────────────┼────┤
│    │ 3. CARA KERJA  (terang)                                    │    │
│    │  Judul bagian                                              │    │
│    │  ┌ ilustrasi ┐  ┌ ilustrasi ┐  ┌ ilustrasi ┐  ┌ ilustrasi ┐  │    │
│    │  │  titik    │  │  titik    │  │  titik    │  │  titik    │  │    │
│    │  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │    │
│    │  01 Langkah     02 Langkah     03 Langkah     04 Langkah    │    │
│    │  placeholder    placeholder    placeholder    placeholder   │    │
├────┼────────────────────────────────────────────────────────────┼────┤
│    │ 4. FAQ  (gelap)                                            │    │
│    │  Judul bagian   │ Pertanyaan 1 (placeholder)          [+]  │    │
│    │  di kiri        │ ──────────────────────────────────────── │    │
│    │                 │ Pertanyaan 2                        [+]  │    │
│    │                 │ ...                                      │    │
├────┼────────────────────────────────────────────────────────────┼────┤
│    │ 5. AJAKAN WHATSAPP  (terang)                               │    │
│    │  Kalimat ajakan besar                                      │    │
│    │  [Chat via WhatsApp ↗]                    ╭──╮             │    │
│    │                                          ╭╯  ╰╮ pita logo  │    │
├────┴─────────────────────────────────────────╯────╰─────────────┴────┤
│ 6. FOOTER  (gelap)            ← judul raksasa ajakan duduk di batas  │
│  [◎ eAI Tech]        Navigasi        Kontak            ID | EN       │
│  Equator Andalas     Layanan         WhatsApp                        │
│  Intelegens          Cara Kerja      Email (placeholder)             │
│                      FAQ             Instagram (placeholder)         │
│                                      LinkedIn (placeholder)          │
│  © 2026 EAI Tech                                                     │
└──────────────────────────────────────────────────────────────────────┘
```

#### Hierarki & Pengelompokan

1. Judul hero + tombol Chat via WhatsApp: pesan utama dan tindakan utama.
2. Daftar layanan dengan tombol per layanan (F-001, F-002, BR-003).
3. Cara Kerja dan FAQ untuk membangun kepercayaan (F-003, F-004).
4. Ajakan WhatsApp penutup untuk pengunjung yang sudah membaca sampai bawah.
5. Footer: identitas, navigasi ulang, kontak, pilihan bahasa.

Tombol WhatsApp umum muncul di hero, ajakan penutup dan footer (header tanpa
tombol WA sejak revisi 2026-10-29); tombol per
layanan di setiap baris Layanan.

#### Catatan Layout & Craft

- Revisi tata letak Jay 2026-10-30: isi semua bagian melebar hampir ke tepi
  layar (jarak tepi 40 px desktop); judul Services, How it works dan FAQ besar
  tebal kapital; label kecil "Services" dihapus; How it works dan FAQ
  diperbesar; area ajakan dipersempit (±430 px tinggi di desktop); tag
  placeholder tidak tampil (BR-002 direvisi).
- Hero (revisi Jay 2026-10-29/30): tanpa garis rangka; satu kalimat judul di
  kiri (tombol WA dihapus 2026-10-30). Logomark dari titik duduk tepat di batas Hero → Layanan, separuh
  bawahnya meleleh ke latar gelap Layanan (konsep B, gaya sambungan REF-001/
  REF-002). HP/tablet: logomark di bawah teks, tetap duduk di batas.
- Layanan (revisi Jay 2026-10-29): tanpa garis; lima kartu rounded vertikal
  berjajar kiri → kanan. Atas gambar penuh (placeholder), bawah nomor, judul,
  deskripsi, tombol Discuss. Bagian menempel saat di-scroll; kartu muncul satu
  per satu mulai 01 dan deretan bergeser. Ekor logomark hero ikut menempel di
  atas bagian ini.
- Cara Kerja: jumlah langkah belum diketahui (P-008); memakai 4 langkah
  placeholder. Revisi Jay 2026-10-30: bagian menempel selayar penuh (terang);
  kiri cincin progres titik yang terisi mengikuti scroll, kanan label, nomor
  besar (1-4, tanpa nol dan tanpa "/ 4"), judul dan deskripsi yang berganti
  per langkah. Tanpa JS/reduced motion: daftar empat langkah biasa.
- FAQ (revisi Jay 2026-10-30, REF-003): tanpa garis rangka; judul raksasa di
  atas selebar kolom; di bawahnya label "FAQ" di kiri dan daftar buka-tutup di
  kanan (desktop), satu kolom di tablet/HP.
- Ajakan WhatsApp (revisi Jay 2026-10-30, REF-003): satu link ke WhatsApp -
  kalimat ajakan kiri atas, panah garis raksasa kanan atas, lalu judul raksasa
  tebal "Let's talk" / "Ayo ngobrol" sedikit di atas batas footer.
- Footer (revisi Jay 2026-10-30, REF-003/REF-004): tiga kolom (navigasi,
  kontak, bahasa), garis putus-putus, kepanjangan logo di tengah, baris
  copyright dan "kembali ke atas", lalu nama "eAI Tech" tebal selebar layar
  yang terpotong di dasar halaman (mengubah P-017). HP: tombol WA menempel
  menyingkir saat nama ini terlihat (usulan agent).
- Kontak footer: WhatsApp + slot Email, Instagram, LinkedIn berisi placeholder
  sampai tim memberi data (P-016, BR-002).
- Teks judul bagian muncul dari samar ke terang saat di-scroll (VISUAL-DNA).

#### Penempatan State & Overlay

| State relevan | Lokasi/area | Rujukan behavior/presentasi |
|---|---|---|
| Bahasa aktif | Tombol ID/EN di header dan footer; bahasa aktif ditandai | DESIGN; BR-004 |
| Ganti bahasa | Pindah ke URL bahasa lain di bagian yang sama | FL-002 |
| FAQ terbuka/tertutup | Baris pertanyaan; jawaban muncul di bawahnya | DESIGN |
| Reduced motion | Animasi titik dan pita tampil diam; teks langsung terlihat | DESIGN |
| JavaScript gagal/mati | Semua teks, link WA dan FAQ tetap berfungsi; hanya animasi hilang | DESIGN |
| Tombol WA ditekan | WhatsApp terbuka di tab/aplikasi baru; halaman tetap di tempat | FL-001 |
| Konten placeholder | Ditandai jelas di Cara Kerja, FAQ, copy layanan, kontak footer | BR-002 |
| Tombol WA menempel (HP) | Menempel di bawah layar; tanpa menu hamburger | P-018, DESIGN |

#### Adaptasi Platform

- **Layar besar/TV:** lebar kolom konten dibatasi agar baris teks tidak terlalu
  panjang; ukuran huruf naik bertahap; area kosong kiri-kanan diisi garis rangka
  dan latar bagian. Tidak ada navigasi remote (P-015).
- **Tablet:** hero tetap dua kolom bila cukup lebar, atau animasi pindah ke
  bawah teks. Cara Kerja menjadi 2x2. FAQ menjadi satu kolom.
- **HP:**
  - Navigasi (P-018): tanpa menu hamburger; header berisi logo dan pil
    bahasa. Tombol WA menempel dihapus permanen (revisi Jay 2026-10-30).
  - Hero: teks di atas, animasi pita di bawah (lebih kecil dan lebih ringan).
  - Layanan: kartu tetap berjajar horizontal (satu kartu utuh + sebagian kartu berikutnya terlihat).
  - Cara Kerja: tetap menempel; cincin di atas (lebih kecil), teks di bawah.
  - Footer: kolom bertumpuk.
- **Keyboard:** semua tombol dan link bisa dijangkau dengan Tab; ada link
  "lompat ke konten" di awal halaman (detail di DESIGN).
