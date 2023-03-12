import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhotoCard from '../components/Photo_card'
import UseImages from '../context/ImageContext'
import { FcLike } from "react-icons/fc"
import {NavLink} from 'react-router-dom'
import UserAuth from '../context/UserAuth'
import { Navbar } from '../components/navbar'

export default function UserProfile() {
    const useremail = useParams().email
    const [data, setData] = useState()
    const [imagesData, setImagesData] = useState()
    const [userTags, setuserTags] = useState()
    const {logout} = UserAuth()

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    const GetRequest = async () => {
        const res = await fetch(`http://localhost:3001/user/user/${useremail}`)
        const json = await res.json();
        setData(json[0])
        const res2 = await fetch(`http://localhost:3001/image/email/${useremail}`)
        const json2 = await res2.json()
        setImagesData(json2)
        var userTags = []
        json2.forEach(element => {
            // console.log(element.tags)
            console.log(userTags.push(...element.tags))
        });
        removeDuplicates(userTags)
        console.log(userTags)
        setuserTags(userTags)

        // console.log("json 2 is ",json2)
    }
    var totalLikes = 0;
    if (imagesData) {
        console.log("image data,", imagesData)
        imagesData.forEach(element => {
            totalLikes += element.likes

        });
    }
    console.log(totalLikes)

    useEffect(() => {
        GetRequest()
    }, [])

    return (
        <>
        <Navbar/>
            <div className="max-w-screen-lg mx-auto py-8">
                <div className="flex items-center justify-center mb-8">
                    <img
                        className="w-24 h-24 rounded-full mr-4"
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">{data?.username}</h1>
                        <p className=" ">{data?.email}</p>
                        <p className=" text-xl">  {data?.expyr} Years of experience</p>
                        <p className=" text-xl">{data?.location}</p>
                    </div>

                </div>
                <div className="flex items-center justify-center mt-8">
                    <FcLike className='w-7 h-7 mx-3 ' />
                    <p className="font-bold text-xl ">{totalLikes} likes</p>
                </div>

                <h1 className='font-bold text-3xl mx-4'>Recent Works</h1>
                <div className="grid grid-cols-3 gap-4">
                    {imagesData?.map((each) => {
                        return (
                            <PhotoCard key={each._id} photo={each} />
                        )
                    })}
                </div>
                <button type="button" onClick={logout} class="my-4 ml-4 text-white bg-gradient-to-r from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"><NavLink to='/' title='Signout' className="block width-10 py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-200 md:p-0 hover:text-white" aria-current="page">Signout</NavLink></button>
            </div>




        </>
    )

}
