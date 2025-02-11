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
        {/* 百度统计 */}
        <Script 
          id="baidu-analytics" 
          strategy="afterInteractive"
          onLoad={() => {
            console.log('百度统计脚本加载成功');
          }}
          onError={(e) => {
            console.error('百度统计脚本加载失败:', e);
          }}
        >
          {`
            try {
              console.log('开始加载百度统计...');
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?861e8cbf49ea01e44d8edc43cc12bbbe";
                hm.defer = true;
                hm.onerror = function(error) {
                  console.error('百度统计脚本加载出错:', error);
                };
                hm.onload = function() {
                  console.log('百度统计脚本执行成功');
                };
                document.head.appendChild(hm);
                console.log('百度统计脚本已添加到页面');
              })();
            } catch (error) {
              console.error('百度统计初始化失败:', error);
            }
          `}
        </Script>
      </head>
      <body className={`${geist.className} antialiased font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
