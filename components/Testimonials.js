import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../utils/portfolioData';
import {
  OcrBoundingBoxSchematicSVG,
  DataPipelineSchematicSVG,
} from './ui/TechnicalSchematics';

export default function Testimonials() {
  return (
    <section aria-label="Engineering Deep Dives" className="pb-20 md:pb-24">
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-fg-tertiary mb-2">
              Architecture Highlights
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-fg">
              Document Vision &amp; Data Pipeline Deep Dives
            </h3>
          </div>
          <p className="font-mono text-xs text-fg-secondary">
            Production Schematics · Verified Systems
          </p>
        </div>

        {/* Side-by-Side 2-Column Engineering Deep-Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: 14-Language Indian OCR & 2D Bounding-Box Engine */}
          <article className="arch-card-interactive p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="spec-tag">SEMDIV FOLIO SCAN</span>
                <span className="font-mono text-xs font-medium text-signal">
                  14 Indian &amp; Global Scripts
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-fg mb-2">
                14-Language Indian OCR &amp; 2D Bounding-Box Layout Engine
              </h4>
              <p className="text-sm text-fg-secondary leading-relaxed mb-5">
                Engineered automated page edge detection, perspective deskewing, Otsu adaptive contrast thresholding, normalized region/word bounding boxes, and hierarchical reading-order extraction across Hindi (Devanagari), Bengali, Marathi, Tamil, Telugu, and English documents.
              </p>

              <div className="mb-5">
                <OcrBoundingBoxSchematicSVG />
              </div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-fg-tertiary">
                On-Device Browser Pipeline · Zero Cloud Leak
              </span>
              <a
                href={PROFILE.semdivFolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-fg hover:text-signal transition-colors group shrink-0"
              >
                <span>Open Folio Scan</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </article>

          {/* Card 2: 100,000+ Structured Records & Domain ML Pipeline */}
          <article className="arch-card-interactive p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="spec-tag">DATA &amp; ML ENGINEERING</span>
                <span className="font-mono text-xs font-medium text-signal">
                  100,000+ Curated Records
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-fg mb-2">
                Large-Scale Dataset Curation &amp; Ensemble ML Classification
              </h4>
              <p className="text-sm text-fg-secondary leading-relaxed mb-5">
                Built structured preprocessing, schema normalization, deduplication, and supervised evaluation pipelines across 100,000+ telemetry records using Random Forest, XGBoost, AdaBoost, and Decision Trees alongside Accenture&apos;s 7-dataset analytics workflow.
              </p>

              <div className="mb-5">
                <DataPipelineSchematicSVG />
              </div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-fg-tertiary">
                Python · Scikit-Learn · XGBoost · SageMaker
              </span>
              <a
                href="https://github.com/adarsh180/Malware_Detection_using_Machine_Learning-main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-fg hover:text-signal transition-colors group shrink-0"
              >
                <span>Inspect Pipeline</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
