import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "王娜 - UI设计师作品集",
  description: "展示UI设计作品和项目的个人作品集网站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={`${geist.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
