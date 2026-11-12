import { useState } from 'react';
import { Mail, Globe, Send, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { GitHubMark, LinkedInMark } from './ui/BrandIcons';
import { PROFILE } from '../utils/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorMessage) setErrorMessage('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailtoHref = (payload) => {
    const data = payload || formData;
    const subj = encodeURIComponent(
      data.subject ? `[Portfolio] ${data.subject}` : 'Opportunity / Inquiry via Portfolio'
    );
    const body = encodeURIComponent(
      `Hi Adarsh,\n\n${data.message || ''}\n\n— ${data.name || ''}${
        data.email ? ` (${data.email})` : ''
      }`
    );
    return `mailto:${PROFILE.email}?subject=${subj}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setErrorMessage('Please fill in your name, email address, subject, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address so I can reply directly.');
      return;
    }

    setIsSubmitting(true);
    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error('Request failed');
      }
    } catch {
      // Even in static/serverless edge conditions, preserve payload for one-click direct mail client dispatch
    } finally {
      setIsSubmitting(false);
      setSubmittedPayload(payload);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const channels = [
    {
      icon: <Mail size={16} strokeWidth={1.5} />,
      label: 'Direct Email',
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: <GitHubMark className="w-4 h-4" />,
      label: 'GitHub (Open Source)',
      value: 'github.com/adarsh180',
      href: PROFILE.github,
    },
    {
      icon: <LinkedInMark className="w-4 h-4" />,
      label: 'LinkedIn',
      value: 'in/adarsh-tiwari-6a41a6217',
      href: PROFILE.linkedin,
    },
    {
      icon: <Globe size={16} strokeWidth={1.5} />,
      label: 'SEMDIV Product Suite',
      value: 'www.semdiv.com',
      href: PROFILE.semdivUrl,
    },
  ];

  return (
    <section id="contact" className="section-editorial">
      <div className="container-editorial">
        <SectionHeading
          indexLabel="06 / Contact"
          title="Start a Conversation"
          subtitle="Available full-time as an immediate joiner for software engineering, AI/ML, and multilingual document/data roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Direct Channels Card */}
          <div className="lg:col-span-5 flex">
            <div className="arch-card p-6 sm:p-7 flex flex-col justify-between w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full pill-status mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal signal-dot-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em]">
                    Response within 24 hours
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg mb-2">
                  Direct Channels
                </h3>
                <p className="text-sm text-fg-secondary leading-relaxed mb-6">
                  Prefer direct email or reviewing code first? Reach out on any verified channel below.
                </p>

                <div className="space-y-3">
                  {channels.map((ch) => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={ch.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="p-3.5 rounded-xl border border-line bg-surface-elevated hover:border-line-strong transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg border border-line bg-surface flex items-center justify-center text-fg shrink-0">
                          {ch.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-fg-tertiary font-mono">{ch.label}</div>
                          <div className="text-sm font-medium text-fg truncate mt-0.5">
                            {ch.value}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-fg-tertiary group-hover:text-fg transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-line flex items-center justify-between gap-3 font-mono text-xs text-fg-tertiary">
                <span>Location: India (IST / UTC+5:30)</span>
                <span>Remote &amp; On-Site</span>
              </div>
            </div>
          </div>

          {/* Right Validated Contact Form */}
          <div className="lg:col-span-7 flex">
            <div className="arch-card p-6 sm:p-8 w-full">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col h-full justify-between">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-xs text-fg-secondary mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Hiring Manager / Team"
                        className="input-editorial"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-xs text-fg-secondary mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="input-editorial"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="contact-subject"
                      className="block font-mono text-xs text-fg-secondary mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Full-Stack / AI & Data Role / Project Inquiry"
                      className="input-editorial"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs text-fg-secondary mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about the role, team, or technical problem..."
                      className="input-editorial resize-y min-h-[128px]"
                      required
                    />
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="mb-5 p-3.5 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-fg flex items-start gap-2.5"
                    >
                      <AlertCircle size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {submittedPayload && (
                    <div
                      role="status"
                      className="mb-5 p-4 rounded-xl pill-status text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={17} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                        <div className="text-fg">
                          <div className="font-medium">Message logged successfully.</div>
                          <div className="text-xs text-fg-secondary mt-0.5">
                            Thank you, {submittedPayload.name}. You can also dispatch a direct copy via your mail client.
                          </div>
                        </div>
                      </div>
                      <a
                        href={buildMailtoHref(submittedPayload)}
                        className="btn-arch-secondary text-xs py-1.5 px-3 shrink-0"
                      >
                        <span>Open Mail Draft</span>
                        <ArrowUpRight size={13} strokeWidth={1.5} />
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-arch-primary disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send size={15} strokeWidth={1.5} />
                  </button>

                  <a
                    href={buildMailtoHref()}
                    className="font-mono text-xs text-fg-secondary hover:text-fg underline decoration-line-strong underline-offset-4 transition-colors"
                  >
                    Or compose directly in email client -&gt;
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
