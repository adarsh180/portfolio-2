import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

const ShaderBackground = dynamic(() => import('./ui/ShaderBackground'), { ssr: false });

export default function Layout({ children, title = 'Portfolio' }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const pageTitle = title ? `${title} | Adarsh Tiwari` : 'Adarsh Tiwari — Full-Stack Developer & AI/ML Builder';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Adarsh Tiwari — 2025 B.Tech ECE Graduate, Full-Stack Developer, Multilingual OCR & Document Systems Builder, and AI/ML Enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col relative">
        {/* WebGL Shader Background */}
        <ShaderBackground />
        {/* Dark overlay for content readability */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 -z-[5] pointer-events-none" />
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
