// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../images/logo.svg'
import IconLocation from '../images/icon-location.svg'
import PhoneIcon from '../images/icon-phone.svg'
import EmailIcon from '../images/icon-email.svg'
import FacebookIcon from '../images/facebook.png'
import TwitterIcon from '../images/twitter.png'
import InstagramIcon from '../images/instagram.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='relative top-24 left-48 w-fit'>
                <img className='logo' src={Logo} alt="logo" />
            </div>

            <div className='flex justify-evenly items-center h-80'>
                <div className='flex'>
                    <div>
                        <img className='' src={IconLocation} alt="icon-location" />
                    </div>
                    <p className='text-white w-96 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in architecto tenetur nesciunt, molestiae atque? Minus autem magni </p>
                </div>
                <div>
                    <div className='flex pb-4'>
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <p className='text-white ps-4'>+1-543-123-4567</p>
                    </div>
                    <div className='flex'>
                        <img src={EmailIcon} alt="EmailIcon" />
                        <p className='text-white ps-4'>example@fylo.com</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <a className='text-white pb-3' href="#">About Us</a>
                    <a className='text-white pb-3' href="#">Jobs</a>
                    <a className='text-white pb-3' href="#">Press</a>
                    <a className='text-white' href="#">Blog</a>
                </div>
                <div className='flex flex-col'>
                    <a className='text-white pb-3' href="#">Contact Us</a>
                    <a className='text-white pb-3' href="#">Terms</a>
                    <a className='text-white' href="#">Privacy</a>
                </div>
                <div className='flex'>
                    <a href="#"><img src={FacebookIcon} alt="" className='pe-2' /></a>
                    <a href="#"><img src={TwitterIcon} alt="" className='pe-2' /></a>
                    <a href="#"><img src={InstagramIcon} alt="" /></a>
                </div>
            </div>



        </div>
    )
}

export default Footer