import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function News() {
    const [newsdata, setNewsData] = useState()
    useEffect(()=>{
        const GetRequest = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=photography&apiKey=f81a3c84084b433990da0c70d0a85861')
        const json = await res.json();
        console.log(json.articles)
        setNewsData(json.articles)
        }
        // GetRequest()
    },[])
    if(newsdata)
    return (
        <>
        {newsdata.map((i)=>{
            return(
                <>
                <a href={i.url} target="_blank">
                <h3>Title</h3>
                <p>{i.title}</p>
                <h3>Content</h3>
                <p>{i.content}</p>
                </a>
                </>
            )
        })}
        </>
    )
}
