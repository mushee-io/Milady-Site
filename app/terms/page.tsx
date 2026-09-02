import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Terms of Use' };
export default function TermsPage() {
  return <LegalPage eyebrow="Legal" title="Terms of Use">
    <p>By using Miss Milady, you agree to these Terms of Use. If you do not agree, please do not use the app.</p>
    <h2>Using Miss Milady</h2><p>You may use Miss Milady only for lawful purposes and in a way that does not interfere with the app, its services, or other users. You are responsible for activity associated with your account.</p>
    <h2>Points</h2><p>Points in the current version of Miss Milady:</p><ul><li>have no cash value;</li><li>are not cryptocurrency;</li><li>are not transferable; and</li><li>do not guarantee any future financial reward.</li></ul><p>Points are an in-app feature only. We may change, suspend, or discontinue the points system or other app features where reasonably necessary.</p>
    <h2>Availability and responsibility</h2><p>The app is provided on an “as available” basis. To the fullest extent permitted by law, we do not guarantee uninterrupted or error-free service and are not responsible for indirect or consequential loss arising from use of the app.</p>
    <h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:support@missmilady.xyz">support@missmilady.xyz</a>.</p>
  </LegalPage>;
}
