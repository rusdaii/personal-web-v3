import Link from 'next/link';

import { socialMedia } from '@/lib/constants/socialMedia';

const AvailableForWork = () => {
  return (
    <div className="flex justify-center items-center gap-3.5 px-2.5">
      <div>
        <span className="relative flex h-2 w-2">
          <span
            className=" bg-primary dark:bg-secondary absolute -top-1 -left-1 inline-flex h-4 w-4 
          animate-ping rounded-full opacity-75 "
          />
          <span className="bg-primary dark:bg-secondary relative inline-flex h-2 w-2 rounded-full dark:bg-accent-400" />
        </span>
      </div>
      <Link href={socialMedia.mail} target="_blank">
        <h2 className="font-bold">AVAILABLE FOR HIRE</h2>
      </Link>
    </div>
  );
};

export default AvailableForWork;
