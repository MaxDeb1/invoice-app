"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: boolean;
  toggleDarkMode?: () => void;
};

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const localTheme = localStorage.getItem("darkMode");
    if (localTheme) {
      setDarkMode(JSON.parse(localTheme));
    } else {
      setDarkMode(isDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const themeStatus = darkMode ? "false" : "true";
    localStorage.setItem("darkMode", themeStatus);
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    query.addEventListener("change", (event) => {
      setDarkMode(event.matches);
      localStorage.removeItem("darkMode");
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`theme theme--${darkMode ? "dark" : "light"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
