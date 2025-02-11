import React from 'react';
import Link from 'next/link';
import { projects } from '@/data';

import Image from 'next/image';

import { TbBrandThreejs } from 'react-icons/tb';
import { FaReact, FaCcStripe } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import {
  SiJavascript,
  SiClerk,
  SiFirebase,
  SiTypescript,
} from 'react-icons/si';

const Projects = () => {
  return (
    <section
      id='projects'
      className='p-4 relative h-full mt-10 w-full bg-gray-700 text-gray-300'
    >
      <h2 className='caprasimo-regular uppercase text-center md:text-left text-3xl lg:text-6xl mt-5 md:ml-10'>
        Projects
      </h2>
      <div className='flex flex-col md:flex-row flex-wrap gap-12 items-center   justify-center  mt-10'>
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
                    ) : tool === 'Firebase' ? (
                      <SiFirebase />
                    ) : tool === 'Next' ? (
                      <RiNextjsFill />
                    ) : tool === 'clerk' ? (
                      <SiClerk />
                    ) : tool === 'Stripe' ? (
                      <FaCcStripe />
                    ) : tool === 'Typescript' ? (
                      <SiTypescript />
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
    </section>
  );
};

export default Projects;
