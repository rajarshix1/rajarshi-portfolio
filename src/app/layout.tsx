import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { AppProvider } from "../../context/AppContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "../../components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

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
      <body className={`${poppins.className} relative`}>
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
