import React from 'react'

const Resourse_tap = ({content,icon,setstate,state}) => {
  return (

         <button onClick={() => setstate(content)} className={`flex items-center justify-between rounded-xl py-3  px-3 border border-2-[#000000] ${state===content?"bg-[#E86627] text-white":""}`}> 
         <span className='text-l'>
            {content} </span>
               <img src={icon} alt={content} className='w-[20px] h-[20px]' />
             </button> 
        
           



  )
}

export default Resourse_tap