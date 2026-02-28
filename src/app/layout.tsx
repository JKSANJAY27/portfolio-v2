import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay J K — Full Stack Developer & AI Researcher",
  description: "CS Student at VIT (CGPA 9.45) — Full Stack Developer, AI/ML Researcher, UKIERI 2025 Scholar. Passionate about building scalable software and impactful AI systems.",
  keywords: ["Sanjay J K", "Full Stack Developer", "AI Researcher", "VIT", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Sanjay J K" }],
  openGraph: {
    title: "Sanjay J K — Full Stack Developer & AI Researcher",
    description: "CS Student at VIT building scalable apps and multimodal AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}
