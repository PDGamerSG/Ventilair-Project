'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://wa.me/919911808822"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
                    aria-label="Chat on WhatsApp"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:border-cyan-500/50 transition-colors duration-300">
                            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-inner">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-white fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 10 }}
                            className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-[var(--border-color)] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                        >
                            <span className="text-sm font-bold text-[var(--text-primary)]">Chat with us</span>
                            <div className="absolute top-1/2 right-[100%] -translate-y-1/2 border-8 border-transparent border-r-white dark:border-r-slate-800" />
                        </motion.div>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
