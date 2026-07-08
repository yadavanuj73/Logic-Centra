import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { FOOTER_COLUMNS } from '../../constants';

export function Footer() {
  return (
    <footer className="w-full bg-[#00273d] border-t border-[rgba(255,255,255,0.08)]">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-8 sm:px-8 lg:px-16 lg:py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          <div className="flex flex-col items-start gap-6">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/logic-logo.png"
                alt="Logic Centra Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-sans text-sm font-normal leading-5 tracking-[0] text-[#7fa8cb]">
              Precise Engineering, Corporate Trust.<br />
              India's most trusted partner for digital<br />
              dominance.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-sm text-[#7fa8cb] transition-colors hover:text-white hover:bg-white/10"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-sm text-[#7fa8cb] transition-colors hover:text-white hover:bg-white/10"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-sm text-[#7fa8cb] transition-colors hover:text-white hover:bg-white/10"
              >
                <Github size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-sm text-[#7fa8cb] transition-colors hover:text-white hover:bg-white/10"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col items-start gap-6">
              <h3 className="font-sans text-sm font-bold leading-4 tracking-[0.70px] text-white">
                {column.title}
              </h3>
              <ul className="flex w-full flex-col items-start gap-2">
                {column.links.map((link) => (
                  <li key={link.label} className="w-full">
                    {link.href.startsWith('/#') || link.href === '#' ? (
                      <a
                        href={link.href}
                        className="font-sans text-sm font-normal leading-5 text-[#7fa8cb] transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="font-sans text-sm font-normal leading-5 text-[#7fa8cb] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
