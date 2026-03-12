import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/app/components/ClientShell";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le. J Coaching | From Inconsistent to Jacked in 16 Weeks",
  description:
    "Online Fitness Coaching für vielbeschäftigte Männer. In 16 Wochen mit der 124 Method zu sichtbaren Ergebnissen. Jetzt kostenloses Erstgespräch buchen.",
  keywords: [
    "fitness coaching",
    "online coaching",
    "personal training",
    "124 method",
    "Jannik Hof",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.variable}>
        <ClientShell>
          {children}
        </ClientShell>
        <Footer />
      </body>
    </html>
  );
}
