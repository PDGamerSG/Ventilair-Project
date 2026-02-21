'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, ChevronLeft, ZoomIn } from 'lucide-react';
import Footer from '@/components/Footer';

interface Product {
    name: string;
    images: string[];
    category: string;
    description?: string;
}

const featuredSolutions = [
    {
        id: 'dust-collection',
        title: 'Dust Collection Systems',
        category: 'Dust Collection',
        description: 'Industrial-grade air filtration systems for high-performance dust management and material recovery.',
        image: '/products/CYCLONE DUST SEPERATOR.jpg',
        bullets: ['99.9% Filtration Efficiency', 'HEPA Integrated Options', 'Heavy-Duty Fabricated Steel']
    },
    {
        id: 'scrubbing',
        title: 'Scrubbing & Filtration',
        category: 'Scrubbers',
        description: 'Advanced chemical and particulate scrubbers designed for neutralizing harmful emissions and VOCs.',
        image: '/products/SCRUBBER.jpg',
        bullets: ['Corrosion Proof Lining', 'Multi-Stage Neutralization', 'Low System Pressure Drop']
    },
    {
        id: 'impellers',
        title: 'Precision Impellers',
        category: 'Impellers',
        description: 'Aerodynamically optimized metal impellers, balanced to ISO standards for vibration-free engineering.',
        image: '/products/MS AXIAL IMPELLER.jpg',
        bullets: ['ISO 21940-11 Balanced', 'CNC Cut Profiles', 'High-Strength MS/SS Options']
    },
    {
        id: 'paint-booths',
        title: 'Paint Finishing Systems',
        category: 'Paint Booths',
        description: 'Controlled-environment spray paint booths ensuring consistent airflow and superior safety standards.',
        image: '/products/PAINT BOOTH 1.png',
        bullets: ['Laminar Airflow Design', 'LED Explosion Proof Lighting', 'Energy Efficient VFD Control']
    }
];

const products: Product[] = [
    // Fans
    {
        name: 'High Pressure Centrifugal Fan',
        images: [
            '/products/2stage high pressure fan.png',
            '/products/HIGH PRESSURE FAN.jpg',
            '/products/high pressure fan 2.jpg'
        ],
        category: 'Fans',
        description: 'Industrial-grade high pressure centrifugal fans engineered for extreme durability and precision air movement in demanding environments.',
    },
    {
        name: 'Direct Driven Axial Fan',
        images: [
            '/products/direct driven fan.jpg',
            '/products/direct driven 2.jpg',
            '/products/direct driven 3.jpg',
            '/products/direct driven 4.jpg',
            '/products/direct driven 5.jpg',
            '/products/direct driven 6.jpg',
            '/products/direct driven 7.jpg',
            '/products/direct driven 8.jpg',
            '/products/direct driven 9.jpg',
            '/products/direct driven 10jpg.jpg',
            '/products/direct driven 11.jpg',
        ],
        category: 'Fans',
        description: 'A comprehensive series of direct-driven axial fans, offering versatile mounting options and high-efficiency performance for various industrial ventilation needs.',
    },
    {
        name: 'Axial Flow Fan Series',
        images: [
            '/products/Axial Fan 1.jpg',
            '/products/Axial fan 2.jpg',
            '/products/Axial fan 3.jpg',
            '/products/Axial fan 4.jpg',
            '/products/Axial fan 5.jpg',
            '/products/Axial fan 6.jpg',
            '/products/Axial fan 7.jpg',
            '/products/Axial fan 8.jpg',
            '/products/Axial fan 9.jpg',
            '/products/axial flow fan.png',
            '/products/ROUND AXIAL FAN.jpg',
            '/products/sq type for axial fan.jpg'
        ],
        category: 'Fans',
        description: 'High-performance axial flow fans designed for maximum air displacement. Available in round, square, and specialized industrial configurations.',
    },
    {
        name: 'Industrial Bagfilters',
        images: [
            '/products/BAGFILTER.jpg',
            '/products/BAGFILTER 2.jpg',
            '/products/BAGFILTER 3.jpg',
            '/products/Bag filter 1.jpg',
            '/products/Bag filter 2.jpg',
            '/products/Bag filter 3.jpg',
            '/products/Bag filter 4.jpg',
            '/products/Bag filter 5.jpg',
            '/products/Bag filter 6.jpg',
            '/products/Bag filter 7.jpg',
            '/products/Bag filter 8.jpg',
            '/products/Bag filter 9.jpg',
            '/products/Bag filter 10.jpg',
            '/products/Bag filter 11.jpg',
            '/products/Bag filter 12.jpg',
            '/products/Bag filter 13.jpeg',
            '/products/MANUAL SHAKING bagfilter.jpg'
        ],
        category: 'Bagfilters',
        description: 'Advanced dust collection and air purification systems featuring heavy-duty fabric bagfilters with various cleaning mechanisms for zero-emission workflows.',
    },
    {
        name: 'Induced Draft Fan for Boilers',
        images: ['/products/id fan 1.jpg',
            '/products/id fan 2.jpg',
            '/products/id fan 3.jpg',
            '/products/id fan 4.jpg'
        ],
        category: 'ID Fan for Boilers',
        description: 'Heavy-duty centrifugal induced draft fan designed to efficiently extract flue gases from boilers and maintain proper furnace draft.',
    },
    {
        name: 'Industrial Man Cooler',
        images: ['/products/AIR CIRCULATING FAN.jpg'],
        category: 'Fans',
        description: 'Powerful, heavy-duty man cooler designed for rapid personal cooling and air circulation in hot industrial environments.',
    },
    {
        name: 'Paint Booth Exhaust Fan',
        images: ['/products/PAINT BOOTH FAN.jpg'],
        category: 'Fans',
        description: 'Spark-resistant design optimized for paint booth exhaust systems, ensuring safe and efficient removal of overspray.',
    },
    {
        name: 'Inline Duct Fan',
        images: ['/products/inline duct mounted fan.jpg'],
        category: 'Fans',
        description: 'Seamless integration into existing ductwork for boosted airflow in HVAC and process ventilation systems.',
    },

    // Blowers
    {
        name: 'Industrial Blower Series',
        images: [
            '/products/BLOWER.jpg',
            '/products/Centrifugal blower.png',
            '/products/EXHAUST BLOWER.jpg',
            '/products/EXHAUST BLOWER unit.jpg',
            '/products/high volume blower 1.jpg',
            '/products/high volume blower 1.1.jpg',
            '/products/TWIN LUBE BLOWER.jpg'
        ],
        category: 'Blowers',
        description: 'A wide range of high-efficiency blowers including centrifugal, positive displacement, and high-volume models for heavy-duty industrial applications.',
    },

    // Impellers
    {
        name: 'Precision Industrial Impellers',
        images: [
            '/products/IMPELLER.jpg',
            '/products/IMPELLER for ID FAN.jpg',
            '/products/IMPELLER 2 for ID FAN.jpg',
            '/products/IMPELLER for axial fan.jpg',
            '/products/MS AXIAL IMPELLER.jpg',
            '/products/SPARE IMPELLER.png',
            '/products/MS AXIAL IMPELLER.jpg'
        ],
        category: 'Impellers',
        description: 'Aerodynamically optimized, ISO-balanced impellers designed for peak fan performance and vibration-free operation across all industrial sectors.',
    },


    {
        name: 'SS Corrosion-Resistant Fan',
        images: [
            '/products/SS AXIAL FLOW FAN.jpg',
            '/products/centrifugal blower of stainless stell 1.jpg'
        ],
        category: 'Fans',
        description: 'Specialized stainless steel fans and blowers engineered for longevity in corrosive, chemical, or high-moisture environments.',
    },

    // Scrubbers
    {
        name: 'Industrial Scrubber Systems',
        images: [
            '/products/SCRUBBER.jpg',
            '/products/SCRUBBER 2.jpg'
        ],
        category: 'Scrubbers',
        description: 'High-efficiency wet and dry scrubbing systems designed for effective neutralization of hazardous gases and particulate matter.',
    },

    // Air Systems
    {
        name: 'Air Cooling Unit',
        images: [
            '/products/AIR COOLING UNIT.jpg',
            '/products/HOT AIR SUPPLY UNIT.jpg',
            '/products/HOT-AIR SUPPLY SYSTEM.jpg',
            '/products/Hot air supply fan 1.jpg',
            '/products/Hot air supply fan 2.jpg',
            '/products/hot air supply system.jpg'
        ],
        category: 'Air Systems',
        description: 'Comprehensive systems for industrial cooling and hot air supply, ensuring precise temperature control for drying and curing processes.',
    },

    // Ventilation
    {
        name: 'Industrial Ventilation Parts',
        images: [
            '/products/ROOF VENTILATOR.jpg',
            '/products/GRAVITY LOUVERS.jpg',
            '/products/SUCTION HOOD.jpg',
            '/products/BELLOWS.jpg'
        ],
        category: 'Ventilation',
        description: 'Essential components for facility ventilation, including wind-driven roof ventilators, gravity louvers, and flexible exhaust bellows.',
    },

    // Paint Booths
    {
        name: 'Advanced Paint Booth Systems',
        images: [
            '/products/PAINT BOOTH 1.png',
            '/products/PAINT BOOTH2.png'
        ],
        category: 'Paint Booths',
        description: 'Climate-controlled and dry-back spray paint booths designed for premium industrial finishing and environmental safety.',
    },

    // Dust Collection
    {
        name: 'Cyclone Dust Separators',
        images: ['/products/CYCLONE DUST SEPERATOR.jpg'],
        category: 'Dust Collection',
        description: 'Heavy-duty centrifugal dust collectors designed for efficient coarse particulate capture and material recovery.',
    },
];

const categories = ['All', ...Array.from(new Set(products.map(p => p.category))).filter(cat => cat !== 'Dust Collection')];

export default function ProductsPageClient() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        if (selectedProduct) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProduct) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
        }
    };

    useEffect(() => {
        if (selectedProduct) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentImageIndex(0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedProduct]);

    const filtered = useMemo(() => {
        return products.filter(p => {
            const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="w-full bg-[var(--bg-primary)] min-h-screen">
            <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[80%] rounded-full blur-[120px] opacity-[0.1] dark:opacity-20 mix-blend-screen"
                        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />
                    <div className="absolute top-[20%] right-[-10%] w-[60%] h-[70%] rounded-full blur-[100px] opacity-[0.1] dark:opacity-15 mix-blend-screen"
                        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                        style={{ backgroundImage: `radial-gradient(var(--text-primary) 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
                </div>

                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-8"
                            >
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                                >
                                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                    Elite Industrial Ventilation
                                </motion.span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="font-extrabold tracking-tight mb-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02]"
                            >
                                <span className="text-[var(--text-primary)] block mb-2">Engineered for</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 drop-shadow-2xl">
                                    Peak Performance
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-[var(--text-secondary)] max-w-xl leading-loose font-medium text-lg md:text-xl md:leading-relaxed mb-10 opacity-90"
                            >
                                Setting the global standard in high-performance air-handling systems.
                                Precision-built components designed for zero-downtime industrial excellence.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                className="flex flex-wrap gap-5"
                            >
                                <button
                                    onClick={() => {
                                        const catalogSection = document.getElementById('product-catalog');
                                        if (catalogSection) {
                                            const yOffset = -120;
                                            const y = catalogSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                    className="px-10 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl shadow-2xl shadow-cyan-600/30 transition-all hover:scale-105 active:scale-95 text-base"
                                >
                                    Explore Catalog
                                </button>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-2xl hover:border-cyan-500/50 transition-all hover:bg-[var(--bg-secondary)] text-base shadow-lg shadow-black/5"
                                >
                                    Custom Solutions
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {featuredSolutions.map((solution) => (
                                <motion.div
                                    key={solution.id}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    onClick={() => {
                                        setActiveCategory(solution.category);
                                        window.scrollTo({ top: 900, behavior: 'smooth' });
                                    }}
                                    className="group relative cursor-pointer bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-[var(--border-color)] hover:border-cyan-500/50 transition-all duration-300 shadow-xl shadow-black/5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                    <div className="w-12 h-12 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center mb-4 group-hover:border-cyan-500/30 transition-colors">
                                        <div className="relative w-8 h-8">
                                            <Image src={solution.image} alt={solution.title} fill className="object-contain" />
                                        </div>
                                    </div>

                                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-[11px] text-[var(--text-secondary)] leading-snug line-clamp-2 opacity-80">
                                        {solution.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section
                id="product-catalog"
                className="sticky top-4 z-40 max-w-6xl mx-auto px-4 mt-8 sm:mt-20 mb-12"
            >
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-3 md:p-4 flex flex-col lg:flex-row items-center justify-between gap-6 px-6 sm:px-10 transition-all duration-500">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 overflow-x-auto no-scrollbar max-w-full">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                                        px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden group
                                        ${isActive
                                            ? 'text-white'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                                        }
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-600/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="w-full lg:max-w-xs shrink-0">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl group-focus-within:bg-[var(--bg-card)] group-focus-within:border-cyan-500/50 transition-all shadow-sm">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                                <input
                                    type="text"
                                    placeholder="Search catalog..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-12 py-2.5 bg-transparent text-sm font-medium text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none ring-0"
                                />
                                <AnimatePresence>
                                    {searchQuery && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border-color)]"
                                        >
                                            <X className="w-3 h-3" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-baseline gap-3"
                    >
                        <h2 className="text-[22px] font-bold text-[var(--text-primary)] tracking-tight">
                            {activeCategory === 'All' ? 'All Products' : activeCategory}
                        </h2>
                        <span className="text-[13px] text-[var(--text-secondary)]">
                            {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            <section className="pb-28 pt-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filtered.length === 0 ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-28">
                            <Search className="w-10 h-10 text-[var(--text-secondary)] opacity-25 mx-auto mb-5" />
                            <p className="text-lg font-semibold text-[var(--text-primary)] mb-1">No results</p>
                            <p className="text-[var(--text-secondary)] text-sm mb-6">Try a different search or category.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold hover:underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            <AnimatePresence mode="popLayout">
                                {filtered.map((product, index) => (
                                    <motion.article
                                        key={product.name}
                                        layout
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.35) }}
                                        onClick={() => setSelectedProduct(product)}
                                        className="group cursor-pointer h-full"
                                    >
                                        <div className="relative h-full flex flex-col rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-sm transition-all duration-700 group-hover:border-cyan-500/40 group-hover:shadow-[0_30px_60px_-15px_rgba(6,182,212,0.2)] group-hover:-translate-y-2">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-indigo-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                                            <div className="relative aspect-square overflow-hidden bg-[var(--bg-secondary)] shrink-0">
                                                <div className="absolute inset-0 z-[1] pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_0_80px_rgba(0,0,0,0.15)]" />

                                                <div className="absolute top-4 right-4 z-[5] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--bg-card)] backdrop-blur-md border border-cyan-500/20 shadow-lg">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                                                        <span className="text-[9px] font-black text-[var(--text-primary)] uppercase tracking-tighter">Premium Grade</span>
                                                    </div>
                                                </div>

                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-contain p-8 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-[-1deg] group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
                                                />

                                                <div className="absolute inset-0 z-[2] bg-cyan-950/0 group-hover:bg-cyan-950/10 transition-colors duration-700 flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500">
                                                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/40 shadow-2xl">
                                                            <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 relative z-10 border-t border-[var(--border-color)]/50 flex flex-col flex-grow">
                                                <div className="flex items-center justify-between mb-3">
                                                    <p className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase">
                                                        {product.category}
                                                    </p>
                                                    <div className="h-px flex-grow mx-4 bg-gradient-to-r from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <h3 className="text-base font-extrabold text-[var(--text-primary)] leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-500 line-clamp-2 mb-auto">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                                    <span className="text-[11px] font-bold text-[var(--text-secondary)] italic">ISO Certified Engineering</span>
                                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>

            <section className="relative py-20 overflow-hidden border-t border-[var(--border-color)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]" />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px] opacity-25"
                        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }} />
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-8 leading-relaxed" style={{ fontSize: '0.95rem' }}>
                            We engineer bespoke ventilation systems to match your exact industrial requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm px-7 py-3 rounded-lg transition-colors duration-200"
                            >
                                Get in Touch
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-sm px-7 py-3 rounded-lg border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-200"
                            >
                                Call Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <div className="absolute inset-0 bg-black/75 backdrop-blur-xl" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 z-[110] p-3 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-2xl text-slate-800 dark:text-white/70 hover:text-cyan-500 transition-all border border-transparent hover:border-cyan-500/30"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative w-full md:w-1/2 flex items-center justify-center bg-slate-50 dark:bg-slate-800/80 p-12 sm:p-20 border-b md:border-b-0 md:border-r border-[var(--border-color)]/30 overflow-hidden">
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <AnimatePresence mode="popLayout" initial={false} custom={currentImageIndex}>
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 24
                                            }}
                                            className="relative w-full h-full max-h-[52vh]"
                                        >
                                            <Image
                                                src={selectedProduct.images[currentImageIndex]}
                                                alt={selectedProduct.name}
                                                fill
                                                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {selectedProduct.images.length > 1 && (
                                    <>
                                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 flex justify-between items-center z-20 pointer-events-none">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                className="group pointer-events-auto p-4 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 text-slate-800 dark:text-white transition-all hover:scale-110 active:scale-95 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 shadow-xl shadow-black/5"
                                            >
                                                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                className="group pointer-events-auto p-4 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 text-slate-800 dark:text-white transition-all hover:scale-110 active:scale-95 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 shadow-xl shadow-black/5"
                                            >
                                                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
                                            </button>
                                        </div>

                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-slate-900/10 dark:bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                            {selectedProduct.images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'bg-cyan-500 w-8 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-400 dark:bg-white/20 w-1.5 hover:bg-slate-500 dark:hover:bg-white/40'}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                <div className="absolute top-8 left-12 opacity-30">
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">Ventilair Systems // Catalog Mode</div>
                                </div>
                            </div>

                            <div className="flex-grow overflow-y-auto p-10 sm:p-14 bg-white dark:bg-slate-900">
                                <div className="max-w-xl">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.25em] text-cyan-500 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                            {selectedProduct.category}
                                        </span>

                                        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
                                            {selectedProduct.name}
                                        </h2>

                                        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-loose mb-10 opacity-90 font-medium">
                                            {selectedProduct.description || `High-performance industrial solution designed for maximum efficiency and extreme durability. Engineered to ISO 9001:2015 standards.`}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link
                                                href="/contact"
                                                onClick={() => setSelectedProduct(null)}
                                                className="flex-grow inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-base font-black px-8 py-5 rounded-2xl transition-all shadow-2xl shadow-cyan-600/20 hover:scale-[1.02] active:scale-95"
                                            >
                                                Request Quote
                                                <ChevronRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};
