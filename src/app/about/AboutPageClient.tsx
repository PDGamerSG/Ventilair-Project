'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, History, TrendingUp, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export default function AboutPageClient({ team }: { team: TeamMember[] }) {
    return (
        <div className="bg-[var(--bg-primary)] min-h-screen">
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4"
                    >
                        Since 1988
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 leading-tight"
                    >
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Fresh Air</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
                    >
                        Ventilair India is a prominent manufacturer and exporter committed to improving indoor air quality through advanced industrial ventilation systems.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Our Legacy of Excellence</h2>
                            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                                <p>
                                    Founded in 1988, <strong className="text-[var(--text-primary)]">Ventilair India Pvt. Ltd.</strong> has established itself as a leader in the industrial ventilation sector. We specialize in providing a wide spectrum of air-handling solutions, from Centrifugal Blowers and Axial Fans to complex Dust Collection Systems.
                                </p>
                                <p>
                                    While passive ventilation via open doors or windows can aid in air circulation, its effectiveness is often constrained by energy-saving considerations and consistency. For this challenge, Ventilair provides the ideal engineered solution.
                                </p>
                                <p>
                                    We are not just manufacturers; we are innovators. Our product range includes Semi-Automatic Portable Dust Collectors, Chemical Scrubbers, Spray Lacquer Booths, and Pad Type Air Cooling Systems. Furthermore, we actively serve the industry as a trusted service provider for Air Service Units.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                {[
                                    "Manufacturer & Exporter",
                                    "Founded in 1988",
                                    "ISO Certified Quality",
                                    "Global Service Network"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                        <span className="text-[var(--text-primary)] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                                        <History className="w-8 h-8 text-cyan-500 mb-3" />
                                        <h3 className="font-bold text-xl text-[var(--text-primary)] mb-1">35+ Years</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Of industry leadership and innovation</p>
                                    </div>
                                    <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-blue-500/10 transition-shadow">
                                        <Globe className="w-8 h-8 text-blue-500 mb-3" />
                                        <h3 className="font-bold text-xl text-[var(--text-primary)] mb-1">Global Reach</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Exporting quality to 12+ countries</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                                        <TrendingUp className="w-8 h-8 text-cyan-500 mb-3" />
                                        <h3 className="font-bold text-xl text-[var(--text-primary)] mb-1">Growth</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Continuous expansion in technology</p>
                                    </div>
                                    <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-blue-500/10 transition-shadow">
                                        <Award className="w-8 h-8 text-blue-500 mb-3" />
                                        <h3 className="font-bold text-xl text-[var(--text-primary)] mb-1">Certified</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">ISO 9001:2015 Quality Standards</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">Leadership Team</h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        The minds behind our precision engineering and customer success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-2xl aspect-square sm:aspect-[3/4] mb-4 sm:mb-5 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60 z-10" />

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
                            <p className="text-cyan-600 dark:text-cyan-400 font-medium text-xs sm:text-sm uppercase tracking-wide">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
