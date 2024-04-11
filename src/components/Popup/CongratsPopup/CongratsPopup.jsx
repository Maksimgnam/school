import React from 'react'
import { Link } from 'react-router-dom'

const CongratsPopup = () => {
    return (
        <div className='w-full h-full  bg-popup flex items-center justify-center absolute top-0'>
            <div className='w-congrats-popup h-64 bg-white rounded-md flex flex-col items-center justify-around'>
                <p className='text-lg text-black font-mono'>Вітаємо, Запис успішний</p>
                <img className='w-32 h-32' src="https://static-00.iconduck.com/assets.00/party-popper-emoji-503x512-0vkq9zgo.png" alt="" />
                <Link to='/home'>
                    <button className='w-72 h-12 bg-black rounded-md'>
                        <p className='text-xl text-white font-mono'>Завершити</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CongratsPopup