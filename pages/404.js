import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="container-editorial py-28 flex items-center justify-center">
      <div className="arch-card p-10 max-w-md w-full text-center">
        <div className="font-mono text-xs uppercase tracking-[0.12em] text-fg-tertiary mb-2">
          HTTP 404
        </div>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-fg mb-3">
          Page not found
        </h1>
        <p className="text-sm text-fg-secondary leading-relaxed mb-7">
          The requested route does not exist or has moved. Return to the main portfolio overview below.
        </p>
        <Link href="/" className="btn-arch-primary">
          <ArrowLeft size={15} strokeWidth={1.5} />
          <span>Return to Overview</span>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: '404 — Not Found',
    },
  };
}
