import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-container relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-none">
                Satisfaction <span className="italic font-light text-primary">Guaranteed</span>
              <p className="text-xl lg:text-2xl text-on-surface-variant leading-relaxed font-light">We don't just restore homes; we restore peace of mind. We adhere to the highest industry standards for sanitization and structural integrity.

              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <div className="bg-white p-10 lg:p-16 rounded-2xl shadow-xl relative border border-outline/10">
              <Quote className="w-16 h-16 text-primary/10 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-xl lg:text-2xl italic text-on-surface mb-10 lg:mb-12 leading-relaxed font-light">
                  "Our basement flooded at 2 AM on a Saturday. Contemporary Homes arrived within 45 minutes with a full team. They handled the insurance company directly and saved our hardwood floors. Professional and efficient."
                </p>
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg lg:text-xl">
                    JD
                  </div>
                  <div>
                    <p className="font-bold text-lg text-on-surface">Jonathan D.</p>
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                      Homeowner, Chicago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}