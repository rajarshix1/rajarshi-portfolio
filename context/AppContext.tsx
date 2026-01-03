"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

const AppContext = createContext<any>(null);

export const useAppContext = (): any => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(true); // Default to dark theme to avoid mismatch
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
        setDarkTheme(storedTheme === "light" ? false : true);
    }
  }, []);

  const setTheme = (value: boolean) => {
    setDarkTheme(value);
    localStorage.setItem("theme", value ? "dark" : "light");
  };

  useEffect(() => {
    // This effect will run on server with default, and on client with updated theme
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
    <AppContext.Provider value={{ darkTheme, setDarkTheme, setTheme, showNav, setShowNav, activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};


// export const useApp = ()=> createContext(AppContext)