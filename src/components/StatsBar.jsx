import { Clock, Timer, MapPin, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Clock, title: '24/7 Availability', subtitle: 'Always Ready' },
  { icon: Timer, title: '30-Min Response', subtitle: 'Rapid Dispatch' },
  { icon: MapPin, title: 'On-Site in 2 Hours', subtitle: 'Local Experts' },
  { icon: ShieldCheck, title: 'Insurance Claims', subtitle: 'Direct Billing' },
];

export default function StatsBar() {
  return (
    <section className="py-16 lg:py-20 bg-surface-container border-y border-outline/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                <stat.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-on-surface font-bold text-base lg:text-lg">{stat.title}</p>
                <p className="text-xs text-on-surface-variant tracking-wide uppercase">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}