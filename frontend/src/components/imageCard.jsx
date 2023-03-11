import React from 'react'
import { NavLink } from 'react-router-dom'

function ImageCard({data,something, location}) {
    let base64String
    if (data) {
        base64String = btoa(
            String.fromCharCode(...new Uint8Array(data.data))
        )
    }
  return (
    <>
    <NavLink to={`/locationimage/${location}`}>
    <div className='bg-red-300'>
        <img className='h-40 w-auto' src={`data:image/png;base64,${base64String}`} width="100" />
    </div>
    </NavLink>
    </>
  )
}

export default ImageCard