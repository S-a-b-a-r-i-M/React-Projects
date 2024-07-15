import React from 'react'
import krLogo from '../assets/kevinRushLogo.png'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

function Navbar() {

  return (
    // items-center: Aligns flex items center in the cross axis
    <nav className='flex items-center justify-between p-6 mx-5 mb-14'>
        {/* flex-shrink-0: Prevents the flex item from shrinking */}
        <div className='flex flex-shrink-0'>
            <img src={krLogo} alt="KR Logo" width={45}/>
        </div>
        <div className='flex gap-x-4 text-xl md:text-2xl'>
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitterSquare />
        </div>
    </nav>
  )
}

export default Navbar