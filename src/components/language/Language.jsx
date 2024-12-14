import React from 'react';
import { FaFlagUsa, FaGlobeAmericas } from 'react-icons/fa'; // Importing icons from react-icons

export default function Language() {
  // List of languages and proficiency levels as per the resume
  const languages = [
    { code: 'En', name: 'English', level: 'Good' },
    { code: 'Kh', name: 'Khmer', level: 'Fluent' },
  ];

  return (
    // Language Section with GitHub Dark Mode Background
    <section
      id='language'
      data-aos='fade-up'
      data-aos-delay='400'
      className='bg-githubBg py-16'
    >
      <div className='container mx-auto px-5'>
        {/* Section Title */}
        <h2 className='mb-12 text-4xl font-extrabold text-center text-githubText'>
          Languages
        </h2>

        {/* Languages Grid */}
        <div className='flex flex-wrap justify-center gap-10 md:gap-20'>
          {languages.map((language, index) => (
            <div
              key={index}
              className='achievement flex flex-col items-center text-center'
            >
              {/* Language Icon Circle */}
              <div className='relative flex items-center justify-center w-20 h-20 md:w-16 md:h-16 bg-githubInputBg rounded-full shadow-lg mb-6 md:mb-8'>
                {/* Gradient Border */}
                <div className='absolute inset-0 rounded-full bg-gradient-to-b from-githubGreen to-githubText shadow-[0_0_20px_rgba(35,134,54,0.7)]'></div>

                {/* Language Icon */}
                <div className='relative z-10 text-xl md:text-2xl text-githubText'>
                  {language.code === 'En' ? (
                    <FaFlagUsa /> // English - USA Flag Icon
                  ) : language.code === 'Kh' ? (
                    <FaGlobeAmericas /> // Khmer - General Globe Icon
                  ) : (
                    <FaGlobeAmericas /> // Default Icon if needed
                  )}
                </div>
              </div>

              {/* Language Name */}
              <span className='text-xl md:text-xl font-semibold text-githubText'>
                {language.name}
              </span>

              {/* Proficiency Level */}
              <span className='mt-2 text-lg md:text-xl font-bold text-githubGreen'>
                {language.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
