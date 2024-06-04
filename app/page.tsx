import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import ProjectsSection from '@/components/Home/ProjectsSection';
import ContactSection from '@/components/Home/ContactSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </section>
      <ContactSection />
    </main>
  );
}
