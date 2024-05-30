import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Products from './component/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from './component/Banner/Banner';
import Subscribe from './component/Subscribe/Subscribe';
import Testimonials from './component/Testimonials/Testimonials';
import Footer from './component/Footer/Footer';



const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  }, []);
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white duration-200'>
      <Navbar/>
      <Hero/>
      <Products/> 
      <Banner/>
      <Subscribe />
      <Products/> 
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default App