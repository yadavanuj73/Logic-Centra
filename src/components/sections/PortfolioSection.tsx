import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { PORTFOLIO_ITEMS } from '../../constants';

export function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = PORTFOLIO_ITEMS.find((p) => p.id === 'burger-bae')!;
  const secondary = PORTFOLIO_ITEMS.filter((p) => p.variant === 'secondary').slice(0, 2);

  return (
    <section ref={ref} className="relative w-full bg-[#f9f9fc] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-12 lg:gap-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col items-center gap-4 text-center"
        >
          <h2 className="font-heading text-[28px] font-semibold leading-9 tracking-[-0.32px] text-[#00273d] sm:text-[32px] sm:leading-10">
            Precision-Crafted Portfolio
          </h2>
          <p className="max-w-[448px] font-sans text-sm font-normal leading-6 text-[#42474d] sm:text-base">
            Innovative Digital Solutions Across Diverse Industries
          </p>
        </motion.header>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 lg:col-span-8"
          >
            <div className="relative overflow-hidden rounded-none border border-[#e2e2e5] bg-[#00273d] shadow-none h-full group">
              <div className="flex min-h-[420px] flex-col justify-between gap-8 p-6 sm:p-8 lg:min-h-[620px] lg:p-12">
                <div className="relative z-10 flex max-w-sm flex-col items-start gap-2">
                  <p className="font-sans text-sm font-normal leading-4 tracking-[0.70px] text-[#6cfda8]">
                    {featured.category}
                  </p>
                  <h3 className="font-heading text-[28px] font-semibold leading-9 tracking-[-0.32px] text-white lg:text-[32px] lg:leading-10">
                    {featured.title}
                  </h3>
                  <p className="pt-2 pb-6 font-sans text-base font-normal leading-6 text-[#7fa8cb]">
                    {featured.description}
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    className="group-hover:bg-[#005a33] transition-colors"
                    asChild
                  >
                    {featured.href ? (
                      <a href={featured.href} target="_blank" rel="noopener noreferrer">
                        {featured.cta}
                      </a>
                    ) : (
                      <Link to="/portfolio">{featured.cta}</Link>
                    )}
                  </Button>
                </div>
                <div
                  className="relative z-0 mt-auto h-[220px] w-full self-end bg-contain bg-right-bottom bg-no-repeat transition-transform duration-500 group-hover:scale-[1.02] sm:h-[280px] lg:h-[350px]"
                  style={{ backgroundImage: `url(${featured.image})` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 flex min-h-full flex-col gap-6 lg:col-span-4">
            {secondary.map((card, i) => {
              const CardComponent = card.href ? 'a' : 'div';
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex-1"
                >
                  <CardComponent
                    {...(card.href ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`relative block overflow-hidden border border-[#e2e2e5] ${card.bgClass} group cursor-pointer h-full`}
                  >
                    <div className="relative flex min-h-[200px] flex-col items-start gap-2 p-6 sm:p-8 overflow-hidden">
                      <div className="relative z-10 flex w-full flex-col items-start gap-2">
                        <p className={`font-sans text-sm font-normal leading-4 tracking-[0.70px] ${card.categoryClass}`}>
                          {card.category}
                        </p>
                        <h3 className={`font-heading text-2xl font-semibold leading-8 ${card.textClass}`}>
                          {card.title}
                        </h3>
                      </div>
                      <div
                        className="absolute right-0 bottom-0 h-[160px] w-full bg-cover bg-right-bottom bg-no-repeat opacity-80 transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${card.image})` }}
                        aria-hidden="true"
                      />
                    </div>
                  </CardComponent>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full justify-center"
        >
          <Button variant="outline" size="md" className="gap-2" asChild>
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight size={14} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
