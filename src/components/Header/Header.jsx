import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
import instagram from '../Images/insta.png';
import facebook from '../Images/facebook.png';
import youtube from '../Images/youtube.png';



const Header = () => {
    return (
        <div className='w-full h-10vh flex items-center justify-center '>


            <div className='w-10/12 h-14 bg-white shadow-header flex items-center justify-between rounded-lg pl-2 header p-3'>
                <Logo />
                <div className='min  h-full flex items-center '>

                    <div className='w-auto  min-w-links h-11 rounded-3xl flex  items-center justify-between  a-header '>
                        {/* <Link>
                            <p className='text-xl text-black font-mono a-link'>Новини</p>
                        </Link> */}
                          <a href='#news'>
                            <p className='text-xl text-black font-mono a-link'>Новини</p>
                        </a>
                        <a href="#contacts" >
                            <p className='text-xl text-black font-mono a-link'>Контакти</p>
                        </a>
                      
                       
                        <a href='#timetable'>
                            <p className='text-xl text-black font-mono a-link'>Графік/Розклад</p>
                        </a>

                        <a href='#documents'>
                            <p className='text-xl text-black font-mono a-link'>Документи</p>
                        </a>
                        <a className='w-20'>
                            <Link to='/navigation'>
                                <p className='text-xl text-button font-mono a-link '>Більше</p>
                            </Link>
                            <div className='w-16 h-line bg-black rounded-lg'></div>
                        </a>

                    </div>

                </div>
                <Link to="/search">


                <input type="text" placeholder='Пошук...' className='w-auto h-10 bg-white border-2  border-gray-200 rounded-md outline-none pl-2 header-input' />
                </Link>
                {/* <div className='w-1/5 h-11 flex items-center justify-end pr-10 icons  '>
                    <div className='w-10 h-10 flex items-center justify-center '>
                        <img className='w-6 h-6' src={instagram} alt="" />
                    </div>
                    <div className='w-10 h-10  flex items-center justify-center'>
                        <img className='w-6 h-6' src={facebook} alt="" />
                    </div>
                    <div className='w-10 h-10  flex items-center justify-center'>
                        <img className='w-7 h-7' src={youtube} alt="" />
                    </div>

                </div> */}
                <Link to='/enroll-child-in-1-grade'>
                    <button className='w-28 h-10 bg-black rounded-md flex  items-center justify-center enroll-button ml-1'>
                        <p className='text-lg text-white font-mono'>Записати</p>

                    </button>
                </Link>
                <Link to='/navigation'>
                    <button className='w-10 h-10 bg-black rounded-md flex  items-center justify-center menu-btn'>
                        <div className='w-8 h-7 flex flex-col items-center justify-around'>
                            <div className='w-9/12 h-1px bg-white rounded-xl'></div>
                            <div className='w-9/12 h-1px bg-white rounded-xl'></div>
                            <div className='w-9/12 h-1px bg-white rounded-xl'></div>
                        </div>

                    </button>
                </Link>

            </div >
        </div>
    )
}

export default Header