import type { Metadata } from "next";
import { DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Edere",
  description: "Safe dining for food allergies and dietary needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${dancingScript.variable} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
