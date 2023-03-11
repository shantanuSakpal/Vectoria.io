import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const useremail = useParams().email
    const GetRequest = async () => {
    const res = await fetch(`http://localhost:3001/user/user/${useremail}`)
    const json = await res.json();
    console.log(json)
    }

    useEffect(()=>{
        GetRequest()
    },[])

    return (
        <div>UserProfile</div>
    )
}
