import React from 'react'

const LessonsTimeTable = () => {
    const lessonTable1 = [
        { lesson: "1 урок", startTime: "8.30", endTime: "9.05", duration: "15 хв" },
        { lesson: "2 урок", startTime: "9.20", endTime: "9.55", duration: "20 хв" },
        { lesson: "3 урок", startTime: "10.15", endTime: "10.50", duration: "25 хв" },
        { lesson: "4 урок", startTime: "11.15", endTime: "11.50", duration: "25 хв" },
        { lesson: "5 урок", startTime: "12.15", endTime: "12.50", duration: "" }
    ];
    const lessonTable2 = [
        { lesson: "1 урок", startTime: "8.30", endTime: "9.10", duration: "10 хв" },
        { lesson: "2 урок", startTime: "9.20", endTime: "10.00", duration: "15 хв" },
        { lesson: "3 урок", startTime: "10.15", endTime: "10.55", duration: "20 хв" },
        { lesson: "4 урок", startTime: "11.15", endTime: "11.55", duration: "20 хв" },
        { lesson: "5 урок", startTime: "12.15", endTime: "12.55", duration: "10 хв" },
        { lesson: "6 урок", startTime: "13.05", endTime: "13.45", duration: "" }
    ]
    const lessonTable3 = [
        { lesson: "1 урок", startTime: "8.30", endTime: "9.15", duration: "5 хв" },
        { lesson: "2 урок", startTime: "9.20", endTime: "10.05", duration: "10 хв" },
        { lesson: "3 урок", startTime: "10.15", endTime: "11.00", duration: "15 хв" },
        { lesson: "4 урок", startTime: "11.15", endTime: "12.00", duration: "15 хв" },
        { lesson: "5 урок", startTime: "12.15", endTime: "13.00", duration: "5 хв" },
        { lesson: "6 урок", startTime: "13.05", endTime: "13.50", duration: "5 хв" },
        { lesson: "7 урок", startTime: "13.55", endTime: "14.40", duration: "5 хв" },
        { lesson: "8 урок", startTime: "14.45", endTime: "15.30", duration: "" }
    ]
    return (
        <div className='w-full min-h-62vh  flex flex-col items-center justify-around'>
            <h2 className='text-xl font-medium lessonsTime-text '>Розклад дзвінків Шклівського ЗЗСО І-ІІІ ступенів імені Мар’яна Корчака</h2>
            <div className='w-10/12 h-full flex flex-wrap  justify-center  '>
                <div className='w-96 h-auto m-3 '>
                    <div className='w-full h-10 flex items-center justify-center'>
                        <h3 className='text-xl font-mono'>1 класи</h3>
                    </div>
                    <table className='w-full h-44'>

                        <tbody className='w-full h-10  text-center '>
                            {lessonTable1.map(schedule => (
                                <tr key={schedule.day}>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.lesson}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.startTime}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.endTime}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='w-96 h-auto m-3'>
                    <div className='w-full h-10 flex items-center justify-center'>
                        <h3 className='text-xl font-mono'>     2-4 класи</h3>
                    </div>
                    <table className='w-full h-auto'>

                        <tbody className='w-full h-10  text-center '>
                            {lessonTable2.map(schedule => (
                                <tr key={schedule.day}>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.lesson}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.startTime}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.endTime}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='w-96 h-auto m-3'>
                    <div className='w-full h-10 flex items-center justify-center'>
                        <h3 className='text-xl font-mono'>     5-11 класи</h3>
                    </div>
                    <table className='w-full h-44'>

                        <tbody className='w-full h-10  text-center '>
                            {lessonTable3.map(schedule => (
                                <tr key={schedule.day}>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.lesson}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.startTime}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.endTime}</td>
                                    <td className='h-10 border-2 border-bg-gray-200'>{schedule.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default LessonsTimeTable;