import Link from 'next/link';
import type { ReactNode } from 'react';

export function LegalPage({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return <main className="legal-shell"><header className="legal-header"><Link className="wordmark" href="/" aria-label="Miss Milady home">Miss Milady</Link></header><article className="legal-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="updated">Last updated: 2 September 2026</p>{children}</article><footer className="legal-footer"><Link href="/">Back to home</Link></footer></main>;
}
