import Link from 'next/link';
import { ArrowLeft, RotateCw } from 'lucide-react';

export default function Custom500() {
  return (
    <div className="container-editorial py-28 flex items-center justify-center">
      <div className="arch-card p-10 max-w-md w-full text-center">
        <div className="font-mono text-xs uppercase tracking-[0.12em] text-fg-tertiary mb-2">
          HTTP 500
        </div>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-fg mb-3">
          Unexpected error
        </h1>
        <p className="text-sm text-fg-secondary leading-relaxed mb-7">
          Something went wrong while rendering this page. Please refresh or return to the overview.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-arch-primary">
            <ArrowLeft size={15} strokeWidth={1.5} />
            <span>Return to Overview</span>
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-arch-secondary"
          >
            <RotateCw size={15} strokeWidth={1.5} />
            <span>Reload</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: '500 — Error',
    },
  };
}
