'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/10 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Square B Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="w-8 h-8 border border-gold flex items-center justify-center bg-black relative z-10 group-hover:bg-gold transition-colors"
                    >
                        <span className="text-lg font-black font-heading text-gold group-hover:text-black transition-colors">B</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg font-bold tracking-widest uppercase font-heading text-white group-hover:text-gold transition-colors"
                    >
                        The Burujan
                    </motion.div>
                </Link>
                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300 font-sans">
                    <Link href="/about" className="hover:text-gold transition-colors">About</Link>
                    <Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link>
                    <Link href="/#contact" className="hover:text-gold transition-colors">Contact</Link>
                    <Link href="/portal" className="px-4 py-1.5 border border-white/20 rounded-full text-xs uppercase hover:bg-white hover:text-black transition-all">Client Portal</Link>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white uppercase text-xs tracking-widest z-50 relative">
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-heading text-white hover:text-gold tracking-widest uppercase">Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-heading text-white hover:text-gold tracking-widest uppercase">About</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-heading text-white hover:text-gold tracking-widest uppercase">Portfolio</Link>
                    <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-heading text-white hover:text-gold tracking-widest uppercase">Contact</Link>
                </div>
            )}
        </>
    );
}
