import React from 'react';
import firstFifth from '../../PDFs/Rozklad-navchalnyh-zanyat-dlya-1-4-klasiv-na-II-semestr-2023-2024-n.pdf'
import fiveEleventh from '../../PDFs/Rozklad-urokiv-dlya-5-11-klasiv-na-II-semestr-2023-2024-n.pdf';


const GradesTable = () => {

    return (
        <div className='w-full h-auto min-h-292vh flex flex-col items-center justify-around'>
            <p className='text-lg font-mono'>Розклад уроків для 1-4 класів на IІ семестр 2023-2024 н.р</p>
            <iframe src={firstFifth} width={700} height={1000} className='pdf' ></iframe>
            <p className='text-lg font-mono'>Розклад уроків для 5-11 класів на IІ семестр 2023-2024 н.р</p>
            <iframe src={fiveEleventh} width={700} height={1000} className='pdf' ></iframe>

        </div>
    )
}

export default GradesTable