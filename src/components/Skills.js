import React from 'react'
import HTML from '../assets/HTML.png'
import C from '../assets/C.png'
import CC from '../assets/C++.png'
import Python from '../assets/Python.png'
import CSS from '../assets/CSS.png'
import Tailwind from '../assets/Tailwind.png'
import REACT from '../assets/REACT.png'
import Javascript from '../assets/Javascript.png'
import GitHub from '../assets/GitHub.png'


const Skills = () => {
  return (
    <section id="Skills">
        <div className='w-full pt-10'>
            <p className='text-center font-bold text-2xl text-blue-300'>Skills</p>
            <h2 className='text-center text-gray-400'>What I Can Do</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-16 m-4 '>
        <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={C} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>C</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={CC} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>C++</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={Python} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>Python</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={HTML} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>HTML</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={CSS} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>CSS</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={Tailwind} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>Tailwind</h3>
              </div>
            </div>
            </div><div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={REACT} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>React</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={Javascript} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>Javascript</h3>
              </div>
            </div>
            </div>
            <div className='p-8  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <img src={GitHub} 
                alt="/" width='80px' height='70px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black font-bold'>Github</h3>
              </div>
            </div>
            </div>

        </div>
    </section>

  )
}

export default Skills