import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='flex flex-col item-center gap-4 absolute pt-64 pl-0 '>
      <a href="https://www.linkedin.com/in/priyanshi-maheshwari-438bab225" target="_blank"><BsLinkedin color='#4db5ff'/></a>
      <a href="https://github.com/priyanshimaheshwari" target="_blank"><FaGithub color='#4db5ff'/></a>
    </div>
  )
}

export default HeaderSocial