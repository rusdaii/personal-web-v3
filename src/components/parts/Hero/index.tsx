'use client';

import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import Container from '@/components/elements/Container';
import HeroCta from '@/components/elements/HeroCta';

const animation = {
  hide: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Hero = () => {
  const [text] = useTypewriter({
    words: ['<Welcome/>', 'Hi, I am Rusdi.', 'Guy Who Loves Tech.tsx'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="hero grid place-content-center fixed inset-0">
      <Container className="z-10">
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 ">
            {text}
            <Cursor cursorColor={'#6AADF9'} />
          </h1>
          <motion.p
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.3 }}
            className="text-white max-w-2xl mb-4"
          >
            Welcome to my digital playground! You can call me Rusdi or FoXone, a
            budding junior web developer passionate about crafting digital
            experiences that captivate and inspire. Let&rsquo;s build the web of
            tomorrow together!
          </motion.p>

          <HeroCta />
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
