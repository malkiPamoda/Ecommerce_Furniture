import React from 'react'
import image01 from '../../assets/Testimonial/image01.jpeg'
import Slider from 'react-slick'


const testimonialData= [

  {
    id: 1,
    name: "Kamal Perera",
    text: "This testimonial expresses complete satisfaction with a recent furniture purchase from a specific shop. I highlight the exceptional quality of the furniture and praises the shop's excellent customer service. They indicate that their living room has been significantly enhanced by the new furniture.",
    img: image01,
    
  },
  {
    id: 2,
    name: "Kamal Perera",
    text: "This testimonial expresses complete satisfaction with a recent furniture purchase from a specific shop. I highlight the exceptional quality of the furniture and praises the shop's excellent customer service. They indicate that their living room has been significantly enhanced by the new furniture.",
    img: image01,
  },
  {
    id: 3,
    name: "Kamal Perera",
    text: "This testimonial expresses complete satisfaction with a recent furniture purchase from a specific shop. I highlight the exceptional quality of the furniture and praises the shop's excellent customer service. They indicate that their living room has been significantly enhanced by the new furniture.",
    img: image01,
    
  },
  {
    id: 4,
    name: "Kamal Perera",
    text: "This testimonial expresses complete satisfaction with a recent furniture purchase from a specific shop. I highlight the exceptional quality of the furniture and praises the shop's excellent customer service. They indicate that their living room has been significantly enhanced by the new furniture.",
    img: image01,
    
  },
  {
    id: 5,
    name: "Kamal Perera",
    text: "This testimonial expresses complete satisfaction with a recent furniture purchase from a specific shop. I highlight the exceptional quality of the furniture and praises the shop's excellent customer service. They indicate that their living room has been significantly enhanced by the new furniture.",
    img: image01,
    
  },
]
const Testimonials = () => {

  var settings={
    dots:true,
    arrows: false,
    infinite: true,
    speed: 500,
    //slisesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus:true,
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToShow:3,
          slidesToScroll:1, 
          infinite:true,
        },
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:2,
        },
      },
      {
        breakpoint:640,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  }
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/*header section*/}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-1xl text-primary'> What our customers are saying </p>
                <h1 data-aos="fade-up"  className='text-3xl font-bold' >Testimonials </h1>
                <p data-aos="fade-up" className='text-1xl text-gray-400'> Explore testimonials from our 
                satisfied customers at DAFFODIL Furniture, 
                showcasing how our furniture has transformed their spaces 
                with quality craftsmanship and exceptional service. </p>
                <p data-aos="fade-up" className='text-1xl text-gray-400'> 
                   Join them in experiencing the difference our pieces make in elevating your home.</p>
          </div>
          {/*Testimonials cards */}
          <div
          data-aos="zoom-in">
            <Slider {... settings}>{
              testimonialData.map((data) =>(
                <div className='my-2'>
                <div 
                  key={data.id}
                  className='flex flex-col gap-6 shadow-lg py-8 px-6 mx-2
                max-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                >
                  <div className=''>
                    <img 
                    src={data.img}
                    className='rounded-full w-20 h-20' />
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <div className='space-y-2'>
                      <p className='text-xs text-gray-500'>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name} </h1>
                    </div>
                  </div>
                </div>
                </div>

              ))
            }
            </Slider>
          </div>
      </div>
    </div>
  )
}

export default Testimonials