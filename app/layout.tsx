import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import BurujanField from '@/components/BurujanField';
import GlobalPulse from '@/components/GlobalPulse';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['400', '700', '900'] });

export const metadata: Metadata = {
    title: {
        default: 'The Burujan | Digital Empire Architects',
        template: '%s | The Burujan'
    },
    description: 'From humble roots to world-class code. We build the digital infrastructure of the future. Web, Mobile, and DevOps solutions.',
    openGraph: {
        title: 'The Burujan | Digital Empire Architects',
        description: 'Engineering Digital Empires. Web, Mobile, and Enterprise Architecture.',
        url: 'https://theburujan.tech',
        siteName: 'The Burujan',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <body className="antialiased bg-[#050505] text-[#ededed]">
                <LoadingScreen />
                <BurujanField />
                <Navbar />
                <GlobalPulse />
                <ScrollToTop />
                <main className="relative z-10 min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
