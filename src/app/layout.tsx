"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../components/store/index";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
