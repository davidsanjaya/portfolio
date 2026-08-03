import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Sanjaya | Senior Frontend Software Engineer",
  description:
    "Senior Frontend Software Engineer with 11+ years of experience building scalable enterprise applications using Blazor, React, Next.js, TypeScript, and C#.",
  keywords: [
    "David Sanjaya",
    "Frontend Engineer",
    "Senior Frontend Engineer",
    "Frontend Developer",
    "Blazor",
    "React",
    "Next.js",
    "TypeScript",
    "C#",
    "Portfolio",
  ],
  authors: [
    {
      name: "David Sanjaya",
    },
  ],
  creator: "David Sanjaya",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#2563eb",
  metadataBase: new URL("https://davidsanjaya.vercel.app"),
  openGraph: {
    title: "David Sanjaya",
    description: "Senior Frontend Software Engineer",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
