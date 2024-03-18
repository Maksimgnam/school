import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from '../Header/Header';
import ImagePage from '../ImagePage/ImagePage';
const Homepage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='w-full h-full bg-white'>
            <Header />
            <ImagePage />
        </div>
    )
}

export default Homepage