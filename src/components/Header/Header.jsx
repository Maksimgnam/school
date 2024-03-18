import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
import instagram from '../Images/insta.png';
import facebook from '../Images/facebook.png';
import youtube from '../Images/youtube.png';


const Header = () => {
    return (
        <div className='h-8vh w-full shadow-header flex items-center justify-between '>
            <div className='w-3/6  h-full flex items-center justify-around'>
                <Logo />
                <div className='w-5/6 h-11 rounded-3xl flex  items-center justify-between '>
                    <Link>
                        <p className='text-xl font-mono'>Про нас</p>
                    </Link>
                    <Link>
                        <p className='text-xl font-mono'>Документи</p>
                    </Link>
                    <Link>
                        <p className='text-xl font-mono'>Інформація</p>
                    </Link>
                    <Link>
                        <p className='text-xl font-mono'>Навч-вих роботи</p>
                    </Link>
                    <div className='w-20  '>
                        <Link>
                            <p className='text-xl text-button font-mono '>Більше</p>
                        </Link>
                        <div className='w-16 h-line bg-black rounded-lg'></div>
                    </div>

                </div>

            </div>

            <input type="text" placeholder='Пошук...' className='w-1/5 h-11 bg-white border-2  border-gray-200 rounded-xl outline-none pl-2' />
            <div className='w-1/5 h-11 flex items-center justify-end pr-10 '>
                <div className='w-10 h-10 flex items-center justify-center '>
                    <img className='w-6 h-6' src={instagram} alt="" />
                </div>
                <div className='w-10 h-10  flex items-center justify-center'>
                    <img className='w-6 h-6' src={facebook} alt="" />
                </div>
                <div className='w-10 h-10  flex items-center justify-center'>
                    <img className='w-7 h-7' src={youtube} alt="" />
                </div>

            </div>
        </div >
    )
}

export default Header