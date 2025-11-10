import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
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
          <Navbar />
          <div className="pb-16">{props.children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

