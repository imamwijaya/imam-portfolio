'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export default function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add('rv-hide');
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.remove('rv-hide'); el.classList.add('rv-in'); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
