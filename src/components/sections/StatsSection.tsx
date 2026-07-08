import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATS } from '../../constants';

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} aria-label="Company statistics" className="w-full border-b border-[#e2e2e5] bg-[#f4f7f9] px-4 sm:px-6 lg:px-[53px] py-10">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-stretch justify-center">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-1 min-w-[140px] flex-col items-center justify-center gap-2 border-l border-[#c2c7ce] px-4 py-3 sm:px-6 sm:py-4"
          >
            <p className="font-stat text-[32px] font-bold leading-10 tracking-[-0.32px] text-[#00273d] whitespace-nowrap">
              {stat.value}
            </p>
            <p className="font-sans text-xs font-medium leading-[14px] tracking-[0] text-[#42474d] whitespace-nowrap text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
