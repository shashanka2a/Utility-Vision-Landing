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
    default: "UtilityVision | Field Intelligence Software",
    template: "%s | UtilityVision",
  },
  description:
    "Field intelligence for solar asset operators, right-of-way contractors, and utility stakeholders. Log from the field, manage from the office, and share progress with clients in real time.",
  keywords: [
    "UtilityVision",
    "field intelligence software",
    "solar vegetation management",
    "right-of-way",
    "field app",
    "utility operations",
    "client portal",
  ],
  authors: [{ name: "Wick'd Environmental Technologies, Inc." }],
  openGraph: {
    title: "UtilityVision | Field Intelligence Software",
    description:
      "One platform for crews, ops, and clients. Track acres, sites, and compliance from the field to the office in real time.",
    url: "https://utilityvision.io",
    siteName: "UtilityVision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "UtilityVision Field Intelligence Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UtilityVision | Field Intelligence Software",
    description:
      "One platform for crews, ops, and clients managing solar and utility field operations.",
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
