import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashford & Vale Attorneys at Law | Philadelphia Legal Counsel",
  description:
    "Premium legal counsel for individuals, families, and businesses in Philadelphia. Strategic advocacy, clear guidance, and confidential consultations.",
  applicationName: "Ashford & Vale Attorneys at Law",
  authors: [{ name: "Ashford & Vale Attorneys at Law" }],
  keywords: [
    "Philadelphia attorney",
    "Philadelphia law firm",
    "family law",
    "criminal defense",
    "personal injury",
    "immigration law",
    "business disputes",
  ],
  openGraph: {
    title: "Ashford & Vale Attorneys at Law | Philadelphia Legal Counsel",
    description:
      "Premium legal counsel for individuals, families, and businesses in Philadelphia. Strategic advocacy, clear guidance, and confidential consultations.",
    type: "website",
    locale: "en_US",
    siteName: "Ashford & Vale Attorneys at Law",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
