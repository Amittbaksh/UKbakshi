import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import MicrosoftExpertise from '@/components/MicrosoftExpertise';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MicrosoftExpertise />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
