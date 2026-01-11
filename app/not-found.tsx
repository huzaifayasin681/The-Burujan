'use client';

import Link from 'next/link';
import BurujanField from '@/components/BurujanField';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Red Particle Background */}
            <BurujanField color="#ef4444" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 text-center p-8 bg-black/40 backdrop-blur-md border border-red-500/20 rounded-xl"
            >
                <h1 className="text-6xl md:text-9xl font-black font-heading text-red-500 mb-4 tracking-tighter glitch-effect">
                    404
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-widest">
                    Coordinates Lost
                </h2>
                <p className="text-gray-400 mb-10 max-w-md mx-auto">
                    You have drifted outside The Burujan's architecture. This sector is empty void.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-red-600/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold uppercase tracking-widest transition-all"
                >
                    Return to Base
                </Link>
            </motion.div>
        </div>
    );
}
