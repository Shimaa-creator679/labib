import React, { useEffect } from 'react'
import Title from '../sharedComponent/Title'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import Ad_Component from './Ad_Component';



const Advantage = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData= async()=>{
            const data= await fetch("/Advantages/AdData.json")
            const json= await data.json()
            setData(json.adData)
        }
        fetchData()
    },[])
  return (
    <div className='pb-40 bg-[#2b5aa4] pt-10'>
        <div className="container">
            <Title title={"Advantages of Using Our Platform"}/>

            <div className="slider w-[80%] mx-auto pt-20 rounded-2xl ">

           <Swiper
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
    
  }}
  modules={[Pagination]}
  className="mySwiper"
   breakpoints={{
    320: {   // 📱 موبايل صغير
      slidesPerView: 1,
    },
    640: {   // 📱 موبايل كبير / تابلت صغير
      slidesPerView: 2,
    },
    1024: {  // 💻 لابتوب
      slidesPerView: 3,
    },
    1280: {  // 🖥️ شاشة كبيرة
      slidesPerView: 4,
    },
  }}

>
  {data.map((item, index) => (
    <SwiperSlide key={index}>
      <Ad_Component 
        title={item.title} 
        content={item.content} 
        img={item.img} 
      />
    </SwiperSlide>
  ))}
</Swiper>

            </div>
        </div>
    </div>
  )
}

export default Advantage