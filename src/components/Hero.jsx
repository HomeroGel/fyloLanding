// eslint-disable-next-line no-unused-vars
import React from 'react'
import svgHero from '../images/hero.png'

const Hero = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='pb-8'>
                <img src={svgHero} alt="" />
            </div>
            <h2 className='text-white text-4xl pb-4'>All your files in one secure location,</h2> <h2 className='text-white text-4xl'>accessible anywhere.</h2>
            <p className='text-white py-10 text-lg w-96 text-center'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            <button className='cta px-24 py-3 rounded-3xl'>Get Started</button>
        </div>
    )
}

export default Hero