import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full -top-20 -left-20 blur-3xl" />
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full -bottom-20 -right-20 blur-3xl" />
      </div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Adarsh Tiwari</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Final-year B.Tech student | Web Developer | AI/ML Enthusiast
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I'm a motivated B.Tech student from Techno India University, specializing in Electronics and Communication.
              With a passion for full stack development, AI/ML, and creative problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-primary flex items-center">
                View Projects <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center">
                Contact Me <FiArrowRight className="ml-2" />
              </Link>
              <a 
                href="/resume.pdf" 
                className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
              >
                Download Resume <FiDownload className="ml-2" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="rounded-full overflow-hidden bg-white dark:bg-dark h-full w-full">
                <Image 
                  src="/images/ADARSH-TIWARI(2).jpg" 
                  alt="Adarsh Tiwari" 
                  width={500} 
                  height={500} 
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}