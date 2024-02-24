'use client';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import Container from '@/components/elements/Container';
import { Link } from '@/components/elements/Link';
import { socialMedia } from '@/lib/constants/socialMedia';

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
            transition={{ delay: 0.2 }}
            className="text-white max-w-2xl mb-4"
          >
            Welcome to my digital playground! You can call me Rusdi or FoXone, a
            budding junior web developer passionate about crafting digital
            experiences that captivate and inspire. Let&rsquo;s build the web of
            tomorrow together!
          </motion.p>

          <motion.div className="flex flex-wrap gap-5">
            <motion.div
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.4 }}
            >
              <Link href={socialMedia.github} target="_blank">
                <Button
                  pill
                  gradientDuoTone="purpleToPink"
                  outline
                  className="button-outline hero-btn transition-transform duration-300 hover:scale-110"
                >
                  Dig into my universe
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center items-center gap-3.5 px-2.5"
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.6 }}
            >
              <div>
                <span className="relative flex h-2 w-2">
                  <span
                    className=" bg-primary dark:bg-secondary absolute -top-1 -left-1 inline-flex h-4 w-4 
                    animate-ping rounded-full opacity-75 "
                  />
                  <span
                    className="bg-primary dark:bg-secondary relative inline-flex 
                    h-2 w-2 rounded-full dark:bg-accent-400"
                  />
                </span>
              </div>
              <Link href={socialMedia.mail} target="_blank">
                <h2 className="font-bold">AVAILABLE FOR HIRE</h2>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
