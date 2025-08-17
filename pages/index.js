import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home'
    }
  };
}