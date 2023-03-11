import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const useremail = useParams().email
    const [data, setData] = useState()
    const GetRequest = async () => {
    const res = await fetch(`http://localhost:3001/user/user/${useremail}`)
    const json = await res.json();
    console.log(json)
    setData(json)
    }

    useEffect(()=>{
        GetRequest()
    },[])

    useEffect(()=>{
        setData(data)
        console.log(data)
    },[data])
    if(data)
    return (
        <>
        {data.map((i)=>{
            return (
                <>
                <div key={i.id}>
                {i.email}
                {i.username}
                {i.location}
                </div>
                </>
                )
        })}
        </>
    )
}
