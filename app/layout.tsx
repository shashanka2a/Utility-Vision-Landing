import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utilityvision.io"),
  title: {
    default: "Utility Vision — Vegetation Management Software",
    template: "%s | Utility Vision",
  },
  description:
    "Field operations platform for utility and environmental crews. Clear visibility into every acre, right from the field.",
  keywords: [
    "vegetation management",
    "field operations",
    "utility software",
    "crew management",
    "progress reporting",
  ],
  authors: [{ name: "Utility Vision, Inc." }],
  openGraph: {
    title: "Utility Vision — Vegetation Management Software",
    description:
      "Clear visibility into every acre, right from the field. Operational clarity without the guesswork or paperwork.",
    url: "https://utilityvision.io",
    siteName: "Utility Vision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Utility Vision — Vegetation Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Vision — Vegetation Management Software",
    description:
      "Clear visibility into every acre, right from the field.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-background antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
