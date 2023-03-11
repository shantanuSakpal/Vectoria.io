import React, { useEffect } from 'react'
import { AddImageBtn } from '../components/AddImageBtn'
import PhotoCard from '../components/Photo_card'
import UseImages from '../context/ImageContext'

export const Home = () => {

    const { images } = UseImages()

    if (images !== null || images !== []) {
        return (
            <>
                <div className='flex flex-wrap'>
                    {images.map((each) => {
                        console.log(each)
                        return (

                            <PhotoCard key={each._id} data={each.image.data} caption={each.caption} email={each.email} location={each.location} />
                        )
                    })}
                </div>
            </>
        )
    }
}
