import React, { Suspense } from 'react';
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationWrapper from '@/components/NavigationWrapper';

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "John Abed",
  description: "John Abed",
  applicationName: "John Abed",
  metadataBase: new URL('http://johnabed.com'),
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
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gradient-to-br from-[#00ffcd] to-[#faff70] text-gray-900 dark:text-white min-h-screen`}>
        <Suspense fallback={
          <div className="fixed top-0 w-full h-16 bg-white/20 backdrop-blur-[8px] z-50" />
        }>
          <NavigationWrapper />
        </Suspense>
        <main className="relative top-16">
          {children}
        </main>
      </body>
    </html>
  );
} 