'use client';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { categories } from '@/data/content';
import PortfolioCard from './PortfolioCard';

export default function PortfolioSection() {
  const [cat, setCat] = useState<string>('all');
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const list = cat === 'all' ? projects : projects.filter((p) => p.category === cat);
  const count = (k: string) => (k === 'all' ? projects.length : projects.filter((p) => p.category === k).length);
  const step = () => Math.min((track.current?.clientWidth ?? 600) * 0.8, 560);
  const go = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });
  const choose = (k: string) => { setCat(k); track.current?.scrollTo({ left: 0 }); };

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="px-5 py-14 md:px-10">
      <div className="mx-auto max-w-[1600px] rounded-[28px] border border-secondary/80 p-5 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <h2 id="portfolio-title" className="font-display text-2xl font-bold">Selected Work</h2>
          <p className="max-w-sm text-base leading-snug md:text-lg">Kumpulan proyek software, AI, dan karya kreatif yang menemaniku belajar dan berkarya.</p>
        </div>
        <div role="group" aria-label="Filter kategori proyek" className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c.key} type="button" aria-pressed={cat === c.key} onClick={() => choose(c.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${cat === c.key ? 'border-white bg-white text-primary' : 'border-white/40 hover:border-white'}`}>
              {c.label} <span className="opacity-60">({count(c.key)})</span>
            </button>
          ))}
        </div>
        <p className="sr-only" role="status" aria-live="polite">Menampilkan {list.length} proyek pada kategori {categories.find((c) => c.key === cat)?.label}.</p>
        <div ref={track} tabIndex={0} role="region" aria-label="Carousel proyek, gunakan tombol panah kiri dan kanan"
          onKeyDown={(e) => { if (e.key === 'ArrowRight') { e.preventDefault(); go(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); } }}
          onPointerDown={(e) => { if (e.pointerType !== 'mouse') return; const t = track.current!; drag.current = { down: true, x: e.clientX, left: t.scrollLeft, moved: false }; }}
          onPointerMove={(e) => { const d = drag.current; if (!d.down) return; const dx = e.clientX - d.x; if (Math.abs(dx) > 5) d.moved = true; track.current!.scrollLeft = d.left - dx; }}
          onPointerUp={() => { drag.current.down = false; }} onPointerLeave={() => { drag.current.down = false; }} onPointerCancel={() => { drag.current.down = false; }}
          onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; } }}
          className="no-scrollbar mt-6 flex cursor-grab snap-x snap-mandatory items-center gap-5 overflow-x-auto px-1 py-8 md:gap-6">
          {list.map((p) => (<PortfolioCard key={p.slug} project={p} priority={false} />))}
        </div>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Proyek sebelumnya" className="grid h-11 w-11 place-items-center rounded-full border border-white/50 hover:bg-white hover:text-primary"><ArrowLeft size={18} /></button>
          <button type="button" onClick={() => go(1)} aria-label="Proyek berikutnya" className="grid h-11 w-11 place-items-center rounded-full border border-white/50 hover:bg-white hover:text-primary"><ArrowRight size={18} /></button>
        </div>
        <div className="mt-10 text-center">
          <p className="font-head text-[clamp(1.3rem,3.2vw,2.2rem)] font-black uppercase leading-tight">Keep <span className="text-accent">building,</span> exploring,<br />and <span className="text-accent">creating</span></p>
          <p className="mt-4 text-sm leading-relaxed">Imam Wijayanto<br />Software · AI · Creative Production</p>
        </div>
      </div>
    </section>
  );
}
