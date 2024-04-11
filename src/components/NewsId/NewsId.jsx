// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import newsData from '../../../newsData/newsData.json'
// const NewsId = () => {
//     const { id } = useParams();
//     const news = newsData.find((item) => item.id === parseInt(id))
//     return (
//         <div className='w-full h-full bg-white  flex flex-col   items-center'>
//             <div className='w-full h-12 p-2'>
//                 <Link to='/home'>
//                     <button className='w-9 h-9 bg-black rounded-lg'>
//                         <p className='text-lg text-white font-mono '>     {`<`}</p>
//                     </button>
//                 </Link>
//             </div>
//             <div className='w-auto h-auto min-w-news-card max-w-news-card  flex flex-col    p-3'>

//                 <div className='w-newsId-image  h-96 rounded bg-cover' style={{ backgroundImage: `url(${news.bigImage})` }} ></div>
//                 <div className='w-full w-newId-text h-auto  flex items-center '>
//                     <div className='w-full h-auto pt-6 n'>




//                         <p >{news.catagory}</p>
//                         <h2 className='text-3xl'>{news.title}</h2>
//                         <p className='text-lg pt-2 '>{news.allDescription}</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default NewsId

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import newsData from '../../../newsData/newsData.json';

const NewsId = () => {
    const { id } = useParams();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const news = newsData.find((item) => item.id === parseInt(id));

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getImageSource = () => {
        if (screenWidth < 900) {
            return news.image;
        } else {
            return news.bigImage;
        }
    };

    return (
        <div className='w-full h-full bg-white flex flex-col items-center'>
            <div className='w-full h-12 p-2'>
                <Link to='/home'>
                    <button className='w-9 h-9 bg-black rounded-lg'>
                        <p className='text-lg text-white font-mono'>{`<`}</p>
                    </button>
                </Link>
            </div>
            <div className='w-auto h-auto min-w-news-card max-w-news-card flex flex-col p-3'>
                <div
                    className='w-newsId-image h-96 rounded bg-cover'
                    style={{ backgroundImage: `url(${getImageSource()})` }}
                ></div>
                <div className='w-full w-newId-text h-auto flex items-center '>
                    <div className='w-full h-auto pt-6'>
                        <p>{news.catagory}</p>
                        <h2 className='text-3xl'>{news.title}</h2>
                        <p className='text-lg pt-2'>{news.allDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsId;
