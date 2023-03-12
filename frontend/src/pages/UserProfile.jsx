import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhotoCard from '../components/Photo_card'
import UseImages from '../context/ImageContext'
import { FcLike } from "react-icons/fc"
export default function UserProfile() {
    const useremail = useParams().email
    const [data, setData] = useState()
    const [imagesData, setImagesData] = useState()
    const [userTags, setuserTags] = useState()

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

            </div>




        </>
    )

}
