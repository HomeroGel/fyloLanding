// eslint-disable-next-line no-unused-vars
import React from 'react'
import accessIcon from '../images/icon-access-anywhere.svg'
import anyFileIcon from '../images/icon-any-file.svg'
import collaborationIcon from '../images/icon-collaboration.svg'
import securityIcon from '../images/icon-security.svg'

const Info = () => {
    return (
        <div className=' grid grid-cols-2 justify-items-center'>
            <div className='w-1/2 flex flex-col items-center py-28'>
                <img src={accessIcon} alt="" />
                <h3 className='text-white text-xl'>Access your files, anywhere</h3>
                <p className='text-white text-center '>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className='w-1/2 flex flex-col items-center py-28'>
                <img src={securityIcon} alt="" />
                <h3 className='text-white text-xl'>Security you can trust</h3>
                <p className='text-white text-center '>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
            <div className='w-1/2 flex flex-col items-center py-8'>
                <img src={collaborationIcon} alt="" />
                <h3 className='text-white text-xl'>Real-time collaboration</h3>
                <p className='text-white text-center '>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
            <div className='w-1/2 flex flex-col items-center py-8'>
                <img src={anyFileIcon} alt="" />
                <h3 className='text-white text-xl'>Store any type of file</h3>
                <p className='text-white text-center '>Whether you`re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stores and shared. </p>
            </div>
        </div>
    )
}

export default Info