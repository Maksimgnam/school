import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import documents from '../../../documentsData/documentsData.json';
import { Link } from 'react-router-dom';

const Documents = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 10;

    const sorting = (array) => {
        return array.sort((a, b) => b.totalPrice - a.totalPrice)
    };
    sorting(documents);

    const totalPages = Math.ceil(documents.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedDocs = documents.slice(startIndex, endIndex);

    const pageChange = (_event, value) => {
        setCurrentPage(value);
    }
  return (
    <div  id='documents'  className='w-full h-auto bg-white flex flex-col items-center p-5 '>
        <div className='w-auto h-auto flex'>
        <h2 className='text-2xl text-black  font-mono'>Документи</h2>
        
        </div>
  
        <div className='w-full h-auto flex flex-wrap justify-center pt-2 '>
    {
        sortedDocs.map((item, index)=>(
        <div key={item.id} data-aos="fade-up" className='w-80 h-auto min-h-60  rounded-md border-2 hover:shadow-lg  flex flex-col items-center justify-between m-3 p-3 pt-3'>
         

         <div  className='w-full h-10 flex justify-between '>
            <div className='w-9 h-9 bg-black  rounded flex items-center justify-center '>
                <p className='text-md text-white font-mono'>#{index +1}</p>
            </div>
          
            <a href={item.pdf} download={item.pdf}>
            <div className='w-9 h-9 bg-black rounded flex items-center justify-center'>
                <img className='w-9 h-6 ' src="/Images/download.png" alt="" />
            </div>
            </a>
         </div>
            <h2 className='text-xl font-medium pb-2'>{item.title}</h2>
           
            <Link key={item.id} to={`/documents/${item.id}`}>
            <button className='w-72 h-14 bg-black rounded'>
                <p className='text-lg text-white font-medium'>Переглянути</p>
            </button> 
            </Link>
           
      
           

        </div>
    ))
    }
     

        </div>
        <div className='w-64 h-12 bg-slate-100 rounded-md flex items-center justify-center mt-2 '>
      
        <Stack spacing={2} className="w-auto h-9    rounded-md flex items-center justify-center ">
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={pageChange}
                        style={{ backgroundColor: 'none' }}
                    />
                </Stack>
        </div>
       
    </div>
  )
}

export default Documents