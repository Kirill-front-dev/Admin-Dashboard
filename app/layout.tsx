import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard with Next JS, Typescript and Shadcn/ui",
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
        <div className="fixed top-0 w-full z-50 h-16 bg-white dark:bg-slate-900 border-b">
          <Navbar />
        </div>

        <div className="flex pt-16 flex-1">
          <div className="hidden md:block w-[200px] shrink-0">
            <div className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
              <Sidebar />
            </div>
          </div>

          <main className="flex-1 w-full p-5">
            <div className="w-full max-w-[1140px] mx-auto">{children}</div>
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
