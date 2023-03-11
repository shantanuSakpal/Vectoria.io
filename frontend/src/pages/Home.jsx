import React, { useEffect } from 'react'
import { AddImageBtn } from '../components/AddImageBtn'
import ImageCard from '../components/imageCard'
import UseImages from '../context/ImageContext'

export const Home = () => {

    const { images } = UseImages()
    console.log(images)
    if (images !== null || images !== []) {
        return (
            <>
                {images.map((each) => {
                    console.log(each.location)
                    return (
                        <ImageCard data={each.image.data} something={each} location={each.location} />
                    )
                })}
            </>
        )
    }
}
