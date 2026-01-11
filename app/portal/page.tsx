'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClientPortal() {
    const [accessCode, setAccessCode] = useState('');
    const [status, setStatus] = useState<'idle' | 'checking' | 'denied' | 'success'>('idle');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('checking');

        // Simulate security check
        setTimeout(() => {
            if (accessCode === 'THEBURUJAN') {
                setStatus('success');
            } else {
                setStatus('denied');
            }
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-2xl bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-xl relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_15px_#22c55e]" />
                    <h1 className="text-3xl font-heading font-bold text-white mb-4 tracking-widest uppercase">
                        Welcome, Partner
                    </h1>
                    <div className="grid md:grid-cols-2 gap-4 mt-12">
                        <div className="p-6 bg-black/40 border border-white/5 rounded">
                            <h3 className="text-gold font-bold uppercase text-sm mb-2">Project Status</h3>
                            <p className="text-2xl font-black text-white">ACTIVE</p>
                        </div>
                        <div className="p-6 bg-black/40 border border-white/5 rounded">
                            <h3 className="text-gold font-bold uppercase text-sm mb-2">Next Milestone</h3>
                            <p className="text-2xl font-black text-white">DEPLOYMENT</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_15px_#D4AF37]" />

                <h1 className="text-2xl font-heading font-bold text-white mb-2 tracking-widest uppercase text-center">
                    Secure Access
                </h1>
                <p className="text-xs text-gray-500 text-center mb-8 uppercase tracking-widest">
                    The Burujan Client Network
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Access Code</label>
                        <input
                            type="password"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 p-4 text-center text-white text-lg tracking-[0.5em] focus:border-gold outline-none transition-colors rounded"
                            placeholder="••••••"
                        />
                    </div>

                    <button
                        disabled={status === 'checking'}
                        className="w-full py-4 bg-white/10 border border-white/10 hover:bg-gold hover:text-black hover:border-gold text-white font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                    >
                        {status === 'checking' ? 'Authenticating...' : 'Enter System'}
                    </button>

                    {status === 'denied' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/10 border border-red-500/50 p-4 rounded text-center"
                        >
                            <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Access Denied: Invalid Credentials</p>
                        </motion.div>
                    )}
                </form>

                <div className="mt-8 text-center">
                    <p className="text-[10px] text-gray-600 uppercase">
                        Restricted Area. Authorized Personnel Only.<br />
                        IP Logged: {typeof window !== 'undefined' ? '192.168.X.X' : '...'}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
