'use client';
import { Card } from 'flowbite-react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import TechStackIcons from '@/components/elements/TechStackIcons';
import { Skill } from '@/repositories/skills/type';

const animation = {
  hide: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const TechStackCard = ({ skills }: { skills: Skill[] }) => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.7 }}
      className="col-span-9"
    >
      <Card className="h-full rounded-2xl bento-card">
        <h2 className="capitalize text-white">my tech stack</h2>
        <p className="text-gray-400">I use these tech stack for my projects.</p>

        <div className="flex justify-center items-center mt-6 gap-3">
          <Marquee>
            {skills.map((item) => (
              <TechStackIcons
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </Marquee>
        </div>
      </Card>
    </motion.div>
  );
};

export default TechStackCard;
