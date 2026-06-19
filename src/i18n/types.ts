import type { Profile } from "../types";

export type Locale = "en" | "de" | "uk";

export const locales: Locale[] = ["en", "de", "uk"];

export interface UIStrings {
  skipToContent: string;
  quickFacts: string;
  contactLinks: string;
  experienceSuffix: string;
  languageSwitcher: string;
  localeNames: Record<Locale, string>;
  sections: {
    hireMe: string;
    careerProfile: string;
    achievements: string;
    skills: string;
    experience: string;
    selectedWork: string;
    educationLanguages: string;
    contact: string;
  };
  hireMe: {
    location: string;
    preferredRole: string;
    workSetup: string;
    focusAreas: string;
  };
  education: string;
  languages: string;
  contactIntro: string;
  techStack: string;
  skills: string;
  tags: string;
}

export interface LocaleContent {
  profile: Profile;
  ui: UIStrings;
}
