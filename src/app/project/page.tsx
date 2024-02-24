import Projects from '@/components/pages/Project';
import generateMetadata from '@/lib/metadata';
import { getProjects } from '@/repositories/projects';

export const metadata = generateMetadata(
  { title: 'Project' },
  { withSuffix: true }
);

const ProjectPage = async () => {
  const { data: projectsData } = await getProjects();

  return <Projects projects={projectsData} />;
};

export default ProjectPage;
