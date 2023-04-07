import React from 'react'
import foodapp from '../assets/foodapp.png'
import ecommerce from '../assets/ecommerce.png'
import quizapp from '../assets/quizapp.png'
import travelwebsite from '../assets/travelwebsite.png'
import netflixclone from '../assets/netflixclone.png'
import internship from '../assets/internship.png'

const data=[
  {
    id:1,
    image:foodapp,
    title:"Frontend food ordering website that allows you to order and filter food according to varity and price.",
    github:"https://github.com/priyanshimaheshwari/food_app_1",
    demo:"https://food-app-1-kappa.vercel.app/",
  },
  {
    id:2,
    image:ecommerce,
    title:"Frontend ecommerce website that allows you to order things.",
    github:"https://github.com/priyanshimaheshwari/e_commerce",
    demo:"https://e-commerce-gamma-sooty.vercel.app/",
  },
  {
    id:3,
    image:quizapp,
    title:"Quiz App where you can play quiz.",
    github:"https://github.com/priyanshimaheshwari/quiz_app",
    demo:"https://quiz-app-rho-lake.vercel.app/",
  },
  {
    id:4,
    image:netflixclone,
    title:"Clone of netflix website using farebase authentication.",
    github:"https://github.com/priyanshimaheshwari/netflix_clone",
    demo:"https://netflix-clone-delta-nine.vercel.app/",
  },
  {
    id:5,
    image:travelwebsite,
    title:"Frontend travel website that shows you beach side resorts",
    github:"https://github.com/Prasham1710/travel_website",
    demo:"https://travel-website-pearl-six.vercel.app/",
  },
  {
    id:6,
    image:internship,
    title:"FInternship portal website where companies and student can login and see their jobs and put on the jobs.",
    github:"https://github.com/Prasham1710/Internship_portal",
    demo:"https://travel-website-pearl-six.vercel.app/",
  },


]

const Portfolio = () => {
  return (
    <div id='Portfolio'>
      <div className='text-center pt-6'>
      <h5 className='text-gray-400'>My Recent Work</h5>
      <h2 className='text-blue-400 text-4xl font-bold pb-4'>Portfolio</h2>
      </div>
      

      <div className='grid grid-cols-3 gap-6 px-4 '>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article className='bg-blue-900 p-4 rounded-xl border-solid border-2 hover:bg-transparent border-blue-900' key={id}>
                <div className=' '>
                  <img className='rounded-xl' src={image} alt={title} />
                </div>
                <h3 className='font-bold '>{title}</h3>
                <div className='pt-4 pl-24'>
                  <a  className='mr-6  border-solid border-2  text-blue-400 border-blue-400 py-2 px-5 rounded-md hover:bg-white/[0.6] hover:text-blue-900' href={github}>Github</a>
                  <a className='border bg-blue-400 text-blue-900 border-blue-400 py-2 px-5 rounded-md hover:bg-white/[0.6] hover:text-blue-900' href={demo}>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio