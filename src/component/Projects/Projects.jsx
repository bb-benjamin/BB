import React, { useState } from 'react';
import ProjectsComponent from '../resuseableComponents/ProjectsComponent';
import Contact from '../resuseableComponents/Contact';
import ProjectsPortfolio from '../resuseableComponents/ProjectsPortfolio';
import { Link } from 'react-router-dom';
import audiophile from './Images/Audiophile.png'
import countryapp from './Images/countryapp.jpg'
import devfinder from './Images/DEVFINDER.jpg'
import TMART from './Images/T-MART.png'
import TODOAPP from './Images/TODO-APP.jpg'

const Projects = () => {
  
  const [isHovered, setIsHovered] = useState([false, false, false, false, false]); //  this props is used to set isHovered on the projects you have so i have 5 projects now so if you have more you can list more false there. 

  const projectsData = [
    {
      "imageUrl": TODOAPP,
      "text": "TODO-APP",
      "lang": "JAVASCRIPT TAILWIND REACT.JS",
      "viewProjectsLink": "https://sharpartz-todo-app.netlify.app",
      "viewCodeLink": "https://github.com/sharpartzgh/Todo-App"
    },
    {
      "imageUrl": audiophile,
      "text": "AUDIOPHILE ECOMMERCE",
      "lang": "HTML CSS JAVASCRIPT",
      "viewProjectsLink": "https://audiophile-e-shop.vercel.app/",
      "viewCodeLink": "https://github.com/sharpartzgh/Audiophile-E-Shop"
    },
    {
      "imageUrl": countryapp,
      "text": "COUNTRY APP",
      "lang": "JAVASCRIPT TAILWIND REACT.JS",
      "viewProjectsLink": "https://sharpartz-countryapp.netlify.app/",
      "viewCodeLink": "https://github.com/sharpartzgh/Country-App"
    },
    {
      "imageUrl": devfinder,
      "text": "DEVFINDER APP",
      "lang": "HTML TAILWIND JAVASCRIPT REACT",
      "viewProjectsLink": "https://sharpartz-devfinder-app.netlify.app/",
      "viewCodeLink": "https://github.com/sharpartzgh/devFinder-App"
    },
    {
      "imageUrl": TMART,
      "text": "T-MART ECOMMERCE",
      "lang": "HTML CSS",
      "viewProjectsLink": "https://sharpartzgh.github.io/Project-C4-Group3",
      "viewCodeLink": "https://github.com/sharpartzgh/T-MART"
    }
    // Add more project data if you have more chaley lol
  ];

  const handleMouseEnter = (index) => {
    const newIsHovered = [...isHovered];
    newIsHovered[index] = true;
    setIsHovered(newIsHovered);
  };

  const handleMouseLeave = (index) => {
    const newIsHovered = [...isHovered];
    newIsHovered[index] = false;
    setIsHovered(newIsHovered);
  };

  return (
    <div className="mx-5">
      <div className="header flex justify-between text-white items-center sm:flex my-10">
        <ProjectsComponent text="Projects" />
        <Contact text="CONTACT ME" />
      </div>
      <div className="projectcs__rapper grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {/* Render each project item */}
        {projectsData.map((project, index) => (
          <div className="relative" key={index}>
            <div
              className="hover__wrapper"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <ProjectsPortfolio
                imageUrl={project.imageUrl}
                text={project.text}
                lang={project.lang}
              />
              {isHovered[index] && (
                <div className="hover__overlay hidden absolute inset-0 bg-gray-800 bg-opacity-75  lg:flex items-center justify-center h-[86.9%]">
                  <div className="hover__links flex gap-10 lg:gap-5 lg:flex-col xl:flex-col text-center">
                    <Link to={project.viewProjectsLink}><Contact text="VIEW PROJECTS" /></Link>
                    <Link to={project.viewCodeLink}><Contact text="VIEW CODE" /></Link>
                  </div>
                </div>
              )}
            </div>
            {/* here handles the display on mobile since we not hovering on tab and mobile devices */}
             <div className="hover__links flex gap-10 lg:hidden text-center">
                <Link to={project.viewProjectsLink}><Contact text="VIEW PROJECTS" /></Link>
                <Link to={project.viewCodeLink}><Contact text="VIEW CODE" /></Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
