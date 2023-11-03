import React from 'react'
import Navigation from './Navigation'

const Header = ({title, height, bg}) => {
  
  return (
    <div className={`${bg?  `${bg}`: 'bg-hero-img'}   bg-cover bg-center bg-no-repeat w-full `}>
        <Navigation />
        <h1 className="head_text  text-white-green  text-center pt-32 pb-16 font-serif ">
          {title}
        </h1>
      </div>
  )
}

export default Header
