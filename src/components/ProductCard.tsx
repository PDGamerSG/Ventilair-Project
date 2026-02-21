'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    delay?: number;
    badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, delay = 0, badge }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative h-[450px] rounded-3xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)] transition-all duration-500"
        >
            {/* Spotlight Background Effect */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Image Layer */}
            <div className="absolute inset-x-0 top-0 h-[60%] z-10 p-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                    />
                </div>
            </div>

            {/* Badge */}
            {badge && (
                <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        {badge}
                    </div>
                </div>
            )}

            {/* Content Layer (Gradient Overlay + Text) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end">
                {/* Gradient Overlay for Text Readability - Matches Card BG */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/90 to-transparent" />

                <div className="relative p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2 leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <div className="w-12 h-1 bg-cyan-500 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-left" />

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                        {description}
                    </p>

                    {/* Animated Button */}
                    <button className="flex items-center gap-2 text-[var(--text-primary)] font-semibold group-hover:gap-4 transition-all duration-300 group/btn">
                        <span className="border-b border-transparent group-hover/btn:border-cyan-500 transition-colors">Explore Specs</span>
                        <div className="bg-cyan-500 rounded-full p-1 group-hover/btn:bg-cyan-400 transition-colors text-white">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Glass Shine Effect */}
            <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

export default ProductCard;
