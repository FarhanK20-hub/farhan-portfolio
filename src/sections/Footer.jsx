import React from 'react'

const Footer = () => {
  return (
    
    <section className='c-space pt-7 pb-3 border-black-300 flex justify-between items-center flex-wrap gap5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p> 
            <p>|</p> 
            <p>Privacy Policy</p>
        </div>
                    <div className='flex gap-3'>
                <div className='social-icon'>
                    <a href='https://www.instagram.com/frk_gallery/' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800'>
                        <img src='/assets/instagram.svg' alt='instagram' className='w-1/2 h-1/2 cursor-pointer' />
                    </a>
                </div>

                <div className='social-icon'>
                    <a href='https://www.youtube.com/@frk_thewalker1501' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800'>
                        <img src='/assets/youtube.svg' alt='youtube' className='w-1/2 h-1/2 cursor-pointer' />
                    </a>
                </div>

                <div className='social-icon'>
                    <a href='https://github.com/FarhanK20-hub' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800'>
                        <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2 cursor-pointer' />
                    </a>
                </div>

                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/farhan-khan-3aa5442b0/' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800'>
                        <img src='/assets/linkedin.svg' alt='linkedin' className='w-1/2 h-1/2 cursor-pointer' />
                    </a>
                </div>
            </div>


        <p className='text-white-500'>© 2024 Farhan. All rights reserved.</p>
    </section>
  )
}

export default Footer
