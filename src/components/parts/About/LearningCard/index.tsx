'use client';
import { Card } from 'flowbite-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const LearningCard = () => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
      className="col-span-9"
    >
      <Card className="rounded-2xl bento-card">
        <h1 className="text-white capitalize">currently learning</h1>

        <div className="flex group/flex hover:transition-all hover:duration-300">
          <div className="group relative cursor-pointer rounded-full ">
            <Image
              src={'/icons/typescript-plain.svg'}
              alt="typescript"
              width={35}
              height={35}
              className="bg-white rounded-full p-1"
            />
            <span className="currently-details">Typescript</span>
          </div>
          <div
            className="group relative cursor-pointer -translate-x-5 
          group-hover/flex:translate-x-5 transition-all duration-300"
          >
            <Image
              src={'/icons/nextjs-original.svg'}
              alt="nextjs"
              width={35}
              height={35}
              className="bg-white rounded-full p-1"
            />
            <span className="currently-details">Next</span>
          </div>
          <div
            className="group relative cursor-pointer -translate-x-10 
          group-hover/flex:translate-x-10 transition-all duration-300"
          >
            <Image
              src={'/icons/tailwindcss-plain.svg'}
              alt="tailwind"
              width={35}
              height={35}
              className="bg-white rounded-full p-1"
            />
            <span className="currently-details">Tailwind</span>
          </div>
          <div
            className="group relative cursor-pointer -translate-x-16 
          group-hover/flex:translate-x-16 transition-all duration-300"
          >
            <Image
              src={'/icons/golang-original.svg'}
              alt="golang"
              width={35}
              height={35}
              className="bg-white rounded-full p-1"
            />
            <span className="currently-details">Golang</span>
          </div>
          <div
            className="group relative cursor-pointer -translate-x-20 
          group-hover/flex:translate-x-20 transition-all duration-300"
          >
            <Image
              src={'/icons/docker-original.svg'}
              alt="docker"
              width={35}
              height={35}
              className="bg-white rounded-full p-1"
            />
            <span className="currently-details">Docker</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default LearningCard;
