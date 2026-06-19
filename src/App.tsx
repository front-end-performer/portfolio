import { useTranslation } from "./i18n/LanguageProvider";
import { Achievements } from "./components/Achievements";
import { CareerProfile } from "./components/CareerProfile";
import { Contact } from "./components/Contact";
import { EducationLanguages } from "./components/EducationLanguages";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { HireMe } from "./components/HireMe";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { SelectedWork } from "./components/SelectedWork";
import { Skills } from "./components/Skills";

export default function App() {
  const { profile, ui } = useTranslation();
  const { identity, contacts } = profile;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {ui.skipToContent}
      </a>

      <div className="site-toolbar">
        <div className="container site-toolbar__inner">
          <LanguageSwitcher />
        </div>
      </div>

      <Hero identity={identity} contacts={contacts} />

      <main id="main-content">
        <HireMe data={profile.hireMe} />
        <CareerProfile paragraphs={profile.careerProfile} />
        <Achievements achievements={profile.achievements} />
        <Skills groups={profile.skillGroups} />
        <Experience experience={profile.experience} />
        <SelectedWork projects={profile.selectedWork} />
        <EducationLanguages
          education={profile.education}
          languages={profile.languages}
        />
        <Contact contacts={contacts} />
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {currentYear} {identity.name} · {identity.role}
          </p>
        </div>
      </footer>
    </>
  );
}
