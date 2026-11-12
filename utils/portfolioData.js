export const PROFILE = {
  name: 'Adarsh Tiwari',
  role: 'Full-Stack Developer · AI/ML & Document Systems Builder',
  shortRole: 'B.Tech ECE ’25 Graduate · Full-Stack Developer · AI/ML & OCR Builder',
  email: 'tiwariadarsh1804@gmail.com',
  github: 'https://github.com/adarsh180',
  githubHandle: '@adarsh180',
  linkedin: 'https://www.linkedin.com/in/adarsh-tiwari-6a41a6217/',
  portfolioUrl: 'https://adarsh-tiwari-portfolio-sable.vercel.app/',
  semdivUrl: 'https://www.semdiv.com',
  semdivFolioUrl: 'https://www.semdiv.com/app/folio/scan',
  leetcode: 'https://leetcode.com/u/tiwariadarsh1804/',
  hackerrank: 'https://www.hackerrank.com/profile/tiwariadarsh1804',
  certificatesUrl: 'https://drive.google.com/drive/folders/1Mb1DlSn5rkdGfmB6T5D-X-7V_Ibn1J8f?usp=sharing',
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'SEMDIV — Browser Office, PDF & Workspace Suite',
    description:
      'Flagship full-stack web project uniting local-first browser tools: Scribe (Docs & LaTeX), Folio (PDF & 14-language OCR), Gridora (Sheets & GST tables), Sparkdeck, Pressa, FluxCut (WebCodecs MP4 editor), SHA-256 Sign & Encrypted Drive.',
    image: '/images/semdiv-suite.png',
    tags: ['Next.js', 'TypeScript', 'WebAssembly', 'PostgreSQL', 'WebCodecs'],
    demoLink: 'https://www.semdiv.com',
    githubLink: 'https://github.com/adarsh180',
    codeLabel: 'GitHub',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 2,
    title: 'Folio Scan — PDF Region Annotation & 14-Language Indian OCR',
    description:
      'On-device document scanner, PDF region annotator, and multilingual OCR project supporting Hindi (Devanagari), Bengali, Marathi, Tamil, Telugu, and English with normalized 2D bounding boxes, perspective deskewing, and reading-order extraction.',
    image: '/images/semdiv-folio.webp',
    tags: ['OCR & Vision', 'Bounding Boxes', 'Hindi / Devanagari', 'PDF Engine', 'TypeScript'],
    demoLink: 'https://www.semdiv.com/app/folio/scan',
    githubLink: 'https://github.com/adarsh180',
    codeLabel: 'GitHub',
    category: 'ai-ml',
    featured: true,
  },
  {
    id: 3,
    title: 'Arogya Sahayak — Medical AI Assistant',
    description:
      'Intelligent medical AI web application providing structured health assistance, symptom analysis, and accessible triage guidance using modern AI workflows.',
    image: '/images/image.png',
    tags: ['AI/ML', 'Healthcare', 'React', 'Medical Tech'],
    demoLink: 'https://arogya-sahayakl.netlify.app',
    githubLink: 'https://github.com/adarsh180/arogya-sahayak',
    category: 'ai-ml',
    featured: true,
  },
  {
    id: 4,
    title: 'AccidentAware — AI-Powered Safety E-commerce',
    description:
      'Full-stack smart-helmet safety and e-commerce platform featuring accident detection workflows, emergency response integration, PostgreSQL backend, and Razorpay checkout.',
    image: '/images/accident-website.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Razorpay', 'AI Safety'],
    demoLink: 'https://accident-detectionl.vercel.app/',
    githubLink: 'https://github.com/adarsh180/accidentaware',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 5,
    title: 'Malware Detection using Machine Learning (100K+ Dataset)',
    description:
      'Large-scale dataset curation and ML classification pipeline evaluating Decision Tree, Random Forest, AdaBoost, XGBoost, and Linear Regression across 100,000+ structured records.',
    image: '/images/malware-detection.png',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Data Curation'],
    demoLink: '',
    githubLink: 'https://github.com/adarsh180/Malware_Detection_using_Machine_Learning-main',
    category: 'ai-ml',
    featured: false,
  },
  {
    id: 6,
    title: 'Movie Review & Discovery App',
    description:
      'Dynamic media cataloging web application for searching, reviewing, and filtering movies and series by genre with Material UI and custom React hooks.',
    image: '/images/movie-review-webisite.png',
    tags: ['React', 'Axios', 'Material UI', 'Custom Hooks'],
    demoLink: 'https://adarsh-react-movie.netlify.app/',
    githubLink: 'https://github.com/adarsh180/movie-react-app',
    category: 'frontend',
    featured: false,
  },
  {
    id: 7,
    title: 'Interactive Developer Portfolio',
    description:
      'Responsive WebGL shader-backed developer portfolio showcasing full-stack projects, AI/ML pipelines, skills, and achievements with smooth Framer Motion transitions.',
    image: '/images/portfolio-website.png',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'WebGL'],
    demoLink: 'https://adarsh-tiwari-portfolio-sable.vercel.app/',
    githubLink: 'https://github.com/adarsh180/portfolio-2',
    category: 'frontend',
    featured: false,
  },
];

export const WORK_EXPERIENCE = [
  {
    title: 'Data Analytics & Visualization Simulation',
    company: 'Accenture North America (Remote)',
    period: 'Completed',
    link: '',
    description:
      'Cleaned, standardized, modeled, and analyzed 7 raw multi-source datasets to uncover content performance trends, flag data quality issues, and support strategic decisions.',
  },
  {
    title: 'Full-Stack, Document OCR & AI/ML Project Development',
    company: 'Personal & Open-Source Portfolio (@adarsh180)',
    period: 'Hands-On Engineering',
    link: 'https://github.com/adarsh180',
    description:
      'Built and deployed end-to-end web, OCR, and AI projects including SEMDIV & Folio Scan (14-language Indian OCR, bounding-box PDF markup & browser office tools), Arogya Sahayak (Medical AI), AccidentAware (Next.js + PostgreSQL + Razorpay), and 100K+ record ML pipelines.',
  },
];

export const CERTIFICATIONS_LIST = [
  {
    title: 'Smart India Hackathon (SIH) 2023 — Team Lead',
    org: 'Government of India',
    year: '2023',
    desc: 'Qualified and led the team in the 1st Round of Smart India Hackathon 2023 through structured engineering and problem documentation.',
  },
  {
    title: 'AWS AI/ML Specialization',
    org: 'Amazon Web Services',
    year: '2023',
    desc: 'Built, trained, and deployed scalable machine learning workflows and dataset pipelines using AWS SageMaker.',
  },
  {
    title: 'Introduction to SAP S/4HANA Development',
    org: 'Techno India University',
    year: '2022',
    desc: 'Conducted by Prof. Rajdeep Ghatak at Techno India University covering enterprise data workflows and ERP development.',
  },
];

export const EDUCATION_LIST = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'Techno India University, Kolkata',
    period: 'Oct 2021 – Aug 2025',
    description: 'Graduated with a CGPA of 7.23 / 10. Specialized in software engineering, full-stack web systems, and AI/ML.',
  },
  {
    degree: 'Higher Secondary — ISC (Class XII)',
    institution: "St. Thomas' Church School",
    period: 'Apr 2018 – Jul 2020',
    description: 'Completed Higher Secondary Certificate (ISC) with 66%.',
  },
  {
    degree: 'Secondary — CBSE (Class X)',
    institution: 'Indira Gandhi Memorial High School',
    period: 'Apr 2016 – May 2018',
    description: 'Completed Secondary School Examination (CBSE) with 70%.',
  },
];
