import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Timetable from '../Timetable/Timetable';
import News from '../News/News';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Duty from '../Duty/Duty';
import Documents from '../Documents/Documents';
import SearchPage from '../SearchPage/SearchPage';


const Homepage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        
        <>
          
        
        <div className='w-full h-full bg-image' >
            <Header />
            <div className='w-full h-90vh  flex justify-center '>
                <div className='w-11/12 h-full flex items-center '>
                    <div className='w-full h-auto min-h-72 flex flex-col items-center justify-between'>
                        <h3 className='text-white text-7xl font-medium homepage-text'>Шклівський ЗЗСО І-ІІІ ступенів </h3>
                        <p className='text-yellow-400 text-7xl font-medium homepage-text-p'>ім. Мар'яна Корчака</p>
                        <Link to='/news'>
                            <button className='animation w-64 h-16 text-xl font-medium  bg-button rounded-full'>Дізнатися більше</button>
                        </Link>
                    </div>


                </div>
            </div>
       
   
        
            <News />
        
            <Contacts />
            <Timetable />
            {/* <Duty/> */}
            <Documents/>
            <Footer />

        </div >
        
        </>
    )
}

export default Homepage