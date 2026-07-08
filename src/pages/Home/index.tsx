import { HeroSection } from '../../components/sections/HeroSection';
import { StatsSection } from '../../components/sections/StatsSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { PortfolioSection } from '../../components/sections/PortfolioSection';
import { ServicesSection } from '../../components/sections/ServicesSection';
import { BlogSection } from '../../components/sections/BlogSection';
import { ContactSection } from '../../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
