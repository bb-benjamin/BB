import React from 'react'

const Text = ({text, lang}) => {
  return (
    <div>
        <h1 className=" text-[24px]">{text}</h1>
        <p className=" text-[12px]">{lang}</p>
    </div>
  )
}

export default Text