import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero" aria-labelledby="home-title">
        <Image className="milady-mark" src="/miss-milady.png" alt="Miss Milady dancing" width={1400} height={1400} priority />
        <div className="hero-copy"><h1 id="home-title">Miss Milady</h1><p>Proof of Doing.</p></div>
        <Link className="primary-button" href="#">Get Milady</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
