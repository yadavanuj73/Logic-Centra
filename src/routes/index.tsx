import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const HomePage = lazy(() => import('../pages/Home'));
const ServicesPage = lazy(() => import('../pages/Services'));
const PortfolioPage = lazy(() => import('../pages/Portfolio'));
const ContactPage = lazy(() => import('../pages/Contact'));
const CompanyProfilePage = lazy(() => import('../pages/CompanyProfile'));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e2e2e5] border-t-[#006d3d]" />
    </div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

export function AppRoutes() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9fc]">
      <Navbar />
      <main className="flex-1 pt-[73px]">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route
                path="/services"
                element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <PageTransition>
                    <PortfolioPage />
                  </PageTransition>
                }
              />
              <Route
                path="/company-profile"
                element={
                  <PageTransition>
                    <CompanyProfilePage />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <ContactPage key="contact" />
                  </PageTransition>
                }
              />
              <Route
                path="/request-demo"
                element={
                  <PageTransition>
                    <ContactPage key="request-demo" />
                  </PageTransition>
                }
              />
              <Route
                path="/request-quote"
                element={
                  <PageTransition>
                    <ContactPage key="request-quote" />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
