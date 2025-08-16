import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import { FiMessageSquare } from 'react-icons/fi';

export default function ContactPage() {
  const faqs = [
    {
      question: 'What are your areas of expertise?',
      answer: 'I specialize in web development, machine learning, and electronics. My technical skills include C++, Python, React, and various ML algorithms.'
    },
    {
      question: 'Are you available for internships or job opportunities?',
      answer: 'Yes, I am actively seeking internships and job opportunities in web development, AI/ML, and related fields. I am available for both remote and on-site positions.'
    },
    {
      question: 'Can you work on collaborative projects?',
      answer: 'Absolutely! I have experience working in teams and have participated in hackathons. I enjoy collaborative environments where I can contribute my skills while learning from others.'
    },
    {
      question: 'What is your expected graduation date?',
      answer: 'I am expected to graduate with my B.Tech in Electronics and Communication from Techno India University in 2025.'
    },
    {
      question: 'Do you have experience with real-world projects?',
      answer: 'Yes, I have worked on several projects including a Movie Review App and Malware Detection using ML. I have also participated in the Smart India Hackathon and completed industry simulations with Accenture.'
    }
  ];

  return (
    <div className="pt-20">
      <Contact />
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Here are answers to some common questions about my services and process.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg mr-4 mt-1">
                      <FiMessageSquare size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-primary/10 dark:bg-primary/5 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Feel free to reach out for collaboration opportunities, questions about my projects, or just to say hello.
              </p>
              <a 
                href="mailto:tiwariadarsh1804@gmail.com" 
                className="btn btn-primary inline-flex items-center"
              >
                Email Me <FiMessageSquare className="ml-2" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact'
    }
  };
}