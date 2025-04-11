import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>We committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><button onClick={() => { navigate('/pages/Home'); scrollTo(0, 0) }}>Home</button></li>
            <li><button onClick={() => { navigate('/pages/Doctors'); scrollTo(0, 0) }}>All Doctors</button></li>
            <li><button onClick={() => { navigate('/pages/About'); scrollTo(0, 0) }}>About Us</button></li>
            <li><button onClick={() => { navigate('/pages/Contact'); scrollTo(0, 0) }}>Contact</button></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9142399702</li>
            <li>opmconnects@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 OPM CONNECTS - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
