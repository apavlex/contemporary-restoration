import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import BlueprintSection from '../components/BlueprintSection';
import TestimonialSection from '../components/TestimonialSection';
import PortfolioSection from '../components/PortfolioSection';
import RemodelingSection from '../components/RemodelingSection';
import AreasSection from '../components/AreasSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-surface font-body text-on-surface scroll-smooth">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <BlueprintSection />
      <TestimonialSection />
      <PortfolioSection />
      <RemodelingSection />
      <AreasSection />
      <Footer />
    </div>
  );
}