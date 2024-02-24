import React from 'react';

import About from '@/components/pages/About';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata(
  { title: 'About' },
  { withSuffix: true }
);

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
