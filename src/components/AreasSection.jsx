import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const areas = ['Portland', 'Beaverton', 'Hillsboro', 'Gresham', 'Tigard', 'Lake Oswego'];

export default function AreasSection() {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface mb-4 lg:mb-6">
            Areas We Serve
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg">
            Serving Portland, OR and surrounding areas with rapid response restoration units.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12 lg:mb-20">
          {areas.map((area) => (
            <div
              key={area}
              className="py-5 lg:py-6 px-4 bg-surface-container border border-outline/20 rounded-xl hover:border-primary/50 hover:bg-white transition-all text-center group cursor-default"
            >
              <span className="text-on-surface font-bold group-hover:text-primary transition-colors text-sm lg:text-base">
                {area}
              </span>
            </div>
          ))}
        </div>

        <div className="relative h-[350px] lg:h-[550px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-outline/20">
          <iframe
            allowFullScreen
            className="w-full h-full border-0 grayscale contrast-125 opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178787.95400977804!2d-122.82523292410712!3d45.5434084566373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9f6f6f18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1710434567890!5m2!1sen!2sus"
            title="Service Area Map"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
            <div className="bg-white/95 backdrop-blur-md text-on-surface px-6 py-3 lg:px-10 lg:py-5 rounded-full font-bold shadow-2xl flex items-center border border-outline/20 text-sm lg:text-base">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-primary" />
              Serving Portland, OR and surrounding areas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}