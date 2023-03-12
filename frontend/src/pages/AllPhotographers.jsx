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
                        <input classNameName=' rounded-lg text-black w-11/12 bg-gray-200 border-3 border-gray-300  m-4 p-2 text-lg' type="text" name="location" placeholder="Search for your tag !" onChange={updateFilterValue} />
                    </form>
                    {/* <form onSubmit={(e) => e.preventDefault()}>
                        <input classNameName=' rounded-lg text-black w-11/12 bg-gray-200 border-3 border-gray-300  m-8 p-5 text-lg' type="text" name="tags" placeholder="Search for your favourite location !" onChange={updateFilterValue} />
                    </form> */}

                    {filterpuser.map((each) => {
                        return (
                            <>
                                {/* <div key={each._id}>
                                    {each.username}
                                    {each.email}
                                    {each.location}
                                </div> */}
                                <div className="row p-3">
                                    <div className="col-sm-6">
                                        <div className="card m-2">
                                            <div className="card-body">
                                                <h2 className="card-title font-bold">{each.username}</h2>
                                                <h5 className="card-text">A certified Photographer who is loved by all.</h5>
                                                <p>Shows photography feats at: {each.location}</p>
                                                
                                                <a  href={`/userprofile/${each.email}`} className="btn btn-primary my-3">Click to know more about {each.username}</a>
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
