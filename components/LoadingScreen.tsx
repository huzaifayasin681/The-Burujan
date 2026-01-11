'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., waiting for assets or just for effect)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // 3.5 seconds total load time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-none"
                >
                    {/* Logo Animation */}
                    {/* Logo Animation */}
                    <div className="flex items-center gap-6 mb-12">
                        {/* Square B */}
                        <motion.div
                            initial={{ scale: 0, rotate: -90, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="w-16 h-16 md:w-20 md:h-20 border-2 border-gold flex items-center justify-center bg-black relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        >
                            <span className="text-4xl md:text-5xl font-black font-heading text-gold">B</span>
                        </motion.div>

                        {/* Typewriter Text */}
                        <div className="h-16 md:h-20 flex items-center overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                                className="whitespace-nowrap overflow-hidden pr-1"
                            >
                                <span className="text-4xl md:text-6xl font-black font-heading text-white tracking-widest uppercase pl-2">
                                    THE BURUJAN
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ delay: 0.8, duration: 0.8, repeat: 2 }}
                                className="w-[3px] h-10 md:h-14 bg-gold ml-1"
                            />
                        </div>
                    </div>

                    {/* Timeline / Progress Bar */}
                    <div className="w-64 md:w-96">
                        <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-widest">
                            <span>Initializing Core</span>
                            <span>System Ready</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 3, ease: "linear" }}
                                className="absolute top-0 bottom-0 left-0 w-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                            />
                        </div>
                        <div className="flex justify-between mt-2">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-[9px] text-gold font-mono"
                            >
                                :: LOADING ASSETS
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="text-[9px] text-gold font-mono"
                            >
                                :: ESTABLISHING UPLINK
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.8 }}
                                className="text-[9px] text-green-500 font-mono"
                            >
                                :: ONLINE
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
