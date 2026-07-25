import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahita Fertility | Advanced IVF & Fertility Care",
  description:
    "Discover advanced fertility care, personalized treatment plans, and compassionate support at Mahita Fertility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
