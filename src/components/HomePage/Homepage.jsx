import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from '../Header/Header';


const Homepage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='w-full h-full bg-image' >
            <Header />
            <div className='w-full h-90vh  flex justify-center '>
                <div className='w-11/12 h-full flex items-center '>
                    <div className='w-full h-80 flex flex-col items-center justify-between'>
                        <h3 className='text-white text-7xl font-medium'>Шклівський ЗЗСО І-ІІІ ступенів </h3>
                        <h3 className='text-yellow-400 text-7xl font-medium'>ім. Мар'яна Корчака</h3>
                        <button className='animation w-64 h-16 text-xl font-medium  bg-button rounded-full'>Дізнатися більше</button>
                    </div>


                </div>
            </div>

        </div >
    )
}

export default Homepage