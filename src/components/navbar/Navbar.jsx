import React from 'react';

export default function Navbar() {
  // List of navigation links in the navbar
  const listNavbar = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Language', link: '#language' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    // Navbar Header with GitHub Dark Mode Background
    <header
      data-aos='fade-up'
      className='bg-githubBg text-githubText body-font z-10'
    >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        {/* Branding */}
        <a className='flex title-font font-medium items-center text-githubText mb-4 md:mb-0'>
          <span className='ml-3 text-3xl font-bold text-githubText'>Portfolio</span>
        </a>

        {/* Navigation Links */}
        <nav className='md:ml-auto text-base md:mr-auto flex flex-wrap items-center justify-center'>
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='mr-5 hover:text-githubGreen transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <button className='inline-flex items-center py-1 px-7 focus:outline-none text-base text-githubText mt-4 md:mt-0 border border-githubText hover:border-githubGreen hover:text-githubText bg-githubGreen hover:bg-githubHoverGreen rounded-full text-lg font-medium tracking-wide transition-all duration-300'>
          <a href='#contact' className='flex items-center'>
            Contact Me
          </a>
        </button>
      </div>
    </header>
  );
}
