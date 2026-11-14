import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utilityvision.io"),
  title: {
    default: "Utility Vision — Utility Field Intelligence Software",
    template: "%s | Utility Vision",
  },
  description:
    "Track every acre, site & compliance log in real time. Field App, Management Dashboard, and Client Portal for utility field teams.",
  keywords: [
    "utility field intelligence",
    "vegetation management",
    "field operations",
    "utility software",
    "crew management",
    "progress reporting",
  ],
  authors: [{ name: "Wick'd Environmental Technologies, Inc." }],
  openGraph: {
    title: "Utility Vision — Utility Field Intelligence Software",
    description:
      "Track every acre, site & compliance log in real time. Built for field operation teams managing utility assets.",
    url: "https://utilityvision.io",
    siteName: "Utility Vision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Utility Vision — Utility Field Intelligence Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Vision — Utility Field Intelligence Software",
    description:
      "Track every acre, site & compliance log in real time.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
