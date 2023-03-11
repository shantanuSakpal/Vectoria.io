import React, { useEffect } from 'react'
import { AddImageBtn } from '../components/AddImageBtn'
import Gallery from '../components/gallery'
import UseImages from '../context/ImageContext'

export const Home = () => {

    const { filterlocation, updateFilterValue } = UseImages()

    if (filterlocation !== null || filterlocation !== []) {
        return (
            <>
                <form onSubmit={(e) => e.preventDefault()}>

                    <input className=' rounded-lg text-black w-11/12 bg-gray-200 border-3 border-gray-300  m-8 p-5 text-lg' type="text" name="text" placeholder="Search for your favourite location !" onChange={updateFilterValue} />
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">



                    {filterlocation.map((each) => {
                        return (
                            <Gallery key={each._id} photo={each} />
                        )
                    })}

                </div>
            </>
        )
    }
}
