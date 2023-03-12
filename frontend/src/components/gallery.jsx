import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BiLike } from "react-icons/bi"
const Gallery = ({ photo }) => {
    const [username, setUsername] = useState(null)
    let base64String
    if (photo.image.data.data) {
        base64String = btoa(
            String.fromCharCode(...new Uint8Array(photo.image.data.data))
        )
    }
    console.log(photo)
    useEffect(() => {
        const GetRequest = async () => {
            const res = await fetch(`http://localhost:3001/user/user/one/${photo.email}`)
            const json = await res.json();

            setUsername(json.username)
        }
        GetRequest()
    }, [])

    const [hoveredPhoto, setHoveredPhoto] = useState(null);


    const [like, setLike] = useState(photo.likes)
    function handleLike() {
        console.log(photo.likes)
        if (photo.likes > 0)
        //Increment like by 1
        {
            function PostRequest() {
                fetch(`http://localhost:3001/image/like/${photo._id}`, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        id: photo.id,
                        email: photo.email,
                        location: photo.location,
                        caption: photo.caption,
                        tags: photo.tags,
                        time: photo.time,
                        likes: photo.likes + 1,

                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            }
            setLike(photo.likes + 1)
            PostRequest()
        }
        else
        //Send like =1
        {
            function PostRequest() {
                fetch(`http://localhost:3001/image/like/${photo._id}`, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        id: photo.id,
                        email: photo.email,
                        location: photo.location,
                        caption: photo.caption,
                        tags: photo.tags,
                        likes: 1
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            }
            PostRequest()
        }



    }

    if (username)
        return (


            <div
                key={photo._id}
                className="relative overflow-hidden rounded-3xl  aspect-w-3 aspect-h-4 shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-600"
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
            >
                <img
                    src={`data:image/png;base64,${base64String}`}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                />
                {hoveredPhoto === photo && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 text-white transition duration-300">
                        <h4 className='text-3xl'>By <span className='font-bold'>{username}</span> at  <span className='font-bold'>{photo.location}</span></h4>
                        <button className='p-1' onClick={handleLike}><BiLike className='w-7 h-7 ' /></button> {like}<br />
                        <NavLink to={`/locationimage/${photo.location}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-1" >
                            Explore {photo.location}
                        </button></NavLink>
                        <NavLink to={`/userprofile/${photo.email}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-3 py-2 text-center inline-flex items-center my-1 text-sm" >
                            More by {username}
                        </button>
                        </NavLink>
                    </div>
                )}
            </div>


        );
};

Gallery.propTypes = {
    photo: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
        })
    ),
};

export default Gallery;


