import React from 'react';
import attention from '../../Images/attention.jpg';
const EmptyPopup = ({ closeEmpty }) => {
    return (
        <div className='w-full h-full  bg-popup flex items-center justify-center absolute top-0'>
            <div className=' flex flex-col items-center' >
                <div className='w-80 h-10  flex justify-end relative bottom-5'>

                    <button onClick={closeEmpty} className='w-11 h-11  hover:bg-stone-700 rounded-full flex items-center justify-center relative left-3'>
                        <p className='text-xl text-white font-medium'>X</p>
                    </button>

                </div>


                <div className='w-congrats-popup h-20 bg-white rounded-md flex   items-center  justify-center'>

                    <p className='text-2xl font-mono  relative top-1'>      Заповніть  дані</p>
                    <img className='w-20 h-14' src={attention} alt="" />
                </div>
            </div>
        </div>
    )
}

export default EmptyPopup