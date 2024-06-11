import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Hero from '../layouts/Hero';
import Features from '../layouts/Features';

const Home = () => {
  useEffect(() => {
    document.title = 'Argent Bank - Home Page';
  }, []);
  return (
    <PageLayout>
      <>
        <Hero />
        <Features />
      </>
    </PageLayout>
  );
};

export default Home;
