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

const siteTitle =
  process.env.NEXT_PUBLIC_SITE_TITLE ??
  "Phản ánh của người dân địa bàn Hải Phòng về công tác phát...";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Theo tài khoản Facebook cá nhân Bao Nguyen The chia sẻ: “CÁN BỘ PHÁT TIỀN 100.000 LỄ 2 THÁNG 9. CÁN BỘ PHƯỜNG LÀM KHÓ NGƯỜI DÂN. KHÔNG THỂ CHẤP NHẬN ĐƯỢC CÁN BỘ...”";
const ogUrl = process.env.NEXT_PUBLIC_OG_URL ?? "/";
const ogImageUrl =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL ??
  "https://cdn.discordapp.com/attachments/887124159694524437/1416013458897375333/IMG_3873.jpg?ex=68c54ccc&is=68c3fb4c&hm=5e7c0ee9034a7f595c201d9e9dc33cc882d9bce8a680ac293f3e12b1f77989b8&";
const ogSiteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "Shopee Việt Nam";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: ogUrl,
    siteName: ogSiteName,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
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
