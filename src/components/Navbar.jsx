import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=' flex justify-around md:justify-normal md:gap-40 mt-5 md:mt-0'>
      <Link to={"/"}>
        <h2 className='text-3xl font-[800] font-Ojuju md:m-[20px] text-[#001219]'>Stay-Fit</h2>
      </Link>

      <div className=' flex gap-5 items-center'>
        <Link to={"/"} className='font-Ojuju font-[750] text-xl border-b-4 border-[#ffd60a]'> Home </Link>
        <a href="#exercises" className='font-Ojuju font-[750] text-xl text-[#001219]'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar