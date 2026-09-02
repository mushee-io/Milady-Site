import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Delete your Miss Milady account' };
export default function DeleteAccountPage() {
  return <LegalPage eyebrow="Account support" title="Delete your Miss Milady account">
    <p>You can request deletion of your Miss Milady account and the personal data associated with it at any time.</p>
    <h2>How to request deletion</h2><p>Email <a href="mailto:support@missmilady.xyz?subject=Delete%20My%20Milady%20Account">support@missmilady.xyz</a> from the email address connected to your account, using this subject line:</p><p className="subject-line">Delete My Milady Account</p>
    <h2>What happens next</h2><p>We will verify your request to protect your account. After verification, your Miss Milady account and associated profile data will be deleted, except for information that must be retained for legal, security, fraud-prevention, or regulatory purposes.</p><p>We may contact you if we need additional information to verify or complete the request.</p>
  </LegalPage>;
}
