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
            <div >


                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <div >
                            <img className="rounded-t-lg" src={`data:image/png;base64,${base64String}`} alt="" />
                        </div>
                        <div className="p-5">
                            <div>
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{caption}</h5>
                            </div>
                            <p>{email}</p>
                        </div>
                        <div >



                            <NavLink to={`/locationimage/${location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-1" >
                                See More From This Place
                            </button></NavLink>
                            <NavLink to={`/locationimage/${location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-1" >
                                See More From This Photographer
                            </button></NavLink>
                        </div>
                    </div>
                    <p>This card component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" target="_blank">Flowbite Documentation</a>.</p>
                </div>
            </div>
        </>
    )
}

export default PhotoCard