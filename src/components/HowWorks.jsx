// eslint-disable-next-line no-unused-vars
import React from 'react'
import Ilustration from '../images/illustration-stay-productive.png'

const HowWorks = () => {
  return (
    <div className='flex items-center justify-evenly pt-16'>
        <div>
            <img src={Ilustration} alt="" />
        </div>
        <div className='w-1/3'>
            <h2 className='text-white text-5xl'>Stay Productive,</h2>
            <h2 className='text-white text-5xl py-2'>wherever you are</h2>
            <p className='text-white text-lg py-3'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className='text-white text-lg py-3'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <a className='underline text-cyan-300 text-sm' href="">See how Fylo works </a>
        </div>
    </div>
  )
}

export default HowWorks