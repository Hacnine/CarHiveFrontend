import React from 'react'
import Navigation from './Navigation'

const Header = ({title, height, bg}) => {
  
  return (
    <div className={`${bg?  `${bg}`: 'bg-hero-img'}   bg-cover bg-center bg-no-repeat w-full wrapper`}>
        <Navigation />
        <div className='text-center pt-4 pb-16'>
        <h1 className="head_text  text-white-green w-full bg-black/50   font-serif ">
          {title}
        </h1>
        </div>
      </div>
  )
}

export default Header
