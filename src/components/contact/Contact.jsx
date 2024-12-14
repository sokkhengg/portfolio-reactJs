import React from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Importing icons from react-icons

export default function Contact() {
  return (
    // Main Contact Section with GitHub Dark Mode Background
    <section
      id='contact'
      data-aos='fade-up'
      data-aos-delay='400'
      className='bg-githubBg text-githubText py-16'
    >
      <div className='mx-auto max-w-screen-md px-5'>
        {/* Section Title */}
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center'>
          Contact Me
        </h2>

        {/* Contact Form */}
        <form action='#' className='space-y-8'>
          {/* Email Input Field */}
          <div>
            <label htmlFor='email' className='block mb-2 text-xl font-medium'>
              Email
            </label>
            <div className='relative'>
              {/* Email Icon */}
              <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-githubSubText' />
              <input
                type='email'
                id='email'
                className='bg-githubInputBg border border-githubBorder text-githubText text-sm rounded-lg focus:ring-githubGreen focus:border-githubGreen block w-full pl-10 p-2.5'
                placeholder='name@example.com'
                required
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-xl font-medium'>
              Message
            </label>
            <textarea
              rows='6'
              id='message'
              className='bg-githubInputBg border border-githubBorder text-githubText text-sm rounded-lg focus:ring-githubGreen focus:border-githubGreen block w-full p-2.5'
              placeholder='Leave a message...'
              required
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type='submit'
              className='inline-flex items-center text-githubText bg-githubGreen border-0 py-2 px-6 focus:outline-none hover:bg-githubHoverGreen hover:shadow-lg rounded-full text-lg transition-all duration-300'
            >
              {/* Send Icon */}
              <FaPaperPlane className='mr-2' /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
