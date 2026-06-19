import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  /** Optional short text shown under the section heading. */
  intro?: string;
  children: ReactNode;
}

export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container">
        <div className="section__header">
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
