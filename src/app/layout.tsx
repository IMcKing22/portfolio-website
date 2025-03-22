import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Personal portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
