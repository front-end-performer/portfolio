import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";

interface CareerProfileProps {
  paragraphs: string[];
}

export function CareerProfile({ paragraphs }: CareerProfileProps) {
  const { ui } = useTranslation();

  return (
    <Section id="career-profile" title={ui.sections.careerProfile}>
      <div className="prose">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
