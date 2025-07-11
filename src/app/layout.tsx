import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "../../context/AppContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Rajarshi's Portfolio",
  description: "Rajarshi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">
      <AppProvider>
        <AppRouterCacheProvider>
                <Navbar />
          
        {children}
        </AppRouterCacheProvider>
      </AppProvider>
      </body>
    </html>
  );
}
