import React from 'react'

function Card({item}) {
  console.log(item);
  

    
  return (
    <div className='my-4 p-3'>
        <div className="card bg-pink-100 w-92 shadow-xl hover:scale-105 duration-300 cursor-pointer dark:bg-black dark:text-white dark:border">
  <figure>
    <img className='mt-4 '
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline hover:text-pink-500 font-bold bg-black text-white p-5 cursor-pointer">Buy-Free</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card