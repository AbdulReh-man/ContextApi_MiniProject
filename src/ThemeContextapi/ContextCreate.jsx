import { useContext, createContext, useState, useEffect } from "react";

export const Contextcreate = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light");
  };

  const darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <Contextcreate.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </Contextcreate.Provider>
  );
};

export default function Theme() {
  return useContext(Contextcreate);
}
