import React from 'react';
import csufLogo from '../../assets/csuf_logo.png';
import flatironLogo from '../../assets/flatiron_logo.png';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <section id='education' className='relative overflow-hidden flex flex-col text-[#c9d1d9] body-font bg-[#0d1117] py-16'>
      
      {/* Subtle Background Shapes */}
      <div className='absolute top-10 right-10 h-64 w-64 bg-gradient-to-br from-[#238636] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>
      <div className='absolute bottom-10 left-10 h-48 w-48 bg-gradient-to-tr from-[#2dba4e] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>

      <div className='container mx-auto px-5 flex flex-col md:flex-row items-start'>
        
        {/* Education Description */}
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-[#238636] mb-10 md:mb-0'
        >
          <FaGraduationCap className='text-6xl text-[#238636] mb-4' />
          <h1 className='title-font sm:text-4xl text-3xl font-bold text-[#c9d1d9]'>Education</h1>
        
          <p
            data-aos='fade-right'
            data-aos-delay='500'
            className='leading-relaxed text-base text-[#c9d1d9]'
          >
            I have pursued comprehensive education in computer science and software development, equipping me with a solid foundation in various programming languages, frameworks, and methodologies. My academic journey has been complemented by hands-on projects and internships, fostering both technical and soft skills essential for professional growth.
          </p>
        </div>

        {/* Education Entries */}
        <div data-aos='fade-left' data-aos-delay='500' className='md:w-1/2 md:pl-12 flex flex-col space-y-8'>
          
          {/* California State University Fullerton */}
          <div className='flex flex-col md:flex-row items-start'>
            {/* Institution Logo */}
            <img src={csufLogo} alt="California State University Fullerton Logo" className='w-20 h-20 mb-4 md:mb-0 md:mr-6 object-contain' />

            {/* Education Details */}
            <div>
              <h2 className='title-font font-semibold text-2xl text-[#c9d1d9]'>Bachelor of Computer Science</h2>
              <h3 className='text-[#8b949e] mb-2'>California State University Fullerton, Fullerton, CA</h3>
              <span className='text-[#8b949e] mb-2'>Dec '24, [Graduated]</span>
              <ul className='list-disc list-inside text-[#c9d1d9]'>
                <li>Relevant Coursework: Database Management, Data Structures and Algorithms, Operating Systems, Software Engineering with DevOps</li>
                <li>Skills Acquired: Flask, Continuous Integration/Continuous Delivery, PostgreSQL, Agile Methodology, Data Analysis, Strong Writing/Verbal Communication (English, Khmer)</li>
              </ul>
            </div>
          </div>

          {/* Flatiron School Coding Bootcamp */}
          <div className='flex flex-col md:flex-row items-start'>
            {/* Institution Logo */}
            <img src={flatironLogo} alt="Flatiron School Logo" className='w-20 h-20 mb-4 md:mb-0 md:mr-6 object-contain' />

            {/* Education Details */}
            <div>
              <h2 className='title-font font-semibold text-2xl text-[#c9d1d9]'>Coding Bootcamp</h2>
              <h3 className='text-[#8b949e] mb-2'>Flatiron School, [Remote Learning]</h3>
              <span className='text-[#8b949e] mb-2'>Completed</span>
              <ul className='list-disc list-inside text-[#c9d1d9]'>
                <li>Focused on ReactJS, SQL, and DevOps with Ruby</li>
                <li>Developed full-stack applications, enhancing proficiency in modern web development practices</li>
                <li>Collaborated in agile teams, fostering strong teamwork and project management skills</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
