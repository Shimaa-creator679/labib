import React from 'react'

const Fun_component = ({title,content,count,image}) => {
  return (
    <div className='flex flex-row md:flex-col gap-5'>
        <div className='grid place-items-center'>
              <img src={image} alt="" className='md:w-1/2 object-cover' />
        </div>

      <div>
         <h2 className='text-center text-[#333A95] font-bold py-5'>{title}</h2>
    <p className='text-center'>{content}</p>
  <div className='text-center'>
         <button className='bg-[#2B5AA4] text-center p-[12.6px] rounded-[12.06px] mt-5 text-white'>{count}</button>  
    </div>
      </div>
       
    
  
     
    </div>
  )
}

export default Fun_component