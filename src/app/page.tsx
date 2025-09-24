import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import HowItWorks from '../components/landing/HowItWorks';
import AIHighlight from '../components/landing/AIHighlight';
import Testimonials from '../components/landing/Testimonials';
import FinalCTA from '../components/landing/FinalCTA';

export default function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <AIHighlight />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
