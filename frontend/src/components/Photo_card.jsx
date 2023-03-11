import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function PhotoCard({ data, caption, email, location }) {
    const [username, setUsername] = useState(null)
    let base64String
    if (data) {
        base64String = btoa(
            String.fromCharCode(...new Uint8Array(data.data))
        )
    }

    useEffect(() => {
        const GetRequest = async () => {
            const res = await fetch(`http://localhost:3001/user/user/one/${email}`)
            const json = await res.json();
            console.log(json)
            setUsername(json.username)
        }
        GetRequest()
    }, [])

    if (username)
        return (
            <>



                <div className="max-w-lg mx-auto w-72 p-2 shadow-md shadow-slate-400 rounded-lg">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <div className='bg-cover overflow-hidden' >
                            <img className="rounded-t-lg" src={`data:image/png;base64,${base64String}`} alt="" />
                        </div>
                        <div className="p-5">
                            <div>
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{caption}</h5>
                            </div>
                            <p className='text-sm'>By {username}</p>
                            <p>at {location}</p>

                        </div>
                        <div >



                            <NavLink to={`/locationimage/${location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-1" >
                                See More From {location}
                            </button></NavLink>
                            <NavLink to={`/locationimage/${location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-3 py-2 text-center inline-flex items-center my-1 text-sm" >
                                See More From This Photographer
                            </button>
                            </NavLink>
                        </div>
                    </div>

                </div>

            </>
        )
}

export default PhotoCard