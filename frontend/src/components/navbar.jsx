import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImProfile } from "react-icons/im"
import { signOut } from 'firebase/auth'
import UserAuth from '../context/UserAuth'
import { FcOldTimeCamera } from 'react-icons/fc'
export const Navbar = () => {

    const { user } = UserAuth()

    return (
        <div>
            <nav className=" border-gray-200 px-2 sm:px-1 mb-5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <NavLink>
                        <div href="/home" className="flex items-center my-2">
                            
                            <span className="self-center text-5xl font-extrabold  whitespace-nowrap text-gray-900 font-vonique uppercase">Vectora</span>
                        </div>
                    </NavLink>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium ">
                            <li>
                                <button type="button" class="text-white bg-gradient-to-br from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"><NavLink to="/home" onClick={signOut} className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-200 md:p-0 hover:text-white" aria-current="page">Explore</NavLink></button>


                            </li>
                            <li>
                                <button type="button" class="text-white bg-gradient-to-br from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"><NavLink to="/nearme" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-200 md:p-0 hover:text-white" aria-current="page">Hire Photographers</NavLink></button>


                            </li>
                            <li>
                                <button type="button" class="text-white bg-gradient-to-br from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"><NavLink to="/upload" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-200 md:p-0 hover:text-white" aria-current="page">Upload</NavLink></button>


                            </li>

                            <li>
                                <button type="button" class="text-white bg-gradient-to-r from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"><NavLink to={`/news`} title='Profile' className="block width-10 py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-200 md:p-0 hover:text-white" aria-current="page">News For You</NavLink></button>


                            </li>
                            <li>
                                <button type="button" class="text-white bg-gradient-to-r from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"><NavLink to={`/userprofile/${user.email}`} title='Profile' className="block width-10 py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-200 md:p-0 hover:text-white" aria-current="page">My Profile</NavLink></button>


                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
