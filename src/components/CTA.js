import React from 'react'
import Portfolio from '../assets/Portfolio.pdf'

const CTA = () => {
  return (
    <div className='mt-10  gap-2'>
     <a className='mr-6  border-solid border-2  text-blue-400 border-blue-400 py-2 px-5 rounded-md hover:bg-white/[0.6] hover:text-blue-900' href={Portfolio} download>Download Resume</a>
      <a className='border bg-blue-400 text-blue-900 border-blue-400 py-2 px-5 rounded-md hover:bg-white/90 hover:text-blue-900' href='#Contact'>Let's Talk</a>
    </div>
  )
}

export default CTA