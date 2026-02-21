'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Users, Globe, Wrench, Headset, CheckCircle2 } from 'lucide-react';

const whyChooseUs = [
    {
        icon: Award,
        title: "Quality Excellence",
        desc: "We follow stringent quality measures to manufacture world-class products, ensuring maximum value for every investment.",
        color: "from-cyan-400 to-blue-500"
    },
    {
        icon: Factory,
        title: "Modern Infrastructure",
        desc: "Armed with high-precision machines geared for excellence, our facility is the fuel for industrial-grade manufacturing.",
        color: "from-blue-500 to-indigo-600"
    },
    {
        icon: Users,
        title: "Dedicated Strength",
        desc: "Our success is powered by experienced mentors and a team of expert technicians committed to engineering brilliance.",
        color: "from-indigo-500 to-cyan-500"
    },
    {
        icon: Globe,
        title: "Global Reach",
        desc: "With ISO certification and a robust supply chain, we export our precision ventilation solutions to nations worldwide.",
        color: "from-blue-400 to-cyan-600"
    },
    {
        icon: Wrench,
        title: "Custom Engineering",
        desc: "We provide tailored air movement solutions designed specifically for your facility's unique technical requirements.",
        color: "from-cyan-500 to-blue-700"
    },
    {
        icon: Headset,
        title: "Unwavering Support",
        desc: "Our commitment doesn't end at delivery. We provide continuous technical assistance and maintenance for long-term success.",
        color: "from-indigo-400 to-blue-500"
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <CheckCircle2 className="w-3 h-3 mr-2" />
                        Excellence Guaranteed
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold text-[var(--text-primary)] leading-tight mb-6 tracking-tight"
                    >
                        Why Choose <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600">
                            Ventilair India?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[var(--text-secondary)] text-lg sm:text-xl font-medium"
                    >
                        We define the standards of industrial ventilation through innovation, <br className="hidden sm:block" />
                        precision, and an unwavering commitment to engineering quality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-full p-8 sm:p-10 rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--border-color)] group-hover:border-cyan-500/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cyan-500/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-8 transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-cyan-500/10`}>
                                    <div className="w-full h-full bg-[var(--bg-card)] rounded-[14px] flex items-center justify-center">
                                        <item.icon className="w-8 h-8 text-cyan-500" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight group-hover:text-cyan-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-base leading-relaxed font-medium">
                                    {item.desc}
                                </p>

                                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                    <item.icon className="w-16 h-16 text-cyan-500 rotate-12" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
