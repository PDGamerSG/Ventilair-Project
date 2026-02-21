import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ventilair India Pvt. Ltd.',
        short_name: 'Ventilair',
        description: 'Leading manufacturer and exporter of industrial fans, blowers, dust collectors, and ventilation systems since 1988.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f1f5f9',
        theme_color: '#06b6d4',
        icons: [
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
