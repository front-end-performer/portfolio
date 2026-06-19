import type { HireMe as HireMeData } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";
import { TagList } from "./Tag";

interface HireMeProps {
  data: HireMeData;
}

export function HireMe({ data }: HireMeProps) {
  const { ui } = useTranslation();

  return (
    <Section id="hire-me" title={ui.sections.hireMe}>
      <dl className="hireme">
        <div className="hireme__row">
          <dt>{ui.hireMe.location}</dt>
          <dd>{data.location}</dd>
        </div>
        <div className="hireme__row">
          <dt>{ui.hireMe.preferredRole}</dt>
          <dd>{data.preferredRole}</dd>
        </div>
        <div className="hireme__row">
          <dt>{ui.hireMe.workSetup}</dt>
          <dd>{data.workSetup}</dd>
        </div>
        <div className="hireme__row">
          <dt>{ui.hireMe.focusAreas}</dt>
          <dd>
            <TagList items={data.focusAreas} label={ui.hireMe.focusAreas} />
          </dd>
        </div>
      </dl>
    </Section>
  );
}
