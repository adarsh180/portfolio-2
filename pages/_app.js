import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      if (!url.includes('#')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    router.events?.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <Layout title={pageProps?.title || 'Overview'}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
