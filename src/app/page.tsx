import type { CSSProperties } from 'react';
import SiteHeader from '@/components/SiteHeader';
import PortfolioSection from '@/components/PortfolioSection';
import PortfolioCard from '@/components/PortfolioCard';
import Reveal from '@/components/Reveal';
import LogoMark from '@/components/LogoMark';
import AboutSection from '@/components/AboutSection';
import SiteFooter from '@/components/SiteFooter';
import { projects } from '@/data/projects';
import { sharedSvgs } from '@/data/shared-svgs';
import { contact, skills, whatsappDisplay, whatsappUrl } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

// data-active sits on a wrapper (display: contents) so the CSS ancestor selector can reach the animated SVG.
const Deco = ({ k, cls, style }: { k: string; cls: string; style: CSSProperties }) => (
  <div data-active="true" className="contents">
    <div aria-hidden className={`dec ${cls}`} style={style} dangerouslySetInnerHTML={{ __html: sharedSvgs[k] }} />
  </div>
);
const featured = ['badminton-pose-ai', 'wave-education', 'antara'].map((s) => projects.find((p) => p.slug === s)!);
const btn = 'inline-flex items-center gap-2 rounded-full border border-secondary/80 px-5 py-2 text-sm font-semibold transition hover:bg-secondary hover:text-primary';
const extra = [
  contact.email && { label: 'Email', href: `mailto:${contact.email}` },
  contact.github && { label: 'GitHub', href: contact.github },
  contact.linkedin && { label: 'LinkedIn', href: contact.linkedin },
].filter(Boolean) as { label: string; href: string }[];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section id="home" className="relative px-5 pb-10 pt-16 md:px-10 md:pt-24">
          <Deco k="loop" cls="dec-draw max-md:hidden" style={{ left: '4%', top: '62%', width: '9%' }} />
          <Deco k="flow" cls="dec-draw max-md:hidden" style={{ right: '5%', top: '14%', width: '10%' }} />
          <Deco k="spark" cls="dec-pulse" style={{ left: '8%', top: '12%', width: '4%' }} />
          <Deco k="stamp" cls="dec-rotate" style={{ right: '7%', top: '54%', width: 'clamp(64px,8vw,104px)', zIndex: 12 }} />
          <div className="relative mx-auto max-w-[1150px] text-center">
            <span aria-hidden className="absolute -left-1 -top-8 -rotate-6 font-head text-5xl font-black text-accent md:-left-8 md:-top-12 md:text-7xl">#</span>
            <p className="enter mb-6 font-display text-xs font-bold uppercase tracking-[.28em] text-accent sm:text-sm">Imam Wijayanto <span className="mx-2 text-white/40">/</span> Software · AI · Creative</p>
            <h1 className="enter font-head text-[clamp(1.6rem,5vw,4.4rem)] font-black uppercase leading-[.98] tracking-tight text-secondary">
              Building digital experiences,<br />exploring intelligence,<br /><span className="text-accent">creating visual stories.</span>
            </h1>
            <div aria-hidden className="sticker left-[22%] top-[44%] z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-white/10 shadow-xl backdrop-blur-md max-md:hidden md:h-16 md:w-16" style={{ ['--rot' as string]: '-8deg' }}><LogoMark className="h-7 w-9 text-white" /></div>
            <div aria-hidden className="sticker right-[20%] top-[8%] z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-white/10 shadow-xl backdrop-blur-md [animation-delay:-3s] max-md:hidden md:h-16 md:w-16" style={{ ['--rot' as string]: '10deg' }}><span className="font-display text-xl font-bold text-accent">&lt;/&gt;</span></div>
          </div>
          <div className="enter mx-auto mt-12 flex max-w-[720px] items-end justify-between text-sm" style={{ animationDelay: '.3s' }}>
            <p className="leading-snug">Selected work<br /><b className="font-bold">{projects.length} Projects</b><br /><b className="font-bold">3 Disciplines</b></p>
            <a href="#portfolio" className={btn}>Explore Work <ArrowUpRight size={15} /></a>
          </div>
          <div role="group" aria-label="Featured projects" className="no-scrollbar mx-auto mt-10 flex max-w-[780px] snap-x snap-mandatory items-center justify-start gap-3 overflow-x-auto px-2 pb-3 sm:justify-center md:gap-5 md:overflow-visible md:pb-0">
            <PortfolioCard project={featured[0]} priority hideCaption className="aspect-[2/3] w-[min(67vw,240px)] rounded-[22px] sm:w-[29%] md:w-[28%]" />
            <PortfolioCard project={featured[1]} priority hideCaption className="aspect-[2/3] w-[min(67vw,240px)] rounded-[22px] sm:w-[35%] md:w-[34%]" />
            <PortfolioCard project={featured[2]} priority hideCaption className="aspect-[2/3] w-[min(67vw,240px)] rounded-[22px] sm:w-[29%] md:w-[28%]" />
          </div>
          <p className="mt-2 text-center text-xs text-white/60 sm:hidden">Geser untuk melihat proyek unggulan</p>
        </section>

        <PortfolioSection />
        <AboutSection />

        <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-7xl px-5 py-16 md:px-10">
          <h2 id="skills-title" className="font-head text-3xl font-black uppercase leading-none md:text-5xl">Skills & Expertise</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g, i) => (
              <Reveal key={g.title} delay={i * 100}><div className="h-full rounded-3xl bg-primary p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-lg font-bold text-accent">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => (<li key={s} className="rounded-full bg-white/10 px-3 py-1 text-sm">{s}</li>))}</ul>
              </div></Reveal>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-4xl px-5 py-24 text-center md:px-10">
          <h2 id="contact-title" className="font-head text-3xl font-black uppercase leading-tight md:text-6xl">Let&rsquo;s Create Something <span className="text-accent">Meaningful.</span></h2>
          <p className="mt-4 text-white/80">Terbuka untuk kolaborasi dan proyek baru. Hubungi aku langsung lewat WhatsApp.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-bold text-primary transition hover:bg-white">Chat via WhatsApp <ArrowUpRight size={16} /></a>
            {extra.map((l) => (<a key={l.label} href={l.href} className={btn} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.label}</a>))}
          </div>
          <p className="mt-4 text-sm text-white/70">{whatsappDisplay}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
