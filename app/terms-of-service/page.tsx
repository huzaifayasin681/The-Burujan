import LegalLayout from '@/components/LegalLayout';

export default function TermsOfService() {
    return (
        <LegalLayout title="Terms of Engagement" date="Effective Date: January 2026">
            <h2>1. The Agreement</h2>
            <p>By engaging The Burujan for IT services, you agree to these terms. We are not just vendors; we are your technical partners, and this document defines the structure of our partnership.</p>

            <h2>2. Scope of Services</h2>
            <p>We provide:</p>
            <ul>
                <li><strong>Web Architecture</strong> (Led by Rao Abdul Hadi)</li>
                <li><strong>App Ecosystems</strong> (Led by Rana Talha Jabbar)</li>
                <li><strong>Full Stack Solutions</strong> (Led by Muhammad Hafeez)</li>
                <li><strong>DevOps & Infrastructure</strong> (Led by Muhammad Huzaifa Hassan)</li>
            </ul>

            <h2>3. Payments & Milestones</h2>
            <p>Unless agreed otherwise in a specific contract:</p>
            <ul>
                <li><strong>50% Deposit</strong> is required to commence the "Architecture/Design" phase.</li>
                <li><strong>50% Balance</strong> is due upon final deployment/handover.</li>
                <li>Late payments may incur a pause in services or server suspension.</li>
            </ul>

            <h2>4. Intellectual Property (IP)</h2>
            <p>Upon full payment, the client owns the source code and design assets. The Burujan retains the right to use the project in our portfolio ("The Structural Proofs") unless a Non-Disclosure Agreement (NDA) is signed.</p>

            <h2>5. Limitation of Liability</h2>
            <p>While we engineer for stability, The Burujan is not liable for indirect damages, lost profits, or data loss caused by third-party failures (e.g., AWS outages, ISP failures) or client mismanagement of the codebase after handover.</p>

            <h2>6. Jurisdiction</h2>
            <p>These terms are governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Faisalabad, Punjab.</p>
        </LegalLayout>
    );
}
