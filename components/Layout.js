import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = 'Overview' }) {
  const pageTitle =
    title && title !== 'Home' && title !== 'Overview'
      ? `${title} — Adarsh Tiwari`
      : 'Adarsh Tiwari — Full-Stack Engineer · AI/ML & Document OCR Systems';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Adarsh Tiwari — 2025 B.Tech ECE Graduate (7.23 CGPA, Techno India University), Full-Stack Engineer, Multilingual Indian OCR & Document Systems Builder, and AI/ML Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full flex flex-col bg-bg text-fg relative architectural-grid">
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
