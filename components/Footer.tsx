import { socialLinks } from '@/data';

import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { BiLogoDevTo } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-around items-center p-4 w-full bg-gray-700'>
      <p className='text-center text-gray-300 md:text-[#c6ff00] font-semibold'>
        &copy; {new Date().getFullYear()} Graham Boyle
      </p>
      <div className='md:hidden h-[1px] w-full my-2 bg-gray-300' />
      <ul className='flex gap-4 mt-2 md:mt-0'>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target='_blank'
              className='text-xl text-[#c6ff00]'
              rel='noopener noreferrer'
            >
              {link.name === 'Github' ? (
                <FiGithub />
              ) : link.name === 'Linkedin' ? (
                <FaLinkedin />
              ) : link.name === 'Hashnode' ? (
                <FaHashnode />
              ) : link.name === 'Dev.to' ? (
                <BiLogoDevTo />
              ) : (
                <FaXTwitter />
              )}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
