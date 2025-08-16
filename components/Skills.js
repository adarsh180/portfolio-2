import { FiCode, FiLayout, FiDatabase, FiTool } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const skillsData = [
  {
    category: 'Languages',
    icon: <FiCode size={24} />,
    skills: [
      { name: 'C++', level: 85 },
      { name: 'C', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'JavaScript', level: 80 },
    ]
  },
  {
    category: 'Frameworks',
    icon: <FiLayout size={24} />,
    skills: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Material UI', level: 75 },
      { name: 'Bootstrap', level: 80 },
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: <FiTool size={24} />,
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Kubernetes', level: 65 },
      { name: 'AWS', level: 70 },
      { name: 'Machine Learning', level: 75 },
    ]
  },
  {
    category: 'Other Skills',
    icon: <FiDatabase size={24} />,
    skills: [
      { name: 'DBMS', level: 75 },
      { name: 'Networking', level: 70 },
      { name: 'Linux', level: 75 },
      { name: 'Windows', level: 85 },
      { name: 'Problem Solving', level: 80 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I've developed skills in various programming languages, frameworks, and technologies throughout my education and projects.
            Here's an overview of my technical skills and expertise.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <AnimatedSection 
              key={category.category} 
              delay={0.2 * index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}