import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPolicy() {
    return (
        <LegalLayout title="Data Architecture & Privacy Protocol" date="Last Updated: January 2026">
            <h2>1. Introduction</h2>
            <p>The Burujan ("we," "our," or "us") respects your privacy. Just as we secure the infrastructure of your applications, we secure the personal data you entrust to us. This policy outlines how we handle data collected via our website, TheBurujan.tech.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect information that serves as the "blueprint" for our business relationship:</p>
            <ul>
                <li><strong>Personal Data:</strong> Name, Email Address, Company Name, and Phone Number (collected via our Contact Form or Booking System).</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and interaction data (via Cookies) to optimize our site performance.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <ul>
                <li>To architect and deliver the services you request (Web, App, or DevOps).</li>
                <li>To communicate project milestones via our Point of Contact (Huzaifa Hassan).</li>
                <li>To improve our internal logic and website performance.</li>
            </ul>

            <h2>4. Storage & Security</h2>
            <p>Your data is stored securely on <strong>Hostinger Business servers</strong> using encrypted SQL databases. We employ enterprise-grade security measures to prevent unauthorized access.</p>

            <h2>5. Third-Party Processors</h2>
            <p>We utilize trusted partners to maintain our infrastructure:</p>
            <ul>
                <li><strong>Cloudinary:</strong> For media asset optimization.</li>
                <li><strong>Hostinger:</strong> For hosting and database management.</li>
                <li><strong>Calendly:</strong> For scheduling consultations.</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to request a copy of your data or request its deletion ("The Right to be Forgotten"). To exercise these rights, contact us at: <strong>huzaifa@theburujan.tech</strong>.</p>
        </LegalLayout>
    );
}
