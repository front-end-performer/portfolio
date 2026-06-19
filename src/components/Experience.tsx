import type { ExperienceItem } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";
import { TagList } from "./Tag";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  const { ui } = useTranslation();

  return (
    <Section id="experience" title={ui.sections.experience}>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="timeline__item">
            <div className="timeline__head">
              <h3 className="timeline__role">
                {item.role}
                <span className="timeline__company"> · {item.company}</span>
              </h3>
              <p className="timeline__period">{item.period}</p>
            </div>

            <ul className="timeline__highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <TagList
              items={item.stack}
              label={`${item.company} ${ui.techStack}`}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
