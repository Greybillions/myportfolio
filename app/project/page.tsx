import React from 'react';
import Link from 'next/link';
import { projects } from '@/data';

import Image from 'next/image';

import { TbBrandThreejs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackNav';

const Project = () => {
  return (
    <section id='projects' className='w-full h-full bg-gray-700 text-gray-300'>
      <div className='p-4 max-w-7xl mx-auto relative h-full w-full bg-gray-700 text-gray-300'>
        <Nav />
        <div className='my-6 md:ml-6'>
          <BackButton />
        </div>

        <h2 className='caprasimo-regular uppercase text-center text-3xl lg:text-5xl mt-5 md:ml-10'>
          Projects
        </h2>
        <div
          className='flex flex-col mb-6 md:mb-20
       md:flex-row flex-wrap gap-12 items-center   justify-center  mt-10'
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className='flex flex-col gap-1 items-center justify-between md:w-[30%]'
            >
              <div className='text-left w-full'>
                <h3 className='caprasimo-regular text-xl border-b border-[#c6ff00]'>
                  {project.name}
                </h3>
                <p className='pretty-regular text-sm my-2'>
                  {project.description}
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <Link
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  className='pretty-regular text-[#c6ff00]'
                >
                  Github
                </Link>
                <Link
                  href={project.demo}
                  target='_blank'
                  rel='noreferrer'
                  className='pretty-regular text-[#c6ff00]'
                >
                  {index === 2 || index === 5 ? 'Live Website' : 'Demo'}
                </Link>
              </div>

              <div className='my-2'>
                <Image
                  src={project.image}
                  alt={project.name}
                  height={300}
                  width={400}
                />
              </div>
              <div className='flex gap-4 items-center justify-start w-full'>
                <p className='pretty-regular font-semibold'>Tools used:</p>
                <ul className='flex gap-2'>
                  {project.tools.map((tool, index) => (
                    <li
                      key={index}
                      className='pretty-regular text-xl text-[#c6ff00]'
                    >
                      {tool === 'React' ? (
                        <FaReact />
                      ) : tool === 'Tailwind' ? (
                        <RiTailwindCssFill />
                      ) : tool === 'Three.js' ? (
                        <TbBrandThreejs />
                      ) : tool === 'JavaScript' ? (
                        <SiJavascript />
                      ) : (
                        tool
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Project;
