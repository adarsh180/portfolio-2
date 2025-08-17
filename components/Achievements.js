import { FiExternalLink } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const achievements = [
  {
    icon: '/images/icon/leetcode.png',
    title: 'LeetCode Profile',
    description: 'Solving algorithmic problems and improving problem-solving skills through consistent practice.',
    link: 'https://leetcode.com/u/tiwariadarsh1804/',
    linkText: 'View Profile',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: '/images/icon/hackerrank.png',
    title: 'HackerRank Profile',
    description: 'Demonstrating coding proficiency across multiple programming languages and domains.',
    link: 'https://www.hackerrank.com/profile/tiwariadarsh1804',
    linkText: 'View Profile',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '/images/icon/certificate.png',
    title: 'Certifications',
    description: 'Professional certifications and course completions showcasing continuous learning and skill development.',
    link: 'https://drive.google.com/drive/folders/1Mb1DlSn5rkdGfmB6T5D-X-7V_Ibn1J8f',
    linkText: 'View Certificates',
    color: 'from-blue-500 to-purple-500'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements & Profiles</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My coding journey and professional development through competitive programming and continuous learning.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-lg inline-block mb-4 text-white w-fit`}>
                  <img 
                    src={achievement.icon} 
                    alt={achievement.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{achievement.description}</p>
                <a 
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  {achievement.linkText} <FiExternalLink className="ml-2" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}