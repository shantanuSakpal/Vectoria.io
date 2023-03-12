import React, { useEffect } from 'react'
import Gallery from '../components/gallery'
import UseImages from '../context/ImageContext'
import { AddImageBtn } from '../components/AddImageBtn'
import { Navbar } from '../components/navbar'
export const Home = () => {

    const { filterlocation, updateFilterValue } = UseImages()

    if (filterlocation !== null || filterlocation !== []) {
        return (
            <>
                <Navbar/>
                <div className='min-h-screen'>

                    <h2 className='capitalize mx-5 text-3xl  font-extrabold'>Find the best Photographers near you !</h2>
                    <form className='mx-5' onSubmit={(e) => e.preventDefault()}>

                        <input className=' rounded-lg text-black w-1/3 bg-gray-200 border-3 border-gray-300  m-4 p-2 text-lg' type="text" name="text" placeholder="Search for your favourite location !" onChange={updateFilterValue} />
                    </form>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7 overflow-hidden">



                        {filterlocation.map((each) => {
                            return (
                                <Gallery key={each._id} photo={each} />
                            )
                        })}

                    </div>
                </div>
                {/* <GrAddCircle className='text-white w-10 h-10' /> */}
                </>
        )
    }
}
