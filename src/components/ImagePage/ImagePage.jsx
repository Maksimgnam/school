import React from 'react';
import shkola from '../Images/shkola.jpg';

const ImagePage = () => {
    return (
        <div className='w-full h-92vh bg-white flex items-center justify-center'>
            <img className=' rounded-xl' src={shkola} alt="" />
        </div>
    )
}

export default ImagePage