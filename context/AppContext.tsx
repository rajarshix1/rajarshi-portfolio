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
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkTheme(storedTheme === "light" ? false : true); // default to dark
  }, []);

  const setTheme = (value: boolean) => {
    setDarkTheme(value);
    localStorage.setItem("theme", value ? "dark" : "light");
  };

  useEffect(() => {
    if (darkTheme === undefined) return;

    const root = document.documentElement;
    if (!darkTheme) {
      root.style.setProperty("--background", "#edfcff");
      root.style.setProperty("--foreground", "#020914");
    } else {
      root.style.setProperty("--background", "#020914");
      root.style.setProperty("--foreground", "#edfcff");
    }
  }, [darkTheme]);

  if (darkTheme === undefined) {
    return (
      <div
        style={{
          background: "#020914",
          color: "#edfcff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ darkTheme, setDarkTheme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
