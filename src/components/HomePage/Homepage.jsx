import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from '../Header/Header';
import Timetable from '../Timetable/Timetable';


const Homepage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='w-full h-full bg-image' >
            <Header />
            <div className='w-full h-90vh  flex justify-center '>
                <div className='w-11/12 h-full flex items-center '>
                    <div className='w-full h-auto min-h-72 flex flex-col items-center justify-between'>
                        <h3 className='text-white text-7xl font-medium homepage-text'>Шклівський ЗЗСО І-ІІІ ступенів </h3>
                        <p className='text-yellow-400 text-7xl font-medium homepage-text-p'>ім. Мар'яна Корчака</p>
                        <a href="#timetable">
                            <button className='animation w-64 h-16 text-xl font-medium  bg-button rounded-full'>Дізнатися більше</button>
                        </a>
                    </div>


                </div>
            </div>
            <Timetable />

        </div >
    )
}

export default Homepage