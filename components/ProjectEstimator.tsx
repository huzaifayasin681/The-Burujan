'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitContactForm } from '@/lib/actions'; // Reuse secure submission logic, or adjust if new model needed

const options = {
    step1: [
        { id: 'web', label: 'Web Architecture', desc: 'Custom Website/WebApp' },
        { id: 'mobile', label: 'Mobile Ecosystem', desc: 'iOS/Android App' },
        { id: 'fullstack', label: 'Full Stack Empire', desc: 'Web + Mobile + Admin' },
        { id: 'devops', label: 'Infrastructure', desc: 'DevOps/Cloud Setup' },
    ],
    step2: [
        { id: 'idea', label: 'The Spark', desc: 'Just an idea, need guidance' },
        { id: 'design', label: 'The Blueprint', desc: 'Designs are ready, need code' },
        { id: 'existing', label: 'The Renovation', desc: 'Existing code needs fixing' },
    ],
    step3: [
        { id: 'starter', label: 'MVP / Starter', desc: '$500 - $1,500' },
        { id: 'growth', label: 'Growth / Business', desc: '$1,500 - $5,000' },
        { id: 'enterprise', label: 'Enterprise / Empire', desc: '$5,000+' },
    ],
};

export default function ProjectEstimator() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ type: '', stage: '', budget: '', name: '', email: '', whatsapp: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSelect = (key: string, value: string) => {
        setData({ ...data, [key]: value });
        setStep(step + 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Construct message payload for existing action or create new one
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', `ESTIMATOR REQUEST:
Type: ${data.type}
Stage: ${data.stage}
Budget: ${data.budget}
WhatsApp: ${data.whatsapp}`);

        const result = await submitContactForm(formData);
        if (result.success) {
            setStatus('success');
        } else {
            console.error(result.error);
            setStatus('error');
        }
    };

    return (
        <section className="py-24 px-6 md:px-20 bg-black/50 border-y border-white/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center text-white/90">PROJECT ESTIMATOR</h2>
                <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Configure your digital requirements. Our algorithmic estimator will provide a preliminary valuation range.</p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-8 min-h-[500px] backdrop-blur-sm relative overflow-hidden flex flex-col justify-center">
                    {status === 'success' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                            <h3 className="text-3xl font-bold text-gold uppercase mb-4">Estimate Generated</h3>
                            <p className="text-gray-300 text-lg mb-8">Huzaifa will analyze your blueprint and contact you shortly.</p>
                            <button onClick={() => { setStep(1); setStatus('idle'); setData({ type: '', stage: '', budget: '', name: '', email: '', whatsapp: '' }); }} className="text-sm text-gray-500 underline hover:text-white">Start New Estimate</button>
                        </motion.div>
                    ) : (
                        <>
                            {step === 1 && (
                                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                    <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-center mb-8">Step 01: What are we building?</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {options.step1.map((opt) => (
                                            <button key={opt.id} onClick={() => handleSelect('type', opt.label)} className="p-6 border border-white/10 rounded-lg bg-black/40 hover:border-gold hover:bg-gold/10 transition-all text-left group">
                                                <div className="text-lg font-bold text-white group-hover:text-gold">{opt.label}</div>
                                                <div className="text-sm text-gray-500">{opt.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                    <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-center mb-8">Step 02: Current State?</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {options.step2.map((opt) => (
                                            <button key={opt.id} onClick={() => handleSelect('stage', opt.label)} className="p-6 border border-white/10 rounded-lg bg-black/40 hover:border-gold hover:bg-gold/10 transition-all text-left group">
                                                <div className="text-lg font-bold text-white group-hover:text-gold">{opt.label}</div>
                                                <div className="text-sm text-gray-500">{opt.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                    <button onClick={() => setStep(1)} className="mt-8 text-sm text-gray-500 hover:text-white underline">Back</button>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                    <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-center mb-8">Step 03: Estimated Investment?</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {options.step3.map((opt) => (
                                            <button key={opt.id} onClick={() => handleSelect('budget', opt.label)} className="p-6 border border-white/10 rounded-lg bg-black/40 hover:border-gold hover:bg-gold/10 transition-all text-left group">
                                                <div className="text-lg font-bold text-white group-hover:text-gold">{opt.label}</div>
                                                <div className="text-sm text-gray-500">{opt.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                    <button onClick={() => setStep(2)} className="mt-8 text-sm text-gray-500 hover:text-white underline">Back</button>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 max-w-md mx-auto w-full">
                                    <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-center mb-8">Step 04: Finalize Protocol</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                                            <input type="text" required value={data.name} onChange={e => setData({ ...data, name: e.target.value })} className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="YOUR NAME" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                                            <input type="email" required value={data.email} onChange={e => setData({ ...data, email: e.target.value })} className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="YOUR EMAIL" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase">WhatsApp</label>
                                            <input type="text" required value={data.whatsapp} onChange={e => setData({ ...data, whatsapp: e.target.value })} className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="+92 ..." />
                                        </div>
                                        <div className="pt-4 flex justify-between items-center">
                                            <button type="button" onClick={() => setStep(3)} className="text-sm text-gray-500 hover:text-white underline">Back</button>
                                            <button type="submit" disabled={status === 'submitting'} className="px-8 py-3 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50">
                                                {status === 'submitting' ? 'Calculating...' : 'Calculate Estimate'}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
