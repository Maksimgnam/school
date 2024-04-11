import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import phone from '../Images/call.png';
import email from '../Images/email.png';
import map from '../Images/map.png';
const PrePage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='w-full h-auto min-h-100vh bg-prepage  flex items-center justify-center prepage  '>
            <div className='w-full h-auto  min-h-100vh flex flex-col  items-center justify-around p-8'>


                <h3 data-aos="fade-up" className='text-4xl text-black font-medium relative left-1 prepage-text'>Шклівський ЗЗСО І-ІІІ ступенів ім. Мар'яна Корчака</h3>



                <p data-aos="fade-up" className='text-3xl text-black  prepage-text-p'> Навчальний заклад з українською мовою навчання, </p>
                <div className='w-full h-auto flex flex-wrap items-center justify-center pl-3 '>
                    <div className='w-auto h-auto flex flex-col items-center justify-between m-4'>
                        <div data-aos="fade-up" className='w-auto'>
                            <p className='text-3xl pb-3  '> Включає три ступені освіти:</p>
                        </div>

                        <div className='w-96 flex m-1 pl-2'>


                            <p data-aos="fade-up" className='text-2xl text-black font-mono prepage-li'>1-4 класи початкова школа</p>

                        </div>
                        <div className='w-96 m-1 pl-2'>
                            <p data-aos="fade-up" className='text-2xl text-black font-mono prepage-li'>5-9 класи основна школа</p>
                        </div>
                        <div className='w-96 m-1 pl-2'>

                            <p data-aos="fade-up" className='text-2xl text-black font-mono prepage-li'>10-11 класи старша школа</p>
                        </div>


                    </div>

                    <div className='w-auto h-auto  flex  flex-col  m-4  prepage-data pl-3 '>
                        <div data-aos="fade-up" className='w-full  flex'>
                            <p className='text-3xl text-black pb-2.5  '>Контактна інформація</p>
                        </div>

                        <div data-aos="fade-up" className='w-auto h-10 flex items-center '>
                            <div className='w-8 h-8 flex items-center justify-center'>
                                <img className='w-6 h-6' src={phone} alt="" />
                            </div>
                            <p className='text-2xl font-mono text-black relative left-1'>0-3259-5-05-48</p>
                        </div>
                        <div data-aos="fade-up" className='w-auto h-10 flex items-center'>
                            <div className='w-8 h-8 flex items-center justify-center'>
                                <img className='w-6 h-6' src={email} alt="" />
                            </div>
                            <p className='text-2xl text-black font-mono relative left-1'>shkolashklo@gmail.com</p>
                        </div>
                        <div data-aos="fade-up" className='w-96 h-10 flex items-center'>
                            <div className='w-8 h-8 flex items-center justify-center'>
                                <img className='w-6 h-6' src={map} alt="" />
                            </div>
                            <p className='text-2xl text-black font-mono relative left-1 adress-text'>смт Шкло. вул Шевченка, 1</p>
                        </div>


                    </div>

                </div>
                <div className='w-auto h-auto flex flex-wrap justify-center  prepage-button-cont '>
                    <Link to='/enroll-child-in-1-grade'>
                        <button data-aos="fade-up" className='w-48 h-14 bg-black rounded m-2 mt-0 prepage-button'>
                            <p className='text-lg text-button font-medium'>Записати у 1 клас</p></button>
                    </Link>

                    <a href="https://www.google.com/maps/dir/49.9613696,23.5470848/%D1%88%D0%BA%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D1%88%D0%BA%D0%BE%D0%BB%D0%B0/@49.9588536,23.5429642,16.7z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x473b3dbb45fa7973:0xe4ca5c0e575e91b7!2m2!1d23.5453349!2d49.9569949?entry=ttu">
                        <button data-aos="fade-up" className='w-48 h-14 bg-black rounded m-2 mt-0 prepage-button'>
                            <p className='text-lg text-button font-medium'> Маршут до школи</p>
                        </button>
                    </a>
                </div>

                <div data-aos="fade-up" className='w-4/6 h-line bg-black rounded-md'></div>
                <div className='w-64 h-16 flex items-center '>
                    <Link to="home">
                        <button className=' animation w-64 h-16 text-2xl text-button  font-mono bg-black rounded-md flex items-center justify-center'>Переглянути</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default PrePage