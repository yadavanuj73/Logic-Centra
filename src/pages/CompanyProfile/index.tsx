import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Briefcase,
  Users,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Award,
  ChevronDown,
  Phone,
  Layers,
  Shield,
  Zap,
  CheckCircle2,
  DollarSign,
  Info,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionLabel } from '../../components/common/SectionLabel';

// --- DATA STRUCTURES ---

const STATS = [
  { value: '7+', label: 'Years of Experience', desc: 'Partnering with startups and enterprises' },
  { value: '223+', label: 'Projects Delivered', desc: 'Engineered specifically for business logic' },
  { value: '9+', label: 'Industries Served', desc: 'Custom solutions across diverse domains' },
  { value: '0%', label: 'Copy-Paste Code', desc: 'Every build starts from a blank canvas' }
];

const PILLARS = [
  {
    icon: Code,
    title: 'What We Build',
    desc: 'Custom software, business websites, single & multi-vendor e-commerce platforms, and native Android & iOS apps — each written from scratch.'
  },
  {
    icon: Users,
    title: 'How We Work',
    desc: 'Every project gets a dedicated designer, a key account manager who owns delivery, and one single point of contact for every query.'
  },
  {
    icon: Shield,
    title: 'Our Promise',
    desc: 'No recycled code, no vanishing after launch. You get a product built for your business and a team that stays accountable to it.'
  }
];

const SERVICES_TABS = [
  {
    id: 'software-web',
    label: 'Software & Web',
    title: 'Custom Software & Website Development',
    subtitle: 'No boilerplate, no recycled themes. Every system and every screen is coded to match how your business actually operates.',
    details: [
      {
        heading: 'Custom Software Development',
        text: 'Purpose-built systems for internal operations, automation and reporting — engineered around your exact business logic rather than adapted from a generic template. From custom CRMs and ERP tools to internal dashboards, every module is written for the way your team actually works.',
        subpoints: [
          'Custom CRM & ERP builds',
          'Workflow & process automation',
          'Internal dashboards & reporting',
          'Third-party API integrations'
        ],
        tags: ['Custom CRM', 'ERP', 'Automation', 'Dashboards']
      },
      {
        heading: 'Website Development',
        text: "Corporate, business and custom web platforms designed for speed, clarity and conversion. We hand-code every layout and interaction to fit your brand precisely, rather than modifying an off-the-shelf theme that looks like everyone else's.",
        subpoints: [
          'Corporate & brand websites',
          'Custom web applications',
          'Responsive, mobile-first UI',
          'SEO-ready page architecture'
        ],
        tags: ['Corporate Sites', 'Web Platforms', 'Custom UI', 'SEO-Ready']
      }
    ]
  },
  {
    id: 'mobile-ecommerce',
    label: 'Mobile & E-Commerce',
    title: 'Mobile Apps & E-Commerce Platforms',
    subtitle: 'From the first tap to checkout — apps and storefronts engineered for real-world usage, not just a demo screen.',
    details: [
      {
        heading: 'Mobile App Development',
        text: 'Native and cross-platform apps for Android and iOS, built for real usage at scale — including rider, driver and dispatch apps for cab and on-demand mobility platforms. We take every build from onboarding screen to Play Store and App Store release.',
        subpoints: [
          'Native Android & iOS apps',
          'Cab & on-demand mobility apps',
          'Real-time tracking & dispatch',
          'Push notifications & payments'
        ],
        tags: ['Android', 'iOS', 'On-Demand Apps', 'Real-Time']
      },
      {
        heading: 'E-Commerce Platforms',
        text: 'Single-vendor and multi-vendor storefronts built for retail and quick-commerce speed — covering catalogue, checkout, payments, vendor dashboards and delivery logistics in one connected system.',
        subpoints: [
          'Single-vendor storefronts',
          'Multi-vendor marketplaces',
          'Retail & quick-commerce builds',
          'Vendor & delivery dashboards'
        ],
        tags: ['Single Vendor', 'Multi-Vendor', 'Retail', 'Quick Commerce']
      }
    ]
  },
  {
    id: 'growth-visibility',
    label: 'Growth & SEO',
    title: 'Growth & Visibility',
    subtitle: 'A great product still needs an audience. Our marketing team helps you get discovered, get clicked, and get chosen — organically and through paid reach.',
    details: [
      {
        heading: 'SEO — Search Engine Optimization',
        text: 'We improve how your website ranks organically on search engines through technical SEO, on-page optimisation and a keyword strategy built around how your customers actually search.',
        subpoints: [
          'Keyword Strategy & Content Optimisation',
          'On-Page & Technical SEO audits',
          'Structured schema & performance speed setups'
        ],
        tags: ['Keyword Strategy', 'On-Page SEO', 'Technical SEO', 'Content Optimisation']
      },
      {
        heading: 'SMO — Social Media Optimization',
        text: "We shape your brand's presence across social platforms with consistent, engaging content and profile optimisation designed to grow visibility and build a loyal audience over time.",
        subpoints: [
          'Profile Optimisation & Setup',
          'Consistent Content Strategy & Graphics',
          'Engagement Growth & Brand Visibility campaigns'
        ],
        tags: ['Profile Optimisation', 'Content Strategy', 'Engagement Growth', 'Brand Visibility']
      },
      {
        heading: 'PPC — Pay-Per-Click Advertising',
        text: 'We run targeted paid campaigns across search and social platforms, with budgets managed and optimised toward measurable outcomes rather than just impressions.',
        subpoints: [
          'Search & Social Ads Management',
          'Budget Optimisation & A/B testing',
          'Detailed conversion & performance tracking'
        ],
        tags: ['Search Ads', 'Social Ads', 'Budget Optimisation', 'Performance Tracking']
      }
    ]
  }
];

const INDUSTRIES = [
  { name: 'Fintech', desc: 'Secure, compliant platforms for payments, lending and financial workflows.', icon: DollarSign },
  { name: 'Edtech', desc: 'Learning platforms, LMS tools and student management systems.', icon: Award },
  { name: 'Cab & Ride-Hailing Apps', desc: 'Rider, driver and dispatch apps built for real-time, on-demand mobility.', icon: Smartphone },
  { name: 'Custom CRM', desc: 'Sales, support and pipeline systems modelled on how your team actually sells.', icon: Users },
  { name: 'ERP Systems', desc: 'Operations, inventory and resource-planning tools built around your process.', icon: Layers },
  { name: 'Custom Websites', desc: 'Corporate and business websites designed to represent your brand precisely.', icon: Globe },
  { name: 'E-Commerce — Single Vendor', desc: "Dedicated online storefronts built for one brand's catalogue and checkout flow.", icon: Briefcase },
  { name: 'E-Commerce — Multi Vendor', desc: 'Marketplace platforms handling multiple sellers, payouts and vendor dashboards.', icon: CheckCircle },
  { name: 'Retail & Quick Commerce', desc: 'Inventory-aware storefronts and apps built for fast, high-volume delivery.', icon: Zap }
];

const TOOLKIT = [
  { category: 'Frontend', techs: ['React', 'Angular', 'Vue.js'] },
  { category: 'Backend', techs: ['Node.js', 'Laravel', 'Django'] },
  { category: 'Mobile', techs: ['Kotlin', 'Swift', 'Flutter'] },
  { category: 'Database', techs: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Google Cloud', 'Docker'] },
  { category: 'Design', techs: ['Figma', 'Adobe XD'] }
];

const USPS = [
  {
    num: '01',
    title: '100% Custom Code — Never Copy-Paste',
    desc: 'We do not copy-paste code from old projects or templates. Every line is written specifically for your business logic, so what you get is genuinely yours — not a re-skinned version of someone else\'s product.'
  },
  {
    num: '02',
    title: 'A Dedicated Designer From Day One',
    desc: 'Once you onboard, a designer is assigned to your project to shape the look, feel and user experience around your brand — not a stock template pulled off a marketplace.'
  },
  {
    num: '03',
    title: 'A Key Account Manager Who Owns Delivery',
    desc: 'A key account manager is responsible for keeping your project on schedule and delivered on time, coordinating design, development and testing end to end.'
  },
  {
    num: '04',
    title: 'One Single Point of Contact',
    desc: 'All your queries go through one person — no chasing different teams, no repeating yourself, no updates lost in translation.'
  },
  {
    num: '05',
    title: 'Milestone-Based Payments',
    desc: 'You pay as we deliver, in milestones tied to project progress — never the full amount upfront, so your investment always tracks against real, visible progress.'
  }
];

const PROCESS_STEPS = [
  { step: '01', title: 'Consultation & Gathering', desc: 'We understand your business, your goals and exactly what you need before proposing anything.' },
  { step: '02', title: 'Transparent Pricing', desc: 'Based on your requirements, we share clear, itemised pricing — no hidden costs.' },
  { step: '03', title: 'Agreement on Scope', desc: 'Once pricing is agreed, we formalise the scope of work in a signed agreement.' },
  { step: '04', title: 'Team Assignment', desc: 'After onboarding, a designer and product manager are assigned to your project.' },
  { step: '05', title: 'UI/UX Design', desc: 'Your designer builds the product in Figma based on your custom requirements.' },
  { step: '06', title: 'Design Approval', desc: "Once you're satisfied with the Figma design, we move forward into development." },
  { step: '07', title: 'Figma to Code', desc: 'The approved design is turned into custom, working code built specifically for you.' },
  { step: '08', title: 'Testing & Review', desc: 'We showcase progress as we build, then thoroughly test the software before release.' },
  { step: '09', title: 'Deployment', desc: 'Once everything checks out, we deploy your product live (Domain, Play Store, App Store).' }
];

export default function CompanyProfilePage() {
  const [activeTab, setActiveTab] = useState('software-web');
  const [openUsp, setOpenUsp] = useState<string | null>('01');

  // Dynamic SEO Setup
  useEffect(() => {
    document.title = 'Company Profile | Logic Centra';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Logic Centra, an outstanding custom software development company engineering systems around your business logic.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const currentTabContent = SERVICES_TABS.find((t) => t.id === activeTab) || SERVICES_TABS[0];

  return (
    <div className="w-full bg-[#f9f9fc] text-[#00273d]">
      
      {/* 1. HERO COVER BANNER */}
      <section className="relative w-full bg-[#00273d] pt-24 pb-20 px-6 overflow-hidden md:pt-32 lg:px-16 lg:pb-28">
        {/* Abstract futuristic grid background lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative glowing blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#006d3d] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00b5e0] rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div className="relative mx-auto max-w-screen-xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/20 inline-block">
              <img
                src="/assets/logic-logo.png"
                alt="Logic Centra Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <SectionLabel color="green-light" className="mb-4">
              COMPANY PROFILE
            </SectionLabel>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl tracking-tight">
              LOGIC <span className="text-[#6cfda8]">CENTRA</span>
            </h1>
            <p className="mt-6 font-heading text-lg font-medium text-[#7fa8cb] sm:text-xl md:text-2xl tracking-wide max-w-2xl mx-auto">
              WHERE BUSINESS LOGIC MEETS CUSTOM CODE
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-[#6cfda8]">Custom Software</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-[#6cfda8]">Web Development</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-[#6cfda8]">Android & iOS Apps</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-[#6cfda8]">E-Commerce</span>
            </div>
          </motion.div>

          {/* Quick PDF download CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Button variant="primary" size="lg" className="rounded-md" asChild>
              <a
                href="/assets/pdfs/LogicCentra_Company_Profile%20_%20New.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText size={18} />
                Download Raw PDF Profile
                <ExternalLink size={14} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE & KEY STATS */}
      <section className="w-full bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionLabel className="mb-4">WHO WE ARE</SectionLabel>
              <h2 className="font-heading text-3xl font-bold text-[#00273d] sm:text-4xl leading-tight">
                Software, Engineered Around Your <span className="text-[#006d3d]">Logic</span>
              </h2>
              <p className="mt-4 text-base font-semibold text-[#42474d] leading-7">
                A custom software development company building web, mobile, e-commerce and marketing engines — one business, one problem, one codebase at a time.
              </p>
              
              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#42474d] leading-6 font-normal">
                <p>
                  LogicCentra is a software development company that designs and builds customised software, websites, and mobile apps for Android and iOS. For over seven years, we've partnered with founders and enterprises across fintech, edtech, mobility, retail and commerce — translating the way they actually operate into working products, instead of squeezing them into a template built for someone else.
                </p>
                <p>
                  In that time we've shipped 223+ projects, and every one of them was written specifically for the business it serves — down to the last line of code. It's the reason our name is LogicCentra: your business logic sits at the centre of everything we build.
                </p>
              </div>

              {/* Blank canvas highlight box */}
              <div className="mt-8 p-6 bg-[#f4f7f9] border-l-4 border-[#006d3d] rounded-r-md">
                <p className="text-sm font-semibold italic text-[#00273d] flex items-start gap-2">
                  <Sparkles className="text-[#006d3d] shrink-0 mt-1" size={16} />
                  "Every build starts from a blank canvas — shaped entirely around your workflow."
                </p>
              </div>
            </div>

            {/* Graphic and Stat overview cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#00273d] rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-[#006d3d] rounded-full blur-2xl opacity-45" />
                <h4 className="text-xs uppercase tracking-wider text-[#6cfda8] font-bold mb-4">Blank Canvas Engineering</h4>
                <div className="flex flex-col gap-3">
                  <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  <div className="h-8 w-full bg-[#006d3d]/40 rounded border border-[#6cfda8]/20 flex items-center justify-center text-xs font-bold text-[#6cfda8]">
                    100% Unique Business Logic
                  </div>
                  <div className="h-8 w-full bg-[#00b5e0]/20 rounded border border-[#00b5e0]/20 flex items-center justify-center text-xs font-bold text-[#00b5e0]">
                    Dedicated Development Flow
                  </div>
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="bg-[#f9f9fc] border border-[#e2e2e5] p-5 rounded-lg flex flex-col items-start hover:border-[#006d3d]/50 transition-all duration-300">
                    <span className="font-stat text-3xl font-extrabold text-[#006d3d] tracking-tight">{stat.value}</span>
                    <span className="font-sans text-xs font-bold text-[#00273d] mt-1">{stat.label}</span>
                    <span className="font-sans text-[10px] text-[#42474d] mt-1 font-normal leading-4">{stat.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three key pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#e2e2e5]">
            {PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="flex flex-col items-start gap-4 p-6 bg-[#f9f9fc] border border-[#e2e2e5] rounded-xl hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="p-3 bg-[#00273d] text-white rounded-lg">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#00273d]">{pillar.title}</h3>
                  <p className="font-sans text-sm text-[#42474d] leading-6 font-normal">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD (INTERACTIVE TABS) */}
      <section className="w-full bg-[#f4f7f9] px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center text-center mb-12">
            <SectionLabel className="mb-4">WHAT WE BUILD</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-[#00273d] sm:text-4xl">
              Complete Digital Product Engineering
            </h2>
            <p className="mt-3 font-sans text-base text-[#42474d] max-w-2xl font-normal">
              No boilerplate. No recycled themes. Just high-performance software built precisely to match how your team operates.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className="flex justify-center border-b border-[#e2e2e5] mb-10 overflow-x-auto whitespace-nowrap">
            {SERVICES_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-heading text-sm font-bold tracking-[0.5px] border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-[#006d3d] text-[#006d3d]'
                    : 'border-transparent text-[#42474d] hover:text-[#00273d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-[#e2e2e5] shadow-sm"
            >
              <div className="max-w-3xl mb-8 border-b border-[#e2e2e5] pb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#006d3d]">Core Offerings</span>
                <h3 className="font-heading text-2xl font-bold mt-1 text-[#00273d]">{currentTabContent.title}</h3>
                <p className="font-sans text-sm sm:text-base text-[#42474d] mt-2 font-normal leading-6">
                  {currentTabContent.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {currentTabContent.details.map((detail, idx) => (
                  <div key={idx} className="flex flex-col justify-between p-6 bg-[#f9f9fc] border border-[#e2e2e5] rounded-xl hover:border-[#006d3d]/40 transition-colors">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-[#00273d] mb-3 flex items-center gap-2">
                        <CheckCircle2 className="text-[#006d3d] shrink-0" size={18} />
                        {detail.heading}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#42474d] font-normal leading-6 mb-4">
                        {detail.text}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {detail.subpoints.map((pt, pidx) => (
                          <li key={pidx} className="flex items-center gap-2 text-xs font-normal text-[#42474d]">
                            <span className="w-1.5 h-1.5 bg-[#00b5e0] rounded-full shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#e2e2e5]">
                      {detail.tags.map((tag, tidx) => (
                        <span
                          key={tidx}
                          className="px-2.5 py-1 bg-white border border-[#e2e2e5] text-[10px] font-bold text-[#00273d] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="w-full bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel className="mb-4">INDUSTRIES WE SERVE</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-[#00273d] sm:text-4xl">
              Sectors Where Logic Can't Be Generic
            </h2>
            <p className="mt-3 font-sans text-base text-[#42474d] max-w-2xl font-normal">
              Different industries run on different rules. We code specifically for the strict operational guidelines your business follows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-[#f9f9fc] border border-[#e2e2e5] p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:border-[#006d3d]/50 flex gap-4"
                >
                  <div className="p-3 bg-[#00273d] text-white rounded-lg shrink-0 h-fit">
                    <IndIcon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-heading text-base font-bold text-[#00273d] mb-1">{ind.name}</h3>
                    <p className="font-sans text-xs text-[#42474d] font-normal leading-5">{ind.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR TOOLKIT */}
      <section className="w-full bg-[#00273d] text-white px-6 py-20 lg:px-16 relative overflow-hidden">
        {/* Glowing background accent */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00b5e0] rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="mx-auto max-w-screen-xl relative">
          <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl">
            <SectionLabel color="green-light">OUR TOOLKIT</SectionLabel>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Technology We Build With
            </h2>
            <p className="font-sans text-base text-[#7fa8cb] font-normal leading-6">
              We choose the right stack for the problem, not the other way around — modern, well-supported technology across every layer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLKIT.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#6cfda8]/30 transition-all duration-300"
              >
                <span className="text-[10px] font-bold tracking-widest text-[#6cfda8] uppercase block mb-3">
                  {tool.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {tool.techs.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-semibold hover:border-white/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stack Quote Block */}
          <div className="mt-16 p-8 bg-[#006d3d]/20 border border-[#6cfda8]/20 rounded-xl flex flex-col md:flex-row gap-6 items-center">
            <div className="p-3 bg-[#6cfda8]/10 rounded-lg text-[#6cfda8]">
              <Info size={24} />
            </div>
            <div>
              <p className="font-heading text-base sm:text-lg font-medium text-white italic">
                "Technology is a means, not the message. We pick the stack that serves your product's performance, scale and budget — never the other way around."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY LOGIC CENTRA (USP ACCORDION) */}
      <section className="w-full bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <SectionLabel className="mb-4">WHY LOGIC CENTRA</SectionLabel>
              <h2 className="font-heading text-3xl font-bold text-[#00273d] sm:text-4xl leading-tight">
                Five Reasons Clients Stay Past Project One
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#42474d] font-normal leading-6">
                Our USP isn't a slogan — it's how every project is actually staffed, built and paid for. Check out the core operational guarantees that protect your investment.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {USPS.map((usp) => {
                const isOpen = openUsp === usp.num;
                return (
                  <div
                    key={usp.num}
                    className={`border rounded-xl transition-all duration-300 ${
                      isOpen ? 'border-[#006d3d] bg-[#f9f9fc]' : 'border-[#e2e2e5] bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setOpenUsp(isOpen ? null : usp.num)}
                      className="w-full flex items-center justify-between p-5 text-left font-heading"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-stat text-sm font-bold text-[#006d3d] bg-[#006d3d]/10 px-2.5 py-1 rounded">
                          {usp.num}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#00273d]">{usp.title}</h3>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-[#42474d] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#006d3d]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-[#e2e2e5] font-sans text-xs sm:text-sm text-[#42474d] font-normal leading-6">
                            {usp.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (TIMELINE) */}
      <section className="w-full bg-[#f4f7f9] px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel className="mb-4">HOW WE WORK</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-[#00273d] sm:text-4xl">
              From Consultation To App Store Deployment
            </h2>
            <p className="mt-3 font-sans text-base text-[#42474d] max-w-2xl font-normal">
              A clear, sequential process — so you always know what stage your project is at and what happens next.
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="relative border-l border-[#e2e2e5] ml-4 md:ml-8 space-y-12">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline node dot */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-[#006d3d] group-hover:scale-125 transition-all" />
                
                {/* Step badge */}
                <span className="font-stat text-[10px] font-bold text-[#006d3d] bg-[#006d3d]/10 px-2 py-0.5 rounded tracking-wide uppercase">
                  Step {step.step}
                </span>
                
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#00273d] mt-1.5">
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-[#42474d] mt-1 font-normal leading-6 max-w-3xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Milestone highlight block */}
          <div className="mt-16 bg-[#006d3d] text-white p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-white/10 rounded-xl">
                <Layers size={24} className="text-[#6cfda8]" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold">Milestone-based payments throughout</h4>
                <p className="font-sans text-xs text-[#7fa8cb] font-normal mt-0.5 max-w-xl leading-5">
                  You never pay the full amount in one go — every payment is tied to a completed milestone in your project.
                </p>
              </div>
            </div>
            
            <Button variant="outline" size="md" className="border-white/30 hover:border-white text-white rounded-md whitespace-nowrap shrink-0 mt-4 md:mt-0" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION & CONTACT */}
      <section className="w-full bg-[#00273d] text-white px-6 py-20 lg:px-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="mx-auto max-w-screen-md relative z-10 flex flex-col items-center">
          <SectionLabel color="green-light" className="mb-4">LET'S BUILD TOGETHER</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
            Custom Software Built Around Your Business Logic
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#7fa8cb] font-normal max-w-xl leading-6">
            Fintech, edtech, mobility, CRM, ERP, commerce or marketing — if it needs to be built and grown around how your business actually works, that's what we do.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 w-full justify-center">
            {/* Call card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center sm:w-64">
              <Phone className="text-[#6cfda8] mb-3" size={24} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7fa8cb] mb-1">CALL US</span>
              <span className="font-stat text-base font-bold text-white">+91 99994 66148</span>
            </div>

            {/* Visit card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center sm:w-64">
              <Globe className="text-[#00b5e0] mb-3" size={24} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7fa8cb] mb-1">VISIT US</span>
              <span className="font-sans text-base font-bold text-white">logiccentra.com</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" className="rounded-md" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
