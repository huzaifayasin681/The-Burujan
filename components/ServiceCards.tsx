'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        name: 'Rao Abdul Hadi',
        role: 'Web Architecture',
        desc: 'Scalable, high-performance web systems.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' // Replace with Cloudinary URL
    },
    {
        name: 'Rana Talha Jabbar',
        role: 'Mobile Ecosystems',
        desc: 'Seamless native and cross-platform experiences.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80'
    },
    {
        name: 'Muhammad Hafeez',
        role: 'Full Stack Systems',
        desc: 'End-to-end digital solutions.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80'
    },
    {
        name: 'Muhammad Huzaifa Hassan',
        role: 'DevOps & Infrastructure',
        desc: 'Resilient cloud architecture.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80'
    },
];

export default function ServiceCards() {
    return (
        <section id="architecture" className="py-24 px-6 md:px-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center tracking-tight text-white/90">
                THE ARCHITECTURE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="group relative h-[400px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={service.image}
                                alt={service.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold font-heading text-white group-hover:text-gold transition-colors">{service.name}</h3>
                            <p className="text-xs font-bold text-gold mt-1 uppercase tracking-widest mb-2">{service.role}</p>
                            <p className="text-sm text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-shadow">{service.desc}</p>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-2 bg-gold/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
