import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../css/index.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="custom" lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <div className="flex h-screen flex-col justify-between font-sans">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
