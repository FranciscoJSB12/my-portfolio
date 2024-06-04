'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';

enum Tabs {
  skills,
  certifications,
}

const AboutSection = () => {
  const [tab, setTab] = useState(Tabs.skills);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: Tabs) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <article>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16'>
        <figure className='mb-10'>
          <Image
            src={'/images/logo.png'}
            alt='logo of Francisco'
            className='rounded-lg border-2 boder-[#ADB7BE]'
            width={460}
            height={460}
          />
        </figure>
        <div>
          <h2 className='text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200'>
            Sobre Mí
          </h2>
          <p className='text-base md:text-lg text-[#ADB7BE]'>
            Como desarrollador Full stack puedo trabajar cómodamente en el
            Frontend y en el Backend, tengo más de dos años de experiencia
            trabajando en proyectos propios. Otro dato importante es que también
            hablo inglés (nivel C1).&nbsp;
            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200'>
              ¿Te interesa el stack de tecnologías que manejo?
            </span>
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange(Tabs.skills)}
              active={tab === Tabs.skills}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(Tabs.certifications)}
              active={tab === Tabs.certifications}
            >
              Certificaciones
            </TabButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutSection;
