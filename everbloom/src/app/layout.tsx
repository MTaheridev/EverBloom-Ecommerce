import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverBloom | Indoor Plants for Modern Living",
  description: "Transform your apartment into a serene oasis with EverBloom. Explore our collection today and discover how easy it is to bring the beauty of nature indoors!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
