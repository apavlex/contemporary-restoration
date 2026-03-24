import { motion } from 'framer-motion';

const KITCHEN_AFTER = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/a71b73b8d_generated_98f27aa8.png";
const KITCHEN_BEFORE = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/61e164016_generated_f848c723.png";
const EXTERIOR_AFTER = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/386d0721f_IMG_0199.jpg";
const EXTERIOR_BEFORE = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/1a92422e2_IMG_0198.jpg";
const KITCHEN_AFTER_2 = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/7cfcf4077_IMG_0202.jpg";
const KITCHEN_BEFORE_2 = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/92e4cdef9_IMG_0200.jpg";
const BATHROOM_AFTER = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/d8dadaca1_IMG_0211.jpg";
const BATHROOM_BEFORE = "https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/b839df2df_IMG_0210.jpg";

export default function PortfolioSection() {
  return (
    <section className="py-24 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-20 lg:mb-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          
          <h2 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface mb-6 lg:mb-8 leading-none">
            Restoration <span className="italic font-light text-primary">Portfolio</span>
          <p className="text-xl lg:text-2xl text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed">
            Witness the transformation from devastation to pristine restoration. Our results speak for our commitment to excellence and high-end craftsmanship.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-48">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-all duration-700">
                <img
                  alt="Kitchen After Restoration"
                  className="w-full h-full object-cover"
                  src="https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/990a5105b_IMG_0230.jpg" />
                
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/90 backdrop-blur-sm text-on-surface text-xs lg:text-sm font-bold uppercase tracking-widest px-6 py-2.5 lg:px-8 lg:py-3 rounded-full shadow-lg">
                  Final Result
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 lg:-ml-24 z-10 space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}>
              
              <div className="bg-surface-container/95 backdrop-blur-lg p-8 lg:p-16 rounded-2xl shadow-xl border border-white/50">
                <h3 className="text-2xl lg:text-4xl font-headline font-extrabold text-on-surface mb-4 lg:mb-6 leading-tight">
                  Comprehensive Home Restoration - Lincoln Park
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-base lg:text-lg mb-6 lg:mb-8">
                  This project involved a full-scale restoration of a historic home. From initial water extraction and mold remediation to complete structural repairs and a modern kitchen upgrade.
                </p>
                <div className="relative rounded-xl overflow-hidden h-48 lg:h-64 shadow-md">
                  <img
                    alt="Kitchen Before Restoration"
                    className="w-full h-full object-cover"
                    src="https://media.base44.com/images/public/69c2dfddddd2bac4ea658d31/e7f931518_IMG_2886.jpg" />
                  
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Before Restoration
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-5 order-2 lg:order-1 z-10 lg:-mr-24"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}>
              
              <div className="bg-surface-container/95 backdrop-blur-lg p-8 lg:p-16 rounded-2xl shadow-xl border border-white/50">
                <h3 className="text-2xl lg:text-4xl font-headline font-extrabold text-on-surface mb-4 lg:mb-6 leading-tight">Interior & Exterior Remodel

                </h3>
                <p className="text-on-surface-variant leading-relaxed text-base lg:text-lg mb-6 lg:mb-8">
                  A complete revitalization of a classic residence. This project spanned from structural exterior repairs and fresh siding to a total interior overhaul with modern, high-efficiency finishes.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative rounded-xl overflow-hidden h-28 lg:h-36 shadow-md">
                    <img alt="Exterior Before" className="w-full h-full object-cover" src={EXTERIOR_BEFORE} />
                  </div>
                  <div className="relative rounded-xl overflow-hidden h-28 lg:h-36 shadow-md">
                    <img alt="Kitchen Before" className="w-full h-full object-cover" src={KITCHEN_BEFORE_2} />
                  </div>
                  <div className="relative rounded-xl overflow-hidden h-28 lg:h-36 shadow-md">
                    <img alt="Bathroom Before" className="w-full h-full object-cover" src={BATHROOM_BEFORE} />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
              
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl col-span-2">
                  <img alt="Exterior After" className="w-full h-64 lg:h-96 object-cover" src={EXTERIOR_AFTER} />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="Kitchen After" className="w-full h-48 lg:h-64 object-cover" src={KITCHEN_AFTER_2} />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="Bathroom After" className="w-full h-48 lg:h-64 object-cover" src={BATHROOM_AFTER} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}