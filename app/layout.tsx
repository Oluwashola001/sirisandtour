import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

// Swapped Playfair for Cormorant Garamond (The "Beautifier")
// We keep the variable name '--font-playfair' so your existing code (font-playfair) works automatically.
const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-playfair", 
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siri Sand Tours | Egypt",
  description: "Experience the divine S2S journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}