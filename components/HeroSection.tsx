'use client';

import { motion } from 'framer-motion';

import HeroHUD from './HeroHUD';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4 text-center">
            <HeroHUD />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.3
                        }
                    }
                }}
            >
                <div className="overflow-hidden">
                    <motion.h1
                        variants={{
                            hidden: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 font-heading mb-2 drop-shadow-2xl"
                    >
                        ENGINEERING
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        variants={{
                            hidden: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 font-heading mb-6 drop-shadow-2xl"
                    >
                        DIGITAL EMPIRES
                    </motion.h1>
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-2xl text-lg md:text-xl text-gray-400 font-light tracking-wide leading-relaxed"
            >
                From humble roots to celestial architecture. <br />
                <span className="text-gold font-medium">The new standard in high-end IT.</span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-12"
            >
                <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold tracking-widest uppercase hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                    Initiate Protocol
                </button>
            </motion.div>
        </section>
    );
}
