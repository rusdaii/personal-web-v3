import { usePathname } from 'next/navigation';

import { Link } from '@/components/elements/Link';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group font-semibold
      text-white
      `}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-primary 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
        ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
