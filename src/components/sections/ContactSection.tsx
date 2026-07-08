import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, type LucideIcon } from 'lucide-react';
import { CONTACT_DETAILS } from '../../constants';

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
};

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="contact" className="relative w-full bg-[#00273d]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 md:px-8 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col items-start gap-8">
              <header className="flex w-full flex-col items-start gap-5">
                <h2 className="font-heading text-[32px] font-semibold leading-10 tracking-[-0.32px] text-white">
                  Let&apos;s Build the Future of<br />Your Business
                </h2>
                <p className="font-sans text-base font-normal leading-6 text-[#7fa8cb]">
                  Reach out to our executive team for a consultation on your<br className="hidden sm:block" /> next technological milestone.
                </p>
              </header>

              <address className="not-italic w-full">
                <ul className="flex flex-col gap-6">
                  {CONTACT_DETAILS.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <li key={item.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[rgba(255,255,255,0.08)] text-[#7fa8cb]">
                          {Icon && <Icon size={16} />}
                        </div>
                        <div className="flex flex-col items-start">
                          <h3 className="font-sans text-base font-bold leading-6 text-white">
                            {item.title}
                          </h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-sans text-sm font-normal leading-4 tracking-[0.70px] text-[#7fa8cb] transition-opacity hover:opacity-80"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="font-sans text-sm font-normal leading-4 tracking-[0.70px] text-[#7fa8cb]">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </address>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="w-full h-[450px] border border-[rgba(255,255,255,0.1)] bg-white/5 p-2 rounded-sm">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=28.586124420166016,77.31573486328125&z=17&output=embed"
                className="w-full h-full border-0 rounded-sm"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
