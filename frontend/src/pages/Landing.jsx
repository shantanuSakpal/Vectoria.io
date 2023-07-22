import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import vid from '../assets/landing_video.mp4'

export const Landing = () => {
    return (
        <>
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50 -z-10"></div>
            <video className='back-video ' autoPlay loop muted playsInline src={vid}></video>
            <div className=' w-fit z-10 text-white text-center mx-auto my-40'>
                <h1 className='text-8xl mb-2 font-vonique tracking-wide uppercase'>Vectoria.io</h1>
                <p className='font-vonique tracking-wider text-xl  uppercase' >There is a Photographer in all of us</p>
                <NavLink to="/login"> <button className='rounded-lg border-2 px-2 py-2 text-2xl  mt-3 hover:bg-white hover:border-transparent hover:text-gray-900  font-bold duration-300'>Find Yours</button></NavLink>


            </div>

        </>

    )
}
