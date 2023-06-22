// eslint-disable-next-line no-unused-vars
import React from 'react'
import CardTestimonios from './CardTestimonios'
import QuoteIcon from '../images/bg-quotes.png'


const Testimonios = () => {
    return (
        <div className='mt-40'>
            <img src={QuoteIcon} className='relative left-80 top-7 z-10' alt="iconQuotes" />
            <div className='container mx-auto flex justify-center gap-5 '>
                <CardTestimonios/>
                <CardTestimonios/>
                <CardTestimonios/>
            </div>
        </div>
    )
}

export default Testimonios