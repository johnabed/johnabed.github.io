import React from 'react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "John Abed",
  description: "John Abed",
  applicationName: "John Abed",
  metadataBase: new URL('https://johnabed.github.io'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon-196x196.png', sizes: '196x196', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-196x196.png', sizes: '196x196', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gradient-to-br from-[#00ffcd] to-[#faff70] text-gray-900 dark:text-white`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
} 