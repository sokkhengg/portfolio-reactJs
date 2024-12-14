import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing LinkedIn and GitHub icons

export default function Footer() {
  // List of navigation links in the footer
  const listNavbar = [
    { name: 'Home', link: '#' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Language', link: '#language' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    // Footer Container with GitHub Dark Mode Background
    <footer className='bg-githubBg text-githubText rounded-lg shadow-lg py-6'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        
        {/* Footer Branding */}
        <span className='text-ms sm:text-center'>
          &copy; {new Date().getFullYear()}{' '}
          <a href='#' className='hover:underline text-githubGreen'>
            Portfolio
          </a>
          . All Rights Reserved.
        </span>
        
        {/* Navigation Links */}
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium md:mt-0'>
          {listNavbar.map((item, index) => (
            <li key={index} className='mr-4 md:mr-6'>
              <a href={item.link} className='hover:text-githubGreen transition-colors duration-300'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className='flex mt-4 space-x-6 md:mt-0'>
          {/* LinkedIn Icon */}
          <a
            href='https://www.linkedin.com/in/sokhengteang/' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-githubText hover:text-githubGreen transition-colors duration-300'
          >
            <FaLinkedin size={24} />
          </a>
          
          {/* GitHub Icon */}
          <a
            href='https://github.com/sokkhengg' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-githubText hover:text-githubGreen transition-colors duration-300'
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
