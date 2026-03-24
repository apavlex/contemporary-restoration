import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_BG = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/165a15a9a_generated_93c287cb.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Beautifully restored serene home interior"
          className="w-full h-full object-cover opacity-80"
          src={HERO_BG}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-8 w-fit">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
              Immediate Response
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold text-on-surface leading-[1] mb-8">
              24/7 Property Restoration{' '}
              <br />
              <span className="text-primary italic font-light">&amp; Remodeling</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Industrial-grade restoration for homes and businesses. Our elite response team stops the damage before it spreads, ensuring your space returns to its natural beauty.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:1-800-493-7677"
                className="px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold flex items-center shadow-2xl hover:scale-105 transition-all bg-primary text-white gap-3"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                Call Now: (800) 493-7677
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/60 backdrop-blur-2xl p-8 lg:p-10 rounded-2xl border border-white/80 shadow-2xl">
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">
                Schedule Priority Service
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">
                      First Name
                    </label>
                    <input
                      className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary rounded-lg p-3.5 text-on-surface shadow-sm text-sm"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">
                      Last Name
                    </label>
                    <input
                      className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary rounded-lg p-3.5 text-on-surface shadow-sm text-sm"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <input
                  className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary rounded-lg p-3.5 text-on-surface shadow-sm text-sm"
                  placeholder="Email Address"
                  type="email"
                />
                <input
                  className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary rounded-lg p-3.5 text-on-surface shadow-sm text-sm"
                  placeholder="Phone Number"
                  type="tel"
                />
                <select className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary rounded-lg p-3.5 text-on-surface shadow-sm text-sm appearance-none">
                  <option>Service Type: Water Damage</option>
                  <option>Mold Remediation</option>
                  <option>Fire &amp; Smoke Damage</option>
                  <option>Storm Damage</option>
                </select>
                <button className="w-full py-4 bg-secondary text-white font-bold text-base rounded-full hover:brightness-110 transition-all shadow-lg mt-2">
                  Request Instant Callback
                </button>
                <p className="text-[11px] text-center text-on-surface-variant tracking-wider uppercase opacity-70">
                  Estimated response time: 15 minutes
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}