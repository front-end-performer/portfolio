import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/LanguageProvider";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

/** The initial theme is set on <html> by an inline script in index.html. */
function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const { ui } = useTranslation();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0b1120" : "#f6f8fc");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={ui.themeToggle[nextTheme]}
      title={ui.themeToggle[nextTheme]}
    >
      {theme === "dark" ? (
        <SunIcon className="theme-toggle__icon" />
      ) : (
        <MoonIcon className="theme-toggle__icon" />
      )}
    </button>
  );
}
