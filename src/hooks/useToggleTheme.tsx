import { useState } from "react";
const useToggleTheme = () => {
  const selectedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(selectedTheme ?? "light");
  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === "light" ? "dark" : "light";
      // window.location.reload();  
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };
  const isDarkTheme = theme === "dark";
  return { isDarkTheme, theme, toggleTheme };
};

export default useToggleTheme;
