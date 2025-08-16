import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';

export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary">500</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Server Error</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Something went wrong on our server. Please try again later or contact us if the problem persists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn btn-primary inline-flex items-center">
              Back to Home
            </Link>
            <button 
              onClick={() => window.location.reload()} 
              className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 inline-flex items-center"
            >
              <FiRefreshCw className="mr-2" /> Refresh Page
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Server Error'
    }
  };
}