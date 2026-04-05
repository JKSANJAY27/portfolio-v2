import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay J K — AI Engineer & Software Engineer",
  description: "AI Engineer & Software Engineer at VIT (CGPA 9.45) — building production LLM systems, Graph RAG pipelines, and full-stack applications. GATE CSE 2026 AIR 1603. 2 Patents Published. UKIERI 2025 Scholar. Judges' Choice — Sankalp 2026.",
  keywords: [
    "Sanjay J K", "AI Engineer", "Software Engineer", "Full Stack Developer",
    "LLM Systems", "Graph RAG", "Production AI", "VIT Vellore",
    "GATE CSE 2026", "React", "Next.js", "Python", "PyTorch", "Neo4j",
    "RAG System", "SwarmIQ", "Portfolio"
  ],
  authors: [{ name: "Sanjay J K" }],
  openGraph: {
    title: "Sanjay J K — AI Engineer & Software Engineer",
    description: "Building production AI systems, LLM pipelines & full-stack apps. GATE CSE 2026 AIR 1603 · 2 Patents Published · UKIERI Scholar · Judges' Choice Sankalp 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F0F0F0] text-[#121212]">
        {children}
      </body>
    </html>
  );
}
