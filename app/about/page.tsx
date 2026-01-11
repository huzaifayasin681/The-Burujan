'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 px-6 md:px-20 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-12">
                    THE VISION
                </h1>

                <div className="space-y-12 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    <p>
                        The Burujan was forged with a singular mandate: to eliminate the friction between ambition and digital reality. We are not merely developers; we are architects of the virtual plane.
                    </p>
                    <p>
                        <span className="text-gold font-bold">Darkness is our canvas.</span> We build in the void, structuring heavy, monolithic systems that stand the test of time. In an era of ephemeral templates, we craft bespoke digital fortresses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 py-12">
                        <div className="border border-white/10 bg-white/5 p-8 rounded-lg hover:border-gold/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4">Precision</h3>
                            <p>Every line of code is a structural element. No bloat. No redundancy.</p>
                        </div>
                        <div className="border border-white/10 bg-white/5 p-8 rounded-lg hover:border-gold/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4">Scale</h3>
                            <p>Systems built to withstand the weight of millions. We engineer for empire-grade traffic.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
