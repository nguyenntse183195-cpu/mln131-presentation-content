import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dân Chủ và Sự Tiêu Vong | Tổng Quan Chính Trị Học",
  description:
    "Trình bày về sự tiến hóa của dân chủ và luận giải về sự 'tự tiêu vong' trong xã hội cộng sản chủ nghĩa theo quan điểm Mác - Lênin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-bg-base text-text-primary font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
