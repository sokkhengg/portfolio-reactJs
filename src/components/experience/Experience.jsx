import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden flex flex-col text-[#c9d1d9] body-font bg-[#0d1117] py-16'>
      <div className='absolute top-10 right-10 h-64 w-64 bg-gradient-to-br from-[#238636] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>
      <div className='absolute bottom-10 left-10 h-48 w-48 bg-gradient-to-tr from-[#2dba4e] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>

      <div className='container mx-auto px-5 flex flex-col md:flex-row items-start'>
        <div className='flex flex-col items-center md:items-start md:w-1/3 mb-10 md:mb-0'>
          <FaBriefcase className='text-6xl text-[#238636] mb-4' />
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-[#c9d1d9]'>Experience</h1>
        </div>

        <div className='md:w-2/3'>
          {/* SoCal Data Science Program */}
          <div className='mb-8'>
            <h2 className='title-font font-semibold text-[#c9d1d9] sm:text-2xl'>Research Assistant</h2>
            <p className='text-[#8b949e] text-base mb-2'>Data Analysis, Software Engineering & Project Coordinator</p>
            <h3 className='text-[#8b949e] mb-2'>SoCal Data Science Program, Irvine, CA</h3>
            <span className='text-[#8b949e] mb-2 block'>May 2024 – August 2024</span>
            <ul className='list-disc list-inside text-[#c9d1d9] ml-4'>
              <li>Developed 12+ advanced Tableau dashboards for complex data visualization</li>
              <li>Coordinated daily meetings for 30+ student cohort, optimizing workflow</li>
              <li>Organized project documentation in Google Drive, reducing search time by 30%</li>
              <li>Engineered Python-based stock report algorithm using Jupyter Notebook</li>
            </ul>
          </div>

          {/* ASSURE-US CSUF */}
          <div className='mb-8'>
            <h2 className='title-font font-semibold text-[#c9d1d9] sm:text-2xl'>Research Assistant</h2>
            <p className='text-[#8b949e] text-base mb-2'>Data Analysis & Collaboration Specialist</p>
            <h3 className='text-[#8b949e] mb-2'>ASSURE-US CSUF, Fullerton, CA</h3>
            <span className='text-[#8b949e] mb-2 block'>May 2023 – July 2023</span>
            <ul className='list-disc list-inside text-[#c9d1d9] ml-4'>
              <li>Conducted pair-trading analysis for Northrop Grumman/Lockheed Martin stocks</li>
              <li>Designed 10+ presentation slides for research findings visualization</li>
              <li>Maintained version control via GitHub repository for collaborative coding</li>
              <li>Documented project notes in Google Drive for team knowledge-sharing</li>
            </ul>
          </div>

          {/* Amazon */}
          <div className='mb-8'>
            <h2 className='title-font font-semibold text-[#c9d1d9] sm:text-2xl'>Amazon Delivery Partner</h2>
            <p className='text-[#8b949e] text-base mb-2'>Logistics and Customer Service Professional</p>
            <h3 className='text-[#8b949e] mb-2'>Amazon, Los Angeles, CA</h3>
            <span className='text-[#8b949e] mb-2 block'>March 2023 – Present</span>
            <ul className='list-disc list-inside text-[#c9d1d9] ml-4'>
              <li>Achieved 99% on-time delivery rate using mobile delivery apps</li>
              <li>Maintained 4.9/5 customer satisfaction rating through digital communication</li>
            </ul>
          </div>

          {/* Best Buy */}
          <div className='mb-8'>
            <h2 className='title-font font-semibold text-[#c9d1d9] sm:text-2xl'>Sales Associate</h2>
            <p className='text-[#8b949e] text-base mb-2'>Technical Customer Support</p>
            <h3 className='text-[#8b949e] mb-2'>Best Buy, Cerritos, CA</h3>
            <span className='text-[#8b949e] mb-2 block'>July 2024 – November 2024</span>
            <ul className='list-disc list-inside text-[#c9d1d9] ml-4'>
              <li>Assisted 15+ daily customers with tech setup/troubleshooting</li>
              <li>Achieved 95% satisfaction rating in technical support interactions</li>
              <li>Matched 50+ customers with optimal tech solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}