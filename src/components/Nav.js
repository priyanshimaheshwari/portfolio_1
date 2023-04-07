import React from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'


const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <div className='flex   px-40 item-center justify-center'>
      <div className='flex bg-gray-500/40 px-6 py-2 rounded-lg gap-4 z-2 fixed bottom-2 '>
      <a onClick={()=>setActiveNav('#')}  className={activeNav === '#'?'hover:bg-white rounded':''} href="#" ><AiOutlineHome  color="#4db5ff" /></a>
      <a href="#About" onClick={()=>setActiveNav('#about')}  className={activeNav === '#about'?'hover:bg-white rounded':''}><AiOutlineUser   color="#4db5ff" /></a>
      <a   href="#Skills" onClick={()=>setActiveNav('#Skills')}  className={activeNav === '#Skills'?'hover:bg-white rounded':''}><RiServiceLine    color="#4db5ff"/></a>
      <a  href="#Contact" className='hover:bg-white rounded'><BiMessageSquareDetail   color="#4db5ff"/></a></div>
    </div>
  )
}

export default Nav