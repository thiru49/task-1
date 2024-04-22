import React from 'react'

const Button = ({children,type,onClick}) => {
  return (
    <button className="bg-sky-700 text-sky-100 rounded-md py-2 px-8 hover:scale-90 transition-all" type={type} onClick={onClick}>{children}</button>
  )
}

export default Button