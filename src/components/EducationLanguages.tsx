import type { Education, Language } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";

interface EducationLanguagesProps {
  education: Education[];
  languages: Language[];
}

export function EducationLanguages({
  education,
  languages,
}: EducationLanguagesProps) {
  const { ui } = useTranslation();

  return (
    <Section id="education-languages" title={ui.sections.educationLanguages}>
      <div className="two-col">
        <div className="two-col__block">
          <h3 className="subsection__title">{ui.education}</h3>
          <ul className="education">
            {education.map((item) => (
              <li key={item.institution} className="education__item">
                <p className="education__program">{item.program}</p>
                <p className="education__institution">
                  {item.institution}, {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="two-col__block">
          <h3 className="subsection__title">{ui.languages}</h3>
          <ul className="languages">
            {languages.map((language) => (
              <li key={language.name} className="languages__item">
                <span className="languages__name">{language.name}</span>
                <span className="languages__level">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
