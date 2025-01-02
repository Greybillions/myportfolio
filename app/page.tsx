import Footer from '@/components/Footer';
import Hero from '@/components/hero/page';

import Nav from '@/components/Nav';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
