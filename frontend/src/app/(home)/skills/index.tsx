import WavyText from "@components/WavyText";
import React from "react";
import TechStackRenderer from "./(components)/TechStackRenderer";

type Props = {
  skills: {
    [key: string]: Skill[];
  };
};

const SkillsSection: React.FC<Props> = ({ skills }) => {
  const entries = Object.entries(skills);

  const skillsType = entries.map((e) => e[0]);
  const skillsValue = entries.map((e) =>
    e[1].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
  );

  return (
    <div id="skills" className="sm:space-y-4 min-h-screen">
      <div className="parallax-text">
        <h1>Skills</h1>

        <WavyText as="h2" text="Skills" />
      </div>

      <div className="md:!mt-20 container">
        <div className="grid gap-8">
          {skillsType.map((type, i) => (
            <fieldset
              key={type}
              className="border-2 rounded-md pd flex flex-col items-center"
            >
              <legend className="px-2 text-center font-semibold">
                <WavyText as="h5" text={type.split(".")[1]} />
              </legend>

              <TechStackRenderer techStack={skillsValue[i]} />
            </fieldset>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
