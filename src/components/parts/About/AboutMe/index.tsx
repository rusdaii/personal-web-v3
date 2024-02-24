'use client';
import { motion } from 'framer-motion';

const animation = {
  hide: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="col-span-9">
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
          className="h-32"
        >
          <h1 className="uppercase font-semibold text-xl">Beyond Portfolio</h1>
          <h2 className="text-white text-3xl font-semibold ">
            Lets know more about me
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
