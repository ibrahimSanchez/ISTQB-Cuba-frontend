import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";


export const metadata: Metadata = {
  title: "ISTQB Cuba",
  description: "Sitio de certificación de rol de testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
