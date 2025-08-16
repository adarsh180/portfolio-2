import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Responsive Website with TailwindCSS',
    excerpt: 'Learn how to create a fully responsive website using TailwindCSS, a utility-first CSS framework that makes styling easy and efficient.',
    date: 'June 15, 2023',
    author: 'John Doe',
    category: 'Web Development',
    image: '/blog/tailwind.jpg',
    slug: 'how-to-build-responsive-website-tailwindcss'
  },
  {
    id: 2,
    title: 'Getting Started with React Hooks',
    excerpt: 'An introduction to React Hooks and how they can simplify your React components while making them more reusable and maintainable.',
    date: 'May 22, 2023',
    author: 'John Doe',
    category: 'React',
    image: '/blog/react-hooks.jpg',
    slug: 'getting-started-with-react-hooks'
  },
  {
    id: 3,
    title: 'The Power of Next.js for Modern Web Applications',
    excerpt: 'Discover why Next.js is becoming the go-to framework for building modern web applications with features like server-side rendering and static site generation.',
    date: 'April 10, 2023',
    author: 'John Doe',
    category: 'Next.js',
    image: '/blog/nextjs.jpg',
    slug: 'power-of-nextjs-modern-web-applications'
  }
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Insights, tutorials, and updates from my blog.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <div className="text-gray-500 dark:text-gray-400">Blog Image</div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center mr-4">
                      <FiCalendar className="mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <FiUser className="mr-1" /> {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 pt-0">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-primary hover:underline flex items-center"
                  >
                    Read More <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link 
            href="/blog" 
            className="btn btn-primary inline-flex items-center"
          >
            View All Articles <FiArrowRight className="ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}