import React from 'react'
import { Link, useParams } from 'react-router-dom'
import newsData from '../../../newsData/newsData.json'
const NewsId = () => {
    const { id } = useParams();
    const news = newsData.find((item) => item.id === parseInt(id))
    return (
        <div className='w-full h-full  flex flex-col   items-center'>
            <div className='w-full h-12 p-2'>
                <Link to='/home'>
                    <button className='w-9 h-9 bg-black rounded-lg'>
                        <p className='text-lg text-white font-mono '>     {`<`}</p>
                    </button>
                </Link>
            </div>
            <div className='w-auto h-auto min-w-news-card max-w-news-card flex flex-col items-center p-3'>

                <img className='w-11/12 h-96 rounded-xl' src={news.image} alt="" />
                <div className='w-11/12 h-auto pt-4'>


                    <p className='text-black'>{news.catagory}</p>
                    <h2 className='text-3xl text-black'>{news.title}</h2>
                    <p className='text-lg pt-2 text-black'>{news.allDescription}</p>
                </div>
            </div>

        </div>
    )
}

export default NewsId