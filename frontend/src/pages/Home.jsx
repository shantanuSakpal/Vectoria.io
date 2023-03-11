import React, { useEffect } from 'react'
import { AddImageBtn } from '../components/AddImageBtn'
import Gallery from '../components/gallery'
import UseImages from '../context/ImageContext'

export const Home = () => {

    const { images } = UseImages()

    if (images !== null || images !== []) {
        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((each) => {
                        console.log(each)
                        return (

                            <Gallery key={each._id} photo={each} />
                        )
                    })}
                </div>
            </>
        )
    }
}
