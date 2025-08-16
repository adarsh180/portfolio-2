import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

export default function Layout({ children, title = 'Portfolio' }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}