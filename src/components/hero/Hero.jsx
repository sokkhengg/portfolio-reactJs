import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from './CV.pdf'
import img from '../../assets/img.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col bg-[#2b3137]'>
        
        {/* Layered Modern Background Shapes */}
        <div className='absolute top-[-80px] right-[-150px] h-[400px] w-[600px] bg-gradient-to-br from-[#24292e] to-[#2b3137] transform rotate-12 skew-y-3 opacity-70 rounded-2xl shadow-[0_0_40px_rgba(36,41,46,0.3)]'>
        </div>
        <div className='absolute top-[100px] left-[-100px] h-[300px] w-[500px] bg-gradient-to-br from-[#2dba4e] to-[#ffffff] transform rotate-3 skew-x-3 opacity-50 rounded-3xl shadow-[0_0_40px_rgba(45,186,78,0.2)]'>
        </div>
        
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-[#fafbfc] body-font z-10'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>
                    {/* Jumping "hi" image */}
                    <motion.img 
                      src={hi}
                      alt="hi"
                      className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform
                      -translate-x-1/2 -translate-y-1/2 w-20 h-20'
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 300,
                      }}
                    />

                    <h1 className='title-font sm:text-4xl text-4xl mb-6 font-bold text-[#fafbfc]'>
                      Hi! I'm Sokheng Teang
                    </h1>
                    
                    {/* Modern Scrolling Text with Framer Motion */}
                    <div className='overflow-hidden w-full my-4'>
                      <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                        className='font-semibold text-xl sm:text-2xl lg:text-3xl whitespace-nowrap tracking-wider'
                        style={{
                          background: 'linear-gradient(90deg, #2dba4e, #fafbfc)',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        Innovation Begins with One Line of Code.
                      </motion.div>
                    </div>
                    
                    {/* Download CV Button */}
                    <div className='flex justify-center mt-8'>
                        <a href={CV} download> 
                            <motion.button
                              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(45, 186, 78, 0.2)' }}
                              whileTap={{ scale: 0.95 }}
                              className='inline-flex text-white bg-[#2dba4e] border-0 py-3 px-8 
                              focus:outline-none hover:bg-[#24292e] hover:shadow-[0_0_40px_rgba(45,186,78,0.7)]
                              rounded-full text-lg font-medium tracking-wide transition-all duration-300'
                            >
                                Download CV
                            </motion.button>
                        </a>
                    </div>
                </div>
                
                {/* Profile Image */}
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                   <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80 shadow-lg' />
                </div>
            </div>
        </section>
    </div>
  )
}
