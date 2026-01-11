'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    {
        title: "PHASE 01: THE AUDIT",
        desc: "We don't guess. We analyze your goals, your competition, and your user needs to create a structural plan that cannot fail."
    },
    {
        title: "PHASE 02: THE LOGIC",
        desc: "Before a single line of code is written, we map the database schemas, API routes, and user flows. We design the skeleton of your empire."
    },
    {
        title: "PHASE 03: THE CONSTRUCTION",
        desc: "Our Architects (Hadi, Talha, Hafeez) build your system using Next.js and Cloud Native technologies. Clean code. No bloat. Pure performance."
    },
    {
        title: "PHASE 04: THE FORTIFICATION",
        desc: "Huzaifa secures the perimeter. We set up CI/CD pipelines, automated backups, and scalable cloud infrastructure. Your system stays online, always."
    }
];

export default function TheBlueprint() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={targetRef} className="py-32 px-6 md:px-20 relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-20 text-center text-white/90">
                THE BLUEPRINT
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Central Timeline Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gold -translate-x-1/2 will-change-transform"
                />

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row gap-8 md:gap-24 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Node Point */}
                            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-gold -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

                            {/* Content */}
                            <div className={`pl-12 md:pl-0 md:w-1/2 text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <h3 className="text-2xl font-bold font-heading text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                            </div>
                            <div className="hidden md:block md:w-1/2" /> {/* Spacer */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
