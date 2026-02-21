import type { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';

export const metadata: Metadata = {
    title: 'Products — Industrial Fans, Blowers & Ventilation Systems',
    description:
        'Explore our complete range of industrial fans, centrifugal blowers, axial flow fans, bag filters, dust collectors, scrubbers, paint booths, and ventilation components. ISO 9001:2015 certified quality.',
    openGraph: {
        title: 'Products — Ventilair India',
        description:
            'Browse our complete catalog of industrial fans, blowers, dust collectors, and ventilation systems. Engineered for peak performance since 1988.',
        url: 'https://lcdas.in/products',
    },
};

export default function ProductsPage() {
    return <ProductsPageClient />;
}
