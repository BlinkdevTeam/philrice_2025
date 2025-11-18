import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhilRice | 40 Years of Rice Innovations & 37th Ugnay Palay",
  description:
    "Celebrating 40 years of DA-PhilRice’s rice innovations—sowing progress and harvesting prosperity for Filipino farmers. Join the 37th Ugnay Palay National Rice R4D Conference as we advance science-driven, people-centered rice research for development.",

  openGraph: {
    title: "PhilRice | 40 Years of Rice Innovations & 37th Ugnay Palay",
    description:
      "Commemorating four decades of DA-PhilRice’s transformative rice research and development. Discover the milestones, innovations, and strategies shaping resilient, competitive, and prosperous rice-farming communities at the 37th Ugnay Palay National Rice R4D Conference.",
    url: "https://philrice-2025.vercel.app/",
    siteName: "PhilRice",
    images: [
      {
        url: "https://philrice-2025.vercel.app/SEO_Cover.jpg",
        width: 1200,
        height: 630,
        alt: "PhilRice 40 Years of Rice Innovations & 37th Ugnay Palay Conference",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PhilRice | 40 Years of Rice Innovations & 37th Ugnay Palay",
    description:
      "A celebration of DA-PhilRice’s 40-year journey of science-driven rice development and the 37th Ugnay Palay National Rice R4D Conference.",
    images: ["https://philrice-2025.vercel.app/SEO_Cover.jpg"],
    creator: "@PhilRice",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
