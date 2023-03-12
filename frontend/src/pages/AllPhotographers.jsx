import React from 'react'
import UsePhotographer from '../context/PhotographerContext'
import Gallery from '../components/gallery'

export default function AllPhotographers() {
    const { filterlocation, updateFilterValue } = UsePhotographer()
    if(filterlocation)
    return (
        <>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className=' rounded-lg text-black w-11/12 bg-gray-200 border-3 border-gray-300  m-8 p-5 text-lg' type="text" name="text" placeholder="Search for your favourite location !" onChange={updateFilterValue} />
                </form>
                
                {filterlocation.map((each) => {
                        return (
                            <>
                            <div key={each._id}>
                            {each.username}
                            {each.email}
                            {each.location}
                            </div>
                            </>
                        )
                    })}
            </div>
        </>
    )
}
