import React from 'react';
import python from '../../assets/python.png';
import cpp from '../../assets/cpp.png';
import javascript from '../../assets/javascript.png';
import swift from '../../assets/swift.png';
import reactImg from '../../assets/react.png';
import flask from '../../assets/flask.png';
import docker from '../../assets/docker.png';
import mysql from '../../assets/mysql.png';
import kubernetes from '../../assets/kubernetes.png';
import aws from '../../assets/aws.png';
import dynamodb from '../../assets/dynamodb.png';
import apigateway from '../../assets/apigateway.png';
import compTIA from '../../assets/comptia.png';

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-[#c9d1d9] body-font bg-[#0d1117] py-16'>
      {/* Subtle Background Shapes */}
      <div className='absolute top-10 right-10 h-64 w-64 bg-gradient-to-br from-[#238636] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>
      <div className='absolute bottom-10 left-10 h-48 w-48 bg-gradient-to-tr from-[#2dba4e] to-[#c9d1d9] blur-3xl opacity-20 rounded-full'></div>

      <div className='container mx-auto px-5 flex flex-col md:flex-row items-start'>
        {/* Skills Description */}
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-[#238636] mb-10 md:mb-0'
        >
          <h1
            data-aos='fade-right'
            data-aos-delay='500'
            className='sm:text-4xl text-3xl font-bold title-font mb-4 text-[#c9d1d9]'
          >
            Skills
          </h1>
          <p
            data-aos='fade-right'
            data-aos-delay='500'
            className='leading-relaxed text-base text-[#c9d1d9]'
          >
            Below are the technical skills and tools I have acquired through my education and professional experiences. I am proficient in various programming languages, frameworks, and cloud services that enable me to build robust and scalable applications.
          </p>
        </div>

        {/* Skills Icons */}
        <div data-aos='fade-left' data-aos-delay='500' className='md:w-1/2 md:pl-12 flex flex-wrap'>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={python} alt="Python" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>Python</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={cpp} alt="C++" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>C++</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={javascript} alt="JavaScript" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>JavaScript</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={swift} alt="Swift" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>Swift</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={reactImg} alt="React JS" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>React JS</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={flask} alt="Flask" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>Flask</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={docker} alt="Docker" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>Docker</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={mysql} alt="MySQL" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>MySQL</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={kubernetes} alt="Kubernetes" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>Kubernetes</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={aws} alt="AWS" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>AWS</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={dynamodb} alt="DynamoDB" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>DynamoDB</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={apigateway} alt="API Gateway" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>API Gateway</span>
            </div>
          </div>
          <div className='w-1/2 sm:w-1/3 p-4'>
            <div className='flex flex-col items-center'>
              <img src={compTIA} alt="CompTIA A+" className='w-16 h-16 mb-2' />
              <span className='text-sm text-center'>CompTIA A+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
