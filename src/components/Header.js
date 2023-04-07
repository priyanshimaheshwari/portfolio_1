import React from 'react'
import CTA from './CTA'
import me from '../assets/me.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div name='' className='w-full h-screen pt-60'>
      
      <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center item-center h-full'>
        <div className='text-center'><h5 className='text-xl font-bold '>Hello I'm</h5>
    <h1 className='text-5xl font-extrabold my-2'>Priyanshi Maheshwari</h1>
    <h5 className='font-medium  text-white/[0.6] my-2'>Frontend Developer</h5>
    <CTA/>
    <HeaderSocial /></div>
    
    <div className=''>
      <img className="me " src={me}/>
    </div>

    <p  className='text-center  text-blue-400  pb-[600px]'></p>
    </div>
    </div>
      
    
  )
}

export default Header