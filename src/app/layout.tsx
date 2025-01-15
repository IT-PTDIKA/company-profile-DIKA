import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./globals.css";
import "./fonts.css"

import { Geist, Geist_Mono } from "next/font/google";

import Footer from '@/components/Footer';
import { LayoutProvider } from './LayoutProvider';
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "PT.DIKA",
  description: "PT.DIKA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Footer>
          <LayoutProvider>
          {children}
          </LayoutProvider>
        </Footer>
      </body>
    </html>
  );
}
