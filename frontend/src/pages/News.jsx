import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from '../components/navbar'

export default function News() {
    const [newsdata, setNewsData] = useState()
    useEffect(() => {
        const GetRequest = async () => {
            const res = await fetch('https://newsapi.org/v2/everything?q=photography&apiKey=f81a3c84084b433990da0c70d0a85861')
            const json = await res.json();
            console.log(json.articles)
            setNewsData(json.articles)
        }
        GetRequest()
    }, [])
    if (newsdata)
        return (
            <>
                <Navbar />
                <div className='flex w-full items-center justify-center'>
                    <div className='flex flex-wrap justify-between w-[80%]'>
                        {newsdata.map((i) => {
                            return (
                                <div className='border-2 border-black mt-5 flex flex-col justify-content items-center text-center p-10 w-[30em]'>
                                    <a className='' href={i.url} target="_blank">
                                        <p className='my-3 text-2xl font-semibold' >{i.title}</p>
                                        <p className='my-3 text-lg' >{i.content}</p>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
}
