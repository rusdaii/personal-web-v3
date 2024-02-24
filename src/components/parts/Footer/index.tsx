'use client';
import { Footer as FooterFlowBite } from 'flowbite-react';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { PiPaperPlaneTiltBold } from 'react-icons/pi';

import Container from '@/components/elements/Container';
import { socialMedia } from '@/lib/constants/socialMedia';

const animation = {
  hide: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <FooterFlowBite className="bg-transparent">
      <div className="w-full backdrop-blur-md border-content border-t-2 z-10 overflow-hidden">
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.5 }}
        >
          <Container className="flex justify-between items-center bg-transparent py-5">
            <FooterFlowBite.Copyright
              href="/"
              by="Rusdi Ahmad Azwari"
              year={getYear}
              className="text-white"
            />
            <div className="flex space-x-6">
              <FooterFlowBite.Icon
                href={socialMedia.mail}
                icon={PiPaperPlaneTiltBold}
                className="social-icon"
                ariaLabel="Send me an email"
              />

              <FooterFlowBite.Icon
                href={socialMedia.linkedin}
                icon={BsLinkedin}
                className="social-icon"
                target="_blank"
                ariaLabel="Follow me on LinkedIn"
              />
              <FooterFlowBite.Icon
                href={socialMedia.github}
                icon={BsGithub}
                className="social-icon"
                target="_blank"
                ariaLabel="Follow me on GitHub"
              />
            </div>
          </Container>
        </motion.div>
      </div>
    </FooterFlowBite>
  );
};

export default Footer;
