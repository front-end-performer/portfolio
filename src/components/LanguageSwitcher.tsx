import { locales } from "../i18n/types";
import { useTranslation } from "../i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, ui } = useTranslation();

  return (
    <nav className="lang-switcher" aria-label={ui.languageSwitcher}>
      <ul className="lang-switcher__list">
        {locales.map((code) => {
          const isActive = code === locale;

          return (
            <li key={code}>
              <button
                type="button"
                className={`lang-switcher__btn${isActive ? " lang-switcher__btn--active" : ""}`}
                onClick={() => setLocale(code)}
                aria-current={isActive ? "true" : undefined}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
