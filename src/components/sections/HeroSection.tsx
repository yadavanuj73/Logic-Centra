import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#00273d] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,181,224,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,109,61,0.06)_0%,_transparent_60%)]" />
      </div>

      <div className="mx-auto flex min-h-[600px] lg:min-h-[700px] w-full max-w-[1280px] items-center px-6 py-24 sm:px-8 lg:px-[84px] lg:pt-36 lg:pb-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,517px)_minmax(0,1fr)] lg:gap-[72px]">
          <header className="flex max-w-[517px] flex-col gap-0">
            <FadeUp delay={0}>
              <Badge variant="green">
                <span className="h-2 w-2 rounded-full bg-[#006d3d] shrink-0" />
                <span className="font-sans text-sm font-normal tracking-[0.70px] text-[#6cfda8]">
                  SaaS Product Development
                </span>
              </Badge>
            </FadeUp>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-11 font-heading text-4xl font-bold leading-[1.15] tracking-[-0.46px] text-white sm:text-5xl sm:leading-[60px]"
            >
              Innovative Web and App Solutions for{' '}
              <span className="text-[#6cfda8]">Business Growth</span>
              {' '}and{' '}
              <span className="text-[#00b5e0]">Digital Excellence</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 max-w-[618px] font-sans text-lg font-normal leading-7 text-[#7fa8cb]"
            >
              Transform your business with innovative digital solutions. We design and develop
              high-performance websites, mobile applications, and custom software that help businesses
              grow, scale, and deliver exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">Consult with Us</Link>
              </Button>
              <Button variant="outline-white" size="hero" className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <Play size={10} fill="white" className="text-white ml-0.5" />
                </span>
                View Showreel
              </Button>
            </motion.div>
          </header>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex w-full justify-start lg:justify-end"
          >
            <div className="w-full max-w-[530px] rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(10,61,91,0.4)] p-9 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="overflow-hidden rounded-lg shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Digital solutions preview"
                  className="block h-auto w-full rounded-lg object-cover"
                  loading="eager"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=60',
                    'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=60',
                    'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=60',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-7 w-7 rounded-full border-2 border-[#0a3d5b] object-cover"
                    />
                  ))}
                </div>
                <p className="font-sans text-xs text-[#7fa8cb]">
                  <span className="font-bold text-white">366+</span> projects delivered worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
