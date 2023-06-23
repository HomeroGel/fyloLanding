// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <div className='relative top-20 containerContact w-2/5 rounded-lg p-10 flex flex-col mx-auto items-center mt-36'>
        <h2 className='text-white text-2xl pb-5'>Get early access today</h2>
        <p className='text-white text-center pb-9'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <div className='w-full flex justify-evenly'>
            <input className='bg-white rounded-3xl py-3 w-96' type="email" name="email" id="email" placeholder='email@example.com'/>
            <button className='cta px-10 py-3 rounded-3xl'>Get Started For Free</button>
        </div>
    </div>
  )
}

export default Contact