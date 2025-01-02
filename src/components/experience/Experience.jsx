import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; // Importing an icon from react-icons

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden flex flex-col text-[#c9d1d9] body-font bg-[#0d1117] py-16'>
      {/* Subtle Background Shape using CSS */}
      <div className='absolute top-10 right-10 h-64 w-64 bg-gradient-to-br from-[#238636] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>
      <div className='absolute bottom-10 left-10 h-48 w-48 bg-gradient-to-tr from-[#2dba4e] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>

      <div className='container mx-auto px-5 flex flex-col md:flex-row items-start'>
        {/* Icon Section */}
        <div className='flex flex-col items-center md:items-start md:w-1/3 mb-10 md:mb-0'>
          <FaBriefcase className='text-6xl text-[#238636] mb-4' />
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-[#c9d1d9]'>Experience</h1>
        </div>

        {/* Experience Details */}
        <div className='md:w-2/3'>

        {/* Application Developer Intern */}
        <div className='mb-8'>
            <h2 className='title-font font-semibold text-[#c9d1d9] sm:text-2xl'>Application Developer Intern</h2>
            <h3 className='text-[#8b949e] mb-2'>Phnom Penh, Cambodia · Hybrid</h3>
            <span className='text-[#8b949e] mb-2'>Dec '23 - Feb '24</span>
            <ul className='list-disc list-inside text-[#c9d1d9]'>
              <li>Learned API development fundamentals by supporting the creation of REST-based API specifications using Swagger and studying industry standards for integration.
              </li>
              <li>Expanded knowledge of secure development practices by shadowing the Security and Infrastructure team in maintaining DevOps servers and addressing application vulnerabilities.
              </li>
              <li>Developed testing skills by contributing to unit and integration testing efforts, ensuring system reliability for large-scale applications in the telecommunications sector.
              </li>
              <li>Strengthened technical collaboration abilities by participating in meetings with product owners and gained insight into software development lifecycle.</li>
            </ul>
          </div>
          
          {/* Data Science Intern at CSUF */}
          <div className='mb-8'>
            <h2 className='title-font font-semibold text-[#c9d1d9] sm:text-2xl'>Data Science Intern</h2>
            <h3 className='text-[#8b949e] mb-2'>California State University Fullerton, Fullerton, CA</h3>
            <span className='text-[#8b949e] mb-2'>May '23 - Jul '23</span>
            <ul className='list-disc list-inside text-[#c9d1d9]'>
              <li>Conducted in-depth data analysis using Python and Jupyter Notebook, enabling actionable insights for real-world decision-making.</li>
              <li>Delivered a 15% increase in investment returns through the development and testing of a Pairs Trading strategy.</li>
              <li>Collaborated with cross-functional teams to apply statistical methods, enhancing overall project accuracy and outcomes.</li>
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
}
