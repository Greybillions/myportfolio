import { navLinks } from '../data';
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav
      id='nav'
      className='flex relative w-full justify-between items-center py-4 px-4'
    >
      <a href='#nav' className='caprasimo-regular text-2xl block'>
        Graham.dev
      </a>
      <div className='hidden lg:flex justify-between w-[55%]'>
        <ul className='flex gap-4'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className='text-xl font-semibold transition-all hover:text-[#7c7f90]'
                href={link.href}
                target={link.target}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href='#'
          className='text-lg flex items-center justify-center font-semibold px-4 py-1 bg-gray-700 transition-all hover:scale-105 text-white rounded-full'
        >
          <BsDownload className='mr-2 text-[16px]' />
          Resume
        </a>
        {/* // TODO: resume pdf */}
      </div>
      <button className='lg:hidden hover:text-[#7c7f90] transition-all text-3xl'>
        <HiMenuAlt2 />
      </button>
    </nav>
  );
};

export default Nav;
