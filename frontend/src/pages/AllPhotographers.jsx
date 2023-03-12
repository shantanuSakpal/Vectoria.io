import React from 'react'
import UsePhotographer from '../context/PhotographerContext'
import Gallery from '../components/gallery'
import { Navbar } from '../components/navbar'

export default function AllPhotographers() {
    const { filterpuser, updateFilterValue, filter: { location, tags } } = UsePhotographer()
    if (filterpuser)
        return (
            <><Navbar />
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input className=' rounded-lg text-black w-11/12 bg-gray-200 border-3 border-gray-300  m-4 p-2 text-lg' type="text" name="location" placeholder="Search for your tag !" onChange={updateFilterValue} />
                    </form>
                    {/* <form onSubmit={(e) => e.preventDefault()}>
                        <input className=' rounded-lg text-black w-11/12 bg-gray-200 border-3 border-gray-300  m-8 p-5 text-lg' type="text" name="tags" placeholder="Search for your favourite location !" onChange={updateFilterValue} />
                    </form> */}

                    {filterpuser.map((each) => {
                        return (
                            <>
                                {/* <div key={each._id}>
                                    {each.username}
                                    {each.email}
                                    {each.location}
                                </div> */}
                                <div class="row p-3">
                                    <div class="col-sm-6">
                                        <div class="card m-2">
                                            <div class="card-body">
                                                <h5 class="card-title">{each.username}</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>
                        )
                    })}
                </div>
            </>
        )
}
