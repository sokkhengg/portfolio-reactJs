import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import img from '../../assets/img.png';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col bg-[#0d1117]'>
      
      {/* Layered Modern Background Shapes */}
      <div className='absolute top-[-80px] right-[-150px] h-[400px] w-[600px] bg-gradient-to-br from-[#161b22] to-[#0d1117] transform rotate-12 skew-y-3 opacity-70 rounded-2xl shadow-[0_0_40px_rgba(22,27,34,0.3)]'></div>
      <div className='absolute top-[100px] left-[-100px] h-[300px] w-[500px] bg-gradient-to-br from-[#238636] to-[#c9d1d9] transform rotate-3 skew-x-3 opacity-50 rounded-3xl shadow-[0_0_40px_rgba(35,134,54,0.2)]'></div>
      
      <Navbar /> 
      <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-[#c9d1d9] body-font z-10'
      >
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
          mb-16 md:mb-0 items-center text-center relative'>
              
            {/* Headline */}
            <h1 className='title-font sm:text-4xl text-4xl mb-6 font-bold text-[#c9d1d9]'>
              Hi! I'm Sokheng Teang
            </h1>
            
            {/* Modern Scrolling Text with Framer Motion */}
            <div className='overflow-hidden w-full my-4'>
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className='font-semibold text-xl sm:text-2xl lg:text-3xl whitespace-nowrap tracking-wider'
                style={{
                  background: 'linear-gradient(90deg, #238636, #c9d1d9)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                Coding Tomorrow, Today.
              </motion.div>
            </div>
           
          </div>
          
          {/* Profile Image */}
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
             <img src={img} alt="Hero" className='object-cover object-center rounded-full w-80 h-80 shadow-lg' />
          </div>
        </div>
      </section>
    </div>
  );
}
