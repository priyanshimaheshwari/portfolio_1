import React from 'react';

import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    

  return (
    <div className='bg-blue-400 text-center'>
        <a href="#" className=' font-bold text-black text-4xl pt-14'>PRIYANSHI</a>

        <ul className='flex text-black items-center justify-center gap-4 py-2'>
        <li><a href='#' className='hover:underline'>Home</a></li>
        <li><a href='#About' className='hover:underline'>About</a></li>
        <li><a href='#Skills' className='hover:underline'>Skills</a></li>
        <li><a href='#Portfolio' className='hover:underline'>Projects</a></li>
        <li><a href='#Contact' className='hover:underline'>Contact</a></li>
        </ul>

        <div className='items-center justify-center flex gap-6 py-2'>
            <a href="https://www.instagram.com/priyanshimaheshwari_/"><FiInstagram color='black' size={30}/></a>
            <a href="https://www.linkedin.com/in/priyanshi-maheshwari-438bab225?original_referer="><BsLinkedin color='black' size={30}/></a>
            <a href="https://github.com/priyanshimaheshwari"><FaGithub color='black' size={30}/></a>
        </div>

        <div className='pb-2 text-gray-500'>&copy; Priyanshi.All rights reserved.</div>
    </div>
  )
}

export default Footer