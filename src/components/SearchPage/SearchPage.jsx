import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import news from '../../../newsData/newsData.json';
import documents from '../../../documentsData/documentsData.json';

const SearchPage = () => {

    const [searchTitle, setSearchTitle] = useState('');

    const filteredNews = news.filter(item=>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
    const filteredDocuments = documents.filter(item=>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
    


  return (
    <div className="w-full h-full  bg-dark flex flex-col  items-center overflow-y-hidden absolute top-0 p-3" >
        <div className='w-full h-12 flex items-center justify-end sm:pr-10 pr-3 pb-5 '>
            <Link to={`/home`}>
            <p className='text-4xl text-white font-mono'>x</p>
            </Link>
        </div>
        <div className=' w-full sm:w-8/12 lg:w-8/12  h-5/6 bg-white rounded-2xl   '>
            <div className='w-full h-16  flex items-center justify-between p-5 '>
                <input type="text" value={searchTitle} onChange={(e)=> setSearchTitle(e.target.value)} className='w-8/12 h-11 bg-white text-lg  rounded-md border-2 outline-none pl-3' placeholder='Пошук...' />
                <div className='flex items-center'>


                <div className='w-16 h-7 rounded flex items-center justify-center  bg-sky-200 m-2 mt-0 mb-0'>
                    <p className='text-sm font-medium'>Новини</p>
                </div>
                <div className='w-24 h-7 rounded flex items-center justify-center  bg-green-200'>
                    <p className='text-sm font-medium'>Документи</p>
                </div>
                </div>
            </div>
            {
                filteredDocuments && filteredNews.length >  0 ? (   
            <div className='w-full h-search-list p-5 pt-3 overflow-y-scroll'>
                {
                    filteredNews.map((item)=>(
                        <Link key={item.id} to={`/news/${item.id}`}>
                        <div key={item.id} className='w-full h-14 bg-sky-100 rounded-lg   flex items-center m-5 mt-0 ml-0 pl-3'>
                            <div className='w-9 h-9 bg-sky-200 rounded flex items-center justify-center'>
                                <img className='w-5 h-5' src="/Images/news.png" alt="" />
                            </div>
                            <p className='text-sm sm:text-lg lg:text-md font-medium pl-2'>  {item.title}</p>
                          
                        </div>
                        </Link>
                    ))
                }

             
                {
                        filteredDocuments.map((item)=>(
                            <Link key={item.id} to={`/documents/${item.id}`}>
                            <div key={item.id} className='w-full h-14 bg-green-100 rounded-lg  flex items-center m-5 mt-0 ml-0 pl-3'>
                                <div className='w-9 h-9 bg-green-200 rounded flex items-center justify-center'>
                                    <img className='w-5 h-5' src="/Images/doc.png" alt="" />
                                </div>
                                <p className='text-sm sm:text-lg lg:text-md font-medium pl-2'>  {item.title}</p>
                              
                            </div>
                            </Link>
                        ))

                }
         
         
            </div>):(<div className='w-full h-search-list'>Не знайдено</div>)
            }
         
            

        </div>
    </div>
  )
}

export default SearchPage