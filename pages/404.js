import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="btn btn-primary inline-flex items-center">
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Page Not Found'
    }
  };
}