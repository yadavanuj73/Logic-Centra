export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description?: string;
  cta?: string;
  image: string;
  tags?: string[];
  variant: 'featured' | 'secondary';
  bgClass?: string;
  textClass?: string;
  categoryClass?: string;
  href?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface ContactDetail {
  title: string;
  value: string;
  href?: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  interest: string;
  message: string;
}
