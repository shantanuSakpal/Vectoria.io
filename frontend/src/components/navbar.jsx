import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImProfile } from "react-icons/im"
import { signOut } from 'firebase/auth'

export const Navbar = () => {


    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-  dark:bg-black">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <NavLink>   <div href="/home" className="flex items-center">

                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">App Title</span>

                    </div> </NavLink>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
                            <li>
                                <NavLink to="/home" onClick={signOut} className="block py-2 pl-3 pr-4 text-white bg-gratext-gray-400 rounded md:bg-transparent md:text-gray-400 md:p-0 hover:text-white" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="block py-2 pl-3 pr-4 text-white bg-gratext-gray-400 rounded md:bg-transparent md:text-gray-400 md:p-0 hover:text-white" aria-current="page">Photographers Nearby</NavLink>
                            </li>

                            <li>
                                <NavLink href="/profile" title='Profile' className="block width-10 py-2 pl-3 pr-4 text-white bg-gratext-gray-400 rounded md:bg-transparent md:text-gray-400 md:p-0 hover:text-white" aria-current="page">Profile</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
