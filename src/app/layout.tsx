import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollToTop from "@/components/ScrollToTop";

import { Inter, Outfit, Montserrat, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: 'swap' });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL("https://lcdas.in"),
  title: {
    default: "Ventilair India — Industrial Fans, Blowers & Ventilation Systems",
    template: "%s | Ventilair India",
  },
  description:
    "Ventilair India Pvt. Ltd. — Leading manufacturer & exporter of industrial fans, blowers, dust collectors, and ventilation systems since 1988. ISO 9001:2015 certified.",
  keywords: [
    "industrial fans",
    "industrial blowers",
    "ventilation systems",
    "centrifugal blower",
    "axial flow fan",
    "dust collector",
    "bag filter",
    "industrial ventilation India",
    "Ventilair India",
  ],
  authors: [{ name: "Ventilair India Pvt. Ltd." }],
  creator: "Ventilair India Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lcdas.in",
    siteName: "Ventilair India",
    title: "Ventilair India — Industrial Fans, Blowers & Ventilation Systems",
    description:
      "Leading manufacturer & exporter of industrial fans, blowers, dust collectors, and ventilation systems since 1988. ISO 9001:2015 certified.",
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'Ventilair India Logo' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventilair India — Industrial Fans, Blowers & Ventilation Systems",
    description:
      "Leading manufacturer & exporter of industrial fans, blowers, dust collectors, and ventilation systems since 1988.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${montserrat.variable} ${poppins.variable}`}>
      <body className="overflow-x-hidden antialiased">
        <ThemeProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
            <Navbar />
            {children}
            <WhatsAppButton />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>

        {/* JSON-LD Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ventilair India Pvt. Ltd.",
              url: "https://lcdas.in",
              logo: "https://lcdas.in/logo.png",
              foundingDate: "1988",
              description:
                "Leading manufacturer and exporter of industrial fans, blowers, dust collectors, and ventilation systems.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 11/7, Mile Stone, Mathura Road, Opp. Flyover Pillar No. 58",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121003",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9911808822",
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
