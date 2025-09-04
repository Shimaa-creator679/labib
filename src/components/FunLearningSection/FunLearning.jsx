import React, { useEffect, useState } from 'react'
import Title from '../sharedComponent/Title'
import Fun_component from './Fun-component'
import Fun_component_2 from './Fun_component-2'

const FunLearning = () => {

  const[data,setdata]=useState([])

  useEffect( ()=>{
    const fetchData = async () => {
      const data = await fetch ("/FunData.json")
      const res = await data.json()
      setdata(res.funTools)
    }
    fetchData()
  },[])

  return (
    <div className='py-10'>
        <div className="container">
            <Title title="How Do We Make Learning Enjoyable?" />

            <div className='grid md:grid-cols-3 grid-cols-1  gap-20 py-40 px-10 md:px-0'>
              {data.map((item)=>{
                if(item.id===2){
                  return <Fun_component_2 key={item.id} image={item.image} title={item.title} content={item.content} count={item.count} />
                }
                else{
                  return <Fun_component key={item.id} image={item.image} title={item.title} content={item.content} count={item.count} />
                }
              })}
            </div>
        </div>
    </div>
  )
}

export default FunLearning