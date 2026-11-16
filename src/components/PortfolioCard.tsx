'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { decorationSvgs } from '@/data/decoration-svgs';

const size = { 1: 'w-[230px] md:w-[280px] aspect-[2/3] rounded-[28px]', 2: 'w-[270px] md:w-[360px] aspect-[2/3] rounded-[32px]', 3: 'w-[300px] md:w-[560px] aspect-[8/5] rounded-[32px]' } as const;
const sizes = { 1: '(max-width:768px) 230px, 280px', 2: '(max-width:768px) 270px, 360px', 3: '(max-width:768px) 300px, 560px' } as const;

export default function PortfolioCard({ project: p, priority = false, className, hideCaption = false }: { project: Project; priority?: boolean; className?: string; hideCaption?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--px', String(((e.clientX - r.left) / r.width - 0.5) * 2));
    e.currentTarget.style.setProperty('--py', String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };
  const light = p.background.toLowerCase() === '#ebebeb';
  return (
    <Link ref={ref} href={`/projects/${p.slug}`} data-active={active} aria-label={`${p.title}, ${p.categoryLabel}. Buka detail proyek`}
      className={`group relative isolate block shrink-0 snap-center overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 ${className ?? size[p.cardType]}`}
      style={{ background: p.background, color: light ? '#10367D' : '#fff' }} draggable={false} onPointerMove={onMove}>
      {p.decorations.map((d) => (
        <div key={d.src} aria-hidden className={`dec dec-${d.animation} ${d.hideOnMobile ? 'max-md:hidden' : ''}`}
          style={{ left: d.x, top: d.y, width: `${d.width}%`, opacity: d.opacity, zIndex: d.zIndex, ['--rot' as string]: `${d.rotation}deg` }}
          dangerouslySetInnerHTML={{ __html: decorationSvgs[d.src] ?? '' }} />
      ))}
      <Image src={p.artwork.src} alt={p.artwork.alt} width={p.artwork.width} height={p.artwork.height} sizes={sizes[p.cardType]} priority={priority}
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-contain" draggable={false} />
      {!hideCaption && (
      <div className={`absolute bottom-0 left-0 z-[6] p-[7%] pt-0 ${p.cardType === 3 ? 'right-[45%]' : 'right-0'}`}>
        <h3 className="font-display text-lg font-bold leading-tight md:text-xl">{p.title}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-wider opacity-80">{p.categoryLabel}</p>
      </div>
      )}
      <span className={`absolute z-[7] grid place-items-center rounded-full bg-white text-primary shadow-lg transition-transform duration-300 group-hover:rotate-45 ${hideCaption ? 'right-2 top-2 h-7 w-7 sm:right-3 sm:top-3 sm:h-9 sm:w-9' : 'right-3 top-3 h-10 w-10'}`} aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}
