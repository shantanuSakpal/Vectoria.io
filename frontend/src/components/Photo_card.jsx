import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

function PhotoCard({photo}) {
    console.log(photo)
    const likes = photo.like
    const [username, setUsername] = useState(null)
    let base64String
    if (photo.image.data) {
        base64String = btoa(
            String.fromCharCode(...new Uint8Array(photo.image.data.data))
        )
    }


    useEffect(() => {
        const GetRequest = async () => {
            const res = await fetch(`http://localhost:3001/user/user/one/${photo.email}`)
            const json = await res.json();
            setUsername(json.username)
        }
        GetRequest()
    }, [])

    function handleLike(){
        console.log(photo.likes)
        if(photo.likes > 0)
        //Increment like by 1
        {
            function PostRequest (){
            fetch(`http://localhost:3001/image/like/${photo._id}`,{
            method : 'POST',
            mode : 'cors',
             body :JSON.stringify({
                id: photo.id,
                email : photo.email,
                location : photo.location,
                caption: photo.caption,
                tags : photo.tags,
                time  : photo.time,
                likes : photo.likes+1,
             }),
            headers : {
             'Content-type' : 'application/json' 
             }})}
             PostRequest()
        }
        else
        //Send like =1
        {
            function PostRequest (){
                fetch(`http://localhost:3001/image/like/${photo._id}`,{
                method : 'POST',
                mode : 'cors',
                 body :JSON.stringify({
                      id: photo.id,
                      email : photo.email,
                      location : photo.location,
                      caption: photo.caption,
                      tags : photo.tags,
                      likes : 1
                 }),
                headers : {
                 'Content-type' : 'application/json' 
                 }})}
            PostRequest()
        }

        
        
    }

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
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{photo.caption}</h5>
                            </div>
                            <p className='text-sm'>By {username}</p>
                            <p>at {photo.location}</p>

                        </div>
                        <div >


                            <button onClick={handleLike}>Like</button>
                            <NavLink to={`/locationimage/${photo.location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-1" >
                                See More From {photo.location}
                            </button></NavLink>
                            <NavLink to={`/locationimage/${photo.location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-3 py-2 text-center inline-flex items-center my-1 text-sm" >
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