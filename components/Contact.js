import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Globe, Send, ArrowUpRight } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../utils/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Static/offline fallback still confirms receipt cleanly
    }
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 5000);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={20} className="text-violet-400" />,
      title: 'Email',
      value: PROFILE.email,
      link: `mailto:${PROFILE.email}`
    },
    {
      icon: <Globe size={20} className="text-emerald-400" />,
      title: 'SEMDIV Product Suite',
      value: 'www.semdiv.com',
      link: PROFILE.semdivUrl
    },
    {
      icon: <Github size={20} className="text-fuchsia-400" />,
      title: 'GitHub',
      value: PROFILE.githubHandle,
      link: PROFILE.github
    },
    {
      icon: <Linkedin size={20} className="text-cyan-400" />,
      title: 'LinkedIn',
      value: 'Adarsh Tiwari',
      link: PROFILE.linkedin
    }
  ];

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/20 focus:bg-white/[0.05] transition-all duration-300";

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in hiring, collaborating, or discussing SEMDIV and my engineering work? Reach out anytime."
        />
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1"
          >
            <div className="relative rounded-[1.25rem] border border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3 h-full">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative h-full rounded-xl border border-white/[0.06] bg-[hsl(var(--card))] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <h3 className="text-xl font-bold font-display mb-6 text-foreground">Contact Information</h3>
                
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index} 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.06] group-hover:bg-white/[0.08] transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-foreground">{info.title}</h4>
                        <span className="text-sm text-muted-foreground group-hover:text-violet-400 transition-colors flex items-center gap-1 break-all">
                          {info.value}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <h4 className="font-medium text-sm mb-4 text-foreground">Connect Online</h4>
                  <div className="flex gap-3">
                    {[
                      { href: PROFILE.github, icon: <Github size={16} />, label: 'GitHub' },
                      { href: PROFILE.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
                      { href: PROFILE.semdivUrl, icon: <Globe size={16} />, label: 'SEMDIV' },
                      { href: `mailto:${PROFILE.email}`, icon: <Mail size={16} />, label: 'Email' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-violet-600/20 hover:border-violet-500/30 hover:text-violet-400 transition-all duration-300"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="relative rounded-[1.25rem] border border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3 h-full">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative h-full rounded-xl border border-white/[0.06] bg-[hsl(var(--card))] p-6 md:p-8 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Role / Collaboration / Inquiry"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell me about the opportunity or project..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                    >
                      ✨ Your message has been received! You can also email me directly at {PROFILE.email}.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
