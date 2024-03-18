import React from 'react'
import frederick from "../../assets/frederick_2.png"
import Contact from '../resuseableComponents/Contact'



const Hero = () => {
  return (
    <div className='container flex flex-col-reverse md:flex-row md:justify-between font-SpaceGrotest text-[18px] md:text-[32px] text-white text-center md:text-left items-center'>
        <section className="container px-5 z-50">
          <div className="div ">
              <div className="top__text font-bold text-[40px] mt-10 md:mt-15 lg:mt-36 xl:mt-36 md:text-[72px] lg:text-[88px] md:leading-[88px]">
                  <p className="md hidden md:contents lg:hidden">Nice to</p>
                  <div>
                    <h1 className="md hidden md:contents lg:hidden "> meet you! I'm</h1>
                    </div>
                    <div>
                    <p className="hidden md:contents lg:hidden"><span className="heroName_span border-b-2 border-[#4EE1A0] tracking-[1.9px]">Frederick Asiamah</span></p>
                    </div>
                  <p className=" md:hidden lg:contents"> Nice to meet you! <br /></p>
                  <p className=" md:hidden lg:contents"><span>I’m</span> <span className="heroName_span border-b-2 border-[#4EE1A0] tracking-[1.9px]">Frederick</span></p>
              </div>
              <div className="bottom_text px-5 md:px-0 mt-10 text-[#D9D9D9] md:w-[445px] text-[16px] md:text-[18px] md:font-bold font-medium">
                  <p className="">Based in Ghana, I’m a front-end developer passionate about building accessible web apps that users love.</p>
              </div>
              <div className="contact__div container text-[18px] mb-10 text-white mt-10 flex items-center justify-center md:justify-start md:mb-10 lg:mb-24 ">
              <Contact text="CONTACT US"/>
              </div>
          </div>
        </section>
        <section>
          <picture className=' w-full   '>
            <img src={frederick} alt="frederick" className="bg-[#242424] w-[232px] h-[383px]md:w-[322px] md:h-[600px] md:absolute md:right-px md:top-0 lg:w-[445px] lg:h-[702px] lg:absolute lg:top-0 lg:inset-[54.6%] xl:inset-[62.9%] xl:top-0 z-0"/> 
          </picture> 
        </section>

    </div>
  )
}

export default Hero