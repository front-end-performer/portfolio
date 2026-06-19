import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";

interface AchievementsProps {
  achievements: string[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const { ui } = useTranslation();

  return (
    <Section id="achievements" title={ui.sections.achievements}>
      <ul className="achievements">
        {achievements.map((achievement) => (
          <li key={achievement} className="achievements__item">
            {achievement}
          </li>
        ))}
      </ul>
    </Section>
  );
}
