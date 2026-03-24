import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline/30">
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-headline font-extrabold text-lg">CH</span>
          </div>
          <div className="text-lg font-extrabold text-primary font-headline tracking-tight uppercase">
            Contemporary Homes
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary font-headline font-bold text-sm uppercase tracking-wider transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="tel:1-800-493-7677"
            className="hidden sm:flex items-center px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-sm bg-primary text-white gap-2"
          >
            <Phone className="w-4 h-4" />
            Emergency Call
          </a>
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline/20 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-on-surface-variant hover:text-primary font-headline font-bold text-sm uppercase tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:1-800-493-7677"
            className="flex sm:hidden items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-primary text-white gap-2 mt-4"
          >
            <Phone className="w-4 h-4" />
            Emergency Call
          </a>
        </div>
      )}
    </nav>
  );
}