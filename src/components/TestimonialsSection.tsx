'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Mehak",
        role: "Industrial Client",
        review: "Best company for all ducting work",
        rating: 5,
        platform: "Google Review"
    },
    {
        name: "Mohd Sameer Qadri",
        role: "Project Lead",
        review: "Best quality product thanks",
        rating: 5,
        platform: "Google Review"
    },
    {
        name: "Rumana Qadri",
        role: "Verified Buyer",
        review: "Axial fan receive thanks good quality 🤩",
        rating: 4,
        platform: "Google Review"
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className="py-16 sm:py-24 bg-[var(--bg-card)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-bold tracking-widest uppercase">
                            Client Stories
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6"
                    >
                        Success <span className="text-cyan-500">Stories</span>
                    </motion.h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        See how Ventilair is powering industries across the nation with reliable and efficient air movement solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[var(--bg-primary)] border border-[var(--border-color)] relative group hover:border-cyan-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10 hidden group-hover:flex transition-all">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-green-600 dark:text-green-400 tracking-wider uppercase">Verified</span>
                            </div>

                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300 dark:text-slate-700'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-[var(--text-primary)] text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-10 min-h-[60px] sm:min-h-[80px]">
                                &quot;{testimonial.review}&quot;
                            </p>

                            <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-[var(--border-color)]">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-cyan-500/20">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--text-primary)] text-xs sm:text-sm">{testimonial.name}</h4>
                                        <p className="text-[8px] sm:text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-bold">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 opacity-60 flex items-center gap-1">
                                    <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                    {testimonial.platform}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
