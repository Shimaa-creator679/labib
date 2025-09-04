import React from 'react'
import logo from "../assets/logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer pb-10'>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 pt-10 px-10 justify-between items-center text-center">
            <div className="one space-y-3">

<div className='logo grid place-items-center'>
    <a><img src={logo} alt="" /></a>
</div>

<p>It is a smart platform that helps students and teachers access diverse learning resources.

</p>
<div className="links grid place-items-center">
    <ul className='flex items-center gap-5 text-2xl mt-3'>
        <li><a href="#"><FaFacebook /></a></li>
        <li><a href="#"><FaInstagramSquare /></a></li>
        <li><a href="#"><FaLinkedin /></a></li>
        <li><a href="#"><FaYoutube /></a></li>
    </ul>
</div>
            </div>
            <div className="tow space-y-3">
                <h1 className='font-bold'>Related Links</h1>
               <p><a href="#">Privacy Policy</a></p>
                <p><a href="#">Terms and Conditions</a></p>
            </div>
            <div className="three space-y-3">
                <h1 className='font-bold'>Contact us</h1>
                <a href="mailto:info@labibedu.com">info@labibedu.com</a>
                <p>+962 799 926 008</p>
            </div>

        </div>

    </div>
  )
}

export default Footer