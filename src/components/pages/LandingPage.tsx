import HeroSection from '../landing/HeroSection';
import AboutSection from '../landing/AboutSection';
import HowItWorks from '../landing/HowItWorks';
import AIHighlight from '../landing/AIHighlight';
import Testimonials from '../landing/Testimonials';
import FinalCTA from '../landing/FinalCTA';

const LandingPage = () => {
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
};

export default LandingPage;
