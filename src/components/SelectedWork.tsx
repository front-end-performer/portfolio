import type { Project } from "../types";
import { useTranslation } from "../i18n/LanguageProvider";
import { Section } from "./Section";
import { TagList } from "./Tag";

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const { ui } = useTranslation();

  return (
    <Section id="selected-work" title={ui.sections.selectedWork}>
      <div className="cards">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <TagList
              items={project.tags}
              label={`${project.title} ${ui.tags}`}
            />
            {project.link ? (
              <a
                className="card__link"
                href={project.link.href}
                aria-label={project.link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link.display}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
