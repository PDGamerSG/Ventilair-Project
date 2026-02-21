import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Ventilair India for all your industrial ventilation requirements. Reach us via phone, email, WhatsApp, or visit our headquarters in Faridabad, Haryana.',
    openGraph: {
        title: 'Contact Ventilair India — Industrial Ventilation Solutions',
        description: 'Connect with our engineering experts for customized air-handling systems. Call +91-9911808822 or visit our Faridabad headquarters.',
        url: 'https://lcdas.in/contact',
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
