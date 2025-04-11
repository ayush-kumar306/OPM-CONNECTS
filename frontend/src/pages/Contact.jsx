import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Chitkara University <br /> Himachal Pradesh, India</p>
          <p className=' text-gray-500'>Mob.: +91 9142399702 <br /> Email: opmconnects@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT OPM CONNECTS</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
  <a 
    href="https://mail.google.com/mail/?view=cm&to=opmconnects@gmail.com&su=Application%20for%20Career%20Opportunities%20at%20OPM%20Connects"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Explore Jobs
  </a>
</button>

        </div>
      </div>

    </div>
  )
}

export default Contact
