import type { Profile } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { ContactIconLinks } from "./ContactIconLinks";
import { Section } from "./Section";

interface ContactProps {
  contacts: Profile["contacts"];
}

export function Contact({ contacts }: ContactProps) {
  const { ui } = useTranslation();

  return (
    <Section
      id="contact"
      title={ui.sections.contact}
      intro={ui.contactIntro}
    >
      <ContactIconLinks contacts={contacts} ariaLabel={ui.contactLinks} />
    </Section>
  );
}
