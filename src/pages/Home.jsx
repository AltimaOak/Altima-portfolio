import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Services } from '../components/sections/Services';
import { Team } from '../components/sections/Team';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Contact />
    </Layout>
  );
};
