import React, { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const navIconHandler = (e) => {
      e.preventDefault()
      setToggleMenu(!toggleMenu)
  }
  return (
    <>
      <div className="hidden md:block sticky top-0">
        <ul className="flex bg-stone-100 cursor-pointer">
          <li className='mx-3 my-4 text-2xl text-slate-900 hover:text-slate-700 transition'>Test Portfolio</li>
          <li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Education</li>
          <li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Work Experience</li>
          <li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Portfolio</li>
        </ul>
      </div>

      <div className="md:hidden block sticky top-0">
        <div className='flex justify-between w-100 bg-stone-100 cursor-pointer'>
          <div className='mx-3 my-4 text-2xl text-slate-900 hover:text-slate-700 transition'>Test Portfolio</div>
            <svg
            onClick={navIconHandler}
            className="w-8 h-8 text-slate-900 my-4 mr-5"
            x-show="!showMenu"
            fill="none"
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke='currentColor'>
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
        </div>

        <div className={toggleMenu ? "" : "hidden"}>
          <div className='grid grid-cols-1 bg-stone-100 cursor-pointer'>
            <div className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Education</div>
            <div className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Work Experience</div>
            <div className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Portfolio</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar