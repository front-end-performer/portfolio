import type { SkillGroup } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";
import { TagList } from "./Tag";

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  const { ui } = useTranslation();

  return (
    <Section id="skills" title={ui.sections.skills}>
      <div className="skills">
        {groups.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <TagList
              items={group.skills}
              label={`${group.category} ${ui.skills}`}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
