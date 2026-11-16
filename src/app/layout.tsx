import type { Metadata } from 'next';
import { Inter, Montserrat, Space_Grotesk } from 'next/font/google';
import { siteUrl } from '@/data/site-url';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['500', '700'] });
const head = Montserrat({ subsets: ['latin'], variable: '--font-head', weight: ['800', '900'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Imam Wijayanto — Software, AI & Creative Portfolio', template: '%s | Imam Wijayanto' },
  description: 'Portofolio Imam Wijayanto: frontend development, AI & machine learning, data analytics, serta produksi kreatif.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Imam Wijayanto — Software, AI & Creative Portfolio',
    description: 'Kumpulan proyek software, data, AI, dan karya kreatif Imam Wijayanto.',
    type: 'website',
    url: '/',
    locale: 'id_ID',
    images: [{ url: '/about/imam-portrait.webp', width: 1024, height: 1535, alt: 'Imam Wijayanto' }],
  },
  twitter: { card: 'summary', title: 'Imam Wijayanto — Portfolio' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${head.variable} ${body.variable}`}>
      <body className="bg-[#d9deea] p-2 font-sans antialiased md:p-4">
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-5 py-3 font-semibold text-primary focus:translate-y-0">Langsung ke konten</a>
        <div className="w-full overflow-x-clip rounded-[24px] bg-deep md:rounded-[32px]">{children}</div>
      </body>
    </html>
  );
}
