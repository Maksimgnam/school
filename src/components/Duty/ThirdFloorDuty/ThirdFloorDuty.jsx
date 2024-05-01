import React from 'react'

const ThirdFloorDuty = () => {

    const dutyThirdFloorTeachers = [
        { id: 0, name: "Сергій Вікторович Іванов", email: "John@gmail.com", dateToDuty: "2024-04-23" },
        { id: 1, name: "Катерина Василівна Петрова", email: "Evan@gmail.com", dateToDuty: "2024-04-25" },
        { id: 2, name: "Дмитро Олегович Ковалев", email: "Jaret@gmail.com", dateToDuty: "2024-04-27" },
        { id: 3, name: "Юлія Миколаївна Павленко", email: "Lous@gmail.com", dateToDuty: "2024-04-28" },
    ]
    return  dutyThirdFloorTeachers.map((item)=>{

        const today = new Date();
        const isDutyToday =
          today.getDate() === new Date(item.dateToDuty).getDate() &&
          today.getMonth() === new Date(item.dateToDuty).getMonth() &&
          today.getFullYear() === new Date(item.dateToDuty).getFullYear();


          return(
            <div key={item.id} className='w-full sm:w-11/12 h-auto min-h-14 bg-slate-100 rounded flex items-center justify-around m-3 ml-0 mr-0 p-2'>
            <h2 className='text-lg font-medium'>{item.name}</h2>
            <p className='text-lg font-medium'>{item.email}</p>
            <div className='flex items-center'>
            <p className='text-lg font-medium'>{item.dateToDuty}</p>
          {
            isDutyToday ? (
                <div className='w-6 h-6 bg-red-400 rounded-full flex items-center justify-center ml-3'>
                    
                    <p className='text-sm text-white font-medium'></p>
                </div>
            ): null
          }
            </div>

          

            

         </div>
          )
     
})
}

export default ThirdFloorDuty