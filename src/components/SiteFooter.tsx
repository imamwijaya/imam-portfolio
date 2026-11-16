import Link from 'next/link';
import { whatsappUrl } from '@/data/content';

export default function SiteFooter() {
  return (
    <footer className="px-5 pb-6 text-[11px] font-semibold md:px-10">
      <div className="flex flex-wrap justify-between gap-3 border-t border-secondary/30 pt-5">
        <span>© {new Date().getFullYear()} Imam Wijayanto</span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/#about">About</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#skills">Skills</Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </footer>
  );
}
