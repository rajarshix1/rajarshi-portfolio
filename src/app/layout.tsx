import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "../../context/AppContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
    <html lang="en">
      <body>
      <AppProvider>
        <AppRouterCacheProvider>
        {children}
        </AppRouterCacheProvider>
      </AppProvider>
      </body>
    </html>
  );
}
