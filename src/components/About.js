import React from 'react'
import me from '../assets/me.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='About'>
      <div className='h-full w-full'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center item-center h-full'>
      <div className='pt-14 text-center'>
      <h5 className='text-light text-gray-400'>Get To Know</h5>
      <h2 className='text-blue-300 text-3xl font-bold'>About Me</h2></div>
      
      <div className='grid grid-cols-2 pt-20'>
        <div className='bg-blue-400  w-[370px] rounded-xl'>
           <div className='hover:rotate-12  '>
            <img className=' rounded-2xl ' src={me} alt="/" />
            </div>
        </div>
        <div>
          <div className='item-center w-[250px] justify-center'>
            <div className='mr-6  border-solid border-2  text-white border-blue-900 py-6 bg-blue-900 px-5 rounded-md hover:bg-transparent hover:text-blue-900'>
              <VscFolderLibrary />
              <h5 className='pt-1'>Projects</h5>
              <small className='text-gray-400 '>10+ Completed</small>
            </div>
            </div>
          <p className='p-2'>
          Hello!!
          <p>I am Priyanshi maheshwari.I am a Frontend Developer.</p>
          </p>

          <a href="#Contact" className='border bg-blue-400 text-blue-900 border-blue-400 py-1 px-5 rounded-md hover:bg-white/[0.6] hover:text-blue-900'>Let's Talk</a>
        </div></div>
      </div></div>
    </section>
      

    
  )
}

export default about