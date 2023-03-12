import React, { useEffect, useRef, useState } from 'react'
import UserAuth from '../context/UserAuth'
import { NavLink, Navigate } from 'react-router-dom'
// import './Login.css'

export default function LoginPage() {
    const { user, login } = UserAuth()
    const uname = useRef();
    const pwd = useRef();
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            <Navigate to='/home' />
            console.log(email);
            setLogged(false);
            setLogged1(true);
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };
    if (user == null)
        return (
            <>

                <div >

                </div>
                <div className="bg-gray-800 shadow-md  rounded-lg max-w-sm p-4 sm:p-6 lg:p-8  mx-auto w-fit mt-8">
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(uname.current.value, pwd.current.value)
                    }}
                    >
                        <div className="bg-gray-700 shadow-md  rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
                            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white mb-7">Log In The World Of <span className='font-vonique text-3xl text-center'>Photography</span> </h3>
                            {logged ?
                                <p className='text-red-500'>Wrong Credentials</p>
                                :
                                null
                            }
                            {logged1 ?
                                <p className='text-green-500'>Logged In!</p>
                                :
                                null
                            }

                            <div className='mb-8'>
                                <label for="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" id="uname" ref={uname} required={true} />
                            </div>
                            <div className='mb-8'>
                                <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ref={pwd} required={true} />
                            </div>


                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
                                Don't have an account? <NavLink to="/signup" className="text-blue-700 hover:underline ">Sign Up</NavLink>
                            </div>
                        </div>
                    </form>
                </div>


            </>
        )
    else
        return <Navigate to='/home' />
}
