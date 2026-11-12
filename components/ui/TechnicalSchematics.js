export function MovieDiscoveryWireframeSVG() {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      className="w-full h-full bg-surface-elevated text-fg"
      role="img"
      aria-label="Movie Review and Discovery App UI wireframe"
    >
      {/* Browser Window Top Chrome */}
      <rect x="0" y="0" width="480" height="34" fill="var(--surface)" />
      <line x1="0" y1="34" x2="480" y2="34" stroke="var(--border-subtle)" strokeWidth="1" />
      <circle cx="18" cy="17" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <circle cx="30" cy="17" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <circle cx="42" cy="17" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />

      {/* Address Bar */}
      <rect
        x="110"
        y="8"
        width="260"
        height="18"
        rx="4"
        fill="var(--surface-elevated)"
        stroke="var(--border-subtle)"
        strokeWidth="1"
      />
      <text
        x="240"
        y="20"
        textAnchor="middle"
        fill="var(--fg-tertiary)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8.5"
      >
        adarsh-react-movie.netlify.app
      </text>

      {/* App Header & Search */}
      <text
        x="24"
        y="60"
        fill="var(--fg)"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        fontSize="11.5"
        letterSpacing="-0.02em"
      >
        Media Catalog &amp; Discovery
      </text>

      {/* Search Box */}
      <rect
        x="298"
        y="47"
        width="158"
        height="20"
        rx="5"
        fill="var(--surface)"
        stroke="var(--border-subtle)"
        strokeWidth="1"
      />
      <circle cx="309" cy="57" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <line x1="312" y1="60" x2="315" y2="63" stroke="var(--fg-tertiary)" strokeWidth="1.2" strokeLinecap="round" />
      <text x="321" y="60" fill="var(--fg-tertiary)" fontFamily="Inter, sans-serif" fontSize="8">
        Filter title, year, genre...
      </text>

      {/* Genre Filter Pills */}
      <rect x="24" y="74" width="46" height="16" rx="4" fill="var(--fg)" />
      <text x="47" y="84.5" textAnchor="middle" fill="var(--bg)" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="500">
        TRENDING
      </text>

      <rect x="76" y="74" width="44" height="16" rx="4" fill="var(--surface)" stroke="var(--border-subtle)" />
      <text x="98" y="84.5" textAnchor="middle" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
        SCI-FI
      </text>

      <rect x="126" y="74" width="48" height="16" rx="4" fill="var(--surface)" stroke="var(--border-subtle)" />
      <text x="150" y="84.5" textAnchor="middle" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
        THRILLER
      </text>

      <rect x="180" y="74" width="44" height="16" rx="4" fill="var(--surface)" stroke="var(--border-subtle)" />
      <text x="202" y="84.5" textAnchor="middle" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
        SERIES
      </text>

      {/* 4 Structured Media Cards */}
      {[0, 1, 2, 3].map((idx) => {
        const x = 24 + idx * 110;
        const ratings = ['8.9', '8.4', '9.1', '8.2'];
        const years = ['2024', '2023', '2022', '2024'];
        return (
          <g key={idx}>
            <rect
              x={x}
              y="102"
              width="102"
              height="138"
              rx="7"
              fill="var(--surface)"
              stroke="var(--border-subtle)"
              strokeWidth="1"
            />
            {/* Poster Frame */}
            <rect
              x={x + 6}
              y="108"
              width="90"
              height="86"
              rx="4"
              fill="var(--surface-elevated)"
              stroke="var(--border-subtle)"
              strokeWidth="1"
            />
            {/* Minimal Film Frame Aperture Geometry */}
            <rect
              x={x + 33}
              y="135"
              width="36"
              height="26"
              rx="3"
              stroke="var(--fg-tertiary)"
              strokeWidth="1.2"
              opacity="0.65"
            />
            <polygon
              points={`${x + 48},143 ${x + 48},153 ${x + 56},148`}
              stroke="var(--fg-secondary)"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Rating Badge */}
            <rect
              x={x + 62}
              y="113"
              width="28"
              height="13"
              rx="3"
              fill="var(--surface)"
              stroke="var(--border-subtle)"
            />
            <text
              x={x + 76}
              y="122"
              textAnchor="middle"
              fill="var(--signal)"
              fontFamily="JetBrains Mono, monospace"
              fontSize="7.5"
              fontWeight="600"
            >
              {ratings[idx]}
            </text>
            {/* Title & Meta Skeleton Lines */}
            <rect x={x + 8} y="203" width="66" height="6" rx="2" fill="var(--fg)" opacity="0.82" />
            <rect x={x + 8} y="214" width="42" height="4.5" rx="1.5" fill="var(--fg-tertiary)" opacity="0.55" />
            <text
              x={x + 92}
              y="230"
              textAnchor="end"
              fill="var(--fg-tertiary)"
              fontFamily="JetBrains Mono, monospace"
              fontSize="7.5"
            >
              {years[idx]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function PortfolioWireframeSVG() {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      className="w-full h-full bg-surface-elevated text-fg"
      role="img"
      aria-label="Architectural Editorial Portfolio wireframe"
    >
      {/* Browser Top Chrome */}
      <rect x="0" y="0" width="480" height="34" fill="var(--surface)" />
      <line x1="0" y1="34" x2="480" y2="34" stroke="var(--border-subtle)" strokeWidth="1" />
      <circle cx="18" cy="17" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <circle cx="30" cy="17" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <circle cx="42" cy="17" r="3.5" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <rect x="115" y="8" width="250" height="18" rx="4" fill="var(--surface-elevated)" stroke="var(--border-subtle)" />
      <text x="240" y="20" textAnchor="middle" fill="var(--fg-tertiary)" fontFamily="JetBrains Mono, monospace" fontSize="8">
        adarsh-tiwari-portfolio-sable.vercel.app
      </text>

      {/* Editorial Split Hero Schematic */}
      <rect x="24" y="50" width="96" height="13" rx="6.5" fill="var(--signal-bg)" stroke="var(--signal-border)" />
      <circle cx="33" cy="56.5" r="2.5" fill="var(--signal)" />
      <text x="41" y="59" fill="var(--signal)" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="600">
        IMMEDIATE JOINER
      </text>

      <rect x="24" y="73" width="185" height="12" rx="3" fill="var(--fg)" opacity="0.9" />
      <rect x="24" y="91" width="142" height="12" rx="3" fill="var(--fg)" opacity="0.65" />
      <rect x="24" y="112" width="210" height="5" rx="2" fill="var(--fg-tertiary)" opacity="0.5" />
      <rect x="24" y="122" width="175" height="5" rx="2" fill="var(--fg-tertiary)" opacity="0.5" />

      <rect x="24" y="140" width="68" height="20" rx="4" fill="var(--fg)" />
      <rect x="98" y="140" width="68" height="20" rx="4" fill="var(--surface)" stroke="var(--border-subtle)" />

      {/* Right Portrait Architectural Frame */}
      <rect x="314" y="48" width="142" height="114" rx="8" fill="var(--surface)" stroke="var(--border-subtle)" />
      <line x1="314" y1="138" x2="456" y2="138" stroke="var(--border-subtle)" />
      <circle cx="385" cy="86" r="18" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <path d="M359 130C363 114 373 108 385 108C397 108 407 114 411 130" stroke="var(--fg-tertiary)" strokeWidth="1.2" />
      <text x="324" y="150" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="7">
        01 / OVERVIEW · B.TECH &apos;25
      </text>

      {/* Bottom Bento Row */}
      <line x1="24" y1="178" x2="456" y2="178" stroke="var(--border-subtle)" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={24 + i * 148}
            y="190"
            width="136"
            height="52"
            rx="6"
            fill="var(--surface)"
            stroke="var(--border-subtle)"
          />
          <text
            x={34 + i * 148}
            y="206"
            fill="var(--fg-tertiary)"
            fontFamily="JetBrains Mono, monospace"
            fontSize="7"
          >
            {`0${i + 2} / MODULE`}
          </text>
          <rect x={34 + i * 148} y="214" width="88" height="6" rx="2" fill="var(--fg)" opacity="0.8" />
          <rect x={34 + i * 148} y="226" width="106" height="4.5" rx="1.5" fill="var(--fg-tertiary)" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

export function OcrBoundingBoxSchematicSVG() {
  return (
    <svg
      viewBox="0 0 520 190"
      fill="none"
      className="w-full h-auto rounded-xl border border-line bg-surface-elevated"
      role="img"
      aria-label="14-Language Indian OCR 2D Bounding-Box and Reading-Order Layout Schematic"
    >
      {/* Subtle Coordinate Grid */}
      <defs>
        <pattern id="ocrGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="520" height="190" fill="url(#ocrGrid)" opacity="0.55" />

      {/* Left Document Page Frame */}
      <rect x="20" y="16" width="256" height="158" rx="6" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.2" />

      {/* Region 01: Title Bounding Box */}
      <rect
        x="34"
        y="28"
        width="228"
        height="26"
        rx="3"
        fill="var(--signal-bg)"
        stroke="var(--signal)"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />
      <rect x="34" y="28" width="28" height="11" rx="1.5" fill="var(--signal)" />
      <text x="48" y="36" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600">
        R01
      </text>
      <rect x="70" y="36" width="144" height="6" rx="2" fill="var(--fg)" opacity="0.85" />
      <rect x="70" y="45" width="90" height="4" rx="1.5" fill="var(--fg-tertiary)" opacity="0.6" />

      {/* Region 02: Devanagari Script Block */}
      <rect
        x="34"
        y="64"
        width="108"
        height="48"
        rx="3"
        stroke="var(--fg-secondary)"
        strokeWidth="1.1"
        strokeDasharray="3 2"
      />
      <text x="40" y="75" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="6.8" fontWeight="600">
        R02 · DEVANAGARI
      </text>
      {/* Shirorekha top-bar motif representing Indic script lines */}
      <line x1="40" y1="84" x2="132" y2="84" stroke="var(--fg)" strokeWidth="1.2" opacity="0.75" />
      <rect x="42" y="84" width="84" height="4.5" rx="1" fill="var(--fg-secondary)" opacity="0.45" />
      <line x1="40" y1="96" x2="124" y2="96" stroke="var(--fg)" strokeWidth="1.2" opacity="0.75" />
      <rect x="42" y="96" width="76" height="4.5" rx="1" fill="var(--fg-secondary)" opacity="0.45" />

      {/* Region 03: Bilingual Column */}
      <rect
        x="152"
        y="64"
        width="110"
        height="48"
        rx="3"
        stroke="var(--fg-secondary)"
        strokeWidth="1.1"
        strokeDasharray="3 2"
      />
      <text x="158" y="75" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="6.8" fontWeight="600">
        R03 · LATIN / INDIC
      </text>
      <rect x="158" y="83" width="96" height="4.5" rx="1.5" fill="var(--fg-secondary)" opacity="0.5" />
      <rect x="158" y="92" width="88" height="4.5" rx="1.5" fill="var(--fg-secondary)" opacity="0.5" />
      <rect x="158" y="101" width="72" height="4.5" rx="1.5" fill="var(--fg-secondary)" opacity="0.5" />

      {/* Region 04: Structured Table Extraction */}
      <rect
        x="34"
        y="122"
        width="228"
        height="40"
        rx="3"
        stroke="var(--signal)"
        strokeWidth="1.1"
      />
      <line x1="34" y1="136" x2="262" y2="136" stroke="var(--border-strong)" strokeWidth="1" />
      <line x1="110" y1="122" x2="110" y2="162" stroke="var(--border-strong)" strokeWidth="1" />
      <line x1="186" y1="122" x2="186" y2="162" stroke="var(--border-strong)" strokeWidth="1" />
      <text x="40" y="131.5" fill="var(--signal)" fontFamily="JetBrains Mono, monospace" fontSize="6.8" fontWeight="600">
        R04 · TABLE
      </text>
      <rect x="42" y="143" width="54" height="4" rx="1.5" fill="var(--fg-tertiary)" opacity="0.55" />
      <rect x="118" y="143" width="54" height="4" rx="1.5" fill="var(--fg-tertiary)" opacity="0.55" />
      <rect x="194" y="143" width="54" height="4" rx="1.5" fill="var(--fg-tertiary)" opacity="0.55" />

      {/* Reading Order Flow Connector to Telemetry Spec */}
      <path
        d="M276 58H302M276 95H302M276 142H302"
        stroke="var(--border-strong)"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />

      {/* Right Pipeline Telemetry Panel */}
      <rect x="302" y="16" width="198" height="158" rx="6" fill="var(--surface)" stroke="var(--border-subtle)" />
      <text x="314" y="34" fill="var(--fg)" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">
        LAYOUT &amp; OCR TELEMETRY
      </text>
      <line x1="302" y1="42" x2="500" y2="42" stroke="var(--border-subtle)" />

      <text x="314" y="59" fill="var(--fg-tertiary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
        PREPROCESS
      </text>
      <text x="314" y="71" fill="var(--fg)" fontFamily="JetBrains Mono, monospace" fontSize="8">
        Deskew + Otsu Threshold
      </text>

      <text x="314" y="92" fill="var(--fg-tertiary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
        COORDINATES (NORM 0..1)
      </text>
      <text x="314" y="104" fill="var(--signal)" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500">
        bbox: [0.06, 0.14, 0.89, 0.16]
      </text>

      <text x="314" y="125" fill="var(--fg-tertiary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
        READING SEQUENCE
      </text>
      <text x="314" y="137" fill="var(--fg)" fontFamily="JetBrains Mono, monospace" fontSize="8">
        R01 -&gt; R02 -&gt; R03 -&gt; R04
      </text>

      <rect x="314" y="148" width="174" height="16" rx="3" fill="var(--surface-elevated)" stroke="var(--border-subtle)" />
      <text x="322" y="158.5" fill="var(--fg-secondary)" fontFamily="JetBrains Mono, monospace" fontSize="7.2">
        14 SCRIPTS · HI · BN · MR · TA · TE · EN
      </text>
    </svg>
  );
}

export function DataPipelineSchematicSVG() {
  const stages = [
    { step: 'STAGE 01', title: 'Raw Corpus', meta: '100,000+ Rows', x: 18 },
    { step: 'STAGE 02', title: 'Curation & QA', meta: 'Dedup · Impute', x: 144 },
    { step: 'STAGE 03', title: 'Ensemble ML', meta: 'RF · XGBoost', x: 270 },
    { step: 'STAGE 04', title: 'Verified Eval', meta: 'Precision / F1', x: 396 },
  ];

  return (
    <svg
      viewBox="0 0 520 190"
      fill="none"
      className="w-full h-auto rounded-xl border border-line bg-surface-elevated"
      role="img"
      aria-label="100,000+ Structured Records Curation and Machine Learning Classification Pipeline Diagram"
    >
      <defs>
        <pattern id="mlGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="520" height="190" fill="url(#mlGrid)" opacity="0.55" />

      {/* Top Pipeline Header */}
      <text x="20" y="27" fill="var(--fg-tertiary)" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="0.08em">
        SUPERVISED CLASSIFICATION &amp; GROUND-TRUTH QA ARCHITECTURE
      </text>

      {/* Stage Nodes & Directional Connectors */}
      {stages.map((st, idx) => (
        <g key={st.step}>
          <rect
            x={st.x}
            y="42"
            width="106"
            height="68"
            rx="6"
            fill="var(--surface)"
            stroke={idx === 3 ? 'var(--signal)' : 'var(--border-strong)'}
            strokeWidth="1.2"
          />
          <text
            x={st.x + 10}
            y="58"
            fill={idx === 3 ? 'var(--signal)' : 'var(--fg-tertiary)'}
            fontFamily="JetBrains Mono, monospace"
            fontSize="7"
            fontWeight="600"
          >
            {st.step}
          </text>
          <text
            x={st.x + 10}
            y="76"
            fill="var(--fg)"
            fontFamily="Inter, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            {st.title}
          </text>
          <text
            x={st.x + 10}
            y="94"
            fill="var(--fg-secondary)"
            fontFamily="JetBrains Mono, monospace"
            fontSize="7.5"
          >
            {st.meta}
          </text>

          {idx < stages.length - 1 && (
            <g>
              <line
                x1={st.x + 106}
                y1="76"
                x2={st.x + 126}
                y2="76"
                stroke="var(--fg-tertiary)"
                strokeWidth="1.2"
              />
              <path
                d={`M${st.x + 122} 72.5L${st.x + 126} 76L${st.x + 122} 79.5`}
                stroke="var(--fg-tertiary)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          )}
        </g>
      ))}

      {/* Bottom Model Benchmark Strip */}
      <rect x="18" y="126" width="484" height="48" rx="6" fill="var(--surface)" stroke="var(--border-subtle)" />
      <text x="30" y="143" fill="var(--fg-tertiary)" fontFamily="JetBrains Mono, monospace" fontSize="7.2">
        BENCHMARKED ALGORITHMS &amp; DOMAIN DEPLOYMENTS
      </text>

      {[
        { label: 'Decision Tree', x: 30, w: 78 },
        { label: 'Random Forest', x: 114, w: 82 },
        { label: 'AdaBoost', x: 202, w: 62 },
        { label: 'XGBoost', x: 270, w: 58 },
        { label: 'Accenture 7-Dataset QA', x: 334, w: 156 },
      ].map((pill) => (
        <g key={pill.label}>
          <rect
            x={pill.x}
            y="150"
            width={pill.w}
            height="16"
            rx="3"
            fill="var(--surface-elevated)"
            stroke="var(--border-subtle)"
          />
          <text
            x={pill.x + pill.w / 2}
            y="160.5"
            textAnchor="middle"
            fill="var(--fg-secondary)"
            fontFamily="JetBrains Mono, monospace"
            fontSize="7.2"
          >
            {pill.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
