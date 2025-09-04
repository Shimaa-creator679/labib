import React from 'react'

const Ad_Component = ({title,content,img}) => {
  return (
    <div className='bg-white rounded-2xl py-5 px-5 h-auto'> 
    <div className='grid place-items-center'><img src={img} alt="Ad" className='w-1/2'/></div>
        
        <h2 className='text-center font-bold py-5 text-[#3E3E3E] text-l'>{title}</h2>
        <p className='text-sm '>{content}</p>
    </div>
  )
}

export default Ad_Component