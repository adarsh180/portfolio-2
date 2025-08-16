import About from '../components/About';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { FiCalendar, FiBookOpen } from 'react-icons/fi';

export default function AboutPage() {
  const experiences = [
    {
      title: 'AWS AI/ML Specialization',
      company: 'Amazon Web Services',
      period: '2023',
      description: 'Built and deployed scalable machine learning models using AWS SageMaker.'
    },
    {
      title: 'SAP S/4HANA Development',
      company: 'Techno India University',
      period: '2022',
      description: 'Conducted by Prof. Rajdeep Ghatak, TIU. Learned enterprise resource planning and development.'
    },
    {
      title: 'Smart India Hackathon 2023',
      company: 'Government of India',
      period: '2023',
      description: 'Qualified and led the team in the 1st round of Smart India Hackathon 2023.'
    },
    {
      title: 'Accenture North America Data Analytics',
      company: 'Accenture',
      period: '2022',
      description: 'Completed Job Simulation with focus on data cleaning, analysis, and visualization.'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics and Communication',
      institution: 'Techno India University',
      period: '2021 - 2025',
      description: 'Currently pursuing with a CGPA of 7.23. Focusing on web development and AI/ML.'
    },
    {
      degree: 'ISC (12th)',
      institution: 'S.T. Thomas Church School',
      period: '2019 - 2021',
      description: 'Completed with 65% marks.'
    },
    {
      degree: 'CBSE (10th)',
      institution: 'Indira Gandhi Memorial High School',
      period: '2018 - 2019',
      description: 'Completed with 70% marks.'
    }
  ];

  return (
    <div className="pt-20">
      <About />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Certifications & Achievements</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              My professional certifications, courses, and notable achievements.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="mb-1 flex items-center">
                    <FiCalendar className="mr-2 text-primary" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Education</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full" />
                  <div className="mb-1 flex items-center">
                    <FiBookOpen className="mr-2 text-secondary" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-secondary mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'About'
    }
  };
}