import { Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

const KITCHEN_IMG = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/4b2ce33d3_generated_323e85b4.png";
const BATHROOM_IMG = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/f6a214250_generated_0f95b3d6.png";

export default function RemodelingSection() {
  return (
    <section id="services" className="py-24 lg:py-40 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16 lg:mb-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-on-surface mb-6 lg:mb-8">
            Expert Kitchen &amp; Bathroom Remodeling
          </h2>
          <p className="text-lg lg:text-xl text-on-surface-variant">
            From emergency recovery to aesthetic elegance. Whether we are rebuilding your home after water damage or you're ready for a long-awaited upgrade, our master craftsmen deliver specialized remodeling services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-24">
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8 lg:mb-12 shadow-2xl h-[400px] lg:h-[600px]">
              <img
                alt="Modern Kitchen Remodel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={KITCHEN_IMG}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 lg:bottom-10 lg:left-10 lg:right-10">
                <h3 className="text-3xl lg:text-4xl font-headline font-extrabold text-white mb-3 lg:mb-4">
                  Kitchen Transformations
                </h3>
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                  Elevate your culinary space with modern upgrades and custom precision cabinetry.
                </p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-base lg:text-lg">
              We design kitchens that are as functional for daily life as they are stunning for entertaining, using high-end quartz or granite finishes that withstand the test of time.
            </p>
          </motion.div>

          <motion.div
            className="group pt-0 md:pt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8 lg:mb-12 shadow-2xl h-[400px] lg:h-[600px]">
              <img
                alt="Clean Bathroom Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={BATHROOM_IMG}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 lg:bottom-10 lg:left-10 lg:right-10">
                <h3 className="text-3xl lg:text-4xl font-headline font-extrabold text-white mb-3 lg:mb-4">
                  Bathroom Sanctuary
                </h3>
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                  Create your personal retreat with spa-inspired designs featuring luxury materials.
                </p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-base lg:text-lg">
              We specialize in moisture-resistant construction to ensure your sanctuary remains pristine for years, featuring waterproof luxury materials and modern fixtures.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center pt-4 lg:pt-8">
          <button className="px-12 py-5 lg:px-16 lg:py-6 bg-primary text-white font-bold text-lg lg:text-xl rounded-full hover:brightness-110 transition-all shadow-2xl flex items-center gap-3 lg:gap-4">
            <Ruler className="w-5 h-5 lg:w-6 lg:h-6" />
            Get a Remodel Quote
          </button>
        </div>
      </div>
    </section>
  );
}