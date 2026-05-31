import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNavbar from "@/components/global-navbar";
import AppPreloader from "@/components/app-preloader";
import GlobalFooter from "@/components/global-footer";
import ResumeModal from "@/components/resume-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanmay Singh - Portfolio",
  description: "B.Tech Computer Science student specializing in Cloud Computing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppPreloader />
        <GlobalNavbar />
        <div className="flex-grow w-full flex flex-col">{children}</div>
        <GlobalFooter />
        <ResumeModal />
      </body>
    </html>
  );
}

