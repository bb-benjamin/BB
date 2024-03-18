import React from 'react'

const ProfessionalSkills = ({ Language, yearsOfExperience }) => {
  return (
    <div className=" font-SpaceGrotest sm:text-center md:text-start">
        <h1 className=" text-white font-bold text-[32px] md:text-[48px]">{Language}</h1>
        <h2 className="  text-[#D9D9D9] text-[18px]">{yearsOfExperience}</h2>
    </div>
  )
}

export default ProfessionalSkills