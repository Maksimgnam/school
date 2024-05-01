import { useState } from 'react';
import React from 'react'
import FirstFloorDuty from './FirstFloorDuty/FirstFloorDuty';
import SecondFloorDuty from './SecondFloorDuty/SecondFloorDuty';
import ThirdFloorDuty from './ThirdFloorDuty/ThirdFloorDuty';

const Duty = () => {
    const [selectedFloor, setSelectedFloor] = useState('1 поверх');
    const renderFloor = () => {
        switch (selectedFloor) {
            case '1 поверх':
                return <FirstFloorDuty/>;
            case '2 поверх':
                    return <SecondFloorDuty/>;
            case '3 поверх':
                    return <ThirdFloorDuty/>;
           





            default:
                return <FirstFloorDuty/>;
        }
    }
 
 
  return (
    <div className='w-full h-full flex flex-col  items-center p-4'>
        <h2   className='text-2xl font-medium'>Розклад чергування</h2>
        <div className='w-full h-12   flex  items-center justify-center m-2 mt-4 '>
            <div className='w-auto h-auto'>
                <button onClick={() => setSelectedFloor('1 поверх')} className='w-28 h-11 bg-black rounded m-2'>
                    <p className='text-white font-medium'>1 поверх</p>
                    </button>
                <button onClick={() => setSelectedFloor('2 поверх')} className='w-28 h-11 bg-black rounded m-2'>
                    <p className='text-white font-medium'>2 поверх</p>
                    </button>
                <button onClick={() => setSelectedFloor('3 поверх')} className='w-28 h-11 bg-black rounded m-2'>
                    <p className='text-white font-medium'>3 поверх</p>
                    </button>
            </div>

        </div>
        <div className='w-full  h-auto flex flex-col justify-center items-center m-2'>
            {/* {
                dutyTeachers.map((item)=>{

                    const today = new Date();
                    const isDutyToday =
                      today.getDate() === new Date(item.dateToDuty).getDate() &&
                      today.getMonth() === new Date(item.dateToDuty).getMonth() &&
                      today.getFullYear() === new Date(item.dateToDuty).getFullYear();


                      return(
                        <div key={item.id} className='w-full sm:w-11/12 h-auto min-h-14 bg-slate-100 rounded flex items-center justify-around m-3 ml-0 mr-0 p-2'>
                        <h2 className='text-lg font-medium'>{item.name}</h2>
                        <p className='text-lg font-medium'>{item.email}</p>
                        <div className='flex items-center'>
                        <p className='text-lg font-medium'>{item.dateToDuty}</p>
                      {
                        isDutyToday ? (
                            <div className='w-6 h-6 bg-red-400 rounded-full flex items-center justify-center ml-3'>
                                
                                <p className='text-sm text-white font-medium'></p>
                            </div>
                        ): null
                      }
                        </div>
           
                      

                        
 
                     </div>
                      )
                 
})
            } */}
            {
                renderFloor()
            }
          
        </div>
    </div>
  )
}

export default Duty