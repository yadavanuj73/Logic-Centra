import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Sparkles, Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { MarketingServicePackage } from '../../types';
import { Button } from './Button';

interface MarketingServiceModalProps {
  service: MarketingServicePackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MarketingServiceModal: React.FC<MarketingServiceModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#00273d]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-xl bg-white shadow-2xl overflow-hidden border border-[#e2e2e5]"
          >
            {/* Header Header */}
            <div className="sticky top-0 z-20 flex items-start justify-between bg-[#00273d] px-6 py-6 text-white sm:px-8">
              <div className="flex flex-col gap-2 pr-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#006d3d] px-3 py-1 font-sans text-xs font-semibold tracking-wider text-[#6cfda8]">
                    {service.badge}
                  </span>
                  {service.popular && (
                    <span className="flex items-center gap-1 rounded-full bg-[#6cfda8]/20 border border-[#6cfda8]/40 px-3 py-1 font-sans text-xs font-semibold text-[#6cfda8]">
                      <Sparkles size={12} /> MOST POPULAR
                    </span>
                  )}
                </div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {service.title}
                </h2>
                <p className="font-sans text-sm text-[#7fa8cb]">{service.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8">
              {/* Pricing Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-lg bg-[#f4f7f9] border border-[#e2e2e5]">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#006d3d]">Investment</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-stat text-3xl font-extrabold text-[#00273d]">{service.price}</span>
                    <span className="font-sans text-sm font-medium text-[#42474d]">{service.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary" size="md" asChild onClick={onClose}>
                    <Link to={`/contact?interest=${encodeURIComponent('Digital Marketing')}`}>
                      Get Started <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-slate max-w-none">
                <h3 className="font-heading text-lg font-semibold text-[#00273d] mb-2">Package Overview</h3>
                <p className="font-sans text-base text-[#42474d] leading-relaxed">{service.description}</p>
              </div>

              {/* SEO Tiers Table / Grid (If Applicable) */}
              {service.seoTiers && service.seoTiers.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-[#00273d]">Selectable SEO Plans & Pricing</h3>
                    <span className="font-sans text-xs font-medium text-[#006d3d]">Transparent Tiering</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.seoTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`relative flex flex-col justify-between p-5 rounded-lg border transition-all ${
                          tier.popular
                            ? 'border-[#006d3d] bg-[#006d3d]/5 shadow-sm'
                            : 'border-[#e2e2e5] bg-white'
                        }`}
                      >
                        {tier.popular && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#006d3d] px-3 py-0.5 font-sans text-[10px] font-bold text-white tracking-wider">
                            RECOMMENDED
                          </span>
                        )}
                        <div>
                          <h4 className="font-heading text-lg font-bold text-[#00273d]">{tier.name} Plan</h4>
                          <p className="font-sans text-xs text-[#42474d] mt-1">Up to <strong className="text-[#006d3d]">{tier.keywords} Keywords</strong> Targeted</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#e2e2e5]">
                          <span className="font-stat text-2xl font-bold text-[#00273d]">{tier.monthlyPrice}</span>
                          <span className="font-sans text-xs text-[#42474d]"> / month</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Breakdown */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg font-semibold text-[#00273d]">What's Included in This Service</h3>
                {service.features.map((section, idx) => (
                  <div key={idx} className="rounded-lg border border-[#e2e2e5] p-5 space-y-3 bg-white">
                    <h4 className="font-heading text-base font-bold text-[#006d3d] flex items-center gap-2">
                      <ShieldCheck size={18} className="text-[#006d3d]" />
                      {section.sectionTitle}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-[#42474d]">
                          <CheckCircle2 size={16} className="text-[#006d3d] shrink-0 mt-0.5" />
                          <span className="font-sans leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes & Disclaimers */}
              {service.notes && service.notes.length > 0 && (
                <div className="rounded-lg bg-[#00273d]/5 border border-[#00273d]/15 p-4 flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#00273d] shrink-0 mt-0.5" />
                  <div className="space-y-1 font-sans text-xs text-[#42474d]">
                    <span className="font-bold text-[#00273d] uppercase tracking-wider block">Important Note</span>
                    {service.notes.map((note, i) => (
                      <p key={i}>{note}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f4f7f9] border-t border-[#e2e2e5] px-6 py-4 sm:px-8">
              <div className="flex items-center gap-2 text-xs font-medium text-[#42474d]">
                <Phone size={14} className="text-[#006d3d]" />
                <span>Need a custom plan? Call us at <strong className="text-[#00273d]">+91 96255 67013</strong></span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-[#42474d] hover:text-[#00273d] transition-colors"
                >
                  Close
                </button>
                <Button variant="primary" size="sm" asChild onClick={onClose}>
                  <Link to={`/contact?interest=${encodeURIComponent('Digital Marketing')}`}>
                    Inquire Now <ArrowRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
