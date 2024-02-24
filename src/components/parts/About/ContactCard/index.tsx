'use client';

import { Card } from 'flowbite-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PiPaperPlaneTiltBold } from 'react-icons/pi';

type Props = {
  email: string;
};

const animation = {
  hide: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const ContactCard = ({ email }: Props) => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.9 }}
      className="col-span-9"
    >
      <Card className="rounded-2xl bento-card">
        <div className="flex justify-center items-center">
          <Link
            href={`mailto:${email}`}
            className="flex justify-center items-center group/flex hover:transition-all hover:duration-300 "
          >
            <PiPaperPlaneTiltBold
              className="cursor-pointer mr-1 group-hover/flex:rotate-45 transition-all duration-300
            text-2xl text-white"
            />
            <span
              className="group-hover/flex:translate-x-2 transition-all duration-300
              text-2xl font-semibold text-white"
            >
              Get In Touch
            </span>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ContactCard;
