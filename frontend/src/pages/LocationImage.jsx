import React, { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import UseImages from '../context/ImageContext'
import PhotoCard from '../components/Photo_card'

export default function LocationImage() {
  const location = useParams().location
  const {getLocationImage, locationimage} = UseImages()
  useEffect(()=>{
    getLocationImage(`http://localhost:3001/image/location/${location}`)
  },[])
  console.log(locationimage)
  if(locationimage)
  return (
    <>
    {locationimage.map((i)=>{
        return (
            <>
            <NavLink to={`/userprofile/${i.email}`}>
            <PhotoCard data={i.image.data} caption={i.caption} email={i.email} location={i.location} />
            </NavLink>
            </>
        )
    })}
    </>
  )
}
