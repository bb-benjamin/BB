import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import SkillSet from './component/SkillSet/SkillSet'
import Projects from './component/Projects/Projects'
import ContactUs from './component/Contact/ContactUs'
import Footer from './component/Footer/Footer'
import HalfOval from "../src/assets/Half-Oval.png"
import circles from "../src/assets/circles.png"
import oval from "../src/assets/Oval.png"
import leftcirclesMobile from "../src/assets/left_circles-mobile.png"
import leftcircles from "../src/assets/left_circles.png"


function App() {


  return (
    <>
      <body className=" container bg-black min-h-screen mx-auto">
        <div className='container mx-auto'>
          <Header/>
            <div className="top__shape ">
              <img src={circles} alt="left-shape" className="absolute left-[-200px] top-[139px] md:top-[85px] lg:top-[139px]" />
            </div>

            {/* for mobile devices and tablets */}
            <div className="middle__shape">
            <img src={HalfOval} alt="left-shape" className=" lg:hidden absolute right-0 z-50 top-[354px] md:top-[471px]"/>
            </div>
          
          {/* for laptops and other big screens */}
            <div className="middle__shape hidden lg:contents">
            <img src={oval} alt="left-shape" className="absolute  right-0 z-50 top-[354px] lg:top-[521px] lg:left-[48.5%] xl:left-[58.5%]" />
            </div>
          <Hero/> 
          <hr className=' mx-5 my-5' />

          <SkillSet/>

           {/* for mobile devices and tablets */}
            <div className="middle__shape ">
              <img src={leftcirclesMobile} alt="left-shape" className="absolute right-0 top-[1287px] md:top-[894px] lg:hidden" />
            </div>

            {/* for laptops and other big screens */}
              <div className="middle__shape hidden lg:contents">
            <img src={leftcircles} alt="left-shape" className="absolute  right-0 z-50 top-[977px] xl:right-0" />
            </div>

            <hr className=' mx-5 my-5 md:hidden' />
          <Projects/>
          <hr className=' mx-5 my-10' /> 
        </div>
        <section className=" container mx-auto bg-[#242424] z-0">
          <ContactUs/>
          <div className="top__shape ">
              <img src={circles} alt="left-shape" className="absolute left-[-200px] top-[4292px] md:top-[2695px] lg:top-[3000px] xl:top-[2457px]" />
            </div>
          <hr className=' mx-5 mt-10 md:mt-20 ' />
          <Footer/>
        </section>
      </body>
    </>
  )
}

export default App
