import React from 'react'
import image1 from "../../assets/Hero/new.png"
import image2 from "../../assets/Hero/img02new.jpg"
import image3 from "../../assets/Hero/img03new.png"
import Slider from "react-slick";



const ImageList=[
    {
        id: 1,
        img: image1,
        title: "Upto 50% off all Sleeping & Dressing furniture",
        description:
        "Enjoy up to a 50% discount on a wide range of sleeping and dressing furniture! Upgrade your bedroom or dressing area with stylish and functional pieces while saving big. Hurry, this limited-time offer won't last long!",
    },
    {
        id: 1,
        img: image2,
        title: "Dream big and save bigger with up to 30% off on all office furniture",
        description:
        "Turn your workspace dreams into reality with our stylish office furniture, now available at a 30% discount. Don't miss this chance to create a productive and inspiring office environment without breaking the bank",
    },
    {
        id: 1,
        img: image3,
        title: "Upgrade Your Home with Our Amazing Deals!",
        description:
        " Elevate your living experience with our stunning furniture collection, now available at unbeatable prices. Seize the chance to turn your home into a beautiful one without straining your wallet!",
    },
]
const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-300 flex justify-center
    items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/*background pattern*/}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 
      right-0 rounded-3xl rotate-45 -z-9'> 
      </div>
        {/*hero section*/}
        <div className='container pb-8 sm:pb-0'>
          <Slider>
            {ImageList.map((data)=> (
              <div>
              <div className='grid grif-cols-1 sm:grid-cols-2'>
                {/*text content section*/}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center
                sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1 
                  data-aos="zoom-out"
                  data-aos-once="true"
                  data-aos-duration="500"
                  className='text-5xl sm:text-6xl
                  lg:text-7xl font-bold'>{data.title}</h1>
                  <p 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  className='text-sm'>{data.description}</p>
                  <div
                   data-aos="fade-up"
                   data-aos-delay="300"
                   data-aos-duration="500">
                    <button className='bg-gradient-to-r from-primary to-secondary 
                  hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                  Order Now
                    </button>
                  </div>
                </div>
                {/*image section*/}
                <div className='order-1 sm:order-2'>
                  <div 
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className='relative z-10' >
                     <img src={data.img} alt=''
                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                    sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                  </div>
                </div>
              </div>
              </div>
              ))
            }
          </Slider>
        </div>
    </div>
  )
}

export default Hero