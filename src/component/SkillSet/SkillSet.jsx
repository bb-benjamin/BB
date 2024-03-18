import React from 'react'
import ProfessionalSkills from '../resuseableComponents/ProfessionalSkills'

const SkillSet = () => {

  return (
    <div className=" mx-5 text-center md:text-left grid md:grid-cols-2 gap-3">
        <ProfessionalSkills Language="HTML" yearsOfExperience="1.5 years Experience"/>
        <ProfessionalSkills Language="CSS" yearsOfExperience="1 year Experience"/>
        <ProfessionalSkills Language="Tailwind" yearsOfExperience="1 year Experience"/>
        <ProfessionalSkills Language="JavaScript" yearsOfExperience="1 year Experience"/>
        <ProfessionalSkills Language="React" yearsOfExperience="8 months Experience"/>
    </div>
  )
}

export default SkillSet