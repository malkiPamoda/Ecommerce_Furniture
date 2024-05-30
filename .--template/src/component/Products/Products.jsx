import React from 'react'
import image1 from "../../assets/LivingRoom/image01.jpg";
import image2 from "../../assets/LivingRoom/image02.jpg";
import image3 from "../../assets/LivingRoom/image03.jpg";
import {FaStar} from "react-icons/fa6";

const ProductsData=[
  {
    id: 1,
    img: image1,
    title:"Living Room",
    rating:5.0,
    color:"brown",
    aosDelay:"0",
  },
  {
    id: 2,
    img: image1,
    title:"Living Room",
    rating:4.5,
    color:"brown",
    aosDelay:"200",
  },
  {
    id: 3,
    img: image1,
    title:"Living Room",
    rating:4.4,
    color:"brown",
    aosDelay:"400",
  },
  {
    id: 4,
    img: image1,
    title:"Living Room",
    rating:4.4,
    color:"brown",
    aosDelay:"600",
  },
  {
    id: 5,
    img: image1,
    title:"Living Room",
    rating:4.4,
    color:"brown",
    aosDelay:"800",
  },
];
function Products() {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section*/}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-1xl text-primary'> Top Selling Products for you</p>
                <h1 data-aos="fade-up"  className='text-3xl font-bold' >Products </h1>
                <p data-aos="fade-up" className='text-1xl text-gray-400'> Quality, durability, style.
                   Comfortable, functional, stylish.</p>
                   <p data-aos="fade-up" className='text-1xl text-gray-400'> 
                   Elevates any space.</p>
            </div>
            {/* Body section*/}
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-3
              md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/* card section*/}
                {ProductsData.map((data)=> (

                  <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className='space-y-3'> 
                  <div>
                    <img src={data.img}
                    classname="h-[220px] w-[150px] 
                    object-cover rounded-md"/>
                    <div>
                      <h3 className='font-semibold'>{data.title} </h3>
                      <p className='text-sm text-gray-600'>{data.color}</p>
                      <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400'/>
                        <span>{data.rating}</span>
                      </div>
                    </div>

                  </div>
                  </div>

                ))
                }
              </div>
               {/* view all button */}
              <div data-aos="fade-up" className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer
                bg-primary text-white py-1 px-5 rounded-md'>
                  View All Button
                </button>
               
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Products