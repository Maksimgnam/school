import React from 'react';
import { Link } from 'react-router-dom';

const FailPopup = () => {
    return (
        <div className='w-full h-full  bg-popup flex items-center justify-center absolute top-0'>
            <div className='w-congrats-popup h-64 bg-white rounded-md flex flex-col items-center justify-around'>
                <p className='text-lg font-mono'>На жаль, Запис не успішний</p>
                <img className='w-32 h-32' src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sad_Emoji_grande.png?v=1571606093" alt="" />
                <Link to='/enroll-child-in-1-grade'>
                    <button className='w-72 h-12 bg-black rounded-md'>
                        <p className='text-xl text-white font-mono'>Попробуйте ще раз</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FailPopup