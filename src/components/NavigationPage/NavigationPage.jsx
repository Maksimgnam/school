import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavigationPage = () => {

    const [searchLink, setSearchLInk] = useState('')

    const navigationLinks = [
        {
            name: 'Про нас',
            links: ["Про нас", "Новини", "Служби", "Адміністрація школи", 'Досягнеення учнів', "Історія школи", "Кадровий склад", "Контакти", "Його ім'я носить наш заклад "]

        },
        {
            name: 'Прозорість та відкритість закладу',
            links: ["вакансії", "Статут ЗО", 'Правила поведінки здобувачів освіти', "Річний звіт про діяльність закладу освіти", "Структура та організація управління закладу освіти", "Рішення ОМС про закріплену територію обслуговування ЗO", "Стратегія розвитку ЗО", "Проєктна потужність (спроможність) та фактична кількість здобувачів освіти", "Ліцензований обсяг здобувачів освіти ", "Штатний розпис", "Наявність вільних місць в кожному класі", "Результати моніторингу якості освіти", "Річний план роботи закладу", "Положення про академічну доброчесність", "Правила прийому до ЗО", "Самооцінювання  ЗО", "Умови доступності закладу для навчання осіб з ООП", "Фінансовий звіт про надходження та використання всіх отриманих коштів", "", ""]

        },



    ]
    const navigationLinks2 = [

        {
            name: 'Нормативні дококументи',
            links: ["Документи закладу", "Накази", 'Освітні навчальні програми', 'Положення']

        },
        {
            name: 'Навч-виховні роботи',
            links: ["Виховна робота", "Дистанційне навчання", 'ЗНО/ДПА/НМТ', 'Методичні роботи', 'НУШ']

        },
        {
            name: 'Публічна інформація',
            links: ['Зробити запис', 'Інформація батькам', 'Благодійний фонд', 'Оголошення', 'Розклад/Графік']

        }





    ]

    // const filterLinks = (linkArray) => {
    //     return linkArray.map(item => ({
    //         ...item,
    //         links: item.link.filter(link => link.toLowerCase().includes(searchLink.toLowerCase()))

    //     })).filter(item => item.links.length > 0)

    // }
    const filterLinks = (linksArray) => {
        return linksArray.map(item => ({
            ...item,
            links: item.links.filter(link => link.toLowerCase().includes(searchLink.toLowerCase()))
        })).filter(item => item.links.length > 0);
    };



    return (
        <div className='w-full h-auto min-h-100vh bg-black flex flex-col items-center  '>
            <div className='w-11/12 h-16 flex items-center justify-between p-2 pt-0 pb-0 navigation-header '>
                <div className='w-11 h-11 bg-zinc-800 rounded-md flex items-center justify-center'>
                    <p className='text-3xl text-white font-mono'>Ш</p>
                </div>
                <input value={searchLink}
                    onChange={(e) => setSearchLInk(e.target.value)} placeholder='Пошук...' type="text" className='w-64 h-11 text-white placeholder:font-mono placeholder:text-lg rounded-md bg-zinc-900 outline-none  pl-2.5 ' />
                <Link to='/home'>
                    <button className='w-10 h-10 bg-zinc-800 hover:bg-zinc-900 rounded-full '>
                        <p className='text-lg text-white font-medium'>X</p>
                    </button>
                </Link>

            </div>
            <div className='w-11/12 h-auto min-h-90vh   flex flex-wrap justify-between  '>




                {/* 
                {
                    navigationLinks.map((item, index) => (
                        <div key={index} className='w-auto h-auto flex  flex-col m-5'>
                            <p className='text-2xl text-white font-mono'>{item.name}</p>
                            <div>
                                {item.links.map((item) => (
                                    <p className='text-md text-white m-1 '>{item}</p>
                                ))}
                            </div>
                        </div>

                    ))
                } */}

                {
                    [...filterLinks(navigationLinks)].map((item, index) => (
                        <div key={index} className='w-auto h-auto flex  flex-col m-5'>
                            <p className='text-2xl text-white font-mono'>{item.name}</p>
                            <div>
                                {item.links.map((item) => (
                                    <p className='text-md text-white m-1 '>{item}</p>
                                ))}
                            </div>
                        </div>

                    ))
                }
                <div className='w-auto h-full flex-wrap '>


                    {[...filterLinks(navigationLinks2)].map((category, index) => (
                        <div key={index} className='w-auto h-auto flex flex-col m-5'>
                            <p className='text-2xl text-white font-mono'>{category.name}</p>
                            <div>
                                {category.links.map((link, i) => (
                                    <p key={i} className='text-md text-white m-1'>{link}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default NavigationPage

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavigationPage = () => {
//     const [searchQuery, setSearchQuery] = useState('');

//     const navigationLinks = [
//         {
//             name: 'Про нас',
//             links: ["Новини", "Служби", "Адміністрація школи", 'Досягнеення учнів', "Історія школи", "Кадровий склад", "Контакти", "Його ім'я носить наш заклад "]
//         },
//         {
//             name: 'Прозорість та відкритість закладу',
//             links: ["вакансії", "Статут ЗО", 'Правила поведінки здобувачів освіти', "Річний звіт про діяльність закладу освіти", "Структура та організація управління закладу освіти", "Рішення ОМС про закріплену територію обслуговування ЗO", "Стратегія розвитку ЗО", "Проєктна потужність (спроможність) та фактична кількість здобувачів освіти", "Ліцензований обсяг здобувачів освіти ", "Штатний розпис", "Наявність вільних місць в кожному класі", "Результати моніторингу якості освіти", "Річний план роботи закладу", "Положення про академічну доброчесність", "Правила прийому до ЗО", "Самооцінювання  ЗО", "Умови доступності закладу для навчання осіб з ООП", "Фінансовий звіт про надходження та використання всіх отриманих коштів", "", ""]
//         }
//     ];

//     const navigationLinks2 = [
//         {
//             name: 'Нормативні документи',
//             links: ["Документи закладу", "Накази", 'Освітні навчальні програми', 'Положення']
//         },
//         {
//             name: 'Навч-виховні роботи',
//             links: ["Виховна робота", "Дистанційне навчання", 'ЗНО/ДПА/НМТ', 'Методичні роботи', 'НУШ']
//         },
//         {
//             name: 'Публічна інформація',
//             links: ['Інформація батькам', 'Благодійний фонд', 'Оголошення', 'Розклад/Графік']
//         }
//     ];

//     const filterLinks = (linksArray) => {
//         return linksArray.map(category => ({
//             ...category,
//             links: category.links.filter(link => link.toLowerCase().includes(searchQuery.toLowerCase()))
//         })).filter(category => category.links.length > 0);
//     };

//     return (
//         <div className='w-full h-auto min-h-100vh bg-black flex flex-col items-center'>
//             <div className='w-11/12 h-16 flex items-center justify-between p-2 pt-0 pb-0'>
//                 <div className='w-11 h-11 bg-zinc-800 rounded-md flex items-center justify-center'>
//                     <p className='text-3xl text-white font-mono'>Ш</p>
//                 </div>
//                 <input
//                     placeholder='Пошук...'
//                     type="text"
//                     className='w-64 h-11 text-white placeholder:font-mono placeholder:text-lg rounded-md bg-zinc-900 outline-none pl-2.5'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Link to='/home'>
//                     <button className='w-10 h-10 bg-zinc-800 hover:bg-zinc-900 rounded-full'>
//                         <p className='text-lg text-white font-medium'>X</p>
//                     </button>
//                 </Link>
//             </div>
//             <div className='w-11/12 h-auto min-h-90vh flex flex-wrap justify-between'>
//                 {...filterLinks(navigationLinks).map((item, index) => (
//                     <div key={index} className='w-auto h-auto flex flex-col m-5'>
//                         <p className='text-2xl text-white font-mono'>{item.name}</p>
//                         <div>
//                             {item.links.map((item, i) => (
//                                 <p key={i} className='text-md text-white m-1'>{item}</p>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default NavigationPage;
