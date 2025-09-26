import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Clientele from '@/components/sections/clientele';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Clientele />
      <Contact />
    </main>
  );
}
