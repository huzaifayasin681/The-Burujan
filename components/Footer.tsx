'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-20 border-t border-white/5 bg-black text-gray-400 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="tracking-widest uppercase font-bold text-white mb-2">The Burujan</p>
                    <p className="text-xs text-gray-600">Engineered in Pakistan. Operates Globally.</p>
                </div>

                <div className="flex gap-8 text-xs font-medium tracking-wide uppercase">
                    <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
                    <Link href="/sla" className="hover:text-gold transition-colors">SLA</Link>
                </div>

                <div className="text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} The Burujan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
