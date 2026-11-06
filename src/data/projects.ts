// Data semua project (F-006). Satu tempat untuk mengganti karya: tambah atau ubah
// entri di sini, halaman homepage, List dan Detail ikut berubah.
//
// PLACEHOLDER (BR-002): semua project ini dummy dan akan diganti project asli Jay
// dan tim. Teks EN Studio Workspace dari frame 08 FigCraft; teks project lain
// ditulis agent. Homepage hanya menampilkan tiga project pertama. Teks ID terjemahan agent, perlu ditinjau Jay.

import type { ImageMetadata } from 'astro';
import type { ServiceKey } from '../i18n/content';
import type { Lang } from '../i18n/ui';
import homeStudio from '../assets/design/project-studio.png';
import homeMorrow from '../assets/design/project-morrow.png';
import homeForma from '../assets/design/project-forma.png';
import listStudio from '../assets/design/list-studio.png';
import listMorrow from '../assets/design/list-morrow.png';
import listForma from '../assets/design/list-forma.png';
import studioCover from '../assets/design/detail-studio-cover.png';
import studioBoard from '../assets/design/detail-studio-board.png';
import studioMobile from '../assets/design/detail-studio-mobile.png';
import studioSystem from '../assets/design/detail-studio-system.png';
import morrowCover from '../assets/design/detail-morrow-cover.png';
import morrowType from '../assets/design/detail-morrow-type.png';
import morrowShapes from '../assets/design/detail-morrow-shapes.png';
import morrowWide from '../assets/design/detail-morrow-wide.png';
import formaCover from '../assets/design/detail-forma-cover.png';
import formaVase from '../assets/design/detail-forma-vase.png';
import formaBowl from '../assets/design/detail-forma-bowl.png';
import formaWide from '../assets/design/detail-forma-wide.png';
import listTerrace from '../assets/design/list-terrace.png';
import terraceA from '../assets/design/detail-terrace-a.png';
import terraceB from '../assets/design/detail-terrace-b.png';
import terraceWide from '../assets/design/detail-terrace-wide.png';
import terraceCover from '../assets/design/detail-terrace-cover.png';
import listGallery from '../assets/design/list-gallery.png';
import galleryA from '../assets/design/detail-gallery-a.png';
import galleryB from '../assets/design/detail-gallery-b.png';
import galleryWide from '../assets/design/detail-gallery-wide.png';
import galleryCover from '../assets/design/detail-gallery-cover.png';
import listStill from '../assets/design/list-still.png';
import stillA from '../assets/design/detail-still-a.png';
import stillB from '../assets/design/detail-still-b.png';
import stillWide from '../assets/design/detail-still-wide.png';
import stillCover from '../assets/design/detail-still-cover.png';
import listFlowline from '../assets/design/list-flowline.png';
import flowlineA from '../assets/design/detail-flowline-a.png';
import flowlineB from '../assets/design/detail-flowline-b.png';
import flowlineWide from '../assets/design/detail-flowline-wide.png';
import flowlineCover from '../assets/design/detail-flowline-cover.png';

export type ProjectCategory = ServiceKey;

export interface ProjectCopy {
  name: string;
  services: string;
  chips: string[];
  headline: [string, string];
  teaser: string;
  about: string;
  challenge: string;
  solution: string;
  coverAlt: string;
  coverCaption: string;
  gallery: { alt: string; caption: string }[];
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  placeholder: boolean;
  images: { home: ImageMetadata; list: ImageMetadata; cover: ImageMetadata; gallery: ImageMetadata[] };
  copy: Record<Lang, ProjectCopy>;
}

export const projects: Project[] = [
  {
    slug: 'studio-workspace',
    category: 'digital',
    placeholder: true,
    images: { home: homeStudio, list: listStudio, cover: studioCover, gallery: [studioBoard, studioMobile, studioSystem] },
    copy: {
      en: {
        name: 'Studio Workspace',
        services: 'Apps · ERP System · UI Design',
        chips: ['Apps', 'ERP System', 'UI Design'],
        headline: ['A clearer way to manage', 'projects and everyday work.'],
        teaser: 'A workspace concept for projects, tasks and team activity.',
        about: 'Studio Workspace is a product concept exploring a clearer way to organize projects, tasks and team activity. It brings a shared overview and focused project spaces into one consistent interface.',
        challenge: 'The design challenge was to make both the big picture and the next task easy to follow. The concept needed room for project information while keeping the interface calm, readable and familiar.',
        solution: 'The concept combines a simple project board, clear visual hierarchy and familiar navigation. A complementary mobile view uses the same visual language, with reusable components keeping the experience consistent.',
        coverAlt: 'Studio Workspace concept shown on desktop and phone.',
        coverCaption: 'Desktop + mobile',
        gallery: [
          { alt: 'Close view of the Studio Workspace project board.', caption: 'Project board' },
          { alt: 'Studio Workspace mobile screen.', caption: 'Mobile workspace' },
          { alt: 'Type, colour and reusable components of Studio Workspace.', caption: 'Type, color and reusable components' },
        ],
      },
      id: {
        name: 'Studio Workspace',
        services: 'Aplikasi · ERP System · Desain UI',
        chips: ['Aplikasi', 'ERP System', 'Desain UI'],
        headline: ['Cara lebih jelas mengelola', 'project dan pekerjaan harian.'],
        teaser: 'Konsep workspace untuk project, tugas dan aktivitas tim.',
        about: 'Studio Workspace adalah konsep produk yang mengeksplorasi cara lebih jelas untuk mengatur project, tugas dan aktivitas tim. Ringkasan bersama dan ruang project yang fokus disatukan dalam satu tampilan yang konsisten.',
        challenge: 'Tantangan desainnya adalah membuat gambaran besar dan tugas berikutnya sama-sama mudah diikuti. Konsep ini perlu ruang untuk informasi project, sambil menjaga tampilan tetap tenang, mudah dibaca dan familier.',
        solution: 'Konsep ini memadukan papan project yang sederhana, hierarki visual yang jelas dan navigasi yang familier. Tampilan mobile memakai bahasa visual yang sama, dengan komponen yang bisa dipakai ulang agar pengalamannya konsisten.',
        coverAlt: 'Konsep Studio Workspace di desktop dan HP.',
        coverCaption: 'Desktop + mobile',
        gallery: [
          { alt: 'Tampilan dekat papan project Studio Workspace.', caption: 'Papan project' },
          { alt: 'Layar mobile Studio Workspace.', caption: 'Workspace mobile' },
          { alt: 'Huruf, warna dan komponen Studio Workspace.', caption: 'Huruf, warna dan komponen' },
        ],
      },
    },
  },
  {
    slug: 'morrow',
    category: 'design',
    placeholder: true,
    images: { home: homeMorrow, list: listMorrow, cover: morrowCover, gallery: [morrowType, morrowShapes, morrowWide] },
    copy: {
      en: {
        name: 'Morrow',
        services: 'Graphic Design · Visual Exploration',
        chips: ['Graphic Design', 'Visual Exploration'],
        headline: ['A graphic exploration of', 'type, shape and perspective.'],
        teaser: 'A graphic exploration of type, shape and a fresh perspective.',
        about: 'Morrow is a graphic concept exploring how type and simple shapes can carry one clear message. The poster series starts from a single line and builds a calm visual rhythm around it.',
        challenge: 'The challenge was to say more with less. The layout needed to feel confident and warm, using only a few shapes and a small colour palette.',
        solution: 'A large serif headline leads the composition, while soft arches and a circle add depth below it. The restrained palette keeps attention on the message.',
        coverAlt: 'Morrow poster concept in green with arched shapes.',
        coverCaption: 'Poster concept',
        gallery: [
          { alt: 'Close view of the Morrow poster headline.', caption: 'Type study' },
          { alt: 'Close view of the arched shapes on the Morrow poster.', caption: 'Shape study' },
          { alt: 'Wide crop of the Morrow poster shapes.', caption: 'Composition' },
        ],
      },
      id: {
        name: 'Morrow',
        services: 'Desain Grafis · Eksplorasi Visual',
        chips: ['Desain Grafis', 'Eksplorasi Visual'],
        headline: ['Eksplorasi grafis tentang', 'huruf, bentuk dan sudut pandang.'],
        teaser: 'Eksplorasi grafis tentang huruf, bentuk dan sudut pandang baru.',
        about: 'Morrow adalah konsep grafis yang mengeksplorasi bagaimana huruf dan bentuk sederhana bisa membawa satu pesan yang jelas. Seri poster ini berawal dari satu kalimat dan membangun irama visual yang tenang di sekitarnya.',
        challenge: 'Tantangannya adalah menyampaikan lebih banyak dengan lebih sedikit. Tata letaknya perlu terasa yakin dan hangat, hanya dengan beberapa bentuk dan palet warna kecil.',
        solution: 'Judul serif besar memimpin komposisi, sementara lengkung lembut dan lingkaran menambah kedalaman di bawahnya. Palet yang terbatas menjaga perhatian tetap pada pesan.',
        coverAlt: 'Konsep poster Morrow berwarna hijau dengan bentuk lengkung.',
        coverCaption: 'Konsep poster',
        gallery: [
          { alt: 'Tampilan dekat judul poster Morrow.', caption: 'Studi huruf' },
          { alt: 'Tampilan dekat bentuk lengkung poster Morrow.', caption: 'Studi bentuk' },
          { alt: 'Potongan lebar bentuk pada poster Morrow.', caption: 'Komposisi' },
        ],
      },
    },
  },
  {
    slug: 'forma-material-studies',
    category: 'design',
    placeholder: true,
    images: { home: homeForma, list: listForma, cover: formaCover, gallery: [formaVase, formaBowl, formaWide] },
    copy: {
      en: {
        name: 'Forma Material Studies',
        services: '3D Design & Visualization',
        chips: ['3D Design', 'Visualization'],
        headline: ['Studying form, light', 'and material in 3D.'],
        teaser: 'A 3D study of form, light and ceramic texture.',
        about: 'Forma Material Studies is a 3D visualization concept exploring how soft forms and natural materials read on screen. Two ceramic objects are used to study surface, light and proportion.',
        challenge: 'The challenge was to make digital objects feel tactile. The surfaces needed visible texture and believable light without looking overworked.',
        solution: 'A warm, simple setting lets the objects stay in focus. Soft directional light brings out the grain of the ceramic and the quiet curves of each form.',
        coverAlt: '3D render of two softly coloured ceramic objects.',
        coverCaption: '3D render',
        gallery: [
          { alt: 'Close view of the cream ceramic vase.', caption: 'Vase study' },
          { alt: 'Close view of the sage ceramic bowl.', caption: 'Bowl study' },
          { alt: 'Wide view of both ceramic objects.', caption: 'Light and proportion' },
        ],
      },
      id: {
        name: 'Forma Material Studies',
        services: 'Desain & Visualisasi 3D',
        chips: ['Desain 3D', 'Visualisasi'],
        headline: ['Mempelajari bentuk, cahaya', 'dan material dalam 3D.'],
        teaser: 'Studi 3D tentang bentuk, cahaya dan tekstur keramik.',
        about: 'Forma Material Studies adalah konsep visualisasi 3D yang mengeksplorasi bagaimana bentuk lembut dan material alami terlihat di layar. Dua benda keramik dipakai untuk mempelajari permukaan, cahaya dan proporsi.',
        challenge: 'Tantangannya adalah membuat benda digital terasa bisa disentuh. Permukaannya perlu tekstur yang terlihat dan cahaya yang meyakinkan, tanpa tampak berlebihan.',
        solution: 'Latar yang hangat dan sederhana membuat benda tetap menjadi fokus. Cahaya lembut dari satu arah menonjolkan butiran keramik dan lengkung halus tiap bentuk.',
        coverAlt: 'Render 3D dua benda keramik berwarna lembut.',
        coverCaption: 'Render 3D',
        gallery: [
          { alt: 'Tampilan dekat vas keramik krem.', caption: 'Studi vas' },
          { alt: 'Tampilan dekat mangkuk keramik hijau pucat.', caption: 'Studi mangkuk' },
          { alt: 'Tampilan lebar kedua benda keramik.', caption: 'Cahaya dan proporsi' },
        ],
      },
    },
  },
  {
    slug: 'terrace',
    category: 'digital',
    placeholder: true,
    images: { home: listTerrace, list: listTerrace, cover: terraceCover, gallery: [terraceA, terraceB, terraceWide] },
    copy: {
      en: {
        name: 'Terrace',
        services: 'Apps · UI Design',
        chips: ['Apps', 'UI Design'],
        headline: ['An everyday app for', 'slower, simpler plans.'],
        teaser: 'A mobile app concept for planning days out with less effort.',
        about: 'Terrace is a mobile app concept for planning a day out. It brings places, notes and bookings into one calm view that is easy to use on the go.',
        challenge: 'The challenge was to keep the app useful outdoors. Screens needed large touch areas, short text and clear contrast in bright light.',
        solution: 'A single scrolling plan replaces separate lists. Each stop shows only what matters next, with details one tap away.',
        coverAlt: 'A person using the Terrace app on a sunny terrace.',
        coverCaption: 'App in use',
        gallery: [
          { alt: 'Close view of a hand holding a phone with the Terrace app.', caption: 'Mobile view' },
          { alt: 'Plants and a sea view on the terrace.', caption: 'Mood and setting' },
          { alt: 'Wide view of the terrace with a phone in hand.', caption: 'Everyday context' },
        ],
      },
      id: {
        name: 'Terrace',
        services: 'Aplikasi · Desain UI',
        chips: ['Aplikasi', 'Desain UI'],
        headline: ['Aplikasi harian untuk', 'rencana yang lebih santai.'],
        teaser: 'Konsep aplikasi mobile untuk merencanakan hari di luar dengan lebih mudah.',
        about: 'Terrace adalah konsep aplikasi mobile untuk merencanakan hari di luar. Tempat, catatan dan reservasi disatukan dalam satu tampilan tenang yang mudah dipakai saat bepergian.',
        challenge: 'Tantangannya adalah menjaga aplikasi tetap berguna di luar ruangan. Layarnya perlu area sentuh besar, teks singkat dan kontras jelas di bawah cahaya terang.',
        solution: 'Satu rencana yang bisa digulir menggantikan daftar yang terpisah. Tiap pemberhentian hanya menampilkan yang penting berikutnya, dengan detail satu ketukan lagi.',
        coverAlt: 'Seseorang memakai aplikasi Terrace di teras yang cerah.',
        coverCaption: 'Aplikasi dipakai',
        gallery: [
          { alt: 'Tampilan dekat tangan memegang HP dengan aplikasi Terrace.', caption: 'Tampilan mobile' },
          { alt: 'Tanaman dan pemandangan laut di teras.', caption: 'Suasana' },
          { alt: 'Tampilan lebar teras dengan HP di tangan.', caption: 'Konteks harian' },
        ],
      },
    },
  },
  {
    slug: 'open-gallery',
    category: 'design',
    placeholder: true,
    images: { home: listGallery, list: listGallery, cover: galleryCover, gallery: [galleryA, galleryB, galleryWide] },
    copy: {
      en: {
        name: 'Open Gallery',
        services: 'Graphic Design · 3D Visualization',
        chips: ['Graphic Design', '3D Visualization'],
        headline: ['An exhibition identity', 'seen in its own space.'],
        teaser: 'An exhibition identity visualized inside a bright gallery.',
        about: 'Open Gallery is a concept for an exhibition identity. Panels, prints and a small sculpture were placed in a 3D gallery to test how the graphics feel at full scale.',
        challenge: 'Graphics that work on a screen can fall apart on a wall. The concept needed to stay clear from across the room and still reward a closer look.',
        solution: 'Large shapes carry the identity from a distance, while smaller prints add detail up close. The 3D space made it easy to compare scale before anything was produced.',
        coverAlt: 'A bright gallery with graphic panels and a small sculpture.',
        coverCaption: '3D gallery view',
        gallery: [
          { alt: 'Close view of the tall graphic panel.', caption: 'Main panel' },
          { alt: 'Close view of the sculpture on its plinth.', caption: 'Sculpture' },
          { alt: 'Wide view of the gallery floor and panels.', caption: 'Exhibition space' },
        ],
      },
      id: {
        name: 'Open Gallery',
        services: 'Desain Grafis · Visualisasi 3D',
        chips: ['Desain Grafis', 'Visualisasi 3D'],
        headline: ['Identitas pameran yang', 'dilihat di ruangnya sendiri.'],
        teaser: 'Identitas pameran yang divisualisasikan di dalam galeri yang terang.',
        about: 'Open Gallery adalah konsep identitas pameran. Panel, cetakan dan patung kecil ditempatkan di galeri 3D untuk menguji rasa grafisnya dalam ukuran penuh.',
        challenge: 'Grafis yang bagus di layar bisa gagal di dinding. Konsep ini perlu tetap jelas dari seberang ruangan dan tetap menarik saat dilihat dari dekat.',
        solution: 'Bentuk besar membawa identitas dari jauh, sementara cetakan kecil menambah detail dari dekat. Ruang 3D memudahkan membandingkan skala sebelum apa pun diproduksi.',
        coverAlt: 'Galeri terang dengan panel grafis dan patung kecil.',
        coverCaption: 'Tampilan galeri 3D',
        gallery: [
          { alt: 'Tampilan dekat panel grafis tinggi.', caption: 'Panel utama' },
          { alt: 'Tampilan dekat patung di atas alasnya.', caption: 'Patung' },
          { alt: 'Tampilan lebar lantai galeri dan panel.', caption: 'Ruang pameran' },
        ],
      },
    },
  },
  {
    slug: 'still-studio',
    category: 'content',
    placeholder: true,
    images: { home: listStill, list: listStill, cover: stillCover, gallery: [stillA, stillB, stillWide] },
    copy: {
      en: {
        name: 'Still Studio',
        services: 'Video & Multimedia Editing',
        chips: ['Video Editing', 'Multimedia'],
        headline: ['A content series made', 'from one quiet room.'],
        teaser: 'A short content series shot and edited around one studio.',
        about: 'Still Studio is a content concept for a small creative team. One workspace is filmed in different light to build a consistent series for social media.',
        challenge: 'Regular content can quickly look repetitive. The series needed variety without new locations or a larger production.',
        solution: 'The same desk is shot from day to night, with a simple editing template. Changing light gives each episode its own mood while the format stays familiar.',
        coverAlt: 'A bright studio desk with a monitor and plants.',
        coverCaption: 'Daylight set',
        gallery: [
          { alt: 'Close view of the monitor on the bright desk.', caption: 'Day edit' },
          { alt: 'Close view of the monitor at night.', caption: 'Night edit' },
          { alt: 'Wide view of the studio at night.', caption: 'Evening set' },
        ],
      },
      id: {
        name: 'Still Studio',
        services: 'Editing Video & Multimedia',
        chips: ['Editing Video', 'Multimedia'],
        headline: ['Seri konten yang lahir', 'dari satu ruangan tenang.'],
        teaser: 'Seri konten pendek yang direkam dan diedit di satu studio.',
        about: 'Still Studio adalah konsep konten untuk tim kreatif kecil. Satu ruang kerja direkam dalam cahaya berbeda untuk membangun seri media sosial yang konsisten.',
        challenge: 'Konten rutin cepat terasa berulang. Seri ini perlu variasi tanpa lokasi baru atau produksi yang lebih besar.',
        solution: 'Meja yang sama direkam dari siang ke malam, dengan template editing yang sederhana. Perubahan cahaya memberi suasana berbeda di tiap episode, sementara formatnya tetap familier.',
        coverAlt: 'Meja studio yang terang dengan monitor dan tanaman.',
        coverCaption: 'Set siang hari',
        gallery: [
          { alt: 'Tampilan dekat monitor di meja yang terang.', caption: 'Edit siang' },
          { alt: 'Tampilan dekat monitor pada malam hari.', caption: 'Edit malam' },
          { alt: 'Tampilan lebar studio pada malam hari.', caption: 'Set malam' },
        ],
      },
    },
  },
  {
    slug: 'flowline',
    category: 'ai',
    placeholder: true,
    images: { home: listFlowline, list: listFlowline, cover: flowlineCover, gallery: [flowlineA, flowlineB, flowlineWide] },
    copy: {
      en: {
        name: 'Flowline',
        services: 'Automation · Agentic AI',
        chips: ['Automation', 'Agentic AI'],
        headline: ['Routine requests, handled', 'with a person in the loop.'],
        teaser: 'A workflow concept that sorts requests and keeps people in control.',
        about: 'Flowline is an automation concept for teams that receive many similar requests. New messages are read, sorted and prepared before anyone opens them.',
        challenge: 'Automation is only useful when people can trust it. The flow needed to save time without hiding what happened to each request.',
        solution: 'An AI step reviews and prepares each request, then a person confirms the result. Every step stays visible, so the team can correct it at any time.',
        coverAlt: 'A three-step workflow diagram with a person in the loop.',
        coverCaption: 'Workflow overview',
        gallery: [
          { alt: 'Close view of the first workflow step.', caption: 'New request' },
          { alt: 'Close view of the last workflow step.', caption: 'Ready for action' },
          { alt: 'The complete workflow diagram.', caption: 'Complete flow' },
        ],
      },
      id: {
        name: 'Flowline',
        services: 'Automation · Agentic AI',
        chips: ['Automation', 'Agentic AI'],
        headline: ['Permintaan rutin ditangani,', 'manusia tetap memegang kendali.'],
        teaser: 'Konsep alur kerja yang memilah permintaan dan menjaga kendali di tangan tim.',
        about: 'Flowline adalah konsep automation untuk tim yang menerima banyak permintaan serupa. Pesan baru dibaca, dipilah dan disiapkan sebelum ada yang membukanya.',
        challenge: 'Automation hanya berguna kalau bisa dipercaya. Alurnya perlu menghemat waktu tanpa menyembunyikan apa yang terjadi pada tiap permintaan.',
        solution: 'Satu langkah AI meninjau dan menyiapkan tiap permintaan, lalu seseorang mengonfirmasi hasilnya. Setiap langkah tetap terlihat, jadi tim bisa memperbaikinya kapan saja.',
        coverAlt: 'Diagram alur kerja tiga langkah dengan peninjauan manusia.',
        coverCaption: 'Ringkasan alur kerja',
        gallery: [
          { alt: 'Tampilan dekat langkah pertama alur kerja.', caption: 'Permintaan baru' },
          { alt: 'Tampilan dekat langkah terakhir alur kerja.', caption: 'Siap ditindaklanjuti' },
          { alt: 'Diagram alur kerja lengkap.', caption: 'Alur lengkap' },
        ],
      },
    },
  },
];

export const nextProject = (slug: string): Project => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
