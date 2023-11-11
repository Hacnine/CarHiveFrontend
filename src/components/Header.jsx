import React from 'react'
import Navigation from './Navigation'

const Header = ({title, height, bg }) => {
  
  return (
    <div className={`${bg?  `${bg}`: 'bg-hero-img'}   bg-cover bg-center bg-no-repeat w-full `}>
      <div className="wrapper">
      <Navigation />
      </div>
        <div className='text-center  pb-20'>
        <h1 className={`${bg?  ' bg-black/50': ' bg-primary-green/10 '} head_text py-2 text-white-green w-full   font-serif `}>
          {title}
        </h1>
        </div>
      </div>
  )
}

export default Header
