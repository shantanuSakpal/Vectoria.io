import React, { useRef, useContext, createContext } from 'react'
import UserAuth from '../context/UserAuth';

export default function Profile() {
    const location = useRef();
    const yr = useRef();
    const username = useRef();
    const { user } = UserAuth()
    function PostRequest() {
        fetch('http://localhost:3001/user/'
            , {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    id: user.uid,
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
            <div className="profile-pae">
                <h3>Profile</h3>
                <div className="profile-div">
                    <h6>Your Email : {user.email}</h6>
                </div>
                <div className="profile-div">
                    <h6>Username:</h6>
                    <input type="text" ref={username} />
                </div>
                <div className="profile-div">
                    <h6>Location:</h6>
                    <input type="text" ref={location} />
                </div>
                <div className="profile-div">
                    <h6>Years of Experience</h6>
                    <input type="text" ref={yr} />
                </div>
                <div className="prfile-div">
                    <button onClick={PostRequest}>Create Profile!</button>
                </div>
            </div>
        </>
    )
}
