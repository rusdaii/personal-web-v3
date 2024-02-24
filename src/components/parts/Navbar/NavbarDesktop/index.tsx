'use client';

import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TbExternalLink } from 'react-icons/tb';

import Container from '@/components/elements/Container';
import CustomLink from '@/components/elements/CustomLinkNavbar';
import { Link } from '@/components/elements/Link';

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

const NavbarDesktop = ({ resume }: Props) => {
  return (
    <header
      className="sticky hidden top-0 w-full z-20 md:block xl:items-center 
      border-content backdrop-blur-md border-b-2 "
    >
      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="overflow-hidden"
      >
        <Container className="flex justify-between items-center py-2 lg:py-3">
          <div className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={256}
              height={256}
              loading="lazy"
              className="rounded-full w-9 h-9 mr-4"
            />
            <Link href="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold ">
                <h1>FoXone</h1>
              </span>
            </Link>
          </div>

          <div>
            <nav className="gap-5 md:flex">
              <CustomLink href="/" title="Home" />
              <CustomLink
                href="/project"
                title="Project"
                className="mx-4 scroll"
              />
              <CustomLink href="/about" title="About" />
            </nav>
          </div>

          <div className="hidden md:flex flex-row items-center gap-5">
            <Link href={resume} target="_blank">
              <Button
                outline
                gradientDuoTone="purpleToPink"
                className="button-outline transition-transform duration-300 hover:scale-110"
              >
                <TbExternalLink className="w-5 h-5 mr-1 text-gray-400" />
                Resume
              </Button>
            </Link>
          </div>
        </Container>
      </motion.div>
    </header>
  );
};

export default NavbarDesktop;
