import React from 'react';
import { useState } from 'react';

import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  //to specify whether the menu is toggled
  const [toggle, settoggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1?`mr-0`:`mr-10`}`}
          >
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/*the div below is for showing the menu on mobile devices*/}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/*settoggle is to specify whether the icon should show bars or X based on useState*/}
          <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={()=>settoggle((prev)=>!prev)} />
          
          {/*the div below is the sidebar card*/}
          <div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient top-20 absolute right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index)=>(
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1?`mr-0`:`mb-4`} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          </div>
          
      </div>

    </nav>
  )
}

export default Navbar