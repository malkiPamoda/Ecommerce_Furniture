import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner from '../../assets/Banner/black-bg.jpg'
import{
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa"; 

const BannerImg={
    backgroundImage: `url(${Banner})`,
    backgrountPosition: 'bottom',
    bachgroundRepeat: 'no-repeat',
    bachgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const FooterLinks=[
    {
        title:"Home",
        link: "/#",
    },
    {
        title:"About",
        link: "/#About",
    },
    {
        title:"Contact",
        link: "/#Contact",
    },
    {
        title:"Blog",
        link: "/#Blog",
    },
]
const Footer = () => {
  return (
    <div style={BannerImg}
    className='text-white mb-20'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-10 '>
                  {/*company details*/}
                  <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img src={footerLogo} className='max-w-[50px]'/>
                        DAFFODIL Furniture</h1>
                    <p>At DAFFODIL Furniture Shop, we believe that your home,office is a reflection of your unique personality and style. That's why we offer an extensive collection of high-quality furniture that combines comfort, style, and functionality. Whether you're furnishing a new home, redecorating a single room, or looking for that perfect statement piece, we have something to suit every taste and budget.</p>

                  </div>
                  {/*Footer Links*/}
                  <div className='grid grid-cols-2 sm:grid-cols-3
                  col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 
                            className='sm:text-3xl text-xl font-bold
                            sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link)=> (
                                    <li 
                                    className='cursor-pointer hover:text-primary hover:translate-x-1
                                    duration-300 text-gray-200'
                                    key={link.title}>
                                        <span>{link.title}</span>

                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                        
                        
                    </div>
                    <div className='py-8 px-4'>
                            <h1 
                            className='sm:text-3xl text-xl font-bold
                            sm:text-left text-justify mb-3'>Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link)=> (
                                    <li 
                                    className='cursor-pointer hover:text-primary hover:translate-x-1
                                    duration-300 text-gray-200'
                                    key={link.title}>
                                        <span>{link.title}</span>

                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                    {/*Social Links*/}
                    <div>
                        <div className='flex items-center gap-3 mt-9'>
                            <a href="#">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaLocationArrow/>
                                <p>No:23, Galle Road, Colombo-03</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+94 1122334444</p>
                            </div>
                        </div>
                    </div>


                  </div>
            </div>

        </div>

    </div>
  )
}

export default Footer