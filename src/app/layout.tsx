import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Samadara & Tharusha | Engagement Invitation",
  description: "Join us in celebrating the engagement of Samadara and Tharusha on 30 July 2026.",
  openGraph: {
    title: "Samadara & Tharusha | Engagement Invitation",
    description: "You're invited! Join us in celebrating the engagement of Samadara and Tharusha at Hotel Senuri Grand Castello.",
    url: "https://your-deployment-url.com", // Will need to be updated upon deployment
    siteName: "Samadara & Tharusha Engagement",
    images: [
      {
        url: "/opengraph-image.png", // Next.js automatically picks this up, but explicit declaration helps WhatsApp
        width: 1200,
        height: 630,
        alt: "Samadara & Tharusha Engagement Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samadara & Tharusha | Engagement Invitation",
    description: "Join us in celebrating our engagement on 30 July 2026.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text relative bg-transparent">
        {/* Base Background Color */}
        <div className="fixed inset-0 -z-20 bg-background pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}
