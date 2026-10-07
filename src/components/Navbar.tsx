import { useEffect, useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#expertise', label: 'Microsoft Expertise' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-stone-200 bg-white/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'bg-amber-700' : 'bg-amber-600'
            } text-white`}
          >
            <Shield className="h-5 w-5" />
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}
          >
            UK BAKSHI LTD
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    : 'text-stone-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors lg:inline-flex ${
            scrolled
              ? 'bg-amber-700 text-white hover:bg-amber-800'
              : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
          }`}
        >
          Get in Touch
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`rounded-lg p-2 transition-colors lg:hidden ${
            scrolled ? 'text-stone-900 hover:bg-stone-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-200 bg-white px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-stone-700 transition hover:bg-stone-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-amber-700 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
