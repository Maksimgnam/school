import React from 'react';
import phone from '../Images/call.png';
import email from '../Images/email.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/insta.png'

const Contacts = () => {
    return (
        <div className='w-full h-auto min-h-contacts flex flex-col  items-center '>
            <h2 className='text-2xl font-mono'>КОНТАКТИ</h2>
            <div className='w-auto h-auto  min-h-contacts  flex flex-wrap justify-center   m-2 p-4'>
                <div className='w-auto h-auto   flex flex-col    m-7 mt-0'>
                    <h2 className='text-2xl font-medium'>
                        Шклівський ЗЗСО І-ІІІ ступенів ім. Мар'яна Корчака
                    </h2>
                    <div className='w-full h-auto min-h-52 flex flex-col justify-around'>

                        <p className='text-xl font-mono'>81050 смт. Шкло вулиця Т.Шеченка 1
                            <br />
                            Яворіського району Львівської області</p>
                        <div className='w-auto h-auto flex flex-wrap'>
                            <div className='flex items-center'>
                                <div className='w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center contact-image-block'>
                                    <img className="w-5 h-5" src={phone} alt="" />
                                </div>
                                <p className='text-xl font-mono relative left-1'>032-595-0548</p>
                            </div>
                            <a href="https://www.instagram.com/school_shklo">
                                <div className='flex items-center relative left-5 '>
                                    <div className='w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center contact-image-block'>
                                        <img className="w-5 h-5" src={instagram} alt="" />
                                    </div>
                                    <p className='text-xl font-mono relative left-1'>Instagram</p>
                                </div>
                            </a>



                        </div>
                        <div className='w-auto h-auto flex flex-wrap'>
                            <div className='flex items-center '>
                                <div className='w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center contact-image-block'>
                                    <img className="w-5 h-5" src={email} alt="" />
                                </div>
                                <p className='text-xl font-mono relative left-1'>   shkolashklo@gmail.com</p>
                            </div>
                            <a href="https://www.facebook.com/ShkolaShklo">
                                <div className='flex items-center relative left-5 facebook-link'>
                                    <div className='w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center contact-image-block'>
                                        <img className="w-5 h-5" src={facebook} alt="" />
                                    </div>
                                    <p className='text-xl font-mono relative left-1'>facebook</p>
                                </div>
                            </a>


                        </div>

                    </div>
                    <a href="https://www.google.com/maps/dir/49.9613696,23.5470848/%D1%88%D0%BA%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D1%88%D0%BA%D0%BE%D0%BB%D0%B0/@49.9588536,23.5429642,16.7z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x473b3dbb45fa7973:0xe4ca5c0e575e91b7!2m2!1d23.5453349!2d49.9569949?entry=ttu">
                        <button className='w-52 h-14 bg-black   rounded-md outline-none  relative top-2'>
                            <p className='text-lg text-white font-medium'> Маршут до школи</p>

                        </button>
                    </a>




                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.8968018276873!2d23.5427556758687!3d49.95703832276865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b3dbb45fa7973%3A0xe4ca5c0e575e91b7!2z0KHQl9Ce0Kgg0YHQvNGCLtCo0LrQu9C-!5e0!3m2!1suk!2sua!4v1712165119547!5m2!1suk!2sua" width="370" height="340"></iframe>
            </div>

        </div >
    )
}

export default Contacts