import Skills from '../components/Skills';
import AnimatedSection from '../components/AnimatedSection';
import { FiCode, FiLayout, FiDatabase, FiTool, FiMonitor, FiUsers } from 'react-icons/fi';

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: <FiCode size={24} />,
      title: 'Languages',
      description: 'Programming languages I have experience with for various applications.',
      skills: [
        'C++',
        'C',
        'Python',
        'Java',
        'JavaScript'
      ]
    },
    {
      icon: <FiLayout size={24} />,
      title: 'Frameworks',
      description: 'Frontend and backend frameworks I use to build web applications.',
      skills: [
        'React',
        'Next.js',
        'Material UI',
        'TailwindCSS',
        'Bootstrap'
      ]
    },
    {
      icon: <FiTool size={24} />,
      title: 'Tools',
      description: 'Development tools and technologies I use in my workflow.',
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Kubernetes',
        'AWS'
      ]
    },
    {
      icon: <FiDatabase size={24} />,
      title: 'Technologies',
      description: 'Various technologies and domains I have experience with.',
      skills: [
        'Web Development',
        'Machine Learning',
        'DBMS',
        'Networking',
        'TCP/IP'
      ]
    },
    {
      icon: <FiMonitor size={24} />,
      title: 'Operating Systems',
      description: 'Operating systems I am comfortable working with.',
      skills: [
        'Windows',
        'Linux',
        'Command Line',
        'Shell Scripting',
        'System Administration'
      ]
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Soft Skills',
      description: 'Essential non-technical skills for successful collaboration and project delivery.',
      skills: [
        'Leadership',
        'Communication',
        'Critical Thinking',
        'Time Management',
        'Problem Solving'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Skills />
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skill Categories</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              A detailed breakdown of my technical skills and expertise across different domains.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Certifications & Courses</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              I'm constantly learning and improving my skills. Here are some of the certifications and courses I've completed.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-2">AWS AI/ML Specialization</h3>
                <p className="text-primary mb-2">Amazon Web Services</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built and deployed scalable machine learning models using AWS SageMaker.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">Completed in 2023</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-2">SAP S/4HANA Development</h3>
                <p className="text-primary mb-2">Techno India University</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Conducted by Prof. Rajdeep Ghatak, TIU. Learned enterprise resource planning and development.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">Completed in 2022</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2">Accenture North America Data Analytics</h3>
                <p className="text-primary mb-2">Accenture</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Completed Job Simulation with focus on data cleaning, analysis, and visualization.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">Completed in 2022</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Skills'
    }
  };
}