import React from 'react'

const PsycoTable = () => {
    const psycoTable = [

        {
            "day": "Понеділок",
            "work_schedule": "Методичний день"
        },
        {
            "day": "Вівторок",
            "work_schedule": "з 8.30 год. по 16.30 год."
        },
        {
            "day": "Середа",
            "work_schedule": "з 8.30 год. по 16.30 год."
        },
        {
            "day": "Четвер",
            "work_schedule": "з 8.30 год. по 16.30 год."
        },
        {
            "day": "П’ятниця",
            "work_schedule": "з 8.30 год. по 16.30 год."
        }




    ]
    const psycoTable2 = [

        {
            "day": "Понеділок",
            "work_schedule": "Методичний день"
        },
        {
            "day": "Вівторок",
            "work_schedule": "з 8.30 год. по 12.30 год."
        },
        {
            "day": "Середа",
            "work_schedule": "Методичний день."
        },
        {
            "day": "Четвер",
            "work_schedule": "з 8.30 год. по 16.30 год."
        },
        {
            "day": "П’ятниця",
            "work_schedule": "з 8.30 год. по 12.30 год."
        }




    ]
    return (
        <div className='w-full h-auto min-h-87vh  flex items-center justify-center '>
            <div className='w-9/12  h-auto min-h-87vh flex  flex-col items-center justify-around '>
                <h3 className='text-lg font-mono table-text text-black'>Графік роботи практичного психолога Сенюти Мирослави Миколаївни</h3>
                <table className='w-3/5 h-44 table-width'>
                    <thead>
                        <tr className='h-10 w-full'>
                            <th className='h-10 border-2 border-bg-gray-200 text-black'>Дні тижня</th>
                            <th className='h-10 border-2 border-bg-gray-200 text-black'>Інтервали робочого часу</th>
                        </tr>
                    </thead>
                    <tbody className='w-full h-10  text-center '>
                        {psycoTable.map(schedule => (
                            <tr key={schedule.day}>
                                <td className='h-10 border-2 border-bg-gray-200 text-black'>{schedule.day}</td>
                                <td className='h-10 border-2 border-bg-gray-200 text-black'>{schedule.work_schedule}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3 className='text-lg font-mono table-text text-black'>Графік роботи соціального педагога Курчик Іванни Василівни</h3>
                <table className='w-3/5 h-44  table-width text-black'>

                    <thead >
                        <tr className='h-10 w-full'>
                            <th className='h-10 border-2 border-bg-gray-200'>Дні тижня</th>
                            <th className='h-10 border-2 border-bg-gray-200'>Інтервали робочого часу</th>
                        </tr>
                    </thead>
                    <tbody className='w-full h-10  text-center '>
                        {psycoTable2.map(schedule => (
                            <tr key={schedule.day}>
                                <td className='h-10 border-2 border-bg-gray-200'>{schedule.day}</td>
                                <td className='h-10 border-2 border-bg-gray-200'>{schedule.work_schedule}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PsycoTable