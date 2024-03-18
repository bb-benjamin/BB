import React from 'react'

const Contact = ({ text }) => {
  return (
    <div>
      <h1 className=" border-b-2 border-[#4EE1A0] text-white tracking-[1px] active:text-[#4EE1A0]  leading-10 cursor-pointer text-[16px] font-bold">{text}</h1>
    </div>
  )
}

export default Contact