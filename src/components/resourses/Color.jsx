import React, { useEffect, useState } from 'react'

const Color = () => {
    const [data, setdata] = useState([]);


     useEffect(() => {
          fetch("/resoursesData.json")
            .then(res => res.json())
            .then(data => setdata(data.Color));
        }, []);
  return (

<div className="tapdata grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4  items-center gap-10 pt-20 px-5">
      {data.map(item => (
        <div className='flex flex-col justify-center items-center rounded-3xl shadow-xl pt-10 hover:bg-blue-100'>

        <img src={item.img} alt={item.title} className='w-1/2' />
        <div className='bg-[#C1D6F8] w-full text-center mt-10 rounded-br-2xl rounded-bl-2xl py-3 '>{item.title}</div>
    </div>
      ))}

    </div>

  
  )
}

export default Color