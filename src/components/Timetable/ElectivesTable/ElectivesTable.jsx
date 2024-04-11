import React from 'react'

const ElectivesTable = () => {

    const electivesTable = [
        {
            teachers: ["Нижанківська", "М.Р.", "Лаба Г.І.", "Шавало Н.Д.", "Глова М.М.", "Никиль Б.М.", "Шот М.М."],
            schedule: {
                "понеділок": "8 урок 8-Б",
                "вівторок": "8 урок 10-Б",
                "середа": ["7 урок 11-А", "8 урок 11-А 10-Б"],
                "четвер": ["7 урок 8-В 7-А", "8 урок 11-А"],
                "п’ятниця": ["7 урок 8-А 7-Б", "8 урок 7-В 11-Б 10-А"]
            }
        }
    ]
    return (
        <div className='w-full h-auto min-h-72vh  flex flex-col items-center'>
            <table className='w-4/5   '>

                <thead className='h-20'>

                    <tr>
                        <th className=' border-2 border-bg-gray-200 text-black '>№</th>
                        <th className=' border-2 border-bg-gray-200 text-black '>Вчитель</th>
                        <th className=' border-2 border-bg-gray-200 text-black '>Понеділок</th>
                        <th className=' border-2 border-bg-gray-200 text-black '>Вівторок</th>
                        <th className=' border-2 border-bg-gray-200 text-black '>Середа</th>
                        <th className=' border-2 border-bg-gray-200 text-black '>Четвер</th>
                        <th className=' border-2 border-bg-gray-200 text-black '>П'ятниця</th>
                    </tr>


                </thead>

                <tbody >




                    {
                        electivesTable[0].teachers.map((teacher, index) => (
                            <tr className='h-24 text-center' key={index}>
                                <td className='border-2 border-bg-gray-200 text-black '>{index + 1}</td>
                                <td className='border-2 border-bg-gray-200 text-black '>{teacher}</td>
                                <td className='border-2 border-bg-gray-200 text-black '>{electivesTable[0].schedule["понеділок"]}</td>
                                <td className='border-2 border-bg-gray-200 text-black '>{electivesTable[0].schedule["вівторок"]}</td>
                                <td className='border-2 border-bg-gray-200 text-black '>{electivesTable[0].schedule["середа"].join(", ")}</td>
                                <td className='border-2 border-bg-gray-200 text-black '>{electivesTable[0].schedule["четвер"].join(", ")}</td>
                                <td className='border-2 border-bg-gray-200 text-black '>{electivesTable[0].schedule["п’ятниця"].join(", ")}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ElectivesTable