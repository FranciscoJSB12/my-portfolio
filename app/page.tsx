import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import Navbar from '@/components/ui/Navbar/Navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
      </section>
    </main>
  );
}
