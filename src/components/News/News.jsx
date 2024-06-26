import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import news from '../../../newsData/newsData.json';
import { Link } from 'react-router-dom';

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 10;
    const sorting = (array) => {
        return array.sort((a, b) => b.totalPrice - a.totalPrice)
    };
    sorting(news);
    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedNews = news.slice(startIndex, endIndex);

    const pageChange = (_event, value) => {
        setCurrentPage(value);
    }


    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div id='news' className='w-full h-auto min-h-news bg-white flex flex-col  items-center p-5'>
            <div className='w-news-header h-12 flex items-center justify-between '>
                <p className='text-3xl font-mono '>НОВИНИ</p>
                <Stack spacing={2} className="w-auto h-9    rounded-md flex items-center justify-center ">
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={pageChange}
                        style={{ backgroundColor: 'none' }}
                    />
                </Stack>
            </div>

            <div className='w-full flex flex-col  items-center '>
                {
                    sortedNews.map((item) => (

                        <Link className='w-full flex   items-center flex-col ' key={item.id} to={`/news/${item.id}`}>



                            <div key={item.id} data-aos="fade-up" className='  min-w-news-card    max-w-news-card h-auto min-h-72   shadow-md rounded-lg flex flex-wrap   items-center m-4 ml-0 mr-0 p-3 '>

                                <div style={{ backgroundImage: `url(${item.image})` }} className='w-80 h-64  news-card-image  bg-cover rounded '></div>
                                <div className='w-auto min-h-64 h-auto max-w-news-card-text  flex flex-col  justify-between '>
                                    <div  className='sm:pl-4 pl-0'>


                                        <p className='text-black'>{item.catagory}</p>
                                        <h2 className='text-3xl text-black '>{item.title}</h2>
                                        <div className='p-10 pl-0 pt-2'>
                                            <p className='text-lg text-black'>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-1 flex items-center justify-end pr-8 pb-5'>
                                        <p className='text-lg text-black font-medium'>{item.date}</p>
                                    </div>
                                </div>


                            </div>

                        </Link>


                    ))
                }

            </div>

        </div>
    )
}

export default News







// {
//     "id": 10,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 11,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 12,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 13,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 14,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 15,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 16,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 17,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 18,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// },
// {
//     "id": 19,
//     "title": "",
//     "description": "",
//     "image": "",
//     "catagory": ""
// }

// {
//     "id": 11,
//     "title": "Засідання команд психолого-педагогічного супроводу дітей з ООП",
//     "description": "21 грудня 2023 року у Шклівському ЗЗСО І-ІІІ ступенів ім. М. Корчака відбулося засідання команд психолого-педагогічного супроводу дітей з особливими освітніми потребами, які навчаються на інклюзії. Було підведено підсумки реалізації …",
//     "image": "../newsDataImage/image8.png",
//     "catagory": "ЗАСІДАННЯ МК/ТВОРЧИХ ГРУП / МЕТОДИЧНА РОБОТА / НОВИНИ / ПСИХОЛОГІЧНА / РОБОТА З БАТЬКАМИ / СЛУЖБИ",
//     "date": "...2023"
// },
// {
//     "id": 12,
//     "title": "Звіт про роботу МК учителів української мови та літератури",
//     "description": "Звіт про роботу МК учителів української мови та літератури у І семестрі. У вересні було проведено перше засідання МК на тему «Від компетентного вчителя до компетентного учня». Учителі – філологи …",
//     "image": "../newsDataImage/image9.png",
//     "catagory": "ЗАСІДАННЯ МК/ТВОРЧИХ ГРУП / МЕТОДИЧНА РОБОТА / НОВИНИ",
//     "date": "...2023"
// },
// {
//     "id": 13,
//     "title": "Пройшов Олімпійський тиждень",
//     "description": "З 18.09 по 22.09.23 р. проходив Олімпійський тиждень. Кожного ранку учні 5-11 класів зі своїми вчителями фізкультури виконували ранкову зарядку. Протягом тижня відбулись різноманітні змагання, а саме: • Веселі старти …",
//     "image": "../newsDataImage/image10.png",
//     "catagory": "ВИХОВНА РОБОТА / МЕТОДИЧНА РОБОТА / НОВИНИ / ПРЕДМЕТНІ ТИЖНІ / СПОРТИВНО-МАСОВА РОБОТА",
//     "date": "...2023"
// },