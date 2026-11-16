import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

/** Personal portrait uses the supplied photograph. The original zebra-crossing background is retained. */
export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[28px] bg-secondary text-primary md:rounded-[36px]">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 -bottom-32 h-72 w-72 rounded-full border-[55px] border-accent/25 md:h-[420px] md:w-[420px]" />
          <div className="grid items-center gap-9 p-6 sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:gap-14 lg:p-14 xl:p-20">
            <div className="relative z-10 order-2 lg:order-1">
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-primary/75">
                <span aria-hidden="true" className="block h-[2px] w-8 bg-primary" /> 01 / Behind the Work
              </p>
              <h2 id="about-title" className="max-w-[700px] font-head text-[clamp(2.25rem,5vw,5.2rem)] font-black uppercase leading-[1.02] tracking-[-.045em]">
                Beyond <span className="text-[#397AB6]">the code.</span>
              </h2>
              <p className="mt-5 max-w-[560px] font-display text-lg font-semibold leading-snug sm:text-xl">
                Teknologi, data, dan cerita visual menjadi tiga cara yang kugunakan untuk menciptakan sesuatu yang bermakna.
              </p>
              <div className="mt-6 max-w-[580px] space-y-4 text-sm leading-relaxed text-primary/85 sm:text-base">
                <p>Aku lulusan Informatika Telkom University dan saat ini sedang menempuh studi Magister Informatika.</p>
                <p>Fokusku mencakup frontend development, analitik data, artificial intelligence, dan penelitian machine learning. Di sisi kreatif, aku juga berkarya melalui film, videografi, fotografi, dan produksi konten digital.</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Bidang utama">
                {['Frontend Development', 'AI & Machine Learning', 'Visual Storytelling'].map((item) => (
                  <span key={item} className="rounded-full border border-primary/25 px-3 py-1.5 text-xs font-semibold sm:text-sm">{item}</span>
                ))}
              </div>
              <a href="#skills" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2255A0] focus-visible:outline-offset-4">
                Explore my expertise <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <figure className="relative z-10 order-1 mx-auto w-full max-w-[440px] lg:order-2">
              <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rounded-[26px] border-2 border-primary/30 sm:-right-4 sm:-top-4" />
              <div className="relative overflow-hidden rounded-[22px] bg-[#c9c9c9] shadow-[0_24px_60px_rgba(16,54,125,.18)]">
                <Image
                  src="/about/imam-portrait.webp"
                  alt="Potret Imam Wijayanto berdiri di atas zebra cross, memakai kacamata hitam dan kaus hitam."
                  width={1024}
                  height={1535}
                  sizes="(max-width: 1024px) 88vw, 440px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[.18em] sm:text-xs">
                <span>Imam Wijayanto</span><span className="text-primary/65">Informatics & Creative</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
