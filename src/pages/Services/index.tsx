import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, TrendingUp, Cloud, Layers, Shield, CheckCircle2, type LucideIcon } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionLabel } from '../../components/common/SectionLabel';
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
  return (
    <section className="w-full bg-[#00273d] pt-32 pb-20 px-6 lg:px-16">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 max-w-2xl"
        >
          <SectionLabel color="green-light">OUR SERVICES</SectionLabel>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-[-0.5px] text-white lg:text-5xl">
            Strategic Technological<br />Ecosystems
          </h1>
          <p className="font-sans text-lg text-[#7fa8cb] leading-7 max-w-xl">
            From concept to launch and beyond — we engineer digital products that scale with your ambitions.
          </p>
          <Button variant="primary" size="lg" className="mt-4" asChild>
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </motion.div>
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
    <section ref={ref} className="w-full bg-white px-6 py-20 lg:px-16">
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
      <ServicesGrid />
      <ProcessSection />
      <WhyChooseSection />
    </>
  );
}
