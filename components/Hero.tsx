import React from 'react';
import Image from 'next/image';
import heroImg from '../public/hero.svg';
import { heroText } from '@/data';

const Hero = () => {
  return (
    <section className='px-4 md:h-screen h-full w-full my-1 md:my-3'>
      <div className='flex flex-col w-full h-full md:justify-around md:gap-6 md:flex-row items-center'>
        <div className='md:w-[50%]'>
          <h1 className='caprasimo-regular uppercase mt-10 md:mt-0 text-center text-6xl lg:text-8xl'>
            Frontend Engineer
          </h1>
          <p className='md:flex hidden md:mt-8 pretty-regular font-semibold text-center text-2xl'>
            {heroText}
          </p>
        </div>

        <div>
          <Image src={heroImg} alt='grey' />
        </div>
        <p className='md:hidden flex pretty-regular font-semibold text-left text-2xl'>
          {heroText}
        </p>
      </div>
    </section>
  );
};

export default Hero;
