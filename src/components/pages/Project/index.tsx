'use client';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

import Container from '@/components/elements/Container';
import ProjectCard from '@/components/parts/Project/ProjectCard';
import useViewAll from '@/hooks/viewAllHook';
import { Project } from '@/repositories/projects/type';

type ProjectsProps = {
  projects: Project[];
};

const animation = {
  hide: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Projects = ({ projects }: ProjectsProps) => {
  const { showAll, toggleShowAll } = useViewAll();

  return (
    <div
      className={`${
        showAll
          ? 'flex flex-col'
          : 'md:grid md:place-content-center md:fixed md:inset-0'
      } bg-gradient-to-t from-secondary/15 to-primary/10`}
    >
      <Container className="flex justify-center items-center flex-col gap-10 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-items-center">
          <div className="max-w-sm lg:max-w-full">
            <motion.h1
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold uppercase"
            >
              My Projects
            </motion.h1>

            <motion.p
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.2 }}
              className="text-white/60 my-5"
            >
              Compilation of case studies that evoke my sense of pride. For some
              applications I developed with my team or I developed them myself.
            </motion.p>

            <motion.div
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.3 }}
            >
              {!showAll && (
                <Button
                  pill
                  gradientDuoTone="purpleToPink"
                  outline
                  onClick={toggleShowAll}
                  className="button-outline text-md font-semibold text-white "
                >
                  View All Projects
                </Button>
              )}
            </motion.div>
          </div>

          {projects
            .slice(0, showAll ? projects.length : 1)
            .map((project, index) => (
              <motion.div
                initial={
                  index % 2 === 0 ? { x: 50, opacity: 0 } : animation.hide
                }
                whileInView={animation.show}
                transition={index % 2 === 0 ? { delay: 0.4 } : { delay: 0.2 }}
                key={project.id}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
        </div>

        {showAll && (
          <button
            onClick={toggleShowAll}
            className="text-white rounded-full p-3 bg-primary hover:bg-primary/30 transition-colors duration-300"
          >
            <FaChevronUp className="w-4 h-4" />
          </button>
        )}
      </Container>
    </div>
  );
};

export default Projects;
