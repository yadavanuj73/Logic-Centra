import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Search,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { SectionLabel } from '../common/SectionLabel';
import { MARKETING_SERVICE_PACKAGES } from '../../constants/marketingServices';
import { MarketingServiceModal } from '../common/MarketingServiceModal';
import type { MarketingServicePackage } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Target,
  Search,
  BarChart3,
};

export const MarketingServicesSlider: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<MarketingServicePackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredPackages = MARKETING_SERVICE_PACKAGES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Handle slide scrolling
  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 380;
    const gap = 24; // gap-6 = 24px
    const targetScroll = index * (cardWidth + gap);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(filteredPackages.length - 1, currentIndex + 1);
    scrollToSlide(newIndex);
  };

  const handleOpenModal = (service: MarketingServicePackage) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Sync current index on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.children[0]?.clientWidth || 380;
      const gap = 24;
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [filteredPackages]);

  return (
    <section className="w-full bg-[#00273d] py-24 px-4 sm:px-6 lg:px-16 text-white relative overflow-hidden">
      {/* Dynamic Animated Ambient Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[500px] h-[500px] rounded-full bg-[#006d3d]/30 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-[500px] h-[500px] rounded-full bg-[#00b5e0]/20 blur-[100px] pointer-events-none"
      />

      {/* Subtle Matrix Dot Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(108,253,168,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-20" />

      <div className="mx-auto max-w-screen-xl relative z-10 space-y-10">
        {/* Header & Arrow Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel color="green-light">DIGITAL MARKETING SOLUTIONS</SectionLabel>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Growth & Marketing{' '}
              <span className="bg-gradient-to-r from-[#6cfda8] via-[#00b5e0] to-white bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base text-[#7fa8cb] leading-relaxed"
            >
              Accelerate brand visibility, generate qualified leads, and maximize ROI through our data-driven marketing, SEO, and paid ad management packages.
            </motion.p>
          </div>

          {/* Slide Arrow Navigation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 self-end"
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`group flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                currentIndex === 0
                  ? 'border-white/10 text-white/30 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-[#006d3d] hover:border-[#6cfda8] hover:shadow-lg hover:shadow-[#006d3d]/40'
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredPackages.length - 1}
              className={`group flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                currentIndex >= filteredPackages.length - 1
                  ? 'border-white/10 text-white/30 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-[#006d3d] hover:border-[#6cfda8] hover:shadow-lg hover:shadow-[#006d3d]/40'
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Category Filters with Sliding Animated Pill */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'complete', label: 'Full 360° Marketing' },
            { id: 'ads', label: 'Paid Ads' },
            { id: 'seo', label: 'SEO Packages' },
            { id: 'strategy', label: 'Custom Strategy' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setCurrentIndex(0);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`relative rounded-full px-5 py-2 font-sans text-xs font-semibold tracking-wider transition-colors ${
                  isActive ? 'text-[#6cfda8]' : 'text-[#7fa8cb] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMarketingTab"
                    className="absolute inset-0 rounded-full bg-[#006d3d] shadow-md shadow-[#006d3d]/40 border border-[#6cfda8]/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sliding Cards Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-6 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, index) => {
              const IconComponent = iconMap[pkg.icon] || Rocket;
              const isPopular = pkg.popular;

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className={`group snap-start shrink-0 w-[310px] sm:w-[360px] md:w-[380px] flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 relative ${
                    isPopular
                      ? 'border-[#6cfda8]/60 bg-gradient-to-b from-[#003859] via-[#002b44] to-[#001e30] shadow-[0_10px_40px_rgba(0,109,61,0.3)] ring-1 ring-[#6cfda8]/40'
                      : 'border-white/10 bg-[#001c2b] hover:border-white/30 hover:bg-[#002336] hover:shadow-xl hover:shadow-[#00273d]/50'
                  }`}
                >
                  {/* Glowing Shimmer Effect for Popular Card */}
                  {isPopular && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute -top-[100%] left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-[#6cfda8]/5 to-transparent animate-pulse" />
                    </div>
                  )}

                  {/* Popular Badge */}
                  {isPopular && (
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-3.5 right-6 flex items-center gap-1.5 rounded-full bg-[#006d3d] px-3.5 py-1 font-sans text-[11px] font-bold text-[#6cfda8] border border-[#6cfda8]/50 shadow-lg shadow-[#006d3d]/50"
                    >
                      <Sparkles size={13} className="animate-pulse text-[#6cfda8]" />
                      <span>MOST POPULAR</span>
                    </motion.div>
                  )}

                  <div className="space-y-6 relative z-10">
                    {/* Category Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#6cfda8] flex items-center gap-1.5">
                        <Zap size={12} className="text-[#6cfda8]" />
                        {pkg.badge}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#6cfda8] border border-white/10 group-hover:bg-[#006d3d] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={22} />
                      </div>
                    </div>

                    {/* Pricing Display */}
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-stat text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="font-sans text-sm font-medium text-[#7fa8cb]">{pkg.period}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mt-2 group-hover:text-[#6cfda8] transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="font-sans text-xs text-[#7fa8cb] leading-relaxed line-clamp-2 mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Highlights Checklist */}
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-[#7fa8cb] flex items-center gap-1">
                        <ShieldCheck size={12} className="text-[#00b5e0]" />
                        Key Highlights Included
                      </span>
                      <ul className="space-y-2.5">
                        {pkg.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-white/90">
                            <CheckCircle2 size={15} className="text-[#6cfda8] shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action CTA Button */}
                  <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(pkg)}
                      className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md ${
                        isPopular
                          ? 'bg-[#006d3d] text-white hover:bg-[#00874c] hover:shadow-lg hover:shadow-[#006d3d]/50 border border-[#6cfda8]/30'
                          : 'bg-white/10 text-white hover:bg-[#006d3d] hover:text-white hover:border-[#006d3d] border border-white/10'
                      }`}
                    >
                      <span>View Package Details</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Animated Carousel Progress Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {filteredPackages.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollToSlide(dotIndex)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIndex
                  ? 'w-10 bg-gradient-to-r from-[#006d3d] to-[#6cfda8] shadow-md shadow-[#006d3d]/50'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <MarketingServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
