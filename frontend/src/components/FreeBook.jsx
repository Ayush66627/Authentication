import React, {useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../components/Card.jsx"
import axios from 'axios' 

function FreeBook() {

  const[books, setBooks] = React.useState([])

   useEffect(() => {  
     const getBooks = async() => {
        try {
       const response =  await axios.get("http://localhost:4000/books")
      
       const data = response.data.filter((data) => data.category === 'free')
       setBooks(data)
       
        } catch (error) {
            console.log("Error", error)
        }
     }
      getBooks()
   }, [])
 
 var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  return (
  <>
    <div className='md:max-w-screen-2xl z-10 container mx-auto md:px-20 px-4 mt-11'>
      <div>
      <h1 className='text-2xl font-bold '>Free Book</h1>
      <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur.</p> 
      </div>
    
   <div>
   <Slider {...settings}>
       {books.map((item) => (
         <Card item={item} key={item.id} />
       ))}
      </Slider>
   </div>
   </div>

 </>
  )
}

export default FreeBook