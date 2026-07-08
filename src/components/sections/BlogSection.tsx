import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../common/SectionLabel';
import { BLOG_POSTS } from '../../constants';

export function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="insights" ref={ref} className="w-full bg-[#f4f7f9] px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-12 lg:gap-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col items-center gap-2 text-center"
        >
          <SectionLabel>KNOWLEDGE CENTER</SectionLabel>
          <h2 className="font-heading text-[28px] font-semibold leading-9 tracking-[-0.32px] text-[#00273d] sm:text-[32px] sm:leading-10">
            Blog &amp; Insights
          </h2>
        </motion.header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group h-full cursor-pointer"
            >
              <div className="flex h-full flex-col overflow-hidden border border-[#e2e2e5] bg-white transition-shadow hover:shadow-md">
                <div className="relative h-[205px] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex h-full flex-col items-start gap-2 px-8 pt-8 pb-9">
                  <p className="font-sans text-[10px] font-bold leading-[15px] tracking-[1.00px] text-[#006d3d]">
                    {post.category} &bull; {post.date}
                  </p>
                  <h3 className="font-heading text-2xl font-semibold leading-8 text-[#00273d]">
                    {post.title}
                  </h3>
                  <div className="w-full pt-2 pb-5">
                    <p className="font-sans text-base font-normal leading-6 text-[#42474d]">
                      {post.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="mt-auto font-sans text-sm font-normal leading-4 tracking-[0.70px] text-[#00273d] underline-offset-4 hover:underline transition-all"
                  >
                    Read Article
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
