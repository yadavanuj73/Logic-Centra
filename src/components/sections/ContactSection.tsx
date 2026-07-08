import { useRef, type ComponentType } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_DETAILS } from '../../constants';

const iconMap: Record<string, ComponentType<{ size?: number | string }>> = {
  Phone,
  Mail,
  MapPin,
  WhatsApp: (props: { size?: number | string }) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 16}
      height={props.size || 16}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.336 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
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
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
