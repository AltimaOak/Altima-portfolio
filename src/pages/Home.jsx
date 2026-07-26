import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </Layout>
  );
};
