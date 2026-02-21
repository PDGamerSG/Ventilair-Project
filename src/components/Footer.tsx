'use client';

import React from 'react';
import { Mail, MapPin, Phone, Building2, Landmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]">

            {/* ── Main Grid ── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-5">
                            <Image src="/logo.png" alt="Ventilair Logo" width={32} height={32} className="h-8 w-auto object-contain" />
                            <span className="text-lg font-bold tracking-wider text-[var(--text-primary)]">
                                VENTILAIR <span className="text-cyan-500">INDIA</span>
                            </span>
                        </div>
                        <p className="text-[13px] leading-relaxed mb-6 max-w-xs">
                            Ventilair India Private Limited — engineering industrial ventilation solutions since 1988.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-5">Quick Links</h4>
                        <ul className="space-y-3 text-[13px]">
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'Products', path: '/products' },
                                { label: 'About Us', path: '/about' },
                                { label: 'Contact', path: '/contact' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.path} className="hover:text-cyan-500 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Address */}
                    <div>
                        <h4 className="text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-5">Contact</h4>
                        <ul className="space-y-4 text-[13px]">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                    No. 11/7, Mile Stone, Mathura Road,<br />
                                    Opp. Flyover Pillar No. 58,<br />
                                    Faridabad — 121003, Haryana, India
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                                <a href="tel:+917011966170" className="hover:text-cyan-500 transition-colors">
                                    +91 7011‑966170 <span className="opacity-50">(L.C. Das)</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                                <a href="mailto:ventilairsales@gmail.com" className="hover:text-cyan-500 transition-colors">
                                    ventilairsales@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company & Bank Details */}
                    <div>
                        <h4 className="text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-5">Company Info</h4>
                        <div className="space-y-4 text-[13px]">
                            <div className="flex items-start gap-2.5">
                                <Building2 className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                                <div className="space-y-1.5 leading-relaxed">
                                    <p><span className="text-[var(--text-primary)] font-medium">GST:</span> 06AAACV2847F1ZG</p>
                                    <p><span className="text-[var(--text-primary)] font-medium">CIN:</span> U74899DL1988PTC031784</p>
                                    <p><span className="text-[var(--text-primary)] font-medium">PAN:</span> AAACV2847F</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Landmark className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                                <div className="space-y-1.5 leading-relaxed">
                                    <p className="text-[var(--text-primary)] font-medium">State Bank of India</p>
                                    <p>Sarai Khawaja, Faridabad</p>
                                    <p><span className="text-[var(--text-primary)] font-medium">A/C:</span> 32999649111</p>
                                    <p><span className="text-[var(--text-primary)] font-medium">IFSC:</span> SBIN0003245</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-[var(--border-color)]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] opacity-60">
                    <p>&copy; {currentYear} Ventilair India Pvt. Ltd. All rights reserved.</p>
                    <p>CIN: U74899DL1988PTC031784</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
