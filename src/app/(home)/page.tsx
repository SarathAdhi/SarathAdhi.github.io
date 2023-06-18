import AboutSection from "./about";
import ContactSection from "./contact";
import HeroSection from "./hero";
import SkillsSection from "./skills";
import { fetchWrapper } from "@lib/fetch";

type FetchResponse = {
  skills: {
    [key: string]: Skill[];
  };
  highlights: Project[];
  resume: string;
};

export default async function Home() {
  const { resume, skills, highlights } = await fetchWrapper<FetchResponse>(
    "/home"
  );

  return (
    <div className="flex flex-col flex-1 h-full gap-4">
      <HeroSection />
      <AboutSection {...{ highlights, resume }} />
      <SkillsSection {...{ skills }} />
      <ContactSection />
    </div>
  );
}
