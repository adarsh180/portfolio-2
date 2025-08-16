import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  // Add page transition effect
  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    // Check if router.events is available
    if (router.events) {
      router.events.on('routeChangeComplete', handleRouteChange);
      
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router]);

  return (
    <ThemeProvider>
      <Layout title={`Portfolio | ${pageProps.title || 'Home'}`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;