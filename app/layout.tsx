import type { Metadata } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FreeOps Tool",
  description: "Open-source DevOps tools by the FreeOps community"
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-base text-text-primary">
        {props.children}
      </body>
    </html>
  );
}

