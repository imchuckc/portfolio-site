import { Geist } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
        <link rel="preconnect" href="https://hm.baidu.com" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* 百度统计 */}
        <script dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?861e8cbf49ea01e44d8edc43cc12bbbe";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
        }} />
      </head>
      <body className={`${geist.className} antialiased font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
