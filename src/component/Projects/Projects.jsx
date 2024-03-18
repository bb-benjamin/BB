import React, { useState } from 'react';
import ProjectsComponent from '../resuseableComponents/ProjectsComponent';
import Contact from '../resuseableComponents/Contact';
import ProjectsPortfolio from '../resuseableComponents/ProjectsPortfolio';
import { Link } from 'react-router-dom';
import audiophile from './Images/Audiophile.png'
import countryapp from './Images/countryapp.jpg'
import devfinder from './Images/DEVFINDER.jpg'
import TMART from './Images/T-MART.png'


const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" mx-5">
      <div className="header flex justify-between text-white items-center sm:flex my-10">
        <ProjectsComponent text="Projects" />
        <Contact text="CONTACT ME" />
      </div>
      {/* Image and hover div */}
      <div
        className="projectcs__rapper grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {/* first Section */}
        <div className="relative">
          <div className="hover__wrapper" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ProjectsPortfolio
              imageUrl="https://s3-alpha-sig.figma.com/img/bee4/7466/ef88bdd8fed9a4747ea04d5b21c9769d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7yglykmnb4eAkwjAZiNhvF8Rfa85QVkth6LNh2IYHZsGKKpCx2knQZez87otv1t~tgeLWrfl3U0tVWLhNO5aP3V3Zgp1F1iHR8GRCtPjBkDD2MKMWdISLCNT492kbLSdQpoXpjMkZRMMmEE47klVkBYiGxIZQ-uocVulpQDRVOvZgNhSEikmQKwmJwl7A1f8c8IPCaaONdqmlbkj8a6V98afGkBrTiIm-M53qWjIU5CIBWXZWkTdCmnQP8H3v3S~Us3UDkUH7yewDJ2vjrrrKnpKR7CnbX-cDSl8iujky9sBpRHtVWTvykX5Ip4bqOGleNo0MXpQqgmqCIS6rGcTA__"

              text="TODO_APP" lang="JAVASCRIPT TAILWIND REACT.JS"
            />
            {isHovered && (
              <div className="hover__overlay absolute hidden inset-0 bg-gray-800 bg-opacity-75 items-center justify-center h-[78.7%]">
                <div className="hover__links flex lg:gap-5 lg:flex-col xl:flex-col text-center  ">
                 <Link to="https://sharpartz-todo-app.netlify.app"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/Todo-App"><Contact text="VIEW CODE"/></Link> 
                </div>
              </div>
            )}
            <div className="hover__linkss flex  gap-5 lg:hidden xl:hidden">
                <Link to="https://sharpartz-todo-app.netlify.app"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/Todo-App"><Contact text="VIEW CODE"/></Link> 
            </div>
          </div>
        </div>
        {/* Second Section */}
          <div className="relative">
          <div className="hover__wrapper" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ProjectsPortfolio
              imageUrl={audiophile}

              text="AUDIOPHILE ECOMMERCE" lang="HTML CSS JAVASCRIPT"
            />
            {isHovered && (
              <div className="hover__overlay sm:hidden md:hidden' absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center  h-[78.7%]">
                <div className="hover__links flex gap-10 lg:gap-5 lg:flex-col xl:flex-col text-center">
                <Link to="https://sharpartz-devfinder-app.netlify.app/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/devFinder-App"><Contact text="VIEW CODE"/></Link> 
                </div>
              </div>
            )}
            <div className="hover__links lg:hidden xl:hidden flex gap-5 text-center">
            <Link to="https://sharpartz-devfinder-app.netlify.app/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/devFinder-App"><Contact text="VIEW CODE"/></Link> 
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="relative">
          <div className="hover__wrapper" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ProjectsPortfolio
              imageUrl={countryapp}

              text="COUNTRY APP" lang="HTML TAILWIND JAVASCRIPT REACT.JS"
            />
            {isHovered && (
              <div className="hover__overlay sm:hidden md:hidden' absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center  h-[78.7%]">
                <div className="hover__links flex gap-10 lg:gap-5 lg:flex-col xl:flex-col text-center">
                <Link to="https://sharpartz-countryapp.netlify.app/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/Country-App"><Contact text="VIEW CODE"/></Link> 
                </div>
              </div>
            )}
            <div className="hover__links lg:hidden xl:hidden flex  gap-5">
            <Link to="https://sharpartz-countryapp.netlify.app/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/Country-App"><Contact text="VIEW CODE"/></Link> 
            </div>
          </div>
        </div>
        {/* Fourth Section */}
        <div className="relative">
          <div className="hover__wrapper" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ProjectsPortfolio
              imageUrl={devfinder}

              text="DEVFINDER APP" lang="HTML TAILWIND JAVASCRIPT REACT"
            />
            {isHovered && (
              <div className="hover__overlay sm:hidden md:hidden' absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center  h-[78.7%]">
                <div className="hover__links flex gap-10 lg:gap-5 lg:flex-col xl:flex-col text-center">
                <Link to="https://sharpartz-devfinder-app.netlify.app/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/devFinder-App"><Contact text="VIEW CODE"/></Link> 
                </div>
              </div>
            )}
            <div className="hover__links lg:hidden xl:hidden flex  gap-5">
                <Link to="https://sharpartz-devfinder-app.netlify.app/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/devFinder-App"><Contact text="VIEW CODE"/></Link> 
            </div>
          </div>
        </div>
        {/* Fifth Section */}
        <div className="relative">
          <div className="hover__wrapper" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ProjectsPortfolio
              imageUrl={TMART}

              text="T-MART ECOMMERCE" lang="HTML CSS"
            />
            {isHovered && (
              <div className="hover__overlay sm:hidden md:hidden' absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center  h-[78.7%]">
                <div className="hover__links flex gap-10 lg:gap-5 lg:flex-col xl:flex-col text-center">
                <Link to="https://sharpartzgh.github.io/Project-C4-Group3/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/T-MART"><Contact text="VIEW CODE"/></Link> 
                </div>
              </div>
            )}
            <div className="hover__links lg:hidden xl:hidden flex gap-5">
               <Link to="https://sharpartzgh.github.io/Project-C4-Group3/"><Contact text="VIEW PROJECTS" /></Link> 
                 {/*  */}
                 <Link to="https://github.com/sharpartzgh/T-MART"><Contact text="VIEW CODE"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
