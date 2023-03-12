import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LocGallery = ({ photo }) => {
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


    if (username)
        return (


            <div
                key={photo._id}
                className="relative overflow-hidden rounded-md shadow-lg aspect-w-3 aspect-h-4"
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
            >
                <img
                    src={`data:image/png;base64,${base64String}`}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                />
                {hoveredPhoto === photo && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white transition duration-300">
                        <p className="text-lg font-bold">{photo.title}</p>
                        <p className="text-lg">{`Photographer: ${photo.email}`}</p>
                        <NavLink to={`/userprofile/${photo.email}`}> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-3 py-2 text-center inline-flex items-center my-1 text-sm" >
                            See More From This Photographer
                        </button>
                        </NavLink>
                    </div>
                )}
            </div>


        );
};

LocGallery.propTypes = {
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

export default LocGallery;


