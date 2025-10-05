import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yijun Tang - Homepage",
  description: "The Homepage of Yijun Tang's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
