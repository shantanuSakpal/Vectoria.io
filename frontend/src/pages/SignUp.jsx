import React, { useRef, useState } from 'react'
import UserAuth from '../context/UserAuth';
import { Navigate, Link, NavLink } from 'react-router-dom';

export default function Signup() {
    const { user, signup } = UserAuth();
    const created_uname = useRef();
    const created_pwd = useRef();
    const con_created_pwd = useRef();

    const [passmatch, setPassmatch] = useState(true);
    const [createduser, setCreateduser] = useState(true);
    const [createduser1, setCreateduser1] = useState(false);

    async function handleSignup() {
        if (con_created_pwd.current.value !== created_pwd.current.value) {
            setPassmatch(false)
            console.log("Password not matching")
        }
        else
            try {
                await signup(created_uname.current.value, created_pwd.current.value);
                setCreateduser1(true);
                <Navigate to='/login' />
            } catch (e) {
                console.log(e)
                setCreateduser(false)
            }
    }
    if (user)
        <Navigate to='/' />
    else
        return (
            <div className="mx-auto w-fit">
                <div
                    className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-900 dark:border-gray-900">
                    <form className="space-y-6" action="#">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up To Explore The World Of Photography</h3>
                        <div>
                            <label for="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" id="uname" ref={created_uname} required={true} />
                        </div>
                        <div>
                            <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ref={created_pwd} required={true} />
                        </div>
                        <div>
                            <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Confirm password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ref={con_created_pwd} required={true} />
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already have an account ? <NavLink to="/login" className="text-blue-700 hover:underline ">Log In</NavLink>
                        </div>
                    </form>
                </div>

            </div>
        )
}


