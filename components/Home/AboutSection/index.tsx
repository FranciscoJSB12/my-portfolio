'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from '../Tab/TabButton';
import TabPill from '../Tab/TabPill';
import PillList from '../Tab/PillList';
import skills from '@/constants/skills';

enum Tabs {
  skills,
}

const TAB_DATA = [
  {
    id: Tabs.skills,
    content: (
      <PillList>
        {skills.map(t => (
          <TabPill
            key={t}
            text={t}
          />
        ))}
      </PillList>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState(Tabs.skills);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: Tabs) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <article id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16'>
        <figure className='mb-10'>
          <div className='bg-[#181818] w-full max-w-[400px] rounded-lg mx-auto md:mx-0'>
            <Image
              src={'/images/logo.png'}
              alt='logo of Francisco'
              width={400}
              height={400}
            />
          </div>
        </figure>
        <div>
          <h2 className='text-left text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-blue-200'>
            Sobre Mí
          </h2>
          <p className='text-left text-base md:text-lg text-[#ADB7BE]'>
            Tengo más de dos años de experiencia trabajando en proyectos
            propios. Otro dato importante es que hablo inglés. Me encanta el
            desarrollo móvil, conozco muy bien React Native y he desarrollado
            Apps con Flutter, sin embargo, no me limito a estas tecnologías,
            también programo páginas web como esta y hago desarrollo backend.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange(Tabs.skills)}
              active={tab === Tabs.skills}
            >
              Habilidades
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find(t => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutSection;
