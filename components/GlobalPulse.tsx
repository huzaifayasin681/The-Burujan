'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalPulse() {
    const [pulse, setPulse] = useState<{ id: number; x: number; y: number } | null>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // Create a unique ID for the pulse key
            setPulse({ id: Date.now(), x: e.clientX, y: e.clientY });

            // Reset after animation duration (optional, but good for cleanup logic if needed)
            // We rely on AnimatePresence mostly.
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
            {/* We want the pulse to be centered on screen, not on click position, per requirements: 
            "A semi-transparent, stylized text logo "THE BURUJAN" should briefly pulse in the exact center of the viewport" 
        */}
            <AnimatePresence>
                {pulse && (
                    <motion.div
                        key={pulse.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute flex flex-col items-center justify-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 font-heading tracking-[0.5em] select-none">
                            THE BURUJAN
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
