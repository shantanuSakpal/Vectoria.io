import React, { useRef, useContext, createContext } from 'react'
import ApnaButton from '../components/ApnaButton';
import UserAuth from '../context/UserAuth';
import UploadPage from './Upload';
import uuid from 'react-uuid';

export default function Profile() {
    const location = useRef();
    const yr = useRef();
    const username = useRef();
    // const { user } = UserAuth()
    const user = {
        email:"mohdmehdi2003@gmail.com"
    }
    function PostRequest() {
        fetch('http://localhost:3001/user/'
            , {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    id: uuid(),
                    username : username.current.value,
                    email: user.email,
                    location: location.current.value,
                    expyr: yr.current.value
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center ">
                <div className='bg-slate-100 px-24 mt-10 py-8 rounded-3xl'>
                    <h3 className='text-6xl font-semibold p-5'>Profile</h3>
                    <h6 className='mb-4 font-semibold' >Your Email : {user.email}</h6>
                    <div className="flex flex-col">
                    <h6 className='mb-4 font-semibold' >Username:</h6>
                        <input className='bg-slate-200 rounded-lg p-2 mb-2' type="text" ref={username} />
                    </div>
                    <div className="flex flex-col ">
                    <h6 className='mb-4 font-semibold' >Location:</h6>
                        <input className='bg-slate-200 rounded-lg p-2 mb-2' type="text" ref={location} />
                    </div>
                    <div className="flex flex-col ">
                    <h6 className='mb-4 font-semibold' >Years of Experience</h6>
                        <input className='bg-slate-200 rounded-lg p-2' type="text" ref={yr} />
                    </div>
                    {/* <div className="prfile-div">
                        <button onClick={PostRequest}>Create Profile!</button>
                    </div> */}
                    <ApnaButton onClick={PostRequest} text={"Create Profile"}/>
                </div>
                
                <UploadPage/>
            </div>
        </>
    )
}
