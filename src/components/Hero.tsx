'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Wind, Zap, Shield, Activity } from 'lucide-react';

const products = [
    {
        id: 1,
        image: "/mainpics/Belt Driven Centrifugal Blower.png",
        name: "Belt Driven Centrifugal Blower",
        tagline: "Heavy-Duty Industrial Air Supply",
        description: "High-performance belt-driven blower designed for continuous industrial air supply and ventilation.",
        imageScale: 1,
        highlights: [
            { label: "Airflow", value: "85,000 CFM", icon: <Wind className="h-6 w-6" />, color: "cyan" },
            { label: "Power", value: "Up to 120kW", icon: <Zap className="h-6 w-6" />, color: "blue" }
        ]
    },
    {
        id: 2,
        image: "/mainpics/Axial flow fan.png",
        name: "Axial Flow Fan",
        tagline: "High-Volume Industrial Ventilation",
        description: "High-efficiency axial flow fan engineered to deliver powerful high-volume airflow with low energy consumption. Ideal for industrial ventilation, cooling, exhaust, and large-scale air circulation applications.",
        imageScale: 1,
        highlights: [
            { label: "Airflow", value: "42,000 CFM", icon: <Wind className="h-6 w-6" />, color: "cyan" },
            { label: "Power", value: "Up to 15 kW", icon: <Zap className="h-6 w-6" />, color: "blue" }
        ]
    },
    {
        id: 3,
        image: "/mainpics/Bag filter.png",
        name: "Bag Filter",
        tagline: "High-Efficiency Dust Collection System",
        description: "Advanced bag filter system designed to capture fine dust particles using high-quality filter media. Ensures clean air output with reliable performance, making it ideal for industrial dust collection and pollution control.",
        imageScale: 1,
        highlights: [
            { label: "Airflow", value: "12,500 CFM", icon: <Wind className="h-6 w-6" />, color: "cyan" },
            { label: "Efficiency", value: "99.9%", icon: <Shield className="h-6 w-6" />, color: "blue" }
        ]
    },
    {
        id: 4,
        image: "/mainpics/Direct driven fan.png",
        name: "Direct Driven Centrifugal Fan",
        tagline: "High-Efficiency Direct-Drive Airflow",
        description: "Direct-driven centrifugal fan engineered for efficient and reliable air movement. The direct motor-to-impeller design ensures high efficiency, low maintenance, and smooth operation.",
        imageScale: 1,
        highlights: [
            { label: "Airflow", value: "Up to 28,000 CFM", icon: <Wind className="h-6 w-6" />, color: "cyan" },
            { label: "Power", value: "Up to 22 kW", icon: <Zap className="h-6 w-6" />, color: "blue" }
        ],
        titleClass: "text-3xl sm:text-6xl"
    },
    {
        id: 5,
        image: "/mainpics/hot air supply fan.png",
        name: "Hot Air Supply Fan",
        tagline: "High-Temperature Industrial Air Supply",
        description: "Heavy-duty centrifugal hot air supply fan engineered to deliver high-temperature airflow with reliable performance. Designed for dryers, ovens, and industrial heating systems, ensuring efficient hot air circulation.",
        imageScale: 0.70,
        highlights: [
            { label: "Airflow", value: "Up to 35,000 CFM", icon: <Activity className="h-6 w-6" />, color: "cyan" },
            { label: "Temperature", value: "Up to 400°C", icon: <Zap className="h-6 w-6" />, color: "blue" }
        ]
    },
    {
        id: 6,
        image: "/mainpics/2stage high pressure fan.png",
        name: "Two-Stage High Pressure Fan",
        tagline: "High-Pressure Industrial Airflow Solution",
        description: "Heavy-duty two-stage centrifugal fan engineered to deliver high-pressure airflow for demanding industrial applications. The dual-stage impeller design ensures stable performance, higher pressure generation, and reliable operations.",
        imageScale: 1,
        highlights: [
            { label: "Pressure", value: "Up to 1500 mmWG", icon: <Activity className="h-6 w-6" />, color: "cyan" },
            { label: "Airflow", value: "Up to 18,000 CFM", icon: <Wind className="h-6 w-6" />, color: "blue" }
        ],
        titleClass: "text-3xl sm:text-6xl"
    }
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const activeProduct = products[currentIndex];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center bg-[var(--bg-primary)] pt-40 lg:pt-0">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-soft-light" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-8"
                        >
                            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-[10px] sm:text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">
                                New Generation series
                            </span>
                        </motion.div>

                        <motion.h1
                            key={activeProduct.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`${activeProduct.titleClass || 'text-4xl sm:text-7xl'} font-bold tracking-tight text-[var(--text-primary)] mb-4 leading-[1.1]`}
                        >
                            {activeProduct.name}
                        </motion.h1>

                        <motion.p
                            key={activeProduct.tagline}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl sm:text-2xl text-cyan-600 dark:text-cyan-400 font-medium mb-6"
                        >
                            {activeProduct.tagline}
                        </motion.p>

                        <motion.p
                            key={activeProduct.description}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-[var(--text-secondary)] max-w-md leading-relaxed mb-10"
                        >
                            {activeProduct.description}
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-5 w-full">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-3"
                                >
                                    Contact Us <ArrowRight className="h-5 w-5" />
                                </motion.button>
                            </Link>
                            <Link href="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[var(--border-color)] text-[var(--text-primary)] rounded-full font-bold text-lg hover:bg-[var(--bg-card)] transition-all backdrop-blur-sm"
                                >
                                    Products
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full h-full flex flex-col items-center justify-center"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-10 right-0 z-30 hidden lg:flex flex-col gap-3"
                            >
                                {activeProduct.highlights?.map((highlight, index) => (
                                    <div key={index} className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 p-4 rounded-xl shadow-2xl flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${highlight.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-500 dark:text-cyan-300' : 'bg-blue-500/20 text-blue-500 dark:text-blue-300'}`}>
                                            {highlight.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">{highlight.label}</div>
                                            <div className="font-bold text-[var(--text-primary)]">{highlight.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProduct.id}
                                    initial={{ opacity: 0, scale: (activeProduct.imageScale || 1) * 0.8, rotate: -5 }}
                                    animate={{
                                        opacity: 1,
                                        scale: activeProduct.imageScale || 1,
                                        rotate: 0,
                                        y: [0, -20, 0]
                                    }}
                                    exit={{ opacity: 0, scale: (activeProduct.imageScale || 1) * 0.9, rotate: 5 }}
                                    transition={{
                                        opacity: { duration: 0.4 },
                                        scale: { duration: 0.4 },
                                        rotate: { duration: 0.4 },
                                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="relative h-full max-h-[300px] sm:max-h-[450px] lg:max-h-[550px] w-full z-20"
                                >
                                    <Image
                                        src={activeProduct.image}
                                        alt={activeProduct.name}
                                        fill
                                        priority
                                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute bottom-0 inset-x-0 w-full flex flex-col gap-4 z-30">
                                <div className="w-full h-1 bg-[var(--border-color)]/30 rounded-full overflow-hidden">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 6, ease: "linear" }}
                                        className="h-full bg-cyan-500"
                                    />
                                </div>

                                <div className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide justify-start lg:justify-center items-center w-full px-4 snap-x">
                                    {products.map((product, idx) => (
                                        <button
                                            key={product.id}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`relative group flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden transition-all duration-500 ${idx === currentIndex
                                                ? 'border-2 border-cyan-500 ring-4 ring-cyan-500/20 scale-110 shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                                                : 'border-2 border-white/10 opacity-50 hover:opacity-100 hover:border-white/30 hover:scale-105'
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="80px"
                                                className={`object-contain p-2 sm:p-3 transition-transform duration-500 ${idx === currentIndex ? 'scale-110' : 'group-hover:scale-110'}`}
                                            />
                                            {idx !== currentIndex && (
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
