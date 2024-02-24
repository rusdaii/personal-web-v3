'use client';
import { useRef } from 'react';

import { Card } from 'flowbite-react';
import { motion } from 'framer-motion';

const animation = {
  bounceStiffness: 100,
  bounceDamping: 10,
  hide: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const PersonaCard = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 1.1 }}
      className="col-span-9 "
    >
      <Card className="rounded-2xl bento-card">
        <h2 className="capitalize text-white">my persona</h2>
        <h3 className="text-gray-400">Know me as person</h3>
        <motion.div
          className="flex flex-col gap-2 overflow-hidden"
          ref={constraintsRef}
        >
          <div>
            <motion.span
              className="persona"
              drag
              dragConstraints={constraintsRef}
              dragTransition={animation}
            >
              Night Owl 🦉
            </motion.span>
          </div>
          <div className="flex justify-end">
            <motion.span
              className="persona"
              drag
              dragConstraints={constraintsRef}
              dragTransition={animation}
            >
              Loves Gaming Too 🎮
            </motion.span>
          </div>
          <div>
            <motion.span
              className="persona"
              drag
              dragConstraints={constraintsRef}
              dragTransition={animation}
            >
              Tech Enthusiast 🧑‍💻
            </motion.span>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default PersonaCard;
