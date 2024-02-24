'use client';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { IoMdDownload } from 'react-icons/io';

import { socialMedia } from '@/lib/constants/socialMedia';
import { User } from '@/repositories/user/type';

const animation = {
  hide: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const AboutImageCard = ({ user }: { user: User }) => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.3 }}
    >
      <div
        className="about-card self-end bg-white rounded-[32px] p-3 col-span-9 h-[345px] 
        relative transition-all ease-in-out duration-500 bento-card"
      >
        <button
          className="absolute top-[1.4rem] right-[2rem] bg-transparent border-none"
          aria-label="Email"
        >
          <Link
            href={`mailto:${user.email}`}
            target="_blank"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5 text-white hover:text-primary transition-colors duration-300" />
          </Link>
        </button>
        <button
          className="absolute top-[1.4rem] right-[4rem] bg-transparent border-none"
          aria-label="Github"
        >
          <Link href={socialMedia.github} target="_blank" aria-label="Github">
            <BsGithub className="w-5 h-5 text-white hover:text-primary transition-colors duration-300" />
          </Link>
        </button>
        <button
          className="absolute top-[1.4rem] right-[6rem] bg-transparent border-none"
          aria-label="LinkedIn"
        >
          <Link
            href={socialMedia.linkedin}
            target="_blank"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="w-5 h-5 text-white hover:text-primary transition-colors duration-300" />
          </Link>
        </button>
        <div
          className="profile-pic-wrapper absolute top-[3px] left-[3px] z-[1] border-solid border-1 border-primary
        overflow-hidden rounded-[29px]"
        >
          <Image
            src={user.avatar}
            alt="profile"
            width={500}
            height={500}
            className="profile-pic"
          />
        </div>
        <div
          className="about-card-bottom absolute bottom-[3px] left-[3px] right-[3px]
        bg-gradient-to-tl from-primary/10 to-secondary/10 backdrop-blur-md bg-opacity-10 
        top-[80%] rounded-[29px] overflow-hidden"
        >
          <div className="absolute bottom-12 left-6 right-6 h-[160px]">
            <span className="block text-white font-bold text-base">
              {user.name}
            </span>
            <span className="block text-white text-sm mt-4">{user.about}</span>
          </div>
          <div className="flex absolute justify-end items-center bottom-3 left-6 right-6">
            <Button
              outline
              pill
              gradientDuoTone="purpleToPink"
              className="button-outline"
              aria-label="Download Resume"
            >
              <IoMdDownload />
              <Link href={user.resume} target="_blank">
                <span className="ml-1 font-light">Resume</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImageCard;
