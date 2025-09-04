import React, { useState } from 'react'
import img1 from "../../assets/info.png"
import Form from './Form';

const Contact = () => {

      const [open, setOpen] = useState(false)
  return (
    <div className='bg-[#EFF2F9] lg:h-[311px]'>
        <div className="container">
            <div className="flex   items-center justify-between py-10 gap-10 flex-col lg:flex-row">
           
                <div className="contact">
                    <h1 className='text-[#000000] font-bold text-xl'>Do you need more info?</h1>
                    <p className='py-5'>We are happy to provide you with any additional information you need!</p>
                    <button      onClick={() => setOpen(true)} className='bg-[#E86627] rounded-3xl py-3 px-5 flex  shadow-custom text-white  items-center text-center mt-10'>contact us</button>
                </div>

                     <div className="img  grid place-items-center">
                    <img src={img1} alt="" className='w-[80%] h-auto object-cover '/>
                </div>
            </div>
        </div>

        <Form open={open} setOpen={setOpen} />
    </div>
  )
}

export default Contact;

