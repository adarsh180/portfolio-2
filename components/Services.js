import { FiMonitor, FiSmartphone, FiCode, FiLayers, FiSearch, FiTrendingUp } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: <FiMonitor size={24} />,
    title: 'Web Development',
    description: 'Creating responsive, fast, and user-friendly websites using modern technologies and best practices.'
  },
  {
    icon: <FiSmartphone size={24} />,
    title: 'Mobile-First Design',
    description: 'Designing websites that look great on all devices, with a focus on mobile user experience.'
  },
  {
    icon: <FiCode size={24} />,
    title: 'Custom Web Applications',
    description: 'Building tailored web applications that solve specific business problems and improve efficiency.'
  },
  {
    icon: <FiLayers size={24} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive user interfaces and experiences that engage users and achieve business goals.'
  },
  {
    icon: <FiSearch size={24} />,
    title: 'SEO Optimization',
    description: 'Improving website visibility in search engines to drive more organic traffic to your business.'
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: 'Performance Optimization',
    description: 'Enhancing website speed and performance for better user experience and search engine rankings.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Services</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses establish a strong online presence.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="p-3 bg-primary/10 text-primary rounded-lg inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}