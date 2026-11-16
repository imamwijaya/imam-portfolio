'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoMark from './LogoMark';
import { whatsappUrl } from '@/data/content';

const links = [['home', 'Home'], ['portfolio', 'Portfolio'], ['about', 'About'], ['skills', 'Skills']] as const;
const pill = 'inline-flex items-center gap-2 rounded-full border border-secondary/80 px-4 py-1.5 text-sm font-semibold transition hover:bg-secondary hover:text-primary';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [active, setActive] = useState('home');
  useEffect(() => {
    if (!isHome) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' });
    [...links.map(([id]) => id), 'contact'].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [isHome]);
  return (
    <header className="sticky top-0 z-50 bg-deep/90 px-5 backdrop-blur md:px-10">
      <nav aria-label="Utama" className="flex h-[72px] items-center justify-between border-b border-secondary/80">
        <div className="flex items-center gap-8">
          <Link href="/#home" aria-label="Imam Wijayanto, beranda"><LogoMark className="h-7 w-9 text-white" /></Link>
          <ul className="hidden gap-7 text-sm font-medium md:flex">
            {links.map(([id, label]) => (
              <li key={id}><a href={`/#${id}`} aria-current={isHome && active === id ? 'location' : undefined} className={`border-b-2 pb-1 transition ${isHome && active === id ? 'border-accent' : 'border-transparent hover:border-white/40'}`}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${pill} max-md:hidden`}>Contact Me <ArrowUpRight size={15} /></a>
          <button type="button" className="md:hidden rounded-md p-2" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="pb-4 md:hidden">
          {[...links, ['contact', 'Contact']].map(([id, label]) => (<li key={id}><a href={`/#${id}`} onClick={() => setOpen(false)} className="block py-3 text-lg">{label}</a></li>))}
        </ul>
      )}
    </header>
  );
}
