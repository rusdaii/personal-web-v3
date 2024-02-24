import '@/assets/styles/globals.css';
import 'nprogress/nprogress.css';

import { Flowbite } from 'flowbite-react';

import poppins from '@/assets/fonts/poppins';
import theme from '@/assets/theme/flowbite';
import ParticleBackground from '@/components/elements/ParticleBackground';
import Footer from '@/components/parts/Footer';
import Navbar from '@/components/parts/Navbar';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const debugScreen =
    process.env.NODE_ENV === 'development' ? 'debug-screens' : '';

  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning={true}
    >
      <body className={`bg-dark ${debugScreen}`}>
        <Flowbite theme={{ theme: theme }}>
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <ParticleBackground />
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </div>
        </Flowbite>
      </body>
    </html>
  );
}
