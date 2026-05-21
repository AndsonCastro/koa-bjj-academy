import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Schedule from './components/Schedule';
import Plans from './components/Plans';
import KidsSection from './components/KidsSection';
import Instructors from './components/Instructors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Schedule />
        <Plans />
        <KidsSection />
        <Instructors />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
