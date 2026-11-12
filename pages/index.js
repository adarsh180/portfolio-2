import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Overview',
    },
  };
}
