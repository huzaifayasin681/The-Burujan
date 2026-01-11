'use client';

import { submitContactForm } from '@/lib/actions';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function clientAction(formData: FormData) {
        setStatus('submitting');
        const result = await submitContactForm(formData);
        if (result.success) {
            setStatus('success');
        } else {
            console.error(result.error);
            setStatus('error');
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            id="contact"
            className="py-24 px-6 md:px-20 max-w-4xl mx-auto"
        >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-center text-white/90">INITIATE CONTACT</h2>
            <div className="text-center mb-12">
                <button className="px-8 py-3 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-colors">
                    Book Architect Consultation
                </button>
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Direct Access to Senior Architecture Team</p>
            </div>
            {status === 'success' ? (
                <div className="p-10 border border-gold/50 bg-gold/10 text-center rounded-lg backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-gold uppercase mb-2">Transmission Received</h3>
                    <p className="text-gray-300">Our architects will analyze your request.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-sm underline text-gray-500 hover:text-white">Send another</button>
                </div>
            ) : (
                <form action={clientAction} className="space-y-6 bg-white/5 p-10 backdrop-blur-md rounded-lg border border-white/10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                            <input type="text" id="name" name="name" className="bg-black/40 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" placeholder="ENTER NAME" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                            <input type="email" id="email" name="email" className="bg-black/40 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" placeholder="ENTER EMAIL" required />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                        <textarea id="message" name="message" rows={5} className="bg-black/40 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" placeholder="TRANSMIT MESSAGE..." required />
                    </div>
                    <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'submitting' ? 'Transmitting...' : 'Send Transmission'}
                    </button>
                </form>
            )}
        </motion.section>
    );
}
