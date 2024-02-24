import React from 'react';

import Image from 'next/image';

interface Props {
  id: string;
  name: string;
  image: string | null;
}

const TechStackIcons = (props: Props) => {
  return (
    <div className="tech-icons group relative h-16 w-16 mr-4 border-solid border-2 rounded-2xl">
      <div className="h-full w-full p-2 lg:p-4 relative">
        <Image
          src={props.image || ''}
          fill
          className="select-none object-contain p-3 rounded-xl"
          alt={props.name}
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </div>
    </div>
  );
};

export default TechStackIcons;
