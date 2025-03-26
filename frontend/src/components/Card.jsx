import React from 'react'
import list from "../../public/list.json"

function Card({item}) {

    
  return (
<>
     <div className='mt-4 '>
    <div className="card w-96 md:hover:scale-105 duration-200 rounded-xl shadow-xl">
  <figure>
    <img
    className='rounded-xl w-96 h-44  '
      src={item.img}
      alt="Shoes" />
 </figure>
  <div className="card-body rounded-2xl mt-1  p-2 h-44 w-96 bg-neutral-200 ">
    <h2 className="card-title ml-28 font-bold text-xl text-black">
      {item.name}
    </h2>
    <p className='text-black mt-4  text-lg font-semibold'>{item.description} </p>
    <div className="card-actions mt-14 flex justify-between">
      <div className="badge badge-outline text-base font-semibold text-black">${item.price}</div>
      <button className="bg-blue-600 p-1 text-center mb-4 rounded-md md:hover:bg-blue-300 text-base font-semibold text-black">Buy now</button>
    </div>
  </div>
 </div>   
 </div>
 </>
)
}

export default Card