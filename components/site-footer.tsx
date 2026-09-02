import Link from 'next/link';

export function SiteFooter() {
  return <footer className="site-footer"><nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/delete-account">Delete Account</Link></nav></footer>;
}
