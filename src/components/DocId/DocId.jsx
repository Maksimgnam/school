import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import documents from '../../../documentsData/documentsData.json'

const DocId = () => {
    const {id}= useParams();
       const docs = documents.find((item) => item.id === parseInt(id))
    
  return (
    <div className='w-full h-full  flex  flex-col justify-center items-center '>
         <div className='w-full h-10 p-2 pl-4'>
                <Link to='/home'>
                    <button className='w-9 h-9 bg-black rounded-lg m-2 ml-0'>
                        <p className='text-lg text-white font-mono'>{`<`}</p>
                    </button>
                </Link>
            </div>
            <div className='w-full sm:w-8/12  h-auto  flex justify-center items-center p-4'>
             
                <iframe className='w-full' src={docs.pdf} frameborder="0" fill  height={670}></iframe>
             
            </div>
          
    </div>
  )
}

export default DocId;