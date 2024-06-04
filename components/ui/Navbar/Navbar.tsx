'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';
import navLinks from '@/constants/navlinks';
import MenuOverlay from './MenuOverlay';
import NavButton from './NavButton';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] py-4'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
        <Link
          href={'/'}
          className='text-2xl md:text-5xl text-white font-semibold'
        >
          <Image
            src={'/images/logo.png'}
            className='rounded-lg border boder-[#ADB7BE]'
            alt='logo of Francisco'
            width={50}
            height={50}
          />
        </Link>
        <div className='block md:hidden'>
          {!isNavbarOpen ? (
            <NavButton onClick={() => setIsNavbarOpen(true)}>
              <Bars3Icon className='h-5 w-5' />
            </NavButton>
          ) : (
            <NavButton onClick={() => setIsNavbarOpen(false)}>
              <XMarkIcon className='h-5 w-5' />
            </NavButton>
          )}
        </div>
        <div
          className='hidden md:block md:w-auto'
          id='navbar'
        >
          <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
            {navLinks.map(link => (
              <li key={link.title}>
                <NavLink
                  href={link.path}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
