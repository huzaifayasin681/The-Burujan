'use client';

import { Montserrat, Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function LegalLayout({ children, title, date }: { children: React.ReactNode, title: string, date: String }) {
    return (
        <div className={`min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 ${playfair.variable}`}>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">{title}</h1>
                <p className="text-gray-500 mb-12 uppercase tracking-widest text-sm">{date}</p>

                <div className="prose prose-invert prose-lg text-gray-300 font-serif font-light leading-relaxed">
                    <style jsx global>{`
                    .prose h2, .prose h3 {
                        color: #fff;
                        font-family: var(--font-montserrat);
                        margin-top: 2.5em;
                        margin-bottom: 1em;
                    }
                    .prose strong {
                        color: #D4AF37;
                    }
                    .prose ul {
                        list-style-type: square;
                    }
                `}</style>
                    {children}
                </div>
            </div>
        </div>
    );
}
