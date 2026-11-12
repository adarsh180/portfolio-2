import { Html, Head, Main, NextScript } from 'next/document';

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('darkMode');
    var isDark = stored !== null ? stored === 'true' : true;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Adarsh Tiwari — 2025 B.Tech ECE Graduate from Techno India University, Full-Stack Engineer, Multilingual Indian OCR & Document Systems Builder, and AI/ML Developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased bg-bg text-fg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
