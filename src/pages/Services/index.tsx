import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, TrendingUp, Cloud, Layers, Shield, CheckCircle2, ChevronDown, Zap, type LucideIcon } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionLabel } from '../../components/common/SectionLabel';
import { MarketingServicesSlider } from '../../components/sections/MarketingServicesSlider';
import { SERVICES } from '../../constants';

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  TrendingUp,
  Cloud,
  Layers,
  Shield,
};

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', desc: 'Deep-dive into your business goals, market, and technology stack to define the perfect solution roadmap.' },
  { step: '02', title: 'Design & Architecture', desc: 'Create pixel-perfect UI/UX designs and robust system architecture tailored to your scale requirements.' },
  { step: '03', title: 'Agile Development', desc: 'Iterative sprints with transparent progress, regular demos, and continuous integration for rapid delivery.' },
  { step: '04', title: 'Launch & Support', desc: 'Seamless deployment, rigorous QA, and long-term maintenance to keep your product performing at peak.' },
];

function HeroBlock() {
  const scrollToGrid = () => {
    const el = document.getElementById('services-grid-section');
    if (el) {
      const headerHeight = 73;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#f4f7f9] pt-32 pb-24 px-6 lg:px-16 overflow-hidden border-b border-[#e2e2e5]">
      {/* Background Decorative Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,109,61,0.08)_0%,_transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,181,224,0.08)_0%,_transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#006d3d_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />
      </div>

      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 max-w-2xl"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#006d3d]/10 px-4 py-1.5 border border-[#006d3d]/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006d3d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006d3d]"></span>
              </span>
              <span className="font-sans text-xs font-bold tracking-wider text-[#006d3d] uppercase">
                OUR SERVICES & ECOSYSTEMS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl font-bold leading-[1.15] tracking-[-0.5px] text-[#00273d] lg:text-5xl"
            >
              Strategic Technological{' '}
              <span className="bg-gradient-to-r from-[#006d3d] via-[#00874c] to-[#00b5e0] bg-clip-text text-transparent">
                Ecosystems
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-lg text-[#42474d] leading-relaxed max-w-xl"
            >
              From concept to launch and beyond — we engineer high-performance mobile apps, web portals, SaaS platforms, and digital marketing strategies that scale with your ambitions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button variant="primary" size="lg" className="shadow-lg shadow-[#006d3d]/20 hover:scale-[1.02] transition-transform" asChild>
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight size={18} className="ml-1.5" />
                </Link>
              </Button>
              
              <button
                type="button"
                onClick={scrollToGrid}
                className="inline-flex items-center gap-2 rounded-md bg-white border border-[#e2e2e5] px-6 py-3.5 font-sans text-sm font-semibold text-[#00273d] shadow-sm hover:border-[#006d3d]/40 hover:bg-[#f4f7f9] transition-all"
              >
                <span>Explore Solutions</span>
                <ChevronDown size={16} className="text-[#006d3d]" />
              </button>
            </motion.div>

            {/* Trust Highlights Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#e2e2e5] w-full text-xs font-semibold text-[#00273d]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#006d3d]" />
                <span>366+ Delivered Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#006d3d]" />
                <span>ISO 27001 Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#006d3d]" />
                <span>24/7 Global Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Interactive Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] space-y-4">
              {/* Card 1: Mobile & Web Architecture */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-xl bg-white border border-[#e2e2e5] p-5 shadow-xl shadow-[#00273d]/5 hover:border-[#006d3d]/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#006d3d]/10 text-[#006d3d]">
                    <Smartphone size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-sm font-bold text-[#00273d]">Mobile & Web Architecture</h4>
                      <span className="font-stat text-xs font-extrabold text-[#006d3d]">99.9% Uptime</span>
                    </div>
                    <p className="font-sans text-xs text-[#42474d] mt-0.5">iOS, Android, React & Cloud Solutions</p>
                    <div className="w-full bg-[#f4f7f9] h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="bg-gradient-to-r from-[#006d3d] to-[#00b5e0] h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Digital Growth & Performance Marketing */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="rounded-xl bg-white border border-[#e2e2e5] p-5 shadow-xl shadow-[#00273d]/5 hover:border-[#006d3d]/40 transition-all ml-4 sm:ml-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00b5e0]/10 text-[#00b5e0]">
                    <TrendingUp size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-sm font-bold text-[#00273d]">Digital Marketing & SEO</h4>
                      <span className="rounded-full bg-[#006d3d] px-2 py-0.5 font-sans text-[10px] font-bold text-white">
                        +340% ROI
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#42474d] mt-0.5">Organic SEO, Meta Ads & Paid Funnels</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Cloud & Enterprise SaaS */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="rounded-xl bg-white border border-[#e2e2e5] p-5 shadow-xl shadow-[#00273d]/5 hover:border-[#006d3d]/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00273d]/10 text-[#00273d]">
                    <Cloud size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-sm font-bold text-[#00273d]">Cloud & SaaS Engineering</h4>
                      <span className="flex items-center gap-1 font-sans text-xs font-semibold text-[#006d3d]">
                        <Zap size={12} /> High Load
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#42474d] mt-0.5">Microservices, AWS & Security Audits</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function ServicesGrid() {
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scroll') === 'services') {
      const timer = setTimeout(() => {
        if (gridRef.current) {
          const headerHeight = 73; // Fixed header height
          const elementPosition = gridRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Clear query parameter from URL so subsequent clicks on the same footer link trigger scroll
          window.history.replaceState(null, '', window.location.pathname);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.search]);

  return (
    <section ref={ref} id="services-grid-section" className="w-full bg-white px-6 py-20 lg:px-16">
      <div ref={gridRef} className="mx-auto max-w-screen-xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-2"
        >
          <SectionLabel>WHAT WE OFFER</SectionLabel>
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.32px] text-[#00273d]">
            Complete Digital Services
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col gap-5 border border-[#e2e2e5] p-8 transition-all hover:border-[#00273d]/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#f4f7f9] text-[#006d3d] transition-colors group-hover:bg-[#006d3d] group-hover:text-white">
                  {Icon && <Icon size={22} />}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl font-semibold text-[#00273d]">{service.title}</h3>
                  <p className="font-sans text-base leading-6 text-[#42474d]">{service.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-sm bg-[#f4f7f9] px-2.5 py-1 font-sans text-[10px] font-bold tracking-[1px] text-[#42474d]">
                      {tag}
                    </span>
                  ))}
                </div>
                <button type="button" className="mt-2 flex items-center gap-2 font-sans text-sm font-medium text-[#006d3d] transition-colors hover:gap-3">
                  Learn more <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full bg-[#f4f7f9] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-screen-xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-2"
        >
          <SectionLabel>HOW WE WORK</SectionLabel>
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.32px] text-[#00273d]">
            Our Proven Process
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 border-l-2 border-[#006d3d] pl-5"
            >
              <span className="font-stat text-3xl font-bold text-[#006d3d]/40">{step.step}</span>
              <h3 className="font-heading text-xl font-semibold text-[#00273d]">{step.title}</h3>
              <p className="font-sans text-sm leading-5 text-[#42474d]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const reasons = [
    'Client-first approach with dedicated project managers',
    'ISO-certified development processes',
    'Scalable architecture built for growth',
    '24/7 global support and monitoring',
    'Agile methodology for rapid delivery',
    'Proven track record across 10+ countries',
  ];

  return (
    <section ref={ref} className="w-full bg-[#00273d] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <SectionLabel color="green-light">WHY LOGIC CENTRA</SectionLabel>
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.32px] text-white">
            Engineering Excellence, Delivered On Time
          </h2>
          <p className="font-sans text-base leading-6 text-[#7fa8cb]">
            We don't just build software — we build partnerships. Every project is backed by a team
            of specialists committed to your success, from the first line of code to post-launch support.
          </p>
          <Button variant="primary" size="md" className="w-fit" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {reasons.map((reason, i) => (
            <motion.li
              key={reason}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 size={18} className="shrink-0 text-[#6cfda8]" />
              <span className="font-sans text-base text-white">{reason}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <HeroBlock />
      <MarketingServicesSlider />
      <ServicesGrid />
      <ProcessSection />
      <WhyChooseSection />
    </>
  );
}
