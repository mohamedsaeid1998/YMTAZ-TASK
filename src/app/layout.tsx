"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../Styles/global.scss";
import Navbar from "@/Components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body className={inter.className}>
            <Navbar />
        <main className=" p-5 ">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}


