export interface ContactLink {
  label: string;
  /** Visible, descriptive text for the link. */
  display: string;
  href: string;
  /** Short helper used for aria-labels and CTAs. */
  ariaLabel: string;
}

export interface Identity {
  name: string;
  role: string;
  location: string;
  yearsOfExperience: string;
  headline: string;
}

export interface HireMe {
  location: string;
  preferredRole: string;
  workSetup: string;
  focusAreas: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  stack: string[];
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: ContactLink;
}

export interface Education {
  institution: string;
  location: string;
  program: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Reference {
  name: string;
  role: string;
  note: string;
}

export interface Profile {
  identity: Identity;
  contacts: {
    email: ContactLink;
    github: ContactLink;
    linkedin: ContactLink;
    storybook: ContactLink;
  };
  hireMe: HireMe;
  careerProfile: string[];
  achievements: string[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  selectedWork: Project[];
  education: Education[];
  languages: Language[];
  references?: Reference[];
}
