import React from 'react'
import Contact from './Contact'

const ProjectsComponent = ({text}) => {
  return (
    <div className=" font-SpaceGrotest">   
      <p className="text-[40px] md:text-[72px] lg:text-[88px] font-bold">{text}</p>
    </div>
  )
}

export default ProjectsComponent