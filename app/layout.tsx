import type { Metadata } from "next";
import { Abyssinica_SIL } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const abyssinica = Abyssinica_SIL({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uziel Barrita",
  description: "Portafolio for Pedro Uziel Barrita Licea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container ${abyssinica.className}`}>
        {children}
        <Header />
        <Footer />
      </body>
    </html>
  );
}
