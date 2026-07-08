import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionLabel } from '../../components/common/SectionLabel';
import { PORTFOLIO_ITEMS } from '../../constants';

const categories = ['All', 'ECOMMERCE & RETAIL', 'FINTECH', 'HEALTH TECH', 'ENTERPRISE', 'EDTECH'];

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
          <SectionLabel color="green-light">OUR WORK</SectionLabel>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-[-0.5px] text-white lg:text-5xl">
            Precision-Crafted<br />Portfolio
          </h1>
          <p className="font-sans text-lg text-[#7fa8cb] leading-7 max-w-xl">
            Innovative digital solutions built for diverse industries — from fintech to ecommerce, healthcare to enterprise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.variant === 'featured') ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <section ref={ref} className="w-full bg-[#f9f9fc] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-none border px-4 py-2 font-sans text-xs font-bold tracking-[0.70px] transition-all ${
                activeCategory === cat
                  ? 'border-[#00273d] bg-[#00273d] text-white'
                  : 'border-[#e2e2e5] bg-white text-[#42474d] hover:border-[#00273d] hover:text-[#00273d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            {featured && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-8">
                  <div className="relative overflow-hidden border border-[#e2e2e5] bg-[#00273d] group h-full">
                    <div className="flex min-h-[400px] flex-col justify-between gap-8 p-8 lg:min-h-[520px] lg:p-12">
                      <div className="relative z-10 flex max-w-md flex-col items-start gap-2">
                        <p className="font-sans text-sm tracking-[0.70px] text-[#6cfda8]">
                          {featured.category}
                        </p>
                        <h2 className="font-heading text-[28px] font-semibold leading-9 text-white lg:text-[32px]">
                          {featured.title}
                        </h2>
                        {featured.description && (
                          <p className="pt-2 pb-4 font-sans text-base leading-6 text-[#7fa8cb]">
                            {featured.description}
                          </p>
                        )}
                        {featured.tags && (
                          <div className="flex flex-wrap gap-2 pb-4">
                            {featured.tags.map((t) => (
                              <span key={t} className="rounded-sm bg-white/10 px-2 py-1 font-sans text-[10px] font-bold tracking-[1px] text-white">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        {featured.cta && (
                          <Button variant="primary" size="md" asChild>
                            <Link to="/contact">{featured.cta}</Link>
                          </Button>
                        )}
                      </div>
                      <div
                        className="relative z-0 mt-auto h-[200px] w-full bg-contain bg-right-bottom bg-no-repeat lg:h-[280px]"
                        style={{ backgroundImage: `url(${featured.image})` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-1 flex flex-col gap-6 lg:col-span-4">
                  {rest.slice(0, 2).map((card) => (
                    <div
                      key={card.id}
                      className={`relative overflow-hidden border border-[#e2e2e5] flex-1 group cursor-pointer ${card.bgClass ?? 'bg-[#e8e8eb]'}`}
                    >
                      <div className="relative flex min-h-[185px] flex-col items-start gap-2 p-6 overflow-hidden">
                        <p className={`font-sans text-sm tracking-[0.70px] ${card.categoryClass ?? 'text-[#006d3d]'}`}>
                          {card.category}
                        </p>
                        <h3 className={`font-heading text-2xl font-semibold ${card.textClass ?? 'text-[#00273d]'}`}>
                          {card.title}
                        </h3>
                        <div
                          className="absolute right-0 bottom-0 h-[140px] w-full bg-cover bg-right-bottom bg-no-repeat opacity-80 transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${card.image})` }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {rest.length > 2 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {rest.slice(2).map((card) => (
                  <div
                    key={card.id}
                    className={`relative overflow-hidden border border-[#e2e2e5] group cursor-pointer ${card.bgClass ?? 'bg-[#e8e8eb]'}`}
                  >
                    <div className="relative flex min-h-[240px] flex-col items-start gap-2 p-6 overflow-hidden">
                      <p className={`font-sans text-sm tracking-[0.70px] ${card.categoryClass ?? 'text-[#006d3d]'}`}>
                        {card.category}
                      </p>
                      <h3 className={`font-heading text-2xl font-semibold ${card.textClass ?? 'text-[#00273d]'}`}>
                        {card.title}
                      </h3>
                      {card.tags && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {card.tags.map((t) => (
                            <span key={t} className="rounded-sm bg-white/20 px-2 py-1 font-sans text-[10px] font-bold tracking-[1px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      <div
                        className="absolute right-0 bottom-0 h-[150px] w-full bg-cover bg-right-bottom bg-no-repeat opacity-80 transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${card.image})` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button variant="outline" size="md" className="gap-2" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight size={14} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <HeroBlock />
      <PortfolioGrid />
    </>
  );
}
