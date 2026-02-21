import type { Metadata } from 'next';
import Image from 'next/image';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Ventilair India\'s legacy of over 35 years in industrial ventilation engineering. ISO 9001:2015 certified manufacturer of quality air handling solutions.',
    openGraph: {
        title: 'About Ventilair India — Engineering Fresh Air Since 1988',
        description: 'Discover our legacy and meet the leadership team driving innovation in industrial ventilation and pollution control systems.',
        url: 'https://lcdas.in/about',
    }
};

const team = [
    {
        name: "R.K. Saxena",
        role: "Director & CEO",
        image: "/people/RK Saxena director and ceo.jpg",
        bio: "Visionary leader with over 35 years of expertise in industrial ventilation, driving innovation since 1988."
    },
    {
        name: "L.C. Das",
        role: "Senior Engineer",
        image: "/people/lcdas_main_engineer.png",
        bio: "Technical head overseeing complex system designs and ensuring engineering excellence across all projects."
    },
    {
        name: "Alok Kandhari",
        role: "Account Manager",
        image: "/people/Alok kandhari account manager.jpg",
        bio: "Dedicated to client success and building long-term partnerships with our 500+ satisfied industrial clients."
    }
];

export default function AboutPage() {
    return (
        <AboutPageClient team={team} />
    );
}
