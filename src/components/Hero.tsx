import type { Identity, Profile } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { ContactIconLinks } from "./ContactIconLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

interface HeroProps {
  identity: Identity;
  contacts: Profile["contacts"];
}

export function Hero({ identity, contacts }: HeroProps) {
  const { ui } = useTranslation();

  return (
    <header className="hero">
      <div className="container">
        <div className="hero__top">
          <p className="hero__eyebrow">{identity.role}</p>
          <div className="hero__controls">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
        <h1 className="hero__name">{identity.name}</h1>
        <p className="hero__headline">{identity.headline}</p>

        <ul className="hero__meta" aria-label={ui.quickFacts}>
          <li>{identity.location}</li>
          <li>
            {identity.yearsOfExperience} {ui.experienceSuffix}
          </li>
        </ul>

        <ContactIconLinks contacts={contacts} ariaLabel={ui.contactLinks} />
      </div>
    </header>
  );
}
