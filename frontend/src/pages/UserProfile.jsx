import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhotoCard from '../components/Photo_card'

export default function UserProfile() {
    const useremail = useParams().email
    const [data, setData] = useState()
    const [imagesData , setImagesData] = useState()
    const [userTags , setuserTags] = useState()

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

    useEffect(()=>{
        GetRequest()
    },[])


    
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-7xl mt-5 font-semibold' >{data?.username}</p>
            <p className='text-xl mt-4 text-slate-400' >{data?.location}</p>
            <p className='text-xl mt-4 text-slate-400' >{data?.email}</p>
            <p className='text-xl mt-4 text-slate-400' >{data?.expyr} years of experience</p>
            <div className='flex flex-col justify-center items-center w-[80%]'>
                <p className='text-3xl my-4'>Tags</p>
                <div className='flex flex-wrap' >
                    {userTags?.map((each)=>
                        <p className='bg-slate-300 my-1 mx-2 py-2 px-3 rounded-xl' >{each}</p>
                        )}
                </div>
            </div>
            <p className='text-3xl my-5' >Recent Posts</p>
            <div className='w-full flex flex-wrap'>
                {imagesData?.map((each) => {
                    return (

                        <PhotoCard key={each._id} data={each.image.data} caption={each.caption} email={each.email} location={each.location} />
                    )
                    })}
            </div>
        </div>
    )

}
