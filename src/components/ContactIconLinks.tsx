import type { Profile } from "../types";
import { EmailIcon, GitHubIcon, LinkedInIcon, StorybookIcon } from "./icons";

const contactIcons = [
  { key: "email", Icon: EmailIcon, external: false },
  { key: "github", Icon: GitHubIcon, external: true },
  { key: "linkedin", Icon: LinkedInIcon, external: true },
  { key: "storybook", Icon: StorybookIcon, external: true },
] as const;

interface ContactIconLinksProps {
  contacts: Profile["contacts"];
  ariaLabel: string;
}

export function ContactIconLinks({ contacts, ariaLabel }: ContactIconLinksProps) {
  return (
    <ul className="contact-links" aria-label={ariaLabel}>
      {contactIcons.map(({ key, Icon, external }) => {
        const contact = contacts[key];
        const externalProps = external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <li key={key}>
            <a
              className="contact-links__link"
              href={contact.href}
              aria-label={contact.ariaLabel}
              {...externalProps}
            >
              <Icon className="contact-links__icon" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
