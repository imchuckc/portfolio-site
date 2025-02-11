import { Geist } from "next/font/google";
import "./globals.css";
import BaiduAnalytics from './components/BaiduAnalytics';

const geist = Geist({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false, // 禁用自动字体回退调整
  variable: '--font-geist', // 定义CSS变量
});

export const metadata = {
  title: "王娜 - UI设计师作品集",
  description: "展示UI设计作品和项目的个人作品集网站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geist.className} antialiased font-sans`} suppressHydrationWarning>
        <BaiduAnalytics />
        {children}
      </body>
    </html>
  );
}
