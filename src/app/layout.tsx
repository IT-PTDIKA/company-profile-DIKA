import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./globals.css";
import "./fonts.css"

import Footer from '@/components/Footer';
import { LayoutProvider } from './LayoutProvider';
import type { Metadata } from "next";

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
      <body>
        <Footer>
          <LayoutProvider>
          {children}
          </LayoutProvider>
        </Footer>
      </body>
    </html>
  );
}
