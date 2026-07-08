import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Button } from '../common/Button';
import { SectionLabel } from '../common/SectionLabel';

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="w-full bg-[#f4f7f9]">
      <div className="mx-auto flex w-full max-w-screen-xl px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex max-w-[56rem] flex-col items-start gap-4"
          >
            <SectionLabel>ABOUT LOGIC CENTRA</SectionLabel>
            <h2 className="font-heading text-[32px] font-semibold leading-10 tracking-[-0.32px] text-[#00273d]">
              Building the Future Through Innovation &amp; Technology
            </h2>
            <div className="space-y-5 pt-2">
              <p className="font-sans text-base font-normal leading-6 text-[#42474d]">
                Logic Centra Tech Solutions Private Limited is an outstanding IT services provider focusing on SaaS, PaaS, and CaaS, solutions. Offering wide range of benefits such as managed IT services, cloud computing solutions, and enterprise IT solutions customized for businesses of all sizes, our proficiency comprises of IT consulting, cybersecurity solutions, network management, and IT infrastructure services.
              </p>
              <p className="font-sans text-base font-normal leading-6 text-[#42474d]">
                From helping businesses strengthen IT systems, reduce downtimes, and optimize network security with prescient IT support to our cloud migration services, and AI driven IT automation, we guarantee an immaculate digital transfiguration. At Logiccentra IT Tech Solutions , we provide IT support for startups to enterprise-level solutions, empowering businesses with ingenious technology. Offering 24/7 IT support with a commitment to IT system optimization, we emphasize efficiency and security.
              </p>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full justify-start lg:w-auto lg:justify-end shrink-0"
          >
            <Button variant="dark" size="md" className="px-8 py-4" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
