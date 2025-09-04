import React, {  useEffect, useState } from 'react'


const Watch = () => {

const[data,setdata]=useState([])

  const [selectedOption1, setSelectedOption1] = React.useState("all");
  const [selectedOption2, setSelectedOption2] = React.useState("all");

useEffect(() => {
  fetch("/resoursesData.json")
    .then(res => res.json())
    .then(data => setdata(data.Watch));
}, []);


  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
    const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };


  const filteredYears= selectedOption1==="all"? data : data.filter((item)=>{
    return item.category===selectedOption1;
  })



  const filteredSubjects= selectedOption2==="all"? filteredYears : filteredYears.filter((item)=>{
    return item.subject===selectedOption2;
  })




  return (
    
    <div>

      {/* taps */}
      <div className="selects py-10 flex items-center gap-10">

        <select onChange={handleOptionChange1} className='bg-[#F5F5F5] rounded-2xl py-2 px-3 shadow-2xl text-sm outline-none'>
           <option value="" disabled> scholar years</option>
          <option value="all">all</option>
          <option value="+3 years">+3 years</option>
          <option value="+9 years">+9 years</option>
           <option value="+12 years">+12 years</option>
            <option value="+15 years">+15 years</option>
        </select>
{/* المقرر الدراسي  */}

             <select onChange={handleOptionChange2} className='bg-[#F5F5F5] rounded-2xl py-2 px-3 shadow-2xl text-sm outline-none'>
                         <option value="" disabled> scholar subjects</option>
          <option value="all">all</option>
          <option value="arabic">arabic</option>
          <option value="science">science</option>
          <option value="maths">maths</option>

        </select>
      </div>

<div className="grid md:grid-cols-3 grid-cols-1 gap-5">
  {filteredYears&&filteredSubjects.map((item)=>{
  return <div className='py-10 px-3 rounded-2xl shadow-2xl bg-[#FFFFFF] hover:bg-gray-100'>
        <div><img src={item.img} alt="Watch" /></div>
        <h2 className='pt-5 pb-10  border-b-gray-400'>{item.title}</h2>
        <div className='flex items-center justify-between'>
            <button className='bg-[#2B5AA4] rounded-2xl py-2 px-2  text-white flex items-center justify-center text-sm'>{item.subject}</button>  
            <button className='bg-[#82CC3A] rounded-2xl py-2 px-2  text-white flex items-center justify-center'>{item.category}</button>
        </div>
      
    </div>
})}
</div>

 

    </div>
   
  )
}

export default Watch;