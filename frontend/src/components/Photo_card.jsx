import React from 'react'
import { NavLink } from 'react-router-dom'

function PhotoCard({ data, caption, email, location }) {
    let base64String
    if (data) {
        base64String = btoa(
            String.fromCharCode(...new Uint8Array(data.data))
        )
    }

    return (
        <>



            <div className="max-w-lg mx-auto w-64 p-2 shadow-md shadow-slate-400 rounded-lg">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <div >
                        <img className="rounded-t-lg bg-cover  " src={`data:image/png;base64,${base64String}`} alt="" />
                    </div>
                    <div className="p-5">
                        <div>
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{caption}</h5>
                        </div>
                        <p className='text-sm'>By {email}</p>
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