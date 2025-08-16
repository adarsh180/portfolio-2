import { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiUser, FiSearch, FiTag } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Responsive Website with TailwindCSS',
    excerpt: 'Learn how to create a fully responsive website using TailwindCSS, a utility-first CSS framework that makes styling easy and efficient.',
    date: 'June 15, 2023',
    author: 'John Doe',
    category: 'Web Development',
    image: '/blog/tailwind.jpg',
    slug: 'how-to-build-responsive-website-tailwindcss',
    tags: ['TailwindCSS', 'CSS', 'Responsive Design']
  },
  {
    id: 2,
    title: 'Getting Started with React Hooks',
    excerpt: 'An introduction to React Hooks and how they can simplify your React components while making them more reusable and maintainable.',
    date: 'May 22, 2023',
    author: 'John Doe',
    category: 'React',
    image: '/blog/react-hooks.jpg',
    slug: 'getting-started-with-react-hooks',
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: 3,
    title: 'The Power of Next.js for Modern Web Applications',
    excerpt: 'Discover why Next.js is becoming the go-to framework for building modern web applications with features like server-side rendering and static site generation.',
    date: 'April 10, 2023',
    author: 'John Doe',
    category: 'Next.js',
    image: '/blog/nextjs.jpg',
    slug: 'power-of-nextjs-modern-web-applications',
    tags: ['Next.js', 'React', 'SSR']
  },
  {
    id: 4,
    title: 'Understanding CSS Grid Layout',
    excerpt: 'A comprehensive guide to CSS Grid Layout and how it can be used to create complex web layouts with ease.',
    date: 'March 5, 2023',
    author: 'John Doe',
    category: 'CSS',
    image: '/blog/css-grid.jpg',
    slug: 'understanding-css-grid-layout',
    tags: ['CSS', 'Grid', 'Layout']
  },
  {
    id: 5,
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'Learn the basics of TypeScript and how it can improve your JavaScript development experience with static typing.',
    date: 'February 18, 2023',
    author: 'John Doe',
    category: 'TypeScript',
    image: '/blog/typescript.jpg',
    slug: 'introduction-to-typescript-for-javascript-developers',
    tags: ['TypeScript', 'JavaScript', 'Web Development']
  },
  {
    id: 6,
    title: 'Building a RESTful API with Node.js and Express',
    excerpt: 'A step-by-step guide to creating a RESTful API using Node.js and Express with MongoDB as the database.',
    date: 'January 30, 2023',
    author: 'John Doe',
    category: 'Backend',
    image: '/blog/nodejs-api.jpg',
    slug: 'building-restful-api-nodejs-express',
    tags: ['Node.js', 'Express', 'API', 'MongoDB']
  }
];

// Get all unique categories
const categories = [...new Set(blogPosts.map(post => post.category))];

// Get all unique tags
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Blog</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Insights, tutorials, and updates from my development journey.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <AnimatedSection key={post.id}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="md:flex">
                          <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {/* Replace with actual image */}
                            <div className="text-gray-500 dark:text-gray-400">Blog Image</div>
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <span className="flex items-center mr-4">
                                <FiCalendar className="mr-1" /> {post.date}
                              </span>
                              <span className="flex items-center">
                                <FiUser className="mr-1" /> {post.author}
                              </span>
                            </div>
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map(tag => (
                                <span 
                                  key={tag} 
                                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full cursor-pointer hover:bg-primary/10 hover:text-primary"
                                  onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Link 
                              href={`/blog/${post.slug}`} 
                              className="text-primary hover:underline flex items-center"
                            >
                              Read More <FiArrowRight className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <AnimatedSection className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">No blog posts found matching your criteria.</p>
                </AnimatedSection>
              )}
            </div>
            
            <div className="md:col-span-1">
              <AnimatedSection className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-bold mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                    />
                    <FiSearch className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setSelectedCategory('')}
                        className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          selectedCategory === '' ? 'text-primary font-medium' : ''
                        }`}
                      >
                        All Categories
                      </button>
                    </li>
                    {categories.map(category => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
                          className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            category === selectedCategory ? 'text-primary font-medium' : ''
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <span 
                        key={tag} 
                        onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                        className={`text-xs px-2 py-1 rounded-full cursor-pointer ${
                          tag === selectedTag 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 dark:bg-gray-700 hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Blog'
    }
  };
}