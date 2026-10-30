// Titik-titik berkumpul membentuk pita logomark lalu bergerak pelan seperti
// bernapas (P-025, DESIGN bagian 5). Bentuk dan warna titik diambil dari
// gambar logomark yang sudah ada di hero, jadi tetap mengikuti logo EAI Tech.
//
// Logomark duduk di batas Hero → Layanan (revisi Jay 2026-10-29): titik di
// bawah batas memudar dan sebagian menetes ke bawah, sehingga separuh bawah
// logomark terlihat meleleh ke latar gelap Layanan.
//
// Tidak berjalan bila reduced motion aktif; gambar logomark diam tetap tampil.
// Gambar itu juga menjadi fallback bila JavaScript gagal.

import { animate } from 'motion';

interface Dot {
  tx: number; // posisi akhir, 0..1 terhadap kotak gambar
  ty: number;
  sx: number; // posisi awal acak
  sy: number;
  delay: number;
  phase: number;
  drip: number; // 0..1; titik di bawah batas dengan nilai kecil ikut menetes
  speed: number;
  color: string;
}

const MAX_DOTS_DESKTOP = 800;
const MAX_DOTS_MOBILE = 300;
const ASSEMBLE_SECONDS = 1.5;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DRIP_SHARE = 0.22;
const DRIP_ROOM = 0.35; // ruang tambahan di bawah gambar untuk tetesan

// Visual hero dan wadah ekornya dipertahankan saat ganti bahasa
// (transition:persist), jadi animasi tidak mulai ulang; cukup ukur ulang
// garis batas setelah isi halaman ditukar.
let refresh: (() => void) | null = null;

export function initHeroRibbon() {
  const stage = document.querySelector<HTMLElement>('[data-ribbon-stage]');
  const img = stage?.querySelector<HTMLImageElement>('img');
  if (!stage || !img) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (stage.dataset.ribbonReady !== undefined) {
    refresh?.();
    return;
  }
  stage.dataset.ribbonReady = '';

  const start = () => setup(stage, img).catch(() => {
    // Gagal mengambil piksel: biarkan gambar diam.
  });
  if (img.complete) start();
  else img.addEventListener('load', start, { once: true });
}

async function setup(stage: HTMLElement, img: HTMLImageElement) {
  await img.decode();
  const maxDots = window.innerWidth < 768 ? MAX_DOTS_MOBILE : MAX_DOTS_DESKTOP;
  const dots = sampleDots(img, maxDots);
  if (dots.length === 0) return;

  // Dua canvas: bagian atas di hero, bagian bawah (yang meleleh) di wadah
  // `[data-ribbon-tail]` milik Layanan, sehingga ikut menempel saat Layanan
  // di-scroll (arahan Jay 2026-10-30). Tanpa wadah itu semuanya di hero.
  const tail = document.querySelector<HTMLElement>('[data-ribbon-tail]');
  const upper = makeCanvas(stage);
  const lower = tail ? makeCanvas(tail) : null;
  const uctx = upper.getContext('2d');
  const lctx = lower?.getContext('2d') ?? null;
  if (!uctx) return;


  let width = 0;
  let height = 0;
  let upperHeight = 0;
  let lowerHeight = 0;
  let boundary = 0;
  let dpr = 1;
  let radius = 1;

  const size = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, h: number) => {
    canvas.style.width = `${width}px`;
    canvas.style.height = `${h}px`;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const resize = () => {
    const rect = img.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    // Bagian Layanan menentukan letak garis batas; dicari ulang tiap kali karena
    // elemennya diganti saat ganti bahasa.
    const nextSection = document.querySelector<HTMLElement>('[data-section="services"]');
    boundary = nextSection ? nextSection.getBoundingClientRect().top - rect.top : height / 2;
    boundary = Math.min(height, Math.max(0, boundary));
    if (lower && lctx && tail) {
      upperHeight = boundary;
      lowerHeight = height - boundary + height * DRIP_ROOM;
      lower.style.left = `${rect.left - tail.getBoundingClientRect().left}px`;
      size(lower, lctx, lowerHeight);
    } else {
      upperHeight = height * (1 + DRIP_ROOM);
    }
    size(upper, uctx, upperHeight);
    // Jari-jari titik mengikuti kerapatan sampel.
    radius = Math.max(1.2, Math.sqrt((width * height * 0.5) / dots.length) * 0.32);
  };
  resize();
  refresh = resize;
  const observer = new ResizeObserver(resize);
  observer.observe(stage);
  if (tail) observer.observe(tail);

  let progress = 0;
  let frame = 0;
  const t0 = performance.now();

  const dot = (x: number, y: number, r: number, alpha: number, color: string) => {
    // Titik di atas garis batas digambar di hero, di bawahnya di wadah Layanan.
    const toLower = lctx && y >= boundary;
    const ctx = toLower ? lctx : uctx;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, toLower ? y - boundary : y, r, 0, Math.PI * 2);
    ctx.fill();
  };

  const draw = (now: number) => {
    frame = 0;
    const t = (now - t0) / 1000;
    uctx.clearRect(0, 0, width, upperHeight);
    lctx?.clearRect(0, 0, width, lowerHeight);
    const breath = progress >= 1 ? 1 : progress;
    const pulse = 1 + 0.012 * Math.sin(t * 0.6) * breath;
    const cx = width / 2;
    const cy = height / 2;
    const below = Math.max(1, height - boundary);
    const spacing = radius * 3.2;

    for (const d of dots) {
      const local = clamp01((progress - d.delay) / (1 - 0.25));
      const e = easeOut(local);
      const wobbleX = Math.sin(t * 0.9 + d.phase) * 1.6 * breath;
      const wobbleY = Math.cos(t * 0.7 + d.phase) * 1.6 * breath;
      const fx = d.tx * width;
      const fy = d.ty * height;
      const x = d.sx * width + (cx + (fx - cx) * pulse - d.sx * width) * e + wobbleX;
      const y = d.sy * height + (cy + (fy - cy) * pulse - d.sy * height) * e + wobbleY;

      // Makin jauh di bawah batas, makin pudar: menyatu dengan latar gelap.
      const depth = fy > boundary ? clamp01((fy - boundary) / below) : 0;
      const alpha = (0.25 + 0.75 * e) * (1 - depth * 0.85);
      dot(x, y, radius, alpha, d.color);

      // Tetesan: beberapa titik kecil mengalir pelan ke bawah lalu berulang.
      if (depth > 0 && d.drip < DRIP_SHARE && e > 0.95) {
        const flow = (t * d.speed) % spacing;
        for (let k = 1; k <= 3; k++) {
          const a = alpha * (1 - k / 4) * (1 - flow / spacing / 3);
          dot(x, y + k * spacing + flow, radius * (1 - k * 0.18), a, d.color);
        }
      }
    }
    uctx.globalAlpha = 1;
    if (lctx) lctx.globalAlpha = 1;
    schedule();
  };

  // Jeda bila hero dan ekor di Layanan sama-sama di luar layar atau tab tidak
  // aktif (DESIGN bagian 5.3).
  const onScreen = new Set<Element>();
  const schedule = () => {
    if (!frame && onScreen.size > 0 && !document.hidden) frame = requestAnimationFrame(draw);
  };

  // Titik mulai berkumpul saat visual pertama kali terlihat (di HP visual ada
  // di bawah teks).
  let assembled = false;
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) onScreen.add(entry.target);
      else onScreen.delete(entry.target);
    }
    if (onScreen.has(stage) && !assembled) {
      assembled = true;
      animate(0, 1, {
        duration: ASSEMBLE_SECONDS,
        ease: EASE,
        onUpdate: (v) => {
          progress = v;
        },
      });
    }
    schedule();
  });
  io.observe(stage);
  if (lower) io.observe(lower);
  document.addEventListener('visibilitychange', schedule);

  img.style.opacity = '0';
  schedule();
}

function makeCanvas(parent: HTMLElement) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.className = 'pointer-events-none absolute top-0 left-0';
  parent.append(canvas);
  return canvas;
}

function sampleDots(img: HTMLImageElement, maxDots: number): Dot[] {
  const w = 220;
  const h = Math.round((w * img.naturalHeight) / img.naturalWidth);
  const off = document.createElement('canvas');
  off.width = w;
  off.height = h;
  const octx = off.getContext('2d', { willReadFrequently: true });
  if (!octx) return [];
  octx.drawImage(img, 0, 0, w, h);
  const data = octx.getImageData(0, 0, w, h).data;

  const opaque = (x: number, y: number) => data[(y * w + x) * 4 + 3] > 140;
  let step = 2;
  let count = Infinity;
  while (count > maxDots) {
    count = 0;
    for (let y = 0; y < h; y += step) for (let x = 0; x < w; x += step) if (opaque(x, y)) count++;
    if (count > maxDots) step++;
  }

  const dots: Dot[] = [];
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      if (!opaque(x, y)) continue;
      const i = (y * w + x) * 4;
      dots.push({
        tx: (x + step / 2) / w,
        ty: (y + step / 2) / h,
        sx: Math.random() * 1.6 - 0.3,
        sy: Math.random() * 1.6 - 0.3,
        delay: Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
        drip: Math.random(),
        speed: 4 + Math.random() * 8,
        color: `rgb(${data[i]}, ${data[i + 1]}, ${data[i + 2]})`,
      });
    }
  }
  return dots;
}

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function easeOut(v: number) {
  // Mendekati cubic-bezier(0.22, 1, 0.36, 1) untuk tiap titik.
  return 1 - Math.pow(1 - v, 4);
}