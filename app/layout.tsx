import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-white text-slate-900">
        {children}
        
      </body>
      
    </html>
  );
}
