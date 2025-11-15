import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "FreeOps Tool",
  description: "Open-source DevOps tools by the FreeOps community"
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-base text-text-primary antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{props.children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

