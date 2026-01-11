'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "OBSIDIAN FINANCE",
        category: "Fintech Core",
        description: "A high-frequency trading interface designed for institutional scale.",
        tech: ["Next.js", "WebSockets", "D3.js"],
        color: "from-blue-900 to-black"
    },
    {
        title: "AETHER HEALTH",
        category: "AI Diagnostics",
        description: "Neural network visualization for real-time patient data analysis.",
        tech: ["Python", "TensorFlow", "WebGL"],
        color: "from-emerald-900 to-black"
    },
    {
        title: "ROYALTY COMMERCE",
        category: "Luxury Retail",
        description: "Immersive 3D shopping experience for high-end fashion assets.",
        tech: ["Three.js", "Shopify Plus", "React"],
        color: "from-purple-900 to-black"
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-32 px-6 md:px-20 pb-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-20 text-center">
                    THE ARMORY
                </h1>

                <div className="grid gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative border border-white/10 rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm"
                        >
                            {/* Abstract Visual Placeholder */}
                            <div className={`h-64 w-full bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="p-8 md:p-12 relative z-10 -mt-20">
                                <div className="bg-black/80 backdrop-blur-md p-6 border border-white/5 rounded-lg inline-block mb-4">
                                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">{project.category}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 group-hover:text-gold transition-colors">{project.title}</h2>
                                <p className="text-gray-400 text-lg mb-6 max-w-2xl">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 border border-white/20 rounded-full text-xs text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
