import LegalLayout from '@/components/LegalLayout';

export default function SLA() {
    return (
        <LegalLayout title="Infrastructure Guarantee" date="Service Level Agreement">
            <h2>1. DevOps Responsibility</h2>
            <p>Our DevOps Architect, <strong>Muhammad Huzaifa Hassan</strong>, ensures the stability of the systems we deploy. This SLA applies to clients subscribed to our Maintenance or Retainer packages.</p>

            <h2>2. Uptime Guarantee</h2>
            <p>We aim for <strong>99.9% Uptime</strong> for all hosted applications managed by The Burujan.</p>
            <p>Scheduled Maintenance: We will provide 24-hour notice for planned server upgrades.</p>

            <h2>3. Response Times (Severity Levels)</h2>
            <ul>
                <li><strong>Level 1 (Critical - Site Down):</strong> Response within 4 hours.</li>
                <li><strong>Level 2 (Major - Feature Broken):</strong> Response within 24 hours.</li>
                <li><strong>Level 3 (Minor - UI/Text Change):</strong> Response within 48-72 hours.</li>
            </ul>

            <h2>4. Backup Policy</h2>
            <p>For active maintenance clients, we perform <strong>Weekly Automated Backups</strong> of databases and file systems.</p>
        </LegalLayout>
    );
}
