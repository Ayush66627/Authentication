import React, {useEffect} from 'react'

import Card from "./Card.jsx"
import axios from 'axios'
import { Link } from 'react-router-dom'


function Course() {

   const[books, setBooks] = React.useState([])

   useEffect(() => {  
     const getBooks = async() => {
        try {
       const response =  await axios.get("https://authentication-pp61.onrender.com/books")
      
       setBooks(response.data)
        } catch (error) {
           console.log("Error", error)
        }
     }
      getBooks()
   }, [])
   

  return (
    <>
    <div className='md:max-w-screen-2xl z-10 container mx-auto md:px-20 px-4'>
     <div className=' justify-center items-center text-center mt-20'>
       <h1 className='text-4xl font-semibold'>We are delighted to have you <span className='text-blue-600'>Here!!!</span></h1>

       <p className='mt-10 text-lg font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nemo fugiat, debitis praesentium modi laudantium! Iure nostrum, rerum tenetur, dolore tempore similique vel natus ratione velit doloremque nisi mollitia iusto laudantium doloribus?</p>
       <Link to="/">
       <button className='bg-blue-500 text-black p-2 duration-300 font-semibold px-4 md:hover:bg-blue-400 rounded-md m-8'>Back</button>
       </Link>
     </div>
       
     <div className='grid grid-cols-1 md:grid-cols-3 w-full justify-center items-center gap-3'>
         {books.map((item) => (
           <Card key={item.id} item={item}/>))}
     </div>
    </div>

    </>

  )
}

export default Course