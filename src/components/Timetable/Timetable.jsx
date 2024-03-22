import React from 'react';
import psyco from '../Images/psyco.png';
import lesson from '../Images/lessons.png';
import electives from '../Images/electives.png';
import bell from '../Images/bell.png';
import book from '../Images/book.png';
import PsycoTable from './PsycoTable/PsycoTable';
import { useState } from 'react';

import LessonsTimeTable from './LessonsTimeTable/LessonsTimeTable';
import ClubsTable from './ClubsTable/ClubsTable'
import ElectivesTable from './ElectivesTable/ElectivesTable';
import GradesTable from './GradesTable/GradesTable';




const Timetable = () => {
    const [selectedTable, setSelectedTable] = useState('lessonsTime');
    const renderTable = () => {
        switch (selectedTable) {
            case 'psyco':
                return <PsycoTable />;
            case 'lessonsTime':
                return <LessonsTimeTable />;
            case 'grades':
                return <GradesTable />
            case 'electives':
                return <ElectivesTable />;
            case 'courses':
                return <ClubsTable />






            default:
                return <PsycoTable />;
        }
    }


    return (




        <div id='#timetable' className='w-full h-auto flex  flex-col items-center pt-2  ' >
            <h3 className='text-2xl  font-mono'>ГРАФІК/РОЗКЛАД</h3>
            <div className='w-6/12 h-20  flex items-center justify-around'>
                <button onClick={() => setSelectedTable('lessonsTime')} className='w-28 h-11   rounded-md flex items-center justify-around '>
                    <img className='w-6 h-6' src={bell} alt="" />
                    <p className='text-lg font-mono  time-text'>Дзвінки</p>
                </button>
                <button onClick={() => setSelectedTable('grades')} className='w-24 h-11   rounded-md flex items-center justify-around '>
                    <img className='w-7 h-7' src={lesson} alt="" />
                    <p className='text-lg font-mono  time-text'>Розклад</p>
                </button>
                <button onClick={() => setSelectedTable('electives')} className='w-44 h-11   rounded-md flex items-center justify-center'>
                    <img className='w-6 h-6' src={electives} alt="" />
                    <p className='text-lg font-mono pl-2 time-text'>Факультативи</p>
                </button>
                <button onClick={() => setSelectedTable('courses')} className='w-32 h-11  rounded-md flex items-center pl-2'>
                    <img className='w-7 h-7' src={book} alt="" />
                    <p className='text-lg font-mono pl-2 time-text'>Гуртки</p>
                </button>
                <button onClick={() => setSelectedTable('psyco')} className='w-32 h-11   rounded-md flex items-center justify-around '>
                    <img className='w-6 h-6' src={psyco} alt="" />
                    <p className='text-lg font-mono pr-1 time-text'>Психолог</p>
                </button>
            </div>
            <div className='w-full h-auto  flex items-center justify-center  '>
                {renderTable()}
            </div>
        </div >

    )
}

export default Timetable