import HeroSection from './landing/HeroSection';
import AboutSection from './landing/AboutSection';
import HowItWorks from './landing/HowItWorks';
import AIHighlight from './landing/AIHighlight';
import Testimonials from './landing/Testimonials';
import FinalCTA from './landing/FinalCTA';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [isHome]);
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
