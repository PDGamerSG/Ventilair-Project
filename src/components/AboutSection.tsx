'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Users, UserCog, Factory } from 'lucide-react';

const stats = [
    { icon: Calendar, label: "Year of Establishment", value: "1988", suffix: "" },
    { icon: Users, label: "No of Staff", value: "35", suffix: "" },
    { icon: UserCog, label: "No of Engineers", value: "07", suffix: "" },
    { icon: Factory, label: "No of Production Lines", value: "13", suffix: "" },
];

const AboutSection: React.FC = () => {
    return (
        <section className="relative w-full bg-[#0B1120] text-white pt-48 pb-24 overflow-hidden">
            {/* 1. Organic Background Curves (SVG Mask) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Curve */}
                <svg className="absolute top-0 left-0 w-full h-[300px] fill-[var(--bg-primary)] z-10" preserveAspectRatio="none" viewBox="0 0 1440 320">
                    <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Founder/Visionary Image with Organic Shape */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end group/card"
                    >
                        <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 transition-all duration-500 hover:shadow-cyan-500/20 hover:border-white/20">
                            <Image
                                src="/people/lcdas_main_engineer.png"
                                alt="L.C. Das - Senior Engineer at Ventilair India"
                                fill
                                sizes="(max-width: 1024px) 100vw, 340px"
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                            {/* Professional Gradient Overlay for Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                                <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">Technical Lead</p>
                                <h3 className="text-2xl font-bold text-white mb-1">L.C. Das</h3>
                                <p className="text-gray-300 text-xs font-medium opacity-80">Senior Engineer</p>
                                <div className="w-8 h-1 bg-cyan-500 mt-3 rounded-full group-hover/card:w-16 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-600 rounded-full blur-[60px] opacity-20 group-hover/card:opacity-40 transition-opacity duration-500 z-[-1]" />
                    </motion.div>

                    {/* Right: Content & Vision */}
                    <div className="space-y-8 lg:pl-10 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                Energizing Business Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Innovation</span>
                            </h2>

                            <blockquote className="border-l-4 border-cyan-500 pl-6 my-8 italic text-xl text-gray-300 leading-relaxed bg-white/5 p-4 rounded-r-lg">
                                &quot;We were always conscious that we were selling more than mere equipment. We were selling increased production, improved product quality, and peace of mind.&quot;
                            </blockquote>

                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                For over three decades, Ventilair has been at the forefront of industrial aerodynamics. We don&apos;t just move air; we engineer environments that empower manufacturing excellence. From our humble beginnings to a global footprint, our commitment remains unchanged: <strong className="text-white">Precision in every rotation.</strong>
                            </p>

                            <Link href="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white text-[#0B1120] font-bold rounded-full hover:bg-cyan-50 transition-colors"
                                >
                                    Read Our Full Story
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-16"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="w-12 h-12 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                <stat.icon className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h4 className="text-4xl font-bold text-white mb-2">{stat.value}{stat.suffix}</h4>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Curve */}
            <svg className="absolute bottom-0 left-0 w-full h-[100px] fill-[var(--bg-primary)] z-10 rotate-180" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </section>
    );
};

export default AboutSection;
