import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, TrendingUp, Cloud, Layers, Shield, type LucideIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { SectionLabel } from '../common/SectionLabel';
import { SERVICES } from '../../constants';

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  TrendingUp,
  Cloud,
  Layers,
  Shield,
};

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const displayServices = SERVICES.slice(0, 3);

  return (
    <section
      ref={ref}
      id="services"
      className="relative w-full bg-[#00273d] px-4 py-16 sm:px-6 lg:px-16 lg:py-24"
    >
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-start gap-10 lg:gap-16">
        <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex max-w-2xl flex-col items-start gap-2"
          >
            <SectionLabel color="green-light">EXPLORE SERVICES</SectionLabel>
            <h2 className="font-heading text-[28px] font-semibold leading-9 tracking-[-0.32px] text-white sm:text-[32px] sm:leading-10">
              Strategic Technological Ecosystems
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 border-b border-white pb-2 rounded-none hover:bg-transparent"
              asChild
            >
              <Link to="/services">
                <span className="font-sans text-sm font-normal leading-4 tracking-[0.70px] text-white">
                  VIEW ALL SERVICES
                </span>
                <ArrowRight size={14} className="text-white" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-none border border-[rgba(255,255,255,0.1)] p-8 transition-colors hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.04)]"
              >
                <div className="flex h-full flex-col items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[rgba(255,255,255,0.08)] text-[#6cfda8] transition-colors group-hover:bg-[rgba(0,109,61,0.3)]">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div className="flex w-full flex-col items-start pt-2">
                    <h3 className="font-heading text-2xl font-semibold leading-8 text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <p className="font-sans text-base font-normal leading-6 text-[#7fa8cb]">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap items-start gap-2 pt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-sm bg-[rgba(255,255,255,0.1)] px-2 py-1"
                      >
                        <span className="font-sans text-[10px] font-bold leading-[15px] tracking-[1.00px] text-white">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
