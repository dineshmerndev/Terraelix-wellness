import { useEffect, useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Certifications from '@/components/Certifications';
import Bestsellers from '@/components/Bestsellers';
import Benefits from '@/components/Benefits';
import Ingredients from '@/components/Ingredients';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Bundle from '@/components/Bundle';
import Faq from '@/components/Faq';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import StickyCart from '@/components/StickyCart';
import WellnessAssistant from '@/components/WellnessAssistant';
import MouseGlow from '@/components/MouseGlow';
import Particles from '@/components/Particles';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen />
      <MouseGlow />
      <SmoothScroll>
        <div className="relative min-h-screen bg-white font-inter">
          <Particles />
          <Navbar />
          <Hero />
          <Marquee />
          <Certifications />
          <Bestsellers />
          <Benefits />
          <Ingredients />
          <HowItWorks />
          <Testimonials />
          <Bundle />
          <Faq />
          <Newsletter />
          <Footer />
        </div>
      </SmoothScroll>
      <StickyCart />
      <WellnessAssistant />
    </>
  );
}

export default App;
