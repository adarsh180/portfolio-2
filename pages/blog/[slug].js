import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiUser, FiTag, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
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
    tags: ['TailwindCSS', 'CSS', 'Responsive Design'],
    content: `
      <p>TailwindCSS has revolutionized the way developers approach CSS. Instead of writing custom CSS for each component, Tailwind provides utility classes that can be composed to build any design directly in your markup.</p>
      
      <h2>Getting Started with TailwindCSS</h2>
      
      <p>To get started with TailwindCSS, you first need to install it via npm:</p>
      
      <pre><code>npm install tailwindcss</code></pre>
      
      <p>Then, create a configuration file:</p>
      
      <pre><code>npx tailwindcss init</code></pre>
      
      <h2>Setting Up Your Project</h2>
      
      <p>Configure your template paths in the tailwind.config.js file:</p>
      
      <pre><code>module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <p>Add the Tailwind directives to your CSS file:</p>
      
      <pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
      
      <h2>Building Responsive Layouts</h2>
      
      <p>Tailwind makes it easy to create responsive designs using breakpoint prefixes:</p>
      
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
  Responsive content
&lt;/div&gt;</code></pre>
      
      <p>This div will be full width on mobile, half width on medium screens, and one-third width on large screens.</p>
      
      <h2>Customizing Your Design</h2>
      
      <p>You can extend Tailwind's default configuration to include your own custom colors, spacing, or other design tokens:</p>
      
      <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>TailwindCSS provides a powerful and flexible approach to styling your websites. By using utility classes, you can build custom designs without leaving your HTML and without writing custom CSS. This leads to faster development times and more consistent designs.</p>
    `
  }
];

export default function BlogPost({ post }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return (
      <div className="pt-20">
        <div className="container-custom py-20">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="pt-20">
        <div className="container-custom py-20">
          <div className="text-center">Post not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center text-primary mb-6">
              <FiArrowLeft className="mr-2" /> Back to Blog
            </Link>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 md:h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-gray-500 dark:text-gray-400">Blog Header Image</div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center mr-4 mb-2">
                    <FiCalendar className="mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center mr-4 mb-2">
                    <FiUser className="mr-1" /> {post.author}
                  </span>
                  <span className="flex items-center mb-2">
                    <FiTag className="mr-1" /> {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                
                <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-bold mb-2">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <Link 
                            key={tag} 
                            href={`/blog?tag=${tag}`}
                            className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full hover:bg-primary/10 hover:text-primary"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2 flex items-center">
                        <FiShare2 className="mr-2" /> Share:
                      </h3>
                      <div className="flex space-x-2">
                        <a 
                          href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <FiTwitter />
                        </a>
                        <a 
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#0077B5] hover:text-white transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <FiLinkedin />
                        </a>
                        <a 
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <FiFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({
    params: { slug: post.slug }
  }));
  
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      post,
      title: post.title
    }
  };
}