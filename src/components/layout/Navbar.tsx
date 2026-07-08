import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-[#e2e2e5] transition-all duration-300',
        scrolled ? 'bg-[#f9f9fc]/95 backdrop-blur-md shadow-[0px_1px_2px_rgba(0,0,0,0.08)]' : 'bg-[#f9f9fc]/95 backdrop-blur-sm'
      )}
    >
      <div className="flex w-full items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-12">
        <div className="flex-1 flex justify-start">
          <Link to="/" aria-label="Logic Centra home" className="shrink-0 flex items-center">
            <img 
              src="/assets/logic-logo.png" 
              alt="Logic Centra Logo" 
              className="h-10 w-auto object-contain" 
            />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href}
                    className="font-sans text-base font-semibold leading-5 tracking-[0.70px] text-[#42474d] transition-colors hover:text-[#00273d]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.href}
                    className={cn(
                      'font-sans text-base font-semibold leading-5 tracking-[0.70px] transition-colors hover:text-[#00273d]',
                      isActive(item.href) ? 'text-[#00273d] font-bold' : 'text-[#42474d]'
                    )}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end gap-3 md:flex flex-1">
          <Button variant="outline" size="md" asChild>
            <Link to="/request-quote">Request a Quote</Link>
          </Button>
          <Button variant="primary" size="md" asChild>
            <Link to="/contact?interest=Book a Call">Book a Call</Link>
          </Button>
        </div>

        <div className="flex md:hidden justify-end">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex items-center justify-center rounded-sm p-2 text-[#00273d] transition-colors hover:bg-[#f4f7f9]"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#e2e2e5] bg-[#f9f9fc] md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href}
                      className="block rounded-sm px-3 py-2.5 font-sans text-base font-bold text-[#42474d] transition-colors hover:bg-[#f4f7f9] hover:text-[#00273d]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={cn(
                        'block rounded-sm px-3 py-2.5 font-sans text-base font-bold transition-colors hover:bg-[#f4f7f9] hover:text-[#00273d]',
                        isActive(item.href) ? 'text-[#00273d] bg-[#f4f7f9] font-extrabold' : 'text-[#42474d]'
                      )}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#e2e2e5] mt-2">
                <Button variant="outline" size="md" className="w-full justify-center" asChild>
                  <Link to="/request-quote">Request a Quote</Link>
                </Button>
                <Button variant="primary" size="md" className="w-full justify-center" asChild>
                  <Link to="/contact?interest=Book a Call">Book a Call</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
