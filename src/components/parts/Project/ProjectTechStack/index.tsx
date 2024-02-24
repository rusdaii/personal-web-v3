export type ProjectTechStackProps = {
  name: string;
};

const ProjectTechStack = ({ name }: ProjectTechStackProps) => {
  return (
    <span className="border border-gray-300 px-3 py-1 rounded-xl">
      <h3 className="text-white">{name}</h3>
    </span>
  );
};

export default ProjectTechStack;
