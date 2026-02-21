import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tang! | Android 알림을 Mac 메뉴바로",
  description: "Tang! SMS Relay 소개 및 다운로드 페이지"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
