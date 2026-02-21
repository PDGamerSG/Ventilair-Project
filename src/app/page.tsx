import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TrustedBySection from '@/components/TrustedBySection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TrustedBySection />
      <FeaturesSection />

      {/* Product Showcase Section (Premium Bento Grid) */}
      <div className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/products" className="group">
              <ProductCard
                title="High Pressure Fan"
                description="Heavy-duty centrifugal fans designed for high-pressure industrial applications and combustion air supply."
                image="/products/HIGH PRESSURE FAN.jpg"
                delay={0.1}
                badge="Best Seller"
              />
            </Link>
            <Link href="/products" className="group">
              <ProductCard
                title="Industrial Blower"
                description="Robust blowers engineered for material handling, dust collection, and continuous industrial ventilation."
                image="/products/BLOWER.jpg"
                delay={0.2}
                badge="Heavy Duty"
              />
            </Link>
            <Link href="/products" className="group">
              <ProductCard
                title="Axial Flow Fan"
                description="High-volume axial fans perfect for general shop floor ventilation and cooling large industrial spaces."
                image="/products/axial flow fan.png"
                delay={0.3}
                badge="Energy Efficient"
              />
            </Link>
          </div>
        </div>
      </div>

      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
