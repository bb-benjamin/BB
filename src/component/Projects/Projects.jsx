import React, { useState } from "react";
import ProjectsComponent from "../resuseableComponents/ProjectsComponent";
import Contact from "../resuseableComponents/Contact";
import ProjectsPortfolio from "../resuseableComponents/ProjectsPortfolio";
import { Link } from "react-router-dom";
import TMART from "./Images/T-MART.png";
import TODOAPP from "./Images/TODO-APP.jpg";

const Projects = () => {
  const [isHovered, setIsHovered] = useState([false, false]);

  const projectsData = [
    {
      imageUrl: TODOAPP,
      text: "TODO-APP",
      lang: "JAVASCRIPT TAILWIND REACT.JS",
      viewProjectsLink: "",
      viewCodeLink: "",
    },
    {
      imageUrl: TMART,
      text: "T-MART ECOMMERCE",
      lang: "HTML CSS REACT",
      viewProjectsLink: "",
      viewCodeLink: "",
    },
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
                    <Link to={project.viewProjectsLink}>
                      <Contact text="VIEW PROJECTS" />
                    </Link>
                    <Link to={project.viewCodeLink}>
                      <Contact text="VIEW CODE" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* here handles the display on mobile since we not hovering on tab and mobile devices */}
            <div className="hover__links flex gap-10 lg:hidden text-center">
              <Link to={project.viewProjectsLink}>
                <Contact text="VIEW PROJECTS" />
              </Link>
              <Link to={project.viewCodeLink}>
                <Contact text="VIEW CODE" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
