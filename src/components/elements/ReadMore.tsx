'use client';
import React from 'react';

const ReadMore = ({ children }: { children: string }) => {
  const text = children;

  const [isReadMore, setIsReadMore] = React.useState(true);

  const tonggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  if (text.length < 100) return <p className="text-gray-400 text-sm">{text}</p>;

  return (
    <p className="text-gray-400 text-sm">
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={tonggleReadMore}
        className="text-secondary cursor-pointer hover:text-white transition-colors duration-300"
      >
        {isReadMore ? ' ...read more' : ' show less'}
      </span>
    </p>
  );
};

export default ReadMore;
