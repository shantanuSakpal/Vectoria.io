import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const useremail = useParams().email
    const [data, setData] = useState()

    const GetRequest = async () => {
        const res = await fetch(`http://localhost:3001/user/user/${useremail}`)
        const json = await res.json();
        console.log(json[0])
        setData(json[0])
    }

    useEffect(()=>{
        GetRequest()
    },[])


    
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-7xl font-semibold' >{data?.username}</p>
            <p className='text-xl mt-4 text-slate-400' >{data.location}</p>
            <p className='text-xl mt-4 text-slate-400' >{data.email}</p>
            <p className='text-xl mt-4 text-slate-400' >{data.expyr} years of experience</p>
            <div className='bg-red-300 h-80 w-80'>
                idhar tags aayenge
            </div>
            <div className='bg-blue-300 h-80 w-80'>
                idhar images aayenge
            </div>
        </div>
    )

}
