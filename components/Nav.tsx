'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../data';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id='nav'
      className='flex relative w-full justify-between items-center py-4 px-4'
    >
      <Link href='#nav' className='caprasimo-regular text-2xl block'>
        Graham.dev
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex justify-between w-[55%]'>
        <ul className='flex gap-4'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className='text-xl font-semibold transition-all hover:text-gray-600'
                href={link.href}
                target={link.target}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-6 justify-center items-center'>
          <Link
            href='/grahamboyle-resume.pdf'
            download='grahamboyle-resume.pdf'
            className='text-lg flex items-center justify-center font-semibold px-4 py-1 bg-gray-700 transition-all hover:scale-105 text-white rounded-full'
          >
            <BsDownload className='mr-2 text-[16px]' />
            Resume
          </Link>
          <Link
            className='text-lg flex items-center justify-center font-semibold px-4 py-1 bg-gray-700 transition-all hover:scale-105 text-white rounded-full'
            href='mailto:grahamboyle22@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className='lg:hidden hover:text-[#c6ff00] transition-all text-3xl'
      >
        {isMenuOpen ? <HiX /> : <HiMenuAlt2 />}
      </button>

      {/* Mobile Navigation */}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={toggleMenu}
          className='lg:hidden hover:text-[#c6ff00] absolute top-4 right-4 transition-all text-3xl'
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt2 />}
        </button>

        <ul className='flex flex-col gap-6 mt-10 p-6'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className='text-lg font-semibold transition-all hover:text-gray-400'
                href={link.href}
                target={link.target}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-4 mt-6 px-6'>
          <Link
            href='/grahamboyle-resume.pdf'
            download='grahamboyle-resume.pdf'
            className='text-lg flex items-center justify-center font-semibold px-4 py-2 bg-gray-700 transition-all hover:scale-105 text-white rounded-full'
          >
            <BsDownload className='mr-2 text-[16px]' />
            Resume
          </Link>
          <Link
            className='text-lg flex items-center justify-center font-semibold px-4 py-2 bg-gray-700 transition-all hover:scale-105 text-white rounded-full'
            href='mailto:grahamboyle22@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
