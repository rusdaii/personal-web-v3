import Image from 'next/image';

import ReadMore from '@/components/elements/ReadMore';
import ProjectLink from '@/components/parts/Project/ProjectLink';
import ProjectTechStack from '@/components/parts/Project/ProjectTechStack';
import useViewAll from '@/hooks/viewAllHook';

type ProjectCardProps = {
  name: string;
  image: string;
  description: string;
  github: string;
  demo: string;
  skills: Skill[];
};

type Skill = {
  id: string;
  name: string;
};

const ProjectCard = ({
  name,
  image,
  description,
  github,
  demo,
  skills,
}: ProjectCardProps) => {
  const { showAll, toggleShowAll } = useViewAll();

  return (
    <div className="group transition-all duration-500 w-full">
      <div
        className="project-card flex flex-col max-w-sm md:max-w-full rounded-3xl overflow-hidden 
        relative shadow-xl hover:shadow-2xl lg:w-full"
      >
        <div
          className="text-white w-full group-hover:scale-105 
          transition-all duration-500 delay-200 p-2"
        >
          <Image
            src={image}
            alt="Project"
            width={512}
            height={512}
            className="rounded-3xl w-full h-[300px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-start items-center p-7">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="font-semibold text-white">{name}</h1>
            <ReadMore>{description}</ReadMore>
          </div>

          <div
            onClick={toggleShowAll}
            className="flex flex-wrap items-center justify-start gap-3 
            group-hover:pb-6 transition-all duration-500 delay-200 cursor-pointer"
          >
            {skills.slice(0, showAll ? skills.length : 4).map((skill) => (
              <ProjectTechStack key={skill.id} name={skill.name} />
            ))}
          </div>

          <ProjectLink
            className={`items-center justify-evenly transition-all duration-500 delay-200 
            group-hover:bottom-3 absolute -bottom-full`}
            github={github}
            demo={demo}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
