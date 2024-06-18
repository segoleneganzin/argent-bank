import PageLayout from '../layouts/PageLayout';
import Hero from '../layouts/Hero';
import Features from '../layouts/Features';

const Home = () => {
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
