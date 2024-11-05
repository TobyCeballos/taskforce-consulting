import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Clients />
      <Contact />
      <FAQ />
      <Location />
    </div>
  );
}