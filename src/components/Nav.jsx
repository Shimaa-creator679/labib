import React from 'react'
import logo from "../assets/logo.svg"
import lang from "../assets/languge.svg"

const Nav = () => {
  return (
<nav className='bg-[#2B5AA436] py-3 fixed top-0 left-0 w-full z-50 backdrop-blur-sm'>
    <div className="container  ">
        <div className='flex items-center justify-between '>
          <a href='#'>  <img src={logo} alt="Logo" className='w-[147px] md:w-[194px] '  />  </a>







<div className='flex items-center gap-10'>
<img src={lang}></img>
<button className='py-[17px] px-[37px] bg-[#E86627] rounded-[22px] text-white border border-b-[#F07D46] hidden md:flex'>login</button>
</div>
        </div>

    </div>
</nav>
  )
}

export default Nav