import React, { useEffect, useState } from 'react'



const tapsData=[
    {
        id:1,
        value:"all",

    },
      {
        id:1,
        value:"Beginner",

    },
      {
        id:1,
        value:"Intermediate",

    },
      {
        id:1,
        value:"Advanced",

    },
     
]

const Read = () => {

    const [tapvalue,settapvalue]=useState("all")

    const[data,setdata]=useState([])

    useEffect(() => {
      fetch("Resourses/resoursesData.json")
        .then(res => res.json())
        .then(data => setdata(data.Read));
    }, []);

     const filteredLevel= tapvalue==="all"? data : data.filter((item)=>{
    return item.level===tapvalue;
  })


  return (
    <div>
<div className="taps  grid   md:grid-cols-4 grid-cols-2  gap-5   md:w-[80%]  items-center  py-10  ">
  {tapsData.map((tap) => (
    <button key={tap.id} className={`tap transtiton-800 transform ${tapvalue===tap.value ? ' border-b-2 border-b-blue-500' : ''}`} onClick={() => settapvalue(tap.value)}>
      {tap.value}
    </button>
  ))}

</div>



<div className="grid md:grid-cols-3 grid-cols-1 gap-5">
  {filteredLevel&&filteredLevel.map((item)=>{
  return <div className='py-10 px-3 rounded-2xl shadow-2xl bg-[#FFFFFF] hover:bg-gray-100'>
        <div><img src={item.img} alt="Watch" /></div>
        <h2 className='pt-5 pb-10  border-b-gray-400'>{item.title}</h2>
        <div className='flex items-center justify-between'>
            <button className='bg-[#2B5AA4] rounded-2xl py-2 px-2  text-white flex items-center justify-center text-sm'>{item.subject}</button>  
            <button className='bg-[#82CC3A] rounded-2xl py-2 px-2  text-white flex items-center justify-center'>{item.level}</button>
        </div>
      
    </div>
})}
</div>
    </div>
  )
}

export default Read