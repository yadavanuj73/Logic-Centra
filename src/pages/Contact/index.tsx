import { useRef, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, type LucideIcon } from 'lucide-react';
import { ContactForm } from '../../components/forms/ContactForm';
import { SectionLabel } from '../../components/common/SectionLabel';
import { CONTACT_DETAILS } from '../../constants';

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
};

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope. A mobile app typically takes 3–6 months, while enterprise platforms may take 6–12 months.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, we serve clients across 10+ countries and are experienced in remote collaboration across different time zones.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We specialize in React, Node.js, Flutter, Swift, Kotlin, Spring Boot, AWS, and more — always choosing the best tech for your use case.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Absolutely. We offer 24/7 global support, maintenance contracts, and dedicated account managers for all our clients.',
  },
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
          <SectionLabel color="green-light">GET IN TOUCH</SectionLabel>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-[-0.5px] text-white lg:text-5xl">
            Let's Build Something<br />Extraordinary
          </h1>
          <p className="font-sans text-lg text-[#7fa8cb] leading-7 max-w-xl">
            Reach out to our team for a consultation on your next digital project. We respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [searchParams] = useSearchParams();
  const location = useLocation();

  let defaultInterest = searchParams.get('interest') || '';
  if (!defaultInterest) {
    if (location.pathname === '/request-demo') {
      defaultInterest = 'Request Demo';
    } else if (location.pathname === '/request-quote') {
      defaultInterest = 'Request a Quote';
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const headerHeight = 73; // Height of the fixed header
        const elementPosition = scrollRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return (
    <section ref={ref} className="w-full bg-[#f4f7f9] px-6 py-20 lg:px-16">
      <div ref={scrollRef} className="mx-auto max-w-screen-xl grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>CONTACT US</SectionLabel>
            <h2 className="font-heading text-[28px] font-semibold tracking-[-0.32px] text-[#00273d]">
              We'd Love to Hear From You
            </h2>
            <p className="font-sans text-base leading-6 text-[#42474d]">
              Whether you have a project in mind or just want to explore possibilities, our team is ready to help.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {CONTACT_DETAILS.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#00273d] text-white">
                    {Icon && <Icon size={16} />}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans text-base font-bold text-[#00273d]">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-sm text-[#42474d] transition-colors hover:text-[#006d3d]">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-sans text-sm text-[#42474d]">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#00273d] text-white">
                <Clock size={16} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans text-base font-bold text-[#00273d]">Business Hours</h3>
                <span className="font-sans text-sm text-[#42474d]">Mon–Fri: 9AM–7PM IST</span>
                <span className="font-sans text-sm text-[#42474d]">Emergency support: 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8"
        >
          <div className="border border-[#e2e2e5] bg-white p-8 md:p-10 lg:p-12">
            <h3 className="font-heading text-xl font-semibold text-[#00273d] mb-6">Send Us a Message</h3>
            <ContactForm defaultInterest={defaultInterest} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-screen-xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-2"
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.32px] text-[#00273d]">
            Frequently Asked Questions
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3 border border-[#e2e2e5] p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-[#00273d]">{faq.q}</h3>
              <p className="font-sans text-base leading-6 text-[#42474d]">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroBlock />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}
