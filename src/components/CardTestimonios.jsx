// eslint-disable-next-line no-unused-vars
import React from 'react'
import Avatar from '../images/profile-1.jpg'
import '../index.css'

const CardTestimonios = () => {
  return (
    <div className='flex flex-col w-96 py-5 px-10 bg rounded-lg'>
        <div>
            <p className='text-white bg'>Fylo has improved our team productivy by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        </div>
        <div className='flex bg pt-8'>
              <div className='bg'>
                  <img src={Avatar} className='rounded-full w-12' alt="avatar" />
              </div>
              <div className='bg'>
                  <h3 className='text-white bg '>Satish Patel</h3>
                  <p className='text-gray-400 bg '>Founder & CEO, Huddle</p>
              </div>
        </div>

    </div>
  )
}

export default CardTestimonios