"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Create context with a default fallback
const AppContext = createContext<any>(null);

// Hook to use context
export const useAppContext = (): any => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (!darkTheme) {
      root.style.setProperty("--background", "#edfcff");
      root.style.setProperty("--foreground", "#020914");
    } else {
      root.style.setProperty("--background", "#020914");
      root.style.setProperty("--foreground", "#edfcff");
    }
  }, [darkTheme]);

  return (
    <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};
