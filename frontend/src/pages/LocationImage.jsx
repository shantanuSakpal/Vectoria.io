import React, { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import UseImages from '../context/ImageContext'
import LocGallery from '../components/locGallery'
import { Navbar } from '../components/navbar'

export default function LocationImage() {
  const location = useParams().location
  const { getLocationImage, locationimage } = UseImages()
  useEffect(() => {
    getLocationImage(`http://localhost:3001/image/location/${location}`)
  }, [])
  if (locationimage)
    return (
      <>
      <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {locationimage.map((i, id) => {
            return (
              <>
                
                <NavLink to={`/userprofile/${i.email}`}>
                  <LocGallery key={i.id} photo={i} />
                </NavLink>
              </>
            )
          })}
        </div>
      </>
    )
}
