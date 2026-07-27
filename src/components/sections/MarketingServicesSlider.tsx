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
    <section className="w-full bg-[#00273d] py-20 px-4 sm:px-6 lg:px-16 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#006d3d]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-[#00b5e0]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-screen-xl relative z-10 space-y-10">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <SectionLabel color="green-light">DIGITAL MARKETING SOLUTIONS</SectionLabel>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Growth & Marketing Services
            </h2>
            <p className="font-sans text-base text-[#7fa8cb] leading-relaxed">
              Accelerate brand visibility, generate qualified leads, and maximize ROI through our data-driven marketing, SEO, and paid ad management packages.
            </p>
          </div>

          {/* Slide Arrow Navigation */}
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                currentIndex === 0
                  ? 'border-white/10 text-white/30 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredPackages.length - 1}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                currentIndex >= filteredPackages.length - 1
                  ? 'border-white/10 text-white/30 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'complete', label: 'Full 360° Marketing' },
            { id: 'ads', label: 'Paid Ads' },
            { id: 'seo', label: 'SEO Packages' },
            { id: 'strategy', label: 'Custom Strategy' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setCurrentIndex(0);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              className={`rounded-full px-4 py-2 font-sans text-xs font-semibold tracking-wider transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#006d3d] text-[#6cfda8] shadow-md shadow-[#006d3d]/30'
                  : 'bg-white/5 text-[#7fa8cb] hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sliding Cards Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredPackages.map((pkg, index) => {
            const IconComponent = iconMap[pkg.icon] || Rocket;
            const isPopular = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[380px] flex flex-col justify-between rounded-xl border p-6 transition-all duration-300 relative ${
                  isPopular
                    ? 'border-[#006d3d] bg-gradient-to-b from-[#003756] to-[#00273d] shadow-xl shadow-[#006d3d]/20 ring-1 ring-[#6cfda8]/30'
                    : 'border-white/10 bg-[#001e30] hover:border-white/25 hover:bg-[#002338]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-[#006d3d] px-3 py-1 font-sans text-[11px] font-bold text-[#6cfda8] border border-[#6cfda8]/30 shadow-md">
                    <Sparkles size={12} /> MOST POPULAR
                  </div>
                )}

                <div className="space-y-5">
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#6cfda8]">
                      {pkg.badge}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-[#6cfda8]">
                      <IconComponent size={22} />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-stat text-3xl font-extrabold text-white">{pkg.price}</span>
                      <span className="font-sans text-sm font-medium text-[#7fa8cb]">{pkg.period}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mt-1">{pkg.title}</h3>
                    <p className="font-sans text-xs text-[#7fa8cb] line-clamp-2 mt-1">{pkg.subtitle}</p>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-[#7fa8cb]">
                      Key Highlights
                    </span>
                    <ul className="space-y-2">
                      {pkg.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 font-sans text-xs text-white/90">
                          <CheckCircle2 size={14} className="text-[#6cfda8] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(pkg)}
                    className={`w-full flex items-center justify-center gap-2 rounded-lg py-3 px-4 font-sans text-xs font-bold tracking-wider uppercase transition-all ${
                      isPopular
                        ? 'bg-[#006d3d] text-white hover:bg-[#00874c] shadow-lg shadow-[#006d3d]/30'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    <span>View Package Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {filteredPackages.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollToSlide(dotIndex)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === dotIndex ? 'w-8 bg-[#6cfda8]' : 'w-2 bg-white/20 hover:bg-white/40'
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
