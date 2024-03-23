import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const PrePage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='w-full h-auto min-h-100vh bg-prepage  flex items-center justify-center '>
            <div className='w-full h-auto  min-h-100vh flex flex-col  items-center justify-around'>

                <div data-aos="fade-up" className='w-36 h-36 bg-black rounded-lg flex items-center justify-center'>
                    <p className='text-9xl text-white font-mono'>Ш</p>
                </div>
                <h3 data-aos="fade-up" className='text-5xl text-black font-medium prepage-text'>Шклівський ЗЗСО І-ІІІ ступенів ім. Мар'яна Корчака</h3>
                <p data-aos="fade-up" className='text-3xl text-black  prepage-text-p'>– навчальний заклад з українською мовою навчання, який включає три ступені освіти:</p>
                <div className='w-auto h-auto flex flex-col items-center justify-between'>
                    <li data-aos="fade-up" className='text-3xl text-black font-mono prepage-li'>1-4 класи–початкова школа</li>
                    <li data-aos="fade-up" className='text-3xl text-black font-mono prepage-li'>5 – 9 класи –основна школа</li>
                    <li data-aos="fade-up" className='text-3xl text-black font-mono prepage-li'>10-11 класи– старша школа</li>
                </div>
                <div data-aos="fade-up" className='w-4/6 h-line bg-black rounded-md'></div>
                <div className='w-64 h-16 flex items-center '>
                    <Link to="/home">
                        <button className=' animation w-64 h-16 text-2xl text-button  font-mono bg-black rounded-md flex items-center justify-center'>Давай почнемо</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default PrePage