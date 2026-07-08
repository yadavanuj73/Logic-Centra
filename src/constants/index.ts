import type { NavItem, Stat, PortfolioItem, ServiceItem, BlogPost, ContactDetail, FooterColumn } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export const STATS: Stat[] = [
  { value: '08+', label: 'YEARS OF OPERATION' },
  { value: '366+', label: 'PROJECTS DELIVERED' },
  { value: '45+', label: 'SPECIALISTS' },
  { value: '10+', label: 'COUNTRIES SERVED' },
  { value: '24/7', label: 'GLOBAL SUPPORT' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'burger-bae',
    category: 'ECOMMERCE & RETAIL',
    title: 'Burger Bae Clothing: Next-Gen Fashion',
    description: 'A premium digital shopping experience with localized omnichannel logistics.',
    cta: 'Case Study',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
    variant: 'featured',
  },
  {
    id: 'rupiksha',
    category: 'FINTECH',
    title: 'Rupiksha',
    image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600',
    variant: 'secondary',
    bgClass: 'bg-[#e8e8eb]',
    textClass: 'text-[#00273d]',
    categoryClass: 'text-[#006d3d]',
  },
  {
    id: 'wellbeing',
    category: 'HEALTH TECH',
    title: 'Wellbeing',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
    variant: 'secondary',
    bgClass: 'bg-[#00b5e0]',
    textClass: 'text-[#00273d]',
    categoryClass: 'text-[#00273d]',
  },
  {
    id: 'enterprise-erp',
    category: 'ENTERPRISE',
    title: 'CloudSync ERP',
    description: 'A modular enterprise resource planning platform with real-time analytics dashboards.',
    cta: 'Case Study',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    variant: 'featured',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 'healthtrack',
    category: 'HEALTH TECH',
    title: 'HealthTrack Pro',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    variant: 'secondary',
    bgClass: 'bg-[#006d3d]',
    textClass: 'text-white',
    categoryClass: 'text-[#6cfda8]',
    tags: ['Flutter', 'Node.js'],
  },
  {
    id: 'eduverse',
    category: 'EDTECH',
    title: 'EduVerse',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
    variant: 'secondary',
    bgClass: 'bg-[#00273d]',
    textClass: 'text-white',
    categoryClass: 'text-[#6cfda8]',
    tags: ['React Native', 'Python'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Architecting native and cross-platform mobile experiences that dominate market share.',
    tags: ['SWIFT', 'KOTLIN', 'FLUTTER'],
    icon: 'Smartphone',
  },
  {
    id: 'web-architecture',
    title: 'Website Architecture',
    description: 'Developing high-load web systems and elegant enterprise portals with SEO precision.',
    tags: ['REACT', 'NODE.JS', 'NEXT.JS'],
    icon: 'Globe',
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    description: "Data-driven performance marketing to amplify your brand's digital footprint globally.",
    tags: ['SEO', 'PPC', 'ROI FOCUS'],
    icon: 'TrendingUp',
  },
  {
    id: 'saas-platforms',
    title: 'SaaS Platforms',
    description: 'End-to-end SaaS product development from architecture to launch and scale.',
    tags: ['MULTI-TENANT', 'MICROSERVICES', 'AWS'],
    icon: 'Cloud',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Crafting intuitive, research-driven interfaces that convert visitors into loyal customers.',
    tags: ['FIGMA', 'DESIGN SYSTEMS', 'PROTOTYPING'],
    icon: 'Layers',
  },
  {
    id: 'security',
    title: 'Security Testing',
    description: 'Comprehensive security audits and penetration testing to protect your digital assets.',
    tags: ['VAPT', 'ISO 27001', 'OWASP'],
    icon: 'Shield',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-mobile',
    category: 'TECHNOLOGY',
    date: 'MAY 2024',
    title: 'The Role of AI in Mobile App Development',
    description: 'AI is revolutionizing how we interact with mobile devices. From predictive analysis to generative interfaces...',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'api-strategies',
    category: 'ARCHITECTURE',
    date: 'MAY 2024',
    title: 'Scaling Through Modern API Strategies',
    description: 'Learn how a robust API-first approach can accelerate your time-to-market and ensure long-term scalability...',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'local-businesses',
    category: 'BUSINESS',
    date: 'APRIL 2024',
    title: 'Helping Local Businesses Go Digital',
    description: 'A case study on how we transitioned a regional retail chain into a national digital powerhouse through strategic…',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    title: 'Call Us',
    value: '+91 - 8887998502',
    href: 'tel:+918887998502',
    icon: 'Phone',
  },
  {
    title: 'Email Us',
    value: 'sales@logiccentra.com',
    href: 'mailto:sales@logiccentra.com',
    icon: 'Mail',
  },
  {
    title: 'Location',
    value: 'B-53 Ground floor Sector 2, Noida 201301',
    href: 'https://www.google.com/maps?q=28.586124420166016,77.31573486328125&z=17&hl=en',
    icon: 'MapPin',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Why Logic Centra?',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'How it Works', href: '/#about' },
      { label: 'Our Vision', href: '/#about' },
      { label: 'Client Reviews', href: '/#about' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Android App Development', href: '/services?scroll=services' },
      { label: 'Web Development', href: '/services?scroll=services' },
      { label: 'UI/UX Design', href: '/services?scroll=services' },
      { label: 'Cloud Solution', href: '/services?scroll=services' },
      { label: 'Digital Strategy', href: '/services?scroll=services' },
      { label: 'E-commerce Solution', href: '/services?scroll=services' },
      { label: 'Enterprise Software', href: '/services?scroll=services' },
    ],
  },
  {
    title: 'Industries We Serve',
    links: [
      { label: 'Fintech', href: '#' },
      { label: 'Healthcare', href: '#' },
      { label: 'Retail', href: '#' },
      { label: 'EduTech', href: '#' },
      { label: 'Education', href: '#' },
      { label: 'IT Services', href: '#' },
    ],
  },
  {
    title: 'Locations We Serve',
    links: [
      { label: 'India', href: '#' },
      { label: 'USA', href: '#' },
      { label: 'UK', href: '#' },
      { label: 'Canada', href: '#' },
      { label: 'UAE', href: '#' },
      { label: 'Australia', href: '#' },
    ],
  },
];

export const INTEREST_OPTIONS = [
  'Enterprise Software Solutions',
  'Mobile App Development',
  'Web Engineering',
  'UI/UX Design',
  'Digital Marketing',
  'Security Testing',
  'SaaS Platform',
  'Request Demo',
  'Request a Quote',
  'Book a Call',
  'Other',
];
