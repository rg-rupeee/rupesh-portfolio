import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navbar, Footer } from '@/components/modules/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rupesh Garhwal Portfolio',
  description: 'Portfolio Website - Rupesh Garhwal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
