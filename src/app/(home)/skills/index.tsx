import WavyText from "@components/WavyText";
import Image from "next/image";
import React from "react";

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
              <legend className="px-2 text-center text-2xl font-semibold">
                {type.split(".")[1]}
              </legend>

              <div className="flex items-center justify-center flex-wrap gap-8">
                {skillsValue[i].map(({ name, image }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <Image
                      className="w-14 h-14 bg-gray-100 border boder-border shadow-md rounded-lg p-2 duration-200 hover:scale-110"
                      width={100}
                      height={100}
                      src={image}
                      alt={name}
                    />

                    <span className="font-semibold text-center">{name}</span>
                  </div>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
