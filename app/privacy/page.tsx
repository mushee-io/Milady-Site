import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Privacy Policy' };
export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal" title="Privacy Policy">
    <p>This Privacy Policy explains how Miss Milady collects, uses, and protects information when you use the Miss Milady Android app.</p>
    <h2>Information we process</h2><p>We may process account information provided through Google Sign-In, including your name, email address, and account identifier. We may also process device, advertising, and app-usage information as necessary to operate, secure, maintain, and improve the app.</p>
    <h2>Services we use</h2><p>Miss Milady uses Google Sign-In for authentication, Supabase for account and app data services, and Google AdMob to provide rewarded advertising. These providers may process information under their own privacy policies.</p>
    <h2>How information is used</h2><p>We use information to create and manage accounts, provide app features, deliver rewarded ads, prevent fraud and misuse, troubleshoot issues, and comply with legal obligations. We do not sell your personal information.</p>
    <h2>Retention and your choices</h2><p>We retain information only for as long as reasonably necessary for these purposes. You may request deletion of your account and associated personal data through our <a href="/delete-account">Delete Account page</a>.</p>
    <h2>Contact</h2><p>Questions about privacy can be sent to <a href="mailto:support@missmilady.xyz">support@missmilady.xyz</a>.</p>
  </LegalPage>;
}
