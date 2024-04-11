import React from 'react'

const ClubsTable = () => {
    const clubsTable = [
        {
            "№ п/п": 1,
            "name": "Вокальний",
            "days": ["вівторок ,", "середа ,", "п’ятниця"],
            "hours": ["15:20 - 16:05, ", "16:15 - 17:00"],
            "leader": "Іваха О.М."
        },
        {
            "№ п/п": 2,
            "name": "Рукоділля",
            "days": ["вівторок, ", "п’ятниця"],
            "hours": ["16:15 - 17:00,  ", "17:10 - 17:55"],
            "leader": "Лозинська Н.С."
        },
        {
            "№ п/п": 3,
            "name": "Історичне краєзнавство",
            "days": ["вівторок, ", "п’ятниця"],
            "hours": ["16:15 - 17:00,  ", "17:10 - 17:55"],
            "leader": "Глова М.М."
        },
        {
            "№ п/п": 4,
            "name": "Джура",
            "days": ["понеділок, ", "четвер", "п’ятниця"],
            "hours": ["16:15 - 17:00,  ", "17:10 - 17:55"],
            "leader": "Лещик В.Р."
        },
        {
            "№ п/п": 5,
            "name": "Радіотеатр",
            "days": ["четвер"],
            "hours": ["15:20 – 16:05, ", "17:10 - 17:55"],
            "leader": "Нижанківська М.Р."
        },
        {
            "№ п/п": 6,
            "name": "Початкове технічне моделювання",
            "days": ["середа"],
            "hours": ["16:15 - 17:00"],
            "leader": "Никиль У.Є."
        },
        {
            "№ п/п": 7,
            "name": "Основи комп’ютерних технологій",
            "days": ["вівторок, ", "п’ятниця"],
            "hours": ["16:15 - 17:00"],
            "leader": "Хомечко М.П."
        },
        {
            "№ п/п": 8,
            "name": "Юні знавці Біблії",
            "days": ["понеділок, ", "четвер"],
            "hours": ["15:20 - 16:05, ", "16:15 - 17:00, ", "14:25 - 15:10"],
            "leader": "Никиль Б.М."
        },
        {
            "№ п/п": 9,
            "name": "Екологічне краєзнавство",
            "days": ["понеділок, ", "четвер"],
            "hours": ["15:20 - 16:05, ", "16:15 - 17:00"],
            "leader": "Шавал Н.Д"
        }
    ];

    return (
        <div className='w-full h-auto min-h-120vh  flex flex-col items-center '>
            <div className='w-full h-14 flex justify-center '>
                <p className='text-xl font-mono table-text'>Графік роботи гуртків на І семестр 2023-2024 н.р.</p>
            </div>
            <table className='w-4/6  '>

                <thead className='h-20'>
                    <tr >
                        <th className='h-10 border-2 border-bg-gray-200'>№ п/п</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Назва гуртка</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Дні занять</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Години</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Керівник гуртка</th>
                    </tr>
                </thead>

                <tbody >
                    {clubsTable.map((club, index) => (
                        <tr className='w-3/6 h-24 border-2 border-bg-gray-200 ' key={index}>
                            <td className=' border-2 border-bg-gray-200 ' >{club["№ п/п"]}</td>
                            <td className='border-2 border-bg-gray-200'>{club.name}</td>
                            <td className='h-24 border-2 border-bg-gray-200 p-2'>{club.days}</td>
                            <td className='h-24 border-bg-gray-200 flex items-center justify-center'>{club.hours}</td>
                            <td className='border-2 '>{club.leader}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='w-full h-20 flex justify-center items-center'>
                <a className='text-xl font-mono pt-2'>Графік роботи гуртків на ІI семестр 2023-2024 н.р.</a>
            </div>
            <table className='w-4/6  '>
                <thead className='h-20'>
                    <tr >
                        <th className='h-10 border-2 border-bg-gray-200'>№ п/п</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Назва гуртка</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Дні занять</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Години</th>
                        <th className='h-10 border-2 border-bg-gray-200'>Керівник гуртка</th>
                    </tr>
                </thead>
                <tbody >
                    {clubsTable.map((club, index) => (
                        <tr className='w-3/6 h-24 border-2 border-bg-gray-200 ' key={index}>
                            <td className=' border-2 border-bg-gray-200 ' >{club["№ п/п"]}</td>
                            <td className='border-2 border-bg-gray-200'>{club.name}</td>
                            <td className='h-24 border-2 border-bg-gray-200 p-2'>{club.days}</td>
                            <td className='h-24 border-bg-gray-200 flex items-center justify-center'>{club.hours}</td>
                            <td className='border-2 '>{club.leader}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClubsTable