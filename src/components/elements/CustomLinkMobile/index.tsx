'use client';
import { usePathname } from 'next/navigation';

import { Link } from '@/components/elements/Link';

interface CustomLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
  target?: boolean;
}

const CustomLinkMobile = ({
  href,
  children,
  title,
  target,
}: CustomLinkProps) => {
  const pathname = usePathname();

  const backgroundClass = 'bg-gradient-to-tl from-primary/30 to-secondary/60';

  return (
    <div
      className={`transition-all duration-300 hover:-translate-y-2 p-2 rounded-full group
    ${pathname === href ? backgroundClass : 'bg-transparent'}`}
    >
      <Link href={href} target={target ? '_blank' : '_self'}>
        {children}
      </Link>
      <span
        className="absolute -bottom-8 left-[50%] -translate-x-[50%] z-20 origin-left 
      scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium 
      shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
      >
        {title}
      </span>
    </div>
  );
};

export default CustomLinkMobile;
