import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon for project links
import cocktailAppImage from '../../assets/Cocktail-App.png'; 
import docAuxImage from '../../assets/Doc-Aux.png'; 
import portfolioImage from '../../assets/portfolio-project.png'; 

export default function Projects() {
  // List of projects with details matching the GitHub repositories
  const listProjects = [
    {
      id: 1,
      image: cocktailAppImage,
      title: 'Cocktail App',
      description: 'A web application that provides real-time cocktail recipes and recommendations using external APIs.',
      githubLink: 'https://github.com/sokkhengg/Cocktail-App',
    },
    {
      id: 2,
      image: portfolioImage,
      title: 'Portfolio Project',
      description: 'A modern, responsive portfolio website built with React.js, showcasing my projects, skills, and experience. Features clean design, smooth animations, and easy navigation to highlight my work effectively.',
      githubLink: 'https://github.com/sokkhengg/portfolio-reactJs',
    },
    {
      id: 3,
      image: docAuxImage,
      title: 'DocAux',
      description: 'A Python and React JS application for skin lesion diagnostics using CNN and TensorFlow.',
      githubLink: 'https://github.com/ethansafai/doc-aux',
    },
  ];

  // Slider settings for react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2, // Show 2 projects at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1, // Show 1 project on smaller screens
        },
      },
    ],
  };

  return (
    // Projects Section with GitHub Dark Mode Background
    <section
      data-aos='fade-up'
      data-aos-delay='400'
      id='projects'
      className='bg-githubBg py-16'
    >
      <div className='container px-5 py-24 mx-auto'>
        {/* Section Title */}
        <h2 className='text-4xl font-bold text-center mb-12 text-githubText'>
          My Projects
        </h2>
        
        {/* Projects Carousel */}
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className='p-4'>
              <div className='h-full border-2 border-githubGreen shadow-lg border-opacity-60 rounded-lg overflow-hidden bg-githubInputBg'>
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center'
                />
                
                {/* Project Details */}
                <div className='p-6'>
                  {/* Project Title */}
                  <h2 className='tracking-widest text-xl title-font font-medium text-githubSubText mb-1'>
                    {project.title}
                  </h2>
                  
                  {/* Project Description */}
                  <p className='leading-relaxed mb-3 text-githubText'>
                    {project.description}
                  </p>
                  
                  {/* GitHub Link */}
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-githubGreen hover:text-githubHoverGreen font-semibold'
                  >
                    <FaGithub className='mr-2' /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
