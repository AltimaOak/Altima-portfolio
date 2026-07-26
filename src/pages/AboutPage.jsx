import { Layout } from '../components/layout/Layout';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';

export const AboutPage = () => {
  return (
    <Layout>
      <About />
      <Stats />
    </Layout>
  );
};
