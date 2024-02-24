import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export type ProjectLinkProps = {
  github: string;
  demo: string;
  className?: string;
};

const ProjectLink = ({ className, github, demo }: ProjectLinkProps) => {
  return (
    <div className={twMerge('flex w-full gap-2 ', className)}>
      <div
        className="flex gap-10 text-white px-5 
        transition-all duration-500 delay-200 rounded-full shadow-sm"
      >
        <Link
          href={github}
          target="_blank"
          className="flex justify-center items-center gap-2 hover:scale-110 transition-all duration-300"
          aria-label="Project Github"
        >
          <FaGithub />
          <span className="text-base">Github</span>
        </Link>
        <Link
          href={demo}
          target="_blank"
          className="flex justify-center items-center gap-2 hover:scale-110 transition-all duration-300"
          aria-label="Project Demo Site"
        >
          <FaExternalLinkAlt />
          <span className="text-base">Demo</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectLink;
