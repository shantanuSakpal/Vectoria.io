import React, { useEffect } from 'react'
import { AddImageBtn } from '../components/AddImageBtn'
import PhotoCard from '../components/Photo_card'
import UseImages from '../context/ImageContext'

export const Home = () => {

    const { filterlocation, updateFilterValue } = UseImages()

    if (filterlocation !== null || filterlocation !== []) {
        return (
            <>
                <div className="home-page p-4">

                    <form className='mx-auto w-full text-center ' onSubmit={(e) => e.preventDefault()}>
                        
                        <input className=' rounded-lg text-black w-full border-3 h-10 border-gray-300  mb-8 p-2 ' type="text" name="text" placeholder="Search for your favourite location !" onChange={updateFilterValue} />
                    </form>
                    <div className='flex flex-wrap'>
                        {filterlocation.map((each) => {
                            return (
                                <PhotoCard key={each._id} photo={each} />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
