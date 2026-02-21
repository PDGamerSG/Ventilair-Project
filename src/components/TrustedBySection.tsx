'use client';

import React from 'react';
import Image from 'next/image';

const clients = [
    { name: "Haldiram", logo: "/logos/Haldiram.svg" },
    { name: "Ranbaxy", logo: "/logos/Ranbaxy Laboratories.svg" },
    { name: "Ace", logo: "/logos/ace.png" },
    { name: "Aeroflex", logo: "/logos/aeroflex.png" },
    { name: "Andritz", logo: "/logos/andritz.jpeg" },
    { name: "CavinKare", logo: "/logos/cavincare.png" },
    { name: "Cosco", logo: "/logos/cosco.png" },
    { name: "Dabur", logo: "/logos/dabur.svg" },
    { name: "DS Group", logo: "/logos/ds group.png" },
    { name: "Escorts", logo: "/logos/escorts.jpg" },
    { name: "Gabriel", logo: "/logos/gabriel.png" },
    { name: "Hindustan Times", logo: "/logos/hindustan times.jpg" },
    { name: "Hira", logo: "/logos/hira.png" },
    { name: "Kajaria", logo: "/logos/kajaria.jpeg" },
    { name: "Macawber Beekay", logo: "/logos/macawber beekay.png" },
    { name: "Madhusudan", logo: "/logos/madhusudan.jpg" },
    { name: "Mankind", logo: "/logos/mankind.svg" },
    { name: "Metso", logo: "/logos/metso.png" },
    { name: "NTPC", logo: "/logos/ntpc.png" },
    { name: "Parle", logo: "/logos/parle.png" },
    { name: "Purolator", logo: "/logos/purolator.svg" },
    { name: "RHI Magnesita", logo: "/logos/rhi magnesita.png" },
    { name: "Subros", logo: "/logos/subros.jpg" },
    { name: "UFlex", logo: "/logos/uflex.png" }
];

const TrustedBySection: React.FC = () => {
    return (
        <div className="py-8 sm:py-12 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 text-center">
                <p className="text-[10px] sm:text-sm font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent pointer-events-none" />

                <div className="flex gap-8 sm:gap-16 animate-scroll whitespace-nowrap min-w-full items-center">
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="relative flex-shrink-0 w-28 sm:w-40 h-16 sm:h-24 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                sizes="(max-width: 640px) 112px, 160px"
                                className="object-contain p-2 mix-blend-multiply dark:mix-blend-screen"
                                title={client.name}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default TrustedBySection;
