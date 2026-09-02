import type { Metadata } from 'next';
import { Geist, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['500', '600'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://missmilady.xyz'),
  title: { default: 'Miss Milady — Proof of Doing.', template: '%s — Miss Milady' },
  description: 'Miss Milady. Proof of Doing.',
  openGraph: { title: 'Miss Milady — Proof of Doing.', description: 'Miss Milady. Proof of Doing.', url: 'https://missmilady.xyz', siteName: 'Miss Milady', type: 'website', images: [{ url: '/miss-milady.png', width: 1400, height: 1400, alt: 'Miss Milady' }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
