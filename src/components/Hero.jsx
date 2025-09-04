import React from 'react'
import hero from "../assets/Frame (1).png"

const Hero = () => {
  return (
    <div className='pt-40  bg-gradient-to-b from-[#73C8F4] to-[#39F1FF] '>
     <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-20 py-10">
         <div>
<h1 className='font-[900] text-[#2B5AA4] text-3xl pb-5 '>Labeeb Platform</h1>
<p className='font-[700] text-2xl text-[#2B5AA4] md:w-1/2 text-center md:text-l '>“Enjoyable learning for a creative generation”</p>
<p className='font-[500] text-sm text-[#000000] pt-10'>Welcome to the leading learning platform, where fun meets knowledge to offer you a unique educational experience—with leveled books, animated lessons, educational games, interactive exercises and quizzes, and thoughtfully designed worksheets.</p>


           </div >
         <div className=''>
                <img src={hero} alt="Hero" />
         </div>

        </div>
<div className='flex items-center justify-center md:inline-block '>
   <button className='bg-[#2B5AA4] rounded-[22px] shadow-lg mt-10 mb-10  text-white py-[17px] px-[37px] border-b border-2-[#C9DCFC] '>
            For schools
        </button>  
</div>
       
     </div>
    </div>
  )
}

export default Hero