import React from 'react'

const NavigationPage = () => {
    return (
        <div className='w-full h-full bg-black'>
            <div className='w-full h-16 flex items-center justify-center '>
                <input placeholder='Пошук...' type="text" className='w-64 h-11 placeholder:text-white placeholder:font-mono placeholder:text-lg rounded-md bg-zinc-900 outline-none  pl-2 ' />

            </div>
            <div className='w-full h-90vh flex items-center justify-center'>
                <p className='text-3xl text-white font-mono '>Функція ше в розробці 😎😎 </p>


            </div>
        </div>
    )
}

export default NavigationPage