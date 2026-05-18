import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Facebook,
  Github,
  Headphones,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  PenTool,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Timer,
  Twitter,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Projects', 'projects'],
  ['Testimonials', 'testimonials'],
  ['FAQ', 'faq'],
  ['Contact', 'contact'],
];

const services = [
  {
    title: 'Web Development',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    copy: 'High-performance websites and web apps built with modern architecture, responsive layouts, and clean user journeys.',
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
    copy: 'Polished iOS and Android experiences designed for speed, usability, and long-term maintainability.',
  },
  {
    title: 'UI/UX Design',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80',
    copy: 'Research-led interfaces, conversion-focused flows, and premium visual systems that make products easier to trust.',
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    copy: 'Cloud-ready infrastructure, migration support, hosting, automation, and scalable deployment workflows.',
  },
  {
    title: 'IT Consulting',
    icon: BriefcaseBusiness,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    copy: 'Practical technology strategy for startups and growing teams that need clarity before investing in systems.',
  },
  {
    title: 'Software Development',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    copy: 'Custom platforms, internal tools, integrations, and business software shaped around real operational needs.',
  },
  {
    title: 'Digital Transformation',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    copy: 'Process modernisation, automation, data-enabled workflows, and digital products that help teams move faster.',
  },
  {
    title: 'Maintenance & Support',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    copy: 'Reliable monitoring, updates, fixes, optimisation, and technical support to keep your systems running smoothly.',
  },
];

const heroImage =
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85';

const projects = [
  {
    title: 'Startup SaaS Platform',
    tag: 'Web App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    copy: 'A scalable subscription platform with onboarding, analytics, billing flows, and responsive dashboards.',
  },
  {
    title: 'Retail Operations Portal',
    tag: 'Software',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    copy: 'A secure internal portal for inventory, order visibility, team workflows, and management reporting.',
  },
  {
    title: 'Healthcare Booking App',
    tag: 'Mobile',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    copy: 'A mobile-first appointment experience with elegant scheduling, notifications, and user-friendly account tools.',
  },
];

const aboutCards = [
  {
    title: 'Mission',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80',
    copy: 'To deliver practical, secure, and beautifully built IT solutions that help clients move faster with less complexity.',
  },
  {
    title: 'Vision',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    copy: 'To become a trusted UK technology partner known for premium digital craftsmanship and reliable long-term support.',
  },
  {
    title: 'Trust',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    copy: 'Clear communication, modern engineering standards, accessible design, and business-first thinking guide every engagement.',
  },
];

const testimonials = [
  {
    quote:
      'ANU SOLS LTD brought clarity to our product roadmap and delivered a clean web platform that our team could scale with confidence.',
    name: 'Priya N.',
    role: 'Founder, SaaS Startup',
  },
  {
    quote:
      'Professional, responsive, and technically sharp. The project felt organised from discovery through launch.',
    name: 'James W.',
    role: 'Director, UK Retail Business',
  },
  {
    quote:
      'Their design-first approach helped us modernise our customer experience without overcomplicating the technology.',
    name: 'Amina K.',
    role: 'Operations Lead',
  },
];

const faqs = [
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. ANU SOLS LTD supports early-stage founders, small businesses, and established teams that need practical, scalable IT solutions.',
  },
  {
    q: 'Can you support clients outside the UK?',
    a: 'Yes. The company is based in Watford, England and can collaborate remotely with international clients across time zones.',
  },
  {
    q: 'What happens after launch?',
    a: 'Projects can include maintenance, support, updates, optimisation, and ongoing technical guidance so your product stays dependable.',
  },
  {
    q: 'Can you redesign an existing website or app?',
    a: 'Absolutely. ANU SOLS LTD can audit your current experience, improve UX, modernise the interface, and rebuild key technical foundations.',
  },
];

const metrics = [
  ['8+', 'Core service areas'],
  ['24/7', 'Support mindset'],
  ['100%', 'Client-focused delivery'],
  ['UK', 'Based in Watford'],
];

const pageTitles = {
  about: {
    eyebrow: 'About ANU SOLS LTD',
    title: 'A focused technology partner for dependable digital growth.',
    copy: 'Based in Watford, England, ANU SOLS LTD helps organisations turn ideas, operations, and customer experiences into polished digital products.',
  },
  services: {
    eyebrow: 'Services',
    title: 'Technology services built for modern businesses.',
    copy: 'Explore the core services ANU SOLS LTD provides for startups, small businesses, UK companies, and international clients.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Project examples with a polished technology focus.',
    copy: 'A showcase of sample digital products, platforms, and operational tools that reflect the company’s delivery style.',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Client confidence through clear delivery.',
    copy: 'Professional feedback examples designed to build credibility and communicate the experience clients can expect.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Answers before the first conversation.',
    copy: 'Quick answers to common questions about working with ANU SOLS LTD.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your next digital solution.',
    copy: 'Send an enquiry or contact ANU SOLS LTD directly to discuss your project, system, website, or app.',
  },
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'How ANU SOLS LTD handles website enquiries.',
    copy: 'A simple privacy policy for visitors who submit enquiries, subscribe to updates, or contact the company.',
  },
};

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return [dark, setDark];
}

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', ...navItems.map(([, id]) => id), 'privacy'];

  return validPages.includes(hash) ? hash : 'home';
}

function usePage() {
  const [activePage, setActivePage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return activePage;
}

function Section({ id, eyebrow, title, copy, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {(eyebrow || title || copy) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {copy && <p className="section-copy">{copy}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function PageShell({ page, children }) {
  const meta = pageTitles[page];

  return (
    <div className="pt-28">
      <section className="border-b border-line bg-white py-16 dark:border-white/10 dark:bg-[#06101f]">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <p className="eyebrow">{meta.eyebrow}</p>
          <h1 className="mx-auto mt-3 max-w-4xl font-display text-4xl font-black leading-tight tracking-normal text-ink dark:text-white sm:text-6xl">
            {meta.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{meta.copy}</p>
        </div>
      </section>
      <div className="bg-white dark:bg-[#06101f]">{children}</div>
    </div>
  );
}

function StandalonePage({ page }) {
  if (page === 'about') {
    return (
      <PageShell page="about">
        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutCards.map(({ title, image, copy }, index) => (
              <Reveal key={title} delay={index * 0.08} className="info-card">
                <div className="about-image-wrap">
                  <img src={image} alt={`${title} at ANU SOLS LTD`} className="about-image" loading="lazy" />
                </div>
                <BadgeCheck className="mb-5 text-azure" size={28} />
                <h2 className="card-title">{title}</h2>
                <p className="card-copy">{copy}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      </PageShell>
    );
  }

  if (page === 'services') {
    return (
      <PageShell page="services">
        <Section>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, icon: Icon, image, copy }, index) => (
              <Reveal key={title} delay={(index % 4) * 0.06} className="service-card">
                <div className="service-image-wrap">
                  <img src={image} alt={`${title} service`} className="service-image" loading="lazy" />
                  <div className="service-image-overlay" />
                </div>
                <div className="p-6">
                  <div className="service-icon">
                    <Icon size={25} />
                  </div>
                  <h2 className="card-title">{title}</h2>
                  <p className="card-copy">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </PageShell>
    );
  }

  if (page === 'projects') {
    return (
      <PageShell page="projects">
        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08} className="project-card">
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title} project`} className="project-image" loading="lazy" />
                  <span>{project.tag}</span>
                </div>
                <div className="p-6">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-copy">{project.copy}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-azure">
                    Discuss similar work <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </PageShell>
    );
  }

  if (page === 'testimonials') {
    return (
      <PageShell page="testimonials">
        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08} className="testimonial-card">
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">"{item.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-azure to-mint font-black text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </PageShell>
    );
  }

  if (page === 'faq') {
    return (
      <PageShell page="faq">
        <Section>
          <div className="mx-auto max-w-4xl divide-y divide-line overflow-hidden rounded-lg border border-line bg-white shadow-soft dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                  {faq.q}
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} />
                </summary>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </PageShell>
    );
  }

  if (page === 'privacy') {
    return (
      <PageShell page="privacy">
        <Section>
          <div className="mx-auto max-w-4xl rounded-lg border border-line bg-white p-7 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-10">
            {[
              ['Information we collect', 'When you submit a form, ANU SOLS LTD may collect your name, email address, phone number, service interest, and project message.'],
              ['How we use information', 'Your details are used to respond to enquiries, discuss services, provide project guidance, and improve communication with prospective clients.'],
              ['Data sharing', 'ANU SOLS LTD does not sell personal information. Details may only be shared where required for service delivery, legal compliance, or trusted operational support.'],
              ['Contact', 'For privacy questions, contact ANU SOLS LTD at anuraagasree000@gmail.com or +44 7342226821.'],
            ].map(([title, copy]) => (
              <div key={title} className="border-b border-line py-6 last:border-b-0 dark:border-white/10">
                <h2 className="card-title">{title}</h2>
                <p className="card-copy">{copy}</p>
              </div>
            ))}
          </div>
        </Section>
      </PageShell>
    );
  }

  return (
    <PageShell page="contact">
      <Section>
        <ContactContent />
      </Section>
    </PageShell>
  );
}

function ContactContent() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]">
      <Reveal className="rounded-lg border border-line bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-8">
        <form className="grid gap-4" aria-label="Contact form">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input" type="text" placeholder="Full name" aria-label="Full name" required />
            <input className="input" type="email" placeholder="Email address" aria-label="Email address" required />
          </div>
          <input className="input" type="tel" placeholder="Phone number" aria-label="Phone number" />
          <select className="input" aria-label="Service interest" defaultValue="">
            <option value="" disabled>Service interest</option>
            {services.map((service) => <option key={service.title}>{service.title}</option>)}
          </select>
          <textarea className="input min-h-36 resize-y" placeholder="Tell us about your project" aria-label="Project message" required />
          <button className="primary-button justify-center" type="submit">
            Send Enquiry <ArrowRight size={18} />
          </button>
        </form>
      </Reveal>

      <Reveal delay={0.1} className="grid gap-5">
        <div className="info-card">
          <h2 className="card-title">Contact Details</h2>
          <div className="mt-6 grid gap-4">
            <a className="contact-row" href="tel:+447342226821"><Phone size={20} /> +44 7342226821</a>
            <a className="contact-row" href="mailto:anuraagasree000@gmail.com"><Mail size={20} /> anuraagasree000@gmail.com</a>
            <p className="contact-row"><MapPin size={20} /> Watford, England</p>
          </div>
          <div className="mt-7 flex gap-3" aria-label="Social media links">
            {[Linkedin, Twitter, Facebook, Github].map((Icon, index) => (
              <a key={index} href="#contact" className="icon-button" aria-label="Social profile placeholder">
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [dark, setDark] = useTheme();
  const activePage = usePage();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-ink antialiased transition-colors duration-300 dark:bg-[#06101f] dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#06101f]/85">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu} aria-label="ANU SOLS LTD home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-sm font-black text-white shadow-glow dark:bg-white dark:text-ink">
              AS
            </span>
            <span>
              <span className="block font-display text-lg font-extrabold tracking-normal">ANU SOLS LTD</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-azure">IT Services</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`nav-link ${activePage === id ? 'nav-link-active' : ''}`}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="icon-button" type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle dark mode">
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <a href="#contact" className="hidden rounded-lg bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy dark:bg-white dark:text-ink sm:inline-flex">
              Book a Consultation
            </a>
            <button className="icon-button lg:hidden" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation menu">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-line bg-white px-5 py-5 shadow-soft dark:border-white/10 dark:bg-[#07162f] lg:hidden">
            <div className="grid gap-3">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="rounded-lg px-3 py-3 text-sm font-bold hover:bg-cloud dark:hover:bg-white/10" onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {activePage === 'home' ? (
          <>
        <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-36">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(31,122,236,.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(39,211,162,.20),transparent_28%),linear-gradient(180deg,#ffffff_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(31,122,236,.28),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(39,211,162,.18),transparent_28%),linear-gradient(180deg,#06101f_0%,#07162f_100%)]" />
          <div className="absolute inset-x-0 top-20 -z-10 h-[520px] bg-hero-grid bg-[length:36px_36px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24">
            <Reveal>
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-azure/20 bg-white/80 px-4 py-2 text-sm font-bold text-navy shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white">
                  <Sparkles size={17} className="text-azure" />
                  Watford-based IT services for ambitious businesses
                </div>
                <h1 className="font-display text-4xl font-black leading-[1.05] tracking-normal text-ink dark:text-white sm:text-6xl lg:text-7xl">
                  Premium digital solutions for modern companies.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-200">
                  ANU SOLS LTD designs and develops secure, scalable, and elegant technology for startups, small businesses, UK companies, and international teams.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#contact" className="primary-button">
                    Get Started <ArrowRight size={19} />
                  </a>
                  <a href="#services" className="secondary-button">
                    Contact Us <Phone size={18} />
                  </a>
                </div>
                <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                  {metrics.map(([value, label]) => (
                    <div key={label} className="rounded-lg border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
                      <p className="font-display text-2xl font-black text-azure">{value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative">
              <div className="tech-panel">
                <div className="hero-image-wrap">
                  <img src={heroImage} alt="Technology team collaborating on digital solutions" className="hero-image" />
                  <div className="hero-image-badge">
                    <ShieldCheck size={18} />
                    Secure digital delivery
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-bold text-mint">Digital Delivery System</p>
                    <p className="mt-1 text-2xl font-black text-white">Strategy to launch</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/10 text-mint">
                    <Zap size={24} />
                  </div>
                </div>

                <div className="mt-7 grid gap-4">
                  {['Discovery & UX planning', 'Secure architecture', 'Responsive development', 'Launch, support & growth'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.25 + index * 0.1 }}
                      className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/10 p-4"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-mint/15 text-mint">
                        <CheckCircle2 size={18} />
                      </span>
                      <span className="font-semibold text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="About ANU SOLS LTD"
          title="A focused technology partner for dependable digital growth."
          copy="Based in Watford, England, ANU SOLS LTD helps organisations turn ideas, operations, and customer experiences into polished digital products."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutCards.map(({ title, image, copy }, index) => (
              <Reveal key={title} delay={index * 0.08} className="info-card">
                <div className="about-image-wrap">
                  <img src={image} alt={`${title} at ANU SOLS LTD`} className="about-image" loading="lazy" />
                </div>
                <BadgeCheck className="mb-5 text-azure" size={28} />
                <h3 className="card-title">{title}</h3>
                <p className="card-copy">{copy}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="Complete IT services presented with clarity and care."
          copy="From product design to cloud-ready engineering, each service is shaped to support measurable business outcomes."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, icon: Icon, image, copy }, index) => (
              <Reveal key={title} delay={(index % 4) * 0.06} className="service-card">
                <div className="service-image-wrap">
                  <img src={image} alt={`${title} service`} className="service-image" loading="lazy" />
                  <div className="service-image-overlay" />
                </div>
                <div className="p-6">
                  <div className="service-icon">
                    <Icon size={25} />
                  </div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-copy">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="why" eyebrow="Why Choose Us" title="Reliable delivery without the corporate theatre." copy="Clients choose ANU SOLS LTD for focused execution, modern technology, and a calm, client-friendly process.">
          <div className="grid gap-5 lg:grid-cols-5">
            {[
              [Layers3, 'Experienced Solutions'],
              [MessageCircle, 'Client-Centric Approach'],
              [ShieldCheck, 'Secure & Scalable Technology'],
              [Timer, 'Fast Delivery'],
              [Headphones, '24/7 Support'],
            ].map(([Icon, title], index) => (
              <Reveal key={title} delay={index * 0.05} className="choose-card">
                <Icon size={28} className="text-azure" />
                <h3 className="mt-5 text-lg font-black">{title}</h3>
              </Reveal>
            ))}
          </div>
        </Section>

        <section className="border-y border-line bg-white py-16 text-ink dark:border-white/10 dark:bg-[#06101f] dark:text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div>
              <p className="eyebrow text-mint">Conversion-focused CTA</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-normal sm:text-4xl">Have an idea, website, app, or system that needs building?</h2>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">Start with a focused consultation and leave with practical next steps for design, technology, budget, and delivery.</p>
            </div>
            <a href="#contact" className="rounded-lg bg-ink px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 dark:bg-white dark:text-ink">
              Request a Project Review
            </a>
          </div>
        </section>

        <Section
          id="projects"
          eyebrow="Portfolio"
          title="Project concepts that show the calibre of work."
          copy="These sample showcases reflect the kind of digital products ANU SOLS LTD can design, build, and support."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08} className="project-card group">
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title} project`} className="project-image" loading="lazy" />
                  <span>{project.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-copy">{project.copy}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-azure">
                    Discuss similar work <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="testimonials"
          eyebrow="Testimonials"
          title="Professional relationships built on trust."
          copy="Realistic client feedback style for a polished, credibility-building launch website."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08} className="testimonial-card">
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">"{item.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-azure to-mint font-black text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="faq" eyebrow="FAQ" title="Clear answers before the first conversation." copy="A simple FAQ helps reduce friction and makes the first enquiry easier.">
          <div className="mx-auto max-w-4xl divide-y divide-line overflow-hidden rounded-lg border border-line bg-white shadow-soft dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                  {faq.q}
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} />
                </summary>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 rounded-lg border border-line bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-10 lg:grid-cols-[1fr_.9fr]">
              <div>
                <p className="eyebrow">Newsletter</p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-normal">Get practical digital growth notes.</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Receive occasional insights on product design, web performance, cloud readiness, and IT decision-making.</p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row" aria-label="Newsletter subscription">
                <input className="input" type="email" placeholder="Business email" aria-label="Business email" required />
                <button className="primary-button justify-center" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        <Section id="contact" eyebrow="Contact" title="Let’s talk about your next digital solution." copy="Use the form or contact ANU SOLS LTD directly. The fastest route to clarity is a simple first conversation.">
          <ContactContent />
        </Section>
          </>
        ) : (
          <StandalonePage page={activePage} />
        )}
      </main>

      <a href="#contact" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-lg bg-azure px-4 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5" aria-label="Open live chat placeholder">
        <MessageCircle size={18} />
        Live Chat
      </a>

      <footer className="border-t border-line bg-ink py-12 text-white dark:border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:px-8">
          <div>
            <p className="font-display text-2xl font-black">ANU SOLS LTD</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">Modern IT services, software development, design, cloud solutions, and reliable support for businesses that want technology to feel clear and dependable.</p>
          </div>
          <div>
            <p className="font-black">Quick Links</p>
            <div className="mt-4 grid gap-2">
              {navItems.slice(0, 5).map(([label, id]) => <a key={id} className="footer-link" href={`#${id}`}>{label}</a>)}
              <a className="footer-link" href="#privacy">Privacy Policy</a>
            </div>
          </div>
          <div>
            <p className="font-black">Contact</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <a href="tel:+447342226821">+44 7342226821</a>
              <a href="mailto:anuraagasree000@gmail.com">anuraagasree000@gmail.com</a>
              <span>Watford, England</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/60 sm:px-6 lg:px-8">
          Copyright © {currentYear} ANU SOLS LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
