import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    content: 'Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations with their attention to detail and creative solutions.',
    avatar: '/testimonials/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director, GrowthLabs',
    content: 'Our website redesign project was handled with exceptional professionalism. The developer was responsive, understood our needs perfectly, and implemented everything we asked for and more.',
    avatar: '/testimonials/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder, DesignHub',
    content: 'I was impressed by the developer\'s technical skills and creative approach. They transformed our concept into a beautiful, functional website that has significantly improved our user engagement.',
    avatar: '/testimonials/avatar3.jpg'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Client Testimonials</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here's what my clients have to say about working with me.
          </p>
        </AnimatedSection>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                        {/* Replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                          <FiMessageSquare size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}