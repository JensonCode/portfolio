import type { Metadata } from "next";

import "./globals.css";
import { FontStyles } from "@/fonts/fira-mono";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jenson Li | Web Developer | Software Developer",
  description: "Generated by create next app",
};

import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/three/scene"), { ssr: false });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative h-full", FontStyles)}>
        <Scene />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
