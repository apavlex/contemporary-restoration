import { Bell, Droplets, Wind, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Bell,
    title: 'Emergency Assessment',
    text: 'Immediate arrival on-site to assess damage and stop the source of water infiltration. We bring calm to the chaos from the first minute.',
    progress: 'w-1/4',
  },
  {
    icon: Droplets,
    title: 'Water Extraction',
    text: 'Water extraction and moisture mapping using advanced thermal imaging technology. We meticulously find every hidden drop.',
    progress: 'w-2/4',
  },
  {
    icon: Wind,
    title: 'Drying & Remediation',
    text: 'Professional drying, dehumidification, and mold prevention across all surfaces. Ensuring your air and environment is pure again.',
    progress: 'w-3/4',
  },
  {
    icon: Wrench,
    title: 'Full Restoration',
    text: 'Structural repairs and final inspection to return your property to pre-loss condition. You walk back into a home that feels like yours again.',
    progress: 'w-full',
  },
];

export default function BlueprintSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-20">
        <div className="max-w-2xl">
          <h2 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary mb-6 leading-none">
            Our Restoration <span className="italic font-light">Blueprint</span>
          </h2>
          <p className="text-on-surface-variant text-xl font-body">
            A meticulous journey from crisis to calm, handled with human care and expert precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface-container p-8 lg:p-12 rounded-2xl border border-transparent group-hover:border-primary/20 transition-all h-full">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center mb-8 lg:mb-10 shadow-sm text-secondary">
                <step.icon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <h4 className="text-xl font-headline font-extrabold text-on-surface mb-3 italic">{step.title}</h4>
              <p className="text-on-surface-variant leading-relaxed text-base">{step.text}</p>
              <div className="mt-8 lg:mt-12 h-1 w-full bg-outline/20 rounded-full relative">
                <div className={`absolute left-0 top-0 h-full ${step.progress} bg-primary rounded-full`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}