import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bet2k | Đánh bạc trực tuyến, không lộ danh tính, rút tiền ngay và luôn",
  description: "Bet2k là nơi hội tụ game bài, bắn cá, nổ hũ siêu hot 2025. Cược dễ, thắng lớn, rút tiền cực nhanh, thưởng đậm mỗi ngày cho mọi tay chơi thực thụ.",
  openGraph: {
    title: "Bet2k | Đánh bạc trực tuyến, không lộ danh tính, rút tiền ngay và luôn",
    description: "Bet2k là nơi hội tụ game bài, bắn cá, nổ hũ siêu hot 2025. Cược dễ, thắng lớn, rút tiền cực nhanh, thưởng đậm mỗi ngày cho mọi tay chơi thực thụ.",
    url: "/",
    siteName: "Bet2k",
    images: [
      {
        // url: "/meta-image.webp",
        url: "https://achulen.ru.com/wp-content/uploads/2025/04/bet88-choi-vui-thuong-lon-dang-ky-nhan-ngay-99k-1.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
