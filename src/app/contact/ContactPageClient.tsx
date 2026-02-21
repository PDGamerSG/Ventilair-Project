'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ContactPageClient() {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    return (
        <div className="bg-[var(--bg-primary)] min-h-screen">
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
                    >
                        We are here to assist you with all your industrial ventilation requirements.
                    </motion.p>
                </div>
            </section>

            <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border-color)] shadow-xl hover:shadow-cyan-500/10 transition-all group text-center"
                    >
                        <div className="w-12 h-12 sm:w-16 h-16 mx-auto bg-cyan-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-6 h-6 sm:w-8 h-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">Direct Line</h3>
                        <div className="space-y-1">
                            <a href="tel:+919911808822" className="block text-sm sm:text-base font-medium text-[var(--text-secondary)] hover:text-cyan-500 transition-colors">+91 9911808822</a>
                            <a href="tel:7011966170" className="block text-sm sm:text-base font-medium text-[var(--text-secondary)] hover:text-cyan-500 transition-colors">+91 7011966170</a>
                        </div>
                        <p className="mt-4 text-[8px] sm:text-[10px] text-[var(--text-secondary)] opacity-60 uppercase tracking-widest">Available 9am - 7pm</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border-color)] shadow-xl hover:shadow-green-500/10 transition-all group text-center"
                    >
                        <div className="w-12 h-12 sm:w-16 h-16 mx-auto bg-green-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">WhatsApp</h3>
                        <a
                            href="https://wa.me/919911808822"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs font-bold rounded-full transition-all hover:shadow-lg hover:shadow-green-500/20"
                        >
                            Chat Now
                        </a>
                        <p className="mt-4 text-[8px] sm:text-[10px] text-[var(--text-secondary)] opacity-60 uppercase tracking-widest">Instant Support</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-[var(--bg-card)] p-8 rounded-3xl border border-[var(--border-color)] shadow-xl hover:shadow-blue-500/10 transition-all group text-center"
                    >
                        <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Email Us</h3>
                        <div className="space-y-1">
                            <a href="mailto:ventilairsales@gmail.com" className="block text-sm font-medium text-[var(--text-secondary)] hover:text-blue-500 transition-colors truncate">ventilairsales@gmail.com</a>
                            <a href="mailto:ventilairsales1@gmail.com" className="block text-sm font-medium text-[var(--text-secondary)] hover:text-blue-500 transition-colors truncate">ventilairsales1@gmail.com</a>
                        </div>
                        <p className="mt-4 text-[10px] text-[var(--text-secondary)] opacity-60 uppercase tracking-widest">Within 24 Hours</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border-color)] shadow-xl hover:shadow-cyan-500/10 transition-all group text-center"
                    >
                        <div className="w-12 h-12 sm:w-16 h-16 mx-auto bg-cyan-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6 sm:w-8 h-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">Visit HQ</h3>
                        <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-medium leading-relaxed mb-4 line-clamp-2">
                            No. 11/7, Mile Stone, Mathura Road, Faridabad
                        </p>
                        <a
                            href="https://www.google.com/maps/place/VENTILAIR+INDIA+PVT+LTD/@28.486964,77.3042457,19z/data=!3m1!4b1!4m6!3m5!1s0x390ce7424a7fa551:0x9cf74a981953ae00!8m2!3d28.486964!4d77.3048894!16s%2Fg%2F11s69vjwp0?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-bold text-cyan-600 hover:text-cyan-500 underline underline-offset-4"
                        >
                            Get Directions <ExternalLink className="w-2.5 h-2.5 sm:w-3 h-3" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden border border-[var(--border-color)] shadow-2xl group bg-[var(--bg-secondary)]"
                >
                    {!isMapLoaded ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg-secondary)] z-10 transition-opacity duration-500">
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M1 1h18v18H1V1zm1 1v16h16V2H2z\\' fill=\\'%239C92AC\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }} />
                            <MapPin className="w-16 h-16 text-cyan-500 mb-6 animate-bounce" />
                            <button
                                onClick={() => setIsMapLoaded(true)}
                                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-600/30 transition-all scale-100 hover:scale-105 active:scale-95"
                            >
                                Load Interactive Map
                            </button>
                            <p className="mt-4 text-sm text-[var(--text-secondary)]">Click to explore our location</p>
                        </div>
                    ) : (
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FVENTILAIR%2BINDIA%2BPVT%2BLTD%2F%4028.486964%2C77.3048894%2C19z%2Fdata%3D!4m16!1m9!3m8!1s0x390ce7424a7fa551%3A0x9cf74a981953ae00!2sVENTILAIR%2BINDIA%2BPVT%2BLTD!8m2!3d28.486964!4d77.3048894!9m1!1b1!16s%252Fg%252F11s69vjwp0!3m5!1s0x390ce7424a7fa551%3A0x9cf74a981953ae00!8m2!3d28.486964!4d77.3048894!16s%252Fg%252F11s69vjwp0%3Fentry%3Dttu%26g_ep%3DEgoyMDI2MDIxMS4wIKXMDSoASAFQAw%253D%253D&maptype=roadmap"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            title="Ventilair India Location"
                        />
                    )}

                    <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 shadow-2xl z-20 pointer-events-none">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <div>
                                <h4 className="font-bold text-[var(--text-primary)] text-sm">Ventilair India Pvt. Ltd.</h4>
                                <p className="text-xs text-[var(--text-secondary)]">Exact Location Coordinates</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
