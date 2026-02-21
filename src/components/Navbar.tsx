'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const [bannerIndex, setBannerIndex] = useState(0);
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    const bannerMessages = [
        "🚀 Leading Industrial Ventilation Systems since 1988",
        "🌍 ISO 9001:2015 Certified & Exporting Globally",
        "📞 Expert Consultation: +91 9911808822",
        "✨ Custom Air Pollution Control Equipment Specialists"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [bannerMessages.length]);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-[#0f172a] text-white overflow-hidden relative"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-center items-center text-xs sm:text-sm font-medium tracking-wide h-10">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={bannerIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute"
                                >
                                    {bannerMessages[bannerIndex]}
                                </motion.span>
                            </AnimatePresence>

                            <button
                                onClick={() => setShowBanner(false)}
                                className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors z-10"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav
                className={`
                    w-full transition-all duration-300 border-b
                    ${scrolled
                        ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-[var(--border-color)] shadow-lg py-3'
                        : 'bg-transparent border-transparent py-5'
                    }
                `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center gap-3 group">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="relative flex items-center justify-center"
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="Ventilair Logo"
                                        width={40}
                                        height={40}
                                        className="h-10 w-auto object-contain"
                                        priority
                                    />
                                </motion.div>
                                <div className="flex flex-col">
                                    <span className="text-base sm:text-xl font-bold tracking-[0.1em] text-[var(--text-primary)] leading-none uppercase">
                                        Ventilair <span className="text-cyan-600">India</span>
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center justify-center space-x-12">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="relative group py-2"
                                    >
                                        <span className={`
                                            text-sm font-bold uppercase tracking-widest transition-colors duration-300
                                            ${isActive
                                                ? 'text-cyan-600'
                                                : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                                            }
                                        `}>
                                            {link.name}
                                        </span>

                                        <span className={`
                                            absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 origin-left transform transition-transform duration-300
                                            ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                        `} />
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 sm:p-2.5 rounded-full bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-600 transition-all border border-transparent hover:border-[var(--border-color)]"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
                            </button>

                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] overflow-hidden"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block p-4 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-500 transition-all border border-transparent hover:border-[var(--border-color)]"
                                    >
                                        <span className="font-bold text-sm tracking-widest uppercase">{link.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;
