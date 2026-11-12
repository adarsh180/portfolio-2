import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import {
  PhysicsWallahMark,
  LeetCodeMark,
  HackerRankMark,
  CredentialVaultMark,
} from './ui/BrandIcons';
import { PROFILE } from '../utils/portfolioData';

const RECOGNITION_ITEMS = [
  {
    code: 'REC-01',
    period: 'Till Nov 2025',
    icon: <PhysicsWallahMark className="w-5 h-5" />,
    title: 'PW Campus Ambassador',
    issuer: 'Physics Wallah (PW)',
    description:
      'Certified Campus Ambassador recognized by PW Project Leadership (Mr. Balajee Singh) for peer mentoring, student leadership, and bilingual outreach.',
    link: PROFILE.pwCertificateUrl,
    linkLabel: 'Verified Certificate',
    verified: true,
  },
  {
    code: 'REC-02',
    period: 'Algorithmic Practice',
    icon: <LeetCodeMark className="w-5 h-5" />,
    title: 'LeetCode Profile',
    issuer: '@tiwariadarsh1804',
    description:
      'Consistent algorithmic problem-solving across arrays, trees, dynamic programming, graph traversal, and complexity optimization.',
    link: PROFILE.leetcode,
    linkLabel: 'Open LeetCode',
    verified: false,
  },
  {
    code: 'REC-03',
    period: 'Domain Proficiency',
    icon: <HackerRankMark className="w-5 h-5" />,
    title: 'HackerRank Profile',
    issuer: '@tiwariadarsh1804',
    description:
      'Verified programming assessments across C++, Python, Java, SQL queries, and core data structures.',
    link: PROFILE.hackerrank,
    linkLabel: 'Open HackerRank',
    verified: false,
  },
  {
    code: 'REC-04',
    period: '2022 – 2025',
    icon: <CredentialVaultMark className="w-5 h-5" />,
    title: 'Credential Repository',
    issuer: 'SIH 2023 · AWS · Accenture · SAP',
    description:
      'Complete folder of verified certificates including Smart India Hackathon 2023 Team Lead, AWS AI/ML SageMaker, Accenture Data Analytics, and SAP S/4HANA.',
    link: PROFILE.certificatesUrl,
    linkLabel: 'Browse All Credentials',
    verified: true,
  },
];

export default function Achievements() {
  return (
    <section id="recognition" className="section-editorial">
      <div className="container-editorial">
        <SectionHeading
          indexLabel="05 / Recognition"
          title="Leadership, Coding Profiles & Credentials"
          subtitle="Verified campus leadership with Physics Wallah, competitive programming profiles, and industry certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {RECOGNITION_ITEMS.map((item) => (
            <article
              key={item.code}
              className="arch-card-interactive p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-10 h-10 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg">
                    {item.icon}
                  </div>
                  <span
                    className={`font-mono text-[11px] ${
                      item.verified ? 'text-signal font-medium' : 'text-fg-tertiary'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <div className="font-mono text-xs text-fg-tertiary mb-1">{item.issuer}</div>
                <h3 className="text-base sm:text-lg font-semibold tracking-[-0.02em] text-fg mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-fg-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-line mt-auto">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-fg hover:text-signal transition-colors group"
                >
                  <span>{item.linkLabel}</span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
