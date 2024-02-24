import React from 'react';

import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';

import { socialMedia } from '@/lib/constants/socialMedia';

import AvailableForWork from './AvailableForWork';
import { Link } from './Link';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeroCta = () => {
  return (
    <motion.div className="flex flex-wrap gap-5" initial="hide" animate="show">
      <motion.div variants={animation} transition={{ delay: 0.7 }}>
        <Link href={socialMedia.github} target="_blank">
          <Button
            pill
            gradientDuoTone="purpleToPink"
            outline
            className="button-outline hero-btn bg-transparent transition-transform duration-300 hover:scale-110"
          >
            Dig into my universe
          </Button>
        </Link>
      </motion.div>

      <motion.div
        variants={animation}
        transition={{ delay: 1 }}
        className="relative items-center flex z-10"
      >
        <AvailableForWork />
      </motion.div>
    </motion.div>
  );
};

export default HeroCta;
