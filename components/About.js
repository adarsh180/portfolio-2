import { FiUser, FiAward, FiCoffee, FiCode } from 'react-icons/fi';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const stats = [
    { icon: <FiUser />, value: 'B.Tech', label: 'Education' },
    { icon: <FiAward />, value: '7.23', label: 'CGPA' },
    { icon: <FiCode />, value: '5+', label: 'Projects' },
    { icon: <FiCoffee />, value: '3+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here's a quick summary of who I am and my journey so far.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="aspect-square max-w-md mx-auto rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image 
                src="/images/ADARSH-TIWARI(2).jpg" 
                alt="Adarsh Tiwari" 
                width={500} 
                height={500} 
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <h3 className="text-2xl font-bold mb-4">B.Tech Student | Web Developer | AI/ML Enthusiast</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a motivated B.Tech student from Techno India University, specializing in Electronics and Communication. 
              With a passion for full stack development, AI/ML, and creative problem-solving, I love building scalable tech 
              solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Currently in my final year, I'm focused on expanding my knowledge in web development and artificial intelligence 
              while working on projects that challenge me to grow as a developer and problem solver.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md"
                >
                  <div className="text-primary text-xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}