import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Clientele from '@/components/sections/clientele';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Expertise from '@/components/sections/expertise';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Clientele />
      <Blog />
      <Contact />
    </main>
  );
}
