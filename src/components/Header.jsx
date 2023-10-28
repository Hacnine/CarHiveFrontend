import React from 'react'
import Navigation from './Navigation'

const Header = ({title, height}) => {
  return (
    <div className=" bg-blue-gray-200 bg-hero-img  bg-cover bg-center bg-no-repeat   w-full ">
        <Navigation />
        <h1 className="head_text  text-white-green  text-center py-24 font-serif ">
          {title}
        </h1>
      </div>
  )
}

export default Header
