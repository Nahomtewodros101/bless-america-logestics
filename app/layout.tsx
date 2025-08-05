"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Bless America LLC - Trust Delivered, Mile by Mile</title>

        <meta
          name="description"
          content="Professional logistics and transportation services. Dry van transport and last-mile delivery with over 15 years of experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
