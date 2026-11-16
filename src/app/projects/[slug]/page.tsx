import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { projects } from '@/data/projects';
import { projectDetails } from '@/data/project-details';
import { whatsappUrl } from '@/data/content';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  return p
    ? {
        title: p.title,
        description: p.summary,
        alternates: {
          canonical: `/projects/${p.slug}`,
        },
        openGraph: {
          title: `${p.title} — Imam Wijayanto`,
          description: p.summary,
          images: [{
            url: p.artwork.src,
            width: p.artwork.width,
            height: p.artwork.height,
          }],
        },
      }
    : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const prev = projects[(i + projects.length - 1) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const detail = projectDetails[p.slug];
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-14">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 rounded-md text-sm font-semibold transition hover:text-accent"><ArrowLeft size={16} aria-hidden="true" /> Kembali ke semua proyek</Link>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[.95fr_1fr] lg:gap-14">
          <div className="grid place-items-center overflow-hidden rounded-[28px] p-5 sm:p-8" style={{ background: p.background }}>
            <Image src={p.artwork.src} alt={p.artwork.alt} width={p.artwork.width} height={p.artwork.height} priority sizes="(max-width: 1024px) 90vw, 480px" className="h-auto max-h-[75vh] w-auto object-contain" />
          </div>
          <article>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">{p.categoryLabel} <span className="text-white/45">/</span> {p.theme}</p>
            <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.25rem)] font-bold leading-[1.06]">{p.title}</h1>
            <div className="mt-8 border-t border-white/20 pt-6">
              <h2 className="text-xs font-bold uppercase tracking-[.18em] text-accent">Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">{p.summary}</p>
            </div>
            {p.role && <div className="mt-7"><h2 className="text-xs font-bold uppercase tracking-[.18em] text-accent">Peran saya</h2><p className="mt-3 leading-relaxed text-white/85">{p.role}</p></div>}
            {p.technologies.length > 0 && <div className="mt-7"><h2 className="text-xs font-bold uppercase tracking-[.18em] text-accent">Teknologi / metode</h2><ul className="mt-3 flex flex-wrap gap-2">{p.technologies.map((t) => <li key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm">{t}</li>)}</ul></div>}
            {p.links.length > 0 && <div className="mt-8 flex flex-wrap gap-3">{p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white">{l.label} <ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>}
          </article>
        </div>
        {detail && (
          <section aria-labelledby="story-title" className="mt-14 rounded-[28px] border border-secondary/30 p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-accent">Inside the project</p>
            <h2 id="story-title" className="mt-3 font-head text-2xl font-black uppercase sm:text-3xl">Konteks & kontribusi</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div><h3 className="font-display text-lg font-bold">Konteks</h3><p className="mt-3 leading-relaxed text-white/85">{detail.context}</p></div>
              {detail.contribution && <div><h3 className="font-display text-lg font-bold">Yang aku kerjakan</h3><p className="mt-3 leading-relaxed text-white/85">{detail.contribution}</p></div>}
            </div>
            {detail.notes && <p className="mt-7 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/65">{detail.notes}</p>}
          </section>
        )}
        <nav aria-label="Navigasi proyek" className="mt-14 grid gap-3 border-t border-white/20 pt-7 text-sm sm:grid-cols-2 sm:gap-6">
          <Link href={`/projects/${prev.slug}`} className="group flex min-w-0 items-center gap-3 rounded-xl p-3 transition hover:bg-white/10"><ArrowLeft className="shrink-0 transition group-hover:-translate-x-1" size={18} aria-hidden="true" /><span><span className="block text-xs text-white/60">Sebelumnya</span><span className="font-semibold break-words">{prev.title}</span></span></Link>
          <Link href={`/projects/${next.slug}`} className="group flex min-w-0 items-center justify-end gap-3 rounded-xl p-3 text-right transition hover:bg-white/10"><span><span className="block text-xs text-white/60">Berikutnya</span><span className="font-semibold break-words">{next.title}</span></span><ArrowRight className="shrink-0 transition group-hover:translate-x-1" size={18} aria-hidden="true" /></Link>
        </nav>
        <div className="mt-12 rounded-[26px] bg-primary p-7 text-center sm:p-10">
          <p className="font-display text-xl font-bold sm:text-2xl">Tertarik berdiskusi atau berkolaborasi?</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white">Hubungi saya <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
