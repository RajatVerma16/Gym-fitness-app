/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>


            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>From Unshape<span className='text-blue-600'> <br/>  To  In Shape</span></h1>

                <p> <h1 className='font-semibold text-2xl sm:text-5xl md:text-6xl lg:text-5xl' > The only Roadmap you will ever Need to be in shape </h1></p>
                <p ><h1 className='font-semibold text-2xl sm:text-5xl md:text-6xl lg:text-5xl' > IT&apos;S TIME TO GET STARTED   </h1> </p>

                <p>Let&apos;s Begin your Journey </p>
                
            </div>
            <p className='text- md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.
            
            </p>
            

            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
