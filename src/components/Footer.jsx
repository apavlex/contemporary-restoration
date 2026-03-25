import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-on-surface pt-16 lg:pt-24 pb-10 lg:pb-12 px-6 lg:px-8 text-white/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14 lg:mb-20">
        <div className="space-y-5 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center">
            <img src="https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/1785ba901_CHLOGOWebsite.png" alt="Contemporary Homes" className="h-44 w-auto brightness-0 invert" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Professional water damage restoration and mold remediation specialists. Available 24/7 for all emergencies with a commitment to quality.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-5 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-3">
            {['Privacy Policy', 'Terms of Service', 'Emergency Tips', 'FAQ'].map((link) => (
              <li key={link}>
                <a className="text-white/60 hover:text-primary transition-colors text-sm" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-5 uppercase tracking-widest text-xs">Services</h4>
          <ul className="space-y-3">
            {['Water Extraction', 'Mold Removal', 'Dehumidification', 'Smoke Damage'].map((service) => (
              <li key={service}>
                <a className="text-white/60 hover:text-primary transition-colors text-sm" href="#">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-5 uppercase tracking-widest text-xs">Contact Info</h4>
          <div className="space-y-3">
            <p className="text-sm text-white/60">
              Emergency Hotline:{' '}
              <span className="text-white block font-bold mt-1">(800) 493-7677</span>
            </p>
            <p className="text-sm text-white/60">
              Email:{' '}
              <span className="text-white block font-bold mt-1">help@contemporaryhomes.com</span>
            </p>
            <p className="text-sm text-white/60">
              HQ:{' '}
              <span className="text-white block font-bold mt-1">123 Restoration Way, Suite 100</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 lg:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
        <p className="text-white/40 text-sm">
          © 2024 Contemporary Homes Restoration. IICRC Certified Firm.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">
              Fully Licensed &amp; Insured
            </span>
          </div>
          <span className="text-white/20">·</span>
          <a href="https://adhello.ai" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-80 transition-opacity flex items-center gap-2">
            <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Website Designed By</span>
            <img src="https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/ed43ad87e_logo-darkcopy.png" alt="AdHello.ai" className="h-5 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}