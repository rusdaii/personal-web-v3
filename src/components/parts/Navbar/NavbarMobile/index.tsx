'use client';
import { motion } from 'framer-motion';
import { GoHome, GoPerson, GoBriefcase, GoDownload } from 'react-icons/go';

import CustomLinkMobile from '@/components/elements/CustomLinkMobile';

type Props = {
  resume: string;
};

const animation = {
  hide: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const NavbarMobile = ({ resume }: Props) => {
  return (
    <div
      className="fixed w-full sm:w-1/2 left-[50%] translate-x-[-50%] top-0 z-10
      md:hidden sm:rounded-3xl bg-white/10 backdrop-blur-md  border-b-2"
    >
      <motion.nav
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="flex justify-evenly items-start p-3"
      >
        <CustomLinkMobile href="/" title="Home">
          <GoHome className="text-3xl text-white" />
        </CustomLinkMobile>

        <CustomLinkMobile href="/project" title="Project">
          <GoBriefcase className="text-3xl text-white" />
        </CustomLinkMobile>

        <CustomLinkMobile href="/about" title="About">
          <GoPerson className="text-3xl text-white" />
        </CustomLinkMobile>

        <CustomLinkMobile href={resume} title="Resume" target>
          <GoDownload className="text-3xl text-white" />
        </CustomLinkMobile>
      </motion.nav>
    </div>
  );
};

export default NavbarMobile;
