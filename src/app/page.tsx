import Home from '@/components/pages/Home';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata(
  { title: 'Home' },
  { withSuffix: true }
);

const HomePage = () => {
  return <Home />;
};

export default HomePage;
