import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackNav';
import Projects from '@/components/Projects';

const Project = () => {
  return (
    <section id='projects' className='w-full h-full bg-gray-700 text-gray-300'>
      <div className='p-4 max-w-7xl mx-auto relative h-full w-full bg-gray-700 text-gray-300'>
        <Nav />
        <div className='my-2 md:ml-6'>
          <BackButton />
        </div>
        <Projects />

        <Footer />
      </div>
    </section>
  );
};

export default Project;
