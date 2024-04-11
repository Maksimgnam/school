import React, { useState } from 'react'
import hi from '../Images/hand.png';
import ua from '../Images/ua.jpg'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'
import CongratsPopup from './CongratsPopup/CongratsPopup';
import FailPopup from './FailPopup/FailPopup';
import EmptyPopup from './EmptyPopup/EmptyPopup';
const Popup = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [isCongrats, setIsCongrats] = useState(false);
    const [isFail, setIsFail] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);


    const serviceId = 'service_u04wvol';
    const templateId = 'template_cn1byg8';
    const userId = 'XIKKVFGQTwbBsdkZH'
    const Submit = (e) => {
        e.preventDefault();

        if (!name || !phoneNumber || !birthDate) {
            setIsEmpty(true)
            return;
        } else {
            emailjs.send(serviceId, templateId, {
                name,
                phoneNumber,
                birthDate
            }, userId).then((response) => {
                setIsCongrats(true)

            })
                .catch((error) => {
                    console.error('Email sending failed:', error);
                    setIsFail(true)
                });

            setName('');
            setPhoneNumber('');
            setBirthDate('')

        }









    }
    const closeEmpty = () => {
        setIsEmpty(false)
    }
    return (
        <>

            <div className='w-full h-full bg-popup flex flex-col p-2'>
                <div className="w-full h-14 flex items-center justify-end pr-3">
                    <Link to='/home'>
                        <button className='w-11 h-11  hover:bg-stone-700 rounded-full flex items-center justify-center'>
                            <p className='text-2xl text-white font-medium'>X</p>
                        </button>
                    </Link>
                </div>
                <div className='w-full h-full flex justify-center '>
                    <div className='w-popup h-popup bg-white  rounded-md flex flex-col justify-around  p-4'>

                        <div className='w-auto h-10'>
                            <div className=' text-xl text-black font-mono flex'>Добрий день
                                <img className='w-6 h-6 relative left-2' src={hi} alt="" />
                            </div>
                            <h2 className='text-3xl text-black font-medium'>Записати Дитину</h2>
                        </div>
                        <div className='w-full h-3/5 flex flex-col justify-between'>
                            <p className='text-lg text-black font-mono pt-1'>Як вас звати</p>

                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Михайло Федоров' className='w-full h-12 bg-white border border-b-gray-200 text-black placeholder:text-gray-600 placeholder:text-lg placeholder:font-mono rounded-md outline-none m-1 ml-0 pl-2' />
                            <p className='text-lg  text-black font-mono pt-1'>Телефон</p>
                            <div className='w-full h-auto flex '>
                                <div className='w-auto h-12 flex items-center pt-1'>
                                    <img className='w-9 h-9' src={ua} alt="" />
                                    <p className='text-lg text-gray-600 font-mono pl-1'>+380</p>
                                </div>
                                <input type="number" value={phoneNumber} onChange={(e) => {

                                    if (e.target.value.length > 9) {
                                        e.target.value = e.target.value.slice(0, 9);
                                    }
                                    setPhoneNumber(e.target.value);
                                }} placeholder="(99) 999-99-99" className='w-4/6 bg-white h-12 text-lg text-gray-600 font-mono  placeholder:text-gray-600 placeholder:text-lg placeholder:font-mono rounded-md outline-none pl-1 pt-1' min="9" />
                            </div>
                            <p className='text-lg text-black font-mono pt-1'>Дата народження дитини</p>
                            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className='w-full h-12  bg-white text-black border border-b-gray-200 placeholder:text-gray-600 placeholder:text-lg placeholder:font-mono rounded-md outline-none pl-2' />
                        </div>

                        <button onClick={Submit} className='w-full h-14 bg-black rounded-md'>
                            <p className='text-lg text-white font-medium'>Записати</p>
                        </button>


                    </div>
                </div>
            </div>
            {
                isCongrats && (
                    <CongratsPopup />
                )
            }
            {
                isFail && (
                    <FailPopup />
                )
            }
            {
                isEmpty && (
                    <EmptyPopup closeEmpty={closeEmpty} />
                )
            }


        </>

    )
}

export default Popup