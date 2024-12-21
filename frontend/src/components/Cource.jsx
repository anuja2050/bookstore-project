import React from 'react'
import List from '../../public/List.json';
import Card from './Card';
import { Link } from 'react-router-dom';


function Cource() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-600 px-5 mt-28">
      <div className='item-center justify-center text-center mt-10'>
        <h1 className=' font-bold text-yellow-600 text-4xl '>
          We're delighted to have you  <span className='text-pink-500'> here! :)</span>
        </h1>
        <p className='mt-8 text-xl text-semibold'>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Alias voluptatibus architecto obcaecati repudiandae! Commodi dolorum praesentium harum 
          laudantium, veritatis voluptatum quos, enim totam molestiae delectus ipsum eaque. Cupiditate, pariatur
           blanditiis!</p>
           <Link to='/' >
           <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 bg-black text-white hover:text-pink-800 hover:bg-pink-500 dark:bg-pink dark:text-pink">Back</button>
           </Link>
      </div>
      <div className='mt-15 grid grid-cols-1 md:grid-cols-4'>
        {
            List.map((item)=>(
              <Card item={item} key={item.id}/>)
             )

        }
         
      </div>
    </div>
    </>
  )
}

export default Cource